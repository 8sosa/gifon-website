"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; 
import Dr from "./media/usman.jpg";

export default function FoundingVision() {
  return (
    <>
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
            Founding Vision
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 text-justify order-2 lg:order-1"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-green-800">Dr. AA Usman</strong> is the Founder and Executive Chairman of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) and the Founder and Group Chief Executive of RESLARC Group, a pioneering Nigerian institution established to advance intelligence grade geospatial analytics, research, and applied spatial solutions.
              <br/>
              A leading advocate for the strategic application of geospatial intelligence (GEOINT) in national security, infrastructure development, climate resilience, and evidence-based governance, Dr. Usman has played a defining role in repositioning geospatial practice in Nigeria from a largely technical discipline to a strategic national capability.
            </p>
          </motion.div>

          {/* MIDDLE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center"
          >
            {/* Image & Ring Wrapper */}
            <div className="relative w-full max-w-sm">
              {/* Decorative Ring */}
              <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-700 rounded-[3rem] rotate-3 opacity-20 scale-105 blur-sm" />
              
              {/* The Image Container */}
              <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image 
                  src={Dr}
                  alt="Dr. AA Usman - Executive Chairman" 
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Name Tag (Moved Below) */}
            {/* <div className="mt-8 text-center z-10">
              <h3 className="text-gray-900 font-bold text-2xl mb-1">Dr. AA Usman</h3>
              <p className="text-green-600 font-bold text-sm uppercase tracking-wider">Founder & Executive Chairman</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">Geospatial Intelligence Foundation of Nigeria</p>
            </div> */}
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 text-justify order-3"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Through sustained institutional leadership, policy engagement, capacity development, and ecosystem building, he has contributed significantly to the emergence of Nigeria’s GEOINT landscape, emphasizing professional standards, ethical use, and alignment with the country’s critical infrastructure and development priorities.
              <br/>
              His work bridges enterprise and public interest, building indigenous capability through RESLARC while shaping national discourse, coordination, and international engagement through <span className="cooper">GIFON</span>.
              <br/>
              Dr. Usman’s vision is of a Nigeria where decisions at every level of governance are informed by integrated, predictive, and intelligence driven spatial understanding, positioning the nation as a continental leader in geospatial intelligence and location-based innovation.
            </p>

            <a 
              href="#"
              className="group inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-900 transition-colors border-b-2 border-green-200 hover:border-green-600 pb-1"
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
    {/* Testimonials */}
    <div id="testimonials" className="scroll-mt-24"></div>
    <section className="py-24 px-4 md:px-6 bg-green-900 relative overflow-hidden">
         {/* Decorative background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* <Quote className="text-green-400 w-16 h-16 mx-auto mb-6 opacity-80" /> */}
            <blockquote className="text-2xl md:text-4xl text-white font-serif leading-relaxed mb-8 italic">
                "A Legacy written on Maps- <br/>
                Building the Eyes of the Republic Through<br/>
                Geospatial Intelligence"
            </blockquote>
            <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-green-400">Dr. AA Usman</p>
                <p className="text-green-200 uppercase tracking-widest text-sm">Founder & Executive Chairman</p>
                <p className="text-green-200 uppercase tracking-widest text-md">Geospatial Intelligence Foundation of Nigeria</p>
            </div>
        </div>
    </section>
    </>
  );
}