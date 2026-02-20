import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 1. Update users who have 'registrationStatus' but missing 'status'
    const res1 = await usersCollection.updateMany(
      { status: { $exists: false }, registrationStatus: { $exists: true } },
      [
        { $set: { status: "$registrationStatus" } }
      ]
    );

    // 2. Update users who have 'status' but missing 'registrationStatus'
    const res2 = await usersCollection.updateMany(
      { registrationStatus: { $exists: false }, status: { $exists: true } },
      [
        { $set: { registrationStatus: "$status" } }
      ]
    );

    // 3. Ensure "pending" users have both fields explicitly
    const res3 = await usersCollection.updateMany(
      { 
        registrationStatus: { $exists: false }, 
        status: { $exists: false } 
      },
      { 
        $set: { 
          registrationStatus: 'pending', 
          status: 'pending' 
        } 
      }
    );

    return NextResponse.json({
      message: "Migration Complete",
      syncedRegistrationStatus: res1.modifiedCount,
      syncedLegacyStatus: res2.modifiedCount,
      initializedPending: res3.modifiedCount
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}