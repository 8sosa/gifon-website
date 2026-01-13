// src/lib/contentful-queries.ts

import { client } from './contentful';
import type { Asset } from 'contentful';
import type {
  EventSkeleton,
  NewsSkeleton,
  JobSkeleton,
  MembershipTierSkeleton,
  TeamMemberSkeleton,
  FlatNewsPost,
  Job,
  MembershipTier,
  FlatMember,
  MentorSkeleton,
  FlatMentor
} from '@/types/types';
import type { Document } from '@contentful/rich-text-types';

export async function getMentors(): Promise<FlatMentor[]> {
  const entries = await client.getEntries<MentorSkeleton>({ content_type: 'mentor' });

  return entries.items.map((item) => {
    const f = item.fields;
    
    // Handle Image
    const rawUrl = getAssetUrl(f.profilePicture);
    const profilePicture = rawUrl?.startsWith('//')
      ? `https:${rawUrl}`
      : rawUrl ?? '/ph.svg';

    return {
      id: item.sys.id,
      fullName: getString(f.fullName),
      role: getString(f.role),
      profilePicture: profilePicture,
      specializations: getStringArray(f.specializations),
      bioMotto: getString(f.bioMotto),
      mentorshipAreas: getStringArray(f.mentorshipAreas),
      availabilityText: getString(f.availabilityText),
      contactEmail: getString(f.contactEmail),
    };
  });
};

export type FlatEvent = {
  id: string;
  title: string;
  description?: Document | string;
  startDate: string;
  endDate?: string;
  location: string;
  venue: string;
  link: string;
  image: string; // CHANGED: Renamed from 'images' to 'image' to match the data structure
};

/** Helpers narrowing unknown to concrete types */
function getString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function getNumber(value: unknown): number {
  return typeof value === 'number' ? value : 0;
}

function getStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter(v => typeof v === 'string') : [];
}

function getDocument(value: unknown): Document {
  return value as Document;
}

/**
 * Safely extracts `fields.file.url` as a string, or `undefined`.
 */
function getAssetUrl(maybeAsset: unknown): string | undefined {
  const asset = maybeAsset as Asset | undefined;
  const file = asset?.fields?.file;
  if (!file) return undefined;
  const url = file.url;
  return typeof url === 'string' ? url : undefined;
}

/** Fetch & flatten events */
export async function getUpcomingEvents(): Promise<FlatEvent[]> {
  const entries = await client.getEntries<EventSkeleton>({ content_type: 'event' });
  // console.log('Fetched events:', entries.items);

  return entries.items.map((item) => {
    const f = item.fields;

    // 1. IMAGE HANDLING
    // Check if f.images is an array and grab the first one
    const firstImage = Array.isArray(f.images) ? f.images[0] : undefined;
    
    const rawUrl = getAssetUrl(firstImage);
    const image = rawUrl?.startsWith('//')
      ? `https:${rawUrl}`
      : rawUrl ?? '/ph.svg';

    // 2. LOCATION HANDLING
    // Warning: f.location is currently an object {lat, lon}. 
    // getString(f.location) will return "".
    // If you added a text field in Contentful called 'locationName', use that here instead.
    // For now, this prevents the crash but will be empty.
    const locationName = getString(f.location); 

    return {
      id: item.sys.id,
      title: getString(f.title),
      description: getDocument(f.description),
      startDate: getString(f.startDate),
      endDate: getString(f.endDate),
      location: locationName, 
      venue: getString(f.venue),
      link: getString(f.link),
      image, // This now matches FlatEvent.image
    };
  });
}

/** Fetch & flatten news posts */
export async function getNewsPosts(): Promise<FlatNewsPost[]> {
  const entries = await client.getEntries<NewsSkeleton>({ content_type: 'newsPost' });

  return entries.items.map((item) => {
    const f = item.fields;
    const rawUrl = getAssetUrl(f.coverImage);
    const image = rawUrl?.startsWith('//')
      ? `https:${rawUrl}`
      : rawUrl ?? '/ph.svg';

    return {
      id: item.sys.id,
      title: getString(f.title),
      excerpt: getString(f.excerpt),
      date: getString(f.date),
      image,
    };
  });
}

/** Fetch & flatten job listings */
export async function getJobListings(): Promise<Job[]> {
  const entries = await client.getEntries<JobSkeleton>({ content_type: 'jobPosition' });

  return entries.items.map((item) => ({
    title: getString(item.fields.title),
    description: getDocument(item.fields.description),
    link: getString(item.fields.link),
  }));
}

/** Fetch & flatten membership tiers */
export async function getMembershipTiers(): Promise<MembershipTier[]> {
  const entries = await client.getEntries<MembershipTierSkeleton>({ content_type: 'membershipTier' });

  return entries.items.map((item) => ({
    title: getString(item.fields.title),
    description: getString(item.fields.description),
    price: getNumber(item.fields.price),
    benefits: getStringArray(item.fields.benefits),
  }));
}

/** Fetch & flatten team members */
export async function getTeamMembers(): Promise<FlatMember[]> {
  const entries = await client.getEntries<TeamMemberSkeleton>({ content_type: 'teamMember' });

  return entries.items.map((item) => {
    const f = item.fields;
    const rawUrl = getAssetUrl(f.photo);
    const photo = rawUrl?.startsWith('//')
      ? `https:${rawUrl}`
      : rawUrl ?? '/ph.svg';

    return {
      name: getString(f.name),
      role: getString(f.role),
      bio: getString(f.bio),
      email: f.email ? getString(f.email) : undefined,
      category: getString(f.category),
      photo,
    };
  });
}