import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import HeroSection from "@/components/HeroSection";
import { FlatEvent } from "@/types/types";
import type { Document } from "@contentful/rich-text-types";
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Users, 
  Mic, 
  Globe, 
  Award, 
  BookOpen,
  Briefcase,
  Heart,
  Lightbulb,
  Cpu
} from "lucide-react";

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
    if (node.nodeType === "text") return node.value ?? "";
    if (Array.isArray(node.content)) return node.content.map(collect).join("");
    return "";
  };
  return collect(doc).trim();
}

function formatDate(dateString?: string) {
  if (!dateString) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short", // Changed to Short (e.g., Aug) for the badge
      day: "numeric",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

// Helper for the date badge splitting
function getDateParts(dateString?: string) {
  if (!dateString) return { month: '', day: '' };
  const date = new Date(dateString);
  return {
    month: date.toLocaleString('default', { month: 'short' }),
    day: date.getDate()
  };
}

function excerptFromDescription(desc?: string | Document, length = 120) {
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
  } catch (err) {
    console.error("Failed to load events", err);
    events = [];
  }

  const parsedEvents = events
    .map((e) => ({
      ...e,
      _startTs: e.startDate ? new Date(e.startDate).getTime() : 0,
      description: richTextToPlainText(e.description)
    }))
    .filter(Boolean);

  const nowTs = Date.now();

  const upcoming = parsedEvents
    .filter((e) => e._startTs >= nowTs)
    .sort((a, b) => a._startTs - b._startTs);

  const past = parsedEvents
    .filter((e) => e._startTs < nowTs)
    .sort((a, b) => b._startTs - a._startTs);

  // --- Outreach Data (With Lucide Icons) ---
  const outreachGroups = [
    {
      groupTitle: 'Youth-Focused Programmes',
      groupIcon: Users,
      groupColor: 'text-blue-600 bg-blue-50',
      groupAnchor: 'youth-focused-programmes',
      groupDescription: "Engaging the next generation of GEOINT leaders through hands-on training and challenges.",
      programs: [
        {
          title: 'Boot Camps',
          icon: Cpu,
          anchor: 'boot-camps',
          description: 'Intensive upskilling sprints to fast-track job readiness for graduates and early professionals.'
        },
        {
          title: 'STEM & GEOINT Awareness',
          icon: Lightbulb,
          anchor: 'stem-geoint-awareness',
          description: 'Integrating geospatial literacy into school and tertiary STEM education via outreach and student clubs.'
        },
        {
          title: 'GeoInnovation Challenge',
          icon: Award,
          anchor: 'geoinnovation-challenge',
          description: 'Crowdsourcing practical geo-solutions for national issues, engaging developers, analysts, and startups.'
        },
      ]
    },
    {
      groupTitle: 'Women-in-GEOINT Initiatives',
      groupIcon: Heart, // Using Heart to represent inclusion/care
      groupColor: 'text-pink-600 bg-pink-50',
      groupAnchor: 'women-in-geoint-initiatives',
      groupDescription: "Empowering and elevating the voices and careers of women in the geospatial field.",
      programs: [
        {
          title: 'Women in Leadership',
          icon: Users,
          anchor: 'women-geospatial-leadership',
          description: 'Advancing gender inclusion through capacity building, mentorship, and leadership development.'
        },
        {
          title: 'Community Projects',
          icon: MapPin,
          anchor: 'community-service-projects',
          description: 'Using geospatial intelligence to address community challenges, such as Clean City Mapping Drives.'
        },
      ]
    },
    {
      groupTitle: 'Professional Engagement',
      groupIcon: Briefcase,
      groupColor: 'text-purple-600 bg-purple-50',
      groupAnchor: 'professional-institutional-engagement',
      groupDescription: "Building a connected and collaborative professional ecosystem for all members.",
      programs: [
        {
          title: 'GeoCommunity Dev',
          icon: Globe,
          anchor: 'geocommunity-development',
          description: 'Building strong local and regional networks for collaboration via quarterly meetups.'
        },
        {
          title: 'GeoConnect Networking',
          icon: Users,
          anchor: 'geoconnect-networking',
          description: 'Curated networking sessions and mixers to foster dialogue between government and industry.'
        },
        {
          title: 'Policy Roundtables',
          icon: Mic,
          anchor: 'public-lectures-roundtables',
          description: 'A neutral platform for experts and policymakers to discuss security and GEOINT applications.'
        },
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title="Events & Outreach"
        description="Connecting the community through conferences, workshops, and development programmes."
        backgroundMedia={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full font-sans bg-gray-50">
        
        {/* --- HIGHLIGHTS SECTION --- */}
        <section id="highlights" className="py-20 px-4 md:px-6 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl z-0 translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Impact</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Events & Highlights</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                <span className="cooper">GIFON</span> actively convenes events that drive dialogue, innovation, and collaboration. We celebrate our role in mapping the future and empowering the nation.
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { icon: Mic, title: "Conferences & Summits", text: "High-level platforms engaging national stakeholders on geospatial intelligence." },
                 { icon: BookOpen, title: "Workshops & Training", text: "Capacity-building sessions aimed at strengthening technical expertise." },
                 { icon: Award, title: "National Engagements", text: "Contributions to government initiatives and security dialogues." },
                 { icon: Globe, title: "Global Participation", text: "Representing Nigeria’s voice in the international GEOINT community." },
                 { icon: Users, title: "Community Initiatives", text: "Youth empowerment, academic partnerships, and outreach projects." },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-4">
                        <item.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                 </div>
               ))}
               
               {/* Last Card: Call to Action */}
               <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-green-600 text-white shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Join the Movement</h3>
                  <p className="text-green-100 text-sm mb-4">Be part of our next event.</p>
                  <Link href="/membership" className="px-6 py-2 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors">
                    Become a Member
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* --- UPCOMING EVENTS --- */}
        <section id="upcoming" className="py-20 px-4 md:px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} /> Mark your calendars
                </div>
            </div>
            
            {upcoming.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-dashed border-gray-300">
                <Calendar className="text-gray-300 w-16 h-16 mb-4" />
                <p className="text-lg font-medium text-gray-600">No upcoming events scheduled.</p>
                <p className="text-gray-400">Join our mailing list to stay updated.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcoming.map((ev) => {
                  const { month, day } = getDateParts(ev.startDate);
                  return (
                  <Link
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Image Area */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                      <Image
                        src={ev.image || "/ph.svg"}
                        alt={ev.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 text-center shadow-lg min-w-[60px]">
                        <span className="block text-xs font-bold text-red-500 uppercase tracking-wider">{month}</span>
                        <span className="block text-2xl font-extrabold text-gray-900 leading-none">{day}</span>
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-6 flex flex-col grow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                        {ev.title}
                      </h4>
                      <p className="text-gray-500 text-sm line-clamp-3 mb-6 grow leading-relaxed">
                        {excerptFromDescription(ev.description)}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                        <span className="font-semibold text-green-600 flex items-center gap-2">
                          View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )})}
              </div>
            )}
          </div>
        </section>

        {/* --- PAST EVENTS --- */}
        <section id="past" className="py-16 px-4 md:px-6 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Past Events Archive</h2>
            
            {past.length === 0 ? (
               <div className="text-gray-400 italic">No past events found.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {past.map((ev) => (
                  <Link
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    className="group block bg-gray-50 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-40 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                        <Image
                          src={ev.image || "/ph.svg"}
                          alt={ev.title}
                          fill
                          className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <p className="text-xs text-green-600 font-bold mb-1">{formatDate(ev.startDate)}</p>
                        <h4 className="font-bold text-gray-700 group-hover:text-gray-900 line-clamp-2 text-sm">
                            {ev.title}
                        </h4>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* --- OUTREACH PROGRAMMES --- */}
        <section id="outreach" className="py-20 px-4 md:px-6 bg-slate-900 text-white relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Outreach Programmes</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Extending our impact beyond the boardroom. Discover how we engage, empower, and elevate the community.
                </p>
            </div>
            
            <div className="space-y-12">
              {outreachGroups.map((group, idx) => (
                <div key={idx} id={group.groupAnchor} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                  
                  {/* Group Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 border-b border-white/10 pb-6">
                    <div className={`p-4 rounded-2xl ${group.groupColor.replace('text-', 'bg-').replace('bg-', 'text-white ')} bg-opacity-20`}>
                        <group.groupIcon size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{group.groupTitle}</h3>
                        <p className="text-gray-400">{group.groupDescription}</p>
                    </div>
                  </div>
                  
                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.programs.map((program, pIdx) => (
                      <Link 
                        key={pIdx} 
                        href={`/education/${program.anchor}`}
                        className="group bg-white rounded-xl p-6 text-gray-800 hover:bg-green-50 transition-colors duration-300 flex flex-col h-full"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-gray-100 rounded-lg text-gray-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <program.icon size={20} />
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-green-700">
                            {program.title}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6 grow">
                          {program.description}
                        </p>
                        <div className="mt-auto flex items-center text-xs font-bold text-green-600 uppercase tracking-wider">
                          Learn more <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              ))}
            </div>
           </div>
        </section>

      </main>
    </>
  );
}