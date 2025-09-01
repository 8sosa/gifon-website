import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import {getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, Logo } from '@/components/LogoCarousel';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/nn.png', alt: 'Nigerian Navy' },
  { src: '/images/nsa.png', alt: 'Office of the National Security Adviser' },
];

function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
  return members.filter(member => member.category === category);
}

export default async function AboutPage() {
  const members: FlatMember[] = await getTeamMembers();

  return (
    <>
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description="Advancing geospatial intelligence to support Nigeria’s security, development, and decision-making."
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <section id="aim" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Aim</h2>
          <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) is a GEOINT organization
              dedicated to leveraging cutting-edge geospatial technologies and intelligence to
              transform Nigeria’s future. Our mission is to enhance national development, promote
              security, improve public services, and empower professional communities through the
              strategic use of geospatial data.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Founded to bridge the gap between innovative geospatial technologies and national
              decision-making, GIFON serves as a catalyst for change across sectors such as defence,
              intelligence, security, urban planning, agriculture, disaster management, transportation,
              health, and environmental protection. We work alongside government institutions, donors,
              private sector partners, academia, and civil society organizations to ensure that
              accurate, timely, and actionable spatial data becomes an integral part of policy and
              development strategies at all levels.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our initiatives include capacity building, training programs, and policy advocacy aimed
              at creating a skilled workforce of geospatial professionals and enhancing the understanding
              of geospatial intelligence as a tool for effective governance and sustainable development.
              We believe that location intelligence is the cornerstone of informed decision-making and
              a more resilient, inclusive Nigeria.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Through collaboration, innovation, and shared expertise, GIFON is committed to improving
              lives, driving socio-economic growth, and fostering a data-driven future for all.
            </p>
        </div>
      </section>

      <section id="objectives" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Objectives</h2>
          <p className="text-gray-700 leading-relaxed">
            To be Nigeria’s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.
          </p>
        </div>
      </section>

      <section id="mission" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mission Statement</h2>
          <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) is dedicated to advancing
              the understanding, development, and responsible application of geospatial intelligence
              (GEOINT) to support national security, economic development, humanitarian efforts, and
              informed decision-making. We foster collaboration between government, industry, and
              academia to drive innovation, build a skilled workforce, and promote the ethical use
              of geospatial data and technologies.
          </p>
        </div>
      </section>

      <section id="vision" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <blockquote className="italic text-gray-800">
            To be Nigeria’s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.
          </blockquote>
        </div>
      </section>
      
      <section id="core-values" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <blockquote className="italic text-gray-800">
            To be Nigeria’s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.
          </blockquote>
        </div>
      </section>

      <section id="board-directors" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Board of Trustees</h2>
          <TeamGrid members={mapMembersByCategory(members, "Board")} />
        </div>
      </section>

      <section id="our-partners" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Partners</h2>
          <LogoCarousel logos={partners}  />
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-gray-50">
        <h1>Contact Us</h1>
        <p className="text-gray-700 leading-relaxed">
          For inquiries, please reach out to us at:
          <br />
            <p className="text-gray-700 leading-relaxed">Email: info@gifon.org</p>
            <p className="text-gray-700 leading-relaxed">Phone: +234 800 000 0000</p>
        </p>
      </section>
    </>
  );
}
