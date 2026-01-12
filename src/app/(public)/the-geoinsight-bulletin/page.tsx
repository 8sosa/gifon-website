// app/(public)/Eyes-on-Location/page.tsx

import { Suspense } from 'react';
import PublicationsClient from './PublicationsClient';

export default function PublicationsPage() {
  return (
    <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
      <PublicationsClient />
    </Suspense>
  );
}