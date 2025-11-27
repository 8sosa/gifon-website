import HeroSection from '@/components/HeroSection';

export default function OpenDataResearchPage() {
  return (
    <>
      <HeroSection
        title="GIFON Open Data & Research Programme (ODRP)"
        // description="“Open Data. Open Research. Smarter Nigeria.”"
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
              The Open Data & Research Programme (ODRP) is a flagship
              initiative of the Geospatial Intelligence Foundation of Nigeria
              (GIFON) aimed at promoting data accessibility, research
              collaboration, and evidence-based policy development in
              Nigeria’s geospatial intelligence ecosystem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The programme seeks to make geospatial data openly available,
              ethically managed, and widely used for national development,
              security, innovation, and academic advancement.
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
                <strong>Promote Open Access:</strong> Establish an open
                geospatial data platform for Nigeria for academia,
                government, and innovators.
              </li>
              <li>
                <strong>Support Research & Innovation:</strong> Foster
                cutting-edge research in GEOINT, remote sensing, and emerging
                technologies.
              </li>
              <li>
                <strong>Bridge Knowledge Gaps:</strong> Address critical data
                and research deficiencies across Nigeria’s 13 critical
                infrastructure sectors.
              </li>
              <li>
                <strong>Encourage Collaboration:</strong> Connect
                researchers, policymakers, private sector, and international
                partners.
              </li>
              <li>
                <strong>Influence Policy:</strong> Provide data-driven insights
                for strategic national planning and security.
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
                  1. Open Data Portal Development
                </h3>
                <p className="text-gray-700 mb-2">
                  Build a secure online GIFON Open Data Hub with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Satellite imagery archives</li>
                  <li>GIS layers (land use, transport, health, etc.)</li>
                  <li>Datasets on disaster risk, environment, and demographics</li>
                  <li>Tiered access model (Open, Restricted, Researcher).</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  2. Research Fellowship & Grants
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Annual GIFON Research Fellowship for postgraduate and
                    doctoral students.
                  </li>
                  <li>
                    Seed grants for applied research projects addressing
                    national priorities.
                  </li>
                  <li>
                    Joint research projects with Nigerian universities and
                    international bodies.
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  3. Publications & Knowledge Sharing
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Annual State of Nigeria’s Geospatial Intelligence Report.</li>
                  <li>
                    Peer-reviewed GIFON Journal – Eyes on Location: The
                    Journal of GeoINSIGHT.
                  </li>
                  <li>
                    Working papers, policy briefs, and case studies for
                    government and industry.
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  4. Capacity Building & Training
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Workshops on open data ethics, standards, and management.</li>
                  <li>
                    Training for researchers on geospatial methods, analytics,
                    and visualization.
                  </li>
                  <li>Data literacy programs for policymakers and journalists.</li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  5. Collaborations & Networks
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Partner with universities, think tanks, NGOs, and
                    international organizations.
                  </li>
                  <li>
                    Establish a GIFON Research Network connecting Nigerian and
                    global scholars.
                  </li>
                  <li>
                    Contribute to international data-sharing platforms
                    (UN-GGIM, GEO, etc.).
                  </li>
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
                <li>Academic researchers and students.</li>
                <li>Policymakers and government agencies.</li>
                <li>Tech innovators, startups, and developers.</li>
                <li>Civil society organizations and media.</li>
                <li>International research partners.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Expected Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Creation of Nigeria’s largest open geospatial data
                  repository.
                </li>
                <li>
                  Strengthened evidence-based decision-making at local, state,
                  and federal levels.
                </li>
                <li>Enhanced innovation through access to reliable datasets.</li>
                <li>
                  Increased academic contributions to global geospatial
                  intelligence knowledge.
                </li>
                <li>
                  A sustainable pipeline of research outputs supporting
                  national security and development.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}