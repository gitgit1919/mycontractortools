import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Material Calculator — Mulch, Gravel & Topsoil | MyContractorTools",
  description: "Free landscaping material calculator. Calculate cubic yards of mulch, gravel, topsoil, and other materials needed. Estimate coverage area and material costs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much mulch do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the area in square feet and multiply by the desired depth in feet, then divide by 27 to convert to cubic yards. One cubic yard of mulch covers about 162 square feet at 2 inches deep.",
      },
    },
    {
      "@type": "Question",
      name: "How deep should mulch be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply 2 to 3 inches of mulch for most landscape beds. Avoid exceeding 4 inches, as overly thick mulch can suffocate plant roots and trap excess moisture.",
      },
    },
    {
      "@type": "Question",
      name: "How many cubic yards of mulch for my yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate square footage of all beds, multiply by depth in feet, and divide by 27. For example, 500 square feet at 3 inches deep equals about 4.6 cubic yards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between cubic yards and cubic feet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One cubic yard equals 27 cubic feet. Bulk landscaping materials like mulch, gravel, and topsoil are typically sold by the cubic yard, while bagged products are often measured in cubic feet.",
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
