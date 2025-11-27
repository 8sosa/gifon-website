import './globals.css';
import { Montserrat, Bellota } from 'next/font/google'; // 1. Import fonts
import localFont from 'next/font/local'; // Used for custom files like Cooper
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 2. Configure Google Fonts
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

// 3. Configure Local Font (Cooper)
// ONLY uncomment this if you have the file in /public/fonts/

const cooper = localFont({
  src: 'fonts/COOPBL.woff',
  variable: '--font-cooper',
  display: 'swap',
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 4. Add the font variables to the className string below */}
      <body 
        className={`
          ${montserrat.variable} 
          ${bellota.variable} 
          /* ${cooper.variable} */ 
          flex min-h-screen flex-col
        `}
      >
        <Header />
        
        <main className="flex-grow min-h-1/2 flex flex-col justify-start">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}