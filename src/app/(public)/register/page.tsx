"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {
  const [membershipType, setMembershipType] = useState<"individual" | "corporate">("individual");

  return (
    <>
      <HeroSection
        title="Member Registration"
        description="Join the Geospatial Intelligence Foundation of Nigeria (GIFON) to be part of a community shaping the future of GeoINT and national security."
        backgroundImage="/ph.svg"
      />

      <main className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
          {/* Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition ${
                membershipType === "individual"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setMembershipType("individual")}
            >
              Individual
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition ${
                membershipType === "corporate"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setMembershipType("corporate")}
            >
              Corporate / Institutional
            </button>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            {membershipType === "individual" ? (
              <motion.div
                key="individual"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Individual Membership Registration
                </h2>
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personal Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input className="border p-3 rounded w-full col-span-2" placeholder="Full Name" />
                      <select className="border p-3 rounded w-full">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <input className="border p-3 rounded w-full" placeholder="Date of Birth (DD/MM/YYYY)" />
                      <input className="border p-3 rounded w-full" placeholder="Nationality" />
                      <input className="border p-3 rounded w-full" type="email" placeholder="Email Address" />
                      <input className="border p-3 rounded w-full" placeholder="Phone Number" />
                      <input className="border p-3 rounded w-full" placeholder="Alternative Phone Number" />
                      <input className="border p-3 rounded w-full col-span-2" placeholder="Home Address" />
                      <input className="border p-3 rounded w-full" placeholder="City" />
                      <input className="border p-3 rounded w-full" placeholder="State" />
                      <input className="border p-3 rounded w-full" placeholder="Postal Code" />
                      <input className="border p-3 rounded w-full" placeholder="LinkedIn Profile" />
                      <input className="border p-3 rounded w-full" placeholder="Twitter Handle" />
                      <input className="border p-3 rounded w-full" placeholder="Facebook Profile" />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input className="border p-3 rounded w-full" placeholder="Current Occupation" />
                      <input className="border p-3 rounded w-full" placeholder="Organization/Institution" />
                      <input className="border p-3 rounded w-full" placeholder="Job Title/Role" />
                      <input className="border p-3 rounded w-full" placeholder="Years of Experience in GeoINT" />
                    </div>

                    <div className="mt-4">
                      <p className="mb-2 font-medium">Geospatial Expertise:</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {["GIS", "Remote Sensing", "Cartography", "Data Analysis", "Spatial Modelling"].map((exp) => (
                          <label key={exp} className="flex items-center gap-2">
                            <input type="checkbox" /> {exp}
                          </label>
                        ))}
                        <input className="border p-2 rounded w-full col-span-2" placeholder="Other Expertise" />
                      </div>
                    </div>

                    <textarea className="border p-3 rounded w-full mt-4" placeholder="Professional Qualifications (certifications, degrees, etc.)" />

                    <div className="mt-4">
                      <p className="mb-2 font-medium">Areas of Interest in GeoINT:</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {[
                          "National Security & Defense",
                          "Disaster Management",
                          "Urban Planning & Development",
                          "Environmental Monitoring",
                          "Agriculture & Land Use",
                          "Transportation & Infrastructure",
                          "Climate Change & Sustainability",
                          "Research & Education",
                        ].map((area) => (
                          <label key={area} className="flex items-center gap-2">
                            <input type="checkbox" /> {area}
                          </label>
                        ))}
                        <input className="border p-2 rounded w-full col-span-2" placeholder="Other Area" />
                      </div>
                    </div>
                  </div>

                  {/* Membership Info */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Membership Details</h3>
                    <select className="border p-3 rounded w-full">
                      <option>Membership Type</option>
                      <option>Professional Member</option>
                      <option>Student Member</option>
                      <option>Honorary Member</option>
                    </select>
                    <select className="border p-3 rounded w-full mt-3">
                      <option>Membership Duration</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>3 Years</option>
                      <option>Lifetime</option>
                    </select>
                  </div>

                  {/* Payment */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Payment Information</h3>
                    <select className="border p-3 rounded w-full">
                      <option>Payment Method</option>
                      <option>Bank Transfer</option>
                      <option>PayPal</option>
                      <option>Online Payment Portal</option>
                      <option>Cash/Check</option>
                    </select>
                    <input className="border p-3 rounded w-full mt-3" placeholder="Payment Reference (if applicable)" />
                  </div>

                  {/* Declaration */}
                  <div className="flex items-start gap-2 mt-6">
                    <input type="checkbox" />
                    <p className="text-sm text-gray-700">
                      I hereby confirm that clicking <b>Register</b> serves as my signature and agreement to abide by GIFON’s mission and policies.
                    </p>
                  </div>

                  <button type="submit" className="w-full bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
                    Register
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="corporate"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Corporate / Institutional Membership Registration
                </h2>
                <form className="space-y-6">
                  {/* Org Info */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg mb-2">Organizational Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input className="border p-3 rounded w-full col-span-2" placeholder="Organization Name" />
                      <input className="border p-3 rounded w-full" placeholder="Primary Contact Name" />
                      <input className="border p-3 rounded w-full" placeholder="Position/Title" />
                      <input className="border p-3 rounded w-full col-span-2" placeholder="Organization Website" />
                      <input className="border p-3 rounded w-full col-span-2" placeholder="Organization Address" />
                      <input className="border p-3 rounded w-full" placeholder="City" />
                      <input className="border p-3 rounded w-full" placeholder="State" />
                      <input className="border p-3 rounded w-full" placeholder="Postal Code" />
                      <input className="border p-3 rounded w-full" placeholder="Facebook" />
                      <input className="border p-3 rounded w-full" placeholder="Twitter" />
                      <input className="border p-3 rounded w-full" placeholder="LinkedIn" />
                    </div>

                    <div className="mt-4">
                      <p className="mb-2 font-medium">Industry Sector:</p>
                      {["Government", "Private Sector", "Academia/Research", "Non-Profit/NGO"].map((sector) => (
                        <label key={sector} className="flex flex-wrap items-center gap-2">
                          <input type="radio" name="sector" /> {sector}
                        </label>
                      ))}
                      <input className="border p-2 rounded w-full mt-2" placeholder="Other Sector" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium">Organization Size</label>
                        <select className="mt-1 w-full border rounded p-3">
                        <option>1 - 50 employees</option>
                        <option>51 - 200 employees</option>
                        <option>201 - 1000 employees</option>
                        <option>1000+ employees</option>
                        </select>
                    </div>
                    <textarea className="border p-3 rounded w-full mt-4" placeholder="How can your organization contribute to GIFON’s mission?" />
                  </div>

                  {/* Membership Info */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Membership Details</h3>
                    <select className="border p-3 rounded w-full">
                      <option>Membership Type</option>
                      <option>Corporate Member</option>
                      <option>Institutional Member</option>
                      <option>Research & Academic Member</option>
                    </select>
                    <select className="border p-3 rounded w-full mt-3">
                      <option>Membership Duration</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>3 Years</option>
                      <option>Lifetime</option>
                    </select>
                  </div>

                  {/* Payment */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Payment Information</h3>
                    <select className="border p-3 rounded w-full">
                      <option>Payment Method</option>
                      <option>Bank Transfer</option>
                      <option>PayPal</option>
                      <option>Online Payment Portal</option>
                      <option>Cash/Check</option>
                    </select>
                    <input className="border p-3 rounded w-full mt-3" placeholder="Payment Reference (if applicable)" />
                  </div>

                  {/* Declaration */}
                  <div className="flex items-start gap-2 mt-6">
                    <input type="checkbox" />
                    <p className="text-sm text-gray-700">
                      We hereby confirm that clicking <b>Register</b> serves as an organizational signature and agreement to abide by GIFON’s mission and policies.
                    </p>
                  </div>

                  <button type="submit" className="w-full bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
                    Register
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Already have an account? <a href="/login" className="text-primary underline">Login</a></p>
          </div>
        </div>
      </main>
    </>
  );
}
