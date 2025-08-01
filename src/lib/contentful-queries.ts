// src/lib/contentful-queries.ts

import { client } from './contentful';
import type { Asset } from 'contentful';
import type {
  EventSkeleton,
  NewsSkeleton,
  JobSkeleton,
  MembershipTierSkeleton,
  TeamMemberSkeleton,
  FlatEvent,
  FlatNewsPost,
  Job,
  MembershipTier,
  FlatMember
} from '@/types/types';
import type { Document } from '@contentful/rich-text-types';

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

  // Grab the file object (or undefined)
  const file = asset?.fields?.file;
  if (!file) return undefined;

  // Make extra sure `url` is a string
  const url = file.url;
  return typeof url === 'string' ? url : undefined;
}
/** Fetch & flatten events */
export async function getUpcomingEvents(): Promise<FlatEvent[]> {
  const entries = await client.getEntries<EventSkeleton>({ content_type: 'event' });

  return entries.items.map((item) => {
    const f = item.fields;
    const rawUrl = getAssetUrl(f.image);
    const image = rawUrl?.startsWith('//')
      ? `https:${rawUrl}`
      : rawUrl ?? '/ph.svg';

    return {
      id: item.sys.id,
      title: getString(f.title),
      description: getDocument(f.description),
      startDate: getString(f.startDate),
      endDate: getString(f.endDate),
      location: getString(f.location),
      link: getString(f.link),
      image,
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
      email: f.email ? getString(f.email) : undefined,
      category: getString(f.category),
      photo,
    };
  });
}
