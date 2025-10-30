"use client";

import HeroSection from '@/components/HeroSection';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { FaArrowRight } from 'react-icons/fa'; // Added FaPlus


const allForums = [
  {
    id: 'youngProfessionals',
    anchor: 'young-professionals',
    title: "Young Professionals Forum",
    description: "The GI-NYPN is committed to fostering the next generation of geospatial intelligence professionals in Nigeria. This forum provides a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector...",
    policyContent: `
      <h2 style="font-size: 1.25rem; font-weight: 600;">GEOSPATIAL INTELLIGENCE FOUNDATION OF NIGERIA (GIFON)</h2>
      <h2 style="font-size: 1.25rem; font-weight: 600;">GIFON YOUNG PROFESSIONALS’ FORUM</h2>
      <p><strong>(GI-MYPN) POLICY DOCUMENT version 1.0</strong></p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">1. Introduction</h3>
      <p>The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is committed to fostering the next generation of geospatial intelligence professionals in Nigeria. As an extension of the Geospatial Intelligence Foundation of Nigeria , GI-NYPN aims to provide a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector.</p>
      <p>By empowering young talent, GI-NYPN seeks to drive Nigeria’s leadership in the geospatial intelligence landscape and to advance the professional and educational interests of young Nigerians pursuing careers in this field.</p>
      <p>The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is further committed to nurturing the next generation of leaders in the geospatial intelligence industry. By providing opportunities for education, networking, mentorship, and advocacy, GI-NYPN aims to ensure that young professionals in Nigeria are well-equipped to contribute to global advancements in GeoINT and play a key role in shaping the future of this vital sector</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">2. Policy Statement</h3>
      <p>GI-NYPN is dedicated to advancing the careers of young professionals in geospatial intelligence (GeoINT) by:</p>
      <ul>
        <li>Promoting an inclusive and dynamic environment for professional development.</li>
        <li>Facilitating access to industry knowledge, expertise, and networks.</li>
        <li>Advocating for policies that enhance the role of youth in shaping the future of geospatial intelligence.</li>
        <li>Ensuring that young professionals are equipped with the technical and leadership skills needed to excel and innovate in the global GeoINT industry.</li>
      </ul>
      <p>Our foundation’s policy canters on fostering collaboration, education, and mentorship among young professionals while ensuring that they have the tools and opportunities to thrive and lead in the geospatial intelligence field.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">3. Core Values</h3>
      <p><strong>Collaboration:</strong> Encouraging cooperation and knowledge-sharing among young professionals across various domains of geospatial intelligence.</p>
      <p><strong>Innovation:</strong> Supporting the development and adoption of innovative geospatial technologies, methodologies, and solutions.</p>
      <p><strong>Empowerment:</strong> Providing young professionals with the resources, mentorship, and support to excel in their careers and make meaningful contributions to the sector.</p>
      <p><strong>Integrity:</strong> Upholding high ethical standards and promoting accountability within the community of young professionals.</p>
      <p><strong>Inclusivity:</strong> Ensuring equitable opportunities for all young professionals in the geospatial field, regardless of their background.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">4. Objectives of the Young Professionals Forum</h3>
      <p>GI-NYPN’s objectives are to:</p>
      <h4>Professional Development</h4>
      <ul>
        <li>Organize bootcamps, training programs, and certification courses aimed at enhancing both technical and soft skills for young professionals in GeoINT.</li>
        <li>Provide access to advanced learning resources, including webinars, online courses, and masterclasses in emerging geospatial technologies.</li>
      </ul>
      <h4>Networking and Community Building</h4>
      <ul>
        <li>Create a vibrant and collaborative community where young professionals can connect, collaborate, and share ideas with peers, mentors, and industry leaders.</li>
        <li>Host networking events, conferences, and informal meetups to foster relationships among professionals at different career stages.</li>
      </ul>
      <h4>Career Advancement and Mentorship</h4>
      <ul>
        <li>Facilitate mentorship programs that connect young professionals with experienced geospatial leaders who can guide them in their careers.</li>
        <li>Provide career counselling, job placement assistance, and internship opportunities to bridge the gap between academia and industry.</li>
      </ul>
      <h4>Research and Innovation</h4>
      <ul>
        <li>Encourage young professionals to engage in geospatial research and innovative projects that address both local and global challenges.</li>
        <li>Support initiatives that explore new frontiers in GeoINT, including data analytics, AI in geospatial technologies, and sustainable urban planning.</li>
      </ul>
      <h4>Advocacy and Representation</h4>
      <ul>
        <li>Advocate for the inclusion of young professionals in key decision-making processes within the geospatial intelligence community.</li>
        <li>Represent the voice of young professionals in national and international forums on geospatial policy, education, and workforce development.</li>
      </ul>
      <h4>Public Awareness and Outreach</h4>
      <ul>
        <li>Promote the value of geospatial intelligence and the role of youth in shaping its future through public awareness campaigns, media engagement, and educational outreach programs.</li>
        <li>Support the creation of public-facing content (articles, blogs, case studies, etc.) that showcases the contributions of young professionals to the GeoINT sector.</li>
      </ul>
      <h4>Gender Equality and Diversity</h4>
      <ul>
        <li>Ensure that initiatives within the GI-NYPN are inclusive of all genders, ethnicities, and socioeconomic backgrounds, contributing to a diverse and equitable environment.</li>
        <li>Support programs that encourage more women and marginalized groups to pursue careers in geospatial intelligence.</li>
      </ul>
      <h4>Sustainability and Community Impact</h4>
      <ul>
        <li>Promote geospatial projects and innovations that contribute to the sustainable development goals (SDGs), focusing on environmental sustainability, urban development, and disaster risk management.</li>
        <li>Engage young professionals in social impact projects that use geospatial intelligence to improve communities across Nigeria.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">5. Membership Criteria</h3>
      <p><strong>Eligibility:</strong> Membership is open to young professionals (21-35 years old) who are actively engaged in or interested in the geospatial intelligence field. This includes students, recent graduates, and early-career professionals.</p>
      <p><strong>Types of Membership:</strong></p>
      <ul>
        <li>Full Members: Individuals with a degree or relevant experience in geospatial intelligence or a related field.</li>
        <li>Associate Members: Students or individuals in the early stages of their careers who are interested in geospatial intelligence.</li>
      </ul>
      <p><strong>Membership Benefits:</strong></p>
      <ul>
        <li>Access to exclusive events, workshops, and training opportunities.</li>
        <li>Networking with peers, mentors, and industry professionals.</li>
        <li>Invitations to industry conferences, webinars, and collaborative research opportunities.</li>
        <li>Career advancement resources, including job boards, mentorship, and industry insights.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">6. Governance Structure</h3>
      <p>GI-NYPN will be governed by an Executive Committee that will include:</p>
      <ul>
        <li><strong>Team Leader:</strong> The Team leader of the forum responsible for providing overall direction and leadership.</li>
        <li><strong>Deputy Team Leader:</strong> Supports the Deputy Team Leader and leads various sub-committees and initiatives.</li>
        <li><strong>Secretary:</strong> Handles administrative tasks, including communication, event coordination, and documentation.</li>
        <li><strong>Committee Members:</strong> Volunteers who manage specific programs, such as professional development, advocacy, research, and public relations.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">7. Code of Conduct</h3>
      <p>All members of GI-NYPN are expected to uphold the highest standards of professionalism, ethics, and conduct. This includes:</p>
      <ul>
        <li><strong>Respect:</strong> Treating all members with respect and dignity, regardless of background or experience.</li>
        <li><strong>Collaboration:</strong> Actively contributing to the goals of the foundation by sharing knowledge, resources, and ideas.</li>
        <li><strong>Integrity:</strong> Being honest, transparent, and responsible in all activities and engagements.</li>
        <li><strong>Accountability:</strong> Taking ownership of personal and collective actions, ensuring that the foundation’s activities are carried out ethically and effectively.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">8. Funding and Sustainability</h3>
      <p>GI-NYPN will be supported by:</p>
      <ul>
        <li><strong>Membership Fees:</strong> Small fees that will help sustain the operations and programs of the foundation.</li>
        <li><strong>Sponsorships and Partnerships:</strong> Collaborations with industry partners, academic institutions, and government bodies.</li>
        <li><strong>Grants and Donations:</strong> Securing funding through grants and private donations to support specific projects and initiatives.</li>
      </ul>
      <p>All financial decisions will be made transparently, and regular financial reports will be shared with members.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">9. Monitoring and Evaluation</h3>
      <p>The progress and success of GI-NYPN will be regularly assessed through:</p>
      <ul>
        <li>Annual surveys and feedback from members.</li>
        <li>Review of key performance indicators (KPIs), such as membership growth, program participation, and career advancement rates.</li>
        <li>Evaluation of the impact of GI-NYPN’s initiatives on both the members and the broader geospatial intelligence community in Nigeria.</li>
      </ul>
    `
  },
  {
    id: 'womenInGeoint',
    anchor: 'women-in-geoint',
    title: "Women in GEOINT Forum",
    description: "The GI-NGW is a forum dedicated to empowering women in GeoINT by providing a platform for collaboration, professional development, mentorship, and advocacy. It seeks to address the gender gap in the geospatial sector in Nigeria...",
    policyContent: `
      <h2 style="font-size: 1.25rem; font-weight: 600;">GEOSPATIAL INTELLIGENCE FOUNDATION OF NIGERIA (GIFON)</h2>
      <h2 style="font-size: 1.25rem; font-weight: 600;">GIFON WOMEN IN GEOINT FORUM</h2>
      <p><strong>(GI-NGW): POLICY DOCUMENT version1.0</strong></p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">1. Introduction</h3>
      <p>The Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW) is a forum dedicated to empowering women in the field of geospatial and Geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy.</p>
      <p>The foundation seeks to address the gender gap in the geospatial sector in Nigeria and promote the critical role of women in shaping the future of geospatial technologies, innovation, and applications in Nigeria and globally.</p>
      <p>The Geospatial Intelligence Foundation of Nigeria Women in GeoINT is committed to advancing the role of women in the geospatial intelligence sector through education, networking, advocacy, and mentorship. By working together, we can create a more inclusive, innovative, and sustainable geospatial ecosystem.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">2. Vision</h3>
      <p>To create an inclusive and collaborative environment where women in geospatial intelligence thrive, drive technological innovation, and contribute meaningfully to national and global development through GeoINT.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">3. Mission</h3>
      <p>The mission of the GI-NGW is to:</p>
      <ul>
        <li>Promote gender equity and inclusion within the geospatial intelligence sector.</li>
        <li>Support women professionals in GeoINT through education, networking, and career advancement opportunities.</li>
        <li>Build a robust community of women in geospatial intelligence to share knowledge and resources.</li>
        <li>Advocate for policies and initiatives that empower women in the field of geospatial intelligence in Nigeria.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">4. Core Values of GI-NGW:</h3>
      <p><strong>Empowerment:</strong> Fostering professional growth and personal development for women in GeoINT.</p>
      <p><strong>Collaboration:</strong> Encouraging cooperation and partnership among women in the geospatial sector.</p>
      <p><strong>Innovation:</strong> Supporting the use of cutting-edge technology and innovative solutions to address challenges in the GeoINT sector.</p>
      <p><strong>Integrity:</strong> Upholding ethical standards and promoting transparency in all activities.</p>
      <p><strong>Inclusivity:</strong> Creating a welcoming space for women of all backgrounds and experiences in the geospatial field.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">5. Objectives</h3>
      <p>The GI-NGW will focus on the following key objectives:</p>
      <ul>
        <li><strong>Professional Development:</strong> Organize training programs, workshops, seminars, and webinars to build technical, leadership, and soft skills.</li>
        <li><strong>Networking and Mentorship:</strong> Facilitate opportunities for networking and mentorship through events, conferences, and peer-to-peer engagement.</li>
        <li><strong>Advocacy:</strong> Advocate for policies that ensure greater representation of women in the GeoINT sector, both within Nigeria and internationally.</li>
        <li><strong>Research and Innovation:</strong> Promote research in geospatial intelligence and support initiatives that foster innovation led by women.</li>
        <li><strong>Public Awareness and Engagement:</strong> Raise awareness about the importance of women’s contributions to the geospatial intelligence field through media campaigns, publications, and public events.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">6. Membership</h3>
      <p><strong>Eligibility:</strong> Membership is open to women who are actively working in or are passionate about geospatial intelligence (GeoINT) at any stage of their careers.</p>
      <p><strong>Types of Membership:</strong></p>
      <ul>
        <li>Full Members: Women professionals in GeoINT who meet the criteria for participation and have paid membership fees (if applicable).</li>
        <li>Associate Members: Women students or early-career professionals in GeoINT who wish to participate and learn from the foundation’s activities.</li>
      </ul>
      <p><strong>Membership Benefits:</strong></p>
      <ul>
        <li>Access to training and professional development resources.</li>
        <li>Networking opportunities with industry leaders and experts.</li>
        <li>Mentorship programs.</li>
        <li>Priority access to foundation-led conferences, workshops, and events.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">7. Governance and Leadership</h3>
      <p>The GI-NGW will be governed by the Board of Directors of GIFON, supported by the management team of GIFON. The governance structure is designed to ensure transparency, inclusivity, and accountability. The Board of Directors of GIFON will be responsible for overseeing the foundation's strategic direction, ensuring adherence to its mission, and approving key initiatives.</p>
      <ul>
        <li><strong>Team Leader:</strong> The Team Leader will provide overall leadership and direction for the (GI-NGW) Forum.</li>
        <li><strong>Deputy Team Leader:</strong> The Deputy Team Leader will support the Chairperson in governance and leadership duties.</li>
        <li><strong>Secretary:</strong> Responsible for all administrative duties, including communications and record-keeping.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">8. Code of Conduct</h3>
      <p>All members of the GI-NGW are expected to adhere to the following code of conduct:</p>
      <ul>
        <li><strong>Professionalism:</strong> Maintain a high level of professionalism in all activities related to the foundation.</li>
        <li><strong>Respect and Inclusivity:</strong> Treat all members and stakeholders with respect, ensuring that the foundation remains a welcoming space for all women, regardless of background or experience.</li>
        <li><strong>Ethical Practice:</strong> Uphold ethical standards and integrity in the execution of all projects and engagements.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">9. Activities and Programs</h3>
      <p>GI-NGW will host a range of activities and programs that align with the mission and objectives of GIFON. These include:</p>
      <ul>
        <li><strong>Annual GeoINT workshop:</strong> A flagship event that brings together women professionals, thought leaders, and academics to discuss trends, challenges, and innovations in GeoINT.</li>
        <li><strong>Training:</strong> Periodic educational sessions to enhance the technical and leadership skills of members.</li>
        <li><strong>Networking Events:</strong> Social and professional events that provide opportunities for women to connect and collaborate.</li>
        <li><strong>Mentorship Programs:</strong> Pairing experienced professionals with younger members to support their career development.</li>
        <li><strong>Advocacy Campaigns:</strong> Public-facing campaigns that highlight the importance of women in the geospatial intelligence field and advocate for policies supporting their involvement.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">10. Funding and Financials</h3>
      <p>The GI-NGW Forum will be funded through:</p>
      <ul>
        <li><strong>Membership Fees:</strong> Membership dues may be established to support the foundation’s programs and activities.</li>
        <li><strong>Donations and Sponsorships:</strong> The foundation will actively seek sponsorships and donations from businesses, individuals, and government agencies that support the mission of empowering women in GeoINT.</li>
        <li><strong>Grants:</strong> The foundation may apply for grants from local and international organizations that fund initiatives aimed at promoting women’s empowerment, innovation, and technological advancement.</li>
      </ul>
      <p>All financial transactions will be carried out transparently, with regular reports provided to members and the Director of Finance of the foundation.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">11. Monitoring and Evaluation</h3>
      <p>The foundation will establish clear indicators to monitor the impact of its activities. Evaluation of programs will be conducted regularly to assess whether the objectives are being met, and to make adjustments as necessary to ensure the ongoing relevance and success of the foundation’s initiatives.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">12. Amendments to the Policy</h3>
      <p>This policy document is a living document, and amendments may be made as the foundation grows and evolves. Proposed amendments will be reviewed by the Board of Directors and communicated to members for feedback.</p>
    `
  },
  {
    id: 'industry',
    anchor: 'industry-private-sector',
    title: "Industry & Private Sector Forum",
    description: "This forum recognizes the critical role of the industry and private sector in driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities...",
    policyContent: `
      <h2 style="font-size: 1.25rem; font-weight: 600;">GIFON INDUSTRY AND PRIVATE SECTOR FORUM</h2>
      <h2 style="font-size: 1.25rem; font-weight: 600;">POLICY STATEMENT</h2>
      <br>
      <p>The Geospatial Intelligence Foundation of Nigeria (GIFON) recognizes the critical role of the industry and private sector in driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities.</p>
      <p>The Industry and Private Sector Forum (IPSF) of GIFON serves as a strategic platform to:</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">1. Facilitate Collaboration</h3>
      <ul>
        <li>Strengthen partnerships between GIFON, private enterprises, technology providers, and geospatial service companies.</li>
        <li>Create a shared space for dialogue, knowledge exchange, and co-creation of solutions to Nigeria’s geospatial challenges.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">2. Promote Innovation and Competitiveness</h3>
      <ul>
        <li>Encourage research, development, and adoption of emerging technologies (AI, satellite systems, drones, GIS, cyber-geo tools).</li>
        <li>Support Nigerian companies and startups in competing globally in the geospatial and intelligence ecosystem.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">3. Advance Economic Growth</h3>
      <ul>
        <li>Leverage geospatial intelligence as a driver of national productivity across the 13 critical infrastructure sectors (energy, transport, communications, defence, agriculture, water, health, finance, manufacturing, education, etc.).</li>
        <li>Position Nigeria as a regional hub for geospatial innovation, investment, and capacity development.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">4. Ensure Ethical and Responsible Practice</h3>
      <ul>
        <li>Uphold standards of data protection, privacy, and responsible geospatial intelligence use.</li>
        <li>Promote transparency, accountability, and ethical business conduct in private sector engagements.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">5. Contribute to National Security and Development</h3>
      <ul>
        <li>Mobilize private sector expertise and resources in support of Nigeria’s security architecture, resilience planning, disaster risk reduction, and smart infrastructure development.</li>
        <li>Strengthen national geospatial intelligence readiness in alignment with government policies and global best practices.</li>
      </ul>
      <br>
      <p><strong>Policy Commitment:</strong></p>
      <p>GIFON commits to institutionalizing the Industry and Private Sector Forum as a dynamic and inclusive mechanism for engagement, innovation, and partnership. Through this platform, GIFON will ensure that the private sector is not only a stakeholder but also a key driver of Nigeria’s geospatial future.</p>
    `
  },
  {
    id: 'policy',
    anchor: 'policy-governance-ethics',
    title: "Policy, Governance & Ethics Group",
    description: "The PGE-WG is the institutional mechanism established to uphold accountability, integrity, and transparency. It provides thought leadership, oversight, and policy direction on how geospatial intelligence should be governed...",
    policyContent: `
      <h2 style="font-size: 1.25rem; font-weight: 600;">POLICY, GOVERNANCE & ETHICS WORKING GROUP</h2>
      <br>
      <p>The Policy, Governance & Ethics Working Group (PGE-WG) of the Geospatial Intelligence Foundation of Nigeria (GIFON) is the institutional mechanism established to uphold accountability, integrity, and transparency in all our operations. This working group provides thought leadership, oversight, and policy direction on how geospatial intelligence should be governed, regulated, and ethically applied for national development and security.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Core Mandate</h3>
      <p><strong>a. Policy Development:</strong> Drafting, reviewing, and recommending national and institutional policies that guide the responsible use of geospatial data and intelligence.</p>
      <p><strong>b. Governance Frameworks:</strong> Designing effective governance structures to ensure alignment with national security objectives, international standards, and sustainable development goals.</p>
      <p><strong>c. Ethics Oversight:</strong> Promoting ethical practices, preventing misuse of geospatial intelligence, and ensuring compliance with privacy, human rights, and anti-corruption standards.</p>
      <p><strong>d. Regulatory Advisory:</strong> Advising government, industry, and civil society stakeholders on laws, regulations, and international conventions relevant to geospatial intelligence.</p>
      <p><strong>e. Capacity Building:</strong> Building awareness and capacity in policy, ethics, and governance among stakeholders, professionals, and decision-makers.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Focus Areas</h3>
      <p><strong>a. Ethical Use of GEOINT:</strong> Safeguarding against abuse, bias, and misuse of sensitive geospatial information.</p>
      <p><strong>b. Data Privacy & Security:</strong> Ensuring that geospatial data handling respects confidentiality, rights, and national interests.</p>
      <p><strong>c. Anti-Corruption & Accountability:</strong> Embedding integrity in all GIFON’s operations and promoting zero-tolerance for misconduct.</p>
      <p><strong>d. Inclusive Governance:</strong> Encouraging the participation of women, youth, academia, and the private sector in shaping GEOINT policy.</p>
      <p><strong>· International Best Practice:</strong> Aligning Nigeria’s GEOINT ecosystem with global standards and conventions.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Membership & Composition</h3>
      <p>The PGE-WG comprises experts drawn from:</p>
      <ul>
        <li>a. Government policy institutions</li>
        <li>b. Security and intelligence agencies</li>
        <li>c. Academia and research bodies</li>
        <li>d. Industry and private sector leaders</li>
        <li>e. Civil society and ethics specialists</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Why It Matters</h3>
      <p>Strong governance and ethical foundations are essential for the credibility and sustainability of geospatial intelligence in Nigeria. Through the PGE-WG, GIFON ensures that innovation is balanced with responsibility, security is balanced with human rights, and progress is anchored on integrity.</p>
    `
  },
  {
    id: 'academia',
    anchor: 'academia-research',
    title: "Academia & Research Collaboration",
    description: "The ARCP fosters strong partnerships between universities, research institutions, and GIFON to advance GEOINT education, research, and innovation, positioning Nigeria’s higher institutions as key knowledge partners...",
    policyContent: `
      <h2 style="font-size: 1.25rem; font-weight: 600;">GIFON Academia & Research Collaboration Programme (ARCP)</h2>
      <p><em>“Bridging Knowledge and Practice through Geospatial Intelligence.”</em></p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Overview</h3>
      <p>The Academia & Research Collaboration Programme (ARCP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to foster strong partnerships between universities, research institutions, and GIFON in advancing geospatial intelligence (GEOINT) education, research, and innovation.</p>
      <p>The programme seeks to position Nigeria’s higher institutions and research centers as key knowledge partners in developing local solutions to national and regional security, resilience, and development challenges.</p>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Programme Objectives</h3>
      <ol>
        <li><strong>Strengthen Education:</strong> Integrate GEOINT into academic curricula at undergraduate and postgraduate levels.</li>
        <li><strong>Promote Collaborative Research:</strong> Encourage joint projects on national security, disaster management, climate resilience, and smart development.</li>
        <li><strong>Develop Talent Pipelines:</strong> Create pathways for students and researchers to transition into careers in GEOINT.</li>
        <li><strong>Facilitate Knowledge Exchange:</strong> Connect Nigerian researchers to global geospatial research networks.</li>
        <li><strong>Support Policy Impact:</strong> Translate academic research into actionable insights for government and industry.</li>
      </ol>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Programme Structure</h3>
      <h4>1. Curriculum Integration & Training</h4>
      <ul>
        <li>Partner with universities to embed Geospatial Intelligence Studies into geography, computer science, engineering, and Defense studies curricula.</li>
        <li>Develop short courses, electives, and certification programmes for students.</li>
        <li>Support academic staff capacity-building in GEOINT technologies.</li>
      </ul>
      <h4>2. Joint Research Projects</h4>
      <ul>
        <li>Research grants for academia-industry-government collaborations.</li>
        <li>Thematic areas:
          <ul>
            <li>GEOINT for national security & defence</li>
            <li>Climate change and disaster risk reduction</li>
            <li>Smart cities & infrastructure planning</li>
            <li>Agriculture & food security mapping</li>
            <li>AI, drones, and emerging tech in GEOINT</li>
          </ul>
        </li>
        <li>Annual “GIFON Research Challenge” for young scholars.</li>
      </ul>
      <h4>3. Internships, Fellowships & Exchanges</h4>
      <ul>
        <li>Student internships at GIFON, partner MDAs, and private sector organizations.</li>
        <li>Faculty exchange programmes with global GEOINT institutions.</li>
        <li>Postgraduate fellowships on strategic geospatial studies.</li>
      </ul>
      <h4>4. Knowledge Sharing Platforms</h4>
      <ul>
        <li>Annual Academia–GIFON Roundtable to align research with policy.</li>
        <li>Collaborative publication in Eyes on Location: The Journal of GeoINSIGHT.</li>
        <li>National database of geospatial researchers and projects.</li>
      </ul>
      <h4>5. Innovation & Start-Up Support</h4>
      <ul>
        <li>Link research outputs to GIFON’s Y-GeoInnovation & Tech Incubation Programme.</li>
        <li>Support commercialization of university-based geospatial innovations.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Target Beneficiaries</h3>
      <ul>
        <li>Universities and higher institutions.</li>
        <li>Research institutes and think tanks.</li>
        <li>Students (undergraduate, postgraduate, doctoral).</li>
        <li>Academic staff and researchers.</li>
        <li>Policy institutions seeking evidence-based insights.</li>
      </ul>
      <br>
      <h3 style="font-size: 1.25rem; font-weight: 600;">Expected Outcomes</h3>
      <ul>
        <li>Institutionalized Geospatial Intelligence Education in Nigerian universities.</li>
        <li>Increased research output in GEOINT aligned with national needs.</li>
        <li>Strengthened academia–government–industry collaboration.</li>
        <li>Career opportunities and employability pathways for students.</li>
        <li>Positioning Nigeria as a regional hub for GEOINT research and innovation.</li>
      </ul>
    `
  }
];

