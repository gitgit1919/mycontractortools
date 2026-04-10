import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snow Load Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate roof snow loads per ASCE 7 standards. Enter ground snow load, roof type, pitch, exposure, and importance factor to get flat and sloped roof snow load values.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate snow load on a roof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the ground snow load (pg) by exposure, thermal, and slope factors per ASCE 7. The formula is pf = 0.7 × Ce × Ct × Is × pg for flat roofs, then adjust for slope.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average snow load per square foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ground snow loads range from 0 to over 100 psf depending on location. Most northern U.S. regions see design loads between 20 and 60 psf, as specified in ASCE 7 tables.",
      },
    },
    {
      "@type": "Question",
      name: "How much does wet snow weigh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wet, packed snow weighs roughly 15-20 pounds per cubic foot, compared to 3-5 pounds per cubic foot for fresh dry snow. A single foot of wet snow can exceed 20 psf on a roof.",
      },
    },
    {
      "@type": "Question",
      name: "When should I worry about snow load on my roof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Be concerned when accumulated snow approaches your roof's design load, which is typically 20-40 psf for residential structures. Warning signs include sagging rafters, cracking sounds, and doors that suddenly stick.",
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
