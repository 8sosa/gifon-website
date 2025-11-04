// src/app/api/submissions/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import cloudinary from '@/lib/cloudinary';

const DB_NAME = 'test-db'; // !! Make sure this is correct
const COLLECTION_NAME = 'submissions'; // A new collection

// Helper function to stream file to Cloudinary
// Note: This is duplicated from api/apply. For cleaner code,
// you could move this helper to a shared file like /lib/utils.ts
async function uploadToCloudinary(file: File) {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: 'journal_submissions', // A new folder in Cloudinary
      resource_type: 'auto',
    });
    return result.secure_url; // This is the URL we save
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Could not upload file to storage.');
  }
}

export async function GET() {
    // -----------------------------------------------------------------
    //   !! SECURITY !!
    //   This route is protected by your middleware's 'matcher'
    //   (e.g., '/admin/:path*'), so we're good to go.
    // -----------------------------------------------------------------
  
    try {
      const client = await clientPromise;
      const db = client.db(DB_NAME);
      const submissionsCollection = db.collection(COLLECTION_NAME);
  
      // 1. Find all submissions where status is 'pending_review'
      const pendingSubmissions = await submissionsCollection
        .find({
          status: 'pending_review',
        })
        .sort({ submittedAt: -1 }) // Show newest first
        .toArray();
  
      // 2. Send the data back
      return NextResponse.json(
        { 
          message: 'Pending submissions fetched successfully',
          submissions: pendingSubmissions // Note: 'submissions' key
        },
        { status: 200 }
      );
    } catch (error: unknown) {
      console.error(error);
      let errorMessage = 'Internal Server Error';
      if (error instanceof Error) errorMessage = error.message;
      return NextResponse.json(
        { message: errorMessage },
        { status: 500 }
      );
    }
  }

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the FormData
    const formData = await req.formData();

    // 2. Extract the text fields
    const authorName = formData.get('authorName') as string;
    const email = formData.get('email') as string;
    const title = formData.get('title') as string;
    const abstract = formData.get('abstract') as string;

    // 3. Extract the file
    const file = formData.get('publicationFile') as File | null;

    // 4. Validation
    if (!authorName || !email || !title || !abstract) {
      return NextResponse.json(
        { message: 'Missing required text fields' },
        { status: 400 }
      );
    }
    if (!file) {
      return NextResponse.json(
        { message: 'Missing publication file' },
        { status: 400 }
      );
    }

    // 5. Upload the file to Cloudinary
    let publicationUrl = '';
    try {
      publicationUrl = await uploadToCloudinary(file);
    } catch (uploadError: unknown) {
      let message = 'File upload failed.';
      if (uploadError instanceof Error) message = uploadError.message;
      return NextResponse.json({ message }, { status: 500 });
    }

    // 6. Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const submissionsCollection = db.collection(COLLECTION_NAME);

    // 7. Create the new submission document
    const newSubmission = {
      authorName,
      email,
      title,
      abstract,
      publicationUrl, // <-- The link to the file on Cloudinary
      status: 'pending_review',
      submittedAt: new Date(),
    };

    await submissionsCollection.insertOne(newSubmission);

    // 8. Send success response
    return NextResponse.json(
      {
        message: 'Submission received successfully. Thank you!',
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