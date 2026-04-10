import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Square Footage Calculator — Area for Any Shape | MyContractorTools",
  description: "Free square footage calculator. Calculate area for rectangles, circles, triangles, and L-shaped rooms. Convert between square feet, square yards, and square meters.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate square footage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply length by width in feet. For irregular shapes, break into rectangles, calculate each, and add together.",
      },
    },
    {
      "@type": "Question",
      name: "How many square feet is a 12x12 room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "144 square feet.",
      },
    },
    {
      "@type": "Question",
      name: "How do I measure square footage for flooring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure each room's length and width, multiply, add all rooms together, then add 10% for waste and cuts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between square feet and linear feet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Square feet measures area (length x width). Linear feet measures length only (one dimension).",
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
