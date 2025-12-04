"use client";

import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link'; 
import { 
  BookOpen, 
  Award, 
  Users, 
  ArrowRight, 
  Target, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

export default function EducationPage() {
  // Data array
  const educationPrograms = [
    {
      title: 'Youth Empowerment & Talent Acceleration',
      src: '/media/ye.jpg',
      link: '/education/youth-empowerment',
      description: 'The Youth Empowerment & Talent Acceleration Programme (YETAP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to identify, train, and mentor the next generation of Nigerian innovators.'
    },
    {
      title: 'Women in GEOINT (WINGS)',
      src: '/media/wings.JPG',
      link: '/education/wings',
      description: 'Dedicated to empowering women in the field of geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy.'
    },
    {
      title: 'Geoinnovation & Tech Incubation',
      src: "/media/geoino.jpeg",
      link: '/education/geoinnovation',
      description: 'Nurturing young innovators, startups, and entrepreneurs who are building solutions at the intersection of geospatial intelligence, technology, and national development.'
    },
    {
      title: 'National Geospatial Security Hub',
      src: "/images/D.jpeg",
      link: '/education/geospatial-hub',
      description: 'Serving as the nation’s premier center for geospatial intelligence innovation, data integration, and strategic decision support for security agencies.'
    },
    {
      title: 'Community Mapping for Development',
      src: "/media/COMMUNITY MAPPING FOR DEVELOPMENT.jpg",
      link: '/education/community-mapping',
      description: 'A grassroots initiative designed to empower communities with geospatial tools, data, and participatory mapping to drive local development and resilience.'
    },
    {
      title: 'Open Data & Research',
      src: "/images/F.jpeg",
      link: '/education/open-data',
      description: 'Promoting data accessibility, research collaboration, and evidence-based policy development in Nigeria’s geospatial intelligence ecosystem.'
    },
    {
      title: 'Conferences & Masterclasses',
      src: "/media/Conference Background.jpg",
      link: '/education/conferences',
      description: 'Knowledge-sharing, collaboration, and continuous learning in advancing the geospatial intelligence ecosystem through regular events.'
    },
    {
      title: 'Training & Certification',
      src: "/media/TRAINING AND CERTIFICATION.jpg", 
      link: '/education/training',
      description: 'Providing standardized, high-quality, and industry-recognized certifications in geospatial intelligence, data science, and related technologies.'
    },
  ];

  return (
    <>
      <HeroSection
        title="Education & Programmes"
        description1={
          <>
            To advance in your career, it is critical to keep updating your skills. <span className="cooper">GIFON</span> has you covered, no matter your experience level, preferred learning method, or professional development need! We regularly deliver education and training at in-person and virtual events.
          </>
        }
        backgroundMedia={["/media/Education Background.jpg"]}
      />

      <main className="bg-gray-50 font-sans text-gray-700">
        
        {/* === TRAINING SECTION === */}
        <div id="C-T" className="scroll-mt-24"></div>
        <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
               <div className="inline-block">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 cooper">
                    Training
                  </h2>
               </div>
               
               <p className="text-lg leading-relaxed text-gray-600">
                  The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) provides modular, competency-based training designed to build technical and analytical GEOINT capacity across sectors.
               </p>

               {/* Feature List */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Layers, title: "Modular Learning", desc: "Beginner to Advanced levels in Remote Sensing & GIS." },
                    { icon: Target, title: "Competency Based", desc: "Focused on real-world skills and application." },
                    { icon: Award, title: "Certified", desc: "Project-based assessments producing industry badges." },
                    { icon: Users, title: "Inclusive", desc: "For students, gov't, and private sector practitioners." },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                       <div className="text-green-600 mt-1"><feat.icon size={20} /></div>
                       <div>
                         <h4 className="font-bold text-gray-900 text-sm">{feat.title}</h4>
                         <p className="text-xs text-gray-500 mt-1">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: Visual Accent */}
            <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] w-full bg-green-900 rounded-3xl overflow-hidden shadow-2xl group">
                   <Image 
                     src="/media/TRAINING AND CERTIFICATION.jpg" 
                     alt="Training session" 
                     fill 
                     className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                      <BookOpen size={64} className="mb-4 text-green-400" />
                      <h3 className="text-2xl font-bold mb-2">Start Learning Today</h3>
                      <p className="text-gray-300">Join hundreds of professionals upgrading their skills.</p>
                   </div>
                </div>
            </div>
          </div>
        </section>


        {/* === PROGRAMMES SECTION === */}
        <div id="programs" className="scroll-mt-24"></div>
        <section className="py-20 bg-white px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 cooper mb-4">
                Our Programmes
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Explore our diverse initiatives designed to foster innovation, security, and development through geospatial intelligence.
              </p>
            </div>
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationPrograms.map((program, idx) => (
                <Link href={program.link} key={idx} className="group h-full">
                  <div className="h-full flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-green-200 hover:-translate-y-2 transition-all duration-300">
                    
                    {/* Image */}
                    <div className="relative w-full h-48 shrink-0 overflow-hidden">
                      <Image
                        src={program.src}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-4 mb-4 flex-1">
                        {program.description}
                      </p>
                      
                      <div className="mt-auto flex items-center text-green-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Explore Program <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === TALENT DEVELOPMENT SECTION === */}
        <div id="talent" className="scroll-mt-24"></div>
        <section className="py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
           {/* Abstract Background */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/10 rounded-l-full blur-3xl pointer-events-none"></div>

           <div className="max-w-5xl mx-auto relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 cooper">Talent Development</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Beyond specific programmes, <span className="cooper text-white">GIFON</span> is dedicated to the holistic development of geospatial talent in Nigeria. We are building a robust pipeline of GEOINT professionals ready to meet the challenges of tomorrow.
              </p>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                  <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                      <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                        <Users size={24} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Mentorship</h3>
                      <p className="text-gray-400 text-sm">Connecting emerging professionals with experienced leaders in the field.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                      <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                        <Target size={24} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Career Services</h3>
                      <p className="text-gray-400 text-sm">Providing resources for job seekers, resume workshops, and interview prep.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                      <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Networking</h3>
                      <p className="text-gray-400 text-sm">Formal and informal opportunities for members to connect and collaborate.</p>
                  </div>
              </div>
              
              <Link
                href="/membership#apply"
                className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-white hover:text-green-700 transition-all hover:-translate-y-1"
              >
                Join Our Talent Network
              </Link>
           </div>
        </section>

      </main>
    </>
  );
}