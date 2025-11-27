import { notFound } from 'next/navigation';
import { sections } from '../infrastructure'; // Imports the data object
import HeroSection from '@/components/HeroSection'; // Uses your main Hero component
import SectionDetail from '@/components/SectionDetail';

interface Props {
  params: Promise<{ id: string }>;
}

// 1. Tell Next.js to pre-build these pages (Static Site Generation)
// This makes the pages load instantly.
export async function generateStaticParams() {
  // Get all keys (energy, transportation, etc.)
  return Object.keys(sections).map((id) => ({
    id,
  }));
}

export default async function SectionPage({ params }: Props) {
  // 2. Await params (Next.js 15 requirement)
  const { id } = await params;

  // 3. Look up the specific sector data using the ID
  const section = sections[id as keyof typeof sections];

  // 4. Handle invalid IDs (e.g., /infrastructure/invalid-id)
  if (!section) return notFound();

  return (
    <main className="w-full antialiased bg-white min-h-screen">
      {/* Reusing your universal HeroSection. 
        Note: We wrap section.image in an array [] because backgroundMedia expects an array.
      */}
      <HeroSection 
        title={section.title} 
        description={section.summary} 
        backgroundMedia={[section.image]} 
      />
      
      {/* Render the detailed content */}
      <SectionDetail section={section} />
    </main>
  );
}