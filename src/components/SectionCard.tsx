"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Section = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  highlights?: readonly string[];
};

export default function SectionCard({ section }: { section: Section }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/60 to-white/30 border border-white/10"
    >
      <div className="relative h-44">
        <Image src={section.image} alt={section.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute left-4 bottom-4 text-white">
          <h4 className="font-bold text-lg">{section.title}</h4>
          <p className="text-sm opacity-90 max-w-xs">{section.summary}</p>
        </div>
      </div>

      <div className="p-4">
        <ul className="flex gap-2 flex-wrap mb-4">
          {section.highlights?.slice(0, 3).map((h, i) => (
            <li key={i} className="text-xs px-3 py-1 rounded-full bg-indigo-600/90 text-white">
              {h}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">Learn how GEOINT is applied</span>
          <Link
            href={`/infrastructure/${section.id}`}
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
