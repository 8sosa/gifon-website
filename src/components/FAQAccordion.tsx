"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion() {
  const qna = [
    { q: "Who can apply?", a: "Open to students, early-career professionals, and startups working on geospatial solutions." },
    { q: "Do you offer scholarships?", a: "Yes — need-based and merit scholarships are available for selected candidates." },
    { q: "What's the time commitment?", a: "Expect 6–12 hours a week depending on tracks and capstone projects." },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {qna.map((item, i) => (
        <div key={i} className="p-4 rounded-xl bg-white/60 border border-white/10 shadow-sm">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-3">
            <div className="text-left">
              <div className="font-semibold">{item.q}</div>
              <div className="text-sm text-slate-600">{open === i ? item.a : item.a.slice(0, 60) + (item.a.length > 60 ? '...' : '')}</div>
            </div>
            <div className="text-indigo-600 font-bold">{open === i ? '−' : '+'}</div>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-3 text-sm text-slate-700">
                {item.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
