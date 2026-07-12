import Footer from "@/components/footer/footer";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navigation from "@/components/navigation/navigation";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <Navigation />
        <main className="main-content">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
