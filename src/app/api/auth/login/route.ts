// src/app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb'; // Import our connection utility

const DB_NAME = 'test-db'; // Change this!
const COLLECTION_NAME = 'users';

export async function POST(req: NextRequest) {
  try {
    // 1. Get DB client and collection
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(COLLECTION_NAME);

    // 2. Parse body
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 3. Find the user
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // 4. Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // 5. Get JWT secret
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not set');
      return NextResponse.json(
        { message: 'Internal server configuration error' },
        { status: 500 }
      );
    }

    // 6. Create JWT payload
    const payload = {
      userId: user._id.toString(), // Convert ObjectId to string
      email: user.email,
    };

    // 7. Sign the token
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h',
    });

    // 8. Send the token back
    return NextResponse.json(
      { message: 'Login successful', token: token },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}