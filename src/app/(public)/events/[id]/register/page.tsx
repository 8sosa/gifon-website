"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  Briefcase, 
  CheckCircle2, 
  ArrowLeft,
  Ticket,
  Loader2,
  ShieldCheck
} from "lucide-react";

// --- Mock Data (In production, fetch this based on params.id) ---
const eventData = {
  title: "National Geospatial Security & Intelligence Summit 2025",
  date: "May 24, 2025",
  time: "09:00 AM - 05:00 PM",
  location: "Eko Hotels & Suites, Victoria Island, Lagos",
  image: "/media/Conference Background.jpg", // Replace with your image
  tickets: [
    { id: 'standard', name: 'Standard Access', price: 50000, desc: 'Access to all sessions & lunch.' },
    { id: 'vip', name: 'VIP Delegate', price: 150000, desc: 'Priority seating, gala dinner & networking.' },
    { id: 'student', name: 'Student / Researcher', price: 15000, desc: 'Valid ID required at venue.' },
  ]
};

export default function RegisterPage() {
  const [selectedTicket, setSelectedTicket] = useState(eventData.tickets[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentTicket = eventData.tickets.find(t => t.id === selectedTicket);

  // --- Success View ---
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-green-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-cooper">Registration Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            You have successfully registered for <strong>{eventData.title}</strong>. A confirmation email with your ticket QR code has been sent to your inbox.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/" className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition">
              Return Home
            </Link>
            <button onClick={() => window.print()} className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition">
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Main Registration View ---
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header / Nav Placeholder */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href={`/events/1`} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-700 transition">
                <ArrowLeft size={16} /> Back to Event Details
            </Link>
            <div className="font-cooper font-bold text-green-700 text-lg hidden md:block">GIFON Events</div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* --- LEFT COLUMN: FORM (Span 8) --- */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                
                {/* Form Header */}
                <div className="p-8 border-b border-gray-100 bg-linear-to-r from-green-50 to-white">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-cooper">Secure Your Spot</h1>
                    <p className="text-gray-500 mt-2">Please fill in your details to register for this event.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    
                    {/* Section 1: Ticket Selection */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Ticket className="text-green-600" size={20}/> Select Ticket Type
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {eventData.tickets.map((ticket) => (
                                <label 
                                    key={ticket.id} 
                                    className={`
                                        cursor-pointer relative p-4 rounded-xl border-2 transition-all duration-200 flex flex-col justify-between h-full
                                        ${selectedTicket === ticket.id 
                                            ? "border-green-600 bg-green-50/50 shadow-md" 
                                            : "border-gray-200 hover:border-green-300 hover:bg-gray-50"}
                                    `}
                                >
                                    <input 
                                        type="radio" 
                                        name="ticket" 
                                        value={ticket.id} 
                                        checked={selectedTicket === ticket.id}
                                        onChange={() => setSelectedTicket(ticket.id)}
                                        className="sr-only"
                                    />
                                    <div>
                                        <div className="font-bold text-gray-900">{ticket.name}</div>
                                        <div className="text-xs text-gray-500 mt-1 leading-snug">{ticket.desc}</div>
                                    </div>
                                    <div className="mt-4 font-bold text-green-700">
                                        ₦{ticket.price.toLocaleString()}
                                    </div>
                                    
                                    {/* Checkmark Icon */}
                                    {selectedTicket === ticket.id && (
                                        <div className="absolute top-3 right-3 text-green-600">
                                            <CheckCircle2 size={18} />
                                        </div>
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Section 2: Personal Details */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <User className="text-green-600" size={20}/> Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">First Name</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="John" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="Doe" />
                            </div>
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                    <input type="email" required className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="john.doe@example.com" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Professional Info */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Briefcase className="text-green-600" size={20}/> Professional Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Organization / Company</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="e.g. GIFON" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Job Title</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="e.g. GIS Analyst" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-green-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="animate-spin" /> Processing...</>
                            ) : (
                                "Complete Registration"
                            )}
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                            <ShieldCheck size={12} /> Secure SSL Encrypted Transaction
                        </p>
                    </div>

                </form>
            </div>
          </div>

          {/* --- RIGHT COLUMN: ORDER SUMMARY (Span 4 - Sticky) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
                
                {/* Event Summary Card */}
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                    <div className="relative h-40 w-full rounded-xl overflow-hidden mb-6">
                        <Image 
                            src={eventData.image} 
                            alt={eventData.title} 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white">
                            <span className="bg-green-600 text-xs font-bold px-2 py-1 rounded mb-1 inline-block">SUMMIT</span>
                        </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg mb-4 leading-tight">{eventData.title}</h3>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-6">
                        <div className="flex items-start gap-3">
                            <Calendar size={16} className="mt-0.5 text-green-600 shrink-0" />
                            <span>{eventData.date} <br/> <span className="text-xs text-gray-400">{eventData.time}</span></span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 text-green-600 shrink-0" />
                            <span>{eventData.location}</span>
                        </div>
                    </div>

                    <hr className="border-dashed border-gray-200 my-4" />

                    {/* Cost Breakdown */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Ticket Type</span>
                            <span className="font-medium text-gray-900 text-sm">{currentTicket?.name}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Quantity</span>
                            <span className="font-medium text-gray-900 text-sm">1</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600 text-sm">Fees</span>
                            <span className="font-medium text-gray-900 text-sm">₦0.00</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <span className="font-bold text-gray-900">Total</span>
                            <span className="font-bold text-green-700 text-xl">₦{currentTicket?.price.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Help Card */}
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                    <h4 className="font-bold text-blue-900 mb-1">Need Help?</h4>
                    <p className="text-sm text-blue-700 mb-3">Contact the events team for bulk bookings.</p>
                    <a href="mailto:events@gifon.org.ng" className="text-sm font-semibold text-blue-600 hover:underline">events@gifon.org.ng</a>
                </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}