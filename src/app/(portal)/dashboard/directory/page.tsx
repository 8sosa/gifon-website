// app/(portal)/dashboard/directory/page.tsx

import { Suspense } from 'react';
import DirectoryClient from './DirectoryClient';

export default function DirectoryForumsPage() {
  return (
    <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
      <DirectoryClient />
    </Suspense>
  );
}