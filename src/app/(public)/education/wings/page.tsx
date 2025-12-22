import HeroSection from '@/components/HeroSection';
import Link from 'next/link'; // Make sure Link is imported
// Import relevant icons from react-icons or lucide-react
import { FaVenusMars, FaShieldAlt, FaGlobeAfrica, FaGraduationCap, FaUserTie, FaBalanceScale } from 'react-icons/fa';

export default function WomenInGeointPage() {

  // Data array for the justification points - easier to map and style
  const justificationPoints = [
    {
      icon: <FaVenusMars size={24} className="text-pink-600" />,
      title: "Closing the Gender Gap in STEM and Security",
      text: "Women’s participation in science, technology, engineering, and mathematics (STEM), particularly in geospatial intelligence and security-related disciplines, remains disproportionately low. This initiative provides a pathway to bridge that gap."
    },
    {
      icon: <FaShieldAlt size={24} className="text-blue-600" />,
      title: "Enhancing National Security and Development Outcomes",
      text: "Research has shown that diverse perspectives improve problem-solving, innovation, and decision-making. By empowering women in GEOINT, Nigeria can strengthen its national security architecture and leverage broader insights for environmental management, disaster response, agriculture, and infrastructure planning."
    },
    {
      icon: <FaGlobeAfrica size={24} className="text-green-600" />,
      title: "Alignment with National and Global Priorities",
      text: "The program directly supports Nigeria’s commitments to the Sustainable Development Goals (SDGs), especially SDG 5 (Gender Equality) and SDG 9 (Industry, Innovation, and Infrastructure), while advancing the African Union’s Agenda 2063 and national development policies."
    },
    {
      icon: <FaGraduationCap size={24} className="text-purple-600" />,
      title: "Capacity Building and Talent Acceleration",
      text: "Creating mentorship, training, and research opportunities for women in GEOINT will expand the professional talent pool, encourage innovation, and foster the next generation of female geospatial leaders."
    },
    {
      icon: <FaUserTie size={24} className="text-yellow-600" />,
      title: "Creating Role Models and Mentors",
      text: "Visible female leaders in GEOINT will inspire young girls and students to pursue careers in geospatial science, remote sensing, Geospatial Intelligence, data analytics, and related security/intelligence fields."
    },
    {
      icon: <FaBalanceScale size={24} className="text-red-600" />,
      title: "Promoting Equity and Inclusive Growth",
      text: "Building an inclusive geospatial community ensures that women are not just beneficiaries of GEOINT applications but also active contributors to national intelligence, resilience, and development."
    }
  ];

  return (
    <>
      <HeroSection
        title="GIFON Women in GEOINT Program"
        description="Empowering women in the field of geospatial intelligence (GeoINT) through collaboration, professional development, mentorship, and advocacy."
        backgroundMedia={[
          "/media/wings.JPG",
        ]}
      />

      <main className="w-full">
        {/* --- Introduction Section --- */}
        <section id="introduction" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Why a Women in GEOINT Program?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify md:text-center">
              <p>
                The geospatial intelligence (GEOINT) sector plays a critical
                role in advancing national security, sustainable development,
                and technological innovation. However, women remain
                significantly underrepresented in this vital field, both in
                Nigeria and globally.
              </p>
              <p>
                This gender imbalance not only limits inclusivity but also
                constrains the full potential of geospatial solutions in
                addressing complex national challenges. Our Women in GEOINT Program
                is designed to change that.
              </p>
            </div>
          </div>
        </section>

        {/* --- Justification Section (Using Cards) --- */}
        <section id="justification" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
              Program Justification
            </h2>

            {/* Grid layout for the cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {justificationPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start" // Changed items-center to items-start
                >
                  <div className="flex items-center gap-3 mb-4"> {/* Container for icon and title */}
                    <span className="shrink-0">{point.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight"> {/* Removed text-center */}
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm grow"> {/* Added flex-grow */}
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Concluding Paragraph */}
            <p className="font-semibold text-gray-800 mt-12 text-center text-lg max-w-3xl mx-auto">
              The Women in GEOINT Program is not only a gender equity
              initiative but also a strategic investment in Nigeria’s
              security, innovation, and sustainable development future.
            </p>
          </div>
        </section>

        {/* --- Learn More Section (Kept as before) --- */}
         <section id="learn-more" className="py-16 px-4 bg-white text-center">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-2xl font-semibold mb-4 text-gray-800">Learn More & Get Involved</h2>
               <p className="text-gray-700 leading-relaxed mb-6">
                 Discover the full policy details and activities of our Women in GEOINT Forum (GI-NGW).
               </p>
               <Link // Changed from <a> to <Link>
                 href="/forums#women-in-geoint" // Link to the forum section on the portal/directory page
                 className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
               >
                 Visit the GI-NGW Forum Page
               </Link>
            </div>
         </section>
      </main>
    </>
  );
}