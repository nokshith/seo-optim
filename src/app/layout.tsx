import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Navbar from "./components/Navbar";
import StructuredData from "./components/StructuredData";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "DaVinci - AI-Powered Smart Manufacturing Platform",
    template: "%s | DaVinci Manufacturing"
  },
  description: "Transform your manufacturing operations with DaVinci's AI-powered platform. Real-time analytics, predictive maintenance, quality management, and ERP integration for smarter factory operations.",
  keywords: ["AI manufacturing", "smart manufacturing", "MES", "predictive analytics", "industrial IoT", "factory automation", "quality management", "ERP integration"],
  authors: [{ name: "DaVinci Manufacturing" }],
  creator: "DaVinci Manufacturing",
  publisher: "DaVinci Manufacturing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.davincism.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.davincism.io',
    title: 'DaVinci - AI-Powered Smart Manufacturing Platform',
    description: 'Transform your manufacturing operations with DaVinci\'s AI-powered platform. Real-time analytics, predictive maintenance, and operational excellence.',
    siteName: 'DaVinci Manufacturing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DaVinci - AI-Powered Smart Manufacturing Platform',
    description: 'Transform your manufacturing operations with DaVinci\'s AI-powered platform.',
    creator: '@davincimanufacturing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Baloo+2&family=Akatab&family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F54E00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DaVinci" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <PerformanceOptimizer />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-P82874WN" />
        <GoogleAnalytics gaId="G-E9R67YP7JF" />
      </body>
    </html>
  );
}
