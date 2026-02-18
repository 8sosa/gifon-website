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
  Diamond,
  ChevronRight,
  X,
  Clock,
  MessageCircle,
  MapPin,
  CalendarCheck,
  Loader2
} from 'lucide-react';

// --- Types ---
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
  // New Field from DB
  assignedMentor?: {
    id: string;
    name: string;
    assignedAt: string;
  };
};

// Type for Contentful Data
type MentorProfile = {
  id: string;
  fullName: string;
  role: string;
  profilePicture: string;
  specializations: string[];
  bioMotto: string;
  mentorshipAreas: string[];
  availabilityText: string;
  contactEmail: string;
};

// --- Main Component ---
export default function MembershipPortalPage() {
  const [user, setUser] = useState<User | null>(null);
  
  // Mentor State
  const [mentorDetails, setMentorDetails] = useState<MentorProfile | null>(null);
  const [isMentorLoading, setIsMentorLoading] = useState(false);
  
  // General UI State
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // 1. Check Local Storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoading(false);
    }

    // 2. Fetch Fresh User Data (Syncs assignedMentor from DB)
    const fetchFreshUserData = async () => {
      try {
        const res = await fetch('/api/users/me', { method: 'GET' });
        if (!res.ok) {
          localStorage.removeItem('user'); 
          throw new Error('Session expired. Please log in again.');
        }
        const data = await res.json();
        const freshUser = data.user;
        
        setUser(freshUser); 
        localStorage.setItem('user', JSON.stringify(freshUser)); 

        // 3. If User has a mentor assigned, fetch that mentor's Contentful profile
        if (freshUser.assignedMentor?.id) {
            fetchMentorProfile(freshUser.assignedMentor.id);
        }

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

  // Helper to fetch Contentful Data
  const fetchMentorProfile = async (mentorId: string) => {
    setIsMentorLoading(true);
    try {
        const res = await fetch('/api/mentors');
        if (res.ok) {
            const data = await res.json();
            // Find the specific mentor matching the ID stored in User DB
            const match = data.mentors.find((m: MentorProfile) => m.id === mentorId);
            if (match) setMentorDetails(match);
        }
    } catch (e) {
        console.error("Failed to load mentor details", e);
    } finally {
        setIsMentorLoading(false);
    }
  };

  // --- Handlers ---
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch (error) { console.error(error); }
    localStorage.removeItem('user');
    window.dispatchEvent(new Event("auth-change"));
    router.push('/');
  };

  const handleOpenMentorModal = () => {
    // Even if not assigned yet, we might want to show a "Pending" modal
    setIsMentorModalOpen(true);
  };

  // --- Resource Data ---
  const memberResources = [
    {
      id: "mentor", 
      title: user?.assignedMentor ? "Your Mentor" : "Mentorship Program", // Dynamic Title
      description: user?.assignedMentor 
        ? `Connect with ${user.assignedMentor.name}.` 
        : "You have not been assigned a mentor yet.",
      icon: <Diamond className="text-white" size={24} />,
      color: user?.assignedMentor ? "bg-green-600" : "bg-gray-400", // Grey out if not assigned
      action: handleOpenMentorModal, 
    },
    {
      title: "Publications Archive",
      description: "Access issues of the GeoINSIGHT Journal and Bulletin.",
      icon: <BookOpen className="text-white" size={24} />,
      color: "bg-blue-600",
      href: "/dashboard/publications",
    },
    {
      title: "Webinar Library",
      description: "Watch recordings of past masterclasses and sessions.",
      icon: <Video className="text-white" size={24} />,
      color: "bg-purple-600",
      href: "/dashboard/webinar",
    },
    {
      title: "Member Directory",
      description: "Connect with GIFON professionals and partners.",
      icon: <Users className="text-white" size={24} />,
      color: "bg-teal-600",
      href: "/dashboard/directory", 
    },
    {
      title: "Toolkits & Downloads",
      description: "Get policy briefs, reports, and project templates.",
      icon: <Download className="text-white" size={24} />,
      color: "bg-orange-500",
      href: "/dashboard/downloads",
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

  // --- Main Dashboard UI ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* 1. Top Navigation Bar */}
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
                    <Image src={user.passportUrl || user.avatar || "/ph.svg"} alt="User" fill className="object-cover" />
                </div>
            </div>
        </div>
      </header>

      {/* 2. Hero Area */}
      <div className="bg-green-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {user?.email || 'Member'}!
              </h1>
                <p className="text-green-200 text-lg">Here is an overview of your membership status and resources.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-24 bg-linear-to-r from-green-600 to-green-400 relative">
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                        <Image src={user.passportUrl || user.avatar || "/ph.svg"} alt="Profile" fill className="object-cover" />
                    </div>
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
                            <Calendar size={14} /> Joined {new Date(user.createdAt || Date.now()).getFullYear()}
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
                {memberResources.map((resource, i) => {
                  const innerContent = (
                    <>
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
                    </>
                  );

                  if (resource.action) {
                    return (
                      <button
                        key={i}
                        onClick={resource.action}
                        className="group text-left bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full w-full"
                      >
                        {innerContent}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={i}
                      href={resource.href || '#'}
                      className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      {innerContent}
                    </Link>
                  );
                })}
            </div>
          </div>

        </div>
      </main>

      {/* --- DYNAMIC MENTOR MODAL --- */}
      {isMentorModalOpen && (
        <div className="fixed inset-0 z-101 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Case 1: Loading Mentor Data */}
            {isMentorLoading && (
                <div className="h-64 flex flex-col items-center justify-center text-gray-500">
                    <Loader2 className="animate-spin mb-2" size={24} />
                    <p className="text-sm">Retrieving mentor profile...</p>
                </div>
            )}

            {/* Case 2: No Mentor Assigned yet */}
            {!isMentorLoading && !mentorDetails && (
                <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <Diamond size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Mentorship Pending</h3>
                    <p className="text-gray-500 text-sm mt-2 mb-6">
                        You have not been assigned a specific mentor yet. The GIFON team reviews student profiles and assigns mentors based on career goals.
                    </p>
                    <button 
                        onClick={() => setIsMentorModalOpen(false)}
                        className="bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Case 3: Mentor Assigned & Loaded */}
            {!isMentorLoading && mentorDetails && (
                <>
                    {/* Scrollable Content */}
                    <div className="overflow-y-auto">
                        {/* Header / Banner */}
                        <div className="h-32 bg-linear-to-r from-green-800 to-green-600 relative shrink-0">
                            <button 
                                onClick={() => setIsMentorModalOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                                <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-lg relative">
                                    <Image 
                                        src={mentorDetails.profilePicture} 
                                        alt={mentorDetails.fullName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Body Content */}
                        <div className="pt-16 pb-8 px-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900">{mentorDetails.fullName}</h3>
                            <p className="text-green-700 font-bold text-sm">{mentorDetails.role}</p>
                            <p className="text-gray-500 text-xs mt-1">
                                {mentorDetails.specializations.join(" • ")}
                            </p>
                            
                            <div className="mt-6 space-y-5">
                                {/* Bio/Motto */}
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <p className="text-sm text-green-900 italic font-medium">
                                        “{mentorDetails.bioMotto}”
                                    </p>
                                </div>

                                {/* Mentorship Areas (Tags) */}
                                <div className="text-left">
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Mentorship Areas</p>
                                    <div className="flex flex-wrap gap-2">
                                        {mentorDetails.mentorshipAreas.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability Section */}
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-left">
                                    <div className="flex items-start gap-3">
                                        <Clock className="text-green-600 mt-0.5 shrink-0" size={18} />
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase">Availability</p>
                                            <p className="text-sm font-medium text-gray-700 mt-1">
                                                {mentorDetails.availabilityText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer / Buttons (Fixed at bottom) */}
                    <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0">
                        <div className="grid grid-cols-2 gap-3">
                        <a 
                            href={`mailto:${mentorDetails.contactEmail}?subject=Mentorship%20Request%20from%20${user.name}`}
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-green-700 hover:bg-green-800 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-green-200"
                        >
                            <MessageCircle size={16} /> Request Guidance
                        </a>
                        <button 
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-bold text-sm transition-colors"
                            onClick={() => alert("Scheduling integration coming soon.")}
                        >
                            <CalendarCheck size={16} /> Schedule Session
                        </button>
                        </div>
                    </div>
                </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}