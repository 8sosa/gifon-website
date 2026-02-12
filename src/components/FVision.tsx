"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; 
import Dr from "./media/usman.jpg";

export default function FoundingVision() {
  return (
    <>
    <section className="relative py-12 md:py-20 bg-green-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* SECTION TITLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 font-serif">
            Founding Vision
          </h2>
          <blockquote className="text-xl md:text-4xl text-gray-200 font-serif leading-relaxed mb-8 italic">
            "A Legacy written on Maps— <br className="hidden md:block" />
            Building the Eyes of the Federal Republic of Nigeria Through<br className="hidden md:block" />
            Geospatial Intelligence"
          </blockquote>
          <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mt-4 md:mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-top">
          
          {/* LEFT TEXT - Order 2 on Mobile, 1 on Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 text-justify order-2 lg:order-1"
          >
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
              <strong className="text-green-500">Dr. AA Usman</strong> is the Founder and Executive Chairman of the Geospatial Intelligence Foundation of Nigeria (<span className="cooper text-green-500">GIFON</span>) and the Founder and Group Chief Executive of RESLARC Group, a pioneering Nigerian institution established to advance intelligence grade geospatial analytics, research, and applied spatial solutions.
              <br/>
              A leading advocate for the strategic application of geospatial intelligence (GEOINT) in national security, infrastructure development, climate resilience, and evidence-based governance, Dr. Usman has played a defining role in repositioning geospatial practice in Nigeria from a largely technical discipline to a strategic national capability.
            </p>
          </motion.div>

          {/* MIDDLE IMAGE - Order 1 on Mobile, 2 on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center"
          >
            {/* Image & Ring Wrapper */}
            <div className="relative w-full max-w-[280px] md:max-w-sm mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-700 rounded-4xl md:rounded-[3rem] rotate-3 opacity-20 scale-105 blur-sm" />
              
              {/* The Image Container */}
              <div className="relative aspect-3/4 rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={Dr}
                  alt="Dr. AA Usman - Executive Chairman" 
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 400px, 33vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 mb-4"
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4">
                <p className="text-lg md:text-xl font-bold text-green-400">Dr. AA Usman</p>
                <p className="text-green-200 uppercase tracking-widest text-[10px] md:text-xs font-medium">Founder & Executive Chairman</p>
                <p className="text-green-100/80 uppercase tracking-wider text-[11px] md:text-sm mt-1 text-center">Geospatial Intelligence Foundation of Nigeria</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT - Order 3 Always */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 text-justify order-3"
          >
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
              Through sustained institutional leadership, policy engagement, capacity development, and ecosystem building, he has contributed significantly to the emergence of Nigeria’s GEOINT landscape, emphasizing professional standards, ethical use, and alignment with the country’s critical infrastructure and development priorities.
              <br/>
              His work bridges enterprise and public interest, building indigenous capability through RESLARC while shaping national discourse, coordination, and international engagement through <span className="cooper text-green-500">GIFON</span>.
              <br/>
              Dr. Usman’s vision is of a Nigeria where decisions at every level of governance are informed by integrated, predictive, and intelligence driven spatial understanding.
            </p>

            <a 
              href="#"
              className="group inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-500 transition-all border-b-2 border-green-200 hover:border-green-600 pb-1"
            >
              Read Full Biography
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>

    {/* TESTIMONIALS / QUOTE SECTION */}
    {/* <div id="testimonials" className="scroll-mt-24"></div>
    <section className="py-16 md:py-24 px-4 md:px-6 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-1">
                <p className="text-lg md:text-xl font-bold text-green-400">Dr. AA Usman</p>
                <p className="text-green-200 uppercase tracking-widest text-[10px] md:text-xs font-medium">Founder & Executive Chairman</p>
                <p className="text-green-100/80 uppercase tracking-wider text-[11px] md:text-sm mt-1">Geospatial Intelligence Foundation of Nigeria</p>
            </div>
          </motion.div>
        </div>
    </section> */}
    </>
  );
}