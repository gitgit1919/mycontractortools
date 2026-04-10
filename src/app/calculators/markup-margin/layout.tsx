import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markup vs Margin Calculator — Contractor Pricing Tool | MyContractorTools",
  description:
    "Free markup vs margin calculator for contractors. Convert between markup percentage and profit margin. See the critical difference and price your jobs correctly.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between markup and margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markup is the percentage added to cost. Margin is the percentage of selling price that is profit. A 50% markup gives only a 33% margin.",
      },
    },
    {
      "@type": "Question",
      name: "What markup should contractors use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most contractors should use 35-50% markup (26-33% margin) to cover overhead and profit. Specialty work can command higher.",
      },
    },
    {
      "@type": "Question",
      name: "Why is markup vs margin important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using markup when you mean margin is the #1 pricing mistake. A contractor thinking they have 30% profit margin with 30% markup actually only has 23%.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert markup to margin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Margin = Markup / (1 + Markup). For example, 50% markup = 0.50 / 1.50 = 33.3% margin.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
