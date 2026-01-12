"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  ShieldCheck, 
  Scale, 
  Cpu, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  BookOpen,
  Download,
  Mail,
  PenTool,
  ChevronRight
} from 'lucide-react';
import SubscribeModal from '@/components/SubscribeModal';

export default function PublicationsPage() {
  const [showModal, setShowModal] = useState(false);
  
  // --- 1. Focus Areas (Derived from Section 3: Acceptable Topic Areas) ---
  const focusAreas = [
    {
      title: "Core GEOINT & Spatial Intelligence",
      desc: "Remote sensing, GIS, spatial data science, AI, and location-based analytics.",
      icon: <Globe size={32} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "National Security & Intelligence",
      desc: "Defense, border security, counter-terrorism, and critical infrastructure protection.",
      icon: <ShieldCheck size={32} />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Governance & Policy",
      desc: "National planning, smart cities, electoral mapping, and climate security.",
      icon: <Scale size={32} />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Tech, Innovation & Industry",
      desc: "Startups, satellite technology, UAVs, Digital Twins, and Big Data.",
      icon: <Cpu size={32} />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Education & Ethics",
      desc: "Workforce development, professional standards, gender inclusion, and legal frameworks.",
      icon: <GraduationCap size={32} />,
      color: "bg-green-50 text-green-600"
    },
  ];

  // --- 2. Article Types & Word Counts (Derived from Section 6) ---
  const articleTypes = [
    { type: "Research Articles", count: "4,000 – 7,000 words", desc: "Empirical or theoretical research." },
    { type: "Policy & Strategy Papers", count: "3,000 – 5,000 words", desc: "National, sectoral or institutional insights." },
    { type: "Technical Papers", count: "3,000 – 6,000 words", desc: "Methods, tools, and system innovations." },
    { type: "Case Studies", count: "2,500 – 4,500 words", desc: "Applied GEOINT projects & lessons." },
    { type: "Reviews / Commentary", count: "1,500 – 3,000 words", desc: "Thematic reviews or strategic thought leadership." },
  ];

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block text-lg md:text-xl font-medium tracking-widest uppercase mb-2 opacity-90">Official Journal of <span className='cooper'>GIFON</span></span>
            <span className="font-serif">- GeoINSIGHT -</span>
            <br />
            The Journal of Geospatial Intelligence
          </>
        }
        description={
          <>
            “Mapping knowledge, informing decisions, and shaping the future of geospatial intelligence.”
          </>
        }
        ctaText="Submit Manuscript"
        ctaLink="#guidelines"
        backgroundMedia={[
          "/media/eye.jpeg", 
        ]}
      />

      <main className="font-sans bg-gray-50">
        
        {/* --- Section 1: About the Journal --- */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-cooper">
              Advancing <span className="text-green-600">GEOINT</span> Excellence
            </h2>
            <div className="text-gray-600 leading-relaxed text-lg space-y-6 text-justify">
              <p>
                GeoINSIGHT is <span className='cooper'>GIFON</span>&apos;s flagship journal, dedicated to advancing knowledge, research, and discourse in geospatial intelligence (GEOINT), spatial data science, and location based innovation. It serves as a credible platform for scholars, practitioners, policymakers, and industry leaders to share insights, research findings, case studies, and thought leadership on geospatial applications for national security, development, infrastructure, and societal impact.
                <br />
                The journal aims to bridge theory and practice, promoting evidence based solutions, innovation, and collaboration across the geospatial ecosystem. Each edition highlights trends, challenges, breakthroughs, and success stories, fostering informed decision-making and inspiring the next generation of geospatial professionals.
              </p>
            </div>
          </div>
        </section>

        {/* --- Section 2: Focus Areas --- */}
        <section className="py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Journal Focus Areas</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Submissions must fall within or strongly relate to these core pillars of Geospatial Intelligence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {focusAreas.map((item, idx) => (
                <div 
                    key={idx} 
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1"
                >
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 3: Author Guidelines (The "Meat") --- */}
        <section id="guidelines" className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
             {/* Abstract Background */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

             <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    
                    {/* Left Col: Requirements */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 text-green-400 font-bold tracking-wider uppercase text-sm mb-4">
                            <PenTool size={16} /> Author Submission Guidelines
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cooper">Writing for GeoINSIGHT</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            All submissions must be written in clear, professional English. Writing must be objective, evidence-based, and analytical. We strictly avoid political propaganda, commercial advertising, or unverified security claims.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><FileText size={20} className="text-green-400"/> Formatting Specifications</h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1"/> <span><strong>Format:</strong> Microsoft Word (.docx), Times New Roman, 12pt.</span></li>
                                    <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1"/> <span><strong>Spacing:</strong> 1.5 Line Spacing, 1-inch margins.</span></li>
                                    <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1"/> <span><strong>Citation:</strong> APA Style (7th Edition).</span></li>
                                    <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1"/> <span><strong>Abstract:</strong> 150–250 words with 4–6 keywords.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Word Counts Table */}
                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6 border-b pb-4">Manuscript Length Requirements</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="text-gray-500 border-b border-gray-100">
                                            <th className="pb-3 font-semibold">Article Type</th>
                                            <th className="pb-3 font-semibold text-right">Word Count*</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {articleTypes.map((row, i) => (
                                            <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                                <td className="py-4 pr-4">
                                                    <div className="font-bold text-gray-800">{row.type}</div>
                                                    <div className="text-xs text-gray-500 mt-1">{row.desc}</div>
                                                </td>
                                                <td className="py-4 text-right font-mono text-green-700 font-medium whitespace-nowrap">
                                                    {row.count}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-400 mt-4 italic">* Excludes abstract, references, tables, and figures.</p>
                            
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-600 mb-4">Ready to submit? Send your manuscript, bio, and declaration form.</p>
                                <a 
                                    href="mailto:editorial@gifon.org.ng"
                                    className="w-full text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
                                >
                                    <Mail size={18} /> Email Submission
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* --- Section 4: Archive (Bookshelf) --- */}
        <section id="archive" className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 font-cooper">Publication Archive</h2>
                        <p className="text-gray-500 mt-2">Browse previous editions of Eyes on Location.</p>
                    </div>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-green-600 font-bold hover:gap-3 transition-all">
                        View All Issues <ChevronRight size={20} />
                    </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {[
                        { vol: "Vol. 1, No. 1", date: "August 2025" },
                        { vol: "Vol. 1, No. 2", date: "November 2025" },
                    ].map((issue, i) => (
                        <div key={i} className="group flex flex-col items-center cursor-pointer">
                            <div className="relative w-full aspect-3/4 mb-6 rounded-r-2xl rounded-l-md shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-gray-100 border-l-4 border-gray-300 overflow-hidden">
                                {/* Placeholder Cover */}
                                <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-4 text-center">
                                    <div className="font-serif font-bold text-slate-400 text-xl mb-2">Eyes on<br/>Location</div>
                                    <BookOpen className="text-slate-300" size={40} />
                                </div>
                                <Image 
                                    src="/ph.svg" 
                                    alt={`Cover of ${issue.vol}`} 
                                    fill 
                                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                                />
                                {/* Gloss Effect */}
                                <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent pointer-events-none"></div>
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-gray-900">{issue.vol}</h3>
                            <p className="text-sm text-gray-500 mb-3">{issue.date}</p>
                            <button className="text-xs font-bold text-green-600 uppercase tracking-wider hover:text-green-800 flex items-center gap-2 transition-colors">
                                <Download size={14} /> Download PDF
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* --- Bottom CTA --- */}
        <section className="py-16 px-4 bg-green-50 border-t border-green-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Review Process & Ethics</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    All submissions undergo a double-blind peer review process. We adhere to strict ethical standards—plagiarism is prohibited, and authors must declare conflicts of interest. Security-sensitive information must not compromise national safety.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="mailto:editorial@gifon.org.ng"
                        className="px-8 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition shadow-lg"
                    >
                        Submit Article
                    </Link>
                     <button
                        onClick={() => setShowModal(true)}
                        className="px-8 py-3 rounded-lg font-semibold bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition shadow-sm"
                    >
                        Subscribe to Journal
                    </button>
                </div>
            </div>
        </section>

      </main>
      <SubscribeModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
}