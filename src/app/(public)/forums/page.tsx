import HeroSection from '@/components/HeroSection';

export default function ForumsPage() {
  return (
    <>
      <HeroSection
        title="Groups & Forums"
        // description="Explore our journal content, editorial board, and submission guidelines."
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
        {/* --- Static Sections for Groups & Forums Page --- */}
        <section id="young-professionals" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Young Professionals Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Young Professionals Forum is dedicated to empowering the next generation of leaders in the geospatial and GEOINT community. This forum provides early-career professionals with a platform to exchange ideas, gain mentorship, and develop technical and analytical skills critical to national security, disaster response, and global stability. By fostering innovation and networking opportunities, the forum ensures that young practitioners are equipped to tackle emerging challenges such as cybersecurity in geospatial systems, advanced data analytics, and responsible use of artificial intelligence in mapping. It serves as a bridge between academic knowledge and professional application in real-world security contexts.
            </p>
          </div>
        </section>

        <section id="women" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Women in GEOINT Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Women in GEOINT Forum champions diversity, equity, and inclusion within the geospatial intelligence community. By amplifying the voices of women across academia, government, and industry, the forum fosters dialogue and mentorship that highlight the unique perspectives women bring to geospatial security challenges. Discussions often focus on breaking barriers in leadership roles, encouraging STEM participation, and applying GEOINT tools to address humanitarian issues such as disaster relief and climate security. Through knowledge sharing, advocacy, and collaboration, the forum ensures that the contributions of women are recognized as essential to strengthening global resilience and advancing the GEOINT mission.
            </p>
          </div>
        </section>

        <section id="industry" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Industry & Private Sector Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Industry & Private Sector Forum explores the dynamic role of commercial entities in advancing geospatial intelligence capabilities. Private sector innovation has revolutionized how geospatial data is collected, analyzed, and delivered for security and humanitarian purposes. This forum highlights partnerships between government and industry that leverage cutting-edge technologies such as satellite constellations, drone imagery, cloud-based analytics, and AI-driven insights. It also examines critical issues like data privacy, cybersecurity, and the ethical use of commercially sourced GEOINT in defense and disaster response. By fostering collaboration, the forum ensures industry expertise directly supports national and global security missions.
            </p>
          </div>
        </section>

        <section id="policy" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Policy, Governance & Ethics Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Policy, Governance & Ethics Forum provides a critical space to discuss the frameworks guiding the responsible use of GEOINT. As geospatial intelligence grows in scope and influence, issues such as data sovereignty, privacy rights, international regulations, and ethical application of emerging technologies demand attention. This forum convenes policymakers, ethicists, and practitioners to ensure GEOINT operations align with democratic values and human rights. It emphasizes transparency, accountability, and global cooperation while addressing challenges like combating corruption, preventing misuse of geospatial data, and ensuring equitable access to technology. Through dialogue, the forum shapes policies that balance innovation with responsibility.
            </p>
          </div>
        </section>

        <section id="academia" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Academia & Research Collaboration</h2>
            <p className="text-gray-700 leading-relaxed">
              The Academia & Research Collaboration forum bridges the gap between scholarly research and applied geospatial intelligence. Academic institutions are at the forefront of developing new theories, technologies, and methods that shape the future of GEOINT. This forum provides opportunities for researchers and students to collaborate with government and industry leaders on critical challenges, from analyzing climate risks to developing predictive models for conflict prevention. By fostering joint projects, publishing cutting-edge studies, and promoting open dialogue, the forum ensures that academic insights directly inform policy and practice. It is a vital space for nurturing innovation and cultivating the next generation of GEOINT leaders.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
