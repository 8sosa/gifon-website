// src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // <-- The new library

const COOKIE_NAME = 'jwt-token';
const SECRET_KEY = process.env.JWT_SECRET;

// 1. Define the routes you want to protect
const protectedRoutes = [
  '/dashboard',
  '/settings',
  '/admin/:path*',
];
// You can also use wildcards: '/admin/:path*'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // 2. Check if the route is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  
  if (!isProtectedRoute) {
    return NextResponse.next(); // Not protected? Carry on.
  }

  // 3. Get the cookie
  const cookie = req.cookies.get(COOKIE_NAME);
  if (!cookie?.value) {
    // 4. If no cookie, redirect to login
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('next', pathname); // So we can redirect back
    return NextResponse.redirect(loginUrl);
  }

  // 5. Verify the cookie
  try {
    if (!SECRET_KEY) {
      throw new Error("JWT_SECRET is not set");
    }
    
    // We need to encode the secret
    const secret = new TextEncoder().encode(SECRET_KEY);
    
    // This is the 'jose' way of verifying
    const { payload } = await jwtVerify(cookie.value, secret);

    // --- (Optional) Admin Role Check ---
    if (pathname.startsWith('/admin') && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    // ------------------------------------

    // 6. All good. Let the user proceed.
    return NextResponse.next();

  } catch (err) {
    // 7. Token is invalid or expired
    console.warn("Middleware verification error:", err);
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('error', 'session_expired');
    return NextResponse.redirect(loginUrl);
  }
}

// 8. This "matcher" is more efficient than checking every route
// We just list the route *patterns* we want this file to run on.
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/settings/:path*',
    '/admin/:path*',
  ],
};