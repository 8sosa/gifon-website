"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Loader2, 
  ArrowRight, 
  AlertCircle 
} from "lucide-react";
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
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          throw new Error("Login succeeded but did not return user data.");
        }
        
        localStorage.removeItem('jwt');
        router.push("/dashboard"); 
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
        backgroundMedia={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
        ]}
      />

      <main className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center min-h-[600px]">
        
        <div className="w-full max-w-md relative">
            {/* Decorative decorative blob behind card */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 font-cooper mb-2">Welcome Back</h2>
                <p className="text-gray-500 text-sm">Please sign in to access your dashboard.</p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3 text-red-700 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-green-600 transition-colors">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full pl-10 pr-3 py-3.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="password" className="text-sm font-bold text-gray-700">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-xs font-semibold text-green-600 hover:text-green-800 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-green-600 transition-colors">
                      <Lock size={20} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="block w-full pl-10 pr-10 py-3.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Log In</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">New to GIFON?</span>
                </div>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <Link 
                  href="/membership" 
                  className="inline-block w-full py-3.5 px-4 border-2 border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:text-green-700 hover:border-green-200 hover:bg-green-50 transition-all duration-200"
                >
                  Create an Account
                </Link>
              </div>

            </div>
        </div>
      </main>
    </>
  );
}