"use client";

import HeroSection from '@/components/HeroSection';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel'; // Import updated types
import RevealProvider from "@/components/ui/RevealProvider";
import { sections } from '../app/(public)/infrastructure/infrastructure'; // Ensure path is correct
import Image from 'next/image';
import { FaRegNewspaper } from 'react-icons/fa6';

// 1. Prepare Partner Logos
const partnerLogos: CarouselItem[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/dgi.jpeg', alt: 'DGI London', caption: 'Media Partners' },
];

// 2. Prepare Sector/Infrastructure Items
const sectorItems: CarouselItem[] = Object.values(sections).map((sector) => ({
  src: sector.image,
  alt: sector.title,
  title: sector.title, // passing the title makes the carousel render the text
  href: `/infrastructure#${sector.id}`, // Link to the sector section
}));

export default function HomePage() {
  return (
    <RevealProvider>
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description='Source, Analyze, Automate & Share'
        backgroundMedia={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />

      {/* Infrastructure Sectors Carousel */}
      <section id="sectors-carousel" className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-8 px-6 text-center">
           <h2 className="text-3xl font-bold text-green-800">Critical Infrastructure Support</h2>
        </div>
        
        {/* We pass the sectorItems here */}
        <LogoCarousel items={sectorItems} loopDurationMs={40000} />
      </section>

      {/* Partners Section */}
      <section id="our-partners" className="py-12 md:py-20 px-4 md:px-6 bg-green-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">Partners</h2>
          {/* Ensure LogoCarousel handles its own internal responsiveness, usually by flex-wrap */}
          <LogoCarousel items={partnerLogos} loopDurationMs={20000} />
        </div>
      </section>

      {/* Newsletter Section with Video Background */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* 1. The Video Background */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/media/WebGIF.mp4" type="video/mp4" />
        </video>

        {/* 2. Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        {/* 3. Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-green-400">Newsletter</h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-2 flex w-full items-center justify-center"><FaRegNewspaper /></div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">-Eyes on Location-</h3>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">The GeoINSIGHT Bulletin</h3>
            {/* <p className="text-gray-200 text-sm mb-1">Vol 1, No. 1 - August 2025</p>
            <p className="text-gray-100 font-semibold mb-4"><span className="cooper">GIFON</span> joins the Global GEOINT Stage</p> */}
            <a 
              href="/newsletter" 
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              UNLOCK INSIGHT
            </a>
          </div>
        </div>
      </section>

      {/* "Get Plugged In" Section */}
      {/* Container wraps content to max width and adds padding */}
      <div className="gradient-container bg-gray-50 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            
            {/* Video Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                <video 
                  src="/vids/vid1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              {/* <h3 className="text-3xl md:text-4xl font-bold bellota text-gray-300 mb-4">
                Join Us
              </h3> */}
              <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                Join a community dedicated to mapping the future and empowering the nation. Whether you are an individual or an organization, discover how you can contribute.
              </p>
              <a href="/membership" className="self-center lg:self-start bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-50 transition-all border border-green-100">
                Join Us
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* News / Social / Calendar Section */}
      {/* Stack on mobile, horizontal on Large Desktop */}
      <section className="bg-white py-12 px-4 sm:px-8 cooper">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          
          {/* Social Media - Column 1 */}
          <div className="flex-1 lg:pr-8">
            <h3 className="text-sky-700 border-b-2 border-sky-700 inline-block mb-4 text-2xl md:text-3xl font-bold">
              Social Media
            </h3>
            <ul className="space-y-3">
              {['Facebook', 'LinkedIn', 'Instagram', 'Youtube', 'X formerly Twitter'].map((platform) => (
                <li key={platform}>
                  <a href="#" className="text-sky-700 hover:text-sky-900 hover:underline flex items-center gap-2 transition-colors">
                    Follow <span className="cooper">GIFON</span> on {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News - Column 2 */}
          <div className="flex-1 lg:border-l lg:border-gray-300 lg:px-8 pt-8 lg:pt-0 border-t lg:border-t-0 border-gray-300">
            <h3 className="text-sky-700 border-b-2 border-sky-700 inline-block mb-4 text-2xl md:text-3xl font-bold">
              Latest News
            </h3>
            <div className="text-gray-500 italic">No recent news available at the moment.</div>
          </div>

          {/* Calendar - Column 3 */}
          <div className="flex-1 lg:border-l lg:border-gray-300 lg:pl-8 pt-8 lg:pt-0 border-t lg:border-t-0 border-gray-300">
            <h3 className="text-sky-700 border-b-2 border-sky-700 inline-block mb-4 text-2xl md:text-3xl font-bold">
              Calendar
            </h3>
            <div className="text-gray-500 italic">Check back soon for upcoming events.</div>
          </div>

        </div>
      </section>

      {/* Featured StoryMap Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 font-sans bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Title */}
          <div className="mb-8 text-left">
            <h2 className="text-green-600 text-2xl md:text-3xl font-semibold">
              Featured StoryMap
            </h2>
            <div className="w-16 h-1 bg-green-600 mt-2"></div>
          </div>

          {/* Content Block */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            
            {/* Image Wrapper */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-64 md:h-80 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/sm.jpeg" 
                  alt="Featured StoryMap"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text & Button */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                We are looking forward to featuring a member&apos;s StoryMap each
                month in this section. The first one celebrates <span className="cooper">GIFON&apos;s</span> GIS
                Hall of Fame inductees.
              </p>
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition shadow-md">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Logos at the bottom */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="w-32 md:w-40 h-auto">
                <Image src="/ph.svg" alt="GIS Corps GIFON" width={160} height={80} className="w-full h-auto" />
            </div>
            <div className="w-32 md:w-40 h-auto">
                <Image src="/ph.svg" alt="GIS Certification Institute" width={160} height={80} className="w-full h-auto" />
            </div>
            <div className="w-32 md:w-40 h-auto">
                <Image src="/ph.svg" alt="GIFON Vanguard Cabinet" width={160} height={80} className="w-full h-auto" />
            </div>
          </div>

        </div>
      </section>

      <div className="h-24" />
    </RevealProvider>
  );
}