import {JSX} from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
// Import all the icons for the 13 sectors
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
  FaGraduationCap, // Added for Education
} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import Image from 'next/image';

// Reusable SectionHeader component
const SectionHeader = ({ title, icon }: { title: string; icon: JSX.Element }) => (
  <div className="inline-block mb-6 text-left">
    <h2 className="text-green-600 text-3xl font-semibold flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="w-20 h-1 bg-green-600 mt-2"></div>
  </div>
);

// --- Data for all 13 Infrastructure Sectors from the document ---
const infrastructureSectors = [
  {
    id: 'energy',
    title: 'Energy',
    icon: <FaBolt size={24} />,
    description:
      'Apply GEOINT for mapping and monitoring of power grids, oil and gas pipelines, and renewable energy assets. Support early warning for vandalism, illegal tapping, and sabotage. Enhance site planning for future energy infrastructure and off-grid solutions.',
  },
  {
    id: 'transportation',
    title: 'Transportation Systems',
    icon: <FaCar size={24} />,
    description:
      'Provide spatial analysis for air, road, rail, and maritime networks. Optimize traffic management, logistics, and accident prevention. Support secure navigation and border monitoring for aviation and maritime safety.',
  },
  {
    id: 'communication',
    title: 'Communications',
    icon: <FaBroadcastTower size={24} />,
    description:
      'Use geospatial data for siting and protection of telecom towers, fibre networks, and ICT hubs. Support redundancy planning to avoid single points of failure. Enable location-based intelligence to secure cyber and physical communication assets.',
  },
  {
    id: 'defence',
    title: 'Defense Industrial Base',
    icon: <FaShieldAlt size={24} />,
    description:
      'Provide advanced mapping and terrain analysis for military logistics and operations. Support secure defence manufacturing zones through geospatial risk assessment. Contribute to defence readiness with real-time intelligence for operational planning.',
  },
  {
    id: 'food',
    title: 'Agriculture and Food Security',
    icon: <FaTractor size={24} />,
    description:
      'Use earth observation for crop monitoring, yield forecasting, and climate adaptation. Strengthen food security through land use analysis and supply chain visibility. Detect and prevent illegal land grabs and encroachment on agricultural reserves.',
  },
  {
    id: 'water',
    title: 'Water and Dams',
    icon: <FaWater size={24} />,
    description:
      'Map and monitor rivers, dams, and irrigation systems. Provide flood risk modelling and disaster preparedness solutions. Enhance water quality monitoring and equitable access through spatial intelligence.',
  },
  {
    id: 'health',
    title: 'Public Health and Healthcare',
    icon: <FaHeartbeat size={24} />,
    description:
      'Use GIS for disease outbreak mapping, pandemic preparedness, and vaccination campaigns. Support healthcare infrastructure planning and accessibility analysis. Provide real-time data for emergency response and disaster medicine.',
  },
  {
    id: 'finance',
    title: 'Finance and Banking',
    icon: <FaUniversity size={24} />,
    description:
      'Strengthen financial security through location-based intelligence for ATM and branch siting. Support anti-fraud operations by tracking geospatial patterns of illicit transactions. Map financial inclusion gaps to guide policy and private investment.',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: <FaGears size={24} />,
    description:
      'Use geospatial intelligence for supply chain risk management. Provide location analytics for industrial park planning and monitoring. Support resilience of manufacturing assets against natural and man-made hazards.',
  },
  {
    id: 'education',
    title: 'Education',
    icon: <FaGraduationCap size={24} />,
    description:
      'Support planning and equitable distribution of schools and research centers. Use spatial data to strengthen STEM and geospatial education programs. Facilitate research collaborations with academia and global geospatial partners.',
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    icon: <FaFirstAid size={24} />,
    description:
      'Provide real-time situational awareness for disaster response and recovery. Optimize deployment of fire, rescue, and law enforcement services. Support search and rescue missions with satellite and drone imagery.',
  },
  {
    id: 'industrial',
    title: 'Critical Manufacturing & Industrial Processes',
    icon: <FaIndustry size={24} />,
    description:
      'Monitor chemical, pharmaceutical, and heavy industry facilities for safety and compliance. Provide GEOINT for early detection of industrial hazards and environmental risks. Strengthen resilience of production hubs through geospatial risk modeling.',
  },
  {
    id: 'government',
    title: 'Government Facilities & National Monuments',
    icon: <FaLandmark size={24} />,
    description:
      'Map, monitor, and secure federal/state government facilities. Support continuity of government planning using spatial risk assessments. Provide GEOINT for the protection of national monuments, heritage sites, and strategic assets.',
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <HeroSection
        title="Critical Infrastructure Support"
        description="Mapping Nigeria’s Critical Assets for Security, Resilience, and Sustainable Growth."
        backgroundImages={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />

      <main className='text-justify'>
        {/* --- 1. Introductory Section (Updated from Doc) --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              GIFON Policy Contribution to Nigeria’s Critical Infrastructure
              Sectors
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto">
              The Geospatial Intelligence Foundation of Nigeria (GIFON)
              acknowledges the vital role of Nigeria’s critical
              infrastructure sectors in sustaining national security, economic
              prosperity, and public well-being. GIFON is committed to
              deploying geospatial intelligence capabilities to enhance the
              protection, resilience, and optimization of these sectors.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto">
              GIFON will integrate geospatial intelligence across all critical
              infrastructure sectors, build strong partnerships with
              government, industry, and international stakeholders, and
              develop tailored solutions that combine data, technology, and
              human expertise to safeguard Nigeria’s infrastructure and
              secure its national future.
            </p>
          </div>
        </section>

        {/* --- 2. Map over all 13 sectors (Updated from Doc) --- */}
        {infrastructureSectors.map((sector, index) => {
          // Alternate background colors
          const backgroundColor =
            index % 2 === 0 ? 'bg-green-50' : 'bg-white';
          // Alternate text/image order
          const textOrder = index % 2 === 0 ? 'md:order-1' : 'md:order-2';
          const imageOrder = index % 2 === 0 ? 'md:order-2' : 'md:order-1';

          return (
            <section
              key={sector.id}
              id={sector.id} // This is the anchor link
              className={`py-16 ${backgroundColor}`}
            >
              <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                  
                  {/* Text Content */}
                  <div className={`md:col-span-3 ${textOrder}`}>
                    <SectionHeader
                      title={sector.title}
                      icon={sector.icon}
                    />
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {/* Split description into paragraphs if it contains newlines, or just render it */}
                      {sector.description.split('\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                      
                      <Link
                        href="#" // Update this later to a specific page
                        className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className={`md:col-span-2 ${imageOrder}`}>
                    <Image
                      src="/ph.svg" // Use your placeholder
                      alt={sector.title}
                      width={1500} height={1000}
                      className="rounded-lg shadow-lg object-cover w-full h-64"
                    />
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}