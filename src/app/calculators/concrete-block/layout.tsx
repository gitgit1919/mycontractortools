import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Block (CMU) Calculator — Blocks, Mortar & Rebar | MyContractorTools",
  description: "Free concrete block calculator. Calculate CMU blocks, mortar, rebar, and grout for masonry walls. Includes bond beams, wall ties, and material estimates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many concrete blocks do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the wall area in square feet (height x length), subtract openings, then divide by the face area of one block. For standard 8x8x16 blocks, divide the wall area by 0.89 square feet per block, then add 5-10% for waste and cuts.",
      },
    },
    {
      "@type": "Question",
      name: "What size concrete block is standard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard concrete masonry unit (CMU) is nominally 8x8x16 inches, with actual dimensions of 7-5/8 x 7-5/8 x 15-5/8 inches. The 3/8-inch difference accounts for mortar joints, making layout math simple with 8-inch modules.",
      },
    },
    {
      "@type": "Question",
      name: "How many blocks per square foot of wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard 8x16 concrete blocks with mortar joints cover 1.125 blocks per square foot, or roughly 113 blocks per 100 square feet of wall. This assumes standard 3/8-inch mortar joints between each block.",
      },
    },
    {
      "@type": "Question",
      name: "How much mortar for concrete block wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need approximately 3-4 bags (80 lb each) of mortar mix per 100 standard concrete blocks. The exact amount varies depending on joint thickness and whether you are filling all joints or using face shell bedding only.",
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
