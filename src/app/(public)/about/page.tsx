import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import { LogoCarousel, CarouselItem } from '@/components/LogoCarousel';
import Image from 'next/image';
import { 
  Target, Eye, Layers, GraduationCap, Users, Shield, Sprout, ScrollText, Database, Microscope, Megaphone, Globe, Building2, FileBadge, 
} from 'lucide-react';
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
        description='Aim • Mission • Vision'
        backgroundMedia={[
          '/media/AIM.jpg'
        ]}
      />
      
      <main className="font-sans text-gray-800 bg-white overflow-hidden">
        
        {/* --- 1. INTRO / WELCOME SECTION (Updated Text) --- */}
        <section className="relative px-6 py-16 md:py-24 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Background Decorative Blob */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

          <div className="w-full lg:w-1/2 relative group top-24">
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
                About GIFON
              </h2>
              <div className="w-24 h-1.5 bg-green-600 mt-4 rounded-full"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify space-y-6">
              <p>
                The Geospatial Intelligence Foundation of Nigeria (<span className="cooper text-gray-800">GIFON</span>) is a GEOINT organization dedicated to leveraging cutting-edge geospatial technologies and intelligence to transform Nigeria’s future. Our mission is to enhance national development, promote security, improve public services, and empower professional communities through the strategic use of geospatial data.
              </p>
              <p>
                Founded to bridge the gap between innovative geospatial technologies and national decision-making, <span className="cooper text-gray-800">GIFON</span> serves as a catalyst for change across sectors such as defence, intelligence, security, urban planning, agriculture, disaster management, transportation, health, and environmental protection. We work alongside government institutions, donors, private sector partners, academia, and civil society organizations to ensure that accurate, timely, and actionable spatial data becomes an integral part of policy and development strategies at all levels.
              </p>
              <p>
                Our initiatives include capacity building, training programs, and policy advocacy aimed at creating a skilled workforce of geospatial professionals and enhancing the understanding of geospatial intelligence as a tool for effective governance and sustainable development. We believe that location intelligence is the cornerstone of informed decision-making and a more resilient, inclusive Nigeria.
              </p>
              <p>
                Through collaboration, innovation, and shared expertise, <span className="cooper text-gray-800">GIFON</span> is committed to improving lives, driving socio-economic growth, and fostering a data-driven future for all.
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. AIM SECTION (Now in a Card) --- */}
        <section id="aim" className="relative py-20 px-6 bg-slate-50 border-y border-gray-100">
          {/* Technical Dot Grid Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Card */}
            <MotionDiv
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              {/* Added Card Styling Here */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 cooper">Our Aim</h2>
                <p className="text-gray-600 leading-relaxed text-justify text-lg">
                  The aim of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) is to harness the power of geospatial data and technology to drive sustainable development, enhance national security, and empower decision-making across all sectors in Nigeria. 
                  <br/><br/>
                  Through innovation, education, collaboration, and policy frameworks, the Foundation strives to position Nigeria as a leader in the global geospatial intelligence community, ensuring that geospatial solutions contribute to the nation’s socio-economic progress, environmental sustainability, and resilience to future challenges. 
                  <br/><br/>
                  This aim emphasizes the Foundation’s commitment to Nigeria’s growth, security, and leadership in the geospatial sector, while focusing on the broad impact of geospatial intelligence on governance, development, advancing sustainable development and global cooperation.
                </p>
              </div>
            </MotionDiv>
            
            {/* Right: Image */}
            <div className="w-full order-1 lg:order-2">
                
                <MotionImg
                src='/media/AIM copy.jpg'
                alt="Geospatial innovation"
                className="rounded-[2.5rem] shadow-2xl w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                />
            </div>
          </div>
        </section>

        {/* --- MISSION + VISION --- */}
        <section id="mission-vision" className="py-24 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* MISSION CARD */}
            <MotionDiv
              className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-gray-800 hover:border-gray-700 transition-colors"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 text-green-500">
                <Target size={240} />
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-green-400 cooper">
                  <Target size={36} />
                  Mission
                </h2>
                <p className="text-gray-300 leading-relaxed text-justify text-lg grow">
                  To advance the understanding, development, and responsible application of geospatial intelligence (GEOINT) to support national security, economic development humanitarian efforts, and informed decision-making. We foster collaboration between government, industry, and academia to drive innovation, build a skilled workforce, and promote the ethical use of geospatial data.
                </p>
              </div>
            </MotionDiv>

            {/* VISION CARD */}
            <MotionDiv
              className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-gray-800 hover:border-gray-700 transition-colors"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
            >
              <div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12 text-green-500">
                <Eye size={240} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-green-400 cooper">
                  <Eye size={36} />
                  Vision
                </h2>
                <div className="grow flex items-center">
                    <p className="text-gray-300 leading-relaxed text-justify text-lg md:text-xl font-medium">
                    To be Nigeria&apos;s leading catalyst for geospatial innovation, empowering national development through actionable intelligence, spatial data excellence, and sustainable technological advancement.              
                    </p>
                </div>
              </div>
            </MotionDiv>

          </div>
        </section>

        {/* --- OBJECTIVES --- */}
        <section id="objectives" className="py-24 px-4 md:px-6 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 cooper">Our Objectives</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                The objectives of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>), focuses on building a strong foundation for geospatial intelligence in Nigeria, addressing both technical and strategic goals. They emphasize the importance of education, collaboration, research, and application across sectors.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                    icon: Layers,
                    title: 'Advancing Tech Adoption',
                    text: 'Promote the widespread adoption of advanced geospatial technologies (GIS, remote sensing, UAVs, AI) across public and private sectors.',
                },
                {
                    icon: GraduationCap,
                    title: 'Capacity & Skills',
                    text: 'Develop and implement educational programs, workshops, and certifications to build local capacity and empower professionals.',
                },
                {
                    icon: Users,
                    title: 'Public-Private Collaboration',
                    text: 'Facilitate collaboration between the public sector, private enterprises, and academia to create a robust geospatial ecosystem.',
                },
                {
                    icon: Shield,
                    title: 'National Security',
                    text: 'Leverage geospatial intelligence to improve national security, disaster response, and situational awareness for military agencies.',
                },
                {
                    icon: Sprout,
                    title: 'Sustainable Development',
                    text: 'Tackle challenges related to climate change, urbanization, and agriculture. Support Nigeria’s Sustainable Development Goals (SDGs).',
                },
                {
                    icon: ScrollText,
                    title: 'Policy Advocacy',
                    text: 'Advocate for the integration of geospatial intelligence into national policy frameworks and ensure data is prioritized in governance.',
                },
                {
                    icon: Database,
                    title: 'Data Accessibility',
                    text: 'Enhance the availability and accessibility of geospatial data ensuring information is transparent, accurate, and available.',
                },
                {
                    icon: Microscope,
                    title: 'Research & Development',
                    text: 'Foster research and innovation in geospatial science, encouraging new methodologies and supporting academic institutions.',
                },
                {
                    icon: Megaphone,
                    title: 'Public Awareness',
                    text: 'Raise awareness about the potential of geospatial intelligence through media campaigns and public outreach.',
                },
                {
                    icon: Globe,
                    title: 'International Cooperation',
                    text: 'Position Nigeria as a key player in the global community by engaging with international organizations and standards.',
                },
                {
                    icon: Building2,
                    title: 'Urban Planning',
                    text: 'Support urban planning and infrastructure development with tools that help governments make informed decisions.',
                },
                {
                    icon: FileBadge,
                    title: 'Standards & Governance',
                    text: 'Advocate for national geospatial data standards to ensure data quality, interoperability, and consistency.',
                },
              ].map((obj, i) => (
                <MotionDiv
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="absolute -bottom-6 -right-6 text-gray-50 group-hover:text-green-50 transition-colors duration-500 rotate-12">
                    <obj.icon size={140} strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
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

        {/* --- CORE VALUES --- */}
        <section id="core-values" className="py-24 px-6 bg-linear-to-r from-gray-900 via-black to-gray-800 text-white border-t-4 border-green-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 cooper">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Integrity', 
                  img: '/media/INTEGRITY.png',
                  desc: 'We uphold the highest standards of ethics, transparency, and accountability in everything we do. Trust is the foundation of geospatial intelligence.' 
                },
                { 
                  title: 'Innovation', 
                  img: '/media/INNOVATION.png',
                  desc: 'We are at the forefront of technological advancements. By fostering a culture of creativity, we strive to pioneer new ways of utilizing geospatial data.' 
                },
                { 
                  title: 'Collaboration', 
                  img: '/media/collaboration.png',
                  desc: 'We believe in the power of partnerships. Through collaboration with governments, academia, and private sector, we harness collective expertise.' 
                },
                { 
                  title: 'Excellence', 
                  img: '/media/excellence.png',
                  desc: `We are committed to the pursuit of excellence. From research to practical applications, we deliver high-quality solutions that meet global standards.` 
                },
                { 
                  title: 'Sustainability',
                  img: '/media/SUSTAINABILITY.png',
                  desc: 'We prioritize sustainable practices, advocating for long-term solutions that balance economic growth with environmental responsibility.' 
                },
                { 
                  title: 'Accessibility', 
                  img: '/media/ACCESS.png', 
                  desc: 'We believe that geospatial intelligence should be accessible to all, democratizing the use of geospatial data for diverse stakeholders across Nigeria.' 
                },
                { 
                  title: 'Leadership', 
                  img: '/media/leadership.png', 
                  desc: 'We strive to be the leaders in the geospatial intelligence community in Nigeria and Africa, advocating for geospatial technologies in shaping policy.' 
                },
                { 
                  title: 'National Development', 
                  img: '/media/NATIONAL DEVELOPMENT.png', 
                  desc: `Our core mission is to support Nigeria's growth through strategic use of geospatial intelligence to improve the quality of life for Nigerians.` 
                },
                { 
                  title: 'Inclusivity', 
                  img: '/media/INCLUSIVITY.png', 
                  desc: 'We embrace diversity, ensuring that geospatial intelligence is used to empower all Nigerians, regardless of their background.' 
                },
              ].map((val, i) => (
                <MotionDiv
                  key={i}
                  className="p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl ring-1 ring-white/10 hover:bg-white/10 hover:ring-green-500/50 hover:shadow-green-900/30 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-4 flex items-center justify-center h-16 w-16 bg-linear-to-br from-white/10 to-transparent rounded-full p-3 shadow-inner">
                      <div className="relative w-full h-full">
                        <Image 
                          src={val.img} 
                          alt={val.title} 
                          fill 
                          className="object-contain p-0.5" 
                        />
                      </div>
                  </div>

                  <h3 className="text-xl font-bold text-green-400 cooper">{val.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{val.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* --- BOARD OF TRUSTEES --- */}
        <section id="board-directors" className="py-24 px-4 md:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold cooper text-gray-900">Board of Trustees</h2>
                <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <TeamGrid members={mapMembersByCategory(members, 'Board')} />
          </div>
        </section>

        {/* --- 3. THE QUEST SECTION (Moved Here) --- */}
        {/* <section className="py-20 px-6 bg-green-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 cooper">The Quest</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Founded by Dr. AA Usman, <span className="cooper">GIFON</span>&apos;s quest is to ensure Nigeria is no longer &quot;blind in an era where other nations were seeing the world in sharper detail than ever before&quot;. This vision is about embedding GEOINT into the DNA of Nigeria’s governance.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/docs/THE QUEST BY DR. AA USMAN-20251204111559.pdf" 
                target="_blank" 
                rel="noopener noreferrer" // Security best practice for new tabs
                className="group"
              > 
                <button className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
                  <Download size={20} className="group-hover:animate-bounce" />
                  <span>Download &quot;The Quest&quot; by Dr. AA Usman</span>
                </button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* --- PARTNERS --- */}
        <section id="our-partners" className="py-16 md:py-24 px-4 md:px-6 bg-green-200">
            <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900 cooper">Our Partners</h2>
            <LogoCarousel items={partnerLogos} loopDurationMs={20000} />
            </div>
        </section>
        
      </main>
    </>
  );
}