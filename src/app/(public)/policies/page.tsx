import HeroSection from '@/components/HeroSection';

export default function PoliciesPage() {
  return (
    <>
      <HeroSection
        title="Policies"
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

      <main className="w-full">
        {/* --- Static Sections for Policies Page --- */}
        <section id="ethics" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Code of Ethics</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Code of Ethics establishes the guiding principles that ensure all research,
              analysis, and dissemination of geospatial intelligence (GEOINT) are conducted
              with integrity and accountability. Professionals working with GEOINT data must
              respect human rights, safeguard sensitive information, and avoid practices that
              could compromise public trust or national security. Ethical conduct also extends
              to the responsible use of emerging technologies such as AI-driven geospatial
              modeling, ensuring transparency in methods and fairness in applications. By
              upholding these standards, we foster a professional culture where knowledge is
              applied responsibly for the greater good of society and global security.
            </p>
          </div>
        </section>

        <section id="anti-corruption" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Anti-Corruption</h2>
            <p className="text-gray-700 leading-relaxed">
              Transparency and accountability are essential in the field of geospatial
              security, where funding, research, and operations intersect with critical
              government and private sector interests. Our Anti-Corruption policy ensures that
              decisions involving GEOINT projects, partnerships, and resource allocation are
              free from bribery, favoritism, or unethical influence. Every transaction, from
              field surveys to procurement of satellite imagery, is subject to strict
              monitoring and auditing. By rejecting corrupt practices, we not only safeguard
              institutional credibility but also strengthen international cooperation in
              geospatial intelligence, ensuring that shared security objectives are achieved
              with honesty and fairness.
            </p>
          </div>
        </section>

        <section id="fund-raising" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Fund Raising</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Fund Raising policy emphasizes ethical and transparent methods of
              generating financial support for geospatial research, education, and
              operational initiatives. Contributions are sought from individuals, corporate
              sponsors, and institutional partners who share our mission to advance GEOINT for
              national security and humanitarian purposes. All fundraising activities are
              aligned with international compliance standards to prevent misuse of funds or
              association with entities engaged in unethical practices. Resources raised are
              directed toward projects that strengthen geospatial capabilities, including
              disaster response mapping, border security surveillance, and infrastructure risk
              assessment, ensuring that every dollar serves a clear, positive impact.
            </p>
          </div>
        </section>

        <section id="slavery" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Anti-Modern-Day Slavery</h2>
            <p className="text-gray-700 leading-relaxed">
              Modern slavery, in the form of forced labor and human trafficking, presents
              complex global challenges that intersect with security and development. Our
              Anti-Modern-Day Slavery policy commits to ensuring that no aspect of our
              geospatial intelligence research, partnerships, or supply chains is tainted by
              exploitative practices. GEOINT tools play a vital role in monitoring regions
              where trafficking routes intersect with vulnerable populations, enabling timely
              interventions by security and humanitarian agencies. By refusing to tolerate
              slavery in any form, and by actively using geospatial insights to combat it, we
              contribute to building a more just and secure global society.
            </p>
          </div>
        </section>

        <section id="volunteer" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Volunteer & Internship</h2>
            <p className="text-gray-700 leading-relaxed">
              Volunteers and interns are the backbone of innovation in geospatial research,
              bringing fresh perspectives and energy to critical projects. Our Volunteer &
              Internship policy ensures that all participants engage in meaningful
              assignments that build their skills while advancing GEOINT objectives. Students,
              early-career professionals, and researchers gain hands-on experience with
              cutting-edge tools, including satellite imagery analysis, geospatial data
              visualization, and cybersecurity applications for spatial data. In return, they
              contribute to vital efforts such as disaster risk reduction, counter-terrorism
              analysis, and infrastructure resilience mapping. The program fosters mutual
              growth and prepares the next generation of geospatial security leaders.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
