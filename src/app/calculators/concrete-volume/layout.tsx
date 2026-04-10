import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Calculator — Cubic Yards for Slabs, Footings & Columns | MyContractorTools",
  description: "Free concrete volume calculator. Calculate cubic yards of concrete needed for slabs, footings, columns, and walls. Includes waste factor and bag count estimates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many bags of concrete do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide cubic feet by 0.45 (60lb bags) or 0.6 (80lb bags). A 10x10 slab 4 inches thick needs about 1.23 cubic yards.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate cubic yards of concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply length x width x depth in feet, then divide by 27.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a yard of concrete cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ready-mix concrete costs $125-$175 per cubic yard delivered, depending on location and mix type.",
      },
    },
    {
      "@type": "Question",
      name: "Should I add extra concrete for waste?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, add 10% for waste on simple pours and 15-20% for complex shapes or pumped concrete.",
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
