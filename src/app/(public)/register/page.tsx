"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CountryStateSelect, { CountryStateValue } from "@/components/CountryStateSelect";
import { motion, AnimatePresence } from "framer-motion";
import {
  registerIndividualMembership,
  registerOrganizationMembership,
} from "@/lib/api/membership";

import {
  Gender,
  IndustrySector,
  GeospatialExpertise,
  AreaOfInterest,
  MembershipDuration,
  ReferralSource,
  IndividualMembershipType,
  IndividualMembershipRequestBody,
  OrganizationMembershipRequestBody,
} from "@/types/types";

type FormState = "idle" | "loading" | "verify" | "error";

export default function RegisterPage() {
  const [individualLocation, setIndividualLocation] = useState<CountryStateValue>({ country: null, state: null });
  const [organizationLocation, setOrganizationLocation] = useState<CountryStateValue>({ country: null, state: null });
  const [membershipType, setMembershipType] = useState<
    "individual" | "corporate"
  >("individual");

  // separate states per form so switching tabs keeps their state isolated
  const [individualState, setIndividualState] = useState<FormState>("idle");
  const [organizationState, setOrganizationState] = useState<FormState>("idle");
  const [serverMessage, setServerMessage] = useState<string | undefined>(undefined);

  // helpers to map string keys (from form) -> enum values
  // function mapEnum<T extends Record<string, string | number>>(
  //   enm: T,
  //   val?: string | null
  // ): T[keyof T] | undefined {
  //   if (!val) return undefined;
  //   return enm[val as keyof T];
  // }
  
  // function mapEnumArray<T extends Record<string, string | number>>(
  //   enm: T,
  //   arr: string[] | null | undefined
  // ): T[keyof T][] {
  //   if (!arr || arr.length === 0) return [];
  //   return arr
  //     .map((v) => mapEnum(enm, v))
  //     .filter((x): x is T[keyof T] => x !== undefined);
  // }
  

  // ---------- Individual ----------
  const handleIndividualSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage(undefined);
    setIndividualState("loading");
    const formData = new FormData(e.currentTarget);
  
    try {
      const genderStr = formData.get("gender")?.toString() ?? "";
      const dobStr = formData.get("dob")?.toString() ?? "";
      const yearsExperienceStr = formData.get("yearsExperience")?.toString() ?? "";
  
      const expertiseStrings = formData.getAll("geospatialExpertise").map((v) => v.toString());
      const interestStrings = formData.getAll("areasOfInterest").map((v) => v.toString());
  
      const membershipDurationStr = formData.get("membershipDuration")?.toString() ?? "OneYear";
      const referralStr = formData.get("howDidYouHearAboutGifon")?.toString() ?? "Online";
      const individualMembershipTypeStr = formData.get("individualMembershipType")?.toString() ?? "Professional";
      const passwordFromForm = formData.get("password")?.toString() ?? "";
  
      const payload: IndividualMembershipRequestBody = {
        fullName: formData.get("fullName")?.toString() ?? "",
        gender: genderStr as Gender,
        dateOfBirth: dobStr ? new Date(dobStr).toISOString() : new Date().toISOString(),
        nationality: formData.get("nationality")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        phoneNumber: formData.get("phoneNumber")?.toString() ?? "",
        altPhoneNumber: formData.get("altPhoneNumber")?.toString() ?? "",
        homeAddress: formData.get("homeAddress")?.toString() ?? "",
        country: individualLocation.country?.label ?? "Nigeria",
        city: formData.get("city")?.toString() ?? "",
        state: individualLocation.state?.label ?? "",
        postalCode: formData.get("postalCode")?.toString() ?? "",
        linkedinProfile: formData.get("linkedinProfile")?.toString() ?? undefined,
        twitterHandle: formData.get("twitterHandle")?.toString() ?? undefined,
        facebookProfile: formData.get("facebookProfile")?.toString() ?? undefined,
        occupation: formData.get("occupation")?.toString() ?? "",
        organization: formData.get("organization")?.toString() ?? "",
        jobTitle: formData.get("jobTitle")?.toString() ?? "",
        yearsExperience: yearsExperienceStr ? Number(yearsExperienceStr) : 0,
        geospatialExpertise: expertiseStrings as GeospatialExpertise[],
        professionalQualifications: formData.get("professionalQualifications")?.toString() ?? "",
        areasOfInterest: interestStrings as AreaOfInterest[],
        individualMembershipType: individualMembershipTypeStr as IndividualMembershipType,
        membershipDuration: membershipDurationStr as MembershipDuration,
        howDidYouHearAboutGifon: referralStr as ReferralSource,
        password: passwordFromForm,
        amount: Number(formData.get("amount") ?? 0),
      };
  
      console.log(payload);
      const result = await registerIndividualMembership(payload);
      if (result?.status === "fail") {
        setServerMessage(result.message || "Registration failed. Please check your input.");
        setIndividualState("error");
      } else {
        setServerMessage(result?.message ?? "Registration successful. Please check your email.");
        setIndividualState("verify");
      }
    }catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setServerMessage(err.message);
      } else {
        setServerMessage("Registration failed. Please try again.");
      }
      setIndividualState("error");
    }
  };
  

  // ---------- Organization ----------
  const handleOrganizationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage(undefined);
    setOrganizationState("loading");
    const formData = new FormData(e.currentTarget);
  
    try {
      const industrySectorStr = formData.get("industrySector")?.toString() ?? "Other";
      const membershipDurationStr = formData.get("membershipDuration")?.toString() ?? "OneYear";
      const passwordFromForm = formData.get("password")?.toString() ?? "";
  
      const payload: OrganizationMembershipRequestBody = {
        email: formData.get("email")?.toString() ?? "",
        organizationName: formData.get("organizationName")?.toString() ?? "",
        primaryContactName: formData.get("primaryContactName")?.toString() ?? "",
        positionTitle: formData.get("positionTitle")?.toString() ?? "",
        organizationAddress: formData.get("organizationAddress")?.toString() ?? "",
        city: formData.get("city")?.toString() ?? "",
        postalCode: formData.get("postalCode")?.toString() ?? "",
        organizationWebsite: formData.get("organizationWebsite")?.toString() ?? undefined,
        facebookHandle: formData.get("facebookHandle")?.toString() ?? undefined,
        twitterHandle: formData.get("twitterHandle")?.toString() ?? undefined,
        linkedinHandle: formData.get("linkedinHandle")?.toString() ?? undefined,
        industrySector: industrySectorStr as IndustrySector,
        numberOfEmployees: Number(formData.get("numberOfEmployees") ?? 0),
        contribution: formData.get("contribution")?.toString() ?? "",
        membershipDuration: membershipDurationStr as MembershipDuration,
        country: organizationLocation.country?.label ?? "Nigeria",
        state: organizationLocation.state?.label ?? "",
        password: passwordFromForm,
        amount: Number(formData.get("amount") ?? 0),
      };
  
      const result = await registerOrganizationMembership(payload);
      if (result?.status === "fail") {
        setServerMessage(result.message || "Registration failed. Please check your input.");
        setOrganizationState("error");
        return;
      } else {
      setServerMessage(result.message || "Registration successful. Please check your email.");
      setOrganizationState("verify");
      }
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setServerMessage(err.message);
      } else {
        setServerMessage("Registration failed. Please try again.");
      }
      setIndividualState("error");
    }
  };
  

  // small spinner SVG
  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
    </svg>
  );

  return (
    <>
      <HeroSection
        title="Member Registration"
        description="Join the Geospatial Intelligence Foundation of Nigeria (GIFON) to be part of a community shaping the future of GeoINT and national security."
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
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

          {/* Form Area */}
          <AnimatePresence mode="wait">
            {membershipType === "individual" ? (
              <motion.div
                key="individual"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.24 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Individual Membership Registration
                </h2>

                {individualState === "verify" ? (
                  <div className="p-6 border rounded bg-green-50 text-center">
                    <h3 className="text-lg font-semibold mb-2">Check your email</h3>
                    <p className="mb-4">
                      {serverMessage ?? "We sent a verification link to the email you provided. Please follow the link to verify your account."}
                    </p>
                    <a href="/login" className="inline-block mt-2 text-sm underline text-green-700">
                      Go to Login
                    </a>
                   <br/>
                    <a href="/verify-email" className="inline-block mt-2 text-sm underline text-green-700">
                      Verify Email with token
                    </a>
                  </div>
                ) : (
                  <form
                    className="space-y-6"
                    onSubmit={handleIndividualSubmit}
                  >
                    {/* disable inputs when loading */}
                    <fieldset disabled={individualState === "loading"} className="space-y-6">
                      <input type="hidden" name="country" value="Nigeria" />
                      <input type="hidden" name="amount" value="5000" />

                      {/* Personal Information */}
                      <div>
                        <h3 className="font-bold text-lg mb-2">Personal Information</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input name="fullName" className="border p-3 rounded w-full col-span-2" placeholder="Full Name" required />
                          <div>
                            <label htmlFor="dob" className="text-sm font-medium mb-1">
                              Gender
                            </label>
                            <select name="gender" className="border p-3 rounded w-full" required>
                              <option value="">Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {/* improved DOB with label */}
                          <div className="flex flex-col">
                            <label htmlFor="dob" className="text-sm font-medium mb-1">
                              Date of Birth
                            </label>
                            <input
                              id="dob"
                              name="dob"
                              type="date"
                              aria-describedby="dob-help"
                              placeholder="YYYY-MM-DD"
                              className="border p-3 rounded w-full"
                              required
                            />
                          </div>
                          <div className="border p-3 rounded w-full col-span-2">
                            <CountryStateSelect onChange={setIndividualLocation} />
                          </div>
                          {/* <input name="country" className="border p-3 rounded w-full" placeholder="Country" required /> */}
                          <input name="nationality" className="border p-3 rounded w-full" placeholder="Nationality" required />
                          <input type="email" name="email" className="border p-3 rounded w-full" placeholder="Email Address" required />
                          <input name="phoneNumber" className="border p-3 rounded w-full" placeholder="Phone Number" required />
                          <input name="altPhoneNumber" className="border p-3 rounded w-full" placeholder="Alternative Phone Number" />
                          <input name="homeAddress" className="border p-3 rounded w-full" placeholder="Home Address" />
                          <input name="city" className="border p-3 rounded w-full" placeholder="City" aria-label="City"/>
                          {/* <input name="state" className="border p-3 rounded w-full" placeholder="State" /> */}
                          <input name="postalCode" className="border p-3 rounded w-full" placeholder="Postal Code" />
                          <input name="linkedinProfile" className="border p-3 rounded w-full" placeholder="LinkedIn Profile" />
                          <input name="twitterHandle" className="border p-3 rounded w-full" placeholder="Twitter Handle" />
                          <input name="facebookProfile" className="border p-3 rounded w-full" placeholder="Facebook Profile" />
                        </div>
                      </div>

                      {/* Professional Information */}
                      <div>
                        <h3 className="font-bold text-lg mb-2">Professional Information</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input name="occupation" className="border p-3 rounded w-full" placeholder="Current Occupation" />
                          <input name="organization" className="border p-3 rounded w-full" placeholder="Organization/Institution" />
                          <input name="jobTitle" className="border p-3 rounded w-full" placeholder="Job Title/Role" />
                          <input name="yearsExperience" className="border p-3 rounded w-full" placeholder="Years of Experience in GeoINT" />
                        </div>

                        <div className="mt-4">
                          <p className="mb-2 font-medium">Geospatial Expertise:</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {["GIS", "RemoteSensing", "Cartography", "DataAnalysis", "SpatialModelling"].map((exp) => (
                              <label key={exp} className="flex items-center gap-2">
                                <input type="checkbox" name="geospatialExpertise" value={exp} /> {exp}
                              </label>
                            ))}
                          </div>
                        </div>

                        <textarea name="professionalQualifications" className="border p-3 rounded w-full mt-4" placeholder="Professional Qualifications (certifications, degrees, etc.)" />

                        <div className="mt-4">
                          <p className="mb-2 font-medium">Areas of Interest in GeoINT:</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {[
                              "NationalSecurityAndDefense",
                              "DisasterManagement",
                              "UrbanPlanningAndDevelopment",
                              "EnvironmentalMonitoring",
                              "AgricultureAndLandUse",
                              "TransportationAndInfrastructure",
                              "ClimateChangeAndSustainability",
                              "ResearchAndEducation",
                            ].map((area) => (
                              <label key={area} className="flex items-center gap-2">
                                <input type="checkbox" name="areasOfInterest" value={area} /> {area}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Membership Info */}
                      <div>
                        <h3 className="font-bold text-lg mb-2">Membership Details</h3>

                        <select name="individualMembershipType" className="border p-3 rounded w-full" required>
                          <option value="">Membership Type</option>
                          <option value="Professional">Professional</option>
                          <option value="Student">Student</option>
                          <option value="Honorary">Honorary</option>
                        </select>

                        <select name="membershipDuration" className="border p-3 rounded w-full mt-3" required>
                          <option value="">Membership Duration</option>
                          <option value="OneYear">1 Year</option>
                          <option value="TwoYears">2 Years</option>
                          <option value="ThreeYears">3 Years</option>
                          <option value="Lifetime">Lifetime</option>
                        </select>

                        <select name="howDidYouHearAboutGifon" className="border p-3 rounded w-full mt-3">
                          <option value="">How did you hear about GIFON?</option>
                          <option value="Online">Online</option>
                          <option value="WordOfMouth">Word of Mouth</option>
                          <option value="EventConference">Event/Conference</option>
                          <option value="Referral">Referral</option>
                          <option value="Other">Other</option>
                        </select>

                        <input type="password" name="password" placeholder="Choose a password" className="border p-3 rounded w-full mt-3" required />
                      </div>

                      {/* Declaration */}
                      <div className="flex items-start gap-2 mt-6">
                        <input type="checkbox" required />
                        <p className="text-sm text-gray-700">
                          I hereby confirm that clicking <b>Register</b> serves as my signature and agreement to abide by GIFON’s mission and policies.
                        </p>
                      </div>

                      <div>
                        {individualState === "error" && serverMessage && (
                          <p className="mb-3 text-sm text-red-600">{serverMessage}</p>
                        )}

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
                          disabled={individualState === "loading"}
                        >
                          {individualState === "loading" ? (
                            <>
                              <Spinner /> Submitting...
                            </>
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                    </fieldset>
                  </form>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="corporate"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.24 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Corporate / Institutional Membership Registration
                </h2>

                {organizationState === "verify" ? (
                  <div className="p-6 border rounded bg-green-50 text-center">
                    <h3 className="text-lg font-semibold mb-2">Check your email</h3>
                    <p className="mb-4">
                      {serverMessage ?? "We sent a verification link to the email you provided. Please follow the link to verify your organization account."}
                    </p>
                    <a href="/login" className="inline-block mt-2 text-sm underline text-green-700">
                      Go to Login
                    </a>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleOrganizationSubmit}>
                    <fieldset disabled={organizationState === "loading"} className="space-y-6">
                      <input type="hidden" name="country" value="Nigeria" />
                      <input type="hidden" name="amount" value="20000" />

                      {/* Org Info */}
                      <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg mb-2">Organizational Information</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input name="organizationName" className="border p-3 rounded w-full col-span-2" placeholder="Organization Name" required />
                          <input name="primaryContactName" className="border p-3 rounded w-full" placeholder="Primary Contact Name" required />
                          <input name="positionTitle" className="border p-3 rounded w-full" placeholder="Position/Title" />
                          <input type="email" name="email" className="border p-3 rounded w-full col-span-2" placeholder="Contact Email" required />
                          <input name="organizationWebsite" className="border p-3 rounded w-full col-span-2" placeholder="Organization Website" />
                          <div className="border p-3 rounded w-full col-span-2">
                            <CountryStateSelect onChange={setOrganizationLocation} />
                          </div>
                          <input name="organizationAddress" className="border p-3 rounded w-full" placeholder="Organization Address" />
                          <input name="city" className="border p-3 rounded w-full" placeholder="City" />
                          {/* <input name="state" className="border p-3 rounded w-full" placeholder="State" /> */}
                          <input name="postalCode" className="border p-3 rounded w-full" placeholder="Postal Code" />
                          <input name="facebookHandle" className="border p-3 rounded w-full" placeholder="Facebook" />
                          <input name="twitterHandle" className="border p-3 rounded w-full" placeholder="Twitter" />
                          <input name="linkedinHandle" className="border p-3 rounded w-full" placeholder="LinkedIn" />
                        </div>

                        <div className="mt-4">
                          <p className="mb-2 font-medium">Industry Sector:</p>
                          {["Government", "PrivateSector", "AcademiaResearch", "NonProfitNGO", "Other"].map((sector) => (
                            <label key={sector} className="flex flex-wrap items-center gap-2">
                              <input type="radio" name="industrySector" value={sector} /> {sector}
                            </label>
                          ))}
                        </div>

                        <div>
                          <label className="block text-sm font-medium">Number of Employees</label>
                          <input type="number" name="numberOfEmployees" className="mt-1 w-full border rounded p-3" />
                        </div>
                        <textarea name="contribution" className="border p-3 rounded w-full mt-4" placeholder="How can your organization contribute to GIFON’s mission?" />
                        <input type="password" name="password" placeholder="Choose a password" className="border p-3 rounded w-full mt-3" required />
                      </div>

                      {/* Membership Info */}
                      <div>
                        <h3 className="font-bold text-lg mb-2">Membership Details</h3>
                        <select name="membershipDuration" className="border p-3 rounded w-full" required>
                          <option value="">Membership Duration</option>
                          <option value="OneYear">1 Year</option>
                          <option value="TwoYears">2 Years</option>
                          <option value="ThreeYears">3 Years</option>
                          <option value="Lifetime">Lifetime</option>
                        </select>
                      </div>

                      <div>
                        {organizationState === "error" && serverMessage && (
                          <p className="mb-3 text-sm text-red-600">{serverMessage}</p>
                        )}

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
                          disabled={organizationState === "loading"}
                        >
                          {organizationState === "loading" ? (
                            <>
                              <Spinner /> Submitting...
                            </>
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                    </fieldset>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-primary underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
