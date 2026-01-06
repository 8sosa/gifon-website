"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; 
import Dr from "./media/usman.jpg";

export default function FoundingVision() {
  return (
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
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
            Founding Vision
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
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
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              A leading advocate for the strategic application of geospatial intelligence (GEOINT) in national security, infrastructure development, climate resilience, and evidence-based governance, Dr. Usman has played a defining role in repositioning geospatial practice in Nigeria from a largely technical discipline to a strategic national capability.
            </p>
          </motion.div>

          {/* MIDDLE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative"
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-700 rounded-[3rem] rotate-3 opacity-20 scale-105 blur-sm" />
            
            {/* The Image Container */}
            <div className="relative w-full max-w-sm aspect-3/4 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              {/* 2. REPLACED img with Image component */}
              <Image 
                src={Dr}
                alt="Dr. AA Usman - Executive Chairman" 
                fill
                placeholder="blur" // Free blur effect since it's a static import
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Name Tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pt-20 text-center z-10">
                 <h3 className="text-white font-bold text-xl">Dr. AA Usman</h3>
                 <p className="text-green-200 text-sm">Founder & Executive Chairman</p>
                 <p className="text-green-400 text-md">Geospatial Intelligence Foundation of Nigeria</p>
              </div>
            </div>
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
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              His work bridges enterprise and public interest, building indigenous capability through RESLARC while shaping national discourse, coordination, and international engagement through <span className="cooper">GIFON</span>.
            </p>

            <a 
              href="#"
              className="group inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-900 transition-colors border-b-2 border-green-200 hover:border-green-600 pb-1"
            >
              Read Full Biography
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}