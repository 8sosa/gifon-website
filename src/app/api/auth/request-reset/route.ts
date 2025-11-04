// src/app/api/auth/request-reset/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { transporter, emailFrom } from '@/lib/nodemailer';
import crypto from 'crypto'; // Built-in Node.js module

const DB_NAME = 'test-db'; // !! Change this
const USERS_COLLECTION = 'users';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 1. Find the user
    const user = await usersCollection.findOne({ email });

    // 2. !! SECURITY !!
    // If no user, send a 200 OK response anyway to prevent user enumeration.
    if (!user) {
      console.log(`Password reset attempt for non-existent email: ${email}`);
      return NextResponse.json(
        { message: 'If an account with that email exists, a reset link has been sent.' },
        { status: 200 }
      );
    }

    // 3. Generate a secure, random token (plaintext)
    const resetToken = crypto.randomBytes(32).toString('hex');

    // 4. Hash the token (this is what we'll store in the DB)
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // 5. Set an expiry time (e.g., 15 minutes from now)
    const passwordResetExpires = new Date(Date.now() + 15 * 60 * 1000);

    // 6. Update the user document in the database
    await usersCollection.updateOne(
      { _id: user._id },
      {
        $set: {
          passwordResetToken,
          passwordResetExpires,
        },
      }
    );

    // 7. Create the reset URL (frontend link)
    // !! CHANGE 'https://gifon.netlify.app' to your actual website domain
    const resetUrl = `https://gifon.netlify.app/reset-password?token=${resetToken}`;

    // 8. Send the email
    try {
      await transporter.sendMail({
        from: emailFrom,
        to: user.email,
        subject: 'Your Password Reset Link',
        html: `
          <h1>You requested a password reset</h1>
          <p>Please click the link below to set a new password. This link will expire in 15 minutes.</p>
          <a href="${resetUrl}" target="_blank">Reset Your Password</a>
          <br>
          <p>If you did not request this, please ignore this email.</p>
        `,
      });
    } catch (emailError) {
      console.error('Email failed to send:', emailError);
      // Even if email fails, we don't want to leak info.
      // But we should return a server error.
      return NextResponse.json(
        { message: 'Error sending email. Please try again later.' },
        { status: 500 }
      );
    }

    // 9. Send the generic success response
    return NextResponse.json(
      { message: 'If an account with that email exists, a reset link has been sent.' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}