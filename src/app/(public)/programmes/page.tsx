import HeroSection from '@/components/HeroSection';

export default function ProgrammesPage() {
  return (
    <>
      <HeroSection
        title="Programmes & Initiatives"
        description="Explore our diverse programmes and initiatives driving geospatial capacity and innovation."
        backgroundImage="/bg/d.JPG"
      />

      <main className="w-full">
        {/* --- Static Sections with Dummy Content --- */}
        <section id="national-dev" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">National Geospatial Development Programmes</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam.
            </p>
          </div>
        </section>

        <section id="geoeducation" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Geoeducation & Capacity Building</h2>
            <p className="text-gray-700 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        </section>

        <section id="youth-empowerment" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Youth Empowerment & Talent Acceleration</h2>
            <p className="text-gray-700 leading-relaxed">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
          </div>
        </section>

        <section id="geoinnovation" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">GeoInnovation & Tech Incubation</h2>
            <p className="text-gray-700 leading-relaxed">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
          </div>
        </section>

        <section id="community-sustainable" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Community Merging & Sustainable Development</h2>
            <p className="text-gray-700 leading-relaxed">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
            </p>
          </div>
        </section>

        <section id="open-data" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Open Data & Research Programmes</h2>
            <p className="text-gray-700 leading-relaxed">
              Nulla porttitor accumsan tincidunt. Quisque velit nisi.
            </p>
          </div>
        </section>

        <section id="geopolicy" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Geopolicy & Advocacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
