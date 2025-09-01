import HeroSection from '@/components/HeroSection';
import {  Logo } from '@/components/LogoCarousel';
import Image from 'next/image';

const partners: Logo[] = [
  { src: '/images/dhq.png', alt: 'Defense HeadQuarters' },
  { src: '/images/na.png', alt: 'Nigerian Army' },
  { src: '/images/naf.png', alt: 'Nigerian Air-Force' },
  { src: '/images/nn.png', alt: 'Nigerian Navy' },
  { src: '/images/nsa.png', alt: 'Office of the National Security Adviser' },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default async function HomePage() {

  return (
    <>
      {/* keep your hero exactly as requested */}
      <HeroSection
        title="GIFON"
        description="mapping the future empowering the nation"
        backgroundImages = {[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
        ]}
      />

      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 -mt-12 z-50">
        {/* Animated elevator */}
        <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-8 lg:p-12 grid gap-6 lg:grid-cols-3 items-center animate-fadeInUp">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bellota">What is GEOINT?</h2>
            <p className="mt-4 text-lg montserrat text-gray-700 max-w-3xl">
              Geospatial intelligence (GEOINT) is the exploitation and analysis of imagery and geospatial
              information to describe, assess, and visually depict physical features and geographically
              referenced activities on the Earth.
            </p>
            <p className="mt-3 montserrat text-sm text-gray-500">– The National Geospatial-Intelligence Agency</p>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="p-4 bg-slate-50 rounded-lg text-center card-appear">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-xs text-gray-500">Years of combined expertise</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center card-appear" style={{animationDelay: '120ms'}}>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-xs text-gray-500">Active projects</div>
              </div>
            </div>

            <div className="mt-2">
              <a href="/about" className="inline-flex items-center px-4 py-2 rounded-md border font-semibold shadow-sm hover:shadow-md">Learn more</a>
            </div>
          </div>
        </section>

        {/* Expanded capabilities with subtle reveal */}
        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-lg reveal-on-scroll">
            <h3 className="text-xl font-semibold">Spatial Analysis at Scale</h3>
            <p className="mt-3 text-sm text-slate-100/90">Powerful geospatial analytics that help you make decisions faster — built to scale for organisations and government.</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>• Native spatial analytics workflows</li>
              <li>• Low-code tools for analysts</li>
              <li>• Automated processing for large datasets</li>
            </ul>
          </article>

          <article className="rounded-2xl p-6 bg-white shadow-md reveal-on-scroll" style={{animationDelay: '80ms'}}>
            <h3 className="text-xl font-semibold">Visualization & Dashboards</h3>
            <p className="mt-3 text-sm text-gray-700">Create interactive maps and dashboards that stakeholders can explore — from field teams to command centres.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full px-3 py-1 text-xs border">Maps</span>
              <span className="rounded-full px-3 py-1 text-xs border">Dashboards</span>
              <span className="rounded-full px-3 py-1 text-xs border">Reporting</span>
            </div>
          </article>

          <article className="rounded-2xl p-6 bg-white shadow-md reveal-on-scroll" style={{animationDelay: '160ms'}}>
            <h3 className="text-xl font-semibold">Apps & Integration</h3>
            <p className="mt-3 text-sm text-gray-700">Ship secure, fast web apps and APIs that integrate with existing defence and cloud stacks.</p>
            <div className="mt-4 text-sm text-gray-500">Works with common cloud providers and data warehouses.</div>
          </article>
        </section>

        {/* Interactive map mockup with animated pulses */}
        <section className="mt-12 grid lg:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl p-6 bg-white shadow-md reveal-on-scroll">
            <h3 className="text-2xl font-bold bellota">Live Operations Map</h3>
            <p className="mt-2 montserrat text-gray-600">A preview of our tactical map overlay with live indicators and heatmaps.</p>

            <div className="mt-6 relative w-full h-64 rounded-lg overflow-hidden border bg-slate-50">
              {/* Placeholder map image — replace with your map or map component */}
              <Image src="/bg/c.JPG" alt="map preview" className="w-full h-full object-cover opacity-90" width={1500} height={1000}/>

              {/* animated pulses */}
              <div className="pulse pulse-1" />
              <div className="pulse pulse-2" />
              <div className="pulse pulse-3" />

              {/* mini overlay card */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm text-xs">
                <div className="font-semibold">Current Ops</div>
                <div className="text-gray-600">3 active alerts · Updated {formatDate(new Date().toISOString())}</div>
              </div>
            </div>
          </div>

          {/* Case studies — horizontal scroll snap */}
          <div className="rounded-2xl p-6 bg-white shadow-md">
            <h3 className="text-xl font-semibold">Case Studies</h3>
            <p className="mt-2 text-sm text-gray-600">How GEOINT helped improve decision-making in critical missions.</p>

            <div className="mt-6 overflow-x-auto scroll-snap-x gap-4 flex no-scrollbar">
              <article className="min-w-[18rem] p-4 border rounded-lg flex-shrink-0 card-appear" style={{animationDelay: '40ms'}}>
                <h4 className="font-semibold">Border Monitoring</h4>
                <p className="mt-2 text-sm text-gray-600">Automated detection improved responsiveness and reduced false positives.</p>
                <a href="/case-studies/border" className="mt-3 inline-block text-sm font-medium underline">Read more</a>
              </article>

              <article className="min-w-[18rem] p-4 border rounded-lg flex-shrink-0 card-appear" style={{animationDelay: '120ms'}}>
                <h4 className="font-semibold">Disaster Response</h4>
                <p className="mt-2 text-sm text-gray-600">Rapid mapping supported coordinated relief efforts.</p>
                <a href="/case-studies/disaster" className="mt-3 inline-block text-sm font-medium underline">Read more</a>
              </article>

              <article className="min-w-[18rem] p-4 border rounded-lg flex-shrink-0 card-appear" style={{animationDelay: '220ms'}}>
                <h4 className="font-semibold">Urban Planning</h4>
                <p className="mt-2 text-sm text-gray-600">Geospatial analytics informed resilient city design.</p>
                <a href="/case-studies/urban" className="mt-3 inline-block text-sm font-medium underline">Read more</a>
              </article>
            </div>
          </div>
        </section>

        {/* Marquee logos (animated) */}
        <section className="mt-12">
          <h4 className="text-sm font-semibold text-gray-600">Trusted by</h4>
          <div className="mt-4 overflow-hidden rounded-lg border">
            <div className="marquee flex items-center gap-8 py-4">
              {partners.concat(partners).map((p, i) => (
                <div key={i} className="flex items-center justify-center w-40 h-12"> 
                  <Image src={p.src} alt="partner" className="max-h-10 object-contain" width={1500} height={1000}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events grid */}
        {/* <section className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold bellota">Upcoming Events</h3>
            <a href="/events" className="text-sm font-medium underline">View all events</a>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events && events.slice(0, 3).map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </section> */}

        {/* Membership CTA (updated) */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg reveal-on-scroll">
          <div>
            <h3 className="text-2xl font-bold bellota">Become a GIFON Member</h3>
            <p className="mt-2 montserrat max-w-xl">Whether your whole organization or just you — make a difference in the geospatial community by joining GIFON.</p>
          </div>

          <div className="flex gap-3">
            <a href="/membership" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-indigo-700 font-semibold shadow">Become a Member</a>
            <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-md border border-white/40">Contact us</a>
          </div>
        </section>

        {/* Resources / Footer CTA inspired by PDFs */}
        <section className="mt-12 grid gap-6 lg:grid-cols-3 items-start">
          <div className="rounded-xl p-6 bg-white shadow-md reveal-on-scroll">
            <h4 className="font-semibold">Reports & Insights</h4>
            <p className="mt-2 text-sm text-gray-600">Applied GEOINT reports, best practices and case studies from industry and government.</p>
            <a href="/resources" className="mt-4 inline-block text-sm font-medium underline">Browse resources</a>
          </div>

          <div className="rounded-xl p-6 bg-white shadow-md reveal-on-scroll" style={{animationDelay: '60ms'}}>
            <h4 className="font-semibold">Training & Events</h4>
            <p className="mt-2 text-sm text-gray-600">Workshops, webinars and training programs for practitioners and leaders.</p>
            <a href="/training" className="mt-4 inline-block text-sm font-medium underline">See training</a>
          </div>

          <div className="rounded-xl p-6 bg-white shadow-md reveal-on-scroll" style={{animationDelay: '120ms'}}>
            <h4 className="font-semibold">Developer Tools</h4>
            <p className="mt-2 text-sm text-gray-600">APIs, SDKs and integration guides to build with GIFON data and services.</p>
            <a href="/developers" className="mt-4 inline-block text-sm font-medium underline">Get started</a>
          </div>
        </section>

        <div className="h-24" />
      </main>
    </>
  );
}
