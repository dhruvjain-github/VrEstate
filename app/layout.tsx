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


'use client'
// app/layout.tsx (client-side part)
import type { Metadata } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ui/ScrollProgress';

// Removing the "use client" directive here

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Adding Google Analytics script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-VEFQXV81EY`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-VEFQXV81EY'); // Your GA4 ID

      // Track page views on route change
      const handleRouteChange = (url: string) => {
        gtag('config', 'G-VEFQXV81EY', {
          page_path: url,
        });
      };

      router.events.on('routeChangeComplete', handleRouteChange);

      // Cleanup when component is unmounted
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    };
  }, [router]);

  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VEFQXV81EY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VEFQXV81EY');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
}
