import { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import { 
  FaUniversity, 
  FaFlask, 
  FaUserGraduate, 
  FaGlobeAmericas, 
  FaLandmark, 
  FaBookReader, 
  FaProjectDiagram, 
  FaChalkboardTeacher, 
  FaLightbulb, 
  FaRocket,
  FaCheckCircle,
  FaHandshake
} from 'react-icons/fa';

export const dynamic = 'force-dynamic';

export default function AcademiaResearchPage() {
  
  // 1. Objectives Data
  const objectives = [
    {
      icon: <FaUniversity size={24} className="text-orange-500" />,
      title: "Strengthen Education",
      text: "Integrate GEOINT into academic curricula at undergraduate and postgraduate levels."
    },
    {
      icon: <FaFlask size={24} className="text-blue-600" />,
      title: "Promote Collaborative Research",
      text: "Encourage joint projects on national security, disaster management, climate resilience, and smart development."
    },
    {
      icon: <FaUserGraduate size={24} className="text-green-600" />,
      title: "Develop Talent Pipelines",
      text: "Create pathways for students and researchers to transition into careers in GEOINT."
    },
    {
      icon: <FaGlobeAmericas size={24} className="text-purple-600" />,
      title: "Facilitate Knowledge Exchange",
      text: "Connect Nigerian researchers to global geospatial research networks."
    },
    {
      icon: <FaLandmark size={24} className="text-red-600" />,
      title: "Support Policy Impact",
      text: "Translate academic research into actionable insights for government and industry."
    }
  ];

  // 2. Programme Structure Data
  const tracks = [
    {
      title: "Curriculum Integration & Training",
      icon: <FaBookReader className="text-white" size={20} />,
      headerColor: "bg-blue-600",
      items: [
        "Embed Geospatial Intelligence Studies into geography, CS, engineering, and Defense curricula.",
        "Develop short courses, electives, and certification programmes.",
        "Support academic staff capacity-building in GEOINT technologies."
      ]
    },
    {
      title: "Joint Research Projects",
      icon: <FaProjectDiagram className="text-white" size={20} />,
      headerColor: "bg-green-600",
      items: [
        "Research grants for academia-industry-government collaborations.",
        "Focus: National security, Climate change, Smart cities, Agriculture & AI.",
        <>Annual “<span className="cooper">GIFON</span> Research Challenge” for young scholars.</>
      ]
    },
    {
      title: "Internships, Fellowships & Exchanges",
      icon: <FaChalkboardTeacher className="text-white" size={20} />,
      headerColor: "bg-purple-700",
      items: [
        <>Student internships at <span className="cooper">GIFON</span>, partner MDAs, and private sector.</>,
        "Faculty exchange programmes with global GEOINT institutions.",
        "Postgraduate fellowships on strategic geospatial studies."
      ]
    },
    {
      title: "Knowledge Sharing Platforms",
      icon: <FaGlobeAmericas className="text-white" size={20} />,
      headerColor: "bg-orange-600",
      items: [
        <>Annual Academia–<span className="cooper">GIFON</span> Roundtable to align research with policy.</>,
        "Collaborative publication in 'Eyes on Location: The Journal of GeoINSIGHT'.",
        "National database of geospatial researchers and projects."
      ]
    },
    {
      title: "Innovation & Start-Up Support",
      icon: <FaRocket className="text-white" size={20} />,
      headerColor: "bg-red-600",
      items: [
        <>Link research outputs to <span className="cooper">GIFON</span>’s Y-GeoInnovation & Tech Incubation Programme.</>,
        "Support commercialization of university-based geospatial innovations."
      ]
    }
  ];

  return (
    <>
      <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
        <HeroSection
          title={<><span className="cooper">GIFON</span> Academia & Research Collaboration Program</>}
          description="“Bridging Knowledge and Practice through Geospatial Intelligence.”"
          description1={<>
                The Academia & Research Collaboration Programme is an initiative of the Geospatial
                Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) to foster strong 
                partnerships between universities, research institutions, and <span className="cooper">GIFON</span> in 
                advancing geospatial intelligence (GEOINT) education, research, and innovation.
                The programme seeks to position Nigeria’s higher institutions and research centers as key 
                knowledge partners in developing local solutions to national and regional security, 
                resilience, and development challenges.                
                </>}
          backgroundMedia={[
            "/media/academia-hero.jpg",
          ]}
        />
      </Suspense>

      <main className="w-full font-sans">

        {/* --- Objectives Section --- */}
        <section id="objectives" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                Program Objectives
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
                Program Structure
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    A multi-faceted approach to integrating GEOINT into the academic and research ecosystem of Nigeria.
                </p>
            </div>
            
            {/* Using a masonry-like grid for varied content heights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tracks.map((track, index) => (
                <div key={index} className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-gray-300 transition-colors">
                    
                    {/* Header Card */}
                    <div className={`${track.headerColor} p-6 flex items-center gap-4`}>
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            {track.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {track.title}
                        </h3>
                    </div>

                    {/* List Body */}
                    <div className="p-8 bg-gray-50/50 grow">
                        <ul className="space-y-4">
                            {track.items.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <span className="mt-2 mr-3 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                                    <span className="text-sm font-medium leading-relaxed">{item}</span>
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
        <section id="outcomes" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Beneficiaries */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                  <FaUserGraduate size={32} className="text-green-400" />
                  <h2 className="text-3xl font-semibold">Target Beneficiaries</h2>
              </div>
              <ul className="space-y-4 text-gray-300 text-lg">
                {[
                    "Universities and higher institutions.",
                    "Research institutes and think tanks.",
                    "Students (undergraduate, postgraduate, doctoral).",
                    "Academic staff and researchers.",
                    "Policy institutions seeking evidence-based insights."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1.5 shrink-0" size={16} />
                        <span className="text-gray-200">{item}</span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                  <FaLightbulb size={32} className="text-yellow-400" />
                  <h2 className="text-3xl font-semibold">Expected Outcomes</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                  {[
                      "Institutionalized GEOINT Education in Nigerian universities.",
                      "Increased research output aligned with national needs.",
                      "Strengthened academia–government–industry collaboration.",
                      "Career opportunities and employability pathways for students.",
                      "Positioning Nigeria as a regional hub for GEOINT innovation."
                  ].map((outcome, i) => (
                      <div key={i} className="bg-white/10 p-4 rounded-lg border border-white/10 hover:bg-white/20 transition-colors flex items-center gap-3">
                          <FaHandshake className="text-blue-400" />
                          <p className="text-sm font-medium">{outcome}</p>
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