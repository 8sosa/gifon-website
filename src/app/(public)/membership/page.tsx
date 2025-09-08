import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import Image from 'next/image';


export default function MembershipPage() {
    return (
        <>
            <HeroSection
                title="Join the Geospatial Professional Network"
                // description=""
                backgroundImages = {[
                "/bg/e.jpeg",
                "/bg/a.JPG",
                "/bg/b.JPG",
                "/bg/c.JPG",
                "/bg/d.JPG",
                "/ph.svg",
                ]}
            />
            {/* <main className="max-w-5xl mx-auto px-6 py-12 space-y-16"> */}
            {/* Membership Categories */}
            <section className="mx-auto px-6 py-12 bg-green-50 flex flex-col items-center">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                    {[
                    {
                        title: "Individual - Professional",
                        desc: "Committed to the next generation of GIS leaders through scholarships and opportunities. Discounted membership for professionals 35 years and younger.",
                    },
                    {
                        title: "Individual - Young Professional",
                        desc: "Full-time students (9+ graduate credits or 12+ undergraduate credits) qualify for discounted membership.",
                    },
                    {
                        title: "Individual - Student",
                        desc: "Government agency membership allows multiple individuals to participate with cost savings.",
                    },
                    {
                        title: "Organization - Government Agency",
                        desc: "Raise your company’s visibility, exchange ideas, and build relationships with industry leaders.",
                    },
                    {
                        title: "Organization - Partner",
                        desc: "Institutional membership includes benefits for faculty and students.",
                    },
                    {
                        title: "Organization - Educational Institution",
                        desc: "Outreach to community colleges and universities to support future GIS professionals.",
                    },
                    ].map((item, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg p-6 shadow-lg bg-white flex flex-col justify-between"
                    >
                        <div>
                        <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                        <p className="text-gray-600">{item.desc}</p>
                        </div>
                        <Link
                        href="#"
                        className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                        >
                        Learn More →
                        </Link>
                    </div>
                    ))}
                </div>
            </section>

            {/* Benefits of Membership */}
            <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
                <div className="inline-block mb-6 text-left">
                    <h2 className="text-green-600 text-2xl font-semibold">
                        Benefits of Membership
                    </h2>
                    {/* Short underline */}
                    <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                </div>
                <p>Connect and gain access to a supportive community of GIS professionals spanning all career stages. Whether you&apos;re looking to advance your career or enhance your organization&apos;s GIS capabilities, GPN provides a welcoming and supportive environment for growth and collaboration.</p>
                <span className="text-gray-600 underline-offset-8">Download the GPN Brochure</span>
                <div className='mt-14'/>
                <div className="inline-block mb-6 text-left">
                    <h2 className="text-green-600 text-2xl font-semibold">
                    Why Professional Involvement Matters: Elevate Your Career with GPN
                    </h2>
                    {/* Short underline */}
                    <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                </div>
                <div className='bg-green-300 text-black flex flex-col items-center p-16'>
                    <Image
                        src="/logo.png" // replace with your file
                        alt="GIS Corps GPN"
                        width={150}
                        height={80}
                    />
                    <h1 className="text-3xl font-bold mt-4 text-center">
                        Join a Community That Empowers You to Make a Difference
                    </h1>
                    <p>
                        By becoming a member of GPN, you join a vibrant community of GIS professionals who are passionate about leveraging geospatial technology for positive change. Our members actively contribute to humanitarian efforts, environmental conservation, disaster response, and more. Through collaboration and shared expertise, GPN members amplify their impact and drive meaningful outcomes in communities worldwide.
                    </p>
                    <h4 className="text-xl font-semibold mt-4 text-center">
                        Together, We Can Create a Better World Through GIS
                    </h4>
                    <p>
                        Membership in GPN provides access to a wealth of resources, including exclusive webinars, workshops, and networking events. Members also benefit from professional development opportunities, mentorship programs, and access to cutting-edge GIS tools and technologies. Whether you&apos;re a seasoned professional or just starting your career, GPN offers the support and resources you need to succeed in the dynamic field of geospatial technology.
                    </p>
                </div>

                <div className="inline-block mb-6 text-left items-start">
                    <h2 className="text-green-600 text-2xl font-semibold">
                        Connect and expand your horizons! Consider individual or organization membership options. Join today!
                    </h2>
                    {/* Short underline */}
                    <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                </div>


                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                {[
                    "Professional Education & Training",
                    "Access to Resources",
                    "Meaningful Connections",
                    "Mentoring",
                    "Professional Development & Contribution",
                    "Visibility (for You & Your Organization)",
                    "New Perspectives",
                ].map((benefit, idx) => (
                    <div
                    key={idx}
                    className=" rounded-lg p-4 bg-gray-50 hover:bg-gray-100 flex flex-row items-center space-x-4 w-full"
                    >
                        <Image
                            src="/ph.svg" // replace with your file
                            alt="GIS Corps GPN"
                            width={150}
                            height={80}
                        />
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-600"> {benefit.split(" ")[0]} </h3>
                            <p>
                                random text about the benefit to fill up space and make it look like a real paragraph. This is just placeholder text.
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center space-y-6 flex flex-row bg-green-100 p-16 px-80">
                <div>
                    <Image
                        src="/ph.svg" // replace with your file
                        alt="GIS Corps GPN"
                        width={300}
                        height={100}
                    />
                </div>
                <div className='flex flex-col items-start px-4'>
                    <div className="inline-block mb-6 text-left">
                        <h2 className="text-green-600 text-2xl font-semibold">
                            Ready to Join?
                        </h2>
                        {/* Short underline */}
                        <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-left mb-4">
                    Join as an individual or secure an organizational membership. Membership dues
                    are pro-rated for the first year based on your join date.
                    </p>
                    <Link
                    href="#"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
                    >
                    Apply Today
                    </Link>
                </div>
            </section>
            {/* </main> */}
            
            
            {/* <main className="w-full"> */}
                {/* --- Membership Page Sections --- */}

                {/* <section id="why-join" className="py-16 px-4 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Why Join GIFON</h2>
                        <p className="text-gray-700 leading-relaxed">
                        Joining GIFON means becoming part of a global community committed to advancing geospatial intelligence 
                        (GEOINT) and geospatial security. As threats evolve and global challenges become increasingly complex, 
                        collaboration across disciplines has never been more vital. Membership provides you with access to a 
                        trusted network of professionals, researchers, and innovators who are shaping the future of GEOINT. 
                        By joining, you not only gain exclusive access to resources and events but also demonstrate your 
                        commitment to supporting the responsible use of geospatial technology for security, humanitarian response, 
                        and sustainable development. It is more than membership—it is a partnership in advancing global resilience.
                        </p>
                    </div>
                </section>

                <section id="benefits" className="py-16 px-4 bg-gray-50">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Membership Benefits</h2>
                        <p className="text-gray-700 leading-relaxed">
                        GIFON members enjoy a wide range of benefits designed to enhance their knowledge, visibility, and influence 
                        in the field of geospatial intelligence. Members gain access to exclusive research publications, 
                        policy briefs, and cutting-edge technical insights that are not publicly available. Networking opportunities 
                        at international conferences, workshops, and forums allow members to engage with leading experts and 
                        decision-makers. Additionally, membership provides discounts on event participation, access to training 
                        programs, career development opportunities, and recognition within the global GEOINT community. These 
                        benefits equip members to remain at the forefront of technological innovation and policy development, 
                        while also contributing meaningfully to collective security and resilience efforts.
                        </p>
                    </div>
                </section>

                <section id="talent" className="py-16 px-4 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Talent Development</h2>
                        <p className="text-gray-700 leading-relaxed">
                        At GIFON, we believe that nurturing talent is essential for the growth and sustainability of the geospatial 
                        intelligence sector. Our talent development initiatives focus on equipping students, early-career professionals, 
                        and mid-career practitioners with the skills needed to thrive in the rapidly evolving GEOINT landscape. 
                        From mentorship programs to specialized workshops and scholarships, we aim to bridge the gap between academic 
                        learning and real-world application. Members also gain access to internship and fellowship opportunities, 
                        ensuring that new talent is continuously cultivated and integrated into critical projects. By fostering talent, 
                        GIFON ensures that the global GEOINT community remains innovative, resilient, and prepared for future challenges.
                        </p>
                    </div>
                </section>

                <section id="categories" className="py-16 px-4 bg-gray-50">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Membership Categories</h2>
                        <p className="text-gray-700 leading-relaxed">
                        We offer a diverse range of membership categories to ensure inclusivity and representation across all 
                        sectors of the geospatial intelligence community. Individual memberships are available for professionals, 
                        researchers, and students seeking personal engagement. Corporate memberships allow organizations to 
                        showcase their leadership in GEOINT innovation while benefiting from strategic collaborations and 
                        visibility. Institutional memberships are tailored for universities, research centers, and government 
                        agencies, ensuring knowledge sharing and capacity building at scale. By offering multiple categories, 
                        GIFON provides pathways for every stakeholder—whether individual or organizational—to play an active role 
                        in advancing geospatial intelligence and enhancing global security.
                        </p>
                    </div>
                </section>

                <section id="portal" className="py-16 px-4 bg-white">
                    <div className="max-w-5xl mx-auto flex flex-col items-center">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Membership Portal (Apply & Renew)</h2>
                        <p className="text-gray-700 leading-relaxed">
                        Our membership portal is designed to make the process of applying, managing, and renewing your membership 
                        simple and efficient. Prospective members can submit applications online, track their status, and explore 
                        available categories that best suit their needs. Current members can renew their subscriptions, update 
                        personal or organizational profiles, and access member-only resources in one secure location. The portal 
                        also features exclusive content, event registration, and networking opportunities, enabling members to 
                        maximize the value of their membership. With a streamlined digital experience, staying connected to GIFON 
                        and the global GEOINT community has never been easier.
                        </p>
                        <a href="/login" className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"> login to the portal</a>
                    </div>
                </section>

                <section id="opportunities" className="py-16 px-4 bg-gray-50">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Volunteer Opportunities</h2>
                        <p className="text-gray-700 leading-relaxed">
                        Volunteering with GIFON offers members the chance to actively contribute to the advancement of geospatial 
                        intelligence while building leadership skills and professional networks. Opportunities include serving on 
                        committees, mentoring students and young professionals, assisting with event planning, or contributing 
                        expertise to working groups on pressing GEOINT challenges. Volunteers play a critical role in driving 
                        initiatives forward, from supporting humanitarian mapping projects to shaping policy recommendations. 
                        By volunteering, members not only give back to the community but also enhance their own professional 
                        development and visibility. Participation fosters collaboration, strengthens networks, and helps ensure 
                        that the global GEOINT community remains vibrant, inclusive, and forward-looking.
                        </p>
                    </div>
                </section> */}
            {/* </main> */}
        </>
    );
}
