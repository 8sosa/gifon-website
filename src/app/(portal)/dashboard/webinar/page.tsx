"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, PlayCircle, Clock, User, Video } from 'lucide-react';

const WEBINARS = [
  {
    id: 1,
    title: "Masterclass: GIS in Urban Planning",
    speaker: "Dr. AA Usman",
    duration: "1h 15m",
    date: "Nov 12, 2025",
    thumbnail: "/media/webinar-thumb-1.jpg", 
    level: "Advanced"
  },
  {
    id: 2,
    title: "Introduction to Satellite Imagery Analysis",
    speaker: "Sarah Johnson",
    duration: "45m",
    date: "Oct 05, 2025",
    thumbnail: "/media/webinar-thumb-2.jpg",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Policy Frameworks for National Security",
    speaker: "Prof. K. Adebayo",
    duration: "1h 30m",
    date: "Sep 22, 2025",
    thumbnail: "/media/webinar-thumb-3.jpg",
    level: "Intermediate"
  }
];

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Webinar Library</h1>
            <p className="text-xs text-gray-500">Watch past masterclasses and sessions</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Featured / Hero Video */}
        <div className="mb-10 relative rounded-2xl overflow-hidden bg-gray-900 text-white shadow-xl">
            <div className="absolute inset-0 opacity-50 bg-[url('/media/webinar-hero.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-linear-to-r from-purple-900/90 to-transparent"></div>
            <div className="relative z-10 p-8 md:p-12 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/30 border border-purple-400/50 text-purple-100 text-xs font-bold mb-4">
                    Latest Release
                </span>
                <h2 className="text-3xl font-bold mb-4">AI in Geospatial Intelligence</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Join industry leaders as they discuss the transformative impact of Artificial Intelligence on modern mapping and surveillance technologies.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-purple-900/50">
                    <PlayCircle size={20} /> Watch Now
                </button>
            </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Video size={18} className="text-purple-600" /> Recent Sessions
        </h3>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBINARS.map((video) => (
                <div key={video.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                    <div className="relative h-48 bg-gray-200">
                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shadow-lg">
                                <PlayCircle size={24} fill="currentColor" className="opacity-100" />
                            </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            {video.duration}
                        </span>
                    </div>
                    
                    <div className="p-5">
                        <h4 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-purple-600 transition-colors">
                            {video.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-1.5">
                                <User size={12} /> {video.speaker}
                            </div>
                            <div className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                                {video.level}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}