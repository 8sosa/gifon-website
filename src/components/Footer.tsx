import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

export default function Footer() {
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about'
    },
    {
      label: 'Membership',
      href: '/membership'
    },
    {
      label: 'Education',
      href: '/education',
    },
    {
      label: 'Events',
      href: '/events'
    },
    {
      label: 'Media Resources',
      href: '/media'
    },
    {
      label: 'Critical Infrastructure Support',
      href: '/infrastructure'
    },
    {
      label: 'Policies',
      href: '/policies'
    },
    {
      label: 'Programmes',
      href: '/education#programs'
    },
    // {
    //   label: 'Publications',
    //   href: '/resources#publications'
    // },
    {
      label: 'Get Involved',
      href: '/donate'
    },
  ];

  // --- Data array for social links with brand colors ---
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
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Column 1 (spans half width) */}
        <div className={styles.col1}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Gifon" width={600} height={600} className={styles.logoPng}/>
            <div className="flex flex-col justify-center cooper">
              <h1 className="text-8xl font-bold green">GIFON</h1>
              <span className="text-md pl-4 font-md green">Geospatial Intelligence Foundation of Nigeria</span>
            </div>
          </Link>
        </div>
        <div className={styles.footerRight}>
          {/* Column 2 */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <ul className='w-max font-thin'>
              {/* Updated Address */}
              <li>12 Richard Clapperton Street,</li>
              <li>Off Maman Nasir Street,</li>
              <li>Asokoro District,</li>
              <li>Abuja, Nigeria.</li>
              
              {/* General Inquiries Email */}
              <li className='flex flex-row w-full justify-between'>
                <p>General Information:</p>
                <div className='flex flex-col text-end'>
                  <p className='pl-2'>info@gifon.org.ng</p>
                </div>
              </li>
              {/* Updated Secretariat */}
              <li className='flex flex-row w-full justify-between'>
                <p>International Secretariat:</p>
                <div className='flex flex-col text-end'>
                  <p className='pl-2'>+234 707 721 1243</p>
                  <p className='pl-2'>secretariat@gifon.org.ng</p>
                </div>
              </li>
              
              {/* Updated Outreach */}
              <li className='flex flex-row w-full justify-between'>
                <p>Outreach:</p>
                <div className='flex flex-col text-end'>
                  <p className='pl-2'>+234 707 726 9829</p>
                  <p className='pl-2'>outreach@gifon.org.ng</p>
                </div>
              </li>

              {/* NEW Education & Membership */}
              <li className='flex flex-row w-full justify-between'>
                <p>Education & Membership:</p>
                <div className='flex flex-col text-end'>
                  <p className='pl-2'>+234 707 721 1243</p>
                  <p className='pl-2'>membership@gifon.org.ng</p>
                </div>
              </li>

              {/* Updated Research */}
              <li className='flex flex-row w-full justify-between'>
                <p>Research:</p>
                <div className='flex flex-col text-end'>
                  <p className='pl-2'>+234 707 739 6196</p>
                  <p className='pl-2'>research@gifon.org.ng</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
            {menuItems.map(item => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- UPDATED SOCIALS SECTION --- */}
      <div className="flex flex-col gap-8 p-4 text-center">
        <h4 className='font-semibold text-lg'>Connect With Us</h4>
        <div className='flex flex-col md:flex-row justify-around gap-8 items-center'>
          
          {/* Replaced hardcoded list with a mapped, responsive list */}
          <ul className='flex flex-row flex-wrap justify-center gap-x-8 gap-y-4'>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`flex flex-row justify-start items-center gap-3 ${link.hoverColorClass} transition-colors`}
                >
                  <span className={link.colorClass}>{link.icon}</span>
                  {/* Fixed semantics: h2 -> span */}
                  <span className="font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <button className={styles.shareBtn}><IoShareSocial /> SHARE THIS PAGE</button>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} GIFON. All rights reserved.</p>
      </div>
    </footer>
  );
}