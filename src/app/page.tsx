// app/page.tsx
// import HeroEnhanced from "@/components/home/HeroEnhanced";
import HeroSection from '@/components/HeroSection';
import AnimatedStats from "@/components/home/AnimatedStats";
import MapPreview from "@/components/home/MapPreview";
import CaseCarousel from "@/components/home/CaseCarousel";
import MarqueeLogos from "@/components/home/MarqueeLogos";
// import SubscribeForm from "@/components/SubscribeForm";
import RevealProvider from "@/components/ui/RevealProvider";

export default function HomePage() {
  return (
    <RevealProvider>
      {/* <HeroEnhanced
        title="GIFON"
        subtitle="MAPPING THE FUTURE — EMPOWERING NATIONS"
        backgroundImages={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
        ]}
      /> */}
      <HeroSection
        title="Geospatial Intelligence Foundation of Nigeria (GIFON)"
        description="MAPPING THE FUTURE — EMPOWERING NATIONS"
        backgroundImages={[
          '/bg/e.jpeg',
          '/bg/a.JPG',
          '/bg/b.JPG',
          '/bg/c.JPG',
          '/bg/d.JPG',
          '/ph.svg',
        ]}
      />

      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 -mt-16 z-50">
        <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-8 lg:p-12 grid gap-6 lg:grid-cols-3 items-center animate-fadeInUp">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bellota">
              What is GIFON?
            </h2>
            <p className="mt-4 text-lg montserrat text-gray-700 max-w-3xl">
              Geospatial intelligence (GEOINT) is the exploitation and analysis of imagery and geospatial
              information to describe, assess, and visually depict physical features and geographically
              referenced activities on the Earth.
            </p>
            <p className="mt-3 montserrat text-sm text-gray-500">– The National Geospatial-Intelligence Agency</p>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <AnimatedStats />
            <div className="mt-2">
              <a href="/about" className="inline-flex items-center px-4 py-2 rounded-md border font-semibold shadow-sm hover:shadow-md">
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-10 grid gap-6 lg:grid-cols-3">
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
        </section>

        {/* Map + Cases */}
        <section className="mt-12 grid lg:grid-cols-2 gap-6 items-center">
          <MapPreview />

          <div className="rounded-2xl p-6 bg-white shadow-md reveal">
            <h3 className="text-xl font-semibold">Case Studies</h3>
            <p className="mt-2 text-sm text-gray-600">How GEOINT improved decision-making in critical missions.</p>
            <CaseCarousel />
          </div>
        </section>

        {/* Partners */}
        <section className="mt-12">
          <h4 className="text-sm font-semibold text-gray-600">Trusted by</h4>
          <MarqueeLogos />
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg reveal">
          <div>
            <h3 className="text-2xl font-bold bellota">Become a GIFON Member</h3>
            <p className="mt-2 montserrat max-w-xl">Make an impact — join GIFON and help shape the future of geospatial intelligence.</p>
          </div>

          <div className="flex gap-3">
            <a href="/membership" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-indigo-700 font-semibold shadow">Become a Member</a>
            <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-md border border-white/40">Contact us</a>
          </div>
        </section>

        {/* Resources */}
        <section className="mt-12 grid gap-6 lg:grid-cols-3 items-start">
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
        </section>

        <div className="h-24" />
      </main>

      {/* Floating subscribe button */}
      {/* <div className="fixed right-6 bottom-8 z-50">
        <SubscribeForm compact />
      </div> */}
    </RevealProvider>
  );
}
