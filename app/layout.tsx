import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Fraunces({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: 'Ninigret Marina — Charlestown, Rhode Island',
  description:
    'Full-service marina in Charlestown, Rhode Island. Boat service, repair, winter storage, haul-out, slip rentals and fuel — since 1962.',
  metadataBase: new URL('https://ninigretmarina.com'),
  openGraph: {
    title: 'Ninigret Marina — Charlestown, Rhode Island',
    description: 'Where the Atlantic meets a quieter coast.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans bg-deep-900 text-sand-50 antialiased">
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
