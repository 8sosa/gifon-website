import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import cloudinary from '@/lib/cloudinary';
import { transporter, emailFrom } from '@/lib/nodemailer';

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users'; // Changed from 'applications'

async function uploadToCloudinary(file: File) {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = `data:${mimeType};base64,${base64Data}`;

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
    
    const applicationData: Record<string, any> = {};
    const backgroundData: Record<string, any> = {};
    const fileUrls: Record<string, string> = {};
    const fileUploadPromises: Promise<void>[] = [];

    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        const uploadPromise = uploadToCloudinary(value)
          .then((url) => { fileUrls[key] = url; })
          .catch((err) => { console.error(`Failed to upload ${key}`, err); });
        fileUploadPromises.push(uploadPromise);
      } 
      else if (typeof value === 'string') {
        if (key.startsWith('background_')) {
          const cleanKey = key.replace('background_', '');
          backgroundData[cleanKey] = value;
        } else {
          applicationData[key] = value;
        }
      }
    }

    await Promise.all(fileUploadPromises);

    // 1. Construct the Unified User Document
    const finalDocument: any = {
      ...applicationData,
      background: backgroundData, 
      files: fileUrls, 
      registrationStatus: 'pending', // Key for your Dashboard "Pending" tab
      role: 'user',                  // Default role
      createdAt: new Date(),
    };

    const primaryEmail = finalDocument.email || finalDocument.companyEmail || finalDocument.repEmail;
    
    if (!primaryEmail || !finalDocument.category) {
       return NextResponse.json({ message: 'Missing contact info or category.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 2. Check for duplicates in the USERS collection
    const existingUser = await usersCollection.findOne({
      $or: [
        { email: primaryEmail },
        { companyEmail: primaryEmail },
        { repEmail: primaryEmail }
      ]
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'An account or application with this email already exists.' },
        { status: 409 }
      );
    }

    // 3. Insert directly into 'users'
    const result = await usersCollection.insertOne(finalDocument);

    // 4. Send Confirmation Email
    try {
      const recipientName = finalDocument.fullName || finalDocument.companyName || finalDocument.repName || "Applicant";
      await transporter.sendMail({
        from: emailFrom,
        to: primaryEmail,
        subject: 'Application Received - GIFON',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
            <h2 style="color: #15803d;">Application Received</h2>
            <p>Dear ${recipientName},</p>
            <p>Thank you for applying to <strong>GIFON</strong>. We have received your documents and our team is reviewing your submission.</p>
            <p>You will receive an email once your account has been activated.</p>
            <br/>
            <p>Best Regards,<br/><strong>GIFON Membership Team</strong></p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email failed:', emailError);
    }

    return NextResponse.json({
      message: 'Application submitted successfully',
      applicationId: result.insertedId,
    }, { status: 201 });

  } catch (error: unknown) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}