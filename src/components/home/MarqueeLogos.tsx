// components/home/MarqueeLogos.tsx
"use client";
import Image from "next/image";

const partners = [
  { src: "/images/dhq.png", alt: "Defense HeadQuarters" },
  { src: "/images/na.png", alt: "Nigerian Army" },
  { src: "/images/naf.png", alt: "Nigerian Air-Force" },
  { src: "/images/nn.png", alt: "Nigerian Navy" },
  { src: "/images/nsa.png", alt: "Office of the National Security Adviser" },
];

export default function MarqueeLogos() {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border">
      <div className="marquee flex items-center gap-8 py-4">
        {partners.concat(partners).map((p, i) => (
          <div key={i} className="flex items-center justify-center w-40 h-12">
            <Image src={p.src} alt={p.alt} width={150} height={48} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
