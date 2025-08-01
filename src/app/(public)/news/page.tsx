import { getNewsPosts, getUpcomingEvents } from '@/lib/contentful-queries';
import NewsCard from '@/components/NewsCard';
import UpcomingEvents from '@/components/UpcomingEvents';
import { FlatEvent, FlatNewsPost } from '@/types/types';

export default async function NewsPage() {
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
    </main>
  );
}
