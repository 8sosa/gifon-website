// src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, JWTPayload } from 'jose'; // Import JWTPayload

const COOKIE_NAME = 'jwt-token';
const SECRET_KEY = process.env.JWT_SECRET;

// 1. Define your protected routes
const protectedRoutes = [
  '/dashboard',
  '/dashboard/:path*',
  '/admin/:path*',
];

// 2. Define your public-only routes
const publicOnlyRoutes = [
  '/login',
  '/forgot-password',
  '/reset-password',
];

// --- FIX 1: Define the shape of our token's payload ---
// This tells TypeScript what to expect inside the cookie.
interface AppJwtPayload extends JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // 3. Get the cookie
  const cookie = req.cookies.get(COOKIE_NAME);
  const token = cookie?.value;

  // 4. Decode the token (if it exists)
  // --- FIX 2: Replaced 'any' with our specific 'AppJwtPayload' interface ---
  let payload: AppJwtPayload | null = null;
  if (token && SECRET_KEY) {
    try {
      const secret = new TextEncoder().encode(SECRET_KEY);
      const { payload: verifiedPayload } = await jwtVerify(token, secret);
      
      // --- FIX 3: Cast to 'unknown' first, then to our type ---
      // This satisfies the linter and confirms we know what we're doing.
      payload = verifiedPayload as unknown as AppJwtPayload;
    } catch (err) {
      // Token is invalid/expired, treat as logged out
      console.warn("Middleware verification error:", err);
      // We'll just let this fall through, payload will be null
    }
  }

  const isLoggedIn = !!payload;

  // 5. Handle protected routes
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  if (isProtectedRoute && !isLoggedIn) {
    // Not logged in and trying to access a protected page
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 6. Handle admin-only routes
  if (pathname.startsWith('/admin') && isLoggedIn) {
    // This check is now fully type-safe!
    if (payload?.role !== 'admin') {
      // Logged in, but not an admin
      return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage
    }
  }

  // 7. Handle public-only routes
  const isPublicOnlyRoute = publicOnlyRoutes.some((route) => pathname.startsWith(route));
  if (isPublicOnlyRoute && isLoggedIn) {
    // Logged in, but trying to see the /login page
    return NextResponse.redirect(new URL('/dashboard', req.url)); // Redirect to their dashboard
  }

  // 8. All other cases (public pages, etc.)
  return NextResponse.next();
}

// 9. The new, recommended config
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};