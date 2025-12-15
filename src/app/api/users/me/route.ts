// src/app/api/users/me/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { v2 as cloudinary } from 'cloudinary';
import { jwtVerify } from 'jose';

// --- CONFIGURATION ---
const DB_NAME = process.env.MONGODB_DB || 'test-db'; // Updated to use Env Var
const USERS_COLLECTION = 'users';
const COOKIE_NAME = 'jwt-token'; // Ensure this matches your login cookie name
const SECRET_KEY = process.env.JWT_SECRET;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface JwtPayload {
  userId: string;
  email: string;
}

// --- HELPER: Verify JWT ---
async function getJwtPayload(req: NextRequest): Promise<JwtPayload | null> {
  const cookie = req.cookies.get(COOKIE_NAME);
  if (!cookie?.value) return null;
  
  const token = cookie.value;
  
  if (!SECRET_KEY) {
    console.error('JWT_SECRET is not defined in environment variables');
    return null;
  }

  try {
    const secret = new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as JwtPayload;
  } catch (error) {
    console.warn("JWT verification failed:", error);
    return null; 
  }
}

// --- GET: Fetch User ---
export async function GET(req: NextRequest) {
  try {
    const payload = await getJwtPayload(req);
    if (!payload) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const user = await db.collection(USERS_COLLECTION).findOne(
      { _id: new ObjectId(payload.userId) },
      { projection: { password: 0 } }
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// --- PATCH: Update Profile & Upload Image ---
export async function PATCH(req: NextRequest) {
  try {
    // 1. Authenticate
    const payload = await getJwtPayload(req);
    if (!payload) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse FormData
    const formData = await req.formData();
    const name = formData.get('name')?.toString();
    const organization = formData.get('organization')?.toString();
    const passportFile = formData.get('passport') as File | null;

    if (!name && !organization && !passportFile) {
      return NextResponse.json({ message: 'No changes provided' }, { status: 400 });
    }

    // 3. Prepare Update Data
    const updateData: { [key: string]: any } = {};
    if (name) updateData.name = name;
    if (organization) updateData.organization = organization;

    // 4. Handle Cloudinary Upload
    if (passportFile) {
      // Basic validation
      if (!passportFile.type.startsWith('image/')) {
        return NextResponse.json({ message: 'File must be an image' }, { status: 400 });
      }

      const bytes = await passportFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload to Cloudinary
      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: 'gifon_passports',
            resource_type: 'image',
            public_id: `user_${payload.userId}`,
            overwrite: true,
            transformation: [{ width: 400, height: 400, crop: "fill" }] // Optional: Resize to square
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      updateData.passportUrl = uploadResult.secure_url;
    }

    // 5. Update Database
    const client = await clientPromise;
    const result = await client.db(DB_NAME).collection(USERS_COLLECTION).findOneAndUpdate(
      { _id: new ObjectId(payload.userId) },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    // FIX: Handle different MongoDB Driver versions (some return { value: doc }, some return doc)
    const updatedUser = (result && (result as any).value) ? (result as any).value : result;

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // 6. Return the updated user so Frontend can update localStorage
    return NextResponse.json(
      { message: 'Profile updated successfully', user: updatedUser },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('Error in PATCH /api/users/me:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Server Error' }, 
      { status: 500 }
    );
  }
}