"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, FileText, Globe, Award } from 'lucide-react';

// --- Types & Data ---
interface CategoryItem {
  title: string;
  desc: string;
  documents: string[];
}

const categories: CategoryItem[] = [
    { 
        title: "Student Membership", 
        desc: "For undergraduates and postgraduates.",
        documents: [
            "Valid Student ID Card",
            "Admission Letter or Proof of Enrollment",
            "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
            "Recommendation Letter (Optional)",
            "Coloured Passport Photograph (2x2, not older than 1 month)"
        ]
    },
    { 
        title: "Professional Membership", 
        desc: "For individuals in geospatial, tech, security, and related fields.",
        documents: [
            "Updated Curriculum Vitae (CV)",
            "Academic Certificates (Higher Institution)",
            "Professional Certifications (if any)",
            "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
            "Coloured Passport Photograph (2x2, not older than 1 month)"
        ]
    },
    { 
        title: "Institutional Membership", 
        desc: "For universities, research institutes, and training centers.",
        documents: [
            "Certificate of Establishment / Accreditation",
            "Letter of Intent on Official Institutional Letterhead",
            "Details of Authorized Contact Person (Name, Designation, Official Email Address, Official Phone Number)",
            "Institutional ID Card of Authorized Contact Person(s)",
            "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
            "Coloured Passport Photograph of Authorized Contact Person (2x2, not older than 1 month)"
        ]
    },
    { 
        title: "Corporate Membership", 
        desc: "For private sector organizations.",
        documents: [
            "Certificate of Incorporation",
            "Letter of Intent on Company Letterhead",
            "Details of Authorized Contact Person (Name, Designation, Official Email Address, Official Phone Number)",
            "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
            "Coloured Passport Photograph of Authorized Contact Person (2x2, not older than 1 month)"
        ]
    },
    { 
        title: "Government/Agency Membership", 
        desc: "For ministries, security agencies, and regulators.",
        documents: [
            "Official Letter of Request",
            "Agency Mandate / Establishment Act",
            "Details of Liaison Officer",
            "Official ID of Liaison Officer",
            "Passport Photograph of Liaison Officer"
        ]
    },
    { 
        title: "Fellow/Honorary Membership", 
        desc: "For distinguished leaders and contributors.",
        documents: [] // No documents listed for this type
    },
  ];

export default function ExpandableGrid() {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 w-full">
        {categories.map((item, idx) => (
          <ExpandableCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function ExpandableCard({ item, idx }: { item: CategoryItem; idx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Helper to get icon based on index (matching your original logic)
  const getCategoryIcon = (index: number) => {
    if (index === 0) return <FileText className="w-6 h-6 text-white" />;
    if (index === 1) return <Globe className="w-6 h-6 text-white" />;
    return <Award className="w-6 h-6 text-white" />;
  };

  return (
    // 1. THE GRID CELL WRAPPER
    // This div stays static. It reserves the height in the grid so the row doesn't collapse.
    // 'h-[400px]' is an estimated height for the collapsed card. Adjust as needed.
    <div 
      className="relative h-[420px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 2. THE FLOATING CARD
          - absolute: Breaks out of grid flow so it doesn't push neighbors.
          - z-index: Increases on hover to sit on top of other rows.
      */}
      <motion.div
        layout
        initial={false}
        animate={{
          height: isHovered ? "auto" : "100%", // Expands to fit content on hover
          zIndex: isHovered ? 50 : 10,         // Pops to front
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          absolute top-0 left-0 w-full
          bg-white rounded-4xl p-8 
          shadow-xl shadow-gray-200/40 border border-gray-100 
          overflow-hidden flex flex-col
          ${isHovered ? 'shadow-2xl shadow-green-900/10 border-green-500/30' : ''}
        `}
      >
        {/* Hover Gradient Blob */}
        <div 
          className={`absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl transition-all duration-500 
          ${isHovered ? 'bg-green-500/20' : ''}`} 
        />

        {/* Header Section */}
        <div className="relative mb-6 shrink-0">
          <div className="flex items-start justify-between mb-6">
            <div className={`
              p-4 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm
              ${isHovered 
                ? 'bg-green-600 text-white shadow-green-200 scale-110 rotate-3' 
                : 'bg-green-400 text-white'}
            `}>
              {getCategoryIcon(idx)}
            </div>
            
            <span className={`text-6xl font-bold select-none transition-colors ${isHovered ? 'text-green-50' : 'text-gray-100'}`}>
              0{idx + 1}
            </span>
          </div>
          
          <h3 className={`text-2xl font-bold mb-3 transition-colors ${isHovered ? 'text-green-700' : 'text-gray-900'}`}>
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Divider */}
        <div className={`w-full h-px mb-6 shrink-0 transition-colors ${isHovered ? 'bg-green-100' : 'bg-gray-100'}`}></div>

        {/* HIDDEN CONTENT: Requirements List */}
        <AnimatePresence>
          {isHovered && item.documents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <h4 className="text-xs font-bold text-green-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                Requirements
              </h4>
              <ul className="space-y-3">
                {item.documents.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-600 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-900">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer / Button Area */}
        <div className="mt-auto pt-2 relative z-20">
          {item.title !== "Fellow/Honorary Membership" ? (
            <button
              className={`
                w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2
                ${isHovered ? 'bg-green-600 shadow-green-200' : 'bg-gray-900'}
              `}
            >
              <span className="flex items-center gap-2">
                Apply Now 
                <ChevronRight size={18} className={isHovered ? 'translate-x-1 transition-transform' : ''} />
              </span>
            </button>
          ) : (
            <div className="w-full py-4 rounded-xl font-bold bg-amber-50 border border-amber-100 text-amber-700/60 flex items-center justify-center gap-2 cursor-not-allowed text-sm uppercase tracking-wide">
              By Nomination Only
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}