import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <>
      <HeroSection
        title="GET INVOLVED"
        // description="Help us advance geospatial intelligence and innovation in Nigeria through your support."
        backgroundMedia = {[
          "/media/Get Involved Background.jpg",
        ]}
      />

      <main className="w-full">
        {/* --- Static Sections for Donate Page --- */}
        <section id="ways-to-support" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">GET INVOLVED</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              At the Geospatial Intelligence Foundation of Nigeria (GIFON), we believe that collective action fuels innovation, strengthens national security, and drives sustainable development. Whether you are a professional, student, partner organization, or supporter, there are many ways to join our mission.
            </p>
          </div>
        </section>
        
        <section id="opportunities" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-center">Support Our Work</h2>
              <div className="min-w-full">
                  <p className="text-gray-700 leading-relaxed">
                    Your support helps us expand programs, empower communities, and strengthen national resilience.
                  </p>
                  <ul className="list-disc list-inside mb-6">
                      <li>
                        One-time or recurring donations.
                      </li>
                      <li>
                        Corporate sponsorship packages.
                      </li>
                      <li>
                        In-kind support and technology contributions.
                      </li>
                  </ul>
              </div>
              <a
              href="#"
              className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Donate to GIFON
              </a>
          </div>
        </section>

        <section id="opportunities" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-semibold mb-4">Volunteer Opportunities</h2>
              <p className="text-gray-700 leading-relaxed text-justify max-w-3xl mb-4">
                GIFON thrives on the commitment and passion of volunteers who dedicate their time and skills to advancing geospatial intelligence for national development. As a volunteer, you can contribute to research, event organization, community mapping initiatives, training delivery, and advocacy campaigns.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify max-w-3xl mb-8">
                Volunteering with GIFON not only strengthens your professional profile but also allows you to make a tangible difference in Nigeria’s progress towards a resilient, secure, and data-driven society.
              </p>
              <Link
                href="/contact-us" // Links to the contact page to inquire
                className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Volunteer Now
              </Link>
          </div>
        </section>
      </main>
    </>
  );
}
