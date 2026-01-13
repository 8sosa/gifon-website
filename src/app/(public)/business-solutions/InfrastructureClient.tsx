// app/(public)/business-solutions/InfrastructureClient.tsx

"use client"; 

import { JSX, useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import { sections } from './infrastructure';

// --- FadeCarousel Component ---
const FadeCarousel = ({ images, altText }: { images: string[], altText: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100">
            {images.map((src, index) => {
                const isActive = index === currentIndex;
                return (
                    <div
                        key={src + index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`${altText} image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                );
            })}
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

// --- SectionHeader Component ---
const SectionHeader = ({ title, icon }: { title: string; icon: JSX.Element }) => (
  <div className="inline-block mb-6 text-left">
    <h2 className="text-green-600 text-3xl font-semibold flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="w-20 h-1 bg-green-600 mt-2"></div>
  </div>
);

// --- Main Client Component Logic ---
export default function InfrastructureClient() {
  const sectorsList = Object.values(sections);

  return (
    <>
      <HeroSection
        title={<><span className="cooper">GIFON</span> Business Solutions  </>}
        description={<>
        <span className="cooper">GIFON</span> Business Solutions provides cutting-edge geospatial intelligence (GEOINT) products, services, and advisory solutions to businesses, government agencies, and development partners. Leveraging advanced location intelligence, spatial analytics, mapping technologies, and data driven insights, <span className="cooper">GIFON</span> helps organizations make smarter decisions, optimize operations, and identify strategic opportunities. Our offerings span risk assessment, market analysis, infrastructure planning, environmental monitoring, and security support, delivering actionable insights that drive efficiency, innovation, and competitive advantage. By combining technical expertise, tailored solutions, and world class geospatial tools, <span className="cooper">GIFON</span> empowers organizations to translate complex geospatial data into measurable business impact.
        </>}
        backgroundMedia={[
          '/media/criticalinfrastructuresupport.jpg',
        ]}
      />

      <main className='text-justify bg-white'>
        {sectorsList.map((sector, index) => {
          const backgroundColor = index % 2 === 0 ? 'bg-green-50' : 'bg-white';
          const textOrder = index % 2 === 0 ? 'md:order-1' : 'md:order-2';
          const imageOrder = index % 2 === 0 ? 'md:order-2' : 'md:order-1';

          let imageArray: string[] = [];
          
          if (Array.isArray(sector.images)) {
              imageArray = [...sector.images]; 
          } else if (typeof sector.images === 'string') {
              imageArray = [sector.images];
          }

          return (
              <div className='flex flex-col' key={sector.id}>
                <div id={sector.id} className="pt-20 -mt-20"></div>
                <section
                  key={sector.id}
                  id={sector.id}
                  className={`py-16 ${backgroundColor}`}
                >
                  <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
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
                            href={`/business-solutions/${sector.id}`} 
                            className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div className={`md:col-span-2 ${imageOrder} h-full`}>
                        <FadeCarousel 
                            images={imageArray} 
                            altText={sector.title} 
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
          );
        })}
      </main>
    </>
  );
}