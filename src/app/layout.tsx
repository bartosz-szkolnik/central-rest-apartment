import type { Metadata } from 'next';
import { Inria_Sans } from 'next/font/google';
import './globals.css';

const inriaSans = Inria_Sans({ subsets: ['latin-ext'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Central Rest Apartment in Paphos for rent',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.className} bg-gradient-to-r from-gradient-1 via-gradient-2 to-gradient-3`}>
        {children}
      </body>
    </html>
  );
}
