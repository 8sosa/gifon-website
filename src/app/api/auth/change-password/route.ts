// src/app/api/auth/change-password/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // <-- 1. Use jose
import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const DB_NAME = 'test-db'; // !! Make sure this is right
const USERS_COLLECTION = 'users';
const COOKIE_NAME = 'jwt-token'; // <-- 2. Define cookie name
const SECRET_KEY = process.env.JWT_SECRET;

interface JwtPayload {
  userId: string;
}

export async function POST(req: NextRequest) {
  try {
    // --- 3. REPLACED AUTH LOGIC ---
    // Read the cookie from the request
    const cookie = req.cookies.get(COOKIE_NAME);
    if (!cookie?.value) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    if (!SECRET_KEY) {
      throw new Error('JWT_SECRET is not set');
    }

    let payload: JwtPayload;
    try {
      // Verify the cookie using 'jose'
      const secret = new TextEncoder().encode(SECRET_KEY);
      const { payload: verifiedPayload } = await jwtVerify(cookie.value, secret);
      payload = verifiedPayload as unknown as JwtPayload;
      console.log(payload)
    } catch {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }
    // --- END OF AUTH LOGIC ---

    // 2. Get passwords from body (This part is fine)
    const { current, newPassword } = await req.json();
    if (!current || !newPassword) {
      return NextResponse.json(
        { message: 'Current and new passwords are required' },
        { status: 400 }
      );
    }
    if (newPassword.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // 3. Get user from DB (This part is fine)
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    const user = await usersCollection.findOne({ _id: new ObjectId(payload.userId) });
    console.log(payload.userId)
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // 4. CRITICAL: Verify the *current* password (This part is fine)
    const isPasswordValid = await bcrypt.compare(current, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Incorrect current password' },
        { status: 400 } 
      );
    }

    // 5. Hash and update the *new* password (This part is fine)
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    await usersCollection.updateOne(
      { _id: new ObjectId(payload.userId) },
      { $set: { password: newHashedPassword } }
    );

    // 6. Send success (This part is fine)
    return NextResponse.json(
      { message: 'Password changed successfully' },
      { status: 200 }
    );
  } catch (error: unknown) { // (This catch block is perfect)
    console.error(error);
    
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message; 
    }
  
    if (error instanceof Error && error.name === 'BSONError') {
      return NextResponse.json(
        { message: 'Invalid Application ID format' },
        { status: 400 }
      );
    }
  
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}