import React from 'react';
import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import PartnersCarousel from '@/components/PartnersCarousel';
import Image from 'next/image';
import { FeatureAccordion } from '@/components/FeatureAccordion';
import { 
  Target, Eye, Layers, GraduationCap, Users, Shield, Sprout, ScrollText, Database, Microscope, Megaphone, Globe, Building2, FileBadge, 
} from 'lucide-react';
import MotionDiv from "@/components/MotionDiv"; 
import MotionImg from "@/components/MotionImg";
import FoundingVision from '@/components/FVision';
import aboutData from '@/data/aboutContent.json'; // Import the JSON

// --- 1. Define Interface & Cast Data ---
interface AboutContent {
  hero: { title: string; description: string; };
  intro: { title: string; paragraphs: string[]; };
  aim: { title: string; text: string; };
  mission: { title: string; text: string; };
  vision: { title: string; text: string; };
  objectives: {
    title: string;
    description: string;
    list: Array<{ title: string; text: string; }>;
  };
  coreValues: {
    title: string;
    description: string;
    list: Array<{ title: string; img: string; desc: string; }>;
  };
}

const content = aboutData as unknown as AboutContent;

// --- 2. Helper to style {GIFON} text ---
const renderText = (text: string) => {
  if (!text.includes('{GIFON}')) return text;
  const parts = text.split('{GIFON}');
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <span className="cooper text-inherit">GIFON</span>}
    </React.Fragment>
  ));
};

function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
  return members.filter((member) => member.category === category);
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- 3. Icon Mapping ---
// We map the JSON list index to these icons in exact order
const objectiveIcons = [
  Layers, GraduationCap, Users, Shield, Sprout, ScrollText, 
  Database, Microscope, Megaphone, Globe, Building2, FileBadge
];

// Combine JSON data with Icons for the Accordion
const processedFeatures = content.objectives.list.map((item, index) => {
  const Icon = objectiveIcons[index] || Layers; // Fallback to Layers if index mismatch
  return {
    title: item.title,
    text: item.text,
    icon: <Icon size={24} />,
    largeIcon: <Icon size={140} strokeWidth={1.5} />
  };
});

export default async function AboutPage() {
  const members: FlatMember[] = await getTeamMembers();

  return (
    <>
      <HeroSection
        title={content.hero.title}
        description={<>{renderText(content.hero.description)}</>}
        backgroundMedia={['/media/AIM copy 2.jpg']}
      />
      
      <main className="font-sans text-gray-800 bg-white overflow-hidden">
        
        {/* --- 1. INTRO / WELCOME SECTION --- */}
        <section className="relative px-6 py-16 md:py-24 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

          <div className="w-full lg:w-1/2 relative group lg:top-24">
            <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-transform duration-500 hover:scale-[1.01]">
                <Image
                src="/media/about us.jpg" 
                alt="Geospatial Intelligence for Nigeria"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-green-600/30 -z-10"></div>
          </div>
          
          <div className='w-full lg:w-1/2 flex flex-col items-start'>
            <div className="inline-block mb-6 text-left">
              <h2 className="text-gray-900 text-4xl md:text-5xl font-bold bellefair">
                {content.intro.title} <span className="cooper text-green-600">GIFON</span>
              </h2>
              <div className="w-24 h-1.5 bg-green-600 mt-4 rounded-full"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify space-y-6">
               {content.intro.paragraphs.map((para, i) => (
                 <p key={i}>{renderText(para)}</p>
               ))}
            </div>
          </div>
        </section>

        {/* --- 2. AIM SECTION --- */}
        <div id="aim" className="scroll-mt-24"></div>
        <section className="relative py-20 px-6 bg-slate-50 border-y border-gray-100">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Card */}
            <MotionDiv
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <div className="bg-green-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gray-800"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">{content.aim.title}</h2>
                <p className="text-gray-200 leading-relaxed text-justify text-md whitespace-pre-line">
                  {renderText(content.aim.text)}
                </p>
              </div>
            </MotionDiv>
            
            {/* Right: Image */}
            <div className="w-full order-1 lg:order-2">
                <MotionImg
                src='/media/AIM copy.jpg'
                alt="Geospatial innovation"
                className="rounded-[2.5rem] shadow-2xl w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                />
            </div>
          </div>
        </section>

        {/* --- MISSION + VISION --- */}
        <div id="mission-vision" className="scroll-mt-24"></div>
        <section className="py-24 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* MISSION CARD */}
            <MotionDiv
              className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-gray-800 hover:border-gray-700 transition-colors"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 text-green-500">
                <Target size={240} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-green-400">
                  <Target size={36} />
                  {content.mission.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-justify text-lg grow">
                  {renderText(content.mission.text)}
                </p>
              </div>
            </MotionDiv>

            {/* VISION CARD */}
            <MotionDiv
              className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-gray-800 hover:border-gray-700 transition-colors"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 text-green-500">
                <Eye size={240} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-green-400">
                  <Eye size={36} />
                  {content.vision.title}
                </h2>
                <div className="grow flex items-center">
                    <p className="text-gray-300 leading-relaxed text-justify text-lg md:text-xl font-medium">
                      {content.vision.text}
                    </p>
                </div>
              </div>
            </MotionDiv>

          </div>
        </section>

        {/* --- OBJECTIVES --- */}
        <div id="objectives" className="scroll-mt-24"></div>
        <section className="py-16 px-4 md:px-6 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{content.objectives.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {renderText(content.objectives.description)}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
              {/* FeatureAccordion now uses the data combined with icons */}
              <FeatureAccordion items={processedFeatures} />
            </div>
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <div id="core-values" className="scroll-mt-24"></div>
        <section className="py-24 px-6 bg-linear-to-r from-gray-900 via-black to-gray-800 text-white border-t-4 border-green-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.coreValues.title}</h2>
            <p className='mb-8 max-w-4xl mx-auto text-justify md:text-center'>
               {renderText(content.coreValues.description)}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.coreValues.list.map((val, i) => (
                <MotionDiv
                  key={i}
                  className="p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl ring-1 ring-white/10 hover:bg-white/10 hover:ring-green-500/50 hover:shadow-green-900/30 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-4 flex items-center justify-center h-16 w-16 bg-linear-to-br from-white/10 to-transparent rounded-full p-3 shadow-inner">
                      <div className="relative w-full h-full">
                        <Image 
                          src={val.img} 
                          alt={val.title} 
                          fill 
                          className="object-contain p-0.5" 
                        />
                      </div>
                  </div>

                  <h3 className="text-xl font-bold text-green-400 sen">{val.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{val.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Vision */}
        <div id="founding-vision" className='-z-10 bg-gray-50'></div>
        <FoundingVision />
        
        {/* --- SECTION 2: MANAGEMENT TEAM --- */}
        <div id="management-team" className=' -z-10 bg-gray-50'></div>
        <TeamGrid members={mapMembersByCategory(members, 'Advisory')} />
        
        <div id='our-partners' className="scroll-mt-24"></div>
        <PartnersCarousel />
        
      </main>
    </>
  );
}