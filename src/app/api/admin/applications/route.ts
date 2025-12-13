import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getSession } from '@/lib/auth'; // Import our new auth helper

const DB_NAME = 'test-db';
const APPS_COLLECTION = 'applications';

export async function GET(req: NextRequest) {
  // 1. SECURITY CHECK: Authenticate the user before anything else
  const session = await getSession();

  // If no session exists, or the user is not an admin, block the request immediately.
  if (!session || session.role !== 'admin') {
    return NextResponse.json(
      { message: 'Unauthorized: Admin access required.' },
      { status: 401 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(APPS_COLLECTION);

    // 2. Fetch Data (Only runs if the check above passes)
    const pendingApplications = await applicationsCollection
      .find({
        status: 'pending',
      })
      .sort({ submittedAt: 1 }) // Show oldest first
      .toArray();

    return NextResponse.json(
      { 
        message: 'Pending applications fetched successfully',
        applications: pendingApplications 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}