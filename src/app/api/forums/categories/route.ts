// src/app/api/forums/categories/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'test-db';
const CATEGORIES_COLLECTION = 'forumCategories';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);

    // Find all categories and sort them by the 'order' field, ascending
    const categories = await db
      .collection(CATEGORIES_COLLECTION)
      .find({})
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json({ categories }, { status: 200 });

  } catch (error: unknown) {
    console.error(error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}