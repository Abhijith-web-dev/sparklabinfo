import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SparkLabInfo - Engineering the Future of Business",
    template: "%s | SparkLabInfo",
  },
  description: "SparkLabInfo delivers innovative, scalable, and secure IT solutions to accelerate your digital transformation. Expert web development, cloud solutions, and digital strategy.",
  keywords: ["IT Solutions", "Web Development", "Cloud Computing", "Digital Transformation", "Software Engineering", "SparkLabInfo", "Tech Consultancy"],
  authors: [{ name: "SparkLabInfo Team" }],
  creator: "SparkLabInfo",
  publisher: "SparkLabInfo",
  metadataBase: new URL('https://sparklabinfo.netlify.app'), // Replace with actual domain when deployed
  openGraph: {
    title: "SparkLabInfo - Engineering the Future of Business",
    description: "Innovative IT solutions to accelerate your growth. We build scalable, high-performance digital products.",
    url: 'https://sparklabinfo.netlify.app',
    siteName: 'SparkLabInfo',
    images: [
      {
        url: '/logo.png', // Ideally a larger OG image
        width: 800,
        height: 600,
        alt: 'SparkLabInfo Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SparkLabInfo - Engineering the Future",
    description: "Innovative IT solutions to accelerate your growth.",
    images: ['/logo.png'], // Ideally a larger Twitter card image
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
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
