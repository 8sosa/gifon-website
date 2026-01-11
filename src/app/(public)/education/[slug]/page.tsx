import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Target, 
  Layers, 
  Users, 
  CheckCircle2, 
  ArrowLeft, 
  MapPin, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// --- 1. THE DATA ---
type Program = {
  title: string;
  category: string;
  goals: string[];
  structure: string[];
  tagline?: string;
  audience: string[] | string;
  outcomes: string[];
};

const outreachData: Record<string, Program> = {
  'boot-camps': {
    title: 'GIFON Bootcamps (STEM & GEOINT)',
    category: 'Youth-Focused Programme',
    tagline: '“Learning by doing, building tomorrow’s geospatial and STEM leaders today.”',
    goals: [
      'Introduce students, youth, and early career professionals to STEM, geospatial technologies, and geospatial intelligence (GEOINT) in practical and engaging ways.',
      'Build foundational and advanced skills in areas such as geospatial data analysis, remote sensing, GIS, location intelligence, and applied innovation.',
      'Serve as talent building pipelines that prepare participants for further training, certification, research, and careers within Nigeria’s growing geospatial and digital economy.',
      'Nurture critical thinking, technical competence, and career readiness.'
    ],
    structure: [
      'Intensive, hands-on learning programmes combining technical training, problem-based learning, and real-world case studies.',
      'Immersive sessions that bridge the gap between theory and real-world application using modern tools and data.',
      'Delivered through in-person and virtual formats.',
      'Includes mentorship and applied projects solving problems in security, development, innovation, and decision making.'
    ],
    audience: [
      'Students & Youth: Secondary school students, Undergraduate/Postgraduate students (GIS, Geography, Surveying, Engineering, CS, Data Science, etc.), NYSC members.',
      'Early Career & Emerging Professionals: Entry-level GIS/Data analysts, geospatial technicians, graduates seeking practical experience.',
      'Public Sector & Development Practitioners: MDA staff, Local government officers, Development practitioners (SDGs, climate, humanitarian).',
      'Security & National Interest Stakeholders: Personnel from security/emergency response institutions, Analysts involved in risk assessment.',
      'Innovators & Entrepreneurs: Startups, civic-tech innovators, Geo-Innovation Challenge participants.',
      'Educators & Researchers: Teachers, lecturers, trainers, and researchers seeking applied skills.'
    ],
    outcomes: [
      'Participants equipped with practical skills in STEM, geospatial technologies, and GEOINT.',
      'Exposure to modern tools, data, and problem-solving approaches.',
      'Preparation for Nigeria’s evolving geospatial and digital economy.'
    ]
  },
  'stem-geoint-awareness': {
    title: 'STEM & GEOINT Awareness',
    category: 'Youth-Focused Programme',
    tagline: '“Inspiring curiosity, awareness, and confidence in geospatial intelligence.”',
    goals: [
      'Increase understanding, interest, and participation in STEM and geospatial intelligence across schools, communities, and institutions.',
      'Introduce learners and the general public to the role of GEOINT in national security, infrastructure, climate resilience, disaster management, and sustainable development.',
      'Promote early exposure, inclusivity, and informed participation in geospatial careers.'
    ],
    structure: [
      'National outreach initiative involving school engagements, public lectures, digital campaigns, exhibitions, and community programmes.',
      'Introduces diverse audiences to the importance of science, technology, and geospatial intelligence in everyday life.'
    ],
    audience: [
      'Students & Young Learners: Primary/secondary students, Tertiary students exploring STEM, Youth groups.',
      'Educators & Academic Institutions: Teachers, School administrators, Lecturers, Academic staff.',
      'Communities & General Public: Community leaders, CSOs, Citizens interested in maps/data.',
      'Public Sector & Development Stakeholders: Local government officials, Public servants, Development practitioners.',
      'Youth & Inclusion Focused Groups: Young women/girls in STEM, Underserved/rural communities, Non-technical audiences.'
    ],
    outcomes: [
      'Increased understanding of how maps, data, and location intelligence affect daily life.',
      'Enriched STEM education in schools and institutions.',
      'Broadened public awareness of GEOINT for national development.'
    ]
  },
  'geoinnovation-challenge': {
    title: 'Geo-Innovation Challenge',
    category: 'Youth-Focused Programme',
    tagline: '“Turning location intelligence into solutions that matter.”',
    goals: [
      'Encourage young innovators, startups, and multidisciplinary teams to develop geospatial driven solutions to real-world national and development challenges.',
      'Apply location intelligence, data analytics, and emerging technologies to priority sectors (security, infrastructure, climate, agriculture, health, urban development).',
      'Support outstanding solutions through incubation, partnerships, and scale-up.'
    ],
    structure: [
      'Competitive innovation platform focusing on applied solutions.',
      'Participants receive mentorship, technical guidance, and exposure to industry experts.'
    ],
    audience: [
      'Innovators & Startups: Early/growth-stage startups (geospatial, civic-tech, agri-tech, security), Founders, Social enterprises.',
      'Students & Research Teams: Undergraduate/Postgraduate students, Multidisciplinary teams, University innovation hubs.',
      'Early Career & Young Professionals: GIS analysts, Data scientists, Developers, Researchers.',
      'Public Sector & Development Practitioners: Government MDA analysts, Policy/planning professionals.',
      'Technology & Creative Talent: Software developers, UI/UX designers, Product managers, AI/Drone enthusiasts.'
    ],
    outcomes: [
      'Development of geospatial-driven solutions for real-world challenges.',
      'Collaboration between technical, policy, and design talents.',
      'Support for incubation and scaling of impactful innovations.'
    ]
  },
};

