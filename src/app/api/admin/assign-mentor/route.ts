import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { getSession } from '@/lib/auth';

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

export async function POST(req: NextRequest) {
  // 1. SECURITY CHECK
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { applicationId, mentorName, mentorId } = await req.json();

    if (!applicationId || !mentorName) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    // 2. Prepare the mentor data object
    const mentorData = {
        id: mentorId,
        name: mentorName,
        assignedAt: new Date().toISOString()
    };

    // 3. Update the Unified User Document
    // We target the 'users' collection exclusively. 
    const result = await db.collection(USERS_COLLECTION).updateOne(
      { _id: new ObjectId(applicationId) }, 
      { 
        $set: { 
          assignedMentor: mentorData,
          mentorRequested: false // Clear the request flag so it leaves the Mentor Requests tab
        } 
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
        message: 'Mentor assigned and request cleared successfully',
        status: 'success' 
    }, { status: 200 });

  } catch (error) {
    console.error("Assign Mentor Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}