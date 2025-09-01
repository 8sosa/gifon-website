import Image from 'next/image';
import { getUpcomingEvents } from '@/lib/contentful-queries';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';
import { FlatEvent } from '@/types/types';

// Contentful rich-text utilities
import type { Document } from '@contentful/rich-text-types';

/**
 * Safely convert a Contentful rich-text Document into plain text.
 * This is used when a component (e.g. EventCard) expects a simple string.
 */

type RichTextNode = {
  nodeType: "text" | string;
  value?: string;
  content?: RichTextNode[];
};

function richTextToPlainText(doc?: string | Document | null): string {
  if (!doc) return '';
  if (typeof doc === 'string') return doc;

  // Defensive traversal to collect text nodes
  const collect = (node: RichTextNode | null | undefined): string => {
    if (!node) return "";
    if (node.nodeType === "text") {
      return node.value ?? "";
    }
    if (Array.isArray(node.content)) {
      return node.content.map(collect).join("");
    }
    return "";
  };

  return collect(doc).trim();
}

function formatDate(dateString?: string) {
  if (!dateString) return '';
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

export default async function EventsPage() {
  let events: FlatEvent[] = [];

  try {
    events = (await getUpcomingEvents()) ?? [];
  } catch (err) {
    console.error('Failed to load events', err);
    events = [];
  }

  // Normalize and add _startTs for sorting
  const parsedEvents = events
    .map((e) => ({
      ...e,
      _startTs: e.startDate ? new Date(e.startDate).getTime() : 0,
    }))
    .filter(Boolean);

  const nowTs = Date.now();

  const upcoming = parsedEvents
    .filter((e) => e._startTs >= nowTs)
    .sort((a, b) => a._startTs - b._startTs)
    // ensure description is a plain string for EventCard
    .map((e) => ({ ...e, description: richTextToPlainText(e.description) }));

  const past = parsedEvents
    .filter((e) => e._startTs < nowTs)
    .sort((a, b) => b._startTs - a._startTs)
    .map((e) => ({ ...e, description: richTextToPlainText(e.description) }));

  return (
    <>
      <HeroSection
        title="Our Events"
        description="Discover our upcoming and past events, conferences, and workshops."
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
        {/* Highlights */}
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

        {/* Upcoming Events */}
        <section id="upcoming" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Events</h2>

            {upcoming.length === 0 ? (
              <div className="text-center text-gray-600">
                <p className="mb-4">There are no upcoming events right now.</p>
                <p>If you would like to be notified when we publish events, consider joining our mailing list.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {upcoming.map((e) => (
                  // we pass event with description as plain string (EventCard likely expects that)
                  <EventCard key={e.id} event={e} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pre-Launch / Static sections (unchanged) */}
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

        {/* ... other static sections remain unchanged ... */}

        {/* Past events */}
        <section id="past" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Past Events</h2>

            {past.length === 0 ? (
              <div className="text-center text-gray-600">
                <p>No past events available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {past.map((e) => (
                  <div key={e.id} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      {e.image && (
                        <Image src={e.image} alt={e.title ?? 'event image'} className="w-28 h-20 object-cover rounded" width={1500} height={1000}/>
                      )}
                      <div>
                        <h3 className="font-semibold">{e.title}</h3>
                        <div className="text-sm text-gray-500">{formatDate(e.startDate)}</div>

                        {/* If you want to render the full rich text, use documentToReactComponents.
                            But here we've normalized description to a string for EventCard; if you
                            still have access to the original Document and want rich rendering, do this:
                            documentToReactComponents(e.description as Document)
                        */}
                        <p className="mt-2 text-sm text-gray-700 line-clamp-3">{e.description}</p>

                        {e.link && (
                          <a href={e.link} className="mt-3 inline-block text-sm font-medium underline">
                            Read more
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
