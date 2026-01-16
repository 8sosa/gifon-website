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
    <section className="relative w-full h-[50vh] min-h-[500px] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-black">
      
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
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            )}
            
            {/* Gradient Overlay for better text legibility */}
            <div className="absolute inset-0 bg-black/40 bg-linear-to-b from-black/60 via-transparent to-black/60 z-10"></div>
            {/* Your specific green overlay */}
            <div className="absolute inset-0 bg-[rgba(0,63,33,0.4)] z-11"></div>
          </div>
        );
      })}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Title - Bold 2x */}
          {title && (
            <div className="bellefair text-white font-bold mb-4 drop-shadow-md text-3xl sm:text-4xl md:text-5xl leading-tight">
              {title}
            </div>
          )}
          
          {/* Tagline - Bold 3x */}
          {tagline && (
            <h1 className="bellefair text-white font-bold mb-6 drop-shadow-2xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              {tagline}
            </h1>
          )}

          {/* Descriptions Container */}
          <div className="max-w-3xl space-y-4">
            
            {/* Description - Medium 1x */}
            {description && (
              <p className="sen text-gray-100 font-medium drop-shadow-md text-base sm:text-lg md:text-xl leading-relaxed text-center">
                {description}
              </p>
            )}
            
            {/* Description 1 - Medium 1x */}
            {description1 && (
              <p className="bellota text-gray-100 font-medium drop-shadow-md text-base sm:text-lg md:text-lg leading-relaxed text-justify">
                {description1}
              </p>
            )}
          </div>

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <div className="mt-8 md:mt-10">
              <Link 
                href={ctaLink} 
                className="inline-block bg-green-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(22,163,74,0.5)] active:scale-95"
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