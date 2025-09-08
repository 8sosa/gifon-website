import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types";
import type { Document } from "@contentful/rich-text-types";

type RichTextNode = {
  nodeType: "text" | string;
  value?: string;
  content?: RichTextNode[];
};

function richTextToPlainText(doc?: string | Document | null): string {
  if (!doc) return "";
  if (typeof doc === "string") return doc;

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
  if (!dateString) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

function excerptFromDescription(desc?: string | Document, length = 140) {
  if (!desc) return "";
  if (typeof desc === "string") {
    const stripped = desc.replace(/<\/?[^>]+(>|$)/g, "");
    return stripped.length > length ? stripped.slice(0, length).trim() + "…" : stripped;
  }
  return "See event details.";
}

export default async function EventsPage() {
  let events: FlatEvent[] = [];

  try {
    events = (await getUpcomingEvents()) ?? [];
  } catch (err) {
    console.error("Failed to load events", err);
    events = [];
  }

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
    .map((e) => ({ ...e, description: richTextToPlainText(e.description) }));

  const past = parsedEvents
    .filter((e) => e._startTs < nowTs)
    .sort((a, b) => b._startTs - a._startTs)
    .map((e) => ({ ...e, description: richTextToPlainText(e.description) }));

  return (
    <>
      <HeroSection
        title="Our Events"
        // description="Discover our upcoming and past events, conferences, and workshops."
        backgroundImages={[
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
              GIFON hosts a variety of impactful events, conferences, and workshops…
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
                <p>Join our mailing list to be notified about new events.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcoming.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    className="block transform hover:-translate-y-1 transition"
                  >
                    <article className="rounded-2xl p-6 bg-white/60 border border-white/10 shadow hover:scale-[1.01] transition">
                      <div className="relative h-36 rounded-md overflow-hidden mb-3 bg-slate-100">
                        <Image
                          src={ev.image || "/ph.svg"}
                          alt={ev.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">{ev.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{formatDate(ev.startDate)}</p>
                      <p className="text-sm text-slate-700 mt-3 line-clamp-3">
                        {excerptFromDescription(ev.description)}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">
                          Details
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section id="past" className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Past Events</h2>

            {past.length === 0 ? (
              <div className="text-center text-gray-600">
                <p>No past events available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {past.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    className="block transform hover:-translate-y-1 transition"
                  >
                    <article className="rounded-2xl p-6 bg-white/60 border border-white/10 shadow hover:scale-[1.01] transition">
                      <div className="relative h-36 rounded-md overflow-hidden mb-3 bg-slate-100">
                        <Image
                          src={ev.image || "/ph.svg"}
                          alt={ev.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">{ev.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{formatDate(ev.startDate)}</p>
                      <p className="text-sm text-slate-700 mt-3 line-clamp-3">
                        {excerptFromDescription(ev.description)}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">
                          Details
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
