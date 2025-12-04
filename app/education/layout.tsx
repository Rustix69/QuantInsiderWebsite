import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quant Education & Training | Quant Insider - Interview Prep & Courses",
  description: "Learn quantitative finance with expert-led courses. Quant interview preparation, masterclasses from Goldman Sachs & Barclays experts, algorithmic trading courses, and personalized mentorship for quant careers.",
  alternates: {
    canonical: '/education',
  },
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
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Quant Finance Courses",
    "description": "Comprehensive quantitative finance education programs",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "Course",
        "position": 1,
        "name": "Quant Interview Preparation",
        "description": "Comprehensive interview preparation for quantitative finance roles including puzzles, probability, and technical questions",
        "provider": {
          "@type": "Organization",
          "name": "Quant Insider"
        },
        "educationalLevel": "Professional",
        "teaches": ["Quantitative Finance", "Interview Skills", "Problem Solving"]
      },
      {
        "@type": "Course",
        "position": 2,
        "name": "Algorithmic Trading Certificate",
        "description": "Advanced trading strategies and machine learning methods for algorithmic trading",
        "provider": {
          "@type": "Organization",
          "name": "Quant Insider"
        },
        "educationalLevel": "Professional",
        "teaches": ["Algorithmic Trading", "Trading Strategies", "Machine Learning"]
      },
      {
        "@type": "Course",
        "position": 3,
        "name": "Quant Finance MasterClass",
        "description": "Expert masterclasses on derivatives pricing, options trading, and machine learning for trading",
        "provider": {
          "@type": "Organization",
          "name": "Quant Insider"
        },
        "educationalLevel": "Advanced",
        "teaches": ["Derivatives Pricing", "Options Trading", "Machine Learning Finance"]
      },
      {
        "@type": "Course",
        "position": 4,
        "name": "Quant Career Services",
        "description": "Resume review, mock interviews, and personalized career mentorship for quant roles",
        "provider": {
          "@type": "Organization",
          "name": "Quant Insider"
        },
        "educationalLevel": "Professional",
        "teaches": ["Career Development", "Interview Preparation", "Job Search Strategy"]
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quantinsider.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Education",
        "item": "https://quantinsider.io/education"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}

