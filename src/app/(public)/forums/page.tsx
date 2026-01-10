"use client";

import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';
import allForums from './forums'; 
import { 
  Users, Briefcase, Scale, GraduationCap, HeartHandshake, Calendar, MapPin, Heart, Cpu, ArrowRight, Globe, Lightbulb, Target, BookOpen, Presentation, Rocket, Award, Mic, ChevronRight 
} from 'lucide-react';

// --- 1. Icon & Color Helpers ---
const getForumIcon = (id: string) => {
  switch (id) {
    case 'youngProfessionals': return <Users size={40} />;
    case 'womenInGeoint': return <HeartHandshake size={40} />;
    case 'industry': return <Briefcase size={40} />;
    case 'policy': return <Scale size={40} />;
    case 'academia': return <GraduationCap size={40} />;
    default: return <Globe size={40} />;
  }
};

const getForumColor = (id: string) => {
  switch (id) {
    case 'youngProfessionals': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
    case 'womenInGeoint': return 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white';
    case 'industry': return 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
    case 'policy': return 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white';
    case 'academia': return 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white';
    default: return 'bg-gray-50 text-gray-600';
  }
};

// --- 2. Programs Data ---
const forumDetails: Record<string, any> = {
  youngProfessionals: {
    programs: [
      { title: "Boot Camps", icon: Cpu, anchor: "boot-camps" },
      { title: 'STEM & GEOINT Awareness',
      icon: Lightbulb,
      anchor: 'stem-geoint-awareness' },
      { title: 'GeoInnovation Challenge',
      icon: Award,
      anchor: 'geoinnovation-challenge'
     }
    ]
  },
  womenInGeoint: {
    programs: [
      { title: 'Women in Leadership',
      icon: Users,
      anchor: 'women-geospatial-leadership' },
      { title: 'Community Projects',
      icon: MapPin,
      anchor: 'community-service-projects' }
    ]
  },
  industry: {
    programs: [
      { title: 'GeoCommunity Dev',
      icon: Globe,
      anchor: 'geocommunity-development' },
      { title: 'GeoConnect Networking',
      icon: Users,
      anchor: 'geoconnect-networking' },
      {title: 'Policy Roundtables',
      icon: Mic,
      anchor: 'public-lectures-roundtables'}
    ]
  }
};

