import Image from 'next/image';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import type { FlatMember } from '@/types/types';

export function TeamGrid({ members }: { members: FlatMember[]; }) {
  
  const leaderName = "Dr. AA Usman";
  const leader = members.find(m => m.name === leaderName);
  const others = members.filter(m => m.name !== leaderName).reverse();
  const sortedMembers = leader ? [leader, ...others] : others;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* CHANGED: Switched from Grid to Flexbox.
        'flex-wrap' allows them to break to new lines.
        'justify-center' ensures they are always centered, even if there is only 1.
      */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
        {sortedMembers.map((m, i) => (
          <div 
            key={i} 
            // ADDED: Width constraints (w-full sm:w-72) to ensure cards are uniform size
            className="flex flex-col items-center text-center h-full w-full sm:w-72"
          >
            <div className="relative w-24 h-24 mb-3">
                <Image
                src={m.photo}
                alt={m.name}
                fill
                className="rounded-full object-cover shadow-md border-2 border-green-50"
                />
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 bellefair">{m.name}</h4>
            <p className="text-sm text-green-700 font-medium mb-4 sen">{m.role}</p>
            
            {m.name === leaderName && (
              <div className="mt-auto pt-2">
                <Link href="/the-quest" className="group"> 
                    <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
                    <BookOpen size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Read &quot;The Quest&quot;</span>
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