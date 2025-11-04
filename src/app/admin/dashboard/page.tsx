// src/app/admin/dashboard/page.tsx

"use client"; // This is essential!

import { useState, useEffect } from 'react';

// 1. Define a type for our application data
// (Make sure this matches the data you're saving in MongoDB)
type Application = {
  _id: string; // MongoDB IDs are strings
  name: string;
  email: string;
  phone: string;
  organization: string;
  category: string;
  status: 'pending' | 'approved';
  submittedAt: string; // Dates will come as strings
};

export default function AdminDashboard() {
  // 2. State for the data
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State to track which button is loading
  const [submittingId, setSubmittingId] = useState<string | null>(null);

  // 3. Function to fetch all pending applications
  const fetchApplications = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/applications');
      if (!res.ok) {
        throw new Error('Failed to fetch applications');
      }
      const data = await res.json();
      setApplications(data.applications || []);
    } catch (err: unknown) {
      if (err instanceof Error){ // <--- Step 2: Check if it's an Error
        setError(err.message); // <--- Step 3: Now it's safe to use
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 4. Fetch data when the component mounts
  useEffect(() => {
    fetchApplications();
  }, []); // Empty array means this runs once on load

  // 5. Function to handle the "Approve" button click
  const handleApprove = async (applicationId: string) => {
    setSubmittingId(applicationId); // Set loading state for this specific button
    setError(null);

    try {
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicationId }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Failed to approve application');
      }

      // Success! Remove the application from the list in the UI
      // This is an "optimistic update" for a great UX
      setApplications((prevApps) =>
        prevApps.filter((app) => app._id !== applicationId)
      );

    } catch (err: unknown) {
      if (err instanceof Error){ // <--- Step 2: Check if it's an Error
        setError(err.message); // <--- Step 3: Now it's safe to use
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setSubmittingId(null); // Stop loading for this button
    }
  };

  // 6. Render the UI
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Pending Applications</h2>

      {/* Show error message if something went wrong */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Show loading spinner */}
      {isLoading && (
        <div className="text-center p-8">
          <p>Loading applications...</p>
        </div>
      )}

      {/* Show "no applications" message */}
      {!isLoading && applications.length === 0 && !error && (
        <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded relative">
          No pending applications. Good job!
        </div>
      )}

      {/* Show the table of applications */}
      {!isLoading && applications.length > 0 && (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email & Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{app.name}</div>
                    <div className="text-sm text-gray-500">{app.organization || 'No org'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{app.email}</div>
                    <div className="text-sm text-gray-500">{app.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {app.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(app.submittedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleApprove(app._id)}
                      disabled={submittingId === app._id}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
                    >
                      {submittingId === app._id ? 'Approving...' : 'Approve'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}