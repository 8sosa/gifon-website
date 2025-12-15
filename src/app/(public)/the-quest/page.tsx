import Link from 'next/link';
import { BookOpen, ExternalLink, ArrowLeft } from 'lucide-react';


export default function TheQuestPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-green-700 p-8 sm:p-12 text-center text-white relative">
          <Link href="/" className="absolute top-6 left-6 text-green-100 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
            <ArrowLeft size={16} /> Back
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold bellefair mb-4">
            The Quest
          </h1>
          <p className="text-lg sm:text-xl text-green-100 italic font-light sen">
            &quot;My Quest to Map a Nation&apos;s Future&quot;
          </p>
          <div className="mt-4 inline-block px-4 py-1 bg-green-800 rounded-full text-sm font-medium">
            By Dr. AA Usman
          </div>
        </div>

        {/* Content / Actions Section */}
        <div className="p-8 sm:p-12">
          <p className="text-center text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
            Explore the vision and works of Dr. Usman. You can view the full PDF document below, or visit his official personal website for more insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Option 1: The PDF */}
            <div className="flex flex-col h-full border rounded-xl p-6 hover:border-green-500 transition-colors group">
              <div className="mb-4 bg-green-50 w-12 h-12 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Read The Quest</h3>
              <p className="text-sm text-gray-500 mb-6 grow">
                Read the full document outlining the strategic vision.
              </p>
              <Link 
                href="/docs/The QUEST PDF.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-lg border-2 border-green-600 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-all"
              >
                Read More
              </Link>
            </div>

            {/* Option 2: The Website */}
            <div className="flex flex-col h-full border rounded-xl p-6 hover:border-blue-500 transition-colors group">
              <div className="mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ExternalLink size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Website</h3>
              <p className="text-sm text-gray-500 mb-6 grow">
                Connect with Dr. Usman at <strong>dr-aausman.net</strong>
              </p>
              <Link 
                href="https://dr-aausman.net" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
              >
                Go to Website
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}