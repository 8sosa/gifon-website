import HeroSection from '@/components/HeroSection';

export default function TrainingCertificationPage() {
  return (
    <>
      <HeroSection
        title="GIFON Training & Certification Programmes (TCP)"
        // description="“Building Skills. Certifying Excellence. Advancing GEOINT for Nigeria and Beyond.”"
        backgroundMedia={[
          "/media/TRAINING AND CERTIFICATION.jpg",
        ]}
      />

      <main className="w-full">
        {/* --- Overview Section --- */}
        <section id="overview" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <h2 className="text-3xl font-semibold mb-6">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Training & Certification Programmes (TCP) of the Geospatial
              Intelligence Foundation of Nigeria (GIFON) are designed to
              provide standardized, high-quality, and industry-recognized
              certifications in geospatial intelligence, data science, and
              related technologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These programmes strengthen the national workforce, build
              institutional capacity, and align Nigerian expertise with global
              GEOINT standards.
            </p>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Objectives
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                <strong>Professionalize GEOINT Practice:</strong> Establish
                recognized qualifications for practitioners in Nigeria and
                Africa.
              </li>
              <li>
                <strong>Capacity Development:</strong> Equip government
                agencies, private sector, and NGOs with the skills to apply
                geospatial intelligence in their domains.
              </li>
              <li>
                <strong>Global Benchmarking:</strong> Align with
                international certification frameworks and standards (e.g.,
                USGIF, ISO, ICA).
              </li>
              <li>
                <strong>Career Pathways:</strong> Provide structured
                entry-to-advanced level training for students, professionals,
                and decision-makers.
              </li>
              <li>
                <strong>Support Critical Infrastructure:</strong> Train
                stakeholders in applying GEOINT for the 13 critical
                infrastructure sectors.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Foundational */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  1. Foundational Certificates
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Introduction to GEOINT</li>
                  <li>GIS & Remote Sensing Fundamentals</li>
                  <li>Geospatial Data Collection & Analysis</li>
                  <li>Cartography & Visualization</li>
                </ul>
              </div>

              {/* Card 2: Professional */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  2. Professional Certifications
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Geospatial Intelligence for National Security & Defense</li>
                  <li>GEOINT for Disaster Risk Reduction & Climate Resilience</li>
                  <li>Geospatial Data Science & AI Applications</li>
                  <li>Drone & Satellite Imagery Operations</li>
                  <li>Geo-Cybersecurity & Data Protection</li>
                </ul>
              </div>

              {/* Card 3: Executive */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  3. Executive & Policy-Level Training
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Geospatial Intelligence for Policy & Decision-Making</li>
                  <li>Leadership in Geospatial Security & National Development</li>
                  <li>Critical Infrastructure Protection with GEOINT</li>
                </ul>
              </div>

              {/* Card 4: Specialized */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-green-700">
                  4. Specialized Short Courses
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Urban Mapping for Development</li>
                  <li>Geointelligence in Agriculture & Food Security</li>
                  <li>Maritime Domain Awareness</li>
                  <li>Open Source GEOINT (OSINT & ODIN – Open Data Intelligence)</li>
                  <li>Cyber-Geo Fusion Training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Delivery & Partnerships Section --- */}
        <section id="delivery-partnerships" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Delivery Model</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>Blended Learning: In-person + online modules.</li>
                <li>
                  Accredited Trainers: Drawn from GIFON experts, academia,
                  military, and global partners.
                </li>
                <li>Training Labs & Simulations: Practical, scenario-based exercises.</li>
                <li>
                  Certification Exams: Assessment-based certification aligned
                  with GIFON standards.
                </li>
                <li>
                  Continuous Professional Development (CPD): Recertification
                  and advanced training every 2 years.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Partnerships</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>Nigerian universities & training institutes.</li>
                <li>
                  International GEOINT organizations (e.g., USGIF, UN-GGIM
                  networks).
                </li>
                <li>Defense, security, and intelligence institutions.</li>
                <li>Professional associations & industry players.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Expected Outcomes Section --- */}
        <section id="outcomes" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Expected Outcomes
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                A nationally and internationally recognized certification
                framework for GEOINT professionals.
              </li>
              <li>
                A growing pool of certified practitioners contributing to
                Nigeria’s security, economy, and innovation.
              </li>
              <li>
                Strengthened institutional capacity across government,
                industry, and academia.
              </li>
              <li>
                Enhanced global competitiveness of Nigeria’s geospatial
                workforce.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}