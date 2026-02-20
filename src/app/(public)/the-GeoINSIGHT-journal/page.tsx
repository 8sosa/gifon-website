"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  ShieldCheck, 
  Scale, 
  Info,
  Cpu, 
  Lock,
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  BookOpen,
  Download,
  Mail,
  PenTool,
  LayoutTemplate,
  X,
  Quote,
  ChevronRight,
  Users
} from 'lucide-react';
import SubscribeModal from '@/components/SubscribeModal';

export default function PublicationsPage() {
  const [showModal, setShowModal] = useState(false);
  const [showStructureModal, setShowStructureModal] = useState(false);
  
  // --- 1. Focus Areas (Updated to Arrays) ---
  const focusAreas = [
    {
      title: "Core GEOINT & Spatial Intelligence",
      // Converted to simple string array
      desc: [
        "Remote sensing", 
        "GIS & Spatial analysis", 
        "Spatial data science", 
        "Artificial Intelligence (AI)", 
        "Location-based analytics"
      ],
      icon: <Globe size={32} />,
      color: "bg-blue-50 text-blue-600",
      dotColor: "bg-blue-400" // Added for list styling
    },
    {
      title: "National Security & Intelligence",
      desc: [
        "Defense & military strategy",
        "Border security management",
        "Counter-terrorism operations",
        "Critical infrastructure protection"
      ],
      icon: <ShieldCheck size={32} />,
      color: "bg-red-50 text-red-600",
      dotColor: "bg-red-400"
    },
    {
      title: "Governance & Policy",
      desc: [
        "National development planning",
        "Smart cities & urban resilience",
        "Electoral mapping & integrity",
        "Climate security & environmental policy"
      ],
      icon: <Scale size={32} />,
      color: "bg-orange-50 text-orange-600",
      dotColor: "bg-orange-400"
    },
    {
      title: "Tech, Innovation & Industry",
      desc: [
        "Startups & geospatial entrepreneurship",
        "Satellite technology advancements",
        "UAVs & Drone technology",
        "Digital Twins & Big Data integration"
      ],
      icon: <Cpu size={32} />,
      color: "bg-purple-50 text-purple-600",
      dotColor: "bg-purple-400"
    },
    {
      title: "Education & Ethics",
      desc: [
        "Workforce development & training",
        "Professional standards & certification",
        "Gender inclusion in GEOINT",
        "Legal frameworks & data privacy"
      ],
      icon: <GraduationCap size={32} />,
      color: "bg-green-50 text-green-600",
      dotColor: "bg-green-400"
    },
  ];

  // --- 2. Article Types & Word Counts ---
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
            <span className="font-serif">- GeoINSIGHT -</span>
            <br />
            The Journal of Geospatial Intelligence
          </>
        }
        description={
          <>
            “Mapping knowledge, informing decisions, <br/>and shaping the future of geospatial intelligence.”
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
              <span className="text-green-600">GEOINSIGHT</span> - The Journal of Geospatial Intelligence
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

        {/* --- Section 2: Focus Areas (Updated Render) --- */}
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
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1 h-full"
                >
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{item.title}</h3>
                    
                    {/* Render List Here */}
                    <ul className="space-y-3 mt-2">
                        {item.desc.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-snug">
                                {/* Custom colored bullet point */}
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${item.dotColor}`}></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 3: Author Guidelines --- */}
        <section id="guidelines" className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-start">

                  {/* --- LEFT COLUMN: Guidelines & Contributors --- */}
                  <div className="flex-1">
                      <div className="inline-flex items-center gap-2 text-green-400 font-bold tracking-wider uppercase text-sm mb-4">
                          <PenTool size={16} /> Author Submission Guidelines
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-cooper">Writing for GeoINSIGHT</h2>
                      <p className="text-gray-300 mb-8 leading-relaxed">
                          All submissions must be written in clear, professional English. Writing must be objective, evidence-based, and analytical. We strictly avoid political propaganda, commercial advertising, or unverified security claims.
                      </p>

                      <div className="space-y-6">
                          {/* Card 1: Formatting */}
                          <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                  <FileText size={20} className="text-green-400" /> Formatting Specifications
                              </h4>
                              <ul className="space-y-3 text-sm text-gray-300">
                                  <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1" /> <span><strong>Format:</strong> Microsoft Word (.docx), Times New Roman, 12pt.</span></li>
                                  <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1" /> <span><strong>Spacing:</strong> 1.5 Line Spacing, 1-inch margins.</span></li>
                                  <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1" /> <span><strong>Citation:</strong> APA Style (7th Edition).</span></li>
                                  <li className="flex gap-3"><CheckCircle2 size={16} className="shrink-0 mt-1" /> <span><strong>Abstract:</strong> 150–250 words with 4–6 keywords.</span></li>
                              </ul>
                          </div>

                          {/* Card 2: Referencing Style */}
                          <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                  <Quote size={20} className="text-green-400" /> Referencing Style
                              </h4>
                              <p className="text-sm text-gray-300 mb-4">
                                  The <span className='font-cooper'>GIFON</span> Journal adopts the <strong>APA (7th Edition)</strong> Referencing Style.
                              </p>
                              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                  <p className="text-xs text-green-400 font-bold uppercase tracking-wider mb-3">
                                      In-text Citation Examples
                                  </p>
                                  <ul className="space-y-2">
                                      {['(Usman, 2024)', '(National Bureau of Statistics, 2023)', '(Smith & Johnson, 2022)'].map((cite, i) => (
                                          <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-mono bg-white/5 p-2 rounded border border-white/5">
                                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                                              {cite}
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="w-full h-px bg-white/10 mb-8 mt-8"></div>

                      {/* Contributors & Staff Note Section */}
                      <div>
                          <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                              <Users size={20} className="text-green-400" /> Eligible Contributors
                          </h4>

                          <p className="text-sm text-gray-300 mb-3">Submissions are welcomed from:</p>

                          <ul className="space-y-2 text-sm text-gray-300 mb-8 ml-1">
                              {[<><span className='cooper'>GIFON</span> Staff</>, <>Registered <span className='cooper'>GIFON</span> Members</>, 'Fellows and Distinguished Associates', 'External collaborators (by invitation)'].map((item, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-1.5 shrink-0"></span>
                                      <span>{item}</span>
                                  </li>
                              ))}
                          </ul>

                          {/* NEW: Special Note for Staff */}
                          <div className="bg-blue-900/20 border-l-2 border-blue-400 p-4 rounded-r-lg mb-6">
                              <h5 className="text-blue-200 font-bold text-sm mb-2 flex items-center gap-2">
                                  <Info size={14} /> Special Note for Staff & Members
                              </h5>
                              <p className="text-xs text-blue-100/70 mb-2">Institutional contributors are encouraged to:</p>
                              <ul className="space-y-1.5">
                                  {[<>Align articles with <span className='cooper'>GIFON</span> programs & working groups</>, 'Address national development priorities', 'Support policy implementation & strategic intelligence'].map((note, i) => (
                                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                          <ChevronRight size={12} className="mt-0.5 text-blue-400 shrink-0" />
                                          {note}
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          <button
                              onClick={() => setShowStructureModal(true)}
                              className="w-full py-3 px-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-between group"
                          >
                              <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                                  <LayoutTemplate size={18} /> View Manuscript Structure
                              </span>
                              <ChevronRight size={16} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
                          </button>
                      </div>
                  </div>

                  {/* --- RIGHT COLUMN: Word Count & Ethics --- */}
                  <div className="flex-1 w-full space-y-6">
                      
                      {/* 1. Word Count Card (White) */}
                      <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl relative z-10">
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
                                              <td className="pr-4 py-3">
                                                  <div className="font-bold text-gray-800">{row.type}</div>
                                              </td>
                                              <td className="text-right font-mono text-green-700 font-medium whitespace-nowrap py-3">
                                                  {row.count}
                                              </td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                          <p className="text-xs text-gray-400 mt-4 italic">* Excludes abstract, references, tables, and figures.</p>

                          <div className="mt-8 pt-6 border-t border-gray-100">
                              <a
                                  href="mailto:editorial@gifon.org.ng"
                                  className="w-full text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
                              >
                                  <Mail size={18} /> Email Submission
                              </a>
                          </div>
                      </div>

                      {/* 2. NEW: Standards of Ethics & Originality Card */}
                      <div className="bg-slate-800/80 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                          <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3">
                              <ShieldCheck size={20} className="text-green-400" /> Standards of Ethics
                          </h4>
                          
                          <div className="space-y-5">
                              {/* Submissions Section */}
                              <div>
                                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Submissions Must Be:</p>
                                  <ul className="grid grid-cols-1 gap-2">
                                      {['Original Work', 'Not under review elsewhere', 'Free from plagiarism'].map((item, i) => (
                                          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                              <CheckCircle2 size={14} className="text-green-500" /> {item}
                                          </li>
                                      ))}
                                  </ul>
                              </div>

                              {/* Authors Section */}
                              <div>
                                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Authors Must:</p>
                                  <ul className="space-y-2 text-sm text-gray-300">
                                      <li className="flex gap-2">
                                          <Scale size={14} className="mt-1 text-gray-400 shrink-0"/> <span>Declare conflicts of interest & funding sources.</span>
                                      </li>
                                      <li className="flex gap-2">
                                          <Scale size={14} className="mt-1 text-gray-400 shrink-0"/> <span>Obtain permission for copyrighted figures.</span>
                                      </li>
                                  </ul>
                              </div>

                              {/* Security Warning */}
                              <div className="bg-red-500/10 border border-red-500/30 rounded p-3 flex gap-3 items-start">
                                  <Lock size={16} className="text-red-400 mt-0.5 shrink-0" />
                                  <p className="text-xs text-red-100 leading-tight">
                                      <strong>Security Note:</strong> Security-sensitive information must not compromise national safety.
                                  </p>
                              </div>
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
      {/* --- MODAL: Manuscript Structure --- */}
      {showStructureModal && (
        <div 
            className="fixed inset-0 z-101 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all"
            onClick={() => setShowStructureModal(false)}
        >
            <div 
                className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <LayoutTemplate className="text-green-600" size={24} /> 
                        Structure & Format
                    </h3>
                    <button 
                        onClick={() => setShowStructureModal(false)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
                        Required Order of Presentation:
                    </p>
                    <ol className="list-[lower-roman] list-inside space-y-2 text-gray-700 font-medium marker:text-green-600 marker:font-bold ml-2">
                        <li className="pl-2">Title of the Article</li>
                        <li className="pl-2">Author(s) Full Name(s)</li>
                        <li className="pl-2">Affiliation, Position, Institution, City, Country</li>
                        <li className="pl-2">Email (corresponding author)</li>
                        <li className="pl-2">Abstract (150–250 words)</li>
                        <li className="pl-2">Keywords (4–6 keywords)</li>
                        <li className="pl-2">Main Body</li>
                        <li className="pl-2">Introduction</li>
                        <li className="pl-2">Background / Literature Review</li>
                        <li className="pl-2">Methodology (if applicable)</li>
                        <li className="pl-2">Analysis / Discussion</li>
                        <li className="pl-2">Findings / Implications</li>
                        <li className="pl-2">Conclusion</li>
                        <li className="pl-2">Acknowledgements (if any)</li>
                        <li className="pl-2">References</li>
                        <li className="pl-2">Appendices (if necessary)</li>
                    </ol>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                    <button 
                        onClick={() => setShowStructureModal(false)}
                        className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-gray-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* --- Subscribe Modal (Already existed) --- */}
      <SubscribeModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
}