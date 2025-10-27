"use client"

import Link from "next/link";
import { useState } from "react";
import MotionDiv from "@/components/MotionDiv"; 
import styles from '@/styles/Footer.module.css';
import {
    FaXTwitter,
    FaLinkedinIn,
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaWhatsapp,
    FaPhone,    // Added
    FaEnvelope,    // Added
  } from 'react-icons/fa6';
  const socialLinks = [
    { 
      name: 'X', 
      icon: <FaXTwitter size={20} />, 
      href: '#', 
      colorClass: 'text-black', // X logo color
      hoverColorClass: 'hover:text-black' 
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedinIn size={20} />, 
      href: '#', 
      colorClass: 'text-blue-700', // LinkedIn blue
      hoverColorClass: 'hover:text-blue-700' 
    },
    { 
      name: 'Facebook', 
      icon: <FaFacebookF size={20} />, 
      href: '#', 
      colorClass: 'text-blue-600', // Facebook blue
      hoverColorClass: 'hover:text-blue-600' 
    },
    { 
      name: 'Youtube', 
      icon: <FaYoutube size={20} />, 
      href: '#', 
      colorClass: 'text-red-600', // YouTube red
      hoverColorClass: 'hover:text-red-600' 
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram size={20} />, 
      href: '#', 
      colorClass: 'text-pink-600', // Instagram pink/purple
      hoverColorClass: 'hover:text-pink-600' 
    },
    { 
      name: 'Whatsapp', 
      icon: <FaWhatsapp size={20} />, 
      href: '#', 
      colorClass: 'text-green-500', // WhatsApp green
      hoverColorClass: 'hover:text-green-500' 
    },
  ];
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about'
    },
    {
      label: 'Membership',
      href: '/membership'
    },
    {
      label: 'Education',
      href: '/education',
    },
    {
      label: 'Events',
      href: '/events'
    },
    {
      label: 'Media Resources',
      href: '/media'
    },
    {
      label: 'Critical Infrastructure Support',
      href: '/infrastructure'
    },
    {
      label: 'Policies',
      href: '/policies'
    },
    {
      label: 'Programmes',
      href: '/education#programs'
    },
    // {
    //   label: 'Publications',
    //   href: '/resources#publications'
    // },
    {
      label: 'Get Involved',
      href: '/donate'
    },
  ];

