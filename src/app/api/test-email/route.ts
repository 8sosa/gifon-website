// src/app/api/test-email/route.ts

import { NextResponse } from 'next/server';
import { transporter, emailFrom } from '@/lib/nodemailer';

// --- !!! IMPORTANT !!! ---
// --- Change this to your personal email address for testing ---
const TEST_EMAIL_TO = 'kingbrazy69@gmail.com';
// --- ---

// FIX 1: 'req' is now '_req'
export async function GET() {
  // Check if Nodemailer is configured at all
  if (!transporter.options) {
    return NextResponse.json(
      { message: 'Email server is not configured. Check .env.local variables.' },
      { status: 500 }
    );
  }

  try {
    console.log('Attempting to send test email to:', TEST_EMAIL_TO);
    
    // Send the email
    await transporter.sendMail({
      from: emailFrom,
      to: TEST_EMAIL_TO,
      subject: 'Nodemailer Test Email 🚀',
      html: `
        <h1>Hello from Next.js!</h1>
        <p>If you are reading this, your Nodemailer setup with Google SMTP is working correctly.</p>
        <p>Good job.</p>
      `,
    });

    console.log('Test email sent successfully.');

    return NextResponse.json(
      { message: 'Test email sent successfully! Check your inbox.' },
      { status: 200 }
    );
  } catch (error: unknown) { // FIX 2: Catch as 'unknown'
    console.error('Failed to send test email:', error);
    
    let errorMessage = 'Failed to send test email.';
    let authError: string | null = null;

    // FIX 2 (Continued): Check the error type
    if (error instanceof Error) {
      errorMessage = error.message;
      // Check for the specific auth error property
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyError = error as any;
      if (anyError.responseCode === 535) {
        authError = 'Authentication failed. Check user/pass (App Password).';
      }
    }

    return NextResponse.json(
      { 
        message: errorMessage, 
        error: errorMessage, // Send the message as the error
        authError: authError
      },
      { status: 500 }
    );
  }
}