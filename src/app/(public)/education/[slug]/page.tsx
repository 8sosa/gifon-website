// app/(public)/education/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Users, 
  ArrowLeft, 
  ArrowRight,
  GraduationCap,
  Briefcase,
  Building2,
  ShieldAlert,
  Lightbulb,
  BookOpen,
  Globe,
  HeartHandshake,
  Cpu,
  CheckCircle2
} from 'lucide-react';

// --- 1. DATA TYPES & STRUCTURE ---

type AudienceCategory = {
  category: string;
  points: string[];
  icon?: any; // Optional icon override
};

type Program = {
  title: string | React.ReactNode;
  tagline?: string | React.ReactNode;
  audience: AudienceCategory[];
};

// Helper to assign icons based on category keywords
const getIconForCategory = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('student') || lower.includes('learners')) return GraduationCap;
  if (lower.includes('early career') || lower.includes('professional')) return Briefcase;
  if (lower.includes('public sector') || lower.includes('government')) return Building2;
  if (lower.includes('security')) return ShieldAlert;
  if (lower.includes('innovator') || lower.includes('startup') || lower.includes('technology')) return Lightbulb;
  if (lower.includes('educator') || lower.includes('research')) return BookOpen;
  if (lower.includes('community') || lower.includes('public')) return Globe;
  if (lower.includes('inclusion') || lower.includes('youth')) return HeartHandshake;
  if (lower.includes('tech') || lower.includes('creative')) return Cpu;
  return Users;
};

const outreachData: Record<string, Program> = {
  'boot-camps': {
    title: <><span className='cooper'>GIFON</span> Bootcamps</>,
    tagline: '“Learning by doing, building tomorrow’s geospatial and STEM leaders today.”',
    audience: [
      {
        category: "Students & Youth",
        points: [
          "Secondary school students with interest in STEM and technology",
          "Undergraduate and postgraduate students in GIS, Geography, Surveying, Engineering, Computer Science, Data Science, Environmental Studies, Urban Planning, and related fields",
          "NYSC members seeking in demand technical and digital skills"
        ]
      },
      {
        category: "Early Career & Emerging Professionals",
        points: [
          "Entry level GIS analysts, geospatial technicians, and data analysts",
          "Young professionals transitioning into geospatial intelligence, location intelligence, or data driven roles",
          "Graduates seeking practical experience to complement academic learning"
        ]
      },
      {
        category: "Public Sector & Development Practitioners",
        points: [
          "Staff of government ministries, departments, and agencies (MDAs) involved in planning, security, environment, infrastructure, and emergency management",
          "Local government officers engaged in community mapping and development planning",
          "Development practitioners working on SDGs, climate action, humanitarian response, and public service delivery"
        ]
      },
      {
        category: "Security & National Interest Stakeholders",
        points: [
          "Personnel from security, emergency response, and intelligence related institutions (where appropriate)",
          "Analysts and officers involved in risk assessment, situational awareness, and decision support"
        ]
      },
      {
        category: "Innovators & Entrepreneurs",
        points: [
          "Startups and innovators building geospatial, civic-tech, or data driven solutions",
          "Participants in the GIFON Geo-Innovation Challenge",
          "Entrepreneurs exploring the use of location intelligence for business and social impact"
        ]
      },
      {
        category: "Educators & Researchers",
        points: [
          "Teachers, lecturers, and trainers in STEM and geospatial disciplines",
          "Researchers seeking applied geospatial skills and exposure to real world datasets"
        ]
      }
    ]
  },
  'stem-geoint-awareness': {
    title: 'STEM & GEOINT Awareness',
    tagline: '“Inspiring curiosity, awareness, and confidence in geospatial intelligence.”',
    audience: [
      {
        category: "Students & Young Learners",
        points: [
          "Primary and secondary school students curious about science, technology, and innovation",
          "Tertiary institution students exploring STEM and geospatial career pathways",
          "Youth groups and clubs interested in digital skills and future careers"
        ]
      },
      {
        category: "Educators & Academic Institutions",
        points: [
          "Teachers and school administrators seeking to enrich STEM education",
          "Lecturers and academic staff in geography, science, engineering, and technology disciplines",
          "Schools and institutions interested in introducing geospatial concepts into their curricula"
        ]
      },
      {
        category: "Communities & the General Public",
        points: [
          "Community leaders and local development groups",
          "Civil society organizations and community based organisations",
          "Citizens interested in understanding how maps, data, and location intelligence affect daily life"
        ]
      },
      {
        category: "Public Sector & Development Stakeholders",
        points: [
          "Local government officials and public servants involved in planning, service delivery, and development programmes",
          "Development practitioners working in education, environment, health, disaster management, and climate resilience"
        ]
      },
      {
        category: "Youth & Inclusion Focused Groups",
        points: [
          "Young women and girls in STEM initiatives",
          "Underserved and rural communities seeking exposure to digital and geospatial opportunities",
          "Nontechnical audiences interested in introductory learning and awareness"
        ]
      }
    ]
  },
  'geoinnovation-challenge': {
    title: 'Geo-Innovation Challenge',
    tagline: '“Turning location intelligence into solutions that matter.”',
    audience: [
      {
        category: "Innovators & Startups",
        points: [
          "Early stage and growth-stage startups building geospatial, civic-tech, climate-tech, agri-tech, or security related solutions",
          "Founders and co-founders leveraging location intelligence, data analytics, and emerging technologies",
          "Social enterprises applying geospatial solutions for public good"
        ]
      },
      {
        category: "Students & Research Teams",
        points: [
          "Undergraduate and postgraduate students in GIS, engineering, computer science, data science, environmental studies, urban planning, and related disciplines",
          "Multidisciplinary student teams combining technical, policy, and design skills",
          "University innovation hubs and research groups"
        ]
      },
      {
        category: "Early Career & Young Professionals",
        points: [
          "GIS analysts, data scientists, software developers, and researchers",
          "Young professionals seeking to turn ideas into deployable geospatial solutions",
          "Participants of GIFON Bootcamps and Capacity Development programmes"
        ]
      },
      {
        category: "Public Sector & Development Practitioners",
        points: [
          "Analysts and professionals from government MDAs working on security, planning, infrastructure, climate, or development challenges",
          "Development practitioners addressing SDGs, humanitarian response, and resilience",
          "Policy and planning professionals interested in data-driven innovation"
        ]
      },
      {
        category: "Technology & Creative Talent",
        points: [
          "Software developers, UI/UX designers, and product managers collaborating on geospatial solutions",
          "AI, remote sensing, drone, and open data enthusiasts",
          "Hackers, makers, and problem solvers with an innovation mindset"
        ]
      }
    ]
  }
};

