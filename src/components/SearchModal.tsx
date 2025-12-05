"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, FileText, Layers, Users, BookOpen } from 'lucide-react';
import { globalSearchIndex, SearchItem } from '@/lib/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>(globalSearchIndex);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle Search Logic
  useEffect(() => {
    if (!query) {
      setResults(globalSearchIndex); // Show all/popular if empty
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = globalSearchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query]);

  // Handle Navigation
  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[70vh]">
        
        {/* Search Header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-100 gap-3">
          <Search className="text-gray-400" size={24} />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search for pages, resources, or sectors..." 
            className="flex-1 text-lg outline-none text-gray-800 placeholder:text-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-500 text-xs font-bold transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-2 bg-gray-50/50">
          {results.length > 0 ? (
            results.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.href)}
                className="w-full flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left group"
              >
                {/* Dynamic Icon based on Category */}
                <div className="mt-1 text-gray-400 group-hover:text-green-600 transition-colors">
                  {item.category === 'Sector' && <Layers size={20} />}
                  {item.category === 'Page' && <FileText size={20} />}
                  {item.category === 'Forum' && <Users size={20} />}
                  {item.category === 'Resource' && <BookOpen size={20} />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-green-700">{item.title}</h4>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full border border-gray-200">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                </div>

                <ArrowRight size={16} className="self-center text-gray-300 group-hover:text-green-500 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No results found for &quot;{query}&quot;</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-400 flex justify-between">
           <span><span className="font-bold">ProTip:</span> Search for &quot;Energy&quot; or &quot;Membership&quot;</span>
           <span>GIFON Search</span>
        </div>
      </div>
    </div>
  );
}