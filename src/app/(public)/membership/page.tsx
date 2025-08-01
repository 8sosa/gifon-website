import BenefitSection from "@/components/BenefitSection";
import HeroSection from '@/components/HeroSection';

export default function MembershipPage() {
    return (
        <>
            <HeroSection
                title="The GIFON Community"
                description=""
                backgroundImage="/ph.svg"
            />
            <main className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-6 text-primary">
                Membership Benefits for New Members of GIFON
                </h1>
                <p className="mb-6 text-gray-700 leading-relaxed">
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
        
                <div className="space-y-12">
                <BenefitSection
                    title="1. Professional Development Opportunities"
                    points={[
                    "Access to specialized training sessions, workshops, and webinars on the latest trends in GeoINT, GIS, remote sensing, and spatial data analysis.",
                    "Opportunities to earn certifications and credentials recognized by the industry.",
                    "Attend masterclasses with renowned GeoINT experts and thought leaders."
                    ]}
                />
        
                <BenefitSection
                    title="2. Networking and Collaborative Engagement"
                    points={[
                    "Invitation to members-only networking events including conferences, seminars, and roundtables.",
                    "Access to online platforms for discussion, job opportunities, and project sharing.",
                    "Opportunities for cross-border collaborations with GeoINT professionals and institutions."
                    ]}
                />
        
                <BenefitSection
                    title="3. Access to Industry Resources"
                    points={[
                    "Free access to research papers, reports, and publications on GeoINT and spatial data science.",
                    "Exclusive access to geospatial datasets, maps, and spatial data resources.",
                    "Special discounts on GeoINT software, GIS tools, and satellite data."
                    ]}
                />
        
                <BenefitSection
                    title="4. Career Growth and Job Opportunities"
                    points={[
                    "Exclusive access to a job portal listing jobs, internships, and fellowships.",
                    "Mentorship programs with senior professionals.",
                    "Resume workshops, interview prep, and career coaching in GeoINT."
                    ]}
                />
        
                <BenefitSection
                    title="5. Research & Innovation Support"
                    points={[
                    "Access to research grants and funding for innovative GeoINT projects.",
                    "Participation in multi-disciplinary research projects addressing real-world challenges.",
                    "Opportunities to showcase your projects at GIFON-hosted events."
                    ]}
                />
        
                <BenefitSection
                    title="6. Policy Advocacy and Thought Leadership"
                    points={[
                    "Engage with policymakers to integrate GeoINT into national frameworks.",
                    "Publish research and opinion pieces in GIFON reports and blogs.",
                    "Access to leadership development programs."
                    ]}
                />
        
                <BenefitSection
                    title="7. Enhanced Recognition and Credibility"
                    points={[
                    "Gain credibility within the GeoINT community.",
                    "Showcase your achievements through GIFON newsletters and events.",
                    "Display exclusive GIFON membership badges on professional profiles."
                    ]}
                />
        
                <BenefitSection
                    title="8. Community Engagement and Social Impact"
                    points={[
                    "Participate in volunteer projects for disaster response and community development.",
                    "Collaborate on initiatives in education, healthcare, and sustainable development.",
                    "Join empowerment programs for women and youth in the geospatial sector."
                    ]}
                />
        
                <BenefitSection
                    title="9. Exclusive Access to Events and Conferences"
                    points={[
                    "VIP access to the GIFON Annual GeoINT Summit.",
                    "Discounts or free passes to international GeoINT conferences.",
                    "Participation in exclusive webinars and online courses."
                    ]}
                />
        
                <BenefitSection
                    title="10. Discounts and Perks"
                    points={[
                    "Exclusive discounts on all GIFON events and workshops.",
                    "Special deals through partnerships with GeoINT tech providers.",
                    "Discounted travel and accommodation for GIFON events."
                    ]}
                />
                </div>
        
                <div className="mt-16">
                <a
                    href="/membership.pdf"
                    className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
                >
                    Download Membership Application PDF
                </a>
                </div>
            </main>
        </>
    );
  }
  