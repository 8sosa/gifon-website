// src/app/api/auth/change-password/route.ts

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

interface JwtPayload {
  userId: string;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Get token and verify user
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not set');

    let payload;
    try {
      payload = jwt.verify(token, secret) as JwtPayload;
    } catch {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }

    // 2. Get passwords from body
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

    // 3. Get user from DB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    const user = await usersCollection.findOne({ _id: new ObjectId(payload.userId) });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // 4. CRITICAL: Verify the *current* password
    const isPasswordValid = await bcrypt.compare(current, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Incorrect current password' },
        { status: 400 } // Use 400, not 401, as they are *authenticated* but the data is bad
      );
    }

    // 5. Hash and update the *new* password
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    await usersCollection.updateOne(
      { _id: new ObjectId(payload.userId) },
      { $set: { password: newHashedPassword } }
    );

    // 6. Send success
    return NextResponse.json(
      { message: 'Password changed successfully' },
      { status: 200 }
    );
  } catch (error: unknown) { // <--- Step 1: Catch as 'unknown'
    console.error(error);
    
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message; // More specific error
    }
  
    // Handle specific BSON/Mongo errors if you want, like in the 'approve' route
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