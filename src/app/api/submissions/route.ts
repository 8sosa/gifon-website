// src/app/api/submissions/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import cloudinary from '@/lib/cloudinary';

const DB_NAME = 'test-db';
const COLLECTION_NAME = 'submissions';

// Helper: Upload to Cloudinary
async function uploadToCloudinary(file: File) {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: 'journal_submissions',
      resource_type: 'auto',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Could not upload file to storage.');
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const authorName = formData.get('authorName') as string;
    const email = formData.get('email') as string;
    const title = formData.get('title') as string;
    const abstract = formData.get('abstract') as string;
    const file = formData.get('publicationFile') as File | null;

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

    // Upload File
    let publicationUrl = '';
    try {
      publicationUrl = await uploadToCloudinary(file);
    } catch (uploadError: unknown) {
      let message = 'File upload failed.';
      if (uploadError instanceof Error) message = uploadError.message;
      return NextResponse.json({ message }, { status: 500 });
    }

    // Save to DB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const submissionsCollection = db.collection(COLLECTION_NAME);

    const newSubmission = {
      authorName,
      email,
      title,
      abstract,
      publicationUrl,
      status: 'pending_review',
      submittedAt: new Date(),
    };

    await submissionsCollection.insertOne(newSubmission);

    return NextResponse.json(
      { message: 'Submission received successfully. Thank you!' },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}