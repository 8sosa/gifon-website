// components/media/GalleryMasonry.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryMasonry({ images = [] }: { images: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} className="relative rounded-xl overflow-hidden h-48 bg-slate-100 shadow">
          <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  );
}
