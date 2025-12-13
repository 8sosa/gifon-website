// src/app/api/apply/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import cloudinary from '@/lib/cloudinary';

const DB_NAME = 'test-db'; // Update to your production DB name eventually
const COLLECTION_NAME = 'applications';

// Helper: Upload a single file to Cloudinary
async function uploadToCloudinary(file: File) {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: 'gifon_applications',
      resource_type: 'auto',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Could not upload file.');
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Containers for our processed data
    const applicationData: Record<string, any> = {};
    const backgroundData: Record<string, any> = {};
    const fileUrls: Record<string, string> = {};
    const fileUploadPromises: Promise<void>[] = [];

    // 1. Iterate through ALL FormData entries
    for (const [key, value] of formData.entries()) {
      
      // CASE A: It is a File
      if (value instanceof File) {
        if (value.size > 0) { // Only upload if file exists and has content
          const uploadPromise = uploadToCloudinary(value)
            .then((url) => {
              fileUrls[key] = url; // Save URL using the field name (e.g., 'cacCert': 'https://...')
            })
            .catch((err) => {
              console.error(`Failed to upload ${key}`, err);
              // We continue even if one fails, or you could throw here to stop everything
            });
          fileUploadPromises.push(uploadPromise);
        }
      } 
      // CASE B: It is Text
      else if (typeof value === 'string') {
        // Check if it belongs to the 'background' nested object
        if (key.startsWith('background_')) {
          const cleanKey = key.replace('background_', '');
          backgroundData[cleanKey] = value;
        } else {
          applicationData[key] = value;
        }
      }
    }

    // 2. Wait for all files to upload
    await Promise.all(fileUploadPromises);

    // 3. Construct the final object
    const finalDocument: Record<string, any> = {
      ...applicationData,         // spread basic fields (surname, companyName, etc.)
      background: backgroundData, // nest the background answers
      files: fileUrls,            // nest the file URLs
      status: 'pending',
      submittedAt: new Date(),
    };

    // 4. Basic Validation (Ensure we have at least an email or company email)
    const primaryEmail = finalDocument.email || finalDocument.companyEmail || finalDocument.repEmail;
    
    if (!primaryEmail || !finalDocument.category) {
       return NextResponse.json(
        { message: 'Missing required contact information or category.' },
        { status: 400 }
      );
    }

    // 5. Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const applicationsCollection = db.collection(COLLECTION_NAME);

    // 6. Check for duplicates (using the primary email found)
    const existingApplication = await applicationsCollection.findOne({
      $or: [
        { email: primaryEmail },
        { companyEmail: primaryEmail },
        { repEmail: primaryEmail }
      ],
      status: 'pending',
    });

    if (existingApplication) {
      return NextResponse.json(
        { message: 'An application with this email is already pending.' },
        { status: 409 }
      );
    }

    // 7. Insert into DB
    const result = await applicationsCollection.insertOne(finalDocument);

    return NextResponse.json(
      {
        message: 'Application submitted successfully',
        applicationId: result.insertedId,
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}