"use client";

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { JSX } from 'react';
import Image from 'next/image';
import { 
  FaBookOpen, 
  FaNewspaper, 
  FaBullhorn, 
  FaMicrophoneAlt, 
  FaChalkboardTeacher, 
  FaImages, 
  FaDownload,
  FaPlay, 
  FaVideo,
  FaCalendarAlt
} from "react-icons/fa";
import { X } from 'lucide-react';
import { ResourceItem } from './resources';

// --- 1. TYPE DEFINITIONS (Fixes the "never" errors) ---

import resourcesData from './resources';

const SectionHeader = ({ title, icon }: { title: string, icon: JSX.Element }) => (
  <div className="inline-block mb-8 text-left">
    <h2 className="text-green-600 text-3xl font-semibold flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="w-20 h-1 bg-green-600 mt-2"></div>
  </div>
);

const ResourceSection = ({ 
  id, 
  title, 
  icon, 
  data, 
  bgColor = "bg-white",
  renderItem 
}: { 
  id: string, 
  title: string, 
  icon: JSX.Element, 
  data: ResourceItem[], // Specific type here
  bgColor?: string,
  renderItem: (item: ResourceItem, idx: number) => JSX.Element 
}) => {
  return (
    <section className={`${bgColor} pt-16`} id={id}>
      <div className='max-w-5xl mx-auto px-6 py-16'>
        <SectionHeader title={title} icon={icon} />
        
        {data.length > 0 ? (
          <div className={id === 'Gallery' ? "grid grid-cols-2 md:grid-cols-4 gap-4" : (id === 'News' || id === 'Webinar') ? "grid md:grid-cols-3 gap-6" : "space-y-4"}>
            {data.map((item, idx) => renderItem(item, idx))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50/50 rounded-xl border-2 border-dashed border-gray-200 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4 text-gray-400">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-600">No {title.toLowerCase()} available</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-sm">
                We haven&apos;t published any {title.toLowerCase()} just yet. Please check back later or subscribe to our newsletter for updates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default function ResourcesPage() {
  // 1. State for the Lightbox
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  // Helper to close modal
  const closeLightbox = () => setSelectedImage(null);
  return (
    <>
      <HeroSection
        title="Resources"
        description="Access tools, datasets, training materials, and downloadables to support your geospatial projects."
        backgroundMedia = {[
          "/vids/globe.mp4"
        ]}
      />

      <main>

        {/* --- 1. MEDIA & RESOURCES (Intro) --- */}
        <section className='bg-green-50' id='media'>
          <div className='max-w-5xl mx-auto px-6 py-16 space-y-8'>
            <div className="inline-block mb-6 text-left">
              <h2 className="text-green-600 text-3xl font-semibold">
                MEDIA & RESOURCES
              </h2>
              <div className="w-20 h-1 bg-green-600 mt-2 items-start"></div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>The Geospatial Intelligence Foundation of Nigeria (<span className="cooper">GIFON</span>) is committed to transparency, knowledge-sharing, and stakeholder engagement. Our Media & Resources hub provides open access to <span className="cooper">GIFON</span>’s communications, publications, and multimedia content, serving as a central knowledge and information gateway for members, partners, and the public.</p>
              
              <p>This section offers:</p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><span className="font-semibold">News & Updates</span> – Timely coverage of <span className="cooper">GIFON</span>’s activities.</li>
                <li><span className="font-semibold">Press Releases</span> – Official statements on initiatives and partnerships.</li>
                <li><span className="font-semibold">Photo & Video Gallery</span> – Visual highlights from our events.</li>
                <li><span className="font-semibold">Publications Archive</span> – Access to research reports, white papers, and briefs.</li>
                <li><span className="font-semibold">Resource Materials</span> – Toolkits, guides, and reference documents.</li>
              </ul>
              
              <p>
                By consolidating our communication assets, <span className="font-semibold">Media & Resources</span> ensures that stakeholders stay <span className="font-semibold">informed, inspired, and empowered</span> to collaborate with <span className="cooper">GIFON</span> in shaping Nigeria’s geospatial intelligence future.
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. NEWS --- */}
        <ResourceSection 
          id="News" 
          title="News" 
          icon={<FaNewspaper size={24} />} 
          data={resourcesData.news}
          bgColor="bg-white"
          renderItem={(item, idx) => (
            <div key={idx} className="rounded-lg shadow-lg overflow-hidden bg-white flex flex-col border border-gray-100">
               <div className="relative w-full h-40 bg-gray-200">
                  <Image 
                    src={item.image || "/ph.svg"} 
                    alt={item.id} 
                    fill 
                    className="object-cover"
                  />
               </div>
               <div className="p-5 flex flex-col grow">
                  <span className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <FaCalendarAlt size={10} /> {item.date}
                  </span>
                  <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  <Link href={item.link} className="mt-auto text-green-600 font-semibold hover:underline text-sm">
                    Read Article &rarr;
                  </Link>
               </div>
            </div>
          )}
        />

        {/* --- 3. PRESS RELEASES --- */}
        <ResourceSection 
          id="Press" 
          title="Press Releases" 
          icon={<FaBullhorn size={24} />} 
          data={resourcesData.press}
          bgColor="bg-green-50"
          renderItem={(item, idx) => (
             <div key={idx} className="p-6 bg-white rounded-lg shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4 hover:shadow-md transition-shadow">
                <div>
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1 block">{item.date}</span>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                </div>
                <Link href={item.link} className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium hover:bg-green-600 hover:text-white transition-colors whitespace-nowrap">
                  Read Statement
                </Link>
             </div>
          )}
        />

        {/* --- 4. PODCAST --- */}
        <ResourceSection 
          id="Podcast" 
          title="GeoINSIGHT Podcast" 
          icon={<FaMicrophoneAlt size={24} />} 
          data={resourcesData.podcasts}
          bgColor="bg-white"
          renderItem={(item, idx) => (
             <div key={idx} className="bg-gray-900 rounded-xl overflow-hidden text-white flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 bg-gray-800 shrink-0">
                    <Image src={item.image || "/ph.svg"} alt={item.id} fill className="object-cover"/>
                </div>
                <div className="p-6 flex flex-col justify-center">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Episode {idx + 1}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-bold hover:text-green-400 transition-colors">
                        Listen Now &rarr;
                    </Link>
                </div>
             </div>
          )}
        />

        {/* --- 5. WEBINAR --- */}
        <ResourceSection 
          id="Webinar" 
          title="Webinars & Masterclasses" 
          icon={<FaChalkboardTeacher size={24} />} 
          data={resourcesData.webinars}
          bgColor="bg-green-50"
          renderItem={(item, idx) => (
             <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative w-full h-40 bg-gray-200">
                    <Image src={item.image || "/ph.svg"} alt={item.id} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.status || "Past Event"}
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    <Link href={item.link} className="block w-full text-center py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition-colors text-sm font-semibold">
                        View Details
                    </Link>
                </div>
             </div>
          )}
        />

        {/* --- 6. PUBLICATIONS --- */}
        <section className='relative w-full bg-green-900 pt-24 pb-32 overflow-hidden' id='publications'>
          
          {/* Decorative Background Pattern (Grid) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          {/* Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-green-600/20 blur-[100px] pointer-events-none"></div>

          <div className='max-w-6xl mx-auto px-6 relative z-10'>
            
            {/* Section Header */}
            <div className="mb-16 text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-green-800 text-green-300 text-xs font-bold uppercase tracking-widest mb-4 border border-green-700">
                Knowledge Hub
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-cooper">
                Publications & Research
              </h2>
              <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
                At <span className="cooper font-bold">GIFON</span>, knowledge is our currency. Explore our archive of insights, peer-reviewed research, and strategic policy documents shaping the future of geospatial intelligence.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              {resourcesData.publications.map((pub, idx) => (
                <div 
                  key={idx} 
                  id={pub.id}
                  className="group relative bg-white rounded-2xl p-8 shadow-xl border border-transparent hover:border-green-400 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>

                  {/* Icon & Header */}
                  <div className="flex items-start gap-5 mb-4">
                    <div className="shrink-0 w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      <FaBookOpen size={24}/>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-800 transition-colors">
                        {pub.title}
                      </h2>
                      <div className="w-12 h-1 bg-green-200 mt-3 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="grow text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                    {pub.description}
                  </p>

                  {/* Action Bar */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {pub.id?.replace(/-/g, ' ')}
                    </span>
                    <Link
                      href={pub.link || "#"}
                      className="inline-flex items-center gap-2 text-green-700 font-bold text-sm hover:text-green-900 transition-colors group/link"
                    >
                      Access Document 
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. PHOTO & VIDEO GALLERY --- */}
        <ResourceSection 
          id="Gallery" 
          title="Photo & Video Gallery" 
          icon={<FaImages size={24} />} 
          data={resourcesData.gallery}
          bgColor="bg-white"
          renderItem={(item, idx) => {
             const isVideo = item.type?.toLowerCase() === 'video';

             return (
               <div 
                 key={idx} 
                 // 2. Click Handler Logic
                 onClick={() => {
                    if (isVideo) {
                        // If video, open link in new tab
                        if (item.link) window.open(item.link, "_blank");
                    } else {
                        // If image, open modal
                        setSelectedImage(item);
                    }
                 }}
                 className="relative w-full aspect-square bg-gray-900 rounded-xl overflow-hidden group cursor-pointer block border border-gray-100 shadow-sm hover:shadow-md transition-all"
               >
                  {/* Thumbnail Image */}
                  <Image 
                      src={item.image || "/ph.svg"} 
                      alt={item.id} 
                      fill 
                      className={`object-cover transition-transform duration-700 ${isVideo ? 'group-hover:scale-105' : 'group-hover:scale-110'} opacity-90 group-hover:opacity-100`}
                  />

                  {/* VIDEO: Play Button Overlay */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform">
                            <FaPlay className="text-white ml-1" size={18} />
                        </div>
                        <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                            <FaVideo size={10} /> VIDEO
                        </div>
                    </div>
                  )}

                  {/* Hover Overlay with Title */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-white text-sm font-bold line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </span>
                      {item.date && <span className="text-gray-300 text-xs mt-1">{item.date}</span>}
                  </div>
               </div>
             );
          }}
      />

        {/* --- 8. DOWNLOADS --- */}
        <ResourceSection 
          id="Downloads" 
          title="Downloads" 
          icon={<FaDownload size={24} />} 
          data={resourcesData.downloads}
          bgColor="bg-green-50"
          renderItem={(item, idx) => (
            <Link key={idx} href={item.link} className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-50 transition group border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <FaDownload size={16} />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">{item.title}</h3>
                <span className="text-sm text-gray-500 font-medium">{item.type} • {item.size}</span>
              </div>
            </Link>
          )}
        />

      </main>
      {/* 3. LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={closeLightbox} // Close when clicking background
        >
            {/* Close Button */}
            <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-50"
            >
                <X size={32} />
            </button>

            {/* Image Container */}
            <div 
                className="relative w-full max-w-5xl h-auto max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
                <div className="relative w-full h-[70vh] md:h-[80vh]">
                    <Image 
                        src={selectedImage.image || "/ph.svg"} 
                        alt={selectedImage.title} 
                        fill 
                        className="object-contain"
                        priority
                    />
                </div>
                
                {/* Caption */}
                <div className="mt-4 text-center">
                    <h3 className="text-white text-lg font-bold">{selectedImage.title}</h3>
                    {selectedImage.date && <p className="text-gray-400 text-sm">{selectedImage.date}</p>}
                </div>
            </div>
        </div>
      )}
    </>
  );
}