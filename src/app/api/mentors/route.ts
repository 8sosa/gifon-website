import { NextResponse } from 'next/server';
import { getMentors } from '@/lib/contentful-queries';

export async function GET() {
  try {
    // Reusing the same Contentful query function
    const mentors = await getMentors();
    return NextResponse.json({ mentors }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ mentors: [] }, { status: 500 });
  }
}