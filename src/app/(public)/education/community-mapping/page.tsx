import HeroSection from '@/components/HeroSection';
import { 
  FaMapMarkedAlt, 
  FaHandsHelping, 
  FaBullhorn, 
  FaUserCog, 
  FaMobileAlt, 
  FaChartPie, 
  FaSeedling, 
  FaUsers,
} from 'react-icons/fa';

export const dynamic = 'force-dynamic';


export default function CommunityMappingPage() {
  
  // 1. Objectives Data
  const objectives = [
    {
      icon: <FaHandsHelping size={24} className="text-orange-500" />,
      title: "Empower Communities",
      text: "Enable local stakeholders to use mapping and geospatial data for self-driven development."
    },
    {
      icon: <FaMapMarkedAlt size={24} className="text-blue-600" />,
      title: "Bridge Data Gaps",
      text: "Collect and integrate hyperlocal data that supports evidence-based decision-making."
    },
    {
      icon: <FaUserCog size={24} className="text-purple-600" />,
      title: "Support Local Governance",
      text: "Strengthen local governments with tools for planning, monitoring, and service delivery."
    },
    {
      icon: <FaUsers size={24} className="text-green-600" />,
      title: "Promote Inclusion",
      text: "Ensure marginalized groups (women, youth, rural dwellers) are part of the data ecosystem."
    },
    {
      icon: <FaChartPie size={24} className="text-red-600" />,
      title: "National Development",
      text: "Align community-level mapping with Nigeria’s national priorities and SDGs."
    }
  ];

  // 2. Programme Structure Data
  const phases = [
    {
      step: "01",
      title: "Engagement & Awareness",
      icon: <FaBullhorn size={24} />,
      color: "bg-orange-100 text-orange-700",
      points: [
        "Sensitization workshops with traditional leaders & groups.",
        "Awareness campaigns on geospatial data importance."
      ]
    },
    {
      step: "02",
      title: "Mapping Training",
      icon: <FaUserCog size={24} />,
      color: "bg-blue-100 text-blue-700",
      points: [
        "Training on basic Geospatial Intelligence tools (OpenStreetMap, QGIS).",
        "Data collection using mobile apps and drones.",
        "Ethics of community data ownership."
      ]
    },
    {
      step: "03",
      title: "Data Collection",
      icon: <FaMobileAlt size={24} />,
      color: "bg-green-100 text-green-700",
      points: [
        "Mapping schools, clinics, water points, and resources.",
        "Identifying disaster-prone areas.",
        <p>Integration into <span className="cooper">GIFON</span>&apos;s National Hub.</p>
      ]
    },
    {
      step: "04",
      title: "Data to Action",
      icon: <FaChartPie size={24} />,
      color: "bg-purple-100 text-purple-700",
      points: [
        "Influence local government planning.",
        "Enable targeted NGO interventions.",
        " dashboards for community monitoring."
      ]
    },
    {
      step: "05",
      title: "Sustainability",
      icon: <FaSeedling size={24} />,
      color: "bg-teal-100 text-teal-700",
      points: [
        "Establish community geospatial clubs.",
        <p>Link youth to <span className="cooper">GIFON</span> career pathways.</p>,
        "Scale successful models regionally."
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title="Community Mapping for Development (CMD) Program"
        description="“Mapping Communities. Driving Development. Empowering People.”"
        backgroundMedia={[
          "/media/COMMUNITY MAPPING FOR DEVELOPMENT.jpg"
        ]}
      />

      <main className="w-full font-sans">
        
        {/* --- Overview Section --- */}
        <section id="overview" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
            <div className="text-gray-700 leading-relaxed text-lg text-justify md:text-center space-y-6">
              <p>
                <span className="cooper font-bold">GIFON</span>&apos;s Community Mapping for Development initiative leverages geospatial intelligence to empower communities and drive local development. By mapping resources, infrastructure, and social assets, the program provides actionable insights that inform planning, improve service delivery, and foster sustainable growth. Through collaboration with local stakeholders, residents, and institutions, community mapping strengthens participation, transparency, and resilience, ensuring that development projects are targeted, effective, and inclusive for every Nigerian community.
              </p>
            </div>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                CMD Programme Objectives
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
                  CMD Programme Structure
                </h2>
                <p className="text-gray-500">From awareness to action: our 5-step engagement model.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {phases.map((phase, index) => (
                <div 
                key={index} 
                // 1. Add 'group' here so children can react to this div being hovered
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform"
              >
                  {/* Header */}
                  <div className="p-6 flex items-center justify-between border-b border-gray-100">
                      <div className={`p-3 rounded-lg ${phase.color}`}>
                          {phase.icon}
                      </div>
                      
                      {/* 2. Use 'group-hover' here to change color when the parent card is hovered */}
                      <span className="text-4xl font-bold text-gray-100 select-none group-hover:text-green-400 transition-colors duration-300">
                          {phase.step}
                      </span>
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
                  <FaUsers size={28} className="text-orange-400" />
                  <h2 className="text-3xl font-semibold">Target Beneficiaries</h2>
              </div>
              <ul className="space-y-4">
                {[
                    "Rural and peri-urban communities.",
                    "Youth and women groups.",
                    "Local governments, civil society, and NGOs.",
                    "Development agencies in health & agriculture."
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
                  <FaCheckDouble size={28} className="text-green-400" />
                  <h2 className="text-3xl font-semibold">Expected Outcomes</h2>
              </div>
              <div className="space-y-4">
                {[
                    "Digitally mapped communities with updated local data.",
                    "Empowered citizens engaged in development priorities.",
                    "Improved planning and service delivery locally.",
                    "Strengthened resilience against disasters.",
                    "Integration of grassroots data into national ecosystem."
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                        <FaCheckDouble className="text-green-400 mt-1 shrink-0" />
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