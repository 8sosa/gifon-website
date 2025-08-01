import type { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

/** Contentful “skeleton” types for getEntries<T> */
export interface EventSkeleton {
  contentTypeId: 'event';
  fields: {
    title: string;
    description: Document;
    startDate: string;
    endDate?: string;
    location: string;
    link?: string;
    image?: Asset;
  };
}

export interface NewsSkeleton {
  contentTypeId: 'newsPost';
  fields: {
    title: string;
    excerpt: string;
    date: string;
    coverImage?: Asset;
  };
}

export interface JobSkeleton {
  contentTypeId: 'jobPosition';
  fields: {
    title: string;
    description: Document;
    link: string;
  };
}

export interface MembershipTierSkeleton {
  contentTypeId: 'membershipTier';
  fields: {
    title: string;
    description: string;
    price: number;
    benefits: string[];
  };
}

export interface TeamMemberSkeleton {
  contentTypeId: 'teamMember';
  fields: {
    name: string;
    role: string;
    email?: string;
    category: string;
    photo?: Asset;
  };
}

/** Flattened shapes for UI consumption */
export type FlatEvent = {
  id: string;
  title: string;
  description: Document;
  startDate: string;
  endDate?: string;
  location: string;
  link: string;
  image: string;
};

export type FlatNewsPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export type Job = {
  title: string;
  description: Document;
  link: string;
};

export type MembershipTier = {
  title: string;
  description: string;
  price: number;
  benefits: string[];
};

export type FlatMember = {
  name: string;
  role: string;
  email?: string;
  category: string;
  photo: string;
};
