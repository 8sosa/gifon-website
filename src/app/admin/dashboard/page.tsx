"use client";

import { useState, useEffect } from 'react';
import { 
  Eye, 
  CheckCircle, 
  X, 
  FileText, 
  Download, 
  Building2, 
  User,
  Calendar
} from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---
type Application = {
  _id: string;
  status: 'pending' | 'approved';
  submittedAt: string;
  approvedAt?: string;
  category: string;
  
  // Contact Info (Dynamic)
  email?: string;
  companyEmail?: string;
  repEmail?: string;
  phone?: string;
  companyPhone?: string;
  repPhone?: string;
  
  // Address Fields (Fixed missing properties)
  address?: string;            // Individual
  headOfficeAddress?: string;  // Corporate

  // Identity (Individual)
  surname?: string;
  firstName?: string;
  occupation?: string;
  institution?: string;
  qualification?: string;      // Fixed missing property

  // Identity (Corporate)
  companyName?: string;
  cacNumber?: string;
  businessSector?: string;     // Fixed missing property
  repName?: string;
  repDesignation?: string;
  
  // Key Staff (Fixed missing properties)
  keyStaff1?: string;
  keyStaff2?: string;
  keyStaff3?: string;
  keyStaff4?: string;
  keyStaff5?: string;

  // Complex Data
  background?: Record<string, string>;
  files?: Record<string, string>;
  
  // Legacy support
  organization?: string;
  name?: string;
  supportingDocumentUrl?: string;
};

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

type ActiveTab = 'pending' | 'approved' | 'submissions';

