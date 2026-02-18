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
    /* 1. Responsive Height: Taller on mobile to prevent content clipping */
    <section className="relative w-full h-[60vh] min-h-[550px] md:h-[60vh] lg:h-[75vh] overflow-hidden bg-black">
      
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
                /* Use object-cover to ensure video fills the frame */
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={src}
                alt={typeof title === 'string' ? title : `Slide ${index}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            )}
            
            <div className="absolute inset-0 bg-black/40 bg-linear-to-b from-black/60 via-transparent to-black/60 z-10"></div>
            <div className="absolute inset-0 bg-[rgba(0,63,33,0.4)] z-11"></div>
          </div>
        );
      })}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-6 md:px-12">
        {/* 2. Responsive Content Container: Added pb-10 on mobile, pb-20 on desktop to lift content up */}
        <div className="max-w-5xl mx-auto flex flex-col items-center pb-10 md:pb-20">
          
          {/* Title - Scaling text from 2xl to 5xl */}
          {title && (
            <div className="bellefair text-white font-bold mb-3 md:mb-4 drop-shadow-md text-xl sm:text-3xl md:text-5xl leading-tight">
              {title}
            </div>
          )}
          
          {/* Tagline - Drastic scaling for impact. lg:h-8xl is huge, so we cap it on mobile */}
          {tagline && (
            <h1 className="bellefair text-white font-bold mb-4 md:mb-6 drop-shadow-2xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              {tagline}
            </h1>
          )}

          {/* 3. Description Box: Centered text on mobile, justified on tablet+ */}
          <div className="max-w-3xl space-y-4">
            {description1 && (
              <div className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
                <p className="text-white text-xs md:text-sm font-medium tracking-wide">
                  {description1}
                </p>
              </div>
            )}

            {description && (
              <p className="text-gray-100 font-light text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-justify leading-relaxed opacity-90">
                {description}
              </p>
            )}
          </div>

          {/* CTA Button - Larger tap target on mobile */}
          {ctaText && ctaLink && (
            <div className="mt-6 md:mt-10">
              <Link 
                href={ctaLink} 
                className="inline-block bg-green-600 text-white px-7 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
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