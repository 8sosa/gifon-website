export const sections = {
    energy: {
      id: 'energy',
      title: 'Energy Security & Development',
      summary:
        'Geospatial intelligence supports monitoring, siting and resilience for power grids, pipelines and renewables.',
      description: `Geospatial intelligence plays a critical role in energy security by providing real-time monitoring and analysis of power infrastructure. From mapping renewable energy resources to assessing vulnerabilities in oil pipelines and power grids, GEOINT allows decision-makers to predict, prevent, and respond to disruptions. As the global demand for sustainable energy rises, geospatial tools help identify optimal sites for solar, wind, and hydroelectric facilities, while also enabling risk assessments for natural disasters or cyber threats. Ensuring energy security means safeguarding not just the supply but also the strategic systems that keep nations powered and resilient.`,
      image: '/media/energy.jpg',
      highlights: [
        'Grid vulnerability mapping',
        'Renewable site selection',
        'Pipeline monitoring',
      ],
    },
    transportation: {
      id: 'transportation',
      title: 'Transportation',
      summary: 'Smart mobility and secure supply chains with satellite & sensor fusion.',
      description: `The transportation sector relies heavily on geospatial intelligence for planning, operations, and threat mitigation. By integrating satellite imagery, GPS data, and predictive analytics, GEOINT enhances the efficiency and security of supply chains, shipping lanes, and air traffic routes...`,
      image: '/media/aviation.jpg',
      highlights: ['Chokepoint monitoring', 'Route optimization', 'Incident response'],
    },
    communication: {
      id: 'communication',
      title: 'Communication',
      summary: 'Mapping comms infrastructure to improve resilience and response.',
      description: `Communication networks form the backbone of modern society, and geospatial intelligence ensures their resilience against physical and cyber threats...`,
      image: '/media/Communication.jpg',
      highlights: ['Tower & fiber mapping', 'Disaster recovery', 'Threat surface analysis'],
    },
    water: {
      id: 'water',
      title: 'Water & Environment',
      summary:
        'Hydrology, contamination detection and climate-informed resource planning.',
      description: `Water security is increasingly intertwined with environmental stability, and geospatial intelligence provides the tools to safeguard both...`,
      image: '/media/water and environment.jpg',
      highlights: ['Reservoir monitoring', 'Flood modelling', 'Pollution tracing'],
    },
    health: {
      id: 'health',
      title: 'Health',
      summary:
        'Real-time mapping for epidemics, healthcare logistics, and crisis response.',
      description: `Health security is closely linked to geospatial intelligence, especially in tracking disease outbreaks and ensuring access to medical infrastructure...`,
      image: '/bg/d.jpg',
      highlights: ['Outbreak tracking', 'Healthcare facility mapping', 'Crisis logistics'],
    },
    finance: {
      id: 'finance',
      title: 'Finance',
      summary: 'Geo-economic intelligence for resilient financial systems and trade.',
      description: `Financial systems are critical to national security, and geospatial intelligence contributes by identifying and mitigating threats to economic stability...`,
      image: '/bg/a.jpg',
      highlights: ['Disaster impact modelling', 'Trade flow mapping', 'Illicit activity monitoring'],
    },
    government: {
      id: 'government',
      title: 'Government Facilities',
      summary: 'Monitoring and protecting sensitive government and defense sites.',
      description: `Government facilities, ranging from administrative centers to defense installations, require continuous protection, and geospatial intelligence provides the necessary oversight...`,
      image: '/bg/b.jpg',
      highlights: ['Land use tracking', 'Evacuation planning', 'Sensitive site monitoring'],
    },
    food: {
      id: 'food',
      title: 'Food Security & Agriculture',
      summary: 'Precision agriculture and resilient food supply chains with GEOINT.',
      description: `Food security is a cornerstone of national stability, and geospatial intelligence provides critical insights for sustainable agriculture and resource management...`,
      image: '/media/Food Security (1).jpg',
      highlights: ['Crop yield optimization', 'Supply chain risk mapping', 'Disaster response'],
    },
    defence: {
      id: 'defence',
      title: 'Defence & Security',
      summary:
        'Battlefield awareness, counterterrorism, and strategic military planning.',
      description: `Defence and security are core domains where geospatial intelligence has long been indispensable. GEOINT enables monitoring of adversary movements, battlefield terrain analysis, and strategic planning for military operations...`,
      image: '/bg/d.jpg',
      highlights: ['Adversary monitoring', 'Border security', 'Disaster response'],
    },
    it: {
      id: 'it',
      title: 'Information Technology',
      summary: 'Mapping digital infrastructure and enhancing cybersecurity resilience.',
      description: `The IT sector underpins nearly every aspect of modern infrastructure, and geospatial intelligence enhances its security and efficiency...`,
      image: '/media/ict.jpg',
      highlights: ['Data center mapping', 'Geographic redundancy planning', 'Cyber-physical threat analysis'],
    },
    industrial: {
      id: 'industrial',
      title: 'Industrial Systems',
      summary: 'Protecting plants, refineries and logistics hubs with GEOINT.',
      description: `Industrial systems such as manufacturing plants, refineries, and logistics hubs are vital for national economies, and geospatial intelligence plays a pivotal role in their protection...`,
      image: '/bg/b.jpg',
      highlights: ['Site monitoring', 'Predictive maintenance', 'Supply chain dependencies'],
    },
    emergency: {
      id: 'emergency',
      title: 'Emergency Services',
      summary: 'Rapid response, disaster relief, and precision resource deployment.',
      description: `Emergency services rely on accurate and timely geospatial intelligence to save lives and protect communities...`,
      image: '/bg/c.jpg',
      highlights: ['Damage assessment', 'Evacuation planning', 'Resource deployment'],
    },
    manufacturing: {
      id: 'manufacturing',
      title: 'Manufacturing',
      summary: 'Supply chain visibility, predictive maintenance, and site resilience.',
      description: `The manufacturing sector is a backbone of economic growth, and geospatial intelligence ensures its security and competitiveness...`,
      image: '/bg/d.jpg',
      highlights: ['Factory monitoring', 'Workforce distribution', 'Disaster risk analysis'],
    },
    space: {
      id: 'space',
      title: 'Space & Satellite Systems',
      summary: 'Protecting satellites and advancing space-based GEOINT capabilities.',
      description: `Space and satellite systems form the foundation of modern geospatial intelligence, enabling global navigation, communication, and earth observation...`,
      image: '/bg/a.jpg',
      highlights: ['Satellite monitoring', 'Orbital debris tracking', 'Space weather resilience'],
    },
  } as const;
  
  export type SectionId = keyof typeof sections;
  export default sections;
  