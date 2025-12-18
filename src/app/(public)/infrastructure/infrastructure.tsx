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
  FaFirstAid,
  FaGraduationCap,
} from 'react-icons/fa';
import { FaGears, FaHammer } from 'react-icons/fa6'; // Added FaHammer for Mines

export interface Sector {
  id: string;
  title: string;
  icon: JSX.Element;
  summary: string;
  description: string;
  image: string;
  highlights: readonly string[];
}

export const sections: Record<string, Sector> = {
  energy: {
    id: 'energy',
    title: 'Power and Energy',
    icon: <FaBolt size={24} />,
    summary: 'Mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets.',
    description: `Apply GEOINT for mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets. Support early warning for vandalism, illegal tapping, and sabotage. Enhance site planning for future energy infrastructure and off-grid solutions.`,
    image: '/media/energy.jpeg',
    highlights: [
      'Apply GEOINT for mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets.',
      'Support early warning for vandalism, illegal tapping, and sabotage.',
      'Enhance site planning for future energy infrastructure and off-grid solutions.',
    ],
  },
  water: {
    id: 'water',
    title: 'Water',
    icon: <FaWater size={24} />,
    summary: 'Monitoring rivers, dams, and irrigation systems with flood risk modelling.',
    description: `Map and monitor rivers, dams, and irrigation systems. Provide flood risk modelling and disaster preparedness solutions. Enhance water quality monitoring and equitable access through spatial intelligence.`,
    image: '/media/waterrrr.jpeg',
    highlights: [
      'Map and monitor rivers, dams, and irrigation systems.',
      'Provide flood risk modelling and disaster preparedness solutions.',
      'Enhance water quality monitoring and equitable access through spatial intelligence.',
    ],
  },
  communication: {
    id: 'communication',
    title: 'Information, Communications, Science and Technology (ICT)',
    icon: <FaBroadcastTower size={24} />,
    summary: 'Siting and protection of telecom towers, fibre networks, and ICT hubs.',
    description: `Use geospatial data for siting and protection of telecom towers, fibre networks, and ICT hubs. Support redundancy planning to avoid single points of failure. Enable location-based intelligence to secure cyber and physical communication assets.`,
    image: '/media/Comunication.jpg',
    highlights: [
      'Use geospatial data for siting and protection of telecom towers, fibre networks, and ICT hubs.',
      'Support redundancy planning to avoid single points of failure.',
      'Enable location-based intelligence to secure cyber and physical communication assets.',
    ],
  },
  finance: {
    id: 'finance',
    title: 'Banking, Finance and Insurance',
    icon: <FaUniversity size={24} />,
    summary: 'Location-based intelligence for ATM siting and tracking illicit transactions.',
    description: `Strengthen financial security through location-based intelligence for ATM and branch siting. Support anti-fraud operations by tracking geospatial patterns of illicit transactions. Map financial inclusion gaps to guide policy and private investment.`,
    image: '/media/Banking and finance.jpeg',
    highlights: [
      'Strengthen financial security through location-based intelligence for ATM and branch siting.',
      'Support anti-fraud operations by tracking geospatial patterns of illicit transactions.',
      'Map financial inclusion gaps to guide policy and private investment.',
    ],
  },
  health: {
    id: 'health',
    title: 'Health',
    icon: <FaHeartbeat size={24} />,
    summary: 'GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns.',
    description: `Use GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns. Support healthcare infrastructure planning and accessibility analysis. Provide real-time data for emergency response and disaster medicine.`,
    image: '/media/HealthCare.jpg',
    highlights: [
      'Use GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns.',
      'Support healthcare infrastructure planning and accessibility analysis.',
      'Provide real-time data for emergency response and disaster medicine.',
    ],
  },
  government: {
    id: 'government',
    title: 'Public Administration',
    icon: <FaLandmark size={24} />,
    summary: 'Mapping, monitoring, and securing federal/state government facilities.',
    description: `Map, monitor, and secure federal/state government facilities. Support continuity of government planning using spatial risk assessments. Provide GEOINT for the protection of national monuments, heritage sites, and strategic assets.`,
    image: '/media/pa.jpeg',
    highlights: [
      'Map, monitor, and secure federal/state government facilities.',
      'Support continuity of government planning using spatial risk assessments.',
      'Provide GEOINT for the protection of national monuments, heritage sites, and strategic assets.',
    ],
  },
  education: {
    id: 'education',
    title: 'Education',
    icon: <FaGraduationCap size={24} />,
    summary: 'Planning equitable distribution of schools and strengthening STEM programs.',
    description: `Support planning and equitable distribution of schools and research centers. Use spatial data to strengthen STEM and geospatial education programs. Facilitate research collaborations with academia and global geospatial partners.`,
    image: '/media/edu.jpeg',
    highlights: [
      'Support planning and equitable distribution of schools and research centers.',
      'Use spatial data to strengthen STEM and geospatial education programs.',
      'Facilitate research collaborations with academia and global geospatial partners.',
    ],
  },
  defence: {
    id: 'defence',
    title: 'Defence and Security',
    icon: <FaShieldAlt size={24} />,
    summary: 'Advanced mapping and terrain analysis for military logistics and operations.',
    description: `Provide advanced mapping and terrain analysis for military logistics and operations. Support secure defence manufacturing zones through geospatial risk assessment. Contribute to defence readiness with real-time intelligence for operational planning.`,
    image: '/media/defense.jpeg',
    highlights: [
      'Provide advanced mapping and terrain analysis for military logistics and operations.',
      'Support secure defence manufacturing zones through geospatial risk assessment.',
      'Contribute to defence readiness with real-time intelligence for operational planning.',
    ],
  },
  transportation: {
    id: 'transportation',
    title: 'Transport',
    icon: <FaCar size={24} />,
    summary: 'Spatial analysis for air, road, rail, and maritime networks and logistics.',
    description: `Provide spatial analysis for air, road, rail, and maritime networks. Optimize traffic management, logistics, and accident prevention. Support secure navigation and border monitoring for aviation and maritime safety.`,
    image: '/media/Transport.jpg',
    highlights: [
      'Provide spatial analysis for air, road, rail, and maritime networks.',
      'Optimize traffic management, logistics, and accident prevention.',
      'Support secure navigation and border monitoring for aviation and maritime safety.',
    ],
  },
  food: {
    id: 'food',
    title: 'Food and Agriculture',
    icon: <FaTractor size={24} />,
    summary: 'Earth observation for crop monitoring, yield forecasting, and climate adaptation.',
    description: `Use earth observation for crop monitoring, yield forecasting, and climate adaptation. Strengthen food security through land use analysis and supply chain visibility. Detect and prevent illegal land grabs and encroachment on agricultural reserves.`,
    image: '/media/agriculture.jpeg',
    highlights: [
      'Use earth observation for crop monitoring, yield forecasting, and climate adaptation.',
      'Strengthen food security through land use analysis and supply chain visibility.',
      'Detect and prevent illegal land grabs and encroachment on agricultural reserves.',
    ],
  },
  emergency: {
    id: 'emergency',
    title: 'Emergency Services',
    icon: <FaFirstAid size={24} />,
    summary: 'Real-time situational awareness for disaster response and recovery.',
    description: `Provide real-time situational awareness for disaster response and recovery. Optimize deployment of fire, rescue, and law enforcement services. Support search and rescue missions with satellite and drone imagery.`,
    image: '/media/Emergency Services.jpg',
    highlights: [
      'Provide real-time situational awareness for disaster response and recovery.',
      'Optimize deployment of fire, rescue, and law enforcement services.',
      'Support search and rescue missions with satellite and drone imagery.',
    ],
  },
  manufacturing: {
    id: 'manufacturing',
    title: 'Industrial and Manufacturing',
    icon: <FaGears size={24} />,
    summary: 'Supply chain risk management and industrial park planning analytics.',
    description: `Use geospatial intelligence for supply chain risk management. Provide location analytics for industrial park planning and monitoring. Support resilience of manufacturing assets against natural and man-made hazards.`,
    image: '/media/manufacturing img.jpg',
    highlights: [
      'Use geospatial intelligence for supply chain risk management.',
      'Provide location analytics for industrial park planning and monitoring.',
      'Support resilience of manufacturing assets against natural and man-made hazards.',
    ],
  },
  mines: {
    id: 'mines',
    title: 'Mines and Steel',
    icon: <FaHammer size={24} />,
    summary: 'Geospatial monitoring of mining sites, geological surveys, and steel production.',
    description: `Apply GEOINT for the mapping and monitoring of mining sites, steel plants, and mineral exploration zones. Detect illegal mining activities and environmental degradation through satellite imagery. Support strategic planning for the steel industry and raw material supply chains.`,
    image: '/media/mines.jpeg',
    highlights: [
      'Apply GEOINT for mapping and monitoring of mining sites, mineral belts, haul routes, and steel-production facilities.',
      'Support early warning for illegal mining, encroachment, unsafe excavation practices, and environmental degradation.',
      'Enhance site selection, resource estimation, and operational planning for new mines, processing plants, and logistics corridors.',
    ],
  },
  
  // NOTE: 'IT' and 'Space' are kept as extra utilities but are outside the core list of 13.
  // it: {
  //   id: 'it',
  //   title: 'Information Technology',
  //   icon: <FaNetworkWired size={24} />,
  //   summary: 'Mapping digital infrastructure and enhancing cybersecurity resilience.',
  //   description: `The IT sector underpins nearly every aspect of modern infrastructure, and geospatial intelligence enhances its security and efficiency. Mapping data centers, fiber routes, and internet exchange points helps identifying physical vulnerabilities that could impact digital connectivity.`,
  //   image: '/media/Information Tech.JPG',
  //   highlights: [
  //     'Apply GEOINT for mapping, monitoring, and vulnerability assessment of fiber-optic routes, telecom towers, data centers, and digital communication hubs.',
  //     'Support early warning for network disruptions caused by physical tampering, environmental hazards, or unauthorized expansions.',
  //     'Enhance planning for future broadband expansion, smart-city deployments, and resilient ICT backbone systems.',
  //   ],
  // },
  // space: {
  //   id: 'space',
  //   title: 'Space & Satellite Systems',
  //   icon: <FaSatellite size={24} />,
  //   summary: 'Protecting satellites and advancing space-based GEOINT capabilities.',
  //   description: `Space and satellite systems form the foundation of modern geospatial intelligence, enabling global navigation, communication, and earth observation. Monitoring orbital assets and space weather is essential to maintaining the integrity of the GEOINT infrastructure itself.`,
  //   image: '/media/Space and Satellite.jpg',
  //   highlights: [
  //     'Apply GEOINT to map, track, and assess the status of ground stations, satellite control facilities, and launch-support infrastructure.',
  //     'Support early warning for space-asset interference, ground-station intrusion, and signal jamming or spoofing threats.',
  //     'Enhance planning for satellite deployment, orbital asset management, and national space-based services such as navigation, EO, and communications.',
  //   ],
  // },
} as const;

export type SectionId = keyof typeof sections;

// Helper array for looping
export const infrastructureList = Object.values(sections);

export default sections;