"use client";

import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import Modal from '@/components/Modal';

const forumContent = {
  youngProfessionals: `GEOSPATIAL INTELLIGENCE FOUNDATION OF NIGERIA (GIFON)
GIFON YOUNG PROFESSIONALS’ FORUM
(GI-MYPN) POLICY DOCUMENT version 1.0
1. Introduction
The  Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN)  is committed to fostering the next generation of geospatial intelligence professionals in Nigeria.
As an extension of the  Geospatial Intelligence Foundation of Nigeria , GI-NYPN aims to provide a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector.
By empowering young talent, GI-NYPN seeks to drive Nigeria’s leadership in the geospatial intelligence landscape and to advance the professional and educational interests of young Nigerians pursuing careers in this field.
The  Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN)  is further committed to nurturing the next generation of leaders in the geospatial intelligence industry.
By providing opportunities for education, networking, mentorship, and advocacy, GI-NYPN aims to ensure that young professionals in Nigeria are well-equipped to contribute to global advancements in GeoINT and play a key role in shaping the future of this vital sector
2. Policy Statement
GI-NYPN is dedicated to advancing the careers of young professionals in geospatial intelligence (GeoINT) by:
Promoting an inclusive and dynamic environment for professional development.
Facilitating access to industry knowledge, expertise, and networks.
Advocating for policies that enhance the role of youth in shaping the future of geospatial intelligence.
Ensuring that young professionals are equipped with the technical and leadership skills needed to excel and innovate in the global GeoINT industry.
Our foundation’s policy canters on fostering collaboration, education, and mentorship among young professionals while ensuring that they have the tools and opportunities to thrive and lead in the geospatial intelligence field.
3. Core Values
Collaboration : Encouraging cooperation and knowledge-sharing among young professionals across various domains of geospatial intelligence.
Innovation : Supporting the development and adoption of innovative geospatial technologies, methodologies, and solutions.
Empowerment : Providing young professionals with the resources, mentorship, and support to excel in their careers and make meaningful contributions to the sector.
Integrity : Upholding high ethical standards and promoting accountability within the community of young professionals.
Inclusivity : Ensuring equitable opportunities for all young professionals in the geospatial field, regardless of their background.
4. Objectives of the Young Professionals Forum
GI-NYPN’s objectives are to:
Professional Development
Organize bootcamps, training programs, and certification courses aimed at enhancing both technical and soft skills for young professionals in GeoINT.
Provide access to advanced learning resources, including webinars, online courses, and masterclasses in emerging geospatial technologies.
Networking and Community Building
Create a vibrant and collaborative community where young professionals can connect, collaborate, and share ideas with peers, mentors, and industry leaders.
Host networking events, conferences, and informal meetups to foster relationships among professionals at different career stages.
Career Advancement and Mentorship
Facilitate mentorship programs that connect young professionals with experienced geospatial leaders who can guide them in their careers.
Provide career counselling, job placement assistance, and internship opportunities to bridge the gap between academia and industry.
Research and Innovation
Encourage young professionals to engage in geospatial research and innovative projects that address both local and global challenges.
Support initiatives that explore new frontiers in GeoINT, including data analytics, AI in geospatial technologies, and sustainable urban planning.
Advocacy and Representation
Advocate for the inclusion of young professionals in key decision-making processes within the geospatial intelligence community.
Represent the voice of young professionals in national and international forums on geospatial policy, education, and workforce development.
Public Awareness and Outreach
Promote the value of geospatial intelligence and the role of youth in shaping its future through public awareness campaigns, media engagement, and educational outreach programs.
Support the creation of public-facing content (articles, blogs, case studies, etc.) that showcases the contributions of young professionals to the GeoINT sector.
Gender Equality and Diversity
Ensure that initiatives within the GI-NYPN are inclusive of all genders, ethnicities, and socioeconomic backgrounds, contributing to a diverse and equitable environment.
Support programs that encourage more women and marginalized groups to pursue careers in geospatial intelligence.
Sustainability and Community Impact
Promote geospatial projects and innovations that contribute to the sustainable development goals (SDGs), focusing on environmental sustainability, urban development, and disaster risk management.
Engage young professionals in social impact projects that use geospatial intelligence to improve communities across Nigeria.
5. Membership Criteria
Eligibility : Membership is open to young professionals  (21-35 years old)  who are actively engaged in or interested in the geospatial intelligence field.
This includes students, recent graduates, and early-career professionals.
Types of Membership :
Full Members : Individuals with a degree or relevant experience in geospatial intelligence or a related field.
Associate Members : Students or individuals in the early stages of their careers who are interested in geospatial intelligence.
Membership Benefits :
Access to exclusive events, workshops, and training opportunities.
Networking with peers, mentors, and industry professionals.
Invitations to industry conferences, webinars, and collaborative research opportunities.
Career advancement resources, including job boards, mentorship, and industry insights.
6. Governance Structure
GI-NYPN will be governed by an Executive Committee that will include:
Team Leader : The Team leader of the forum responsible for providing overall direction and leadership.
Deputy Team Leader : Supports the Deputy Team Leader and leads various sub-committees and initiatives.
Secretary : Handles administrative tasks, including communication, event coordination, and documentation.
Committee Members : Volunteers who manage specific programs, such as professional development, advocacy, research, and public relations.
7. Code of Conduct
All members of GI-NYPN are expected to uphold the highest standards of professionalism, ethics, and conduct. This includes:
Respect : Treating all members with respect and dignity, regardless of background or experience.
Collaboration : Actively contributing to the goals of the foundation by sharing knowledge, resources, and ideas.
Integrity : Being honest, transparent, and responsible in all activities and engagements.
Accountability : Taking ownership of personal and collective actions, ensuring that the foundation’s activities are carried out ethically and effectively.
8. Funding and Sustainability
GI-NYPN will be supported by:
Membership Fees : Small fees that will help sustain the operations and programs of the foundation.
Sponsorships and Partnerships : Collaborations with industry partners, academic institutions, and government bodies.
Grants and Donations : Securing funding through grants and private donations to support specific projects and initiatives.
All financial decisions will be made transparently, and regular financial reports will be shared with members.
9. Monitoring and Evaluation
The progress and success of GI-NYPN will be regularly assessed through:
Annual surveys and feedback from members.
Review of key performance indicators (KPIs), such as membership growth, program participation, and career advancement rates.
Evaluation of the impact of GI-NYPN’s initiatives on both the members and the broader geospatial intelligence community in Nigeria.`,
  womenInGeoint: `GEOSPATIAL INTELLIGENCE FOUNDATION OF NIGERIA (GIFON)
GIFON WOMEN IN GEOINT FORUM
(GI-NGW): POLICY DOCUMENT version1.0
1. Introduction
The  Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW)  is a forum dedicated to empowering women in the field of geospatial and Geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy.
The foundation seeks to address the gender gap in the geospatial sector in Nigeria and promote the critical role of women in shaping the future of geospatial technologies, innovation, and applications in Nigeria and globally.
The  Geospatial Intelligence Foundation of Nigeria Women in GeoINT  is committed to advancing the role of women in the geospatial intelligence sector through education, networking, advocacy, and mentorship.
By working together, we can create a more inclusive, innovative, and sustainable geospatial ecosystem.
2. Vision
To create an inclusive and collaborative environment where women in geospatial intelligence thrive, drive technological innovation, and contribute meaningfully to national and global development through GeoINT.
3. Mission
The mission of the GI-NGW is to:
Promote gender equity and inclusion within the geospatial intelligence sector.
Support women professionals in GeoINT through education, networking, and career advancement opportunities.
Build a robust community of women in geospatial intelligence to share knowledge and resources.
Advocate for policies and initiatives that empower women in the field of geospatial intelligence in Nigeria.
4. Core Values of  GI-NGW:
Empowerment : Fostering professional growth and personal development for women in GeoINT.
Collaboration : Encouraging cooperation and partnership among women in the geospatial sector.
Innovation : Supporting the use of cutting-edge technology and innovative solutions to address challenges in the GeoINT sector.
Integrity : Upholding ethical standards and promoting transparency in all activities.
Inclusivity : Creating a welcoming space for women of all backgrounds and experiences in the geospatial field.
5. Objectives
The GI-NGW will focus on the following key objectives:
Professional Development : Organize training programs, workshops, seminars, and webinars to build technical, leadership, and soft skills.
Networking and Mentorship : Facilitate opportunities for networking and mentorship through events, conferences, and peer-to-peer engagement.
Advocacy : Advocate for policies that ensure greater representation of women in the GeoINT sector, both within Nigeria and internationally.
Research and Innovation : Promote research in geospatial intelligence and support initiatives that foster innovation led by women.
Public Awareness and Engagement : Raise awareness about the importance of women’s contributions to the geospatial intelligence field through media campaigns, publications, and public events.
6. Membership
Eligibility : Membership is open to women who are actively working in or are passionate about geospatial intelligence (GeoINT) at any stage of their careers.
Types of Membership :
Full Members : Women professionals in GeoINT who meet the criteria for participation and have paid membership fees (if applicable).
Associate Members : Women students or early-career professionals in GeoINT who wish to participate and learn from the foundation’s activities.
Membership Benefits :
Access to training and professional development resources.
Networking opportunities with industry leaders and experts.
Mentorship programs.
Priority access to foundation-led conferences, workshops, and events.
7. Governance and Leadership
The GI-NGW will be governed by the Board of Directors of GIFON, supported by the management team of GIFON.
The governance structure is designed to ensure transparency, inclusivity, and accountability.
The Board of Directors of GIFON will be responsible for overseeing the foundation's strategic direction, ensuring adherence to its mission, and approving key initiatives.
Team Leader :
The Team Leader will provide overall leadership and direction for the  (GI-NGW)  Forum.
Deputy Team Leader :
The Deputy Team Leader will support the Chairperson in governance and leadership duties.
Secretary :
Responsible for all administrative duties, including communications and record-keeping.
8. Code of Conduct
All members of the GI-NGW are expected to adhere to the following code of conduct:
Professionalism : Maintain a high level of professionalism in all activities related to the foundation.
Respect and Inclusivity : Treat all members and stakeholders with respect, ensuring that the foundation remains a welcoming space for all women, regardless of background or experience.
Ethical Practice : Uphold ethical standards and integrity in the execution of all projects and engagements.
9. Activities and Programs
GI-NGW will host a range of activities and programs that align with the mission and objectives of GIFON. These include:
Annual GeoINT workshop : A flagship event that brings together women professionals, thought leaders, and academics to discuss trends, challenges, and innovations in GeoINT.
Training : Periodic educational sessions to enhance the technical and leadership skills of members.
Networking Events : Social and professional events that provide opportunities for women to connect and collaborate.
Mentorship Programs : Pairing experienced professionals with younger members to support their career development.
Advocacy Campaigns : Public-facing campaigns that highlight the importance of women in the geospatial intelligence field and advocate for policies supporting their involvement.
10. Funding and Financials
The GI-NGW Forum will be funded through:
Membership Fees : Membership dues may be established to support the foundation’s programs and activities.
Donations and Sponsorships : The foundation will actively seek sponsorships and donations from businesses, individuals, and government agencies that support the mission of empowering women in GeoINT.
Grants : The foundation may apply for grants from local and international organizations that fund initiatives aimed at promoting women’s empowerment, innovation, and technological advancement.
All financial transactions will be carried out transparently, with regular reports provided to members and the Director of Finance of the foundation.
11. Monitoring and Evaluation
The foundation will establish clear indicators to monitor the impact of its activities.
Evaluation of programs will be conducted regularly to assess whether the objectives are being met, and to make adjustments as necessary to ensure the ongoing relevance and success of the foundation’s initiatives.
12. Amendments to the Policy
This policy document is a living document, and amendments may be made as the foundation grows and evolves.
Proposed amendments will be reviewed by the Board of Directors and communicated to members for feedback.`,
  industry: `GIFON INDUSTRY AND PRIVATE SECTOR FORUM
POLICY STATEMENT
The  Geospatial Intelligence Foundation of Nigeria (GIFON)  recognizes the critical role of the industry and private sector in driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities.
The  Industry and Private Sector Forum (IPSF)  of GIFON serves as a strategic platform to:
Facilitate Collaboration
Strengthen partnerships between GIFON, private enterprises, technology providers, and geospatial service companies.
Create a shared space for dialogue, knowledge exchange, and co-creation of solutions to Nigeria’s geospatial challenges.
Promote Innovation and Competitiveness
Encourage research, development, and adoption of emerging technologies (AI, satellite systems, drones, GIS, cyber-geo tools).
Support Nigerian companies and startups in competing globally in the geospatial and intelligence ecosystem.
Advance Economic Growth
Leverage geospatial intelligence as a driver of national productivity across the 13 critical infrastructure sectors (energy, transport, communications, defence, agriculture, water, health, finance, manufacturing, education, etc.).
Position Nigeria as a regional hub for geospatial innovation, investment, and capacity development.
Ensure Ethical and Responsible Practice
Uphold standards of data protection, privacy, and responsible geospatial intelligence use.
Promote transparency, accountability, and ethical business conduct in private sector engagements.
Contribute to National Security and Development
Mobilize private sector expertise and resources in support of Nigeria’s security architecture, resilience planning, disaster risk reduction, and smart infrastructure development.
Strengthen national geospatial intelligence readiness in alignment with government policies and global best practices.
Policy Commitment:
GIFON commits to institutionalizing the Industry and Private Sector Forum as a dynamic and inclusive mechanism for engagement, innovation, and partnership.
Through this platform, GIFON will ensure that the private sector is not only a stakeholder but also a key driver of Nigeria’s geospatial future.`,
  policy: `POLICY, GOVERNANCE & ETHICS WORKING GROUP
The Policy, Governance & Ethics Working Group (PGE-WG) of the Geospatial Intelligence Foundation of Nigeria (GIFON) is the institutional mechanism established to uphold accountability, integrity, and transparency in all our operations.
This working group provides thought leadership, oversight, and policy direction on how geospatial intelligence should be governed, regulated, and ethically applied for national development and security.
Core Mandate
Policy Development:  Drafting, reviewing, and recommending national and institutional policies that guide the responsible use of geospatial data and intelligence.
Governance Frameworks:  Designing effective governance structures to ensure alignment with national security objectives, international standards, and sustainable development goals.
Ethics Oversight:  Promoting ethical practices, preventing misuse of geospatial intelligence, and ensuring compliance with privacy, human rights, and anti-corruption standards.
Regulatory Advisory:  Advising government, industry, and civil society stakeholders on laws, regulations, and international conventions relevant to geospatial intelligence.
Capacity Building:  Building awareness and capacity in policy, ethics, and governance among stakeholders, professionals, and decision-makers.
Focus Areas
Ethical Use of GEOINT:  Safeguarding against abuse, bias, and misuse of sensitive geospatial information.
Data Privacy & Security:  Ensuring that geospatial data handling respects confidentiality, rights, and national interests.
Anti-Corruption & Accountability:  Embedding integrity in all GIFON’s operations and promoting zero-tolerance for misconduct.
Inclusive Governance:  Encouraging the participation of women, youth, academia, and the private sector in shaping GEOINT policy.
International Best Practice:  Aligning Nigeria’s GEOINT ecosystem with global standards and conventions.
Membership & Composition
The PGE-WG comprises experts drawn from:
Government policy institutions
Security and intelligence agencies
Academia and research bodies
Industry and private sector leaders
Civil society and ethics specialists
Why It Matters
Strong governance and ethical foundations are essential for the credibility and sustainability of geospatial intelligence in Nigeria.
Through the PGE-WG, GIFON ensures that innovation is balanced with responsibility, security is balanced with human rights, and progress is anchored on integrity.`,
  academia: `GIFON Academia & Research Collaboration Programme (ARCP)
“Bridging Knowledge and Practice through Geospatial Intelligence.”
Overview
The  Academia & Research Collaboration Programme (ARCP)  is an initiative of the  Geospatial Intelligence Foundation of Nigeria (GIFON)  to foster strong partnerships between universities, research institutions, and GIFON in advancing  geospatial intelligence (GEOINT)  education, research, and innovation.
The programme seeks to position Nigeria’s higher institutions and research centers as  key knowledge partners  in developing local solutions to national and regional security, resilience, and development challenges.
Programme Objectives
Strengthen Education:  Integrate GEOINT into academic curricula at undergraduate and postgraduate levels.
Promote Collaborative Research:  Encourage joint projects on national security, disaster management, climate resilience, and smart development.
Develop Talent Pipelines:  Create pathways for students and researchers to transition into careers in GEOINT.
Facilitate Knowledge Exchange:  Connect Nigerian researchers to global geospatial research networks.
Support Policy Impact:  Translate academic research into actionable insights for government and industry.
Programme Structure
1. Curriculum Integration & Training
Partner with universities to embed  Geospatial Intelligence Studies  into geography, computer science, engineering, and Defense studies curricula.
Develop short courses, electives, and certification programmes for students.
Support academic staff capacity-building in GEOINT technologies.
2. Joint Research Projects
Research grants for academia-industry-government collaborations.
Thematic areas:
GEOINT for national security & defence
Climate change and disaster risk reduction
Smart cities & infrastructure planning
Agriculture & food security mapping
AI, drones, and emerging tech in GEOINT
Annual “GIFON Research Challenge” for young scholars.
3. Internships, Fellowships & Exchanges
Student internships at GIFON, partner MDAs, and private sector organizations.
Faculty exchange programmes with global GEOINT institutions.
Postgraduate fellowships on strategic geospatial studies.
4. Knowledge Sharing Platforms
Annual Academia–GIFON Roundtable to align research with policy.
Collaborative publication in Eyes on Location: The Journal of GeoINSIGHT.
National database of geospatial researchers and projects.
5. Innovation & Start-Up Support
Link research outputs to GIFON’s Y-GeoInnovation & Tech Incubation Programme.
Support commercialization of university-based geospatial innovations.
Target Beneficiaries
Universities and higher institutions.
Research institutes and think tanks.
Students (undergraduate, postgraduate, doctoral).
Academic staff and researchers.
Policy institutions seeking evidence-based insights.
Expected Outcomes
Institutionalized Geospatial Intelligence Education in Nigerian universities.
Increased research output in GEOINT aligned with national needs.
Strengthened academia–government–industry collaboration.
Career opportunities and employability pathways for students.
Positioning Nigeria as a regional hub for GEOINT research and innovation.`,
};

