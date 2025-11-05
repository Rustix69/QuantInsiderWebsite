import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions - Algorithmic Trading Platform | Quant Insider",
  description: "Powerful algorithmic trading solutions and quant technology for enterprises. Explore our algo trading platform and quantitative finance tools.",
  alternates: {
    canonical: '/enterprise',
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

