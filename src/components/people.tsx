import React from 'react'
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';

function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
    return members.filter((member) => member.category === category);
  }

export default async function People () {
    const members: FlatMember[] = await getTeamMembers();

  return (
      <section id="management-team" className="py-24 px-4 md:px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Sticky Title & Context */}
            <div className="lg:w-1/3 lg:sticky lg:top-24 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Management <br/> <span className="text-green-600">Team</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our Executive Team drives <span className="cooper">GIFON</span>&apos;s mission with expertise, vision, leadership, and advancing Geospatial intelligence, national security, and sustainable development in Nigeria.
              </p>
              
              {/* Decorative Stat or Quote */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hidden lg:block">
                <p className="italic text-gray-500 mb-4">"Leading with Insights. Securing with intelligence. Innovating for Nigeria."</p>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-10 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-semibold text-gray-900"><span className="cooper">GIFON</span> Executive</p>
                </div>
              </div>
            </div>

            {/* Right Column: The Grid */}
            <div className="lg:w-2/3 w-full">
              <TeamGrid members={mapMembersByCategory(members, 'Advisory')} />
            </div>

          </div>
        </div>
      </section>
  )
}
