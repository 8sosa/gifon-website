import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { 
  FaRocket, 
  FaUserGraduate, 
  FaLightbulb, 
  FaBriefcase, 
  FaShieldAlt, 
  FaSearch, 
  FaChalkboardTeacher, 
  FaLaptopCode, 
  FaHandsHelping, 
  FaRoad 
} from 'react-icons/fa';

export default function YetaPage() {
  
  // 1. Data for Programme Goals
  const goals = [
    {
      icon: <FaUserGraduate size={28} className="text-blue-600" />,
      title: "Empower Youth",
      text: "Equip Nigerian youth with world-class skills in geospatial technologies and intelligence to compete on a global stage."
    },
    {
      icon: <FaRocket size={28} className="text-red-600" />,
      title: "Accelerate Talent",
      text: "Identify and nurture high-potential talent through structured mentorship, bootcamps, and innovation labs."
    },
    {
      icon: <FaLightbulb size={28} className="text-yellow-500" />,
      title: "Promote Innovation",
      text: "Drive indigenous solutions to Nigeria’s security, infrastructure, and development challenges using local data."
    },
    {
      icon: <FaBriefcase size={28} className="text-green-600" />,
      title: "Boost Employability",
      text: "Connect trained youth to industry, government, and international job opportunities in the growing GEOINT sector."
    },
    {
      icon: <FaShieldAlt size={28} className="text-purple-600" />,
      title: "Strengthen National Capacity",
      text: "Build a pool of skilled professionals contributing to Nigeria’s critical infrastructure resilience and national security architecture."
    },
  ];

  // 2. Data for Programme Structure
  const structureSteps = [
    {
      icon: <FaSearch size={24} />,
      title: "Talent Discovery & Recruitment",
      points: [
        "Annual nationwide call for applications.",
        "Outreach to universities, NYSC, and innovation hubs.",
        "Selection through aptitude tests and challenges."
      ]
    },
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: "Capacity Building & Training",
      points: [
        "Foundational Training: Geospatial Intelligence, remote sensing, mapping.",
        "Advanced Skills: AI, machine learning, drones, satellite systems.",
        "Soft Skills: Leadership, ethics, and project management."
      ]
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: "Innovation & Acceleration Labs",
      points: [
        "Geo-Innovation Lab: Real-world projects in security & smart cities.",
        "Start-Up Incubation: Seed funding and mentorship.",
        "Hackathons: Competitions to drive problem-solving."
      ]
    },
    {
      icon: <FaHandsHelping size={24} />,
      title: "Mentorship & Industry Linkages",
      points: [
        "Pairing youth with experts from industry and government.",
        "Internship placements with partner organizations.",
        "Exposure to global GEOINT forums (e.g., USGIF, DGI)."
      ]
    },
    {
      icon: <FaRoad size={24} />,
      title: "Employment Pathways",
      points: [
        "Certification to increase employability.",
        <>Access to job opportunities via <span className="cooper font-bold">GIFON</span>&apos;s Private Sector Forum.</>,
        "Support to launch startups addressing national challenges."
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title="Youth Empowerment & Talent Acceleration Programme (YETAP)"
        description="“Empowering Youth. Accelerating Talent. Building Nigeria’s Geospatial Future.”"
        backgroundMedia={[
          "/media/ye.jpg",
        ]}
      />

      <main className="w-full font-sans">
        
        {/* --- Overview Section --- */}
        <section id="overview" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
            <div className="text-gray-700 leading-relaxed text-lg text-justify md:text-center space-y-4">
              <p><span className="cooper font-bold">GIFON</span>&apos;s Youth Empowerment and Acceleration Program is designed to equip young Nigerians with the skills, knowledge, and opportunities to excel in Geospatial Intelligence and related technologies. Through mentorship, hands-on training, and innovation-driven projects, the program nurtures the next generation of leaders, innovators, and change-makers. By fostering creativity, leadership, and technical expertise, it empowers youth to contribute meaningfully to national security, sustainable development, and the technological advancement of Nigeria.</p>
            </div>
          </div>
        </section>

        {/* --- Programme Goals Section --- */}
        <section id="goals" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                YETAP Programme Goals
                </h2>
                <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {goals.map((goal, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start"
                >
                    <div className="mb-4 bg-gray-50 p-3 rounded-full">{goal.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm grow">
                        {goal.text}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Programme Structure Section --- */}
        <section id="structure" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
              Programme Structure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {structureSteps.map((step, index) => (
                <div 
                    key={index} 
                    className={`bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all ${index === structureSteps.length - 1 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-600 text-white p-3 rounded-lg shadow-green-200 shadow-lg">
                            {step.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-green-900">
                            {index + 1}. {step.title}
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {step.points.map((point, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                                <span className="mr-2 mt-1.5 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                                <span className="text-base leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section id="join" className="py-16 px-4 bg-green-600 text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready to shape the future?</h2>
                {/* <p className="mb-8 text-green-100 text-lg">
                    Join the Young Professionals Forum to get started on your journey.
                </p> */}
                <Link 
                    href="/forums#young-professionals" 
                    className="inline-block bg-white text-green-700 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg"
                >
                    Visit the Young Professionals Forum
                </Link>
            </div>
        </section>

      </main>
    </>
  );
}