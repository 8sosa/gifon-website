"use client";

import React from 'react';
import HeroSection from '@/components/HeroSection';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel';
import PartnersCarousel from '@/components/PartnersCarousel';
import { FlatEvent } from '@/types/types'; 
import RevealProvider from "@/components/ui/RevealProvider";
import Image from 'next/image';
import Link from "next/link";
import { FaRegNewspaper, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa6';
import { Calendar, Newspaper, ArrowRight, Share2 } from 'lucide-react';
import { sections } from './(public)/business-solutions/infrastructure';
import contentData from '@/data/HomeContent.json'; // Import the JSON

// --- 1. Define the Shape of your JSON ---
interface HomeContent {
  hero: {
    title: string;
    description: string;
    longDescription: string;
  };
  sectors: {
    title: string;
    description: string;
  };
  newsletter: {
    title: string;
    description: string;
    cards: Array<{ title: string; sub: string; link: string }>;
    buttonText: string;
  };
  getInvolved: {
    sectionLabel: string;
    title: string;
    description: string;
    buttonText: string;
  };
  communityHub: {
    title: string;
    social: { title: string; description: string };
    news: { title: string; emptyText: string };
    events: { title: string; emptyText: string; subEmptyText: string };
  };
  spotlight: {
    title: string;
    description: string;
    buttonText: string;
  };
}

// --- 2. Cast the imported JSON to this Interface ---
// This tells TypeScript: "Trust me, the JSON looks like this."
const content = contentData as unknown as HomeContent;

// --- Helper to render text with styled GIFON ---
const renderText = (text: string) => {
  if (!text.includes('{GIFON}')) return text;
  
  const parts = text.split('{GIFON}');
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <span className="cooper">GIFON</span>}
    </React.Fragment>
  ));
};

const sectorItems: CarouselItem[] = Object.values(sections).map((sector) => {
  return {
    src: sector.images,
    alt: sector.title,
    title: sector.title, 
    href: `/business-solutions#${sector.id}`, 
  };
});

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
    _startTs?: number; 
}

interface HomePageClientProps {
  upcomingEvents: ClientEvent[];
}

export default function HomePageClient({ upcomingEvents }: HomePageClientProps) {
  return (
    <RevealProvider>
      <HeroSection
        title={<>{renderText(content.hero.title)}</>}
        description={content.hero.description}
        description1={<>{renderText(content.hero.longDescription)}</>}
        backgroundMedia={["/vids/globe.mp4"]}
      />

      {/* --- PARTNERS CAROUSEL --- */}
      <div id='our-partners'></div>
      <PartnersCarousel />

      {/* --- SECTORS CAROUSEL --- */}
      <section id="sectors-carousel" className="py-16 bg-green-900 overflow-hidden border-b border-gray-800">
        <div className="max-w-5xl mx-auto mb-12 px-6 text-center sm:text-justify bellefair">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">{content.sectors.title}</h2>
           <p className="text-base md:text-xl font-light text-gray-200 leading-relaxed text-justify">
             {renderText(content.sectors.description)}
           </p>
        </div>
        <div className="relative py-4">
            {/* Note: If using Tailwind v4, use bg-linear-to-r, otherwise bg-gradient-to-r is correct */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-green-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-green-900 to-transparent z-10 pointer-events-none"></div>
            <LogoCarousel items={sectorItems}/>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="relative w-full min-h-[700px] md:h-[750px] flex items-center justify-center overflow-hidden py-16 md:py-0">
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          autoPlay loop muted playsInline
        >
          <source src="/vids/globe.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 bellefair">{content.newsletter.title}</h2>
            <p className="text-lg md:text-xl text-gray-200 bellefair text-justify">
              {renderText(content.newsletter.description)}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
            {content.newsletter.cards.map((card, i) => (
              <div key={i} className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center hover:bg-white/20 transition-all">
                <FaRegNewspaper className="text-4xl md:text-5xl text-green-400 mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{card.title}</h3>
                <h4 className="text-sm md:text-lg text-green-100 mb-8">{card.sub}</h4>
                <Link href={card.link} className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 group">
                  {content.newsletter.buttonText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GET PLUGGED IN --- */}
      <section className="bg-slate-950 py-16 md:py-24 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <video src="/media/WhatsApp Video 2025-09-26 at 11.00.50_27df64d8.mp4" autoPlay loop muted className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-green-400 font-bold uppercase tracking-widest text-xs mb-4">{content.getInvolved.sectionLabel}</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-6 bellefair">{content.getInvolved.title}</h3>
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed text-justify">
                {content.getInvolved.description}
              </p>
              <Link href="/membership" className="inline-block bg-white text-green-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform hover:scale-105">
                {content.getInvolved.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMUNITY HUB --- */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 bellefair">{content.communityHub.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Social Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800 bellefair">{content.communityHub.social.title}</h3>
              </div>
              <p className="text-gray-600 flex-1 mb-6">
                 {renderText(content.communityHub.social.description)}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto justify-center">
                {[FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-green-600 hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* News Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col min-h-[300px]">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800 bellefair">{content.communityHub.news.title}</h3>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl">
                <Newspaper className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 italic text-center">{content.communityHub.news.emptyText}</p>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-800 bellefair">{content.communityHub.events.title}</h3>
              </div>
              {upcomingEvents.length === 0 ? (
                <div className="py-10 text-center text-gray-400 rounded-lg border-2 border-dashed border-gray-200">
                  <Calendar className="mx-auto mb-4" />
                  {content.communityHub.events.emptyText}
                  <br />
                  {content.communityHub.events.subEmptyText}
                  </div>
              ) : (
                <div className="space-y-4">
                  {upcomingEvents.slice(0, 2).map((ev) => {
                    const { month, day } = getDateParts(ev.startDate);
                    return (
                      <Link key={ev.id} href={`/events/${ev.id}`} className="flex gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors">
                        <div className="bg-white border p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-[10px] font-bold text-red-500 uppercase">{month}</span>
                          <span className="block text-lg font-bold">{day}</span>
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-sm text-gray-900 truncate">{ev.title}</h4>
                          <p className="text-xs text-gray-500 line-clamp-1">{ev.description}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED STORYMAP --- */}
      <section className="px-6 py-20 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/media/spotlight.jpeg" alt="Spotlight" fill className="object-cover"/>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 bellefair">
                {renderText(content.spotlight.title)}
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
              {content.spotlight.description}
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2 mx-auto md:mx-0">
              {content.spotlight.buttonText} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </RevealProvider>
  );
}