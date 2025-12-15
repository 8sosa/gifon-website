import People from '@/components/people'; 
import MembershipClient from './membership-client'; 

export default async function MembershipPage() {
  const peopleSection = <People />;

  return (
    <MembershipClient>
      {peopleSection}
    </MembershipClient>
  );
}