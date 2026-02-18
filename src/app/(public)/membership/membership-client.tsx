"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import { 
  CheckCircle, 
  X, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Landmark, 
  Award, 
  Users, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  UploadCloud,
  CheckCircle2, Sparkles,
  AlertCircle,
  User,
  MapPin,
  Phone,
  Mail,
  Globe,
  Hash,
  Calendar
} from 'lucide-react';
import { AiOutlineMail } from "react-icons/ai";
import Modal from '@/components/Modal';
import { FlatPioneer } from '@/types/types';
import { PioneerGrid } from '@/components/PioneerGrid';
import ExpandableGrid from '@/components/ExpandableCard';

interface CategoryItem {
    title: string;
    desc: string;
    documents: string[];
}

interface ModalState {
  isOpen: boolean;
  content: string | null;
  title: string | null;
}

interface MembershipFormData {
  // --- Individual Fields ---
  membershipType: string;
  surname: string; firstName: string; middleName: string;
  dob: string; gender: string; maritalStatus: string;
  stateOfOrigin: string; city: string; lga: string;
  address: string; phone: string; email: string;
  occupation: string; institution: string; qualification: string; fieldOfStudy: string;
  guarantorName: string; guarantorPhone: string;
  background: {
    [key: string]: string; 
    tuberculosis: string;
    mentalDisorder: string;
    criminalRecord: string;
    pendingCharges: string;
    militaryService: string;
  };

  // --- Corporate / Institutional Fields ---
  companyName: string;
  cacNumber: string;
  yearIncorporated: string;
  businessSector: string;
  headOfficeAddress: string;
  companyEmail: string;
  companyWebsite: string;
  companyPhone: string;
  
  // Authorized Representative
  repName: string;
  repDesignation: string;
  repEmail: string;
  repPhone: string;

  // Key Staff (Storing as simple strings for top 5)
  keyStaff1: string;
  keyStaff2: string;
  keyStaff3: string;
  keyStaff4: string;
  keyStaff5: string;

  // --- Files (Merged for both types) ---
  files: {
    nationalId: File | null;
    certs: File | null;
    cv: File | null;
    passport: File | null;
    // Corporate specific
    cacCert: File | null;
    companyBrief: File | null;
    tin: File | null;
    letterOfIntent: File | null;
    staffList: File | null;
    repNationalId: File | null;
    repPassport: File | null;
  };
  
  agreedToDeclaration: boolean;
}

const pioneerMembers = [
    {
        name: "Dr. Daniel Gelleh",
        role: "Founder",
        photo: "/ph.svg"
    },
    {
        name: "Dr.  ",
        role: "Co-Founder",
        photo: "/ph.svg"
    },
    {
        name: "Dr. ",
        role: "Co-Founder",
        photo: "/ph.svg"
    },
    {
        name: "Dr. ",
        role: "Co-Founder",
        photo: "/ph.svg"
    },
    {
        name: "Dr. ",
        role: "Co-Founder",
        photo: "/ph.svg"
    },
];

