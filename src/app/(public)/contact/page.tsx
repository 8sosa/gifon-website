import HeroSection from '@/components/HeroSection';

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Get in touch with the Geospatial Intelligence Foundation of Nigeria."
        backgroundImage="/ph.svg"
      />

      <main className="w-full">
        {/* --- Static Sections for Contact Page --- */}
        <section id="contact-info" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">Email: info@gifon.org</p>
            <p className="text-gray-700 leading-relaxed">Phone: +234 800 000 0000</p>
          </div>
        </section>

        <section id="office-location" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Office Location</h2>
            <p className="text-gray-700 leading-relaxed">
              123 Geospatial Avenue, Abuja, Nigeria
            </p>
          </div>
        </section>

        <section id="online-form" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Online Contact Form</h2>
            <form className="space-y-4 max-w-lg mx-auto">
              <input type="text" placeholder="Your Name" className="w-full border rounded p-3" />
              <input type="email" placeholder="Your Email" className="w-full border rounded p-3" />
              <textarea placeholder="Your Message" rows={5} className="w-full border rounded p-3" />
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition">Send Message</button>
            </form>
          </div>
        </section>

        <section id="social-media" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Social Media Links</h2>
            <ul className="flex justify-center space-x-6 text-primary">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
