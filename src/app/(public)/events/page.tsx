import { getUpcomingEvents } from '@/lib/contentful-queries';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';
import { EventListing } from '@/components/EventListing';
import { FlatEvent } from '@/types/types';

export default async function EventsPage() {
  const events: FlatEvent[] = await getUpcomingEvents();

  return (
    <>
      <HeroSection
        title="Our Events"
        description="Discover our upcoming and past events, conferences, and workshops."
        backgroundImage="/ph.svg"
      />

      {/* --- Static Sections with Dummy Content --- */}
      <main className="w-full">
      {/* --- Events & Highlights --- */}
      <section id="highlights" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Events & Highlights</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      GIFON hosts a variety of impactful events, conferences, and workshops that bring together 
      experts, practitioners, and young professionals in geospatial security and GEOINT. Our highlights 
      feature milestones such as annual summits, cross-border collaborations, and international knowledge 
      exchanges designed to strengthen Africa’s presence in the global geospatial community.
      </p>
      </div>
      </section>

      {/* --- Upcoming Events --- */}
      <section id="upcoming" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Events</h2>
      <div className="flex flex-col gap-8">
      {events.map((e) => (
      <EventCard
      key={e.id}
      title={e.title}
      startDate={e.startDate}
      endDate={e.endDate}
      image={e.image}
      description={e.description}
      location={e.location}
      link={e.link}
      />
      ))}
      </div>
      </div>
      </section>

      {/* --- Pre-Launch Event --- */}
      <section id="prelaunch" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Pre-Launch Event</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      Before our official launch, GIFON organized a pre-launch event that introduced the network’s 
      mission and objectives to stakeholders across government, academia, and industry. The event 
      provided a unique opportunity to align with strategic partners and set the stage for collaboration 
      in advancing geospatial intelligence across Africa.
      </p>
      </div>
      </section>

      {/* --- Inaugural Conference & Launching --- */}
      <section id="inaugural" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Inaugural Conference & Launching</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      The inaugural GIFON Conference marked a turning point in Africa’s geospatial security landscape. 
      Leaders and experts gathered to share insights on GEOINT applications, policy frameworks, and 
      cross-border collaboration. This historic launch signaled a united commitment to strengthening 
      Africa’s geospatial capacity for national and regional security.
      </p>
      </div>
      </section>

      {/* --- International Events --- */}
      <section id="dgi" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - DGI London</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      GIFON actively participates in the Defence Geospatial Intelligence (DGI) conference in London, 
      where global leaders in defense and security meet to discuss intelligence-driven decision-making. 
      This engagement ensures Africa’s voice is represented in shaping global geospatial policy and practice.
      </p>
      </div>
      </section>

      <section id="usgif" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - USGIF GEOINT</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      GIFON collaborates with the United States Geospatial Intelligence Foundation (USGIF) at its 
      GEOINT Symposium, fostering knowledge-sharing, research partnerships, and professional growth 
      for African geospatial experts.
      </p>
      </div>
      </section>

      <section id="fig" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - FIG</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      Participation in the International Federation of Surveyors (FIG) connects GIFON with surveying 
      professionals worldwide, ensuring Africa’s unique geospatial challenges are part of the global 
      conversation on sustainable development and security.
      </p>
      </div>
      </section>

      <section id="aag" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - AAG</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      GIFON contributes to the American Association of Geographers (AAG) annual meeting, sharing African 
      research and case studies on the application of geospatial data in disaster response, security 
      analysis, and sustainable land management.
      </p>
      </div>
      </section>

      <section id="aarse" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - AARSE</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      As a key African partner, GIFON supports the African Association of Remote Sensing of the Environment 
      (AARSE) conferences, which focus on earth observation technologies and their applications in security, 
      agriculture, and environmental sustainability.
      </p>
      </div>
      </section>

      <section id="eis" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - EIS-Africa</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      GIFON partners with EIS-Africa to promote spatial data infrastructure and policy advocacy that 
      empowers African governments and organizations to integrate geospatial intelligence into decision-making.
      </p>
      </div>
      </section>

      <section id="geoson" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">International Events - GEOSON</h2>
      <p className="text-gray-700 leading-relaxed text-justify">
      The Geoinformation Society of Nigeria (GEOSON) is a core partner for GIFON, and joint events 
      highlight the importance of national collaboration in advancing geospatial education, practice, 
      and professional standards within Nigeria.
      </p>
      </div>
      </section>
      </main>

    </>
  );
}
