// components/media/ResourceGrid.tsx
"use client";
import { motion } from "framer-motion";

const sample = [
  { title: "GEOINT for Disaster Response", type: "Whitepaper", href: "#" },
  { title: "Open Satellite Dataset 2025", type: "Dataset", href: "#" },
  { title: "Technical Guide: Remote Sensing", type: "Guide", href: "#" },
  { title: "Case Study: Coastal Resilience", type: "Report", href: "#" },
  { title: "How-to: Integrating UAV Data", type: "Toolkit", href: "#" },
  { title: "Ethics of GEOINT", type: "Brief", href: "#" },
];

export default function ResourceGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {sample.map((r, i) => (
        <motion.article key={i} whileHover={{ y: -4 }} className="p-4 rounded-xl bg-white/60 border border-white/10 shadow">
          <div className="text-sm text-slate-500">{r.type}</div>
          <h4 className="font-semibold mt-2">{r.title}</h4>
          <p className="text-sm text-slate-600 mt-3 line-clamp-3">Short description placeholder — explain why this resource matters and how readers can use it.</p>
          <div className="mt-4 flex gap-2">
            <a href={r.href} className="text-indigo-600 font-semibold text-sm">Open</a>
            <a href="#" className="text-sm text-slate-500">Download</a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
