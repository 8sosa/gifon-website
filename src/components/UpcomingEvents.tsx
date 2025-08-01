import Image from "next/image";

type Event = {
  title: string;
  startDate: string;
  image: string;
};

export default function UpcomingEvents({ events }: { events: Event[] }) {
  return (
    <aside className="w-full lg:w-1/3 xl:w-1/4">
      <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-6">
        {events.map((e, i) => (
          <li key={i} className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              width={96}
              height={96}
              src={e.image}
              alt={e.title}
              className="w-full sm:w-24 h-24 object-cover rounded-md"
            />
            <div>
              <p className="text-sm font-medium">{e.title}</p>
              <p className="text-xs text-gray-500 mt-1">{e.startDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
