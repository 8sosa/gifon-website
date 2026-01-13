import { NextResponse } from 'next/server';
import { getMentors } from '@/lib/contentful-queries'; // Ensure this exists from previous steps

export async function GET() {
  try {
    const mentors = await getMentors();
    return NextResponse.json({ mentors }, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch mentors:', error);
    return NextResponse.json({ mentors: [] }, { status: 500 });
  }
}