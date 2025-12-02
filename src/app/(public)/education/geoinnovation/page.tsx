import HeroSection from '@/components/HeroSection';

export default function GeoinnovationPage() {
  return (
    <>
      <HeroSection
        title="GIFON Y-GeoInnovation & Tech Incubation Programme (Y-GITI)"
        // description="“Innovating with Location. Incubating the Future.”"
        backgroundMedia={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full">
        {/* --- Overview Section --- */}
        <section id="overview" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <h2 className="text-3xl font-semibold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Y-GeoInnovation & Tech Incubation Programme (Y-GITI) is a
              signature initiative of the Geospatial Intelligence Foundation
              of Nigeria (<span className="cooper">GIFON</span>) aimed at nurturing young innovators,
              startups, and entrepreneurs who are building solutions at the
              intersection of geospatial intelligence, technology, and
              national development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This programme serves as a talent-to-enterprise pipeline,
              providing Nigerian youth with access to training, mentorship,
              incubation facilities, seed funding, and exposure to global
              innovation ecosystems.
            </p>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Programme Objectives
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Foster Youth Innovation:</strong> Cultivate creative,
                youth-led solutions leveraging geospatial technologies.
              </li>
              <li>
                <strong>Incubate Startups:</strong> Support the growth of
                early-stage enterprises solving national security and
                development challenges.
              </li>
              <li>
                <strong>Bridge Gaps:</strong> Connect academia, government,
                and industry through youth-driven innovation.
              </li>
              <li>
                <strong>Promote Digital Transformation:</strong> Accelerate
                adoption of AI, IoT, drones, big data, and geospatial
                platforms in Nigeria.
              </li>
              <li>
                <strong>Build Resilience:</strong> Apply innovative tools to
                strengthen Nigeria’s 13 critical infrastructure sectors.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Programme Structure Section --- */}
        <section id="structure" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Programme Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  1. Innovation Discovery
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Nationwide innovation challenges and hackathons focused on
                    geospatial intelligence.
                  </li>
                  <li>
                    Talent scouting in universities, tech hubs, and youth
                    communities.
                  </li>
                  <li>Call for proposals aligned with Nigeria’s priority sectors.</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  2. Pre-Incubation (Bootcamp)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>6–8 weeks intensive bootcamp for selected youth innovators.</li>
                  <li>
                    Training on geospatial tech, coding, design thinking, and
                    business models.
                  </li>
                  <li>Team formation and solution prototyping.</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  3. Incubation & Tech Acceleration
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>6–12-month incubation support for promising projects.</li>
                  <li>Access to labs and geospatial data resources.</li>
                  <li>Mentorship from <span className="cooper">GIFON</span> experts and industry leaders.</li>
                  <li>Seed funding and grants for prototype development.</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  4. Industry Linkages & Market Access
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Partnership with government agencies for pilot projects.</li>
                  <li>Collaboration with private sector partners for scaling.</li>
                  <li>Investor demo days and innovation showcases.</li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  5. Sustainability & Growth
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Business registration, IP protection, and
                    commercialization support.
                  </li>
                  <li>Scale-up support through <span className="cooper">GIFON</span>’s Industry Forum.</li>
                  <li>International exposure through GEOINT conferences.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Beneficiaries & Outcomes Section --- */}
        <section id="beneficiaries-outcomes" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Target Beneficiaries
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>Youth innovators (18–35 years).</li>
                <li>University students, graduates, and researchers.</li>
                <li>Early-stage startups in geospatial and emerging tech.</li>
                <li>
                  Entrepreneurs addressing Nigeria’s development and
                  security challenges.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Expected Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>Establishment of a pipeline of youth-led GEOINT startups.</li>
                <li>
                  Deployment of innovative solutions to Nigeria’s 13 critical
                  infrastructure sectors.
                </li>
                <li>
                  Strengthened youth contribution to national security,
                  resilience, and digital economy.
                </li>
                <li>Creation of jobs, enterprises, and intellectual property.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}