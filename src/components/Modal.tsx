// src/components/Modal.tsx
import React from 'react';
import Image from "next/image"; // No longer needed here
import Link from "next/link"; // No longer needed here

// Define the types for the component's props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | null;
  content?: string | null;     // Make content optional
  children?: React.ReactNode;  // Add children prop
}

// Apply the prop types
export default function Modal({ isOpen, onClose, title, content, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    // Backdrop
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
      onClick={onClose} // Close on backdrop click
    >
      {/* Modal Content Box */}
      <div 
        style={{
          marginTop: '10rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '800px', // Consistent max-width
          maxHeight: '70vh', // Limit height
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #eee',
          padding: '1rem 2rem',
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            margin: 0,
            color: '#111',
          }}>
            {title}
          </h3>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '2.5rem',
              lineHeight: '1',
              cursor: 'pointer',
              color: '#555',
              padding: 0,
            }}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        
        {/* Modal Body: Render content OR children */}
        <div style={{
          overflowY: 'auto', // Makes only the body scrollable
        }}>
          {/* The logo <Link> was here, but it was a mistake. Removed. */}
          <div className='flex flex-col items-center'>
          <Link href="/" className="flex items-center gap-4 md:gap-6 group">
            {/* Logo Placeholder - replaces the globe/leaf icon */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 transition-transform group-hover:scale-105">
               {/* Ensure you have your logo.png here, or use a placeholder icon */}
               <Image 
                 src="/logo.png" 
                 alt="GIFON Logo" 
                 fill 
                 className="object-contain"
               />
            </div>

            {/* Main Title Text */}
            <div className="flex flex-col justify-center">
              {/* The "GEOSPATIAL" line */}
              <h1 className="text-md md:text-3xl lg:text-xl font-extrabold text-green-800 leading-none tracking-wide bellefair drop-shadow-sm">
                Geospatial
              </h1>
              {/* The "INTELLIGENCE" line */}
              <h1 className="text-md md:text-3xl lg:text-xl font-extrabold text-green-800 leading-none tracking-wide bellefair drop-shadow-sm">
                Intelligence
              </h1>
              {/* The "FOUNDATION OF NIGERIA" line */}
              <h1 className="text-md md:text-3xl lg:text-xl font-extrabold text-green-800 leading-none tracking-wide bellefair drop-shadow-sm">
                Foundation Of Nigeria
              </h1>
              <h1 className="text-md md:text-3xl lg:text-xl font-extrabold text-black leading-none tracking-wide bellefair uppercase drop-shadow-sm">
                (<span className="cooper">GIFON</span>)
              </h1>
            </div>
          </Link>
          </div>
          {content ? (
            // If 'content' prop is used (for HTML)
            // We replace <pre> with a <div> that renders HTML
            <div 
              style={{ 
                padding: '1.5rem 2rem',
                lineHeight: '1.6',
                color: '#333'
              }}
              // This is the key part:
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          ) : (
            // If 'children' are passed (for custom components)
            <div style={{ padding: '1.5rem 2rem' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}