// --- Rest of your component code ---
// interface ModalState { ... }
// export default function DirectoryForumsPage() { ... }

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
        <section id="young-professionals" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Young Professionals Forum</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Geospatial Intelligence Foundation of Nigeria Young Professionals (GI-NYPN) is committed to fostering the next generation of geospatial intelligence professionals in Nigeria. As an extension of the Geospatial Intelligence Foundation of Nigeria , GI-NYPN aims to provide a platform for young professionals to connect, learn, innovate, and grow within the GeoINT sector. By empowering young talent, GI-NYPN seeks to drive Nigeria’s leadership in the geospatial intelligence landscape and to advance the professional and educational interests of young Nigerians pursuing careers in this field...
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // Find the specific forum data
                  const forumData = allForums.find(f => f.id === 'youngProfessionals');
                  if (forumData) {
                    // Pass the correct content and title to the modal
                    openModal(forumData.policyContent, `${forumData.title} Policy`);
                  }
                }}
                // Updated button styles to match the others
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Read Full Policy {/* Added icon for consistency */}
                <FaArrowRight size={12} /> 
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Women in GEOINT Forum */}
        <section id="anti-corruption" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Women in GEOINT Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria Women in GeoINT (GI-NGW) is a forum dedicated to empowering women in the field of geospatial and Geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy. The foundation seeks to address the gender gap in the geospatial sector in Nigeria and promote the critical role of women in shaping the future of geospatial technologies, innovation, and applications in Nigeria and globally...
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // Find the specific forum data
                  const forumData = allForums.find(f => f.id === 'womenInGeoint');
                  if (forumData) {
                    // Pass the correct content and title to the modal
                    openModal(forumData.policyContent, `${forumData.title} Policy`);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Read Full Policy {/* Added icon for consistency */}
                <FaArrowRight size={12} /> 
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Industry & Private Sector Forum */}
        <section id="fund-raising" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Industry & Private Sector Forum</h2>
            <p className="text-gray-700 leading-relaxed">
              The Geospatial Intelligence Foundation of Nigeria (GIFON) recognizes the critical role of the industry and private sector in driving innovation, investment, and sustainable applications of geospatial intelligence across national development and security priorities...
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // Find the specific forum data
                  const forumData = allForums.find(f => f.id === 'industry');
                  if (forumData) {
                    // Pass the correct content and title to the modal
                    openModal(forumData.policyContent, `${forumData.title} Policy`);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Read Full Policy {/* Added icon for consistency */}
                <FaArrowRight size={12} /> 
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Policy Briefs & white Paper */}
        <section id="slavery" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Policy Briefs & white Paper</h2>
            <p className="text-gray-700 leading-relaxed">
              The Policy, Governance & Ethics Working Group (PGE-WG) of the Geospatial Intelligence Foundation of Nigeria (GIFON) is the institutional mechanism established to uphold accountability, integrity, and transparency in all our operations. This working group provides thought leadership, oversight, and policy direction on how geospatial intelligence should be governed, regulated, and ethically applied for national development and security...
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // Find the specific forum data
                  const forumData = allForums.find(f => f.id === 'policy');
                  if (forumData) {
                    // Pass the correct content and title to the modal
                    openModal(forumData.policyContent, `${forumData.title} Policy`);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Read Full Policy {/* Added icon for consistency */}
                <FaArrowRight size={12} /> 
              </button>
            </div>
          </div>
        </section>

        {/* Section 5: Research Reports */}
        <section id="volunteer" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">Research Reports</h2>
            <p className="text-gray-700 leading-relaxed">
              The Academia & Research Collaboration Programme (ARCP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to foster strong partnerships between universities, research institutions, and GIFON in advancing geospatial intelligence (GEOINT) education, research, and innovation. The programme seeks to position Nigeria’s higher institutions and research centers as key knowledge partners in developing local solutions to national and regional security, resilience, and development challenges...
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // Find the specific forum data
                  const forumData = allForums.find(f => f.id === 'academia');
                  if (forumData) {
                    // Pass the correct content and title to the modal
                    openModal(forumData.policyContent, `${forumData.title} Policy`);
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Read Full Policy {/* Added icon for consistency */}
                <FaArrowRight size={12} /> 
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