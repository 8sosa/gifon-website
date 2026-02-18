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
        href: '/about-us', 
        children: [ 
            { label: 'Aim', anchor: 'aim' }, 
            { label: 'Mission', anchor: 'mission-vision' }, 
            { label: 'Vision', anchor: 'mission-vision' }, 
            { label: 'Objectives', anchor: 'objectives' }, 
            { label: 'Core Values', anchor: 'core-values' }, 
            { label: 'Founding Vision', anchor: 'founding-vision' }, 
            { label: 'Management Team', anchor: 'management-team' }, 
            { label: 'Our Partners', anchor: 'our-partners' } 
        ] 
    },
    { 
        label: 'Membership', 
        href: '/membership', 
        children: [ 
            { label: 'Why Join GIFON', anchor: 'why-join' }, 
            { label: 'Membership Application', anchor: 'categories' }, 
            { label: 'Membership Benefits', anchor: 'benefits' }, 
            { label: 'Pioneer Members', anchor: 'pioneer-members' }, 
        ] 
    },
    { 
        label: 'Education', 
        href: '/education', 
        children: [ 
            { label: 'Training', anchor: 'C-T' }, 
            { label: 'Programs', anchor: 'programs', children: [ 
                { label: 'Youth Empowerment & Talent Acceleration', link: '/education/youth-empowerment' }, 
                { label: 'Women in GEOINT', link: '/education/g-wings' }, 
                { label: 'Geoinnovation & Tech Incubation', link: '/education/Y-GITIP' }, 
                { label: 'National Geospatial Security Hub', link: '/education/geospatial-intelligence-hub' }, 
                { label: 'Community Mapping', link: '/education/community-mapping' }, 
                { label: 'Open Data & Research', link: '/education/open-data-research' }, 
                { label: 'Conferences & Workshops', link: '/education/conferences' }, 
                { label: 'Training & Certification', link: '/education/training' },
                { label: 'Academia & Research', link: '/education/academia' },
            ] }, 
            { label: 'Talent Development', anchor: 'talent' },
            { label: 'Scholarships', anchor: 'Scholarships' }
        ] 
    },
    
    // 3. Insert the Dynamic Events Item here
    eventsMenuItem,

    { 
        label: 'Media Resources', 
        href: '/media-resources', 
        children: [ 
            { label: 'News & Updates', anchor: 'News' }, 
            { label: 'Press Releases', anchor: 'Press' }, 
            { label: 'GeoINSIGHT Podcast', anchor: 'Podcast' }, 
            { label: 'Webinars & Masterclasses', anchor: 'Webinar' }, 
            { label: 'Publication Archive', anchor: 'publications' }, 
            { label: 'Photo & Video Gallery', anchor: 'Gallery' }, 
            { label: 'Downloads', anchor: 'Downloads' } 
        ] 
    },
    { 
        label: 'Business Solutions', 
        href: '/business-solutions', 
        children: [ 
            { label: 'Energy & Power', anchor: 'energy' }, 
            { label: 'Dams & Waterways', anchor: 'water' }, 
            { label: 'Transportation Systems', anchor: 'transportation' }, 
            { label: 'Communications & IT', anchor: 'communication' }, 
            { label: 'Defense Industrial Base', anchor: 'defence' }, 
            { label: 'Healthcare & Public Health', anchor: 'health' }, 
            { label: 'Emergency Services', anchor: 'emergency' }, 
            { label: 'Financial Services', anchor: 'finance' }, 
            { label: 'Food and Agriculture', anchor: 'food' }, 
            { label: 'Government Services', anchor: 'government' }, 
            { label: 'Chemical & Hazardous Materials', anchor: 'education' }, 
            { label: 'Critical Manufacturing & Industrial Facilities', anchor: 'manufacturing' }, 
            { label: 'Mines and Steel', anchor: 'mines'}
        ]
    },
    { 
        label: 'Groups & Forums', 
        href: '/forums', 
        children: [ 
            { label: 'Young Professionals Forum', anchor: 'young-professionals' }, 
            { label: 'Women in GEOINT Forum', anchor: 'women-in-geoint' },
            { label: 'Industry & Private Sector Group', link: '/forums/industry-private-sector' },
            { label: 'Policy, Governance & Ethics Group', link: '/forums/policy-governance-ethics' },
        ] 
    },
    // { 
    //     label: 'Policies', 
    //     href: '/policies', 
    //     children: [ 
    //         { label: 'Code of Ethics', anchor: 'ethics' }, 
    //         { label: 'Anti-Corruption', anchor: 'anti-corruption' }, 
    //         { label: 'Fund Raising', anchor: 'fund-raising' }, 
    //         { label: 'Anti-Modern-Day Slavery', anchor: 'slavery' }, 
    //         { label: 'Volunteer & Internship', anchor: 'volunteer' } 
    //     ] 
    // },
    // { 
    //     label: 'Get Involved', 
    //     href: '/get-involved', 
    //     // children: [ { label: `Volunteer opportunities`, anchor: `opportunities`} ] 
    // },
  ];

  // 4. Pass the fully constructed array to the Client Component
  return <Header navItems={menuItems} />;
}