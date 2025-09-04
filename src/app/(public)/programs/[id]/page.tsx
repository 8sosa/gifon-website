import { notFound } from "next/navigation";
import AnimatedHero from "@/components/AnimatedHero";
import StatGrid from "@/components/StatGrid";
import FAQAccordion from "@/components/FAQAccordion";
import Image from "next/image";
import programs, { ProgramId } from "../Programs";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProgramDetailPage({ params }: Props) {
  const { id } = await params;
  const program = programs[id as ProgramId];

  if (!program) return notFound();

  return (
    <main className="w-full antialiased text-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] bg-gradient-to-tr from-indigo-600/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-48 -right-48 w-[50rem] h-[50rem] bg-gradient-to-bl from-rose-400/20 via-fuchsia-400/10 to-transparent rounded-full blur-2xl animate-blob animation-delay-2000" />
      </div>

      <AnimatedHero program={program} />

      <section className="max-w-5xl mx-auto py-16 px-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              About <span className="text-indigo-600">{program.title}</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">{program.description}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {program.summary.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 border border-white/10 shadow-lg">
                  <p className="text-slate-700">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-gradient-to-b from-white/40 to-white/20 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><strong>Duration:</strong> 8–12 weeks</li>
              <li><strong>Level:</strong> Beginner → Advanced</li>
              <li><strong>Format:</strong> Hybrid (online + in-person)</li>
              <li><strong>Seats:</strong> Limited cohorts</li>
            </ul>
            <div className="mt-6">
              <a href="/register" className="inline-block w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-transform">
                Apply Now
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <StatGrid />
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">Program Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {program.highlights.map((item, i) => (
            <li key={i} className="p-6 rounded-xl bg-gradient-to-r from-slate-900/90 to-indigo-900/70 text-white shadow-xl transform hover:-translate-y-1 transition">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Mentors & Partners</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/60 border border-white/10 shadow-md hover:scale-105 transition">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image src="/bg/a.JPG" alt={`Mentor ${i + 1}`} fill className="object-cover" />
              </div>
              <h4 className="mt-3 font-semibold">Dr. Ada O.</h4>
              <p className="text-sm text-slate-600">Geospatial Research Lead</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
        <div id="gallery" className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["/bg/a.JPG", "/bg/b.JPG", "/bg/c.JPG", "/bg/d.JPG", "/bg/e.jpeg"].map((img, i) => (
            <div key={i} className="relative h-48 md:h-64 rounded-xl overflow-hidden transform hover:scale-105 transition">
              <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white/60 to-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Watch Program Highlights</h2>
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Program Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <FAQAccordion />
        </div>
        <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-700 to-purple-600 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to join?</h3>
          <p className="mb-6">Secure your spot in the next cohort — scholarships and early-bird discounts available.</p>
          <a href="/register" className="inline-block px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold shadow hover:scale-[1.02] transition">
            Register & Apply
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Join our newsletter</h3>
              <p className="text-slate-200">Stay updated on cohorts, workshops, and funding opportunities.</p>
            </div>
            <form className="flex w-full md:w-auto items-center gap-3">
              <input placeholder="you@company.com" className="px-4 py-3 rounded-lg text-slate-800" />
              <button className="px-4 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
