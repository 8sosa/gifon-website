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
  Calendar 
} from 'lucide-react';

// --- 1. THE DATA ---
// (We define the type for the data to keep TypeScript happy)
type Program = {
  title: string;
  category: string;
  goals: string[];
  structure: string[];
  audience: string;
  outcomes: string[];
};

const outreachData: Record<string, Program> = {
  'boot-camps': {
    title: 'Boot Camps',
    category: 'Youth-Focused Programme',
    goals: [
      'Build youth capacity in geospatial intelligence, satellite data analysis, and emerging location technologies.',
      'Equip participants with hands-on skills for data acquisition, imagery interpretation, and spatial problem-solving.',
      'Develop the next generation of GEOINT innovators for national development.'
    ],
    structure: [
      'Multi-day intensive sessions led by GEOINT analysts, mission planners, and industry specialists.',
      'Practical modules featuring satellite imagery workflows, drone-based data capture, and real-case exercises.',
      'Team-based projects and demo presentations.'
    ],
    audience: 'University students, early-career analysts, NYSC members, and motivated young innovators.',
    outcomes: [
      'Participants gain operational-level competence in GEOINT tools and methodologies.',
      'Strong youth pipeline ready to support Nigeria’s security and development missions.',
      'Early identification of exceptional talents.'
    ]
  },
  'stem-geoint-awareness': {
    title: 'STEM & GEOINT Awareness',
    category: 'Youth-Focused Programme',
    goals: [
      'Inspire early interest in STEM and geospatial intelligence as strategic national assets.',
      'Demonstrate how space-based data and location science shape security, climate, and development outcomes.'
    ],
    structure: [
      'School outreach, interactive demos, satellite imagery showcases, and problem-driven learning sessions.',
      'Simplified explanations of national challenges solved with geospatial intelligence.'
    ],
    audience: 'Primary and secondary school students, teachers, and emerging STEM communities.',
    outcomes: [
      'Early awareness of GEOINT career paths.',
      'Growth of a nationwide STEM culture rooted in innovation and curiosity.',
      'Foundation for long-term national capacity building.'
    ]
  },
  'geoinnovation-challenge': {
    title: 'GeoInnovation Challenge / Hackathons',
    category: 'Youth-Focused Programme',
    goals: [
      'Engage young innovators in creating GEOINT-driven solutions for real national challenges.',
      'Stimulate creativity, teamwork, and mission-oriented problem solving.'
    ],
    structure: [
      '24–72 hour challenge cycles with problem statements from security, environment, mobility, and infrastructure sectors.',
      'Idea development sessions, mentorship from GEOINT experts, and final pitches.'
    ],
    audience: 'Innovators, analysts, developers, student teams, and start-up founders.',
    outcomes: [
      'Prototype solutions powered by satellite data, location intelligence, and automated analytics.',
      'Identification of teams for acceleration or long-term support.',
      'Strengthening of Nigeria’s geospatial innovation ecosystem.'
    ]
  },
  'women-geospatial-leadership': {
    title: 'Women in Geospatial Leadership',
    category: 'Women-in-GEOINT Initiative',
    goals: [
      'Elevate women’s leadership and technical influence in Nigeria’s GEOINT and spatial decision-making community.',
      'Create mentorship pathways and strategic visibility for women advancing the field.'
    ],
    structure: [
      'Leadership forums, expert panels, executive mentorship sessions, and technical capacity-building workshops.'
    ],
    audience: 'Women working or aspiring to work in space technology, data analytics, defence, climate intelligence, and national security.',
    outcomes: [
      'Increased representation of women in strategic GEOINT leadership roles.',
      'Strong mentorship networks and national role models for female talent.'
    ]
  },
  'community-service-projects': {
    title: 'Community Service Projects',
    category: 'Women-in-GEOINT Initiative',
    goals: [
      'Apply geospatial intelligence for social impact through women-led initiatives.',
      'Strengthen community resilience using location-based insights.'
    ],
    structure: [
      'Community mapping, environmental assessments, disaster-risk evaluations, and socially driven spatial projects.',
      'Partnerships with schools, NGOs, and local governments.'
    ],
    audience: 'Women in the geospatial community, volunteers, female STEM groups.',
    outcomes: [
      'Tangible improvements in community development and local resilience.',
      'Visibility for women as strategic contributors to national progress.'
    ]
  },
  'geocommunity-development': {
    title: 'GeoCommunity Development',
    category: 'Professional Engagement',
    goals: [
      'Build a strong, coordinated national geospatial intelligence ecosystem.',
      'Enhance collaboration, knowledge-sharing, and best-practice adoption across sectors.'
    ],
    structure: [
      'Professional meetups, expert groups, technical circles, and mission-focused collaborative sessions.'
    ],
    audience: 'GEOINT analysts, remote sensing specialists, developers, academia, defence planners, and public-sector agencies.',
    outcomes: [
      'Stronger professional networks aligned with national security and development priorities.',
      'A unified community advancing Nigeria’s geospatial capability.'
    ]
  },
  'geoconnect-networking': {
    title: 'GeoConnect Networking Events',
    category: 'Professional Engagement',
    goals: [
      'Establish GIFON as Nigeria’s premier convener for strategic GEOINT engagement.',
      'Foster partnerships across defence, government, private sector, and global partners.'
    ],
    structure: [
      'High-level evening mixers, fireside conversations, and sector-focused roundtable dialogues.'
    ],
    audience: 'Executives, policymakers, mission planners, technologists, diplomats, and industry leaders.',
    outcomes: [
      'New partnerships, MOUs, and strategic collaborations.',
      'Elevated national profile for GIFON as a GEOINT convening hub.'
    ]
  },
  'public-lectures-roundtables': {
    title: 'Public Lectures & Policy Roundtables',
    category: 'Professional Engagement',
    goals: [
      'Shape national conversations around geospatial intelligence, security, and development.',
      'Provide evidence-based insights that guide policy and institutional decision-making.'
    ],
    structure: [
      'Expert public lectures, closed-door policy briefings, national dialogues, and publication of outcomes.'
    ],
    audience: 'Government leaders, security agencies, academics, think tanks, and international partners.',
    outcomes: [
      'Actionable policy recommendations rooted in geospatial evidence.',
      'Strengthened national security and development planning.',
      'Sustained thought-leadership positioning for GIFON'
    ]
  }
};

