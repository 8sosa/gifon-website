"use client";

import HeroSection from '@/components/HeroSection';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel';
import PartnersCarousel from '@/components/PartnersCarousel';
import { FlatEvent } from '@/types/types'; 
import RevealProvider from "@/components/ui/RevealProvider";
import Image from 'next/image';
import Link from "next/link";
import { FaRegNewspaper, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa6';
import { Calendar, Newspaper, ArrowRight, Share2 } from 'lucide-react';
import { sections } from './(public)/infrastructure/infrastructure';

// --- Static Data ---
const partnerLogos: CarouselItem[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/dgi.jpeg', alt: 'DGI London', caption: 'Media Partners' },
];

const sectorItems: CarouselItem[] = Object.values(sections).map((sector) => {
  // 1. Determine the image source safely
  const imageSrc = Array.isArray(sector.images) 
    ? sector.images[0] 
    : sector.images;

  return {
    src: imageSrc,
    alt: sector.title,
    title: sector.title, 
    href: `/infrastructure#${sector.id}`, 
  };
});

// --- Helper for Date Badge ---
function getDateParts(dateString?: string) {
  if (!dateString) return { month: '', day: '' };
  const date = new Date(dateString);
  return {
    month: date.toLocaleString('default', { month: 'short' }),
    day: date.getDate()
  };
}
interface ClientEvent extends Omit<FlatEvent, 'description'> {
    description: string;
    _startTs?: number; // Optional, since we added it during processing
  }
// --- Props Interface ---
// We define what data this component needs from the server
interface HomePageClientProps {
  upcomingEvents: ClientEvent[]; // You can use a stricter type here if you have one
}

export default function HomePageClient({ upcomingEvents }: HomePageClientProps) {
  return (
    <RevealProvider>
      <HeroSection
        title={
        <>
          Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>)
        </>
        }
        description='Source • Analyze • Automate • Share'
        backgroundMedia={[
          "/vids/globe.mp4",
        ]}
      />

      {/* --- SECTORS CAROUSEL --- */}
      <section id="sectors-carousel" className="py-16 bg-green-900 overflow-hidden border-b border-gray-100">
        <div className="max-w-5xl mx-auto mb-10 px-6 text-center bellefair gap-6">
           {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Critical Infrastructure Support</h2> */}
           <span className="text-xl font-bold text-gray-100">Our core areas of support is critical infrastructure, where Geospatial Intelligence, policy insights, and advanced technologies are applied to strengthen, secure and future proof the systems essential to national security, economic resilience and national development.</span>
        </div>
        <div className="relative py-4">
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-green-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-green-900 to-transparent z-10 pointer-events-none"></div>
            <LogoCarousel items={sectorItems} loopDurationMs={40000} />
        </div>
      </section>

      <PartnersCarousel />

      {/* --- NEWSLETTER SECTION --- */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden group">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-in-out" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/vids/globe.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
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

      {/* --- "GET PLUGGED IN" --- */}
      <div className="bg-linear-to-br from-gray-900 via-slate-900 to-green-950 py-20 px-4 sm:px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Video Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                <div className="absolute inset-0 bg-green-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <video 
                  src="/media/WhatsApp Video 2025-09-26 at 11.00.50_27df64d8.mp4" 
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
                  <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight bellefair">
                    Get Involved
                  </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join a growing community of professionals, institutions and innovators advancing Geospatial Intelligence in support of Nigeria’s Critical Infrastructure, National Security and Sustainable development.
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

      {/* --- COMMUNITY HUB --- */}
      <section className="bg-gray-50 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 bellefair">Community Hub</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Social Media */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Share2 size={24} /></div>
                    <h3 className="text-2xl font-bold text-gray-800 bellefair">Connect</h3>
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
                    <h3 className="text-2xl font-bold text-gray-800 bellefair">Latest News</h3>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
                    <Newspaper className="text-gray-300 mb-2" size={40} />
                    <span className="text-gray-400 font-medium italic">No recent news available.</span>
                </div>
            </div>

            {/* Card 3: Events (Using the data passed from server) */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Calendar size={24} /></div>
                    <h3 className="text-2xl font-bold text-gray-800 bellefair">Events</h3>
                </div>
                {upcomingEvents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-dashed border-gray-300">
                    <Calendar className="text-gray-300 w-16 h-16 mb-4" />
                    <p className="text-lg font-medium text-gray-600">No upcoming events scheduled.</p>
                    <p className="text-gray-400">Join our mailing list to stay updated.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {upcomingEvents.slice(0, 2).map((ev) => { 
                      const { month, day } = getDateParts(ev.startDate);
                      return (
                      <Link
                        key={ev.id}
                        href={`/events/${ev.id}`}
                        className="group flex gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-green-50 transition-colors"
                      >
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm min-w-[60px] h-fit">
                          <span className="block text-xs font-bold text-red-500 uppercase tracking-wider">{month}</span>
                          <span className="block text-xl font-extrabold text-gray-900 leading-none">{day}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors leading-tight mb-1">
                            {ev.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {ev.description}
                          </p>
                        </div>
                      </Link>
                    )})}
                  </div>
                )}
            </div>

            </div>
        </div>
      </section>

      {/* --- FEATURED STORYMAP --- */}
      <section className="px-4 md:px-8 py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 rounded-l-[100px] z-0 hidden md:block"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image src="/media/spotlight.jpeg" alt="Victory Lucky" fill className="object-cover"/>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-green-800 shadow-sm">Featured</div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="inline-block mb-4">
                <h2 className="text-green-600 text-sm font-bold uppercase tracking-widest mb-2">Showcase</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Members Spotlight</h3>
              </div>
              <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                We Look Forward to featuring a selected members story each month in this section. This feature celebrates a distinguished inductee into <span className="cooper">GIFON&apos;s</span> Hall of Fame.
              </p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2">
                Launch Spotlight <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </RevealProvider>
  );
}