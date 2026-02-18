// app/(public)/forums/ForumsClient.tsx

"use client";

import { useState } from 'react'; // Import useState
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import allForums from './forums'; 
import { 
  Users, HeartHandshake, MapPin, Cpu, ArrowRight, Globe, Lightbulb, Award, ChevronRight, X 
} from 'lucide-react';

// --- 1. Icon & Color Helpers ---
const getForumIcon = (id: string) => {
  switch (id) {
    case 'young-Professionals': return <Users size={40} className="w-8 h-8 md:w-10 md:h-10" />;
    case 'women-In-Geoint': return <HeartHandshake size={40} className="w-8 h-8 md:w-10 md:h-10" />;
    default: return <Globe size={40} className="w-8 h-8 md:w-10 md:h-10" />;
  }
};

const getForumColor = (id: string) => {
  switch (id) {
    case 'young-Professionals': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
    case 'women-In-Geoint': return 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white';
    default: return 'bg-gray-50 text-gray-600';
  }
};

// --- 2. Programs Data ---
const forumDetails: Record<string, any> = {
  'young-Professionals': {
    programs: [
      { title: "Boot Camps", icon: Cpu, anchor: "boot-camps" },
      { title: 'STEM & GEOINT Awareness', icon: Lightbulb, anchor: 'stem-geoint-awareness' },
      { title: 'GeoInnovation Challenge', icon: Award, anchor: 'geoinnovation-challenge' }
    ]
  },
  'women-In-Geoint': {
    programs: [
      { title: 'Women in GeoINT Initiatives', icon: Users, anchor: 'forums/women-in-geoint-Initiatives' },
    ]
  }
};

const getGroupIcon = (id: string) => {
  switch (id) {
    case 'policy-governance-ethics': return <Award size={40} className="w-8 h-8 md:w-10 md:h-10" />;
    case 'industry-private-sector': return <Cpu size={40} className="w-8 h-8 md:w-10 md:h-10" />;
    default: return <Globe size={40} className="w-8 h-8 md:w-10 md:h-10" />;
  }
};

