import HeroSection from '@/components/HeroSection';
import { TeamGrid } from '@/components/TeamGrid';
import { getTeamMembers } from '@/lib/contentful-queries';
import { FlatMember } from '@/types/types';
import PartnersCarousel from '@/components/PartnersCarousel';
import Image from 'next/image';
import { FeatureAccordion } from '@/components/FeatureAccordion';
import { 
  Target, Eye, Layers, GraduationCap, Users, Shield, Sprout, ScrollText, Database, Microscope, Megaphone, Globe, Building2, FileBadge, 
} from 'lucide-react';
import MotionDiv from "@/components/MotionDiv"; 
import MotionImg from "@/components/MotionImg";
import Management from '@/components/advisory';


function mapMembersByCategory(members: FlatMember[], category: string): FlatMember[] {
  return members.filter((member) => member.category === category);
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
      icon: Layers,
      title: 'Advancing Geospatial Technology Adoption',
      text: 'Promote the widespread adoption of advanced geospatial technologies (e.g., geographic information systems, remote sensing, UAVs, AI) across public and private sectors to support data-driven decision-making processes, enhance national development, and improve service delivery.',
  },
  {
      icon: GraduationCap,
      title: 'Building Capacity & Skill Development',
      text: 'Develop and implement educational programs, workshops, and certifications to build local capacity in geospatial intelligence. Empower professionals, government officials, and communities with the skills required to effectively use geospatial data in their respective fields.',
  },
  {
      icon: Users,
      title: 'Fostering Public-Private Sector Collaboration',
      text: 'Facilitate collaboration between the public sector, private enterprises, and academia to create a robust geospatial ecosystem in Nigeria. This includes fostering partnerships to drive innovation, share resources, and enhance the effectiveness of geospatial solutions.',
  },
  {
      icon: Shield,
      title: 'Enhancing National Security & Safety',
      text: 'Leverage geospatial intelligence to improve national security and disaster response capabilities. Develop tools and solutions that enhance situational awareness, monitoring, and prediction for military, law enforcement, and emergency response agencies.',
  },
  {
      icon: Sprout,
      title: 'Driving Sustainable Development Initiatives',
      text: 'Promote the application of geospatial intelligence in tackling critical challenges related to climate change, sustainable urbanization, agriculture, water resources management, and environmental conservation. Support the achievement of Nigeria’s Sustainable Development Goals (SDGs).',
  },
  {
      icon: ScrollText,
      title: 'Policy Advocacy & Strategic Influence',
      text: 'Advocate for the integration of geospatial intelligence into national and local policy frameworks. Engage with government agencies to ensure geospatial data and technologies are recognized and prioritized as critical components of national development and governance.',
  },
  {
      icon: Database,
      title: 'Promoting Geospatial Data Accessibility & Transparency',
      text: 'Enhance the availability and accessibility of geospatial data to all sectors of society, ensuring that information is transparent, accurate, and available to decision-makers, researchers, and the public.',
  },
  {
      icon: Microscope,
      title: 'Research & Development (R&D) in Geospatial Intelligence',
      text: 'Foster research and innovation in geospatial science and technology, encouraging the development of new methodologies, tools, and applications. Support academic institutions and research centres in Nigeria to contribute to the global geospatial community.',
  },
  {
      icon: Megaphone,
      title: 'Raising Public Awareness & Engagement',
      text: 'Raise awareness about the importance and potential of geospatial intelligence through media campaigns, seminars, and public outreach programs. Ensure that citizens, businesses, and local communities understand the benefits and applications of geospatial data in their everyday lives.',
  },
  {
      icon: Globe,
      title: 'International Cooperation & Networking',
      text: 'Position Nigeria as a key player in the global geospatial intelligence community by actively engaging with international organizations, participating in global forums, and contributing to international standards and best practices.',
  },
  {
      icon: Building2,
      title: 'Data-Driven Decision-Making for Urban Planning & Infrastructure',
      text: 'Support the use of geospatial intelligence in urban planning, infrastructure development, and resource management. Provide tools and frameworks that help local and national governments make informed decisions about infrastructure projects, land-use planning, and resource allocation.',
  },
  {
      icon: FileBadge,
      title: 'Strengthening Geospatial Standards & Governance',
      text: 'Advocate for the development and implementation of national geospatial data standards and governance frameworks to ensure data quality, interoperability, and consistency across all sectors.',
  },
]

const processedFeatures = features.map(f => ({
  title: f.title,
  text: f.text,
  icon: <f.icon size={24} />, // Small icon
  largeIcon: <f.icon size={140} strokeWidth={1.5} /> // Big background icon
}));

