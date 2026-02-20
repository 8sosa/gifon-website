import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { getSession } from '@/lib/auth'; // Consistency: Add auth check

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

export async function POST(req: NextRequest) {
    // 1. SECURITY CHECK
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
      const { userId } = await req.json();

      if (!userId || userId.length !== 24) {
        return NextResponse.json({ message: 'Invalid User ID format' }, { status: 400 });
      }

      const client = await clientPromise;
      const db = client.db(DB_NAME);
  
      // 2. Find the user
      const user = await db.collection(USERS_COLLECTION).findOne({ 
        _id: new ObjectId(userId) 
      });
      
      if (!user || !user.requestedCategory) {
        return NextResponse.json({ message: 'No pending upgrade found' }, { status: 404 });
      }
  
      // 3. Finalize the upgrade
      // We move requestedCategory to category and wipe the request flags
      await db.collection(USERS_COLLECTION).updateOne(
        { _id: new ObjectId(userId) },
        { 
          $set: { 
            category: user.requestedCategory,
            lastUpgradedAt: new Date().toISOString()
          },
          $unset: { 
            pendingUpgrade: "", 
            requestedCategory: "" 
          }
        }
      );

      // Optional: You could add a transporter.sendMail here 
      // to notify them their tier has been upgraded!
  
      return NextResponse.json({ message: 'Upgrade successful' });
    } catch (error) {
      console.error("Upgrade Error:", error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}