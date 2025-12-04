import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Quant Insider | Expert Quant Finance Educators",
  description: "Meet the Quant Insider team of quantitative finance experts, algo trading professionals, and educators from top financial institutions.",
  alternates: {
    canonical: '/team',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

