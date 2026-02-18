'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Linkedin, Mail, Award, BookOpen, Briefcase, UserCheck, Globe, User, Quote } from 'lucide-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { FlatPioneer } from '@/types/types';

export function PioneerGrid({ pioneers }: { pioneers: FlatPioneer[] }) {
  const [selectedPioneer, setSelectedPioneer] = useState<FlatPioneer | null>(null);

  return (
    <section className="py-20 px-4 md:px-6 bg-green-950">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 leading-tight text-center">
        Pioneer <span className="text-green-400">Members</span>
      </h2>

      <div className="mt-12 md:mt-16 max-w-6xl mx-auto flex flex-wrap gap-6 md:gap-10 items-center justify-top">
        {pioneers.map((m) => (
          <div 
            key={m.id} 
            className="flex flex-col items-center text-center group w-48 md:w-64"
            onClick={() => setSelectedPioneer(m)}
            > 
            {/* Image Container */}
            <div className="relative w-28 h-28 md:w-40 md:h-40 mb-4 transition-all duration-300 group-hover:-translate-y-2">
              <Image
                src={m.photo}
                alt={m.name}
                fill
                className="object-cover border-b-4 border-green-500 shadow-xl group-hover:border-white transition-all"
              />
            </div>

            {/* Name Section */}
            <h4 className="text-sm md:text-lg font-bold text-gray-100 bellefair mb-1 line-clamp-2 min-h-6 md:min-h-10">
              {m.name} 
            </h4>

            {/* Decorative Line */}
            <div className="h-0.5 w-12 group-hover:w-24 bg-green-400 transition-all duration-300 mb-2" />

            {/* Wrapped Role/Position Section */}
            <p className="text-[10px] md:text-xs text-green-400 font-bold uppercase tracking-widest leading-relaxed px-2 max-w-full wrap-break-word">
              {m.role}
            </p>
            <p className="text-[10px] md:text-xs text-green-400 font-bold uppercase tracking-widest leading-relaxed px-2 max-w-full wrap-break-word">
              {m.organization}
            </p>
            
          </div>
        ))}
      </div>

      {/* --- PIONEER MODAL --- */}
      {selectedPioneer && (
        <div 
          className="fixed inset-0 z-99999 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedPioneer(null)}
        >
          <div 
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Profile Sidebar (Section 1, 2, & 3) [cite: 6, 13, 17] */}
            <div className="w-full md:w-72 lg:w-80 h-80 md:h-auto relative shrink-0 bg-gray-900 flex flex-col">
              <div className="relative h-full md:h-2/3">
                <Image src={selectedPioneer.photo} alt={selectedPioneer.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 mt-auto text-white">
                <h3 className="text-2xl font-bold bellefair leading-tight mb-2">
                  {selectedPioneer.title} {selectedPioneer.name}
                </h3>
                <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  {selectedPioneer.role}
                </p>
                <div className="space-y-3 text-xs text-gray-300 font-medium border-t border-white/10 pt-4">
                  <p className="flex items-center gap-3"><Globe size={14} className="text-green-400"/> {selectedPioneer.nationality}</p>
                  <p className="flex items-center gap-3"><Briefcase size={14} className="text-green-400"/> {selectedPioneer.organization}</p>
                  <p className="flex items-center gap-3"><User size={14} className="text-green-400"/> {selectedPioneer.gender}</p>
                </div>
              </div>
            </div>

            {/* 2. Professional Content (Sections 4, 5, 6, 8, & 10) [cite: 29, 35, 39, 45, 62] */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col bg-white">
              <button 
                onClick={() => setSelectedPioneer(null)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Bio Section (Section 5) [cite: 35] */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-1 bg-green-600 rounded-full" />
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Professional Biography</h4>
                </div>
                <div className="text-gray-600 leading-relaxed text-sm md:text-base text-justify sen">
                   {selectedPioneer.bio ? documentToReactComponents(selectedPioneer.bio) : <p className="italic">No biography available.</p>}
                </div>
              </div>

              {/* Achievements & Specialization Grid (Section 4 & 6) [cite: 29, 39] */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Briefcase size={14} /> Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPioneer.specialisations?.map((spec, i) => (
                      <span key={i} className="text-[11px] bg-green-50 text-green-800 px-3 py-1 font-semibold border border-green-100 uppercase">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedPioneer.achievements && (
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Award size={14} /> Career Highlights</h4>
                    <ul className="text-xs text-gray-600 space-y-3 pl-1">
                      {selectedPioneer.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Mentorship & Statement Footer (Section 8, 9, & 10) [cite: 45, 55, 62] */}
              <div className="mt-auto border-t border-gray-100 pt-8 flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex flex-col gap-4 max-w-lg">
                  {selectedPioneer.quote && (
                    <div className="relative px-6 py-4 bg-gray-50 rounded-lg">
                      <Quote size={20} className="absolute top-2 left-2 text-green-200" />
                      <div className="italic text-gray-700 text-sm leading-snug">
                         {documentToReactComponents(selectedPioneer.quote)}
                      </div>
                    </div>
                  )}

                  {selectedPioneer.mentor && (
                    <div className="flex items-center gap-3 text-green-800 bg-green-50/50 px-4 py-2 rounded-md">
                      <UserCheck size={18} />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-tight">Mentorship Availability</span>
                        <p className="text-[10px] text-gray-500 italic">Focus: {selectedPioneer.mentorshipFocusAreas?.join(', ')}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Actions (Section 9) [cite: 55] */}
                <div className="flex gap-4 self-end lg:self-center">
                  {selectedPioneer.linkedIn && (
                    <a href={selectedPioneer.linkedIn} target="_blank" className="p-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {selectedPioneer.email && (
                    <a href={`mailto:${selectedPioneer.email}`} className="p-3 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white rounded-full transition-all duration-300">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}