export default async function AboutPage() {
  const members: FlatMember[] = await getTeamMembers();

  return (
    <>
      <HeroSection
        title="About Us"
        backgroundMedia={[
          '/media/about background.jpg'
        ]}
      />
      
      <main className="font-sans text-gray-800 bg-white overflow-hidden">
        
        {/* --- 1. INTRO / WELCOME SECTION (Updated Text) --- */}
        <section className="relative px-6 py-16 md:py-24 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Background Decorative Blob */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

          <div className="w-full lg:w-1/2 relative group lg:top-24">
            <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-transform duration-500 hover:scale-[1.01]">
                <Image
                src="/media/about us.jpg" 
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
              {/* <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span> */}
              <h2 className="text-gray-900 text-4xl md:text-5xl font-bold bellefair">
                About <span className="cooper text-green-600">GIFON</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Aim</h2>
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
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-green-400">
                  <Target size={36} />
                  Mission
                </h2>
                <p className="text-gray-300 leading-relaxed text-justify text-lg grow">
                The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) is dedicated to advancing the understanding, development, and responsible application of geospatial intelligence (GEOINT) to support national security, economic development humanitarian efforts, and informed decision-making. We foster collaboration between government, industry, and academia to drive innovation, build a skilled workforce, and promote the ethical use of geospatial data and technologies.
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
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-green-400">
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Objectives</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Objectives of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>), focuses on building a strong foundation for geospatial intelligence in Nigeria, addressing both technical and strategic goals, with emphasis on the importance of education, collaboration, research and application across sectors.
                </p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                    icon: Layers,
                    title: 'Advancing Geospatial Technology Adoption',
                    text: 'Promote the widespread adoption of advanced geospatial technologies (e.g., geographic information systems, remote sensing, UAVs, AI) across public and private sectors to support data-driven decision-making processes, enhance national development, and improve service delivery.',
                },
                {
                    icon: GraduationCap,
                    title: 'Building Capacity & Skill Development',
                    text: 'Develop and implement educational programs, workshops, and certifications to build local capacity in geospatial intelligence. Empower professionals, government officials, and communities with the skills required to effectively use geospatial data in their respective fields.',
                },
                {
                    icon: Users,
                    title: 'Fostering Public-Private Sector Collaboration',
                    text: 'Facilitate collaboration between the public sector, private enterprises, and academia to create a robust geospatial ecosystem in Nigeria. This includes fostering partnerships to drive innovation, share resources, and enhance the effectiveness of geospatial solutions.',
                },
                {
                    icon: Shield,
                    title: 'Enhancing National Security & Safety',
                    text: 'Leverage geospatial intelligence to improve national security and disaster response capabilities. Develop tools and solutions that enhance situational awareness, monitoring, and prediction for military, law enforcement, and emergency response agencies.',
                },
                {
                    icon: Sprout,
                    title: 'Driving Sustainable Development Initiatives',
                    text: 'Promote the application of geospatial intelligence in tackling critical challenges related to climate change, sustainable urbanization, agriculture, water resources management, and environmental conservation. Support the achievement of Nigeria’s Sustainable Development Goals (SDGs).',
                },
                {
                    icon: ScrollText,
                    title: 'Policy Advocacy & Strategic Influence',
                    text: 'Advocate for the integration of geospatial intelligence into national and local policy frameworks. Engage with government agencies to ensure geospatial data and technologies are recognized and prioritized as critical components of national development and governance.',
                },
                {
                    icon: Database,
                    title: 'Promoting Geospatial Data Accessibility & Transparency',
                    text: 'Enhance the availability and accessibility of geospatial data to all sectors of society, ensuring that information is transparent, accurate, and available to decision-makers, researchers, and the public.',
                },
                {
                    icon: Microscope,
                    title: 'Research & Development (R&D) in Geospatial Intelligence',
                    text: 'Foster research and innovation in geospatial science and technology, encouraging the development of new methodologies, tools, and applications. Support academic institutions and research centres in Nigeria to contribute to the global geospatial community.',
                },
                {
                    icon: Megaphone,
                    title: 'Raising Public Awareness & Engagement',
                    text: 'Raise awareness about the importance and potential of geospatial intelligence through media campaigns, seminars, and public outreach programs. Ensure that citizens, businesses, and local communities understand the benefits and applications of geospatial data in their everyday lives.',
                },
                {
                    icon: Globe,
                    title: 'International Cooperation & Networking',
                    text: 'Position Nigeria as a key player in the global geospatial intelligence community by actively engaging with international organizations, participating in global forums, and contributing to international standards and best practices.',
                },
                {
                    icon: Building2,
                    title: 'Data-Driven Decision-Making for Urban Planning & Infrastructure',
                    text: 'Support the use of geospatial intelligence in urban planning, infrastructure development, and resource management. Provide tools and frameworks that help local and national governments make informed decisions about infrastructure projects, land-use planning, and resource allocation.',
                },
                {
                    icon: FileBadge,
                    title: 'Strengthening Geospatial Standards & Governance',
                    text: 'Advocate for the development and implementation of national geospatial data standards and governance frameworks to ensure data quality, interoperability, and consistency across all sectors.',
                },
              ].map((obj, i) => (
                <ExpandableCard 
                  key={i}
                  title={obj.title}
                  text={obj.text}
                  variants={fadeUp}
                  
                  // CRITICAL: We render the icon HERE inside the parent.
                  // We pass the RESULT (<Icon />) to the child.
                  icon={<obj.icon size={24} />} 
                  largeIcon={<obj.icon size={140} strokeWidth={1.5} />}
                />
              ))}

            </div> */}
            <div className="max-w-7xl mx-auto px-4">
              {/* Pass the data to the Client Component */}
              <FeatureAccordion items={processedFeatures} />
            </div>
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <section id="core-values" className="py-24 px-6 bg-linear-to-r from-gray-900 via-black to-gray-800 text-white border-t-4 border-green-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Our Core Values</h2>
            
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
                  desc: "We are committed to the pursuit of excellence in all aspects of our work. From research to practical applications, we deliver high-quality solutions that meet global standards and drive measurable impact for Nigeria's development." 
                },
                { 
                  title: 'Sustainability',
                  img: '/media/SUSTAINABILITY.png',
                  desc: 'We prioritize sustainable practices in our use of geospatial technologies, advocating for long-term solutions that balance economic growth with environmental and social responsibility. Our aim is to ensure that geospatial intelligence supports the sustainable development of Nigeria and the broader African continent.' 
                },
                { 
                  title: 'Accessibility', 
                  img: '/media/ACCESS.png', 
                  desc: 'We believe that geospatial intelligence should be accessible to all, from government policymakers to local communities. We are committed to democratizing the use of geospatial data by making it understandable, usable, and impactful for diverse stakeholders across Nigeria.' 
                },
                { 
                  title: 'Leadership', 
                  img: '/media/leadership.png', 
                  desc: 'We strive to be the leaders in the geospatial intelligence community in Nigeria and Africa. We advocate for geospatial technologies in shaping policy, decision-making, and governance, positioning the Foundation as a key player in national and regional development.' 
                },
                { 
                  title: 'Commitment to National Development', 
                  img: '/media/NATIONAL DEVELOPMENT.png', 
                  desc: "Our core mission is to support Nigeria's growth and development through strategic use of geospatial intelligence. Whether in urban planning, disaster management, national security, or agriculture, we are dedicated to improving the quality of life for Nigerians through data-driven insights." 
                },
                { 
                  title: 'Inclusivity', 
                  img: '/media/INCLUSIVITY.png', 
                  desc: 'We embrace diversity and inclusivity, ensuring that geospatial intelligence is used to empower all Nigerians, regardless of their background, to make informed decisions that drive progress and reduce inequalities.' 
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

                  <h3 className="text-xl font-bold text-green-400 sen">{val.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{val.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        <section id="board-directors" className="py-24 px-4 md:px-6 bg-white relative">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Governance</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Board of Trustees</h2>
              <p className="text-gray-500 text-lg">
                Distinguished individuals providing strategic oversight and ensuring we stay true to our mission.
              </p>
              <div className="w-24 h-1 bg-green-100 mx-auto mt-8 rounded-full">
                  <div className="w-12 h-full bg-green-600 rounded-full"></div>
              </div>
            </div>

            {/* Grid */}
            <TeamGrid members={mapMembersByCategory(members, 'Board')} />
          </div>
        </section>

      {/* --- SECTION 2: MANAGEMENT TEAM (Dynamic, Asymmetrical, Light Gray) --- */}
      <section id="management-team" className="py-24 px-4 md:px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Sticky Title & Context */}
            <div className="lg:w-1/3 lg:sticky lg:top-24 text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
                Operations
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Management <br/> <span className="text-green-600">Team</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our executive team combines decades of expertise in geospatial intelligence, policy formation, and administrative leadership to drive our daily operations.
              </p>
              
              {/* Decorative Stat or Quote */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hidden lg:block">
                <p className="italic text-gray-500 mb-4">"Leadership is the capacity to translate vision into reality."</p>
                <div className="flex items-center gap-2">
                   <div className="h-1 w-10 bg-green-500 rounded-full"></div>
                   <span className="text-sm font-semibold text-gray-900"><span className="cooper">GIFON</span> Executive</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Grid */}
            <div className="lg:w-2/3 w-full">
              <TeamGrid members={mapMembersByCategory(members, 'Advisory')} />
            </div>

          </div>
        </div>
      </section>

        <PartnersCarousel />
        
      </main>
    </>
  );
}