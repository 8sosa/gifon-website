import BenefitSection from "@/components/BenefitSection";
import HeroSection from '@/components/HeroSection';

export default function MembershipPage() {
    return (
        <>
            <HeroSection
                title="The GIFON Community"
                description="Join our growing network of geospatial professionals and unlock exclusive benefits."
                backgroundImage="/bg/d.JPG"
            />
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6 text-primary">
                        Membership Benefits for New Members of GIFON
                    </h1>

                    <p className="mb-6 text-gray-700 leading-relaxed text-justify">
                        Becoming a member of the Geospatial Intelligence Foundation of Nigeria not only offers invaluable
                        professional and personal growth opportunities but also allows you to contribute to the development
                        of Nigeria’s geospatial intelligence landscape. Through the foundation, you will connect with
                        like-minded professionals, contribute to groundbreaking initiatives, and gain the skills, knowledge,
                        and network necessary to thrive in an ever-evolving industry.
                    </p>

                    <p className="mb-10 text-gray-700 leading-relaxed">
                        These benefits aim to provide members with access to not only technical resources but also career
                        growth opportunities, global networking, and the chance to make a real impact in their professional
                        and personal lives. By becoming a member, individuals and organizations can contribute to the broader
                        mission of advancing geospatial intelligence in Nigeria.
                    </p>
                </div>
            </section>

            <section id="why-join" className="py-16">
                <div className="max-w-5xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Why Join</h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        Joining GIFON connects you to a transformative movement in geospatial intelligence. 
                        You’ll gain access to training, resources, and networking opportunities that support 
                        your career growth while contributing to the advancement of Nigeria’s GeoINT industry. 
                        Members influence policy, drive innovation, and collaborate with professionals locally 
                        and globally to address pressing challenges in national development, security, and sustainability.
                    </p>
                </div>
            </section>

            <section id="categories" className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center mb-8 p-8">
                    <h2 className="text-3xl font-semibold mb-4">Membership Categories</h2>
                    <ul className="list-disc list-inside text-gray-700 text-justify">
                        <li>Individual Membership</li>
                        <li>Corporate Membership</li>
                        <li>Student Membership</li>
                        <li>Institutional Membership</li>
                    </ul>
                </div>
            </section>

            <section id="benefits" className="py-16">
                <div className="max-w-5xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-semibold mb-8">Membership Benefits</h2>

                    <div className="space-y-12 text-justify p-8">
                        <BenefitSection
                            title="1. Professional Development Opportunities"
                            points={[
                                "Exclusive training sessions, workshops, and webinars on GeoINT, GIS, remote sensing, and spatial data analysis.",
                                "Opportunities to earn certifications and credentials recognized by the industry.",
                                "Masterclasses with renowned GeoINT experts and thought leaders."
                            ]}
                        />

                        <BenefitSection
                            title="2. Networking and Collaborative Engagement"
                            points={[
                                "Invitation to members-only networking events, conferences, and meet-ups.",
                                "Access to online forums and dedicated digital platforms for professional networking.",
                                "Opportunities to collaborate with regional and international GeoINT professionals, NGOs, and agencies."
                            ]}
                        />

                        <BenefitSection
                            title="3. Access to Industry Resources"
                            points={[
                                "Free access to cutting-edge research papers, publications, and reports.",
                                "Exclusive access to geospatial datasets, maps, and data repositories.",
                                "Discounts on GeoINT tools, GIS software, and satellite data through partners."
                            ]}
                        />

                        <BenefitSection
                            title="4. Career Growth and Job Opportunities"
                            points={[
                                "Exclusive access to a job portal with high-quality job and internship listings.",
                                "Mentorship programs with senior professionals for career guidance.",
                                "Resume-building workshops, interview prep, and career coaching tailored for GeoINT."
                            ]}
                        />

                        <BenefitSection
                            title="5. Research & Innovation Support"
                            points={[
                                "Access to research grants, funding, and support for innovative GeoINT projects.",
                                "Opportunities to participate in collaborative research addressing real-world challenges.",
                                "Platforms to showcase your projects at GIFON-hosted events."
                            ]}
                        />

                        <BenefitSection
                            title="6. Policy Advocacy and Thought Leadership"
                            points={[
                                "Engage with policymakers to shape GeoINT integration in national development.",
                                "Publish articles and research in GIFON newsletters and reports.",
                                "Leadership training programs to prepare for senior roles in industry or academia."
                            ]}
                        />

                        <BenefitSection
                            title="7. Enhanced Recognition and Credibility"
                            points={[
                                "Professional recognition within the GeoINT community.",
                                "Spotlight features for member achievements and projects.",
                                "Exclusive GIFON membership badges for LinkedIn, CVs, and profiles."
                            ]}
                        />

                        <BenefitSection
                            title="8. Community Engagement and Social Impact"
                            points={[
                                "Volunteer opportunities using GeoINT for social good (e.g. disaster response, conservation).",
                                "Collaborate on social impact initiatives in education, healthcare, and sustainability.",
                                "Participate in programs focused on gender and youth empowerment in the geospatial sector."
                            ]}
                        />

                        <BenefitSection
                            title="9. Exclusive Access to Events and Conferences"
                            points={[
                                "VIP access to the Annual GIFON GeoINT Summit.",
                                "Discounted or free passes to international GeoINT conferences.",
                                "Participation in members-only webinars, online masterclasses, and e-learning."
                            ]}
                        />

                        <BenefitSection
                            title="10. Discounts and Perks"
                            points={[
                                "Discounts on admission fees to GIFON events, workshops, and conferences.",
                                "Special partnership deals with GeoINT software and hardware providers.",
                                "Reduced rates on travel and accommodations for GIFON events."
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section id="how-to-join" className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-semibold mb-4">How to Join</h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 text-justify p-8">
                        <li>Complete the online application form.</li>
                        <li>Submit required documents and payment.</li>
                        <li>Receive confirmation email with membership details.</li>
                    </ol>
                </div>
            </section>

            <section id="member-login" className="py-16">
                <div className="max-w-5xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Member Login</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Already a member? <a href="/login" className="text-primary underline">Log in here</a> to access
                        exclusive resources and member-only content.
                    </p>
                </div>
            </section>

            <div className="mt-16">
                <a
                    href="/membership.pdf"
                    className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
                >
                    Download Membership Application PDF
                </a>
            </div>
        </>
    );
}
