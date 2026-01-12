// src/components/ScrolltoTop.tsx
'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// 1. The inner logic component (not exported)
function ScrollToTopLogic() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if there is a hash (anchor) in the URL
    const hash = window.location.hash;

    // ONLY scroll to top if there is NO hash
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', 
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// 2. The main component (exported default)
// This wraps the logic in Suspense to fix the build error
export default function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopLogic />
    </Suspense>
  );
}