// --- 2. THE PAGE COMPONENT ---
export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = outreachData[slug];

  if (!program) {
    return notFound();
  }

  // Helper to handle string vs string array for audience
  const audienceList = Array.isArray(program.audience) ? program.audience : [program.audience];

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-emerald-950 text-white pt-32 pb-24 overflow-hidden border-b border-emerald-900">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-10">
            {/* Simple CSS Grid Pattern */}
            <div className="absolute inset-0" 
                 style={{ 
                     backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-transparent to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <Link 
            href="/forums" 
            className="inline-flex items-center text-emerald-300 hover:text-white mb-8 text-sm font-medium transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Forums
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-800 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm">
                <Sparkles size={12} />
                {program.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              {program.title}
            </h1>
            
            {program.tagline && (
                <p className="text-xl md:text-2xl text-emerald-100/90 font-medium italic border-l-4 border-emerald-500 pl-6 leading-relaxed max-w-2xl">
                    {program.tagline}
                </p>
            )}
          </div>
        </div>
      </section>

      {/* --- CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 relative z-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* === LEFT COLUMN: MAIN INFO (8 Cols) === */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* 1. Goals Section (Card Grid) */}
          <section className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-green-100 rounded-lg text-green-700 shadow-inner">
                <Target size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Program Goals</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.goals.map((goal, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-green-50/50 transition-colors border border-gray-100 hover:border-green-100 group">
                   <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-white border-2 border-green-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   </div>
                   <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                       {goal}
                   </p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Structure Section (Timeline Style) */}
          <section className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-blue-100 rounded-lg text-blue-700 shadow-inner">
                <Layers size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Program Structure</h2>
            </div>

            <div className="relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-6 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                    {program.structure.map((item, idx) => (
                        <div key={idx} className="relative flex gap-6">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 border-4 border-white ring-2 ring-blue-100 flex items-center justify-center z-10 text-blue-600 font-bold text-sm">
                                {idx + 1}
                            </div>
                            <div className="pt-1">
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          {/* 3. Outcomes Section (Visual Checklist) */}
          <section className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-purple-100 rounded-lg text-purple-700 shadow-inner">
                <CheckCircle2 size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Expected Outcomes</h2>
            </div>
            
            <div className="space-y-4">
              {program.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-linear-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0 group-hover:text-green-600 transition-colors" />
                    <span className="text-gray-800 font-medium">{outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* === RIGHT COLUMN: SIDEBAR (4 Cols) === */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Sticky Wrapper */}
          <div className="sticky top-24 space-y-6">
            
            {/* 1. Audience Card (Dark Theme) */}
            <div className="bg-gray-900 text-gray-100 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full blur-[60px] opacity-20"></div>
                
                <div className="flex items-center gap-3 mb-6 text-green-400">
                    <Users size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-xs">Who Should Attend</h3>
                </div>

                <ul className="space-y-6 relative z-10">
                    {audienceList.map((aud, i) => {
                        // Logic to bold the title part of the string (before the colon)
                        const parts = aud.split(':');
                        const title = parts.length > 1 ? parts[0] + ':' : null;
                        const body = parts.length > 1 ? parts.slice(1).join(':') : aud;

                        return (
                            <li key={i} className="text-sm leading-relaxed border-l-2 border-gray-700 pl-4">
                                {title && <span className="block font-bold text-white mb-1">{title}</span>}
                                <span className="text-gray-400">{body}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* 2. Key Details Box */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">Program Details</h3>
                
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <span className="block text-gray-900 font-medium text-sm">Location</span>
                        <span className="text-gray-500 text-sm">Nationwide (Nigeria)</span>
                    </div>
                </div>
                
                <div className="w-full h-px bg-gray-100"></div>
                
                <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <span className="block text-gray-900 font-medium text-sm">Frequency</span>
                        <span className="text-gray-500 text-sm">Annual / Periodic Cycles</span>
                    </div>
                </div>
            </div>

            {/* 3. CTA Box */}
            <div className="bg-linear-to-br from-green-600 to-emerald-800 rounded-2xl p-8 text-center shadow-lg text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Join?</h3>
                <p className="text-green-100 text-sm mb-6">
                    Be part of the next generation of geospatial leaders.
                </p>
                <Link 
                    href="/contact-us"
                    className="flex items-center justify-center gap-2 w-full bg-white text-green-800 font-bold py-3.5 px-6 rounded-xl hover:bg-green-50 transition-all shadow-md group"
                >
                    Contact Us
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}