"use client";

import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import Modal from '@/components/Modal'; // Assumes Modal is in src/components/
import { FaArrowRight, FaPlus } from 'react-icons/fa'; // Added FaPlus

// --- Mock User Data ---
// In a real app, you would get this from a user session or context
const mockUser = {
  name: "Dr. Fatima Bello",
  // This array of IDs determines which forums to show
  forumsJoined: [
    'youngProfessionals', 
    'womenInGeoint',
    'policy'
  ], 
};
// --- End Mock User Data ---

// --- 1. Refactored Forum Data ---
// All forum data is now in a structured array
const allForums = [
  {
    id: 'youngProfessionals',
    anchor: 'young-professionals',
    title: "Young Professionals Forum",
    description: "The GI-NYPN is committed to fostering the next generation...",
    
    // --- UPDATED: This is now an HTML string ---
    // Use <br> for line breaks, <h2> for titles, <strong> for bold.
    policyContent: `
      <h2>GEOSPATIAL INTELLIGENCE FOUNDATION OF NIGERIA (GIFON)</h2>
      <h2>GIFON YOUNG PROFESSIONALS’ FORUM</h2>
      <strong>(GI-MYPN) POLICY DOCUMENT version 1.0</strong>
      
      <br><br>
      
      <h3>1. Introduction</h3>
      <p>The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is committed to fostering the next generation of geospatial intelligence professionals in Nigeria. As an extension of the Geospatial Intelligence Foundation of Nigeria , GI-NYPN aims to provide a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector...</p>
      
      <br>

      <h3>2. Policy Statement</h3>
      <p>GI-NYPN is dedicated to advancing the careers of young professionals in geospatial intelligence (GeoINT) by:</p>
      <ul>
        <li>Promoting an inclusive and dynamic environment for professional development.</li>
        <li>Facilitating access to industry knowledge, expertise, and networks.</li>
        <li>Advocating for policies that enhance the role of youth...</li>
      </ul>
      
      <br>
      
      <h3>3. Core Values</h3>
      <p><strong>Collaboration:</strong> Encouraging cooperation and knowledge-sharing...</p>
      <p><strong>Innovation:</strong> Supporting the development and adoption of innovative...</p>
      <p><strong>Empowerment:</strong> Providing young professionals with the resources...</p>
      
      <br>

      <h3>4. Objectives of the Young Professionals Forum</h3>
      <p>GI-NYPN’s objectives are to:</p>
      <p><strong>Professional Development</strong></p>
      <p>Organize bootcamps, training programs, and certification courses...</p>
      <p><strong>Networking and Community Building</strong></p>
      <p>Create a vibrant and collaborative community where young professionals can connect...</p>
      
      <br>
      
      <h3>5. Membership Criteria</h3>
      <p><strong>Eligibility:</strong> Membership is open to young professionals (21-35 years old)...</p>
      <p><strong>Types of Membership:</strong></p>
      <ul>
        <li>Full Members: Individuals with a degree...</li>
        <li>Associate Members: Students or individuals...</li>
      </ul>
      
      {/* ... and so on for the rest of the document ... */}
    `
  },
  {
    id: 'womenInGeoint',
    anchor: 'women-in-geoint',
    title: "Women in GEOINT Forum",
    description: "The GI-NGW is a forum dedicated to empowering women in GeoINT...",
    // --- YOU WOULD UPDATE THIS ONE TOO ---
    policyContent: `
      <h2>GEOSPATIAL INTELLIGENCE FOUNDATION OF NIGERIA (GIFON)</h2>
      <h2>GIFON WOMEN IN GEOINT FORUM</h2>
      <strong>(GI-NGW): POLICY DOCUMENT version1.0</strong>
      <br><br>
      <h3>1. Introduction</h3>
      <p>The Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW) is a forum dedicated to empowering women...</p>
      {/* ... etc ... */}
    `
  },
  {
    id: 'industry',
    anchor: 'industry-private-sector',
    title: "Industry & Private Sector Forum",
    description: "This forum recognizes the critical role of the industry and private sector in driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities...",
    policyContent: `GIFON INDUSTRY AND PRIVATE SECTOR FORUM
      POLICY STATEMENT
      ... (full policy text from your example) ...
      `
  },
  {
    id: 'policy',
    anchor: 'policy-governance-ethics',
    title: "Policy, Governance & Ethics Group",
    description: "The PGE-WG is the institutional mechanism established to uphold accountability, integrity, and transparency. It provides thought leadership, oversight, and policy direction on how geospatial intelligence should be governed...",
    policyContent: `POLICY, GOVERNANCE & ETHICS WORKING GROUP
    ... (full policy text from your example) ...
    `
  },
  {
    id: 'academia',
    anchor: 'academia-research',
    title: "Academia & Research Collaboration",
    description: "The ARCP fosters strong partnerships between universities, research institutions, and GIFON to advance GEOINT education, research, and innovation, positioning Nigeria’s higher institutions as key knowledge partners...",
    policyContent: `GIFON Academia & Research Collaboration Programme (ARCP)
    ... (full policy text from your example) ...
    `
  }
];

