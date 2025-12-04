import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quant Finance Events & Workshops | Quant Insider",
  description: "Explore Quant Insider's events, workshops, and conferences at top institutions like IITs, BSE, and Columbia University. Join our quant finance community.",
  alternates: {
    canonical: '/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

