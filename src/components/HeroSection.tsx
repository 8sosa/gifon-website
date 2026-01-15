"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type HeroSectionProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  description1?: string | React.ReactNode;
  tagline?: string | React.ReactNode;
  backgroundMedia?: string | string[];
  cycleInterval?: number;
  ctaText?: string;
  ctaLink?: string;
};

const isVideo = (src: string) => {
  return src.match(/\.(mp4|webm|ogg|mov)$/i);
};

export default function HeroSection({
  title = "",
  description = "",
  description1 = "",
  tagline = "",
  backgroundMedia = [],
  cycleInterval = 5000,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaItems = Array.isArray(backgroundMedia) ? backgroundMedia : [backgroundMedia];

  useEffect(() => {
    if (mediaItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    }, cycleInterval);
    return () => clearInterval(interval);
  }, [mediaItems.length, cycleInterval]);

  if (mediaItems.length === 0) return null;

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:h-screen lg:h-[90vh] overflow-hidden bg-black">
      
      {/* --- BACKGROUND LAYER --- */}
      {mediaItems.map((src, index) => {
        const isActive = index === currentIndex;
        const isMediaVideo = isVideo(src);

        return (
          <div
            key={src + index}
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
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill // Use fill for responsive background coverage
                priority={index === 0} // Load first image immediately
                className="object-cover"
                sizes="100vw"
              />
            )}
            
            {/* Gradient Overlay for better text legibility */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10"></div>
            {/* Your specific green overlay */}
            <div className="absolute inset-0 bg-[rgba(0,63,33,0.4)] z-11"></div>
          </div>
        );
      })}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Title */}
          {title && (
            <div className="bellefair text-white font-bold mb-3 md:mb-6 uppercase tracking-[0.2em] text-xs sm:text-sm md:text-lg lg:text-xl opacity-90 drop-shadow-md">
              {title}
            </div>
          )}
          
          {/* Tagline */}
          {tagline && (
            <h1 className="bellefair text-white font-bolder mb-6 md:mb-8 drop-shadow-2xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] sm:leading-none tracking-tight">
              {tagline}
            </h1>
          )}

          {/* Descriptions Container */}
          <div className="max-w-3xl space-y-4 md:space-y-6">
            {description && (
              <p className="sen text-gray-100 text-sm sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed drop-shadow-md">
                {description}
              </p>
            )}
            
            {description1 && (
              <p className="bellota text-gray-200 text-xs sm:text-base md:text-lg font-light italic opacity-80">
                {description1}
              </p>
            )}
          </div>

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="mt-8 md:mt-12">
              <Link 
                href={ctaLink} 
                className="inline-block bg-green-600 text-white px-8 md:px-12 py-3 md:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(22,163,74,0.5)] active:scale-95"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}