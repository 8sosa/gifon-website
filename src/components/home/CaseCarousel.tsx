// components/home/CaseCarousel.tsx
"use client";
import { motion } from "framer-motion";

const cases = [
  { slug: "border", title: "Border Monitoring", excerpt: "Automated detection improved responsiveness and reduced false positives." },
  { slug: "disaster", title: "Disaster Response", excerpt: "Rapid mapping supported coordinated relief efforts." },
  { slug: "urban", title: "Urban Planning", excerpt: "Geospatial analytics informed resilient city design." },
];

export default function CaseCarousel() {
  return (
    <div className="mt-6 overflow-x-auto scroll-snap-x gap-4 flex no-scrollbar">
      {cases.map((c) => (
        <motion.article key={c.slug} whileHover={{ y: -6 }} className="min-w-[18rem] p-4 border rounded-lg flex-shrink-0 bg-white">
          <h4 className="font-semibold">{c.title}</h4>
          <p className="mt-2 text-sm text-gray-600">{c.excerpt}</p>
          <a href={`/case-studies/${c.slug}`} className="mt-3 inline-block text-sm font-medium underline">Read more</a>
        </motion.article>
      ))}
    </div>
  );
}