interface ModalState {
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

export default function DirectoryForumsPage() {
  const [modalData, setModalData] = useState<ModalState>({
    isOpen: false,
    content: null,
    title: null,
  });

  // Handlers to open/close modal
  const openModal = (content: string, title: string) => {
    setModalData({ isOpen: true, content, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, content: null, title: null });
  };

  // --- 2. Filter Forums Based on User ---
  const myForums = allForums.filter(forum => 
    mockUser.forumsJoined.includes(forum.id)
  );
  
  const availableForums = allForums.filter(forum => 
    !mockUser.forumsJoined.includes(forum.id)
  );

  return (
    <>
      <HeroSection
        title="Member Forums & Groups"
        description="Connect, collaborate, and grow with your specialized member-led forums."
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full">
        
        {/* --- 3. Render "Your Forums" Section --- */}
        <section id="my-forums" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Your Forums</h2>
            
            {myForums.length > 0 ? (
              <div className="space-y-8">
                {myForums.map((forum) => (
                  <div key={forum.id} id={forum.anchor} className="p-6 bg-white rounded-lg shadow-lg border border-green-200">
                    <h3 className="text-2xl font-semibold mb-3 text-green-700">{forum.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-justify mb-6">
                      {forum.description}
                    </p>
                    <button
                      onClick={() => openModal(forum.policyContent, `${forum.title} Policy`)}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
                    >
                      Read Full Policy <FaArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              // --- Fallback if user has no forums ---
              <div className="text-center text-gray-600 p-8 bg-gray-50 rounded-lg">
                <p className="text-lg">You haven&apos;t joined any forums yet.</p>
                <p className="mt-2">Explore the available forums below to get started!</p>
              </div>
            )}
          </div>
        </section>

        {/* --- 4. Render "Explore Other Forums" Section --- */}
        <section id="explore-forums" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Explore Other Forums</h2>
            
            {availableForums.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {availableForums.map((forum) => (
                  <div key={forum.id} id={forum.anchor} className="p-6 bg-white rounded-lg shadow-lg flex flex-col">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{forum.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-justify mb-6 flex-grow">
                      {forum.description}
                    </p>
                    {/* In a real app, this button would trigger a "join" API call */}
                    <button
                      onClick={() => alert(`In a real app, this would let you join the ${forum.title}`)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors"
                    >
                      Request to Join <FaPlus size={12} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              // --- Fallback if user has joined all forums ---
              <div className="text-center text-gray-600 p-8">
                <p className="text-lg">You are a member of all available forums!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal remains the same */}
      <Modal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        title={modalData.title}
        content={modalData.content}
      />
    </>
  );
}