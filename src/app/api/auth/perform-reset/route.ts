// src/app/api/auth/perform-reset/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

const DB_NAME = 'test-db'; // !! Change this
const USERS_COLLECTION = 'users';

export async function POST(req: NextRequest) {
  try {
    const { token, newPassword } = await req.json();

    // 1. Validate input
    if (!token || !newPassword) {
      return NextResponse.json(
        { message: 'Token and new password are required' },
        { status: 400 }
      );
    }
    if (newPassword.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // 2. Hash the incoming plaintext token
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 3. Find the user by the hashed token AND ensure it's not expired
    const user = await usersCollection.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: new Date() }, // Check if expiry is in the future
    });

    // 4. If no user, the token is invalid or expired
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid or expired password reset token' },
        { status: 400 }
      );
    }

    // 5. Hash the new password
    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    // 6. Update the user's password and, CRITICALLY, remove the reset token
    await usersCollection.updateOne(
      { _id: user._id },
      {
        $set: {
          password: newHashedPassword,
        },
        $unset: { // Invalidate the token so it can't be used again
          passwordResetToken: "",
          passwordResetExpires: "",
        },
      }
    );

    // 7. Send success response
    return NextResponse.json(
      { message: 'Password reset successful. You can now log in.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}