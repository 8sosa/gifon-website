import { notFound } from 'next/navigation';
import { sections } from '../infrastructure'; 
import HeroSection from '@/components/HeroSection'; 
import SectionDetail from '@/components/SectionDetail';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(sections).map((id) => ({
    id,
  }));
}

export default async function SectionPage({ params }: Props) {
  const { id } = await params;
  const section = sections[id as keyof typeof sections];

  if (!section) return notFound();

  // --- FIX: Normalize images for the HeroSection ---
  // The interface allows 'images' to be a string or an array. 
  // We need to ensure we pass a flat array of strings to HeroSection.
  let heroImages: string[] = [];

  if (Array.isArray(section.images)) {
    // If it's an array (readonly), spread it to create a mutable copy
    heroImages = [...section.images];
  } else if (typeof section.images === 'string') {
    // If it's a single string, wrap it in an array
    heroImages = [section.images];
  }

  return (
    <main className="w-full antialiased bg-white min-h-screen">
      <HeroSection 
        title={section.title} 
        description={section.summary} 
        // Pass the normalized array
        backgroundMedia={heroImages} 
      />
      
      {/* Render the detailed content */}
      <SectionDetail section={section} />
    </main>
  );
}