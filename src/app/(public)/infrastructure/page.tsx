"use client"; // Needed for useState/useEffect in the carousel

import { JSX, useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import { sections } from './infrastructure';

// --- 1. New Reusable FadeCarousel Component ---
const FadeCarousel = ({ images, altText }: { images: string[], altText: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Change image every 4 seconds (4000ms)
    const intervalTime = 4000; 

    useEffect(() => {
      if (images.length <= 1) return;
      const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, intervalTime);
      return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

    return (
        // Outer container defines dimensions and border radius
        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100">
            {images.map((src, index) => {
                 // Determine if this is the active image
                const isActive = index === currentIndex;
                return (
                    <div
                        key={src + index}
                        // Absolute positioning stacks them on top of each other.
                        // CSS transitions handle the fade effect.
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`${altText} image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0} // Load first image immediately
                        />
                    </div>
                );
            })}
             {/* Optional: Add subtle indicators dots at bottom if > 1 image */}
             {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                        ></div>
                    ))}
                </div>
             )}
        </div>
    );
};


// Reusable SectionHeader component (Unchanged)
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
  const sectorsList = Object.values(sections);

  return (
    <>
      <HeroSection
        title="Critical Infrastructure Support"
        description="Our Core areas of support is Critical infrastructure, where Geospatial Intelligence, policy Insights, and advanced technologies are applied to strengthen, secure and future proof the systems essential to national security, economic resilience and National development."
        backgroundMedia={[
          '/media/criticalinfrastructuresupport.jpg',
        ]}
      />

      <main className='text-justify bg-white'>
        
        {/* --- Introductory Section (Unchanged) --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              <span className="cooper">GIFON</span> Policy Contribution to Nigeria’s Critical Infrastructure
              Sectors
            </h2>
            
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto">
              The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>)
              acknowledges the vital role of Nigeria’s critical
              infrastructure sectors in sustaining national security, economic
              prosperity, and public well-being. <span className="cooper">GIFON</span> is committed to
              deploying geospatial intelligence capabilities to enhance the
              protection, resilience, and optimization of these sectors.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto">
              <span className="cooper">GIFON</span> will integrate geospatial intelligence across all critical
              infrastructure sectors, build strong partnerships with
              government, industry, and international stakeholders, and
              develop tailored solutions that combine data, technology, and
              human expertise to safeguard Nigeria’s infrastructure and
              secure its national future.
            </p>
          </div>
        </section>

        {/* --- Main Loop --- */}
        {sectorsList.map((sector, index) => {
          const backgroundColor = index % 2 === 0 ? 'bg-green-50' : 'bg-white';
          const textOrder = index % 2 === 0 ? 'md:order-1' : 'md:order-2';
          const imageOrder = index % 2 === 0 ? 'md:order-2' : 'md:order-1';

          let imageArray: string[] = [];
          
          if (Array.isArray(sector.images)) {
              // SPREAD operator [...x] creates a mutable copy of the readonly array
              imageArray = [...sector.images]; 
          } else if (typeof sector.images === 'string') {
              imageArray = [sector.images];
          }

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
                      <ul>
                        {sector.highlights.map((point, idx) => (
                          <li key={idx} className="list-disc list-inside mb-2">
                            {point}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href={`/infrastructure/${sector.id}`} 
                        className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>

                  {/* --- 3. Image Content Column (Updated) --- */}
                  <div className={`md:col-span-2 ${imageOrder} h-full`}>
                    {/* The component itself handles whether it's one image or multiple */}
                    <FadeCarousel 
                        images={imageArray} 
                        altText={sector.title} 
                    />
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