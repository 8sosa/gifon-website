"use client";

import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import VerifyEmailContent from "./VerifyEmailContent";

export default function VerifyEmailPage() {
  return (
    <>
      <HeroSection
        title="Verify Your Email"
        // description="Confirm your account to access exclusive member resources."
        backgroundMedia={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
        ]}
      />

      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <VerifyEmailContent />
      </Suspense>
    </>
  );
}
