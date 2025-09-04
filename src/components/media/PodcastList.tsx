// components/media/PodcastList.tsx
"use client";
import { motion } from "framer-motion";

const podcastSample = [
  { title: "GEOINT Today — Episode 1", desc: "Intro to geospatial ethics", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Mapping for Good", desc: "Using maps in humanitarian response", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export default function PodcastList() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {podcastSample.map((p, i) => (
        <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden bg-white/60 border border-white/10 shadow">
          <div className="relative aspect-video w-full">
            <iframe src={p.embed} title={p.title} className="absolute inset-0 w-full h-full" allowFullScreen />
          </div>
          <div className="p-4">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
