import { getNewsPosts, getUpcomingEvents } from '@/lib/contentful-queries';
import NewsCard from '@/components/NewsCard';
import UpcomingEvents from '@/components/UpcomingEvents';
import { FlatEvent, FlatNewsPost } from '@/types/types';

export default async function MediaPage() {
  const news: FlatNewsPost[] = await getNewsPosts();
  const events: FlatEvent[] = await getUpcomingEvents();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">News</h1>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
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
        </div>

        <UpcomingEvents
          events={events.map((e) => ({
            title: e.title,
            startDate: e.startDate,
            image: e.image,
          }))}
        />
      </div>

      {/* Press Releases */}
      <section id="press" className="py-16">
        <h2 className="text-2xl font-semibold mb-6">Press Releases</h2>
        <p className="text-gray-700 leading-relaxed">
          Our press releases provide timely updates on major initiatives,
          collaborations, and breakthroughs in geospatial intelligence (GEOINT).
          From launching new analytic platforms to expanding international
          partnerships, these announcements highlight the role of GEOINT in
          addressing global security challenges. Whether it is the deployment of
          satellite-driven monitoring tools to track environmental risks or the
          adoption of AI-based geospatial solutions for disaster management,
          these press releases ensure that stakeholders remain informed about
          the evolving capabilities shaping the future of national and
          international security.
        </p>
      </section>

      {/* Publication Archive */}
      <section id="archive" className="py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Publication Archive</h2>
        <p className="text-gray-700 leading-relaxed">
          The publication archive offers a comprehensive collection of past
          research papers, reports, and technical analyses that have shaped the
          understanding of GEOINT over the years. Scholars, practitioners, and
          policymakers can access detailed case studies on topics ranging from
          satellite imagery interpretation to geospatial applications in border
          security. By preserving these works, the archive not only provides
          historical context but also offers valuable reference material for
          developing new solutions to emerging security challenges in an
          increasingly data-driven world.
        </p>
      </section>

      {/* Resource Materials */}
      <section id="resources" className="py-16">
        <h2 className="text-2xl font-semibold mb-6">Resource Materials</h2>
        <p className="text-gray-700 leading-relaxed">
          Our resource materials are designed to support both professionals and
          newcomers to the GEOINT community. These include white papers,
          technical guides, and infographics that break down complex geospatial
          concepts into actionable insights. Whether it is understanding the
          fundamentals of spatial data infrastructure, learning how to apply
          geospatial analytics in counterterrorism, or exploring methods for
          integrating unmanned aerial systems into data collection workflows,
          these materials serve as essential knowledge tools that advance both
          education and operational readiness.
        </p>
      </section>

      {/* Events & Highlights */}
      <section id="events" className="py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Events & Highlights</h2>
        <p className="text-gray-700 leading-relaxed">
          From international conferences to specialized workshops, our events
          showcase the latest advancements and thought leadership in GEOINT.
          These highlights capture the moments when the community comes together
          to share knowledge, foster collaboration, and demonstrate innovative
          solutions. Whether it’s unveiling a cutting-edge satellite imagery
          analysis tool or discussing strategies for geospatial applications in
          humanitarian crises, these events are milestones that reflect the
          vibrancy and importance of the GEOINT ecosystem worldwide.
        </p>
      </section>

      {/* Podcasts & Webinars */}
      <section id="podcasts" className="py-16">
        <h2 className="text-2xl font-semibold mb-6">Podcasts & Webinars</h2>
        <p className="text-gray-700 leading-relaxed">
          Our podcasts and webinars feature leading voices in the field of
          geospatial intelligence, discussing topics that range from national
          defense applications to the ethical use of geospatial data. These
          sessions provide listeners with in-depth insights, practical case
          studies, and forecasts about the direction of GEOINT technologies. By
          making expert knowledge accessible on demand, they empower both
          professionals and students to stay current with innovations and
          evolving security landscapes without geographical barriers.
        </p>
      </section>

      {/* Photo & Video Gallery */}
      <section id="gallery" className="py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Photo & Video Gallery</h2>
        <p className="text-gray-700 leading-relaxed">
          The gallery curates a visual journey into the world of GEOINT, from
          high-resolution satellite images capturing critical global events to
          behind-the-scenes moments at international conferences. These photos
          and videos serve not only as records of achievement but also as
          powerful tools for communicating the impact of geospatial intelligence
          on real-world challenges. They help audiences visualize the scale of
          GEOINT’s contribution to disaster response, security operations, and
          global collaboration.
        </p>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-16">
        <h2 className="text-2xl font-semibold mb-6">Downloads</h2>
        <p className="text-gray-700 leading-relaxed">
          Our downloads section provides direct access to essential resources
          such as policy briefs, technical specifications, training manuals, and
          conference materials. These documents support the wider GEOINT
          community by ensuring that critical knowledge is readily available for
          use in research, teaching, and operational planning. With a focus on
          practicality and relevance, the downloads are continually updated to
          reflect new developments, ensuring that the community remains equipped
          to tackle evolving geospatial security challenges.
        </p>
      </section>
    </main>

  );
}
