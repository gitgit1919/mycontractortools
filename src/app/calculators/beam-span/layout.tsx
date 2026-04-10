import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beam Span Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Estimate maximum allowable beam spans for lumber and LVL beams based on IRC residential tables. Select beam size, species, and load type to find the right beam for your project.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far can a beam span without support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maximum span depends on beam size, species, grade, and load. A doubled 2x10 Douglas Fir beam can typically span 8-10 feet under normal residential loads. LVL beams of the same depth can span significantly farther.",
      },
    },
    {
      "@type": "Question",
      name: "What size beam do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beam size is determined by the span, tributary load width, species, and grade. Use IRC span tables or an engineering calculation to match the beam depth and ply count to your specific load and span requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate beam span?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look up the allowable span in IRC Table R602.7 or R507.5 based on the beam size, lumber species, and the tributary load width it supports. For loads beyond table limits, consult a structural engineer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum span for a 4x8 beam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A solid 4x8 beam in Douglas Fir #2 can span approximately 7-8 feet supporting a 12-foot tributary load width. The exact span varies by species, grade, and whether the beam carries floor, roof, or deck loads.",
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
