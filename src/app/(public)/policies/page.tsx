"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Modal from "@/components/Modal copy"; // Import our reusable modal

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

  const policies = [
    {
      id: "ethics",
      title: "Code of Ethics",
      file: "/docs/Code of Ethics and Professional Conduct.docx",
      bg: "bg-white",
      description: `This Code establishes the ethical principles and professional standards expected of all members, staff, volunteers, interns, affiliates, and partners of GIFON. It ensures integrity, trust, and accountability in the conduct of geospatial-related activities...`,
    },
    {
      id: "anti-corruption",
      title: "Anti-Corruption",
      file: "/docs/GIFON ANTI CORRUPTION POLICY.docx",
      bg: "bg-gray-50",
      description: `The Geospatial Intelligence Foundation of Nigeria (GIFON) is committed to the highest standards of integrity, transparency, and accountability in all its operations. Corruption in any form such as bribery, embezzlement, extortion, fraud, abuse of office are strictly prohibited. This policy provides a framework for preventing, detecting, and responding to corrupt practices...`,
    },
    {
      id: "fund-raising",
      title: "Fund Raising",
      file: "/docs/GIFON FUND RAISING AND GRANTS POLICY.docx",
      bg: "bg-white",
      description: `GIFON is committed to the highest standards of ethical, transparent, and effective fundraising and grants management. This policy outlines the principles, structures, and procedures to ensure all fundraising and grant acquisition activities support the Foundation’s mission and strategic objectives...`,
    },
    {
      id: "slavery",
      title: "Anti-Modern-Day Slavery",
      file: "/docs/GIFON ANTI MODERN DAY SLAVERY.docx",
      bg: "bg-gray-50",
      description: `GIFON is firmly committed to the eradication of all forms of modern slavery and human trafficking in its operations and supply chains. Modern slavery — including forced labour, bonded labour, child labour, servitude, and trafficking — is a gross violation of human rights and has no place in any aspect of our work or partnerships...`,
    },
    {
      id: "volunteer",
      title: "Volunteer & Internship",
      file: "/docs/VOLUNTEER AND INTERNSHIP POLICY.docx",
      bg: "bg-white",
      description: `This policy establishes a formal structure for engaging volunteers and interns in meaningful roles that support the objectives of GIFON while providing opportunities for skill development, civic engagement, and professional exposure...`,
    },
  ];

  // Handlers to open/close modal
  const openModal = (policy: { title: string; file: string }) => {
    setModalData({ isOpen: true, title: policy.title, file: policy.file });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: null, file: null });
  };

  // Get the base URL for the iframe
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <HeroSection
        title="Policies"
        backgroundMedia={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full">
        {policies.map((policy) => (
          <section key={policy.id} id={policy.id} className={`py-16 px-4 ${policy.bg}`}>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">{policy.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">{policy.description}</p>
              <Button
                onClick={() => openModal(policy)}
                className="bg-green-600 text-white hover:bg-green-700 transition"
              >
                Read More
              </Button>
            </div>
          </section>
        ))}

        {/* Modal for document viewer */}
        <Modal
          isOpen={modalData.isOpen}
          onClose={closeModal}
          title={modalData.title}
        >
          {/* This content is passed as 'children' to the Modal */}
          {modalData.file && (
            <div>
              {/* Custom Header for Download Link */}
              <div className="flex justify-end px-6 py-4 border-b">
                <a
                  href={modalData.file}
                  download
                  className="text-green-600 hover:underline flex items-center gap-1"
                >
                  <FileDown className="w-5 h-5" />
                  Download
                </a>
              </div>

              {/* Embed the .docx viewer using Google Docs Viewer */}
              <iframe
                src={`https://docs.google.com/gview?url=${encodeURIComponent(
                  baseUrl + modalData.file
                )}&embedded=true`}
                className="w-full h-[70vh] border-0"
                title={modalData.title || "Policy Document"}
              />
              
              {/* Custom Footer for Close Button */}
              <div className="p-4 flex justify-end border-t">
                <Button
                  onClick={closeModal}
                  variant="outline"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </main>
    </>
  );
}