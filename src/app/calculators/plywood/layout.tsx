import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plywood & Sheathing Calculator — Free Online Calculator | MyContractorTools",
  description: "Free plywood calculator. Calculate the number of plywood sheets needed for your project based on area dimensions, sheet size, thickness, and waste percentage. Includes weight and cost estimates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many sheets of plywood do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the total area in square feet by 32 (the area of a standard 4x8 sheet). Add 10-15% for waste from cuts and odd-shaped areas. For example, a 500 square foot floor needs about 17-18 sheets.",
      },
    },
    {
      "@type": "Question",
      name: "What are standard plywood sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common plywood sheet is 4 feet by 8 feet (32 square feet). Thicknesses range from 1/4 inch to 3/4 inch. Some suppliers also carry 4x10 and 5x5 sheets for specialized applications.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should subfloor plywood be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use 3/4-inch (23/32\") tongue-and-groove plywood for subfloors with joists spaced 16 inches on center. For joists spaced 24 inches on center, use 7/8-inch or 1-1/8-inch panels to prevent flex and squeaking.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between CDX and BCX plywood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CDX has a C-grade front face and D-grade back with exterior glue, making it a cost-effective choice for roof sheathing and subfloors. BCX has a smoother B-grade front face and costs more, but is better when one side will be visible.",
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
