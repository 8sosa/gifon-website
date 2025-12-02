// src/components/Modal.tsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react'; // Assuming you have lucide-react, or use a text 'x'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | null;
  content?: string | null;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, content, children }: ModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Backdrop: Fixed position, fills screen, semi-transparent black
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="
          relative 
          w-full 
          max-w-3xl 
          max-h-[90vh] 
          bg-white 
          rounded-xl 
          shadow-2xl 
          flex 
          flex-col 
          animate-in 
          fade-in 
          zoom-in-95 
          duration-200
        "
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4 md:p-6 shrink-0">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close modal"
          >
            {/* If you don't have Lucide icons, replace <X /> with <span className="text-2xl">&times;</span> */}
            <X size={24} />
          </button>
        </div>
        
        {/* Body: Scrollable area */}
        <div className="overflow-y-auto p-4 md:p-6">
          {content ? (
            // For HTML content (Policies, etc.)
            <div 
              className="prose prose-green max-w-none text-gray-600 leading-relaxed text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          ) : (
            // For React Children (PDF Viewer, Forms, etc.)
            // We remove padding from wrapper if needed, or keep it consistent
            <div className="text-gray-700">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}