interface ModalState {
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

export default function ForumsPage() {
  const [modalData, setModalData] = useState<ModalState>({ isOpen: false, content: null, title: null });
  
  const openModal = (content: string, title: string) => {
    setModalData({ isOpen: true, content, title });
  };

  const closeModal = () => setModalData({ isOpen: false, content: null, title: null });

  return (
    <>
      <HeroSection
        title="Groups & Forums"
        description="Connecting Minds. Advancing GeoINT. Strengthening National Capacity."
        backgroundMedia={["/media/Background Groups and forums.jpg"]}
      />

      <main className="font-sans bg-gray-50 min-h-screen">
        
        {/* --- 1. Introduction --- */}
        <section className="py-20 px-4 md:px-6 bg-white rounded-b-[3rem] shadow-sm mb-12 relative z-10">
          <div className='max-w-6xl mx-auto text-center'>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Collaboration Drives <span className="text-green-700">Innovation</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
              The GIFON Groups & Forums serve as structured communities of practice where professionals can learn, engage, and innovate together.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {[Users, Globe, Lightbulb, Target].map((Icon, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-full text-green-600">
                        <Icon size={24} />
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* --- 2. The Forums Grid (Side Flyout FIXED) --- */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Explore Our Forums</h2>
             <p className="text-gray-500 mt-2">Hover over a card to reveal its programs</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-20">
             {allForums.map((forum, idx) => {
               const details = forumDetails[forum.id];
               
               return (
                 // GROUP WRAPPER: relative for positioning, hover:z-50 puts this entire stack above neighbors
                 <div 
                    key={forum.id} 
                    className="group relative hover:z-50" 
                 >
                    {/* --- A. THE SLIDING DRAWER --- */}
                   {details && (
                     <div className={`
                        hidden md:block 
                        absolute top-6 bottom-6 w-[300px] bg-slate-900/95 backdrop-blur-xl text-white z-0
                        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) shadow-2xl
                        rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100

                        /* MD Screen (2 Cols) Logic */
                        md:left-[95%] md:-translate-x-[110%] md:group-hover:translate-x-0
                        md:origin-left
                        ${(idx + 1) % 2 === 0 ? 'md:left-auto md:right-[95%] md:translate-x-[110%] md:group-hover:translate-x-0 md:origin-right' : ''}

                        /* LG Screen (3 Cols) Logic - Overrides MD */
                        lg:left-[95%] lg:-translate-x-[110%] lg:group-hover:translate-x-0
                        lg:origin-left
                        ${(idx + 1) % 3 === 0 ? 'lg:left-auto lg:right-[95%] lg:translate-x-[110%] lg:group-hover:translate-x-0 lg:origin-right' : ''}
                     `}>
                        <div className="h-full flex flex-col p-6 overflow-hidden">
                             {/* Decorative vertical line */}
                             <div className="absolute top-4 bottom-4 left-0 w-1 bg-linear-to-b from-green-500 to-transparent opacity-50"></div>
                             
                             <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-6 pl-4">
                                Active Programs
                             </h4>
                             
                             <div className="space-y-4 grow pl-2">
                                {details.programs.map((prog: any, pIdx: number) => (
                                    <Link key={pIdx} href={`/education/${prog.anchor}`} className="flex items-start gap-3 group/link hover:bg-white/10 p-3 rounded-lg transition-colors">
                                        <div className="text-gray-400 group-hover/link:text-green-400 mt-1">
                                            <prog.icon size={16} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-200 group-hover/link:text-white transition-colors">
                                                {prog.title}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                             </div>
                             
                             <div className="pt-4 mt-2 border-t border-white/10 pl-2">
                                <span className="text-xs text-gray-400 flex items-center gap-1 group-hover/btn:text-white cursor-pointer transition-colors hover:text-green-400">
                                    View full details <ChevronRight size={12} />
                                </span>
                             </div>
                        </div>
                     </div>
                   )}

                   {/* --- B. THE MAIN CARD --- */}
                   {/* z-20 ensures it stays ON TOP of its own sliding drawer */}
                   <div className="relative z-20 h-full bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:border-green-100">
                     
                     <div className="p-8 pb-4">
                       <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getForumColor(forum.id)}`}>
                          {getForumIcon(forum.id)}
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                         {forum.title}
                       </h3>
                     </div>

                     <div className="px-8 pb-8 grow">
                       <p className="text-gray-600 leading-relaxed line-clamp-3 text-sm">
                         {forum.description}
                       </p>
                     </div>

                     <div className="p-8 pt-0 mt-auto">
                       <button
                         onClick={() => openModal(forum.policyContent, `${forum.title} Policy`)}
                         className="w-full py-3 px-4 rounded-xl bg-gray-50 hover:bg-green-600 text-gray-700 hover:text-white font-semibold transition-all text-sm flex items-center justify-between group/btn"
                       >
                         <span>View Policy</span>
                         <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                       
                       {/* Mobile Only Program Hint */}
                       <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-400 text-center">
                                Tap to see {details?.programs.length || 0} active programs
                            </p>
                       </div>
                     </div>
                   </div>

                 </div>
               );
             })}
           </div>
        </section>

        {/* --- 3. Join CTA --- */}
        <section className="py-20 bg-gray-900 text-white border-t border-gray-800 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to shape the future?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/membership" className="px-8 py-4 bg-green-600 rounded-full font-bold hover:bg-green-500 transition-colors">Become a Member</a>
              <a href="/contact-us" className="px-8 py-4 border border-gray-600 rounded-full font-bold hover:bg-white/10 transition-colors">Contact Us</a>
            </div>
          </div>
        </section>

      </main>

      <Modal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        title={modalData.title}
        content={modalData.content}
      />
    </>
  );
}