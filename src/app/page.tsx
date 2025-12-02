"use client";

import HeroSection from '@/components/HeroSection';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel'; 
import RevealProvider from "@/components/ui/RevealProvider";
import { sections } from '../app/(public)/infrastructure/infrastructure';
import Image from 'next/image';
import { FaRegNewspaper, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa6';
import { Calendar, Newspaper, ArrowRight, Share2 } from 'lucide-react';

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
  title: sector.title, 
  href: `/infrastructure#${sector.id}`, 
}));

export default function HomePage() {
  return (
    <RevealProvider>
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description='Source • Analyze • Automate & Share'
        backgroundMedia={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />

      {/* --- SECTORS CAROUSEL --- */}
      <section id="sectors-carousel" className="py-16 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto mb-10 px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Critical Infrastructure Support</h2>
        </div>
        
        {/* Added a subtle background wrapper for the carousel */}
        <div className="relative py-4">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <LogoCarousel items={sectorItems} loopDurationMs={40000} />
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section id="our-partners" className="py-16 px-4 md:px-6 bg-green-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-green-900 flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-green-300 rounded-full"></span>
            Partners
            <span className="w-12 h-1 bg-green-300 rounded-full"></span>
          </h2>
          <LogoCarousel items={partnerLogos} loopDurationMs={20000} />
        </div>
      </section>

      {/* --- NEWSLETTER SECTION (Video Background) --- */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden group">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-in-out" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/media/WebGIF.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay with gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/80 via-black/40 to-black/30 z-10"></div>

        {/* Glass Card Content */}
        <div className="relative z-20 text-center px-4 w-full max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl hover:bg-white/15 transition-all duration-300">
            <div className="text-5xl text-green-400 mb-6 flex w-full items-center justify-center drop-shadow-lg">
                <FaRegNewspaper />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                - Eyes on Location -
            </h3>
            <h4 className="text-lg md:text-xl font-medium text-green-100 mb-8">
                The GeoINSIGHT Bulletin
            </h4>
            
            <a 
              href="/newsletter" 
              className="group inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/40 transform hover:-translate-y-1"
            >
              UNLOCK INSIGHT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- "GET PLUGGED IN" (Dark Theme Gradient) --- */}
      <div className="bg-linear-to-br from-gray-900 via-slate-900 to-green-950 py-20 px-4 sm:px-8 text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Video Container with Glow */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                <div className="absolute inset-0 bg-green-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <video 
                  src="/vids/vid1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6">
              <div>
                  <h2 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">Community</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Get Involved
                  </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join a community dedicated to mapping the future and empowering the nation. Whether you are an individual or an organization, discover how you can contribute to the GeoINT ecosystem.
              </p>
              <div className="pt-4">
                <a href="/membership" className="inline-block bg-white text-green-900 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all hover:scale-105">
                    Join Us Today
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* --- INFO HUB: SOCIAL, NEWS, CALENDAR (Grid Layout) --- */}
      <section className="bg-gray-50 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Community Hub</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Social Media */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Share2 size={24} /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Connect</h3>
                </div>
                <p className="text-gray-500 mb-6">Follow <span className="cooper">GIFON</span> on social media for real-time updates.</p>
                <div className="grid grid-cols-5 gap-2 mt-auto">
                    {[
                        { icon: FaFacebook, color: "hover:text-blue-600" },
                        { icon: FaLinkedin, color: "hover:text-blue-700" },
                        { icon: FaInstagram, color: "hover:text-pink-600" },
                        { icon: FaYoutube, color: "hover:text-red-600" },
                        { icon: FaTwitter, color: "hover:text-black" }
                    ].map((item, i) => (
                        <a key={i} href="#" className={`flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 text-gray-400 transition-colors ${item.color}`}>
                            <item.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Card 2: Latest News */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Newspaper size={24} /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Latest News</h3>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
                    <Newspaper className="text-gray-300 mb-2" size={40} />
                    <span className="text-gray-400 font-medium italic">No recent news available.</span>
                </div>
            </div>

            {/* Card 3: Calendar */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Calendar size={24} /></div>
                    <h3 className="text-2xl font-bold text-gray-800">Events</h3>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
                    <Calendar className="text-gray-300 mb-2" size={40} />
                    <span className="text-gray-400 font-medium italic">Check back soon for events.</span>
                </div>
            </div>

            </div>
        </div>
      </section>

      {/* --- FEATURED STORYMAP --- */}
      <section className="px-4 md:px-8 py-20 bg-white relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 rounded-l-[100px] z-0 hidden md:block"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/sm.jpeg" 
                  alt="Featured StoryMap"
                  fill
                  className="object-cover"
                />
                {/* Overlay Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-green-800 shadow-sm">
                    Featured
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="inline-block mb-4">
                <h2 className="text-green-600 text-sm font-bold uppercase tracking-widest mb-2">
                  Showcase
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Featured StoryMap
                </h3>
              </div>
              
              <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                We are looking forward to featuring a member&apos;s StoryMap each
                month in this section. The first one celebrates <span className="cooper">GIFON&apos;s</span> GIS
                Hall of Fame inductees.
              </p>
              
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2">
                Launch StoryMap <ArrowRight size={18} />
              </button>

              {/* Logos Row */}
              <div className="flex flex-wrap items-center gap-8 mt-12 border-t border-gray-100 pt-8 w-full">
                <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image src="/ph.svg" alt="GIS Corps" width={100} height={50} className="h-10 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image src="/ph.svg" alt="GISCI" width={100} height={50} className="h-10 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image src="/ph.svg" alt="Vanguard" width={100} height={50} className="h-10 w-auto" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="h-12" />
    </RevealProvider>
  );
}