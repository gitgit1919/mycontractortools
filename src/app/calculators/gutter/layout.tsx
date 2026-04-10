import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gutters & Downspout Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate linear feet of gutter, number of downspouts, hangers, end caps, and miters needed for your roof. Size gutters based on roof area and local rainfall intensity.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size gutters do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential homes use 5-inch K-style gutters. Homes with large roof areas or steep pitches in high-rainfall regions may need 6-inch gutters to handle the increased water volume.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate gutter length?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the total length of all roof edges (eaves) where you plan to install gutters. Add 5-10% extra for overlaps at seams, corners, and waste from cutting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between 5-inch and 6-inch gutters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 5-inch gutter handles about 5,520 square feet of roof area in moderate rainfall. A 6-inch gutter handles roughly 40% more water, making it the better choice for large roofs or areas with heavy rainfall.",
      },
    },
    {
      "@type": "Question",
      name: "How many downspouts do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Place one downspout for every 20 to 30 linear feet of gutter, and at least one per gutter run. Each downspout should drain no more than about 1,200 square feet of roof area.",
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
