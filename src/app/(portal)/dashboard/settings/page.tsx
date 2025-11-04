// src/app/settings/page.tsx (or wherever this page is)

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaIdBadge, FaSave, FaLock } from 'react-icons/fa';

// Define the User type again
type User = {
  _id: string;
  name: string;
  email: string;
  organization: string;
  category: string;
  // Add other fields like 'expires' if you store them
};

export default function SettingsPage() {
  const router = useRouter();
  // const [error, setError] = useState<string | null>(null);

  // --- State for Data Fetching ---
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Page load
  const [fetchError, setFetchError] = useState<string | null>(null);

  // --- State for Profile Form ---
  const [profile, setProfile] = useState({ name: '', organization: '' });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [profileSuccess, setProfileSuccess] = useState<string | null>(null);

  // --- State for Password Form ---
  const [password, setPassword] = useState({ current: '', new: '', confirm: '' });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);

  // --- 3. UPDATED useEffect to use cookies and localStorage 'user' ---
  useEffect(() => {
    
    // Optimistic load for fast UX
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user);
      // Pre-fill the profile form
      setProfile({
        name: user.name,
        organization: user.organization,
      });
    }

    // Now, fetch the *fresh* data to ensure it's up to date
    const fetchFreshUserData = async () => {
      try {
        // No 'Authorization' header needed.
        // The browser sends the httpOnly cookie automatically.
        const res = await fetch('/api/users/me', {
          method: 'GET',
        });

        if (!res.ok) {
          localStorage.removeItem('user'); // Clear stale data
          throw new Error('Session expired or invalid. Please log in again.');
        }

        const data = await res.json();
        setUser(data.user); // Set the fresh user state
        
        // Pre-fill the form with the fresh data
        setProfile({
            name: data.user.name,
            organization: data.user.organization,
        });
        
        // Re-sync localStorage with the fresh data
        localStorage.setItem('user', JSON.stringify(data.user)); 

      } catch (err: unknown) {
        if (err instanceof Error) {
          setFetchError(err.message);
          if (err.message.includes('Session expired')) {
            router.push('/login');
          }
        } else {
          setFetchError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchFreshUserData();
  }, [router]); // Add router to dependency array

  // --- Form Input Handlers ---
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword(prev => ({ ...prev, [name]: value }));
  };

  // --- Form Submit Handlers ---
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileError(null);
    setProfileSuccess(null);

    try {
      const res = await fetch('/api/users/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          // REMOVED: The 'Authorization' header is gone.
        },
        body: JSON.stringify(profile),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      setProfileSuccess('Profile updated successfully!');
      // Update the user state so the name changes on the page
      if (user) {
        setUser(prev => ({ ...prev!, name: profile.name, organization: profile.organization }));
        // And update localStorage so it's fresh for next page load
        localStorage.setItem('user', JSON.stringify({ ...user, name: profile.name, organization: profile.organization }));
      }

    } catch (err: unknown) {
      if (err instanceof Error) {
      setProfileError(err.message);
    } else {
      setProfileError('An unknown error occurred');
    }
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordLoading(true);
    setPasswordError(null);
    setPasswordSuccess(null);

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // REMOVED: The 'Authorization' header is gone.
        },
        body: JSON.stringify({
          current: password.current,
          newPassword: password.new,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        // This will catch "Incorrect current password"
        throw new Error(data.message || 'Failed to change password');
      }

      setPasswordSuccess('Password changed successfully!');
      setPassword({ current: '', new: '', confirm: '' }); // Clear fields
    } catch (err: unknown) {
      if (err instanceof Error) {
      setPasswordError(err.message);
    } else {
      setPasswordError('An unknown error occurred');
    }
    } finally {
      setPasswordLoading(false);
    }
  };

  // --- Page Render Logic ---
  if (isLoading) {
    return <div className="h-screen w-full flex items-center justify-center">Loading settings...</div>;
  }

  if (fetchError || !user) {
    return <div className="h-screen w-full flex items-center justify-center text-red-600">
      Error: {fetchError || "Could not load user data."}
    </div>;
  }

  return (
    <>
      {/* 1. Page Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Account Settings
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your profile, password, and membership details.
          </p>
        </div>
      </header>

      {/* 2. Main Settings Content */}
      <main className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* --- Profile Information Card --- */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Profile Information
            </h2>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              {profileError && <div className="text-red-600 bg-red-100 p-3 rounded">{profileError}</div>}
              {profileSuccess && <div className="text-green-700 bg-green-100 p-3 rounded">{profileSuccess}</div>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                  Organization/Institution
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={profile.organization}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email} // From fetched data
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={profileLoading}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
                >
                  <FaSave />
                  {profileLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>

          {/* --- Change Password Card --- */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              {passwordError && <div className="text-red-600 bg-red-100 p-3 rounded">{passwordError}</div>}
              {passwordSuccess && <div className="text-green-700 bg-green-100 p-3 rounded">{passwordSuccess}</div>}
              <div>
                <label htmlFor="current" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current"
                  name="current"
                  value={password.current}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="new" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="new"
                  name="new"
                  value={password.new}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm"
                  name="confirm"
                  value={password.confirm}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={passwordLoading}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
                >
                  <FaLock />
                  {passwordLoading ? 'Changing...' : 'Change Password'}
                </button>
              </div>
            </form>
          </div>

          {/* --- Membership Card --- */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <FaIdBadge className="text-green-600" />
              Membership
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Status:</span>
                <span className="font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Level:</span>
                <span className="text-gray-800">{user.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Expires:</span>
                <span className="text-gray-800">TBD</span>
              </div>
              <div className="pt-4 text-right">
                <Link
                  href="/membership#apply"
                  className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Manage or Renew Membership
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}