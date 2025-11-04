// src/app/api/apply/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import cloudinary from '@/lib/cloudinary'; // Our new client

const DB_NAME = 'test-db'; // !! Change this
const COLLECTION_NAME = 'applications';

// Helper function to stream file to Cloudinary
async function uploadToCloudinary(file: File) {
  // We need to convert the file to a buffer to upload it
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: 'gifon_applications', // Optional: puts all uploads in a folder
      resource_type: 'auto', // Automatically detect file type
    });
    return result.secure_url; // This is the URL we want to save
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Could not upload file to storage.');
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the FormData, not JSON
    const formData = await req.formData();

    // 2. Extract the text fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const organization = formData.get('organization') as string | null;
    const category = formData.get('category') as string;

    // 3. Extract the file
    const file = formData.get('upload') as File | null;

    // 4. Validation (backend)
    if (!email || !name || !phone || !category) {
      return NextResponse.json(
        { message: 'Missing required text fields' },
        { status: 400 }
      );
    }
    if (!file) {
      return NextResponse.json(
        { message: 'Missing required file upload' },
        { status: 400 }
      );
    }

    // 5. Upload the file to Cloudinary
    let supportingDocumentUrl = '';
    try {
      supportingDocumentUrl = await uploadToCloudinary(file);
    } catch (uploadError: unknown) {
      if (uploadError instanceof Error) {
        return NextResponse.json(
          { message: uploadError.message },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { message: 'File upload failed.' },
        { status: 500 }
      );
    }

    // 6. Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(COLLECTION_NAME);

    // 7. Check for duplicate application
    const existingApplication = await applicationsCollection.findOne({
      email,
      status: 'pending',
    });

    if (existingApplication) {
      return NextResponse.json(
        { message: 'You already have a pending application.' },
        { status: 409 }
      );
    }

    // 8. Create the new application object (now with the file URL)
    const newApplication = {
      email,
      name,
      phone,
      organization: organization || '',
      category,
      supportingDocumentUrl, // <-- Here it is!
      status: 'pending',
      submittedAt: new Date(),
    };

    const result = await applicationsCollection.insertOne(newApplication);

    // 9. Send success response
    return NextResponse.json(
      {
        message: 'Application submitted successfully',
        applicationId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error(error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}