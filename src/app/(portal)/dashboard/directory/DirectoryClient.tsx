// app/(portal)/dashboard/directory/DirectoryClient.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link'; 
import HeroSection from '@/components/HeroSection';
import Modal from '@/components/Modal';
import { 
  Users, 
  ArrowRight, 
  PlusCircle, 
  Lock, 
  BookOpen, 
  Briefcase, 
  Gavel, 
  GraduationCap,
  CheckCircle2,
  ArrowLeft 
} from 'lucide-react';

const mockUser = {
  name: "Dr. Fatima Bello",
  forumsJoined: ['youngProfessionals', 'womenInGeoint', 'policy'], 
};

const allForums = [
  {
    id: 'youngProfessionals',
    title: "Young Professionals Forum",
    icon: <Users size={24} />,
    color: "bg-blue-100 text-blue-600",
    description: "Fostering the next generation of geospatial intelligence professionals through mentorship and innovation.",
    policyContent: `<h2>Young Professionals Policy</h2>...`
  },
  {
    id: 'womenInGeoint',
    title: "Women in GEOINT Forum",
    icon: <Users size={24} />,
    color: "bg-pink-100 text-pink-600",
    description: "Dedicated to empowering women in GeoINT through leadership development and networking.",
    policyContent: `<h2>Women in GEOINT Policy</h2>...`
  },
  {
    id: 'industry',
    title: "Industry & Private Sector",
    icon: <Briefcase size={24} />,
    color: "bg-orange-100 text-orange-600",
    description: "Driving innovation, investment, and sustainable applications of geospatial intelligence in the private sector.",
    policyContent: `<h2>Industry Policy</h2>...`
  },
  {
    id: 'policy',
    title: "Policy, Governance & Ethics",
    icon: <Gavel size={24} />,
    color: "bg-purple-100 text-purple-600",
    description: "Providing thought leadership, oversight, and policy direction on geospatial intelligence governance.",
    policyContent: `<h2>Governance Policy</h2>...`
  },
  {
    id: 'academia',
    title: "Academia & Research",
    icon: <GraduationCap size={24} />,
    color: "bg-green-100 text-green-600",
    description: "Fostering partnerships between universities and GIFON to advance GEOINT education.",
    policyContent: `<h2>Research Policy</h2>...`
  }
];

interface ModalState {
  type: 'policy' | 'join' | null;
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

export default function DirectoryClient() {
  const [modalData, setModalData] = useState<ModalState>({ 
    type: null, 
    isOpen: false, 
    content: null, 
    title: null 
  });

  const openPolicyModal = (content: string, title: string) => {
    setModalData({ type: 'policy', isOpen: true, content, title });
  };

  const openJoinModal = (title: string) => {
    setModalData({ type: 'join', isOpen: true, content: null, title });
  };

  const closeModal = () => {
    setModalData({ type: null, isOpen: false, content: null, title: null });
  };

  const myForums = allForums.filter(f => mockUser.forumsJoined.includes(f.id));
  const availableForums = allForums.filter(f => !mockUser.forumsJoined.includes(f.id));

  return (
    <>
      <HeroSection
        title="Member Forums & Groups"
        description="Connect, collaborate, and grow within specialized member-led communities."
        backgroundMedia={["/bg/e.jpeg"]}
      />

      <main className="font-sans bg-gray-50 min-h-screen pb-20">
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-green-700 transition-colors"
            >
                <div className="p-2 bg-white rounded-full shadow-sm border border-gray-200 group-hover:border-green-200">
                    <ArrowLeft size={16} /> 
                </div>
                Back to Dashboard
            </Link>
        </div>

        {/* --- Section 1: My Active Forums --- */}
        <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-100 rounded-lg text-green-700">
                <Users size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Your Active Forums</h2>
          </div>

          {myForums.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myForums.map((forum) => (
                <div key={forum.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${forum.color}`}>
                        {forum.icon}
                    </div>
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded uppercase tracking-wider border border-green-100">
                        Member
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {forum.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                    {forum.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <button
                      onClick={() => openPolicyModal(forum.policyContent, `${forum.title} Policy`)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-50 text-green-700 text-sm font-semibold hover:bg-green-100 transition-colors"
                    >
                      <BookOpen size={16} /> View Forum Policy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-dashed border-gray-300 text-center">
                <p className="text-gray-500">You haven&apos;t joined any forums yet.</p>
            </div>
          )}
        </section>

        {/* --- Section 2: Explore & Join --- */}
        <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto border-t border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                <PlusCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Explore Other Groups</h2>
          </div>

          {availableForums.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableForums.map((forum) => (
                <div key={forum.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 flex flex-col h-full opacity-90 hover:opacity-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gray-100 text-gray-500`}>
                        {forum.icon}
                    </div>
                    <Lock size={16} className="text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {forum.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                    {forum.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <button
                      onClick={() => openJoinModal(forum.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Request to Join <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center">
                <p className="text-green-800 font-medium">You are a member of all available forums!</p>
            </div>
          )}
        </section>

      </main>

      {/* --- MODAL LOGIC --- */}
      {modalData.type === 'policy' && (
        <Modal 
            isOpen={modalData.isOpen} 
            onClose={closeModal} 
            title={modalData.title}
            content={modalData.content}
        />
      )}

      {modalData.type === 'join' && modalData.isOpen && (
        <div className="fixed inset-0 z-101 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-500 to-green-500"></div>
                
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600 w-10 h-10 animate-bounce" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Your request to join the <span className="font-bold text-gray-800">{modalData.title}</span> has been received. Our admin team will review your profile shortly.
                </p>
                
                <button
                    onClick={closeModal}
                    className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                >
                    Close
                </button>
            </div>
        </div>
      )}

    </>
  );
}