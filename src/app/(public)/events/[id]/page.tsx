// app/events/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from '@/components/HeroSection';
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
    const { id } = await params; // ✅ await params
    const event: FlatEvent | null = await getEventById(id);
  
  if (!event) {
    notFound();
  }

  return (
    <>
        <HeroSection
        title={event?.title}
        description=""
        backgroundImages = {[
            "/bg/e.jpeg",
            "/bg/a.JPG",
            "/bg/b.JPG",
            "/bg/c.JPG",
            "/bg/d.JPG",
            "/ph.svg",
        ]}
        />
        <main className="max-w-4xl mx-auto py-16 px-4">
        {event?.image && (
            <div className="mb-8">
            <Image
                src={event.image}
                alt={event.title ?? "Event image"}
                width={1600}
                height={900}
                className="w-full h-96 object-cover rounded-lg"
            />
            </div>
        )}

        <h1 className="text-4xl font-bold mb-4">{event?.title}</h1>
        <p className="text-gray-600 mb-2">{formatDate(event?.startDate)}</p>

        {event?.description && (
            <div className="prose max-w-none mb-6">
            {typeof event.description === "string"
                ? event.description
                : documentToReactComponents(event.description as Document)}
            </div>
        )}

        {event?.link && (
            <a
            href={event.link}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
            Learn More
            </a>
        )}
        </main>
    </>
  );
}