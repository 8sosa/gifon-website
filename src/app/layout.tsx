import './globals.css';
import { Montserrat, Bellota } from 'next/font/google';
import localFont from 'next/font/local';
import HeaderWrapper from '@/components/HeaderWrapper';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
// import Breadcrumbs from "@/components/BreadCrumbs";

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

const bellmt = localFont({
  src: 'fonts/bell-mt.ttf',
  variable: '--font-bellmt',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" 
      className="
        scroll-smooth 
        scroll-pt-[10.09375rem] 
        md:scroll-pt-[14.59375rem] 
        lg:scroll-pt-[16.40625rem] 
        xl:scroll-pt-[16.706875rem]
      "
    >
      <body 
        className={`
          ${montserrat.variable} 
          ${bellota.variable} 
          ${cooper.variable}
          ${bellmt.variable}
          flex min-h-screen flex-col
        `}
      >
        <ScrollToTop />
        <HeaderWrapper />
        <main className="grow min-h-1/2 flex flex-col justify-start pt-38 md:pt-[10.7rem] lg:pt-60 xl:pt-60">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}