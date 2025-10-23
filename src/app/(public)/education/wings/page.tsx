import HeroSection from '@/components/HeroSection';

export default function WomenInGeointPage() {
  return (
    <>
      <HeroSection
        title="GIFON Women in GEOINT Forum (GI-NGW)"
        // description="Empowering women in the field of geospatial intelligence (GeoINT) through collaboration, professional development, mentorship, and advocacy."
        backgroundImages={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full">
        {/* --- Introduction Section --- */}
        <section id="introduction" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Introduction
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Geospatial Intelligence Foundation of Nigeria Women in
                GeoINT (GI-NGW) is a forum dedicated to empowering women in the
                field of geospatial and Geospatial intelligence (GeoINT) by
                providing a platform for collaboration, professional
                development, mentorship, and advocacy.
              </p>
              <p>
                The foundation seeks to address the gender gap in the
                geospatial sector in Nigeria and promote the critical role of
                women in shaping the future of geospatial technologies,
                innovation, and applications in Nigeria and globally.
              </p>
              <p>
                The Geospatial Intelligence Foundation of Nigeria Women in
                GeoINT is committed to advancing the role of women in the
                geospatial intelligence sector through education, networking,
                advocacy, and mentorship. By working together, we can create a
                more inclusive, innovative, and sustainable geospatial
                ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* --- Vision & Mission Section --- */}
        <section id="vision-mission" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To create an inclusive and collaborative environment where
                women in geospatial intelligence thrive, drive technological
                innovation, and contribute meaningfully to national and global
                development through GeoINT.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The mission of the GI-NGW is to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Promote gender equity and inclusion within the geospatial
                  intelligence sector.
                </li>
                <li>
                  Support women professionals in GeoINT through education,
                  networking, and career advancement opportunities.
                </li>
                <li>
                  Build a robust community of women in geospatial
                  intelligence to share knowledge and resources.
                </li>
                <li>
                  Advocate for policies and initiatives that empower women in
                  the field of geospatial intelligence in Nigeria.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Core Values Section --- */}
        <section id="core-values" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Core Values
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Empowerment:</strong> Fostering professional growth and
                personal development for women in GeoINT.
              </li>
              <li>
                <strong>Collaboration:</strong> Encouraging cooperation and
                partnership among women in the geospatial sector.
              </li>
              <li>
                <strong>Innovation:</strong> Supporting the use of cutting-edge
                technology and innovative solutions to address challenges in
                the GeoINT sector.
              </li>
              <li>
                <strong>Integrity:</strong> Upholding ethical standards and
                promoting transparency in all activities.
              </li>
              <li>
                <strong>Inclusivity:</strong> Creating a welcoming space for
                women of all backgrounds and experiences in the geospatial
                field.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Objectives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              The GI-NGW will focus on the following key objectives:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Professional Development:</strong> Organize training
                programs, workshops, seminars, and webinars to build
                technical, leadership, and soft skills.
              </li>
              <li>
                <strong>Networking and Mentorship:</strong> Facilitate
                opportunities for networking and mentorship through events,
                conferences, and peer-to-peer engagement.
              </li>
              <li>
                <strong>Advocacy:</strong> Advocate for policies that ensure
                greater representation of women in the GeoINT sector, both
                within Nigeria and internationally.
              </li>
              <li>
                <strong>Research and Innovation:</strong> Promote research in
                geospatial intelligence and support initiatives that foster
                innovation led by women.
              </li>
              <li>
                <strong>Public Awareness and Engagement:</strong> Raise
                awareness about the importance of women’s contributions to the
                geospatial intelligence field through media campaigns,
                publications, and public events.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Membership Section --- */}
        <section id="membership" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Membership
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                <p>
                  Membership is open to women who are actively working in or
                  are passionate about geospatial intelligence (GeoINT) at any
                  stage of their careers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Types of Membership
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Full Members:</strong> Women professionals in
                    GeoINT who meet the criteria for participation and have
                    paid membership fees (if applicable).
                  </li>
                  <li>
                    <strong>Associate Members:</strong> Women students or
                    early-career professionals in GeoINT who wish to
                    participate and learn from the foundation’s activities.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Membership Benefits
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Access to training and professional development resources.</li>
                  <li>
                    Networking opportunities with industry leaders and
                    experts.
                  </li>
                  <li>Mentorship programs.</li>
                  <li>
                    Priority access to foundation-led conferences, workshops,
                    and events.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Governance Section --- */}
        <section id="governance" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Governance and Leadership
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The GI-NGW will be governed by the Board of Directors of GIFON,
                supported by the management team of GIFON. The governance
                structure is designed to ensure transparency, inclusivity, and
                accountability.
              </p>
              <p>
                The Board of Directors of GIFON will be responsible for
                overseeing the foundation&apos;s strategic direction, ensuring
                adherence to its mission, and approving key initiatives.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 pt-4">
                <li>
                  <strong>Team Leader:</strong> Provides overall leadership and
                  direction for the (GI-NGW) Forum.
                </li>
                <li>
                  <strong>Deputy Team Leader:</strong> Supports the Chairperson
                  in governance and leadership duties.
                </li>
                <li>
                  <strong>Secretary:</strong> Responsible for all
                  administrative duties, including communications and
                  record-keeping.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Code of Conduct Section --- */}
        <section id="code-of-conduct" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Code of Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              All members of the GI-NGW are expected to adhere to the following
              code of conduct:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Professionalism:</strong> Maintain a high level of
                professionalism in all activities related to the foundation.
              </li>
              <li>
                <strong>Respect and Inclusivity:</strong> Treat all members
                and stakeholders with respect, ensuring that the foundation
                remains a welcoming space for all women, regardless of
                background or experience.
              </li>
              <li>
                <strong>Ethical Practice:</strong> Uphold ethical standards
                and integrity in the execution of all projects and
                engagements.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Activities Section --- */}
        <section id="activities" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Activities and Programs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              GI-NGW will host a range of activities and programs that align
              with the mission and objectives of GIFON. These include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Annual GeoINT workshop:</strong> A flagship event that
                brings together women professionals, thought leaders, and
                academics to discuss trends, challenges, and innovations in
                GeoINT.
              </li>
              <li>
                <strong>Training:</strong> Periodic educational sessions to
                enhance the technical and leadership skills of members.
              </li>
              <li>
                <strong>Networking Events:</strong> Social and professional
                events that provide opportunities for women to connect and
                collaborate.
              </li>
              <li>
                <strong>Mentorship Programs:</strong> Pairing experienced
                professionals with younger members to support their career
                development.
              </li>
              <li>
                <strong>Advocacy Campaigns:</strong> Public-facing campaigns
                that highlight the importance of women in the geospatial
                intelligence field and advocate for policies supporting their
                involvement.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Funding Section --- */}
        <section id="funding" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Funding and Financials
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              The GI-NGW Forum will be funded through:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Membership Fees:</strong> Membership dues may be
                established to support the foundation’s programs and
                activities.
              </li>
              <li>
                <strong>Donations and Sponsorships:</strong> The foundation
                will actively seek sponsorships and donations from businesses,
                individuals, and government agencies that support the mission
                of empowering women in GeoINT.
              </li>
              <li>
                <strong>Grants:</strong> The foundation may apply for grants
                from local and international organizations that fund
                initiatives aimed at promoting women’s empowerment,
                innovation, and technological advancement.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6 text-center">
              All financial transactions will be carried out transparently,
              with regular reports provided to members and the Director of
      
              Finance of the foundation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}