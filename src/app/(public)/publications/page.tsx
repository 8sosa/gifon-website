import HeroSection from '@/components/HeroSection';

export default function PublicationsPage() {
  return (
    <>
      <HeroSection
        title="Publications & Media"
        // description="Access our latest research articles, policy briefs, journals, and more."
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
        {/* --- Static Sections for Publications Page --- */}
        <section id="journal" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Eyes on Location – Journal of GeoINSIGHT</h2>
            <p className="text-gray-700 leading-relaxed">
              Our flagship journal, *Eyes on Location*, publishes peer-reviewed articles that advance the science and practice 
              of geospatial intelligence. It provides an academic and professional platform for sharing innovative research, 
              applied case studies, and thought leadership that shape the future of GEOINT and geospatial security.
            </p>
          </div>
        </section>

        <section id="bulletin" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">GeoINSIGHT Bulletin</h2>
            <p className="text-gray-700 leading-relaxed">
              The GeoINSIGHT Bulletin is a short-format publication designed for rapid dissemination of trends, 
              announcements, and insights in the GEOINT community. It is particularly aimed at practitioners 
              who need concise, actionable knowledge to stay ahead of global geospatial challenges.
            </p>
          </div>
        </section>

        <section id="proceedings" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Conference & Workshop Proceedings</h2>
            <p className="text-gray-700 leading-relaxed">
              Proceedings from our conferences and workshops document the latest findings, debates, and collaborations 
              across the GEOINT community. These collections highlight cutting-edge research, field applications, 
              and policy discussions that emerge during our events.
            </p>
          </div>
        </section>

        <section id="policy-briefs" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Policy Briefs & White Papers</h2>
            <p className="text-gray-700 leading-relaxed">
              Our policy briefs and white papers provide in-depth analysis on emerging challenges in geospatial 
              security, governance, and ethics. Written by experts from academia, industry, and government, 
              these documents guide decision-makers on best practices and strategic priorities.
            </p>
          </div>
        </section>

        <section id="reports" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Research Reports</h2>
            <p className="text-gray-700 leading-relaxed">
              Our commissioned and collaborative research reports explore detailed GEOINT case studies, 
              technical innovations, and future-looking analyses that help both practitioners and policymakers 
              understand the evolving landscape of geospatial intelligence.
            </p>
          </div>
        </section>

        {/* --- Merged Journal Subsections --- */}
        <section id="about-journal" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">About The Journal</h2>
            <p className="text-gray-700 leading-relaxed">
              The *Journal of GeoINSIGHT* serves as a central hub for scholarly contributions in the fields 
              of geospatial security and intelligence. It fosters cross-disciplinary dialogue and provides 
              a space for both established researchers and emerging voices.
            </p>
          </div>
        </section>

        <section id="editorial-board" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Editorial Board</h2>
            <p className="text-gray-700 leading-relaxed">
              Our editorial board is composed of leading academics, policymakers, and practitioners in 
              geospatial intelligence. They ensure that the journal maintains rigorous standards of 
              scholarship, relevance, and global impact.
            </p>
          </div>
        </section>

        <section id="author-guidelines" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Author Guidelines</h2>
            <p className="text-gray-700 leading-relaxed">
              Authors are encouraged to submit original work that contributes to the understanding, 
              application, or advancement of GEOINT. Guidelines cover formatting, referencing, 
              ethical standards, and the peer-review process.
            </p>
          </div>
        </section>

        <section id="submit-paper" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Submit a Paper</h2>
            <p className="text-gray-700 leading-relaxed">
              Submissions are accepted on a rolling basis. Authors can propose research articles, 
              case studies, or thematic reviews related to geospatial intelligence and security. 
              Papers undergo peer review before publication.
            </p>
          </div>
        </section>

        <section id="read-articles" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Read Articles</h2>
            <p className="text-gray-700 leading-relaxed">
              Access previously published articles and explore our growing archive of GEOINT research. 
              Articles cover topics from technical innovation to policy and strategic foresight.
            </p>
          </div>
        </section>

        <section id="call-for-papers" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Call for Papers</h2>
            <p className="text-gray-700 leading-relaxed">
              We regularly issue calls for papers on thematic topics aligned with pressing challenges in 
              geospatial intelligence. Authors are invited to contribute to special issues and focused 
              debates shaping the future of GEOINT.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
