import HeroSection from '@/components/HeroSection';
import { 
  FaFileAlt, 
  FaGavel, 
  FaChalkboardTeacher, 
  FaBriefcase, 
  FaHandshake, 
  FaGlobeAfrica, 
  FaLightbulb, 
  FaArchive 
} from 'react-icons/fa';

export const dynamic = 'force-dynamic';


export default function ConferencesProceedingsPage() {
  
  // 1. Proceedings Content Data
  const resources = [
    {
      icon: <FaFileAlt size={24} className="text-blue-600" />,
      title: "Technical Papers",
      text: "Key presentations and technical papers delivered by experts and practitioners."
    },
    {
      icon: <FaGavel size={24} className="text-red-600" />,
      title: "Policy Resolutions",
      text: "Discussions and resolutions that inform national security strategies."
    },
    {
      icon: <FaChalkboardTeacher size={24} className="text-green-600" />,
      title: "Training Resources",
      text: "Modules and learning materials from capacity-building workshops."
    },
    {
      icon: <FaBriefcase size={24} className="text-purple-600" />,
      title: "Case Studies",
      text: "Best practices and field reports shared during technical sessions."
    },
    {
      icon: <FaHandshake size={24} className="text-orange-500" />,
      title: "Stakeholder Commitments",
      text: "Participant reflections and agreements towards actionable outcomes."
    }
  ];

  // 2. Impact Data
  const impacts = [
    {
      icon: <FaGlobeAfrica size={28} className="text-green-400" />,
      title: "Global Reference",
      text: "Serving as a permanent reference for stakeholders across Nigeria and the international community."
    },
    {
      icon: <FaLightbulb size={28} className="text-yellow-400" />,
      title: "Innovation Diffusion",
      text: "Spreading new ideas and evidence-based policy to drive technological advancement."
    },
    {
      icon: <FaArchive size={28} className="text-blue-400" />,
      title: "Institutional Memory",
      text: "Preserving the dialogue and discoveries of the geospatial intelligence community."
    }
  ];

  return (
    <>
      <HeroSection
        title="Conferences & Workshop Proceedings"
        description="“Documenting Dialogue. Preserving Knowledge. Shaping Policy.”"
        backgroundMedia={[
          "/media/Conference Background.jpg",
        ]}
      />

      <main className="w-full font-sans">
        
        {/* --- Overview Section --- */}
        <section id="overview" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
              Advancing the Ecosystem
            </h2>
            <div className="text-gray-700 leading-relaxed text-lg text-justify md:text-center space-y-6">
              <p>
                The Geospatial Intelligence Foundation of Nigeria (<span className="cooper font-bold">GIFON</span>)
                recognizes the value of knowledge-sharing, collaboration, and
                continuous learning in advancing the geospatial intelligence
                ecosystem.
              </p>
              <p>
                Through conferences, workshops, technical symposia, and
                roundtables, <span className="cooper font-bold">GIFON</span> creates platforms where policymakers, security
                agencies, industry leaders, researchers, and young innovators
                converge to discuss pressing issues and shape future directions.
              </p>
            </div>
          </div>
        </section>

        {/* --- Proceedings Details Section --- */}
        <section id="proceedings" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Our Knowledge Resource
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our Proceedings document these engagements, capturing critical insights for future application.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {resources.map((item, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-b-gray-200 hover:border-b-green-600 flex flex-col items-center text-center hover:-translate-y-1"
                >
                    <div className="mb-4 bg-gray-50 p-4 rounded-full">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {item.text}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Impact Section --- */}
        <section id="impact" className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-6">
                  Extending Knowledge Beyond the Venue
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                  By publishing and disseminating these records, <span className="cooper font-bold text-white">GIFON</span> strengthens its mission of building a knowledge-driven society, where every dialogue contributes to national security.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {impacts.map((impact, i) => (
                <div key={i} className="bg-white/10 p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                    <div className="mb-4">{impact.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{impact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}