"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PageHeroProps = {
  title?: React.ReactNode;
  description?: React.ReactNode; // Changed from string to ReactNode
  description1?: React.ReactNode;
  tagline?: React.ReactNode;
  backgroundMedia?: string | string[];
  ctaText?: string;
  ctaLink?: string;
};

const isVideo = (src: string) => src.match(/\.(mp4|webm|ogg|mov)$/i);

export default function PageHero({
  title,
  description,
  description1,
  tagline,
  backgroundMedia = [],
  ctaText,
  ctaLink,
}: PageHeroProps) {
  const mediaItems = Array.isArray(backgroundMedia) ? backgroundMedia : [backgroundMedia];

  // Helper to render the description lines
  const renderDescription = () => {
    if (!description) return null;

    // If it's a string, we can perform the "Split" logic
    if (typeof description === "string") {
      const descriptionLines = description.includes("|")
        ? description.split("|")
        : [description]; // If no pipe, just one line

      return (
        <div className="mb-6 flex flex-col items-center">
          {descriptionLines.map((line, i) => (
            <p
              key={i}
              className="sen text-green-400 font-bold text-xl md:text-2xl uppercase tracking-widest drop-shadow-sm"
            >
              {line.trim()}
            </p>
          ))}
        </div>
      );
    }

    // If it's NOT a string (e.g. it's the result of renderText), render it directly
    return (
      <div className="mb-6 sen text-green-400 font-bold text-xl md:text-2xl uppercase tracking-widest drop-shadow-sm">
        {description}
      </div>
    );
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[550px] overflow-hidden bg-black">
      {/* --- BACKGROUND LAYER --- */}
      {mediaItems.map((src, index) => (
        <div key={src + index} className="absolute inset-0 w-full h-full">
          {isVideo(src) ? (
            <video src={src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <Image src={src} alt="bg" fill priority className="object-cover" />
          )}
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="absolute inset-0 bg-[rgba(0,63,33,0.3)] z-11"></div>
        </div>
      ))}

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-5xl mx-auto">
          {title && <div className="bellefair text-white font-bold mb-8 text-3xl md:text-5xl">{title}</div>}

          {/* Use the helper function here */}
          {renderDescription()}

          {description1 && (
            <div className="bellota text-gray-100 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
              {description1}
            </div>
          )}

          {ctaText && ctaLink && (
            <div className="mt-8">
              <Link href={ctaLink} className="inline-block bg-green-600 text-white px-10 py-3 rounded-full font-bold hover:bg-green-700 transition-transform hover:scale-105">
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}