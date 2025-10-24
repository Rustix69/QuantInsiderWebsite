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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
