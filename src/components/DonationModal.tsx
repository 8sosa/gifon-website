"use client";

import { useState } from 'react';
import Script from 'next/script'; 
import { X, Heart, ShieldCheck, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

// --- TYPE DEFINITIONS ---

// 1. Type for the Paystack Response Object
interface PaystackSuccessResponse {
  reference: string;
  message: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

// 2. Type for the Paystack Configuration Object
interface PaystackConfig {
  key: string;
  email: string;
  amount: number; // in kobo
  currency?: string;
  ref?: string;
  metadata?: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
  callback: (response: PaystackSuccessResponse) => void;
  onClose: () => void;
}

// 3. Extend the Window interface to include PaystackPop
declare global {
  interface Window {
    PaystackPop?: {
      setup: (config: PaystackConfig) => {
        openIframe: () => void;
      };
    };
  }
}

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const publicKey = 'pk_test_6e8d2af9e1ef122e711e928c5c36ac57934f7930'; 
  
  const [amount, setAmount] = useState<string>(''); 
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');

  if (!isOpen) return null;

  // Reset state when closing via backdrop or X
  const handleClose = () => {
    setError(null);
    setIsSuccess(false);
    setAmount('');
    setEmail('');
    onClose();
  };

  const payWithPaystack = () => {
    setError(null);

    // 1. Visual Validation
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!amount || Number(amount) <= 0) {
        setError("Please enter a valid donation amount.");
        return;
    }

    // Check if script loaded (Using the strictly typed window object)
    if (typeof window === 'undefined' || !window.PaystackPop) {
        setError("Payment system is still loading. Please try again in a second.");
        return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: Number(amount) * 100, // kobo
      currency: 'NGN',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        custom_fields: [
          { display_name: "Donation Type", variable_name: "donation_type", value: "General Support" }
        ]
      },
      // Now typed correctly
      callback: function(response: PaystackSuccessResponse) {
        setPaymentRef(response.reference);
        setIsSuccess(true);
      },
      onClose: function() {
        // Optional: Do nothing or show a subtle message
      }
    });

    handler.openIframe();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* --- VIEW 1: SUCCESS STATE --- */}
        {isSuccess ? (
            <div className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in">
                    <CheckCircle className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                    Your donation has been received successfully. We appreciate your support for GIFON.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 mb-8 break-all">
                    Ref: {paymentRef}
                </div>
                <button
                    onClick={handleClose}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all"
                >
                    Close Window
                </button>
            </div>
        ) : (
            /* --- VIEW 2: FORM STATE --- */
            <>
                {/* Header */}
                <div className="bg-green-50 p-6 text-center border-b border-green-100 relative">
                    <button 
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full p-1 shadow-sm"
                    >
                        <X size={20} />
                    </button>
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart size={24} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Support <span className="cooper">GIFON</span></h3>
                    <p className="text-sm text-gray-600">Your contribution drives innovation.</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">
                    
                    {/* Inline Error Message */}
                    {error && (
                        <div className="flex items-start gap-3 bg-red-50 p-3 rounded-lg text-red-700 text-sm border border-red-100 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle size={18} className="shrink-0 mt-0.5" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if(error) setError(null);
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Donation Amount (₦)</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3.5 text-gray-500 font-bold">₦</span>
                            <input 
                                type="number" 
                                placeholder="5000" 
                                className="w-full pl-8 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all font-bold text-lg"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    if(error) setError(null);
                                }}
                            />
                        </div>
                        <div className="flex gap-2 mt-2">
                            {[5000, 10000, 50000].map((amt) => (
                                <button 
                                    key={amt}
                                    onClick={() => {
                                        setAmount(amt.toString());
                                        if(error) setError(null);
                                    }}
                                    className="text-xs bg-gray-100 hover:bg-green-100 hover:text-green-700 py-1.5 px-3 rounded-full transition-colors border border-gray-200 font-medium"
                                >
                                    ₦{amt.toLocaleString()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={payWithPaystack}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
                    >
                        Pay Now <ArrowRight size={18} />
                    </button>
                    
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
                        <ShieldCheck size={12} /> Secure payment powered by Paystack
                    </div>
                </div>
            </>
        )}
      </div>
    </div>
  );
}