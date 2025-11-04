// src/app/api/users/me/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // <-- Use jose, not jsonwebtoken
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const DB_NAME = 'test-db'; // !! Change this
const USERS_COLLECTION = 'users';
const COOKIE_NAME = 'jwt-token';
const SECRET_KEY = process.env.JWT_SECRET;

interface JwtPayload {
  userId: string;
  email: string;
}

// --- NEW HELPER ---
// This helper reads the cookie and verifies it
async function getJwtPayload(req: NextRequest): Promise<JwtPayload | null> {
  const cookie = req.cookies.get(COOKIE_NAME);
  if (!cookie?.value) {
    return null;
  }
  
  const token = cookie.value;
  
  if (!SECRET_KEY) {
    throw new Error('JWT_SECRET is not set');
  }

  try {
    const secret = new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as JwtPayload;
    } catch (error) {
    console.warn("JWT verification failed in /api/users/me:", error);
    return null; // Invalid or expired token
  }
}

// --- UPDATED GET FUNCTION ---
export async function GET(req: NextRequest) {
  try {
    const payload = await getJwtPayload(req);
    if (!payload) {
      return NextResponse.json(
        { message: 'Invalid or missing token' },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    const user = await usersCollection.findOne(
      { _id: new ObjectId(payload.userId) },
      { projection: { password: 0 } } // NEVER send the password
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error in GET /api/users/me:', error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message;
      if (error.name === 'BSONError') {
        errorMessage = 'Invalid ID format';
        return NextResponse.json({ message: errorMessage }, { status: 400 });
      }
    }
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}

// --- UPDATED PATCH FUNCTION ---
export async function PATCH(req: NextRequest) {
  try {
    const payload = await getJwtPayload(req);
    if (!payload) {
      return NextResponse.json(
        { message: 'Invalid or missing token' },
        { status: 401 }
      );
    }

    const { name, organization } = await req.json();
    if (!name && !organization) {
      return NextResponse.json(
        { message: 'No update fields provided' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    const updateData: { [key: string]: string } = {};
    if (name) updateData.name = name;
    if (organization) updateData.organization = organization;

    const result = await usersCollection.updateOne(
      { _id: new ObjectId(payload.userId) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // --- IMPORTANT ---
    // The user's profile is updated in the DB, but the
    // localStorage 'user' object is now stale.
    // We'll fix this in the /settings page later by returning the *new* user.
    // For now, this is fine.

    return NextResponse.json(
      { message: 'Profile updated successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error in PATCH /api/users/me:', error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message;
      if (error.name === 'BSONError') {
        errorMessage = 'Invalid ID format';
        return NextResponse.json({ message: errorMessage }, { status: 400 });
      }
    }
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}