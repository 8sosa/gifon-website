import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaBookOpen } from "react-icons/fa6";
// import Image from 'next/image';

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Resources"
        description="Access tools, datasets, training materials, and downloadables to support your geospatial projects."
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
      <section className='max-w-5xl mx-auto px-6 py-12 space-y-16' id='media'>
        <div className="inline-block mb-6 text-left">
          <h2 className="text-green-600 text-2xl font-semibold">
            MEDIA & RESOURCES
          </h2>
          {/* Short underline */}
          <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>The Geospatial Intelligence Foundation of Nigeria (GIFON) is committed to transparency, knowledge-sharing, and stakeholder engagement. Our Media & Resources hub provides open access to GIFON’s communications, publications, and multimedia content, serving as a central knowledge and information gateway for members, partners, and the public.</p>
          
          <p>This section offers:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <span className="font-semibold">News & Updates</span> – Timely coverage of GIFON’s activities, programs, and national engagements.
            </li>
            <li>
              <span className="font-semibold">Press Releases</span> – Official statements on initiatives, partnerships, and policy positions.
            </li>
            <li>
              <span className="font-semibold">Photo & Video Gallery</span> – Visual highlights from our events, conferences, training programs, and field activities.
            </li>
            <li>
              <span className="font-semibold">Publications Archive</span> – Access to research reports, white papers, policy briefs, and bulletins.
            </li>
            <li>
              <span className="font-semibold">Resource Materials</span> – Toolkits, guides, and reference documents for professionals, students, and institutions.
            </li>
          </ul>
          
          <p>
            By consolidating our communication assets, <span className="font-semibold">Media & Resources</span> ensures that stakeholders stay <span className="font-semibold">informed, inspired, and empowered</span> to collaborate with GIFON in shaping Nigeria’s geospatial intelligence future.
          </p>
        </div>
      </section>
      <section className='w-full bg-green-700' id='publications'>
        <div className='max-w-5xl mx-auto px-6 py-12'> {/* Added py-12 for spacing */}
          
          {/* --- New Introductory Text --- */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              PUBLICATIONS
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              At GIFON, knowledge is at the heart of our mission. Through our publications, we document insights, share cutting-edge research, and shape conversations on geospatial intelligence, national security, and sustainable development across Nigeria and the world.
            </p>
          </div>

          {/* --- Data for the grid --- */}
          {(() => {
            const publications = [
              {
                title: "Eyes on Location – The Journal of GeoINSIGHT",
                id: "GeoINSIGHT",
                description: "Our flagship peer-reviewed journal featuring original research, policy analyses, and thought leadership on GEOINT and its applications. A platform for academics, professionals, and policymakers to engage with emerging trends.",
              },
              {
                title: "Eyes on Location – The GeoINSIGHT Bulletin",
                id: "Bulletin",
                description: "A monthly newsletter that delivers concise updates, expert commentary, and highlights of GIFON activities. Perfect for staying connected to the latest developments in the geospatial ecosystem.",
              },
              {
                title: "Conference & Workshop Proceedings",
                id: "Proceedings",
                description: "We publish proceedings from our conferences, workshops, and masterclasses, capturing knowledge shared by experts, practitioners, and partners for global reference and local application.",
              },
              {
                title: "Policy Briefs & White Papers",
                id: "Policy",
                description: "Strategic documents offering evidence-based recommendations and frameworks to support governments, institutions, and stakeholders in strengthening geospatial governance and security.",
              },
              {
                title: "Research Reports",
                id: "Research",
                description: "Comprehensive studies exploring challenges, innovations, and opportunities in geospatial intelligence, with a focus on Nigeria’s 13 critical infrastructure sectors and beyond.",
              },
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                {publications.map((pub, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg p-6 hover:bg-green-50 flex flex-col gap-4 shadow-lg"
                    id={pub.id}
                  >
                    <div className="inline-block text-left">
                      <h2 className="text-green-600 text-xl font-semibold flex flex-row items-center gap-2">
                        <FaBookOpen size={20}/> {/* Updated Icon */}
                        {pub.title}
                      </h2>
                      {/* Short underline */}
                      <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                    </div>
                    <p className="flex-grow">
                      {pub.description}
                    </p>
                    <Link
                      href="#" // You can update this link later
                      className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 w-fit mt-4"
                    >
                      READ MORE
                    </Link>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>
        <section className='max-w-5xl mx-auto px-6 py-12 space-y-16'>
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              More Resources
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
          <div className="flex flex-col gap-6 text-gray-700">
                {[
                    "Professional Education & Training",
                    "Access to Resources",
                    "Meaningful Connections",
                    "Mentoring",
                    "Professional Development & Contribution",
                    "Visibility (for You & Your Organization)",
                    "New Perspectives",
                ].map((benefit, idx) => (
                    <div
                    key={idx}
                    className=" rounded-lg p-4 hover:bg-green-100 flex flex-col gap-4 items-start space-x-4 w-full"
                    >                      
                          <div className="inline-block text-left">
                            <h2 className="text-green-600 text-2xl font-semibold">
                              {benefit}
                            </h2>
                            {/* Short underline */}
                            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                          </div>
                          <p>
                              random text about the benefit to fill up space and make it look like a real paragraph. This is just placeholder text.
                          </p>
                          <Link
                            href="#"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 w-fit"
                            >
                            READ MORE
                          </Link>
                        </div>
                ))}
            </div>
        </section>

        {/* --- Static Sections for Resources Page --- */}
        {/* <section id="tools-portals" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Geospatial Tools & Portals</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore a range of geospatial tools and platforms.
            </p>
          </div>
        </section>

        <section id="datasets-maps" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Datasets & Maps</h2>
            <p className="text-gray-700 leading-relaxed">
              Access curated datasets and maps to enhance your spatial analysis and decision-making.
            </p>
          </div>
        </section>

        <section id="training-materials" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Training Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              Download training resources and manuals to improve your geospatial skills.
            </p>
          </div>
        </section>

        <section id="downloadables" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Downloadables</h2>
            <p className="text-gray-700 leading-relaxed">
              Get quick access to brochures, reports, and other downloadable materials.
            </p>
          </div>
        </section> */}
      </main>
    </>
  );
}
