import HeroSection from '@/components/HeroSection';

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Resources"
        description="Access tools, datasets, training materials, and downloadables to support your geospatial projects."
        backgroundImage="/bg/d.JPG"
      />

      <main className="w-full">
        {/* --- Static Sections for Resources Page --- */}
        <section id="tools-portals" className="py-16 px-4 bg-white">
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
        </section>
      </main>
    </>
  );
}
