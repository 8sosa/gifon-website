"use client"; // Portals are client-side by nature, managing user state

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaDownload, 
  FaFileUpload, 
  FaCogs, 
  FaCreditCard,
  FaEdit,
  FaIdBadge
} from 'react-icons/fa';

// --- Mock Data ---
// In a real app, you would get this from a user session or API
const mockUser = {
  name: "Dr. Fatima Bello",
  email: "fatima.bello@example.com",
  organization: "Federal Ministry of Science",
  avatar: "/ph.svg", // Placeholder for user's profile picture
  membership: {
    type: "Professional Member",
    id: "GIFON-PRO-001234",
    status: "Active",
    expires: "December 31, 2026",
  },
  forumsJoined: [
    'youngProfessionals', 
    'womenInGeoint',
    'policy'
  ], 
};

// Resources available to this member
const memberResources = [
  {
    title: "Publications Archive",
    description: "Access all past issues of the GeoINSIGHT Journal and Bulletin.",
    icon: <FaBookOpen size={24} />,
    href: "/resources#publications",
  },
  {
    title: "Webinar Recordings",
    description: "Watch recordings of all past member-only webinars and masterclasses.",
    icon: <FaChalkboardTeacher size={24} />,
    href: "/resources#Webinar",
  },
  {
    title: "Member Directory",
    description: "Connect with other GIFON professionals and institutions.",
    icon: <FaUsers size={24} />,
    href: "/directory", // Example of a portal-only page
  },
  {
    title: "Downloadable Toolkits",
    description: "Get policy briefs, research reports, and project toolkits.",
    icon: <FaDownload size={24} />,
    href: "/resources#Downloads",
  },
  {
    title: "Submit a Paper",
    description: "Submit your research for the next GeoINSIGHT Journal.",
    icon: <FaFileUpload size={24} />,
    href: "/submit",
  },
  {
    title: "Account Settings",
    description: "Update your profile, password, and contact information.",
    icon: <FaCogs size={24} />,
    href: "/settings",
  },
];
// --- End Mock Data ---


export default function MembershipPortalPage() {
  return (
    <>
      {/* 1. Welcome Header (Replaces HeroSection for a portal) */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Welcome, {mockUser.name}!
          </h1>
          <p className="text-gray-600 mt-1">
            This is your personal member dashboard.
          </p>
        </div>
      </header>

      {/* 2. Main Portal Content */}
      <main className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- Sidebar (Profile & Membership) --- */}
          <aside className="lg:col-span-1 space-y-8">
            
            {/* Profile Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src={mockUser.avatar}
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4 border-4 border-green-200"
              />
              <h2 className="text-xl font-semibold text-gray-800">{mockUser.name}</h2>
              <p className="text-sm text-gray-600">{mockUser.email}</p>
              <p className="text-sm text-gray-600 mt-1">{mockUser.organization}</p>
              <Link
                href="/settings"
                className="mt-4 inline-flex items-center gap-2 text-sm text-green-600 hover:underline"
              >
                <FaEdit />
                Edit Profile
              </Link>
            </div>

            {/* Membership Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4 flex items-center gap-2">
                <FaIdBadge className="text-green-600" />
                Membership Status
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span className="font-semibold">Level:</span>
                  <span>{mockUser.membership.type}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Member ID:</span>
                  <span>{mockUser.membership.id}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Status:</span>
                  <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    {mockUser.membership.status}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Expires:</span>
                  <span>{mockUser.membership.expires}</span>
                </li>
              </ul>
              <Link
                href="/membership#apply" // Link to renewal section
                className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                <FaCreditCard />
                Renew Now
              </Link>
            </div>
          </aside>

          {/* --- Main Content (Resources) --- */}
          <section className="lg:col-span-3">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Your Member Resources
              </h2>
              
              {/* Grid of resource cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {memberResources.map((resource) => (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="block p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-green-600 mt-1">
                        {resource.icon}
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}