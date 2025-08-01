import Image from "next/image";

type Props = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default function NewsCard({ title, excerpt, date, image }: Props) {
  return (
    <article className="mb-6">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 sm:h-100 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-500">{formatDate(date)}</p>
      <p className="mt-2 text-gray-700 text-sm">{excerpt}</p>
    </article>
  );
}
