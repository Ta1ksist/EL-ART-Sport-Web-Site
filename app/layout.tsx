import Footer from "@/components/footer/footer";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navigation from "@/components/navigation/navigation";
import CookieBanner from "@/components/cookieBanner/cookieBanner";

import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const vivita = localFont({
  src: [
    {
      path: './fonts/Vivita/WOFF2/VIVITA-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Vivita/WOFF2/VIVITA-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vivita',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${vivita.variable}`}>
      <body>
        <Navigation />
        <main className="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}