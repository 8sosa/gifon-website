"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
// Importing relevant icons for visuals
import { 
  ShieldCheck, 
  Gavel, 
  Coins, 
  Link as LinkIcon, 
  UsersRound,
  FileText
} from "lucide-react";
import Modal from "@/components/Modal copy"; 

// Define the type for the modal's state
interface ModalState {
  isOpen: boolean;
  title: string | null;
  file: string | null;
}

export default function PoliciesPage() {
  const [modalData, setModalData] = useState<ModalState>({
    isOpen: false,
    title: null,
    file: null,
  });

  // Updated policy data: using PDFs and added icons
  const policies = [
    {
      id: "ethics",
      title: "Code of Ethics",
      icon: ShieldCheck,
      file: "/docs/Code of Ethics and Professional Conduct-20251220162154.pdf", // Changed to .pdf
      description: `This Code establishes the ethical principles and professional standards expected of all members, staff, and partners to ensure integrity, trust, and accountability.`,
    },
    {
      id: "anti-corruption",
      title: "Anti-Corruption",
      icon: Gavel,
      file: "/docs/GIFON ANTI CORRUPTION POLICY-20251220162336.pdf", // Changed to .pdf
      description: 
        <>
          <span className="cooper">GIFON</span> is committed to zero tolerance for bribery, embezzlement, extortion, or fraud. This policy provides the framework for preventing and detecting corrupt practices.
        </>
    },
    {
      id: "fund-raising",
      title: "Fund Raising & Grants",
      icon: Coins,
      file: "/docs/GIFON FUND RAISING AND GRANTS POLICY-20251220162338.pdf", // Changed to .pdf
      description: `Outlining the principles, structures, and procedures to ensure all fundraising and grant acquisition activities are ethical, transparent, and support our strategic objectives.`,
    },
    {
      id: "slavery",
      title: "Anti-Modern-Day Slavery",
      icon: LinkIcon,
      file: "/docs/GIFON ANTI MODERN DAY SLAVERY-20251220162337.pdf", // Changed to .pdf
      description: `Our firm commitment to the eradication of all forms of modern slavery, forced labour, and human trafficking in our operations and supply chains.`,
    },
    {
      id: "volunteer",
      title: "Volunteer & Internship",
      icon: UsersRound,
      file: "/docs/VOLUNTEER AND INTERNSHIP POLICY-20251220162335.pdf", // Changed to .pdf
      description: `Establishing a formal structure for engaging volunteers and interns in meaningful roles that provide skill development and professional exposure.`,
    },
  ];

  const openModal = (policy: { title: string; file: string }) => {
    setModalData({ isOpen: true, title: policy.title, file: policy.file });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: null, file: null });
  };

  return (
    <>
      <HeroSection
        title="Our Policies"
        backgroundMedia={[
          "/media/POLICIES BACKGROUND.jpg"
        ]}
      />

      <main className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Grid layout for Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy) => {
              const IconComponent = policy.icon || FileText; // Fallback icon just in case
              return (
                <>
                  <div className='flex flex-col' key={policy.id}>
                    {/* Spacer div to create space before each section for anchor links */}
                    <div id={policy.id} className="pt-35 -mt-20"></div>
                    <div 
                      key={policy.id} 
                      id={policy.id} 
                      className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
                    >
                      <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-lg w-fit group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {policy.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-8 grow">
                        {policy.description}
                      </p>
                      
                      <Button
                        onClick={() => openModal(policy)}
                        className="w-full bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 font-semibold transition-colors mt-auto"
                        variant="outline"
                      >
                        Read Full Policy
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Modal for PDF viewer */}
        <Modal
          isOpen={modalData.isOpen}
          onClose={closeModal}
          title={modalData.title}
        >
          {modalData.file && (
            <div className="bg-gray-100">
              {/* Removed the Download Header section here.
              */}

              {/* Embed PDF using native browser iframe */}
              {/* This assumes the files in /public/docs are actually .pdf files */}
              <iframe
                src={modalData.file} 
                className="w-full h-[75vh] border-0"
                title={modalData.title || "Policy Document"}
              />
              
              {/* Custom Footer for Close Button */}
              <div className="p-4 flex justify-end border-t bg-white">
                <Button
                  onClick={closeModal}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Close Viewer
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </main>
    </>
  );
}