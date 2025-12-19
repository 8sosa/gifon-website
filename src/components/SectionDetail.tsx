"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sector } from "@/app/(public)/infrastructure/infrastructure"; 

export default function SectionDetail({ section }: { section: Sector }) {
  
  // --- FIX: Logic to select the main display image ---
  // If 'images' is an array, grab the first one. If it's a string, use it directly.
  const displayImage = Array.isArray(section.images) 
    ? section.images[0] 
    : section.images;

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {section.title}
            </h2>
            <div className="w-20 h-1.5 bg-green-600 mt-4 rounded-full"></div>
          </motion.div>

          {/* Description Text */}
          <article className="prose prose-lg text-gray-700 text-justify leading-relaxed">
            <p>{section.description}</p>
          </article>

          {/* Key Intelligence Highlights */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              Key Intelligence Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.highlights?.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-green-50 border border-green-100 shadow-sm flex items-center gap-3"
                >
                  <div className="text-green-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/get-involved"
              className="px-8 py-3 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition transform hover:-translate-y-0.5"
            >
              Get Involved
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-3 rounded-full border-2 border-green-600 text-green-700 font-semibold hover:bg-green-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual / Diagram */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="sticky top-24">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* --- FIX: Use the calculated displayImage variable --- */}
              <Image 
                src={displayImage} 
                alt={section.title} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium drop-shadow-md">
                 {section.summary}
              </div>
            </div>

            <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Need detailed reports?</h4>
                <p className="text-sm text-gray-600 mb-4">
                    Access our secure portal for in-depth datasets regarding {section.title}.
                </p>
                <Link href="/resources" className="text-green-700 text-sm font-bold hover:underline">
                    Visit Resource Center &rarr;
                </Link>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}