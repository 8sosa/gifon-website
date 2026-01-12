// app/(public)/business-solutions/page.tsx

import { Suspense } from 'react';
import InfrastructureClient from './InfrastructureClient';

// FIX: This forces the page to be rendered at request time, 
// bypassing the static build error caused by search params.
export const dynamic = "force-dynamic";

export default function InfrastructurePage() {
  return (
    <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
      <InfrastructureClient />
    </Suspense>
  );
}