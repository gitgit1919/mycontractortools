import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Floor Joist Span Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Find maximum floor joist spans per IRC tables for 2x6, 2x8, 2x10, and 2x12 joists at 12, 16, and 24 inch spacing. Includes deflection checks and span comparison table.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size floor joist do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Floor joist size depends on span length, spacing, wood species, and load requirements. For typical residential floors with 40 psf live load, 2x8 joists span up to about 12 feet, 2x10 up to 16 feet, and 2x12 up to 20 feet at 16-inch spacing.",
      },
    },
    {
      "@type": "Question",
      name: "How far apart should floor joists be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Floor joists are typically spaced 16 inches on center for most residential construction. Spacing of 12 inches on center provides a stiffer floor with less bounce, while 24-inch spacing is allowed for 2x10 or larger joists under certain conditions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum span for a 2x10 floor joist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 2x10 floor joist in Douglas Fir #2 at 16-inch spacing can span up to approximately 15 feet 5 inches for a 40 psf live load. Maximum span varies by wood species, grade, and spacing per IRC span tables.",
      },
    },
    {
      "@type": "Question",
      name: "When do I need to double floor joists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Double floor joists under load-bearing walls running parallel to the joists, beneath bathtubs, and at openings in the floor system such as stairwells. Doubling provides extra support where point loads or concentrated weight exceed single-joist capacity.",
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
