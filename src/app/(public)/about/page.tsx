import HeroSection from '@/components/HeroSection';
import FoundationDetailsSection from './FoundationDetailsSection';
import { TeamGrid } from '@/components/TeamGrid';
import { JobListing } from '@/components/JobListing';

import { getTeamMembers, getJobListings } from '@/lib/contentful-queries';
import { FlatMember, Job } from '@/types/types';

function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
  return members.filter(member => member.category === category);
}

export default async function AboutPage() {
  const members: FlatMember[] = await getTeamMembers();
  const jobs: Job[] = await getJobListings();

  return (
    <>
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description="Advancing geospatial intelligence to support Nigeria’s security, development, and decision-making."
        backgroundImage="/ph.svg"
      />
      <FoundationDetailsSection />
      <TeamGrid title="Board of Directors" members={mapMembersByCategory(members, "Board")} />
      <TeamGrid title="Advisory Committee" members={mapMembersByCategory(members, "Advisory")} />
      <TeamGrid title="Our Team" members={mapMembersByCategory(members, "Team")} />
      <JobListing jobs={jobs} />
    </>
  );
}
