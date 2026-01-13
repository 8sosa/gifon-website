import HeroSection from '@/components/HeroSection';
import { 
  FaShieldAlt, 
  FaDatabase, 
  FaRocket, 
  FaUserGraduate, 
  FaHandshake, 
  FaCheckCircle, 
  FaGlobe,
} from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export default function GeospatialHubPage() {
  
  // 1. Core Objectives Data
  const objectives = [
    {
      icon: <FaShieldAlt size={24} className="text-red-600" />,
      title: "National Security Support",
      text: "Provide advanced GEOINT solutions for counter-terrorism, border security, disaster management, and critical infrastructure protection."
    },
    {
      icon: <FaDatabase size={24} className="text-blue-600" />,
      title: "Data Integration & Analytics",
      text: "Serve as a centralized hub for geospatial data collection, fusion, and analysis across ministries, departments, and agencies (MDAs)."
    },
    {
      icon: <FaRocket size={24} className="text-purple-600" />,
      title: "Innovation & Research",
      text: "Incubate cutting-edge applications in artificial intelligence, remote sensing, UAVs, and big data analytics."
    },
    {
      icon: <FaUserGraduate size={24} className="text-green-600" />,
      title: "Capacity Building",
      text: "Train the next generation of Nigerian geospatial intelligence professionals through workshops, certification programs, and fellowships."
    },
    {
      icon: <FaHandshake size={24} className="text-orange-500" />,
      title: "Public–Private Collaboration",
      text: "Connect industry stakeholders with government and research institutions to develop scalable geospatial solutions."
    }
  ];

  // 2. Strategic Benefits Data
  const benefits = [
    "Improved situational awareness for policymakers and security agencies.",
    "Enhanced data-driven decision-making across national and state levels.",
    "Strengthened national preparedness and disaster resilience.",
    "Increased global competitiveness of Nigeria’s geospatial and intelligence community.",
    "Creation of high-skill jobs and empowerment of Nigerian youth in the GEOINT sector."
  ];

  return (
    <>
      <HeroSection
        title="National Geospatial Security & Intelligence Hub"
        description='Source • Analyze • Automate • Share'
        description1={<>The National Geospatial Security and Intelligence Hub is Nigeria&apos;s center of excellence for geospatial intelligence, providing critical insights to strengthen national security, protect infrastructure, and support strategic decision-making. By integrating advanced geospatial technologies, data analytics, and intelligence expertise, the Hub empowers government, security agencies, and private institutions to anticipate threats, respond effectively, and drive sustainable development. It serves as a national platform for innovation, collaboration, and capacity building, ensuring that geospatial intelligence translates into actionable solutions for a safer and more resilient Nigeria.</>}
        backgroundMedia={[
          "/media/Geospatial Hub.JPG",
        ]}
      />

      <main className="w-full font-sans">
        {/* --- Core Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Core Objectives
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Through the Hub, <span className="cooper">GIFON</span> reaffirms its commitment to advancing national capabilities in five key areas.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {objectives.map((obj, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-600 flex flex-col items-start hover:-translate-y-1"
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

        {/* --- Strategic Benefits Section --- */}
        <section id="benefits" className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Title & Intro */}
            <div>
              <div className="inline-block px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                Strategic Benefits for Nigeria
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                The Hub acts as a force multiplier, transforming how data is used to protect and develop the nation. By centralizing intelligence, we unlock specific advantages.
              </p>
              <div className="hidden lg:block p-6 bg-white/5 rounded-2xl border border-white/10">
                 <FaGlobe size={40} className="text-blue-400 mb-4" />
                 <p className="text-sm text-gray-300">
                   Positioning Nigeria as a regional Leader In the African Geospatial ecosystem.
                 </p>
              </div>
            </div>

            {/* Right Column: The List */}
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white/10 rounded-xl hover:bg-white/15 transition-colors border border-white/5">
                    <div className="mt-1 shrink-0">
                        <FaCheckCircle className="text-green-400" size={20} />
                    </div>
                    <p className="text-gray-200 text-base leading-relaxed font-medium">
                        {benefit}
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