"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaSearch, FaTimes, FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";

interface MenuItem {
  label: React.ReactNode;
  href?: string;
  anchor?: string;
  link?: string;
  children?: MenuItem[];
  onClick?: (e: React.MouseEvent) => void;
  colorClass?: string;
  hoverColorClass?: string;
}

// --- Hook: Detect Mobile ---
function useIsMobile(breakpoint = 1024) {
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

// --- Component: Dropdown Item (Handles Nested Timeout Logic) ---
function DropdownItem({
  child,
  parentHref,
  closeAll,
  depth,
  isMobile
}: {
  child: MenuItem;
  parentHref: string;
  closeAll: () => void;
  depth: number;
  isMobile: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasChildren = Boolean(child.children?.length);
  const href = child.link ?? (child.href ? child.href : `${parentHref}#${child.anchor ?? ""}`);

  // Handlers for Grace Period
  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms grace period
  };

  // Mobile Toggle
  const handleMobileClick = (e: React.MouseEvent) => {
    if (isMobile && hasChildren) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(!isOpen);
      return;
    }
    closeAll();
  };

  return (
    <li
      className={`relative ${!isMobile ? "group/item px-4 py-2 hover:bg-green-50" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between">
        <Link
          href={href}
          onClick={handleMobileClick}
          className={`
             block w-full text-sm font-medium transition-colors
             ${isMobile ? "text-gray-600 py-1" : "text-gray-700"}
             hover:text-green-700
          `}
        >
          {child.label}
        </Link>

        {hasChildren && (
          <button
            onClick={handleMobileClick}
            className={`p-2 text-gray-400 hover:text-green-600 ${!isMobile ? "hidden" : ""}`}
          >
            <FaChevronDown size={10} className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        )}
        {/* Desktop Chevron */}
        {hasChildren && !isMobile && (
          <FaChevronRight size={10} className="text-gray-400 ml-2" />
        )}
      </div>

      {/* Render Sub-Dropdown */}
      {hasChildren && (
        <div className={`${!isMobile && !isOpen ? "hidden" : ""} ${isMobile && !isOpen ? "hidden" : "block"}`}>
          <Dropdown
            items={child.children!}
            parentHref={parentHref}
            closeAll={closeAll}
            depth={depth + 1}
            isMobile={isMobile}
          />
        </div>
      )}
    </li>
  );
}

// --- Component: Dropdown Container ---
function Dropdown({
  items,
  parentHref,
  closeAll,
  depth = 0,
  isMobile
}: {
  items: MenuItem[];
  parentHref: string;
  closeAll: () => void;
  depth?: number;
  isMobile: boolean;
}) {
  return (
    <ul
      className={`
        ${isMobile
          ? "pl-4 border-l border-gray-100 space-y-2 mt-2"
          : "absolute top-full left-0 bg-white shadow-xl min-w-60 border-t-4 border-green-600 rounded-b-lg py-2"
        } 
        /* Adjusted positioning for nested items to overlap slightly and prevent gaps */
        ${!isMobile && depth > 0 ? "top-0 left-full -ml-1 -mt-2" : ""}
      `}
    >
      {items.map((child, idx) => (
        <DropdownItem
          key={`${child.label}-${idx}`}
          child={child}
          parentHref={parentHref}
          closeAll={closeAll}
          depth={depth}
          isMobile={isMobile}
        />
      ))}
    </ul>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Ref to hold the timeout ID for the root menu items
  const rootTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const navRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  // --- Handlers ---

  const closeAll = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (error) { console.error(error); }
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/');
    closeAll();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      alert(`You searched for: ${searchValue}`);
      setSearchValue("");
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        if (!isMobile) closeAll();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeAll, isMobile]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsLoggedIn(true);
  }, []);

  // --- Root Hover Logic with Timeout ---
  function handleRootEnter(label: string, hasChildren: boolean) {
    if (!hasChildren || isMobile) return;
    
    // Clear any pending close timer
    if (rootTimeoutRef.current) {
      clearTimeout(rootTimeoutRef.current);
    }
    setOpenDropdown(label);
  }

  function handleRootLeave() {
    if (isMobile) return;
    
    // Set a timer to close the menu. If the user moves mouse back in, 
    // handleRootEnter will clear this timer.
    rootTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 50); // 200ms delay
  }

  // --- Data (Condensed for brevity, kept structure) ---
  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about', children: [ { label: 'Aim', anchor: 'aim' }, { label: 'Mission', anchor: 'mission-vision' }, { label: 'Vision', anchor: 'mission-vision' }, { label: 'Objectives', anchor: 'objectives' }, { label: 'Core Values', anchor: 'core-values' }, { label: 'Board of Directors', anchor: 'board-directors' }, { label: 'Our Partners', anchor: 'our-partners' }, { label: 'Contact Us', anchor: 'contact' } ] },
    { label: 'Membership', href: '/membership', children: [ { label: 'Why Join GIFON', anchor: 'why-join' }, { label: 'Membership Categories', anchor: 'categories' }, { label: 'Membership Benefits', anchor: 'benefits' }, { label: 'Pioneer Members', anchor: 'pioneer' }, { label: 'Membership Portal (Apply & Renew)', anchor: 'apply' } ] },
    { label: 'Education', href: '/education', children: [ { label: 'Training', anchor: 'C-T' }, { label: 'Programmes', anchor: 'programs', children: [ { label: 'Youth Empowerment & Talent Acceleration', link: '/education/youth-empowerment' }, { label: 'Women in GEOINT (WINGS)', link: '/education/wings' }, { label: 'Geoinnovation & Tech Incubation', link: '/education/geoinnovation' }, { label: 'National Geospatial Security & Intelligence Hub', link: '/education/geospatial-hub' }, { label: 'Community Mapping for Development', link: '/education/community-mapping' }, { label: 'Open Data & Research', link: '/education/open-data' }, { label: 'Conferences, Workshops & Masterclasses', link: '/education/conferences' }, { label: 'Training & Certification', link: '/education/training' } ] }, { label: 'Talent Development', anchor: 'talent' } ] },
    { label: 'Events', href: '/events', children: [ { label: 'Upcoming Events', anchor: 'upcoming-events', children: [ { label: 'DGI London', anchor: 'dgi-london' }, { label: 'USGIF', anchor: 'usgif' }, { label: 'FIG', anchor: 'fig' }, { label: 'AAG', anchor: 'aag' }, { label: 'AARSE', anchor: 'aarse' }, { label: 'EIS-Africa', anchor: 'eis-africa' }, { label: 'GEOSON', anchor: 'geoson' }, { label: 'GIFON Pre-Launch', anchor: 'geoson' } ] }, { label: 'Past Events', anchor: 'past-events', children: [ { label: 'DGI 2024', anchor: 'dgi-london' }, { label: 'USGIF 2024', anchor: 'usgif' }, { label: 'FIG 2024', anchor: 'fig' }, { label: 'AAG 2024', anchor: 'aag' }, { label: 'AARSE 2024', anchor: 'aarse' }, { label: 'EIS-Africa 2024', anchor: 'eis-africa' }, { label: 'GEOSON 2024', anchor: 'geoson' } ] }, { label: 'Outreach', anchor: 'outreach', children: [ { label: 'Youth-Focused Programmes', anchor: 'youth-focused-programmes', children: [ { label: 'Boot Camps', anchor: 'boot-camps' }, { label: 'STEM & GEOINT Awareness Programmes', anchor: 'stem-geoint-awareness' }, { label: 'GeoInnovation Challenge / Hackathons', anchor: 'geoinnovation-challenge' } ] }, { label: 'Women-in-GEOINT Initiatives', anchor: 'women-in-geoint-initiatives', children: [ { label: 'Women in Geospatial Leadership Programmes', anchor: 'women-geospatial-leadership' }, { label: 'Community Service & Development Projects', anchor: 'community-service-projects' } ] }, { label: 'Professional & Institutional Engagement', anchor: 'professional-institutional-engagement', children: [ { label: 'GeoCommunity Development Programmes', anchor: 'geocommunity-development' }, { label: 'GeoConnect Networking Events', anchor: 'geoconnect-networking' }, { label: 'Public Lectures & Policy Roundtables', anchor: 'public-lectures-roundtables' } ] } ] } ] },
    { label: 'Media Resources', href: '/resources', children: [ { label: 'News', anchor: 'News' }, { label: 'Press Releases', anchor: 'Press' }, { label: 'Podcast', anchor: 'Podcast' }, { label: 'Webinar', anchor: 'Webinar' }, { label: 'Publication Archive', anchor: 'publications' }, { label: 'Photo & Video Gallery', anchor: 'Gallery' }, { label: 'Downloads', anchor: 'Downloads' } ] },
    { label: 'Infrastructure', href: '/infrastructure', children: [ { label: 'Energy', anchor: 'energy' }, { label: 'Transportation Systems', anchor: 'transportation' }, { label: 'Communications', anchor: 'communication' }, { label: 'Defense Industrial Base', anchor: 'defence' }, { label: 'Agriculture & Food Security', anchor: 'food' }, { label: 'Water & Dams', anchor: 'water' }, { label: 'Public Health', anchor: 'health' }, { label: 'Finance & Banking', anchor: 'finance' }, { label: 'Manufacturing', anchor: 'manufacturing' }, { label: 'Education', anchor: 'education' }, { label: 'Emergency Services', anchor: 'emergency' }, { label: 'Critical Manufacturing', anchor: 'industrial' }, { label: 'Govt. Facilities', anchor: 'government' }, { label: 'IT', anchor: 'it' }, { label: 'Space Systems', anchor: 'space' } ] },
    { label: 'Groups & Forums', href: '/forums', children: [ { label: 'Young Professionals Forum', anchor: 'young-professionals' }, { label: 'Women in GEOINT Forum', anchor: 'anti-corruption' }, { label: 'Industry & Private Sector Forum', anchor: 'fund-raising' }, { label: 'Policy Briefs & white Paper ', anchor: 'slavery' }, { label: 'Research Reports', anchor: 'volunteer' } ] },
    { label: 'Policies', href: '/policies', children: [ { label: 'Code of Ethics', anchor: 'ethics' }, { label: 'Anti-Corruption', anchor: 'anti-corruption' }, { label: 'Fund Raising', anchor: 'fund-raising' }, { label: 'Anti-Modern-Day Slavery', anchor: 'slavery' }, { label: 'Volunteer & Internship', anchor: 'volunteer' } ] },
    { label: 'Get Involved', href: '/get-involved', children: [ { label: `Volunteer opportunities`, anchor: `opportunities`} ] },
  ];

  const topBarItems: MenuItem[] = [
    { label: 'Contact', href: '/contact-us' },
    ...(isLoggedIn
      ? [ { label: 'Dashboard', href: '/dashboard' }, { label: 'Log Out', href: '#', onClick: handleLogout } ]
      : [ { label: 'Sign In', href: '/login' }, { label: 'Register', href: '/membership' } ]
    ),
  ];

  const socialItems: MenuItem[] = [
    { label: <FaXTwitter />, href: '#', colorClass: 'text-black', hoverColorClass: 'hover:text-gray-700' },
    { label: <FaFacebookF />, href: '#', colorClass: 'text-blue-600', hoverColorClass: 'hover:text-blue-800' },
    { label: <FaLinkedinIn />, href: '#', colorClass: 'text-blue-700', hoverColorClass: 'hover:text-blue-900' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md font-sans" ref={navRef}>
      {/* 1. TOP ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group" onClick={closeAll}>
                <div className="relative w-12 h-12 md:w-16 md:h-16 mr-3 transition-transform group-hover:scale-105">
                    <Image src="/logo.png" alt="Gifon" fill className="object-contain"/>
                </div>
                <div className="flex flex-col justify-center cooper">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 leading-none tracking-[0.2em] lg:tracking-[0.25em]">GIFON</h1>
                  <span className="text-[0.45rem] md:text-[0.65rem] lg:text-xs font-bold text-green-800 uppercase tracking-tight whitespace-nowrap">Geospatial Intelligence Foundation of Nigeria</span>
                </div>
            </Link>

            {/* Desktop Utilities */}
            <div className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-sm font-medium text-gray-600 border-r border-gray-300 pr-4">
                    {topBarItems.map((item, idx) => (
                        <Link key={idx} href={item.href!} onClick={item.onClick} className="hover:text-green-700 transition-colors">{item.label}</Link>
                    ))}
                </div>
                <div className="flex items-center space-x-3 text-sm">
                    {socialItems.map((item, idx) => (
                         <a key={idx} href={item.href} className={`${item.colorClass} ${item.hoverColorClass} transition-colors text-lg`}>{item.label}</a>
                    ))}
                </div>
                <button onClick={() => setIsSearchOpen(true)} className="text-gray-500 hover:text-green-700 transition-colors"><FaSearch size={18} /></button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center lg:hidden gap-4">
                <button onClick={() => setIsSearchOpen(true)} className="text-gray-600 hover:text-green-700"><FaSearch size={20} /></button>
                <button className="text-gray-800 hover:text-green-700 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>
        </div>
      </div>

      {/* 2. DESKTOP MAIN NAVIGATION */}
      <div className="hidden lg:block border-t border-gray-100 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between items-center py-2">
                {menuItems.map((item) => {
                    const hasChildren = Boolean(item.children?.length);
                    const isOpen = openDropdown === item.label;

                    return (
                        <div 
                            key={item.label as string} 
                            className="relative group h-full"
                            // Using the new handler with timeout logic
                            onMouseEnter={() => handleRootEnter(item.label as string, hasChildren)}
                            onMouseLeave={handleRootLeave}
                        >
                            <Link
                                href={item.href ?? "#"}
                                className={`
                                    flex items-center py-3 px-3 text-[0.5rem] xl:text-[0.7rem] font-bold uppercase tracking-wide transition-colors cooper
                                    ${isOpen ? "text-green-300" : "text-gray-200 hover:text-green-300"}
                                `}
                                onClick={closeAll}
                            >
                                {item.label}
                                {hasChildren && <FaChevronDown size={10} className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                            </Link>

                            {/* Dropdown Container */}
                            {hasChildren && isOpen && (
                                <Dropdown 
                                    items={item.children ?? []} 
                                    parentHref={item.href ?? "#"} 
                                    closeAll={closeAll}
                                    isMobile={false}
                                />
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER (Unchanged logic, just simplified JSX for brevity) */}
      <div className={`fixed inset-y-0 right-0 w-[85%] sm:w-[350px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full overflow-y-auto pb-20">
              <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-green-50">
                  <h2 className="text-lg font-bold text-green-800">Menu</h2>
                  <button onClick={closeAll} className="text-gray-500 hover:text-red-500"><FaTimes size={24} /></button>
              </div>
              <div className="p-4 space-y-1">
                  {menuItems.map((item, idx) => {
                       const hasChildren = Boolean(item.children?.length);
                       const isOpen = openDropdown === item.label;
                       return (
                           <div key={idx} className="border-b border-gray-50 last:border-0 pb-2 mb-2">
                               <div className="flex justify-between items-center">
                                   <Link 
                                       href={item.href ?? "#"} 
                                       className="text-base font-bold text-gray-800 py-2 block grow hover:text-green-700"
                                       onClick={(e) => { if(hasChildren) { e.preventDefault(); setOpenDropdown(isOpen ? null : item.label as string); } else { closeAll(); } }}
                                   >
                                       {item.label}
                                   </Link>
                                   {hasChildren && (
                                       <button onClick={() => setOpenDropdown(isOpen ? null : item.label as string)} className="p-3 text-gray-400">
                                           <FaChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                       </button>
                                   )}
                               </div>
                               {hasChildren && isOpen && ( <Dropdown items={item.children ?? []} parentHref={item.href ?? "#"} closeAll={closeAll} isMobile={true} /> )}
                           </div>
                       )
                  })}
              </div>
              {/* Mobile Footer Area */}
              <div className="p-5 bg-gray-50 mt-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                      {topBarItems.map((item, idx) => ( <Link key={idx} href={item.href!} onClick={(e) => { if(item.onClick) item.onClick(e); closeAll(); }} className="text-sm font-medium text-gray-600 bg-white py-2 px-3 rounded shadow-sm text-center hover:text-green-700">{item.label}</Link> ))}
                  </div>
                  <div className="flex justify-center space-x-6">
                      {socialItems.map((item, idx) => ( <a key={idx} href={item.href} className={`${item.colorClass} text-xl`}>{item.label}</a> ))}
                  </div>
              </div>
          </div>
      </div>
      {mobileMenuOpen && ( <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeAll}></div> )}

      {/* 4. SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-60 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
            <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors" onClick={() => setIsSearchOpen(false)}><FaTimes size={32} /></button>
            <div className="w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Search GIFON</h2>
                <form onSubmit={handleSearchSubmit} className="relative">
                    <input type="search" autoFocus value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="What are you looking for?" className="w-full text-xl md:text-2xl border-b-2 border-gray-300 py-4 pr-12 bg-transparent focus:outline-none focus:border-green-600 transition-colors placeholder-gray-400" />
                    <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"><FaSearch size={28} /></button>
                </form>
            </div>
        </div>
      )}
    </header>
  );
}