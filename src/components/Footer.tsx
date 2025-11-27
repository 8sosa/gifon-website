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
    { label: 'Critical Infrastructure Support', href: '/infrastructure' },
    { label: 'Policies', href: '/policies' },
    { label: 'Programmes', href: '/education#programs' },
    { label: 'Get Involved', href: '/donate' },
  ];

  const socialLinks = [
    { 
      name: 'X', 
      icon: <FaXTwitter size={16}/>, 
      href: '#', 
      colorClass: 'text-gray-500',
      hoverColorClass: 'hover:text-gray-500' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedinIn size={16}/>, 
      href: '#', 
      colorClass: 'text-blue-700',
      hoverColorClass: 'hover:text-blue-700' 
    },
    { 
      name: 'Facebook', 
      icon: <FaFacebookF size={16}/>, 
      href: '#', 
      colorClass: 'text-blue-600',
      hoverColorClass: 'hover:text-blue-600' 
    },
    { 
      name: 'Youtube', 
      icon: <FaYoutube size={16}/>, 
      href: '#', 
      colorClass: 'text-red-600',
      hoverColorClass: 'hover:text-red-600' 
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram size={16}/>, 
      href: '#', 
      colorClass: 'text-pink-600',
      hoverColorClass: 'hover:text-pink-600' 
    },
    { 
      name: 'Whatsapp', 
      icon: <FaWhatsapp size={16}/>, 
      href: '#', 
      colorClass: 'text-green-500',
      hoverColorClass: 'hover:text-green-500' 
    },
  ];

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-green-200 text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Section: Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* 1. Logo Section (Takes 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="group">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 mb-4 transition-transform group-hover:scale-105">
                    <Image 
                        src="/logo.png" 
                        alt="Gifon" 
                        fill 
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col cooper">
                    {/* Responsive text size: 5xl on mobile -> 8xl on desktop */}
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-green-700 leading-none">GIFON</h1>
                    <span className="text-sm md:text-base lg:text-lg font-medium text-green-800 mt-2">
                        Geospatial Intelligence Foundation of Nigeria
                    </span>
                </div>
            </Link>
          </div>

          {/* 2. Contact Section (Takes 4 columns on desktop) */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold mb-6 text-green-700 border-b-2 border-green-200 inline-block">Contact Us</h4>
            <ul className='space-y-4 text-sm md:text-base font-medium text-gray-200'>
              {/* Address */}
              <li className="leading-relaxed">
                12 Richard Clapperton Street,<br />
                Off Maman Nasir Street,<br />
                Asokoro District,<br />
                Abuja, Nigeria.
              </li>
              
              {/* Contacts Items - Stack on mobile, Row on larger screens */}
              <li className='flex flex-col sm:flex-row justify-between border-b border-dashed border-gray-200 pb-2'>
                <p className="font-bold text-gray-300">General Info:</p>
                <a href="mailto:info@gifon.org.ng" className='sm:text-right hover:text-green-600 transition-colors'>info@gifon.org.ng</a>
              </li>

              <li className='flex flex-col sm:flex-row justify-between border-b border-dashed border-gray-200 pb-2'>
                <p className="font-bold text-gray-300">Secretariat:</p>
                <div className='flex flex-col sm:text-right'>
                  <a href="tel:+2347077211243" className="hover:text-green-600">+234 707 721 1243</a>
                  <a href="mailto:secretariat@gifon.org.ng" className="hover:text-green-600">secretariat@gifon.org.ng</a>
                </div>
              </li>
              
              <li className='flex flex-col sm:flex-row justify-between border-b border-dashed border-gray-200 pb-2'>
                <p className="font-bold text-gray-300">Outreach:</p>
                <div className='flex flex-col sm:text-right'>
                  <a href="tel:+2347077269829" className="hover:text-green-600">+234 707 726 9829</a>
                  <a href="mailto:outreach@gifon.org.ng" className="hover:text-green-600">outreach@gifon.org.ng</a>
                </div>
              </li>

              <li className='flex flex-col sm:flex-row justify-between border-b border-dashed border-gray-200 pb-2'>
                <p className="font-bold text-gray-300">Education & Membership:</p>
                <div className='flex flex-col sm:text-right'>
                  <a href="tel:+2347077211243" className="hover:text-green-600">+234 707 721 1243</a>
                  <a href="mailto:membership@gifon.org.ng" className="hover:text-green-600">membership@gifon.org.ng</a>
                </div>
              </li>

              <li className='flex flex-col sm:flex-row justify-between pb-2'>
                <p className="font-bold text-gray-300">Research:</p>
                <div className='flex flex-col sm:text-right'>
                  <a href="tel:+2347077396196" className="hover:text-green-600">+234 707 739 6196</a>
                  <a href="mailto:research@gifon.org.ng" className="hover:text-green-600">research@gifon.org.ng</a>
                </div>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links (Takes 3 columns on desktop) */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-6 text-green-700 border-b-2 border-green-200 inline-block">Quick Links</h4>
            <ul className="space-y-3">
            {menuItems.map(item => (
              <li key={item.label}>
                <Link href={item.href} className="block text-gray-200 hover:text-green-700 hover:translate-x-1 transition-all duration-300">
                  {item.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>

        {/* --- Socials & Share Section --- */}
        <div className="border-t border-gray-200 py-8 flex flex-col items-center text-center">
          <h4 className='font-semibold text-xl mb-6 text-gray-200'>Connect With Us</h4>
          
          <div className='flex flex-col md:flex-row justify-center gap-8 items-center w-full'>
            {/* Social Icons - Flex Wrap for Mobile */}
            <ul className='flex flex-wrap justify-center gap-6 md:gap-8'>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-2 group ${link.hoverColorClass} transition-colors`}
                  >
                    <span className={`${link.colorClass} group-hover:scale-110 transition-transform`}>{link.icon}</span>
                    <span className="font-medium text-gray-200 group-hover:text-inherit">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Share Button 

[Image of social share icon]
 */}
            <button className="flex items-center gap-2 px-6 py-2 bg-green-100 text-green-800 rounded-full font-semibold hover:bg-green-200 transition-colors shadow-sm">
                <IoShareSocial className="text-lg" /> 
                SHARE THIS PAGE
            </button>
          </div>
        </div>

        {/* --- Bottom Copyright --- */}
        <div className="text-center text-sm text-gray-200 pt-8 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} GIFON. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}