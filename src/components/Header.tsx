'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Header.module.css';

// Define menu structure
const menuItems = [
  {
    label: 'About us',
    href: '/about',
    children: [
      { label: 'Our Story', anchor: 'our-story' },
      { label: 'Our Vision', anchor: 'our-vision' },
      { label: 'Our Mandate', anchor: 'our-mandate' },
      { label: 'Message from Founder', anchor: 'message-founder' },
      { label: 'Board of Trustees', anchor: 'board-trustees' },
      { label: 'Executive Leadership', anchor: 'executive-leadership' },
      { label: 'Our Partners', anchor: 'our-partners' },
    ],
  },
  {
    label: 'Programmes X Initiatives',
    href: '/programmes',
    children: [
      { label: 'National geospatial Dev Programmes', anchor: 'national-dev' },
      { label: 'Geoeducation X Capacity Building', anchor: 'geoeducation' },
      { label: 'Youth Empowerment X Talent Acceleration', anchor: 'youth-empowerment' },
      { label: 'GeoInnovation X Tech Incubation', anchor: 'geoinnovation' },
      { label: 'Community merging X sustainable Dev', anchor: 'community-sustainable' },
      { label: 'Open Data X Research Programmes', anchor: 'open-data' },
      { label: 'Geopolicy X Advocacy', anchor: 'geopolicy' },
    ],
  },
  {
    label: 'Events X Conferences',
    href: '/events',
    children: [
      { label: 'Upcoming Events', anchor: 'upcoming-events' },
      { label: 'Annual National conference', anchor: 'annual-conference' },
      { label: 'Workshops X Masterclasses', anchor: 'workshops' },
      { label: 'Past events', anchor: 'past-events' },
      { label: 'Certification Programmes', anchor: 'certification' },
    ],
  },
  {
    label: 'Membership',
    href: '/membership',
    children: [
      { label: 'Why Join', anchor: 'why-join' },
      { label: 'Membership Categories', anchor: 'categories' },
      { label: 'Benefits', anchor: 'benefits' },
      { label: 'How to join', anchor: 'how-to-join' },
      { label: 'Member login', anchor: 'member-login' },
    ],
  },
  {
    label: 'Publication X Media',
    href: '/publications',
    children: [
      { label: 'Research Articles X Partners', anchor: 'research-articles' },
      { label: 'Policy Briefs', anchor: 'policy-briefs' },
      { label: 'Journals', anchor: 'journals' },
      { label: 'Newsletter', anchor: 'newsletter' },
      { label: 'Media Gallery', anchor: 'media-gallery' },
      { label: 'Podcast', anchor: 'podcast' },
    ],
  },
  {
    label: 'Partnerships X Sponsors',
    href: '/partnerships',
    children: [
      { label: 'Partner With Us', anchor: 'partner-with-us' },
      { label: 'Strategic Alliance', anchor: 'strategic-alliance' },
      { label: 'Sponsorship Opportunities', anchor: 'sponsorship' },
      { label: 'Past X Current Partners', anchor: 'past-partners' },
    ],
  },
  // {
  //   label: 'Resources',
  //   href: '/resources',
  //   children: [
  //     { label: 'Geospatial Tools X Portals', anchor: 'tools-portals' },
  //     { label: 'Datasets X Maps', anchor: 'datasets-maps' },
  //     { label: 'Training Materials', anchor: 'training-materials' },
  //     { label: 'Downloadables', anchor: 'downloadables' },
  //   ],
  // },
  {
    label: 'Journal - Eyes on Location',
    href: '/journal',
    children: [
      { label: 'About The Journal', anchor: 'about-journal' },
      { label: 'Editorial Board', anchor: 'editorial-board' },
      { label: 'Author Guidelines', anchor: 'author-guidelines' },
      { label: 'Submit a Paper', anchor: 'submit-paper' },
      { label: 'Read Articles', anchor: 'read-articles' },
      { label: 'Call for Papers', anchor: 'call-for-papers' },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
    children: [
      { label: 'Contact Information', anchor: 'contact-info' },
      { label: 'Office Location', anchor: 'office-location' },
      { label: 'Online Contact Form', anchor: 'online-form' },
      { label: 'Social Media Links', anchor: 'social-media' },
    ],
  },
  // {
  //   label: 'Donate X Support',
  //   href: '/donate',
  //   children: [
  //     { label: 'Ways to Support GIFON', anchor: 'ways-to-support' },
  //     { label: 'Donate Online', anchor: 'donate-online' },
  //     { label: 'Volunteer', anchor: 'volunteer' },
  //     { label: 'CSR Opportunities', anchor: 'csr-opportunities' },
  //   ],
  // },
  // { label: 'Login', href: '/login' },
];
const topBarItems = [
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Geospatial Tools X Portals', anchor: 'tools-portals' },
      { label: 'Datasets X Maps', anchor: 'datasets-maps' },
      { label: 'Training Materials', anchor: 'training-materials' },
      { label: 'Downloadables', anchor: 'downloadables' },
    ],
  },
  {
    label: 'Donate X Support',
    href: '/donate',
    children: [
      { label: 'Ways to Support GIFON', anchor: 'ways-to-support' },
      { label: 'Donate Online', anchor: 'donate-online' },
      { label: 'Volunteer', anchor: 'volunteer' },
      { label: 'CSR Opportunities', anchor: 'csr-opportunities' },
    ],
  },
  {
    label: 'Login',
    href: '/login',
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openTopDropdown, setOpenTopDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Toggle handlers
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleTop = () => setTopOpen(prev => !prev);
  const handleDropdown = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  };
  const handleTopDropdown = (label: string) => {
    setOpenTopDropdown(prev => (prev === label ? null : label));
  };
  const closeAll = () => {
    setMenuOpen(false);
    setTopOpen(false);
    setOpenDropdown(null);
    setOpenTopDropdown(null);
  };

  // Click outside to close menus
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={styles.header} ref={navRef}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <span>GEOINT Symposium 2026 | 2024 Annual Report</span>
        <button className={styles.topToggle} onClick={toggleTop} aria-label="Toggle top menu">
          ☰
        </button>
        <div className={`${styles.topMenu} ${topOpen ? styles.show : ''}`}>  
          {topBarItems.map(item => (
            <div key={item.label} className={styles.navItem}>
              {item.children ? (
                <>  
                  <button
                    className={styles.topNavLink}
                    onClick={() => handleTopDropdown(item.label)}
                    aria-expanded={openTopDropdown === item.label}
                  >
                    {item.label}
                  </button>
                  <ul className={`${styles.dropdownMenu} ${openTopDropdown === item.label ? styles.showDropdown : ''}`}>  
                    {item.children.map(child => (
                      <li key={child.anchor} className={styles.dropdownItem}>
                        <Link href={`${item.href}#${child.anchor}`} onClick={closeAll}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} onClick={closeAll} className={styles.topNavLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={closeAll}>
          <Image src="/logo.png" alt="Gifon" width={1000} height={1000} />
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>  
          {menuItems.map(item => (
            <div key={item.label} className={styles.navItem}>
              {item.children ? (
                <>  
                  <button
                    className={styles.navLinkButton}
                    onClick={() => handleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                  </button>
                  <ul className={`${styles.dropdownMenu} ${openDropdown === item.label ? styles.showDropdown : ''}`}>  
                    {item.children.map(child => (
                      <li key={child.anchor} className={styles.dropdownItem}>
                        <Link href={`${item.href}#${child.anchor}`} onClick={closeAll}>
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
