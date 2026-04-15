import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Bebas_Neue, DM_Sans, Space_Mono } from 'next/font/google';
import StructuredData from '@/components/layout/StructuredData';
import SkipNavigation from '@/components/layout/SkipNavigation';
import "./globals.css";

// Font Optimization with Next.js
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-headline',
  display: 'swap',
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-label',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "American Dream - Premier Retail & Entertainment Destination",
  description:
    "America's second-largest shopping mall with 450+ stores, Nickelodeon Universe, DreamWorks Water Park, and world-class dining in East Rutherford, NJ.",
  keywords: [
    "American Dream",
    "shopping mall",
    "retail leasing",
    "Nickelodeon Universe",
    "DreamWorks Water Park",
    "New Jersey",
    "entertainment destination",
    "luxury retail",
    "retail space",
    "event venue",
  ],
  authors: [{ name: "American Dream" }],
  metadataBase: new URL("https://americandream.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "American Dream - 40 Million Reasons To Be Here",
    description:
      "The Second-Largest Shopping Mall in America. The First-Ever Entertainment Destination Like This.",
    url: "https://americandream.com",
    siteName: "American Dream",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "American Dream - Premier Retail & Entertainment Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "American Dream - Premier Retail & Entertainment Destination",
    description:
      "450+ stores, world-class entertainment, and unlimited potential. Explore leasing and partnership opportunities.",
    images: ["/images/og-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9A84C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${cormorant.variable} ${bebas.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preconnect to font CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for SEO */}
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipNavigation />
        {children}
      </body>
    </html>
  );
}
