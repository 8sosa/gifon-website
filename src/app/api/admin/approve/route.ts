// src/app/api/admin/approve/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { transporter, emailFrom } from '@/lib/nodemailer';
import bcrypt from 'bcryptjs';
import crypto from 'crypto'; // Built-in Node.js module
import { ObjectId } from 'mongodb'; // To correctly find by _id

const DB_NAME = 'test-db'; // Change this!
const APPS_COLLECTION = 'applications';
const USERS_COLLECTION = 'users';

export async function POST(req: NextRequest) {
  // TODO: Add authentication here!
  // You MUST protect this endpoint so only a super admin can call it.
  // We'll skip that for now, but it's critical.

  try {
    const { applicationId } = await req.json();
    if (!applicationId) {
      return NextResponse.json(
        { message: 'Application ID is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(APPS_COLLECTION);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 1. Find the application
    const application = await applicationsCollection.findOne({
      _id: new ObjectId(applicationId),
    });

    if (!application) {
      return NextResponse.json(
        { message: 'Application not found' },
        { status: 404 }
      );
    }
    if (application.status === 'approved') {
      return NextResponse.json(
        { message: 'Application already approved' },
        { status: 400 }
      );
    }

    // 2. Check if a user with this email already exists
    const existingUser = await usersCollection.findOne({ email: application.email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'A user with this email already exists' },
        { status: 409 }
      );
    }

    // 3. Generate a secure random password
    const randomPassword = crypto.randomBytes(10).toString('hex');
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    // 4. Create the new user in the 'users' collection
    const newUser = {
      email: application.email,
      password: hashedPassword,
      name: application.name,
      phone: application.phone,
      organization: application.organization,
      category: application.category,
      createdAt: new Date(),
      // You might want a 'role' field here
      // role: 'user', 
    };
    await usersCollection.insertOne(newUser);

    // 5. Update the application status
    await applicationsCollection.updateOne(
      { _id: new ObjectId(applicationId) },
      { $set: { status: 'approved', approvedAt: new Date() } }
    );

    // 6. Send the approval email
    try {
      await transporter.sendMail({
        from: emailFrom,
        to: application.email,
        subject: 'Your Application has been Approved!',
        html: `
          <h1>Welcome, ${application.name}!</h1>
          <p>Your application to join has been approved.</p>
          <p>You can now log in using these credentials:</p>
          <ul>
            <li><strong>Email:</strong> ${application.email}</li>
            <li><strong>Temporary Password:</strong> ${randomPassword}</li>
          </ul>
          <p>Please log in and change your password immediately.</p>
          <a href="https://your-website.com/login">Click here to Login</a>
        `,
      });
    } catch (emailError) {
      console.error('Email failed to send:', emailError);
      // Don't fail the whole request, but log the error
      return NextResponse.json(
        { message: 'User created, but failed to send email.' },
        { status: 201 } // 201 because the user *was* created
      );
    }

    // 7. Send final success response
    return NextResponse.json(
      { message: 'User approved and email sent' },
      { status: 200 }
    );
  } catch (error: unknown) { // <--- Step 1: Catch as 'unknown'
    console.error(error);
    
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message; // More specific error
    }
  
    // Handle specific BSON/Mongo errors if you want, like in the 'approve' route
    if (error instanceof Error && error.name === 'BSONError') {
      return NextResponse.json(
        { message: 'Invalid Application ID format' },
        { status: 400 }
      );
    }
  
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}