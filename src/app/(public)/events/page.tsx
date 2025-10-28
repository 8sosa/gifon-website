import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types";
import type { Document } from "@contentful/rich-text-types";
// --- Import new icons for the Outreach section ---
import { FaUsers, FaFemale, FaBriefcase, FaArrowRight } from "react-icons/fa";

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
  // Fallback for rich text Document
  const plain = richTextToPlainText(desc);
  return plain.length > length ? plain.slice(0, length).trim() + "…" : plain;
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
      description: richTextToPlainText(e.description) // Parse description here
    }))
    .filter(Boolean);

  const nowTs = Date.now();

  const upcoming = parsedEvents
    .filter((e) => e._startTs >= nowTs)
    .sort((a, b) => a._startTs - b._startTs);

  const past = parsedEvents
    .filter((e) => e._startTs < nowTs)
    .sort((a, b) => b._startTs - a._startTs);

  // --- Data for the new Outreach Section ---
  const outreachPrograms = [
    {
      label: 'Youth-Focused Programmes',
      anchor: 'youth-focused-programmes',
      icon: <FaUsers size={24} />,
      description: "Engaging the next generation of GEOINT leaders through hands-on training and challenges.",
      children: [
        { label: 'Boot Camps', anchor: 'boot-camps' },
        { label: 'STEM & GEOINT Awareness', anchor: 'stem-geoint-awareness' },
        { label: 'GeoInnovation Challenge / Hackathons', anchor: 'geoinnovation-challenge' }
      ]
    },
    {
      label: 'Women-in-GEOINT Initiatives',
      anchor: 'women-in-geoint-initiatives',
      icon: <FaFemale size={24} />,
      description: "Empowering and elevating the voices and careers of women in the geospatial field.",
      children: [
        { label: 'Women in Geospatial Leadership', anchor: 'women-geospatial-leadership' },
        { label: 'Community Service Projects', anchor: 'community-service-projects' }
      ]
    },
    {
      label: 'Professional & Institutional Engagement',
      anchor: 'professional-institutional-engagement',
      icon: <FaBriefcase size={24} />,
      description: "Building a connected and collaborative professional ecosystem for all members.",
      children: [
        { label: 'GeoCommunity Development', anchor: 'geocommunity-development' },
        { label: 'GeoConnect Networking Events', anchor: 'geoconnect-networking' },
        { label: 'Public Lectures & Policy Roundtables', anchor: 'public-lectures-roundtables' }
      ]
    }
  ];

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
              The Geospatial Intelligence Foundation of Nigeria (GIFON) actively convenes and participates in events that drive dialogue, innovation, and collaboration in the field of geospatial intelligence and national development.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">Our Events & Highlights section provides a showcase of key milestones and activities, capturing how GIFON is shaping policy, research, and practice across Nigeria and beyond.</p>
            {/* ... rest of your highlights text ... */}
            <p className="text-gray-700 leading-relaxed text-justify pt-4">
              Here, visitors can explore:
            </p>
            <ol className="text-gray-700 leading-relaxed text-justify p-4 list-disc">
              <li>
                Major Conferences & Summits – high-level platforms where national and international stakeholders engage on geospatial intelligence and critical infrastructure.
              </li>
              <li>
                Workshops & Trainings – capacity-building sessions that strengthen technical expertise and knowledge-sharing.
              </li>
              <li>
                National Engagements – GIFON’s contributions to government initiatives, defence and security dialogues, and development programs.
              </li>
              <li>
                International Participation – highlights from global events where GIFON represents Nigeria’s voice in the GEOINT community.
              </li>
              <li>
                Community Initiatives – youth empowerment, academic partnerships, and innovation-driven outreach projects.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed text-justify">
              By documenting these highlights, GIFON provides transparency, builds public awareness, and ensures that the outcomes of our engagements extend beyond the venue to influence policy, strengthen institutions, and inspire innovation. Through Events & Highlights, we celebrate our role in mapping the future and empowering the nation.
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    className="block transform hover:-translate-y-1 transition"
                  >
                    <article className="rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="relative h-40 rounded-md overflow-hidden mb-4 bg-slate-100">
                        <Image
                          src={ev.image || "/ph.svg"}
                          alt={ev.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-gray-800">{ev.title}</h4>
                      <p className="text-sm text-green-600 font-medium mt-1">{formatDate(ev.startDate)}</p>
                      <p className="text-sm text-slate-700 mt-3 line-clamp-3 flex-grow">
                        {excerptFromDescription(ev.description)}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white font-semibold">
                          Details <FaArrowRight size={12} />
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
        <section id="past" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Past Events</h2>

            {past.length === 0 ? (
              <div className="text-center text-gray-600">
                <p>No past events available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {past.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    className="block transform hover:-translate-y-1 transition"
                  >
                    <article className="rounded-2xl p-6 bg-gray-50 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="relative h-40 rounded-md overflow-hidden mb-4 bg-slate-200">
                        <Image
                          src={ev.image || "/ph.svg"}
                          alt={ev.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg text-gray-800">{ev.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{formatDate(ev.startDate)}</p>
                      <p className="text-sm text-slate-700 mt-3 line-clamp-3 flex-grow">
                        {excerptFromDescription(ev.description)}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-green-200 text-gray-700 font-semibold border border-gray-200">
                          View Details
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* === NEW OUTREACH SECTION === */}
        <section id="outreach" className="py-16 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Our Outreach Programmes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {outreachPrograms.map((program) => (
                <div 
                  key={program.anchor} 
                  id={program.anchor} // Main anchor for the card
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-green-600">{program.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {program.label}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {program.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {program.children.map((child) => (
                      <li key={child.anchor} id={child.anchor}> {/* Anchor for the list item */}
                        <Link 
                          href={`#${child.anchor}`}
                          className="flex items-center text-gray-700 hover:text-green-600 group"
                        >
                          <span className="transform transition-transform group-hover:translate-x-1 mr-2">
                            <FaArrowRight size={12} />
                          </span>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        </section>
        {/* === END OF NEW SECTION === */}

      </main>
    </>
  );
}