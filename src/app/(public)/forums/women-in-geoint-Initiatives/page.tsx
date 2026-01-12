"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Megaphone, BookOpen, Users, Award, 
  Lightbulb, Globe, Scale, Activity, HeartHandshake 
} from 'lucide-react';

export default function WomenInGeointInitiatives() {
  
  // Data structure for the 8 Programme Outline points
  const initiatives = [
    {
      title: "1. Outreach & Awareness",
      icon: Megaphone,
      items: [
        "National and community based awareness campaigns on women’s participation in GEOINT and STEM",
        "School, university, and professional outreach engagements",
        "Showcasing female role models and success stories in geospatial intelligence",
        "Digital advocacy and public engagement on gender inclusion in technology"
      ]
    },
    {
      title: "2. Skills Development & Capacity Building",
      icon: BookOpen,
      items: [
        "Technical training in GIS, remote sensing, spatial data analysis, location intelligence, and emerging geospatial tools",
        "Introductory and advanced learning tracks for students and professionals",
        "Hands-on bootcamps, workshops, and virtual labs",
        "Access to learning resources, tools, and practical datasets"
      ]
    },
    {
      title: "3. Mentorship & Career Guidance",
      icon: HeartHandshake,
      items: [
        "One-on-one and group mentorship with experienced women and allies in GEOINT",
        "Career coaching, academic guidance, and professional development sessions",
        "Support for career transitions into geospatial and intelligence-related roles",
        "Confidence building and leadership readiness support"
      ]
    },
    {
      title: "4. Leadership & Professional Advancement",
      icon: Award,
      items: [
        "Leadership development programmes for mid-career women",
        "Training in policy engagement, strategic thinking, ethics, and decision-making",
        "Opportunities to participate in panels, advisory groups, and professional forums",
        "Preparation for leadership roles in government, industry, academia, and international organisations"
      ]
    },
    {
      title: "5. Innovation, Research & Entrepreneurship",
      icon: Lightbulb,
      items: [
        "Participation in the GIFON Geo-Innovation Challenge",
        "Support for women led research and applied geospatial projects",
        "Innovation labs and collaborative problem solving sessions",
        "Linkages to incubation, partnerships, and funding opportunities"
      ]
    },
    {
      title: "6. Networking & Community Building",
      icon: Globe,
      items: [
        "National and international networking platforms for women in GEOINT",
        "Professional forums, roundtables, and peer learning groups",
        "Collaboration with industry, academia, development partners, and policymakers",
        "Alumni and professional community development"
      ]
    },
    {
      title: "7. Inclusion, Advocacy & Policy Engagement",
      icon: Scale,
      items: [
        "Advocacy for gender responsive policies in geospatial and technology sectors",
        "Engagement with government MDAs and institutions on inclusion frameworks",
        "Monitoring and reporting on gender participation and impact",
        "Alignment with national development goals and global gender equity commitments"
      ]
    },
    {
      title: "8. Monitoring, Impact & Sustainability",
      icon: Activity,
      items: [
        "Tracking participation, skills development, and career progression",
        "Measuring programme outcomes and long term impact",
        "Continuous improvement based on feedback and evaluation",
        "Building sustainable pipelines for women’s participation in GEOINT"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50/30 font-sans text-gray-800">
      
      {/* --- HERO HEADER --- */}
      <header className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-900/20 skew-x-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/forums/womenInGeoint" 
            className="inline-flex items-center gap-2 text-pink-400 text-sm font-bold uppercase tracking-wider mb-6 hover:text-pink-300 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Forum
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-cooper leading-tight">
            <span className="cooper text-green-800">GIFON</span> Women in GEOINT Initiatives
          </h1>
            <p className="text-gray-200 leading-relaxed text-lg text-justify">
              <span className="cooper font-bold">GIFON’s</span> Women in GEOINT Initiatives are designed to advance the participation, leadership, and visibility of women across the geospatial intelligence and technology ecosystem. The initiative provides targeted support through mentorship, skills development, career advancement, networking, and leadership opportunities, creating inclusive pathways for women to thrive in technical, analytical, and decision making roles. By addressing gender gaps, amplifying talent, and fostering supportive professional networks, <span className="cooper font-bold">GIFON</span> is committed to building a diverse, innovative, and future ready geospatial intelligence community that reflects the strength and potential of women.
            </p>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* PROGRAMME OUTLINE GRID */}
        <div className="mb-12">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-2 font-cooper">Programme Outline</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-pink-300 transition-all duration-300 overflow-hidden flex flex-col h-full group">
                        
                        {/* Card Header */}
                        <div className="bg-pink-50/50 p-6 border-b border-gray-100 flex items-center gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-pink-600 group-hover:text-pink-700 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                {item.title}
                            </h3>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 grow">
                            <ul className="space-y-3">
                                {item.items.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                        <div className="min-w-1.5 h-1.5 rounded-full bg-pink-400 mt-2"></div>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* FOOTER CTA */}
        <div className="bg-pink-900 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Join the Initiative</h3>
                <p className="text-pink-100 max-w-2xl mx-auto mb-8">
                    Be part of a diverse, innovative, and future-ready geospatial intelligence community.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/membership" className="bg-white text-pink-900 px-8 py-3 rounded-lg font-bold hover:bg-pink-50 transition shadow-lg">
                        Join The Forum
                    </Link>
                    <Link href="/contact-us" className="border border-pink-400 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-800 transition">
                        Contact Us
                    </Link>
                </div>
             </div>
             {/* Decorative circle */}
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

      </main>
    </div>
  );
}