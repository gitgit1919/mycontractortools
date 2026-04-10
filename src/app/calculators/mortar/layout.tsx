import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortar Calculator — Free Online Calculator | MyContractorTools",
  description: "Free mortar calculator. Calculate bags of mortar mix, cubic feet of mortar, and sand needed for brick and block walls. Supports mortar types N, S, M, and O with accurate coverage rates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much mortar do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For standard modular bricks with 3/8-inch joints, plan on roughly 7 bags (80 lb) of mortar mix per 1,000 bricks. For 8x8x16 concrete blocks, you need about 8.5 bags per 100 blocks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the mortar mix ratio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-mixed mortar bags only need water. For site-mixed mortar, Type N uses 1 part cement to 1 part lime to 6 parts sand, while Type S uses 1 part cement to 0.5 parts lime to 4.5 parts sand.",
      },
    },
    {
      "@type": "Question",
      name: "How many bags of mortar per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a standard brick wall, you need roughly 0.05 bags (80 lb) of mortar per square foot. For 8-inch concrete block walls, plan on about 0.09 bags per square foot of wall area.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Type N and Type S mortar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Type N mortar (750 psi) is a general-purpose mix best for above-grade walls and interior projects. Type S mortar (1,800 psi) has higher bond strength and is recommended for below-grade work, retaining walls, and areas subject to lateral loads.",
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
