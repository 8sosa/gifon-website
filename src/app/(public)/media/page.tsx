// app/(public)/media/page.tsx
import { getNewsPosts, getUpcomingEvents } from '@/lib/contentful-queries';
import NewsCard from '@/components/NewsCard';
import UpcomingEvents from '@/components/UpcomingEvents';
import { FlatEvent, FlatNewsPost } from '@/types/types';
import MediaHero from '@/components/media/MediaHero';
import EventsCarousel from '@/components/media/EventsCarousel';
import GalleryMasonry from '@/components/media/GalleryMasonry';
import ResourceGrid from '@/components/media/ResourceGrid';
import PodcastList from '@/components/media/PodcastList';
import DownloadsGrid from '@/components/media/DownloadsGrid';
import SubscribeForm from '@/components/SubscribeForm';
import FloatingSectionNav from '@/components/media/FloatingSectionNav';
import Image from 'next/image';
import Link from 'next/link';

export default async function MediaPage() {
  const news: FlatNewsPost[] = await getNewsPosts();
  const events: FlatEvent[] = await getUpcomingEvents();

  // sample gallery images (replace with real image refs)
  const galleryImages = [
    '/bg/a.JPG',
    '/bg/b.JPG',
    '/bg/c.JPG',
    '/bg/d.JPG',
    '/bg/e.jpeg',
    '/ph.svg',
  ];

  return (
    <main className="min-h-screen relative">
      <FloatingSectionNav />

      <MediaHero
        title="Media & Insights"
        subtitle="News, events, resources and multimedia — the latest in geospatial intelligence."
        background="/bg/e.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        {/* News column */}
        <section id="news" className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <p className="text-sm text-slate-500">Updated frequently</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {news.map((n) => (
              <NewsCard
                key={n.id}
                title={n.title}
                excerpt={n.excerpt}
                date={n.date}
                image={n.image}
              />
            ))}
          </div>

          {/* Press releases (animated cards) */}
          <section id="press" className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Press Releases</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* sample press cards - replace with real data if available */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-900 text-white shadow-xl">
                <h4 className="text-lg font-bold">GIFON launches satellite analytics platform</h4>
                <p className="mt-2 text-sm text-slate-200">New tooling to accelerate disaster response and infrastructure monitoring.</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="inline-block px-4 py-2 rounded-full bg-white text-indigo-700 font-semibold">Read</a>
                  <a href="#" className="inline-block px-4 py-2 rounded-full border border-white/30 text-white">Download PDF</a>
                </div>
              </article>

              <article className="p-6 rounded-2xl bg-white/60 border border-white/10 shadow">
                <h4 className="text-lg font-semibold">Partnership with international research labs</h4>
                <p className="mt-2 text-sm text-slate-700">Collaborative research on climate resilience mapping and open data repositories.</p>
                <div className="mt-4">
                  <a href="#" className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">Read</a>
                </div>
              </article>
            </div>
          </section>

          {/* Archive */}
          <section id="archive" className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Publication Archive</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              A living archive of research, case studies, and reports. Use filters to find papers by topic, date or author.
            </p>

            <ResourceGrid />
          </section>
        </section>

        {/* Sidebar: Events + Highlights */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-white/30 border border-white/10 shadow-lg p-5">
              <h3 className="text-xl font-semibold mb-3">Upcoming Events</h3>
              <EventsCarousel events={events} />
              <div className="mt-4">
                <Link href="/events" className="inline-block text-sm text-indigo-600 font-semibold">See all events →</Link>
              </div>
            </div>

            <UpcomingEvents
              events={events.map((e) => ({
                title: e.title,
                startDate: e.startDate,
                image: e.image,
              }))}
            />

            <div className="rounded-2xl p-4 bg-gradient-to-br from-indigo-700 to-purple-600 text-white shadow-lg">
              <h4 className="font-semibold">Events Highlights</h4>
              <p className="text-sm text-indigo-100 mt-2">Keynotes, workshops and demo days. Register early — seats limited.</p>
              <div className="mt-4">
                <Link href="/events/register" className="inline-block px-4 py-2 rounded-full bg-white text-indigo-700 font-semibold">Register</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Multi-section blocks */}
      <section id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Resource Materials</h2>
            <p className="text-slate-700 mb-6">White papers, technical guides, infographics and toolkits for practitioners and students.</p>

            <div className="grid md:grid-cols-3 gap-4">
              <DownloadsGrid />
            </div>
          </div>

          <aside className="rounded-2xl p-6 bg-gradient-to-br from-white/60 to-white/30 border border-white/10 shadow">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li><a href="/resources/whitepapers" className="text-indigo-600">Whitepapers</a></li>
              <li><a href="/resources/toolkits" className="text-indigo-600">Toolkits</a></li>
              <li><a href="/resources/datasets" className="text-indigo-600">Datasets</a></li>
            </ul>
            <div className="mt-6">
              <SubscribeForm />
            </div>
          </aside>
        </div>
      </section>

      <section id="events" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Events & Highlights</h2>
          <p className="text-slate-700 mb-6">Past and upcoming events, demos, and highlight reels.</p>

          {/* Event tiles */}
          <div className="grid md:grid-cols-3 gap-6">
            {events.slice(0, 6).map((ev) => (
              <article key={ev.id} className="rounded-2xl p-6 bg-white/60 border border-white/10 shadow hover:scale-105 transition">
                <div className="relative h-36 rounded-md overflow-hidden mb-3">
                  {/* if events provide image */}
                  <Image src={ev.image || '/ph.svg'} alt={ev.title} className="object-cover w-full h-full" width={1500} height={1000}/>
                </div>
                <h4 className="font-semibold">{ev.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{new Date(ev.startDate).toLocaleDateString()}</p>
                <p className="text-sm text-slate-700 mt-3 line-clamp-3">{ 'Event description placeholder.'}</p>
                <div className="mt-4">
                  <a href={`/events/${ev.id}`} className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">Details</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="podcasts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Podcasts & Webinars</h2>
          <PodcastList />
        </div>
      </section>

      <section id="gallery" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Photo & Video Gallery</h2>
          <GalleryMasonry images={galleryImages} />
        </div>
      </section>

      <section id="downloads" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Downloads</h2>
          <p className="text-slate-700 mb-6">Policy briefs, manuals and conference materials — available for direct download.</p>
          <DownloadsGrid />
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Stay in the loop</h3>
            <p className="text-slate-300">Get monthly briefings on research, events, and funding opportunities.</p>
          </div>
          <SubscribeForm compact />
        </div>
      </footer>
    </main>
  );
}
