import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import GridPattern from "./components/ui/grid-pattern";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quantinsider.io'),
  title: "Quant Insider – Master Algorithmic & Quant Finance",
  description: "Quant Insider is a 360° ecosystem for Quant Finance — offering education, trading technology, and risk analytics to empower data-driven investors.",
  alternates: {
    canonical: '/',
  },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://quantinsider.io/#organization",
    "name": "Quant Insider",
    "alternateName": "QI",
    "description": "Premier quantitative finance education platform offering algo trading courses, quant interview preparation, and career mentorship",
    "url": "https://quantinsider.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://quantinsider.io/logo.png",
      "width": 250,
      "height": 60
    },
    "image": "https://quantinsider.io/landing.png",
    "sameAs": [
      "https://www.linkedin.com/company/quantinsider",
      "https://topmate.io/quant_insider"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@quantinsider.io"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "availableLanguage": ["English"],
    "foundingDate": "2020",
    "keywords": "quant, quantitative finance, algorithmic trading, quant education, finance courses, quant career, algo trading, derivatives pricing",
    "knowsAbout": [
      "Quantitative Finance",
      "Algorithmic Trading",
      "Financial Modeling",
      "Derivatives Pricing",
      "Machine Learning in Finance",
      "Risk Analytics"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://quantinsider.io/#website",
    "name": "Quant Insider",
    "description": "Master quantitative finance, algorithmic trading, and launch your quant career",
    "url": "https://quantinsider.io",
    "publisher": {
      "@id": "https://quantinsider.io/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://quantinsider.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const educationalProgramSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Quantitative Finance Education & Training Programs",
    "description": "Comprehensive quant education including interview preparation, masterclasses from Goldman Sachs & Barclays experts, algorithmic trading courses, and mentorship",
    "provider": {
      "@id": "https://quantinsider.io/#organization"
    },
    "educationalCredentialAwarded": "Quant Finance Certificate",
    "occupationalCategory": "Quantitative Analyst",
    "timeToComplete": "P3M",
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "availability": "https://schema.org/InStock"
    },
    "teaches": [
      "Quantitative Finance",
      "Algorithmic Trading",
      "Financial Modeling",
      "Derivatives Pricing",
      "Machine Learning for Trading"
    ]
  };

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="F8gFlV9O2DA1asm74-CzhH99jZSUh3SmQxVW54dzVQ0" />
        
        {/* Google Tag Manager - Script in head */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalProgramSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager - noscript fallback */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <GridPattern className='bg-gradient' />
        <main className='min-h-screen relative'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
