import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import GridPattern from "./components/ui/grid-pattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quant Insider – Master Algorithmic & Quant Finance",
  description: "Quant Insider is a 360° ecosystem for Quant Finance — offering education, trading technology, and risk analytics to empower data-driven investors.",
  keywords: [
    "quant",
    "quantitative finance",
    "quant education",
    "algorithmic trading",
    "quant finance courses",
    "quant interview preparation",
    "quant career",
    "algo trading",
    "quantitative strategies",
    "finance education",
    "quant developer",
    "trading technology",
    "risk analytics",
    "quant jobs",
    "quantitative analysis",
    "financial modeling",
    "quant training",
    "derivatives pricing",
    "machine learning finance"
  ],
  authors: [{ name: "Quant Insider" }],
  openGraph: {
    title: "Quant Insider – Quantitative Finance Education & Algo Trading Platform",
    description: "Master quantitative finance, algorithmic trading, and launch your quant career with expert training and mentorship from top institutions.",
    url: "https://quantinsider.io",
    siteName: "Quant Insider",
    type: "website",
    images: [
      {
        url: "/landing.png",
        width: 1200,
        height: 630,
        alt: "Quant Insider - Quantitative Finance Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quant Insider – Quantitative Finance Education",
    description: "Master quant finance, algo trading, and launch your quant career with expert training.",
    images: ["/landing.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Quant Insider",
    "description": "Premier quantitative finance education platform offering algo trading courses, quant interview preparation, and career mentorship",
    "url": "https://quantinsider.io",
    "logo": "https://quantinsider.io/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/quantinsider"
    ],
    "areaServed": "Worldwide",
    "availableLanguage": "English",
    "keywords": "quant, quantitative finance, algorithmic trading, quant education, finance courses, quant career",
    "offers": {
      "@type": "EducationalOccupationalProgram",
      "name": "Quantitative Finance Education Programs",
      "description": "Comprehensive quant education including interview preparation, masterclasses, and algorithmic trading courses",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Quant Insider"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridPattern className='bg-gradient' />
        <main className='min-h-screen relative'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
