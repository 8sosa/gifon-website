import HeroSection from '@/components/HeroSection';

export default function GeospatialHubPage() {
  return (
    <>
      <HeroSection
        title="National Geospatial Security & Intelligence Hub"
        // description="“Mapping the Future. Empowering the Nation.”"
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
              The National Geospatial Security & Intelligence Hub (NGSIH) is an
              initiative of the Geospatial Intelligence Foundation of Nigeria
              (<span className="cooper">GIFON</span>) to serve as the nation’s premier center for geospatial
              intelligence innovation, data integration, and strategic
              decision support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It is designed as a secure, collaborative environment where
              government, industry, academia, and international partners can
              leverage geospatial intelligence to safeguard Nigeria’s national
              interests and accelerate sustainable development.
            </p>
          </div>
        </section>

        {/* --- Core Objectives Section --- */}
        <section id="objectives" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Core Objectives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Through the National Geospatial Security & Intelligence Hub, <span className="cooper">GIFON</span>
              reaffirms its commitment to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>National Security Support:</strong> Provide advanced
                GEOINT solutions for counter-terrorism, border security,
                disaster management, and critical infrastructure protection.
              </li>
              <li>
                <strong>Data Integration & Analytics:</strong> Serve as a
                centralized hub for geospatial data collection, fusion, and
                analysis across ministries, departments, and agencies (MDAs).
              </li>
              <li>
                <strong>Innovation & Research:</strong> Incubate cutting-edge
                applications in artificial intelligence, remote sensing, UAVs,
                and big data analytics.
              </li>
              <li>
                <strong>Capacity Building:</strong> Train the next generation of
                Nigerian geospatial intelligence professionals through
                workshops, certification programs, and fellowships.
              </li>
              <li>
                <strong>Public–Private Collaboration:</strong> Connect
                industry stakeholders with government and research
                institutions to develop scalable geospatial solutions.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Strategic Benefits Section --- */}
        <section id="benefits" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Strategic Benefits
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                Improved situational awareness for policymakers and security
                agencies.
              </li>
              <li>
                Enhanced data-driven decision-making across national and state
                levels.
              </li>
              <li>
                Strengthened national preparedness and disaster resilience.
              </li>
              <li>
                Increased global competitiveness of Nigeria’s geospatial and
                intelligence community.
              </li>
              <li>
                Creation of high-skill jobs and empowerment of Nigerian youth
                in the GEOINT sector.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}