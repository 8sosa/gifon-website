"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import { FileDown } from 'lucide-react';
// Import icons if you have them, e.g., from react-icons
// import { FaUserGraduate, FaUserTie, FaBuilding, FaGlobe, FaShieldAlt, FaAward } from 'react-icons/fa';

interface CategoryItem {
    title: string;
    desc: string;
    // icon: JSX.Element;
  }

export default function MembershipPage() {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to store the currently selected category
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

    const categories: CategoryItem[] = [
        {
            title: "Student Membership",
            desc: "For undergraduates and postgraduates.",
            // icon: <FaUserGraduate size={40} />
        },
        {
            title: "Professional Membership",
            desc: "For individuals in geospatial, tech, security, and related fields.",
            // icon: <FaUserTie size={40} />
        },
        {
            title: "Institutional Membership",
            desc: "For universities, research institutes, and training centers.",
            // icon: <FaBuilding size={40} />
        },
        {
            title: "Corporate Membership",
            desc: "For private sector organizations.",
            // icon: <FaGlobe size={40} />
        },
        {
            title: "Government/Agency Membership",
            desc: "For ministries, security agencies, and regulators.",
            // icon: <FaShieldAlt size={40} />
        },
        {
            title: "Fellow/Honorary Membership",
            desc: "For distinguished leaders and contributors.",
            // icon: <FaAward size={40} />
        },
    ];

    const [isDocModalOpen, setIsDocModalOpen] = useState(false);
    const docFile = "/docs/GIFON_Membership_Supporting_Documents_Checklist.docx";
    const docTitle = "Membership Supporting Documents Checklist";

    // Function to open the modal
    const handleApplyClick = (category: CategoryItem) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    return (
        <>
            {/* 1. Hero Section (Top Banner) */}
            <HeroSection
                title="Join the Geospatial Intelligence Movement"
                description="Become a member of GIFON and connect with a powerful network of professionals, institutions, and agencies shaping Nigeria’s geospatial future."
                // ctaText="Apply for Membership"
                // ctaLink="#apply" // Scrolls down to the form
                backgroundImages = {[
                "/bg/e.jpeg",
                "/bg/a.JPG",
                "/bg/b.JPG",
                "/bg/c.JPG",
                "/bg/d.JPG",
                "/ph.svg",
                ]}
            />
            <div id="why-join" className='pt-8 -z-10'></div>
            {/* 2. Membership Overview */}
            <section className="pt-16 py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Why Join GIFON?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        GIFON membership offers access to exclusive knowledge, networking, training, and strategic influence in the fast-growing field of geospatial intelligence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether you are a student, professional, academic institution, corporate body, or government agency, there is a place for you in GIFON.
                    </p>
                </div>
            </section>

            <div id="categories"></div>
            {/* 3. Membership Categories */}
            <section className="mx-auto px-6 py-12 bg-green-50 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">Membership Categories</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                    {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg p-6 shadow-lg bg-white flex flex-col items-center text-center justify-between"
                    >
                        {/* <div className="text-green-600 mb-4">{item.icon}</div> */}
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                        
                        {/* APPLY BUTTON */}
                        <button
                            onClick={() => handleApplyClick(item)}
                            className="w-full mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            Apply
                        </button>
                    </div>
                    ))}
                </div>
            </section>

            {/* 4. Membership Fees */}
            {/* <section id="fees" className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Affordable and Flexible Plans</h2>
                   
                </div>
            </section> */}
            
            <div id="benefits"></div>
            {/* 5. Membership Benefits Comparison */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
                <div className="inline-block mb-6 text-left">
                    <h2 className="text-green-600 text-2xl font-semibold">
                        Membership Benefits
                    </h2>
                    <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                </div>
                <div className="overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full text-left text-gray-700">
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

            <div id="testimonials"></div>
            {/* 6. Testimonials / Callout Section (Optional) */}
            <section className="py-16 px-4 bg-green-50">
                <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl italic text-gray-800">
                        “GIFON connects us to global geospatial networks while addressing Nigeria’s critical national infrastructure needs.”
                    </blockquote>
                    <p className="mt-4 text-lg font-semibold">- Dr AA Usman / Founding Member</p>
                </div>
            </section>
            
            <div id="apply"></div>
            {/* 7. & 8. Membership Application & Form */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">How to Apply</h2>
                    
                    <div className="">
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
                                    {/* 4. Change <a> to <button> and add onClick */}
                                    <button
                                        onClick={() => setIsDocModalOpen(true)}
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
            </section>
            
            <div id="contact"></div>
            {/* 9. Contact Section (Bottom Banner) */}
            <section className="py-16 px-4 bg-gray-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Have questions about joining GIFON?</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Contact our membership team at [membership@gifon.org] or call [phone number].
                    </p>
                    <Link
                        href="/contact" // Assuming you have a contact page
                        className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
            {/* MEMBERSHIP FORM MODAL */}
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
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        >
                        {/* Using text 'X' for simplicity. Replace with <FaTimes /> if using react-icons */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <h3 className="text-2xl font-semibold mb-6 text-left">Membership Form</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
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
                                {/* Hidden input to actually submit the category name with the form */}
                                <input type="hidden" name="category" value={selectedCategory.title} />
                            </div>

                            <div>
                                <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload ID/Supporting Document (for students/institutions)</label>
                                <input type="file" id="upload" name="upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                            </div>
                            
                            <button type="submit" className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {isDocModalOpen && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full overflow-hidden relative">
                  <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold">{docTitle}</h2>
                    <a
                      href={docFile}
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
                      typeof window !== "undefined" ? window.location.origin + docFile : ""
                    )}&embedded=true`}
                    className="w-full h-[70vh] border-0"
                    title={docTitle}
                  />

                  <div className="p-4 flex justify-end bg-gray-50 border-t">
                    <button
                      onClick={() => setIsDocModalOpen(false)}
                      className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
        </>
    );
}