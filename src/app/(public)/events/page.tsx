import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types";
import type { Document } from "@contentful/rich-text-types";
// --- Import ALL icons for the Outreach section ---
import { 
  FaUsers, 
  FaFemale, 
  FaBriefcase, 
  FaArrowRight,
  FaLaptopCode, 
  FaRocket, 
  FaMapMarkedAlt, 
  FaNetworkWired, 
  FaComments,
  FaChalkboardTeacher
} from "react-icons/fa";

type RichTextNode = {
  nodeType: "text" | string;
  value?: string;
  content?: RichTextNode[];
};

// ... (richTextToPlainText function remains the same) ...
function richTextToPlainText(doc?: string | Document | null): string {
  if (!doc) return "";
  if (typeof doc === "string") return doc;
  const collect = (node: RichTextNode | null | undefined): string => {
    if (!node) return "";
    if (node.nodeType === "text") return node.value ?? "";
    if (Array.isArray(node.content)) return node.content.map(collect).join("");
    return "";
  };
  return collect(doc).trim();
}

// ... (formatDate function remains the same) ...
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

// ... (excerptFromDescription function remains the same) ...
function excerptFromDescription(desc?: string | Document, length = 140) {
  if (!desc) return "";
  if (typeof desc === "string") {
    const stripped = desc.replace(/<\/?[^>]+(>|$)/g, "");
    return stripped.length > length ? stripped.slice(0, length).trim() + "…" : stripped;
  }
  const plain = richTextToPlainText(desc);
  return plain.length > length ? plain.slice(0, length).trim() + "…" : plain;
}


