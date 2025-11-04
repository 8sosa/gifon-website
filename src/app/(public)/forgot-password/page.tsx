// src/app/forgot-password/page.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react'; // You'll need lucide-react (npm install lucide-react)

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Basic email regex. Not perfect, but better than nothing.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/request-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Even if the server sends a specific error, we
        // might just want to show our generic success message
        // to prevent leaking info. But for debugging, we'll use the API's message.
        throw new Error(data.message || 'Something went wrong');
      }

      // On success, we get the generic "If an account..." message
      setSuccessMessage(data.message);
      setEmail(''); // Clear the input field

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
    <main className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        
        {/* We'll show EITHER the form OR the success message */}
        
        {successMessage ? (
          // --- SUCCESS STATE ---
          <div className="flex flex-col items-center justify-center text-center py-8">
            <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Check Your Email</h2>
            <p className="text-gray-600">
              {successMessage}
            </p>
            <Link
              href="/login"
              className="mt-6 text-sm text-green-600 hover:underline font-medium"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          // --- DEFAULT FORM STATE ---
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Your Password?</h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              No problem. Enter the email address associated with your account, and we`&apos;`ll send you a link to reset your password.
            </p>

            {/* Show error message */}
            {error && (
              <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending Link...' : 'Send Reset Link'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-green-700 hover:underline"
              >
                Remembered your password? Log in.
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}