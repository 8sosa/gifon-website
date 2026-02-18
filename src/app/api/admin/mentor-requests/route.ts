import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'test-db');
    
    // Fetch users who specifically requested a mentor
    const users = await db.collection('users').find({
      mentorRequested: true
    }).sort({ mentorRequestedAt: -1 }).toArray();

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}