'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from '@/styles/Header.module.css';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

interface MenuItem {
  label: string;
  href?: string;
  anchor?: string;
  link?: string;
  children?: MenuItem[];
}

// Define menu structure
const menuItems: MenuItem[] = [
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
      { label: 'Vission', anchor: 'mission-vision' },
      { label: 'Core Values', anchor: 'core-values' },
      { label: 'Board of Directors', link: 'leadership' },
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
      { label: 'Membership Categories', anchor: 'categories' },
      { label: 'Membership Portal (Apply & Renew)', anchor: 'portal' },
      { label: 'Talent Development', anchor: 'talent' },
      { label: 'Volunteer Opportunities', anchor: 'opportunities' },
    ],
  },
  {
    label: 'Education',
    href: '/education',
    children: [
      { label: 'Training', anchor: 'C-T' },
      { label: 'Programmes', anchor: 'C-T', children: [
            { label: 'Youth Empowerment & Talent Acceleration', anchor: 'youth-empowerment' },
            { label: 'Women in GEOINT (WINGS)', anchor: 'wings' },
            { label: 'Geoinnovation & Tech Incubation', anchor: 'geoinnovation' },
            { label: 'National Geospatial Security & Intelligence Hub', anchor: 'geospatial-hub' },
            { label: 'Community Mapping for Development', anchor: 'community-mapping' },
            { label: 'Open Data & Research', anchor: 'open-data' },
            { label: 'Conferences, Workshops & Masterclasses', anchor: 'conferences' },
            { label: 'Training & Certification', anchor: 'training' },
          ],
       },
      { label: 'Events & Highlights', anchor: 'C-T' ,
        children: [
          { label: 'Upcoming Events', anchor: 'upcoming-events', 
            children: [
              { label: 'DGI London', anchor: 'dgi-london' },
              { label: 'USGIF', anchor: 'usgif' },
              { label: 'FIG', anchor: 'fig' },
              { label: 'AAG', anchor: 'aag' },
              { label: 'AARSE', anchor: 'aarse' },
              { label: 'EIS-Africa', anchor: 'eis-africa' },
              { label: 'GEOSON', anchor: 'geoson' },
              { label: 'GIFON Pre-Launch', anchor: 'geoson' },
            ]  
          },
          { label: 'Past Events', anchor: 'past-events', 
            children: [
              { label: 'DGI London', anchor: 'dgi-london' },
              { label: 'USGIF', anchor: 'usgif' },
              { label: 'FIG', anchor: 'fig' },
              { label: 'AAG', anchor: 'aag' },
              { label: 'AARSE', anchor: 'aarse' },
              { label: 'EIS-Africa', anchor: 'eis-africa' },
              { label: 'GEOSON', anchor: 'geoson' },
              { label: 'GIFON Pre-Launch', anchor: 'geoson' },
            ]  
          },
        ]
    },

      // { label: 'Membership Benefits', anchor: 'benefits' },
      // { label: 'Talent Development', anchor: 'talent' },
      // { label: 'Membership Categories', anchor: 'categories' },
      // { label: 'Membership Portal (Apply & Renew)', anchor: 'portal' },
      // { label: 'Volunteer Opportunities', anchor: 'opportunities' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Media Resources', anchor: 'C-T' ,
        children: [
              { label: 'New & Media ', anchor: 'dgi-london' },
              { label: 'Press Releases', anchor: 'usgif' },
              { label: 'Publication Archive', anchor: 'fig' },
              { label: 'Podcast and Webinar Series', anchor: 'aag' },
              { label: 'Photo & Video Gallery', anchor: 'aarse' },
              { label: 'Downloads', anchor: 'eis-africa' },
            ]  
          },
          { label: 'Policies', anchor: 'C-T' ,
            children: [
              { label: 'Code of Ethics', anchor: 'dgi-london' },
              { label: 'Anti-Corruption', anchor: 'usgif' },
              { label: 'Fund Raising', anchor: 'fig' },
              { label: 'Anti-Modern-Day Slavery', anchor: 'aag' },
              { label: 'Volunteer & Internship', anchor: 'aarse' },
            ]
          },
          { label: 'Publications', anchor: 'C-T' ,
            children: [
              { label: 'Eyes on Location- The Journal of GeoINSIGHT', anchor: 'dgi-london' },
              { label: 'Eyes on Location- The GeoINSIGHT Bulletin', anchor: 'usgif' },
              { label: 'Conference & Workshop Proceedings', anchor: 'fig' },
              { label: 'Policy Briefs & White Paper', anchor: 'aag' },
              { label: 'Research Reports', anchor: 'aarse' },
            ]  
          },
          {
            label: 'Critical Infrastructure Support',
            href: '/infrastructure',
            children: [
              { label: 'Energy Security & Development', anchor: 'energy' },
              { label: 'Transportation', anchor: 'transportation' },
              { label: 'Communication', anchor: 'communication' },
              { label: 'Water & Environment', anchor: 'water' },
              { label: 'Health', anchor: 'health' },
              { label: 'Finance', anchor: 'finance' },
              { label: 'Government Facilities', anchor: 'government' },
              { label: 'Food Security & Agriculture', anchor: 'food' },
              { label: 'Defence & Security', anchor: 'defence' },
              { label: 'Information Technology', anchor: 'it' },
              { label: 'Industrial Systems', anchor: 'industrial' },
              { label: 'Emergency Services', anchor: 'emergency' },
              { label: 'Manufacturing', anchor: 'manufacturing' },
              { label: 'Space & Satellite Systems', anchor: 'space' },
            ],
          },
        ]
    },
  {
    label: 'Donate',
    href: '/donate'
  },
  ]

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

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, [breakpoint]);
  return isMobile;
}


