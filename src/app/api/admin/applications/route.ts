// src/app/api/admin/applications/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'test-db';
const APPS_COLLECTION = 'applications';

export async function GET(req: NextRequest) {
    if (!req.method || req.method.toUpperCase() !== 'GET') {
        return NextResponse.json(
        { message: 'Method Not Allowed' },
        { status: 405 }
        );
    }
  // -----------------------------------------------------------------
  //   !! CRITICAL SECURITY !!
  //
  //   You MUST protect this endpoint. Anyone who can call this
  //   can see all your applicants' personal data.
  //
  //   The real implementation would be:
  //   1. Get the 'Authorization' header (the admin's JWT).
  //   2. Verify the token (using jwt.verify).
  //   3. Check if the user ID in the token has an 'admin' role.
  //   4. If not, return a 403 Forbidden.
  //
  //   For now, we'll just log a warning.
  // -----------------------------------------------------------------
  console.warn(
    'SECURITY WARNING: The /api/admin/applications endpoint is not protected.'
  );

  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(APPS_COLLECTION);

    // 1. Find all applications where status is 'pending'
    const pendingApplications = await applicationsCollection
      .find({
        status: 'pending',
      })
      .sort({ submittedAt: 1 }) // Show oldest first
      .toArray();

    // 2. Send the data back
    return NextResponse.json(
      { 
        message: 'Pending applications fetched successfully',
        applications: pendingApplications 
      },
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