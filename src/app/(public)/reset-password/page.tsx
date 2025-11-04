// src/app/reset-password/page.tsx

import { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

// This is a simple Server Component that wraps our Client Component
// in a Suspense boundary, which is required for useSearchParams()
export default function ResetPasswordPage() {
  return (
    <main className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center min-h-screen">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </main>
  );
}