// app/page.tsx (Next.js 13+ App Router)
// Or pages/index.tsx if using Pages Router

"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    location: "",
    postalCode: "",
    phone: "",
    email: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
        <div className="pageHead"/>
        <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Contact Form */}
        <section className="gap-10">
            <h1 className="text-3xl font-bold p-8">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                required
                className="border p-3 rounded w-full"
                value={formData.firstName}
                onChange={handleChange}
                />
                <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                required
                className="border p-3 rounded w-full"
                value={formData.lastName}
                onChange={handleChange}
                />
            </div>

            <input
                type="text"
                name="address"
                placeholder="Address"
                className="border p-3 rounded w-full"
                value={formData.address}
                onChange={handleChange}
            />

            <div className="grid md:grid-cols-2 gap-4">
                <input
                type="text"
                name="city"
                placeholder="City"
                className="border p-3 rounded w-full"
                value={formData.city}
                onChange={handleChange}
                />
                <select
                name="country"
                className="border p-3 rounded w-full"
                value={formData.country}
                onChange={handleChange}
                >
                <option value="">Country PLEASE SELECT</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="ng">Nigeria</option>
                {/* Add more as needed */}
                </select>
            </div>

            <input
                type="text"
                name="location"
                placeholder="Location"
                className="border p-3 rounded w-full"
                value={formData.location}
                onChange={handleChange}
            />

            <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className="border p-3 rounded w-full"
                value={formData.postalCode}
                onChange={handleChange}
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                required
                className="border p-3 rounded w-full"
                value={formData.phone}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                className="border p-3 rounded w-full"
                value={formData.email}
                onChange={handleChange}
            />

            <textarea
                name="comments"
                placeholder="Comments *"
                required
                rows={4}
                className="border p-3 rounded w-full"
                value={formData.comments}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
            >
                Submit
            </button>
            </form>
        </section>

        {/* Sidebar */}
        {/* <aside className="space-y-8"> */}
            {/* Sign In */}
            {/* <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Sign In</h2>
            <form className="space-y-3">
                <input
                type="text"
                placeholder="Username"
                className="border p-2 rounded w-full"
                />
                <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded w-full"
                />
                <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" /> Remember Me
                </label>
                <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
                >
                Sign In
                </button>
            </form>
            <div className="mt-3 text-sm space-y-1">
                <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
                </a>
                <br />
                <a href="#" className="text-blue-600 hover:underline">
                Haven’t registered yet?
                </a>
            </div>
            </div> */}

            {/* Latest News */}
            {/* <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Latest News</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                <span className="font-medium">8/20/2025:</span> GIFON Young
                Professional Scholarship Winners Introduced
                </li>
                <li>
                <span className="font-medium">7/25/2025:</span> 2025 ESIG Winners
                Announced
                </li>
            </ul>
            </div> */}

            {/* Calendar */}
            {/* <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Calendar</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
                <li>8/12/2025 » 9/30/2025: Support U.S. Federal Geospatial Datasets</li>
                <li>
                9/10/2025: Tracking Wildland Fire Progression with NASA&apos;s Earth
                Science Data and Open Source Tools
                </li>
            </ul>
            </div>
        </aside> */}
        </main>
    </>
  );
}