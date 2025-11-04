// src/app/api/admin/applications/approved/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'test-db'; // !! Change this
const APPS_COLLECTION = 'applications';

export async function GET() {
  // -----------------------------------------------------------------
  //   !! SECURITY !!
  //   This route is protected by your middleware's 'matcher'
  //   (e.g., '/admin/:path*'), so we're good to go.
  // -----------------------------------------------------------------
  // console.warn(
  //   'SECURITY WARNING: The /api/admin/applications/approved endpoint is not protected.'
  // );

  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(APPS_COLLECTION);

    // 1. Find all applications where status is 'approved'
    const approvedApplications = await applicationsCollection
      .find({
        status: 'approved',
      })
      .sort({ approvedAt: -1 }) // Show newest approved first
      .toArray();

    // 2. Send the data back
    return NextResponse.json(
      { 
        message: 'Approved applications fetched successfully',
        applications: approvedApplications 
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}