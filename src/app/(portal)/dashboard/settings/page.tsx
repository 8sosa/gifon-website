"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image
import { useRouter } from 'next/navigation';
import { 
  User, 
  Building2, 
  Mail, 
  Lock, 
  Save, 
  ShieldCheck, 
  BadgeCheck, 
  ArrowLeft,
  Loader2,
  Camera, // New icon for upload
  Upload,
  ChevronDown
} from 'lucide-react';

type User = {
    _id: string;
    name: string;
    email: string;
    organization: string;
    category: string;
    passportUrl?: string;
    createdAt?: string;
    // --- Upgrade Fields ---
    pendingUpgrade?: boolean;       // True if a request is active
    requestedCategory?: string;    // The tier they want to move to
    upgradeRequestedAt?: string;   // Timestamp for admin sorting
  };

export default function SettingsPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  // Profile Form State
  const [profile, setProfile] = useState({ name: '', organization: '' });
  
  // Image Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [profileLoading, setProfileLoading] = useState(false);
  const [profileStatus, setProfileStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const [password, setPassword] = useState({ current: '', new: '', confirm: '' });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  useEffect(() => {
    const fetchFreshUserData = async () => {
      try {
        const res = await fetch('/api/users/me', { method: 'GET' });
        if (!res.ok) {
          throw new Error('Session expired');
        }
        const data = await res.json();
        setUser(data.user);
        setProfile({ name: data.user.name, organization: data.user.organization });
        
        // Set initial preview to existing passport URL
        if (data.user.passportUrl) {
            setPreviewUrl(data.user.passportUrl);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setFetchError(err.message);
          if (err.message.includes('Session expired')) router.push('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFreshUserData();
  }, [router]);

  // --- Handlers ---
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  // 1. Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        // Validate file type and size (e.g., max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            setProfileStatus({ type: 'error', msg: 'Image size must be less than 2MB' });
            return;
        }
        
        setSelectedFile(file);
        // Create a local preview URL
        setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // 2. Updated Submit to use FormData
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileStatus(null);

    try {
      // Create FormData to send text AND file
      const formData = new FormData();
      formData.append('name', profile.name);
      formData.append('organization', profile.organization);
      
      // Only append passport if a new one was selected
      if (selectedFile) {
        formData.append('passport', selectedFile);
      }

      // Note: Do NOT set 'Content-Type': 'application/json' when using FormData
      const res = await fetch('/api/users/me', {
        method: 'PATCH',
        body: formData, 
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to update profile');

      setProfileStatus({ type: 'success', msg: 'Profile updated successfully!' });
      
      // Update local user state
      if (user) {
        const updatedUser = { 
            ...user, 
            name: profile.name, 
            organization: profile.organization,
            // If the server returns the new URL, use it, otherwise keep preview
            passportUrl: data.user?.passportUrl || previewUrl 
        };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (err: unknown) {
      setProfileStatus({ type: 'error', msg: err instanceof Error ? err.message : 'Update failed' });
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
        setPasswordStatus({ type: 'error', msg: 'New passwords do not match.' });
        return;
    }
    setPasswordLoading(true);
    try {
        const res = await fetch('/api/auth/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ current: password.current, newPassword: password.new }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setPasswordStatus({ type: 'success', msg: 'Password changed successfully!' });
        setPassword({ current: '', new: '', confirm: '' });
    } catch (err: unknown) {
        setPasswordStatus({ type: 'error', msg: err instanceof Error ? err.message : 'Error' });
    } finally {
        setPasswordLoading(false);
    }
  };

  const tiers = [
    'Student Member',
    'Professional Member',
    'Corporate Member',
    'Fellow'
  ].filter(t => t !== user?.category);

  const handleUpgrade = async () => {
    if (!selectedTier) return;
    setIsUpdating(true);
    try {
      const res = await fetch('/api/users/me', {
        method: 'PUT',
        body: JSON.stringify({ requestedCategory: selectedTier }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        alert("Request sent! An admin will review your upgrade.");
        window.location.reload(); // Refresh to show pending status
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen"><Loader2 className="animate-spin text-green-600" size={40} /></div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                <ArrowLeft size={20} />
            </Link>
            <h1 className="text-lg font-bold text-gray-900">Account Settings</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* --- Profile Information Card --- */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><User size={20} /></div>
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Profile Details</h2>
                    <p className="text-xs text-gray-500">Update your photo and personal information</p>
                </div>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-6">
                
                {/* --- IMAGE UPLOAD SECTION --- */}
                <div className="flex flex-col items-center sm:flex-row gap-6 mb-8">
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-inner overflow-hidden relative bg-gray-200">
                           {/* Use standard img tag for simplicity with Blob URLs, or Next Image if configured */}
                           <img 
                             src={previewUrl || "/placeholder-avatar.png"} 
                             alt="Profile" 
                             className="w-full h-full object-cover"
                           />
                           
                           {/* Overlay on Hover */}
                           <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Camera className="text-white" size={24} />
                           </div>
                        </div>
                        
                        {/* Hidden Input */}
                        <input 
                            type="file" 
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        
                        {/* Edit Button Badge */}
                        <button 
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 p-1.5 bg-green-600 text-white rounded-full border-2 border-white shadow-sm hover:bg-green-700 transition"
                        >
                            <Camera size={14} />
                        </button>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-gray-900">Profile Photo</h3>
                        <p className="text-xs text-gray-500 mb-3">Supports JPG, PNG or GIF. Max size 2MB.</p>
                        <div className="flex gap-2 justify-center sm:justify-start">
                            <button 
                                type="button" 
                                onClick={() => fileInputRef.current?.click()}
                                className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700"
                            >
                                Upload New
                            </button>
                            {selectedFile && (
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        setSelectedFile(null);
                                        setPreviewUrl(user.passportUrl || null);
                                    }}
                                    className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {profileStatus && (
                    <div className={`p-3 rounded-lg text-sm border ${profileStatus.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                        {profileStatus.msg}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleProfileChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="organization" className="text-sm font-bold text-gray-700">Organization</label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={profile.organization}
                                onChange={handleProfileChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="email"
                            value={user.email}
                            disabled
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="pt-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={profileLoading}
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-700 transition disabled:opacity-50 shadow-sm"
                    >
                        {profileLoading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
        
        <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Lock size={20} /></div>
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Security</h2>
                    <p className="text-xs text-gray-500">Update your password</p>
                </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-5">
                {passwordStatus && (
                    <div className={`p-3 rounded-lg text-sm border ${passwordStatus.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                        {passwordStatus.msg}
                    </div>
                )}

                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Current Password</label>
                    <input
                        type="password"
                        name="current"
                        value={password.current}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">New Password</label>
                        <input
                            type="password"
                            name="new"
                            value={password.new}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            placeholder="New password"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">Confirm New Password</label>
                        <input
                            type="password"
                            name="confirm"
                            value={password.confirm}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            placeholder="Repeat new password"
                        />
                    </div>
                </div>

                <div className="pt-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={passwordLoading}
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-gray-800 transition disabled:opacity-50 shadow-sm"
                    >
                        {passwordLoading ? <Loader2 className="animate-spin" size={18} /> : <ShieldCheck size={18} />}
                        Update Password
                    </button>
                </div>
            </form>
        </div>

        {/* --- Membership Status Card --- */}
        <div className="bg-linear-to-r from-green-50 to-white shadow-sm border border-green-100 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h2 className="text-lg font-bold text-green-900 flex items-center gap-2 mb-1">
                <BadgeCheck className="text-green-600" size={20} /> Membership Status
                </h2>
                <p className="text-sm text-green-700">
                {user.pendingUpgrade ? "Upgrade request pending approval." : "Your membership is currently active."}
                </p>
                
                <div className="mt-4 flex gap-6 text-sm">
                <div>
                    <span className="block text-xs font-bold text-green-600 uppercase tracking-wider">Level</span>
                    <span className="font-semibold text-gray-800">{user.category}</span>
                </div>
                <div>
                    <span className="block text-xs font-bold text-green-600 uppercase tracking-wider">Expires</span>
                    <span className="font-semibold text-gray-800">Dec 31, 2026</span>
                </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                {!user.pendingUpgrade ? (
                <>
                    <div className="relative">
                    <select 
                        value={selectedTier}
                        onChange={(e) => setSelectedTier(e.target.value)}
                        className="appearance-none bg-white border border-green-200 text-gray-700 py-3 px-4 pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-green-500 text-sm cursor-pointer w-full"
                    >
                        <option value="">Select Tier to Upgrade...</option>
                        {tiers.map(tier => <option key={tier} value={tier}>{tier}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-green-600 pointer-events-none" size={16} />
                    </div>

                    <button
                    onClick={handleUpgrade}
                    disabled={!selectedTier || isUpdating}
                    className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                    {isUpdating ? <Loader2 className="animate-spin" size={18} /> : "Request Upgrade"}
                    </button>
                </>
                ) : (
                <div className="px-6 py-3 bg-orange-50 text-orange-700 border border-orange-100 rounded-xl font-bold text-sm">
                    Request Pending: {user.requestedCategory}
                </div>
                )}
            </div>
        </div>

      </main>
    </div>
  );
}