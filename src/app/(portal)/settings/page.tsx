"use client"; // Required for form state

import { useState } from 'react';
import Link from 'next/link';
import { FaIdBadge, FaSave, FaLock } from 'react-icons/fa';

// --- Mock Data ---
// In a real app, this would come from your user session
const mockUser = {
  name: "Dr. Fatima Bello",
  email: "fatima.bello@example.com",
  organization: "Federal Ministry of Science",
  membership: {
    type: "Professional Member",
    status: "Active",
    expires: "December 31, 2026",
  }
};
// --- End Mock Data ---

export default function SettingsPage() {
  // State for forms
  const [profile, setProfile] = useState({
    name: mockUser.name,
    organization: mockUser.organization,
  });
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to update profile
    alert("Profile Updated: " + JSON.stringify(profile));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to update password
    if (password.new !== password.confirm) {
      alert("New passwords do not match.");
      return;
    }
    alert("Password change request submitted.");
    setPassword({ current: '', new: '', confirm: '' });
  };


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
                  value={mockUser.email}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  <FaSave />
                  Save Changes
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
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  <FaLock />
                  Change Password
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
                  {mockUser.membership.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Level:</span>
                <span className="text-gray-800">{mockUser.membership.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Expires:</span>
                <span className="text-gray-800">{mockUser.membership.expires}</span>
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