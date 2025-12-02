"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type HeroSectionProps = {
  title?: string;
  description?: string;
  description1?: string | React.ReactNode;
  // Now accepts a single string OR an array of strings
  backgroundMedia?: string | string[]; 
  cycleInterval?: number;
  ctaText?: string;
  ctaLink?: string;
};

// Helper to check if a file is a video based on extension
const isVideo = (src: string) => {
  return src.match(/\.(mp4|webm|ogg|mov)$/i);
};

export default function HeroSection({
  title = "",
  description = "",
  description1 = "",
  backgroundMedia = [], // Default empty
  cycleInterval = 5000,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize data: Ensure we always work with an array, even if a single string is passed
  const mediaItems = Array.isArray(backgroundMedia) ? backgroundMedia : [backgroundMedia];

  // Cycle Logic
  useEffect(() => {
    // If there is only 1 or 0 items, don't set up an interval
    if (mediaItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [mediaItems.length, cycleInterval]);

  // Don't render if no media provided (optional safety)
  if (mediaItems.length === 0) return null;

  return (
    <section className="relative w-full h-[50vh] min-h-[500px] md:h-[80vh] overflow-hidden bg-black">
      
      {/* --- BACKGROUND LAYER --- */}
      {mediaItems.map((src, index) => {
        const isActive = index === currentIndex;
        const isMediaVideo = isVideo(src);

        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {isMediaVideo ? (
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            ) : (
              // Using standard img tag with object-cover for background behavior
              // You can use Next/Image here too, but standard img is often smoother for crossfading backgrounds
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
            
            {/* Optional: Dark Overlay to make text pop */}
            <div className="absolute inset-0 bg-[rgba(0,63,33,0.7)]"></div>
          </div>
        );
      })}

      {/* --- CONTENT LAYER (Z-Index higher than background) --- */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        
        {/* Title: Scales from text-4xl (mobile) to text-7xl (desktop) */}
        {title && (
          <h1 className="cooper text-white font-bold mb-4 drop-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {title}
          </h1>
        )}

        {/* Description: Scales text size */}
        {description && (
          <p className="cooper text-gray-200 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mb-8 drop-shadow-md">
            {description}
          </p>
        )}
        
        {/* Description: Scales text size */}
        {description1 && (
          <p className="bellota text-gray-200 text-lg sm:text-xl md:text-2xl font-light max-w-3xl mb-8 drop-shadow-md">
            {description1}
          </p>
        )}

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <Link 
            href={ctaLink} 
            className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}