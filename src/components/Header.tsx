"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "@/styles/Header.module.css";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaSearch, FaTimes } from "react-icons/fa"; // Added FaTimes

interface MenuItem {
  // --- CHANGE 1: Allow label to be a string OR a React element ---
  label: React.ReactNode;
  href?: string;
  anchor?: string;
  link?: string;
  children?: MenuItem[];
  onClick?: (e: React.MouseEvent) => void; // For search button
  colorClass?: string; // For social icons
  hoverColorClass?: string; // For social icons
}

function useIsMobile(breakpoint = 768) {
  // Same mobile detection hook
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
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
        const hasChildren = Boolean(child.children?.length);
        const isOpen = openChild === child.label;
        return (
          <li
            key={`${child.label}-${idx}`}
            className={styles.dropdownItem}
            data-open={isOpen ? "true" : "false"}
            onMouseEnter={() => {
              if (!isMobile) setOpenChild(child.label as string);
            }}
            onMouseLeave={() => {
              if (!isMobile)
                setOpenChild((prev) =>
                  prev === child.label ? null : prev
                );
            }}
            onFocus={() => {
              if (!isMobile) setOpenChild(child.label as string);
            }}
            onBlur={() => {
              if (!isMobile)
                setOpenChild((prev) =>
                  prev === child.label ? null : prev
                );
            }}
          >
            <div className={styles.dropdownLinkRow}>
              <Link
                href={child.link ?? `${parentHref}#${child.anchor ?? ""}`}
                onClick={(e) => {
                  if (isMobile && hasChildren) {
                    e.preventDefault();
                    setOpenChild((prev) =>
                      prev === child.label ? null : (child.label as string)
                    );
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
                    setOpenChild((prev) =>
                      prev === child.label ? null : (child.label as string)
                    );
                  }}
                  className={styles.dropdownToggle}
                >
                  ▸
                </button>
              )}
            </div>
            {hasChildren && (
              <div
                className={`${styles.subDropdown} ${
                  isOpen ? " " + styles.showDropdown : ""
                }`}
              >
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
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [bottomMenuOpen, setBottomMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  
  // --- NEW STATE FOR SEARCH ---
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const NAV_TOLERANCE = 6;
  const navRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();
  
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call our new API endpoint
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error("Logout API call failed", error);
    }
    
    // Do this regardless of API success, to log the user out on the client
    localStorage.removeItem('user'); // Remove user data
    setIsLoggedIn(false);
    router.push('/'); // Redirect to home
    closeAll();
  };

  const closeAll = useCallback(() => {
    setTopMenuOpen(false);
    setBottomMenuOpen(false);
    setOpenDropdown(null);
    // Don't close search here, it's independent
  }, []);

  // --- NEW SEARCH HANDLERS ---
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      alert(`You searched for: ${searchValue}`);
      // Implement your search logic here, e.g., router.push(`/search?q=${searchValue}`)
      setSearchValue("");
      setIsSearchOpen(false);
    }
  };

  const toggleTopMenu = () => setTopMenuOpen(prev => !prev);
  const toggleBottomMenu = () => setBottomMenuOpen(prev => !prev);
  const [hoveredRoot, setHoveredRoot] = useState<string | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node))
        closeAll();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAll]);

  useEffect(() => {
    // This runs only on the client, after the component mounts
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleRootEnter(
    e: React.MouseEvent,
    label: string,
    hasChildren: boolean
  ) {
    if (!hasChildren) return;
    const nav = navRef.current;
    if (!nav) return;
    const rect = nav.getBoundingClientRect();
    if (e.clientY <= rect.bottom + NAV_TOLERANCE) {
      setHoveredRoot(label);
      if (!isMobile) setOpenDropdown(label);
    }
  }

  function handleRootLeave() {
    setHoveredRoot(null);
    if (!isMobile) setOpenDropdown(null);
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
        { label: 'Mission', anchor: 'mission-vision' },
        { label: 'Vision', anchor: 'mission-vision' },
        { label: 'Objectives', anchor: 'objectives' },
        { label: 'Core Values', anchor: 'core-values' },
        { label: 'Board of Directors', anchor: 'board-directors' },
        { label: 'Our Partners', anchor: 'our-partners' },
        { label: 'Contact Us', anchor: 'contact' },
      ],
    },
    {
      label: 'Membership',
      href: '/membership',
      children: [
        { label: 'Why Join GIFON', anchor: 'why-join' },
        { label: 'Membership Categories', anchor: 'categories' },
        { label: 'Membership Benefits', anchor: 'benefits' },
        { label: 'Membership Portal (Apply & Renew)', anchor: 'apply' },
      ],
    },
    {
      label: 'Education',
      href: '/education',
      children: [
        { label: 'Training', anchor: 'C-T' },
        { label: 'Programmes', anchor: 'programs', children: [
              { label: 'Youth Empowerment & Talent Acceleration', link: '/education/youth-empowerment' },
              { label: 'Women in GEOINT (WINGS)', link: '/education/wings' },
              { label: 'Geoinnovation & Tech Incubation', link: '/education/geoinnovation' },
              { label: 'National Geospatial Security & Intelligence Hub', link: '/education/geospatial-hub' },
              { label: 'Community Mapping for Development', link: '/education/community-mapping' },
              { label: 'Open Data & Research', link: '/education/open-data' },
              { label: 'Conferences, Workshops & Masterclasses', link: '/education/conferences' },
              { label: 'Training & Certification', link: '/education/training' },
            ],
        },
        { label: 'Talent Development', anchor: 'talent' },
      ],
    },
    { 
      label: 'Events', 
      href: '/events',
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
            { label: 'DGI 2024', anchor: 'dgi-london' },
            { label: 'USGIF 2024', anchor: 'usgif' },
            { label: 'FIG 2024', anchor: 'fig' },
            { label: 'AAG 2024', anchor: 'aag' },
            { label: 'AARSE 2024', anchor: 'aarse' },
            { label: 'EIS-Africa 2024', anchor: 'eis-africa' },
            { label: 'GEOSON 2024', anchor: 'geoson' },
          ]  
        },
        {
          label: 'Outreach',
          anchor: 'outreach',
          children: [
            {
              label: 'Youth-Focused Programmes',
              anchor: 'youth-focused-programmes',
              children: [
                { label: 'Boot Camps', anchor: 'boot-camps' },
                { label: 'STEM & GEOINT Awareness Programmes', anchor: 'stem-geoint-awareness' },
                { label: 'GeoInnovation Challenge / Hackathons', anchor: 'geoinnovation-challenge' }
              ]
            },
            {
              label: 'Women-in-GEOINT Initiatives',
              anchor: 'women-in-geoint-initiatives',
              children: [
                { label: 'Women in Geospatial Leadership Programmes', anchor: 'women-geospatial-leadership' },
                { label: 'Community Service & Development Projects', anchor: 'community-service-projects' }
              ]
            },
            {
              label: 'Professional & Institutional Engagement',
              anchor: 'professional-institutional-engagement',
              children: [
                { label: 'GeoCommunity Development Programmes', anchor: 'geocommunity-development' },
                { label: 'GeoConnect Networking Events', anchor: 'geoconnect-networking' },
                { label: 'Public Lectures & Policy Roundtables', anchor: 'public-lectures-roundtables' }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Media Resources',
      href: '/resources',
      children: [
        { label: 'News', anchor: 'News' },
        { label: 'Press Releases', anchor: 'Press' },
        { label: 'Podcast', anchor: 'Podcast' },
        { label: 'Webinar', anchor: 'Webinar' },
        { label: 'Publication Archive', anchor: 'publications' },
        { label: 'Photo & Video Gallery', anchor: 'Gallery' },
        { label: 'Downloads', anchor: 'Downloads' },
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
    { 
      label: 'Groups & Forums',
      href: '/forums',
      children: [
        { label: 'Young Professionals Forum', anchor: 'young-professionals' },
        { label: 'Women in GEOINT Forum', anchor: 'anti-corruption' },
        { label: 'Industry & Private Sector Forum', anchor: 'fund-raising' },
        { label: 'Policy Briefs & white Paper ', anchor: 'slavery' },
        { label: 'Research Reports', anchor: 'volunteer' },
      ]
    },
    { 
      label: 'Policies',
      href: '/policies',
      children: [
        { label: 'Code of Ethics', anchor: 'ethics' },
        { label: 'Anti-Corruption', anchor: 'anti-corruption' },
        { label: 'Fund Raising', anchor: 'fund-raising' },
        { label: 'Anti-Modern-Day Slavery', anchor: 'slavery' },
        { label: 'Volunteer & Internship', anchor: 'volunteer' },
      ]
    },
    {
      label: 'Get Involved',
      href: '/donate',
      children: [
        { label: `Volunteer opportunities`, anchor: `opportunities`}
      ]
    },
  ];

  // --- UPDATED topBarItemsBase ---
  const topBarItemsBase: MenuItem[] = [
    {
      label: 'Contact Us',
      href: '/contact-us'
    },
    ...(isLoggedIn
      ? [ // If logged in...
          {
            label: 'Dashboard',
            href: '/dashboard' // Or '/admin/dashboard', etc.
          },
          {
            label: 'Log Out',
            href: '#', // href is just a placeholder
            onClick: handleLogout
          }
        ]
      : [ // If logged out...
          {
            label: 'Sign In',
            href: '/login'
          },
          {
            label: 'Register',
            href: '/membership',
          },
        ]
    ),
    {
      label: <FaSearch />,
      href: '/#', // Href is now just a placeholder
      onClick: (e) => { e.preventDefault(); }, // Will be handled by state
    },
    {
      label: <FaXTwitter />,
      href: '#',
      colorClass: 'text-black',
      hoverColorClass: 'hover:text-black'
    },
    {
      label: <FaFacebookF />,
      href: '#',
      colorClass: 'text-blue-600',
      hoverColorClass: 'hover:text-blue-600'
    },
    {
      label: <FaLinkedinIn />,
      href: '#',
      colorClass: 'text-blue-700',
      hoverColorClass: 'hover:text-blue-700'
    },
  ];
  return (
    <header className={styles.header} ref={navRef}>
      {/* Main Navbar */}
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={closeAll}>
          <Image src="/logo.png" alt="Gifon" width={1000} height={800} className={styles.logoPng}/>
          <div className="flex flex-col justify-center cooper">
            <h1 className="text-8xl font-bold green">GIFON</h1>
            <span className="text-md pl-6 font-md green">Geospatial Intelligence Foundation of Nigeria</span>
          </div>
        </Link>

        {/* Top Menu Offcanvas */}
        <button
          className={styles.menuToggle}
          onClick={toggleTopMenu}
          aria-label="Toggle top menu"
        >
          ☰
        </button>

        {/* --- UPDATED NAVIGATION --- */}
        <nav className={`cooper ${styles.topMenu} ${topMenuOpen ? styles.show : ""}`}>
          {topBarItemsBase.map((item, idx) => {
            
            // --- CHANGE 2: Type-safe way to check for the Search icon ---
            const isSearch = React.isValidElement(item.label) && item.label.type === FaSearch;
            
            // Check if item has a color class (is a social icon)
            const isSocial = !!item.colorClass;

            const linkClass = isSocial 
              ? `${styles.topNavIcon} ${item.colorClass} ${item.hoverColorClass}`
              : isSearch
              ? styles.topNavIcon // Special class for icons
              : styles.topNavLink; // Default for text links

            const clickHandler = isSearch
              ? (e: React.MouseEvent) => { e.preventDefault(); setIsSearchOpen(true); }
              : item.onClick
              ? item.onClick
              : closeAll;

            return (
              <div key={idx} className={styles.navItem}>
                <Link
                  href={item.href!}
                  onClick={clickHandler}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
      
      {/* Bottom Menu Offcanvas */}
      <div className={styles.topBar}>
        <button
          className={`${styles.menuToggle1} ${styles.menuToggle}`}
          onClick={toggleBottomMenu}
          aria-label="Toggle bottom menu"
        >
          ☰
        </button>

        <nav className={`cooper ${styles.navLinks} ${bottomMenuOpen ? styles.show : ""}`}>
          {menuItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen =
              openDropdown === item.label && hoveredRoot === item.label;

            return (
              <div key={item.label as string} className={styles.navItem}>
                <Link
                  href={item.href ?? "#"}
                  className={styles.navLink}
                  onMouseEnter={(e) => handleRootEnter(e, item.label as string, hasChildren)}
                  onMouseLeave={handleRootLeave}
                  onClick={(e) => {
                    if (isMobile && hasChildren) {
                      e.preventDefault();
                      setOpenDropdown((prev) => (prev === item.label ? null : (item.label as string)));
                      return;
                    }
                    closeAll();
                  }}
                >
                  {item.label}
                </Link>

                {hasChildren && isOpen && (
                  <div
                    className={`${styles.dropdownWrapper} ${styles.showDropdown}`}
                    onMouseEnter={(e) => handleRootEnter(e, item.label as string, hasChildren)}
                    onMouseLeave={handleRootLeave}
                  >
                    <Dropdown items={item.children ?? []} parentHref={item.href ?? "#"} closeAll={closeAll} />
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* --- NEW SEARCH MODAL --- */}
      {isSearchOpen && (
        <div className={styles.searchOverlay} onClick={() => setIsSearchOpen(false)}>
          <button 
            className={styles.searchCloseBtn} 
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
          >
            <FaTimes size={24} />
          </button>
          <div className={styles.searchBox} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="search"
                autoFocus
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Type to search..."
                className={styles.searchInput}
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
}