"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState<string | null>(null);
  const [showResendForm, setShowResendForm] = useState(false);

  const verify = useCallback(
    async (t: string) => {
      setError(null);
      setSuccess(null);
      setLoading(true);

      try {
        const resp = await fetch(
          "https://gifon.onrender.com/api/v1/auth/verify-account",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: t }),
          }
        );

        const data = await resp.json();

        if (!resp.ok || data.status === "fail") {
          setError(data.message || "Verification failed. Please try again.");
        } else {
          setSuccess("✅ Your account has been verified! Redirecting to login...");
          setTimeout(() => router.push("/login"), 2000);
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken) {
      setToken(urlToken);
      verify(urlToken);
    }
  }, [searchParams, verify]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) verify(token);
  };

  const handleResend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResendMessage(null);
    setResendLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");

      const resp = await fetch(
        "https://gifon.onrender.com/api/v1/auth/resend-verification-link",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await resp.json();

      if (!resp.ok || data.status === "fail") {
        setResendMessage(data.message || "Failed to resend verification link.");
      } else {
        setResendMessage("📧 Verification link sent! Please check your email.");
      }
    } catch (err: unknown) {
      setResendMessage(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <main className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Email Verification
        </h2>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 text-sm text-green-700 bg-green-100 rounded">
            {success}
          </div>
        )}

        {!searchParams.get("token") && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="token"
                className="block text-sm font-medium text-gray-700"
              >
                Verification Code
              </label>
              <input
                type="text"
                id="token"
                name="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="mt-1 w-full border rounded p-3"
                placeholder="Enter your code"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>
        )}

        {/* Collapsible Resend Section */}
        <div className="border-t pt-6 mt-6 text-center">
          {!showResendForm ? (
            <button
              type="button"
              onClick={() => setShowResendForm(true)}
              className="text-blue-600 underline"
            >
              Didn’t get the email? Resend verification link
            </button>
          ) : (
            <form onSubmit={handleResend} className="space-y-4">
              <input
                type="email"
                name="email"
                className="w-full border rounded p-3"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                disabled={resendLoading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
              >
                {resendLoading ? "Sending..." : "Resend Verification Link"}
              </button>
              <button
                type="button"
                onClick={() => setShowResendForm(false)}
                className="block mx-auto mt-2 text-sm text-gray-600 underline"
              >
                Cancel
              </button>
            </form>
          )}

          {resendMessage && (
            <p className="mt-4 text-center text-sm text-gray-700">
              {resendMessage}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
