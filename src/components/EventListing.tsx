import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Document } from '@contentful/rich-text-types';

type Event = {
  title: string;
  description: Document;
  link: string;
  location?: string;
};

export function EventListing({ events }: { events: Event[] }) {
  return (
    <section className="w-full mt-16 px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => {
            const fullText = documentToPlainTextString(event.description);
            const previewText = fullText.split(' ').slice(0, 40).join(' ') + '...';

            return (
              <div
                key={i}
                className="bg-white p-6 rounded-md shadow-md flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-semibold">{event.title}</h4>
                  {event.location && (
                    <p className="text-sm text-gray-500">{event.location}</p>
                  )}
                  <p className="text-gray-700 mt-3 text-sm leading-relaxed text-justify">
                    {previewText}
                  </p>
                </div>
                <a
                  href={event.link}
                  className="mt-4 inline-block text-green-300 font-medium underline hover:text-green-500"
                >
                  View Details
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
