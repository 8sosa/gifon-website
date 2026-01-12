// app/(public)/forums/page.tsx

import { Suspense } from 'react';
import ForumsClient from './ForumsClient';

export default function ForumsPage() {
  return (
    <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
      <ForumsClient />
    </Suspense>
  );
}