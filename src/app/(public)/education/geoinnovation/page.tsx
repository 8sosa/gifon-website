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
        title="GIFON Y-GeoInnovation & Tech Incubation Programme (Y-GITI)"
        description="“Innovating with Location. Incubating the Future.”"
        backgroundMedia={[
          "/media/geoino.jpeg",
        ]}
      />

      <main className="w-full font-sans">
        
        {/* --- Overview Section --- */}
        <section id="overview" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
            <div className="text-gray-700 leading-relaxed text-lg text-justify md:text-center space-y-6">
              <p>
                The Y-GeoInnovation & Tech Incubation Programme (Y-GITI) is a
                signature initiative of the Geospatial Intelligence Foundation
                of Nigeria (<span className="cooper font-bold">GIFON</span>) aimed at nurturing young innovators,
                startups, and entrepreneurs who are building solutions at the
                intersection of geospatial intelligence, technology, and
                national development.
              </p>
              <p>
                This programme serves as a talent-to-enterprise pipeline,
                providing Nigerian youth with access to training, mentorship,
                incubation facilities, seed funding, and exposure to global
                innovation ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Programme Objectives
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

        {/* --- Programme Structure Section --- */}
        <section id="structure" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Incubation Lifecycle
                </h2>
                <p className="text-gray-500">From idea to enterprise: our 5-stage roadmap.</p>
            </div>

            

[Image of tech incubation lifecycle diagram]

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {phases.map((phase, index) => (
                <div key={index} className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform">
                    {/* Header */}
                    <div className="p-6 flex items-center justify-between border-b border-gray-100">
                        <div className={`p-3 rounded-lg ${phase.color}`}>
                            {phase.icon}
                        </div>
                        <span className="text-4xl font-bold text-gray-100 select-none">{phase.step}</span>
                    </div>
                    
                    {/* Body */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{phase.title}</h3>
                        <ul className="space-y-3">
                            {phase.points.map((pt, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Beneficiaries & Outcomes Section --- */}
        {/* <section id="beneficiaries-outcomes" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                  <FaUserAstronaut size={28} className="text-orange-400" />
                  <h2 className="text-3xl font-semibold">Target Beneficiaries</h2>
              </div>
              <ul className="space-y-4">
                {[
                    "Youth innovators (18–35 years).",
                    "University students, graduates, and researchers.",
                    "Early-stage startups in geospatial and emerging tech.",
                    "Entrepreneurs addressing Nigeria’s development challenges."
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                        {item}
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                  <FaChartLine size={28} className="text-green-400" />
                  <h2 className="text-3xl font-semibold">Expected Outcomes</h2>
              </div>
              <div className="space-y-4">
                {[
                    "Establishment of a pipeline of youth-led GEOINT startups.",
                    "Deployment of innovative solutions to Nigeria’s 13 critical infrastructure sectors.",
                    "Strengthened youth contribution to national security and digital economy.",
                    "Creation of jobs, enterprises, and intellectual property."
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                        <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                ))}
              </div>
            </div>

          </div>
        </section> */}

      </main>
    </>
  );
}