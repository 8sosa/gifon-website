import HeroSection from '@/components/HeroSection';

export default function DonatePage() {
  return (
    <>
      <HeroSection
        title="Donate & Support"
        description="Help us advance geospatial intelligence and innovation in Nigeria through your support."
        backgroundImage="/ph.svg"
      />

      <main className="w-full">
        {/* --- Static Sections for Donate Page --- */}
        <section id="ways-to-support" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ways to Support GIFON</h2>
            <p className="text-gray-700 leading-relaxed">
              Your contributions help us fund projects, provide training, and support initiatives that drive national development.
            </p>
          </div>
        </section>

        <section id="donate-online" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Donate Online</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Make a secure online donation to support our mission.
            </p>
            <a href="#" className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition">Donate Now</a>
          </div>
        </section>

        <section id="volunteer" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Volunteer</h2>
            <p className="text-gray-700 leading-relaxed">
              Join our volunteer network and contribute your skills to our programmes and initiatives.
            </p>
          </div>
        </section>

        <section id="csr-opportunities" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Corporate Social Responsibility Opportunities</h2>
            <p className="text-gray-700 leading-relaxed">
              Partner with us through CSR initiatives that align with your organization’s mission and values.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
