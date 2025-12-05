import HeroSection from '@/components/HeroSection';
import { 
  FaDatabase, 
  FaMicroscope, 
  FaPuzzlePiece, 
  FaHandshake, 
  FaGavel, 
  FaCloudDownloadAlt, 
  FaAward, 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaNetworkWired,
} from 'react-icons/fa';


export default function OpenDataResearchPage() {
  
  // 1. Objectives Data
  const objectives = [
    {
      icon: <FaDatabase size={24} className="text-blue-600" />,
      title: "Promote Open Access",
      text: "Establish an open geospatial data platform for Nigeria for academia, government, and innovators."
    },
    {
      icon: <FaMicroscope size={24} className="text-purple-600" />,
      title: "Support Research & Innovation",
      text: "Foster cutting-edge research in GEOINT, remote sensing, and emerging technologies."
    },
    {
      icon: <FaPuzzlePiece size={24} className="text-orange-500" />,
      title: "Bridge Knowledge Gaps",
      text: "Address critical data and research deficiencies across Nigeria’s 13 critical infrastructure sectors."
    },
    {
      icon: <FaHandshake size={24} className="text-green-600" />,
      title: "Encourage Collaboration",
      text: "Connect researchers, policymakers, private sector, and international partners."
    },
    {
      icon: <FaGavel size={24} className="text-red-600" />,
      title: "Influence Policy",
      text: "Provide data-driven insights for strategic national planning and security."
    }
  ];

  // 2. Structure Data
  const structureItems = [
    {
      title: "Open Data Portal Development",
      icon: <FaCloudDownloadAlt size={28} className="text-white" />,
      headerColor: "bg-blue-600",
      content: (
        <>
          <p className="text-gray-600 mb-3 text-sm">Build a secure online <span className="cooper font-bold">GIFON</span> Open Data Hub featuring:</p>
          <ul className="space-y-2">
            {[
              "Satellite imagery archives",
              "GIS layers (land use, transport, health)",
              "Datasets on disaster risk & demographics",
              "Tiered access model (Open, Restricted, Researcher)"
            ].map((item, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="mr-2 mt-1 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "Research Fellowship & Grants",
      icon: <FaAward size={28} className="text-white" />,
      headerColor: "bg-green-600",
      content: (
        <ul className="space-y-2">
          {[
            "Annual GIFON Research Fellowship for postgraduates.",
            "Seed grants for applied research projects.",
            "Joint research with universities and international bodies."
          ].map((item, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700">
              <span className="mr-2 mt-1 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Publications & Knowledge",
      icon: <FaBookOpen size={28} className="text-white" />,
      headerColor: "bg-purple-600",
      content: (
        <ul className="space-y-2">
          {[
            "Annual State of Nigeria’s Geospatial Intelligence Report.",
            "Peer-reviewed GIFON Journal – Eyes on Location.",
            "Working papers and policy briefs for government."
          ].map((item, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700">
              <span className="mr-2 mt-1 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Capacity Building",
      icon: <FaChalkboardTeacher size={28} className="text-white" />,
      headerColor: "bg-orange-500",
      content: (
        <ul className="space-y-2">
          {[
            "Workshops on open data ethics and standards.",
            "Training on geospatial analytics and visualization.",
            "Data literacy programs for policymakers."
          ].map((item, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700">
              <span className="mr-2 mt-1 w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Collaborations & Networks",
      icon: <FaNetworkWired size={28} className="text-white" />,
      headerColor: "bg-teal-600",
      content: (
        <ul className="space-y-2">
          {[
            "Partner with universities, NGOs, and global bodies.",
            "Establish a GIFON Research Network.",
            "Contribute to international platforms (UN-GGIM, GEO)."
          ].map((item, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700">
              <span className="mr-2 mt-1 w-1.5 h-1.5 bg-teal-400 rounded-full shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <>
      <HeroSection
        title="GIFON Open Data & Research Programme (ODRP)"
        description="“Open Data. Open Research. Smarter Nigeria.”"
        backgroundMedia={[
          "/images/F.jpeg",
        ]}
      />

      <main className="w-full font-sans">
        
        {/* --- Overview Section --- */}
        <section id="overview" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
            
            

            <div className="text-gray-700 leading-relaxed text-lg text-justify md:text-center space-y-4">
              <p>
                The Open Data & Research Programme (ODRP) is a flagship
                initiative of the Geospatial Intelligence Foundation of Nigeria
                (<span className="cooper font-bold">GIFON</span>) aimed at promoting data accessibility, research
                collaboration, and evidence-based policy development in
                Nigeria’s geospatial intelligence ecosystem.
              </p>
              <p>
                The programme seeks to make geospatial data openly available,
                ethically managed, and widely used for national development,
                security, innovation, and academic advancement.
              </p>
            </div>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Programme Objectives
                </h2>
                <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {objectives.map((obj, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start hover:-translate-y-1"
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
            <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Programme Structure
                </h2>
                <p className="text-gray-500">A comprehensive approach to building Nigeria&apos;s data infrastructure.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {structureItems.map((item, index) => (
                <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-gray-300 transition-all">
                    {/* Header */}
                    <div className={`${item.headerColor} p-6 flex items-center gap-4`}>
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {item.title}
                        </h3>
                    </div>
                    {/* Body */}
                    <div className="p-6 bg-gray-50/30 grow">
                        {item.content}
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
                  <FaUsers size={28} className="text-green-400" />
                  <h2 className="text-3xl font-semibold">Target Beneficiaries</h2>
              </div>
              <ul className="space-y-4">
                {[
                    "Academic researchers and students.",
                    "Policymakers and government agencies.",
                    "Tech innovators, startups, and developers.",
                    "Civil society organizations and media.",
                    "International research partners."
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {item}
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
                  <FaCheck size={28} className="text-green-400" />
                  <h2 className="text-3xl font-semibold">Expected Outcomes</h2>
              </div>
              <div className="space-y-4">
                {[
                    "Creation of Nigeria’s largest open geospatial data repository.",
                    "Strengthened evidence-based decision-making at all government levels.",
                    "Enhanced innovation through access to reliable datasets.",
                    "Increased contributions to global geospatial intelligence knowledge.",
                    "A sustainable pipeline of research outputs supporting security."
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                        <FaCheck className="text-green-400 mt-1 shrink-0" />
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