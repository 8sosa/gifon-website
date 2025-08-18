import HeroSection from '@/components/HeroSection';

export default function PublicationsPage() {
  return (
    <>
      <HeroSection
        title="Publications & Media"
        description="Access our latest research articles, policy briefs, journals, and more."
        backgroundImage="/bg/d.JPG"
      />

      <main className="w-full">
        {/* --- Static Sections for Publications --- */}
        <section id="research-articles" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Research Articles & Partners</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
        </section>

        <section id="policy-briefs" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Policy Briefs</h2>
            <p className="text-gray-700 leading-relaxed">
              Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            </p>
          </div>
        </section>

        <section id="journals" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Journals</h2>
            <p className="text-gray-700 leading-relaxed">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </p>
          </div>
        </section>

        <section id="newsletter" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Newsletter</h2>
            <p className="text-gray-700 leading-relaxed">
              Subscribe to our monthly newsletter for the latest updates and insights.
            </p>
          </div>
        </section>

        <section id="media-gallery" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Media Gallery</h2>
            <p className="text-gray-700 leading-relaxed">
              Explore photos and videos from our events and initiatives.
            </p>
          </div>
        </section>

        <section id="podcast" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Podcast</h2>
            <p className="text-gray-700 leading-relaxed">
              Listen to conversations with GeoINT experts and thought leaders.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
