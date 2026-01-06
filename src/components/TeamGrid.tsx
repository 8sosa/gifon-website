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
    <section className="py-4 px-4 max-w-7xl mx-auto">
      
      {/* --- SECTION 1: The Leader Spotlight --- */}
      {/* {leader && (
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-green-50/50 p-8 md:p-12 rounded-3xl border border-green-100 shadow-sm">
            
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 relative z-10">
                 <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  className="rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-green-600/30"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-green-200/50 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-2xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bellefair mb-2">{leader.name}</h2>
                <p className="text-lg md:text-xl text-green-700 font-medium uppercase tracking-wider italic xl:text-nowrap">Founder & Executive Chairman,<br /> <span className="cooper not-italic">GIFON</span></p>
              </div>
              
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
      )} */}


      {/* --- SECTION 2: The Team Tree --- */}
      {others.length > 0 && (() => {
        // 1. DATA PREPARATION
        // Find specific key people
        const rootNode = others.find(m => m.name.includes("Isaac Amkpa"));
        const leftNode = others.find(m => m.name.includes("Paulette Oguma"));
        
        // Create a list of "everyone else" (excluding Isaac and Paulette)
        const restOfTeam = others.filter(m => 
          !m.name.includes("Isaac Amkpa") && 
          !m.name.includes("Paulette Oguma")
        );

        // Combine for the bottom row: Paulette must be first (Left)
        // We cast the result to match the type of 'others', guaranteeing no undefined values
        const bottomRow = [leftNode, ...restOfTeam].filter((n) => !!n) as typeof others;
        return (
          <div className="flex flex-col items-center w-full mb-16">
            
            {/* --- LEVEL 1: THE ROOT (Isaac Amkpa) --- */}
            {rootNode && (
              <div className="flex flex-col items-center relative z-10">
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="relative w-48 h-48 mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={rootNode.photo}
                      alt={rootNode.name}
                      fill
                      className="rounded-full object-cover shadow-xl border-4 border-white ring-2 ring-green-100"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 bellefair group-hover:text-green-700 transition-colors">
                    {rootNode.name}
                  </h4>
                  <p className="text-green-600 font-medium sen uppercase tracking-tight">
                    {rootNode.role}
                  </p>
                </div>

                {/* Vertical Connector Line from Root Down */}
                <div className="w-px h-12 bg-gray-300 mt-2"></div>
              </div>
            )}

            {/* --- CONNECTOR BAR (Horizontal Tree Branch) --- */}
            {/* Only show if we have a bottom row */}
            {bottomRow.length > 0 && (
              <div className="relative w-full max-w-4xl flex justify-center mb-8">
                  {/* The horizontal line spanning the children */}
                  {/* We constrain width to cover roughly the center of first child to center of last child */}
                  <div className="absolute top-0 w-[85%] h-px bg-gray-300"></div>
              </div>
            )}

            {/* --- LEVEL 2: THE BRANCHES (Paulette + Others) --- */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 max-w-6xl mx-auto relative z-10">
              {bottomRow.map((m, i) => (
                <div key={i} className="flex flex-col items-center relative">
                  
                  {/* Vertical Connector Line from Branch Up */}
                  {/* Pulls up to touch the horizontal bar */}
                  <div className="absolute -top-8 w-px h-8 bg-gray-300"></div>

                  <div className="flex flex-col items-center text-center w-40 group">
                    <div className="relative w-32 h-32 mb-3 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="rounded-full object-cover shadow-md border-4 border-white ring-1 ring-gray-100"
                      />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 bellefair mb-0.5 group-hover:text-green-700 transition-colors">
                      {m.name}
                    </h4>
                    <p className="text-xs text-green-600 font-medium sen uppercase tracking-tight">
                      {m.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        );
      })()}
    </section>
  );
}