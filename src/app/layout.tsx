import './globals.css';
import { Montserrat, Bellota } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const bellota = Bellota({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-bellota',
  display: 'swap',
});

const cooper = localFont({
  src: 'fonts/COOPBL.woff',
  variable: '--font-cooper',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={`
          ${montserrat.variable} 
          ${bellota.variable} 
          /* ${cooper.variable} */ 
          flex min-h-screen flex-col
        `}
      >
        <Header />
        
        {/* CHANGE 2: Add dynamic top padding (pt) to main.
           - pt-20 (5rem) for Mobile (matches the h-20 header)
           - lg:pt-36 (9rem) for Desktop (matches h-24 + green nav bar height)
        */}
        <main className="grow min-h-1/2 flex flex-col justify-start pt-20 lg:pt-36">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}