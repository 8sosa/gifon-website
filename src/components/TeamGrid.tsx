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
          <div className="flex flex-col items-center w-full mb-16 gap-4">
            
            {/* --- LEVEL 1: THE ROOT (Isaac Amkpa) --- */}
            {rootNode && (
              <div className="flex flex-col items-center relative z-10">
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="relative w-48 h-48 mb-4 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={rootNode.photo}
                      alt={rootNode.name}
                      fill
                      className="object-cover shadow-xl border-4 border-white ring-2 ring-green-100"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 bellefair group-hover:text-green-700 transition-colors">
                    {rootNode.name}
                  </h4>
                  <p className="text-green-600 font-medium sen uppercase tracking-tight">
                    {rootNode.role}
                  </p>
                </div>
              </div>
            )}
            {/* --- LEVEL 2: THE BRANCHES (Paulette + Others) --- */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 max-w-6xl mx-auto relative z-10">
              {bottomRow.map((m, i) => (
                <div key={i} className="flex flex-col items-center relative">
                  <div className="flex flex-col items-center text-center w-40 group">
                    <div className="relative w-32 h-32 mb-3 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="object-cover shadow-md border-4 border-white ring-1 ring-gray-100"
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