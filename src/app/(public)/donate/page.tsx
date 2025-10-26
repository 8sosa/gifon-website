import HeroSection from '@/components/HeroSection';

export default function DonatePage() {
  return (
    <>
      <HeroSection
        title="GET INVOLVED"
        // description="Help us advance geospatial intelligence and innovation in Nigeria through your support."
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
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

        {/* <section id="opportunities" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-center">Become a Member</h2>
              <div className="min-w-full">
                  <p className="text-gray-700 leading-relaxed">
                    Join our growing community of geospatial experts, researchers, innovators, and advocates.
                  </p>
                  <ul className="list-disc list-inside mb-6">
                      <li>
                        Access exclusive knowledge resources.
                      </li>
                      <li>
                        Network with leaders in government, academia, and industry.
                      </li>
                      <li>
                        Participate in specialized working groups and policy forums.
                      </li>
                  </ul>
              </div>
              <a
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Learn More & Apply
              </a>
          </div>
        </section> 

        <section id="opportunities" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-center">Volunteer With Us</h2>
              <div className="min-w-full">
                  <p className="text-gray-700 leading-relaxed">
                      Contribute your time and expertise to advance geospatial awareness, training, and community projects.
                  </p>
                  <ul className="list-disc list-inside mb-6">
                      <li>
                          Support local mapping initiatives.
                      </li>
                      <li>
                          Mentor students and young professionals.
                      </li>
                      <li>
                          Assist with events, workshops, and research.
                      </li>
                  </ul>
              </div>
              <a
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                  Sign Up to Volunteer
              </a>
          </div>
        </section> 

        <section id="opportunities" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-center">Scholarships & Fellowships</h2>
              <div className="min-w-full">
                  <p className="text-gray-700 leading-relaxed">
                    GIFON invests in the next generation of geospatial leaders.
                  </p>
                  <ul className="list-disc list-inside mb-6">
                      <li>
                        Apply for research grants and study opportunities.
                      </li>
                      <li>
                        Join fellowship programs for professional growth.
                      </li>
                      <li>
                        Gain mentorship from global experts.
                      </li>
                  </ul>
              </div>
              <a
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Explore Opportunities
              </a>
          </div>
        </section> 

        <section id="opportunities" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-center">Partner With Us</h2>
              <div className="min-w-full">
                  <p className="text-gray-700 leading-relaxed">
                    We welcome collaborations with organizations across sectors.
                  </p>
                  <ul className="list-disc list-inside mb-6">
                      <li>
                        Joint research and innovation projects.
                      </li>
                      <li>
                        Public-private partnerships for national development.
                      </li>
                      <li>
                        Sponsorship and donor opportunities.
                      </li>
                  </ul>
              </div>
              <a
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Partner With GIFON
              </a>
          </div>
        </section> 

        <section id="opportunities" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-4 text-center">Careers & Internships</h2>
              <div className="min-w-full">
                  <p className="text-gray-700 leading-relaxed">
                    Grow your career with an organization at the forefront of geospatial intelligence in Africa.
                  </p>
                  <ul className="list-disc list-inside mb-6">
                      <li>
                        Internship placements for students and graduates.
                      </li>
                      <li>
                        Professional roles across technical, research, and policy areas.
                      </li>
                      <li>
                        Equal opportunities for all applicants.
                      </li>
                  </ul>
              </div>
              <a
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                View Openings
              </a>
          </div>
        </section>  */}
        
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
      </main>
    </>
  );
}
