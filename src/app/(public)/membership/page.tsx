import People from '@/components/people'; 
import { getPioneers } from '@/lib/contentful-queries';
import MembershipClient from './membership-client'; 

export default async function MembershipPage() {
  const pioneers = await getPioneers();
  const peopleSection = <People />;

  return (
    <MembershipClient pioneers={pioneers}>
      {peopleSection}
    </MembershipClient>
  );
}