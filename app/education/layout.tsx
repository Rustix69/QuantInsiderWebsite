import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quant Education & Training | Quant Insider - Interview Prep & Courses",
  description: "Learn quantitative finance with expert-led courses. Quant interview preparation, masterclasses from Goldman Sachs & Barclays experts, algorithmic trading courses, and personalized mentorship for quant careers.",
  keywords: [
    "quant education",
    "quant interview preparation",
    "quantitative finance courses",
    "quant training",
    "quant finance masterclass",
    "algorithmic trading courses",
    "quant career training",
    "derivatives pricing course",
    "machine learning for trading",
    "quant job preparation",
    "financial modeling courses",
    "quant mentorship",
    "quantitative analysis training",
    "quant developer courses",
    "trading strategies education"
  ],
  openGraph: {
    title: "Quant Education & Training - Learn Quantitative Finance | Quant Insider",
    description: "Expert-led quant education: interview prep, masterclasses, algorithmic trading courses, and mentorship to launch your quantitative finance career.",
    url: "https://quantinsider.io/education",
    type: "website",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

