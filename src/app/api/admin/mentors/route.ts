import { NextRequest, NextResponse } from 'next/server';
import { getMentors } from '@/lib/contentful-queries';
import { getSession } from '@/lib/auth';

export async function GET(req: NextRequest) {
  // 1. SECURITY CHECK
  // Even though this data comes from Contentful, we only want Admins 
  // accessing the full mentor list through this API.
  const session = await getSession();
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const mentors = await getMentors();
    
    // We return a 200 even if the array is empty, 
    // as that's a valid state (no mentors found in Contentful).
    return NextResponse.json({ mentors }, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch mentors from Contentful:', error);
    return NextResponse.json(
      { message: 'Error fetching mentor directory', mentors: [] }, 
      { status: 500 }
    );
  }
}