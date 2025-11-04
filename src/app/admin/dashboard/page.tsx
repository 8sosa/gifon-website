// src/app/admin/dashboard/page.tsx

"use client";

import { useState, useEffect } from 'react';

// 1. Updated Application type
type Application = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  category: string;
  status: 'pending' | 'approved';
  submittedAt: string;
  approvedAt?: string; // --- ADDED THIS ---
  supportingDocumentUrl?: string; 
};

// 2. Define our Tab state
type ActiveTab = 'pending' | 'approved';

export default function AdminDashboard() {
  // 3. NEW: State for tabs and separate app lists
  const [activeTab, setActiveTab] = useState<ActiveTab>('pending');
  const [pendingApps, setPendingApps] = useState<Application[]>([]);
  const [approvedApps, setApprovedApps] = useState<Application[]>([]);

  // We can reuse these for both fetches
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // This state is just for the "Approve" button spinner
  const [submittingId, setSubmittingId] = useState<string | null>(null);

  // 4. Renamed and updated fetch function
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

  // 5. NEW: Fetch function for approved apps
  const fetchApproved = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/applications/approved'); // Hits new endpoint
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

  // 6. Fetch pending apps when the component mounts
  useEffect(() => {
    fetchPending();
  }, []); // Empty array means this runs once on load

  // 7. NEW: Handler to change tabs and fetch data
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'approved') {
      fetchApproved();
    } else {
      fetchPending();
    }
  };

  // 8. Unchanged: "Approve" button logic
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

      // Success! Remove from the pending list.
      // The approved list will fetch when the admin clicks that tab.
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

  // 9. NEW: Helper to render the correct table
  const renderTable = () => {
    if (isLoading) {
      return <div className="text-center p-8"><p>Loading applications...</p></div>;
    }

    // --- PENDING TAB ---
    if (activeTab === 'pending') {
      if (pendingApps.length === 0 && !error) {
        return <div className="bg-gray-100 p-4 rounded text-center">No pending applications. Good job!</div>;
      }
      return (
        <table className="min-w-full divide-y divide-gray-200">
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
                {/* ... (all the same 'td' elements as before) ... */}
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
  };


  // 10. UPDATED Render with Tabs
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* --- NEW: TAB CONTROLS --- */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
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
        </nav>
      </div>

      {/* Show error message if something went wrong */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* --- NEW: Render the correct table --- */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        {renderTable()}
      </div>

    </div>
  );
}