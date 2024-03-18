import type { Metadata } from 'next';
import { Inria_Sans } from 'next/font/google';
import '../../styles/globals.css';
import { cn } from '@lib/utils';
import { ThemeProvider } from '../../providers/theme-provider';

const inriaSans = Inria_Sans({ subsets: ['latin-ext'], weight: ['400', '700'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Central Rest Apartment in Paphos for rent',
  description: '',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-gradient-to-r from-gradient-begin via-gradient-middle to-gradient-end dark:from-gradient-begin dark:to-gradient-end',
          inriaSans.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
