// src/components/Modal.tsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

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
    // Backdrop: Fixed, z-50 (standard max), flex centering
    <div 
      className="fixed inset-0 z-59999 flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div 
        className="
          relative 
          flex 
          flex-col 
          w-full 
          max-w-3xl 
          bg-white 
          rounded-xl 
          shadow-2xl 
          overflow-hidden
          /* Height Handling */
          max-h-[85vh] 
          md:max-h-[90vh]
          /* Animation */
          animate-in fade-in zoom-in-95 duration-200
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Smaller padding on mobile (p-4), larger on desktop (md:p-6) */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4 md:p-6 shrink-0 bg-white z-10">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-1 pr-4">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="rounded-full p-1.5 md:p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        
        {/* Body: Scrollable area */}
        <div className="overflow-y-auto p-4 md:p-6 custom-scrollbar">
          {content ? (
            // Responsive Prose: prose-sm on mobile, standard on desktop
            <div 
              className="prose prose-sm md:prose-base prose-green max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          ) : (
            <div className="text-gray-700 text-sm md:text-base">
              {children}
            </div>
          )}
        </div>

        {/* Optional Footer Area (if you ever need buttons at the bottom) */}
        {/* <div className="p-4 md:p-6 border-t border-gray-100 shrink-0">
             Buttons go here 
           </div> */}
      </div>
    </div>
  );
}