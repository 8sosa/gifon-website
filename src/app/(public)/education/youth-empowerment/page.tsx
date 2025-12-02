import HeroSection from '@/components/HeroSection';

export default function yetaPage() {
  return (
    <>
      <HeroSection
        title="GIFON Youth Empowerment & Talent Acceleration Programme (YETAP)"
        description="“Empowering Youth. Accelerating Talent. Building Nigeria’s Geospatial Future.”"
        backgroundMedia={[
          "/media/ye.jpg",
        ]}
      />

      <main className="w-full">
        {/* --- Overview Section --- */}
        <section id="overview" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-left md:text-center">
              The Youth Empowerment & Talent Acceleration Programme (YETAP) is an
              initiative of the Geospatial Intelligence Foundation of Nigeria
              (<span className="cooper">GIFON</span>) to identify, train, and mentor the next generation of
              Nigerian innovators, analysts, and leaders in the field of
              geospatial intelligence (GEOINT) and its applications to national
              development and security. This flagship programme provides a
              structured pathway for Nigerian youth to acquire technical skills,
              career opportunities, and entrepreneurial support in geospatial
              intelligence, remote sensing, AI, data science, and related
              emerging technologies.
            </p>
          </div>
        </section>

        {/* --- Programme Goals Section --- */}
        <section id="goals" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Programme Goals
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed max-w-2xl mx-auto">
              <li>
                <strong>Empower Youth:</strong> Equip Nigerian youth with
                world-class skills in geospatial technologies and intelligence.
              </li>
              <li>
                <strong>Accelerate Talent:</strong> Identify and nurture
                high-potential talent through structured mentorship and
                innovation labs.
              </li>
              <li>
                <strong>Promote Innovation:</strong> Drive indigenous solutions
                to Nigeria’s security, infrastructure, and development
                challenges.
              </li>
              <li>
                <strong>Boost Employability:</strong> Connect trained youth to
                industry, government, and international job opportunities.
              </li>
              <li>
                <strong>Strengthen National Capacity:</strong> Build a pool of
                skilled professionals contributing to Nigeria’s critical
                infrastructure resilience and national security architecture.
              </li>
            </ol>
          </div>
        </section>

        {/* --- Programme Structure Section --- */}
        <section id="structure" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Programme Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Talent Discovery */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  1. Talent Discovery & Recruitment
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Annual nationwide call for applications.</li>
                  <li>
                    Outreach to universities, NYSC, innovation hubs, and local
                    communities.
                  </li>
                  <li>
                    Selection through aptitude tests, hackathons, and
                    problem-solving challenges.
                  </li>
                </ul>
              </div>

              {/* Card 2: Capacity Building */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  2. Capacity Building & Training
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Foundational Training:</strong> GIS, remote sensing,
                    mapping, spatial analytics.
                  </li>
                  <li>
                    <strong>Advanced Skills:</strong> AI & machine learning for
                    geospatial, drones, satellite systems, cyber-geo
                    intelligence, big data.
                  </li>
                  <li>
                    <strong>Soft Skills:</strong> Leadership, ethics,
                    entrepreneurship, project management.
                  </li>
                </ul>
              </div>

              {/* Card 3: Innovation Labs */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  3. Innovation & Acceleration Labs
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Geo-Innovation Lab:</strong> Teams work on real-world
                    projects in agriculture, security, health, disaster
                    management, and smart cities.
                  </li>
                  <li>
                    <strong>Start-Up Incubation:</strong> Support for
                    geospatial-driven startups with seed funding, mentorship,
                    and partnerships.
                  </li>
                  <li>
                    <strong>Hackathons & Challenges:</strong> Annual
                    competitions to drive problem-solving using geospatial data.
                  </li>
                </ul>
              </div>

              {/* Card 4: Mentorship */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  4. Mentorship & Industry Linkages
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Pair youth with experts from industry, academia, and
                    government.
                  </li>
                  <li>Internship placements with partner organizations.</li>
                  <li>
                    Exchange programs and exposure to global GEOINT forums
                    (e.g., UN-GGIM, USGIF, DGI London).
                  </li>
                </ul>
              </div>

              {/* Card 5: Employment Pathways */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 md:col-span-2 lg:col-span-1">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  5. Employment & Entrepreneurship Pathways
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Certification to increase employability.</li>
                  <li>
                    Access to job opportunities through <span className="cooper">GIFON</span>’s Industry &
                    Private Sector Forum.
                  </li>
                  <li>
                    Support to launch startups addressing Nigeria’s development
                    challenges.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Audience & Outcomes Section --- */}
        <section id="audience-outcomes" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Target Audience */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Target Audience</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>University students and graduates (18–30 years).</li>
                <li>
                  Young professionals in technology, geography, and security.
                </li>
                <li>
                  Innovators, coders, and entrepreneurs with interest in GEOINT.
                </li>
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Expected Outcomes</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Skilled Youth Workforce:</strong> Hundreds of young
                  Nigerians trained annually in GEOINT.
                </li>
                <li>
                  <strong>Job Creation:</strong> Employment pathways in
                  government, private sector, and startups.
                </li>
                <li>
                  <strong>Indigenous Solutions:</strong> Homegrown technologies
                  addressing Nigeria’s 13 critical infrastructure sectors.
                </li>
                <li>
                  <strong>Global Exposure:</strong> Nigerian youth participating
                  in international GEOINT ecosystems.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}