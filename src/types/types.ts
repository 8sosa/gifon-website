import type { EntrySkeletonType, EntryFieldTypes, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

/** Contentful “skeleton” types for getEntries<T> */

export type FlatMentor = {
  id: string;
  fullName: string;
  role: string;
  profilePicture: string;
  specializations: string[];
  bioMotto: string;
  mentorshipAreas: string[];
  availabilityText: string;
  contactEmail: string;
};

export type MentorSkeleton = {
  contentTypeId: 'mentor';
  fields: {
    fullName: EntryFieldTypes.Symbol;
    role: EntryFieldTypes.Symbol;
    profilePicture: EntryFieldTypes.AssetLink;
    specializations: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    bioMotto: EntryFieldTypes.Text;
    mentorshipAreas: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    availabilityText: EntryFieldTypes.Text;
    contactEmail: EntryFieldTypes.Symbol;
  };
};

export type EventSkeleton = {
  contentTypeId: 'event';
  fields: {
    title: EntryFieldTypes.Symbol;
    // CHANGED: defined as an Array of Assets
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>; 
    description: EntryFieldTypes.RichText;
    startDate: EntryFieldTypes.Symbol;
    endDate: EntryFieldTypes.Symbol;
    // CHANGED: explicitly defined as Location
    location: EntryFieldTypes.Location; 
    venue: EntryFieldTypes.Symbol; 
    link: EntryFieldTypes.Symbol;
  };
};

export interface NewsSkeleton {
  contentTypeId: 'newsPost';
  fields: {
    title: string;
    excerpt: string;
    date: string;
    coverImage?: Asset;
  };
};

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
    bio?: string;
    quote?: string;
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
  venue: string;
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
  bio?: string;
  quote?: string;
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
  // individualMembershipType: IndividualMembershipType;
  // membershipDuration: MembershipDuration;
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
  // membershipDuration: MembershipDuration;
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

export interface PioneerSkeleton extends EntrySkeletonType {
  contentTypeId: 'pioneer';
  fields: {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol; // Section 1 [cite: 7]
    nationality?: EntryFieldTypes.Symbol; // Section 1 [cite: 8]
    gender?: EntryFieldTypes.Symbol; // Section 1 [cite: 9]
    currentPosition?: EntryFieldTypes.Symbol; // Section 3 
    organization?: EntryFieldTypes.Symbol; // Section 3 [cite: 19]
    sector?: EntryFieldTypes.Symbol; // Section 3 [cite: 20]
    picture: EntryFieldTypes.AssetLink; // Section 2 [cite: 13]
    areasOfSpecialisation?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>; // Section 4 [cite: 29]
    bio?: EntryFieldTypes.RichText; // Section 5 [cite: 35]
    achievements?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>; // Section 6 [cite: 39]
    mentor: EntryFieldTypes.Boolean; // Section 8 [cite: 46]
    mentorshipFocusAreas?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>; // Section 8 [cite: 49]
    email?: EntryFieldTypes.Symbol; // Section 9 [cite: 56]
    linkedIn?: EntryFieldTypes.Symbol; // Section 9 [cite: 60]
    quote?: EntryFieldTypes.RichText; // Section 10 [cite: 62]
    accuracyConfirmation?: EntryFieldTypes.Boolean; // Section 11 [cite: 66]
    declarationDate?: EntryFieldTypes.Date; // Section 11 [cite: 68]
  };
}

export type FlatPioneer = {
  id: string;
  name: string;
  title: string;
  nationality?: string;
  gender?: string;
  role: string; // Now maps to currentPosition
  organization?: string;
  sector?: string;
  photo: string;
  specialisations: string[];
  bio?: Document;
  achievements: string[];
  mentor: boolean;
  mentorshipFocusAreas: string[];
  email?: string;
  linkedIn?: string;
  quote?: Document;
};