const allGroups = [
  {
    id: 'policy-governance-ethics',
    title: 'Policy, Governance & Ethics Working Group',
    description: 'The institutional mechanism established to uphold accountability, integrity, and transparency in all GIFON operations.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'industry-private-sector',
    title: 'Industry and Private Sector Group',
    description: 'A strategic platform for driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities.',
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function ForumsClient() {
  // STATE: Track which forum ID is currently active (clicked)
  const [activeForum, setActiveForum] = useState<string | null>(null);

  const toggleForum = (id: string) => {
    if (activeForum === id) {
      setActiveForum(null); // Close if already open
    } else {
      setActiveForum(id); // Open the clicked one
    }
  };

  return (
    <>
      <HeroSection
        title="Groups & Forums"
        description1="Connecting minds, building networks, and advancing geospatial intelligence together."
        description={<><span className="cooper">GIFON</span> Groups & Forums provide dynamic platforms for professionals, practitioners, policymakers, researchers, and enthusiasts to connect, collaborate, and share knowledge within the geospatial intelligence ecosystem. These platforms foster active engagement, peer learning, and multi stakeholder dialogue on key topics in GEOINT, STEM, innovation, national security, infrastructure, and sustainable development. Through structured groups, interest communities, and thematic forums, participants can exchange insights, discuss challenges, showcase innovations, and develop practical solutions for national and regional priorities. <span className="cooper">GIFON</span> Groups & Forums are designed to bridge gaps between academia, industry, government, and civil society, building a strong, informed, and collaborative GEOINT community.</>} // (Abbreviated for brevity)
        backgroundMedia={["/media/Background Groups and forums.jpg"]}
      />

      <main className="font-sans bg-gray-50 min-h-screen overflow-x-hidden">
        
        <section className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
           <div className="text-center mb-12 md:mb-16">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Our Forums</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-8 mb-20">
            {allForums.map((forum, idx) => {
              const details = forumDetails[forum.id];
              const isActive = activeForum === forum.id;
              
              return (
                <div 
                  key={forum.id} 
                  id={forum.anchor}
                  // FIX: Dynamically change z-index based on active state.
                  // If active: z-50 (Forces it on top of everything).
                  // If inactive: z-0, but hover:z-30 so it pops slightly when mouseover.
                  className={`relative transition-all duration-200 ${isActive ? 'z-50' : 'z-0 hover:z-30'}`}
                >
                  
                  {/* --- A. THE SLIDING DRAWER (Tablet/Desktop) --- */}
                  {details && (
                    <div className={`
                      hidden md:block 
                      absolute top-6 bottom-6 w-[300px] bg-slate-900/95 backdrop-blur-xl text-white
                      transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) shadow-2xl
                      rounded-xl border border-white/10 
                      
                      /* STATE LOGIC */
                      ${isActive 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 pointer-events-none' 
                        }

                      /* 2-COLUMN DIRECTION LOGIC */
                      /* Left Column default: Slide from behind to right */
                      md:left-[95%] 
                      ${!isActive && 'md:-translate-x-[110%]'} 
                      md:origin-left

                      /* Right Column override: Slide from behind to left */
                      ${(idx + 1) % 2 === 0 ? `
                          md:left-auto md:right-[95%] md:origin-right
                          ${!isActive && 'md:translate-x-[110%]'}
                      ` : ''}
                    `}>
                      <div className="h-full flex flex-col p-6 overflow-hidden relative">
                            {/* Close Button */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); setActiveForum(null); }}
                              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                              <X size={20} />
                            </button>

                            <div className="absolute top-4 bottom-4 left-0 w-1 bg-linear-to-b from-green-500 to-transparent opacity-50"></div>
                            
                            <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-6 pl-4 mt-2">
                              Active Programs
                            </h4>
                            
                            <div className="space-y-4 grow pl-2">
                              {details.programs.map((prog: any, pIdx: number) => {
                                  const href = prog.anchor.includes('/') ? `/${prog.anchor}` : `/education/${prog.anchor}`;
                                  return (
                                      <Link key={pIdx} href={href} className="flex items-start gap-3 group/link hover:bg-white/10 p-3 rounded-lg transition-colors">
                                          <div className="text-gray-400 group-hover/link:text-green-400 mt-1">
                                              <prog.icon size={16} />
                                          </div>
                                          <div className="text-sm font-bold text-gray-200 group-hover/link:text-white transition-colors">
                                              {prog.title}
                                          </div>
                                      </Link>
                                  );
                              })}
                            </div>
                      </div>
                    </div>
                  )}

                  {/* --- B. THE MAIN CARD --- */}
                  <div 
                      className={`
                          relative z-10 h-full scroll-mt-24 bg-white rounded-3xl shadow-lg border flex flex-col transition-all duration-300 cursor-pointer
                          ${isActive ? 'border-green-500 shadow-2xl ring-2 ring-green-100' : 'border-gray-100 hover:shadow-xl hover:-translate-y-1'}
                      `}
                      id={forum.id}
                      onClick={() => toggleForum(forum.id)}
                  >
                    
                    <div className="p-6 md:p-8 pb-4">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getForumColor(forum.id)}`}>
                          {getForumIcon(forum.id)}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {forum.title}
                      </h3>
                    </div>

                    <div className="px-6 md:px-8 pb-6 md:pb-8 grow flex flex-col">
                      <p className="text-gray-600 leading-relaxed text-sm text-justify mb-6">
                        {forum.description}
                      </p>

                      {/* DESKTOP/TABLET TRIGGER BUTTON */}
                      {details && (
                            <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-green-600 mt-auto pt-4 group">
                              {isActive ? 'Close Programs' : 'View Programs'}
                              <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                            </div>
                      )}

                      {/* MOBILE ACCORDION (Same as before) */}
                      {details && (
                        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[500px] opacity-100 mt-6 pt-6 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
                          {/* Mobile content ... */}
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                              Active Programs
                          </h4>
                          <div className="space-y-3">
                            {details.programs.map((prog: any, pIdx: number) => {
                              const href = prog.anchor.includes('/') ? `/${prog.anchor}` : `/education/${prog.anchor}`;
                              return (
                                <Link key={pIdx} href={href} className="flex items-center gap-3 p-2 -mx-2 rounded-lg active:bg-gray-50 transition-colors" onClick={(e) => e.stopPropagation()}>
                                  <div className="text-green-600">
                                    <prog.icon size={14} />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700">
                                    {prog.title}
                                  </span>
                                  <ChevronRight size={14} className="ml-auto text-gray-400" />
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )}
                      
                      {/* Mobile Toggle Indicator */}
                      {details && (
                            <div className="md:hidden flex items-center gap-2 text-sm font-semibold text-green-600 mt-4">
                              {isActive ? 'Hide Programs' : 'Show Programs'}
                              <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                            </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
           </div>
        </section>

        {/* --- NEW SECTION: Explore Our Groups --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Explore Our Groups</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allGroups.map((group) => (
                <div 
                  key={group.id}
                  id={group.id}
                  className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${group.color}`}>
                    {getGroupIcon(group.id)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {group.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {group.description}
                  </p>
                  
                  <Link 
                    href={`/forums/${group.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (Unchanged) */}
        <section className="py-16 md:py-20 bg-gray-900 text-white border-t border-gray-800 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to shape the future?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="px-8 py-3.5 md:py-4 bg-green-600 rounded-full font-bold hover:bg-green-500 transition-colors text-sm md:text-base">Become a Member</Link>
              <Link href="/contact-us" className="px-8 py-3.5 md:py-4 border border-gray-600 rounded-full font-bold hover:bg-white/10 transition-colors text-sm md:text-base">Contact Us</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}