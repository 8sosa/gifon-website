import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, Target, Eye, Layers, GraduationCap, Users, Shield, Sprout, ScrollText, Database, Microscope, Megaphone, Globe, Building2, FileBadge } from 'lucide-react';
import MotionDiv from "@/components/MotionDiv"; 
import MotionImg from "@/components/MotionImg";

const partnerLogos: CarouselItem[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/dgi.jpeg', alt: 'DGI London', caption: 'Media Partners' },
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
      <HeroSection
        title="About Us"
        backgroundMedia={[
          '/media/AIM.jpg'
        ]}
      />
      
      <main className="font-sans text-gray-800 bg-white">
        
        {/* Welcome Section */}
        <section className="relative px-6 py-16 md:py-24 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Background Decorative Blob */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

          <div className="w-full lg:w-1/2 relative group">
            <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-transform duration-500 hover:scale-[1.01]">
                <Image
                src="/media/Pioneer and quest.jpg" 
                alt="Geospatial Intelligence for Nigeria"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-green-600/30 -z-10"></div>
          </div>
          
          <div className='w-full lg:w-1/2 flex flex-col items-start'>
            <div className="inline-block mb-6 text-left">
              <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-bold cooper">
                Welcome!
              </h2>
              <div className="w-24 h-1.5 bg-green-600 mt-4 rounded-full"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
              <p className="mb-6">
                The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) is Nigeria&apos;s first dedicated platform to institutionalize geospatial intelligence. We are a movement bringing together government, military, academia, industry, and international partners to reshape how Nigeria thinks about intelligence, decision-making, and governance.
              </p>
              <p className="p-6 bg-gray-50 border-l-4 border-green-500 rounded-r-xl italic text-gray-700">
                Founded by Dr. AA Usman, <span className="cooper">GIFON</span>&apos;s quest is to ensure Nigeria is no longer &quot;blind in an era where other nations were seeing the world in sharper detail than ever before&quot;.
              </p>
              <p className="mt-6">
                 This vision is about embedding GEOINT into the DNA of Nigeria’s governance —a dream once seen as radical, now recognized as indispensable to Nigeria’s survival and Africa’s rise.
              </p>
            </div>

            <Link href={"/docs/THE QUEST BY DR. AA USMAN.docx"} className="mt-8 group"> 
              <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1">
                <span>Read &quot;The Quest&quot; by Dr. AA Usman</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
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
                The aim of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) is to harness the power of geospatial data and technology to drive sustainable development, enhance national security, and empower decision-making across all sectors in Nigeria. Through innovation, education, collaboration, and policy frameworks, the Foundation strives to position Nigeria as a leader in the global geospatial intelligence community, ensuring that geospatial solutions contribute to the nation’s socio-economic progress, environmental sustainability, and resilience to future challenges. This aim emphasizes the Foundation’s commitment to Nigeria’s growth, security, and leadership in the geospatial sector, while focusing on the broad impact of geospatial intelligence on governance, development, advancing sustainable development and global cooperation.
              </p>
            </MotionDiv>
            
            <div className="w-full">
                <MotionImg
                src='/media/AIM copy.jpg'
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
            
            {/* MISSION CARD */}
            <MotionDiv
              className="bg-gray-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group border border-gray-800"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              {/* Abstract Background Icon */}
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 text-green-500">
                <Target size={220} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-green-400">
                  <Target size={32} />
                  Mission
                </h2>
                <p className="text-gray-300 leading-relaxed text-justify text-lg">
                  The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) is dedicated to advancing the understanding, development, and responsible application of geospatial intelligence (GEOINT) to support national security, economic development humanitarian efforts, and informed decision-making. We foster collaboration between government, industry, and academia to drive innovation, build a skilled workforce, and promote the ethical use of geospatial data and technologies.
                </p>
              </div>
            </MotionDiv>

            {/* VISION CARD */}
            <MotionDiv
              className="bg-gray-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group border border-gray-800"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              {/* Abstract Background Icon */}
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 text-green-500">
                <Eye size={220} />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-green-400">
                  <Eye size={32} />
                  Vision
                </h2>
                <p className="text-gray-300 leading-relaxed text-justify text-lg">
                  To be Nigeria&apos;s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.              
                </p>
              </div>
            </MotionDiv>

          </div>
        </section>

        {/* Objectives Section - UPDATED VISUALS */}
        {/* Objectives Section - Light Theme with Watermarks */}
        <section id="objectives" className="py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Our Objectives</h2>
            <p className="text-lg text-gray-600 mb-12 text-justify md:text-center max-w-4xl mx-auto">
            The objectives of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>), focuses on building a strong foundation for geospatial intelligence in Nigeria, addressing both technical and strategic goals. They emphasize the importance of education, collaboration, research, and application across sectors, while also aligning with broader national and global development priorities.  
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                    icon: Layers,
                    title: 'Advancing Tech Adoption',
                    text: 'Promote the widespread adoption of advanced geospatial technologies (GIS, remote sensing, UAVs, AI) across public and private sectors to support data-driven decision-making.',
                },
                {
                    icon: GraduationCap,
                    title: 'Capacity & Skill Development',
                    text: 'Develop and implement educational programs, workshops, and certifications to build local capacity and empower professionals with geospatial intelligence skills.',
                },
                {
                    icon: Users,
                    title: 'Public-Private Collaboration',
                    text: 'Facilitate collaboration between the public sector, private enterprises, and academia to create a robust geospatial ecosystem and foster partnerships.',
                },
                {
                    icon: Shield,
                    title: 'National Security & Safety',
                    text: 'Leverage geospatial intelligence to improve national security, disaster response, and situational awareness for military and emergency agencies.',
                },
                {
                    icon: Sprout,
                    title: 'Sustainable Development',
                    text: 'Tackle challenges related to climate change, urbanization, and agriculture. Support the achievement of Nigeria’s Sustainable Development Goals (SDGs).',
                },
                {
                    icon: ScrollText,
                    title: 'Policy Advocacy',
                    text: 'Advocate for the integration of geospatial intelligence into national policy frameworks and ensure geospatial data is prioritized in governance.',
                },
                {
                    icon: Database,
                    title: 'Data Accessibility',
                    text: 'Enhance the availability and accessibility of geospatial data to all sectors, ensuring information is transparent, accurate, and available to decision-makers.',
                },
                {
                    icon: Microscope,
                    title: 'Research & Development',
                    text: 'Foster research and innovation in geospatial science, encouraging new methodologies and supporting academic institutions.',
                },
                {
                    icon: Megaphone,
                    title: 'Public Awareness',
                    text: 'Raise awareness about the potential of geospatial intelligence through media campaigns and public outreach to citizens and businesses.',
                },
                {
                    icon: Globe,
                    title: 'International Cooperation',
                    text: 'Position Nigeria as a key player in the global community by engaging with international organizations and contributing to global standards.',
                },
                {
                    icon: Building2,
                    title: 'Urban Planning',
                    text: 'Support urban planning and infrastructure development with tools that help governments make informed decisions on land-use and resources.',
                },
                {
                    icon: FileBadge,
                    title: 'Standards & Governance',
                    text: 'Advocate for national geospatial data standards to ensure data quality, interoperability, and consistency across all sectors.',
                },
              ].map((obj, i) => (
                <MotionDiv
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  {/* Watermark Icon (Light Gray) */}
                  <div className="absolute -bottom-6 -right-6 text-gray-100 group-hover:text-green-50 transition-colors duration-500 rotate-12">
                    <obj.icon size={140} strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-50 rounded-lg text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        <obj.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">{obj.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                      {obj.text}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section - UPDATED VISUALS */}
        <section id="core-values" className="py-20 px-6 bg-linear-to-r from-gray-900 via-black to-gray-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Integrity', 
                  img: '/media/INTEGRITY.png',
                  desc: 'We uphold the highest standards of ethics, transparency, and accountability in everything we do. Trust is the foundation of geospatial intelligence, and we are committed to ensuring that our data, analyses, and partnerships are built on honesty and reliability.' 
                },
                { 
                  title: 'Innovation', 
                  img: '/media/INNOVATION.png',
                  desc: 'We are at the forefront of technological advancements in geospatial intelligence. By fostering a culture of creativity and continuous learning, we strive to pioneer new ways of utilizing geospatial data to solve the complex challenges facing Nigeria.' 
                },
                { 
                  title: 'Collaboration', 
                  img: '/media/collaboration.png',
                  desc: 'We believe in the power of partnerships. Through collaboration with governments, academia, the private sector, and international stakeholders, we seek to harness collective expertise, resources, and networks to advance the field of geospatial intelligence.' 
                },
                { 
                  title: 'Excellence', 
                  img: '/media/excellence.png',
                  desc: `We are committed to the pursuit of excellence in all aspects of our work. From research to practical applications, we deliver high-quality solutions that meet global standards and drive measurable impact for Nigeria's development.` 
                },
                { 
                  title: 'Sustainability',
                  img: '/media/SUSTAINABILITY.png',
                  desc: 'We prioritize sustainable practices in our use of geospatial technologies, advocating for long-term solutions that balance economic growth with environmental and social responsibility. Our aim is to ensure that geospatial intelligence supports the sustainable development of Nigeria and the broader African continent.' 
                },
                { img: '/media/ACCESS.png', title: 'Accessibility', desc: 'We believe that geospatial intelligence should be accessible to all, from government policymakers to local communities. We are committed to democratizing the use of geospatial data by making it understandable, usable, and impactful for diverse stakeholders across Nigeria.' },

                { img: '/media/leadership.png', title: 'Leadership', desc: 'We strive to be the leaders in the geospatial intelligence community in Nigeria and Africa. We advocate for geospatial technologies in shaping policy, decision-making, and governance, positioning the Foundation as a key player in national and regional development.' },
                
                { img: '/media/NATIONAL DEVELOPMENT.png', title: 'Commitment National Development', desc: `Our core mission is to support Nigeria's growth and development through strategic use of geospatial intelligence. Whether in urban planning, disaster management, national security, or agriculture, we are dedicated to improving the quality of life for Nigerians through data-driven insights.` },

                { img: '/media/INCLUSIVITY.png', title: 'Inclusivity', desc: 'We embrace diversity and inclusivity, ensuring that geospatial intelligence is used to empower all Nigerians, regardless of their background, to make informed decisions that drive progress and reduce inequalities.' },
              ].map((val, i) => (
                <MotionDiv
                  key={i}
                  // UPDATED CLASSNAME HERE: Enhanced glassmorphism, used 'ring' for crisper borders, added green glow on hover.
                  className="p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-white/20 hover:bg-white/10 hover:ring-green-500/50 hover:shadow-green-900/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-2 flex items-center justify-center h-12 w-12 bg-white/10 rounded-full p-2">
                      <div className="relative w-full h-full">
                        <Image 
                          src={val.img} 
                          alt={val.title} 
                          fill 
                          className="object-contain p-0.5" 
                        />
                      </div>
                  </div>

                  <h3 className="text-xl font-bold text-green-400">{val.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{val.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section id="board-directors" className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Board of Trustees</h2>
            <TeamGrid members={mapMembersByCategory(members, 'Board')} />
          </div>
        </section>

        {/* Partners Section */}
      <section id="our-partners" className="py-12 md:py-20 px-4 md:px-6 bg-green-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">Our Partners</h2>
          <LogoCarousel items={partnerLogos} loopDurationMs={20000} />
        </div>
      </section>
        
      </main>
    </>
  );
}