// --- 2. THE PAGE COMPONENT ---
export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = outreachData[slug];

  if (!program) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-emerald-950 text-white pt-32 pb-20 overflow-hidden border-b border-emerald-900">
        
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0" 
                 style={{ 
                     backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                 }}>
            </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-transparent to-transparent z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Link 
            href="/forums" 
            className="inline-flex items-center text-emerald-300 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Forums
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            {program.title}
          </h1>
          
          {program.tagline && (
              <p className="text-xl md:text-2xl text-emerald-100/80 font-serif italic max-w-3xl mx-auto leading-relaxed">
                  {program.tagline}
              </p>
          )}
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* === LEFT COLUMN: AUDIENCE LIST (8 Cols) === */}
          <div className="lg:w-2/3">
            
            <div className="mb-10">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Participate?</h2>
               <div className="h-1.5 w-20 bg-green-500 rounded-full"></div>
            </div>

            <div className="grid gap-8">
              {program.audience.map((group, idx) => {
                const Icon = getIconForCategory(group.category);
                
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="shrink-0 p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        <Icon size={28} strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 pt-2">{group.category}</h3>
                    </div>

                    <ul className="space-y-4 ml-2">
                      {group.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                          <CheckCircle2 size={18} className="text-green-400 mt-1 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === RIGHT COLUMN: CTA (4 Cols) === */}
          <div className="lg:w-1/3 space-y-8">
            <div className="sticky top-48 md:top-60 lg:top-68 xl:top-70">
                {/* CTA Box */}
                <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full blur-[80px] opacity-20"></div>
                    
                    <h3 className="text-2xl font-bold mb-3 relative z-10">Ready to Apply?</h3>
                    <p className="text-gray-400 mb-8 relative z-10">
                        Join us in building the future of geospatial intelligence in Nigeria.
                    </p>
                    
                    <div className="space-y-4 relative z-10">
                        <Link 
                            href="/membership"
                            className="block w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-center transition-all shadow-lg shadow-green-900/20"
                        >
                            Join our Forum
                        </Link>
                        <Link 
                            href="/contact-us"
                            className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all backdrop-blur-sm"
                        >
                            Contact Us
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Additional Info / Note */}
                <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 text-sm text-green-800">
                    <p className="leading-relaxed">
                        <span className="font-bold block mb-2">Note:</span>
                        Our programs are designed to be inclusive. If you don't see your exact role listed but believe you can contribute or benefit, please reach out to us.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}