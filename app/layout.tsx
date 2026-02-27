import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Horizon Estate',
  description: 'Find a place you will call home',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-white text-zinc-900 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
