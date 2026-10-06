import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Nonga254 | Portfolio",
    template: "%s | Nonga254"
  },
  description: "Nonga254's personal portfolio — building secure web applications, exploring cybersecurity, and leveraging AI to create scalable solutions.",
  
  // Keywords for SEO
  keywords: ["portfolio", "web developer", "cybersecurity", "AI", "Next.js", "TypeScript", "React", "software engineer"],
  
  // Author
  authors: [{ name: "Nonga254", url: "https://nonga254.vercel.app" }],
  
  // Open Graph (for social media sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Nonga254 | Portfolio",
    description: "Building secure web applications, exploring cybersecurity, and leveraging AI to create scalable solutions.",
    url: "https://nonga254.vercel.app",
    siteName: "Nonga254 Portfolio",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Nonga254 Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card (for Twitter/X sharing)
  twitter: {
    card: "summary_large_image",
    title: "Nonga254 | Portfolio",
    description: "Building secure web applications, exploring cybersecurity, and leveraging AI to create scalable solutions.",
    images: ["/og-image.png"], // Same image as Open Graph
    creator: "@yourtwitterhandle", // Optional: add your Twitter handle
  },
  
  // Icons (for favicon and mobile)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Canonical URL (helps prevent duplicate content issues)
  alternates: {
    canonical: "https://nonga254.vercel.app",
  },
  
  // Verification (for Google Search Console, etc.)
  verification: {
    google: "your-google-verification-code", // Add when you have one
  },
  
  // Viewport is now handled by the separate export in Next.js 15
  // If you need custom viewport settings, add a separate export:
  // export const viewport: Viewport = { ... }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}