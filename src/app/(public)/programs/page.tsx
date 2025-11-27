import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    id: "youth-empowerment",
    title: "Youth Empowerment & Talent Acceleration",
    description:
      "Mentorship, technical training, and project-based learning to prepare the next generation of geospatial leaders.",
    image: "/bg/c.JPG",
  },
  {
    id: "wings",
    title: "Women in GEOINT (WINGS)",
    description:
      "Scholarships, leadership workshops, and networking to champion women in geospatial intelligence.",
    image: "/bg/c.JPG",
  },
  {
    id: "geoinnovation",
    title: "GeoInnovation & Tech Incubation",
    description:
      "Incubation, funding, and mentorship for startups creating geospatial solutions for defense, climate, and smart cities.",
    image: "/bg/c.JPG",
  },
  {
    id: "geospatial-hub",
    title: "National Geospatial Security & Intelligence Hub",
    description:
      "A central collaboration platform for government, academia, and industry to enhance resilience.",
    image: "/bg/c.JPG",
  },
  {
    id: "community-mapping",
    title: "Community Mapping for Development",
    description:
      "Participatory mapping with local communities to create datasets for disaster response and planning.",
    image: "/bg/c.JPG",
  },
  {
    id: "open-data",
    title: "Open Data & Research",
    description:
      "Advocating accessible geospatial data to empower innovation, transparency, and governance.",
    image: "/bg/c.JPG",
  },
  {
    id: "conferences",
    title: "Conferences, Workshops & Masterclasses",
    description:
      "Knowledge exchange events showcasing the latest in GEOINT, AI, and smart security systems.",
    image: "/bg/c.JPG",
  },
  {
    id: "training",
    title: "Training & Certification",
    description:
      "Globally recognized certifications in GIS, remote sensing, data analytics, and geospatial cybersecurity.",
    image: "/bg/c.JPG",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        title="Programmes & Initiatives"
        // description="Explore our diverse programmes and initiatives driving geospatial capacity and innovation."
        backgroundMedia={[
          "/bg/e.jpeg",
          "/bg/a.JPG",
          "/bg/b.JPG",
          "/bg/c.JPG",
          "/bg/d.JPG",
          "/ph.svg",
        ]}
      />

      <main className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-12">
          {programs.map((program, index) => (
            <section
              key={program.id}
              id={program.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } rounded-2xl shadow-md p-6`}
            >
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <Link
                  href={`/programs/${program.id}`}
                  className="inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  Learn More →
                </Link>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