function Dropdown({
  items,
  parentHref,
  closeAll,
  depth = 0,
}: {
  items: MenuItem[];
  parentHref: string;
  closeAll: () => void;
  depth?: number;
}) {
  const isMobile = useIsMobile();
  const [openChild, setOpenChild] = useState<string | null>(null);

  return (
    <ul className={styles.dropdownMenu} data-depth={depth}>
      {items.map((child, idx) => {
        const hasChildren = Boolean(child.children && child.children.length);
        const isOpen = openChild === child.label;

        return (
          <li
          key={`${child.label}-${idx}`}
          className={styles.dropdownItem}
          data-open={isOpen ? "true" : "false"}   // <-- new attribute
          onMouseEnter={() => { if (!isMobile) setOpenChild(child.label); }}
          onMouseLeave={() => { if (!isMobile) setOpenChild(prev => (prev === child.label ? null : prev)); }}
          onFocus={() => { if (!isMobile) setOpenChild(child.label); }}
          onBlur={() => { if (!isMobile) setOpenChild(prev => (prev === child.label ? null : prev)); }}
        >
            <div className={styles.dropdownLinkRow}>
              <Link
                href={child.link ?? `${parentHref}#${child.anchor ?? ''}`}
                onClick={(e) => {
                  if (isMobile && hasChildren) {
                    // on mobile, tapping a parent with children should toggle
                    e.preventDefault();
                    setOpenChild(prev => (prev === child.label ? null : child.label));
                    return;
                  }
                  closeAll();
                }}
                className={styles.dropdownLink}
              >
                {child.label}
              </Link>

              {hasChildren && (
                <button
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenChild(prev => (prev === child.label ? null : child.label));
                  }}
                  className={styles.dropdownToggle}
                >
                  ▸
                </button>
              )}
            </div>

            {hasChildren && (
              <div className={`${styles.subDropdown} ${isOpen ? ' ' + styles.showDropdown : ''}`}>
                <Dropdown
                  items={child.children!}
                  parentHref={parentHref}
                  closeAll={closeAll}
                  depth={depth + 1}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // const [openTopDropdown, setOpenTopDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  // Toggle handlers
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleTop = () => setTopOpen(prev => !prev);

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setTopOpen(false);
    setOpenDropdown(null);
  }, []);
  
  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('jwt') : null;
    setIsLoggedIn(!!token);
  }, []);

  const topBarItems = [...topBarItemsBase];
  if (isLoggedIn) {
    const idx = topBarItems.findIndex(item => item.label === 'Login');
    if (idx !== -1) topBarItems[idx] = { label: 'Profile', href: '/profile' };
  }

  // click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) closeAll();
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
            >
              <Link href={item.href!} onClick={closeAll} className={styles.topNavLink}>
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

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">☰</button>
      </div>

      {/* Bottom Nav */}
      <div className={styles.topBar}>
        <button className={styles.topToggle} onClick={toggleTop} aria-label="Toggle top menu">☰</button>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          {menuItems.map(item => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => { if (!isMobile) setOpenDropdown(item.label); }}
              onMouseLeave={() => { if (!isMobile) setOpenDropdown(null); }}
            >
              {item.children ? (
                <>
                  <Link
                    href={item.href ?? '#'}
                    className={styles.navLink}
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        setOpenDropdown(prev => (prev === item.label ? null : item.label));
                        return;
                      }
                      closeAll();
                    }}
                  >
                    {item.label}
                  </Link>

                  <div className={`${styles.dropdownWrapper} ${openDropdown === item.label ? styles.showDropdown : ''}`}>
                    <Dropdown items={item.children} parentHref={item.href ?? '#'} closeAll={closeAll} />
                  </div>
                </>
              ) : (
                <Link href={item.href ?? '#'} onClick={closeAll} className={styles.navLink}>
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