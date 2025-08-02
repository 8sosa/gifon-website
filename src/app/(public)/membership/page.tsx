import BenefitSection from "@/components/BenefitSection";
import HeroSection from '@/components/HeroSection';

export default function MembershipPage() {
    return (
        <>
            <HeroSection
                title="The GIFON Community"
                description="Join our growing network of geospatial professionals and unlock exclusive benefits."
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

                {/* --- Static Sections for Membership Page --- */}
                <section id="why-join" className="py-16">
                    <h2 className="text-3xl font-semibold mb-4">Why Join</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
                        vel scelerisque nisl consectetur et.
                    </p>
                </section>

                <section id="categories" className="py-16 bg-gray-50">
                    <h2 className="text-3xl font-semibold mb-4">Membership Categories</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Individual Membership</li>
                        <li>Corporate Membership</li>
                        <li>Student Membership</li>
                        <li>Institutional Membership</li>
                    </ul>
                </section>

                <section id="benefits" className="py-16">
                    <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </section>

                <section id="how-to-join" className="py-16 bg-gray-50">
                    <h2 className="text-3xl font-semibold mb-4">How to Join</h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        <li>Complete the online application form.</li>
                        <li>Submit required documents and payment.</li>
                        <li>Receive confirmation email with membership details.</li>
                    </ol>
                </section>

                <section id="member-login" className="py-16">
                    <h2 className="text-3xl font-semibold mb-4">Member Login</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Already a member? <a href="/login" className="text-primary underline">Log in here</a> to access
                        exclusive resources and member-only content.
                    </p>
                </section>
                {/* --- End Static Sections --- */}

                <div className="space-y-12">
                    <BenefitSection
                        title="1. Professional Development Opportunities"
                        points={[
                            "Access to specialized training sessions, workshops, and webinars on the latest trends in GeoINT, GIS, remote sensing, and spatial data analysis.",
                            "Opportunities to earn certifications and credentials recognized by the industry.",
                            "Attend masterclasses with renowned GeoINT experts and thought leaders."
                        ]}
                    />

                    {/* ... other BenefitSection entries remain unchanged ... */}
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
