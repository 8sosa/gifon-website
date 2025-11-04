import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        
        {/* 2. Make this <main> element grow to fill all available space */}
        <main className="flex-grow min-h-1/2 flex flex-col justify-start mt-36">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
