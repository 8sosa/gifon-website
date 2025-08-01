import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Document } from '@contentful/rich-text-types';


type Job = {
  title: string;
  description: Document; // Rich text
  link: string;
  location?: string; // Optional field for job location
};

export function JobListing({ jobs }: { jobs: Job[] }) {
  return (
    <section className="p-20 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Career Opportunities</h3>
      <div className="space-y-8">
        {jobs.map((job, i) => {
          const fullText = documentToPlainTextString(job.description);
          const previewText = fullText.split(' ').slice(0, 40).join(' ') + '...'; // 40-word preview

          return (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold">{job.title}</h4>
              {job.location && (
                <p className="text-sm text-gray-600">{job.location}</p>
              )}
              <p className="text-gray-700 mt-2">{previewText}</p>
              <a
                href={job.link}
                className="mt-4 inline-block text-green-500 font-medium underline"
              >
                View Details
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
