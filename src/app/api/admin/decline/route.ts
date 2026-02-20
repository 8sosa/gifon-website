import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { transporter, emailFrom } from '@/lib/nodemailer';
import { ObjectId } from 'mongodb';
import { getSession } from '@/lib/auth';

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { applicationId, reason } = await req.json();

    if (!applicationId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 1. Find the user before deleting so we can send the email
    const user = await usersCollection.findOne({ _id: new ObjectId(applicationId) });

    if (!user) {
      return NextResponse.json({ message: 'Application not found' }, { status: 404 });
    }

    const primaryEmail = user.email || user.companyEmail || user.repEmail;
    const recipientName = user.fullName || user.companyName || user.repName || "Applicant";

    // 2. Remove the record from the database
    // Option A: Hard Delete (Recommended for privacy/cleanliness)
    // await usersCollection.deleteOne({ _id: new ObjectId(applicationId) });

  // Option B: Soft Reject (Use this instead of deleteOne if you want to keep logs)
    await usersCollection.updateOne(
       { _id: new ObjectId(applicationId) },
       { $set: { registrationStatus: 'rejected', rejectedAt: new Date(), rejectionReason: reason } }
    );


    // 3. Send the "Thank you, but..." email
    try {
      await transporter.sendMail({
        from: emailFrom,
        to: primaryEmail,
        subject: 'Update regarding your GIFON Application',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
            <h2 style="color: #b91c1c;">Application Update</h2>
            <p>Dear ${recipientName},</p>
            <p>Thank you for your interest in joining the <strong>Geospatial Intelligence Forum of Nigeria (GIFON)</strong>.</p>
            <p>After a careful review of your submission, we regret to inform you that we are unable to approve your application at this time.</p>
            ${reason ? `<p><strong>Reason for decision:</strong> ${reason}</p>` : ''}
            <p>If you have any questions or would like to re-apply in the future once specific requirements are met, please feel free to reach out.</p>
            <br/>
            <p>Best Regards,<br/><strong>GIFON Membership Team</strong></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Rejection email failed:', emailError);
    }

    return NextResponse.json({ message: 'Application declined and record removed' }, { status: 200 });

  } catch (error) {
    console.error('Decline Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}