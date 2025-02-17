// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import Header from '@/components/Header';
// import ScrollProgress from '@/components/ui/ScrollProgress';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'The VR Estate',
//   description: 'Virtual Reality Solutions for Real Estate',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>
//         <ScrollProgress />
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// } 


import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The VR Estate',
  description: 'Virtual Reality Solutions for Real Estate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        
        {/* Google Analytics Tag 1 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VEFQXV81EY"
        />
        <Script
          id="google-analytics-user_traffic"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VEFQXV81EY');
          `}
        </Script>

        {/* Google Analytics Tag 2 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-J07RRE2EP5"
        />
        <Script
          id="google-analytics-city"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J07RRE2EP5');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
