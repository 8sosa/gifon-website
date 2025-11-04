// src/app/api/apply/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'test-db';
const COLLECTION_NAME = 'applications';

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(COLLECTION_NAME);

    // 1. Parse the application data
    const { 
        email, 
        name, 
        phone, 
        organization, 
        category 
    } = await req.json();

    // 2. Validation
    if (!email || !name || !phone || !category) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 3. Check for duplicate application (optional, but good practice)
    const existingApplication = await applicationsCollection.findOne({ 
      email, 
      status: 'pending' 
    });

    if (existingApplication) {
      return NextResponse.json(
        { message: 'You already have a pending application.' },
        { status: 409 }
      );
    }

    // 4. Create the new application
    const newApplication = {
      email,
      name,
      phone,
      organization: organization || '',
      category,
      status: 'pending', // This is key
      submittedAt: new Date(),
    };

    const result = await applicationsCollection.insertOne(newApplication);

    // 5. Send success response
    return NextResponse.json(
      { message: 'Application submitted successfully', applicationId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}