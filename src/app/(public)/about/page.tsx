import HeroSection from '@/components/HeroSection';
import FoundationDetailsSection from './FoundationDetailsSection';
// import { TeamGrid } from '@/components/TeamGrid';
import { JobListing } from '@/components/JobListing';

import {
  //  getTeamMembers, 
  getJobListings } from '@/lib/contentful-queries';
import { 
  // FlatMember,
   Job } from '@/types/types';

// function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
//   return members.filter(member => member.category === category);
// }

export default async function AboutPage() {
  // const members: FlatMember[] = await getTeamMembers();
  const jobs: Job[] = await getJobListings();

  return (
    <>
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description="Advancing geospatial intelligence to support Nigeria’s security, development, and decision-making."
        backgroundImage="/ph.svg"
      />

      <FoundationDetailsSection />

      {/* --- Additional Static Sections with Dummy Content --- */}
      <section id="our-story" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section id="our-vision" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section id="our-mandate" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mandate</h2>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      <section id="message-founder" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Message from Founder</h2>
          <blockquote className="italic text-gray-800">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </blockquote>
        </div>
      </section>

      <section id="board-trustees" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Board of Trustees</h2>
          <p className="text-gray-700 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section id="executive-leadership" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Executive Leadership</h2>
          <p className="text-gray-700 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </section>

      <section id="our-partners" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Partners</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Partner A</li>
            <li>Partner B</li>
            <li>Partner C</li>
          </ul>
        </div>
      </section>

      {/* --- End of Static Sections --- */}

      {/* <TeamGrid title="Board of Directors" members={mapMembersByCategory(members, "Board")} />
      <TeamGrid title="Advisory Committee" members={mapMembersByCategory(members, "Advisory")} />
      <TeamGrid title="Our Team" members={mapMembersByCategory(members, "Team")} /> */}
      <JobListing jobs={jobs} />
    </>
  );
}
