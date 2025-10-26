import {JSX} from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
// Import all the icons for the 14 sectors
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
  FaLaptopCode,
  FaIndustry,
  FaFirstAid,
  FaSatellite,
} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';
import Image from 'next/image';

// Reusable SectionHeader component (like in your ResourcesPage)
const SectionHeader = ({ title, icon }: { title: string; icon: JSX.Element }) => (
  <div className="inline-block mb-6 text-left">
    <h2 className="text-green-600 text-3xl font-semibold flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="w-20 h-1 bg-green-600 mt-2"></div>
  </div>
);

// --- Data for all 14 Infrastructure Sectors ---
const infrastructureSectors = [
  {
    id: 'energy',
    title: 'Energy Security & Development',
    icon: <FaBolt size={24} />,
    description:
      'Geospatial intelligence is essential for monitoring pipeline integrity, securing energy assets, assessing environmental impact, and planning for new renewable energy sites (solar, wind, and hydro) across Nigeria.',
  },
  {
    id: 'transportation',
    title: 'Transportation',
    icon: <FaCar size={24} />,
    description:
      'We use GEOINT to optimize logistics, manage port traffic, monitor road and railway networks for security and maintenance, and plan for new transportation corridors to connect urban and rural communities.',
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: <FaBroadcastTower size={24} />,
    description:
      'By mapping telecommunication infrastructure, we can identify coverage gaps, protect fibre optic routes from disruption, and plan the strategic deployment of 5G and broadband services to underserved areas.',
  },
  {
    id: 'water',
    title: 'Water & Environment',
    icon: <FaWater size={24} />,
    description:
      'GEOINT helps in monitoring water quality, managing reservoir levels, mapping floodplains to mitigate disaster risk, and tracking environmental changes such as deforestation and coastal erosion.',
  },
  {
    id: 'health',
    title: 'Health',
    icon: <FaHeartbeat size={24} />,
    description:
      'Our work supports public health by mapping disease outbreaks, optimizing the locations of new clinics and hospitals, and managing the logistics of vaccine and medical supply distribution to remote populations.',
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: <FaUniversity size={24} />,
    description:
      'We assist the financial sector by providing location-based risk analysis for assets, optimizing the placement of bank branches and ATMs, and monitoring economic activity and development in emerging markets.',
  },
  {
    id: 'government',
    title: 'Government Facilities',
    icon: <FaLandmark size={24} />,
    description:
      'Geospatial intelligence is critical for securing government buildings, military bases, and diplomatic missions. We provide solutions for perimeter monitoring, access control, and emergency response planning.',
  },
  {
    id: 'food',
    title: 'Food Security & Agriculture',
    icon: <FaTractor size={24} />,
    description:
      'We enhance food security through precision agriculture, using satellite imagery to monitor crop health, predict yields, map soil types, and manage water resources for irrigation efficiently.',
  },
  {
    id: 'defence',
    title: 'Defence & Security',
    icon: <FaShieldAlt size={24} />,
    description:
      'As our core mandate, we provide high-resolution intelligence for border security, counter-terrorism operations, maritime surveillance, and strategic defense planning to ensure national sovereignty.',
  },
  {
    id: 'it',
    title: 'Information Technology',
    icon: <FaLaptopCode size={24} />,
    description:
      'GEOINT is crucial for mapping and protecting critical IT infrastructure, including data centers and sub-sea cable landing sites, ensuring the resilience of Nigeria’s digital economy against physical threats.',
  },
  {
    id: 'industrial',
    title: 'Industrial Systems',
    icon: <FaIndustry size={24} />,
    description:
      'We support the industrial base by providing spatial analysis for site selection, supply chain optimization, and monitoring large-scale industrial zones for security and environmental compliance.',
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    icon: <FaFirstAid size={24} />,
    description:
      'In a crisis, location is everything. We provide real-time maps and data to fire, police, and medical services to coordinate responses, manage disasters, and save lives more effectively.',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: <FaGears size={24} />,
    description:
      'We help the manufacturing sector by optimizing supply chain logistics, analyzing locations for new factories based on proximity to resources and transport, and managing industrial park assets.',
  },
  {
    id: 'space',
    title: 'Space & Satellite Systems',
    icon: <FaSatellite size={24} />,
    description:
      'We partner with national and international space agencies to leverage satellite assets, manage ground station operations, and ensure that Nigeria fully benefits from the data and capabilities provided by space-based systems.',
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <HeroSection
        title="Critical Infrastructure Support"
        description="Leveraging geospatial intelligence to build, monitor, and protect Nigeria's 14 critical infrastructure sectors."
        backgroundImages={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />

      <main>
        {/* --- 1. Introductory Section --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              Securing the Backbone of Our Nation
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Nigeria&apos;s 14 designated critical infrastructure sectors are the
              foundation of our national security, economic stability, and
              public welfare. From energy grids and transportation networks to
              health and communication systems, their resilience is paramount.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Geospatial Intelligence (GEOINT) provides the vital framework for
              understanding, monitoring, and protecting these assets. GIFON
              provides actionable intelligence to help public and private
              stakeholders make informed decisions, mitigate risks, and build a
              more secure and prosperous future.
            </p>
          </div>
        </section>

        {/* --- 2. Map over all 14 sectors --- */}
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
                      <p>{sector.description}</p>
                      {/* You can add more text here later */}
                      <p>
                        Our specialized teams work with partners in this
                        sector to provide tailored data products, risk
                        assessments, and strategic insights.
                      </p>
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