import { infrastructureList } from '../app/(public)/infrastructure/infrastructure';
import resourcesData from '../app/(public)/resources/resources';

export type SearchItem = {
  id: string;
  title: string;
  description: string;
  category: 'Page' | 'Event' | 'Resource' | 'Sector' | 'Forum';
  href: string;
};

// --- TYPE DEFINITIONS ---
// Define interfaces for your data items to avoid using 'any'

interface Publication {
  id?: string;
  title: string;
  description?: string;
  link?: string;
}

interface Download {
  title: string;
  type?: string;
  size?: string;
  link?: string;
}

interface NewsItem {
  title: string;
  description?: string;
  date?: string;
  link?: string;
}

interface PressItem {
  title: string;
  date?: string;
  link?: string;
}

interface PodcastItem {
  title: string;
  description?: string;
  link?: string;
}

interface WebinarItem {
  title: string;
  description?: string;
  status?: string;
  link?: string;
}

interface GalleryItem {
  title?: string;
  type?: string;
  link?: string;
}

// --- 1. Static Pages ---
const staticPages: SearchItem[] = [
  { id: 'page-home', title: 'Home', description: 'GIFON Homepage', category: 'Page', href: '/' },
  { id: 'page-about', title: 'About Us', description: 'Mission, Vision, and Board of Trustees', category: 'Page', href: '/about' },
  { id: 'page-membership', title: 'Membership', description: 'Join GIFON, Benefits, and Categories', category: 'Page', href: '/membership' },
  { id: 'page-education', title: 'Education', description: 'Training, Workshops, and Capacity Building', category: 'Page', href: '/education' },
  { id: 'page-events', title: 'Events', description: 'Upcoming summits and conferences', category: 'Page', href: '/events' },
  { id: 'page-resources', title: 'Media Resources', description: 'News, Publications, and Downloads', category: 'Page', href: '/resources' },
  { id: 'page-donate', title: 'Get Involved', description: 'Donate, Volunteer, or Sponsor', category: 'Page', href: '/get-involved' },
  { id: 'page-contact', title: 'Contact Us', description: 'Get in touch with us', category: 'Page', href: '/contact-us' },
  { id: 'page-policies', title: 'Policies', description: 'Ethics, Anti-Corruption, and Governance', category: 'Page', href: '/policies' },
];

// --- 2. Infrastructure Sectors (Dynamic) ---
const sectorItems: SearchItem[] = infrastructureList.map((sector) => ({
  id: `sector-${sector.id}`,
  title: sector.title,
  description: sector.summary,
  category: 'Sector',
  href: `/infrastructure#${sector.id}`,
}));

// --- 3. Resources (Fully Dynamic Logic with Types) ---

// Map Publications
const publicationItems: SearchItem[] = (resourcesData.publications || []).map((pub: Publication, idx: number) => ({
  id: `pub-${pub.id || idx}`,
  title: pub.title,
  description: pub.description || 'Publication resource',
  category: 'Resource',
  href: pub.link || '/resources#publications',
}));

// Map Downloads
const downloadItems: SearchItem[] = (resourcesData.downloads || []).map((dl: Download, idx: number) => ({
  id: `dl-${idx}`,
  title: dl.title,
  description: `Downloadable ${dl.type || 'File'} (${dl.size || 'Size unknown'})`,
  category: 'Resource',
  href: dl.link || '/resources#Downloads',
}));

// Map News
const newsItems: SearchItem[] = (resourcesData.news || []).map((item: NewsItem, idx: number) => ({
  id: `news-${idx}`,
  title: item.title,
  description: item.description || `News update${item.date ? ' from ' + item.date : ''}`,
  category: 'Resource',
  href: item.link || '/resources#News',
}));

// Map Press Releases
const pressItems: SearchItem[] = (resourcesData.press || []).map((item: PressItem, idx: number) => ({
  id: `press-${idx}`,
  title: item.title,
  description: `Press Release${item.date ? ' (' + item.date + ')' : ''}`,
  category: 'Resource',
  href: item.link || '/resources#Press',
}));

// Map Podcasts
const podcastItems: SearchItem[] = (resourcesData.podcasts || []).map((item: PodcastItem, idx: number) => ({
  id: `pod-${idx}`,
  title: item.title,
  description: item.description || 'Podcast Episode',
  category: 'Resource',
  href: item.link || '/resources#Podcast',
}));

// Map Webinars
const webinarItems: SearchItem[] = (resourcesData.webinars || []).map((item: WebinarItem, idx: number) => ({
  id: `web-${idx}`,
  title: item.title,
  description: item.description || `Webinar (${item.status || 'Event'})`,
  category: 'Resource',
  href: item.link || '/resources#Webinar',
}));

// Map Gallery (Photos & Videos)
const galleryItems: SearchItem[] = (resourcesData.gallery || []).map((item: GalleryItem, idx: number) => ({
  id: `gal-${idx}`,
  title: item.title || 'Gallery Media',
  description: item.type === 'video' ? 'Video Content' : 'Photo Gallery',
  category: 'Resource',
  href: item.link || '/resources#Gallery',
}));

// Combine all resource arrays
const resourceItems: SearchItem[] = [
  ...publicationItems,
  ...downloadItems,
  ...newsItems,
  ...pressItems,
  ...podcastItems,
  ...webinarItems,
  ...galleryItems,
];

// --- 4. Forums (Static List) ---
const forumItems: SearchItem[] = [
    { id: 'forum-yp', title: 'Young Professionals Forum', description: 'Mentorship and growth for the next generation', category: 'Forum', href: '/forums#young-professionals' },
    { id: 'forum-wings', title: 'Women in GEOINT (WINGS)', description: 'Empowering women in geospatial intelligence', category: 'Forum', href: '/forums#women-in-geoint' },
    { id: 'forum-industry', title: 'Industry & Private Sector Forum', description: 'Driving innovation and investment', category: 'Forum', href: '/forums#industry' },
    { id: 'forum-policy', title: 'Policy, Governance & Ethics', description: 'Oversight and policy direction', category: 'Forum', href: '/forums#policy' },
    { id: 'forum-academia', title: 'Academia & Research', description: 'Partnerships with universities', category: 'Forum', href: '/forums#academia' },
];

// --- 5. Export Global Index ---
export const globalSearchIndex: SearchItem[] = [
  ...staticPages,
  ...sectorItems,
  ...resourceItems,
  ...forumItems
];