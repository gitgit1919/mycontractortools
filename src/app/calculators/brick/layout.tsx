import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brick Calculator — Bricks, Mortar & Wall Estimator | MyContractorTools",
  description: "Free brick calculator. Estimate number of bricks, mortar bags, sand, and wall ties for masonry construction. Calculate by wall area with multiple brick sizes.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many bricks do I need per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard modular bricks with 3/8-inch mortar joints, you need approximately 6.75 bricks per square foot for a single wythe wall. This accounts for the mortar joint spacing between each brick.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate bricks for a wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the wall height by the wall length to get total square footage, subtract window and door openings, then multiply by 6.75 bricks per square foot. Add 5-10% for waste, cuts, and breakage.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard brick size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard modular brick in the US measures 3-5/8 x 2-1/4 x 7-5/8 inches. With a standard 3/8-inch mortar joint, the nominal dimensions become 4 x 2-2/3 x 8 inches, which simplifies layout calculations.",
      },
    },
    {
      "@type": "Question",
      name: "How much mortar do I need per 1,000 bricks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need approximately 7-9 bags (70 lb each) of pre-mixed mortar per 1,000 standard modular bricks. The exact amount depends on joint thickness, brick size, and the mason's technique.",
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
