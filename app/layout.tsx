import type { Metadata } from 'next';
import { Cormorant_Garamond, Josefin_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
});

const display = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const mark = Josefin_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-mark',
});

export const metadata: Metadata = {
  title: 'MAERO · Rețete cu vanilie de Madagascar',
  description:
    'Descoperă rețeta perfectă cu vanilie Maero — Bourbon, Imperială sau pudră gourmet din Madagascar. Selecție premium, 100% naturală.',
  openGraph: {
    title: 'MAERO · Rețete cu vanilie de Madagascar',
    description: 'Rețete premium cu vanilia Maero, selecție premium din Madagascar.',
    type: 'website',
    locale: 'ro_RO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${serif.variable} ${display.variable} ${mark.variable}`}>
      <body className="font-serif">{children}</body>
    </html>
  );
}
