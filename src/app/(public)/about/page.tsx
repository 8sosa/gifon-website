import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel'; // Import updated types
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
import { FaMapMarkerAlt } from 'react-icons/fa'; // Note: Check if using 'react-icons/fa6' or 'react-icons/fa' based on your install
import { Globe, Shield, Users, Rocket, Sparkles } from 'lucide-react';

const partnerLogos: CarouselItem[] = [
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
    colorClass: 'text-black', 
    hoverColorClass: 'hover:text-black' 
  },
  { 
    name: 'LinkedIn', 
    icon: <FaLinkedinIn size={20} />, 
    href: '#', 
    colorClass: 'text-blue-700', 
    hoverColorClass: 'hover:text-blue-700' 
  },
  { 
    name: 'Facebook', 
    icon: <FaFacebookF size={20} />, 
    href: '#', 
    colorClass: 'text-blue-600', 
    hoverColorClass: 'hover:text-blue-600' 
  },
  { 
    name: 'Youtube', 
    icon: <FaYoutube size={20} />, 
    href: '#', 
    colorClass: 'text-red-600', 
    hoverColorClass: 'hover:text-red-600' 
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram size={20} />, 
    href: '#', 
    colorClass: 'text-pink-600', 
    hoverColorClass: 'hover:text-pink-600' 
  },
  { 
    name: 'Whatsapp', 
    icon: <FaWhatsapp size={20} />, 
    href: '#', 
    colorClass: 'text-green-500', 
    hoverColorClass: 'hover:text-green-500' 
  },
];

