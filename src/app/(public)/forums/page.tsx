"use client";

import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import Modal from '@/components/Modal';
import allForums from './forums'; // Ensure this path matches where you saved the data file
import { 
  Users, 
  Briefcase, 
  Scale, 
  GraduationCap, 
  HeartHandshake, 
  ArrowRight, 
  Globe, 
  Lightbulb, 
  Target 
} from 'lucide-react';

// --- Icon Mapping Helper ---
// We map the IDs from your data file to specific icons
const getForumIcon = (id: string) => {
  switch (id) {
    case 'youngProfessionals': return <Users size={40} />;
    case 'womenInGeoint': return <HeartHandshake size={40} />;
    case 'industry': return <Briefcase size={40} />;
    case 'policy': return <Scale size={40} />;
    case 'academia': return <GraduationCap size={40} />;
    default: return <Globe size={40} />;
  }
};

const getForumColor = (id: string) => {
  switch (id) {
    case 'youngProfessionals': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
    case 'womenInGeoint': return 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white';
    case 'industry': return 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
    case 'policy': return 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white';
    case 'academia': return 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white';
    default: return 'bg-gray-50 text-gray-600';
  }
};

interface ModalState {
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

export default function ForumsPage() {
  const [modalData, setModalData] = useState<ModalState>({
    isOpen: false,
    content: null,
    title: null,
  });

  const openModal = (content: string, title: string) => {
    setModalData({ isOpen: true, content, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, content: null, title: null });
  };

  return (
    <>
      <HeroSection
        title="Groups & Forums"
        description="Connecting Minds. Advancing GeoINT. Strengthening National Capacity."
        backgroundMedia={["/media/Background Groups and forums.jpg"]}
      />

      <main className="font-sans bg-gray-50 min-h-screen">
        
        {/* --- 1. Introduction & Pillars Section --- */}
        <section className="py-20 px-4 md:px-6 bg-white rounded-b-[3rem] shadow-sm mb-12">
          <div className='max-w-6xl mx-auto'>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Our Ecosystem</h2>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Collaboration Drives <span className="cooper text-green-700">Innovation</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The <span className="cooper">GIFON</span> Groups & Forums serve as structured communities of practice where professionals, institutions, researchers, and enthusiasts can learn, engage, and innovate together. We believe that collective intelligence drives national progress.
              </p>
            </div>

            {/* Visual Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Users, title: "Peer Learning", text: "Foster peer-to-peer learning, mentorship, and professional support." },
                 { icon: Globe, title: "Collaboration", text: "Encourage multi-stakeholder collaboration across government & private sectors." },
                 { icon: Lightbulb, title: "Applied Research", text: "Enable solution development that advances Nigeria’s geospatial capabilities." },
                 { icon: Target, title: "Talent Pipeline", text: "Strengthen the national pipeline of GeoINT skills, talent, and innovation." }
               ].map((item, idx) => (
                 <div key={idx} className="bg-gray-50 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                    <item.icon className="text-green-600 mb-4 w-10 h-10" />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- 2. The Forums Grid --- */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900">Explore Our Forums</h2>
             <p className="text-gray-500 mt-2">Click on a card to view the full policy framework</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {allForums.map((forum) => (
               <div 
                 key={forum.id} 
                 id={forum.anchor}
                 className="group bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300"
               >
                 {/* Card Header */}
                 <div className="p-8 pb-4">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getForumColor(forum.id)}`}>
                      {getForumIcon(forum.id)}
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                     {forum.title}
                   </h3>
                   <div className="w-12 h-1 bg-gray-200 group-hover:bg-green-500 transition-colors rounded-full mb-4"></div>
                 </div>

                 {/* Card Body */}
                 <div className="px-8 pb-8 grow">
                   <p className="text-gray-600 leading-relaxed line-clamp-4">
                     {forum.description}
                   </p>
                 </div>

                 {/* Card Footer / Action */}
                 <div className="p-8 pt-0 mt-auto">
                   <button
                     onClick={() => openModal(forum.policyContent, `${forum.title} Policy`)}
                     className="w-full py-4 px-6 rounded-xl bg-gray-50 hover:bg-green-600 text-gray-700 hover:text-white font-semibold transition-all duration-300 flex items-center justify-between group-hover:shadow-lg"
                   >
                     <span>Read Policy Document</span>
                     <ArrowRight size={18} />
                   </button>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* --- 3. Join CTA --- */}
        <section className="py-20 bg-gray-900 text-white mt-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to shape the future?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you are a seasoned professional, an emerging practitioner, or a student, <span className="cooper text-white">GIFON</span> offers you a home to learn, contribute, and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/membership" className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-full font-bold text-lg transition-colors shadow-lg shadow-green-900/50">
                Become a Member
              </a>
              <a href="/contact-us" className="px-8 py-4 bg-transparent border border-gray-600 hover:bg-white/10 rounded-full font-bold text-lg transition-colors">
                Contact Secretariat
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Reusable Modal */}
      <Modal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        title={modalData.title}
        content={modalData.content}
      />
    </>
  );
}