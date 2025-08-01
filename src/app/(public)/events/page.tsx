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
        description=""
        backgroundImage="/ph.svg"
      />
      <main className="w-full">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
          <div className="flex flex-col gap-8">
            {events.map((e) => (
              <EventCard
              key={e.id}
              title={e.title}
              startDate={e.startDate}
              endDate={e.endDate}
              image={e.image}              // already a string URL
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
