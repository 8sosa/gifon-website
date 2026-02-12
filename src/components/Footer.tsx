"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedinIn,
  //  FaFacebookF, FaXTwitter, FaWhatsapp, 
   FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  
  // Group links logically for a better layout
  const quickLinks = [
      { label: 'Education', href: '/education' },
      { label: 'Events', href: '/events' },
      { label: 'Media Resources', href: '/resources' },
      { label: 'Groups & Forums', href: '/forums' },
      { label: 'Contact Us', href: '/contact-us' },
  ];

  const legalLinks = [
      { label: 'Policies', href: '/policies' },
      { label: 'Code of Ethics', href: '/policies#ethics' },
  ];

  const socialLinks = [
    // { name: 'X', icon: <FaXTwitter />, href: '#', hover: 'hover:bg-black hover:text-white' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/gifon-africa-53a32831a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', hover: 'hover:bg-blue-600 hover:text-white' },
    // { name: 'Facebook', icon: <FaFacebookF />, href: '#', hover: 'hover:bg-blue-700 hover:text-white' },
    { name: 'Youtube', icon: <FaYoutube />, href: 'https://youtube.com/@gifonmedia?si=mNwfsyy0lNTpTyMP', hover: 'hover:bg-red-600 hover:text-white' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/gifonafrica?igsh=MWxkMno5aHMyNzhubA==', hover: 'hover:bg-pink-600 hover:text-white' },
    // { name: 'Whatsapp', icon: <FaWhatsapp />, href: '#', hover: 'hover:bg-green-500 hover:text-white' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans text-sm relative overflow-hidden">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-800 via-green-500 to-green-800"></div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        
        {/* --- ROW 1: QUICK LINKS (Horizontal Nav) --- */}
        <div className="border-b border-gray-900 pb-8 mb-10 flex  flex-col items-center">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-center md:text-left">Quick Links</h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm font-medium">
                {quickLinks.map(link => (
                    <li key={link.label}>
                        <Link href={link.href} className="hover:text-green-400 transition-colors block">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* --- ROW 2: BRAND & CONTACT (Two Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* --- Col A: Brand & Socials --- */}
          <div className="space-y-6 flex flex-col items-center justify-center h-full">
            <div className='flex flex-col items-center justify-center'>
            <Link href="/" className="flex items-center gap-4 md:gap-6 group">
              {/* Logo Placeholder - replaces the globe/leaf icon */}
              <div className="relative w-90 h-30 shrink-0 transition-transform group-hover:scale-105">
                {/* Ensure you have your logo.png here, or use a placeholder icon */}
                <Image 
                  src="/logo.png" 
                  alt="GIFON Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>

              <div className='flex flex-col text-center pl-10'>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md hover:text-green-400 text-center">
                  MAPPING THE FUTURE
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md hover:text-green-400 text-center -mt-1.5">
                  EMPOWERING THE NATION.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                      <a 
                          key={link.name} 
                          href={link.href} 
                          target="_blank"
                          className={`w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-300 ${link.hover}`}
                          aria-label={`Follow us on ${link.name}`}
                      >
                          {link.icon}
                      </a>
                  ))}
              </div>
            </div>
          </div>

          {/* --- Col B: Detailed Contact Grid --- */}
          <div className="space-y-6 md:pl-8 md:border-l md:border-gray-900">
            <div className='flex flex-col items-center'>
                <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest border-l-2 border-green-600 pl-3 -ml-10">Contact Information</h4>
                
                <div className="flex items-start gap-3 mb-8 group -ml-8">
                    <FaLocationDot className="mt-1 text-green-600 shrink-0 group-hover:animate-bounce" />
                    <address className="not-italic text-gray-400 text-sm leading-relaxed text-center">
                        12 Richard Clapperton Street,<br />
                        Off Maman Nasir Street,<br />
                        Asokoro District,<br />
                        900231,<br />
                        Abuja, Nigeria.
                    </address>
                </div>
                
                {/* General Inquiry (Full Width) */}
                <div className="mb-6 flex flex-col text-xs bg-gray-900/50 p-3 rounded-lg border border-gray-800 text-center">
                  <span className="font-bold text-gray-300 mb-1">General Inquiries</span>
                  <a href={`mailto:info@gifon.org.ng`} className="hover:text-green-400 transition-colors text-gray-400 flex items-center gap-1.5 break-all">
                      <FaEnvelope size={12} /> info@gifon.org.ng
                  </a>
                </div>

                {/* Department Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                  {[
                      { title: 'Secretariat', phone: '+234 707 721 1243', email: 'secretariat@gifon.org.ng' },
                      { title: 'Membership', phone: '+234 707 721 1243', email: 'membership@gifon.org.ng' },
                      { title: 'Outreach', phone: '+234 707 726 9829', email: 'outreach@gifon.org.ng' },
                      { title: 'Education', phone: '+234 707 721 1243', email: 'Education@gifon.org.ng' },
                      { title: 'Research', phone: '+234 707 739 6196', email: 'research@gifon.org.ng' },
                      { title: 'Events & Exhibitions', phone: '+234 707 739 6196', email: 'Events.exhibition@gifon.org.ng' },
                  ].map((contact, idx) => (
                      <div key={idx} className="flex flex-col text-xs">
                          <span className="font-bold text-green-700 mb-1">{contact.title}</span>
                          {contact.phone && (
                              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-green-400 transition-colors mb-0.5 flex items-center gap-1.5 text-gray-500">
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
            {legalLinks.map(link => (
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