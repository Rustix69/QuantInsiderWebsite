import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quant Finance Talks & Masterclasses | Quant Insider",
  description: "Watch expert talks and masterclasses on quantitative finance, algorithmic trading, derivatives pricing, and machine learning for finance.",
  alternates: {
    canonical: '/talks',
  },
};

export default function TalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

