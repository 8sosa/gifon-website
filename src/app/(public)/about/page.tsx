import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, Logo } from '@/components/LogoCarousel';
import MotionDiv from "@/components/MotionDiv"; 
import MotionImg from "@/components/MotionImg";
import { Globe, Shield, Users, Rocket, Sparkles } from 'lucide-react';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/nn.png', alt: 'Nigerian Navy' },
];

function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
  return members.filter((member) => member.category === category);
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default async function AboutPage() {
  const members: FlatMember[] = await getTeamMembers();

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description="Advancing geospatial intelligence to support Nigeria’s security, development, and decision-making."
        backgroundImages={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />

      {/* Aim Section with side image */}
      <section id="aim" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-6">Our Aim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) is a GEOINT organization
              dedicated to leveraging cutting-edge geospatial technologies...
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded to bridge the gap between innovative geospatial technologies and national
              decision-making...
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our initiatives include capacity building, training programs, and policy advocacy...
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through collaboration, innovation, and shared expertise, GIFON is committed to improving lives,
              driving socio-economic growth, and fostering a data-driven future.
            </p>
          </MotionDiv>
          <MotionImg
            src='/bg/c.JPG'
            alt="Geospatial innovation"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Objectives as icon cards */}
      <section id="objectives" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe size={40} />, text: 'Empowering national development through GEOINT' },
              { icon: <Shield size={40} />, text: 'Strengthening security with actionable intelligence' },
              { icon: <Users size={40} />, text: 'Building collaboration across sectors' },
            ].map((obj, i) => (
              <MotionDiv
                key={i}
                className="p-8 bg-white shadow-lg rounded-2xl flex flex-col items-center space-y-4 hover:shadow-xl transition"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="text-primary">{obj.icon}</div>
                <p className="text-gray-700">{obj.text}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision split */}
      <section id="mission-vision" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <MotionDiv
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          >
            <h2 className="text-3xl font-semibold mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              GIFON is dedicated to advancing the understanding, development, and responsible
              application of geospatial intelligence...
            </p>
          </MotionDiv>
          <MotionDiv
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          >
            <h2 className="text-3xl font-semibold mb-4">Vision</h2>
            <blockquote className="italic text-gray-800">
              To be Nigeria’s leading catalyst for geospatial innovation, empowering national
              development through actionable intelligence...
            </blockquote>
          </MotionDiv>
        </div>
      </section>

      {/* Core Values with futuristic gradient cards */}
      <section id="core-values" className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles />, title: 'Innovation' },
              { icon: <Rocket />, title: 'Progress' },
              { icon: <Users />, title: 'Collaboration' },
              { icon: <Shield />, title: 'Integrity' },
            ].map((val, i) => (
              <MotionDiv
                key={i}
                className="p-6 bg-white/10 backdrop-blur rounded-2xl shadow-lg hover:bg-white/20 transition flex flex-col items-center space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-primary">{val.icon}</div>
                <h3 className="text-xl font-semibold">{val.title}</h3>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section id="board-directors" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Board of Trustees</h2>
          <TeamGrid members={mapMembersByCategory(members, 'Board')} />
        </div>
      </section>

      {/* Partners */}
      <section id="our-partners" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
          <LogoCarousel logos={partners} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <MotionDiv
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            For inquiries, please reach out to us at:
          </p>
          <p className="text-gray-900 font-medium mt-4">📧 info@gifon.org</p>
          <p className="text-gray-900 font-medium">📞 +234 800 000 0000</p>
        </MotionDiv>
      </section>
    </>
  );
}
