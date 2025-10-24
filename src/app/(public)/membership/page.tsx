import HeroSection from '@/components/HeroSection';
import Link from "next/link";
// Import icons if you have them, e.g., from react-icons
// import { FaUserGraduate, FaUserTie, FaBuilding, FaGlobe, FaShieldAlt, FaAward } from 'react-icons/fa';

export default function MembershipPage() {
    return (
        <>
            {/* 1. Hero Section (Top Banner) */}
            <HeroSection
                title="Join the Geospatial Intelligence Movement"
                description="Become a member of GIFON and connect with a powerful network of professionals, institutions, and agencies shaping Nigeria’s geospatial future."
                ctaText="Apply for Membership"
                ctaLink="#apply" // Scrolls down to the form
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
                    <h2 className="text-3xl font-semibold mb-4">Why Become a member?</h2>
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
                <h2 className="text-3xl font-semibold mb-12 text-center">Choose Your Category</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                    {[
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
                    ].map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg p-6 shadow-lg bg-white flex flex-col items-center text-center justify-between"
                    >
                        {/* <div className="text-green-600 mb-4">{item.icon}</div> */}
                        <div>
                            <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
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
                        Membership Benefits Comparison
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
                    
                    <div className="grid md:grid-cols-2 gap-12 items-start">
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
                                    <span className="font-semibold">Submit and make payment:</span> Use our secure payment gateway to pay your dues.
                                </li>
                                <li className="text-lg">
                                    <span className="font-semibold">Receive your confirmation:</span> Get your digital membership ID and certificate via email.
                                </li>
                            </ol>
                        </div>
                        
                        {/* Form */}
                        <div className="p-8 bg-gray-50 shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Membership Form</h3>
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
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                    <select id="category" name="category" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                                        <option>Select a category</option>
                                        <option value="student">Student Membership</option>
                                        <option value="professional">Professional Membership</option>
                                        <option value="institutional">Institutional Membership</option>
                                        <option value="corporate">Corporate Membership</option>
                                        <option value="government">Government/Agency Membership</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload ID/Supporting Document (for students/institutions)</label>
                                    <input type="file" id="upload" name="upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                                </div>
                                {/* Payment method could be radio buttons or a dropdown */}
                                <button type="submit" className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                                    Apply Now
                                </button>
                            </form>
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
        </>
    );
}