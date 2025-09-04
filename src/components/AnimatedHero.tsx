"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Program = {
  id?: string;
  title: string;
  description: string;
  image: string;
};

export default function AnimatedHero({ program }: { program: Program }) {
  return (
    <section className="relative h-[60vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <div className="max-w-4xl">
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            {program.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-lg md:text-xl text-slate-200"
          >
            {program.description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
