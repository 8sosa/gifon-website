"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react"; // Using Lucide for a cleaner close icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | null;
  content?: string | null;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, content, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* 1. BACKDROP */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        {/* 2. MODAL CONTAINER */}
        <div 
          className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()} 
        >
          
          {/* 3. MODAL HEADER (Sticky) */}
          <div className="sticky top-0 z-20 bg-white flex justify-between items-center border-b border-gray-100 px-6 py-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 truncate pr-4">
              {title}
            </h3>
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* 4. MODAL BODY (Scrollable) */}
          <div className="overflow-y-auto custom-scrollbar flex-1">
            
            {/* BRANDING SECTION inside Body */}
            <div className="flex flex-col items-center py-6 px-4 bg-gray-50/50 border-b border-gray-50">
              <Link href="/" className="flex flex-col md:flex-row items-center gap-3 md:gap-5 group text-center md:text-left">
                {/* Logo Placeholder */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 transition-transform group-hover:scale-105">
                   <Image 
                     src="/logo.png" 
                     alt="GIFON Logo" 
                     fill 
                     className="object-contain"
                     priority
                   />
                </div>

                {/* Main Title Text - Scaled for Responsiveness */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm md:text-base lg:text-lg font-extrabold text-green-800 leading-tight tracking-wide bellefair uppercase">
                    Geospatial Intelligence
                  </div>
                  <div className="text-xs md:text-sm font-bold text-green-700 leading-tight tracking-wide bellefair">
                    Foundation of Nigeria 
                    <span className="text-black ml-1">(<span className="cooper">GIFON</span>)</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 md:p-10">
              {content ? (
                <div 
                  className="prose prose-green max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content }} 
                />
              ) : (
                <div className="w-full">
                  {children}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}