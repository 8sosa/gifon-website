type Props = {
    title: string;
    points: string[];
  };
  
  export default function BenefitSection({ title, points }: Props) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 text-secondary">{title}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>
    );
  }
  