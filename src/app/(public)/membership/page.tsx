import HeroSection from '@/components/HeroSection';

export default function MembershipPage() {
    return (
        <>
            <HeroSection
                title="The GIFON Community"
                description="Join our growing network of geospatial professionals and unlock exclusive benefits."
                backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
            />

            <main className="w-full">
                {/* --- Membership Page Sections --- */}

                <section id="why-join" className="py-16 px-4 bg-white">
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
                </section>
            </main>

        </>
    );
}
