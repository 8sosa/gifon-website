// app/(public)/contact-us/page.tsx

"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
// Using standard react-icons
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaUser, FaPaperPlane, FaBuilding, FaGlobe } from "react-icons/fa";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const initialFormData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  region: "",
  postalCode: "",
  phone: "",
  email: "",
  comments: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectCountry = (val: string) => {
    setFormData({ ...formData, country: val, region: "" });
  };

  const selectRegion = (val: string) => {
    setFormData({ ...formData, region: val });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitted(true);
        setFormData(initialFormData);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  // --- STYLING CONSTANTS ---
  // A modern, softer input style
  const inputWrapperClass = "relative";
  const labelClass = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1";
  
  // Dynamic class to handle focus states elegantly
  const getInputClass = (fieldName: string) => `
    w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none
    ${focusedField === fieldName 
      ? "border-green-500 ring-4 ring-green-500/10 bg-white shadow-md" 
      : "border-gray-200 bg-gray-50 hover:bg-gray-100"
    }
  `;

  return (
    <>
      <HeroSection
        title="Contact Us"
        description="We'd love to hear from you. Reach out with any questions, partnership inquiries, or comments."
        backgroundMedia={["/media/CONTACT US IMG.jpg"]}
      />
      
      <main className="bg-linear-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* --- LEFT COLUMN: THE FORM (Span 8/12) --- */}
            <section className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50 rounded-3xl border border-gray-100 relative overflow-hidden">
                
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-600 to-green-400"></div>

                {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <FaCheckCircle className="text-green-600 w-12 h-12" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Message Sent!</h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out to <span className="cooper">GIFON</span>. A member of our team will review your message and get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-green-600 font-semibold hover:text-green-700 underline"
                    >
                        Send another message
                    </button>
                </div>
                ) : (
                <>
                    <div className="mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                        Have a question or want to collaborate? Fill out the form below.
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Group */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className={inputWrapperClass}>
                        <label htmlFor="firstName" className={labelClass}>First Name</label>
                        <div className="relative">
                            <input
                            type="text"
                            name="firstName"
                            required
                            className={getInputClass('firstName')}
                            value={formData.firstName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('firstName')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Jane"
                            />
                            <FaUser className="absolute right-4 top-3.5 text-gray-400 opacity-50" />
                        </div>
                        </div>
                        <div className={inputWrapperClass}>
                        <label htmlFor="lastName" className={labelClass}>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            className={getInputClass('lastName')}
                            value={formData.lastName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('lastName')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Doe"
                        />
                        </div>
                    </div>

                    {/* Contact Info Group */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className={inputWrapperClass}>
                        <label htmlFor="email" className={labelClass}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className={getInputClass('email')}
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="name@company.com"
                        />
                        </div>
                        <div className={inputWrapperClass}>
                        <label htmlFor="phone" className={labelClass}>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className={getInputClass('phone')}
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="+234..."
                        />
                        </div>
                    </div>

                    {/* Location Group */}
                    <div className="p-6 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className={inputWrapperClass}>
                            <label className={labelClass}>Country</label>
                            <CountryDropdown
                                value={formData.country}
                                onChange={selectCountry}
                                className={`${getInputClass('country')} appearance-none`}
                            />
                            </div>
                            <div className={inputWrapperClass}>
                            <label className={labelClass}>State / Region</label>
                            <RegionDropdown
                                country={formData.country}
                                value={formData.region}
                                onChange={selectRegion}
                                className={`${getInputClass('region')} appearance-none`}
                                disableWhenEmpty={true}
                            />
                            </div>
                            <div className={inputWrapperClass}>
                            <label htmlFor="city" className={labelClass}>City</label>
                            <input
                                type="text"
                                name="city"
                                className={getInputClass('city')}
                                value={formData.city}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('city')}
                                onBlur={() => setFocusedField(null)}
                            />
                            </div>
                        </div>
                    </div>

                    {/* Message Group */}
                    <div className={inputWrapperClass}>
                        <label htmlFor="comments" className={labelClass}>Your Message</label>
                        <textarea
                        name="comments"
                        required
                        rows={6}
                        className={getInputClass('comments')}
                        value={formData.comments}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('comments')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="How can we help you?"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group w-full bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 hover:shadow-green-600/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <span>Send Message</span>
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    </form>
                </>
                )}
            </div>
            </section>

            {/* --- RIGHT COLUMN: SIDEBAR (Span 4/12) --- */}
            <aside className="lg:col-span-4 space-y-8">
            
            {/* Sticky Container */}
            <div className="sticky top-24 space-y-6">
                
                {/* Map/Location Card */}
                <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FaMapMarkerAlt size={100} />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
                            <FaBuilding /> Visit Us
                        </h2>
                        <address className="not-italic text-gray-300 leading-relaxed mb-6">
                            12 Richard Clapperton Street,<br/>
                            Off Maman Nasir Street,<br/>
                            Asokoro District,<br/>
                            Abuja - Nigeria.
                        </address>
                        <a 
                            href="https://maps.app.goo.gl/d6i8Ea7SZ4KCGCcc7" 
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10"
                        >
                            <FaGlobe /> Open in Maps
                        </a>
                    </div>
                </div>

                {/* Directory Card */}
                <div className="bg-white p-6 shadow-xl shadow-gray-200/50 rounded-3xl border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 px-2">Department Directory</h2>
                    
                    <div className="space-y-1">
                        {/* Helper function to generate contact rows */}
                        <ContactRow 
                            title="General Inquiries" 
                            email="info@gifon.org.ng" 
                        />
                        <div className="h-px bg-gray-100 my-2"></div>
                        
                        <ContactRow 
                            title="Secretariat" 
                            phone="+234 707 721 1243" 
                            email="secretariat@gifon.org.ng" 
                        />
                         <div className="h-px bg-gray-100 my-2"></div>

                        <ContactRow 
                            title="Outreach" 
                            phone="+234 707 726 9829" 
                            email="outreach@gifon.org.ng" 
                        />
                         <div className="h-px bg-gray-100 my-2"></div>

                        <ContactRow 
                            title="Membership" 
                            phone="+234 707 721 1243" 
                            email="membership@gifon.org.ng" 
                        />
                        <div className="h-px bg-gray-100 my-2"></div>

                        <ContactRow 
                            title="Education" 
                            phone="+234 707 721 1243" 
                            email="Education@gifon.org.ng" 
                        />
                        <div className="h-px bg-gray-100 my-2"></div>
                        
                        <ContactRow 
                            title="Events & Exhibitions" 
                            phone="+234 707 739 6196" 
                            email="Events.exhibition@gifon.org.ng" 
                        />
                    </div>
                </div>
            </div>

            </aside>
        </div>
      </main>
    </>
  );
}

// Sub-component for cleaner Sidebar code
function ContactRow({ title, phone, email }: { title: string, phone?: string, email: string }) {
    return (
        <div className="p-3 hover:bg-green-50 rounded-xl transition-colors group">
            <h3 className="font-bold text-gray-800 text-sm mb-2 flex items-center justify-between">
                {title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-green-600 text-xs">
                    <FaPaperPlane />
                </span>
            </h3>
            <div className="space-y-1">
                {phone && (
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-green-600 transition-colors">
                        <FaPhone className="w-3 h-3" /> {phone}
                    </a>
                )}
                <a href={`mailto:${email}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-green-600 transition-colors break-all">
                    <FaEnvelope className="w-3 h-3" /> {email}
                </a>
            </div>
        </div>
    );
}