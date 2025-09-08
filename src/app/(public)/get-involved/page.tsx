import HeroSection from '@/components/HeroSection';

export default function GetInvolvedPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        // description="Get in touch with the Geospatial Intelligence Foundation of Nigeria."
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
        {/* --- Membership --- */}
        <section id="membership" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Membership</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Becoming a member of GIFON offers unique opportunities to contribute to the advancement of geospatial security and GEOINT innovation worldwide. 
              Members gain access to exclusive publications, training workshops, and collaborative research projects that shape the future of location intelligence. 
              By joining, you not only expand your professional network but also play a role in developing ethical standards, advocating policy initiatives, 
              and ensuring that geospatial technologies are used responsibly for security, resilience, and humanitarian impact. 
              Membership provides both seasoned professionals and emerging scholars a platform to exchange knowledge and push the boundaries of GEOINT applications.
            </p>
          </div>
        </section>

        {/* --- Volunteer --- */}
        <section id="volunteer" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Volunteer</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Volunteers are the driving force behind many of GIFON’s outreach and knowledge-sharing activities. 
              By donating your time and skills, you support research dissemination, event organization, and capacity-building efforts that benefit 
              professionals and communities alike. Volunteers may help curate geospatial data for humanitarian mapping, assist in youth STEM programs, 
              or contribute to policy dialogue forums focused on GEOINT. This is an excellent way to apply your expertise in practical, impactful projects 
              while gaining first-hand exposure to cutting-edge technologies and methodologies in geospatial intelligence and international security.
            </p>
          </div>
        </section>

        {/* --- Scholarships & Fellowships --- */}
        <section id="scholarships" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Scholarships & Fellowships</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              GIFON is committed to nurturing the next generation of geospatial leaders by offering scholarships and fellowships for students and 
              early-career professionals. These programs provide financial support, mentorship opportunities, and exposure to ongoing research in 
              geospatial security and GEOINT. Recipients are encouraged to pursue innovative projects that address global security challenges, 
              environmental resilience, or disaster management through geospatial analysis. By investing in education, GIFON ensures a pipeline of 
              diverse, skilled experts who will shape how spatial data is applied in government, defense, humanitarian, and private sector contexts.
            </p>
          </div>
        </section>

        {/* --- Partnerships --- */}
        <section id="partnerships" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Partnerships</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Partnerships are central to advancing geospatial intelligence globally. GIFON collaborates with universities, research institutes, 
              government agencies, and private industry to drive innovation and policy dialogue. Partners benefit from joint research opportunities, 
              access to expert networks, and platforms for testing and showcasing new geospatial technologies. Together, we tackle pressing challenges 
              such as border security, disaster response, and climate monitoring. By fostering international partnerships, GIFON builds bridges between 
              stakeholders, ensuring that GEOINT tools and strategies are developed inclusively and deployed ethically to safeguard communities worldwide.
            </p>
          </div>
        </section>

        {/* --- Careers & Internships --- */}
        <section id="careers" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Careers & Internships</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Careers and internships with GIFON provide a gateway to professional growth in the rapidly evolving field of geospatial intelligence. 
              From research and analysis roles to technology development and policy advising, our opportunities are designed to match diverse skill sets 
              and career goals. Interns gain hands-on experience with real-world projects involving satellite imagery, geospatial modeling, and policy 
              briefs, while career staff contribute to shaping global discourse on GEOINT. Whether you’re entering the field or an experienced professional, 
              working with GIFON places you at the forefront of geospatial security and intelligence innovation.
            </p>
          </div>
        </section>

        {/* --- Support GIFON --- */}
        <section id="support" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Support GIFON</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Supporting GIFON means investing in the future of geospatial intelligence for global security and development. 
              Contributions enable us to fund scholarships, expand research programs, organize international conferences, and 
              develop open-access publications that benefit the wider GEOINT community. Every donation helps strengthen our capacity 
              to respond to crises, provide training for underrepresented groups, and influence policies that ensure responsible and ethical 
              use of geospatial technologies. By supporting GIFON, you are empowering a network dedicated to applying location intelligence 
              to solve complex challenges facing societies around the world.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
