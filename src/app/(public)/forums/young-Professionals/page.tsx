"use client";

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, Shield, Diamond, Target, Users, Gavel, Scale, 
  Coins, Activity, Download, ArrowLeft, CheckCircle2 
} from 'lucide-react';

export default function YoungProfessionalsPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- HERO HEADER --- */}
      <header className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-900/20 skew-x-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/forums/youngProfessionals" 
            className="inline-flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-wider mb-6 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Forum
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-cooper leading-tight">
            <span className="text-green-500">GIFON</span> Young Professionals’ Forum
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
            (GI-MYPN) Policy Document
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-4xl mx-auto px-6 py-12">

        <div className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl border border-gray-100 overflow-hidden">
            
            {/* 1. INTRODUCTION */}
            <section className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 text-green-700 rounded-lg"><BookOpen size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">1. Introduction</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                        The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is committed to fostering the next generation of geospatial intelligence professionals in Nigeria. As an extension of the <span className="font-cooper font-bold text-gray-800">GIFON</span>, GI-NYPN aims to provide a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector.
                    </p>
                    <p>
                        By empowering young talent, GI-NYPN seeks to drive Nigeria’s leadership in the geospatial intelligence landscape and to advance the professional and educational interests of young Nigerians pursuing careers in this field.
                    </p>
                    <p>
                        The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is further committed to nurturing the next generation of leaders in the geospatial intelligence industry. By providing opportunities for education, networking, mentorship, and advocacy, GI-NYPN aims to ensure that young professionals in Nigeria are well-equipped to contribute to global advancements in GeoINT and play a key role in shaping the future of this vital sector.
                    </p>
                </div>
            </section>

            {/* 2. POLICY STATEMENT */}
            <section className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Shield size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">2. Policy Statement</h3>
                </div>
                <p className="text-gray-600 mb-4">GI-NYPN is dedicated to advancing the careers of young professionals in geospatial intelligence (GeoINT) by:</p>
                <ul className="grid gap-3 mb-6">
                    {[
                        "Promoting an inclusive and dynamic environment for professional development.",
                        "Facilitating access to industry knowledge, expertise, and networks.",
                        "Advocating for policies that enhance the role of youth in shaping the future of geospatial intelligence.",
                        "Ensuring that young professionals are equipped with the technical and leadership skills needed to excel and innovate in the global GeoINT industry."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                            <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-gray-600 italic border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
                    Our foundation’s policy centers on fostering collaboration, education, and mentorship among young professionals while ensuring that they have the tools and opportunities to thrive and lead in the geospatial intelligence field.
                </p>
            </section>

            {/* 3. CORE VALUES */}
            <section className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-purple-100 text-purple-700 rounded-lg"><Diamond size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">3. Core Values</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Collaboration", desc: "Encouraging cooperation and knowledge-sharing among young professionals across various domains of geospatial intelligence." },
                        { title: "Innovation", desc: "Supporting the development and adoption of innovative geospatial technologies, methodologies, and solutions." },
                        { title: "Empowerment", desc: "Providing young professionals with the resources, mentorship, and support to excel in their careers and make meaningful contributions." },
                        { title: "Integrity", desc: "Upholding high ethical standards and promoting accountability within the community of young professionals." },
                        { title: "Inclusivity", desc: "Ensuring equitable opportunities for all young professionals in the geospatial field, regardless of their background." }
                    ].map((val, idx) => (
                        <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">{val.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. OBJECTIVES */}
            <section className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-red-100 text-red-700 rounded-lg"><Target size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">4. Objectives</h3>
                </div>
                
                <div className="space-y-8">
                    {[
                        {
                            head: "Professional Development",
                            items: ["Organize bootcamps, training programs, and certification courses.", "Provide access to advanced learning resources, webinars, and masterclasses."]
                        },
                        {
                            head: "Networking and Community Building",
                            items: ["Create a vibrant community for connection and collaboration.", "Host networking events, conferences, and informal meetups."]
                        },
                        {
                            head: "Career Advancement and Mentorship",
                            items: ["Facilitate mentorship programs connecting youth with leaders.", "Provide career counselling, job placement assistance, and internships."]
                        },
                        {
                            head: "Research and Innovation",
                            items: ["Encourage engagement in geospatial research and innovative projects.", "Support initiatives in data analytics, AI, and sustainable planning."]
                        },
                        {
                            head: "Advocacy and Representation",
                            items: ["Advocate for inclusion in key decision-making processes.", "Represent young professionals in national/international policy forums."]
                        },
                        {
                            head: "Public Awareness and Outreach",
                            items: ["Promote the value of GeoINT and youth roles via campaigns.", "Support content creation showcasing youth contributions."]
                        },
                        {
                            head: "Gender Equality and Diversity",
                            items: ["Ensure inclusivity of all genders, ethnicities, and backgrounds.", "Support programs encouraging women and marginalized groups."]
                        },
                        {
                            head: "Sustainability and Community Impact",
                            items: ["Promote projects contributing to SDGs (environment, urban dev).", "Engage in social impact projects improving Nigerian communities."]
                        }
                    ].map((obj, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-green-700 mb-3 border-b border-green-100 pb-1 inline-block">{obj.head}</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                {obj.items.map((li, k) => <li key={k}>{li}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. MEMBERSHIP CRITERIA */}
            <section className="p-8 md:p-12 border-b border-gray-100 bg-green-50/20">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-600 text-white rounded-lg"><Users size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">5. Membership Criteria</h3>
                </div>

                <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm mb-6">
                    <p className="font-bold text-gray-900 mb-2">Eligibility</p>
                    <p className="text-gray-600">
                        Membership is open to young professionals <span className="font-bold text-green-600">(21-35 years old)</span> who are actively engaged in or interested in the geospatial intelligence field. This includes students, recent graduates, and early-career professionals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">Types of Membership</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                <span><strong>Full Members:</strong> Individuals with a degree or relevant experience in geospatial intelligence or a related field.</span>
                            </li>
                            <li className="flex gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></div>
                                <span><strong>Associate Members:</strong> Students or individuals in the early stages of their careers interested in GeoINT.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wider">Membership Benefits</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            {["Access to exclusive events & workshops.", "Networking with peers & mentors.", "Invitations to industry conferences.", "Career advancement resources."].map((ben, b) => (
                                <li key={b} className="flex gap-2">
                                    <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                                    <span>{ben}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. GOVERNANCE STRUCTURE */}
            <section className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-100 text-orange-700 rounded-lg"><Gavel size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">6. Governance Structure</h3>
                </div>
                <p className="mb-4 text-gray-600">GI-NYPN will be governed by an Executive Committee that will include:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { role: "Team Leader", desc: "Provides overall direction and leadership." },
                        { role: "Deputy Team Leader", desc: "Supports the Team Leader and leads sub-committees." },
                        { role: "Secretary", desc: "Handles admin tasks, communication, and events." },
                        { role: "Committee Members", desc: "Manage specific programs (advocacy, research, etc.)." },
                    ].map((gov, g) => (
                        <div key={g} className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-bold text-gray-900">{gov.role}</h5>
                            <p className="text-sm text-gray-600">{gov.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. CODE OF CONDUCT */}
            <section className="p-8 md:p-12 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg"><Scale size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-900">7. Code of Conduct</h3>
                </div>
                <p className="mb-4 text-gray-600">All members of GI-NYPN are expected to uphold the highest standards of professionalism:</p>
                <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                            { label: "Respect", text: "Treating all members with dignity regardless of background." },
                            { label: "Collaboration", text: "Sharing knowledge, resources, and ideas actively." },
                            { label: "Integrity", text: "Being honest, transparent, and responsible." },
                            { label: "Accountability", text: "Taking ownership of personal and collective actions." }
                        ].map((code, c) => (
                            <li key={c}>
                                <span className="font-bold text-indigo-900 block">{code.label}:</span>
                                <span className="text-sm text-indigo-700/80">{code.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 8 & 9. FUNDING & MONITORING */}
            <div className="grid md:grid-cols-2 border-b border-gray-100">
                {/* Funding */}
                <section className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg"><Coins size={24}/></div>
                        <h3 className="text-xl font-bold text-gray-900">8. Funding</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5 mb-4">
                        <li><strong>Membership Fees:</strong> Small fees to sustain operations.</li>
                        <li><strong>Sponsorships:</strong> Collaborations with industry partners.</li>
                        <li><strong>Grants:</strong> Funding for specific projects.</li>
                    </ul>
                    <p className="text-xs text-gray-400 italic">All financial decisions will be made transparently with regular reports.</p>
                </section>

                {/* Monitoring */}
                <section className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-teal-100 text-teal-700 rounded-lg"><Activity size={24}/></div>
                        <h3 className="text-xl font-bold text-gray-900">9. Monitoring</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Success will be assessed through:</p>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                        <li>Annual surveys and member feedback.</li>
                        <li>Review of KPIs (growth, participation, careers).</li>
                        <li>Evaluation of initiative impact on the community.</li>
                    </ul>
                </section>
            </div>

            {/* FOOTER OF DOCUMENT */}
            <div className="bg-gray-50 p-8 text-center border-t border-gray-200">
                <p className="text-gray-500 text-sm mb-4">
                    This document serves as the guiding framework for the GI-NYPN.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/membership" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-green-700 transition">
                        Join the Forum
                    </Link>
                    <Link href="/contact-us" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition">
                        Contact Support
                    </Link>
                </div>
            </div>

        </div>
      </main>
    </div>
  );
}