import { JSX } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import { sections } from './infrastructure'; // Import the centralized data

// Reusable SectionHeader component
const SectionHeader = ({ title, icon }: { title: string; icon: JSX.Element }) => (
  <div className="inline-block mb-6 text-left">
    <h2 className="text-green-600 text-3xl font-semibold flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="w-20 h-1 bg-green-600 mt-2"></div>
  </div>
);

export default function InfrastructurePage() {
  // 1. Convert the 'sections' object into an array so we can map over it
  const sectorsList = Object.values(sections);

  return (
    <>
      <HeroSection
        title="Critical Infrastructure Support"
        description="Mapping Nigeria’s Critical Assets for Security, Resilience, and Sustainable Growth."
        backgroundMedia={[
          '/media/criticalinfrastructuresupport.jpg',
        ]}
      />

      <main className='text-justify bg-white'>
        
        {/* --- 1. Introductory Section --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              GIFON Policy Contribution to Nigeria’s Critical Infrastructure
              Sectors
            </h2>
            
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto">
              The Geospatial Intelligence Foundation of Nigeria (GIFON)
              acknowledges the vital role of Nigeria’s critical
              infrastructure sectors in sustaining national security, economic
              prosperity, and public well-being. GIFON is committed to
              deploying geospatial intelligence capabilities to enhance the
              protection, resilience, and optimization of these sectors.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto">
              GIFON will integrate geospatial intelligence across all critical
              infrastructure sectors, build strong partnerships with
              government, industry, and international stakeholders, and
              develop tailored solutions that combine data, technology, and
              human expertise to safeguard Nigeria’s infrastructure and
              secure its national future.
            </p>
          </div>
        </section>

        {/* --- 2. Map over the converted list --- */}
        {sectorsList.map((sector, index) => {
          // Alternate background colors
          const backgroundColor =
            index % 2 === 0 ? 'bg-green-50' : 'bg-white';
          
          // Alternate text/image order (Zig-Zag layout)
          const textOrder = index % 2 === 0 ? 'md:order-1' : 'md:order-2';
          const imageOrder = index % 2 === 0 ? 'md:order-2' : 'md:order-1';

          return (
            <section
              key={sector.id}
              id={sector.id}
              className={`py-16 ${backgroundColor}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                  
                  {/* Text Content */}
                  <div className={`md:col-span-3 ${textOrder}`}>
                    <SectionHeader
                      title={sector.title}
                      icon={sector.icon}
                    />
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {/* Split description for readability */}
                      <p>{sector.description}</p>
                      
                      <Link
                        href={`/infrastructure/${sector.id}`} 
                        className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className={`md:col-span-2 ${imageOrder}`}>
                    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src={sector.image}
                            alt={sector.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}