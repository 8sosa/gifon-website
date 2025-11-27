import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
// Import icons if you have them, e.g., from react-icons
// import { FaNewspaper, FaShieldAlt, FaRegLightbulb, FaUserGraduate, FaBullhorn, FaGlobeAfrica } from 'react-icons/fa';

export default function PublicationsPage() {
    return (
        <>
            {/* 1. Hero Section (Top Banner) */}
            <HeroSection
                title="Eyes on Location – The GeoINSIGHT Bulletin"
                description="Stay informed with GIFON&apos;s flagship publication, balancing deep insights on policy and technology with engaging updates from our community."
                ctaText="Read the Latest Issue"
                ctaLink="#latest-issue" // Scrolls down to the issues
                backgroundMedia = {[
                "/bg/e.jpeg",
                "/bg/a.JPG",
                "/bg/b.JPG",
                "/bg/c.JPG",
                "/bg/d.JPG",
                "/ph.svg",
                ]}
            />
            <div id="about" className='pt-8 -z-10'></div>
            {/* 2. About the Newsletter Section */}
            <section className="pt-16 py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">About The GeoINSIGHT Bulletin</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        &quot;The GeoINSIGHT Bulletin&quot; is GIFON&apos;s premier newsletter, providing members and partners with critical analysis, updates, and spotlights on the world of geospatial intelligence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our design balances **deep insights** (feature articles, policy) with **community engagement** (youth corner, updates, global briefs), ensuring a consistent, professional, and valuable read in every edition.
                    </p>
                </div>
            </section>

            <div id="structure"></div>
            {/* 3. Newsletter Structure (Categories) */}
            <section className="mx-auto px-6 py-12 bg-green-50 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-12 text-center">What&apos;s Inside Each Edition?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                    {[
                    {
                        title: "Feature Article (Full Width)",
                        desc: "A 2-3 page deep-dive linked to the edition's theme, featuring high-resolution images, maps, or infographics.",
                        // icon: <FaNewspaper size={40} />
                    },
                    {
                        title: "Policy & Security Insight",
                        desc: "A 600-800 word thought-leadership piece on national security, resilience, or critical infrastructure.",
                        // icon: <FaShieldAlt size={40} />
                    },
                    {
                        title: "Innovation & Technology Spotlight",
                        desc: "A 500-700 word focus on new tools, research, tech trends, or global innovations in GEOINT.",
                        // icon: <FaRegLightbulb size={40} />
                    },
                    {
                        title: "Youth & Professional Corner",
                        desc: "Interviews, short essays, and features from young professionals or students, highlighting mentorship and talent.",
                        // icon: <FaUserGraduate size={40} />
                    },
                    {
                        title: "GIFON Updates & Announcements",
                        desc: "News on membership growth, upcoming events, training, workshops, and calls for papers or grants.",
                        // icon: <FaBullhorn size={40} />
                    },
                    {
                        title: "Back Page: GeoBriefs & More",
                        desc: "Short news stories on global/African GEOINT, a closing note from leadership, and key contact/membership info.",
                        // icon: <FaGlobeAfrica size={40} />
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

            <div id="latest-issue"></div>
            {/* 4. Past Issues (Archive) */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-12 text-center">Read Our Past Issues</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {/* Example Issues (Repeat this block for each issue) */}
                        <div className="flex flex-col items-center">
                            <Link href="#" className="block mb-2 shadow-lg hover:shadow-xl transition-shadow w-full">
                                {/* Use a relative container for Next/Image with fill */}
                                <div className="relative w-full aspect-[3/4]">
                                    <Image 
                                        src="/ph.svg" 
                                        alt="Cover of Vol. 1, No. 1" 
                                        fill={true} 
                                        className="rounded object-cover" 
                                    />
                                </div>
                            </Link>
                            <h3 className="font-semibold text-lg">Vol. 1, No. 1</h3>
                            <p className="text-sm text-gray-600">August 2025</p>
                            <Link href="#" className="text-sm text-green-600 hover:underline">
                                Read Now (PDF)
                            </Link>
                        </div>
                        {/* Add more issues as needed */}
                         <div className="flex flex-col items-center">
                            <Link href="#" className="block mb-2 shadow-lg hover:shadow-xl transition-shadow w-full">
                                <div className="relative w-full aspect-[3/4]">
                                    <Image 
                                        src="/ph.svg" 
                                        alt="Cover of Vol. 1, No. 2" 
                                        fill={true} 
                                        className="rounded object-cover" 
                                    />
                                </div>
                            </Link>
                            <h3 className="font-semibold text-lg">Vol. 1, No. 2</h3>
                            <p className="text-sm text-gray-600">November 2025</p>
                            <Link href="#" className="text-sm text-green-600 hover:underline">
                                Read Now (PDF)
                            </Link>
                        </div>
                        {/* ... */}
                    </div>
                </div>
            </section>
            
            <div id="contribute"></div>
            {/* 5. Call to Contribute */}
            <section className="py-16 px-4 bg-green-50">
                <div className="max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-semibold mb-4">Contribute to The GeoINSIGHT</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Are you a professional, researcher, or student with a story to tell? We welcome submissions for our upcoming editions. Share your insights, research, or case studies with the GEOINT community.
                    </p>
                    <Link
                        href="/contact" // Or a specific 'mailto:' link
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                        Submit Your Article
                    </Link>
                </div>
            </section>
            
            <div id="contact"></div>
            {/* 6. Contact Section (Bottom Banner) */}
            <section className="py-16 px-4 bg-gray-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Questions about the Newsletter?</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Contact our editorial team at [editor@gifon.org] or sign up to receive the next edition.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Contact Editorial Team
                        </Link>
                         <Link
                            href="/membership#apply" // Link to membership page sign-up
                            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            Subscribe Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}