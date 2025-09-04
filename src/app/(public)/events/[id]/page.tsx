// app/events/[id]/page.tsx
// "use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

type Props = {
  params: Promise<{ id: string }>; // params is async
};

// Fetch a single event
async function getEventById(id: string): Promise<FlatEvent | null> {
  const events = (await getUpcomingEvents()) ?? [];
  return events.find((e) => e.id === id) ?? null;
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

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const event: FlatEvent | null = await getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={event?.title}
        description="Join us for an unforgettable experience blending technology, innovation, and community."
        backgroundImages={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="max-w-6xl mx-auto py-16 px-4 space-y-20">
        {/* Cover Image */}
        {event?.image && (
          <div className="mb-8">
            <Image
              src={event.image}
              alt={event.title ?? "Event image"}
              width={1600}
              height={900}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Event Overview */}
        <section>
          <h1 className="text-5xl font-bold mb-4">{event?.title}</h1>
          <p className="text-gray-600 mb-2">{formatDate(event?.startDate)}</p>
          <div className="prose max-w-none mb-6">
            {event?.description &&
              (typeof event.description === "string"
                ? event.description
                : documentToReactComponents(event.description as Document))}
          </div>
        </section>

        {/* Location & Map */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Location</h2>
            <p className="text-gray-600">
              Futuristic Convention Center, Silicon Valley, CA
            </p>
            <p className="text-gray-600 mt-2">
              Join us in person or attend virtually from anywhere in the world.
            </p>
          </div>
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            loading="lazy"
          ></iframe>
        </section>

        {/* Video Trailer */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Event Trailer</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Event trailer"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Speakers */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Keynote Speakers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-center"
              >
                <Image
                  src={`/bg/c.JPG`}
                  alt={`Speaker ${i}`}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">Dr. Futuro {i}</h3>
                <p className="text-gray-500">AI Visionary & Technologist</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agenda */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Agenda</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">09:00 AM - Opening Keynote</span>{" "}
              by Dr. Futuro
            </li>
            <li>
              <span className="font-semibold">11:00 AM - Panel Discussion</span>{" "}
              on The Future of AI
            </li>
            <li>
              <span className="font-semibold">02:00 PM - Workshop</span> Hands-on
              with Emerging Tech
            </li>
            <li>
              <span className="font-semibold">05:00 PM - Closing Remarks</span>
            </li>
          </ul>
        </section>

        {/* Sponsors */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl flex items-center justify-center h-24"
              >
                <Image
                  src={`/bg/c.JPG`}
                  alt={`Sponsor ${i}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Image
                key={i}
                src={`/bg/c.JPG`}
                alt={`Gallery ${i}`}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </section>

        {/* Tickets */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white">
          <h2 className="text-4xl font-bold mb-4">Get Your Tickets Now</h2>
          <p className="mb-6">Limited seats available for both physical and virtual attendance.</p>
          <a
            href={event?.link ?? "#"}
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Register Today
          </a>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Is this event hybrid?</h3>
              <p className="text-gray-600">
                Yes, you can attend physically or join virtually from anywhere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Are group discounts available?</h3>
              <p className="text-gray-600">Yes, contact us for team packages.</p>
            </div>
            <div>
              <h3 className="font-semibold">Will recordings be available?</h3>
              <p className="text-gray-600">
                Absolutely, all sessions will be available on-demand after the event.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow text-gray-700"
              >
                <p>
                  “This event changed the way I think about the future of
                  technology. The speakers were inspiring, and the networking
                  was priceless.”
                </p>
                <p className="mt-4 font-semibold">— Attendee {i}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
