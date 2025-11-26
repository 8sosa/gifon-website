import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import {JSX} from 'react'; // Use this to import JSX namespace
import Image from 'next/image'; // Import Next.js Image component
// Import all the icons we'll need
import { 
  FaBookOpen, 
  FaNewspaper, 
  FaBullhorn, 
  FaMicrophoneAlt, 
  FaChalkboardTeacher, 
  FaImages, 
  FaDownload 
} from "react-icons/fa";

// A simple reusable component for consistent section headers
const SectionHeader = ({ title, icon }: { title: string, icon: JSX.Element }) => (
  <div className="inline-block mb-8 text-left">
    <h2 className="text-green-600 text-3xl font-semibold flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="w-20 h-1 bg-green-600 mt-2"></div>
  </div>
);

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

      {/* Main content wrapper */}
      <main>

        {/* --- 1. MEDIA & RESOURCES (Intro) --- */}
        <section className='bg-green-50' id='media'>
          <div className='max-w-5xl mx-auto px-6 py-16 space-y-8'>
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-3xl font-semibold">
                MEDIA & RESOURCES
              </h2>
              <div className="w-20 h-1 bg-green-600 mt-2 items-start"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>The Geospatial Intelligence Foundation of Nigeria (GIFON) is committed to transparency, knowledge-sharing, and stakeholder engagement. Our Media & Resources hub provides open access to GIFON’s communications, publications, and multimedia content, serving as a central knowledge and information gateway for members, partners, and the public.</p>
              
              <p>This section offers:</p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><span className="font-semibold">News & Updates</span> – Timely coverage of GIFON’s activities.</li>
                <li><span className="font-semibold">Press Releases</span> – Official statements on initiatives and partnerships.</li>
                <li><span className="font-semibold">Photo & Video Gallery</span> – Visual highlights from our events.</li>
                <li><span className="font-semibold">Publications Archive</span> – Access to research reports, white papers, and briefs.</li>
                <li><span className="font-semibold">Resource Materials</span> – Toolkits, guides, and reference documents.</li>
              </ul>
              
              <p>
                By consolidating our communication assets, <span className="font-semibold">Media & Resources</span> ensures that stakeholders stay <span className="font-semibold">informed, inspired, and empowered</span> to collaborate with GIFON in shaping Nigeria’s geospatial intelligence future.
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. NEWS --- */}
        <section className='bg-white pt-16' id='News'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <SectionHeader title="News" icon={<FaNewspaper size={24} />} />
            <div className="grid md:grid-cols-3 gap-6">
              {/* News Item 1 */}
              <div className="rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
                <div className="relative w-full h-40"> {/* Wrapper for Image */}
                  <Image src="/ph.svg" alt="News placeholder" fill className="object-cover"/>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-1">Oct 26, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">GIFON Partners with Ministry of Defence</h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">A new MOU is signed to enhance national security through advanced geospatial intelligence...</p>
                  <Link href="#" className="text-green-600 hover:underline font-semibold">Read More &rarr;</Link>
                </div>
              </div>
              {/* News Item 2 */}
              <div className="rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
                <div className="relative w-full h-40"> {/* Wrapper for Image */}
                  <Image src="/ph.svg" alt="News placeholder" fill className="object-cover"/>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-1">Oct 22, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Youth Empowerment Program Launches</h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">The first cohort of the WINGS program begins training, focusing on remote sensing...</p>
                  <Link href="#" className="text-green-600 hover:underline font-semibold">Read More &rarr;</Link>
                </div>
              </div>
              {/* News Item 3 */}
              <div className="rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
                <div className="relative w-full h-40"> {/* Wrapper for Image */}
                  <Image src="/ph.svg" alt="News placeholder" fill className="object-cover"/>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-1">Oct 18, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Annual Conference Dates Announced</h3>
                  {/* FIXED: Unescaped quotes */}
                  <p className="text-gray-600 text-sm flex-grow mb-4">GeoINSIGHT 2026 will be held in Abuja, focusing on &quot;GEOINT for Critical Infrastructure&quot;...</p>
                  <Link href="#" className="text-green-600 hover:underline font-semibold">Read More &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. PRESS RELEASES --- */}
        <section className='bg-green-50 pt-16' id='Press'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <SectionHeader title="Press Releases" icon={<FaBullhorn size={24} />} />
            <div className="space-y-4">
              {/* Press Item 1 */}
              <div className="p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <span className="text-sm text-gray-500">Oct 26, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800">Official Statement: GIFON Stance on National Data Sharing Policy</h3>
                </div>
                <Link href="#" className="mt-2 md:mt-0 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 w-fit">
                  Read Statement
                </Link>
              </div>
              {/* Press Item 2 */}
              <div className="p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <span className="text-sm text-gray-500">Oct 20, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800">GIFON Appoints New Director for Research and Development</h3>
                </div>
                <Link href="#" className="mt-2 md:mt-0 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 w-fit">
                  Read Statement
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. PODCAST --- */}
        <section className='bg-white pt-16' id='Podcast'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <SectionHeader title="GeoINSIGHT Podcast" icon={<FaMicrophoneAlt size={24} />} />
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center">
              {/* Wrapper for Image */}
              <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                <Image src="/ph.svg" alt="Podcast placeholder" fill className="object-cover rounded-md"/>
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-green-600">LATEST EPISODE</span>
                {/* FIXED: Unescaped apostrophe */}
                <h3 className="text-2xl font-bold text-gray-800 mt-1 mb-2">Ep. 12: Mapping Nigeria&apos;s Energy Future</h3>
                <p className="text-gray-600 mb-4">We sit down with Dr. Fatima Bello to discuss how satellite imagery is being used to secure pipelines and identify new renewable energy sites...</p>
                <Link href="#" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700">
                  Listen Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. WEBINAR --- */}
        <section className='bg-green-50 pt-16' id='Webinar'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <SectionHeader title="Webinars & Masterclasses" icon={<FaChalkboardTeacher size={24} />} />
            <div className="grid md:grid-cols-2 gap-6">
              {/* Webinar Item 1 */}
              <div className="rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
                <div className="relative w-full h-48"> {/* Wrapper for Image */}
                  <Image src="/ph.svg" alt="Webinar placeholder" fill className="object-cover"/>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-1">PAST EVENT: SEP 30, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Intro to AI/ML in Geospatial Analysis</h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">Watch the recording of our 2-hour masterclass on object detection and land use classification.</p>
                  <Link href="#" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 w-fit">
                    Watch Now
                  </Link>
                </div>
              </div>
              {/* Webinar Item 2 */}
              <div className="rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
                <div className="relative w-full h-48"> {/* Wrapper for Image */}
                  <Image src="/ph.svg" alt="Webinar placeholder" fill className="object-cover"/>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-sm text-red-600 font-semibold mb-1">UPCOMING: NOV 15, 2025</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Coastal Resilience & Flood Modeling</h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">Join our panel of experts as they discuss climate change adaptation strategies for coastal cities.</p>
                  <Link href="#" className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 w-fit">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. PUBLICATIONS (Your existing section) --- */}
        <section className='w-full bg-green-700 pt-16' id='publications'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                PUBLICATIONS
              </h2>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                At GIFON, knowledge is at the heart of our mission. Through our publications, we document insights, share cutting-edge research, and shape conversations on geospatial intelligence.
              </p>
            </div>

            {(() => {
              const publications = [
                { title: "Eyes on Location – The Journal of GeoINSIGHT", id: "GeoINSIGHT", description: "Our flagship peer-reviewed journal featuring original research, policy analyses, and thought leadership on GEOINT and its applications." },
                { title: "Eyes on Location – The GeoINSIGHT Bulletin", id: "Bulletin", description: "A monthly newsletter that delivers concise updates, expert commentary, and highlights of GIFON activities." },
                { title: "Conference & Workshop Proceedings", id: "Proceedings", description: "We publish proceedings from our conferences and masterclasses, capturing knowledge shared by experts." },
                { title: "Policy Briefs & White Papers", id: "Policy", description: "Strategic documents offering evidence-based recommendations to support government and stakeholders." },
                { title: "Research Reports", id: "Research", description: "Comprehensive studies exploring challenges and opportunities in Nigeria’s 13 critical infrastructure sectors." },
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
                          <FaBookOpen size={20}/>
                          {pub.title}
                        </h2>
                        <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
                      </div>
                      <p className="flex-grow">{pub.description}</p>
                      <Link
                        href="#"
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

        {/* --- 7. PHOTO & VIDEO GALLERY --- */}
        <section className='bg-white pt-16' id='Gallery'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <SectionHeader title="Photo & Video Gallery" icon={<FaImages size={24} />} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Mock gallery images */}
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 1" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 2" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 3" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 4" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 5" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 6" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 7" fill className="rounded-lg shadow-md object-cover"/>
              </div>
              <div className="relative w-full h-48 aspect-square">
                <Image src="/ph.svg" alt="Gallery 8" fill className="rounded-lg shadow-md object-cover"/>
              </div>
            </div>
            <div className="text-center mt-8">
              {/* <Link href="#" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
                View All on Flickr
              </Link> */}
            </div>
          </div>
        </section>

        {/* --- 8. DOWNLOADS --- */}
        <section className='bg-green-50 pt-16' id='Downloads'>
          <div className='max-w-5xl mx-auto px-6 py-16'>
            <SectionHeader title="Downloads" icon={<FaDownload size={24} />} />
            <div className="space-y-3">
              {/* Download Item */}
              <Link href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-50 transition">
                <FaDownload className="text-green-600 w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-80cm">GIFON Annual Report 2024</h3>
                <span className="ml-auto text-sm text-gray-500">(PDF, 5.2MB)</span>
              </Link>
              {/* Download Item */}
              <Link href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-50 transition">
                <FaDownload className="text-green-600 w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-800">Membership Application Form</h3>
                <span className="ml-auto text-sm text-gray-500">(DOCX, 1.1MB)</span>
              </Link>
              {/* Download Item */}
              <Link href="#" className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-50 transition">
                <FaDownload className="text-green-600 w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-800">GeoINSIGHT Conference Brochure 2025</h3>
                <span className="ml-auto text-sm text-gray-500">(PDF, 2.8MB)</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}