// app/events/[id]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types"; // Ensure this matches your query file definition
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";

type Props = {
  params: Promise<{ id: string }>;
};

// Helper: Fetch a single event
// Note: In production, it is better to fetch a specific entry by ID from Contentful 
// rather than fetching all and filtering, but this works for now.
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
  console.log("Fetched event:", event);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={event.title}
        // FIX: Remove the extra curly braces inside the array
        backgroundMedia={[event.image]} 
      />

      <main className="max-w-6xl mx-auto py-16 px-4 space-y-20">
        {/* Cover Image */}
        {event.image && (
          <div className="mb-8">
            <Image
              src={event.image}
              alt={event.title ?? "Event image"}
              width={1600}
              height={900}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              priority // Add priority since this is above the fold usually
            />
          </div>
        )}

        {/* Event Overview */}
        <section>
          <h1 className="text-5xl font-bold mb-4">{event.title}</h1>
          <p className="text-gray-600 mb-2">{formatDate(event.startDate)}</p>
          <div className="prose max-w-none mb-6">
            {event.description &&
              (typeof event.description === "string"
                ? event.description
                : documentToReactComponents(event.description as Document))}
          </div>
        </section>

        {/* Location & Map */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Location</h2>
            {/* Display the dynamic location from Contentful */}
            <p className="text-gray-600 text-xl font-medium">
              {event.location || "Location to be announced"}
            </p>
            <p className="text-gray-600 mt-2">
              Join us in person or attend virtually from anywhere in the world.
            </p>
          </div>
          {/* Note: You cannot dynamically update the Google Maps iframe src 
              unless you have an API Key or clean address string to embed. 
              Keeping static for now. */}
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d7.4!3d9.0!2z!5e0!3m2!1sen!2sng!4v1234567890"
            loading="lazy"
          ></iframe>
        </section>

        {/* The sections below (Speakers, Sponsors, etc.) are currently static placeholders.
           To make them dynamic, you would need to add reference fields 
           to your Contentful Event Model (e.g., 'speakers', 'sponsors').
        */}

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

        {/* Tickets */}
        <section className="text-center py-16 bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl text-white">
          <h2 className="text-4xl font-bold mb-4">Get Your Tickets Now</h2>
          <p className="mb-6">Limited seats available for both physical and virtual attendance.</p>
          <a
            href={event.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Register Today
          </a>
        </section>

        {/* FAQ - Static for now */}
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
          </div>
        </section>
      </main>
    </>
  );
}