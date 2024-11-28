import { type Metadata } from 'next';
import { Inria_Sans } from 'next/font/google';
import { cn } from '@lib/utils';
import { ThemeProvider } from '../../providers/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import '../../styles/globals.css';

const inriaSans = Inria_Sans({ subsets: ['latin-ext'], weight: ['400', '700'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Central Rest Apartment in Paphos for rent',
  description: '',
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode; params: { lang: string } }>) {
  // const lang = headers().get('x-lang');
  const properLang = getProperLang(lang);

  return (
    <html lang={properLang} suppressHydrationWarning>
      <body
        className={cn(
          'bg-gradient-to-r from-gradient-begin via-gradient-middle to-gradient-end dark:from-gradient-begin dark:to-gradient-end',
          inriaSans.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

function getProperLang(lang: string | null): 'en' | 'pl' {
  switch (lang) {
    case 'pl-PL':
    case 'pl':
      return 'pl';

    case 'en-GB':
    case 'en-US':
    case 'en':
    default:
      return 'en';
  }
}
