import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getSession } from '@/lib/auth'; // Ensure only admins see this

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

export async function GET(req: NextRequest) {
  // 1. SECURITY CHECK
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    // 2. Fetch Upgrade Requests
    // We look for users who have the 'pendingUpgrade' flag set to true.
    const upgrades = await db.collection(USERS_COLLECTION)
      .find({ pendingUpgrade: true })
      .sort({ upgradeRequestedAt: -1 })
      .toArray();

    return NextResponse.json({ upgrades }, { status: 200 });
  } catch (error) {
    console.error("GET Upgrades Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}