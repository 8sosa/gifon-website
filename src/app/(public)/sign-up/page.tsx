"use client"

import Link from "next/link";
import { useState } from "react";

export default function MembershipPage() {
    const [selected, setSelected] = useState("");

  const categories = [
    "Professional",
    "Young Professional",
    "Student",
    "Government Agency",
    "Educational Institution",
    "Platinum Corporate Partner",
    "Gold Corporate Partner",
    "Silver Corporate Partner",
    "Bronze Corporate Partner",
    "Start-up and Small Business Partner",
    "Retired",
    "Unemployed",
  ];

  return (
    <>
        <div className="pageHead"/>
        <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left/Main Content */}
        <section className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl font-bold">Geospatial Professional Network</h1>
            <p className="text-sm text-gray-700">
            Membership Software Powered by YourMembership :: Legal
            </p>

            <div className="bg-yellow-100 p-4 rounded text-sm">
            <p className="font-semibold">STOP:</p>
            <p>
                Before proceeding, if there is any chance that you are already in our
                database (prior membership or event attendee), please contact{" "}
                <a href="mailto:info@urisa.org" className="text-blue-600 underline">
                info@urisa.org
                </a>{" "}
                to allow us to help register you rather than creating a duplicate
                record.
            </p>
            </div>

            <p>
            All categories of membership are pro-rated for the first year, based
            on join date.
            </p>

            <h2 className="font-semibold">Individual membership categories:</h2>
            <ul className="list-disc pl-6 space-y-2">
            <li><b>Professional:</b> Individual professional membership.</li>
            <li><b>Young Professional:</b> Valid for members age 35 or under (max 5 years).</li>
            <li><b>Student:</b> Full-time students (graduate ≥ 9 credits / undergrad ≥ 12 credits).</li>
            </ul>

            <h2 className="font-semibold">Organizational membership categories:</h2>
            <ul className="list-disc pl-6 space-y-2">
            <li><b>Government Agency:</b> Includes 2 members, add more at reduced fee.</li>
            <li><b>Educational Institution:</b> Includes 2 faculty + 10 students, discounts for more.</li>
            <li><b>Partners:</b> Platinum to Start-Up/Small Business tiers with marketing benefits.</li>
            </ul>

            <div className="max-w-xl">
                <p className="mb-4 text-gray-800 font-medium">
                    Select your category of membership below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((item) => (
                    <label
                        key={item}
                        className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-lg px-3 py-2 hover:border-blue-500"
                    >
                        <input
                        type="radio"
                        name="membership"
                        value={item}
                        checked={selected === item}
                        onChange={(e) => setSelected(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{item}</span>
                    </label>
                    ))}
                </div>

                {selected && (
                    <p className="mt-4 text-sm text-gray-600">
                    You selected: <span className="font-semibold">{selected}</span>
                    </p>
                )}
                </div>
            <Link href="/register" >
            <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded">
            CONTINUE »
            </button>
            </Link>
        </section>

        {/* Sidebar */}
        <aside className="space-y-8">
            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Latest News</h3>
            <ul className="space-y-3 text-sm mt-2">
                <li>
                <span className="text-gray-500">8/20/2025</span><br />
                <Link href="#" className="text-blue-700 underline">
                    GIFON Young Professional Scholarship Winners Introduced
                </Link>
                </li>
                <li>
                <span className="text-gray-500">7/25/2025</span><br />
                <Link href="#" className="text-blue-700 underline">
                    2025 ESIG Winners Announced
                </Link>
                </li>
            </ul>
            </section>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Calendar</h3>
            <ul className="text-sm mt-2 space-y-2">
                <li>
                <span className="text-gray-500">8/12/2025 – 9/30/2025</span><br />
                Support U.S. Federal Geospatial Datasets
                </li>
                <li>
                <span className="text-gray-500">9/10/2025</span><br />
                Tracking Wildland Fire Progression with NASA’s Data
                </li>
            </ul>
            </section>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Online Surveys</h3>
            <p className="text-sm mt-2">Service Award Nominations</p>
            </section>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Contact Us</h3>
            <p className="text-sm mt-2">
                701 Lee St, Suite 960<br />
                Des Plaines, IL 60016<br />
                847-824-6300
            </p>
            </section>

            <section className="rounded-lg p-6 bg-white shadow-md">
            <h3 className="font-bold border-b pb-2">Quick Links</h3>
            <ul className="text-sm mt-2 space-y-1">
                <li><Link href="#" className="text-blue-700 underline">About Us</Link></li>
                <li><Link href="#" className="text-blue-700 underline">Events</Link></li>
                <li><Link href="#" className="text-blue-700 underline">Career Center</Link></li>
                <li><Link href="#" className="text-blue-700 underline">Contact Us</Link></li>
            </ul>
            </section>
        </aside>
        </main>
    </>
  );
}