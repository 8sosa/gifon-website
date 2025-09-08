'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useCallback } from 'react';

// Define menu structure
const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Aim', anchor: 'aim' },
      { label: 'Objectives', anchor: 'objectives' },
      { label: 'Mission', anchor: 'mission-vision' },
      { label: 'Core Values', anchor: 'core-values' },
      { label: 'Leadership & History', link: 'leadership' },
      { label: 'Our Partners', anchor: 'our-partners' },
      { label: 'Contact Us', anchor: 'contact' },
    ],
  },
  // {
  //   label: 'Programs',
  //   href: '/programs',
  //   children: [
  //     { label: 'Youth Empowerment & Talent Acceleration', anchor: 'youth-empowerment' },
  //     { label: 'Women in GEOINT (WINGS)', anchor: 'wings' },
  //     { label: 'Geoinnovation & Tech Incubation', anchor: 'geoinnovation' },
  //     { label: 'National Geospatial Security & Intelligence Hub', anchor: 'geospatial-hub' },
  //     { label: 'Community Mapping for Development', anchor: 'community-mapping' },
  //     { label: 'Open Data & Research', anchor: 'open-data' },
  //     { label: 'Conferences, Workshops & Masterclasses', anchor: 'conferences' },
  //     { label: 'Training & Certification', anchor: 'training' },
  //   ],
  // },
  // {
  //   label: 'Critical Infrastructure Support',
  //   href: '/infrastructure',
  //   children: [
  //     { label: 'Energy Security & Development', anchor: 'energy' },
  //     { label: 'Transportation', anchor: 'transportation' },
  //     { label: 'Communication', anchor: 'communication' },
  //     { label: 'Water & Environment', anchor: 'water' },
  //     { label: 'Health', anchor: 'health' },
  //     { label: 'Finance', anchor: 'finance' },
  //     { label: 'Government Facilities', anchor: 'government' },
  //     { label: 'Food Security & Agriculture', anchor: 'food' },
  //     { label: 'Defence & Security', anchor: 'defence' },
  //     { label: 'Information Technology', anchor: 'it' },
  //     { label: 'Industrial Systems', anchor: 'industrial' },
  //     { label: 'Emergency Services', anchor: 'emergency' },
  //     { label: 'Manufacturing', anchor: 'manufacturing' },
  //     { label: 'Space & Satellite Systems', anchor: 'space' },
  //   ],
  // },
  // {
  //   label: 'Policies',
  //   href: '/policies',
  //   children: [
  //     { label: 'Code of Ethics', anchor: 'ethics' },
  //     { label: 'Anti-Corruption', anchor: 'anti-corruption' },
  //     { label: 'Fund Raising', anchor: 'fund-raising' },
  //     { label: 'Anti-Modern-Day Slavery', anchor: 'slavery' },
  //     { label: 'Volunteer & Internship', anchor: 'volunteer' },
  //   ],
  // },
  // {
  //   label: 'Groups & Forums',
  //   href: '/forums',
  //   children: [
  //     { label: 'Young Professionals Forum', anchor: 'young-professionals' },
  //     { label: 'Women in GEOINT Forum', anchor: 'women' },
  //     { label: 'Industry & Private Sector Forum', anchor: 'industry' },
  //     { label: 'Policy, Governance & Ethics Forum', anchor: 'policy' },
  //     { label: 'Academia & Research Collaboration', anchor: 'academia' },
  //   ],
  // },
  // {
  //   label: 'Publications',
  //   href: '/publications',
  //   children: [
  //     { label: 'Eyes on Location - Journal of GeoINSIGHT', anchor: 'journal' },
  //     { label: 'GeoINSIGHT Bulletin', anchor: 'bulletin' },
  //     { label: 'Conference & Workshop Proceedings', anchor: 'proceedings' },
  //     { label: 'Policy Briefs & White Papers', anchor: 'policy-briefs' },
  //     { label: 'Research Reports', anchor: 'reports' },
  //     // merged journal sub-links
  //     { label: 'About The Journal', anchor: 'about-journal' },
  //     { label: 'Editorial Board', anchor: 'editorial-board' },
  //     { label: 'Author Guidelines', anchor: 'author-guidelines' },
  //     { label: 'Submit a Paper', anchor: 'submit-paper' },
  //     { label: 'Read Articles', anchor: 'read-articles' },
  //     { label: 'Call for Papers', anchor: 'call-for-papers' },
  //   ],
  // },
  {
    label: 'Membership',
    href: '/membership',
    children: [
      { label: 'Why Join GIFON', anchor: 'why-join' },
      { label: 'Membership Benefits', anchor: 'benefits' },
      { label: 'Talent Development', anchor: 'talent' },
      { label: 'Membership Categories', anchor: 'categories' },
      { label: 'Membership Portal (Apply & Renew)', anchor: 'portal' },
      { label: 'Volunteer Opportunities', anchor: 'opportunities' },
    ],
  },
  {
    label: 'Education',
    href: '/education',
    children: [
      { label: 'Why Join GIFON', anchor: 'why-join' },
      { label: 'Membership Benefits', anchor: 'benefits' },
      { label: 'Talent Development', anchor: 'talent' },
      { label: 'Membership Categories', anchor: 'categories' },
      { label: 'Membership Portal (Apply & Renew)', anchor: 'portal' },
      { label: 'Volunteer Opportunities', anchor: 'opportunities' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources'
  },
  // {
  //   label: 'Media Resources',
  //   href: '/media',
  //   children: [
  //     { label: 'News & Media', anchor: 'news' },
  //     { label: 'Press Releases', anchor: 'press' },
  //     { label: 'Publication Archive', anchor: 'archive' },
  //     { label: 'Resource Materials', anchor: 'resources' },
  //     { label: 'Events & Highlights', anchor: 'events' },
  //     { label: 'Podcasts & Webinars', anchor: 'podcasts' },
  //     { label: 'Photo & Video Gallery', anchor: 'gallery' },
  //     { label: 'Downloads', anchor: 'downloads' },
  //   ],
  // },
  // {
  //   label: 'Events',
  //   href: '/events',
  //   children: [
  //     { label: 'Events & Highlights', anchor: 'highlights' },
  //     { label: 'Upcoming Events', anchor: 'upcoming' },
  //     { label: 'Pre-Launch Event', anchor: 'prelaunch' },
  //     { label: 'Inaugural Conference & Launching', anchor: 'inaugural' },
  //     { label: 'International Events - DGI London', anchor: 'dgi' },
  //     { label: 'International Events - USGIF GEOINT', anchor: 'usgif' },
  //     { label: 'International Events - FIG', anchor: 'fig' },
  //     { label: 'International Events - AAG', anchor: 'aag' },
  //     { label: 'International Events - AARSE', anchor: 'aarse' },
  //     { label: 'International Events - EIS-Africa', anchor: 'eis' },
  //     { label: 'International Events - GEOSON', anchor: 'geoson' },
  //   ],
  // },
  // {
  //   label: 'Get Involved',
  //   href: '/get-involved',
  //   children: [
  //     { label: 'Membership', anchor: 'membership' },
  //     { label: 'Volunteer', anchor: 'volunteer' },
  //     { label: 'Scholarships & Fellowships', anchor: 'scholarships' },
  //     { label: 'Partnerships', anchor: 'partnerships' },
  //     { label: 'Careers & Internships', anchor: 'careers' },
  //     { label: 'Support GIFON', anchor: 'support' },
  //   ],
  // },
  {
    label: 'Contribute',
    href: '/#'
  },
];

const topBarItemsBase = [
  {
    label: 'Contact Us',
    href: '/contact-us'
  },
  {
    label: 'Sign In',
    href: '/login'
  },
  {
    label: 'Register',
    href: '/sign-up',
  },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openTopDropdown, setOpenTopDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  

  // Toggle handlers
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleTop = () => setTopOpen(prev => !prev);
  
  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setTopOpen(false);
    setOpenDropdown(null);
    setOpenTopDropdown(null);
    console.log(openTopDropdown);
  }, [openTopDropdown]);

   // Check for JWT on mount
   useEffect(() => {
    const token = localStorage.getItem('jwt');
    setIsLoggedIn(!!token);
  }, []);

  const topBarItems = [...topBarItemsBase];
  if (isLoggedIn) {
    // Replace Login with Profile
    const idx = topBarItems.findIndex(item => item.label === 'Login');
    if (idx !== -1) {
      topBarItems[idx] = { label: 'Profile', href: '/profile' };
    }
  }

  // Click outside to close menus
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeAll]);

  return (
    <header className={styles.header} ref={navRef}>
      {/* Main Navbar */}
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={closeAll}>
          <Image src="/logo.png" alt="Gifon" width={1000} height={1000} />
        </Link>
        <div className={`${styles.topMenu} ${topOpen ? styles.show : ''}`}>
          {topBarItems.map(item => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => setOpenTopDropdown(item.label)}
              onMouseLeave={() => setOpenTopDropdown(null)}
            >
                <Link href={item.href} onClick={closeAll} className={styles.topNavLink}>
                  {item.label}
                </Link>
            </div>
          ))}
            <div className='flex flex-row gap-3 green'>
            <FaSearch size={16}/>
            <FaXTwitter size={16}/>
            <FaLinkedinIn size={16}/>
            <FaFacebookF size={16}/>
            </div>
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {/* bottom Bar */}
      <div className={styles.topBar}>
        <button className={styles.topToggle} onClick={toggleTop} aria-label="Toggle top menu">
          ☰
        </button>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          {menuItems.map(item => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  {/* Parent now links to page */}
                  <Link href={item.href} className={styles.navLink} onClick={closeAll}>
                    {item.label}
                  </Link>
                  <ul className={`${styles.dropdownMenu} ${openDropdown === item.label ? styles.showDropdown : ''}`}>
                    {item.children.map(child => (
                      <li key={child.anchor} className={styles.dropdownItem}>
                        <Link href={child.link ?? `${item.href}#${child.anchor}`} onClick={closeAll}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} onClick={closeAll} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        {menuOpen && <div className={styles.overlay} onClick={closeAll} />}
      </div>
    </header>
  );
}
