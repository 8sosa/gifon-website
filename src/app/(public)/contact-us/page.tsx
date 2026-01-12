// app/(public)/contact-us/page.tsx

import { Suspense } from 'react';
import ContactClient from './ContactClient';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="h-[60vh] bg-gray-900 w-full animate-pulse" />}>
      <ContactClient />
    </Suspense>
  );
}