import HeroSection from '@/components/HeroSection';

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        title="Programmes & Initiatives"
        description="Explore our diverse programmes and initiatives driving geospatial capacity and innovation."
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full">
        {/* --- Static Sections with Dummy Content --- */}
        <section id="youth-empowerment" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Youth Empowerment & Talent Acceleration</h2>
            <p className="text-gray-700 leading-relaxed">
              This program develops the next generation of geospatial leaders by offering mentorship, technical training, and project-based learning. By equipping youth with hands-on experience in remote sensing, GIS, and data analytics, we prepare them to tackle real-world security and development challenges.            </p>
          </div>
        </section>

        <section id="wings" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Women in GEOINT (WINGS)</h2>
            <p className="text-gray-700 leading-relaxed">
              WINGS champions the role of women in geospatial intelligence. We provide scholarships, leadership workshops, and networking opportunities to ensure women play a central role in shaping security policies, advancing research, and fostering innovation in GEOINT.            </p>
          </div>
        </section>

        <section id="geoinnovation" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">GeoInnovation & Tech Incubation</h2>
            <p className="text-gray-700 leading-relaxed">
              We support startups and innovators developing geospatial solutions for defense, agriculture, climate resilience, and smart cities. Through incubation, access to funding, and mentorship, we accelerate the growth of technologies that can transform Africa’s security landscape.
            </p>
          </div>
        </section>

        <section id="geospatial-hub" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">National Geospatial Security & Intelligence Hub</h2>
            <p className="text-gray-700 leading-relaxed">
              This hub serves as a central platform for collaboration between government, academia, and private sector. It enhances intelligence-sharing, promotes standardization of geospatial practices, and strengthens national resilience against cyber, environmental, and military threats.
            </p>
          </div>
        </section>

        <section id="community-mapping" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Community Mapping for Development</h2>
            <p className="text-gray-700 leading-relaxed">
              By involving local communities in participatory mapping, we create accurate datasets for disaster response, urban planning, and conflict monitoring. This approach ensures that vulnerable groups are represented in national planning and decision-making.
            </p>
          </div>
        </section>

        <section id="open-data" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Open Data & Research</h2>
            <p className="text-gray-700 leading-relaxed">
              We advocate for accessible geospatial data to empower innovation, research, and transparent governance. Our research initiatives span climate monitoring, counterterrorism, infrastructure planning, and humanitarian aid.
            </p>
          </div>
        </section>

        <section id="conferences" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Conferences, Workshops & Masterclasses</h2>
            <p className="text-gray-700 leading-relaxed">
              Through regular events, we provide a platform for knowledge exchange between experts, policymakers, and students. These gatherings showcase the latest GEOINT applications, from AI-powered satellite analysis to smart security systems.            </p>
          </div>
        </section>

        <section id="training" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Training & Certification</h2>
            <p className="text-gray-700 leading-relaxed">
              Our certification programs equip professionals with globally recognized skills in GIS, remote sensing, data analytics, and geospatial cybersecurity. Certified practitioners become trusted assets in national and regional security initiatives.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
