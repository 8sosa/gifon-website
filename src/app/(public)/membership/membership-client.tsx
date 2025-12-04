"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
// import Link from "next/link";
import { 
  CheckCircle, 
  X, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Landmark, 
  Award, 
  Users, 
  FileText, 
  ChevronRight, 
  UploadCloud,
  Quote
} from 'lucide-react';
import { AiOutlineMail } from "react-icons/ai";
import Modal from '@/components/Modal';

// --- Types & Content ---
interface CategoryItem {
    title: string;
    desc: string;
}

interface ModalState {
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

const forumContent = {
    supportingDocuments: `
    <div class="space-y-4 text-sm md:text-base font-sans text-gray-700">
      <h2 style="font-size: 1.1rem; font-weight: 700; color: #15803d; margin-bottom: 1rem;"><span className="cooper">GIFON</span> Membership Registration – Supporting Documents Checklist</h2>
      
      <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #16a34a;">
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">Student Membership</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem;">
          <li>Valid Student ID Card</li>
          <li>Admission Letter or Proof of Enrollment</li>
          <li>Recent Passport Photograph</li>
          <li>National Identification Number (NIN) Slip or any Valid National ID</li>
          <li>Recommendation Letter (optional)</li>
        </ul>
      </div>

      <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #16a34a;">
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">Professional Membership</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem;">
          <li>Updated Curriculum Vitae (CV)</li>
          <li>Relevant Academic Certificates (Minimum: B.Sc / B.Eng)</li>
          <li>Professional Certifications (if any)</li>
          <li>National Identification Number (NIN) Slip or any Valid National ID</li>
          <li>Recent Passport Photograph</li>
        </ul>
      </div>

       <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #16a34a;">
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">Institutional Membership</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem;">
          <li>Institutional Profile or Brochure</li>
          <li>Certificate of Establishment / Accreditation</li>
          <li>Letter of Intent on Official Institutional Letterhead</li>
          <li>
            Details of Authorized Institutional Contact Person:
            <ul style="list-style-type: circle; padding-left: 1.5rem; margin-top: 0.25rem;">
              <li>Name and Designation</li>
              <li>Official Email & Phone Number</li>
              <li>Institutional ID Card</li>
              <li>National Identification Number (NIN) Slip or any Valid National ID</li>
              <li>Recent Passport Photograph</li>
            </ul>
          </li>
        </ul>
      </div>
      
       <div style="background-color: #f9fafb; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #16a34a;">
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937;">Corporate Membership</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem;">
          <li>Certificate of Incorporation (CAC)</li>
          <li>Company Profile or Brochure</li>
          <li>Tax Identification Number (TIN)</li>
          <li>Letter of Intent on Company Letterhead</li>
          <li>List of Key Technical and/or Management Staff (with roles)</li>
          <li>National Identification Number (NIN) Slip or any Valid National ID for Authorized Company Representative</li>
          <li>Recent Passport Photograph of Authorized Representative</li>
        </ul>
      </div>
    </div>
  `
}

export default function MembershipClient({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [modalData, setModalData] = useState<ModalState>({ isOpen: false, content: null, title: null });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
    const [isModalSubmitted, setIsModalSubmitted] = useState(false);

    const categories: CategoryItem[] = [
        { title: "Student Membership", desc: "For undergraduates and postgraduates." },
        { title: "Professional Membership", desc: "For individuals in geospatial, tech, security, and related fields." },
        { title: "Institutional Membership", desc: "For universities, research institutes, and training centers." },
        { title: "Corporate Membership", desc: "For private sector organizations." },
        { title: "Government/Agency Membership", desc: "For ministries, security agencies, and regulators." },
        { title: "Fellow/Honorary Membership", desc: "For distinguished leaders and contributors." },
    ];

    // Helper to get icon based on index/title for visual flair
    const getCategoryIcon = (index: number) => {
        const icons = [GraduationCap, Briefcase, Building2, Building2, Landmark, Award];
        const Icon = icons[index] || Users;
        return <Icon size={32} className="text-green-600 mb-4" />;
    };

    // --- Handlers ---
    const openDocModal = (content: string, title: string) => setModalData({ isOpen: true, content, title });
    const closeDocModal = () => setModalData({ isOpen: false, content: null, title: null });

    const handleApplyClick = (category: CategoryItem) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const handleCloseAppModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
        setIsModalSubmitted(false);
        setIsLoading(false);
        setError(null);
    };

    const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const form = e.currentTarget;
        const fileInput = form.elements.namedItem('upload') as HTMLInputElement;
        const file = fileInput.files ? fileInput.files[0] : null;

        if (!file) {
            setError('A file upload is required.');
            setIsLoading(false);
            return;
        }
        if (file.size > 1024 * 1024 * 5) { 
            setError('File is too large. Please upload under 5MB.');
            setIsLoading(false);
            return;
        }

        const formData = new FormData(form);

        try {
            const res = await fetch('/api/auth/apply', {
                method: 'POST',
                body: formData, 
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.message || 'Something went wrong');
            setIsModalSubmitted(true);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <HeroSection
                title="Join the Geospatial Intelligence Movement"
                description="Connect with a powerful network of professionals, institutions, and agencies shaping Nigeria’s geospatial future."
                backgroundMedia={["/media/Membership background.jpg"]}
            />
            
            {/* Why Join Section */}
            <div id="why-join" className='pt-8 -z-10'></div>
            <section className="py-20 px-4 md:px-6 bg-linear-to-b from-white to-green-50/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join <span className="cooper text-green-700">GIFON</span>?</h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 leading-relaxed text-lg text-gray-700 text-justify md:text-center relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-400 to-green-600"></div>
                        
                        <p className="mb-6">
                            Joining the Geospatial Intelligence Foundation of Nigeria (<span className="cooper font-bold">GIFON</span>) means becoming part of a dynamic community of professionals, innovators, policymakers, and researchers committed to shaping Nigeria’s future through geospatial intelligence. As a member, you are not only advancing your career but also contributing to national development, security, and innovation.
                        </p>
                        <p>
                            <span className="cooper font-bold">GIFON</span> membership provides you with opportunities to network with thought leaders, access exclusive research and publications, attend specialized training and workshops, and participate in shaping policies that strengthen Nigeria’s geospatial ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <div id="categories"></div>
            <section className="px-4 md:px-6 py-20 bg-gray-50 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membership Categories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Find the category that best fits your professional standing and organizational needs.</p>
                </div>
                
                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between hover:-translate-y-1"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            {getCategoryIcon(idx)}
                        </div>
                        <div className="grow mb-8">
                            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                {getCategoryIcon(idx)}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                        <button
                            onClick={() => handleApplyClick(item)}
                            className="w-full py-3 rounded-xl font-bold border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center gap-2 group/btn"
                        >
                            Apply Now 
                            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    ))}
                </div>
            </section>
            