interface ModalState {
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

export default function ForumsPage() {
  // Use a single state object for modal data
  const [modalData, setModalData] = useState<ModalState>({
    isOpen: false,
    content: null,
    title: null,
  });

  // Handlers to open/close modal
  const openModal = (content: string, title: string) => {
    setModalData({ isOpen: true, content, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, content: null, title: null });
  };

  return (
    <>
      <HeroSection
        title="Groups & Forums"
        // description="Explore our journal content, editorial board, and submission guidelines."
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full">
        {/* --- Updated Sections based on your documents and JSON structure --- */}
        
        {/* Section 1: Young Professions Forum */}
        <section id="ethics" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Young Professions Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is committed to fostering the next generation of geospatial intelligence professionals in Nigeria. As an extension of the Geospatial Intelligence Foundation of Nigeria , GI-NYPN aims to provide a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector. By empowering young talent, GI-NYPN seeks to drive Nigeria’s leadership in the geospatial intelligence landscape and to advance the professional and educational interests of young Nigerians pursuing careers in this field.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => openModal(forumContent.youngProfessionals, "Young Professions Forum")}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Women in GEOINT Forum */}
        <section id="anti-corruption" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Women in GEOINT Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW) is a forum dedicated to empowering women in the field of geospatial and Geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy. The foundation seeks to address the gender gap in the geospatial sector in Nigeria and promote the critical role of women in shaping the future of geospatial technologies, innovation, and applications in Nigeria and globally.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => openModal(forumContent.womenInGeoint, "Women in GEOINT Forum")}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Industry & Private Sector Forum */}
        <section id="fund-raising" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Industry & Private Sector Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) recognizes the critical role of the industry and private sector in driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => openModal(forumContent.industry, "Industry & Private Sector Forum")}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Policy Briefs & white Paper */}
        <section id="slavery" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Policy Briefs & white Paper</h2>
            <p className="text-gray-700 leading-relaxed">
              The Policy, Governance & Ethics Working Group (PGE-WG) of the Geospatial Intelligence Foundation of Nigeria (GIFON) is the institutional mechanism established to uphold accountability, integrity, and transparency in all our operations. This working group provides thought leadership, oversight, and policy direction on how geospatial intelligence should be governed, regulated, and ethically applied for national development and security.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => openModal(forumContent.policy, "Policy Briefs & white Paper")}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Research Reports */}
        <section id="volunteer" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Research Reports</h2>
            <p className="text-gray-700 leading-relaxed">
              The Academia & Research Collaboration Programme (ARCP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to foster strong partnerships between universities, research institutions, and GIFON in advancing geospatial intelligence (GEOINT) education, research, and innovation. The programme seeks to position Nigeria’s higher institutions and research centers as key knowledge partners in developing local solutions to national and regional security, resilience, and development challenges.
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => openModal(forumContent.academia, "Research Reports")}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* This is where the modal component is rendered.
        It's invisible until 'isOpen' becomes true.
      */}
      <Modal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        title={modalData.title}
        content={modalData.content}
      />
    </>
  );
}