"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  Video, 
  Users, 
  Download, 
  FileText, 
  Settings, 
  CreditCard,
  Edit3,
  BadgeCheck,
  Building2,
  Calendar,
  LayoutDashboard,
  LogOut,
  ChevronRight
} from 'lucide-react';

type User = {
  _id: string;
  name: string;
  email: string;
  organization: string;
  passportUrl?: string;
  avatar?: string;
  category: string;
  role: string;
  createdAt?: string; 
};

const memberResources = [
  {
    title: "Publications Archive",
    description: "Access issues of the GeoINSIGHT Journal and Bulletin.",
    icon: <BookOpen className="text-white" size={24} />,
    color: "bg-blue-600",
    href: "/resources#publications",
  },
  {
    title: "Webinar Library",
    description: "Watch recordings of past masterclasses and sessions.",
    icon: <Video className="text-white" size={24} />,
    color: "bg-purple-600",
    href: "/resources#Webinar",
  },
  {
    title: "Member Directory",
    description: "Connect with GIFON professionals and partners.",
    icon: <Users className="text-white" size={24} />,
    color: "bg-green-600",
    href: "/dashboard/directory", 
  },
  {
    title: "Toolkits & Downloads",
    description: "Get policy briefs, reports, and project templates.",
    icon: <Download className="text-white" size={24} />,
    color: "bg-orange-500",
    href: "/resources#Downloads",
  },
  {
    title: "Submit Research",
    description: "Submit a paper for the next GeoINSIGHT Journal.",
    icon: <FileText className="text-white" size={24} />,
    color: "bg-red-500",
    href: "/dashboard/submit",
  },
  {
    title: "Account Settings",
    description: "Update your profile, password, and preferences.",
    icon: <Settings className="text-white" size={24} />,
    color: "bg-slate-600",
    href: "/dashboard/settings",
  },
];

export default function MembershipPortalPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoading(false);
    }

    const fetchFreshUserData = async () => {
      try {
        const res = await fetch('/api/users/me', { method: 'GET' });
        if (!res.ok) {
          localStorage.removeItem('user'); 
          throw new Error('Session expired. Please log in again.');
        }
        const data = await res.json();
        setUser(data.user); 
        localStorage.setItem('user', JSON.stringify(data.user)); 
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          if (err.message.includes('Session expired')) router.push('/login');
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        if (!storedUser) setIsLoading(false);
      }
    };

    fetchFreshUserData();
  }, [router]);

  // --- Handlers ---
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (error) { console.error(error); }
    localStorage.removeItem('user');
    window.dispatchEvent(new Event("auth-change"));
    router.push('/');
  };

  // --- Loading / Error States ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
            <p className="text-gray-500 font-medium">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md w-full">
            <h3 className="text-xl font-bold text-red-600 mb-2">Access Error</h3>
            <p className="text-gray-600 mb-6">{error || "Could not load user data."}</p>
            <Link href="/login" className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition">
                Back to Login
            </Link>
        </div>
      </div>
    );
  }

  // --- Main Dashboard ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* 1. Top Navigation Bar (Simplified for Dashboard) */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="cooper font-bold text-green-800 text-xl">GIFON</span>
                <span className="text-gray-300 text-xl font-light">|</span>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Member Portal</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-2">
                    <span className="text-sm font-bold text-gray-800 leading-none">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.category} Member</span>
                </div>
                <div className="relative w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                    <Image src={user.avatar || "/ph.svg"} alt="User" fill className="object-cover" />
                </div>
            </div>
        </div>
      </header>

      {/* 2. Hero / Welcome Area */}
      <div className="bg-green-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-green-200 text-lg">Here is an overview of your membership status and resources.</p>
            </div>
            
            {/* UPDATED BUTTON GROUP */}
            <div className="flex flex-wrap gap-3">
                {/* Admin Button - Only renders if role is 'admin' */}
                {user.role === 'admin' && (
                    <Link 
                        href="/admin/dashboard" 
                        className="px-5 py-2.5 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-100 rounded-lg text-sm font-semibold backdrop-blur-sm transition-colors border border-yellow-500/20 flex items-center gap-2"
                    >
                        <LayoutDashboard size={16} /> Admin Panel
                    </Link>
                )}

                <Link href="/contact-us" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold backdrop-blur-sm transition-colors border border-white/10">
                    Contact Support
                </Link>
                <button onClick={handleLogout} className="px-5 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-100 rounded-lg text-sm font-semibold backdrop-blur-sm transition-colors border border-red-500/20 flex items-center gap-2">
                    <LogOut size={16} /> Sign Out
                </button>
            </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT: Profile & Status Card --- */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* ID Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-24 bg-linear-to-r from-green-600 to-green-400 relative">
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                    <Image 
                      src={user.passportUrl || user.avatar || "/ph.svg"} 
                      alt="Profile" 
                      fill 
                      className="object-cover" 
                  />                    </div>
                </div>
                <div className="pt-12 pb-6 px-6 text-center">
                    <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
                        <Building2 size={12} /> {user.organization || "No Organization"}
                    </p>
                    
                    <div className="mt-6 flex justify-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                            <BadgeCheck size={14} /> Active
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                            <Calendar size={14} /> Member since {new Date(user.createdAt || Date.now()).getFullYear()}
                        </span>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-50 grid grid-cols-2 gap-4 text-left">
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Member ID</p>
                            <p className="text-sm font-mono text-gray-700 mt-0.5 truncate" title={user._id}>...{user._id.slice(-8)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Plan</p>
                            <p className="text-sm font-medium text-gray-700 mt-0.5">{user.category}</p>
                        </div>
                    </div>

                    <Link href="/dashboard/settings" className="mt-6 w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <Edit3 size={16} /> Edit Profile
                    </Link>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                    <CreditCard size={18} /> Renewal Status
                </h3>
                <p className="text-sm text-green-800/80 mb-4 leading-relaxed">
                    Your membership is active. Renewal will be due on <span className="font-bold">Dec 31, {new Date().getFullYear()}</span>.
                </p>
                <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-sm transition-colors shadow-sm shadow-green-200">
                    Renew Membership
                </button>
            </div>

          </div>

          {/* --- RIGHT: Resources Grid --- */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                Member Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {memberResources.map((resource, i) => (
                  <Link
                    key={i}
                    href={resource.href}
                    className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${resource.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                            {resource.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{resource.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {resource.description}
                        </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm font-semibold text-gray-400 group-hover:text-green-600 transition-colors">
                        <span>Access Now</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}