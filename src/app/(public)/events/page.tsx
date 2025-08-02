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
        <section id="upcoming-events" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Upcoming Events</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit tellus.
            </p>
          </div>
        </section>

        <section id="annual-conference" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Annual National Conference</h2>
            <p className="text-gray-700 leading-relaxed">
              Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada.
            </p>
          </div>
        </section>

        <section id="workshops" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Workshops & Masterclasses</h2>
            <p className="text-gray-700 leading-relaxed">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed.
            </p>
          </div>
        </section>

        <section id="past-events" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Past Events</h2>
            <p className="text-gray-700 leading-relaxed">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula.
            </p>
          </div>
        </section>

        <section id="certification" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Certification Programmes</h2>
            <p className="text-gray-700 leading-relaxed">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis volutpat.
            </p>
          </div>
        </section>

        {/* --- Dynamic Event List --- */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
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
        </section>

        <EventListing
          events={events.map((e) => ({
            title: e.title,
            description: e.description,
            startDate: e.startDate,
            endDate: e.endDate,
            location: e.location,
            link: e.link,
            image: e.image,
          }))}
        />
      </main>
    </>
  );
}
