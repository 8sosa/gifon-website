"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, FileText, Globe, Award } from 'lucide-react';

// --- Types & Data (Strictly Preserved) ---
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
        documents: [] 
    },
];

export default function ExpandableGrid({ onApplyClick }: { onApplyClick: (item: CategoryItem) => void }) {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {categories.map((item, idx) => (
            <ExpandableCard key={idx} item={item} idx={idx} onApply={onApplyClick}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpandableCard({ item, idx, onApply }: { item: CategoryItem; idx: number; onApply: (item: CategoryItem) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for both Mobile and Tablet (Tap-based devices)
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    /* OUTER WRAPPER: Removed fixed height on mobile (h-auto), kept it on md for grid stability */
    <div 
      className="relative w-full h-auto md:h-[420px]" 
      onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
      onClick={handleToggle}
    >
      <motion.div
        layout
        transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
        className={`
          bg-white rounded-3xl p-6 md:p-8 
          shadow-lg shadow-gray-200/50 border border-gray-100 
          flex flex-col w-full cursor-pointer select-none
          ${isOpen 
            ? 'md:absolute top-0 left-0 z-50 shadow-2xl border-green-500/30 ring-1 ring-green-500/10 min-h-max' 
            : 'relative h-full z-10'
          }
        `}
      >
        {/* TOP ROW: Icon and Number */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 md:p-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-green-600' : 'bg-green-500'}`}>
            {idx === 0 ? <FileText className="text-white" /> : idx === 1 ? <Globe className="text-white" /> : <Award className="text-white" />}
          </div>
          <span className="text-5xl md:text-6xl font-bold text-gray-50 opacity-10">
            0{idx + 1}
          </span>
        </div>

        {/* TITLES */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          {item.desc}
        </p>

        {/* SEPARATOR */}
        <div className="w-full h-px bg-gray-100 mb-6"></div>

        {/* EXPANDABLE CONTENT */}
        <AnimatePresence>
          {isOpen && item.documents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <h4 className="text-[11px] font-bold text-green-700 uppercase tracking-widest mb-4">Requirements</h4>
              <ul className="space-y-4">
                {item.documents.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-[14px] leading-snug text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BUTTON: Conditional style based on state */}
        <div className="mt-auto">
          {item.title !== "Fellow/Honorary Membership" ? (
            <button 
              onClick={(e) => { 
                e.stopPropagation(); // Prevents card from closing when clicking button
                onApply(item); 
              }}
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                isOpen ? 'bg-green-600 text-white' : 'bg-gray-900 text-white'
              }`}
            >
              Apply Now <ChevronRight size={18} />
            </button>
          ) : (
            <div className="w-full py-4 rounded-xl font-bold bg-amber-50 text-amber-700 border border-amber-100 text-center text-xs uppercase tracking-wide">
              By Nomination Only
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}