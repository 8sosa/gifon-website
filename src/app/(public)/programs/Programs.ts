export const programs = {
  "youth-empowerment": {
    title: "Youth Empowerment & Talent Acceleration",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `This program develops the next generation of geospatial leaders through mentorship, hands-on training, and project-based learning. Participants explore remote sensing, GIS, and analytics to solve real-world challenges.`,
    image: "/bg/c.JPG",
    highlights: [
      "Mentorship from industry experts",
      "Hands-on projects with real-world impact",
      "Technical certifications in GIS & remote sensing",
      "Pathways to internships and careers",
    ],
  },
  wings: {
    title: "Women in GEOINT (WINGS)",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `WINGS ensures women lead in geospatial intelligence. Scholarships, leadership training, and innovation labs create a thriving ecosystem where women drive security innovation.`,
    image: "/bg/c.JPG",
    highlights: [
      "Annual leadership workshops",
      "Scholarship opportunities",
      "Networking across Africa",
      "Mentorship circles",
    ],
  },
  "geoinnovation": {
    title: "GeoInnovation & Tech Incubation",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `We support startups and innovators developing geospatial solutions for defense, agriculture, climate resilience, and smart cities. Through incubation, access to funding, and mentorship, we accelerate the growth of transformative technologies.`,
    image: "/bg/a.JPG",
    highlights: [
      "Startup incubation and mentorship",
      "Access to geospatial data and tools",
      "Seed funding opportunities",
      "Networking with investors and policymakers",
    ],
  },
  "geospatial-hub": {
    title: "National Geospatial Security & Intelligence Hub",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `This hub serves as a central platform for collaboration between government, academia, and private sector. It enhances intelligence-sharing, promotes standardization of geospatial practices, and strengthens national resilience against diverse threats.`,
    image: "/bg/b.JPG",
    highlights: [
      "Centralized intelligence collaboration",
      "Standardization of geospatial protocols",
      "Cybersecurity and defense readiness",
      "Public-private partnerships",
    ],
  },
  "community-mapping": {
    title: "Community Mapping for Development",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `By involving local communities in participatory mapping, we create accurate datasets for disaster response, urban planning, and conflict monitoring. This ensures vulnerable groups are represented in national planning and decision-making.`,
    image: "/bg/d.JPG",
    highlights: [
      "Participatory mapping workshops",
      "Disaster response datasets",
      "Inclusive urban planning tools",
      "Conflict monitoring through geospatial data",
    ],
  },
  "open-data": {
    title: "Open Data & Research",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `We advocate for accessible geospatial data to empower innovation, research, and transparent governance. Our initiatives span climate monitoring, counterterrorism, infrastructure planning, and humanitarian aid.`,
    image: "/bg/e.jpeg",
    highlights: [
      "Open geospatial data repositories",
      "Collaborative research networks",
      "Support for transparent governance",
      "Climate and humanitarian studies",
    ],
  },
  "conferences": {
    title: "Conferences, Workshops & Masterclasses",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `Through regular events, we provide a platform for knowledge exchange between experts, policymakers, and students. These gatherings showcase the latest GEOINT applications, from AI-powered satellite analysis to smart security systems.`,
    image: "/bg/a.JPG",
    highlights: [
      "Annual GEOINT conferences",
      "Hands-on technical workshops",
      "Expert-led masterclasses",
      "Showcasing AI and emerging tech",
    ],
  },
  "training": {
    title: "Training & Certification",
    summary: [
      "Championing women in geospatial intelligence and technology.",
      "Creating networks for collaboration and growth.",
      "Fostering innovation through leadership programs and scholarships.",
    ],
    description: `Our certification programs equip professionals with globally recognized skills in GIS, remote sensing, data analytics, and geospatial cybersecurity. Certified practitioners become trusted assets in national and regional security initiatives.`,
    image: "/bg/b.JPG",
    highlights: [
      "Internationally recognized certifications",
      "Advanced GIS & remote sensing modules",
      "Geospatial cybersecurity training",
      "Career advancement opportunities",
    ],
  },
};

export type ProgramId = keyof typeof programs;
export default programs;
