"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const resp = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    
      const data = await resp.json();
    
      if (!resp.ok) {
        setError(data.message || "Login failed. Please try again.");
      } else {
        // --- NEW LOGIC ---
        // We no longer get a token. We get a user object.
        if (data.user) {
          // Save the user data to localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          // This shouldn't happen, but just in case
          throw new Error("Login succeeded but did not return user data.");
        }
        
        // Clear old, insecure token if it exists
        localStorage.removeItem('jwt');

        // success → navigate to profile
        router.push("/dashboard"); // Or wherever your portal page is
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }
    

  return (
    <>
      <HeroSection
        title="Member Login"
        // description="Access your account to view exclusive resources and manage your membership."
        backgroundImages={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          {/* Show error message */}
          {error && (
            <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
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
                className="mt-1 w-full border rounded p-3"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // 👈 toggle here
                  id="password"
                  name="password"
                  className="mt-1 w-full border rounded p-3 pr-10" // 👈 add right padding
                  placeholder="password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white px-6 py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/forgot-password" className="text-primary underline">
              Forgot your password?
            </a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-primary underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
