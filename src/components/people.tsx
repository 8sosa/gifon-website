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
        <section id="board-directors" className="py-20 px-6 bg-gray-50fullSect ">
            <div className="max-w-6xl mx-auto">
            <h2 className="cooper text-4xl font-bold mb-8 text-center">Pioneer Members</h2>
            <TeamGrid members={mapMembersByCategory(members, 'Board')} />
            </div>
        </section>
  )
}
