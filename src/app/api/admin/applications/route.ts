import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getSession } from '@/lib/auth'; 

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users'; // Changed from applications

export async function GET(req: NextRequest) {
  // 1. SECURITY CHECK
  const session = await getSession();

  if (!session || session.role !== 'admin') {
    return NextResponse.json(
      { message: 'Unauthorized: Admin access required.' },
      { status: 401 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 2. Fetch Pending Users
    // We look for users who are in the 'pending' stage of registration.
    // We also exclude anyone who is an 'active' user just requesting an upgrade
    // to keep this tab focused only on new sign-ups.
    const pendingApplications = await usersCollection
      .find({
        registrationStatus: 'pending',
        pendingUpgrade: { $ne: true } // Don't show upgrade requests here
      })
      .sort({ createdAt: 1 }) // Oldest first so they don't wait too long
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