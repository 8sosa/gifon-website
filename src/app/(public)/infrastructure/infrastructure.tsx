import { JSX } from 'react';
import {
  FaBolt,
  FaCar,
  FaBroadcastTower,
  FaWater,
  FaHeartbeat,
  FaUniversity,
  FaLandmark,
  FaTractor,
  FaShieldAlt,
  FaIndustry,
  FaFirstAid,
  FaGraduationCap,
  FaSatellite, 
  FaNetworkWired,
} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';

export interface Sector {
  id: string;
  title: string;
  icon: JSX.Element;
  summary: string;
  description: string;
  image: string;
  highlights: readonly string[];
}

// We export 'sections' as a Record for easy ID lookups (sections.energy)
export const sections: Record<string, Sector> = {
  energy: {
    id: 'energy',
    title: 'Energy',
    icon: <FaBolt size={24} />,
    summary: 'Mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets.',
    description: `Apply GEOINT for mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets. Support early warning for vandalism, illegal tapping, and sabotage. Enhance site planning for future energy infrastructure and off-grid solutions.`,
    image: '/media/energy.jpg',
    highlights: [
      'Power grid & pipeline monitoring',
      'Early warning for sabotage',
      'Future infrastructure site planning',
    ],
  },
  transportation: {
    id: 'transportation',
    title: 'Transportation Systems',
    icon: <FaCar size={24} />,
    summary: 'Spatial analysis for air, road, rail, and maritime networks and logistics.',
    description: `Provide spatial analysis for air, road, rail, and maritime networks. Optimize traffic management, logistics, and accident prevention. Support secure navigation and border monitoring for aviation and maritime safety.`,
    image: '/media/aviation.jpg',
    highlights: [
      'Traffic management & logistics',
      'Accident prevention analysis',
      'Secure navigation & border monitoring',
    ],
  },
  communication: {
    id: 'communication',
    title: 'Communications',
    icon: <FaBroadcastTower size={24} />,
    summary: 'Siting and protection of telecom towers, fibre networks, and ICT hubs.',
    description: `Use geospatial data for siting and protection of telecom towers, fibre networks, and ICT hubs. Support redundancy planning to avoid single points of failure. Enable location-based intelligence to secure cyber and physical communication assets.`,
    image: '/media/Comunication.jpg',
    highlights: [
      'Telecom & fiber network protection',
      'Redundancy planning',
      'Cyber-physical asset security',
    ],
  },
  defence: {
    id: 'defence',
    title: 'Defense Industrial Base',
    icon: <FaShieldAlt size={24} />,
    summary: 'Advanced mapping and terrain analysis for military logistics and operations.',
    description: `Provide advanced mapping and terrain analysis for military logistics and operations. Support secure defence manufacturing zones through geospatial risk assessment. Contribute to defence readiness with real-time intelligence for operational planning.`,
    image: '/media/defence.jpg',
    highlights: [
      'Military logistics mapping',
      'Secure manufacturing zones',
      'Real-time operational intelligence',
    ],
  },
  food: {
    id: 'food',
    title: 'Agriculture and Food Security',
    icon: <FaTractor size={24} />,
    summary: 'Earth observation for crop monitoring, yield forecasting, and climate adaptation.',
    description: `Use earth observation for crop monitoring, yield forecasting, and climate adaptation. Strengthen food security through land use analysis and supply chain visibility. Detect and prevent illegal land grabs and encroachment on agricultural reserves.`,
    image: '/media/Food Security (1).jpg',
    highlights: [
      'Crop monitoring & yield forecasting',
      'Supply chain visibility',
      'Prevention of illegal land grabs',
    ],
  },
  water: {
    id: 'water',
    title: 'Water and Dams',
    icon: <FaWater size={24} />,
    summary: 'Monitoring rivers, dams, and irrigation systems with flood risk modelling.',
    description: `Map and monitor rivers, dams, and irrigation systems. Provide flood risk modelling and disaster preparedness solutions. Enhance water quality monitoring and equitable access through spatial intelligence.`,
    image: '/media/water and environment.jpg',
    highlights: [
      'Dam & irrigation monitoring',
      'Flood risk modelling',
      'Water quality access',
    ],
  },
  health: {
    id: 'health',
    title: 'Public Health and Healthcare',
    icon: <FaHeartbeat size={24} />,
    summary: 'GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns.',
    description: `Use GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns. Support healthcare infrastructure planning and accessibility analysis. Provide real-time data for emergency response and disaster medicine.`,
    image: '/bg/d.jpg',
    highlights: [
      'Disease outbreak mapping',
      'Healthcare accessibility analysis',
      'Disaster medicine data',
    ],
  },
  finance: {
    id: 'finance',
    title: 'Finance and Banking',
    icon: <FaUniversity size={24} />,
    summary: 'Location-based intelligence for ATM siting and tracking illicit transactions.',
    description: `Strengthen financial security through location-based intelligence for ATM and branch siting. Support anti-fraud operations by tracking geospatial patterns of illicit transactions. Map financial inclusion gaps to guide policy and private investment.`,
    image: '/bg/a.jpg',
    highlights: [
      'ATM & branch siting',
      'Anti-fraud transaction tracking',
      'Financial inclusion mapping',
    ],
  },
  manufacturing: {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: <FaGears size={24} />,
    summary: 'Supply chain risk management and industrial park planning analytics.',
    description: `Use geospatial intelligence for supply chain risk management. Provide location analytics for industrial park planning and monitoring. Support resilience of manufacturing assets against natural and man-made hazards.`,
    image: '/bg/d.jpg',
    highlights: [
      'Supply chain risk management',
      'Industrial park planning',
      'Hazard resilience support',
    ],
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: <FaGraduationCap size={24} />,
    summary: 'Planning equitable distribution of schools and strengthening STEM programs.',
    description: `Support planning and equitable distribution of schools and research centers. Use spatial data to strengthen STEM and geospatial education programs. Facilitate research collaborations with academia and global geospatial partners.`,
    image: '/media/education.jpg',
    highlights: [
      'School distribution planning',
      'STEM & Geospatial programs',
      'Global research collaboration',
    ],
  },
  emergency: {
    id: 'emergency',
    title: 'Emergency Services',
    icon: <FaFirstAid size={24} />,
    summary: 'Real-time situational awareness for disaster response and recovery.',
    description: `Provide real-time situational awareness for disaster response and recovery. Optimize deployment of fire, rescue, and law enforcement services. Support search and rescue missions with satellite and drone imagery.`,
    image: '/bg/c.jpg',
    highlights: [
      'Disaster response awareness',
      'Deployment optimization',
      'Satellite & drone search missions',
    ],
  },
  industrial: {
    id: 'industrial',
    title: 'Critical Manufacturing & Industrial Processes',
    icon: <FaIndustry size={24} />,
    summary: 'Monitoring chemical, pharmaceutical, and heavy industry facilities.',
    description: `Monitor chemical, pharmaceutical, and heavy industry facilities for safety and compliance. Provide GEOINT for early detection of industrial hazards and environmental risks. Strengthen resilience of production hubs through geospatial risk modeling.`,
    image: '/bg/b.jpg',
    highlights: [
      'Heavy industry monitoring',
      'Hazard & environmental risk detection',
      'Resilience modeling',
    ],
  },
  government: {
    id: 'government',
    title: 'Government Facilities & National Monuments',
    icon: <FaLandmark size={24} />,
    summary: 'Mapping, monitoring, and securing federal/state government facilities.',
    description: `Map, monitor, and secure federal/state government facilities. Support continuity of government planning using spatial risk assessments. Provide GEOINT for the protection of national monuments, heritage sites, and strategic assets.`,
    image: '/bg/b.jpg',
    highlights: [
      'Facility security mapping',
      'Continuity planning',
      'Heritage site protection',
    ],
  },
  // Kept IT and Space as they are often required for app logic, 
  // but they are not in the top 13 list provided in the text.
  // it: {
  //   id: 'it',
  //   title: 'Information Technology',
  //   icon: <FaNetworkWired size={24} />,
  //   summary: 'Mapping digital infrastructure and enhancing cybersecurity resilience.',
  //   description: `The IT sector underpins nearly every aspect of modern infrastructure, and geospatial intelligence enhances its security and efficiency. Mapping data centers, fiber routes, and internet exchange points helps identifying physical vulnerabilities that could impact digital connectivity.`,
  //   image: '/media/ict.jpg',
  //   highlights: ['Data center mapping', 'Geographic redundancy planning', 'Cyber-physical threat analysis'],
  // },
  // space: {
  //   id: 'space',
  //   title: 'Space & Satellite Systems',
  //   icon: <FaSatellite size={24} />,
  //   summary: 'Protecting satellites and advancing space-based GEOINT capabilities.',
  //   description: `Space and satellite systems form the foundation of modern geospatial intelligence, enabling global navigation, communication, and earth observation. Monitoring orbital assets and space weather is essential to maintaining the integrity of the GEOINT infrastructure itself.`,
  //   image: '/bg/a.jpg',
  //   highlights: ['Satellite monitoring', 'Orbital debris tracking', 'Space weather resilience'],
  // },
} as const;

export type SectionId = keyof typeof sections;

// Helper array for looping
export const infrastructureList = Object.values(sections);

export default sections;