export default function AdminDashboard() {
  // 3. State
  const [activeTab, setActiveTab] = useState<ActiveTab>('pending');
  const [pendingApps, setPendingApps] = useState<Application[]>([]);
  const [approvedApps, setApprovedApps] = useState<Application[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  
  // UI State
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingId, setSubmittingId] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null); // For Modal

  // 4. Fetch functions
  const fetchPending = async () => {
    setIsLoading(true); setError(null);
    try {
      const res = await fetch('/api/admin/applications');
      if (!res.ok) throw new Error('Failed to fetch pending applications');
      const data = await res.json();
      setPendingApps(data.applications || []);
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Error'); } 
    finally { setIsLoading(false); }
  };

  const fetchApproved = async () => {
    setIsLoading(true); setError(null);
    try {
      const res = await fetch('/api/admin/applications/approved');
      if (!res.ok) throw new Error('Failed to fetch approved applications');
      const data = await res.json();
      setApprovedApps(data.applications || []);
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Error'); } 
    finally { setIsLoading(false); }
  };

  const fetchSubmissions = async () => {
    setIsLoading(true); setError(null);
    try {
      const res = await fetch('/api/admin/submissions');
      if (!res.ok) throw new Error('Failed to fetch submissions');
      const data = await res.json();
      setSubmissions(data.submissions || []);
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Error'); } 
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchPending(); }, []);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'approved') fetchApproved();
    else if (tab === 'pending') fetchPending();
    else if (tab === 'submissions') fetchSubmissions();
  };

  const handleApprove = async (applicationId: string) => {
    setSubmittingId(applicationId); setError(null);
    try {
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Failed to approve');

      setPendingApps((prev) => prev.filter((app) => app._id !== applicationId));
      setSelectedApp(null); // Close modal if open
    } catch (err: unknown) { setError(err instanceof Error ? err.message : 'Error'); } 
    finally { setSubmittingId(null); }
  };

  // --- HELPER: Display Name Logic ---
  const getAppName = (app: Application) => {
    if (app.companyName) return app.companyName; // Corporate
    if (app.surname && app.firstName) return `${app.surname} ${app.firstName}`; // Individual
    return app.name || 'Unknown Applicant'; // Fallback
  };

  const getAppEmail = (app: Application) => app.companyEmail || app.email || app.repEmail || 'N/A';
  const getAppPhone = (app: Application) => app.companyPhone || app.phone || app.repPhone || 'N/A';

  // --- RENDER TABLE ---
  const renderTable = () => {
    if (isLoading) return <div className="text-center p-12 text-gray-500">Loading data...</div>;

    // --- PENDING / APPROVED TABLE ---
    if (activeTab === 'pending' || activeTab === 'approved') {
      const data = activeTab === 'pending' ? pendingApps : approvedApps;
      
      if (data.length === 0 && !error) {
        return <div className="bg-gray-50 p-12 rounded-xl text-center text-gray-500 border border-gray-100">No applications found in this category.</div>;
      }

      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Applicant</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${app.companyName ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                            {app.companyName ? <Building2 size={16} /> : <User size={16} />}
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-900">{getAppName(app)}</div>
                            <div className="text-xs text-gray-500">{app.cacNumber || app.occupation || 'N/A'}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{getAppEmail(app)}</div>
                    <div className="text-xs text-gray-500">{getAppPhone(app)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                        {app.category}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(app.submittedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => setSelectedApp(app)}
                    className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1 mr-2"
                  >
                    <Eye size={14} /> View Details
                  </button>
                  {activeTab === 'pending' && (
                    <button 
                        onClick={() => handleApprove(app._id)} 
                        disabled={submittingId === app._id}
                        className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1 disabled:opacity-50"
                    >
                        <CheckCircle size={14} /> {submittingId === app._id ? '...' : 'Approve'}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // --- SUBMISSIONS TABLE ---
    if (activeTab === 'submissions') {
        if (submissions.length === 0 && !error) {
            return <div className="bg-gray-50 p-12 rounded-xl text-center text-gray-500 border border-gray-100">No journal submissions found.</div>;
        }
        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Author</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Document</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.map((sub) => (
                    <tr key={sub._id} className="hover:bg-gray-50/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-gray-900">{sub.authorName}</div>
                            <div className="text-xs text-gray-500">{sub.email}</div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-md truncate" title={sub.title}>{sub.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <a href={sub.publicationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-green-600 hover:underline">
                                <FileText size={14} /> View PDF
                            </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(sub.submittedAt).toLocaleDateString()}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
  };

  // --- RENDER MAIN PAGE ---
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl min-h-dvh">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* TABS */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {[
              { id: 'pending', label: 'Pending Applications', count: pendingApps.length },
              { id: 'approved', label: 'Approved Members', count: 0 }, // Optional count
              { id: 'submissions', label: 'Journal Submissions', count: submissions.length }
          ].map((tab) => (
            <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as ActiveTab)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
                {tab.label}
                {tab.count > 0 && tab.id !== 'approved' && (
                    <span className={`py-0.5 px-2 rounded-full text-xs font-bold ${
                        activeTab === tab.id ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                        {tab.count}
                    </span>
                )}
            </button>
          ))}
        </nav>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm flex items-center gap-2">
            <X size={16} /> {error}
        </div>
      )}

      {/* TABLE CONTAINER */}
      <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-200">
        {renderTable()}
      </div>

      {/* --- APPLICATION DETAIL MODAL --- */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4" onClick={() => setSelectedApp(null)}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
                
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">{getAppName(selectedApp)}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1 hover:text-green-600">{selectedApp.category}</p>
                    </div>
                    <button onClick={() => setSelectedApp(null)} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Section 1: Contact Info */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Contact Details</h4>
                            <div className="text-sm grid grid-cols-[1fr_2fr] gap-1">
                                <span className="text-gray-500">Email:</span>
                                <span className="font-medium text-gray-900 truncate">{getAppEmail(selectedApp)}</span>
                                <span className="text-gray-500">Phone:</span>
                                <span className="font-medium text-gray-900">{getAppPhone(selectedApp)}</span>
                                <span className="text-gray-500">Address:</span>
                                <span className="font-medium text-gray-900">{selectedApp.headOfficeAddress || selectedApp.address || 'N/A'}</span>
                            </div>
                        </div>

                        {/* Section 2: Professional / Corporate Info */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Professional Info</h4>
                            <div className="text-sm grid grid-cols-[1fr_2fr] gap-1">
                                {selectedApp.companyName ? (
                                    <>
                                        <span className="text-gray-500">CAC No:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.cacNumber}</span>
                                        <span className="text-gray-500">Sector:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.businessSector || 'N/A'}</span>
                                        <span className="text-gray-500">Rep:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.repName} ({selectedApp.repDesignation})</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-gray-500">Role:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.occupation || 'N/A'}</span>
                                        <span className="text-gray-500">Inst:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.institution || 'N/A'}</span>
                                        <span className="text-gray-500">Qual:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.qualification || 'N/A'}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Section 3: Background Checks (Individuals only) */}
                        {selectedApp.background && Object.keys(selectedApp.background).length > 0 && (
                            <div className="md:col-span-2 space-y-3">
                                <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Background Declaration</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {Object.entries(selectedApp.background).map(([key, val]) => (
                                        <div key={key} className="bg-gray-50 px-3 py-2 rounded border border-gray-100 flex justify-between items-center text-xs">
                                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                            <span className={`font-bold ${val === 'Yes' ? 'text-red-600' : 'text-green-600'}`}>{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                         {/* Section 4: Key Staff (Corporate only) */}
                         {(selectedApp.keyStaff1) && (
                            <div className="md:col-span-2 space-y-3">
                                <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Key Staff</h4>
                                <ul className="list-disc pl-5 text-sm text-gray-700">
                                    {[selectedApp.keyStaff1, selectedApp.keyStaff2, selectedApp.keyStaff3, selectedApp.keyStaff4, selectedApp.keyStaff5]
                                    .filter(Boolean).map((staff, i) => (
                                        <li key={i}>{staff}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Section 5: Documents */}
                        <div className="md:col-span-2 space-y-3">
                            <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Uploaded Documents</h4>
                            {selectedApp.files && Object.keys(selectedApp.files).length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {Object.entries(selectedApp.files).map(([key, url]) => (
                                        <a 
                                            key={key} 
                                            href={url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                                        >
                                            <div className="bg-gray-100 group-hover:bg-white p-2 rounded text-gray-600 group-hover:text-green-600">
                                                <Download size={16} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-700 capitalize group-hover:text-green-700">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </p>
                                                <p className="text-[10px] text-gray-400">Click to view</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                // Fallback for legacy data
                                selectedApp.supportingDocumentUrl ? (
                                    <a href={selectedApp.supportingDocumentUrl} target="_blank" className="text-blue-600 text-sm hover:underline">View Legacy Document</a>
                                ) : <p className="text-sm text-gray-400 italic">No documents attached.</p>
                            )}
                        </div>

                    </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button 
                        onClick={() => setSelectedApp(null)}
                        className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-200 rounded-lg text-sm transition-colors"
                    >
                        Close
                    </button>
                    {activeTab === 'pending' && (
                        <button 
                            onClick={() => handleApprove(selectedApp._id)}
                            disabled={submittingId === selectedApp._id}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-colors disabled:opacity-50"
                        >
                            {submittingId === selectedApp._id ? 'Approving...' : 'Approve Application'}
                        </button>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
}