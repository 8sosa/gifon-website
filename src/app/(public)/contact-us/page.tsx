// app/(public)/contact-us/page.tsx (Next.js 13+ App Router)

"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection"; // Import your HeroSection
// Import icons
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
// --- 1. Import the new components ---
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// --- 2. Add 'region' to your form state ---
const initialFormData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "", // This will be set by CountryDropdown
  region: "",  // This will be set by RegionDropdown
  postalCode: "",
  phone: "",
  email: "",
  comments: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  // State to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- 3. Update handleChange to handle all inputs ---
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- 4. Add specific handlers for country and region ---
  const selectCountry = (val: string) => {
    // Reset region when country changes
    setFormData({ ...formData, country: val, region: "" });
  };

  const selectRegion = (val: string) => {
    setFormData({ ...formData, region: val });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // ... your submit logic ...
    
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  // Common classes for form inputs
  const inputStyles = "border border-gray-300 p-3 rounded-md w-full shadow-sm focus:ring-green-500 focus:border-green-500";
  const selectStyles = `${inputStyles} bg-white`;


  return (
    <>
      <HeroSection
        title="Contact Us"
        description="We'd love to hear from you. Reach out with any questions, partnership inquiries, or comments."
        backgroundMedia={["/bg/d.JPG", "/bg/c.JPG"]} // Example images
      />
      
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* --- Main Content (Form) --- */}
        <section className="md:col-span-2">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            
            {isSubmitted ? (
              // --- Thank You Message ---
              <div className="flex flex-col items-center justify-center text-center py-16">
                <FaCheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h2>
                <p className="text-gray-600">
                  Your message has been successfully sent. We will get back to you shortly.
                </p>
              </div>
            ) : (
              // --- The Form ---
              <>
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h1>
                <p className="text-gray-600 mb-6">
                  Please fill out the form below, and a member of our team will
                  respond as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* --- Name --- */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="e.g., Jane"
                        required
                        className={inputStyles}
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="e.g., Doe"
                        required
                        className={inputStyles}
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* --- Email & Phone --- */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@example.com"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="+234..."
                        required
                        className={inputStyles}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* --- 5. UPDATED Country, Region (State), & City --- */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      {/* --- Replace <select> with <CountryDropdown> --- */}
                      <CountryDropdown
                        value={formData.country}
                        onChange={selectCountry}
                        className={selectStyles}
                      />
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                        State / Region
                      </label>
                      {/* --- Add the <RegionDropdown> --- */}
                      <RegionDropdown
                        country={formData.country}
                        value={formData.region}
                        onChange={selectRegion}
                        className={selectStyles}
                        disableWhenEmpty={true} // Disables if no country is selected
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="e.g., Asokoro"
                        className={inputStyles}
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* --- Comments --- */}
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Comments *
                    </label>
                    <textarea
                      name="comments"
                      id="comments"
                      placeholder="Your message..."
                      required
                      rows={5}
                      className={inputStyles}
                      value={formData.comments}
                      onChange={handleChange}
                    />
                  </div>

                  {/* --- Submit Button --- */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
                  >
                    Submit Message
                  </button>
                </form>
              </>
            )}
          </div>
        </section>

        {/* --- Sidebar (No changes needed here) --- */}
        <aside className="md:col-span-1 space-y-8">
          
          {/* Contact Info Card */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">

            {/* General Inquiries */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">General Inquiries</h3>
              <a 
                href="mailto:info@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>info@gifon.org.ng</span>
              </a>
            </div>

            {/* Secretariat */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">Secretariat</h3>
              <a 
                href="tel:+2347077211243" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaPhone className="text-gray-400" />
                <span>+234 707 721 1243</span>
              </a>
              <a 
                href="mailto:secretariat@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-1 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>secretariat@gifon.org.ng</span>
              </a>
            </div>

            {/* Outreach */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">Outreach</h3>
              <a 
                href="tel:+2347077269829" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaPhone className="text-gray-400" />
                <span>+234 707 726 9829</span>
              </a>
              <a 
                href="mailto:outreach@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-1 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>outreach@gifon.org.ng</span>
              </a>
            </div>

            {/* Membership */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">Membership</h3>
              <a 
                href="tel:+2347077211243" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaPhone className="text-gray-400" />
                <span>+234 707 721 1243</span>
              </a>
              <a 
                href="mailto:membership@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-1 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>membership@gifon.org.ng</span>
              </a>
            </div>
                
            {/* Education */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">Education & Programmes</h3>
              <a 
                href="tel:+2347077396196" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaPhone className="text-gray-400" />
                <span>+234 707 721 1243</span>
              </a>
              <a 
                href="mailto:Education@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-1 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>Education@gifon.org.ng</span>
              </a>
            </div>

            {/* Events and Exhibition */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">Events and Exhibition</h3>
              <a 
                href="tel:+2347077396196" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaPhone className="text-gray-400" />
                <span>+234 707 739 6196</span>
              </a>
              <a 
                href="mailto:Events.exhibition@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-1 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>Events.exhibition@gifon.org.ng</span>
              </a>
            </div>
            {/* Research */}
            <div>
              <h3 className="font-semibold text-green-700 text-lg">Research</h3>
              <a 
                href="tel:+2347077396196" 
                className="flex items-center gap-3 text-gray-600 mt-2 hover:text-green-600 transition-colors"
              >
                <FaPhone className="text-gray-400" />
                <span>+234 707 739 6196</span>
              </a>
              <a 
                href="mailto:research@gifon.org.ng" 
                className="flex items-center gap-3 text-gray-600 mt-1 hover:text-green-600 transition-colors"
              >
                <FaEnvelope className="text-gray-400" />
                <span>research@gifon.org.ng</span>
              </a>
            </div>
          </div>
          </div>

          {/* Address Card */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Location
          </h2>
          <a 
            href="https://maps.google.com/?q=12+Richard+Clapperton+Street,+Asokoro,+Abuja" // Replace with your Google Maps link
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-gray-600 hover:text-green-600 transition-colors"
          >
            <FaMapMarkerAlt className="mt-1 text-green-600 shrink-0" />
            <span className="leading-relaxed">
              12 RICHARD CLAPPERTON STREET, <br/>
              OFF MAMAN NASIR STREET, <br/>
              ASOKORO DISTRICT, <br/>
              ABUJA - NIGERIA.
            </span>
          </a>
          </div>

        </aside>
      </main>
    </>
  );
}