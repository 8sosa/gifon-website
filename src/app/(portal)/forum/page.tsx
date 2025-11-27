// src/app/forums/page.tsx

import Link from 'next/link';
import { getForumCategories } from '@/lib/forum'; // Import our new function
import HeroSection from '@/components/HeroSection'; // Assuming you want a hero
import { FaComments } from 'react-icons/fa'; // A nice icon

// This is an async Server Component!
export default async function ForumsPage() {
  
  // 1. Fetch data directly. No 'useEffect' or 'useState' needed.
  const categories = await getForumCategories();

  return (
    <>
      <HeroSection
        title="GIFON Forums"
        description="Connect with the community, share insights, and discuss the future of GEOINT in Nigeria."
        backgroundMedia={["/bg/c.JPG"]} // Use one of your cool backgrounds
      />

      <main className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Categories
        </h2>

        {/* 2. Check if categories exist */}
        {categories.length === 0 ? (
          <p className="text-center text-gray-500">
            No forum categories have been set up yet.
          </p>
        ) : (
          // 3. Render the list of categories
          <div className="space-y-6">
            {categories.map((category) => (
              <Link
                key={category._id}
                // This link won't work yet, but we'll build it next
                href={`/forums/${category._id}`} 
                className="block p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-green-50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <FaComments className="h-6 w-6 text-green-700" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}