import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { transporter, emailFrom } from '@/lib/nodemailer';
import bcrypt from 'bcryptjs';
import crypto from 'crypto'; 
import { ObjectId } from 'mongodb';
import { getSession } from '@/lib/auth'; // Ensure you have your auth check!

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users'; // We only need this one now
const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export async function POST(req: NextRequest) {
  // 1. SECURITY CHECK
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { applicationId } = await req.json(); // This is now the User's _id
    if (!applicationId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 2. Find the existing pending user
    const user = await usersCollection.findOne({
      _id: new ObjectId(applicationId),
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // 3. Prevent double approval
    if (user.registrationStatus === 'active') {
      return NextResponse.json({ message: 'User is already active' }, { status: 400 });
    }

    // 4. Generate Temporary Password
    // Since they are pending, they might not have a password yet, 
    // or you might want to reset it upon approval.
    const randomPassword = crypto.randomBytes(10).toString('hex');
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // 5. ACTIVATE the user
    // We update the existing document instead of inserting a new one.
    await usersCollection.updateOne(
      { _id: new ObjectId(applicationId) },
      { 
        $set: { 
          registrationStatus: 'active',
          password: hashedPassword, // Set their initial login password
          approvedAt: new Date(),
          role: 'user' // Ensure they have a role
        } 
      }
    );

    // 6. Send the welcome email
    try {
      const userName = user.companyName || user.fullName || `${user.firstName} ${user.surname}`;
      
      await transporter.sendMail({
        from: emailFrom,
        to: user.email,
        subject: 'Welcome to GIFON - Your Account is Active!',
        html: `
          <h1>Welcome, ${userName}!</h1>
          <p>Your membership application has been approved.</p>
          <p>You can now log in to your dashboard using these credentials:</p>
          <ul>
            <li><strong>Email:</strong> ${user.email}</li>
            <li><strong>Temporary Password:</strong> ${randomPassword}</li>
          </ul>
          <p><strong>Note:</strong> For security, please change your password immediately after logging in.</p>
          <a href="${baseUrl}/login" style="padding: 12px 24px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Login to Dashboard</a>
        `,
      });
    } catch (emailError) {
      console.error('Email failed:', emailError);
      return NextResponse.json({ message: 'User activated, but welcome email failed.' }, { status: 201 });
    }

    return NextResponse.json({ message: 'User approved and activated successfully' }, { status: 200 });

  } catch (error: unknown) {
    console.error('Approval Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}