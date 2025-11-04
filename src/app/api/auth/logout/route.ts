// src/app/api/auth/logout/route.ts

import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

const COOKIE_NAME = 'jwt-token';

export async function POST() {
  // Create a cookie that is expired.
  // This is the standard way to "delete" a cookie.
  const cookie = serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1, // Set max-age to a past date
    path: '/',
    sameSite: 'strict',
  });

  return NextResponse.json(
    { message: 'Logout successful' },
    {
      status: 200,
      headers: {
        'Set-Cookie': cookie,
      },
    }
  );
}