export default function MembershipClient({ 
    children, 
    pioneers 
  }: { 
    children: React.ReactNode; 
    pioneers: FlatPioneer[]; 
  }) {
    // UI States
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [modalData, setModalData] = useState<ModalState>({ isOpen: false, content: null, title: null });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
    const [isModalSubmitted, setIsModalSubmitted] = useState(false);
    
    // Wizard State
    const [currentStep, setCurrentStep] = useState(1);

    // Form Data State
    const [formData, setFormData] = useState<MembershipFormData>({
        // Individual Defaults
        membershipType: 'Undergraduate',
        surname: '', firstName: '', middleName: '',
        dob: '', gender: '', maritalStatus: '',
        stateOfOrigin: '', city: '', lga: '',
        address: '', phone: '', email: '',
        occupation: '', institution: '', qualification: '', fieldOfStudy: '',
        guarantorName: '', guarantorPhone: '',
        background: {
          tuberculosis: 'No',
          mentalDisorder: 'No',
          criminalRecord: 'No',
          pendingCharges: 'No',
          militaryService: 'No',
        },
        
        // Corporate Defaults
        companyName: '', cacNumber: '', yearIncorporated: '', businessSector: '',
        headOfficeAddress: '', companyEmail: '', companyWebsite: '', companyPhone: '',
        repName: '', repDesignation: '', repEmail: '', repPhone: '',
        keyStaff1: '', keyStaff2: '', keyStaff3: '', keyStaff4: '', keyStaff5: '',

        files: {
          nationalId: null, certs: null, cv: null, passport: null,
          cacCert: null, companyBrief: null, tin: null, letterOfIntent: null,
          staffList: null, repNationalId: null, repPassport: null
        },
        agreedToDeclaration: false
    });

    const categories: CategoryItem[] = [
        { 
            title: "Student Membership", 
            desc: "For undergraduates and postgraduates.",
            documents: [
                "Valid Student ID Card",
                "Admission Letter or Proof of Enrollment",
                "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
                "Recommendation Letter (Optional)",
                "Coloured Passport Photograph (2x2, not older than 1 month)"
            ]
        },
        { 
            title: "Professional Membership", 
            desc: "For individuals in geospatial, tech, security, and related fields.",
            documents: [
                "Updated Curriculum Vitae (CV)",
                "Academic Certificates (Higher Institution)",
                "Professional Certifications (if any)",
                "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
                "Coloured Passport Photograph (2x2, not older than 1 month)"
            ]
        },
        { 
            title: "Institutional Membership", 
            desc: "For universities, research institutes, and training centers.",
            documents: [
                "Certificate of Establishment / Accreditation",
                "Letter of Intent on Official Institutional Letterhead",
                "Details of Authorized Contact Person (Name, Designation, Official Email Address, Official Phone Number)",
                "Institutional ID Card of Authorized Contact Person(s)",
                "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
                "Coloured Passport Photograph of Authorized Contact Person (2x2, not older than 1 month)"
            ]
        },
        { 
            title: "Corporate Membership", 
            desc: "For private sector organizations.",
            documents: [
                "Certificate of Incorporation",
                "Letter of Intent on Company Letterhead",
                "Details of Authorized Contact Person (Name, Designation, Official Email Address, Official Phone Number)",
                "Valid Government-Issued ID (NIMC, International Passport, residence permit)",
                "Coloured Passport Photograph of Authorized Contact Person (2x2, not older than 1 month)"
            ]
        },
        { 
            title: "Government/Agency Membership", 
            desc: "For ministries, security agencies, and regulators.",
            documents: [
                "Official Letter of Request",
                "Agency Mandate / Establishment Act",
                "Details of Liaison Officer",
                "Official ID of Liaison Officer",
                "Passport Photograph of Liaison Officer"
            ]
        },
        { 
            title: "Fellow/Honorary Membership", 
            desc: "For distinguished leaders and contributors.",
            documents: [] // No documents listed for this type
        },
      ];

    const getCategoryIcon = (index: number) => {
        const icons = [GraduationCap, Briefcase, Building2, Building2, Landmark, Award];
        const Icon = icons[index] || Users;
        return <Icon size={32} className="text-white" />;
    };

    // --- Helpers to determine form type ---
    const isCorporateCategory = (title?: string) => {
        if (!title) return false;
        return ["Institutional Membership", "Corporate Membership", "Government/Agency Membership"].includes(title);
    };

    // --- Handlers ---
    const openDocModal = (content: string, title: string) => setModalData({ isOpen: true, content, title });
    const closeDocModal = () => setModalData({ isOpen: false, content: null, title: null });

    const handleApplyClick = (category: CategoryItem) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
        setCurrentStep(1); 
        setError(null);
    };

    const handleCloseAppModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
        setIsModalSubmitted(false);
        setIsLoading(false);
        setError(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError(null);
    };

    const handleBackgroundChange = (key: string, value: string) => {
        setFormData(prev => ({
          ...prev,
          background: { ...prev.background, [key]: value }
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof MembershipFormData['files']) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
    
            // 1. Validation (Limit to 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert("File size must be less than 2MB");
                return;
            }
    
            // 2. State Update (Nested inside 'files')
            setFormData(prev => ({
                ...prev,
                files: { 
                    ...prev.files, 
                    [key]: file 
                }
            }));
    
            if (error) setError(null);
        }
    };

    // --- Validation Logic ---
    const validateStep = (step: number): boolean => {
        const isCorp = isCorporateCategory(selectedCategory?.title);

        if (step === 1) {
            if (isCorp) {
                if (!formData.companyName || !formData.cacNumber) {
                    setError("Company Name and CAC/RC Number are required.");
                    return false;
                }
                if (!formData.companyEmail || !formData.companyPhone) {
                    setError("Official Company contact details are required.");
                    return false;
                }
            } else {
                if (!formData.surname || !formData.firstName) {
                    setError("Please enter your full name.");
                    return false;
                }
                if (!formData.email || !formData.phone) {
                    setError("Please provide valid contact details.");
                    return false;
                }
                if (!formData.dob || !formData.gender) {
                    setError("Date of birth and gender are required.");
                    return false;
                }
            }
        }
        
        if (step === 2) {
             if (isCorp) {
                 if (!formData.repName || !formData.repDesignation) {
                     setError("Authorized Representative details are required.");
                     return false;
                 }
             } else {
                 if (!formData.occupation && !formData.institution) {
                     setError("Please provide your current occupation or institution.");
                     return false;
                 }
             }
        }

        if (step === 4) {
            if (isCorp) {
                 // Check at least CAC and Letter of Intent
                 if (!formData.files.cacCert || !formData.files.letterOfIntent) {
                     setError("CAC Certificate and Letter of Intent are mandatory.");
                     return false;
                 }
            } else {
                if (!formData.files.nationalId) {
                    setError("Please upload your National ID or Passport.");
                    return false;
                }
            }
        }

        return true;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setError(null);
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        setError(null);
        setCurrentStep(prev => prev - 1);
    };

    const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formData.agreedToDeclaration) {
            setError("You must agree to the declaration to proceed.");
            return;
        }

        setIsLoading(true);
        setError(null);
    
        const submissionData = new FormData();
    
        // 1. Append Text Fields
        Object.entries(formData).forEach(([key, value]) => {
            // Skip complex objects, we handle them below
            if (key !== 'files' && key !== 'background' && key !== 'agreedToDeclaration') {
                submissionData.append(key, value as string);
            }
        });
    
        // 2. Append Background Info (Only for Individuals)
        if (!isCorporateCategory(selectedCategory?.title)) {
            Object.entries(formData.background).forEach(([key, value]) => {
                submissionData.append(`background_${key}`, value);
            });
        }
    
        // 3. Append Files
        Object.entries(formData.files).forEach(([key, file]) => {
            if (file) {
                submissionData.append(key, file);
            }
        });
    
        // 4. Append Category
        if (selectedCategory) {
            submissionData.append('category', selectedCategory.title);
        }
    
        try {
            // --- REAL API CALL START ---
            const res = await fetch('/api/auth/apply', {
                method: 'POST',
                body: submissionData, // Browser automatically sets Content-Type to multipart/form-data
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Something went wrong during submission.');
            }
            
            setIsModalSubmitted(true);
            console.log('Application submitted successfully:', result);
            // --- REAL API CALL END ---

        } catch (err: unknown) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    // --- RENDER STEPS ---

    // STEP 1: Personal (Ind.) OR Organization Info (Corp.)
    const renderStep1 = () => {
        const isCorp = isCorporateCategory(selectedCategory?.title);

        if (isCorp) {
            return (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                        <Building2 className="text-green-600" size={20} />
                        <h4 className="font-bold text-gray-800">Organization Information</h4>
                    </div>
                    
                    {selectedCategory?.title === "Institutional Membership" && (
                        <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Membership Type</label>
                            <div className="flex flex-col gap-6">
                            {['Academia', 'Research & Innovation Institutes', 'Training and Capacity Building Center'].map(type => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.membershipType === type ? 'border-green-600 bg-white' : 'border-gray-300'}`}>
                                    {formData.membershipType === type && <div className="w-3 h-3 bg-green-600 rounded-full" />}
                                </div>
                                <input type="radio" name="membershipType" value={type} checked={formData.membershipType === type} onChange={handleChange} className="hidden" />
                                <span className={`text-sm font-medium transition-colors ${formData.membershipType === type ? 'text-green-800' : 'text-gray-600'}`}>{type}</span>
                                </label>
                            ))}
                            </div>
                        </div> 
                    )}
                    {/* Passport Image Upload */}
                    <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                                Photograph
                            </label>
                            
                            {!formData.files.passport ? (
                                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-green-50 transition-colors group">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadCloud className="w-8 h-8 mb-2 text-green-500 group-hover:scale-110 transition-transform" />
                                        <p className="text-xs text-gray-500">
                                            <span className="font-semibold text-green-600">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-[10px] text-gray-400 mt-1">PNG, JPG or PDF (MAX. 2MB)</p>
                                    </div>
                                    <input 
                                        type="file" 
                                        className="hidden" 
                                        accept="image/*,.pdf"
                                        // WE PASS THE SPECIFIC KEY HERE
                                        onChange={(e) => handleFileChange(e, 'passport')} 
                                    />
                                </label>
                            ) : (
                                <div className="flex items-center justify-between p-3 bg-white border border-green-200 rounded-lg shadow-sm">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                            <UploadCloud size={20} />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-sm font-medium text-gray-700 truncate max-w-[200px]">
                                                {formData.files.passport.name}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {(formData.files.passport.size / 1024 / 1024).toFixed(2)} MB
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        // Update the removal logic to target nested files
                                        onClick={() => setFormData(prev => ({ 
                                            ...prev, 
                                            files: { ...prev.files, passport: null } 
                                        }))}
                                        className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            )}
                        </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Company / Institution Name <span className='text-red-500'>*</span></label>
                            <input name="companyName" value={formData.companyName} onChange={handleChange} className="input-field" placeholder="Full Registered Name" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className='space-y-1'>
                                <label className="text-xs font-semibold text-gray-500">CAC / RC Number <span className='text-red-500'>*</span></label>
                                <input name="cacNumber" value={formData.cacNumber} onChange={handleChange} className="input-field" placeholder="RC 123456" />
                            </div>
                            <div className='space-y-1'>
                                <label className="text-xs font-semibold text-gray-500">Year Incorporated</label>
                                <input name="yearIncorporated" value={formData.yearIncorporated} onChange={handleChange} className="input-field" placeholder="YYYY" />
                            </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Business Sector</label>
                            <input name="businessSector" value={formData.businessSector} onChange={handleChange} className="input-field" placeholder="e.g. Construction, Research, Oil & Gas" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                <input name="companyEmail" type="email" placeholder="Official Email" value={formData.companyEmail} onChange={handleChange} className="input-field pl-10" />
                            </div>
                             <div className="relative">
                                <Phone className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                <input name="companyPhone" type="tel" placeholder="Official Phone" value={formData.companyPhone} onChange={handleChange} className="input-field pl-10" />
                            </div>
                        </div>
                         <div className="relative">
                            <Globe className="absolute left-3 top-2.5 text-gray-400" size={16} />
                            <input name="companyWebsite" placeholder="Website URL" value={formData.companyWebsite} onChange={handleChange} className="input-field pl-10" />
                        </div>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 text-gray-400" size={16} />
                            <input name="headOfficeAddress" placeholder="Head Office Address" value={formData.headOfficeAddress} onChange={handleChange} className="input-field pl-10 w-full" />
                        </div>
                    </div>
                </div>
            );
        }

        // --- Individual View ---
        return (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <User className="text-green-600" size={20} />
                    <h4 className="font-bold text-gray-800">Personal Information</h4>
                </div>
                
                {selectedCategory?.title === "Student Membership" && (
                    <div className="space-y-4">
                        {/* Membership Type Radio Buttons */}
                        <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Membership Type</label>
                            <div className="flex gap-6">
                                {['Undergraduate', 'Postgraduate'].map(type => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.membershipType === type ? 'border-green-600 bg-white' : 'border-gray-300'}`}>
                                            {formData.membershipType === type && <div className="w-3 h-3 bg-green-600 rounded-full" />}
                                        </div>
                                        <input type="radio" name="membershipType" value={type} checked={formData.membershipType === type} onChange={handleChange} className="hidden" />
                                        <span className={`text-sm font-medium transition-colors ${formData.membershipType === type ? 'text-green-800' : 'text-gray-600'}`}>{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div> 
                )}

                {/* Passport Image Upload */}
                <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                        Passport Photograph
                    </label>
                    
                    {!formData.files.passport ? (
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-green-50 transition-colors group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-8 h-8 mb-2 text-green-500 group-hover:scale-110 transition-transform" />
                                <p className="text-xs text-gray-500">
                                    <span className="font-semibold text-green-600">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-[10px] text-gray-400 mt-1">PNG, JPG or PDF (MAX. 2MB)</p>
                            </div>
                            <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*,.pdf"
                                // WE PASS THE SPECIFIC KEY HERE
                                onChange={(e) => handleFileChange(e, 'passport')} 
                            />
                        </label>
                    ) : (
                        <div className="flex items-center justify-between p-3 bg-white border border-green-200 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <UploadCloud size={20} />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-medium text-gray-700 truncate max-w-[200px]">
                                        {formData.files.passport.name}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {(formData.files.passport.size / 1024 / 1024).toFixed(2)} MB
                                    </span>
                                </div>
                            </div>
                            <button
                                type="button"
                                // Update the removal logic to target nested files
                                onClick={() => setFormData(prev => ({ 
                                    ...prev, 
                                    files: { ...prev.files, passport: null } 
                                }))}
                                className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className='space-y-1'>
                        <label className="text-xs font-semibold text-gray-500">Surname <span className='text-red-500'>*</span></label>
                        <input name="surname" value={formData.surname} onChange={handleChange} className="input-field" placeholder="Doe" />
                    </div>
                    <div className='space-y-1'>
                        <label className="text-xs font-semibold text-gray-500">First Name <span className='text-red-500'>*</span></label>
                        <input name="firstName" value={formData.firstName} onChange={handleChange} className="input-field" placeholder="Jane" />
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className='space-y-1'>
                        <label className="text-xs font-semibold text-gray-500">Date of Birth <span className='text-red-500'>*</span></label>
                        <input name="dob" type="date" value={formData.dob} onChange={handleChange} className="input-field" />
                    </div>
                    <div className='space-y-1'>
                        <label className="text-xs font-semibold text-gray-500">Gender <span className='text-red-500'>*</span></label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="input-field">
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 text-gray-400" size={16} />
                        <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input-field pl-10" />
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-3 top-2.5 text-gray-400" size={16} />
                        <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input-field pl-10" />
                    </div>
                </div>

                <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    <input name="address" placeholder="Contact Address" value={formData.address} onChange={handleChange} className="input-field pl-10 w-full" />
                </div>
            </div>
        );
    };
    
    // STEP 2: Education (Ind.) OR Authorized Rep (Corp.)
    const renderStep2 = () => {
        const isCorp = isCorporateCategory(selectedCategory?.title);

        if (isCorp) {
            return (
                 <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                        <User className="text-green-600" size={20} />
                        <h4 className="font-bold text-gray-800">Authorized Representative</h4>
                    </div>
                    <p className="text-xs text-gray-500 -mt-2 mb-4">Details of the primary contact person.</p>

                    <div className="space-y-4">
                        <input name="repName" placeholder="Full Name" value={formData.repName} onChange={handleChange} className="input-field w-full" />
                        <input name="repDesignation" placeholder="Designation / Role" value={formData.repDesignation} onChange={handleChange} className="input-field w-full" />
                        <div className="grid grid-cols-2 gap-4">
                             <input name="repEmail" type="email" placeholder="Email" value={formData.repEmail} onChange={handleChange} className="input-field w-full" />
                             <input name="repPhone" type="tel" placeholder="Phone" value={formData.repPhone} onChange={handleChange} className="input-field w-full" />
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <Briefcase className="text-green-600" size={20} />
                    <h4 className="font-bold text-gray-800">Education & Profession</h4>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Current Occupation</label>
                        <input name="occupation" placeholder="e.g. GIS Analyst" value={formData.occupation} onChange={handleChange} className="input-field w-full" />
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Institution / Organization</label>
                        <input name="institution" placeholder="e.g. University of Lagos" value={formData.institution} onChange={handleChange} className="input-field w-full" />
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Highest Qualification</label>
                        <input name="qualification" placeholder="e.g. B.Sc Geography (2019)" value={formData.qualification} onChange={handleChange} className="input-field w-full" />
                    </div>
                    
                    {formData.membershipType === 'Student' && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <label className="text-xs font-bold text-blue-800 mb-1 block">Field of Study (Required for Students)</label>
                            <input name="fieldOfStudy" placeholder="e.g. Surveying & Geoinformatics" value={formData.fieldOfStudy} onChange={handleChange} className="input-field w-full bg-white border-blue-200" />
                        </div>
                    )}
                </div>
            </div>
        );
    };
    
    // STEP 3: Background (Ind.) OR Key Staff (Corp.)
    const renderStep3 = () => {
        const isCorp = isCorporateCategory(selectedCategory?.title);

        if (isCorp) {
            return (
                 <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                        <Users className="text-green-600" size={20} />
                        <h4 className="font-bold text-gray-800">Key Staff</h4>
                    </div>
                    <p className="text-xs text-gray-500 -mt-2 mb-4">List up to 5 key technical or management staff (Name & Role).</p>

                    <div className="space-y-3">
                        <input name="keyStaff1" placeholder="1. Name - Role" value={formData.keyStaff1} onChange={handleChange} className="input-field w-full" />
                        <input name="keyStaff2" placeholder="2. Name - Role" value={formData.keyStaff2} onChange={handleChange} className="input-field w-full" />
                        <input name="keyStaff3" placeholder="3. Name - Role" value={formData.keyStaff3} onChange={handleChange} className="input-field w-full" />
                        <input name="keyStaff4" placeholder="4. Name - Role" value={formData.keyStaff4} onChange={handleChange} className="input-field w-full" />
                        <input name="keyStaff5" placeholder="5. Name - Role" value={formData.keyStaff5} onChange={handleChange} className="input-field w-full" />
                    </div>
                </div>
            )
        }

        return (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <AlertCircle className="text-green-600" size={20} />
                    <h4 className="font-bold text-gray-800">Background Check</h4>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar border border-gray-100">
                    {[
                    { key: 'tuberculosis', label: 'History of Tuberculosis (Last 3 years)?' },
                    { key: 'mentalDisorder', label: 'Physical/Mental disorder requiring service?' },
                    { key: 'criminalRecord', label: 'Criminal offence (charged/convicted)?' },
                    { key: 'militaryService', label: 'Military/Police/Security Service?' },
                    ].map((item) => (
                    <div key={item.key} className="flex justify-between items-start md:items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                        <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                        <div className="flex gap-4 ml-4 shrink-0">
                        <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" className="accent-green-600" checked={formData.background[item.key] === 'Yes'} onChange={() => handleBackgroundChange(item.key, 'Yes')} /> 
                            <span className="text-sm">Yes</span>
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer">
                            <input type="radio" className="accent-green-600" checked={formData.background[item.key] === 'No'} onChange={() => handleBackgroundChange(item.key, 'No')} /> 
                            <span className="text-sm">No</span>
                        </label>
                        </div>
                    </div>
                    ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-gray-800 text-sm mb-3">Guarantor Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <input name="guarantorName" placeholder="Guarantor Name" value={formData.guarantorName} onChange={handleChange} className="input-field" />
                        <input name="guarantorPhone" placeholder="Guarantor Phone" value={formData.guarantorPhone} onChange={handleChange} className="input-field" />
                    </div>
                </div>
            </div>
        );
    };
    
    // STEP 4: Attachments
    const renderStep4 = () => {
        const isCorp = isCorporateCategory(selectedCategory?.title);
        
        // Define file lists based on Category
        const filesToUpload = isCorp 
        ? [
            { id: 'cacCert', label: "CAC Registration Certificate", req: true },
            { id: 'companyBrief', label: "Company Profile / Brief", req: true },
            { id: 'tin', label: "Tax Identification Number (TIN)", req: true },
            { id: 'letterOfIntent', label: "Letter of Intent (Letterhead)", req: true },
            { id: 'staffList', label: "List of Key Staff", req: false },
            { id: 'repNationalId', label: "Rep. National ID / NIN", req: true },
            { id: 'repPassport', label: "Rep. Passport Photo", req: true },
          ]
        : [
            { id: 'nationalId', label: "National ID / Int'l Passport", req: true },
            { id: 'certs', label: "Educational/Professional Certificates", req: false },
            { id: 'cv', label: "Curriculum Vitae", req: false }
          ];

        return (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                    <UploadCloud className="text-green-600" size={20} />
                    <h4 className="font-bold text-gray-800">Required Attachments</h4>
                </div>

                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {filesToUpload.map((file) => (
                        <div key={file.id} className="group relative border-2 border-dashed border-gray-200 hover:border-green-400 bg-gray-50 hover:bg-green-50/30 rounded-xl p-4 transition-all">
                        <label className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full shadow-sm text-green-600">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">{file.label} {file.req && <span className="text-red-500">*</span>}</p>
                                    <p className="text-xs text-gray-400">
                                        {formData.files[file.id as keyof MembershipFormData['files']] 
                                        ? <span className="text-green-600 font-medium">File Selected: {formData.files[file.id as keyof MembershipFormData['files']]?.name}</span> 
                                        : "Max size 5MB (PDF/JPG)"}
                                    </p>
                                </div>
                            </div>
                            <input 
                                type="file" 
                                onChange={(e) => handleFileChange(e, file.id as keyof MembershipFormData['files'])}
                                className="hidden" 
                            />
                            <span className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                                Choose File
                            </span>
                        </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    
    // STEP 5: Declaration
    const renderStep5 = () => (
        <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
           <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
             <CheckCircle className="text-green-600" size={20} />
             <h4 className="font-bold text-gray-800">Declaration</h4>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border border-orange-100 text-sm text-gray-800 leading-relaxed shadow-inner">
            <p className="font-bold mb-3 flex items-center gap-2 text-orange-800">
                <AlertCircle size={16} /> I understand that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-xs md:text-sm">
               <li>Any false statement shall be grounds for immediate rejection or termination.</li>
               <li>Membership of <span className="cooper">GIFON</span> is a privilege, not a right.</li>
               <li>I pledge to abide by the Code of Ethics and Decisions of <span className="cooper">GIFON</span>.</li>
            </ul>
          </div>
          
          <label className="flex items-start gap-4 p-4 border-2 border-transparent hover:border-green-100 rounded-xl cursor-pointer hover:bg-green-50/30 transition bg-gray-50">
            <input 
              type="checkbox" 
              checked={formData.agreedToDeclaration}
              onChange={(e) => setFormData(prev => ({...prev, agreedToDeclaration: e.target.checked}))}
              className="mt-1 w-5 h-5 accent-green-600 rounded focus:ring-green-500 border-gray-300 shrink-0" 
            />
            <span className="text-sm text-gray-600 font-medium select-none">
              I hereby declare that the information provided is true and I agree to the terms above.
            </span>
          </label>
        </div>
    );

    return (
        <>
            <HeroSection
                title={<>Join the <span className="cooper">GIFON</span> Community, Connect, Learn, and Contribute to Advancing Geospatial Intelligence, National Security, and Sustainable Development in Nigeria.</>}
                description={<></>}
                backgroundMedia={["/media/20240418_130158.JPG"]}
            />
            
            <div id="why-join" className="scroll-mt-24"></div>
            <section className="py-20 px-4 md:px-6 bg-linear-to-b from-white to-green-50/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join <span className="cooper text-green-700">GIFON</span>?</h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 leading-relaxed text-lg text-gray-700 text-justify md:text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-400 to-green-600"></div>
                        <p className='text-justify'>Join <span className="cooper font-bold">GIFON</span> and be part of a community shaping the future of Nigeria through Geospatial Intelligence. Here, you don&apos;t just learn, you innovate, collaborate, and lead initiatives that strengthen national security, advance sustainable development, and transform communities. Connect with visionary experts, gain access to cutting-edge knowledge, and contribute your skills to projects that make a real, lasting impact. At <span className="cooper font-bold">GIFON</span>, your insights drive progress, your intelligence fuels solutions, and together, we empower a safer, smarter, and more resilient Nigeria.</p>
                    </div>
                </div>
            </section>

            {/* How to Apply Section */}
            {/* <div id="apply" className="scroll-mt-24"></div>
            <section className="py-20 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Membership Application Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { title: "Choose Category", desc: "Review categories to find your fit." },
                            { title: "Fill Form", desc: "Complete the online application." },
                            { title: "Attach Docs", desc: "Upload required supporting files." },
                            { title: "Payment", desc: "Securely pay your annual dues." },
                            { title: "Confirmation", desc: "Receive your Digital ID." }
                        ].map((step, i) => (
                            <div key={i} className="relative bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-green-200">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                {i < 4 && (
                                    <div className="hidden md:block absolute top-11 -right-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => openDocModal(forumContent.supportingDocuments, "Supporting Documents Checklist")}
                            className='inline-flex items-center gap-2 text-green-700 bg-green-50 px-6 py-3 rounded-full hover:bg-green-100 transition font-semibold border border-green-200'
                        >
                            <FileText size={18} /> View Required Documents Checklist
                        </button>
                    </div>
                </div>
            </section> */}

            <div id="categories" className="scroll-mt-24"></div>
            <section className="relative px-4 md:px-6 py-24 bg-slate-50 overflow-hidden flex flex-col items-center">
    
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" 
                    style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                </div>
                
                {/* Section Header */}
                <div className="relative z-10 text-center mb-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Membership Application <span className='text-green-600'>Process</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="w-full">
                    <ExpandableGrid onApplyClick={handleApplyClick}/>
                </div>
            </section>
            
            <div id="benefits" className="scroll-mt-24"></div>
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-20 space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Membership Benefits
                            </h2>
                            <div className="w-20 h-1.5 bg-green-600 mt-3 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-600 mb-8">
                            As a <span className="cooper text-gray-800">GIFON</span> member, you unlock a suite of resources designed to accelerate your career.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Access to exclusive publications, research reports, and policy briefs.",
                                "Discounted rates for conferences, training, and certifications.",
                                "Networking with global experts and policymakers.",
                                "Eligibility for scholarships, fellowships, and mentorships.",
                                "Opportunities to contribute to national research projects.",
                                "Participation in shaping Nigeria’s geospatial policies.",
                                "Recognition as part of Nigeria’s leading GEOINT community."
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Simplified table placeholder */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-gray-900 p-6 text-white">
                            <h3 className="text-xl font-bold">Fee Structure</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead className="text-xs font-bold text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4">Category</th>
                                        <th className="px-6 py-4">Annual</th>
                                        <th className="px-6 py-4">3-Year</th>
                                        <th className="px-6 py-4">Lifetime</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Student</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 45,000</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 108,000</td>
                                        <td className="px-6 py-4 text-red-400 opacity-50"><X size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Professional</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 150,000</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 360,000</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Institutional</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 1,350,000</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 3,240,000</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Corporate</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 3,750,000</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 9,000,000</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="hover:bg-green-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">Govt/Agency</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 4,500,000</td>
                                        <td className="px-6 py-4 text-gray-600">₦ 10,800,000</td>
                                        <td className="px-6 py-4 text-green-600"><CheckCircle size={18}/></td>
                                    </tr>
                                    <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                                        <td className="px-6 py-4 font-bold text-green-900">Fellow/Honorary</td>
                                        <td className="px-6 py-4 text-green-800" colSpan={2}>By Nomination</td>
                                        <td className="px-6 py-4 text-green-800 font-bold">Automatic</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div  id="pioneer-members" className="scroll-mt-24"></div>
            {/* <section className="py-20 px-4 md:px-6 bg-green-900">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 leading-tight text-center">
                    Pioneer Members
                </h2>
                <div className="mt-12 md:mt-16 max-w-5xl mx-auto flex flex-wrap gap-4 md:gap-6 items-center justify-center">
                    {pioneerMembers.map((m, i) => (
                        <div key={i} className="flex flex-col items-center relative">      
                        <div className="flex flex-col items-center text-center group">
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-105">
                            <Image
                              src={m.photo}
                              alt={m.name}
                              fill
                              className="object-cover shadow-md border-4 border-white ring-1 ring-gray-100"
                            />
                          </div>
                          <h4 className="text-sm md:text-base font-bold text-gray-100 bellefair mb-0.5 group-hover:text-green-300 transition-colors px-2">
                            {m.name}
                          </h4>
                          <p className="text-[10px] md:text-xs text-green-300 font-medium sen uppercase tracking-tight">
                            {m.role}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
            </section> */}
            <PioneerGrid pioneers={pioneers}/>

            {/* ------------------------------------------------------------------ */}
            {/* ENHANCED WIZARD MODAL                                              */}
            {/* ------------------------------------------------------------------ */}
            {isModalOpen && selectedCategory && (
                <div 
                    className="fixed top-0 left-0 w-full h-full z-9999 flex items-end sm:items-center justify-center bg-gray-900/80 backdrop-blur-sm m-0 p-4"
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} // Inline override to be safe
                    onClick={handleCloseAppModal}
                >
                    <div 
                        className="relative w-full max-w-lg bg-white shadow-2xl rounded-t-3xl sm:rounded-2xl flex flex-col h-[92vh] sm:h-auto sm:max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* STICKY HEADER */}
                        <div className="sticky top-0 z-30 bg-gray-50/95 backdrop-blur-md border-b border-gray-100 px-5 py-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
                                    {isModalSubmitted ? "Application Received" : "Join GIFON"}
                                </h3>
                                {!isModalSubmitted && (
                                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                                        Applying as: <span className="font-semibold text-green-600">{selectedCategory.title}</span>
                                    </p>
                                )}
                            </div>
                            <button onClick={handleCloseAppModal} className="p-2 rounded-full text-gray-400 hover:text-red-500 transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {isModalSubmitted ? (
                            /* SUCCESS SCREEN */
                            <div className="p-8 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="text-green-600 w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
                                <p className="text-gray-600 mb-8 max-w-[280px]">
                                    Your application has been submitted securely. We will contact you shortly.
                                </p>
                                <button 
                                    onClick={handleCloseAppModal} 
                                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold"
                                >
                                    Close Window
                                </button>
                            </div>
                        ) : (
                            /* FORM FLOW */
                            <form onSubmit={handleModalSubmit} className="flex flex-col flex-1 overflow-hidden">
                                {/* PROGRESS BAR */}
                                <div className="w-full bg-gray-200 h-1">
                                    <div 
                                        className="h-full bg-green-600 transition-all duration-500"
                                        style={{ width: `${(currentStep / 5) * 100}%` }}
                                    ></div>
                                </div>

                                {/* SCROLLABLE STEPS */}
                                <div className="p-5 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                                    <div className="space-y-4">
                                        {currentStep === 1 && renderStep1()}
                                        {currentStep === 2 && renderStep2()}
                                        {currentStep === 3 && renderStep3()}
                                        {currentStep === 4 && renderStep4()}
                                        {currentStep === 5 && renderStep5()}
                                    </div>

                                    {error && (
                                        <div className="mt-6 flex items-start gap-2 text-red-600 text-xs font-semibold bg-red-50 p-3 rounded-lg border border-red-100">
                                            <AlertCircle size={14} className="mt-0.5 shrink-0" /> 
                                            <span>{error}</span>
                                        </div>
                                    )}
                                </div>

                                {/* STICKY FOOTER (Inside Form) */}
                                <div className="bg-white border-t border-gray-100 p-4 sm:p-6 flex items-center gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                                    {currentStep > 1 && (
                                        <button 
                                            type="button" 
                                            onClick={prevStep} 
                                            /* Changed to w-1/3 to keep it smaller than the primary action */
                                            className="w-1/3 py-3.5 rounded-xl font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 transition border border-gray-200 text-sm flex items-center justify-center gap-1"
                                        >
                                            <ChevronLeft size={16} /> Back
                                        </button>
                                    )}
                                    
                                    {currentStep < 5 ? (
                                        <button 
                                            type="button" 
                                            onClick={nextStep} 
                                            /* Changed to flex-1 to fill remaining space properly */
                                            className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-green-700 transition shadow-lg shadow-green-200 flex items-center justify-center gap-1"
                                        >
                                            Next Step <ChevronRight size={16} />
                                        </button>
                                    ) : (
                                        <button 
                                            type="submit"
                                            disabled={isLoading || !formData.agreedToDeclaration}
                                            /* Consistently fills space */
                                            className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-bold disabled:bg-gray-400 text-sm hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                    Processing...
                                                </span>
                                            ) : 'Submit Application'}
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Helper Styles for Input Fields to keep JSX clean */}
            <style jsx>{`
                .input-field {
                    width: 100%;
                    padding: 10px 14px;
                    background-color: #f9fafb; /* bg-gray-50 */
                    border: 1px solid #e5e7eb; /* border-gray-200 */
                    border-radius: 0.75rem; /* rounded-xl */
                    font-size: 0.95rem;
                    color: #1f2937;
                    transition: all 0.2s;
                    outline: none;
                }
                .input-field:focus {
                    background-color: white;
                    border-color: #22c55e; /* green-500 */
                    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1); /* ring-green-100 */
                }
                /* Custom scrollbar for background section */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db; 
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af; 
                }
            `}</style>
        </>
    );
}