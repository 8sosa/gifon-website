"use client";

import Image from "next/image";

const partners = [
  {
    name: "DGI London",
    logo: "/images/dgi.jpeg", 
    width: 800,
    height: 337,
    caption: "Media Partner",
    website: "https://dgi.wbresearch.com/",
  },
  {
    name: "Reslarc Tiger Center",
    logo: "/images/naf.png", 
    width: 800,
    height: 337,
    website: "#",
  },
  {
    name: "Reslarc Academy",
    logo: "/images/dhq.png",
    width: 1047,
    height: 153,
    website: "#",
  },
  {
    name: "Reslarc",
    logo: "/images/Reslarc-Logo.png",
    width: 803,
    height: 133,
    website: "#",
  },
  {
    name: "Reslarc Data Lab",
    logo: "/images/reslarc-data-lab.png",
    width: 803,
    height: 133,
    website: "#",
  },
  {
    name: "Reslarc Cyber Int",
    logo: "/images/reslarc-cyber-int.png",
    width: 803,
    height: 133,
    website: "#",
  },
  {
    name: "Reslarc Cast MP",
    logo: "/images/reslarc-cast-mp.png",
    width: 803,
    height: 133,
    website: "#",
  },
  {
    name: "Reslarc Geolocate",
    logo: "/images/GeoLocate.png",
    width: 803,
    height: 133,
    website: "#",
  },
];

// Split partners for two rows
const firstRow = partners.slice(0, Math.ceil(partners.length / 2));
const secondRow = partners.slice(Math.ceil(partners.length / 2));

export default function PartnersCarousel() {
  // We divide the partners to create two distinct rows
  const firstRow = partners.slice(0, Math.ceil(partners.length / 2));
  const secondRow = partners.slice(Math.ceil(partners.length / 2));

  return (
    <section className="py-12 md:py-24 bg-gray-950 overflow-hidden relative">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-green-900/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-10 md:mb-16 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white font-cooper">
          <span className="text-green-500">Our Partners</span>
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full flex flex-col gap-6 md:gap-10">
        
        {/* Row 1: Left Scrolling */}
        <div className="group flex overflow-hidden w-full relative">
           {/* Gradient Masks per row to prevent clipping at edges */}
           <div className="absolute inset-y-0 left-0 z-20 w-16 md:w-48 bg-linear-to-r from-gray-950 to-transparent"></div>
           <div className="absolute inset-y-0 right-0 z-20 w-16 md:w-48 bg-linear-to-l from-gray-950 to-transparent"></div>

          {/* To prevent clipping, we render the list 3 times. 
            The 'w-max' ensures the container is exactly as wide as its content.
          */}
          <div className="flex w-max animate-infinite-scroll group-hover:paused gap-4 md:gap-8">
            <TrackItems items={firstRow} id="r1-a" />
            <TrackItems items={firstRow} id="r1-b" />
            <TrackItems items={firstRow} id="r1-c" />
          </div>
        </div>

        {/* Row 2: Right Scrolling (Reverse) */}
        <div className="group flex overflow-hidden w-full relative">
           <div className="absolute inset-y-0 left-0 z-20 w-16 md:w-48 bg-linear-to-r from-gray-950 to-transparent"></div>
           <div className="absolute inset-y-0 right-0 z-20 w-16 md:w-48 bg-linear-to-l from-gray-950 to-transparent"></div>

          <div className="flex w-max animate-infinite-scroll-reverse group-hover:paused gap-4 md:gap-8">
            <TrackItems items={secondRow} id="r2-a" />
            <TrackItems items={secondRow} id="r2-b" />
            <TrackItems items={secondRow} id="r2-c" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1/3 * 100%)); }
        }
        @keyframes infinite-scroll-reverse {
          0% { transform: translateX(calc(-1/3 * 100%)); }
          100% { transform: translateX(0); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll-reverse {
          animation: infinite-scroll-reverse 40s linear infinite;
        }
        .group-hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// Sub-component to clean up the map logic
function TrackItems({ items, id }: { items: typeof partners, id: string }) {
  return (
    <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
      {items.map((partner, index) => (
        <PartnerCard key={`${id}-${index}`} partner={partner} />
      ))}
    </div>
  );
}

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center group/container cursor-pointer"
    >
      <div 
        className="
          relative group/card
          w-[200px] sm:w-[280px] md:w-[350px] 
          h-[120px] sm:h-40 md:h-[200px]
          shrink-0 flex items-center justify-center 
          bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl
          group-hover/container:bg-white/95 transition-all duration-300
        "
      >
        <div className="w-full h-16 md:h-24 px-4 md:px-8 flex items-center justify-center grayscale group-hover/container:grayscale-0 transition-all duration-500">
          <Image 
            src={partner.logo} 
            alt={partner.name} 
            width={partner.width} 
            height={partner.height} 
            className="object-contain w-full h-full" 
          />
        </div>
      </div>
    </a>
  );
}