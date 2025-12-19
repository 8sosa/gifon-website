"use client";

import { useState } from "react";
// import Image from "next/image";
import { X, Mail, CheckCircle, Loader2, ArrowRight } from "lucide-react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (Replace with your actual newsletter API logic)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
    
    // Optional: Close automatically after success
    setTimeout(onClose, 3000); 
  };

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full text-gray-500 hover:text-red-500 transition-all backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* --- LEFT SIDE: Visual & Value Prop --- */}
        <div className="w-full md:w-5/12 bg-green-900 relative flex flex-col justify-end p-8 md:p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Abstract Decorative Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-green-500/30">
                    <Mail className="text-green-300" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-cooper mb-2 leading-tight">
                    - Eyes on Location -
                </h3>
                <p className="text-green-200 text-sm md:text-base font-medium uppercase tracking-wider mb-4 text-center">
                    The GeoINSIGHT Bulletin
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Join 5,000+ professionals receiving the latest on geospatial intelligence, policy updates, and tech innovations directly in their inbox.
                </p>
            </div>
        </div>

        {/* --- RIGHT SIDE: Form --- */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white relative">
            
            {isSuccess ? (
                // Success State
                <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-600 w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re Subscribed!</h2>
                    <p className="text-gray-600 mb-8">
                        Thank you for joining. Keep an eye on your inbox for the next edition of GeoINSIGHT.
                    </p>
                    <button 
                        onClick={onClose}
                        className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg w-full"
                    >
                        Continue Exploring
                    </button>
                </div>
            ) : (
                // Form State
                <div className="animate-in fade-in slide-in-from-bottom-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Ahead of the Curve</h2>
                    <p className="text-gray-500 mb-8">
                        No spam, just insight. Unsubscribe at any time.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    placeholder="Enter your work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <><Loader2 className="animate-spin" /> Subscribing...</>
                            ) : (
                                <>Subscribe Now <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-xs text-gray-400">
                        By subscribing, you agree to our <a href="/policies#privacy" className="underline hover:text-green-600">Privacy Policy</a>.
                    </p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}