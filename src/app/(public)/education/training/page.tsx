import HeroSection from '@/components/HeroSection';
import { 
  FaGlobe, 
  FaUserTie, 
  FaBuilding, 
  FaCertificate, 
  FaShieldAlt, 
  FaBook, 
  FaBriefcase, 
  FaChessKing, 
  FaMicroscope, 
  FaChalkboardTeacher, 
  FaHandshake, 
  FaCheckCircle 
} from 'react-icons/fa';

export default function TrainingCertificationPage() {
  
  // 1. Objectives Data
  const objectives = [
    {
      icon: <FaCertificate size={24} className="text-orange-500" />,
      title: "Professionalize GEOINT Practice",
      text: "Establish recognized qualifications for practitioners in Nigeria and Africa."
    },
    {
      icon: <FaBuilding size={24} className="text-blue-600" />,
      title: "Capacity Development",
      text: "Equip government agencies, private sector, and NGOs with the skills to apply geospatial intelligence."
    },
    {
      icon: <FaGlobe size={24} className="text-green-600" />,
      title: "Global Benchmarking",
      text: "Align with international certification frameworks and standards (e.g., USGIF, ISO, ICA)."
    },
    {
      icon: <FaUserTie size={24} className="text-purple-600" />,
      title: "Career Pathways",
      text: "Provide structured entry-to-advanced level training for students, professionals, and decision-makers."
    },
    {
      icon: <FaShieldAlt size={24} className="text-red-600" />,
      title: "Support Critical Infrastructure",
      text: "Train stakeholders in applying GEOINT for the 13 critical infrastructure sectors."
    }
  ];

  // 2. Programme Structure Data
  const tracks = [
    {
      title: "Foundational Certificates",
      icon: <FaBook className="text-white" size={20} />,
      headerColor: "bg-blue-600",
      courses: [
        "Introduction to GEOINT",
        "Geospatial Intelligence Fundamentals",
        "Geospatial Data Collection & Analysis",
        "Cartography & Visualization"
      ]
    },
    {
      title: "Professional Certifications",
      icon: <FaBriefcase className="text-white" size={20} />,
      headerColor: "bg-green-600",
      courses: [
        "Geospatial Intelligence for National Security & Defense",
        "GEOINT for Disaster Risk Reduction & Climate Resilience",
        "Geospatial Data Science & AI Applications",
        "Drone & Satellite Imagery Operations",
        "Geo-Cybersecurity & Data Protection"
      ]
    },
    {
      title: "Executive & Policy-Level",
      icon: <FaChessKing className="text-white" size={20} />,
      headerColor: "bg-purple-700",
      courses: [
        "Geospatial Intelligence for Policy & Decision-Making",
        "Leadership in Geospatial Security & National Development",
        "Critical Infrastructure Protection with GEOINT"
      ]
    },
    {
      title: "Specialized Short Courses",
      icon: <FaMicroscope className="text-white" size={20} />,
      headerColor: "bg-orange-600",
      courses: [
        "Urban Mapping for Development",
        "Geointelligence in Agriculture & Food Security",
        "Maritime Domain Awareness",
        "Open Source GEOINT (OSINT & ODIN)",
        "Cyber-Geo Fusion Training"
      ]
    }
  ];

  return (
    <>
      <HeroSection
        title={<><span className="cooper">GIFON</span>  Training & Certification Programmes (TCP)</>}
        description="“Building Skills. Certifying Excellence. Advancing GEOINT for Nigeria and Beyond.”"
        backgroundMedia={[
          "/media/training.jpeg",
        ]}
      />

      <main className="w-full font-sans">
        
        {/* --- Overview Section --- */}
        <section id="overview" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">Overview</h2>
            <div className="text-gray-700 leading-relaxed text-lg text-justify md:text-center space-y-6">
                <p>
                The Training & Certification Programmes (TCP) of the Geospatial
                Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) are designed to
                provide standardized, high-quality, and industry-recognized
                certifications in geospatial intelligence, data science, and
                related technologies.
                </p>
                <p className="font-medium text-green-800">
                These programmes strengthen the national workforce, build
                institutional capacity, and align Nigerian expertise with global
                GEOINT standards.
                </p>
            </div>
          </div>
        </section>

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                Objectives
                </h2>
                <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {objectives.map((obj, index) => (
                <div 
                    key={index} 
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start"
                >
                    <div className="mb-4 bg-gray-50 p-3 rounded-full shadow-sm">{obj.icon}</div>
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
                <p className="text-gray-500 max-w-2xl mx-auto">
                    We offer a comprehensive curriculum catering to every stage of professional development, from foundational skills to executive leadership.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {tracks.map((track, index) => (
                <div key={index} className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-gray-300 transition-colors">
                    
                    {/* Header Card */}
                    <div className={`${track.headerColor} p-6 flex items-center gap-4`}>
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            {track.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            {track.title}
                        </h3>
                    </div>

                    {/* List Body */}
                    <div className="p-8 bg-gray-50/50 grow">
                        <ul className="space-y-4">
                            {track.courses.map((course, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <span className="mt-1.5 mr-3 w-2 h-2 bg-gray-400 rounded-full shrink-0"></span>
                                    <span className="text-base font-medium">{course}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Delivery & Partnerships Section --- */}
        <section id="delivery-partnerships" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Delivery Model */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                  <FaChalkboardTeacher size={32} className="text-green-400" />
                  <h2 className="text-3xl font-semibold">Delivery Model</h2>
              </div>
              <ul className="space-y-4 text-gray-300 text-lg">
                {[
                    { b: "Blended Learning:", t: "In-person + online modules." },
                    { b: "Accredited Trainers:", t:<>Drawn from <span className="cooper">GIFON</span> experts, academia, military, and global partners.</> },
                    { b: "Training Labs:", t: "Practical, scenario-based exercises." },
                    { b: "Certification Exams:", t:<>Assessment-based certification aligned with <span className="cooper">GIFON</span> standards.</> },
                    { b: "CPD:", t: "Recertification and advanced training every 2 years." }
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1.5 shrink-0" size={16} />
                        <span><strong className="text-white">{item.b}</strong> {item.t}</span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Partnerships */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                  <FaHandshake size={32} className="text-blue-400" />
                  <h2 className="text-3xl font-semibold">Partnerships</h2>
              </div>
              <p className="text-gray-400 mb-4">We collaborate with a robust network to ensure our certifications meet global standards.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                      "Nigerian universities & training institutes.",
                      "International GEOINT organizations (USGIF, UN-GGIM).",
                      "Defense, security, and intelligence institutions.",
                      "Professional associations & industry players."
                  ].map((partner, i) => (
                      <div key={i} className="bg-white/10 p-4 rounded-lg border border-white/10 hover:bg-white/20 transition-colors">
                          <p className="text-sm font-medium">{partner}</p>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}