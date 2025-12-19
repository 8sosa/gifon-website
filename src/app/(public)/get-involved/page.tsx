"use client"; // Required for state

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Briefcase, Cpu, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import DonationModal from '@/components/DonationModal'; // Import the new modal

export default function DonatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeroSection
        title="GET INVOLVED"
        description="Join us in advancing Geospatial Intelligence. Your support fuels innovation, strengthens national security, and drives sustainable development in Nigeria."
        backgroundMedia={["/media/20240418_130158.JPG"]}
      />

      <main className="w-full font-sans">
        
        {/* ... (Section 1 remains the same) ... */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Be a Catalyst for Change
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At the Geospatial Intelligence Foundation of Nigeria (<span className="cooper font-serif font-bold">GIFON</span>), 
              we believe that collective action fuels innovation. Whether you are a professional, 
              student, or partner organization, your contribution directly impacts Nigeria&apos;s 
              resilience and technological future.
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
          </div>
        </section>
        
        {/* --- Section 2: Donation / Support Options --- */}
        <div id="donate" className="scroll-mt-24"></div>
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Support Our Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your financial and technical support allows us to expand programs, empower communities, and strengthen national resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Make a Donation</h3>
                <p className="text-gray-600 mb-6 grow">
                  One-time or recurring donations fuel our daily operations and community outreach programs.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Corporate Sponsorship</h3>
                <p className="text-gray-600 mb-6 grow">
                  Partner with us through sponsorship packages that align your brand with national innovation.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Cpu size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">In-Kind Support</h3>
                <p className="text-gray-600 mb-6 grow">
                  Contribute technology, software licenses, or equipment to empower our research labs.
                </p>
              </div>
            </div>

            {/* CTA Button - Triggers Modal */}
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-green-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-green-600/20"
              >
                Donate to <span className="cooper ml-1 font-serif">GIFON</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <p className="mt-4 text-sm text-gray-500">Secure payment processing via Paystack/Flutterwave</p>
            </div>
          </div>
        </section>

        {/* ... (Section 3: Volunteer - Same as before) ... */}
        <div id="volunteer" className="scroll-mt-24"></div>
        <section className="py-20 px-4 bg-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-green-600" />
                <span className="text-green-600 font-bold uppercase tracking-wide">Join the Community</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Volunteer Your Skills
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <span className="cooper font-serif font-bold">GIFON</span> thrives on the passion of volunteers. By dedicating your time, you contribute directly to research, event organization, and community mapping initiatives.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Research & Data Analysis', 'Advocacy Campaigns', 'Training Delivery', 'Event Organization'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg"
              >
                Become a Volunteer
              </Link>
            </div>

            {/* Right Column */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-full min-h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src='/media/ye.jpg'
                alt='Volunteer at GIFON'
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

          </div>
        </section>

        {/* --- Section 4: Final Call to Action --- */}
        <section className="py-16 bg-green-900 text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to make a difference?</h2>
            <p className="text-green-100 mb-8 text-lg">
              Whether you donate or volunteer, your action helps build a secure, data-driven society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               {/* Trigger Modal Here Too */}
               <button 
                 onClick={() => setIsModalOpen(true)}
                 className="bg-white text-green-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
                >
                 Donate Now
               </button>
               <Link href="/contact-us" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition">
                 Contact Us
               </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- RENDER MODAL --- */}
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}