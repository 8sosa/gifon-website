// // components/home/HeroEnhanced.tsx
// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function HeroEnhanced({
//   title,
//   subtitle,
//   backgroundImages = [],
// }: {
//   title: string;
//   subtitle?: string;
//   backgroundImages?: string[];
// }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (!backgroundImages.length) return;
//     const t = setInterval(() => setIndex((i) => (i + 1) % backgroundImages.length), 5000);
//     return () => clearInterval(t);
//   }, [backgroundImages.length]);

//   return (
//     <header className="relative h-[64vh] w-full overflow-hidden rounded-b-3xl shadow-xl">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={backgroundImages[index] || "bg"}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//           className="absolute inset-0"
//         >
//           <Image src={backgroundImages[index] || "/bg/e.jpeg"} alt={title} fill className="object-cover brightness-60" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute inset-0 flex items-center justify-center px-6">
//         <div className="text-center max-w-4xl">
//           <motion.h1 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight bellota">
//             {title}
//           </motion.h1>
//           <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="mt-4 text-lg text-slate-200">
//             {subtitle}
//           </motion.p>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-6 flex items-center justify-center gap-4">
//             <a href="/programs" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
//               Programs
//             </a>
//             <a href="/infrastructure" className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-full">
//               Infrastructure
//             </a>
//           </motion.div>
//         </div>
//       </div>

//       {/* decorative neon grid */}
//       <div className="pointer-events-none absolute inset-0 grid grid-cols-12 opacity-20 mix-blend-screen">
//         {[...Array(12)].map((_, i) => (
//           <div key={i} className="border-l border-white/5" />
//         ))}
//       </div>
//     </header>
//   );
// }
