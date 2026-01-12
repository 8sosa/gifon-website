// src/app/forgot-password/page.tsx

import { Suspense } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <main className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center min-h-screen">
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <ForgotPasswordForm />
      </Suspense>
    </main>
  );
}