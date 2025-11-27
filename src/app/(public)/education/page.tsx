"use client";

import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link'; 

export default function EducationPage() {
  // Data array
  const educationPrograms = [
    {
      title: 'Youth Empowerment & Talent Acceleration',
      src: '/media/ye.jpg',
      link: '/education/youth-empowerment',
      description: 'The Youth Empowerment & Talent Acceleration Programme (YETAP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to identify, train, and mentor the next generation of Nigerian innovators, analysts, and leaders in the field of geospatial intelligence (GEOINT)...'
    },
    {
      title: 'Women in GEOINT (WINGS)',
      src: '/media/wing.jpg',
      link: '/education/wings',
      description: 'The Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW) is a forum dedicated to empowering women in the field of geospatial and Geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy...'
    },
    {
      title: 'Geoinnovation & Tech Incubation',
      src: "/images/C.jpeg",
      link: '/education/geoinnovation',
      description: 'The Y-GeoInnovation & Tech Incubation Programme (Y-GITI) is a signature initiative of GIFON aimed at nurturing young innovators, startups, and entrepreneurs who are building solutions at the intersection of geospatial intelligence, technology, and national development...'
    },
    {
      title: 'National Geospatial Security & Intelligence Hub',
      src: "/images/D.jpeg",
      link: '/education/geospatial-hub',
      description: 'The National Geospatial Security & Intelligence Hub (NGSIH) is an initiative to serve as the nation’s premier center for geospatial intelligence innovation, data integration, and strategic decision support...'
    },
    {
      title: 'Community Mapping for Development',
      src: "/images/E.jpeg",
      link: '/education/community-mapping',
      description: 'The Community Mapping for Development (CMD) Programme is a grassroots initiative designed to empower communities with geospatial tools, data, and participatory mapping to drive local development, resilience, and inclusive planning...'
    },
    {
      title: 'Open Data & Research',
      src: "/images/F.jpeg",
      link: '/education/open-data',
      description: 'The Open Data & Research Programme (ODRP) is a flagship initiative aimed at promoting data accessibility, research collaboration, and evidence-based policy development in Nigeria’s geospatial intelligence ecosystem...'
    },
    {
      title: 'Conferences, Workshops & Masterclasses',
      src: "/images/G.jpeg",
      link: '/education/conferences',
      description: 'GIFON recognizes the value of knowledge-sharing, collaboration, and continuous learning in advancing the geospatial intelligence ecosystem through regular events and masterclasses...'
    },
    {
      title: 'Training & Certification',
      src: "/images/H.jpeg", 
      link: '/education/training',
      description: 'The Training & Certification Programmes (TCP) are designed to provide standardized, high-quality, and industry-recognized certifications in geospatial intelligence, data science, and related technologies...'
    },
  ];

  return (
    <>
      <HeroSection
        title="Education & Programmes"
        backgroundMedia = {[
          "/bg/e.jpeg", "/bg/a.JPG", "/bg/b.JPG", "/bg/c.JPG", "/bg/d.JPG", "/ph.svg",
        ]}
      />

      <main className="bg-green-50 font-sans text-gray-700">
        <section className='max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-12 md:space-y-16'>
          
          {/* --- Introductory Text --- */}
          <div className="leading-relaxed text-base md:text-lg text-left md:text-justify">
            <p>
              To advance in your career, it is critical to keep updating your skills, be open to new ideas, and take advantage of every opportunity to learn. You may prefer self-directed learning via online courses or webinars, while others learn best through formal lectures or in-person seminars. GIFON has you covered, no matter your experience level, preferred learning method, or professional development need! We regularly deliver education and training at in-person and virtual events.
            </p>
          </div>
          
          <div className="pt-4" id="C-T"></div>

          {/* === TRAINING SECTION === */}
          <div>
            {/* --- Section Title --- */}
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-2xl md:text-3xl font-semibold">
                Training
              </h2>
              <div className="w-16 h-1 bg-green-600 mt-2"></div>
            </div>
            
            {/* --- Descriptive Text --- */}
            <div className="space-y-4 leading-relaxed text-base md:text-lg text-left md:text-justify">
              <p>
                The Geospatial Intelligence Foundation of Nigeria (GIFON) provides modular, competency-based training designed to build technical and analytical GEOINT capacity across sectors. Courses range from beginner to advanced levels in remote sensing, GIS, data analytics, and policy.
              </p>
              <p>
                GIFON’s training serves students, early-career professionals, and government and private sector practitioners. Each module integrates core components such as GIS foundations, Earth Observation (EO) for security and environment, and GEOINT for decision support. 
              </p>
              <p>
                  Assessments are project-based, producing capstone deliverables, badges, and certificates.
              </p>
            </div>
          </div>


          {/* === PROGRAMMES Section === */}
          <div className="pt-4" id="programs"></div>

          <div>
            {/* --- Section Title --- */}
            <div className="inline-block mb-8 text-left">
              <h2 className="text-green-600 text-2xl md:text-3xl font-semibold">
                Our Programmes
              </h2>
              <div className="w-16 h-1 bg-green-600 mt-2"></div>
            </div>
            
            {/* --- Dynamic Programmes List --- */}
            <div className="flex flex-col gap-8 md:gap-10">
              {educationPrograms.map((program, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden border border-gray-100"
                >
                  {/* Image Container: Full width on mobile, Fixed width on Desktop */}
                  <div className="relative w-full md:w-64 h-56 md:h-auto shrink-0 bg-gray-200">
                    <Image
                      src={program.src}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col items-start justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-700">
                      {program.title}
                    </h3>
                    <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-600 line-clamp-4 md:line-clamp-none">
                      {program.description}
                    </p>
                    <Link
                      href={program.link}
                      className="mt-auto inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      Learn More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === TALENT DEVELOPMENT SECTION === */}
          <div className="pt-4" id="talent"></div>

          <div>
            {/* --- Section Title --- */}
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-2xl md:text-3xl font-semibold">
                Talent Development
              </h2>
              <div className="w-16 h-1 bg-green-600 mt-2"></div>
            </div>
            
            {/* --- Descriptive Text --- */}
            <div className="space-y-4 leading-relaxed text-base md:text-lg text-left md:text-justify">
              <p>
                Beyond specific programmes, GIFON is dedicated to the holistic development of geospatial talent in Nigeria. We believe in nurturing skills at every career stage, from the curious student to the seasoned professional.
              </p>
              <p>
                Our Talent Development initiatives focus on:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">Mentorship Matching:</span> Connecting emerging professionals with experienced leaders in the field.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Career Services:</span> Providing resources for job seekers, including resume workshops and interview preparation.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Professional Networking:</span> Creating formal and informal opportunities for members to connect, collaborate, and grow.
                </li>
              </ul>
              <p>
                We are building a robust pipeline of GEOINT professionals ready to meet the challenges of today and tomorrow.
              </p>
              
              {/* --- Call to Action Button --- */}
              <div className="pt-4">
                <Link
                  href="/membership#apply"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-green-700 hover:shadow-lg transition-all"
                >
                  Join Our Talent Network
                </Link>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}