export default async function EventsPage() {
  let events: FlatEvent[] = [];

  try {
    events = (await getUpcomingEvents()) ?? [];
    // console.log("Fetched events:", events.length, events);
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

  // --- UPDATED: Data for the grouped Outreach Section ---
  const outreachGroups = [
    {
      groupTitle: 'Youth-Focused Programmes',
      groupIcon: <FaUsers size={28} />,
      groupAnchor: 'youth-focused-programmes',
      groupDescription: "Engaging the next generation of GEOINT leaders through hands-on training and challenges.",
      programs: [
        {
          title: 'Boot Camps',
          icon: <FaLaptopCode size={24} className="text-green-600" />,
          anchor: 'boot-camps',
          description: 'Intensive upskilling sprints to fast-track job readiness for graduates and early professionals.'
        },
        {
          title: 'STEM & GEOINT Awareness',
          icon: <FaRocket size={24} className="text-green-600" />,
          anchor: 'stem-geoint-awareness',
          description: 'Integrating geospatial literacy into school and tertiary STEM education via outreach and student clubs.'
        },
        {
          title: 'GeoInnovation Challenge / Hackathons',
          icon: <FaUsers size={24} className="text-green-600" />,
          anchor: 'geoinnovation-challenge',
          description: 'Crowdsourcing practical geo-solutions for national issues, engaging developers, analysts, and startups.'
        },
      ]
    },
    {
      groupTitle: 'Women-in-GEOINT Initiatives',
      groupIcon: <FaFemale size={28} />,
      groupAnchor: 'women-in-geoint-initiatives',
      groupDescription: "Empowering and elevating the voices and careers of women in the geospatial field.",
      programs: [
        {
          title: 'Women in Geospatial Leadership',
          icon: <FaFemale size={24} className="text-green-600" />,
          anchor: 'women-geospatial-leadership',
          description: 'Advancing gender inclusion through capacity building, mentorship, and leadership development.'
        },
        {
          title: 'Community Service Projects',
          icon: <FaMapMarkedAlt size={24} className="text-green-600" />,
          anchor: 'community-service-projects',
          description: 'Using geospatial intelligence to address community challenges, such as Clean City Mapping Drives.'
        },
      ]
    },
    {
      groupTitle: 'Professional & Institutional Engagement',
      groupIcon: <FaBriefcase size={28} />,
      groupAnchor: 'professional-institutional-engagement',
      groupDescription: "Building a connected and collaborative professional ecosystem for all members.",
      programs: [
        {
          title: 'GeoCommunity Development',
          icon: <FaNetworkWired size={24} className="text-green-600" />,
          anchor: 'geocommunity-development',
          description: 'Building strong local and regional networks for collaboration via quarterly meetups and peer mentoring.'
        },
        {
          title: 'GeoConnect Networking Events',
          icon: <FaComments size={24} className="text-green-600" />,
          anchor: 'geoconnect-networking',
          description: 'Curated networking sessions and mixers to foster dialogue between government, academia, and industry.'
        },
        {
          title: 'Public Lectures & Policy Roundtables',
          icon: <FaChalkboardTeacher size={24} className="text-green-600" />,
          anchor: 'public-lectures-roundtables',
          description: 'A neutral platform for experts and policymakers to discuss security, infrastructure, and GEOINT applications.'
        },
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title="Our Events"
        // description="Discover our upcoming and past events, conferences, and workshops."
        backgroundMedia={[
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
          {/* ... (Highlights section remains the same) ... */}
           <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Events & Highlights</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) actively convenes and participates in events that drive dialogue, innovation, and collaboration in the field of geospatial intelligence and national development.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify pt-2">Our Events & Highlights section provides a showcase of key milestones and activities, capturing how GIFON is shaping policy, research, and practice across Nigeria and beyond.</p>
            <p className="text-gray-700 leading-relaxed text-justify pt-4">
              Here, visitors can explore:
            </p>
            <ol className="text-gray-700 leading-relaxed text-justify p-4 list-disc list-inside space-y-1">
              <li>
                Major Conferences & Summits – high-level platforms where national and international stakeholders engage on geospatial intelligence and critical infrastructure.
              </li>
              <li>
                Workshops & Trainings – capacity-building sessions that strengthen technical expertise and knowledge-sharing.
              </li>
              <li>
                National Engagements – <span className="cooper">GIFON</span>’s contributions to government initiatives, defence and security dialogues, and development programs.
              </li>
              <li>
                International Participation – highlights from global events where <span className="cooper">GIFON</span> represents Nigeria’s voice in the GEOINT community.
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
          {/* ... (Upcoming Events section remains the same) ... */}
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
                      <p className="text-sm text-slate-700 mt-3 line-clamp-3 grow">
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
          {/* ... (Past Events section remains the same) ... */}
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
                      <p className="text-sm text-slate-700 mt-3 line-clamp-3 grow">
                        {excerptFromDescription(ev.description)}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-green-100 text-gray-700 font-semibold border border-gray-200">
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

        {/* === UPDATED OUTREACH SECTION (3 Groups with 8 Cards) === */}
        <section id="outreach" className="py-16 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Our Outreach Programmes
            </h2>
            
            {/* Main container for the 3 groups */}
            <div className="space-y-16">
              
              {outreachGroups.map((group) => (
                <div key={group.groupAnchor} id={group.groupAnchor}>
                  {/* Group Header */}
                  <div className="flex flex-col items-center text-center mb-8">
                    <span className="text-green-600">{group.groupIcon}</span>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                      {group.groupTitle}
                    </h3>
                    <p className="text-gray-600 mt-2 max-w-2xl">
                      {group.groupDescription}
                    </p>
                  </div>
                  
                  {/* Grid for the child program cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.programs.map((program) => (
                      <div 
                        key={program.anchor} 
                        id={program.anchor}
                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-green-600 shrink-0">{program.icon}</span>
                          <h4 className="text-lg font-semibold text-gray-800">
                            {program.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm mb-6 grow">
                          {program.description}
                        </p>
                        <Link 
                          href={`/education/${program.anchor}`} // Links to Education page anchor
                          className="inline-flex items-center gap-2 text-sm text-green-600 font-semibold hover:underline group"
                        >
                          Learn More
                          <span className="transform transition-transform group-hover:translate-x-1">
                            <FaArrowRight size={12} />
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </section>
        {/* === END OF UPDATED SECTION === */}

      </main>
    </>
  );
}