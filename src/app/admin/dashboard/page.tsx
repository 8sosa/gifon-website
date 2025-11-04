// src/app/admin/dashboard/page.tsx

"use client";

import { useState, useEffect } from 'react';

// --- 1. TYPE DEFINITIONS ---
type Application = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  category: string;
  status: 'pending' | 'approved';
  submittedAt: string;
  approvedAt?: string;
  supportingDocumentUrl?: string; 
};

// NEW: Type for submissions
type Submission = {
  _id: string;
  authorName: string;
  email: string;
  title: string;
  abstract: string;
  publicationUrl: string;
  status: 'pending_review';
  submittedAt: string;
};

// 2. Define our Tab state
type ActiveTab = 'pending' | 'approved' | 'submissions'; // --- ADDED 'submissions' ---

export default function AdminDashboard() {
  // 3. State for tabs and separate lists
  const [activeTab, setActiveTab] = useState<ActiveTab>('pending');
  const [pendingApps, setPendingApps] = useState<Application[]>([]);
  const [approvedApps, setApprovedApps] = useState<Application[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]); // --- NEW STATE ---

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingId, setSubmittingId] = useState<string | null>(null);

  // 4. Fetch functions
  const fetchPending = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/applications');
      if (!res.ok) throw new Error('Failed to fetch pending applications');
      const data = await res.json();
      setPendingApps(data.applications || []);
    } catch (err: unknown) {
      let message = 'An unknown error occurred';
      if (err instanceof Error) message = err.message;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchApproved = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/applications/approved');
      if (!res.ok) throw new Error('Failed to fetch approved applications');
      const data = await res.json();
      setApprovedApps(data.applications || []);
    } catch (err: unknown) {
      let message = 'An unknown error occurred';
      if (err instanceof Error) message = err.message;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- NEW: Fetch function for submissions ---
  const fetchSubmissions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/submissions'); // Hits new endpoint
      if (!res.ok) throw new Error('Failed to fetch submissions');
      const data = await res.json();
      setSubmissions(data.submissions || []);
    } catch (err: unknown) {
      let message = 'An unknown error occurred';
      if (err instanceof Error) message = err.message;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };
  // ---

  // 5. Fetch pending apps on initial load
  useEffect(() => {
    fetchPending();
  }, []);

  // 6. Handler to change tabs and fetch data
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'approved') {
      fetchApproved();
    } else if (tab === 'pending') {
      fetchPending();
    } else if (tab === 'submissions') { // --- ADDED THIS CASE ---
      fetchSubmissions();
    }
  };

  // 7. "Approve" button logic (unchanged)
  const handleApprove = async (applicationId: string) => {
    setSubmittingId(applicationId); 
    setError(null);
    try {
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Failed to approve');

      setPendingApps((prevApps) =>
        prevApps.filter((app) => app._id !== applicationId)
      );

    } catch (err: unknown) {
      let message = 'An unknown error occurred';
      if (err instanceof Error) message = err.message;
      setError(message);
    } finally {
      setSubmittingId(null);
    }
  };

  // 8. Helper to render the correct table
  const renderTable = () => {
    if (isLoading) {
      return <div className="text-center p-8"><p>Loading...</p></div>;
    }

    // --- PENDING TAB ---
    if (activeTab === 'pending') {
      if (pendingApps.length === 0 && !error) {
        return <div className="bg-gray-100 p-4 rounded text-center">No pending applications.</div>;
      }
      return (
        <table className="min-w-full divide-y divide-gray-200">
          {/* ... (Your existing Pending table thead/tbody) ... */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email & Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingApps.map((app) => (
              <tr key={app._id}>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm">{app.name}</div><div className="text-sm text-gray-500">{app.organization}</div></td>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm">{app.email}</div><div className="text-sm text-gray-500">{app.phone}</div></td>
                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 text-xs font-semibold rounded-full bg-green-100 text-green-800">{app.category}</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(app.submittedAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{app.supportingDocumentUrl ? (<a href={app.supportingDocumentUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">View</a>) : (<span>None</span>)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button onClick={() => handleApprove(app._id)} disabled={submittingId === app._id} className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400">
                    {submittingId === app._id ? 'Approving...' : 'Approve'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // --- APPROVED TAB ---
    if (activeTab === 'approved') {
      if (approvedApps.length === 0 && !error) {
        return <div className="bg-gray-100 p-4 rounded text-center">No applications have been approved yet.</div>;
      }
      return (
        <table className="min-w-full divide-y divide-gray-200">
          {/* ... (Your existing Approved table thead/tbody) ... */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date Approved</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {approvedApps.map((app) => (
              <tr key={app._id}>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm">{app.name}</div></td>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm">{app.email}</div></td>
                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">{app.category}</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{app.supportingDocumentUrl ? (<a href={app.supportingDocumentUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">View</a>) : (<span>None</span>)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{app.approvedAt ? new Date(app.approvedAt).toLocaleDateString() : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // --- NEW: SUBMISSIONS TAB ---
    if (activeTab === 'submissions') {
      if (submissions.length === 0 && !error) {
        return <div className="bg-gray-100 p-4 rounded text-center">No pending journal submissions.</div>;
      }
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissions.map((sub) => (
              <tr key={sub._id}>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm">{sub.authorName}</div></td>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm">{sub.email}</div></td>
                <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm max-w-xs truncate" title={sub.title}>{sub.title}</div></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(sub.submittedAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a href={sub.publicationUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    View Paper
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  // 10. UPDATED Render with Tabs
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* --- TAB CONTROLS --- */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          
          {/* Pending Tab */}
          <button
            onClick={() => handleTabChange('pending')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pending Applications
            {pendingApps.length > 0 && (
              <span className={`ml-2 inline-block py-0.5 px-2 rounded-full text-xs font-medium ${
                activeTab === 'pending' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {pendingApps.length}
              </span>
            )}
          </button>
          
          {/* Approved Tab */}
          <button
            onClick={() => handleTabChange('approved')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'approved'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Approved Applications
          </button>

          {/* --- NEW: Submissions Tab --- */}
          <button
            onClick={() => handleTabChange('submissions')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'submissions'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Journal Submissions
            {submissions.length > 0 && (
              <span className={`ml-2 inline-block py-0.5 px-2 rounded-full text-xs font-medium ${
                activeTab === 'submissions' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {submissions.length}
              </span>
            )}
          </button>

        </nav>
      </div>

      {/* Show error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* --- Render the correct table --- */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        {renderTable()}
      </div>

    </div>
  );
}