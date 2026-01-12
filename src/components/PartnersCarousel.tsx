"use client";

import Image from "next/image";

// 1. Added 'website' property to the data
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
    logo: "/images/na.png",
    width: 803,
    height: 133,
    website: "#",
  },
];

export default function PartnersCarousel() {
  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-green-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <h3 className="text-3xl font-bold text-white font-cooper">
          <span className="text-green-500">Our Partners</span>
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full py-4">
        
        {/* Dark Gradient Masks (Fade edges) */}
        <div className="absolute top-0 left-0 z-20 h-full w-24 md:w-48 bg-linear-to-r from-gray-950 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-20 h-full w-24 md:w-48 bg-linear-to-l from-gray-950 to-transparent pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="group flex overflow-hidden w-full">
          
          {/* List 1 */}
          <div className="flex items-top animate-infinite-scroll group-hover:paused gap-6 pr-6">
            {partners.map((partner, index) => (
              <PartnerCard key={`p1-${index}`} partner={partner} />
            ))}
          </div>

          {/* List 2 (Duplicate for infinite loop) */}
          <div className="flex items-top animate-infinite-scroll group-hover:paused gap-6 pr-6" aria-hidden="true">
            {partners.map((partner, index) => (
              <PartnerCard key={`p2-${index}`} partner={partner} />
            ))}
          </div>
          
           {/* List 3 (Triple ensures smoothness on huge screens) */}
           <div className="flex items-top animate-infinite-scroll group-hover:paused gap-6 pr-6" aria-hidden="true">
            {partners.map((partner, index) => (
              <PartnerCard key={`p3-${index}`} partner={partner} />
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
          animation: infinite-scroll 50s linear infinite;
        }
        .group-hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// --- Helper Component with Link Wrapper ---
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
          w-108 h-66 
          shrink-0 
          flex flex-col items-center justify-center 
          bg-white/50 backdrop-blur-sm
          border border-white/10 rounded-xl
          group-hover/container:border-green-500/50 
          group-hover/container:bg-white/95 
          group-hover/container:shadow-[0_0_20px_-5px_rgba(34,197,94,0.2)]
          transition-all duration-300
        "
      >
        {/* Image Container */}
        <div className="w-full h-36 px-3 flex items-center justify-center grayscale group-hover/container:grayscale-0 transition-all duration-500">
          <Image 
            src={partner.logo} 
            alt={partner.name} 
            width={partner.width} 
            height={partner.height} 
            className="object-contain w-full h-full drop-shadow-sm" 
          />
        </div>
      </div>
      
      {partner.caption && (
        <p className="mt-3 text-xl text-gray-400 font-medium group-hover/container:text-green-400 transition-colors">
          {partner.caption}
        </p>
      )}
    </a>
  );
}