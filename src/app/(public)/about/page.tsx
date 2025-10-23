import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, Logo } from '@/components/LogoCarousel';
import Image from 'next/image';
import Link from 'next/link';

import MotionDiv from "@/components/MotionDiv"; 
import MotionImg from "@/components/MotionImg";
import { Globe, Shield, Users, Rocket, Sparkles} from 'lucide-react';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/dgi.jpeg', alt: 'DGI London' },
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
        title="About Us"
        // description=""
        backgroundImages={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />
    <main className="py-12 font-sans text-gray-800">
      {/* About Us */}
      <section className="p-16 mb-16 text-center flex flex-row">
        <div className="flex-1 mb-6 md:mb-0">
          <Image
            src="/ph.svg" 
            alt="Featured StoryMap"
            width={600}
            height={300}
            className="rounded shadow"
          />
        </div>
        <div className='flex flex-col items-start pl-16'>
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Welcome!
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
          <p className="max-w-3xl mx-auto mb-4 text-left">
            The Geospatial Professional Network is a vibrant community uniting
            emerging and experienced GIS professionals through top-tier education,
            networking, and career development. We are committed to upholding
            ethical standards, empowering you to support your organization,
            advance your career, and shape the future of the geospatial
            profession.
          </p>
          <p className="max-w-3xl mx-auto text-left">
            The Urban and Regional Information Systems Association (URISA) is a
            nonprofit 501(c)3 association incorporated in 1966. Moving forward,
            URISA will be doing business as the Geospatial Professional Network.
          </p>
          <Link href={"/leadership"}>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition">
            leadership & History
          </button>
          </Link>
        </div>
      </section>

      {/* Aim Section with side image */}
      <section id="aim" className="py-20 px-6 bg-white fullSect">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-6">Our Aim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The aim of the Geospatial Intelligence Foundation of Nigeria (GIFON) is to harness the power of geospatial data and technology to drive sustainable development, enhance national security, and empower decision-making across all sectors in Nigeria. Through innovation, education, collaboration, and policy frameworks, the Foundation strives to position Nigeria as a leader in the global geospatial intelligence community, ensuring that geospatial solutions contribute to the nation’s socio-economic progress, environmental sustainability, and resilience to future challenges. This aim emphasizes the Foundation’s commitment to Nigeria’s growth, security, and leadership in the geospatial sector, while focusing on the broad impact of geospatial intelligence on governance, development, advancing sustainable development and global cooperation.
            </p>
            {/* <p className="text-gray-700 leading-relaxed mb-4">
              Founded to bridge the gap between innovative geospatial technologies and national
              decision-making...
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our initiatives include capacity building, training programs, and policy advocacy...
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through collaboration, innovation, and shared expertise, GIFON is committed to improving lives,
              driving socio-economic growth, and fostering a data-driven future.
            </p> */}
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
      <section id="objectives" className="py-20 px-6 bg-gray-50 fullSect">
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
      <section id="mission-vision" className="py-20 px-6 bg-white fullSect">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <MotionDiv
            className="bg-gray-50 p-8 rounded-2xl shadow-md"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          >
            <h2 className="text-3xl font-semibold mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) is dedicated to advancing the understanding, development, and responsible application of geospatial intelligence (GEOINT) to support national security, economic development humanitarian efforts, and informed decision-making. We foster collaboration between government, industry, and academia to drive innovation, build a skilled workforce, and promote the ethical use of geospatial data and technologies.
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
              To be Nigeria’s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.
            </blockquote>
          </MotionDiv>
        </div>
      </section>

      {/* Core Values with futuristic gradient cards */}
      <section id="core-values" className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white fullSect">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles />, title: 'Innovation', desc: 'We are at the forefront of technological advancements in geospatial intelligence. By fostering a culture of creativity and continuous learning, we strive to pioneer new ways of utilizing geospatial data to solve the complex challenges facing Nigeria.' },
              { icon: <Rocket />, title: 'Excellence', desc: `We are committed to the pursuit of excellence in all aspects of our work. From research to practical applications, we deliver high-quality solutions that meet global standards and drive measurable impact for Nigeria's development.` },
              { icon: <Users />, title: 'Collaboration', desc: 'We believe in the power of partnerships. Through collaboration with governments, academia, the private sector, and international stakeholders, we seek to harness collective expertise, resources, and networks to advance the field of geospatial intelligence.' },
              { icon: <Shield />, title: 'Integrity', desc: 'We uphold the highest standards of ethics, transparency, and accountability in everything we do. Trust is the foundation of geospatial intelligence, and we are committed to ensuring that our data, analyses, and partnerships are built on honesty and reliability.' },
              { icon: <Shield />, title: 'Sustainability', desc: 'We prioritize sustainable practices in our use of geospatial technologies, advocating for long-term solutions that balance economic growth with environmental and social responsibility. Our aim is to ensure that geospatial intelligence supports the sustainable development of Nigeria and the broader African continent.' },
              { icon: <Shield />, title: 'Accessibility', desc: 'We believe that geospatial intelligence should be accessible to all, from government policymakers to local communities. We are committed to democratizing the use of geospatial data by making it understandable, usable, and impactful for diverse stakeholders across Nigeria.' },
              { icon: <Shield />, title: 'Leadership', desc: 'We strive to be the leaders in the geospatial intelligence community in Nigeria and Africa. We advocate for geospatial technologies in shaping policy, decision-making, and governance, positioning the Foundation as a key player in national and regional development.' },
              { icon: <Shield />, title: 'Commitment to National Development', desc: `Our core mission is to support Nigeria's growth and development through strategic use of geospatial intelligence. Whether in urban planning, disaster management, national security, or agriculture, we are dedicated to improving the quality of life for Nigerians through data-driven insights.` },
              { icon: <Shield />, title: 'Inclusivity', desc: 'We embrace diversity and inclusivity, ensuring that geospatial intelligence is used to empower all Nigerians, regardless of their background, to make informed decisions that drive progress and reduce inequalities.' },
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
                <p className="italic text-gray-400">{val.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section id="board-directors" className="py-20 px-6 bg-gray-50fullSect ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Board of Trustees</h2>
          <TeamGrid members={mapMembersByCategory(members, 'Board')} />
        </div>
      </section>

      {/* Partners */}
      <section id="our-partners" className="py-20 px-6 bg-white fullSect">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
          <LogoCarousel logos={partners} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center fullSect">
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
          <p className="text-gray-900 font-medium mt-4">📧 secretariat@gifon.org.ng</p>
          <p className="text-gray-900 font-medium">📞 Director General: +234 707 739 6612</p>
          <p className="text-gray-900 font-medium">📞 Membership/Outreach: +234 707 726 9829</p>
          <p className="text-gray-900 font-medium">📞 Secretariat: +234 707 721 1243</p>
        </MotionDiv>
      </section>

      {/* Leadership & History */}
      <section className="p-16 mb-16">
        <div className="inline-block mb-6 text-left">
          <h2 className="text-green-600 text-2xl font-semibold">
            What We Do
          </h2>
          {/* Short underline */}
          <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
        </div>
      </section>

      {/* Grid of Offerings */}
      <section className="p-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          { title: "Education & Training", desc: "Relevant peer-to-peer interactions, opportunities to advance the profession, newsletters, and career resources.", link: "#" },
          { title: "Membership", desc: "Publications, fact sheets, podcasts, conference proceedings, peer-reviewed URISA Journal articles, Salary Surveys, and white papers.", link: "#" },
          { title: "Resources", desc: "Countless tools to support your GIS career.", link: "#" },
          { title: "Contributions", desc: "Mentorship, committees, advocacy — lend your voice to the profession.", link: "#" },
          { title: "Local Chapters", desc: "Discover a local network and get involved. Joining GPN means joining your chapter.", link: "#" },
          { title: "Next Generation", desc: "Opportunities to contribute and shine. The Vanguard Cabinet is an amazing career stepping stone.", link: "#" },
          { title: "Recognition", desc: "From the GIS Hall of Fame to Exemplary Systems Awards, we celebrate Excellence in GIS.", link: "#" },
          { title: "GISCorps", desc: "Volunteers provide GIS expertise worldwide for underdeveloped countries and disaster recovery.", link: "#" },
          ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow-sm hover:shadow-md transition items-center flex flex-col gap-1"
          >
            <h3 className="text-xl font-semibold text-sky-700 mb-2">
              {item.title}
            </h3>
            <Image
              src="/space.jpg" // replace with your file
              alt="GIS Corps GPN"
              width={300}
              height={100}
            />
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              className="text-sky-600 font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </section>

      <section className="p-16 mb-16 mt-16">
        <div className="inline-block mb-6 text-left">
          <h2 className="text-green-600 text-2xl font-semibold">
            Impact
          </h2>
          {/* Short underline */}
          <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
        </div>
      </section>

      {/* Grid of Offerings */}
      <section className="p-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-center">
        {[
          { title: "Professional Certification", desc: "Helping GISPs achieve their professional goals with GISCI.", link: "#" },
          { title: "Geospatial Collaboration", desc: "URISA co-founded the Coalition of Geospatial Organizations, focusing on U.S. national geospatial issues.", link: "#" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow-sm hover:shadow-md transition items-center flex flex-col gap-1"
          >
            <h3 className="text-xl font-semibold text-sky-700 mb-2">
              {item.title}
            </h3>
            <Image
              src="/space.jpg" // replace with your file
              alt="GIS Corps GPN"
              width={300}
              height={100}
            />
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              className="text-sky-600 font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </section>

      {/* CTA */}
    </main>
      <section className="mt-16 bg-green-100 p-20">
        <section className="">
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Become a Member
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
        </section>
        <p className="mb-6">
          Join our growing community of geospatial experts, researchers, innovators, and advocates.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            Access exclusive knowledge resources.
          </li>
          <li>
            Network with leaders in government, academia, and industry.
          </li>
          <li>
            Participate in specialized working groups and policy forums.
          </li>
        </ul>
        <a
          href="/register"
          className="bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition"
        >
          Learn More & Apply
        </a>
      </section>
    </>
  );
}
