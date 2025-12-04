"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaWhatsapp, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  
  // Group links logically for a better layout
  const links = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Board of Directors', href: '/about#board-directors' },
      { label: 'Our Partners', href: '/about#our-partners' },
    ],
    resources: [
      { label: 'Membership', href: '/membership' },
      { label: 'Education & Training', href: '/education' },
      { label: 'Events', href: '/events' },
      { label: 'Media Resources', href: '/resources' },
      { label: 'Infrastructure', href: '/infrastructure' },
    ],
    legal: [
      { label: 'Policies', href: '/policies' },
      { label: 'Code of Ethics', href: '/policies#ethics' },
    ]
  };

  const socialLinks = [
    { name: 'X', icon: <FaXTwitter />, href: '#', hover: 'hover:bg-black hover:text-white' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: '#', hover: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Facebook', icon: <FaFacebookF />, href: '#', hover: 'hover:bg-blue-700 hover:text-white' },
    { name: 'Youtube', icon: <FaYoutube />, href: '#', hover: 'hover:bg-red-600 hover:text-white' },
    { name: 'Instagram', icon: <FaInstagram />, href: '#', hover: 'hover:bg-pink-600 hover:text-white' },
    { name: 'Whatsapp', icon: <FaWhatsapp />, href: '#', hover: 'hover:bg-green-500 hover:text-white' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans text-sm relative overflow-hidden">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-800 via-green-500 to-green-800"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* --- 1. Brand & Socials (Col Span 4) --- */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 mr-3 transition-transform group-hover:scale-105">
                  <Image src="/logo.png" alt="Gifon" fill className="object-contain"/>
              </div>
              <div className="flex flex-col justify-center cooper">
                <h1 className="text-5xl md:text-5xl lg:text-[4rem] font-extrabold text-green-700 leading-none">GIFON</h1>
                <span className="text-[0.4rem] md:text-[0.65rem] lg:text-[0.5rem] font-bold text-green-800 uppercase tracking-tight whitespace-nowrap">Geospatial Intelligence Foundation of Nigeria</span>
              </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Empowering Nigeria through geospatial intelligence, innovation, and strategic collaboration. Join us in shaping the future of national security and development.
            </p>

            <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className={`w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-300 ${link.hover}`}
                        aria-label={`Follow us on ${link.name}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
          </div>

          {/* --- 2. Links Columns (Col Span 4) --- */}
          <div className="lg:col-span-2 space-y-8">
            <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-l-2 border-green-600 pl-3">Foundation</h4>
                <ul className="space-y-2.5">
                    {links.company.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="hover:text-green-400 transition-colors text-gray-400 hover:pl-1 duration-200 block">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-l-2 border-green-600 pl-3">Resources</h4>
                <ul className="space-y-2.5">
                    {links.resources.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="hover:text-green-400 transition-colors text-gray-400 hover:pl-1 duration-200 block">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* --- 3. Detailed Contact (Col Span 4) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div>
                <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-600 pl-3">Contact Information</h4>
                
                <div className="flex items-start gap-3 mb-6 group">
                    <FaLocationDot className="mt-1 text-green-600 shrink-0 group-hover:animate-bounce" />
                    <address className="not-italic text-gray-400 text-sm leading-relaxed">
                        12 Richard Clapperton Street,<br />
                        Off Maman Nasir Street, Asokoro District,<br />
                        Abuja, Nigeria.
                    </address>
                </div>
                
                <div className="flex flex-col text-xs mb-6 items-center">
                  <span className="font-bold text-gray-300 mb-1">Inquiries</span>
                  <a href={`mailto:info@gifon.org.ng`} className="hover:text-green-400 transition-colors text-gray-500 flex items-center gap-1.5 break-all">
                      <FaEnvelope size={10} /> info@gifon.org.ng
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                  {[
                      { title: 'Secretariat', phone: '+234 707 721 1243', email: 'secretariat@gifon.org.ng' },
                      { title: 'Membership', phone: '+234 707 721 1243', email: 'membership@gifon.org.ng' },
                      { title: 'Outreach', phone: '+234 707 726 9829', email: 'outreach@gifon.org.ng' },
                      { title: 'Education & Programmes', phone: '+234 707 721 1243', email: 'Education@gifon.org.ng' },
                      { title: 'Research', phone: '+234 707 739 6196', email: 'research@gifon.org.ng' },
                      { title: 'Events and Exhibition', phone: '+234 707 739 6196', email: 'Events.exhibition@gifon.org.ng' },
                  ].map((contact, idx) => (
                      <div key={idx} className="flex flex-col text-xs">
                          <span className="font-bold text-gray-300 mb-1">{contact.title}</span>
                          {contact.phone && (
                              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-green-400 transition-colors mb-0.5 flex items-center gap-1.5">
                                  <FaPhone size={10} /> {contact.phone}
                              </a>
                          )}
                          <a href={`mailto:${contact.email}`} className="hover:text-green-400 transition-colors text-gray-500 flex items-center gap-1.5 break-all">
                              <FaEnvelope size={10} /> {contact.email}
                          </a>
                      </div>
                  ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Geospatial Intelligence Foundation of Nigeria. All rights reserved.</p>
          <div className="flex gap-6">
            {links.legal.map(link => (
                <Link key={link.label} href={link.href} className="hover:text-green-500 transition-colors">
                    {link.label}
                </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}