"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

export default function Footer() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Membership', href: '/membership' },
    { label: 'Education', href: '/education' },
    { label: 'Events', href: '/events' },
    { label: 'Media Resources', href: '/media' },
    { label: 'Infrastructure Support', href: '/infrastructure' },
    { label: 'Policies', href: '/policies' },
    { label: 'Programmes', href: '/education#programs' },
    { label: 'Get Involved', href: '/get-involved' },
  ];

  const socialLinks = [
    { name: 'X', icon: <FaXTwitter />, href: '#', hover: 'hover:text-white' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: '#', hover: 'hover:text-blue-500' },
    { name: 'Facebook', icon: <FaFacebookF />, href: '#', hover: 'hover:text-blue-600' },
    { name: 'Youtube', icon: <FaYoutube />, href: '#', hover: 'hover:text-red-600' },
    { name: 'Instagram', icon: <FaInstagram />, href: '#', hover: 'hover:text-pink-600' },
    { name: 'Whatsapp', icon: <FaWhatsapp />, href: '#', hover: 'hover:text-green-500' },
  ];

  return (
    <footer className="bg-black py-10 border-t border-green-900 text-gray-400 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Identity (4) | Links (3) | Contacts (5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* --- 1. Identity & Socials (Col Span 4) --- */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 mr-3 transition-transform group-hover:scale-105">
                  <Image src="/logo.png" alt="Gifon" fill className="object-contain"/>
              </div>
              <div className="flex flex-col justify-center cooper">
                <h1 className="text-5xl md:text-5xl lg:text-5xl font-extrabold text-green-700 leading-none tracking-[0.2em] lg:tracking-[0.3em]">GIFON</h1>
                <span className="text-[0.4rem] md:text-[0.65rem] lg:text-[0.5rem] font-bold text-green-800 uppercase tracking-tight whitespace-nowrap">Geospatial Intelligence Foundation of Nigeria</span>
              </div>
            </Link>

            <div className="flex gap-4 mb-6">
                {socialLinks.map((link) => (
                    <a key={link.name} href={link.href} className={`text-lg transition-colors ${link.hover}`}>
                        {link.icon}
                    </a>
                ))}
            </div>

            <button className="flex items-center gap-2 text-xs font-semibold text-green-700 hover:text-green-500 transition-colors">
                <IoShareSocial size={14} /> 
                SHARE THIS PAGE
            </button>
          </div>

          {/* --- 2. Quick Links (Col Span 3) --- */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
                {menuItems.map(item => (
                <li key={item.label}>
                    <Link href={item.href} className="hover:text-green-500 transition-colors block">
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
          </div>

          {/* --- 3. Contact (Col Span 5) --- */}
          {/* Restored full data but used a dense grid to keep it compact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact Us</h4>
            
            {/* Full Address Restored */}
            <address className="not-italic mb-6 text-gray-500 leading-snug">
                12 Richard Clapperton Street,<br />
                Off Maman Nasir Street, Asokoro District,<br />
                Abuja, Nigeria.
            </address>
            
            {/* Dense Contact List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 text-md">
                
                {/* General */}
                <div className='col-span-2 sm:col-span-2 border-b border-gray-900 pb-2 mb-1 flex flex-col align-center'>
                    <span className="block font-bold text-gray-300">General Info</span>
                    <a href="mailto:info@gifon.org.ng" className="hover:text-green-500">info@gifon.org.ng</a>
                </div>

                {/* Secretariat */}
                <div>
                    <span className="block font-bold text-gray-300">Secretariat</span>
                    <a href="tel:+2347077211243" className="block hover:text-green-500">+234 707 721 1243</a>
                    <a href="mailto:secretariat@gifon.org.ng" className="block hover:text-green-500 text-gray-500">secretariat@gifon.org.ng</a>
                </div>

                {/* Outreach */}
                <div>
                    <span className="block font-bold text-gray-300">Outreach</span>
                    <a href="tel:+2347077269829" className="block hover:text-green-500">+234 707 726 9829</a>
                    <a href="mailto:outreach@gifon.org.ng" className="block hover:text-green-500 text-gray-500">outreach@gifon.org.ng</a>
                </div>

                {/* Membership */}
                <div>
                    <span className="block font-bold text-gray-300">Membership</span>
                    <a href="tel:+2347077211243" className="block hover:text-green-500">+234 707 721 1243</a>
                    <a href="mailto:membership@gifon.org.ng" className="block hover:text-green-500 text-gray-500">membership@gifon.org.ng</a>
                </div>

                {/* Education */}
                <div>
                    <span className="block font-bold text-gray-300">Education & Programmes</span>
                    <a href="tel:+2347077211243" className="block hover:text-green-500">+234 707 721 1243</a>
                    <a href="mailto:membership@gifon.org.ng" className="block hover:text-green-500 text-gray-500">Education@gifon.org.ng</a>
                </div>

                {/* Research */}
                <div>
                    <span className="block font-bold text-gray-300">Research</span>
                    <a href="tel:+2347077396196" className="block hover:text-green-500">+234 707 739 6196</a>
                    <a href="mailto:research@gifon.org.ng" className="block hover:text-green-500 text-gray-500">research@gifon.org.ng</a>
                </div>
                
                {/* Events */}
                <div>
                    <span className="block font-bold text-gray-300">Events and Exhibition</span>
                    <a href="tel:+2347077396196" className="block hover:text-green-500">+234 707 739 6196</a>
                    <a href="mailto:research@gifon.org.ng" className="block hover:text-green-500 text-gray-500">Events.exhibition@gifon.org.ng</a>
                </div>

            </div>
          </div>
        </div>

        {/* --- Bottom Copyright --- */}
        <div className="mt-10 pt-6 border-t border-gray-900 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Geospatial Intelligence Foundation of Nigeria. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}