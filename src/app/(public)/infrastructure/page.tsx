import HeroSection from '@/components/HeroSection';

export default function InfrastructurePage() {
  return (
    <>
      <HeroSection
        title="Critical Infrastructure Support"
        description="Each subsection explains GIFON’s role in using GEOINT to secure vital infrastructure"
        backgroundImage="/bg/d.JPG"
      />

<main className="w-full">
  {/* --- Critical Infrastructure Support Sections --- */}

  <section id="energy" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Energy Security & Development</h2>
      <p className="text-gray-700 leading-relaxed">
        Geospatial intelligence plays a critical role in energy security by providing real-time monitoring and analysis of power infrastructure. From mapping renewable energy resources to assessing vulnerabilities in oil pipelines and power grids, GEOINT allows decision-makers to predict, prevent, and respond to disruptions. As the global demand for sustainable energy rises, geospatial tools help identify optimal sites for solar, wind, and hydroelectric facilities, while also enabling risk assessments for natural disasters or cyber threats. Ensuring energy security means safeguarding not just the supply but also the strategic systems that keep nations powered and resilient.
      </p>
    </div>
  </section>

  <section id="transportation" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Transportation</h2>
      <p className="text-gray-700 leading-relaxed">
        The transportation sector relies heavily on geospatial intelligence for planning, operations, and threat mitigation. By integrating satellite imagery, GPS data, and predictive analytics, GEOINT enhances the efficiency and security of supply chains, shipping lanes, and air traffic routes. It allows for monitoring of critical chokepoints such as seaports, bridges, and tunnels, while providing situational awareness during emergencies or terrorist threats. Moreover, geospatial tools support the development of smart transportation systems that optimize mobility in urban areas while protecting against vulnerabilities in critical infrastructure. This makes GEOINT indispensable in maintaining safe and resilient global transportation networks.
      </p>
    </div>
  </section>

  <section id="communication" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Communication</h2>
      <p className="text-gray-700 leading-relaxed">
        Communication networks form the backbone of modern society, and geospatial intelligence ensures their resilience against physical and cyber threats. By mapping communication towers, fiber optic cables, and satellite systems, GEOINT identifies potential vulnerabilities and assists in disaster recovery planning. When natural disasters strike, GEOINT provides rapid assessments of damaged communication infrastructure, helping restore connectivity quickly. Additionally, it plays a key role in monitoring and defending against cyber-physical threats targeting telecommunications, which are vital for emergency response and national security. GEOINT thus strengthens both the physical and digital layers of global communication systems.
      </p>
    </div>
  </section>

  <section id="water" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Water & Environment</h2>
      <p className="text-gray-700 leading-relaxed">
        Water security is increasingly intertwined with environmental stability, and geospatial intelligence provides the tools to safeguard both. Through satellite imagery and hydrological modeling, GEOINT enables monitoring of rivers, reservoirs, and groundwater supplies, ensuring early detection of shortages or contamination. Environmental monitoring also benefits from GEOINT by tracking deforestation, pollution, and climate-related risks such as droughts and floods. For policymakers and humanitarian organizations, these insights guide resource allocation and emergency planning. In an era of climate change, geospatial intelligence offers the foresight required to protect water resources and maintain ecological balance.
      </p>
    </div>
  </section>

  <section id="health" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Health</h2>
      <p className="text-gray-700 leading-relaxed">
        Health security is closely linked to geospatial intelligence, especially in tracking disease outbreaks and ensuring access to medical infrastructure. GEOINT enables real-time mapping of epidemic spread, healthcare facility availability, and supply chain logistics for medical resources. During crises such as pandemics or natural disasters, geospatial tools assist in prioritizing emergency response and vaccination campaigns. Beyond crisis management, GEOINT also supports long-term planning by analyzing population density, environmental conditions, and healthcare accessibility. This holistic view strengthens global health resilience and ensures that vulnerable communities are not left behind in times of need.
      </p>
    </div>
  </section>

  <section id="finance" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Finance</h2>
      <p className="text-gray-700 leading-relaxed">
        Financial systems are critical to national security, and geospatial intelligence contributes by identifying and mitigating threats to economic stability. GEOINT helps assess risks such as natural disasters that could disrupt financial hubs, and it provides insights into global trade flows and economic vulnerabilities. For example, by mapping supply chain dependencies, financial institutions can evaluate exposure to geopolitical risks. Additionally, GEOINT is used to monitor illicit activities such as smuggling or illegal resource extraction that undermine economies. By linking geography with economics, GEOINT supports financial resilience and strategic decision-making in a complex global marketplace.
      </p>
    </div>
  </section>

  <section id="government" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Government Facilities</h2>
      <p className="text-gray-700 leading-relaxed">
        Government facilities, ranging from administrative centers to defense installations, require continuous protection, and geospatial intelligence provides the necessary oversight. GEOINT enables governments to track land use, assess physical vulnerabilities, and monitor activity around sensitive sites. By integrating data from satellites, UAVs, and ground sensors, it ensures situational awareness in both urban and remote areas. During emergencies, such as natural disasters or terrorist threats, geospatial intelligence aids in evacuation planning and infrastructure resilience. Ultimately, GEOINT strengthens national governance by safeguarding the physical and digital assets essential for effective state operations.
      </p>
    </div>
  </section>

  <section id="food" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Food Security & Agriculture</h2>
      <p className="text-gray-700 leading-relaxed">
        Food security is a cornerstone of national stability, and geospatial intelligence provides critical insights for sustainable agriculture and resource management. By leveraging satellite imagery and soil analysis, GEOINT helps farmers optimize crop yields and monitor environmental stressors such as drought, pests, or flooding. On a larger scale, geospatial tools identify risks to global food supply chains and assist policymakers in planning interventions. During crises, GEOINT supports rapid response by pinpointing affected areas and coordinating aid delivery. Its ability to connect environmental, economic, and humanitarian factors makes GEOINT essential in addressing the growing challenge of global food security.
      </p>
    </div>
  </section>

  <section id="defence" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Defence & Security</h2>
      <p className="text-gray-700 leading-relaxed">
        Defence and security are core domains where geospatial intelligence has long been indispensable. GEOINT enables monitoring of adversary movements, battlefield terrain analysis, and strategic planning for military operations. Its ability to integrate satellite imagery, drone surveillance, and geospatial analytics provides commanders with near real-time situational awareness. Beyond combat, GEOINT supports counterterrorism, border security, and disaster response operations, making it a versatile tool for safeguarding national and global stability. By combining precision mapping with predictive modeling, geospatial intelligence continues to be a critical enabler of defense and security in a rapidly evolving threat landscape.
      </p>
    </div>
  </section>

  <section id="it" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Information Technology</h2>
      <p className="text-gray-700 leading-relaxed">
        The IT sector underpins nearly every aspect of modern infrastructure, and geospatial intelligence enhances its security and efficiency. GEOINT supports cybersecurity by mapping the geographic dimensions of digital threats, such as identifying the physical locations of critical data centers or assessing risks from natural disasters. It also aids in designing resilient IT networks by factoring in geographic redundancy and disaster recovery planning. As digital transformation accelerates, geospatial intelligence bridges the gap between physical and virtual domains, ensuring that information systems remain robust against both environmental and adversarial threats.
      </p>
    </div>
  </section>

  <section id="industrial" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Industrial Systems</h2>
      <p className="text-gray-700 leading-relaxed">
        Industrial systems such as manufacturing plants, refineries, and logistics hubs are vital for national economies, and geospatial intelligence plays a pivotal role in their protection. GEOINT enables monitoring of industrial sites, assessing risks from environmental hazards, and identifying vulnerabilities to sabotage or cyberattacks. By integrating real-time sensor data with spatial analysis, it enhances predictive maintenance and safety planning. Additionally, GEOINT supports global supply chain management by mapping dependencies and chokepoints. This comprehensive visibility ensures that industrial systems remain operational and resilient in the face of growing economic and security challenges.
      </p>
    </div>
  </section>

  <section id="emergency" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Emergency Services</h2>
      <p className="text-gray-700 leading-relaxed">
        Emergency services rely on accurate and timely geospatial intelligence to save lives and protect communities. From fire response and search-and-rescue operations to disaster relief, GEOINT provides the situational awareness needed to deploy resources effectively. During natural disasters such as hurricanes, earthquakes, or wildfires, geospatial tools deliver rapid damage assessments and identify accessible routes for emergency responders. Furthermore, GEOINT assists in planning evacuation zones and ensuring vulnerable populations receive timely aid. By combining real-time mapping with predictive analytics, GEOINT empowers emergency services to operate with precision and efficiency under high-pressure conditions.
      </p>
    </div>
  </section>

  <section id="manufacturing" className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Manufacturing</h2>
      <p className="text-gray-700 leading-relaxed">
        The manufacturing sector is a backbone of economic growth, and geospatial intelligence ensures its security and competitiveness. By mapping industrial zones, supply routes, and workforce distribution, GEOINT provides insights that improve efficiency and resilience. It supports predictive maintenance by analyzing sensor data in geographic context, helping factories avoid costly downtime. Additionally, geospatial analysis identifies risks to manufacturing hubs from natural disasters, climate change, or geopolitical tensions. These insights allow stakeholders to plan contingencies and strengthen global supply chains, making GEOINT an essential enabler of sustainable manufacturing in an interconnected world.
      </p>
    </div>
  </section>

  <section id="space" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Space & Satellite Systems</h2>
      <p className="text-gray-700 leading-relaxed">
        Space and satellite systems form the foundation of modern geospatial intelligence, enabling global navigation, communication, and earth observation. Protecting these assets is crucial, as they are vulnerable to space weather, orbital debris, and potential adversarial actions. GEOINT supports the monitoring of satellite constellations, ensuring uninterrupted services for defense, commerce, and everyday life. Moreover, advances in space-based sensors continue to expand GEOINT’s capabilities, providing higher-resolution imagery and faster data delivery. As the space domain becomes increasingly contested, safeguarding satellite systems remains central to sustaining the flow of geospatial intelligence worldwide.
      </p>
    </div>
  </section>
</main>

    </>
  );
}
