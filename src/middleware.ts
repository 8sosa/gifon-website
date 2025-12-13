// src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, JWTPayload } from 'jose';

const COOKIE_NAME = 'jwt-token';
const SECRET_KEY = process.env.JWT_SECRET;

// 1. Define your protected routes
const protectedRoutes = [
  '/dashboard',
  '/dashboard/:path*',
  '/admin',           // Protects the admin UI pages
  '/admin/:path*',    // Protects sub-pages
  '/api/admin/:path*' // <--- NEW: Protects the Admin API endpoints
];

// 2. Define your public-only routes
const publicOnlyRoutes = [
  '/login',
  '/forgot-password',
  '/reset-password',
];

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

  // 4. Decode the token
  let payload: AppJwtPayload | null = null;
  if (token && SECRET_KEY) {
    try {
      const secret = new TextEncoder().encode(SECRET_KEY);
      const { payload: verifiedPayload } = await jwtVerify(token, secret);
      payload = verifiedPayload as unknown as AppJwtPayload;
    } catch (err) {
      console.warn("Middleware verification error:", err);
    }
  }

  const isLoggedIn = !!payload;

  // 5. Handle protected routes (General Access)
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route.replace('/:path*', '')));
  
  if (isProtectedRoute && !isLoggedIn) {
    // SECURITY FIX: If it's an API call, return 401 JSON instead of redirecting
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    // Otherwise redirect to login
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 6. Handle Admin-Only routes (Role Check)
  // We check if the path starts with /admin OR /api/admin
  if ((pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) && isLoggedIn) {
    if (payload?.role !== 'admin') {
      
      // SECURITY FIX: If it's an API call, return 403 JSON instead of redirecting
      if (pathname.startsWith('/api')) {
        return NextResponse.json({ message: 'Forbidden: Admin access required' }, { status: 403 });
      }

      // Otherwise redirect to homepage
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // 7. Handle public-only routes
  const isPublicOnlyRoute = publicOnlyRoutes.some((route) => pathname.startsWith(route));
  if (isPublicOnlyRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

// 9. The Config
export const config = {
  matcher: [
    // SECURITY FIX: removed 'api' from the exclusion list below.
    // Now middleware runs on API routes too.
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};