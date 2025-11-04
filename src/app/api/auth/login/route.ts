// src/app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb'; // Import our connection utility
import { serialize } from 'cookie';

const DB_NAME = 'test-db'; // Change this!
const COLLECTION_NAME = 'users';
const COOKIE_NAME = 'jwt-token';

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
      role: user.role || 'user',
    };

    // 7. Sign the token
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h',
    });

    const cookie = serialize(COOKIE_NAME, token, {
      httpOnly: true, // Prevents client-side JS from accessing it
      secure: process.env.NODE_ENV === 'production', // Use 'secure' in production
      maxAge: 60 * 60, // 1 hour in seconds
      path: '/', // Make it available site-wide
      sameSite: 'strict', // Protects against CSRF
    });

    // --- 9. NEW: Return user data (WITHOUT password) and set the cookie ---
    
    // We can't just send the 'user' object, it has the hash.
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      organization: user.organization,
      category: user.category,
      role: user.role || 'user'
    };

    // 10. Send the token back
    return NextResponse.json(
      { message: 'Login successful', user: userResponse },
      {
        status: 200,
        headers: {
          'Set-Cookie': cookie, // Set the cookie in the response header
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}