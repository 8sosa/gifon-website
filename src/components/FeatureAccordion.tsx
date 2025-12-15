"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; 

// Define the shape of our data
interface FeatureItem {
  title: string;
  text: string;
  // We pass the React Nodes (rendered icons) to avoid serialization errors
  icon: React.ReactNode; 
  largeIcon: React.ReactNode; 
}

export function FeatureAccordion({ items }: { items: FeatureItem[] }) {
  // STATE: This tracks the ID of the ONE currently open card. 
  // If null, all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If clicking the already open card, close it (set to null). Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // 'items-start' PREVENTS the "Ghost Card" stretching. 
    // Short cards will stay short, even if a neighbor is tall.
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

// Internal Sub-component (controlled by parent)
function ExpandableCard({ title, text, icon, largeIcon, isOpen, onClick }: FeatureItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? "#ffffff" : "#ffffff",
      }}
      className={`
        p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden 
        cursor-pointer group transition-all duration-300
        ${isOpen ? 'ring-2 ring-green-500 ring-offset-2' : 'hover:-translate-y-2 hover:shadow-2xl'}
      `}
    >
      {/* Background Icon */}
      <motion.div 
        layout="position"
        className="absolute -bottom-6 -right-6 text-gray-50 group-hover:text-green-50 transition-colors duration-500 rotate-12"
      >
        {largeIcon}
      </motion.div>

      <div className="relative z-10">
        <motion.div layout="position" className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`
              p-3 rounded-xl transition-colors duration-300 shadow-sm
              ${isOpen ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white'}
            `}>
              {icon}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors sen text-left">
              {title}
            </h3>
          </div>

          <div className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
             <ChevronDown size={20} />
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
              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify pt-4 border-t border-gray-100 mt-4">
                {text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}