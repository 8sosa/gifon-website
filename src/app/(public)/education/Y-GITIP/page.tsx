import HeroSection from '@/components/HeroSection';
import { 
  FaLightbulb, 
  FaSeedling, 
  FaNetworkWired, 
  FaDigitalTachograph, 
  FaShieldAlt, 
  FaSearch, 
  FaLaptopCode, 
  FaRocket, 
  FaHandshake, 
  FaChartLine,
} from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export default function GeoinnovationPage() {
  
  // 1. Objectives Data
  const objectives = [
    {
      icon: <FaLightbulb size={24} className="text-yellow-500" />,
      title: "Foster Youth Innovation",
      text: "Cultivate creative, youth-led solutions leveraging geospatial technologies."
    },
    {
      icon: <FaSeedling size={24} className="text-green-600" />,
      title: "Incubate Startups",
      text: "Support the growth of early-stage enterprises solving national security and development challenges."
    },
    {
      icon: <FaNetworkWired size={24} className="text-blue-600" />,
      title: "Bridge Gaps",
      text: "Connect academia, government, and industry through youth-driven innovation."
    },
    {
      icon: <FaDigitalTachograph size={24} className="text-purple-600" />,
      title: "Promote Digital Transformation",
      text: "Accelerate adoption of AI, IoT, drones, big data, and geospatial platforms in Nigeria."
    },
    {
      icon: <FaShieldAlt size={24} className="text-red-600" />,
      title: "Build Resilience",
      text: "Apply innovative tools to strengthen Nigeria’s 13 critical infrastructure sectors."
    }
  ];

  // 2. Programme Structure Data
  const phases = [
    {
      step: "01",
      title: "Innovation Discovery",
      icon: <FaSearch size={24} />,
      color: "bg-blue-100 text-blue-700",
      points: [
        "Nationwide innovation challenges & hackathons.",
        "Talent scouting in universities & tech hubs.",
        "Call for proposals aligned with priority sectors."
      ]
    },
    {
      step: "02",
      title: "Pre-Incubation (Bootcamp)",
      icon: <FaLaptopCode size={24} />,
      color: "bg-orange-100 text-orange-700",
      points: [
        "6–8 weeks intensive bootcamp.",
        "Training on geospatial tech & design thinking.",
        "Team formation and solution prototyping."
      ]
    },
    {
      step: "03",
      title: "Incubation & Acceleration",
      icon: <FaRocket size={24} />,
      color: "bg-green-100 text-green-700",
      points: [
        "6–12-month incubation support.",
        "Access to labs and geospatial data resources.",
        "Seed funding and mentorship from GIFON experts."
      ]
    },
    {
      step: "04",
      title: "Industry Linkages",
      icon: <FaHandshake size={24} />,
      color: "bg-purple-100 text-purple-700",
      points: [
        "Partnership with government agencies for pilots.",
        "Collaboration with private sector for scaling.",
        "Investor demo days."
      ]
    },
    {
      step: "05",
      title: "Sustainability & Growth",
      icon: <FaChartLine size={24} />,
      color: "bg-teal-100 text-teal-700",
      points: [
        "Business registration & IP protection.",
        "Scale-up support through Industry Forum.",
        "International exposure through GEOINT conferences."
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title={<><span className="cooper">GIFON</span> Youth GeoInnovation & Tech Incubation Program</>}
        description={<>
                The Y-GeoInnovation & Tech Incubation Programme is a
                signature initiative of the Geospatial Intelligence Foundation
                of Nigeria (<span className="cooper font-bold">GIFON</span>) aimed at nurturing young innovators,
                startups, and entrepreneurs who are building solutions at the
                intersection of geospatial intelligence, technology, and
                national development.
              <br/>
                This programme serves as a talent-to-enterprise pipeline,
                providing Nigerian youth with access to training, mentorship,
                incubation facilities, seed funding, and exposure to global
                innovation ecosystems.
              
            </>}
        backgroundMedia={[
          "/media/geoino.jpeg",
        ]}
      />

      <main className="w-full font-sans">
        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                Program Objectives
                </h2>
                <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {objectives.map((obj, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600 flex flex-col items-start"
                >
                    <div className="mb-4 bg-gray-50 p-3 rounded-full">{obj.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{obj.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm grow">
                        {obj.text}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}