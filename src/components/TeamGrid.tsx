import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import type { FlatMember } from '@/types/types';

export function TeamGrid({ members }: { members: FlatMember[]; }) {
  
  // 1. Sort Logic: Find Dr. AA Usman, put him first, reverse the rest
  const leaderName = "Dr. AA Usman";
  const leader = members.find(m => m.name === leaderName);
  const others = members.filter(m => m.name !== leaderName).reverse();
  
  // Combine them: Leader first, then the rest
  const sortedMembers = leader ? [leader, ...others] : others;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {sortedMembers.map((m, i) => (
          <div key={i} className="flex flex-col items-center text-center h-full">
            <div className="relative w-24 h-24 mb-3">
                <Image
                src={m.photo}
                alt={m.name}
                fill
                className="rounded-full object-cover shadow-md border-2 border-green-50"
                />
            </div>
            
            <h4 className="text-lg font-bold text-gray-900">{m.name}</h4>
            <p className="text-sm text-green-700 font-medium mb-4">{m.role}</p>
            
            {/* 2. Conditional Check for Dr. AA Usman */}
            {m.name === leaderName && (
              <div className="mt-auto pt-2">
                <Link 
                    href="/docs/THE QUEST BY DR. AA USMAN-20251204111559.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group"
                > 
                    {/* I adjusted the padding slightly (px-6 py-2) so it fits nicely in the card */}
                    <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
                    <Download size={16} className="group-hover:animate-bounce" />
                    <span>Download &quot;The Quest&quot;</span>
                    </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}