import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Quant Insider | Quantitative Finance Education Leaders",
  description: "Learn about Quant Insider's mission to democratize quantitative finance education. Meet our expert team and discover our journey in quant training.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

