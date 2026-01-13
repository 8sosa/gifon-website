// app/(public)/contact-us/ContactClient.tsx

"use client";

import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGlobe, 
  FaInfoCircle, 
  FaHandshake, 
  FaUsers, 
  FaGraduationCap, 
  FaCalendarAlt,
  FaBuilding
} from "react-icons/fa";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

// --- Data ---
const contactDepartments = [
    { title: "General Inquiries", email: "info@gifon.org.ng", icon: <FaInfoCircle /> }, 
    { title: "Secretariat", phone: "+234 707 721 1243", email: "secretariat@gifon.org.ng", icon: <FaBuilding /> }, 
    { title: "Outreach", phone: "+234 707 726 9829", email: "outreach@gifon.org.ng", icon: <FaHandshake /> }, 
    { title: "Membership", phone: "+234 707 721 1243", email: "membership@gifon.org.ng", icon: <FaUsers /> }, 
    { title: "Education", phone: "+234 707 721 1243", email: "Education@gifon.org.ng", icon: <FaGraduationCap /> }, 
    { title: "Events & Exhibitions", phone: "+234 707 739 6196", email: "Events.exhibition@gifon.org.ng", icon: <FaCalendarAlt /> }, 
];

const socialLinks = [
    { 
        name: 'LinkedIn', 
        icon: <FaLinkedinIn size={20} />, 
        href: 'https://www.linkedin.com/in/gifon-africa-53a32831a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 
        color: 'hover:bg-[#0077b5] hover:shadow-[#0077b5]/50' // LinkedIn Blue
    },
    { 
        name: 'Youtube', 
        icon: <FaYoutube size={20} />, 
        href: 'https://youtube.com/@gifonmedia?si=mNwfsyy0lNTpTyMP', 
        color: 'hover:bg-[#FF0000] hover:shadow-[#FF0000]/50' // YouTube Red
    },
    { 
        name: 'Instagram', 
        icon: <FaInstagram size={20} />, 
        href: 'https://www.instagram.com/gifonafrica?igsh=MWxkMno5aHMyNzhubA==', 
        color: 'hover:bg-[#E1306C] hover:shadow-[#E1306C]/50' // Insta Pink
    },
];

export default function ContactClient() {
  const leftColumn = contactDepartments.slice(0, 2);
  const rightColumn = contactDepartments.slice(2, 4);
  const bottomRow = contactDepartments.slice(4, 6);

  return (
    <section 
        className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/media/CONTACT US IMG.jpg')" }}
    >
        {/* 1. DARK OVERLAY */}
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px]"></div>

        {/* 2. MAIN CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
            
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-white font-bold mb-4 drop-shadow-xl text-4xl md:text-6xl tracking-tight">
                    Contact Us
                </h1>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light">
                    Reach out to our departments or visit our headquarters.
                </p>
            </div>

            {/* --- THE HUB LAYOUT --- */}
            <div className="w-full space-y-6 mb-16">
                
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-6 justify-center">
                        {leftColumn.map((dept, idx) => (
                            <ContactCard key={idx} {...dept} />
                        ))}
                    </div>

                    {/* CENTER COLUMN (Head Office Hub) */}
                    <div className="h-full min-h-[300px] lg:min-h-0">
                        <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden group">
                            
                            <div className="absolute -top-12 -right-12 opacity-[0.07] rotate-12 group-hover:scale-125 transition-transform duration-700">
                                <FaMapMarkerAlt size={250} />
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                                <div className="p-4 bg-green-500 rounded-2xl shadow-lg shadow-green-500/30 mb-6 group-hover:rotate-6 transition-transform">
                                    <FaMapMarkerAlt className="text-white text-3xl" />
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-2">Head Office</h2>
                                <div className="w-12 h-1 bg-green-500 rounded-full mb-6"></div>
                                
                                <address className="not-italic text-gray-200 leading-loose text-lg mb-8">
                                    12 Richard Clapperton Street,<br/>
                                    Off Maman Nasir Street,<br/>
                                    Asokoro District,<br/>
                                    Abuja - Nigeria.
                                </address>

                                <a 
                                    href="https://maps.app.goo.gl/d6i8Ea7SZ4KCGCcc7" 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 font-bold text-gray-900 bg-white hover:bg-green-500 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                                >
                                    <FaGlobe /> Open in Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-6 justify-center">
                        {rightColumn.map((dept, idx) => (
                            <ContactCard key={idx} {...dept} />
                        ))}
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                    {bottomRow.map((dept, idx) => (
                        <ContactCard key={idx} {...dept} />
                    ))}
                </div>

            </div>

            {/* --- IMPROVED SOCIAL SECTION --- */}
            <div className="flex flex-col items-center gap-4">
                <span className="text-white/60 text-sm uppercase tracking-[0.2em] font-medium">Connect with us</span>
                
                <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ease-out
                                bg-white text-gray-900 shadow-lg shadow-black/20
                                hover:-translate-y-2 hover:text-white hover:shadow-2xl
                                ${link.color}
                            `}
                            aria-label={`Follow us on ${link.name}`}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
}

// 3. CONTACT CARD COMPONENT
function ContactCard({ title, phone, email, icon }: { title: string, phone?: string, email: string, icon: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-transparent hover:border-green-500 flex flex-col justify-center h-full min-h-[140px]">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                </div>
                <FaPaperPlane className="text-gray-300 group-hover:text-green-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </div>

            <div className="space-y-2 pl-1">
                {phone && (
                    <a 
                        href={`tel:${phone.replace(/\s/g, '')}`} 
                        className="flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-green-700 transition-colors w-fit"
                    >
                        <FaPhone className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-800 transition-colors" /> 
                        {phone}
                    </a>
                )}
                <a 
                    href={`mailto:${email}`} 
                    className="flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-green-700 transition-colors break-all w-fit"
                >
                    <FaEnvelope className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-800 transition-colors" /> 
                    {email}
                </a>
            </div>
        </div>
    );
}