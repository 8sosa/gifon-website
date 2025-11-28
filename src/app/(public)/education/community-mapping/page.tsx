import HeroSection from '@/components/HeroSection';

export default function CommunityMappingPage() {
  return (
    <>
      <HeroSection
        title="Community Mapping for Development (CMD) Programme"
        // description="“Mapping Communities. Driving Development. Empowering People.”"
        backgroundMedia={[
          "/media/COMMUNITY MAPPING FOR DEVELOPMENT.jpg"
        ]}
      />

      <main className="w-full">
        {/* --- Overview Section --- */}
        <section id="overview" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <h2 className="text-3xl font-semibold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Community Mapping for Development (CMD) Programme is a
              grassroots initiative of the Geospatial Intelligence Foundation
              of Nigeria (GIFON) designed to empower communities with
              geospatial tools, data, and participatory mapping to drive local
              development, resilience, and inclusive planning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By placing communities at the center of geospatial
              intelligence, CMD ensures that data-driven decision-making
              reaches the last mile, supporting social services,
              infrastructure, disaster risk reduction, and sustainable
              livelihoods.
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
                <strong>Empower Communities:</strong> Enable local
                stakeholders to use mapping and geospatial data for
                self-driven development.
              </li>
              <li>
                <strong>Bridge Data Gaps:</strong> Collect and integrate
                hyperlocal data that supports evidence-based decision-making.
              </li>
              <li>
                <strong>Support Local Governance:</strong> Strengthen local
                governments with tools for planning, monitoring, and service
                delivery.
              </li>
              <li>
                <strong>Promote Inclusion:</strong> Ensure marginalized groups
                (women, youth, rural dwellers) are part of the data
                ecosystem.
              </li>
              <li>
                <strong>Contribute to National Development Goals:</strong> Align
                community-level mapping with Nigeria’s national priorities and
                SDGs.
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
                  1. Community Engagement & Awareness
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Sensitization workshops with traditional leaders, local
                    governments, and community groups.
                  </li>
                  <li>
                    Awareness campaigns on the importance of geospatial data
                    for local development.
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  2. Participatory Mapping Training
                </h3>
                <p className="text-gray-700 mb-2">
                  Training community youth and volunteers in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Basic GIS and mapping tools (e.g., OpenStreetMap, QGIS,
                    GPS).
                  </li>
                  <li>Data collection using mobile apps and drones.</li>
                  <li>Ethics of community data ownership and use.</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  3. Data Collection & Mapping
                </h3>
                <p className="text-gray-700 mb-2">
                  Community-led mapping of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Schools, clinics, water points, and roads.</li>
                  <li>
                    Farmland, markets, disaster-prone areas, and natural
                    resources.
                  </li>
                  <li>
                    Integration of community data into GIFON’s National
                    Geospatial Hub.
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  4. Data to Action (Decision-Making)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use mapped data to influence local government planning.</li>
                  <li>
                    Enable NGOs and development partners to deploy targeted
                    interventions.
                  </li>
                  <li>
                    Create dashboards for community leaders to monitor
                    changes and progress.
                  </li>
                </ul>
              </div>

              {/* Card 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  5. Sustainability & Scale-Up
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Establish community-based geospatial clubs.</li>
                  <li>
                    Link trained youth to GIFON’s Certification Programmes and
                    career pathways.
                  </li>
                  <li>Scale successful models to other communities.</li>
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
                <li>Rural and peri-urban communities.</li>
                <li>Youth and women groups.</li>
                <li>Local governments, civil society, and NGOs.</li>
                <li>
                  Development agencies working in agriculture, health, water,
                  and disaster management.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Expected Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Digitally mapped communities with updated, reliable local
                  data.
                </li>
                <li>
                  Empowered citizens actively engaged in shaping development
                  priorities.
                </li>
                <li>
                  Improved planning and service delivery at community and
                  local government levels.
                </li>
                <li>
                  Strengthened resilience against disasters and climate
                  change impacts.
                </li>
                <li>
                  Integration of grassroots data into Nigeria’s national
                  geospatial ecosystem.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}