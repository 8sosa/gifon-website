// src/components/Modal.tsx
import React from 'react';
import Image from "next/image"; // No longer needed here
import Link from "next/link"; // No longer needed here
import styles from "@/styles/Header.module.css"; // No longer needed here

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
          <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 mr-3 transition-transform group-hover:scale-105">
                  <Image src="/logo.png" alt="Gifon" fill className="object-contain"/>
              </div>
              <div className="flex flex-col justify-center cooper">
                <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold text-green-700 leading-none tracking-[0.2em] lg:tracking-[0.3em]">GIFON</h1>
                <span className="text-[0.4rem] md:text-[0.65rem] lg:text-[0.5rem] font-bold text-green-800 uppercase tracking-tight whitespace-nowrap">Geospatial Intelligence Foundation of Nigeria</span>
              </div>
            </Link>
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