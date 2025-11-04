// src/app/api/users/me/route.ts

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const DB_NAME = 'test-db';
const USERS_COLLECTION = 'users';

interface JwtPayload {
  userId: string;
  email: string;
}

// Helper to get payload from token
function getJwtPayload(req: NextRequest): JwtPayload | null {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not set');

  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch {
    return null; // Invalid or expired token
  }
}

// --- THIS FUNCTION ALREADY EXISTS ---
export async function GET(req: NextRequest) {
  try {
    const payload = getJwtPayload(req);
    if (!payload) {
      return NextResponse.json(
        { message: 'Invalid or missing token' },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    const user = await usersCollection.findOne(
      { _id: new ObjectId(payload.userId) },
      { projection: { password: 0 } } // NEVER send the password
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
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

// --- ADD THIS NEW FUNCTION TO THE FILE ---
export async function PATCH(req: NextRequest) {
  try {
    const payload = getJwtPayload(req);
    if (!payload) {
      return NextResponse.json(
        { message: 'Invalid or missing token' },
        { status: 401 }
      );
    }

    // 1. Get the data to update from the request
    const { name, organization } = await req.json();
    if (!name && !organization) {
      return NextResponse.json(
        { message: 'No update fields provided' },
        { status: 400 }
      );
    }

    // 2. Connect to DB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const usersCollection = db.collection(USERS_COLLECTION);

    // 3. Create the update object (only update fields that were sent)
    const updateData: { [key: string]: string } = {};
    if (name) updateData.name = name;
    if (organization) updateData.organization = organization;

    // 4. Update the user in the database
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(payload.userId) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // 5. Send back success
    return NextResponse.json(
      { message: 'Profile updated successfully' },
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