export default async function AboutPage() {
  const members: FlatMember[] = await getTeamMembers();

  return (
    <>
      <HeroSection
        title="About Us"
        backgroundMedia={[
          '/media/abt.jpg'
        ]}
      />
      
      <main className="font-sans text-gray-800 bg-white">
        
        {/* Welcome Section */}
        {/* Changed: flex-col for mobile, lg:flex-row for desktop. Adjusted padding. */}
        <section className="px-6 py-12 md:p-16 md:mb-8 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full h-auto">
                <Image
                src="/media/Pioneer and quest.jpg" 
                alt="Geospatial Intelligence for Nigeria"
                width={600}
                height={400}
                className="rounded shadow w-full h-auto object-cover"
                />
            </div>
          </div>
          
          <div className='w-full lg:w-1/2 flex flex-col items-start lg:pl-16'>
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-3xl font-semibold">
                Welcome!
              </h2>
              <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
            </div>
            <p className="mb-4 text-justify leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) is Nigeria&apos;s first dedicated platform to institutionalize geospatial intelligence. We are a movement bringing together government, military, academia, industry, and international partners to reshape how Nigeria thinks about intelligence, decision-making, and governance.
            </p>
            <p className="text-justify leading-relaxed">
              Founded by Dr. AA Usman, GIFON&apos;s quest is to ensure Nigeria is no longer &quot;blind in an era where other nations were seeing the world in sharper detail than ever before&quot;. This vision is about embedding GEOINT into the DNA of Nigeria’s governance —a dream once seen as radical, now recognized as indispensable to Nigeria’s survival and Africa’s rise.
            </p>
            <Link href={"/docs/THE QUEST BY DR. AA USMAN.docx"} className="mt-6 w-full md:w-auto"> 
              <button className="w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-md">
                Read &quot;The Quest&quot; by Dr. AA Usman
              </button>
            </Link>
          </div>
        </section>

        {/* Aim Section */}
        <section id="aim" className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Aim</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                The aim of the Geospatial Intelligence Foundation of Nigeria (GIFON) is to harness the power of geospatial data and technology to drive sustainable development, enhance national security, and empower decision-making across all sectors in Nigeria. Through innovation, education, collaboration, and policy frameworks, the Foundation strives to position Nigeria as a leader in the global geospatial intelligence community.
              </p>
            </MotionDiv>
            
            <div className="w-full">
                <MotionImg
                src='/bg/c.JPG'
                alt="Geospatial innovation"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                />
            </div>
          </div>
        </section>

        {/* Mission + Vision */}
        <section id="mission-vision" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <MotionDiv
              className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              <h2 className="text-3xl font-semibold mb-4 text-green-700">Mission</h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                The Geospatial Intelligence Foundation of Nigeria (GIFON) is dedicated to advancing the understanding, development, and responsible application of geospatial intelligence (GEOINT) to support national security, economic development humanitarian efforts, and informed decision-making.
              </p>
            </MotionDiv>
            <MotionDiv
              className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              <h2 className="text-3xl font-semibold mb-4 text-green-700">Vision</h2>
              <blockquote className="text-gray-800 text-justify text-lg italic font-medium">
              &quot;To be Nigeria&apos;s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.&quot;
              </blockquote>
            </MotionDiv>
          </div>
        </section>

        {/* Objectives */}
        <section id="objectives" className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Objectives</h2>
            <p className="text-lg text-gray-600 mb-12 text-justify md:text-center max-w-4xl mx-auto">
              The objectives of GIFON focus on building a strong foundation for geospatial intelligence in Nigeria, addressing both technical and strategic goals.
            </p>

            {/* Changed: gap-6 for mobile, gap-8 for larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                    title: '1. Advancing Geospatial Technology Adoption',
                    text: 'Promote the widespread adoption of advanced geospatial technologies (e.g., geographic information systems, remote sensing, UAVs, AI) across public and private sectors to support data-driven decision-making processes.',
                },
                {
                    title: '2. Building Capacity & Skill Development',
                    text: 'Develop and implement educational programs, workshops, and certifications to build local capacity in geospatial intelligence. Empower professionals with the skills required to effectively use geospatial data.',
                },
                {
                    title: '3. Fostering Public-Private Sector Collaboration',
                    text: 'Facilitate collaboration between the public sector, private enterprises, and academia to create a robust geospatial ecosystem in Nigeria fostering partnerships to drive innovation.',
                },
                {
                    title: '4. Enhancing National Security & Safety',
                    text: 'Leverage geospatial intelligence to improve national security and disaster response capabilities. Develop tools and solutions that enhance situational awareness and monitoring.',
                },
                {
                    title: '5. Driving Sustainable Development Initiatives',
                    text: 'Promote the application of geospatial intelligence in tackling critical challenges related to climate change, sustainable urbanization, agriculture, and water resources management.',
                },
                {
                    title: '6. Policy Advocacy & Strategic Influence',
                    text: 'Advocate for the integration of geospatial intelligence into national and local policy frameworks. Engage with government agencies to ensure geospatial data is prioritized.',
                },
                {
                    title: '7. Promoting Geospatial Data Accessibility',
                    text: 'Enhance the availability and accessibility of geospatial data to all sectors of society, ensuring that information is transparent, accurate, and available to decision-makers.',
                },
                {
                    title: '8. Research & Development (R&D)',
                    text: 'Foster research and innovation in geospatial science and technology, encouraging the development of new methodologies, tools, and applications.',
                },
                {
                    title: '9. Raising Public Awareness & Engagement',
                    text: 'Raise awareness about the importance and potential of geospatial intelligence through media campaigns, seminars, and public outreach programs.',
                },
                {
                    title: '10. International Cooperation & Networking',
                    text: 'Position Nigeria as a key player in the global geospatial intelligence community by actively engaging with international organizations.',
                },
                {
                    title: '11. Urban Planning & Infrastructure',
                    text: 'Support the use of geospatial intelligence in urban planning, infrastructure development, and resource management to help governments make informed decisions.',
                },
                {
                    title: '12. Geospatial Standards & Governance',
                    text: 'Advocate for the development and implementation of national geospatial data standards and governance frameworks to ensure data quality and interoperability.',
                },
              ].map((obj, i) => (
                <MotionDiv
                  key={i}
                  className="p-6 md:p-8 bg-white shadow rounded-2xl flex flex-col items-start text-left space-y-4 hover:shadow-xl transition border border-gray-100"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <h3 className="text-lg font-bold text-green-700">{obj.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base text-justify leading-relaxed">{obj.text}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section id="core-values" className="py-20 px-6 bg-linear-to-r from-gray-900 via-black to-gray-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Shield size={32} />, title: 'Integrity', desc: 'We uphold the highest standards of ethics, transparency, and accountability in everything we do.' },
                { icon: <Sparkles size={32} />, title: 'Innovation', desc: 'We are at the forefront of technological advancements, fostering a culture of creativity and continuous learning.' },
                { icon: <Users size={32} />, title: 'Collaboration', desc: 'We believe in the power of partnerships with governments, academia, and the private sector.' },
                { icon: <Rocket size={32} />, title: 'Excellence', desc: `We deliver high-quality solutions that meet global standards and drive measurable impact.` },
                { icon: <Globe size={32} />, title: 'Sustainability', desc: 'We prioritize sustainable practices, advocating for long-term solutions that balance economic growth with environmental responsibility.' },
                { icon: <Shield size={32} />, title: 'Accessibility', desc: 'We are committed to democratizing the use of geospatial data by making it understandable and usable for all.' },
                { icon: <Shield size={32} />, title: 'Leadership', desc: 'We strive to be leaders in the geospatial intelligence community in Nigeria and Africa.' },
                { icon: <Shield size={32} />, title: 'National Development', desc: `Dedicated to improving the quality of life for Nigerians through data-driven insights.` },
                { icon: <Shield size={32} />, title: 'Inclusivity', desc: 'We ensure that geospatial intelligence is used to empower all Nigerians regardless of background.' },
              ].map((val, i) => (
                <MotionDiv
                  key={i}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:bg-white/20 transition flex flex-col items-center space-y-4 border border-white/10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} // Reduced delay for faster mobile feel
                >
                  <div className="text-green-400 mb-2">{val.icon}</div>
                  <h3 className="text-xl font-bold">{val.title}</h3>
                  <p className="italic text-gray-300 text-sm leading-relaxed">{val.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section id="board-directors" className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Board of Trustees</h2>
            {/* TeamGrid should handle its own internal responsiveness, typically grid-cols-1 sm:grid-cols-2 etc */}
            <TeamGrid members={mapMembersByCategory(members, 'Board')} />
          </div>
        </section>

        {/* Partners Section */}
      <section id="our-partners" className="py-12 md:py-20 px-4 md:px-6 bg-green-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">Our Partners</h2>
          {/* Ensure LogoCarousel handles its own internal responsiveness, usually by flex-wrap */}
          <LogoCarousel items={partnerLogos} loopDurationMs={20000} />
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 md:px-6 bg-gray-50">
          <MotionDiv
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Contact Us</h2>

            {/* Responsive Grid: Stack on Mobile (1 col), Split on Tablet (2 cols), Spread on Desktop (3 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              
              {/* --- Column 1: Address & General --- */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2 mb-4">
                    Our Address
                  </h3>
                  <a 
                    href="https://maps.google.com/?q=12+Richard+Clapperton+Street,+Asokoro,+Abuja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-600 hover:text-green-600 transition-colors group"
                  >
                    <FaMapMarkerAlt size={18} className="text-gray-400 mt-1 shrink-0 group-hover:text-green-600" />
                    <span className="leading-relaxed">
                      12 Richard Clapperton Street, <br />
                      Off Maman Nasir Street, <br />
                      Asokoro District,<br />
                      Abuja, Nigeria
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">General Inquiries</h3>
                  <a 
                    href="mailto:info@gifon.org.ng" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaEnvelope size={16} className="text-gray-400" />
                    <span className="break-all">info@gifon.org.ng</span>
                  </a>
                </div>
              </div>

              {/* --- Column 2: Departments --- */}
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2 mb-4">
                  Our Departments
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {/* Secretariat */}
                    <div>
                        <p className="text-base font-bold text-gray-800">International Secretariat</p>
                        <div className="mt-1 space-y-1 text-sm">
                            <a href="tel:+2347077211243" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaPhone size={12} /> <span>+234 707 721 1243</span>
                            </a>
                            <a href="mailto:secretariat@gifon.org.ng" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaEnvelope size={12} /> <span className="break-all">secretariat@gifon.org.ng</span>
                            </a>
                        </div>
                    </div>

                    {/* Outreach */}
                    <div>
                        <p className="text-base font-bold text-gray-800">Outreach</p>
                        <div className="mt-1 space-y-1 text-sm">
                            <a href="tel:+2347077269829" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaPhone size={12} /> <span>+234 707 726 9829</span>
                            </a>
                            <a href="mailto:outreach@gifon.org.ng" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaEnvelope size={12} /> <span className="break-all">outreach@gifon.org.ng</span>
                            </a>
                        </div>
                    </div>

                    {/* Education & Membership */}
                    <div>
                        <p className="text-base font-bold text-gray-800">Education & Membership</p>
                        <div className="mt-1 space-y-1 text-sm">
                            <a href="tel:+2347077211243" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaPhone size={12} /> <span>+234 707 721 1243</span>
                            </a>
                            <a href="mailto:membership@gifon.org.ng" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaEnvelope size={12} /> <span className="break-all">membership@gifon.org.ng</span>
                            </a>
                        </div>
                    </div>

                    {/* Research */}
                    <div>
                        <p className="text-base font-bold text-gray-800">Research</p>
                        <div className="mt-1 space-y-1 text-sm">
                            <a href="tel:+2347077396196" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaPhone size={12} /> <span>+234 707 739 6196</span>
                            </a>
                            <a href="mailto:research@gifon.org.ng" className="flex items-center gap-2 text-gray-600 hover:text-green-600">
                                <FaEnvelope size={12} /> <span className="break-all">research@gifon.org.ng</span>
                            </a>
                        </div>
                    </div>
                </div>
              </div>

              {/* --- Column 3: Social Media --- */}
              {/* Added: mt-0 for mobile, lg:pl-12 lg:border-l for desktop separation */}
              <div className="lg:pl-12 lg:border-l lg:border-gray-200">
                <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2 mb-4">
                  Follow Us
                </h3>
                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 mt-4">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 ${link.hoverColorClass} transition-all`}
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