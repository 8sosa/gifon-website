"use client";

import HeroSection from '@/components/HeroSection';
import Link from "next/link";
import { FaBook, FaUsers, FaStar } from "react-icons/fa";

export default function LeadershipHistoryPage() {
  return (
    <>
    <HeroSection
      title="Professional Resources"
      // description="Access tools, datasets, training materials, and downloadables to support your geospatial projects."
      backgroundMedia = {[
        "/bg/e.jpeg",
        "/bg/a.JPG",
        "/bg/b.JPG",
        "/bg/c.JPG",
        "/bg/d.JPG",
        "/ph.svg",
      ]}
    />
    <main className="bg-white text-gray-800">
      {/* Page Container */}
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12 grid lg:grid-cols-3 gap-12">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Mission */}
          <div>
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FaUsers className="text-blue-600 mr-2" /> Our Mission
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Protect, promote and grow the geospatial profession.</li>
              <li>
                Support geospatial professionals at all stages of their careers.
              </li>
              <li>Sustain and strengthen the organization.</li>
            </ul>
          </div>

          {/* Strategic Goals */}
          <div>
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FaStar className="text-yellow-500 mr-2" /> Our Strategic Goals
            </h2>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href="https://theGIFON.org/resource/resmgr/documents/admin/annual_reports/urisa_annual_report_2023.pdf"
                className="text-blue-600 hover:underline"
              >
                2023 Annual Report
              </Link>
              <Link
                href="https://theGIFON.org/resource/resmgr/documents/admin/annual_reports/urisa_annual_report_2022.pdf"
                className="text-blue-600 hover:underline"
              >
                2022 Annual Report
              </Link>
            </div>
          </div>

          {/* Organization Documents */}
          <div>
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FaBook className="text-green-600 mr-2" /> Organization Documents
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://theGIFON.org/resource/resmgr/documents/admin/urisa_bylaws_adopted_8_15_22.pdf"
                  className="hover:underline text-blue-600"
                >
                  Bylaws
                </Link>
              </li>
              <li>
                <Link
                  href="https://theGIFON.org/resource/resmgr/documents/admin/URISA_Policy_Manual_as_of_4_.pdf"
                  className="hover:underline text-blue-600"
                >
                  Policy Manual
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.urisa.org/clientuploads/directory/Documents/Constitution.pdf"
                  className="hover:underline text-blue-600"
                >
                  Constitution
                </Link>
              </li>
              <li>
                <Link
                  href="https://theGIFON.org/resource/resmgr/documents/admin/codeofethics.pdf"
                  className="hover:underline text-blue-600"
                >
                  Ethics
                </Link>
              </li>
              <li>
                <Link
                  href="https://theGIFON.org/resource/resmgr/documents/admin/approvedjuly2025.pdf"
                  className="hover:underline text-blue-600"
                >
                  Strategic Plan
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="lg:col-span-2 space-y-12">
          {/* Intro */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Leadership & History</h1>
            <p className="text-gray-700 leading-relaxed">
              We have evolved to become the <strong>Geospatial Professional Network</strong>. 
              The GIFON is a vibrant community uniting emerging and experienced GIS professionals 
              through top-tier education, networking, and career development.
            </p>
          </div>

          {/* History */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="text-gray-700 mb-4">
              URISA emanated from a conference held on August 28, 1963 at the University of
              Southern California, organized by Edgar Horwood and attended by 48 people...
            </p>
            <Link
              href="https://theGIFON.org/resource/resmgr/documents/admin/urisa_timeline.pdf"
              className="text-blue-600 hover:underline font-medium"
            >
              View History Timeline →
            </Link>
          </div>

          {/* Board */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Board of Directors</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 text-sm">
              <li>
                <p className="font-semibold">John Nolte, GISP</p>
                <p className="text-gray-600">President – Denver Water, CO</p>
              </li>
              <li>
                <p className="font-semibold">Wendy Peloquin, GISP</p>
                <p className="text-gray-600">
                  President-Elect – Avineon, Inc., FL
                </p>
              </li>
              <li>
                <p className="font-semibold">Thomas Fisher, AICP, GISP</p>
                <p className="text-gray-600">
                  Immediate Past President – Cuyahoga County, OH
                </p>
              </li>
              {/* ...Add all board members */}
            </ul>
          </div>

          {/* Staff */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Staff</h2>
            <ul className="grid sm:grid-cols-2 gap-6 text-sm">
              <li>
                <p className="font-semibold">Wendy Nelson</p>
                <p className="text-gray-600">Executive Director</p>
              </li>
              <li>
                <p className="font-semibold">Danielle Giza</p>
                <p className="text-gray-600">
                  Online Education & Community Manager
                </p>
              </li>
              {/* ...add rest of staff */}
            </ul>
          </div>

          {/* Awards & Donations */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 border rounded-lg">
              <h3 className="flex items-center font-semibold mb-3">
                🏆 GIS Hall of Fame
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Volunteers using GIS for Good around the world. Learn more and
                support this inspiring program.
              </p>
              <Link
                href="https://theGIFON.org/donations/"
                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
              >
                Donate
              </Link>
            </div>
            <div className="p-6 bg-gray-50 border rounded-lg">
              <h3 className="flex items-center font-semibold mb-3">
                🎓 Young Professional Scholarship
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Scholarship winners participate fully at GIS-Pro with access to
                education and unmatched networking.
              </p>
              <Link
                href="https://theGIFON.org/donations/"
                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
              >
                Donate
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
