import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const DB_NAME = process.env.MONGODB_DB || 'test-db';

export async function POST(req: NextRequest) {
  try {
    const { applicationId, mentorName, mentorId } = await req.json();

    if (!applicationId || !mentorName) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    // 1. Attempt to find in Applications or Users
    // NOTE: In Option 2, the 'applicationId' sent from the Mentor Requests tab 
    // is actually the User's _id.
    const objId = new ObjectId(applicationId);

    // 2. Prepare the mentor data object
    const mentorData = {
        id: mentorId,
        name: mentorName,
        assignedAt: new Date()
    };

    // 3. Update the User Document
    // We update the mentor AND set mentorRequested to false to clear the "notification"
    const userUpdateResult = await db.collection('users').updateOne(
      { _id: objId }, 
      { 
        $set: { 
          assignedMentor: mentorData,
          mentorRequested: false // Clear the request flag
        } 
      }
    );

    // 4. Update the Application Document (Optional - for history)
    // If you keep the original application record, we sync the mentor there too.
    const user = await db.collection('users').findOne({ _id: objId });
    if (user?.email) {
        await db.collection('applications').updateOne(
            { $or: [{ email: user.email }, { companyEmail: user.email }, { repEmail: user.email }] },
            { $set: { assignedMentor: mentorData } }
        );
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