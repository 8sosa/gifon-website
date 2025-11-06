import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, Logo } from '@/components/LogoCarousel';
import Image from 'next/image';
import Link from 'next/link';

import MotionDiv from "@/components/MotionDiv"; 
import MotionImg from "@/components/MotionImg";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaPhone,    // Added
  FaEnvelope,    // Added
} from 'react-icons/fa6';
// import { fadeUp } from './animations';
import { Globe, Shield, Users, Rocket, Sparkles} from 'lucide-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

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

const socialLinks = [
  { 
    name: 'X', 
    icon: <FaXTwitter size={20} />, 
    href: '#', 
    colorClass: 'text-black', // X logo color
    hoverColorClass: 'hover:text-black' 
  },
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedinIn size={20} />, 
    href: '#', 
    colorClass: 'text-blue-700', // LinkedIn blue
    hoverColorClass: 'hover:text-blue-700' 
  },
  { 
    name: 'Facebook', 
    icon: <FaFacebookF size={20} />, 
    href: '#', 
    colorClass: 'text-blue-600', // Facebook blue
    hoverColorClass: 'hover:text-blue-600' 
  },
  { 
    name: 'Youtube', 
    icon: <FaYoutube size={20} />, 
    href: '#', 
    colorClass: 'text-red-600', // YouTube red
    hoverColorClass: 'hover:text-red-600' 
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram size={20} />, 
    href: '#', 
    colorClass: 'text-pink-600', // Instagram pink/purple
    hoverColorClass: 'hover:text-pink-600' 
  },
  { 
    name: 'Whatsapp', 
    icon: <FaWhatsapp size={20} />, 
    href: '#', 
    colorClass: 'text-green-500', // WhatsApp green
    hoverColorClass: 'hover:text-green-500' 
  },
];

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
            alt="Geospatial Intelligence for Nigeria"
            width={600}
            height={300}
            className="rounded shadow"
          />
        </div>
        <div className='flex flex-col items-start pl-16'>
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Welcome!
              {/* Mapping the Future. Empowering the Nation. */}
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
          <p className="max-w-3xl mx-auto mb-4 text-justify">
            The Geospatial Intelligence Foundation of Nigeria (GIFON) is Nigeria’s first dedicated platform to institutionalize geospatial intelligence. We are a movement bringing together government, military, academia, industry, and international partners to reshape how Nigeria thinks about intelligence, decision-making, and governance.
          </p>
          {/* --- FIXES ARE IN THIS <p> TAG --- */}
          <p className="max-w-3xl mx-auto text-justify">
            Founded by Dr. AA Usman, GIFON&apos;s quest is to ensure Nigeria is no longer &quot;blind in an era where other nations were seeing the world in sharper detail than ever before&quot;. This vision is about embedding GEOINT into the DNA of Nigeria’s governance —a dream once seen as radical, now recognized as indispensable to Nigeria’s survival and Africa’s rise.
          </p>
          <Link href={"/docs/THE QUEST BY DR. AA USMAN.docx"}> {/* Assumed path to the file */}
          {/* --- FIXES ARE IN THIS <button> TAG --- */}
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition">
            Read &quot;The Quest&quot; by Dr. AA Usman
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
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
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
            <p className="text-gray-700 leading-relaxed text-justify">
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
            <blockquote className="text-gray-800 text-justify">
              To be Nigeria’s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.
            </blockquote>
          </MotionDiv>
        </div>
      </section>

      {/* Objectives as icon cards */}
      <section id="objectives" className="py-20 px-6 bg-gray-50 fullSect">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Objectives</h2>
          <p className="text-lg text-gray-700 mb-12 text-justify max-w-4xl mx-auto">
            The objectives of the Geospatial Intelligence Foundation of Nigeria (GIFON),
            focuses on building a strong foundation for geospatial intelligence in
            Nigeria, addressing both technical and strategic goals. They emphasize the
            importance of education, collaboration, research, and application across
            sectors, while also aligning with broader national and global development
            priorities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '1. Advancing Geospatial Technology Adoption',
                text: 'Promote the widespread adoption of advanced geospatial technologies (e.g., geographic information systems, remote sensing, UAVs, AI) across public and private sectors to support data-driven decision-making processes, enhance national development, and improve service delivery.',
              },
              {
                title: '2. Building Capacity & Skill Development',
                text: 'Develop and implement educational programs, workshops, and certifications to build local capacity in geospatial intelligence. Empower professionals, government officials, and communities with the skills required to effectively use geospatial data in their respective fields.',
              },
              {
                title: '3. Fostering Public-Private Sector Collaboration',
                text: 'Facilitate collaboration between the public sector, private enterprises, and academia to create a robust geospatial ecosystem in Nigeria. This includes fostering partnerships to drive innovation, share resources, and enhance the effectiveness of geospatial solutions.',
              },
              {
                title: '4. Enhancing National Security & Safety',
                text: 'Leverage geospatial intelligence to improve national security and disaster response capabilities. Develop tools and solutions that enhance situational awareness, monitoring, and prediction for military, law enforcement, and emergency response agencies.',
              },
              {
                title: '5. Driving Sustainable Development Initiatives',
                text: 'Promote the application of geospatial intelligence in tackling critical challenges related to climate change, sustainable urbanization, agriculture, water resources management, and environmental conservation. Support the achievement of Nigeria’s Sustainable Development Goals (SDGs).',
              },
              {
                title: '6. Policy Advocacy & Strategic Influence',
                text: 'Advocate for the integration of geospatial intelligence into national and local policy frameworks. Engage with government agencies to ensure geospatial data and technologies are recognized and prioritized as critical components of national development and governance.',
              },
              {
                title: '7. Promoting Geospatial Data Accessibility & Transparency',
                text: 'Enhance the availability and accessibility of geospatial data to all sectors of society, ensuring that information is transparent, accurate, and available to decision-makers, researchers, and the public.',
              },
              {
                title: '8. Research & Development (R&D) in Geospatial Intelligence',
                text: 'Foster research and innovation in geospatial science and technology, encouraging the development of new methodologies, tools, and applications. Support academic institutions and research centres in Nigeria to contribute to the global geospatial community.',
              },
              {
                title: '9. Raising Public Awareness & Engagement',
                text: 'Raise awareness about the importance and potential of geospatial intelligence through media campaigns, seminars, and public outreach programs. Ensure that citizens, businesses, and local communities understand the benefits and applications of geospatial data in their everyday lives.',
              },
              {
                title: '11. International Cooperation & Networking',
                text: 'Position Nigeria as a key player in the global geospatial intelligence community by actively engaging with international organizations, participating in global forums, and contributing to international standards and best practices.',
              },
              {
                title: '11. Data-Driven Decision-Making for Urban Planning & Infrastructure',
                text: 'Support the use of geospatial intelligence in urban planning, infrastructure development, and resource management. Provide tools and frameworks that help local and national governments make informed decisions about infrastructure projects, land-use planning, and resource allocation.',
              },
              {
                title: '12. Strengthening Geospatial Standards & Governance',
                text: 'Advocate for the development and implementation of national geospatial data standards and governance frameworks to ensure data quality, interoperability, and consistency across all sectors.',
              },
            ].map((obj, i) => (
              <MotionDiv
                key={i}
                className="p-8 bg-white shadow-lg rounded-2xl flex flex-col items-start text-left space-y-4 hover:shadow-xl transition"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-primary">{obj.title}</h3>
                <p className="text-gray-700 text-justify">{obj.text}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values with futuristic gradient cards */}
      <section id="core-values" className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white fullSect">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield />, title: 'Integrity', desc: 'We uphold the highest standards of ethics, transparency, and accountability in everything we do. Trust is the foundation of geospatial intelligence, and we are committed to ensuring that our data, analyses, and partnerships are built on honesty and reliability.' },
              { icon: <Sparkles />, title: 'Innovation', desc: 'We are at the forefront of technological advancements in geospatial intelligence. By fostering a culture of creativity and continuous learning, we strive to pioneer new ways of utilizing geospatial data to solve the complex challenges facing Nigeria.' },
              { icon: <Users />, title: 'Collaboration', desc: 'We believe in the power of partnerships. Through collaboration with governments, academia, the private sector, and international stakeholders, we seek to harness collective expertise, resources, and networks to advance the field of geospatial intelligence.' },
              { icon: <Rocket />, title: 'Excellence', desc: `We are committed to the pursuit of excellence in all aspects of our work. From research to practical applications, we deliver high-quality solutions that meet global standards and drive measurable impact for Nigeria's development.` },
              { icon: <Globe />, title: 'Sustainability', desc: 'We prioritize sustainable practices in our use of geospatial technologies, advocating for long-term solutions that balance economic growth with environmental and social responsibility. Our aim is to ensure that geospatial intelligence supports the sustainable development of Nigeria and the broader African continent.' },
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

<section id="contact" className="py-20 px-4 bg-gray-50 fullSect">
  <MotionDiv
    initial="hidden"
    whileInView="show"
    variants={fadeUp}
    className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg"
  >
    <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
    

    {/* Responsive Grid: 1 col on mobile, 2 cols on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      
      {/* --- Column 1: Contact Details --- */}
      <div className="space-y-6">


        {/* --- Address --- */}
        <div className='pb-4 border-b border-gray-200'>
          <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2">
            Our Address
          </h3>
          <div className="mt-2 space-y-2">
            <a 
              href="https://maps.google.com/?q=12+Richard+Clapperton+Street,+Asokoro,+Abuja" // Google Maps link
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaMapMarkerAlt size={14} className="text-gray-400 mt-1 flex-shrink-0" />
              <span>
                12 Richard Clapperton Street, <br />
                Off Maman Nasir Road, <br />
                Asokoro District,<br />
                Abuja, Nigeria
              </span>
            </a>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-left">
          For general inquiries, please reach out to us.
        </p>
        <div>
          <p className="text-lg font-semibold text-gray-800">General Inquiries</p>
          <div className="mt-2 space-y-2">
            {/* <a 
              href="tel:+2347077211243" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaPhone size={14} className="text-gray-400" />
              <span>+234 707 721 1243</span>
            </a> */}
            <a 
              href="mailto:info@gifon.org.ng" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaEnvelope size={14} className="text-gray-400" />
              <span>info@gifon.org.ng</span>
            </a>
          </div>
        </div>
        {/* General Inquiries Email */}
        {/* <p className='text-gray-700 leading-relaxed pb-8 text-left font-medium'>
        General info: info@gifon.org.ng
        </p> */}
      </div>

      <div>
        {/* --- Departments --- */}
        <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2">
          Our Departments
        </h3>
        
        {/* Secretariat */}
        <div>
          <p className="text-lg font-semibold text-gray-800">International Secretariat</p>
          <div className="mt-2 space-y-2">
            <a 
              href="tel:+2347077211243" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaPhone size={14} className="text-gray-400" />
              <span>+234 707 721 1243</span>
            </a>
            <a 
              href="mailto:secretariat@gifon.org.ng" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaEnvelope size={14} className="text-gray-400" />
              <span>secretariat@gifon.org.ng</span>
            </a>
          </div>
        </div>

        {/* Outreach */}
        <div>
          <p className="text-lg font-semibold text-gray-800">Outreach</p>
          <div className="mt-2 space-y-2">
            <a 
              href="tel:+2347077269829" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaPhone size={14} className="text-gray-400" />
              <span>+234 707 726 9829</span>
            </a>
            <a 
              href="mailto:outreach@gifon.org.ng" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaEnvelope size={14} className="text-gray-400" />
              <span>outreach@gifon.org.ng</span>
            </a>
          </div>
        </div>

        {/* Education & Membership (NEW) */}
        <div>
          <p className="text-lg font-semibold text-gray-800">Education & Membership</p>
          <div className="mt-2 space-y-2">
            <a 
              href="tel:+2347077211243" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaPhone size={14} className="text-gray-400" />
              <span>+234 707 721 1243</span>
            </a>
            <a 
              href="mailto:membership@gifon.org.ng" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaEnvelope size={14} className="text-gray-400" />
              <span>membership@gifon.org.ng</span>
            </a>
          </div>
        </div>

        {/* Research */}
        <div>
          <p className="text-lg font-semibold text-gray-800">Research</p>
          <div className="mt-2 space-y-2">
            <a 
              href="tel:+2347077396196" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaPhone size={14} className="text-gray-400" />
              <span>+234 707 739 6196</span>
            </a>
            <a 
              href="mailto:research@gifon.org.ng" 
              className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
            >
              <FaEnvelope size={14} className="text-gray-400" />
              <span>research@gifon.org.ng</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- Column 2: Social Media (Unchanged) --- */}
      <div className="md:pl-12 md:border-l md:border-gray-200">
        <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2">
          Follow Us
        </h3>
        <ul className="space-y-2 mt-6">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 text-gray-700 ${link.hoverColorClass} transition-all`}
              >
                <span className={`${link.colorClass} transition-colors`}>{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </MotionDiv>
</section>
    </main>
    </>
  );
}