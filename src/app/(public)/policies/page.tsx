"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function PoliciesPage() {
  const [open, setOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<{ title: string; file: string } | null>(null);

  const policies = [
    {
      id: "ethics",
      title: "Code of Ethics",
      file: "/docs/Code of Ethics and Professional Conduct.docx",
      bg: "bg-white",
      description: `Our Code of Ethics establishes the guiding principles that ensure all research,
      analysis, and dissemination of geospatial intelligence (GEOINT) are conducted
      with integrity and accountability. Professionals working with GEOINT data must
      respect human rights, safeguard sensitive information, and avoid practices that
      could compromise public trust or national security. Ethical conduct also extends
      to the responsible use of emerging technologies such as AI-driven geospatial
      modeling, ensuring transparency in methods and fairness in applications.`,
    },
    {
      id: "anti-corruption",
      title: "Anti-Corruption",
      file: "/docs/GIFON ANTI CORRUPTION POLICY.docx",
      bg: "bg-gray-50",
      description: `Transparency and accountability are essential in the field of geospatial
      security, where funding, research, and operations intersect with critical
      government and private sector interests. Our Anti-Corruption policy ensures that
      decisions involving GEOINT projects and partnerships are free from bribery,
      favoritism, or unethical influence.`,
    },
    {
      id: "fund-raising",
      title: "Fund Raising",
      file: "/docs/GIFON FUND RAISING AND GRANTS POLICY.docx",
      bg: "bg-white",
      description: `Our Fund Raising policy emphasizes ethical and transparent methods of
      generating financial support for geospatial research, education, and
      operational initiatives. Contributions are sought from individuals, corporate
      sponsors, and institutional partners who share our mission.`,
    },
    {
      id: "slavery",
      title: "Anti-Modern-Day Slavery",
      file: "/docs/GIFON ANTI MODERN DAY SLAVERY.docx",
      bg: "bg-gray-50",
      description: `Modern slavery, in the form of forced labor and human trafficking, presents
      complex global challenges that intersect with security and development. Our
      Anti-Modern-Day Slavery policy commits to ensuring that no aspect of our
      operations, partnerships, or supply chains supports exploitative practices.`,
    },
    {
      id: "volunteer",
      title: "Volunteer & Internship",
      file: "/docs/VOLUNTEER AND INTERNSHIP POLICY.docx",
      bg: "bg-white",
      description: `Volunteers and interns are the backbone of innovation in geospatial research,
      bringing fresh perspectives and energy to critical projects. Our policy ensures
      that all participants engage in meaningful assignments that build skills while
      advancing GEOINT objectives.`,
    },
  ];

  return (
    <>
      <HeroSection
        title="Policies"
        backgroundImages={[
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
              <p className="text-gray-700 leading-relaxed mb-6">{policy.description}</p>
              <Button
                onClick={() => {
                  setSelectedPolicy(policy);
                  setOpen(true);
                }}
                className="bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Read More
              </Button>
            </div>
          </section>
        ))}

        {/* Modal for document viewer */}
        {open && selectedPolicy && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full overflow-hidden relative">
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h2 className="text-xl font-semibold">{selectedPolicy.title}</h2>
                <a
                  href={selectedPolicy.file}
                  download
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <FileDown className="w-5 h-5" />
                  Download
                </a>
              </div>

              {/* Embed the .docx viewer using Google Docs Viewer */}
              <iframe
                src={`https://docs.google.com/gview?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.origin + selectedPolicy.file : ""
                )}&embedded=true`}
                className="w-full h-[70vh] border-0"
                title={selectedPolicy.title}
              />

              <div className="p-4 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
