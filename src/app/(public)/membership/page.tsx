import People from '@/components/people';                 // Our Server Component
import MembershipClient from './membership-client';     // Our Client Component

export default async function MembershipPage() {

  // 1. We are on the server, so we can render <People />
  const peopleSection = <People />;

  // 2. Now, render the Client component and pass the
  //    server component into it as its 'child'.
  return (
    <MembershipClient>
      {peopleSection}
    </MembershipClient>
  );
}