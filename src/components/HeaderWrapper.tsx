// components/HeaderWrapper.tsx
import Header, { MenuItem } from "./Header"; 
import { getDynamicEventsMenu } from "@/lib/get-nav-links";

export default async function HeaderWrapper() {
  
  // 1. Fetch the dynamic Events menu item
  const eventsMenuItem = await getDynamicEventsMenu();

  // 2. Define the Static menu items
  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
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
            { label: 'Our Partners', anchor: 'our-partners' } 
        ] 
    },
    { 
        label: 'Membership', 
        href: '/membership', 
        children: [ 
            { label: 'Why Join GIFON', anchor: 'why-join' }, 
            { label: 'Membership Categories', anchor: 'categories' }, 
            { label: 'Membership Benefits', anchor: 'benefits' }, 
            { label: 'Pioneer Members', anchor: 'pioneer' }, 
            { label: 'Membership Portal (Apply & Renew)', anchor: 'apply' } 
        ] 
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
                { label: 'National Geospatial Security Hub', link: '/education/geospatial-hub' }, 
                { label: 'Community Mapping', link: '/education/community-mapping' }, 
                { label: 'Open Data & Research', link: '/education/open-data' }, 
                { label: 'Conferences & Workshops', link: '/education/conferences' }, 
                { label: 'Training & Certification', link: '/education/training' } 
            ] }, 
            { label: 'Talent Development', anchor: 'talent' } 
        ] 
    },
    
    // 3. Insert the Dynamic Events Item here
    eventsMenuItem,

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
            { label: 'Downloads', anchor: 'Downloads' } 
        ] 
    },
    { 
        label: 'Areas of Support', 
        href: '/infrastructure', 
        children: [ 
            { label: 'Power and Energy', anchor: 'energy' }, 
            { label: 'Water', anchor: 'water' }, 
            { label: 'Information, Communications, Science and Technology (ICT)', anchor: 'communication' }, 
            { label: 'Banking, Finance and Insurance', anchor: 'finance' }, 
            { label: 'Health', anchor: 'health' }, 
            { label: 'Public Administration', anchor: 'government' }, 
            { label: 'Education', anchor: 'education' }, 
            { label: 'Defence and Security', anchor: 'defence' }, 
            { label: 'Transport', anchor: 'transportation' }, 
            { label: 'Food and Agriculture', anchor: 'food' }, 
            { label: 'Emergency Services', anchor: 'emergency' }, 
            { label: 'Industrial and Manufacturing', anchor: 'manufacturing' }, 
            { label: 'Mines and Steel', anchor: 'mines' }
        ]
    },
    // --- UPDATED SECTION START ---
    { 
        label: 'Groups & Forums', 
        href: '/forums', 
        children: [ 
            // Anchors updated to match your forums.tsx file
            { label: 'Young Professionals Forum', anchor: 'young-professionals' }, 
            { label: 'Women in GEOINT Forum', anchor: 'women-in-geoint' }, 
            { label: 'Industry & Private Sector Forum', anchor: 'industry-private-sector' }, 
            { label: 'Policy, Governance & Ethics', anchor: 'policy-governance-ethics' }, 
            { label: 'Academia & Research', anchor: 'academia-research' } 
        ] 
    },
    // --- UPDATED SECTION END ---
    { 
        label: 'Policies', 
        href: '/policies', 
        children: [ 
            { label: 'Code of Ethics', anchor: 'ethics' }, 
            { label: 'Anti-Corruption', anchor: 'anti-corruption' }, 
            { label: 'Fund Raising', anchor: 'fund-raising' }, 
            { label: 'Anti-Modern-Day Slavery', anchor: 'slavery' }, 
            { label: 'Volunteer & Internship', anchor: 'volunteer' } 
        ] 
    },
    { 
        label: 'Get Involved', 
        href: '/get-involved', 
        // children: [ { label: `Volunteer opportunities`, anchor: `opportunities`} ] 
    },
  ];

  // 4. Pass the fully constructed array to the Client Component
  return <Header navItems={menuItems} />;
}