"use client";

import React from "react";
import Image from "next/image";

const partners = [
  {
    name: "DGI London",
    logo: "/images/dgi.jpeg", 
    width: 140,
    height: 60,
  },
  {
    name: "Nigerian Air-Force",
    logo: "/images/naf.png", 
    width: 160,
    height: 60,
  },
  {
    name: "Defense HeadQuarters",
    logo: "/images/dhq.png",
    width: 150,
    height: 60,
  },
  {
    name: "Nigerian Army",
    logo: "/images/na.png",
    width: 140,
    height: 60,
  },
  // Duplicated for effect to ensure the scroll is long enough visually
  {
    name: "DGI London",
    logo: "/images/dgi.jpeg", 
    width: 140,
    height: 60,
  },
  {
    name: "Nigerian Air-Force",
    logo: "/images/naf.png", 
    width: 160,
    height: 60,
  },
];

export default function PartnersCarousel() {
  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative">
      {/* Decorative background glow for that "premium" feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-green-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <h3 className="text-3xl font-bold text-white font-cooper">
          <span className="text-green-500">Partners</span>
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full border-white/5 backdrop-blur-sm py-12">
        
        {/* Dark Gradient Masks (Fading to the new dark background) */}
        <div className="absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-gray-950 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-gray-950 to-transparent pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="group flex overflow-hidden max-w-[1400px] mx-auto">
          {/* List 1 */}
          <div className="flex items-center animate-infinite-scroll group-hover:paused gap-10 pr-10">
            {partners.map((partner, index) => (
              <div
                key={`p1-${index}`}
                className="w-max h-max rounded-xl flex items-center justify-center p-6 grayscale transition-all duration-500 hover:grayscale-0 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]"
              >
                {/* Standardized Image Size within the card */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                        src={partner.logo} 
                        alt={partner.name} 
                        width={partner.width} 
                        height={partner.height} 
                        className="object-contain max-h-full max-w-full"
                    />
                </div>
              </div>
            ))}
          </div>

          {/* List 2 (Duplicate for infinite loop) */}
          <div className="flex items-center animate-infinite-scroll group-hover:paused gap-10 pr-10" aria-hidden="true">
            {partners.map((partner, index) => (
              <div
                key={`p2-${index}`}
                className="w-max h-max rounded-xl flex items-center justify-center p-6 grayscale transition-all duration-500 hover:grayscale-0 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                        src={partner.logo} 
                        alt={partner.name} 
                        width={partner.width} 
                        height={partner.height} 
                        className="object-contain max-h-full max-w-full"
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite; /* Slowed down slightly for elegance */
        }
        .group-hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}