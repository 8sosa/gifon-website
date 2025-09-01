import type { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

/** Contentful “skeleton” types for getEntries<T> */
export interface EventSkeleton {
  contentTypeId: 'event';
  fields: {
    title: string;
    description?: Document | string;
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
  description?: Document | string;
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


// POST /api/v1/individual-membership/register
export interface IndividualMembershipRequestBody {
  fullName: string;
  gender: Gender;
  dateOfBirth: string; // ISO string
  nationality: string;
  email: string;
  phoneNumber: string;
  altPhoneNumber: string;
  homeAddress: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
  linkedinProfile?: string;
  twitterHandle?: string;
  facebookProfile?: string;
  occupation: string;
  organization: string;
  jobTitle: string;
  yearsExperience: number;
  geospatialExpertise: GeospatialExpertise[];
  professionalQualifications: string;
  areasOfInterest: AreaOfInterest[];
  individualMembershipType: IndividualMembershipType;
  membershipDuration: MembershipDuration;
  howDidYouHearAboutGifon: ReferralSource;
  password: string;
  amount: number
}

export interface IndividualMembershipResponseBody {
  message: string;
  authorizationUrl?: string; // For Paystack
  sessionId?: string;        // For Stripe
  sessionUrl?: string;       // For Stripe
}
// OrganizationMembershipType Enum
export type OrganizationMembershipType =
  "FreeTier" |
  "Corporate" |
  "Institutional" |
  "ResearchAndAcademic"
;
// POST /api/v1/individual-membership/upgrade-individual-membership
export interface UpgradeIndividualMembershipRequest {
  amount: number;
  individualMembershipType: IndividualMembershipType;
  membershipDuration: MembershipDuration;
}

export interface UpgradeIndividualMembershipResponse {
  message: string;
  authorizationUrl?: string; // For Paystack
  sessionId?: string;        // For Stripe
  sessionUrl?: string;       // For Stripe
}

// POST /api/v1/organization-membership/register
export interface OrganizationMembershipRequestBody {
  email: string;
  organizationName: string;
  primaryContactName: string;
  positionTitle: string;
  organizationAddress: string;
  city: string;
  state: string;
  postalCode: string;
  organizationWebsite?: string;
  facebookHandle?: string;
  twitterHandle?: string;
  linkedinHandle?: string;
  industrySector: IndustrySector;
  numberOfEmployees?: number;
  contribution: string;
  membershipDuration: MembershipDuration;
  country: string;
  password: string;
  amount: number;
}

export interface OrganizationMembershipResponse {
  message: string;
  authorizationUrl?: string; // For Paystack
  sessionId?: string;        // For Stripe
  sessionUrl?: string;       // For Stripe
}

// IndustrySector Enum
export type IndustrySector =
  "Government" |
  "PrivateSector" |
  "AcademiaResearch" |
  "NonProfitNGO" |
  "Other";

// POST /api/v1/organization-membership/upgrade-individual-membership

export interface UpgradeOrganizationMembershipRequest {
  amount: number;
  organizationalMembershipType: OrganizationMembershipType;
  membershipDuration: MembershipDuration;
}

export interface UpgradeOrganizationMembershipResponse {
  message: string;
  authorizationUrl?: string; // For Paystack
  sessionId?: string;        // For Stripe
  sessionUrl?: string;       // For Stripe
}

export type Gender = "Male" | "Female" | "Other";
export type GeospatialExpertise = "GIS" | "RemoteSensing" | "Cartography" | "DataAnalysis" | "SpatialModelling";
export type AreaOfInterest = 
  | "NationalSecurityAndDefense"
  | "DisasterManagement"
  | "UrbanPlanningAndDevelopment"
  | "EnvironmentalMonitoring"
  | "AgricultureAndLandUse"
  | "TransportationAndInfrastructure"
  | "ClimateChangeAndSustainability"
  | "ResearchAndEducation";
export type IndividualMembershipType = "FreeTier" | "Professional" | "Student" | "Honorary";
export type MembershipDuration = "OneYear" | "TwoYears" | "ThreeYears" | "Lifetime";
export type ReferralSource = "Online" | "WordOfMouth" | "EventConference" | "Referral" | "Other";
