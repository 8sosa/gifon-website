// src/app/reset-password/ResetPasswordForm.tsx

"use client";

import { useState, useEffect } from 'react';
import {  useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ResetPasswordForm() {
//   const router = useRouter();
  const searchParams = useSearchParams();

  // State for the form fields
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // State for the component
  const [token, setToken] =useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Get the token from the URL when the component mounts
  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setError("No reset token found. Please check your link and try again.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    // --- Client-Side Validation ---
    if (!token) {
      setError("No reset token available. Your link may be invalid.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    // --- API Call ---
    try {
      const res = await fetch('/api/auth/perform-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          newPassword: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // This will catch "Invalid or expired token" from our API
        throw new Error(data.message || 'Something went wrong');
      }

      // Success!
      setSuccessMessage(data.message); // e.g., "Password reset successful."

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
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      
      {successMessage ? (
        // --- SUCCESS STATE ---
        <div className="flex flex-col items-center justify-center text-center py-8">
          <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Password Reset!</h2>
          <p className="text-gray-600">
            {successMessage}
          </p>
          <Link
            href="/login"
            className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
          >
            Back to Login
          </Link>
        </div>
      ) : (
        // --- DEFAULT FORM STATE ---
        <>
          <h2 className="text-2xl font-semibold mb-6 text-center">Set a New Password</h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Please enter and confirm your new password.
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !token} // Disable if still loading or token is missing
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}