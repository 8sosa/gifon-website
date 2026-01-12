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
  images: readonly string[] | string;
  highlights: readonly string[];
}

export const sections: Record<string, Sector> = {
  energy: {
    id: 'energy',
    title: 'Energy & Power',
    icon: <FaBolt size={24} />,
    summary: 'Mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets.',
    description: `Apply GEOINT for mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets. Support early warning for vandalism, illegal tapping, and sabotage. Enhance site planning for future energy infrastructure and off-grid solutions.`,
    images: [
      '/media/energy.jpeg',
      '/media/energy1.jpeg',
    ],
    highlights: [
      'Mapping of electricity grids, substations, and transmission networks',
      'Site selection for renewable energy projects (solar, wind, hydro)',
      'Risk and vulnerability analysis for energy infrastructure',
      'Support for smart grid planning, outage management, and asset monitoring',
    ],
  },
  water: {
    id: 'water',
    title: 'Dams & Waterways',
    icon: <FaWater size={24} />,
    summary: 'Monitoring rivers, dams, and irrigation systems with flood risk modelling.',
    description: `Map and monitor rivers, dams, and irrigation systems. Provide flood risk modelling and disaster preparedness solutions. Enhance water quality monitoring and equitable access through spatial intelligence.`,
    images: '/media/waterrrr.jpeg',
    highlights: [
      'Geospatial monitoring of dams, reservoirs, canals, and waterways',
      'Flood modeling, watershed management, and hydrological analysis',
      'Risk assessment for structural integrity and downstream communities',
      'Support for water resource planning and disaster mitigation',
    ],
  },
  transportation: {
    id: 'transportation',
    title: 'Transportation Systems',
    icon: <FaCar size={24} />,
    summary: 'Spatial analysis for air, road, rail, and maritime networks and logistics.',
    description: `Provide spatial analysis for air, road, rail, and maritime networks. Optimize traffic management, logistics, and accident prevention. Support secure navigation and border monitoring for aviation and maritime safety.`,
    images: '/media/Transport.jpg',
    highlights: [
      'GIS-based analysis of road, rail, aviation, and maritime networks',
      'Traffic flow modeling, route optimization, and logistics planning',
      'Critical corridor monitoring and infrastructure maintenance mapping',
      'Support for urban mobility planning and disaster response',
    ],
  },
  communication: {
    id: 'communication',
    title: 'Communications & IT',
    icon: <FaBroadcastTower size={24} />,
    summary: 'Siting and protection of telecom towers, fibre networks, and ICT hubs.',
    description: `Use geospatial data for siting and protection of telecom towers, fibre networks, and ICT hubs. Support redundancy planning to avoid single points of failure. Enable location-based intelligence to secure cyber and physical communication assets.`,
    images: '/media/Comunication.jpg',
    highlights: [
      'Mapping of telecom towers, fiber networks, and digital infrastructure',
      'Network coverage analysis and connectivity optimization',
      'Cyber-physical security risk assessment for communication nodes',
      'Support for digital inclusion, smart city planning, and ICT investments',
    ],
  },
  defence: {
    id: 'defence',
    title: 'Defense Industrial Base',
    icon: <FaShieldAlt size={24} />,
    summary: 'Advanced mapping and terrain analysis for military logistics and operations.',
    description: `Provide advanced mapping and terrain analysis for military logistics and operations. Support secure defence manufacturing zones through geospatial risk assessment. Contribute to defence readiness with real-time intelligence for operational planning.`,
    images: '/media/defense.jpeg',
    highlights: [
      'Provide advanced mapping and terrain analysis for military logistics and operations.',
      'Support secure defence manufacturing zones through geospatial risk assessment.',
      'Contribute to defence readiness with real-time intelligence for operational planning',
    ],
  },
  health: {
    id: 'health',
    title: 'Healthcare & Public Health',
    icon: <FaHeartbeat size={24} />,
    summary: 'GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns.',
    description: `Use Geospatial Intelligence for disease outbreak mapping, pandemic preparedness, and vaccination campaigns. Support healthcare infrastructure planning and accessibility analysis. Provide real-time data for emergency response and disaster medicine.`,
    images: 
    [
      '/media/health.jpeg',
      '/media/health1.jpeg'
    ],
    highlights: [
      'GIS mapping of hospitals, clinics, and public health facilities',
      'Disease surveillance and epidemiological mapping',
      'Health infrastructure planning and disaster preparedness support',
      'Analytics for vaccination campaigns, outbreak response, and resource allocation',
    ],
  },
  emergency: {
    id: 'emergency',
    title: 'Emergency Services',
    icon: <FaFirstAid size={24} />,
    summary: 'Real-time situational awareness for disaster response and recovery.',
    description: `Provide real-time situational awareness for disaster response and recovery. Optimize deployment of fire, rescue, and law enforcement services. Support search and rescue missions with satellite and drone imagery.`,
    images: '/media/Emergency Services.jpg',
    highlights: [
      'Mapping of fire stations, police stations, and emergency response units',
      'Situational awareness tools for rapid deployment during disasters or crises',
      'Risk and vulnerability assessment for communities and critical infrastructure',
      'Simulation and training support for first responders',
    ],
  },
  finance: {
    id: 'finance',
    title: 'Financial Services',
    icon: <FaUniversity size={24} />,
    summary: 'Location-based intelligence for ATM siting and tracking illicit transactions.',
    description: `Strengthen financial security through location-based intelligence for ATM and branch siting. Support anti-fraud operations by tracking geospatial patterns of illicit transactions. Map financial inclusion gaps to guide policy and private investment.`,
    images: '/media/Banking and finance.jpeg',
    highlights: [
      'Spatial analysis for branch expansion, market coverage, and customer demographics',
      'Risk assessment for investment, insurance, and fintech applications',
      'Fraud detection, market insights, and strategic planning support',
      'Location-based analytics for supply chain and logistics optimization',
    ],
  },
  food: {
    id: 'food',
    title: 'Food and Agriculture',
    icon: <FaTractor size={24} />,
    summary: 'Earth observation for crop monitoring, yield forecasting, and climate adaptation.',
    description: `Use earth observation for crop monitoring, yield forecasting, and climate adaptation. Strengthen food security through land use analysis and supply chain visibility. Detect and prevent illegal land grabs and encroachment on agricultural reserves.`,
    images: '/media/agriculture.jpeg',
    highlights: [
      'Precision agriculture mapping and crop monitoring',
      'Land-use analysis, soil health, and water resource assessment',
      'Supply chain mapping for storage, transport, and distribution efficiency',
      'Support for climate-resilient agriculture and food security planning',
    ],
  },
  government: {
    id: 'government',
    title: 'Government Services',
    icon: <FaLandmark size={24} />,
    summary: 'Mapping, monitoring, and securing federal/state government facilities.',
    description: `Map, monitor, and secure federal/state government facilities. Support continuity of government planning using spatial risk assessments. Provide GEOINT for the protection of national monuments, heritage sites, and strategic assets.`,
    images: '/media/pa.jpeg',
    highlights: [
      'Mapping of administrative boundaries, public service delivery points, and citizen infrastructure',
      'Planning and monitoring of development projects and policy implementation',
      'Data-driven decision support for urban, rural, and regional planning',
      'Risk and impact assessment for public programs and investments.',
    ],
  },
  education: {
    id: 'education',
    title: 'Chemical & Hazardous Materials',
    icon: <FaGraduationCap size={24} />,
    summary: 'Planning equitable distribution of schools and strengthening STEM programs.',
    description: `Support planning and equitable distribution of schools and research centers. Use spatial data to strengthen STEM and geospatial education programs. Facilitate research collaborations with academia and global geospatial partners.`,
    images: '/media/cah.jpg',
    highlights: [
      'Location and risk mapping of chemical plants, storage facilities, and hazardous sites',
      'Disaster preparedness and environmental safety monitoring',
      'Supply chain and logistics risk assessment for hazardous materials',
      'Compliance support for national safety and environmental regulations',
    ],
  },
  manufacturing: {
    id: 'manufacturing',
    title: 'Critical Manufacturing & Industrial Facilities',
    icon: <FaGears size={24} />,
    summary: 'Supply chain risk management and industrial park planning analytics.',
    description: `Use geospatial intelligence for supply chain risk management. Provide location analytics for industrial park planning and monitoring. Support resilience of manufacturing assets against natural and man-made hazards.`,
    images: '/media/manufacturing img.jpg',
    highlights: [
      'Mapping and monitoring of factories, production plants, and industrial clusters',
      'Risk assessment for operational continuity, supply chain, and infrastructure security',
      'Optimization of production sites and industrial zoning using geospatial intelligence',
      'Support for industrial policy, investment planning, and innovation hubs',
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