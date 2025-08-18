import HeroSection from '@/components/HeroSection';

export default function JournalPage() {
  return (
    <>
      <HeroSection
        title="Journal - Eyes on Location"
        description="Explore our journal content, editorial board, and submission guidelines."
        backgroundImage="/bg/d.JPG"
      />

      <main className="w-full">
        {/* --- Static Sections for Journal Page --- */}
        <section id="about-journal" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">About The Journal</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
        </section>

        <section id="editorial-board" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Editorial Board</h2>
            <p className="text-gray-700 leading-relaxed">
              Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            </p>
          </div>
        </section>

        <section id="author-guidelines" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Author Guidelines</h2>
            <p className="text-gray-700 leading-relaxed">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </p>
          </div>
        </section>

        <section id="submit-paper" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Submit a Paper</h2>
            <p className="text-gray-700 leading-relaxed">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
          </div>
        </section>

        <section id="read-articles" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Read Articles</h2>
            <p className="text-gray-700 leading-relaxed">
              Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
          </div>
        </section>

        <section id="call-for-papers" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Call for Papers</h2>
            <p className="text-gray-700 leading-relaxed">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
