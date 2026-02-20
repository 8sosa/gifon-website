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
  UserPlus, // Added Icon
  Save,
  ArrowRight      // Added Icon
} from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---

// Define Mentor Type locally for the dropdown
type MentorOption = {
  id: string;
  fullName: string;
};

type Application = {
  _id: string;
  status: 'pending' | 'approved';
  submittedAt: string;
  approvedAt?: string;
  category: string;
  mentorRequested?: boolean;
  mentorRequestedAt?: string;
  pendingUpgrade?: boolean;
  requestedCategory?: string;
  upgradeRequestedAt?: string;
  
  // Assigned Mentor Field (New)
  assignedMentor?: {
    id: string;
    name: string;
    assignedAt: string;
  };

  // Contact Info
  email?: string;
  companyEmail?: string;
  repEmail?: string;
  phone?: string;
  companyPhone?: string;
  repPhone?: string;
  
  address?: string;            
  headOfficeAddress?: string;  

  // Identity 
  surname?: string;
  firstName?: string;
  fullName?: string;          
  occupation?: string;
  institution?: string;
  qualification?: string;      

  // Corporate
  companyName?: string;
  cacNumber?: string;
  businessSector?: string;     
  repName?: string;
  repDesignation?: string;
  
  // Key Staff 
  keyStaff1?: string;
  keyStaff2?: string;
  keyStaff3?: string;
  keyStaff4?: string;
  keyStaff5?: string;

  // Complex Data
  background?: Record<string, string>;
  files?: Record<string, string>;
  
  // Legacy
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

type ActiveTab = 'pending' | 'approved' | 'submissions' | 'mentor-requests' | 'upgrades';

export default function AdminDashboard() {
  // 3. State
  const [activeTab, setActiveTab] = useState<ActiveTab>('pending');
  const [upgradeRequests, setUpgradeRequests] = useState<Application[]>([]);
  const [pendingApps, setPendingApps] = useState<Application[]>([]);
  const [approvedApps, setApprovedApps] = useState<Application[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  
  // Mentor State
  const [mentors, setMentors] = useState<MentorOption[]>([]);
  const [selectedMentorId, setSelectedMentorId] = useState<string>('');
  const [isAssigning, setIsAssigning] = useState(false);
  const [mentorRequests, setMentorRequests] = useState<Application[]>([]);

  const fetchMentorRequests = async () => {
    setIsLoading(true); setError(null);
    try {
      const res = await fetch('/api/admin/mentor-requests');
      if (!res.ok) throw new Error('Failed to fetch mentor requests');
      const data = await res.json();
      setMentorRequests(data.users || []);
    } catch (err: unknown) { 
      setError(err instanceof Error ? err.message : 'Error'); 
    } finally { 
      setIsLoading(false); 
    }
  };

  // UI State
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingId, setSubmittingId] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null); 

  const fetchUpgrades = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/upgrades'); // You'll need this endpoint
      const data = await res.json();
      setUpgradeRequests(data.upgrades || []);
    } catch (err) { setError("Failed to fetch upgrades"); }
    finally { setIsLoading(false); }
  };
  
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

  // Fetch Mentors for the dropdown
  const fetchMentors = async () => {
    try {
      const res = await fetch('/api/admin/mentors');
      if (res.ok) {
        const data = await res.json();
        setMentors(data.mentors || []);
      }
    } catch (e) { console.error("Could not load mentors", e); }
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'approved') fetchApproved();
    else if (tab === 'pending') fetchPending();
    else if (tab === 'submissions') fetchSubmissions();
    else if (tab === 'mentor-requests') fetchMentorRequests();
    else if (tab === 'upgrades') fetchUpgrades();
  };

  const handleApprove = async (applicationId: string) => {
    setSubmittingId(applicationId);
    setError(null);
    try {
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId }),
      });
      
      if (!res.ok) throw new Error('Failed to approve');
  
      // Remove from pending list immediately
      setPendingApps((prev) => prev.filter((app) => app._id !== applicationId));
      
      // Clear the modal if it's open
      setSelectedApp(null); 
      
      // Optional: Refresh approved list in background if needed
      // fetchApproved(); 
      
    } catch (err: unknown) { 
      setError(err instanceof Error ? err.message : 'Error'); 
    } finally { 
      setSubmittingId(null); 
    }
  };

  const handleDecline = async (applicationId: string) => {
    const reason = window.prompt("Please provide a reason for declining (this will be emailed to the applicant):");
    
    if (reason === null) return; // Admin clicked cancel
  
    try {
      const res = await fetch('/api/admin/decline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId, reason }),
      });
  
      if (res.ok) {
        alert("Application successfully declined.");
        fetchAllData(); // Refresh the counts and lists
      } else {
        const err = await res.json();
        alert(`Error: ${err.message}`);
      }
    } catch (err) {
      alert("Failed to decline application.");
    }
  };

  const handleApproveUpgrade = async (userId: string) => {
    setSubmittingId(userId);
    try {
      const res = await fetch('/api/admin/approve-upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
  
      if (res.ok) {
        // Remove the user from the local upgradeRequests state
        setUpgradeRequests((prev) => prev.filter((u) => u._id !== userId));
        setSelectedApp(null);
        alert("Membership upgraded successfully!");
      }
    } catch (err) {
      setError("Failed to approve upgrade");
    } finally {
      setSubmittingId(null);
    }
  };

  // --- MENTOR ASSIGNMENT LOGIC ---
  const handleAssignMentor = async () => {
    if (!selectedApp || !selectedMentorId) return;
    setIsAssigning(true);
    
    // Find name from ID
    const mentorObj = mentors.find(m => m.id === selectedMentorId);
    
    try {
      const res = await fetch('/api/admin/assign-mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            applicationId: selectedApp._id,
            mentorId: selectedMentorId,
            mentorName: mentorObj?.fullName || 'Unknown'
        }),
      });
      
      if (!res.ok) throw new Error("Failed to assign mentor");

      // Update local state to reflect change immediately
      const updatedApp = { 
        ...selectedApp, 
        assignedMentor: { 
            id: selectedMentorId, 
            name: mentorObj?.fullName || '', 
            assignedAt: new Date().toISOString() 
        } 
      };
      
      setSelectedApp(updatedApp);
      
      // Update the main list in background
      setPendingApps(prev => prev.map(p => p._id === updatedApp._id ? updatedApp : p));
      setApprovedApps(prev => prev.map(p => p._id === updatedApp._id ? updatedApp : p));

      setSelectedApp(null);

    } catch (error) {
        alert("Failed to assign mentor. Please try again.");
    } finally {
        setIsAssigning(false);
    }
  };

  // Helpers
  const getAppName = (app: Application) => {
    if (app.companyName) return app.companyName; 
    if (app.surname && app.firstName) return `${app.surname} ${app.firstName}`;
    if (app.fullName) return app.fullName; 
    return app.name || 'Unknown Applicant';
  };
  const getAppEmail = (app: Application) => app.companyEmail || app.email || app.repEmail || 'N/A';
  const getAppPhone = (app: Application) => app.companyPhone || app.phone || app.repPhone || 'N/A';

  const fetchAllData = () => {
    // This helper triggers the correct fetch based on what the admin is looking at
    if (activeTab === 'pending') fetchPending();
    else if (activeTab === 'approved') fetchApproved();
    else if (activeTab === 'submissions') fetchSubmissions();
    else if (activeTab === 'mentor-requests') fetchMentorRequests();
    else if (activeTab === 'upgrades') fetchUpgrades();
  };
  
  useEffect(() => { 
    fetchPending(); 
    fetchMentors(); // Load mentors in background
  }, []);

  // --- RENDER TABLE ---
  const renderTable = () => {
    if (isLoading) return <div className="text-center p-12 text-gray-500">Loading data...</div>;

    if (activeTab === 'pending' || activeTab === 'approved' || activeTab === 'mentor-requests' || activeTab === 'upgrades') {
      let data: Application[] = [];
        if (activeTab === 'pending') data = pendingApps;
        else if (activeTab === 'approved') data = approvedApps;
        else if (activeTab === 'mentor-requests') data = mentorRequests;
        else if (activeTab === 'upgrades') data = upgradeRequests;
      
      if (activeTab === 'pending') {
        data = data.filter(app => app.status !== 'approved');
      }
      if (data.length === 0 && !error) {
        return <div className="bg-gray-50 p-12 rounded-xl text-center text-gray-500 border border-gray-100">No applications found in this category.</div>;
      }

      return (
        <div className="bg-white shadow-sm sm:rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="hidden md:table-header-group bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Applicant</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {activeTab === 'upgrades' ? 'Current / Target Tier' : 'Category'}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group bg-white divide-y divide-gray-200">
                {data.map((app) => (
                  <tr key={app._id} className="block md:table-row hover:bg-gray-50/50 transition-colors border-b border-gray-200 md:border-none last:border-b-0">
                    <td className="block md:table-cell px-6 py-4 whitespace-nowrap">
                      {/* ... Applicant Column remains same ... */}
                      <span className="md:hidden text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Applicant</span>
                      <div className="flex items-center">
                          <div className={`p-2 rounded-full mr-3 ${app.companyName ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                              {app.companyName ? <Building2 size={16} /> : <User size={16} />}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">{getAppName(app)}</div>
                            <div className="text-xs text-gray-500">{app.cacNumber || app.occupation || 'N/A'}</div>
                            <div className="flex gap-2 mt-1">
                              {app.mentorRequested && !app.assignedMentor && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 border border-orange-200 animate-pulse">
                                  <UserPlus size={10} /> MENTOR REQUESTED
                                </span>
                              )}
                              {app.assignedMentor && (
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                  <UserPlus size={10} /> {app.assignedMentor.name}
                                </div>
                              )}
                            </div>
                          </div>
                      </div>
                    </td>

                    <td className="block md:table-cell px-6 py-4 whitespace-nowrap">
                      <span className="md:hidden text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Contact Details</span>
                      <div className="text-sm text-gray-900">{getAppEmail(app)}</div>
                      <div className="text-xs text-gray-500">{getAppPhone(app)}</div>
                    </td>

                    <td className="block md:table-cell px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-between md:block">
                        <span className="md:hidden text-xs font-bold text-gray-500 uppercase tracking-wider">Tier: </span>
                        <div className="flex flex-col gap-1">
                          <span className="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 border border-gray-200 w-fit">
                            {app.category}
                          </span>
                          {/* ArrowRight is now available from your imports */}
                          {activeTab === 'upgrades' && app.requestedCategory && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-green-600">
                              <ArrowRight size={10} /> 
                              <span className="bg-green-50 px-2 py-0.5 rounded border border-green-200">
                                {app.requestedCategory}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="block md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center justify-between md:block">
                        <span className="md:hidden text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted: </span>
                        {/* Use an empty string fallback to prevent the TypeScript overload error */}
                        <span>{new Date(app.submittedAt || app.upgradeRequestedAt || "").toLocaleDateString()}</span>
                      </div>
                    </td>

                    <td className="block md:table-cell px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2 mt-2 md:mt-0">
                        <button 
                          onClick={() => {
                              setSelectedApp(app);
                              setSelectedMentorId(app.assignedMentor?.id || "");
                          }}
                          className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1"
                        >
                          <Eye size={14} /> View
                        </button>

                        {activeTab === 'pending' && (
                          <>
                            <button 
                                onClick={() => handleApprove(app._id)} 
                                disabled={submittingId === app._id}
                                className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1 disabled:opacity-50"
                            >
                                <CheckCircle size={14} /> {submittingId === app._id ? '...' : 'Approve'}
                            </button>
                            <button 
                                onClick={() => handleDecline(app._id)} 
                                className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1"
                            >
                                <X size={14} /> Decline
                            </button>
                          </>
                        )}

                        {activeTab === 'upgrades' && (
                          <>
                            <button 
                              onClick={() => handleApproveUpgrade(app._id)} 
                              className="text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-md flex items-center gap-1"
                            >
                              <CheckCircle size={14} /> Approve
                            </button>
                            <button 
                              onClick={() => handleDecline(app._id)} 
                              className="text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md flex items-center gap-1"
                            >
                              <X size={14} /> Decline
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    if (activeTab === 'submissions') {
      if (submissions.length === 0) {
        return <div className="p-12 text-center text-gray-500">No journal submissions found.</div>;
      }
  
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Author / Title</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Abstract</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase">File</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((sub) => (
                <tr key={sub._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-gray-900">{sub.title}</div>
                    <div className="text-xs text-gray-500">{sub.authorName} ({sub.email})</div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-gray-500 line-clamp-2 max-w-xs">{sub.abstract}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(sub.submittedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a 
                      href={sub.publicationUrl} 
                      target="_blank" 
                      className="text-blue-600 hover:underline text-sm font-medium flex items-center justify-end gap-1"
                    >
                      <Download size={14} /> View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl min-h-dvh">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
              { id: 'pending', label: 'Pending Applications', count: pendingApps.length },
              { id: 'upgrades', label: 'Tier Upgrades', count: upgradeRequests.length },
              { id: 'approved', label: 'Approved Members', count: approvedApps.length },
              { id: 'mentor-requests', label: 'Mentor Requests', count: mentorRequests.length },
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
                <span className={`py-0.5 px-2 rounded-full text-xs font-bold ${
                    activeTab === tab.id ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                }`}>
                    {tab.count}
                </span>
            </button>
          ))}
        </nav>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>}

      {/* Table */}
      <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-200">
        {renderTable()}
      </div>

      {/* --- APPLICATION DETAIL MODAL --- */}
      {selectedApp && (
        <div className="fixed inset-0 z-101 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4" onClick={() => setSelectedApp(null)}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
                
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">{getAppName(selectedApp)}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">{selectedApp.category}</p>
                    </div>
                    <button onClick={() => setSelectedApp(null)} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Contact Details</h4>
                            <div className="text-sm grid grid-cols-[1fr_2fr] gap-1">
                                <span className="text-gray-500">Email:</span>
                                <span className="font-medium text-gray-900 truncate">{getAppEmail(selectedApp)}</span>
                                <span className="text-gray-500">Phone:</span>
                                <span className="font-medium text-gray-900">{getAppPhone(selectedApp)}</span>
                                <span className="text-gray-500">Address:</span>
                                <span className="font-medium text-gray-900 truncate">{selectedApp.headOfficeAddress || selectedApp.address || 'N/A'}</span>
                            </div>
                        </div>

                        {/* Professional Info */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold text-gray-900 border-b pb-1">Professional Info</h4>
                            <div className="text-sm grid grid-cols-[1fr_2fr] gap-1">
                                {selectedApp.companyName ? (
                                    <>
                                        <span className="text-gray-500">CAC No:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.cacNumber}</span>
                                        <span className="text-gray-500">Sector:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.businessSector || 'N/A'}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-gray-500">Role:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.occupation || 'N/A'}</span>
                                        <span className="text-gray-500">Inst:</span>
                                        <span className="font-medium text-gray-900">{selectedApp.institution || 'N/A'}</span>
                                    </>
                                )}
                            </div>
                        </div>


                            <div className={`md:col-span-2 space-y-3 p-4 rounded-lg border ${
                              selectedApp.mentorRequested && !selectedApp.assignedMentor 
                                ? 'bg-orange-50 border-orange-200 shadow-sm' 
                                : 'bg-purple-50 border-purple-100'
                            }`}>
                                <div className="flex items-center justify-between border-b pb-2">
                                    <h4 className={`text-sm font-bold flex items-center gap-2 ${
                                      selectedApp.mentorRequested && !selectedApp.assignedMentor ? 'text-orange-900' : 'text-purple-900'
                                    }`}>
                                        <UserPlus size={16} /> 
                                        {selectedApp.mentorRequested && !selectedApp.assignedMentor 
                                          ? "Priority: Mentorship Requested" 
                                          : "Mentorship Assignment"}
                                    </h4>
                                    {selectedApp.assignedMentor && (
                                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                                            Active
                                        </span>
                                    )}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-3 items-end">
                                    <div className="w-full">
                                        <label className="text-xs text-purple-700 font-semibold mb-1 block">Assign to Mentor</label>
                                        <select 
                                            value={selectedMentorId}
                                            onChange={(e) => setSelectedMentorId(e.target.value)}
                                            className="w-full p-2 text-sm border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        >
                                            <option value="">Select a Mentor...</option>
                                            {mentors.map(m => (
                                                <option key={m.id} value={m.id}>{m.fullName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button 
                                        onClick={handleAssignMentor}
                                        disabled={isAssigning || !selectedMentorId}
                                        className="w-full sm:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white text-sm font-bold rounded-md flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                                    >
                                        {isAssigning ? 'Saving...' : (
                                            <>
                                               <Save size={14} /> {selectedApp.assignedMentor ? 'Update' : 'Assign'}
                                            </>
                                        )}
                                    </button>
                                </div>
                                {selectedApp.assignedMentor && (
                                    <p className="text-xs text-purple-600 mt-1">
                                        Currently assigned to: <strong>{selectedApp.assignedMentor.name}</strong>
                                    </p>
                                )}
                            </div>
      
                        {/* ------------------------------------------- */}

                        {/* Documents */}
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
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-400 italic">No documents attached.</p>
                            )}
                        </div>

                    </div>
                </div>

                {/* Footer */}
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
                    {activeTab === 'upgrades' && (
                      <button 
                          onClick={() => handleApproveUpgrade(selectedApp._id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-colors"
                      >
                          {submittingId === selectedApp._id ? 'Upgrading...' : 'Approve Upgrade'}
                      </button>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
}