// app/(public)/forums/ForumsClient.tsx

"use client";

import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import allForums from './forums'; 
import { 
  Users, HeartHandshake, MapPin, Cpu, ArrowRight, Globe, Lightbulb, Award, ChevronRight 
} from 'lucide-react';

// --- 1. Icon & Color Helpers ---
const getForumIcon = (id: string) => {
  switch (id) {
    case 'young-Professionals': return <Users size={40} />;
    case 'women-In-Geoint': return <HeartHandshake size={40} />;
    default: return <Globe size={40} />;
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

export default function ForumsClient() {
  
  return (
    <>
      <HeroSection
        title="Groups & Forums"
        description="Connecting minds, building networks, and advancing geospatial intelligence together."
        backgroundMedia={["/media/Background Groups and forums.jpg"]}
      />

      <main className="font-sans bg-gray-50 min-h-screen">
        
        {/* --- 2. The Forums Grid --- */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <div className='pb-16'>
            <p><span className="cooper">GIFON</span> Groups & Forums provide dynamic platforms for professionals, practitioners, policymakers, researchers, and enthusiasts to connect, collaborate, and share knowledge within the geospatial intelligence ecosystem. These platforms foster active engagement, peer learning, and multi stakeholder dialogue on key topics in GEOINT, STEM, innovation, national security, infrastructure, and sustainable development. Through structured groups, interest communities, and thematic forums, participants can exchange insights, discuss challenges, showcase innovations, and develop practical solutions for national and regional priorities. <span className="cooper">GIFON</span> Groups & Forums are designed to bridge gaps between academia, industry, government, and civil society, building a strong, informed, and collaborative GEOINT community.</p>
          </div>
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Explore Our Forums</h2>
           </div>

           {/* Grid is explicitly 2 columns on MD and up */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 mb-20">
             {allForums.map((forum, idx) => {
               const details = forumDetails[forum.id];
               
               return (
                 <div key={forum.id} className="group relative hover:z-50">
                    {/* --- A. THE SLIDING DRAWER --- */}
                   {details && (
                     <div className={`
                        hidden md:block 
                        absolute top-6 bottom-6 w-[300px] bg-slate-900/95 backdrop-blur-xl text-white z-0
                        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) shadow-2xl
                        rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100

                        /* 2-COLUMN LOGIC (Applies to MD, LG, XL) */
                        
                        /* DEFAULT (Left Column): Slide out to the RIGHT */
                        md:left-[95%] md:-translate-x-[110%] md:group-hover:translate-x-0
                        md:origin-left

                        /* OVERRIDE (Right Column - Every 2nd item): Slide out to the LEFT */
                        ${(idx + 1) % 2 === 0 ? 'md:left-auto md:right-[95%] md:translate-x-[110%] md:group-hover:translate-x-0 md:origin-right' : ''}
                     `}>
                        <div className="h-full flex flex-col p-6 overflow-hidden">
                             <div className="absolute top-4 bottom-4 left-0 w-1 bg-linear-to-b from-green-500 to-transparent opacity-50"></div>
                             
                             <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-6 pl-4">
                                Active Programs
                             </h4>
                             
                             <div className="space-y-4 grow pl-2">
                                {details.programs.map((prog: any, pIdx: number) => {
                                    // LOGIC UPDATE: 
                                    // If anchor contains '/', use it directly (e.g. forums/women...), 
                                    // otherwise assume it lives under /education/
                                    const href = prog.anchor.includes('/') 
                                        ? `/${prog.anchor}` 
                                        : `/education/${prog.anchor}`;

                                    return (
                                        <Link key={pIdx} href={href} className="flex items-start gap-3 group/link hover:bg-white/10 p-3 rounded-lg transition-colors">
                                            <div className="text-gray-400 group-hover/link:text-green-400 mt-1">
                                                <prog.icon size={16} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-200 group-hover/link:text-white transition-colors">
                                                    {prog.title}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
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
                   <div className="relative z-20 h-full bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:border-green-100" id={forum.id}>
                     
                     <div className="p-8 pb-4">
                       <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getForumColor(forum.id)}`}>
                          {getForumIcon(forum.id)}
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                         {forum.title}
                       </h3>
                     </div>

                     <div className="px-8 pb-8 grow">
                       <p className="text-gray-600 leading-relaxed text-sm">
                         {forum.description}
                       </p>
                     </div>

                     {/* <div className="p-8 pt-0 mt-auto">
                       <Link
                         href={`/forums/${forum.id}`}
                         className="w-full py-3 px-4 rounded-xl bg-gray-50 hover:bg-green-600 text-gray-700 hover:text-white font-semibold transition-all text-sm flex items-center justify-between group/btn"
                       >
                         <span>View Forum</span>
                         <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                       
                       <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs text-gray-400 text-center">
                                Tap to see {details?.programs.length || 0} active programs
                            </p>
                       </div> 
                       </div> */}
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
              <Link href="/membership" className="px-8 py-4 bg-green-600 rounded-full font-bold hover:bg-green-500 transition-colors">Become a Member</Link>
              <Link href="/contact-us" className="px-8 py-4 border border-gray-600 rounded-full font-bold hover:bg-white/10 transition-colors">Contact Us</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}