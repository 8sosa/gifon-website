import './globals.css';
import { Montserrat, Bellota } from 'next/font/google';
import localFont from 'next/font/local';
import HeaderWrapper from '@/components/HeaderWrapper';
import Footer from '@/components/Footer';
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
    <html lang="en">
      <body 
        className={`
          ${montserrat.variable} 
          ${bellota.variable} 
          ${cooper.variable}
          ${bellmt.variable}
          flex min-h-screen flex-col
        `}
      >
        <HeaderWrapper />
        <main className="grow min-h-1/2 flex flex-col justify-start pt-20 lg:pt-36">
          {/* <Breadcrumbs /> */}
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}