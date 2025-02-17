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
import Script from 'next/script'; // Import next/script
import './globals.css';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ui/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VEFQXV81EY"
        />
        <Script
          id="google-analytics" // Added the id attribute
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VEFQXV81EY');
            `,
          }}
        />
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
}
