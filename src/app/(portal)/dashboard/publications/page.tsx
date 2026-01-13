"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Search, Download, ExternalLink, Calendar, FileText } from 'lucide-react';

const PUBLICATIONS = [
  {
    id: 1,
    title: "GeoINSIGHT Journal Vol. 4",
    date: "Dec 2025",
    category: "Journal",
    description: "Special edition focusing on Geospatial AI and National Security frameworks.",
    cover: "/media/journal-cover-1.jpg", // Replace with actual placeholder
    fileSize: "4.2 MB"
  },
  {
    id: 2,
    title: "Q3 2025 Bulletin",
    date: "Oct 2025",
    category: "Bulletin",
    description: "Quarterly updates on GIFON activities, partner news, and regional events.",
    cover: "/media/bulletin-cover.jpg",
    fileSize: "1.8 MB"
  },
  {
    id: 3,
    title: "The Future of Remote Sensing",
    date: "Aug 2025",
    category: "Whitepaper",
    description: "A comprehensive analysis of satellite imagery trends in West Africa.",
    cover: "/media/whitepaper-cover.jpg",
    fileSize: "2.5 MB"
  }
];

export default function PublicationsPage() {
  const [filter, setFilter] = useState("All");

  const filteredDocs = filter === "All" 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Publications Archive</h1>
            <p className="text-xs text-gray-500">Journals, Bulletins, and Whitepapers</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-lg">
            {["All", "Journal", "Bulletin", "Whitepaper"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === cat ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
             <input type="text" placeholder="Search titles..." className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                 {/* Placeholder for Cover */}
                 <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50" />
                 <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {doc.category}
                 </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <Calendar size={12} /> {doc.date}
                    <span>•</span>
                    <FileText size={12} /> {doc.fileSize}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{doc.description}</p>
                
                <div className="flex gap-2 mt-auto">
                    <button className="flex-1 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 border border-gray-200 flex items-center justify-center gap-2">
                        <ExternalLink size={14} /> Read
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-sm shadow-blue-200 flex items-center justify-center gap-2">
                        <Download size={14} /> Download
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}