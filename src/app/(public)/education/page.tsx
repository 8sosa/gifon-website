import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link'; 

export default function DonatePage() {
  // Data array created from your documents and link list
  const educationPrograms = [
    {
      title: 'Youth Empowerment & Talent Acceleration',
      src: "/images/A.jpeg", // Using placeholder images from your code
      link: '/education/youth-empowerment',
      description: 'The Youth Empowerment & Talent Acceleration Programme (YETAP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to identify, train, and mentor the next generation of Nigerian innovators, analysts, and leaders in the field of geospatial intelligence (GEOINT) and its applications to national development and security...'
    },
    {
      title: 'Women in GEOINT (WINGS)',
      src: "/images/B.jpeg",
      link: '/education/wings',
      description: 'The Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW) is a forum dedicated to empowering women in the field of geospatial and Geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy...'
    },
    {
      title: 'Geoinnovation & Tech Incubation',
      src: "/images/C.jpeg",
      link: '/education/geoinnovation',
      description: 'The Y-GeoInnovation & Tech Incubation Programme (Y-GITI) is a signature initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) aimed at nurturing young innovators, startups, and entrepreneurs who are building solutions at the intersection of geospatial intelligence, technology, and national development...'
    },
    {
      title: 'National Geospatial Security & Intelligence Hub',
      src: "/images/D.jpeg",
      link: '/education/geospatial-hub',
      description: 'The National Geospatial Security & Intelligence Hub (NGSIH) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to serve as the nation’s premier center for geospatial intelligence innovation, data integration, and strategic decision support...'
    },
    {
      title: 'Community Mapping for Development',
      src: "/images/E.jpeg",
      link: '/education/community-mapping',
      description: 'The Community Mapping for Development (CMD) Programme is a grassroots initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) designed to empower communities with geospatial tools, data, and participatory mapping to drive local development, resilience, and inclusive planning...'
    },
    {
      title: 'Open Data & Research',
      src: "/images/F.jpeg",
      link: '/education/open-data',
      description: 'The Open Data & Research Programme (ODRP) is a flagship initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) aimed at promoting data accessibility, research collaboration, and evidence-based policy development in Nigeria’s geospatial intelligence ecosystem...'
    },
    {
      title: 'Conferences, Workshops & Masterclasses',
      src: "/images/G.jpeg",
      link: '/education/conferences',
      description: 'The Geospatial Intelligence Foundation of Nigeria (GIFON) recognizes the value of knowledge-sharing, collaboration, and continuous learning in advancing the geospatial intelligence ecosystem...'
    },
    {
      title: 'Training & Certification',
      src: "/images/H.jpeg", // Added an extra placeholder
      link: '/education/training',
      description: 'The Training & Certification Programmes (TCP) of the Geospatial Intelligence Foundation of Nigeria (GIFON) are designed to provide standardized, high-quality, and industry-recognized certifications in geospatial intelligence, data science, and related technologies...'
    },
  ];

  return (
    <>
      <HeroSection
        title="Education & Programmes" // Updated title to be more general
        // description=""
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="bg-green-50">
        <section className='max-w-5xl mx-auto px-6 py-12 space-y-16'>
          
          {/* --- Introductory Text --- */}
          <div className="text-gray-700 leading-relaxed">
            <p>To advance in your career, it is critical to keep updating your skills, be open to new ideas and ways of doing things, and take advantage of every opportunity to learn that comes along. You may prefer self-directed learning via online courses or webinars while others learn best through formal lecture or in-person seminars, training, and conferences. GIFON has you covered, no matter your experience level, preferred learning method or professional development need! We regularly deliver education and training at in-person events and at virtual events.</p>
          </div>
          <div className="pt-4" id="C-T"></div>
          {/* === NEW TRAINING SECTION === */}
          <div> {/* This is the anchor */}
            {/* --- Section Title --- */}
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-2xl font-semibold">
                Training
              </h2>
              <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
            </div>
            
            {/* --- Descriptive Text --- */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Geospatial Intelligence Foundation of Nigeria (GIFON) provides modular, competency-based training designed to build technical and analytical GEOINT capacity across sectors. Courses range from beginner to advanced levels in remote sensing, GIS, data analytics, and policy.
              </p>
              <p>
                GIFON’s training serves students, early-career professionals, and government and private sector practitioners. Each module integrates core components such as GIS foundations, Earth Observation (EO) for security and environment, and GEOINT for decision support. 
              </p>
              <p>
                  Assessments are project-based, producing capstone deliverables, badges, and certificates
              </p>
            </div>
          </div>
          {/* === END OF NEW SECTION === */}


          {/* --- PROGRAMMES Section --- */}
          <div className="pt-4" id="programs"></div>

          <div>
            {/* --- Section Title --- */}
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-2xl font-semibold">
                Our Programmes
              </h2>
              {/* Short underline */}
              <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
            </div>
            {/* <p className="text-gray-700 leading-relaxed">Every experience, whether it&apos;s a conference, a project, or even a conversation, presents a chance to broaden your knowledge base and stay relevant. By embracing these opportunities, you can enhance your career readiness and become a proactive contributor to your organization and the GIS profession overall.</p> */}
            
            {/* --- Dynamic Programmes List --- */}
            <div className="flex flex-col gap-8 text-gray-700 mt-8"> {/* Added mt-8 for spacing */}
              {educationPrograms.map((program, idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full"
                >
                  <Image
                    src={program.src} // Using placeholder images
                    alt={program.title}
                    width={200} // Increased size for better layout
                    height={120}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1 flex flex-col items-start">
                    <h3 className="text-xl font-semibold mb-2 text-green-600">
                      {program.title}
                    </h3>
                    <p className="mb-4">
                      {program.description}
                    </p>
                    <Link
                      href={program.link}
                      className="mt-auto inline-block text-blue-600 font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === TALENT DEVELOPMENT SECTION === */}
          <div className="pt-4" id="talent"></div>

          <div> {/* This is the anchor */}
            {/* --- Section Title --- */}
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-2xl font-semibold">
                Talent Development
              </h2>
              <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
            </div>
            
            {/* --- Descriptive Text --- */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Beyond specific programmes, GIFON is dedicated to the holistic development of geospatial talent in Nigeria. We believe in nurturing skills at every career stage, from the curious student to the seasoned professional.
              </p>
              <p>
                Our Talent Development initiatives focus on:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>
                  <span className="font-semibold">Mentorship Matching:</span> Connecting emerging professionals with experienced leaders in the field.
                </li>
                <li>
                  <span className="font-semibold">Career Services:</span> Providing resources for job seekers, including resume workshops and interview preparation.
                </li>
                <li>
                  <span className="font-semibold">Professional Networking:</span> Creating formal and informal opportunities for members to connect, collaborate, and grow.
                </li>
              </ul>
              <p>
                We are building a robust pipeline of GEOINT professionals ready to meet the challenges of today and tomorrow.
              </p>
              
              {/* --- Call to Action Button --- */}
              <Link
                href="/membership#apply" // Links to the membership/apply section
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 w-fit mt-4"
              >
                Join Our Talent Network
              </Link>
            </div>
          </div>
          {/* === END OF SECTION === */}

        </section>
      </main>
    </>
  );
}