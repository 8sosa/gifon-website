"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script"; 
import { 
  Calendar, MapPin, User, Mail, Briefcase, 
  CheckCircle2, ArrowLeft, Ticket, Loader2, ShieldCheck
} from "lucide-react";

// --- TYPE DEFINITIONS ---

// 1. Event Data Interface
interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

// 2. Paystack Types
interface PaystackSuccessResponse {
  reference: string;
  message: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

interface PaystackConfig {
  key: string;
  email: string;
  amount: number;
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

// 3. Extend Window Interface
declare global {
  interface Window {
    PaystackPop?: {
      setup: (config: PaystackConfig) => {
        openIframe: () => void;
      };
    };
  }
}

export default function RegistrationForm({ event }: { event: EventData }) {
  // Paystack Public Key
  const publicKey = 'pk_test_6e8d2af9e1ef122e711e928c5c36ac57934f7930'; 

  // Static Ticket Data
  const tickets = [
    { id: 'standard', name: 'Standard Access', price: 50000, desc: 'Full access to sessions, lunch & materials.' },
    { id: 'vip', name: 'VIP Delegate', price: 150000, desc: 'Priority seating, gala dinner & exclusive networking.' },
    { id: 'student', name: 'Student / Researcher', price: 15000, desc: 'Requires valid Student ID at venue entry.' },
  ];

  const [selectedTicket, setSelectedTicket] = useState(tickets[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", org: "", jobTitle: "" });

  const currentTicket = tickets.find(t => t.id === selectedTicket);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- PAYSTACK LOGIC ---
  const payWithPaystack = () => {
    // Basic Validation
    if (!formData.email || !formData.firstName || !formData.lastName) {
        alert("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
    }

    if (typeof window === 'undefined' || !window.PaystackPop) {
      alert("Payment system is loading. Please try again.");
      setIsSubmitting(false);
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: formData.email,
      amount: (currentTicket?.price || 0) * 100, // Amount in kobo
      currency: 'NGN',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        custom_fields: [
          { display_name: "Event", variable_name: "event_title", value: event.title },
          { display_name: "Ticket Type", variable_name: "ticket_type", value: currentTicket?.name || 'Unknown' },
          { display_name: "Attendee Name", variable_name: "attendee_name", value: `${formData.firstName} ${formData.lastName}` }
        ]
      },
      callback: function(response: PaystackSuccessResponse) {
        // Payment Success
        setPaymentRef(response.reference);
        setIsSuccess(true);
        setIsSubmitting(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      onClose: function() {
        setIsSubmitting(false);
        alert('Transaction cancelled.');
      }
    });

    handler.openIframe();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    payWithPaystack();
  };

  // --- SUCCESS VIEW ---
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-green-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-green-400 to-green-600"></div>
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm animate-in zoom-in duration-300">
            <CheckCircle2 className="text-green-600 w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-cooper">You&apos;re All Set!</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Registration confirmed for <strong>{event.title}</strong>.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-xl text-left text-sm text-gray-600 mb-8 space-y-2 border border-gray-100">
            <div className="flex justify-between"><span>Ticket:</span> <span className="font-bold text-gray-900">{currentTicket?.name}</span></div>
            <div className="flex justify-between"><span>Amount Paid:</span> <span className="font-bold text-gray-900">₦{currentTicket?.price.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Reference:</span> <span className="font-mono text-xs">{paymentRef}</span></div>
          </div>

          <div className="space-y-3">
            <Link href="/" className="block w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition shadow-lg">
              Return to Home
            </Link>
            <button onClick={() => window.print()} className="block w-full bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- FORM VIEW ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* Load Paystack Script */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      {/* Navbar Placeholder */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href={`/events/${event.id}`} className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-green-700 transition-colors">
                <div className="p-2 bg-gray-100 rounded-full group-hover:bg-green-50 transition-colors">
                    <ArrowLeft size={16} /> 
                </div>
                Back to Event Details
            </Link>
            <div className="font-cooper font-bold text-green-800 text-lg hidden md:block">GIFON Events</div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* --- LEFT COLUMN: FORM --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900 font-cooper mb-2">Secure Your Spot</h1>
                <p className="text-gray-500">Registering for: <span className="font-semibold text-gray-800">{event.title}</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Ticket Selection */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Ticket size={20}/></div>
                        Select Ticket Type
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {tickets.map((ticket) => (
                            <label key={ticket.id} className={`group cursor-pointer relative p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${selectedTicket === ticket.id ? "border-green-600 bg-green-50/30 shadow-md ring-1 ring-green-600" : "border-gray-100 hover:border-green-300 hover:bg-gray-50"}`}>
                                <input type="radio" name="ticket" value={ticket.id} checked={selectedTicket === ticket.id} onChange={() => setSelectedTicket(ticket.id)} className="sr-only" />
                                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${selectedTicket === ticket.id ? "border-green-600" : "border-gray-300"}`}>
                                    {selectedTicket === ticket.id && <div className="w-3 h-3 bg-green-600 rounded-full" />}
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-gray-900 text-lg">{ticket.name}</div>
                                    <div className="text-sm text-gray-500 mt-1">{ticket.desc}</div>
                                </div>
                                <div className="text-right pl-4">
                                    <div className="font-bold text-green-700 text-xl">₦{ticket.price.toLocaleString()}</div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Personal Details */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><User size={20}/></div>
                        Attendee Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                            <input name="firstName" type="text" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="Jane" onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                            <input name="lastName" type="text" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="Doe" onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                                <input name="email" type="email" required className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="jane.doe@company.com" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional Info */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Briefcase size={20}/></div>
                        Professional Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Organization</label>
                            <input name="org" type="text" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="e.g. GIFON" onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Job Title</label>
                            <input name="jobTitle" type="text" required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="e.g. GIS Analyst" onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                {/* Submit Area */}
                <div className="pt-4">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-5 rounded-2xl shadow-xl hover:shadow-green-600/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isSubmitting ? (
                            <><Loader2 className="animate-spin" /> Processing Payment...</>
                        ) : (
                            <>
                                Proceed to Payment
                                <div className="bg-white/20 p-1 rounded-full"><Ticket size={18} /></div>
                            </>
                        )}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1.5 opacity-80">
                        <ShieldCheck size={14} className="text-green-600" /> 
                        Encrypted & Secure Transaction powered by Paystack
                    </p>
                </div>

            </form>
          </div>

          {/* --- RIGHT COLUMN: ORDER SUMMARY (Sticky) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 shadow-sm group">
                        <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block uppercase tracking-wider">Upcoming Event</span>
                            <h3 className="font-bold text-white text-lg leading-tight shadow-sm line-clamp-2">{event.title}</h3>
                        </div>
                    </div>
                    <div className="space-y-4 text-sm text-gray-600 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-green-600"><Calendar size={18} /></div>
                            <div>
                                <p className="font-bold text-gray-900">Date & Time</p>
                                <p>{event.date}</p>
                                <p className="text-xs text-gray-400">{event.time}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-green-600"><MapPin size={18} /></div>
                            <div>
                                <p className="font-bold text-gray-900">Location</p>
                                <p className="leading-snug">{event.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <div className="flex justify-between items-center mb-3"><span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Summary</span></div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">{currentTicket?.name}</span>
                            <span className="text-gray-900 font-bold">₦{currentTicket?.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 text-sm"><span className="text-gray-500">Service Fee</span><span className="text-gray-500">₦0.00</span></div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between items-center"><span className="font-bold text-gray-900">Total</span><span className="font-extrabold text-green-700 text-2xl">₦{currentTicket?.price.toLocaleString()}</span></div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}