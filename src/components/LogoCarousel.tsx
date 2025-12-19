'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Types ---
export interface CarouselItem {
  // Allow string, mutable array, or readonly array (from 'as const')
  src: string | string[] | readonly string[]; 
  alt?: string;
  title?: string;
  href?: string;
  caption?: string;
}

interface InteractiveCarouselProps {
  items: CarouselItem[];
  speed?: number; // Optional prop to control speed
}

// --- Sub-Component: FadeCarousel (For multiple images) ---
const FadeCarousel = ({ images, altText }: { images: string[] | readonly string[], altText: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 4000; 

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            {images.map((imgSrc, index) => {
                const isActive = index === currentIndex;
                return (
                    <div
                        key={`${imgSrc}-${index}`}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <Image
                            src={imgSrc}
                            alt={`${altText} - slide ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, 256px"
                        />
                    </div>
                );
            })}
             {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
                    {images.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-1.5 w-1.5 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                        ></div>
                    ))}
                </div>
             )}
        </div>
    );
};

// --- Main Component ---
export function LogoCarousel({ items, speed = 1 }: InteractiveCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // We double the items to create the illusion of an infinite loop
  const displayItems = [...items, ...items];

  // --- Auto-Scroll Logic ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId: number;

    const step = () => {
      // Only scroll if NOT paused and container exists
      if (!isPaused && scrollContainer) {
        // Move pixels to the right
        scrollContainer.scrollLeft += speed;

        // INFINITE LOOP LOGIC:
        // If we have scrolled past half the total width (the end of the first set of items),
        // reset to 0 immediately. This creates the infinite effect.
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    // Start the loop
    animationFrameId = requestAnimationFrame(step);

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed]);

  // --- Manual Scroll Button Logic ---
  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div 
      className="relative w-full group py-8"
      // Pause when mouse enters the entire area
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      // Pause when user touches screen (mobile)
      onTouchStart={() => setIsPaused(true)}
    >
      
      {/* --- Left Button (Visible on Hover) --- */}
      <button 
        onClick={() => scrollManual('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 text-green-700 rounded-r-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-50 border-y border-r border-green-100 hidden md:block"
        aria-label="Scroll Left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* --- Scroll Container --- */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-4 no-scrollbar items-start"
        style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            // Ensure smooth scrolling only happens on manual clicks, not the auto-scroll
            scrollBehavior: 'auto' 
        }} 
      >
        {displayItems.map((item, idx) => {
          
          const isArray = Array.isArray(item.src);
          const imageList = isArray ? (item.src as string[]) : [item.src as string];
          
          const Content = (
            <>
              {/* Image Box */}
              <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-xl overflow-hidden shadow-md border-2 border-green-600 mb-3 shrink-0 bg-gray-50">
                {isArray && imageList.length > 1 ? (
                   <FadeCarousel images={imageList} altText={item.title || 'Slide'} />
                ) : (
                   <Image 
                     fill
                     src={imageList[0]} 
                     alt={item.alt ?? item.title ?? `Slide ${idx}`}
                     className={item.title ? "object-cover hover:scale-105 transition-transform duration-500" : "object-contain p-2"} 
                     sizes="(max-width: 768px) 192px, 256px"
                   />
                )}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-center gap-1 w-full">
                {item.title && (
                  <p className="text-green-600 font-bold text-sm md:text-base text-center max-w-[200px] leading-tight group-hover:text-green-800 transition-colors">
                    {item.title}
                  </p>
                )}
                {item.caption && (
                  <p className="text-green-700/80 font-medium text-xs md:text-sm text-center max-w-[200px] leading-tight uppercase tracking-wide">
                    {item.caption}
                  </p>
                )}
              </div>
            </>
          );

          // We use a unique key combining idx and src to avoid React key warnings with duplicate lists
          return (
            <div key={`${idx}-${item.title}`} className="flex flex-col items-center justify-start min-w-48 md:min-w-[16rem] shrink-0 group cursor-pointer select-none">
              {item.href ? (
                <Link href={item.href} className="flex flex-col items-center w-full">
                  {Content}
                </Link>
              ) : (
                <div className="flex flex-col items-center w-full">
                  {Content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- Right Button (Visible on Hover) --- */}
      <button 
        onClick={() => scrollManual('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 text-green-700 rounded-l-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-50 border-y border-l border-green-100 hidden md:block"
        aria-label="Scroll Right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

    </div>
  );
}