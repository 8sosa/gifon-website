import HeroSection from '@/components/HeroSection';
import { Col, Row } from 'react-bootstrap';

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Get in touch with the Geospatial Intelligence Foundation of Nigeria."
        backgroundImage="/bg/d.JPG"
      />

      <main className="w-full">
        {/* --- Contact Section with Two Columns --- */}
        <div className="py-16 px-4 bg-gray-50 flex flex-row w-full justify-around items-start">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <section id="contact-info" className="mb-8 text-justify">
              <h2 className="text-3xl font-semibold mb-2">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">Email: info@gifon.org</p>
              <p className="text-gray-700 leading-relaxed">Phone: +234 800 000 0000</p>
            </section>

            <section id="office-location" className="mb-8 text-justify">
              <h2 className="text-3xl font-semibold mb-2">Office Location</h2>
              <p className="text-gray-700 leading-relaxed">
                123 Geospatial Avenue, Abuja, Nigeria
              </p>
            </section>
            
            <section id="social-media" className="mb-8">
              <div className="max-w-4xl mx-auto text-justify">
                <h2 className="text-3xl font-semibold mb-2">Social Media Links</h2>
                <ul className="flex justify-center space-x-6 text-primary">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <section id="online-form">
              <h2 className="text-3xl font-semibold mb-6 text-center">Online Contact Form</h2>
              <form className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded p-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded p-3"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border rounded p-3"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition w-full"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
