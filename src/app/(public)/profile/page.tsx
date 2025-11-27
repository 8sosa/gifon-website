"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";

type ProfileData = {
  id: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  altPhoneNumber: string;
  homeAddress: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
  linkedinProfile: string;
  twitterHandle: string;
  facebookProfile: string;
  occupation: string;
  organization: string;
  jobTitle: string;
  yearsExperience: number;
  geospatialExpertise: string[];
  professionalQualifications: string;
  areasOfInterest: string[];
  membershipType: string;
  membershipDuration: string;
  howDidYouHearAboutGifon: string;
  createdAt: string;
  userId: string;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = localStorage.getItem("jwt"); // Save token here after login
        if (!token) {
          router.push("/login");
          return;
        }

        const resp = await fetch(
          "https://gifon.onrender.com/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await resp.json();

        if (!resp.ok) {
          setError(data.message || "Failed to fetch profile.");
        } else {
          setProfile(data.data);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    }

    fetchProfile();
  }, [router]);

  if (loading) {
    return (
      <main className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
          {/* Personal Info Skeleton */}
          <div className="bg-white p-6 rounded-lg shadow space-y-3">
            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          </div>
  
          {/* Contact Info Skeleton */}
          <div className="bg-white p-6 rounded-lg shadow space-y-3">
            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
  
          {/* Spinner centered at bottom */}
          <div className="flex justify-center pt-6">
            <svg
              className="animate-spin h-8 w-8 text-green-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          </div>
        </div>
      </main>
    );
  }
  

  if (error) {
    setLoading(false);
  return (
    <main className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-md mx-auto bg-white border border-red-200 text-center p-8 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-red-600 mb-3">Error</h2>
        <p className="text-gray-700 mb-6">
          {error} — please log in again.
        </p>
        <a
          href="/login"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Go to Login
        </a>
      </div>
    </main>
  );
}


  if (!profile) return null;

  return (
    <>
      <HeroSection
        title="My Profile"
        // description="View and manage your GIFON membership information."
        backgroundMedia={["/bg/e.jpeg", "/bg/a.JPG", "/bg/b.JPG"]}
      />

      <main className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Personal Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <p><strong>Name:</strong> {profile.fullName}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(profile.dateOfBirth).toLocaleDateString()}
            </p>
            <p><strong>Nationality:</strong> {profile.nationality}</p>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phoneNumber}</p>
            <p><strong>Alt Phone:</strong> {profile.altPhoneNumber}</p>
            <p><strong>Address:</strong> {profile.homeAddress}</p>
            <p>
              <strong>Location:</strong> {profile.city}, {profile.state},{" "}
              {profile.country} ({profile.postalCode})
            </p>
          </div>

          {/* Professional Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
            <p><strong>Occupation:</strong> {profile.occupation}</p>
            <p><strong>Organization:</strong> {profile.organization}</p>
            <p><strong>Job Title:</strong> {profile.jobTitle}</p>
            <p><strong>Years of Experience:</strong> {profile.yearsExperience}</p>
            <p>
              <strong>Expertise:</strong> {profile.geospatialExpertise.join(", ")}
            </p>
            <p>
              <strong>Qualifications:</strong> {profile.professionalQualifications}
            </p>
            <p>
              <strong>Areas of Interest:</strong>{" "}
              {profile.areasOfInterest.join(", ")}
            </p>
          </div>

          {/* Membership Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Membership</h2>
            <p><strong>Type:</strong> {profile.membershipType}</p>
            <p><strong>Duration:</strong> {profile.membershipDuration}</p>
            <p>
              <strong>Joined:</strong>{" "}
              {new Date(profile.createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Referral:</strong> {profile.howDidYouHearAboutGifon}
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Social Profiles</h2>
            <p>
              <a
                href={profile.linkedinProfile}
                target="_blank"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href={profile.twitterHandle}
                target="_blank"
                className="text-blue-400 underline"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href={profile.facebookProfile}
                target="_blank"
                className="text-blue-700 underline"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
