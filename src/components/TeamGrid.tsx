'use client';

import { useState } from 'react';
import Image from 'next/image';
import { UserPlus, X } from 'lucide-react';
import type { FlatMember } from '@/types/types';

export function TeamGrid({ members }: { members: FlatMember[]; }) {
  const [selectedMember, setSelectedMember] = useState<FlatMember | null>(null);

  const leaderName = "Dr. AA Usman";
  const others = members.filter(m => m.name !== leaderName); 

  const rootNode = others.find(m => m.name.includes("Isaac Amkpa"));
  const leftNode = others.find(m => m.name.includes("Paulette Oguma"));
  
  const restOfTeam = others.filter(m => 
    !m.name.includes("Isaac Amkpa") && 
    !m.name.includes("Paulette Oguma")
  );

  const level1Slots = [rootNode, null, null, null];
  const existingLevel2 = [leftNode, ...restOfTeam].filter((n) => !!n) as typeof others;
  const level2Slots = [...existingLevel2, null, null];

  return (
    <>
      <section className="py-12 md:py-24 px-4 md:px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* --- GLOBAL TITLE --- */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 md:mb-16 leading-tight text-center">
            Leadership & Management <span className="text-green-600">Team</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full">
            
            {/* --- LEFT COLUMN: Sticky Title & Context --- */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-24 text-left">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-left md:text-justify">
                <span className="cooper text-green-700">GIFON</span>&apos;s Executive Team provides strategic leadership and forward-looking vision, drawing on deep technical and policy expertise to advance Geospatial Intelligence, strengthen national security, and support sustainable development across Nigeria.
              </p>
              
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hidden lg:block">
                <p className="italic text-gray-500 mb-4 text-center text-sm">"Leading with Insights. Securing with intelligence. Innovating for Nigeria."</p>
                <div className="flex items-center gap-2 justify-center">
                  <div className="h-1 w-10 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-semibold text-gray-900">The <span className="cooper">GIFON</span> Team</p>
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: The Hierarchy Grid --- */}
            <div className="w-full lg:w-2/3">
              {others.length > 0 && (
                <div className="flex flex-col items-center w-full gap-8 md:gap-12">
                  
                  {/* --- LEVEL 1: ROOT + 3 EMPTY --- */}
                  {/* Using grid-cols-2 on mobile to keep the 4-slot structure balanced */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-8 lg:gap-12 relative z-10 w-full">
                      {level1Slots.map((node, i) => (
                          <div key={`lvl1-${i}`} className="flex flex-col items-center">
                              {node ? (
                                  <div 
                                    onClick={() => setSelectedMember(node)}
                                    className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[140px] md:max-w-[180px]"
                                  >
                                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-105 mx-auto">
                                          <Image
                                              src={node.photo}
                                              alt={node.name}
                                              fill
                                              className="object-cover shadow-lg md:rounded-xl border-4 border-white ring-2 ring-green-100"
                                          />
                                      </div>
                                      <h4 className="text-base md:text-xl font-bold text-gray-900 bellefair group-hover:text-green-700 transition-colors leading-tight">
                                          {node.name}
                                      </h4>
                                      <p className="text-green-600 font-medium text-[10px] md:text-sm sen uppercase tracking-tight mt-1">
                                          {node.role}
                                      </p>
                                  </div>
                              ) : (
                                  <div className="flex flex-col items-center text-center w-full max-w-[140px] md:max-w-[180px] opacity-40">
                                      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-3 md:mb-4 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center mx-auto md:rounded-xl">
                                          <UserPlus className="text-gray-300 mb-1" size={24} />
                                          <span className="text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Vacant</span>
                                      </div>
                                      <div className="h-4 w-3/4 bg-gray-100 rounded mb-1 mx-auto"></div>
                                      <div className="h-3 w-1/2 bg-gray-50 rounded mx-auto"></div>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>

                  {/* --- LEVEL 2: BRANCHES + 2 EMPTY --- */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12 w-full relative z-10 border-t border-gray-200 pt-10 md:pt-12">
                    {level2Slots.map((m, i) => (
                      <div key={`lvl2-${i}`} className="flex flex-col items-center">
                          {m ? (
                              <div 
                                onClick={() => setSelectedMember(m)}
                                className="flex flex-col items-center text-center w-full max-w-[130px] md:max-w-[140px] group cursor-pointer"
                              >
                                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-3 transition-transform duration-300 group-hover:scale-105 mx-auto">
                                    <Image
                                        src={m.photo}
                                        alt={m.name}
                                        fill
                                        className="object-cover shadow-md border-4 border-white ring-1 ring-gray-100 md:rounded-lg"
                                    />
                                  </div>
                                  <h4 className="text-sm md:text-base font-bold text-gray-900 bellefair mb-0.5 group-hover:text-green-700 transition-colors leading-tight">
                                    {m.name}
                                  </h4>
                                  <p className="text-[9px] md:text-xs text-green-600 font-medium sen uppercase tracking-tight">
                                    {m.role}
                                  </p>
                              </div>
                          ) : (
                              <div className="flex flex-col items-center text-center w-full max-w-[130px] md:max-w-[140px] opacity-30">
                                  <div className="w-24 h-24 md:w-32 md:h-32 mb-3 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center mx-auto md:rounded-lg">
                                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Open</span>
                                  </div>
                                  <div className="h-3 w-20 bg-gray-100 rounded mb-1 mx-auto"></div>
                                  <div className="h-2 w-12 bg-gray-50 rounded mx-auto"></div>
                              </div>
                          )}
                      </div>
                    ))}
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* --- TEAM MEMBER MODAL --- */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-red-50 rounded-full text-gray-500 hover:text-red-600 transition-colors z-20 shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              {/* Modal Image Section */}
              <div className="w-full md:w-2/5 h-72 md:h-auto relative bg-gray-100 shrink-0">
                <Image
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Content Section */}
              <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bellefair mb-2 leading-tight">
                    {selectedMember.name}
                  </h3>
                  <div className="inline-block bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    <p className="text-green-700 font-semibold text-[10px] md:text-sm sen uppercase tracking-wide">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                <div className="text-gray-600 text-sm md:text-base">
                  <p className="leading-relaxed text-left md:text-justify italic">
                    {(selectedMember as any).bio || "Biography currently unavailable."}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 mt-auto">
                   <div className="h-1 w-8 bg-green-500 rounded-full"></div>
                   <span className="text-[10px] md:text-xs font-bold text-green-800 uppercase tracking-widest italic">
                     {(selectedMember as any).quote || "GIFON Excellence"}
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}