            {/* Benefits Section */}
            <div id="benefits"></div>
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-20 space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Membership Benefits
                            </h2>
                            <div className="w-20 h-1.5 bg-green-600 mt-3 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-600 mb-8">
                            As a <span className="cooper text-gray-800">GIFON</span> member, you unlock a suite of resources designed to accelerate your career.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Access to exclusive publications, research reports, and policy briefs.",
                                "Discounted rates for conferences, training, and certifications.",
                                "Networking with global experts and policymakers.",
                                "Eligibility for scholarships, fellowships, and mentorships.",
                                "Opportunities to contribute to national research projects.",
                                "Participation in shaping Nigeria’s geospatial policies.",
                                "Recognition as part of Nigeria’s leading GEOINT community."
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Styled Table */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-gray-900 p-6 text-white">
                            <h3 className="text-xl font-bold">Fee Structure</h3>
                            <p className="text-gray-400 text-sm">Annual dues by category</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="text-xs font-bold text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4">Category</th>
                                        <th className="px-6 py-4">Annual</th>
                                        <th className="px-6 py-4">3-Year</th>
                                        <th className="px-6 py-4">Lifetime</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Student</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-red-400 opacity-50"><X size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Professional</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Institutional</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Corporate</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-gray-600">₦ xx,xxx</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Govt/Agency</td>
                                        <td className="px-6 py-4 text-gray-600 italic">Negotiated</td>
                                        <td className="px-6 py-4 text-gray-600 italic">Negotiated</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                                        <td className="px-6 py-4 font-bold text-green-900">Fellow/Honorary</td>
                                        <td className="px-6 py-4 text-green-800" colSpan={2}>By Nomination</td>
                                        <td className="px-6 py-4 text-green-800 font-bold">Automatic</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Server Component Injection */}
            <div className="px-4 md:px-6">
                {children}
            </div>

            {/* Testimonials */}
            <div id="testimonials"></div>
            <section className="py-24 px-4 md:px-6 bg-green-900 relative overflow-hidden">
                 {/* Decorative background pattern */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                 
                 <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Quote className="text-green-400 w-16 h-16 mx-auto mb-6 opacity-80" />
                    <blockquote className="text-2xl md:text-4xl text-white font-serif leading-relaxed mb-8">
                        “<span className="cooper">GIFON</span> connects us to global geospatial networks while addressing Nigeria’s critical national infrastructure needs.”
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <p className="text-xl font-bold text-green-400">Dr. AA Usman</p>
                        <p className="text-green-200 uppercase tracking-widest text-sm">Founder / Chairman BOT</p>
                    </div>
                </div>
            </section>
            
            {/* How to Apply Section */}
            <div id="apply"></div>
            <section className="py-20 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
                        <p className="text-gray-500">Follow these simple steps to become a member.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { title: "Choose Category", desc: "Review categories to find your fit." },
                            { title: "Fill Form", desc: "Complete the online application." },
                            { title: "Attach Docs", desc: "Upload required supporting files." },
                            { title: "Payment", desc: "Securely pay your annual dues." },
                            { title: "Confirmation", desc: "Receive your Digital ID." }
                        ].map((step, i) => (
                            <div key={i} className="relative bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-green-200">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                {/* Connector Line (Desktop Only) */}
                                {i < 4 && (
                                    <div className="hidden md:block absolute top-11 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => openDocModal(forumContent.supportingDocuments, "Supporting Documents Checklist")}
                            className='inline-flex items-center gap-2 text-green-700 bg-green-50 px-6 py-3 rounded-full hover:bg-green-100 transition font-semibold border border-green-200'
                        >
                            <FileText size={18} /> View Required Documents Checklist
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div id="contact"></div>
            <section className="py-20 px-4 md:px-6 bg-gray-50 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Still have questions?</h2>
                    <div className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full shadow-md border border-gray-100 text-lg font-medium text-gray-700 hover:text-green-600 transition-colors cursor-pointer group">
                        <AiOutlineMail className="text-green-600 text-xl group-hover:scale-110 transition-transform" /> 
                        <a href="mailto:membership@gifon.org.ng">membership@gifon.org.ng</a>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* APPLICATION MODAL (Enhanced UI)                                    */}
            {/* ------------------------------------------------------------------ */}
            {isModalOpen && selectedCategory && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={handleCloseAppModal}
                >
                    <div 
                        className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl flex flex-col max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* Modal Header */}
                        <div className="bg-gray-50 px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                             <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {isModalSubmitted ? "Application Received" : "Join GIFON"}
                                </h3>
                                {!isModalSubmitted && <p className="text-sm text-gray-500">Applying for: <span className="font-semibold text-green-600">{selectedCategory.title}</span></p>}
                             </div>
                             <button 
                                onClick={handleCloseAppModal}
                                className="bg-white p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition shadow-sm border border-gray-200"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto">
                            {isModalSubmitted ? (
                                <div className="flex flex-col items-center justify-center text-center py-10">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                                        <CheckCircle className="text-green-600 w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                    <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                                        Your application has been submitted securely. We will review your documents and contact you shortly.
                                    </p>
                                    <button
                                        onClick={handleCloseAppModal}
                                        className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition font-bold"
                                    >
                                        Close Window
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleModalSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                                            <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none" placeholder="Jane Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone</label>
                                            <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none" placeholder="+234..." />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                                        <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none" placeholder="jane@example.com" />
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <label htmlFor="organization" className="text-sm font-bold text-gray-700">Organization</label>
                                        <input type="text" id="organization" name="organization" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none" placeholder="University or Company Name" />
                                    </div>
                                    
                                    <input type="hidden" name="category" value={selectedCategory.title} />

                                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl space-y-2">
                                        <label htmlFor="upload" className="flex items-center gap-2 text-sm font-bold text-blue-800">
                                            <UploadCloud size={18} /> Upload Supporting Document
                                        </label>
                                        <input 
                                            type="file" 
                                            id="upload" 
                                            name="upload" 
                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-white file:text-blue-700 hover:file:bg-blue-50 cursor-pointer"
                                        />
                                        <p className="text-xs text-blue-600/70">Max size: 5MB. PDF, JPG, or PNG.</p>
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                                            <X size={16} /> {error}
                                        </div>
                                    )}
                                    
                                    <button 
                                        type="submit" 
                                        disabled={isLoading}
                                        className="w-full bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        {isLoading ? 'Processing Application...' : 'Submit Application'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Modal 
                isOpen={modalData.isOpen} 
                onClose={closeDocModal} 
                title={modalData.title}
                content={modalData.content}
            />
        </>
    );
}