import Image from 'next/image';
import { UserPlus } from 'lucide-react';
import type { FlatMember } from '@/types/types';

export function TeamGrid({ members }: { members: FlatMember[]; }) {
  
  const leaderName = "Dr. AA Usman";
  const others = members.filter(m => m.name !== leaderName); 

  // --- DATA PREPARATION ---
  
  // A. Find specific key people
  const rootNode = others.find(m => m.name.includes("Isaac Amkpa"));
  const leftNode = others.find(m => m.name.includes("Paulette Oguma"));
  
  // B. Create "everyone else" list
  const restOfTeam = others.filter(m => 
    !m.name.includes("Isaac Amkpa") && 
    !m.name.includes("Paulette Oguma")
  );

  // C. Construct Level Arrays with Placeholders
  
  // Level 1: Isaac + 3 Empty Spots
  const level1Slots = [
      rootNode, 
      null,    
      null,     
      null      
  ];

  // Level 2: Paulette + Rest + 2 Empty Spots
  const existingLevel2 = [leftNode, ...restOfTeam].filter((n) => !!n) as typeof others;
  const level2Slots = [
      ...existingLevel2, 
      null,    
      null      
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- GLOBAL TITLE --- */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight text-center">
          Leadership & Management <span className="text-green-600">Team</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">
          
          {/* --- LEFT COLUMN: Sticky Title & Context --- */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 text-left">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              <span className="cooper">GIFON</span>&apos;s Executive Team provides strategic leadership and forward-looking vision, drawing on deep technical and policy expertise to advance Geospatial Intelligence, strengthen national security, and support sustainable development across Nigeria.
            </p>
            
            {/* Decorative Stat or Quote */}
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hidden lg:block">
              <p className="italic text-gray-500 mb-4 text-center">"Leading with Insights. Securing with intelligence. Innovating for Nigeria."</p>
              <div className="flex items-center gap-2 justify-center">
                <div className="h-1 w-10 bg-green-500 rounded-full"></div>
                <p className="text-sm font-semibold text-gray-900">The <span className="cooper">GIFON</span> Team</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Hierarchy Grid --- */}
          <div className="w-full lg:w-2/3">
            {others.length > 0 && (
              <div className="flex flex-col items-center w-full gap-12">
                
                {/* --- LEVEL 1: ROOT + 3 EMPTY (Responsive Grid) --- */}
                {/* On mobile/tablet: 2 cols. On Desktop: Flex row centered */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6 md:gap-8 lg:gap-12 relative z-10 w-full">
                    {level1Slots.map((node, i) => (
                        <div key={`lvl1-${i}`} className="flex flex-col items-center justify-start">
                            {node ? (
                                // REAL MEMBER CARD (Level 1)
                                <div className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[180px]">
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 transition-transform duration-300 group-hover:scale-105 mx-auto">
                                        <Image
                                            src={node.photo}
                                            alt={node.name}
                                            fill
                                            className="object-cover shadow-xl rounded-full md:rounded-none md:object-cover border-4 border-white ring-2 ring-green-100"
                                            // Note: You can remove rounded-full if you prefer square/rect images always
                                        />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 bellefair group-hover:text-green-700 transition-colors">
                                        {node.name}
                                    </h4>
                                    <p className="text-green-600 font-medium text-sm sen uppercase tracking-tight">
                                        {node.role}
                                    </p>
                                </div>
                            ) : (
                                // EMPTY SLOT CARD (Level 1)
                                <div className="flex flex-col items-center text-center w-full max-w-[180px] opacity-50">
                                    <div className="w-32 h-32 md:w-40 md:h-40 mb-4 bg-gray-50 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center mx-auto">
                                        <UserPlus className="text-gray-300 mb-2" size={32} />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Vacant</span>
                                    </div>
                                    <div className="h-6 w-3/4 bg-gray-100 rounded mb-2 mx-auto"></div>
                                    <div className="h-4 w-1/2 bg-gray-50 rounded mx-auto"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- LEVEL 2: BRANCHES + 2 EMPTY --- */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-x-8 gap-y-12 w-full relative z-10 border-t border-gray-200 pt-12">
                  {level2Slots.map((m, i) => (
                    <div key={`lvl2-${i}`} className="flex flex-col items-center relative">
                        {m ? (
                             // REAL MEMBER CARD (Level 2)
                            <div className="flex flex-col items-center text-center w-full max-w-[140px] group">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-3 transition-transform duration-300 group-hover:scale-105 mx-auto">
                                  <Image
                                      src={m.photo}
                                      alt={m.name}
                                      fill
                                      className="object-cover shadow-md border-4 border-white ring-1 ring-gray-100"
                                  />
                                </div>
                                <h4 className="text-sm md:text-base font-bold text-gray-900 bellefair mb-0.5 group-hover:text-green-700 transition-colors">
                                  {m.name}
                                </h4>
                                <p className="text-[10px] md:text-xs text-green-600 font-medium sen uppercase tracking-tight">
                                  {m.role}
                                </p>
                            </div>
                        ) : (
                            // EMPTY SLOT CARD (Level 2)
                            <div className="flex flex-col items-center text-center w-full max-w-[140px] opacity-40">
                                <div className="w-24 h-24 md:w-32 md:h-32 mb-3 bg-gray-50 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center mx-auto">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Open</span>
                                </div>
                                <div className="h-4 w-24 bg-gray-100 rounded mb-1 mx-auto"></div>
                                <div className="h-3 w-16 bg-gray-50 rounded mx-auto"></div>
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
  );
}