// src/app/api/apply/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import cloudinary from '@/lib/cloudinary';
import { transporter, emailFrom } from '@/lib/nodemailer'; // Import mailer

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
              fileUrls[key] = url; 
            })
            .catch((err) => {
              console.error(`Failed to upload ${key}`, err);
            });
          fileUploadPromises.push(uploadPromise);
        }
      } 
      // CASE B: It is Text
      else if (typeof value === 'string') {
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
      ...applicationData,
      background: backgroundData, 
      files: fileUrls, 
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

    // 8. Send Confirmation Email
    // We wrap this in a try-catch so email failure doesn't crash the API response
    try {
      // Determine name for greeting (Full Name, Company Name, or Representative Name)
      const recipientName = finalDocument.fullName || finalDocument.companyName || finalDocument.repName || "Applicant";

      await transporter.sendMail({
        from: emailFrom,
        to: primaryEmail,
        subject: 'Application Received - GIFON',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
            <h2 style="color: #15803d;">Application Received</h2>
            <p>Dear ${recipientName},</p>
            <p>Thank you for applying to the <strong>Geospatial Intelligence Forum of Nigeria (GIFON)</strong>.</p>
            <p>We have successfully received your application details and documents. Our team is currently reviewing your submission.</p>
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Your application will undergo a standard review process.</li>
              <li>You will receive an email notification once a decision has been made.</li>
              <li>If approved, you will receive login credentials to access the member portal.</li>
            </ul>
            <p>If you have any urgent inquiries, please reply to this email.</p>
            <br/>
            <p>Best Regards,<br/><strong>GIFON Membership Team</strong></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // We continue to return success because the application WAS saved to the DB.
    }

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