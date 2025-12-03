"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import { CheckCircle, X } from 'lucide-react'; // Added X icon for close button
import { AiOutlineMail } from "react-icons/ai";
import { BsVoicemail } from "react-icons/bs";
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
    <div class="space-y-4 text-sm md:text-base">
      <h2 style="font-size: 1.1rem; font-weight: 700;"><span className="cooper">GIFON</span> Membership Registration – Supporting Documents Checklist</h2>
      
      <div>
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Student Membership</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem;">
          <li>Valid Student ID Card</li>
          <li>Admission Letter or Proof of Enrollment</li>
          <li>Recent Passport Photograph</li>
          <li>National Identification Number (NIN) Slip or any Valid National ID</li>
          <li>Recommendation Letter (optional)</li>
        </ul>
      </div>

      <div>
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Professional Membership</h3>
        <ul style="list-style-type: disc; padding-left: 1.5rem;">
          <li>Updated Curriculum Vitae (CV)</li>
          <li>Relevant Academic Certificates (Minimum: B.Sc / B.Eng)</li>
          <li>Professional Certifications (if any)</li>
          <li>National Identification Number (NIN) Slip or any Valid National ID</li>
          <li>Recent Passport Photograph</li>
        </ul>
      </div>

       <div>
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Institutional Membership</h3>
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
      
       <div>
        <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Corporate Membership</h3>
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
    
    // State for Document Viewer Modal
    const [modalData, setModalData] = useState<ModalState>({
        isOpen: false,
        content: null,
        title: null,
    });
    
    // State for Application Form Modal
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

    // --- Handlers ---
    const openDocModal = (content: string, title: string) => {
        setModalData({ isOpen: true, content, title });
    };
    
    const closeDocModal = () => {
        setModalData({ isOpen: false, content: null, title: null });
    };

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

            console.log('Application successful:', result);
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
                backgroundMedia = {[
                    "/media/Membership background.jpg",
                ]}
            />
            
            {/* Why Join Section */}
            <div id="why-join" className='pt-8 -z-10'></div>
            <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Join <span className="cooper">GIFON</span>?</h2>
                    <div className="space-y-4 text-left md:text-justify text-gray-700 leading-relaxed">
                        <p>
                            Joining the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) means becoming part of a dynamic community of professionals, innovators, policymakers, and researchers committed to shaping Nigeria’s future through geospatial intelligence. As a member, you are not only advancing your career but also contributing to national development, security, and innovation.
                        </p>
                        <p>
                            <span className="cooper">GIFON</span> membership provides you with opportunities to network with thought leaders, access exclusive research and publications, attend specialized training and workshops, and participate in shaping policies that strengthen Nigeria’s geospatial ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <div id="categories"></div>
            <section className="px-4 md:px-6 py-12 bg-green-50 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center">Membership Categories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full">
                    {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl p-6 shadow-md bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="grow mb-6">
                            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                        </div>
                        <button
                            onClick={() => handleApplyClick(item)}
                            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition active:scale-95"
                        >
                            Apply / Renew
                        </button>
                    </div>
                    ))}
                </div>
            </section>
            
            {/* Benefits Section */}
            <div id="benefits"></div>
            <section className="max-w-5xl mx-auto px-4 md:px-6 py-16 space-y-8">
                <div>
                    <div className="inline-block mb-4 text-left">
                        <h2 className="text-green-600 text-2xl md:text-3xl font-semibold">
                            Membership Benefits
                        </h2>
                        <div className="w-16 h-1 bg-green-600 mt-2"></div>
                    </div>
                    
                    <p className="text-lg md:text-xl font-serif mb-4">As a <span className="cooper">GIFON</span> member, you gain:</p>
                    <ul className="text-base md:text-lg font-serif list-disc list-outside ml-5 space-y-2 text-gray-800">
                        <li>Access to exclusive publications, research reports, and policy briefs.</li>
                        <li>Discounted rates for conferences, training, workshops, and certification programs.</li>
                        <li>Networking opportunities with global experts, policymakers, and industry leaders.</li>
                        <li>Eligibility for scholarships, fellowships, and mentorship programs.</li>
                        <li>Opportunities to contribute to national and international research projects.</li>
                        <li>Participation in shaping Nigeria’s geospatial policies and frameworks.</li>
                        <li>Recognition as part of Nigeria’s leading GEOINT community.</li>
                    </ul>
                </div>

                {/* Responsive Table Wrapper */}
                <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                    <table className="w-full text-left text-gray-700 min-w-[600px]">
                        <thead className="text-xs md:text-sm text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-4 py-3 md:px-6 md:py-4">Category</th>
                                <th scope="col" className="px-4 py-3 md:px-6 md:py-4">Annual Fee</th>
                                <th scope="col" className="px-4 py-3 md:px-6 md:py-4">3-Year Fee</th>
                                <th scope="col" className="px-4 py-3 md:px-6 md:py-4">Lifetime Option</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm md:text-base">
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-4 py-3 md:px-6 md:py-4 font-medium">Student</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4 text-red-500 font-bold">❌</td>
                            </tr>
                            <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                <td className="px-4 py-3 md:px-6 md:py-4 font-medium">Professional</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4 text-green-600 font-bold">✅</td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-4 py-3 md:px-6 md:py-4 font-medium">Institutional</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4 text-green-600 font-bold">✅</td>
                            </tr>
                            <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                <td className="px-4 py-3 md:px-6 md:py-4 font-medium">Corporate</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">₦ xx,xxx</td>
                                <td className="px-4 py-3 md:px-6 md:py-4 text-green-600 font-bold">✅</td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-4 py-3 md:px-6 md:py-4 font-medium">Govt/Agency</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">Negotiated</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">Negotiated</td>
                                <td className="px-4 py-3 md:px-6 md:py-4 text-green-600 font-bold">✅</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="px-4 py-3 md:px-6 md:py-4 font-medium">Fellow/Honorary</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">By Nomination</td>
                                <td className="px-4 py-3 md:px-6 md:py-4">By Nomination</td>
                                <td className="px-4 py-3 md:px-6 md:py-4 text-green-600 font-bold">Automatic</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-xs md:text-sm text-gray-600 italic">
                    Note: Membership benefits vary by category. Swipe table left/right on mobile to view more.
                </p>
            </section>

            {/* Server Component Injection (People Grid) */}
            <div className="px-4 md:px-6">
                {children}
            </div>

            {/* Testimonials */}
            <div id="testimonials"></div>
            <section className="py-16 px-4 md:px-6 bg-green-50">
                 <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        “<span className='font-serif font-bold'><span className="cooper">GIFON</span></span> connects us to global geospatial networks while addressing Nigeria’s critical national infrastructure needs.”
                    </blockquote>
                    <p className="mt-4 text-base md:text-lg font-semibold text-green-800">- Dr. AA Usman -</p>
                    <p className="mt-1 text-base md:text-lg font-semibold text-green-800">Founder / Chairman BOT</p>
                </div>
            </section>
            
            {/* How to Apply Section */}
            <div id="apply"></div>
            <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How to Apply</h2>
                    
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Application Steps</h3>
                        <ol className="list-decimal list-outside ml-5 space-y-4 text-base md:text-lg">
                            <li>
                                <span className="font-semibold">Choose membership category:</span> Review the categories above to find your fit.
                            </li>
                            <li>
                                <span className="font-semibold">Fill out the membership form:</span> Provide your details in the form.
                            </li>
                            <li>
                                <span className="font-semibold">Attach supporting documents:</span> Learn more about the required documents{' '}
                                <button
                                    onClick={() => openDocModal(forumContent.supportingDocuments, "Membership Supporting Documents Checklist")}
                                    className='underline text-green-600 hover:text-green-800 font-medium'
                                >
                                    here
                                </button>
                                .
                            </li>
                            <li>
                                <span className="font-semibold">Submit and make payment:</span> Use our secure payment gateway to pay your dues.
                            </li>
                            <li>
                                <span className="font-semibold">Receive your confirmation:</span> Get your digital membership ID and certificate via email.
                            </li>
                        </ol>
                    </div>

                    <div className='mt-20 text-center'>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Membership Portal</h2>
                        <div className="space-y-4 text-gray-600 text-left md:text-center">
                            <p>  
                                Our secure membership portal makes it easy to join <span className="cooper">GIFON</span>, renew your membership, or upgrade to a new category.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/dashboard"
                                className="inline-block w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
                            >
                                Go to Membership Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div id="contact"></div>
            <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Have questions about joining <span className="cooper">GIFON</span>?</h2>
                    <div className="text-base md:text-lg text-gray-400 mb-8 wrap-break-word flex flex-col items-center">
                        Contact our membership team at
                        <div className='flex flex-row items-center gap-1 hover:text-green-500'><AiOutlineMail/> membership@gifon.org.ng</div>
                        or call 
                        <div className='flex flex-row items-center gap-1 hover:text-green-500'><BsVoicemail/> +234 707 721 1243.</div>
                    </div>
                    {/* <Link
                        href="/contact-us"
                        className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </Link> */}
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* APPLICATION MODAL (Responsive Form)                                */}
            {/* ------------------------------------------------------------------ */}
            {isModalOpen && selectedCategory && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm"
                    onClick={handleCloseAppModal}
                >
                    <div 
                        className="relative w-full max-w-md bg-white shadow-2xl rounded-2xl flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                             <h3 className="text-xl font-bold text-gray-800">
                                {isModalSubmitted ? "Application Status" : "Join GIFON"}
                             </h3>
                             <button 
                                onClick={handleCloseAppModal}
                                className="text-gray-400 hover:text-gray-700 transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body (Scrollable) */}
                        <div className="p-6 overflow-y-auto">
                            {isModalSubmitted ? (
                                <div className="flex flex-col items-center justify-center text-center py-8">
                                    <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Your application for <span className="font-semibold text-green-700">{selectedCategory.title}</span> has been received successfully.
                                    </p>
                                    <button
                                        onClick={handleCloseAppModal}
                                        className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleModalSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" placeholder="+234..." />
                                    </div>
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-1">Organization</label>
                                        <input type="text" id="organization" name="organization" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" placeholder="Company or School Name" />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                        <input 
                                            type="text" 
                                            value={selectedCategory.title} 
                                            readOnly 
                                            className="w-full px-4 py-2 border border-gray-200 bg-gray-50 text-gray-500 rounded-lg cursor-not-allowed"
                                        />
                                        <input type="hidden" name="category" value={selectedCategory.title} />
                                    </div>

                                    <div>
                                        <label htmlFor="upload" className="block text-sm font-semibold text-gray-700 mb-1">Supporting Document</label>
                                        <input 
                                            type="file" 
                                            id="upload" 
                                            name="upload" 
                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                        />
                                        <p className="text-xs text-gray-400 mt-1">Max size: 5MB</p>
                                    </div>

                                    {error && (
                                        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                                            {error}
                                        </div>
                                    )}
                                    
                                    <button 
                                        type="submit" 
                                        disabled={isLoading}
                                        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isLoading ? 'Submitting...' : 'Submit Application'}
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