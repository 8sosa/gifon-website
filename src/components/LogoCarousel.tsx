'use client';

import { CSSProperties, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/LogoCarousel.module.css';

export interface CarouselItem {
  src: string;
  alt?: string;
  title?: string;
  href?: string;
  caption?: string;
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
          
          // Changed 'justify-center' to 'justify-start' to fix image alignment
          const containerClasses = "flex flex-col items-center justify-start mx-4 group cursor-pointer h-full";

          // The content inside the card (Image + Title + Caption)
          const content = (
            <>
              {/* Image Container */}
              <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden shadow-md border-2 border-green-600 mb-3 shrink-0">
                <Image 
                  fill
                  src={item.src} 
                  alt={item.alt ?? item.title ?? `Slide ${idx}`}
                  className={item.title ? "object-cover hover:scale-110 transition-transform duration-500" : "object-contain p-2"} 
                />
              </div>
              
              {/* Text Container - Fixed height or flex-grow logic can be added here if needed, 
                  but mainly we just need the text to flow naturally below the aligned images. */}
              <div className="flex flex-col items-center gap-1">
                {/* Title */}
                {item.title && (
                  <p className="text-green-400 font-bold text-sm md:text-base text-center max-w-[200px] leading-tight group-hover:text-green-600 transition-colors">
                    {item.title}
                  </p>
                )}
                
                {/* Caption */}
                {item.caption && (
                  <p className="text-green-700 font-medium text-xs md:text-sm text-center max-w-[200px] leading-tight uppercase tracking-wide">
                    {item.caption}
                  </p>
                )}
              </div>
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