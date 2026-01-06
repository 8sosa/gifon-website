// lib/get-nav-links.ts
import { getUpcomingEvents } from "@/lib/contentful-queries";
import { FlatEvent } from "@/types/types";
// import type { Document } from "@contentful/rich-text-types";

// Note: If you have MenuItem defined in "@/types/types", you should import it 
// instead of redefining it here to keep things consistent.
export interface MenuItem {
    label?: React.ReactNode;
    href?: string;
    anchor?: string;
    link?: string;
    children?: MenuItem[];
    onClick?: (e: React.MouseEvent) => void;
    colorClass?: string;
    hoverColorClass?: string;
}

// // Helper to clean rich text descriptions
// function richTextToPlainText(doc?: string | Document | null): string {
//     if (!doc) return "";
//     if (typeof doc === "string") return doc;

//     // We use 'any' for the node here to bypass strict type mismatches 
//     // between Contentful's Document type and local recursive types.
//     const collect = (node: any): string => {
//       if (!node) return "";
//       if (node.nodeType === "text") return node.value ?? "";
//       if (Array.isArray(node.content)) return node.content.map(collect).join("");
//       return "";
//     };
    
//     return collect(doc).trim();
// }
  

export async function getDynamicEventsMenu(): Promise<MenuItem> {
    // --- FIX IS HERE: Explicitly type the array as FlatEvent[] ---
    let events: FlatEvent[] = [];
    
    try {
      events = (await getUpcomingEvents()) ?? [];
    } catch (err) {
      console.error("Failed to load events", err);
    }
  
    // 1. Process Events
    const parsedEvents = events.map((e) => ({
      ...e,
      _startTs: e.startDate ? new Date(e.startDate).getTime() : 0,
    }));
    const nowTs = Date.now();
    
    const upcoming = parsedEvents
      .filter((e) => e._startTs >= nowTs)
      .sort((a, b) => a._startTs - b._startTs);
    const past = parsedEvents
      .filter((e) => e._startTs < nowTs)
      .sort((a, b) => b._startTs - a._startTs);
  
    // 2. Helper to map to MenuItem shape
    const mapToItem = (e: FlatEvent): MenuItem => ({
      label: e.title,
      href: `/events/${e.id}`,
    });
  
    const upcomingLinks: MenuItem[] = upcoming.slice(0, 8).map(mapToItem);
    const pastLinks: MenuItem[] = past.slice(0, 8).map(mapToItem);
  
    // Fallbacks
    if (upcomingLinks.length === 0) upcomingLinks.push({ label: 'No upcoming events', href: '/events' });
    if (pastLinks.length === 0) pastLinks.push({ label: 'No past events', href: '/events' });
  
    // 3. Static Outreach Links
    const outreachLinks: MenuItem[] = [
      {
        label: 'Youth-Focused Programmes',
        href: '/events#youth-focused-programmes',
        children: [
          { label: 'Boot Camps', href: '/education/boot-camps' },
          { label: 'STEM & GEOINT Awareness', href: '/education/stem-geoint-awareness' },
          { label: 'GeoInnovation Challenge', href: '/education/geoinnovation-challenge' }
        ]
      },
      {
        label: 'Women-in-GEOINT Initiatives',
        href: '/events#women-in-geoint-initiatives',
        children: [
          { label: 'Leadership Programmes', href: '/education/women-geospatial-leadership' },
          { label: 'Community Service', href: '/education/community-service-projects' }
        ]
      },
      {
        label: 'Professional Engagement',
        href: '/events#professional-institutional-engagement',
        children: [
          { label: 'GeoCommunity Development', href: '/education/geocommunity-development' },
          { label: 'Networking Events', href: '/education/geoconnect-networking' },
          { label: 'Public Lectures', href: '/education/public-lectures-roundtables' }
        ]
      }
    ];
  
    // 4. Return the finalized MenuItem
    return {
      label: 'Events',
      href: '/events',
      children: [
        { label: 'Upcoming Events', href: '/events#upcoming', children: upcomingLinks },
        { label: 'Past Events', href: '/events#past', children: pastLinks },
        { label: 'Outreach', href: '/events#outreach', children: outreachLinks }
      ]
    };
}