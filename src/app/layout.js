import { Inter, Mr_Dafoe } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mrDafoe = Mr_Dafoe({
  variable: "--font-mr-dafoe",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tuffside.com'),
  title: "Tuffside Automotive Garage - Built to Last. Tuned to Perform.",
  description: "Professional automotive repair and maintenance services in Trinidad. Expert diagnostics, diesel repair, engine tuning, and suspension work. Call +1 868 335-7440 or book online.",
  keywords: "automotive repair, car service, diesel repair, engine tuning, suspension, Trinidad garage, vehicle maintenance",
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: "Tuffside Automotive Garage - Built to Last. Tuned to Perform.",
    description: "Professional automotive repair and maintenance services in Trinidad. Expert diagnostics, diesel repair, engine tuning, and suspension work.",
    type: "website",
    locale: "en_US",
    siteName: "Tuffside Automotive Garage",
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Tuffside Automotive Garage - Professional automotive services in Trinidad',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tuffside Automotive Garage - Built to Last. Tuned to Perform.",
    description: "Professional automotive repair and maintenance services in Trinidad. Expert diagnostics, diesel repair, engine tuning, and suspension work.",
    images: [
      {
        url: '/images/og.png',
        alt: 'Tuffside Automotive Garage - Professional automotive services in Trinidad',
      },
    ],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@tuffside',
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@tuffside',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tuffside" />

        {/* Additional OpenGraph meta tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:image:alt" content="Tuffside Automotive Garage - Professional automotive services in Trinidad" />

        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tuffside Automotive Garage" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://tuffside.com'} />
      </head>
      <body className={`${inter.variable} ${mrDafoe.variable}`}>
        <div id="fb-root"></div>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
