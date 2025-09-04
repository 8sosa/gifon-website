// components/media/MediaHero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MediaHero({
  title,
  subtitle,
  background = "/bg/e.jpeg",
}: {
  title: string;
  subtitle?: string;
  background?: string;
}) {
  return (
    <header className="relative h-[56vh] w-full overflow-hidden">
      <Image src={background} alt={title} fill className="object-cover brightness-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 flex items-center justify-center px-6"
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-lg text-slate-200">{subtitle}</p>}
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="#news" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold shadow">Latest News</a>
            <a href="#events" className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-full">Events</a>
          </div>
        </div>
      </motion.div>

      {/* subtle tech lines */}
      <div className="absolute left-6 bottom-8 flex gap-2">
        <span className="w-24 h-px bg-gradient-to-r from-cyan-300/80 to-transparent opacity-70 animate-pulse" />
        <span className="w-12 h-px bg-gradient-to-r from-fuchsia-300/60 to-transparent animate-pulse delay-100" />
      </div>
    </header>
  );
}
