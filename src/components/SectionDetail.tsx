"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Section = {
    id: string;
    title: string;
    description: string;
    image: string;
    highlights?: readonly string[];
  };
  

export default function SectionDetail({ section }: { section: Section }) {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            {section.title}
          </motion.h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{section.description}</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {section.highlights?.map((h, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gradient-to-br from-white/60 to-white/30 border border-white/10 shadow"
              >
                {h}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg" href="/register">
              Apply
            </a>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <aside className="p-4 rounded-2xl bg-white/60 border border-white/10 shadow-lg">
          <div className="relative h-48 rounded-md overflow-hidden">
            <Image src={section.image} alt={section.title} fill className="object-cover" />
          </div>
        </aside>
      </div>
    </section>
  );
}
