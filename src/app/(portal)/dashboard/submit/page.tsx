// src/app/dashboard/submit/page.tsx

"use client";

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection'; // Assuming you want a hero

export default function SubmitPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

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
        // No 'Content-Type' header needed, browser sets it
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Success!
      setSuccessMessage(data.message);
      form.reset(); // Clear the form

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
        backgroundImages={["/bg/a.JPG"]} // Use any of your cool backgrounds
      />

      <main className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
          
          {successMessage ? (
            // --- SUCCESS STATE ---
            <div className="flex flex-col items-center justify-center text-center py-12">
              <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Submission Received!</h2>
              <p className="text-gray-600">
                {successMessage}
              </p>
              <button
                onClick={() => setSuccessMessage(null)} // Allow submitting another
                className="mt-8 text-sm text-green-600 hover:underline font-medium"
              >
                Submit another paper
              </button>
            </div>
          ) : (
            // --- DEFAULT FORM STATE ---
            <>
              <h2 className="text-2xl font-semibold mb-6 text-center">Journal Submission Form</h2>
              
              {error && (
                <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                    Author Name(s)
                  </label>
                  <input
                    type="text"
                    id="authorName"
                    name="authorName"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Dr. Fatima Bello, Prof. John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Corresponding Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Publication Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
                    Abstract (max 500 words)
                  </label>
                  <textarea
                    id="abstract"
                    name="abstract"
                    rows={6}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="publicationFile" className="block text-sm font-medium text-gray-700">
                    Upload Manuscript
                  </label>
                  <input
                    type="file"
                    id="publicationFile"
                    name="publicationFile"
                    required
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    accept=".doc, .docx, .pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Max 10MB. Allowed formats: .pdf, .doc, .docx
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Submit Paper'}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
}