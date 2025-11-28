'use client';

import { CSSProperties, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import styles from '@/styles/LogoCarousel.module.css';

export interface CarouselItem {
  src: string;
  alt?: string;
  title?: string;
  href?: string; // New optional property for links
}

interface LogoCarouselProps {
  items: CarouselItem[];
  loopDurationMs?: number;
}

interface TrackStyle extends CSSProperties {
  '--duration'?: string;
}

export function LogoCarousel({
  items,
  loopDurationMs = 30000,
}: LogoCarouselProps) {
  
  const trackStyle = useMemo<TrackStyle>(
    () => ({ '--duration': `${loopDurationMs}ms` }),
    [loopDurationMs]
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.track} style={trackStyle}>
        {/* Render list twice for infinite loop */}
        {[...items, ...items].map((item, idx) => {
          
          // Common classes for layout and spacing
          const containerClasses = "flex flex-col items-center justify-center mx-4 group cursor-pointer";

          // The content inside the card (Image + Title)
          const content = (
            <>
              {/* Image Container */}
              <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden shadow-md border-2 border-white/20 mb-3">
                <Image 
                  fill
                  src={item.src} 
                  alt={item.alt ?? item.title ?? `Slide ${idx}`}
                  className={item.title ? "object-cover hover:scale-110 transition-transform duration-500" : "object-contain p-2"} 
                />
              </div>
              
              {/* Title */}
              {item.title && (
                <p className="text-green-900 font-bold text-sm md:text-base text-center max-w-[200px] leading-tight group-hover:text-green-700 transition-colors">
                  {item.title}
                </p>
              )}
            </>
          );

          return (
            <div className={styles.item} key={idx}>
              {item.href ? (
                // If href exists, wrap in Link
                <Link href={item.href} className={containerClasses}>
                  {content}
                </Link>
              ) : (
                // Otherwise, just use a Div
                <div className={containerClasses}>
                  {content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}