import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'test-db'; 
const USERS_COLLECTION = 'users'; // Changed from applications

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 1. Find all users who are active members
    // We check for 'active' status or the legacy 'approved' status 
    // to ensure no one was lost during the migration.
    const approvedMembers = await usersCollection
      .find({
        $or: [
          { registrationStatus: 'active' },
          { status: 'approved' }
        ]
      })
      .sort({ approvedAt: -1, createdAt: -1 }) 
      .toArray();

    return NextResponse.json(
      { 
        message: 'Approved members fetched successfully',
        applications: approvedMembers // Keeping the key as 'applications' so your frontend doesn't break
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}