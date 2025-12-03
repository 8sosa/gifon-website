import { notFound } from "next/navigation";
import { getUpcomingEvents } from "@/lib/contentful-queries";
import { FlatEvent } from "@/types/types";
import RegistrationForm from "@/components/RegistrationForm";

type Props = {
  params: Promise<{ id: string }>;
};

// 1. Fetch Helper (Server Side)
async function getEventById(id: string): Promise<FlatEvent | null> {
  const events = (await getUpcomingEvents()) ?? [];
  return events.find((e) => e.id === id) ?? null;
}

// 2. Formatter Helpers
function formatDate(dateString?: string) {
  if (!dateString) return "Date TBA";
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

// 3. The Server Page Component
export default async function RegisterPage({ params }: Props) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  // 4. Map 'FlatEvent' to the format 'RegistrationForm' expects
  const mappedEvent = {
    id: event.id,
    title: event.title,
    date: formatDate(event.startDate),
    time: "09:00 AM - 05:00 PM", // You can update this if you add a time field to Contentful later
    location: event.venue || event.location || "Location to be announced",
    image: event.image || "/media/Conference Background.jpg",
  };

  // 5. Render the Client Form with the Fetched Data
  return <RegistrationForm event={mappedEvent} />;
}