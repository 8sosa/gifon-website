"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import { CheckCircle } from 'lucide-react';
import Modal from '@/components/Modal';

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
    <h2 style="font-size: 1.25rem; font-weight: 600;">GIFON Membership Registration – Supporting Documents Checklist</h2>
    <br>
    <h3 style="font-size: 1.25rem; font-weight: 600;">Student Membership</h3>
    <ul style="list-style: roman;">
      <li>Valid Student ID Card</li>
      <li>Admission Letter or Proof of Enrollment</li>
      <li>Recent Passport Photograph</li>
      <li>National Identification Number (NIN) Slip or any valid ID</li>
      <li>Recommendation Letter (optional, from department or supervisor)</li>
    </ul>
    <br>
    <h3 style="font-size: 1.25rem; font-weight: 600;">Professional Membership</h3>
    <ul style="list-style: roman;">
      <li>Updated Curriculum Vitae (CV)</li>
      <li>Relevant Academic Certificates (Minimum: B.Sc/B.Eng or equivalent)</li>
      <li>Professional Certifications (if any – e.g., GIS, Remote Sensing, Data Analysis, etc.)</li>
      <li>Valid National ID (NIN, Passport, or Driver’s License)</li>
      <li>Passport Photograph</li>
    </ul>
    <br>
    <h3 style="font-size: 1.25rem; font-weight: 600;">Institutional Membership (Universities, Research Institutes, Training Centers)</h3>
    <ul style="list-style: roman;">
      <li>Institutional Profile or Brochure</li>
      <li>Certificate of Establishment / Accreditation (where applicable)</li>
      <li>Letter of Intent / Partnership Request on Official Letterhead</li>
      <li>Details of Institutional Contact Person</li>
      <li>Valid Institutional ID and NIN of Contact Person</li>
    </ul>
    <br>
    <h3 style="font-size: 1.25rem; font-weight: 600;">Corporate Membership (Private Companies, Startups, Consultants)</h3>
    <ul style="list-style: roman;">
      <li>Certificate of Incorporation (CAC)</li>
      <li>Company Profile or Brochure</li>
      <li>Tax Identification Number (TIN) or Evidence of Tax Compliance</li>
      <li>Letter of Intent on Company Letterhead</li>
      <li>Valid ID and NIN of Company Representative</li>
      <li>List of Key Technical/Management Staff (with brief profiles)</li>
    </ul>
    <br>
    <h3 style="font-size: 1.25rem; font-weight: 600;">Government / Agency Membership</h3>
    <ul style="list-style: roman;">
      <li>Official Letter of Application or Endorsement from the Agency Head</li>
      <li>Agency Profile or Mandate Summary</li>
      <li>Evidence of Government Registration (or enabling law)</li>
      <li>Valid ID and NIN of Authorized Representative</li>
      <li>Passport Photograph of Authorized Representative</li>
    </ul>
    <br>
    <h3 style="font-size: 1.25rem; font-weight: 600;">Fellow / Honorary Membership</h3>
    <ul style="list-style: roman;">
      <li>Updated CV / Professional Bio</li>
      <li>Evidence of Notable Achievements or Contributions to GEOINT / Geospatial Sector</li>
      <li>Copies of Awards, Publications, or Recognitions (if applicable)</li>
      <li>Nomination Letter or Endorsement (from GIFON Council or two existing members)</li>
      <li>Valid National ID (NIN, Passport, or Driver’s License)</li>
      <li>Passport Photograph</li>
    </ul>
  `
}

export default function MembershipPage({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // State for the document viewer modal
    const [modalData, setModalData] = useState<ModalState>({
        isOpen: false,
        content: null,
        title: null,
      });
    
      // Handlers to open/close doc modal
      const openModal = (content: string, title: string) => {
        setModalData({ isOpen: true, content, title });
      };
    
      const closeModal = () => {
        setModalData({ isOpen: false, content: null, title: null });
      };

    // State for application form modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

    // --- 1. NEW STATE for modal form submission ---
    const [isModalSubmitted, setIsModalSubmitted] = useState(false);

    const categories: CategoryItem[] = [
        {
            title: "Student Membership",
            desc: "For undergraduates and postgraduates.",
        },
        {
            title: "Professional Membership",
            desc: "For individuals in geospatial, tech, security, and related fields.",
        },
        {
            title: "Institutional Membership",
            desc: "For universities, research institutes, and training centers.",
        },
        {
            title: "Corporate Membership",
            desc: "For private sector organizations.",
        },
        {
            title: "Government/Agency Membership",
            desc: "For ministries, security agencies, and regulators.",
        },
        {
            title: "Fellow/Honorary Membership",
            desc: "For distinguished leaders and contributors.",
        },
    ];

    // Function to open the application modal
    const handleApplyClick = (category: CategoryItem) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    // --- 2. UPDATED function to close the application modal ---
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
        setIsModalSubmitted(false); // Reset modal submission state on close
        setIsLoading(false);
        setError(null);
    };


    // --- 3. NEW handler for modal form submission ---
  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // 1. Get the form element itself
    const form = e.currentTarget;
    
    // 2. Grab the file from the input
    const fileInput = form.elements.namedItem('upload') as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    // 3. (Optional but recommended) Basic file validation
    if (!file) {
      setError('A file upload is required for the application.');
      setIsLoading(false);
      return;
    }
    if (file.size > 1024 * 1024 * 5) { // 5MB limit
      setError('File is too large. Please upload a file under 5MB.');
      setIsLoading(false);
      return;
    }

    // 4. Create a FormData object
    // This is the *only* way to send a file
    const formData = new FormData(form);
    
    // No need to append fields one-by-one, FormData(form) does it!
    // It automatically gets 'name', 'email', 'phone', 'organization', 'category', and 'upload'
    // *because they have a 'name' attribute in the HTML*.

    try {
      // 5. Send the FormData
      const res = await fetch('/api/auth/apply', {
        method: 'POST',
        // --- DO NOT SET Content-Type ---
        // The browser automatically sets it to multipart/form-data
        // with the correct boundary when it sees a FormData body.
        body: formData, 
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      // Success!
      console.log('Application successful:', result);
      setIsModalSubmitted(true); // Your existing success state

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

    return (
        <>
            {/* 1. Hero Section (Top Banner) */}
            <HeroSection
                title="Join the Geospatial Intelligence Movement"
                description="Become a member of GIFON and connect with a powerful network of professionals, institutions, and agencies shaping Nigeria’s geospatial future."
                backgroundImages = {[
                "/bg/e.jpeg",
                "/bg/a.JPG",
                "/bg/b.JPG",
                "/bg/c.JPG",
                "/bg/d.JPG",
                "/ph.svg",
                ]}
            />
            
            {/* ... (Your other sections: Why Join, Categories, Benefits, Testimonials) ... */}
            <div id="why-join" className='pt-8 -z-10'></div>
            <section className="pt-16 py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Why Join GIFON?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                        Joining the Geospatial Intelligence Foundation of Nigeria (GIFON) means becoming part of a dynamic community of professionals, innovators, policymakers, and researchers committed to shaping Nigeria’s future through geospatial intelligence. As a member, you are not only advancing your career but also contributing to national development, security, and innovation.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        GIFON membership provides you with opportunities to network with thought leaders, access exclusive research and publications, attend specialized training and workshops, and participate in shaping policies that strengthen Nigeria’s geospatial ecosystem. Whether you are a student, professional, or institution, your membership positions you at the heart of the conversation driving change across Nigeria’s 13 critical infrastructure sectors.
                    </p>
                </div>
            </section>

            <div id="categories"></div>
            <section className="px-6 py-12 bg-green-50 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">Membership Categories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                    {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg p-6 shadow-lg bg-white flex flex-col items-center text-center justify-between"
                    >
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                        <button
                            onClick={() => handleApplyClick(item)}
                            className="w-full mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            Apply / Renew
                        </button>
                    </div>
                    ))}
                </div>
            </section>
            
            <div id="benefits"></div>
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
                {/* ... (Benefits table and content) ... */}
                <div className="inline-block mb-6 text-left">
                    <h2 className="text-green-600 text-2xl font-semibold">
                        Membership Benefits
                    </h2>
                    <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                </div>
                <p className="text-xl cooper">As a GIFON member, you gain:</p>
                <ul className="text-lg cooper list-disc">
                    <li>
                        Access to exclusive publications, research reports, and policy briefs.
                    </li>
                    <li>
                        Discounted rates for conferences, training, workshops, and certification programs.
                    </li>
                    <li>
                        Networking opportunities with global experts, policymakers, and industry leaders.
                    </li>
                    <li>
                        Eligibility for scholarships, fellowships, and mentorship programs.
                    </li>
                    <li>
                        Opportunities to contribute to national and international research projects.
                    </li>
                    <li>
                        Participation in shaping Nigeria’s geospatial policies and frameworks.
                    </li>
                    <li>
                        Recognition as part of Nigeria’s leading GEOINT community.
                    </li>
                </ul>
                <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full text-left text-gray-700">
                           {/* ... table content ... */}
                           <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Annual Fee</th>
                                    <th scope="col" className="px-6 py-3">3-Year Fee</th>
                                    <th scope="col" className="px-6 py-3">Lifetime Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium">Student</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">❌</td>
                                </tr>
                                <tr className="bg-gray-50 border-b">
                                    <td className="px-6 py-4 font-medium">Professional</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">✅</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium">Institutional</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">✅</td>
                                </tr>
                                <tr className="bg-gray-50 border-b">
                                    <td className="px-6 py-4 font-medium">Corporate</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">₦ xx,xxx</td>
                                    <td className="px-6 py-4">✅</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 font-medium">Government/Agency</td>
                                    <td className="px-6 py-4">Negotiated</td>
                                    <td className="px-6 py-4">Negotiated</td>
                                    <td className="px-6 py-4">✅</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium">Fellow/Honorary</td>
                                    <td className="px-6 py-4">By Nomination</td>
                                    <td className="px-6 py-4">By Nomination</td>
                                    <td className="px-6 py-4">Automatic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                    Note: Membership benefits vary by category. See details above for what applies to you.
                </p>
            </section>

            {children}

            <div id="testimonials"></div>
            <section className="py-16 px-4 bg-green-50">
                {/* ... (Testimonial content) ... */}
                 <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl italic text-gray-800">
                        “<span className='cooper'>GIFON</span> connects us to global geospatial networks while addressing Nigeria’s critical national infrastructure needs.”
                    </blockquote>
                    <p className="mt-4 text-lg font-semibold">- Dr AA Usman / Founding Member</p>
                </div>
            </section>
            
            <div id="apply"></div>
            {/* 7. & 8. Membership Application & Form */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">How to Apply</h2>
                    
                    <div className="items-start">
                        {/* Steps */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Application Steps</h3>
                            <ol className="list-decimal list-inside space-y-4 text-gray-700">
                                <li className="text-lg">
                                    <span className="font-semibold">Choose membership category:</span> Review the categories above to find your fit.
                                </li>
                                <li className="text-lg">
                                    <span className="font-semibold">Fill out the membership form:</span> Provide your details in the form.
                                </li>
                                <li className="text-lg">
                                    <span className="font-semibold">Attach supporting documents:</span> Learn more about the required documents{' '}
                                    <button
                                        onClick={() => openModal(forumContent.supportingDocuments, "Membership Supporting Documents Checklist")}
                                        className='underline text-green-600 hover:text-green-800 font-medium'
                                    >
                                        here
                                    </button>
                                    .
                                </li>
                                <li className="text-lg">
                                    <span className="font-semibold">Submit and make payment:</span> Use our secure payment gateway to pay your dues.
                                </li>
                                <li className="text-lg">
                                    <span className="font-semibold">Receive your confirmation:</span> Get your digital membership ID and certificate via email.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='max-w-4xl mx-auto'>
                    <h2 className="text-3xl font-bold mb-8 mt-32 text-center">Membership Portal (Apply / Renew)</h2>

                    <div className="space-y-6">
                        <p>  
                            Our secure membership portal makes it easy to join GIFON, renew your membership, or upgrade to a new category. Through the portal, members can manage their profiles, access resources, register for events, and stay updated on opportunities across the geospatial ecosystem.
                        </p>
                        <p>  
                            Whether you are a student just starting your journey or a senior professional shaping the future, the portal is your entry point into a vibrant community of knowledge, practice, and impact.
                        </p>
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/dashboard" // Replace with actual portal link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            Go to Membership Portal
                        </Link>
                    </div>
                </div>
            </section>

            <div id="contact"></div>
            {/* 9. Contact Section (Bottom Banner) */}
            <section className="py-16 px-4 bg-gray-800 text-white">
                {/* ... (Contact content) ... */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Have questions about joining GIFON?</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Contact our membership team at [membership@gifon.org.ng] or call [+234 707 721 1243].
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* --- 4. UPDATED MEMBERSHIP FORM MODAL --- */}
            {isModalOpen && selectedCategory && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto p-6 pt-70"
                    onClick={handleCloseModal} // Close modal on overlay click
                >
                    <div 
                        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        {/* Close Button */}
                        <button 
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        
                        {isModalSubmitted ? (
                            // --- Thank You Message (for modal) ---
                            <div className="flex flex-col items-center justify-center text-center h-full py-12">
                                <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                                <p className="text-gray-600">
                                    Your application for {selectedCategory.title} has been received.
                                </p>
                                <button
                                    onClick={handleCloseModal}
                                    className="mt-6 text-sm text-green-600 hover:underline"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            // --- Modal Form ---
                            <>
                                <h3 className="text-2xl font-semibold mb-6 text-left">Membership Form</h3>
                                {/* --- Added onSubmit={handleModalSubmit} --- */}
                                <form className="space-y-4" onSubmit={handleModalSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization/Institution</label>
                                        <input type="text" id="organization" name="organization" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                    
                                    {/* Selected Category (Read-only) */}
                                    <div>
                                        <label htmlFor="category-display" className="block text-sm font-medium text-gray-700">Category</label>
                                        <input 
                                            type="text" 
                                            id="category-display"
                                            value={selectedCategory.title} 
                                            readOnly 
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                                        />
                                        <input type="hidden" name="category" value={selectedCategory.title} />
                                    </div>

                                    <div>
                                        <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload ID/Supporting Document</label>
                                        <input type="file" id="upload" name="upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                                    </div>
                                    {/* --- ADD ERROR MESSAGE DISPLAY --- */}
                                    {error && (
                                        <div className="text-red-700 text-sm bg-red-100 p-3 rounded-md border border-red-300">
                                            <strong>Error:</strong> {error}
                                        </div>
                                    )}
                                    
                                    {/* --- UPDATE BUTTON FOR LOADING STATE --- */}
                                    <button 
                                        type="submit" 
                                        disabled={isLoading}
                                        className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Submitting...' : 'Apply Now'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <Modal 
                isOpen={modalData.isOpen} 
                onClose={closeModal} 
                title={modalData.title}
                content={modalData.content}
            />
        </>
    );
}