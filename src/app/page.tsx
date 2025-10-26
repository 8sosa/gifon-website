"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff } from "lucide-react";
import HeroSection from '@/components/HeroSection';
// import MapPreview from "@/components/home/MapPreview";
// import CaseCarousel from "@/components/home/CaseCarousel";
import { LogoCarousel, Logo } from '@/components/LogoCarousel';
import RevealProvider from "@/components/ui/RevealProvider";
import Image from 'next/image';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/dgi.jpeg', alt: 'DGI London' },
];

export default function HomePage() {

  // const [showPassword, setShowPassword] = useState(false);
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setError(null);
  //   setLoading(true);

  //   const formData = new FormData(e.currentTarget);
  //   const email = formData.get("email");
  //   const password = formData.get("password");

  //   try {
  //     const resp = await fetch("https://gifon.onrender.com/api/v1/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //       credentials: "include", // keep if backend sets cookies too
  //     });
    
  //     const data = await resp.json();
    
  //     if (!resp.ok || data.status === "fail") {
  //       // backend explicitly says "fail"
  //       setError(data.message || "Login failed. Please try again.");
  //     } else {
  //       // ✅ Save JWT token to localStorage
  //       if (data.data?.token) {
  //         localStorage.setItem("jwt", data.data.token);
  //       }
    
  //       // Optionally save userID if needed
  //       if (data.userID) {
  //         localStorage.setItem("userID", data.userID);
  //       }
    
  //       // success → navigate to profile
  //       router.push("/profile");
  //     }
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       setError(err.message);
  //     } else {
  //       setError("Something went wrong. Please try again.");
  //     }
  //   }
  // }

  return (
    <RevealProvider>
      <div className="pageHead"/>
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        // description="MAPPING THE FUTURE — EMPOWERING NATIONS"
        backgroundImages={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />
      {/* <div className="cardGroup">
        <div className="homeCard">
          <div><Image src="/space.jpg" alt="item" width={1500} height={1000}/></div>
          <div className="caption">
            <h4>Membership</h4>
            <p>You are invited to join GIFON as an individual or as part of an organization.</p>
            <a href="/membership" ><p>Learn More</p></a>
          </div>
        </div>
        <div className="homeCard">
          <div><Image src="/space.jpg" alt="item" width={1500} height={1000}/></div>
          <div className="caption">
            <h4>Education</h4>
            <p>GIFON is committed to supporting GIS professionals at all stages of their careers with essential education and training.</p>
            <a href="/Education" ><p>Learn More</p></a>
          </div>
        </div>
        <div className="homeCard">
          <div><Image src="/space.jpg" alt="item" width={1500} height={1000}/></div>
          <div className="caption">
            <h4>Resources</h4>
            <p>Learn from our vast library of research and papers, publications, FAQs, and podcasts.</p>
            <a href="/Resources"><p>Learn More</p></a>
          </div>
        </div>
      </div> */}

          

      {/* Partners */}
      <section id="our-partners" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 green">Partners</h2>
          <LogoCarousel logos={partners} />
        </div>
      </section>
      
      <section className="events-section">
        <h2 className="text-4xl font-bold mb-5 green">Newsletter</h2>
        <h4 className="text-3xl font-bold mb-8 text-green-700"></h4>
        <div className="events-container">
          <div className="event-card">
            <div className="icon">📅</div>
            <h3>Eyes on Location - The GeoINSIGHT Bulletin</h3>
            <p className="location">Vol 1, No. 1 - August 2025</p>
            <p className="date">GIFON joins the Global GEOINT Stage</p>
            <a href="/newsletter">READ MORE</a>
          </div>
          <div className="event-card">
            <div className="icon">📅</div>
            <h3>Eyes on Location - The GeoINSIGHT Bulletin</h3>
            <p className="location">Vol 2, No. 2 - August 2025</p>
            <p className="date">GIFON joins the Global GEOINT Stage</p>
            <a href="#">READ MORE</a>
          </div>

          <div className="event-card">
            <div className="icon">📅</div>
            <h3>Eyes on Location - The GeoINSIGHT Bulletin</h3>
            <p className="location">Vol 2, No. 3 - August 2025</p>
            <p className="date">GIFON joins the Global GEOINT Stage</p>
            <a href="#">READ MORE</a>
          </div>

          <div className="event-card">
            <div className="icon">📅</div>
            <h3>Eyes on Location - The GeoINSIGHT Bulletin</h3>
            <p className="location">Vol 3, No. 1 - August 2025</p>
            <p className="date">GIFON joins the Global GEOINT Stage</p>
            <a href="#">READ MORE</a>
          </div> 
        </div>
      </section>

        {/* home sign in */}
        <div className="gradient-container">
          <div className="plugged flex flex-row gap-4 items-start">
            <div className="relative w-full h-16 pb-[56.25%]">
              <video src={"/vids/vid1.mp4"} autoPlay loop muted className="absolute top-0 left-0 w-full h-full rounded shadow object-cover"/>
              {/* <iframe
                src="https://www.youtube.com/embed/Zrv_Cp8bLRM?si=4-0YJd7cTP0TLCKF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded shadow"
              /> */}
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold bellota text-nowrap">Get Plugged In</h3>
              <p className="mt-2 montserrat max-w-xl bg-white p-2 rounded-2xl shadow nowrap text-bold green text-center">Learn More</p>
            </div>
          </div>
          
          {/* 
            <div className="plugged">
              <div className="max-w-md mx-auto max-h-full bg-white p-8 rounded-4xl shadow">
                <h2 className="text-2xl font-semibold mb-6 text-center green">Login</h2>

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
                  <a href="#" className="text-primary underline">
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
            </div>
          */}
        </div>

        {/* News Section */}
        <section className="background flex flex-col md:flex-row justify-between p-8 font-sans">
          {/* Social Media */}
          <div className="flex-1 p-4">
            <h3 className="text-sky-700 border-b-2 border-sky-700 inline-block mb-4 text-3xl font-bold">
              Social Media
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sky-700 hover:underline"
                >
                  Follow GIFON on Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 hover:underline"
                >
                  Follow GIFON on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 hover:underline"
                >
                  Follow GIFON on Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 hover:underline"
                >
                  Follow GIFON on Youtube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 hover:underline"
                >
                  Follow GIFON on X formerlly Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Latest News */}
          <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-300">
            <h3 className="text-sky-700 border-b-2 border-sky-700 inline-block mb-4 text-3xl font-bold">
              Latest News
            </h3>
            {/* <ul className="space-y-2">
              <li className="flex flex-col">
                8/20/2025 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  GIFON Young Professional Scholarship Winners Introduced
                </a>
              </li>
              <li className="flex flex-col">
                7/25/2025 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  2025 ESIG Winners Announced
                </a>
              </li>
              <li className="flex flex-col">
                11/18/2024 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  Members Recognized for Exceptional Volunteer Service
                </a>
              </li>
              <li className="flex flex-col">
                9/24/2024 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  URISA Announces Newest Members of the Vanguard Cabinet of Young GIS Professionals
                </a>
              </li>
            </ul> */}
          </div>

          {/* Calendar */}
          <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-300">
            <h3 className="text-sky-700 border-b-2 border-sky-700 inline-block mb-4 text-3xl font-bold">
              Calendar
            </h3>
            {/* <ul className="space-y-2">
              <li className="flex flex-col">
                8/12/2025 – 9/30/2025 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  Support U.S. Federal Geospatial Datasets
                </a>
              </li>
              <li className="flex flex-col">
                9/10/2025 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  Tracking Wildland Fire Progression with NASA&apos;s Earth Science Data and Open Source Tools
                </a>
              </li>
              <li className="flex flex-col">
                9/26/2025 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  CalGIS 2026 Presentation Proposals Due
                </a>
              </li>
              <li className="flex flex-col">
                10/6/2025 – 10/9/2025 {" "}
                <a href="#" className="text-sky-700 hover:underline">
                  GIS-Pro in the Rockies 2025
                </a>
              </li>
            </ul> */}
          </div>
        </section>

        <section className="px-8 py-12 font-sans">
          {/* Title */}
          <div className="inline-block mb-6 text-left">
            <h2 className="text-green-600 text-2xl font-semibold">
              Featured StoryMap
            </h2>
            {/* Short underline */}
            <div className="w-16 h-1 bg-green-600 mt-2 items-start"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-8">
            {/* Left: image */}
            <div className="flex-1 mb-6 md:mb-0">
              <Image
                src="/sm.jpeg" 
                alt="Featured StoryMap"
                width={600}
                height={300}
                className="max-h-80 rounded shadow"
                />
            </div>

            {/* Right: Text + Button */}
            <div className="flex-1 text-left">
              <p className="mb-4 text-gray-700">
                We are looking forward to featuring a member&apos;s StoryMap each
                month in this section. The first one celebrates GIFON&apos;s GIS
                Hall of Fame inductees.
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
            <Image
              src="/ph.svg" // replace with your file
              alt="GIS Corps GIFON"
              width={150}
              height={80}
            />
            <Image
              src="/ph.svg" // replace with your file
              alt="GIS Certification Institute"
              width={150}
              height={80}
            />
            <Image
              src="/ph.svg" // replace with your file
              alt="GIFON Vanguard Cabinet"
              width={150}
              height={80}
            />
          </div>
        </section>

        {/* Features */}
        {/* <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-lg reveal">
            <h3 className="text-xl font-semibold">Spatial Analysis at Scale</h3>
            <p className="mt-3 text-sm text-slate-100/90">Powerful geospatial analytics that help you make decisions faster — built to scale for organisations and government.</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>• Native spatial analytics workflows</li>
              <li>• Low-code tools for analysts</li>
              <li>• Automated processing for large datasets</li>
            </ul>
          </article>

          <article className="rounded-2xl p-6 bg-white shadow-md reveal" style={{ animationDelay: "80ms" }}>
            <h3 className="text-xl font-semibold">Visualization & Dashboards</h3>
            <p className="mt-3 text-sm text-gray-700">Create interactive maps and dashboards that stakeholders can explore — from field teams to command centres.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full px-3 py-1 text-xs border">Maps</span>
              <span className="rounded-full px-3 py-1 text-xs border">Dashboards</span>
              <span className="rounded-full px-3 py-1 text-xs border">Reporting</span>
            </div>
          </article>

          <article className="rounded-2xl p-6 bg-white shadow-md reveal" style={{ animationDelay: "160ms" }}>
            <h3 className="text-xl font-semibold">Apps & Integration</h3>
            <p className="mt-3 text-sm text-gray-700">Ship secure, fast web apps and APIs that integrate with existing defence and cloud stacks.</p>
            <div className="mt-4 text-sm text-gray-500">Works with common cloud providers and data warehouses.</div>
          </article>
        </section> */}

        {/* Map + Cases */}
        {/* <section className="mt-12 grid lg:grid-cols-2 gap-6 items-center">
          <MapPreview />

          <div className="rounded-2xl p-6 bg-white shadow-md reveal">
            <h3 className="text-xl font-semibold">Case Studies</h3>
            <p className="mt-2 text-sm text-gray-600">How GEOINT improved decision-making in critical missions.</p>
            <CaseCarousel />
          </div>
        </section> */}

        {/* CTA */}
        {/* <section className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg reveal">
          <div>
            <h3 className="text-2xl font-bold bellota">Become a GIFON Member</h3>
            <p className="mt-2 montserrat max-w-xl">Make an impact — join GIFON and help shape the future of geospatial intelligence.</p>
          </div>

          <div className="flex gap-3">
            <a href="/membership" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-indigo-700 font-semibold shadow">Become a Member</a>
            <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-md border border-white/40">Contact us</a>
          </div>
        </section> */}

        {/* Resources */}
        {/* <section className="mt-12 grid gap-6 lg:grid-cols-3 items-start">
          <div className="rounded-xl p-6 bg-white shadow-md reveal">
            <h4 className="font-semibold">Reports & Insights</h4>
            <p className="mt-2 text-sm text-gray-600">Applied GEOINT reports, best practices and case studies.</p>
            <a href="/resources" className="mt-4 inline-block text-sm font-medium underline">Browse resources</a>
          </div>

          <div className="rounded-xl p-6 bg-white shadow-md reveal" style={{ animationDelay: "60ms" }}>
            <h4 className="font-semibold">Training & Events</h4>
            <p className="mt-2 text-sm text-gray-600">Workshops, webinars and training programs.</p>
            <a href="/training" className="mt-4 inline-block text-sm font-medium underline">See training</a>
          </div>

          <div className="rounded-xl p-6 bg-white shadow-md reveal" style={{ animationDelay: "120ms" }}>
            <h4 className="font-semibold">Developer Tools</h4>
            <p className="mt-2 text-sm text-gray-600">APIs, SDKs and integration guides to build with GIFON data.</p>
            <a href="/developers" className="mt-4 inline-block text-sm font-medium underline">Get started</a>
          </div>
        </section> */}

        <div className="h-24" />

      {/* Floating subscribe button (kept commented out as in original) */}
      {/* <div className="fixed right-6 bottom-8 z-50">
        <SubscribeForm compact />
      </div> */}
    </RevealProvider>
  );
}
