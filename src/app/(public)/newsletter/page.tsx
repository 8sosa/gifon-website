"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import Image from "next/image";
import { 
  Newspaper, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Megaphone, 
  Globe, 
  PenTool, 
  Download, 
  BookOpen 
} from 'lucide-react';
import SubscribeModal from '@/components/SubscribeModal';

export default function PublicationsPage() {

    const [showModal, setShowModal] = useState(false);
  
  // 1. Structure Data
  // Updated "title" to be ReactNode (JSX) where needed
  const sections = [
    {
      title: "Feature Article",
      desc: "Deep-dives into current themes with high-res maps & infographics.",
      icon: <Newspaper size={32} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Policy & Security",
      desc: "Thought-leadership on national security & critical infrastructure.",
      icon: <ShieldCheck size={32} />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Tech Spotlight",
      desc: "Focus on new tools, AI trends, and global innovations in GEOINT.",
      icon: <Lightbulb size={32} />,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Youth Corner",
      desc: "Essays and features from young professionals highlighting talent.",
      icon: <Users size={32} />,
      color: "bg-green-50 text-green-600"
    },
    {
      // Changed title to JSX here
      title: <><span className="cooper font-bold">GIFON</span> Updates</>,
      desc: "News on membership growth, upcoming events, and grants.",
      icon: <Megaphone size={32} />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Global GeoBriefs",
      desc: "Short news stories on African GEOINT and closing notes.",
      icon: <Globe size={32} />,
      color: "bg-cyan-50 text-cyan-600"
    },
  ];

  return (
    <>
      <HeroSection
        title={
        <>
          <p>- Eyes on Location -</p>
          <p>The GeoINSIGHT Bulletin</p>
        </>
        }
        // title="Eyes on Location – The GeoINSIGHT Bulletin"
        description={
          <>
            Stay Informed through <span className="cooper font-bold">GIFON</span>'s flagship publication, delivering a balanced blend of policy analysis, technological insights and engaging updates from our growing Geospatial Intelligence Community.
          </>
      }
        ctaText="Read Latest Issue"
        ctaLink="#latest-issue"
        backgroundMedia={[
          "/media/eye.jpeg",
        ]}
      />

      <main className="font-sans bg-gray-50">
        
        {/* --- About Section --- */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-cooper">About The GeoINSIGHT Bulletin</h2>
            <div className="text-gray-600 leading-relaxed text-lg space-y-4 max-w-3xl mx-auto">
              <p>
                &quot;The GeoINSIGHT Bulletin&quot; is <span className="cooper font-bold text-gray-800">GIFON</span>&apos;s premier newsletter, providing members and partners with critical analysis, updates, and spotlights on the world of geospatial intelligence.
              </p>
              <p>
                Our design balances <strong className="text-green-700">deep insights</strong> (feature articles, policy) with <strong className="text-green-700">community engagement</strong>, ensuring a consistent, professional, and valuable read in every edition.
              </p>
            </div>
          </div>
        </section>

        {/* --- Structure Section (Magazine Grid) --- */}
        <section id="structure" className="py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Inside Each Edition</h2>
                <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((item, idx) => (
                <div 
                    key={idx} 
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1"
                >
                    <div className={`mb-6 p-4 rounded-full ${item.color} group-hover:scale-110 transition-transform duration-300`}>
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

        {/* --- Past Issues (Bookshelf Style) --- */}
        <section id="latest-issue" className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-cooper">Publication Archive</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {[
                        { vol: "Vol. 1, No. 1", date: "August 2025" },
                        { vol: "Vol. 1, No. 2", date: "November 2025" },
                        // Add placeholders to fill grid if needed
                    ].map((issue, i) => (
                        <div key={i} className="group flex flex-col items-center">
                            <Link href="#" className="relative w-full aspect-3/4 mb-6 rounded-r-2xl rounded-l-md shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1 bg-gray-800 border-l-4 border-gray-700 overflow-hidden">
                                {/* Placeholder Cover */}
                                <div className="absolute inset-0 bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                    <BookOpen className="text-gray-600 opacity-20" size={64} />
                                </div>
                                <Image 
                                    src="/ph.svg" 
                                    alt={`Cover of ${issue.vol}`} 
                                    fill 
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                                />
                                {/* Gloss Effect */}
                                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none"></div>
                            </Link>
                            <h3 className="font-bold text-lg mb-1">{issue.vol}</h3>
                            <p className="text-sm text-gray-400 mb-3">{issue.date}</p>
                            <Link 
                                href="#" 
                                className="text-xs font-bold text-green-400 uppercase tracking-wider hover:text-white flex items-center gap-2 transition-colors"
                            >
                                <Download size={14} /> Download PDF
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* --- Contribute CTA --- */}
        <section id="contribute" className="py-20 px-4 bg-green-50 border-t-4 border-green-600">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6 text-green-600">
                    <PenTool size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Have a Story to Tell?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    We welcome submissions from professionals, researchers, and students. Share your insights, research, or case studies with the GEOINT community.
                </p>
                <Link
                    href="/dashboard/submit"
                    className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1"
                >
                    Submit Your Article
                </Link>
            </div>
        </section>
        
        {/* --- Bottom Contact --- */}
        <section className="py-16 px-4 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Stay Connected</h2>
                <p className="text-gray-500 mb-8">
                    Contact our editorial team or sign up to receive the next edition directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="mailto:editor@gifon.org.ng"
                        className="px-8 py-3 rounded-lg font-semibold text-green-700 border border-green-200 hover:bg-green-50 transition"
                    >
                        Contact Editor
                    </Link>
                     <button
                        onClick={() => setShowModal(true)}
                        className="px-8 py-3 rounded-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 transition shadow-md"
                    >
                        Subscribe Now
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