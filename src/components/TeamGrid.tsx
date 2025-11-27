import Image from 'next/image';
import type { FlatMember } from '@/types/types';

export function TeamGrid({ members }: { members: FlatMember[]; }) {
  const sortedMembers = [...members].reverse();

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {sortedMembers.map((m, i) => (
          <div key={i} className="text-center">
            <Image
              src={m.photo}
              alt={m.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />
            <h4 className="text-lg font-semibold">{m.name}</h4>
            <p className="text-sm">{m.role}</p>
            {/* {m.email && <p className="text-sm">{m.email}</p>} */}
          </div>
        ))}
      </div>
    </section>
  );
}
