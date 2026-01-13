"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import HeroSection from "@/components/HeroSection";
import CountryStateSelect, { CountryStateValue } from "@/components/CountryStateSelect";
import { User, Camera, Upload, FileText, CheckCircle } from "lucide-react"; 

// Define the loading states
type FormState = "idle" | "loading" | "success" | "error";

export default function RegisterPage() {
  
  // 1. Location State
  const [location, setLocation] = useState<CountryStateValue>({ country: null, state: null });

  // 2. Profile Picture & ID State
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [idFileName, setIdFileName] = useState<string | null>(null);

  // 3. Form Submission State
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverMessage, setServerMessage] = useState<string | undefined>(undefined);

  // Handle Profile Picture Preview
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  // Handle ID File Selection (Just to show the filename)
  const handleIdFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdFileName(file.name);
    }
  };

  // 4. Submit Handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setServerMessage(undefined);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Hardcode category for Casual User
    formData.append("category", "casual"); 

    // Append Location Data manually
    if (location.country) formData.append("country", location.country.label);
    if (location.state) formData.append("state", location.state.label);

    try {
      const response = await fetch("/api/auth/apply", {
        method: "POST",
        body: formData, 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setFormState("success");
      setServerMessage(data.message || "Account created successfully!");
      
      // Reset logic
      form.reset();
      setAvatarPreview(null);
      setIdFileName(null);
      
    } catch (error: any) {
      setFormState("error");
      setServerMessage(error.message);
    }
  };

  // Spinner Component
  const Spinner = () => (
    <svg className="animate-spin h-5 w-5 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
    </svg>
  );

  return (
    <>
      <HeroSection
        title="Create a Free Account"
        backgroundMedia={[
          "/media/login.jpeg", 
        ]}
      />

      <main className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
            <p className="text-gray-500 text-sm mt-1">Access resources and join the community.</p>
          </div>

          {formState === "success" ? (
            <div className="p-8 border border-green-200 rounded-xl bg-green-50 text-center animate-in fade-in zoom-in">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Account Created!</h3>
              <p className="text-gray-700 mb-6">
                {serverMessage || "Your account has been successfully created."}
              </p>
              <a href="/login" className="inline-block w-full px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition shadow-lg hover:shadow-green-500/30">
                Proceed to Login
              </a>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <fieldset disabled={formState === "loading"} className="space-y-8">
                
                {/* --- Profile Picture Upload --- */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative group cursor-pointer">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md bg-gray-50 flex items-center justify-center">
                      {avatarPreview ? (
                        <img 
                          src={avatarPreview} 
                          alt="Profile Preview" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <User size={48} className="text-gray-300" />
                      )}
                    </div>
                    
                    {/* Overlay/Upload Button */}
                    <label 
                      htmlFor="profilePicture" 
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer"
                    >
                      <Camera size={24} />
                      <span className="text-xs font-medium mt-1">Upload</span>
                    </label>
                    <input 
                      type="file" 
                      id="profilePicture" 
                      name="profilePicture" 
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden" 
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Profile Picture</p>
                </div>

                {/* --- Personal Info --- */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 border-b pb-2">
                    <User size={18} className="text-green-600"/> Personal Details
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        name="fullName" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        name="email" 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
                        placeholder="you@example.com" 
                        required 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        name="phoneNumber" 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
                        placeholder="+234..." 
                        required 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <div className="relative">
                        <select 
                          name="gender" 
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none bg-white" 
                          required
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <CountryStateSelect onChange={setLocation} />
                    </div>
                  </div>
                </div>

                {/* --- Means of Identification --- */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 border-b pb-2">
                    <FileText size={18} className="text-green-600"/> Means of Identification
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    
                    {/* ID Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID Type</label>
                      <div className="relative">
                        <select 
                          name="idType" 
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none bg-white" 
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="NIN">NIN Slip</option>
                          <option value="International Passport">International Passport</option>
                          <option value="Drivers License">Driver's License</option>
                          <option value="Voters Card">Voter's Card</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    {/* ID Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID Number</label>
                      <input 
                        name="idNumber" 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
                        placeholder="e.g. A0000000" 
                        required 
                      />
                    </div>

                    {/* ID Upload */}
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Document</label>
                      
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:bg-gray-50 transition-colors relative cursor-pointer group">
                         <div className="space-y-1 text-center">
                            {idFileName ? (
                                <div className="flex flex-col items-center">
                                    <FileText className="mx-auto h-12 w-12 text-green-500" />
                                    <p className="text-sm text-green-600 font-medium mt-2">{idFileName}</p>
                                    <p className="text-xs text-gray-400">Click to change</p>
                                </div>
                            ) : (
                                <>
                                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-gray-500" />
                                    <div className="flex text-sm text-gray-600">
                                    <span className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                                        <span>Upload a file</span>
                                    </span>
                                    <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 5MB</p>
                                </>
                            )}
                         </div>
                         <input 
                            id="idDocument" 
                            name="idDocument" 
                            type="file" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={handleIdFileChange}
                            required
                         />
                      </div>
                    </div>

                  </div>
                </div>

                {/* --- Security --- */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 border-b pb-2">
                    <User size={18} className="text-green-600"/> Other Details
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Occupation / Role</label>
                      <input 
                        name="occupation" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
                        placeholder="e.g. Student, Researcher" 
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        placeholder="Create a strong password" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" 
                        required 
                        minLength={6}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  {formState === "error" && serverMessage && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-50 rounded-xl border border-red-200 flex items-center gap-2">
                      <span className="font-bold">Error:</span> {serverMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-green-700 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-800 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none"
                    disabled={formState === "loading"}
                  >
                    {formState === "loading" ? (
                      <>
                        <Spinner /> Creating Account...
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>

              </fieldset>
            </form>
          )}

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-green-700 font-bold hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}