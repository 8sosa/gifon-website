import HeroSection from '@/components/HeroSection';
import { LogoCarousel, Logo } from '@/components/LogoCarousel';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/nn.png', alt: 'Nigerian Navy' },
  { src: '/images/nsa.png', alt: 'Office of the National Security Adviser' },
];

export default function PartnershipsPage() {
  return (
    <>
      <HeroSection
        title="Partnerships & Sponsors"
        // description="Collaborate with us to advance geospatial intelligence and innovation."
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
        {/* --- Static Sections for Partnerships --- */}
        <section id="partner-with-us" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Partner With Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
        </section>

        <section id="strategic-alliance" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Strategic Alliance</h2>
            <p className="text-gray-700 leading-relaxed">
              Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.
            </p>
          </div>
        </section>

        <section id="sponsorship" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Sponsorship Opportunities</h2>
            <p className="text-gray-700 leading-relaxed">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </p>
          </div>
        </section>

        <section id="past-partners" className="py-16 px-4  bg-green-300">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Past & Current Partners</h2>
              <LogoCarousel logos={partners}  />
          </div>
        </section>
      </main>
    </>
  );
}
