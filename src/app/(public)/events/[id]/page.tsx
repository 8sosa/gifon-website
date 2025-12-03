import Image from "next/image";
import { notFound } from "next/navigation";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// 1. IMPORT Block and Inline types
import type { Document, Block, Inline } from "@contentful/rich-text-types"; 
// 2. IMPORT ReactNode
import { ReactNode } from "react"; 
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Share2, 
  Video, 
  Ticket, 
  ArrowRight,
  HelpCircle
} from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

async function getEventById(id: string): Promise<FlatEvent | null> {
  const events = (await getUpcomingEvents()) ?? [];
  return events.find((e) => e.id === id) ?? null;
}

function formatDate(dateString?: string) {
  if (!dateString) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

// 3. FIX: Replace 'any' with correct types (Block and ReactNode)
const richTextOptions = {
  renderNode: {
    'paragraph': (node: Block | Inline, children: ReactNode) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    'heading-1': (node: Block | Inline, children: ReactNode) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    'heading-2': (node: Block | Inline, children: ReactNode) => (
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">{children}</h3>
    ),
    'ul': (node: Block | Inline, children: ReactNode) => (
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">{children}</ul>
    ),
    'li': (node: Block | Inline, children: ReactNode) => (
      <li>{children}</li>
    ),
  }
};

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const event: FlatEvent | null = await getEventById(id);
//   console.log("Fetched event:", event);

  if (!event) {
    notFound();
  }

  // Fallback image if none provided
  const bgImage = event.image || "/bg/e.jpeg";

  // --- MAP LOGIC ---
  const addressString = event.venue || event.location || "";

  const mapEmbedUrl = addressString 
    ? `https://maps.google.com/maps?q=${encodeURIComponent(addressString)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    : "";

  const directionsUrl = addressString
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`
    : "#";

  return (
    <>
      <HeroSection
        title={event.title}
        backgroundMedia={[bgImage]} 
      />

      <main className="bg-gray-50 min-h-screen py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* --- LEFT COLUMN (Main Content) --- */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Cover Image & Title Block */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {event.image && (
                <div className="relative w-full h-64 md:h-96">
                    <Image
                    src={event.image}
                    alt={event.title ?? "Event image"}
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
                )}
                
                <div className="p-8 md:p-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6 uppercase tracking-wider">
                        Event Details
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-cooper leading-tight">
                        {event.title}
                    </h1>
                    
                    {/* Rich Text Content */}
                    <div className="prose prose-lg max-w-none text-gray-600">
                        {event.description &&
                        (typeof event.description === "string"
                            ? <p>{event.description}</p>
                            : documentToReactComponents(event.description as Document, richTextOptions))}
                    </div>
                </div>
            </div>

            {/* 2. Video Trailer Section */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <div className="p-8 pb-0 relative z-20">
                     <div className="flex items-center gap-3 text-white mb-6">
                        <Video className="text-green-400" />
                        <h2 className="text-2xl font-bold">Event Trailer</h2>
                     </div>
                </div>
                <div className="aspect-video w-full">
                    <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Event trailer"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* 3. Location & Map */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><MapPin /></div>
                    <h2 className="text-2xl font-bold text-gray-900">Venue & Location</h2>
                </div>
                
                <p className="text-gray-600 text-lg mb-6 font-medium">
                    {addressString || "Location to be announced"}
                </p>

                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative bg-gray-100">
                    {mapEmbedUrl ? (
                      <iframe
                          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                          src={mapEmbedUrl}
                          loading="lazy"
                          title="Event Location Map"
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <MapPin size={48} className="mb-2 opacity-30" />
                        <span>Map data unavailable</span>
                      </div>
                    )}
                    
                    {mapEmbedUrl && (
                      <a 
                        href={directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-md hover:bg-green-600 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        Get Directions <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                </div>
            </div>

            {/* 4. FAQ Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><HelpCircle /></div>
                    <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-6">
                    {[
                        { q: "Is this event hybrid?", a: "Yes, you can attend physically or join virtually from anywhere." },
                        { q: "Are group discounts available?", a: "Yes, contact us for team packages and special institutional rates." },
                        { q: "Will I get a certificate?", a: "All registered attendees will receive a digital certificate of participation." }
                    ].map((faq, i) => (
                        <div key={i} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN (Sticky Sidebar) --- */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 space-y-8">
                
                {/* 1. Main Info Card */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-600 to-green-400"></div>

                    <h3 className="text-gray-900 font-bold text-xl mb-6">Event Details</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Calendar className="text-green-600 shrink-0 mt-1" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Date</p>
                                <p className="text-gray-800 font-semibold">{formatDate(event.startDate)}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-green-600 shrink-0 mt-1" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Time</p>
                                <p className="text-gray-800 font-semibold">09:00 AM - 04:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-green-600 shrink-0 mt-1" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Location</p>
                                <p className="text-gray-800 font-semibold">{addressString || "TBA"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                        href={`/events/${event.id}/register`}
                        className="flex items-center justify-center w-full bg-green-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 gap-2 group"
                    >
                        <Ticket size={20} />
                        <span>Register Now</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            Limited seats available. Registration closes soon.
                        </p>
                    </div>
                </div>

                {/* 2. Share Card */}
                <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Share2 size={120} />
                    </div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Share2 size={18} className="text-green-400"/> Share Event
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                        Invite your colleagues and friends to join this event.
                    </p>
                    <div className="flex gap-4">
                         {['Facebook', 'Twitter', 'LinkedIn'].map(social => (
                             <button key={social} className="h-10 w-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors">
                                <span className="sr-only">{social}</span>
                                <Share2 size={16} />
                             </button>
                         ))}
                    </div>
                </div>

             </div>
          </div>

        </div>
      </main>
    </>
  );
}