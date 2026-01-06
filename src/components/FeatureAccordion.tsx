"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; 

interface FeatureItem {
  title: string;
  text: string;
  icon: React.ReactNode; 
  largeIcon: React.ReactNode; 
}

export function FeatureAccordion({ items }: { items: FeatureItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {items.map((item, i) => (
        <ExpandableCard 
          key={i}
          {...item}
          isOpen={openIndex === i}
          onClick={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}

function ExpandableCard({ title, text, icon, largeIcon, isOpen, onClick }: FeatureItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-500
        ${isOpen ? 'shadow-xl' : 'hover:shadow-2xl hover:-translate-y-1'}
      `}
    >
      {/* 1. Gradient Border Effect (via a background div) */}
      <div className={`
        absolute inset-0 transition-opacity duration-500
        bg-linear-to-br from-green-400 via-emerald-500 to-teal-500
        ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}
      `} />

      {/* 2. The Inner Card Content (White container slightly inset to reveal border) */}
      <div className={`
        relative h-full m-px rounded-[15px] p-6 transition-all duration-300
        ${isOpen ? 'bg-green-50/50 backdrop-blur-sm' : 'bg-white'}
      `}>
        
        {/* Decorative Background Blob for depth */}
        <div className={`
          absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500
          ${isOpen ? 'scale-150 opacity-30' : 'scale-100'}
        `} />

        {/* Large Background Icon Watermark */}
        <motion.div 
          layout="position"
          className={`
            absolute -bottom-6 -right-6 transition-all duration-500 rotate-12
            ${isOpen ? 'text-green-200/50 scale-110' : 'text-gray-100 group-hover:text-green-100'}
          `}
        >
          {largeIcon}
        </motion.div>

        <div className="relative z-10">
          <motion.div layout="position" className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* 3. Gradient Icon Container */}
              <div className={`
                p-3 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center
                bg-linear-to-br from-green-500 to-emerald-600 text-white
                ${isOpen ? 'ring-2 ring-green-200 ring-offset-1' : 'group-hover:scale-105'}
              `}>
                {icon}
              </div>
              
              <h3 className={`
                text-lg font-bold transition-colors duration-300 sen text-left
                ${isOpen ? 'text-green-800' : 'text-gray-800 group-hover:text-green-700'}
              `}>
                {title}
              </h3>
            </div>

            <div className={`
              text-green-500 transition-transform duration-300 bg-green-50 p-1 rounded-full
              ${isOpen ? 'rotate-180 bg-green-100' : 'group-hover:bg-green-100'}
            `}>
               <ChevronDown size={18} />
            </div>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="pt-4 mt-4 border-t border-green-100/60">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                    {text}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}