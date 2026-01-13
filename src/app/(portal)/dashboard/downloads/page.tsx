"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, File, Download, Folder, FileText, ChevronRight } from 'lucide-react';

const DOWNLOAD_CATEGORIES = [
  {
    title: "Policy Briefs",
    description: "Official documents and strategic guidelines.",
    count: 12,
    files: [
        { name: "National Geo-Data Policy 2025.pdf", size: "1.2 MB", date: "Jan 10, 2025" },
        { name: "Privacy & Ethics Framework.pdf", size: "850 KB", date: "Dec 15, 2024" }
    ]
  },
  {
    title: "Project Templates",
    description: "Standardized templates for research and proposals.",
    count: 8,
    files: [
        { name: "Research Proposal Template.docx", size: "45 KB", date: "Nov 20, 2024" },
        { name: "Field Data Collection Sheet.xlsx", size: "120 KB", date: "Oct 05, 2024" }
    ]
  },
  {
    title: "Technical Reports",
    description: "In-depth technical analysis and survey results.",
    count: 5,
    files: [
        { name: "Annual GIS Survey Report.pdf", size: "5.6 MB", date: "Feb 01, 2025" }
    ]
  }
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Toolkits & Downloads</h1>
            <p className="text-xs text-gray-500">Resources, templates, and reports</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
            
            {DOWNLOAD_CATEGORIES.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Category Header */}
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                <Folder size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{category.title}</h3>
                                <p className="text-xs text-gray-500">{category.description}</p>
                            </div>
                        </div>
                        <span className="text-xs font-semibold text-gray-400 bg-white px-2 py-1 rounded border border-gray-200">
                            {category.count} Files
                        </span>
                    </div>

                    {/* File List */}
                    <div className="divide-y divide-gray-100">
                        {category.files.map((file, fIdx) => (
                            <div key={fIdx} className="p-4 hover:bg-orange-50/30 transition-colors flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <FileText className="text-gray-400 group-hover:text-orange-500" size={20} />
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{file.name}</p>
                                        <p className="text-[10px] text-gray-400">{file.date} • {file.size}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-100 rounded-full transition-all">
                                    <Download size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {/* Footer View All */}
                    <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100 text-center">
                        <button className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center justify-center gap-1 w-full py-1">
                            View All in {category.title} <ChevronRight size={12} />
                        </button>
                    </div>
                </div>
            ))}

        </div>
      </div>
    </div>
  );
}