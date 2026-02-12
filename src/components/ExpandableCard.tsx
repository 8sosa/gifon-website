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

function ExpandableCard({ item, idx, onApply }: { item: CategoryItem; idx: number ; onApply: (item: CategoryItem) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getCategoryIcon = (index: number) => {
    if (index === 0) return <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />;
    if (index === 1) return <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />;
    return <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />;
  };

  return (
    /* OUTER WRAPPER: This acts as the "Anchor" and "Spacer" */
    <div 
      className="relative w-full h-[380px] md:h-[420px]" 
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      {/* THE ACTUAL CARD: Lifted out of flow only when open */}
      <motion.div
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          bg-white rounded-3xl p-6 md:p-8 
          shadow-lg shadow-gray-200/50 border border-gray-100 
          flex flex-col transition-shadow w-full
          ${isOpen 
            ? 'md:absolute top-0 left-0 z-50 shadow-2xl border-green-500/30 ring-1 ring-green-500/10 min-h-max' 
            : 'relative h-full z-10'
          }
        `}
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div className={`p-3 md:p-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-green-600 scale-110' : 'bg-green-400'}`}>
            {getCategoryIcon(idx)}
          </div>
          <span className={`text-4xl md:text-6xl font-bold transition-colors ${isOpen ? 'text-green-50' : 'text-gray-100'}`}>
            0{idx + 1}
          </span>
        </div>

        <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${isOpen ? 'text-green-700' : 'text-gray-900'}`}>
          {item.title}
        </h3>
        
        {/* Ensures the description text doesn't cause height mismatch when closed */}
        <p className="text-gray-500 text-sm mb-6 min-h-10">
          {item.desc}
        </p>

        <div className={`w-full h-px mb-6 ${isOpen ? 'bg-green-100' : 'bg-gray-100'}`}></div>

        <AnimatePresence>
          {isOpen && item.documents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <h4 className="text-[10px] font-bold text-green-800 uppercase tracking-widest mb-4">Requirements</h4>
              <ul className="space-y-3">
                {item.documents.map((doc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-[13px] text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-2">
          {item.title !== "Fellow/Honorary Membership" ? (
            <button 
              onClick={(e) => { e.stopPropagation(); onApply(item); }}
              className={`w-full py-3 md:py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 relative z-30 ${isOpen ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'bg-gray-900 text-white'}`}
            >
              Apply Now <ChevronRight size={18} />
            </button>
          ) : (
            <div className="w-full py-3 md:py-4 rounded-xl font-bold bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center text-xs uppercase tracking-wide">
              By Nomination Only
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}