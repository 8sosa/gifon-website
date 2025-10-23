import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link'; // Uncommented to use for buttons

export default function DonatePage() {
  // Data array created from your documents and link list
  const educationPrograms = [
    {
      title: 'Youth Empowerment & Talent Acceleration',
      src: "/images/A.jpeg", // Using placeholder images from your code
      link: '/education/youth-empowerment',
      description: 'An initiative to identify, train, and mentor the next generation of Nigerian innovators, analysts, and leaders in GEOINT. This programme provides a structured pathway for youth to acquire technical skills, career opportunities, and entrepreneurial support in geospatial intelligence, remote sensing, AI, and data science.'
    },
    {
      title: 'Women in GEOINT (WINGS)',
      src: "/images/B.jpeg",
      link: '/education/wings',
      description: 'The GEOINT sector plays a critical role in national security and development, but women remain significantly underrepresented. This program is designed to close the gender gap in STEM and security, enhancing national security by empowering women and leveraging diverse perspectives to address complex challenges.'
    },
    {
      title: 'Geoinnovation & Tech Incubation',
      src: "/images/C.jpeg",
      link: '/education/geoinnovation',
      description: 'A signature initiative aimed at nurturing young innovators, startups, and entrepreneurs who are building solutions at the intersection of geospatial intelligence and technology. This programme serves as a talent-to-enterprise pipeline, providing access to training, mentorship, incubation, and seed funding.'
    },
    {
      title: 'National Geospatial Security & Intelligence Hub',
      src: "/images/D.jpeg",
      link: '/education/geospatial-hub',
      description: 'This initiative serves as the nation’s premier center for geospatial intelligence innovation, data integration, and strategic decision support. It is designed as a secure, collaborative environment where government, industry, and academia can leverage GEOINT to safeguard national interests.'
    },
    {
      title: 'Community Mapping for Development',
      src: "/images/E.jpeg",
      link: '/education/community-mapping',
      description: 'A grassroots initiative designed to empower communities with geospatial tools, data, and participatory mapping to drive local development and resilience. This ensures that data-driven decision-making reaches the last mile, supporting social services, infrastructure, and disaster risk reduction.'
    },
    {
      title: 'Open Data & Research',
      src: "/images/F.jpeg",
      link: '/education/open-data',
      description: 'A flagship initiative aimed at promoting data accessibility, research collaboration, and evidence-based policy development. The programme seeks to make geospatial data openly available, ethically managed, and widely used for national development, security, innovation, and academic advancement.'
    },
    {
      title: 'Conferences, Workshops & Masterclasses',
      src: "/images/G.jpeg",
      link: '/education/conferences',
      description: 'GIFON recognizes the value of knowledge-sharing and continuous learning. Through conferences, workshops, technical symposia, and roundtables, we create platforms where policymakers, security agencies, industry leaders, and researchers converge to discuss pressing issues.'
    },
    {
      title: 'Training & Certification',
      src: "/images/H.jpeg", // Added an extra placeholder
      link: '/education/training',
      description: 'These programmes are designed to provide standardized, high-quality, and industry-recognized certifications in geospatial intelligence, data science, and related technologies. They strengthen the national workforce, build institutional capacity, and align Nigerian expertise with global GEOINT standards.'
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
          <div>
            <p>To advance in your career, it is critical to keep updating your skills, be open to new ideas and ways of doing things, and take advantage of every opportunity to learn that comes along. You may prefer self-directed learning via online courses or webinars while others learn best through formal lecture or in-person seminars, training, and conferences. GIFON has you covered, no matter your experience level, preferred learning method or professional development need! We regularly deliver education and training at in-person events and at virtual events.</p>
            <br />
            <p id='C-T'>Certainly, it takes more effort to gain necessary approvals and arrange to be away from your family and work in order to attend an in-person conference or training event. But that effort typically pays off with insights to improve not only your own performance but also that of your organization. Between educational sessions, exhibitor solutions, and hallway discussions, you are certain to identify better, faster and cheaper ways to get the work done. Getting a variety of viewpoints can help you see where we can change or improve our own ideas and processes.</p>
          </div>

          {/* --- Section Title --- */}
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Our Programmes
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
          <p>Every experience, whether it&apos;s a conference, a project, or even a conversation, presents a chance to broaden your knowledge base and stay relevant. By embracing these opportunities, you can enhance your career readiness and become a proactive contributor to your organization and the GIS profession overall.</p>
          
          {/* --- Dynamic Programmes List --- */}
          <div className="flex flex-col gap-8 text-gray-700">
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
        </section>
      </main>
    </>
  );
}