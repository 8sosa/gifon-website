import { getUpcomingEvents } from "@/lib/contentful-queries";
import HomePageClient from "./HomePageClient";
import { FlatEvent } from "@/types/types";
import type { Document } from "@contentful/rich-text-types";

// --- Server-Side Helper Functions ---
type RichTextNode = {
  nodeType: string;
  value?: string;
  content?: RichTextNode[];
  data?: Record<string, unknown>;
};

function richTextToPlainText(doc?: string | Document | null): string {
  if (!doc) return "";
  if (typeof doc === "string") return doc;
  const collect = (node: RichTextNode): string => {
    if (!node) return "";
    if (node.nodeType === "text") return node.value ?? "";
    if (Array.isArray(node.content)) return node.content.map(collect).join("");
    return "";
  };
  return collect(doc).trim();
}

function excerptFromDescription(desc?: string | Document, length = 120) {
  if (!desc) return "";
  const plain = richTextToPlainText(desc);
  return plain.length > length ? plain.slice(0, length).trim() + "…" : plain;
}

// --- Main Server Component ---
export default async function HomePage() {
  
  // 1. FIX: Correct syntax for typing the array
  let events: FlatEvent[] = [];
  
  try {
    // Ensure the result matches the type (or cast if necessary)
    events = (await getUpcomingEvents()) ?? [];
  } catch (err) {
    console.error("Failed to load events", err);
  }

  // 2. Process Data (Sort and Clean)
  const nowTs = Date.now();
  
  const upcomingEvents = events
    .map((e) => ({
      ...e,
      _startTs: e.startDate ? new Date(e.startDate).getTime() : 0,
      // Convert rich text object to a simple string here
      description: excerptFromDescription(e.description) 
    }))
    .filter((e) => e._startTs >= nowTs)
    .sort((a, b) => a._startTs - b._startTs);

  // 3. Pass clean data to the Client Component
  return <HomePageClient upcomingEvents={upcomingEvents} />;
}