import HeroSection from '@/components/HeroSection';

export default function ConferencesProceedingsPage() {
  return (
    <>
      <HeroSection
        title="Conferences & Workshop Proceedings"
        // description="The Geospatial Intelligence Foundation of Nigeria (GIFON) recognizes the value of knowledge-sharing, collaboration, and continuous learning in advancing the geospatial intelligence ecosystem."
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
            <h2 className="text-3xl font-semibold mb-6">
              Advancing the Geospatial Ecosystem
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Geospatial Intelligence Foundation of Nigeria (GIFON)
              recognizes the value of knowledge-sharing, collaboration, and
              continuous learning in advancing the geospatial intelligence
              ecosystem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through conferences, workshops, technical symposia, and
              roundtables, GIFON creates platforms where policymakers, security
              agencies, industry leaders, researchers, and young innovators
              converge to discuss pressing issues and shape future directions.
            </p>
          </div>
        </section>

        {/* --- Proceedings Details Section --- */}
        <section id="proceedings" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Knowledge Resource
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Our Conferences and Workshop Proceedings document these
              engagements, providing a permanent knowledge resource that
              captures:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li>
                Key presentations and technical papers delivered by experts and
                practitioners.
              </li>
              <li>
                Policy discussions and resolutions that inform national
                strategies.
              </li>
              <li>
                Training modules and learning resources from workshops and
                capacity-building sessions.
              </li>
              <li>
                Case studies, best practices, and field reports shared during
                events.
              </li>
              <li>
                Participant reflections and stakeholder commitments towards
                actionable outcomes.
              </li>
            </ul>
          </div>
        </section>

        {/* --- Impact Section --- */}
        <section id="impact" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-left md:text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Extending Knowledge Beyond the Venue
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Proceedings ensure that the outcomes of GIFON’s events
              extend beyond the venue, serving as a reference for stakeholders
              across Nigeria and globally.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              They contribute to evidence-based policy, innovation diffusion,
              and institutional memory in the geospatial and intelligence
              community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By publishing and disseminating these records, GIFON strengthens
              its mission of building a knowledge-driven society, where every
              dialogue, debate, and discovery contributes to national
              security, sustainable development, and technological advancement.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}