export default function MembershipPage() {
    const [selected, setSelected] = useState("");

  const categories = [
    "Professional",
    "Young Professional",
    "Student",
    "Government Agency",
    "Educational Institution",
    "Platinum Corporate Partner",
    "Gold Corporate Partner",
    "Silver Corporate Partner",
    "Bronze Corporate Partner",
    "Start-up and Small Business Partner",
    "Retired",
    "Unemployed",
  ];

  return (
    <>
        <div className="pageHead"/>
        <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left/Main Content */}
        <section className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl font-bold">Geospatial Professional Network</h1>
            <p className="text-sm text-gray-700">
            Membership Software Powered by YourMembership :: Legal
            </p>

            <div className="bg-yellow-100 p-4 rounded text-sm">
            <p className="font-semibold">STOP:</p>
            <p>
                Before proceeding, if there is any chance that you are already in our
                database (prior membership or event attendee), please contact{" "}
                <a href="mailto:info@gifon.org.ng" className="text-blue-600 underline">
                info@gifon.org.ng
                </a>{" "}
                to allow us to help register you rather than creating a duplicate
                record.
            </p>
            </div>

            <p>
            All categories of membership are pro-rated for the first year, based
            on join date.
            </p>

            <h2 className="font-semibold">Individual membership categories:</h2>
            <ul className="list-disc pl-6 space-y-2">
            <li><b>Professional:</b> Individual professional membership.</li>
            <li><b>Young Professional:</b> Valid for members age 35 or under (max 5 years).</li>
            <li><b>Student:</b> Full-time students (graduate ≥ 9 credits / undergrad ≥ 12 credits).</li>
            </ul>

            <h2 className="font-semibold">Organizational membership categories:</h2>
            <ul className="list-disc pl-6 space-y-2">
            <li><b>Government Agency:</b> Includes 2 members, add more at reduced fee.</li>
            <li><b>Educational Institution:</b> Includes 2 faculty + 10 students, discounts for more.</li>
            <li><b>Partners:</b> Platinum to Start-Up/Small Business tiers with marketing benefits.</li>
            </ul>

            <div className="max-w-xl">
                <p className="mb-4 text-gray-800 font-medium">
                    Select your category of membership below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((item) => (
                    <label
                        key={item}
                        className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg px-3 py-2 hover:border-blue-500"
                    >
                        <input
                        type="radio"
                        name="membership"
                        value={item}
                        checked={selected === item}
                        onChange={(e) => setSelected(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{item}</span>
                    </label>
                    ))}
                </div>

                {selected && (
                    <p className="mt-4 text-sm text-gray-600">
                    You selected: <span className="font-semibold">{selected}</span>
                    </p>
                )}
                </div>
            <Link href="/register" >
            <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded">
            CONTINUE »
            </button>
            </Link>
        </section>

        {/* Sidebar */}
        <aside className="space-y-8">
            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Latest News</h3>
            <ul className="space-y-3 text-sm mt-2">
                <li>
                <span className="text-gray-500">8/20/2025</span><br />
                <Link href="#" className="text-blue-700 underline">
                    GIFON Young Professional Scholarship Winners Introduced
                </Link>
                </li>
                <li>
                <span className="text-gray-500">7/25/2025</span><br />
                <Link href="#" className="text-blue-700 underline">
                    2025 ESIG Winners Announced
                </Link>
                </li>
            </ul>
            </section>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Calendar</h3>
            <ul className="text-sm mt-2 space-y-2">
                <li>
                <span className="text-gray-500">8/12/2025 – 9/30/2025</span><br />
                Support U.S. Federal Geospatial Datasets
                </li>
                <li>
                <span className="text-gray-500">9/10/2025</span><br />
                Tracking Wildland Fire Progression with NASA’s Data
                </li>
            </ul>
            </section>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Online Surveys</h3>
            <p className="text-sm mt-2">Service Award Nominations</p>
            </section>

            <MotionDiv
          initial="hidden"
          whileInView="show"
        //   variants={fadeUp}
          className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            For inquiries, please reach out to us.
          </p>
          <p className='text-gray-700 leading-relaxed pb-8 text-center'>info@gifon.org.ng</p>

          {/* Responsive Grid: 1 col on mobile, 2 cols on desktop */}
          <div className="grid grid-cols-1 gap-8">
            
            {/* --- Column 1: Contact Details --- */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2">
                Our Departments
              </h3>
              
              {/* Secretariat */}
              <div>
                <p className="text-lg font-semibold text-gray-800">Secretariat</p>
                <div className="mt-2 space-y-2">
                  <a 
                    href="tel:+2347077211243" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaPhone size={14} className="text-gray-400" />
                    <span>+234 707 721 1243</span>
                  </a>
                  <a 
                    href="mailto:Secretariat@gifon.org.ng" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaEnvelope size={14} className="text-gray-400" />
                    <span>Secretariat@gifon.org.ng</span>
                  </a>
                </div>
              </div>

              {/* Outreach */}
              <div>
                <p className="text-lg font-semibold text-gray-800">Outreach</p>
                <div className="mt-2 space-y-2">
                  <a 
                    href="tel:+2347077269829" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaPhone size={14} className="text-gray-400" />
                    <span>+234 707 726 9829</span>
                  </a>
                  <a 
                    href="mailto:Outreach@gifon.org.ng" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaEnvelope size={14} className="text-gray-400" />
                    <span>Outreach@gifon.org.ng</span>
                  </a>
                </div>
              </div>

              {/* Research */}
              <div>
                <p className="text-lg font-semibold text-gray-800">Research</p>
                <div className="mt-2 space-y-2">
                  <a 
                    href="tel:+2347077396196" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaPhone size={14} className="text-gray-400" />
                    <span>+234 707 739 6196</span>
                  </a>
                  <a 
                    href="mailto:Research@gifon.org.ng" 
                    className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <FaEnvelope size={14} className="text-gray-400" />
                    <span>Research@gifon.org.ng</span>
                  </a>
                </div>
              </div>
            </div>

            {/* --- Column 2: Social Media --- */}
            <div className="md:pl-12 md:border-l md:border-gray-200">
              <h3 className="text-xl font-semibold text-green-700 border-b border-gray-200 pb-2">
                Follow Us
              </h3>
              <ul className="space-y-2 mt-6">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      // UPDATED: Removed hover:text-green-600 and added dynamic hoverColorClass
                      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 text-gray-700 ${link.hoverColorClass} transition-all`}
                    >
                      {/* UPDATED: Replaced text-green-600 with dynamic colorClass */}
                      <span className={`${link.colorClass} transition-colors`}>{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </MotionDiv>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Quick Links</h3>
            <ul>
            {menuItems.map(item => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
            </ul>
            </section>
        </aside>
        </main>
    </>
  );
}