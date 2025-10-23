import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
// import Link from 'next/link';

export default function DonatePage() {
  return (
    <>
      <HeroSection
        title="Professional GIS Education, Training & Events"
        // description=""
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="bg-green-50">
        <section className='max-w-5xl mx-auto px-6 py-12 space-y-16'>
          <div>
            <p>To advance in your career, it is critical to keep updating your skills, be open to new ideas and ways of doing things, and take advantage of every opportunity to learn that comes along. You may prefer self-directed learning via online courses or webinars while others learn best through formal lecture or in-person seminars, training, and conferences. GIFON has you covered, no matter your experience level, preferred learning method or professional development need! We regularly deliver education and training at in-person events and at virtual events.</p>
            <br />
            <p id='C-T'>Certainly, it takes more effort to gain necessary approvals and arrange to be away from your family and work in order to attend an in-person conference or training event. But that effort typically pays off with insights to improve not only your own performance but also that of your organization. Between educational sessions, exhibitor solutions, and hallway discussions, you are certain to identify better, faster and cheaper ways to get the work done. Getting a variety of viewpoints can help you see where we can change or improve our own ideas and processes.</p>
          </div>

          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Conferences & Training
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>
          <p>Every experience, whether it&apos;s a conference, a project, or even a conversation, presents a chance to broaden your knowledge base and stay relevant. By embracing these opportunities, you can enhance your career readiness and become a proactive contributor to your organization and the GIS profession overall.</p>
          <p>Our educational programs are led by volunteers who have a demonstrated expertise for a particular subject area and a passion for sharing knowledge with their peers. Each committee strives to present a program that is important, timely, and robust. GIFON events span various disciplines, are offered in-person and virtually, and often sometimes involve a partner organization as the other part in: GIS &         (Health/Tax Assessment/Public Safety, etc.) What&apos;s the next GIS &         event?</p>
            <div className="flex flex-col gap-6 text-gray-700">
            {[
                    {
                        title:"Professional Education & Training",
                        src: "/images/A.jpeg"
                    },
                    {
                        title:"Access to Resources",
                        src: "/images/B.jpeg"
                    },
                    {
                        title:"Meaningful Connections",
                        src: "/images/C.jpeg"
                    },
                    {
                        title:"Mentoring",
                        src: "/images/D.jpeg"
                    },
                    {
                        title:"Professional Development & Contribution",
                        src: "/images/E.jpeg"
                    },
                    {
                        title:"Visibility (for You & Your Organization)",
                        src: "/images/F.jpeg"
                    },
                    {
                        title:"New Perspectives",
                        src: "/images/G.jpeg"
                    },
                ].map((benefit, idx) => (
                    <div
                    key={idx}
                    className=" rounded-lg p-4 bg-gray-50 hover:bg-gray-100 flex flex-row items-center space-x-4 w-full"
                    >
                        <Image
                            src={`${benefit.src}` }// replace with your file
                            alt="GIS Corps GIFON"
                            width={150}
                            height={80}
                        />
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-600"> {benefit.title} </h3>
                            <p>
                                random text about the benefit to fill up space and make it look like a real paragraph. This is just placeholder text.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/* --- Static Sections for Donate Page --- */}
        {/* <section id="ways-to-support" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ways to Support GIFON</h2>
            <p className="text-gray-700 leading-relaxed">
              Your contributions help us fund projects, provide training, and support initiatives that drive national development.
            </p>
          </div>
        </section>

        <section id="donate-online" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Donate Online</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Make a secure online donation to support our mission.
            </p>
            <a href="#" className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition">Donate Now</a>
          </div>
        </section>

        <section id="volunteer" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Volunteer</h2>
            <p className="text-gray-700 leading-relaxed">
              Join our volunteer network and contribute your skills to our programmes and initiatives.
            </p>
          </div>
        </section>

        <section id="csr-opportunities" className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Corporate Social Responsibility Opportunities</h2>
            <p className="text-gray-700 leading-relaxed">
              Partner with us through CSR initiatives that align with your organization’s mission and values.
            </p>
          </div>
        </section> */}
      </main>
    </>
  );
}
