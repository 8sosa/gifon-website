"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  UploadCloud, 
  User, 
  Mail, 
  FileText, 
  AlignLeft, 
  Loader2, 
  AlertCircle,
  ArrowLeft,
  FileDown, // Added Icon
  ExternalLink // Added Icon
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';

export default function SubmitPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  
  // NEW: State for guideline agreement
  const [agreedToGuidelines, setAgreedToGuidelines] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    // NEW: Validation Check for Guidelines
    if (!agreedToGuidelines) {
        setError('You must read and agree to the Author Submission Guidelines before submitting.');
        setIsLoading(false);
        return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const file = formData.get('publicationFile') as File;

    // --- Basic File Validation ---
    if (!file || file.size === 0) {
      setError('Please select a file to upload.');
      setIsLoading(false);
      return;
    }
    // Set a 10MB limit for papers
    if (file.size > 1024 * 1024 * 10) {
      setError('File is too large. Please upload a file under 10MB.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccessMessage(data.message);
      form.reset();
      setFileName(null);
      setAgreedToGuidelines(false);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeroSection
        title="Submit Your Work"
        description="Share your research with the GEOINT community. Submit your paper for review for the next GeoINSIGHT Journal."
        backgroundMedia={["/bg/a.JPG"]}
      />

      <main className="w-full py-20 px-4 bg-gray-50 flex flex-col items-center justify-center min-h-screen">
        
        {/* --- Back Navigation --- */}
        <div className="w-full max-w-3xl mb-6">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-green-700 transition-colors group"
            >
                <div className="p-2 bg-white rounded-full shadow-sm border border-gray-200 group-hover:border-green-200 transition-colors">
                    <ArrowLeft size={16} /> 
                </div>
                Back to Dashboard
            </Link>
        </div>
        
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Header Strip */}
          <div className="bg-green-900 px-8 py-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            <h2 className="text-2xl font-bold font-cooper relative z-10">Journal Submission Portal</h2>
            <p className="text-green-200 text-sm mt-1 relative z-10">GeoINSIGHT: Eyes on Location</p>
          </div>

          <div className="p-8 md:p-10">
            {successMessage ? (
              // --- SUCCESS STATE ---
              <div className="flex flex-col items-center justify-center text-center py-10 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="text-green-600 w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Submission Received!</h2>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
                  {successMessage}. Our editorial team will review your manuscript and contact you shortly via email.
                </p>
                <button
                  onClick={() => setSuccessMessage(null)}
                  className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors border border-gray-200"
                >
                  Submit Another Paper
                </button>
              </div>
            ) : (
              // --- FORM STATE ---
              <>
                {error && (
                  <div className="mb-8 flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100 text-red-700 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Grid for Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label htmlFor="authorName" className="text-sm font-bold text-gray-700 ml-1">Author Name(s)</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                          type="text"
                          id="authorName"
                          name="authorName"
                          required
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                          placeholder="Dr. Fatima Bello..."
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Corresponding Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                          placeholder="researcher@university.edu"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="title" className="text-sm font-bold text-gray-700 ml-1">Publication Title</label>
                    <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        placeholder="Enter the full title of your paper"
                        />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="abstract" className="text-sm font-bold text-gray-700 ml-1">Abstract (150-250 words)</label>
                    <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400"><AlignLeft size={18} /></div>
                        <textarea
                        id="abstract"
                        name="abstract"
                        rows={5}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                        placeholder="Brief summary of your research objectives and findings..."
                        />
                    </div>
                  </div>

                  {/* Custom File Upload Area */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700 ml-1">Upload Manuscript</label>
                    <div className="relative group">
                        <input
                            type="file"
                            id="publicationFile"
                            name="publicationFile"
                            required
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            accept=".doc, .docx, .pdf"
                        />
                        <div className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${fileName ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white group-hover:bg-gray-50 group-hover:border-green-400'}`}>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className={`p-3 rounded-full transition-colors ${fileName ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500 group-hover:text-green-600 group-hover:bg-green-50'}`}>
                                    <UploadCloud size={24} />
                                </div>
                                
                                {fileName ? (
                                    <div>
                                        <p className="text-sm font-bold text-green-700 break-all px-4">{fileName}</p>
                                        <p className="text-xs text-green-600 font-medium">Ready to upload</p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-sm font-bold text-gray-700">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-400 mt-1 font-medium">PDF, DOC, DOCX (Max 10MB)</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* --- NEW: Mandatory Guidelines Section --- */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <h4 className="font-bold text-blue-900 flex items-center gap-2">
                                <FileText size={18} /> Author Guidelines
                            </h4>
                            <p className="text-xs text-blue-700/80 mt-1">Please read the submission requirements before proceeding.</p>
                        </div>
                        <a 
                            href="/docs/AUTHOR SUBMISSION GUIDELINES FOR GIFON JOURNAL.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-700 text-sm font-bold rounded-lg border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-colors shadow-sm"
                        >
                            <FileDown size={16} /> Download PDF <ExternalLink size={12} className="opacity-50" />
                        </a>
                    </div>
                    
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center mt-0.5">
                            <input 
                                type="checkbox" 
                                checked={agreedToGuidelines}
                                onChange={(e) => {
                                    setAgreedToGuidelines(e.target.checked);
                                    if(error) setError(null); // Clear error on check
                                }}
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white transition-all checked:border-blue-600 checked:bg-blue-600 hover:border-blue-400"
                            />
                             <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" size={14} />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors select-none">
                            I confirm that I have read the <b>Author Submission Guidelines</b> and formatted my manuscript accordingly.
                        </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isLoading || !agreedToGuidelines} // Disabled if not agreed
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 disabled:transform-none disabled:shadow-none"
                    >
                        {isLoading ? (
                        <>
                            <Loader2 className="animate-spin" /> Submitting...
                        </>
                        ) : (
                        "Submit Paper"
                        )}
                    </button>
                    {!agreedToGuidelines && (
                        <p className="text-center text-xs text-gray-400 mt-2">
                            Please agree to the guidelines to enable submission.
                        </p>
                    )}
                  </div>

                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}