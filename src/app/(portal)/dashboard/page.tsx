// src/app/profile/page.tsx (or wherever your portal page is)

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter
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

// --- 1. Define a type for our User data ---
// This should match the data in your 'users' collection
type User = {
  _id: string;
  name: string;
  email: string;
  organization: string;
  avatar?: string; // Make avatar optional
  category: string; // This is the 'membership.type'
  // Add any other fields you need, e.g., phone
};

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
    href: "/dashboard/directory", // Example of a portal-only page
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
    href: "/dashboard/submit",
  },
  {
    title: "Account Settings",
    description: "Update your profile, password, and contact information.",
    icon: <FaCogs size={24} />,
    href: "/dashboard/settings",
  },
];

export default function MembershipPortalPage() {
  // --- 2. Add state for user, loading, and errors ---
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // --- 3. Add useEffect to fetch data on load ---
  useEffect(() => {
    
    // Optimistic load for fast UX
    // Load the user data we saved during login
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoading(false); // We have *some* data, so stop loading
    }

    const fetchFreshUserData = async () => {
      try {
        // Fetch data from our '/api/users/me' endpoint
        // No headers needed! The browser sends the httpOnly cookie automatically.
        const res = await fetch('/api/users/me', {
          method: 'GET',
        });

        if (!res.ok) {
          // If the cookie is invalid/expired, our API will send a 401
          // which the middleware *should* have caught, but we'll catch it here too.
          localStorage.removeItem('user'); // Clear the bad data
          throw new Error('Session expired or invalid. Please log in again.');
        }

        const data = await res.json();
        setUser(data.user); // Set the fresh user state
        
        // Re-sync localStorage with the fresh data
        localStorage.setItem('user', JSON.stringify(data.user)); 

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          if (err.message.includes('Session expired')) {
            router.push('/login');
          }
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        // Only set loading to false if we didn't have storedUser
        if (!storedUser) {
          setIsLoading(false);
        }
      }
    };

    fetchFreshUserData();
  }, [router]); // Add router to dependency array
  // --- 4. Add Loading and Error states ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading your dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-xl text-red-600">Error: {error}</p>
        <Link href="/login" className="mt-4 text-green-600 underline">
          Go to Login
        </Link>
      </div>
    );
  }
  
  // This state is in case fetching succeeds but user is null for some reason
  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-xl text-red-600">Could not load user data.</p>
        <Link href="/login" className="mt-4 text-green-600 underline">
          Go to Login
        </Link>
      </div>
    );
  }

  // --- 5. Render the page with REAL data ---
  return (
    <>
      {/* 1. Welcome Header (Replaces HeroSection for a portal) */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Welcome, {user.name}!
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
                src={user.avatar || "/ph.svg"} // Use placeholder if no avatar
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4 border-4 border-green-200"
              />
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600 mt-1">{user.organization}</p>
              <Link
                href="/dashboard/settings"
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
                  <span>{user.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Member ID:</span>
                  {/* We're using the MongoDB _id for now. You could create a custom one. */}
                  <span>...{user._id.slice(-10)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Status:</span>
                  <span className="font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Expires:</span>
                  {/* You'll need to add this field to your user model to show it */}
                  <span>TBD</span>
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