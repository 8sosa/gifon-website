import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
// import Image from 'next/image';

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Professional Resources"
        // description="Access tools, datasets, training materials, and downloadables to support your geospatial projects."
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
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Publications & Other Resources
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>

          <div>
            <p>To advance in your career, it is critical to keep updating your skills, be open to new ideas and ways of doing things, and take advantage of every opportunity to learn that comes along. You may prefer self-directed learning via online courses or webinars while others learn best through formal lecture or in-person seminars, training, and conferences. GIFON has you covered, no matter your experience level, preferred learning method or professional development need! We regularly deliver education and training at in-person events and at virtual events.</p>
            <br />
            <p>Certainly, it takes more effort to gain necessary approvals and arrange to be away from your family and work in order to attend an in-person conference or training event. But that effort typically pays off with insights to improve not only your own performance but also that of your organization. Between educational sessions, exhibitor solutions, and hallway discussions, you are certain to identify better, faster and cheaper ways to get the work done. Getting a variety of viewpoints can help you see where we can change or improve our own ideas and processes.</p>
          </div>
        </section>
        <section className='w-full bg-green-700'>
          <div className='max-w-5xl mx-auto px-6 pb-12'>
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Publications
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white rounded-lg p-4 hover:bg-green-100 flex flex-col gap-4">
              <div className="inline-block text-left">
                <h2 className="text-green-600 text-2xl font-semibold flex flex-row items-center">
                  <FaXTwitter size={16}/>

                  The GIS Professional
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
            <div className="bg-white rounded-lg p-4 hover:bg-green-100 flex flex-col gap-4">
              <div className="inline-block text-left">
                <h2 className="text-green-600 text-2xl font-semibold flex flex-row items-center">
                  <FaXTwitter size={16}/>
                  URISA Journal (1989-2017)
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
            <div className="bg-white rounded-lg p-4 hover:bg-green-100 flex flex-col gap-4">
              <div className="inline-block text-left">
                <h2 className="text-green-600 text-2xl font-semibold flex flex-row items-center">
                  <FaXTwitter size={16}/>
                  Geospatial Fact Sheets
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
            <div className="bg-white rounded-lg p-4 hover:bg-green-100 flex flex-col gap-4">
              <div className="inline-block text-left">
                <h2 className="text-green-600 text-2xl font-semibold flex flex-row items-center">
                  <FaXTwitter size={16}/>

                  The GIS Professional
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
          </div>
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
