import People from '@/components/people'; 
import Management from '@/components/advisory';
import MembershipClient from './membership-client'; 

export default async function MembershipPage() {
  const peopleSection = <People />;
  const managementSection = <Management />;

  return (
    <MembershipClient>
      {peopleSection}
      {managementSection}
    </MembershipClient>
  );
}