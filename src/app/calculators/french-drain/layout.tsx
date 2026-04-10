import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "French Drain Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate gravel, pipe, and fabric quantities for French drain installations. Includes cubic yards of gravel, linear feet of pipe, landscape fabric, and cost estimates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How deep should a French drain be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A French drain should be 18 to 24 inches deep for yard drainage and at least 24 inches deep for foundation drainage. The trench must be deep enough to sit below the water table or the footing level it is protecting.",
      },
    },
    {
      "@type": "Question",
      name: "What size gravel for a French drain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use 3/4-inch to 1-1/2-inch washed crushed stone for the main fill around the drain pipe. Avoid using pea gravel or limestone, as fine particles can clog the pipe over time. Wrap the gravel in landscape fabric to prevent soil infiltration.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a French drain cost per linear foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally installed French drain costs $25 to $60 per linear foot including materials and labor. DIY installations typically run $8 to $15 per linear foot for materials only, including pipe, gravel, and fabric.",
      },
    },
    {
      "@type": "Question",
      name: "Do French drains need a slope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, French drains require a minimum slope of 1% or about 1 inch of drop per 8 feet of run. A slope of 1-2% ensures water flows by gravity to the discharge point without pooling inside the pipe.",
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
