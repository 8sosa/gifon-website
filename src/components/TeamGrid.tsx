import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Quote } from 'lucide-react';
import type { FlatMember } from '@/types/types';

export function TeamGrid({ members }: { members: FlatMember[]; }) {
  
  const leaderName = "Dr. AA Usman";
  const leader = members.find(m => m.name === leaderName);
  const others = members.filter(m => m.name !== leaderName); // No need to reverse unless specified

  // Hardcoded quote for the leader based on your previous code
  const leaderQuote = "A Legacy written on Maps - Building the Eyes of the Republic Through Geospatial Intelligence";

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      
      {/* --- SECTION 1: The Leader Spotlight --- */}
      {leader && (
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-green-50/50 p-8 md:p-12 rounded-3xl border border-green-100 shadow-sm">
            
            {/* Leader Image - Larger and distinguished */}
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 relative z-10">
                 <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  className="rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-green-600/30"
                />
              </div>
              {/* Decorative pattern behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-green-200/50 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Leader Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-2xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bellefair mb-2">{leader.name}</h2>
                <p className="text-lg md:text-xl text-green-700 font-medium sen uppercase tracking-wider">Founder & Executive Chairman, <span className="cooper">GIFON</span></p>
              </div>
              
              {/* Action Button */}
              <div className="pt-2">
                <Link href="/the-quest" className="group inline-block"> 
                    <button className="flex items-center gap-3 bg-green-700 text-white px-8 py-3 rounded-full font-bold text-sm shadow-md hover:bg-green-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <BookOpen size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Read More</span>
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* --- SECTION 2: The Rest of the Team --- */}
      {others.length > 0 && (
        <>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold bellefair text-gray-800">Our Dedicated Team</h3>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2 rounded-full"></div>
          </div>
          
          {/* Using CSS Grid for better vertical alignment across rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
            {others.map((m, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center text-center w-full max-w-xs group"
              >
                {/* Image container with hover effect */}
                <div className="relative w-40 h-40 mb-5 transition-transform duration-300 group-hover:scale-105">
                    {/* Subtle ring instead of prominent border for non-leaders */}
                    <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="rounded-full object-cover shadow-md border-4 border-white ring-1 ring-gray-200/80"
                    />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 bellefair mb-1 group-hover:text-green-700 transition-colors">{m.name}</h4>
                <p className="text-sm text-green-600 font-medium sen uppercase tracking-tight">{m.role}</p>
                
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}