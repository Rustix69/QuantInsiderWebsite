import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team - Quant Insider Careers",
  description: "Join Quant Insider and help democratize quantitative finance education. Explore career opportunities in quant training and algo trading.",
  alternates: {
    canonical: '/hiring',
  },
};

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

