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

    // 1. Fetch the application first to get the user's email
    // We need to retrieve the email to know which User document to update
    const application = await db.collection('applications').findOne({ 
      _id: new ObjectId(applicationId) 
    });

    if (!application) {
      return NextResponse.json({ message: 'Application not found' }, { status: 404 });
    }

    // Determine the email to link to the user account
    // Priorities: Standard email -> Company Email -> Rep Email
    const userEmail = application.email || application.companyEmail || application.repEmail;

    if (!userEmail) {
        return NextResponse.json({ message: 'No email found on application to link user' }, { status: 400 });
    }

    // Prepare the mentor data object
    const mentorData = {
        id: mentorId,
        name: mentorName,
        assignedAt: new Date()
    };

    // 2. Update the Application Document (For Admin Records)
    await db.collection('applications').updateOne(
      { _id: new ObjectId(applicationId) },
      { $set: { assignedMentor: mentorData } }
    );

    // 3. Update the User Document (For Student Dashboard)
    // We find the user by the email associated with the application
    const userUpdateResult = await db.collection('users').updateOne(
      { email: userEmail }, 
      { $set: { assignedMentor: mentorData } }
    );
    
    // Optional: Log warning if no user was found (e.g. application exists but user account deleted/unregistered)
    if (userUpdateResult.matchedCount === 0) {
        console.warn(`Mentor assigned to application ${applicationId}, but no matching user found for email ${userEmail}`);
    }

    return NextResponse.json({ message: 'Mentor assigned successfully' }, { status: 200 });

  } catch (error) {
    console.error("Assign Mentor Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}