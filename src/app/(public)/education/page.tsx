"use client";

import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link'; 
import { useState, ChangeEvent, FormEvent, Suspense } from 'react'; // 1. Added Suspense
import { 
  BookOpen, Award, Users, ArrowRight, Target, Layers, CheckCircle2,
  GraduationCap, FileText, Globe, Sparkles, X, ChevronLeft, ChevronRight,
  AlertCircle, CheckCircle, Upload, Briefcase, User, Trash2, ArrowUpRight
} from 'lucide-react';

// 2. Renamed the main logic component to EducationContent (removed default export)
function EducationContent() {
  // --- STATE MANAGEMENT ---
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [activeTalentFeature, setActiveTalentFeature] = useState<any>(null); 
  const [currentStep, setCurrentStep] = useState(1); 
  const [isModalSubmitted, setIsModalSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Expanded Form Data State
  const [formData, setFormData] = useState({
    // Section A: Personal
    fullName: '', dob: '', nationality: '', countryRes: '', gender: '', 
    phone: '', email: '', address: '', linkedin: '',membershipNumber: '',
    
    // Section B: Education
    qualification: '', institution: '', gradYear: '', fieldStudy: '', 
    gpa: '', certifications: '',

    // Section C: Professional
    employer: '', jobTitle: '', experienceYears: '', 
    responsibilities: '', geointExperience: '',

    // Section D: Personal Statement
    statementText: '',

    // Section E: References
    ref1Name: '', ref1Rel: '', ref1Email: '', ref1Phone: '',
    ref2Name: '', ref2Rel: '', ref2Email: '', ref2Phone: '',

    // Section F: Additional
    canParticipate: '', languages: '', otherAchievements: '',

    // Section G: Declaration
    signature: '', signDate: '', agreedToDeclaration: false,

    // Attachments (Store File objects)
    attachments: {
        cv: null as File | null,
        transcripts: null as File | null,
        statement: null as File | null,
        references: null as File | null,
    }
  });

  // --- DATA: TALENT FEATURES ---
  const talentFeatures = [
    {
        id: 'mentorship',
        icon: Users,
        colorClass: 'bg-green-600 shadow-green-900/50',
        textClass: 'text-green-600',
        title: <><span className="cooper">GIFON</span> Mentorship program</>,
        tagline: <>“Building minds, guiding careers, <br/>and shaping the future of geospatial intelligence.”</>,
        description: <>The <span className="cooper">GIFON</span> Mentorship Program is a structured professional development initiative designed to nurture the next generation of geospatial intelligence (GEOINT) leaders in Nigeria and Africa. The programme connects students, early career professionals, researchers, and emerging practitioners with experienced GEOINT experts, policy leaders, and industry professionals across government, academia, and the private sector. Through guided mentorship, knowledge exchange, career guidance, and exposure to real-world geospatial applications, the programme supports skills transfer, leadership development, ethical practice, and professional excellence within the geospatial intelligence ecosystem."</>
    },
    {
        id: 'career',
        icon: Target,
        colorClass: 'bg-blue-600 shadow-blue-900/50',
        textClass: 'text-blue-600',
        title: <><span className="cooper">GIFON</span> Career Services</>,
        tagline: <>“From skills to service, <br/>empowering geospatial careers with purpose and impact.”</>,
        description: <><span className="cooper">GIFON</span> Career Services is a dedicated career development platform designed to prepare, position, and connect geospatial professionals for meaningful opportunities in national development, security, research, and the global GEOINT workforce. The service supports students, graduates, and professionals through career advisory, employability skills development, certification guidance, and industry alignment. <span className="cooper">GIFON</span> Career Services bridges the gap between education and practice by aligning talent with evolving workforce needs across public institutions, private industry, international organizations, and innovation-driven enterprises.</>,
        actionLink: "mailto:career@gifon.org.ng",
        actionLabel: "Apply Now",
    },
    {
        id: 'networking',
        icon: CheckCircle2,
        colorClass: 'bg-purple-600 shadow-purple-900/50',
        textClass: 'text-purple-600',
        title: <><span className="cooper">GIFON</span> Professional Networking</>,
        tagline: <>“Connecting people, expertise, and opportunities <br/>across the geospatial intelligence community.”</>,
        description: <><span className="cooper">GIFON</span> Professional Networking provides a collaborative platform that connects geospatial intelligence professionals, institutions, policymakers, researchers, and industry leaders at national, regional, and international levels. The network fosters knowledge sharing, strategic partnerships, peer engagement, and cross sector collaboration within the GEOINT community. Through forums, conferences, roundtables, digital platforms, and special interest groups, GIFON strengthens professional relationships that drive innovation, policy influence, capacity development, and sustainable growth across the geospatial ecosystem.</>
    }
  ];

  // --- HANDLERS ---
  const handleOpenModal = () => setIsAppModalOpen(true);
  
  const handleCloseAppModal = () => {
    setIsAppModalOpen(false);
    setTimeout(() => {
        setCurrentStep(1);
        setIsModalSubmitted(false);
        setError(null);
        setFormData(prev => ({ 
            ...prev, 
            agreedToDeclaration: false,
            attachments: { cv: null, transcripts: null, statement: null, references: null }
        }));
    }, 300);
  };

  // Talent Modal Handlers
  const openTalentModal = (feature: any) => setActiveTalentFeature(feature);
  const closeTalentModal = () => setActiveTalentFeature(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleFileChange = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            setError(`File ${file.name} is too large. Max 5MB.`);
            return;
        }
        setFormData(prev => ({
            ...prev,
            attachments: {
                ...prev.attachments,
                [key]: file
            }
        }));
        setError(null);
    }
  };

  const removeFile = (key: string) => {
    setFormData(prev => ({
        ...prev,
        attachments: {
            ...prev.attachments,
            [key]: null
        }
    }));
  };

  const nextStep = () => {
    // Basic Validation per step
    if (currentStep === 1 && (!formData.fullName || !formData.email || !formData.phone)) {
        setError("Please fill in required personal fields."); return;
    }
    if (currentStep === 2 && (!formData.qualification || !formData.institution)) {
        setError("Please fill in your educational background."); return;
    }
    if (currentStep === 3 && (!formData.jobTitle)) {
        setError("Please provide your professional details."); return;
    }
    setError(null);
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setError(null);
    setCurrentStep(prev => prev - 1);
  };

  const handleModalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(!formData.signature || !formData.signDate) {
        setError("Please sign and date the declaration.");
        return;
    }
    // Check required files
    if (!formData.attachments.cv || !formData.attachments.transcripts) {
        setError("Please upload your CV and Transcripts.");
        return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API
    setIsLoading(false);
    setIsModalSubmitted(true);
  };

  // --- RENDER STEPS ---
  const renderStep1 = () => (
    <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <User className="text-green-600" size={20}/>
            <h4 className="text-lg font-bold text-gray-900">Section A: Personal Information</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Full Name <span className='text-red-500'>*</span></label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none" placeholder="Surname First" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Date of Birth <span className='text-red-500'>*</span></label>
                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Nationality <span className='text-red-500'>*</span></label>
                <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Country of Residence <span className='text-red-500'>*</span></label>
                <input type="text" name="countryRes" value={formData.countryRes} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Gender <span className='text-red-500'>*</span></label>
                <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm bg-white outline-none">
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Contact Number <span className='text-red-500'>*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Membership Number <span className='text-red-500'>*</span></label>
                <input type="number" name="membershipNumber" value={formData.membershipNumber} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Email Address <span className='text-red-500'>*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Postal Address <span className='text-red-500'>*</span></label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">LinkedIn / Portfolio URL <span className='text-red-500'>*</span></label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" placeholder="https://..." />
        </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <GraduationCap className="text-green-600" size={20}/>
            <h4 className="text-lg font-bold text-gray-900">Section B: Educational Background</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Highest Qualification <span className='text-red-500'>*</span></label>
                <select name="qualification" value={formData.qualification} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm bg-white outline-none">
                    <option value="">Select...</option>
                    <option value="PhD">PhD</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="HND">HND</option>
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Year of Graduation <span className='text-red-500'>*</span></label>
                <input type="number" name="gradYear" value={formData.gradYear} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" placeholder="YYYY" />
            </div>
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Institution / University <span className='text-red-500'>*</span></label>
            <input type="text" name="institution" value={formData.institution} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Field of Study / Major <span className='text-red-500'>*</span></label>
                <input type="text" name="fieldStudy" value={formData.fieldStudy} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">GPA (if applicable) <span className='text-red-500'>*</span></label>
                <input type="text" name="gpa" value={formData.gpa} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Other Relevant Certifications <span className='text-red-500'>*</span></label>
            <textarea name="certifications" value={formData.certifications} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none h-20" placeholder="List GEOINT, GIS, Security, Data Analytics certs..." />
        </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <Briefcase className="text-green-600" size={20}/>
            <h4 className="text-lg font-bold text-gray-900">Section C: Professional Experience</h4>
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Current Employer / Organization <span className='text-red-500'>*</span></label>
            <input type="text" name="employer" value={formData.employer} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Job Title <span className='text-red-500'>*</span></label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Years Experience <span className='text-red-500'>*</span></label>
                <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
            </div>
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Brief Description of Responsibilities <span className='text-red-500'>*</span></label>
            <textarea name="responsibilities" value={formData.responsibilities} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none h-20" />
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Relevant GEOINT / Spatial Analytics Experience <span className='text-red-500'>*</span></label>
            <textarea name="geointExperience" value={formData.geointExperience} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none h-20" placeholder="Detail your specific experience in this field..." />
        </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <FileText className="text-green-600" size={20}/>
            <h4 className="text-lg font-bold text-gray-900">Section D: Personal Statement</h4>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800 mb-2">
            <strong>Please address:</strong> Your interest in GEOINT, career goals, and how you will apply this knowledge to national/international development. (500-800 words)
        </div>
        <textarea 
            name="statementText" 
            value={formData.statementText} 
            onChange={handleInputChange} 
            className="w-full p-4 border rounded-lg text-sm outline-none h-64 focus:ring-2 focus:ring-green-500" 
            placeholder="Start typing your statement here..." 
        />
        <p className="text-xs text-gray-400 text-right">You may also upload this as a document in the Attachments section.</p>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <div>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                <Users className="text-green-600" size={20}/>
                <h4 className="text-lg font-bold text-gray-900">Section E: References</h4>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl space-y-4 mb-4">
                <h5 className="text-sm font-bold text-gray-700">Referee 1</h5>
                <div className="grid grid-cols-2 gap-3">
                    <input type="text" name="ref1Name" placeholder="Name" value={formData.ref1Name} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                    <input type="text" name="ref1Rel" placeholder="Relationship" value={formData.ref1Rel} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                    <input type="email" name="ref1Email" placeholder="Email" value={formData.ref1Email} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                    <input type="tel" name="ref1Phone" placeholder="Phone" value={formData.ref1Phone} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                <h5 className="text-sm font-bold text-gray-700">Referee 2</h5>
                <div className="grid grid-cols-2 gap-3">
                    <input type="text" name="ref2Name" placeholder="Name" value={formData.ref2Name} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                    <input type="text" name="ref2Rel" placeholder="Relationship" value={formData.ref2Rel} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                    <input type="email" name="ref2Email" placeholder="Email" value={formData.ref2Email} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                    <input type="tel" name="ref2Phone" placeholder="Phone" value={formData.ref2Phone} onChange={handleInputChange} className="p-2 text-xs border rounded" />
                </div>
            </div>
        </div>
    </div>
  );

  const renderStep6 = () => (
     <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <Globe className="text-green-600" size={20}/>
            <h4 className="text-lg font-bold text-gray-900">Section F: Additional Info</h4>
        </div>
        <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Are you able to participate in national and international training/exposure programs? <span className='text-red-500'>*</span></label>
            <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="canParticipate" value="Yes" checked={formData.canParticipate === 'Yes'} onChange={handleInputChange} className="accent-green-600" />
                    <span className="text-sm">Yes</span>
                 <span className='text-red-500'>*</span></label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="canParticipate" value="No" checked={formData.canParticipate === 'No'} onChange={handleInputChange} className="accent-green-600" />
                    <span className="text-sm">No</span>
                 <span className='text-red-500'>*</span></label>
            </div>
        </div>
        <div className="space-y-1 mt-4">
            <label className="text-xs font-bold text-gray-700">Languages Spoken <span className='text-red-500'>*</span></label>
            <input type="text" name="languages" value={formData.languages} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">Any other relevant information or achievements <span className='text-red-500'>*</span></label>
            <textarea name="otherAchievements" value={formData.otherAchievements} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none h-24" />
        </div>
     </div>
  );

  const renderStep7 = () => {
    const docTypes = [
        { id: 'cv', label: "Curriculum Vitae / Resume", required: true },
        { id: 'transcripts', label: "Academic Transcripts", required: true },
        { id: 'statement', label: "Personal Statement", required: false },
        { id: 'references', label: "Two Reference Letters", required: true },
    ];

    return (
        <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                <Upload className="text-green-600" size={20}/>
                <h4 className="text-lg font-bold text-gray-900">Attachments Required</h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {docTypes.map((doc) => {
                    const file = (formData.attachments as any)[doc.id];
                    return (
                        <div key={doc.id} className={`flex items-center justify-between p-4 border rounded-xl transition ${file ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-dashed border-gray-300'}`}>
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className={`p-2 rounded-lg ${file ? 'bg-green-100 text-green-700' : 'bg-white text-gray-400'}`}>
                                    {file ? <CheckCircle size={20} /> : <FileText size={20} />}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-bold text-gray-700 truncate block">
                                        {doc.label} {doc.required && <span className="text-red-500">*</span>}
                                    </span>
                                    {file && <span className="text-xs text-green-600 truncate">{file.name}</span>}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 shrink-0">
                                {file ? (
                                    <button 
                                        type="button" 
                                        onClick={() => removeFile(doc.id)}
                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                        title="Remove file"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                ) : (
                                    <>
                                        <input 
                                            type="file" 
                                            id={`file-${doc.id}`} 
                                            className="hidden" 
                                            onChange={(e) => handleFileChange(doc.id, e)}
                                        />
                                        <label 
                                            htmlFor={`file-${doc.id}`} 
                                            className="cursor-pointer text-xs bg-white border border-gray-200 px-3 py-1.5 rounded shadow-sm text-gray-600 hover:text-green-600 hover:border-green-200 transition select-none"
                                        >
                                            Upload
                                         <span className='text-red-500'>*</span></label>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Supported formats: PDF, DOCX, JPG (Max 5MB)</p>
        </div>
    );
  };

  const renderStep8 = () => (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
            <CheckCircle2 className="text-green-600" size={20}/>
            <h4 className="text-lg font-bold text-gray-900">Section G: Declaration</h4>
        </div>
        <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100 text-sm text-gray-800 leading-relaxed italic">
            "I hereby declare that the information provided is accurate and complete. I understand that any false or misleading information may result in disqualification. I agree to comply with all rules and requirements of the GIFON Young Professionals Scholarship Programme."
        </div>
        <div className="space-y-4 pt-4">
            <label className="flex items-center gap-3 cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition border border-transparent hover:border-gray-200">
                <input 
                    type="checkbox" 
                    name="agreedToDeclaration"
                    checked={formData.agreedToDeclaration}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 accent-green-600 rounded shrink-0" 
                />
                <span className="font-bold text-gray-800 text-sm">I Agree to this Declaration</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Digital Signature (Full Name) <span className='text-red-500'>*</span></label>
                    <input type="text" name="signature" value={formData.signature} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm font-handwriting outline-none" placeholder="Type full name" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Date <span className='text-red-500'>*</span></label>
                    <input type="date" name="signDate" value={formData.signDate} onChange={handleInputChange} className="w-full p-2.5 border rounded-lg text-sm outline-none" />
                </div>
            </div>
        </div>
    </div>
  );

  // Data array
  const educationPrograms = [
    {
      title: 'Youth Empowerment & Talent Acceleration',
      src: '/media/ye.jpg',
      link: '/education/youth-empowerment',
      description: 'The Youth Empowerment & Talent Acceleration Programme (YETAP) is an initiative of the Geospatial Intelligence Foundation of Nigeria (GIFON) to identify, train, and mentor the next generation of Nigerian innovators.'
    },
    {
      title: 'Women in GEOINT (WINGS)',
      src: '/media/wings.JPG',
      link: '/education/g-wings',
      description: 'Dedicated to empowering women in the field of geospatial intelligence (GeoINT) by providing a platform for collaboration, professional development, mentorship, and advocacy.'
    },
    {
      title: 'Geoinnovation & Tech Incubation',
      src: "/media/geoino.jpeg",
      link: '/education/Y-GITIP',
      description: 'Nurturing young innovators, startups, and entrepreneurs who are building solutions at the intersection of geospatial intelligence, technology, and national development.'
    },
    {
      title: 'National Geospatial Security Hub',
      src: "/media/Geospatial Hub.JPG",
      link: '/education/geospatial-intelligence-hub',
      description: 'Serving as the nation’s premier center for geospatial intelligence innovation, data integration, and strategic decision support for security agencies.'
    },
    {
      title: 'Community Mapping for Development',
      src: "/media/COMMUNITY MAPPING FOR DEVELOPMENT.jpg",
      link: '/education/community-mapping',
      description: 'A grassroots initiative designed to empower communities with geospatial tools, data, and participatory mapping to drive local development and resilience.'
    },
    {
      title: 'Open Data & Research',
      src: "/images/F.jpeg",
      link: '/education/open-data-research-research',
      description: 'Promoting data accessibility, research collaboration, and evidence-based policy development in Nigeria’s geospatial intelligence ecosystem.'
    },
    {
      title: 'Conferences & Masterclasses',
      src: "/media/Conference Background.jpg",
      link: '/education/conferences',
      description: 'Knowledge-sharing, collaboration, and continuous learning in advancing the geospatial intelligence ecosystem through regular events.'
    },
    {
      title: 'Training & Certification',
      src: "/media/training.jpeg", 
      link: '/education/training',
      description: 'Providing standardized, high-quality, and industry-recognized certifications in geospatial intelligence, data science, and related technologies.'
    },
    {
      title: 'Academia & Research Collaboration Programme',
      src: "/media/training.jpeg", 
      link: '/education/academia',
      description: 'Bridging Knowledge and Practice through Geospatial Intelligence.'
    },
  ];

  return (
    <>
      <HeroSection
        title="Education & Programs"
        description={
          <>
            <span className="cooper">GIFON</span>&apos;s education and training programs are designed to equip professionals, institutions, and stakeholders with the skills and knowledge needed to excel in Geospatial Intelligence. Through hands-on training, advanced courses, and strategic learning initiatives, we build national capacity, foster innovation, and empower participants to apply geospatial insights in strengthening national security, enhancing governance, and driving sustainable development across Nigeria.
          </>
        }
        backgroundMedia={["/media/Education Background.jpg"]}
      />

      <main className="bg-gray-50 font-sans text-gray-700">
        
        {/* === TRAINING SECTION === */}
        <div id="C-T" className="scroll-mt-24"></div>
        <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
               <div className="inline-block">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Training
                  </h2>
               </div>
               
               <p className="text-lg leading-relaxed text-gray-600">
                Our training courses and programs are designed to build national capacity in Geospatial Intelligence, equipping professionals and institutions with the skills, tools, and insights needed to support security, governance, and sustainable development in Nigeria.
               </p>

               {/* Feature List */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Layers, title: "Professional Learning Tracks", desc: "Our professional learning tracks delivers structured, outcome driven pathways designed to build expertise and professional readiness." },
                    { icon: Target, title: "Proficiency Based", desc: "Our proficiency-based certification validates mastery and competence through practical inward skills and application." },
                    { icon: Award, title: "Professional Certification", desc: "Our professional certification validates that an individual has achieved the highest standard of expertise, competence and ethical ethos in their field." },
                    { icon: Users, title: "People Centred", desc: "Our People centred approach prioritises human capacity, ethical practice and real-world impact on all our Programs." },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                       <div className="text-green-600 mt-1"><feat.icon size={20} /></div>
                       <div>
                         <h4 className="font-bold text-gray-900 text-sm">{feat.title}</h4>
                         <p className="text-xs text-gray-500 mt-1 text-justify">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: Visual Accent */}
            <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] w-full bg-green-900 rounded-3xl overflow-hidden shadow-2xl group">
                   <Image 
                     src="/media/training.jpeg" 
                     alt="Training session" 
                     fill 
                     className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                      <BookOpen size={64} className="mb-4 text-green-400" />
                      <h3 className="text-2xl font-bold mb-2">Start Learning Today</h3>
                      <p className="text-gray-300">Join hundreds of professionals upgrading their skills.</p>
                   </div>
                </div>
            </div>
          </div>
        </section>


        {/* === Programs SECTION === */}
        <div id="programs" className="scroll-mt-24"></div>
        <section className="py-20 bg-white px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Programs
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 text-justify">
              <span className="cooper">GIFON</span>&apos;s programs transform knowledge into action, turning ideas into real-world impact. Through cutting-edge initiatives, hands-on projects, and collaborative engagements, we empower professionals, institutions, and communities to harness Geospatial Intelligence for national security, sustainable development, and innovative solutions. Each program is an opportunity to learn, lead, and contribute to a safer, smarter, and more resilient Nigeria.
              </p>
            </div>
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationPrograms.map((program, idx) => (
                <Link href={program.link} key={idx} className="group h-full">
                  <div className="h-full flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-green-200 hover:-translate-y-2 transition-all duration-300">
                    
                    {/* Image */}
                    <div className="relative w-full h-48 shrink-0 overflow-hidden">
                      <Image
                        src={program.src}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-4 mb-4 flex-1">
                        {program.description}
                      </p>
                      
                      <div className="mt-auto flex items-center text-green-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Explore Program <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === TALENT DEVELOPMENT SECTION === */}
        <div id="talent" className="scroll-mt-24"></div>
        <section className="py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
           {/* Abstract Background */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/10 rounded-l-full blur-3xl pointer-events-none"></div>

           <div className="max-w-6xl mx-auto relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Talent Development</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Beyond specific Programs, <span className="cooper text-white">GIFON</span> is dedicated to the holistic development of geospatial talent in Nigeria. We are building a robust pipeline of GEOINT professionals ready to meet the challenges of tomorrow.
              </p>

              {/* INTERACTIVE CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                  {talentFeatures.map((feature, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => openTalentModal(feature)}
                        className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:scale-[1.02] hover:border-green-500/30 transition-all cursor-pointer group flex flex-col"
                      >
                          <div className={`${feature.colorClass} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                            <feature.icon size={32} />
                          </div>
                          <h3 className="font-bold text-2xl mb-4 group-hover:text-green-400 transition-colors">{feature.title}</h3>
                          <p className="text-gray-400 text-sm grow mb-6 line-clamp-3">
                              {feature.tagline}
                          </p>
                          <div className="mt-auto flex items-center text-green-400 text-xs font-bold uppercase tracking-widest gap-2">
                             Read More <ArrowUpRight size={16} />
                          </div>
                      </div>
                  ))}
              </div>
              
              <Link
                href="/membership#apply"
                className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-white hover:text-green-700 transition-all hover:-translate-y-1"
              >
                Join Our Talent Network
              </Link>
           </div>
        </section>

        {/* === NEW: SCHOLARSHIP SECTION === */}
        <div id="Scholarships" className="scroll-mt-24"></div>
        <section className="py-24 px-4 md:px-6 bg-green-50/50 border-y border-green-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col xl:flex-row gap-16">
                    
                    {/* Left: Content Info */}
                    <div className="xl:w-3/5 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight -mt-4 text-left">
                            <span className="text-green-600">Scholarship</span>
                        </h2>
                        <div>
                            <p className="text-sm font-medium text-green-800 italic">
                                “From Potential to Precision: Supporting Tomorrow&apos;s GEOINT Experts”
                            </p>
                        </div>

                        <div className="prose prose-lg text-gray-600 text-justify">
                            <p>
                            The Geospatial Intelligence Foundation of Nigeria's Scholarship Program is a strategic human capital development initiative designed to identify, support, and nurture exceptional Nigerian talents in geospatial intelligence, geosciences, data analytics, earth observation, cybersecurity, artificial intelligence, and allied national development disciplines. The programme targets high potential youths, women, early career professionals, and underrepresented groups, providing financial assistance, mentorship, professional exposure, and access to <span className="cooper">GIFON</span>’s national and international GEOINT ecosystem. Beyond financial support, the scholarship is structured as a talent to impact pipeline, aligning academic excellence with Nigeria’s national security priorities, critical infrastructure protection, climate resilience, economic planning, and digital transformation goals. Recipients are integrated into <span className="cooper">GIFON</span>’s broader programmes, research, training, internships, policy engagement, and community mapping initiatives, ensuring that beneficiaries graduate not only as scholars, but as nation ready professionals capable of applying geospatial intelligence for public good.
                            <br/>
                            <br/>
                            Eligibility is open to outstanding graduates and early-career professionals, typically within the first ten years of professional practice, with academic or professional backgrounds in geospatial sciences, remote sensing, GIS, engineering, data science, intelligence and security studies, environmental sciences, urban and regional planning, or related disciplines. Applicants must demonstrate strong academic or professional merit, ethical conduct, leadership potential, and a clear commitment to applying geospatial intelligence to national development, security, climate resilience, or public interest challenges. Selection is competitive and merit based, with an emphasis on excellence, diversity, and long-term impact at both national and global levels.
                            </p>
                        </div>
                    </div>

                    {/* Right: Eligibility & Application Card */}
                    <div className="xl:w-2/5">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                            <div className="bg-gray-900 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Eligibility & Application</h3>
                                <p className="text-gray-400 text-sm">Review criteria before applying</p>
                            </div>
                            
                            <div className="p-8 space-y-6">
                                
                                {/* Checklist */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-green-600" /> Core Requirements
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Nigerian citizen or partner country national",
                                            "Bachelor’s degree in relevant STEM/Social Science field",
                                            "Early-career (<10 years professional experience)",
                                            "Strong academic merit & leadership potential",
                                            "Commitment to national development goals"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FileText size={18} className="text-green-600" /> Required Documents
                                    </h4>
                                    <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                                        <span>• CV / Resume</span>
                                        <span>• Academic Transcripts</span>
                                        <span>• Personal Statement</span>
                                        <span>• 2 Reference Letters</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button 
                                        onClick={handleOpenModal}
                                        className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-center rounded-xl transition-all shadow-lg hover:shadow-green-900/20"
                                    >
                                        Apply Now
                                    </button>
                                    <p className="text-xs text-center text-gray-400 mt-3">
                                        Selection is competitive and merit-based.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
      </main>

      {/* === 1. SCHOLARSHIP MODAL === */}
      {isAppModalOpen && (
            <div 
                className="fixed inset-0 z-101 flex items-center justify-center bg-gray-900/80 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={handleCloseAppModal}
            >
                <div 
                    className="relative w-full max-w-xl bg-white shadow-2xl rounded-2xl flex flex-col max-h-[90vh] overflow-hidden"
                    onClick={(e) => e.stopPropagation()} 
                >
                    {/* Header with Visual Progress */}
                    <div className="bg-gray-50 border-b border-gray-100 shrink-0">
                        <div className="px-6 py-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    {isModalSubmitted ? "Application Received" : "Scholarship Application"}
                                </h3>
                                {!isModalSubmitted && (
                                    <p className="text-xs text-gray-500">
                                        Step {currentStep} of 8
                                    </p>
                                )}
                            </div>
                            <button 
                                onClick={handleCloseAppModal}
                                className="bg-white p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition shadow-sm border border-gray-200"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        
                        {/* The Progress Bar */}
                        {!isModalSubmitted && (
                            <div className="w-full bg-gray-200 h-1.5">
                                <div 
                                    className="h-full bg-green-600 transition-all duration-500 ease-out"
                                    style={{ width: `${(currentStep / 8) * 100}%` }}
                                ></div>
                            </div>
                        )}
                    </div>

                    {/* Body */}
                    <div className="p-6 overflow-y-auto flex-1 bg-white custom-scrollbar">
                        {isModalSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-10">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                                    <CheckCircle className="text-green-600 w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                                    Your application has been submitted securely. We will review your documents and contact you shortly.
                                </p>
                                <button onClick={handleCloseAppModal} className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition font-bold">
                                    Close Window
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleModalSubmit} className="flex flex-col h-full">
                                {/* Render the Active Step */}
                                <div className="flex-1 pb-4">
                                    {currentStep === 1 && renderStep1()}
                                    {currentStep === 2 && renderStep2()}
                                    {currentStep === 3 && renderStep3()}
                                    {currentStep === 4 && renderStep4()}
                                    {currentStep === 5 && renderStep5()}
                                    {currentStep === 6 && renderStep6()}
                                    {currentStep === 7 && renderStep7()}
                                    {currentStep === 8 && renderStep8()}
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="mb-4 flex items-center gap-2 text-red-600 text-xs font-semibold bg-red-50 p-3 rounded-lg border border-red-100 animate-in slide-in-from-bottom-2">
                                        <AlertCircle size={16} /> {error}
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex gap-3 pt-4 border-t border-gray-100 mt-auto bg-white sticky bottom-0">
                                    {currentStep > 1 && (
                                      <button 
                                        type="button" 
                                        onClick={prevStep}
                                        className="flex-1 py-3.5 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center gap-2"
                                      >
                                        <ChevronLeft size={18} /> Back
                                      </button>
                                    )}
                                    
                                    {currentStep < 8 ? (
                                      <button 
                                        type="button" 
                                        onClick={nextStep}
                                        className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                                      >
                                        Next <ChevronRight size={18} />
                                      </button>
                                    ) : (
                                      <button 
                                        type="submit"
                                        disabled={isLoading || !formData.agreedToDeclaration}
                                        className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                      >
                                         {isLoading ? 'Processing...' : 'Submit Application'}
                                      </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
      )}

        {/* === 2. TALENT DETAILS MODAL === */}
        {activeTalentFeature && (
            <div 
                className="fixed inset-0 z-101 flex items-end sm:items-center justify-center bg-gray-900/90 p-0 sm:p-6 backdrop-blur-md animate-in fade-in duration-300"
                onClick={closeTalentModal}
            >
                <div 
                    className="relative w-full max-w-2xl bg-white shadow-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Modal Header - Responsive Flex Direction */}
                    <div className="bg-gray-50 border-b border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative">
                        
                        {/* Close Button - Moved for better mobile reach */}
                        <button 
                            onClick={closeTalentModal}
                            className="absolute top-4 right-4 bg-white p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition shadow-sm border border-gray-200 z-10"
                        >
                            <X size={18} />
                        </button>

                        {/* Icon - Scaled for mobile */}
                        <div className={`${activeTalentFeature.colorClass} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white shadow-xl shrink-0`}>
                            <activeTalentFeature.icon size={32} className="sm:w-10 sm:h-10" />
                        </div>

                        {/* Title and Tagline - Centered on mobile */}
                        <div className="text-center sm:text-left mt-2 sm:mt-0 pr-0 sm:pr-8">
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">
                                {activeTalentFeature.title}
                            </h3>
                            <p className={`text-sm sm:text-base font-medium italic ${activeTalentFeature.textClass}`}>
                                {activeTalentFeature.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Modal Content Body - Adjustable Padding */}
                    <div className="p-6 sm:p-8 overflow-y-auto">
                        <div className="prose prose-sm sm:prose-lg text-gray-600 leading-relaxed text-left sm:text-justify">
                            <p>{activeTalentFeature.description}</p>
                        </div>
                        
                        {/* Footer Buttons - Full width on mobile */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4">
                            <button 
                                onClick={closeTalentModal}
                                className="w-full sm:w-auto bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3.5 rounded-xl font-bold transition text-sm sm:text-base"
                            >
                                Close
                            </button>

                            {activeTalentFeature.actionLink && (
                                <a 
                                    href={activeTalentFeature.actionLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 text-sm sm:text-base"
                                >
                                    {activeTalentFeature.actionLabel || 'Apply Now'} 
                                    <ArrowUpRight size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  );
}

// 3. New Default Export that wraps the content in Suspense
export default function EducationPage() {
  return (
    <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
      <EducationContent />
    </Suspense>
  );
}