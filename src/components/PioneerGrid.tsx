'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Linkedin, Mail } from 'lucide-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { FlatPioneer } from '@/types/types';

export function PioneerGrid({ pioneers }: { pioneers: FlatPioneer[] }) {
  const [selectedPioneer, setSelectedPioneer] = useState<FlatPioneer | null>(null);

  return (
    <section className="py-20 px-4 md:px-6 bg-green-900">
      {/* Title structure from your desired block */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 leading-tight text-center">
        Pioneer <span className="text-green-300">Members</span>
      </h2>

      {/* Grid/Flex container matching your structure */}
      <div className="mt-12 md:mt-16 max-w-5xl mx-auto flex flex-wrap gap-4 md:gap-6 items-center justify-center">
        {pioneers.map((m) => (
          <div 
            key={m.id} 
            className="flex flex-col items-center relative cursor-pointer"
            onClick={() => setSelectedPioneer(m)}
          >      
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover shadow-md border-4 border-white ring-1 ring-gray-100"
                />
              </div>
              <h4 className="text-sm md:text-base font-bold text-gray-100 bellefair mb-0.5 group-hover:text-green-300 transition-colors px-2">
                {m.name}
              </h4>
              <p className="text-[10px] md:text-xs text-green-300 font-medium sen uppercase tracking-tight">
                {m.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- PIONEER MODAL --- */}
      {selectedPioneer && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPioneer(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPioneer(null)}
              className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-red-50 rounded-full text-gray-500 hover:text-red-600 transition-all z-30"
            >
              <X size={20} />
            </button>

            {/* Photo Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
              <Image
                src={selectedPioneer.photo}
                alt={selectedPioneer.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 bellefair mb-1">
                  {selectedPioneer.name}
                </h3>
                <div className="inline-block bg-green-50 px-3 py-1 rounded-full border border-green-100">
                  <p className="text-green-700 font-bold text-[10px] md:text-xs sen uppercase tracking-widest">
                    {selectedPioneer.role}
                  </p>
                </div>
              </div>

              {/* Bio (Rich Text) */}
              <div className="prose prose-sm text-gray-600 leading-relaxed mb-6">
                {selectedPioneer.bio ? (
                  documentToReactComponents(selectedPioneer.bio)
                ) : (
                  <p className="italic">No biography available.</p>
                )}
              </div>

              {/* Quote Section */}
              {selectedPioneer.quote && (
                <div className="pl-4 border-l-4 border-green-500 italic text-gray-500 text-sm mb-6">
                  {documentToReactComponents(selectedPioneer.quote)}
                </div>
              )}

              {/* Social Links & Contact */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                {selectedPioneer.linkedIn && (
                  <a 
                    href={selectedPioneer.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="text-[10px] uppercase font-bold tracking-tighter">LinkedIn</span>
                  </a>
                )}
                {selectedPioneer.email && (
                  <a 
                    href={`mailto:${selectedPioneer.email}`} 
                    className="flex items-center gap-2 text-gray-400 hover:text-green-600 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-[10px] uppercase font-bold tracking-tighter">Email</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}