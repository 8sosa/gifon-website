// components/home/MapPreview.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MapPreview() {
  return (
    <div className="rounded-2xl p-6 bg-white shadow-md reveal">
      <h3 className="text-2xl font-bold bellota">Live Operations Map</h3>
      <p className="mt-2 montserrat text-gray-600">A preview of our tactical map overlay with live indicators and heatmaps.</p>

      <div className="mt-6 relative w-full h-64 rounded-lg overflow-hidden border bg-slate-50">
        <Image src="/bg/c.JPG" alt="map preview" className="object-cover" fill />

        {/* pulsing indicators */}
        <motion.div animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.6, 0.15, 0.6] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute left-24 top-16 w-6 h-6 rounded-full bg-rose-400/70 blur-md" />
        <motion.div animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.6, 0.15, 0.6] }} transition={{ repeat: Infinity, duration: 3, delay: 0.6 }} className="absolute left-56 top-28 w-8 h-8 rounded-full bg-cyan-400/70 blur-md" />

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm text-xs">
          <div className="font-semibold">Current Ops</div>
          <div className="text-gray-600">3 active alerts · Updated now</div>
        </div>
      </div>
    </div>
  );
}