// --- 2. THE PAGE COMPONENT ---
// Key Fixes: 
// 1. Removed 'use client'
// 2. Added 'async' to function
// 3. Changed params type to Promise
// 4. Awaited params inside the function

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object before destructuring
  const { slug } = await params;
  
  const program = outreachData[slug];

  if (!program) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Abstract Background (No Image dependency to avoid errors) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-green-900 via-gray-900 to-black opacity-80 z-0"></div>
        <div className="absolute inset-0 bg-linear-to-r opacity-10 z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 border border-green-500 text-green-300 text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            {program.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {program.title}
          </h1>
          <Link 
            href="/events#outreach" 
            className="inline-flex items-center text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Programs
          </Link>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Main Content (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Goals Section */}
          <section className="bg-white rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg text-green-700">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Program Goals</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <ul className="space-y-4">
                {program.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <p className="text-lg text-gray-700 leading-relaxed">{goal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Structure Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                <Layers size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Program Structure</h2>
            </div>
            <div className="prose prose-lg text-gray-600 max-w-none border-l-4 border-blue-100 pl-6">
              {program.structure.map((item, idx) => (
                 <p key={idx} className="mb-4 last:mb-0">
                   {item}
                 </p>
              ))}
            </div>
          </section>

          {/* Outcomes Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg text-purple-700">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Expected Outcomes</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {program.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-green-500 mr-4 h-6 w-6 shrink-0" />
                  <span className="text-gray-700 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Sticky Sidebar (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            
            {/* Audience Card */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rotate-12">
                <Users size={180} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
                  <Users size={20} />
                  Target Audience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {program.audience}
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-linear-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 text-center shadow-lg">
              <h3 className="text-xl font-bold text-green-900 mb-2">Interested in this program?</h3>
              <p className="text-green-700 mb-6 text-sm">
                Join us in driving geospatial innovation in Nigeria.
              </p>
              <Link 
                href="/get-involved"
                className="block w-full bg-green-600 text-white font-bold py-3.5 px-6 rounded-lg hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Get Involved Now
              </Link>
            </div>

            {/* Quick Info */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center text-gray-700 text-sm font-medium">
                 <MapPin className="mr-3 text-green-600" size={18} />
                 <span>Nigeria (Nationwide)</span>
              </div>
              <div className="flex items-center text-gray-700 text-sm font-medium">
                 <Calendar className="mr-3 text-green-600" size={18} />
                 <span>Annual / Periodic Cycles</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}