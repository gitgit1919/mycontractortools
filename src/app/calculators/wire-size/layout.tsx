import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wire Size Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate minimum wire size (AWG) based on amperage, distance, voltage, and allowable voltage drop. Includes NEC ampacity references for copper and aluminum conductors.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What wire size do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wire size depends on amperage, circuit length, voltage, and allowable voltage drop. For most 20-amp residential circuits under 50 feet, 12-gauge copper wire is standard. Longer runs or higher loads require larger (lower gauge) wire.",
      },
    },
    {
      "@type": "Question",
      name: "How do I determine wire gauge for a circuit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate the total round-trip distance, multiply by current and wire resistivity, then divide by allowable voltage drop. Compare the result to NEC ampacity tables to select the gauge that satisfies both voltage drop and ampacity requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ampacity of 12-gauge wire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per NEC Table 310.16, 12 AWG copper wire rated at 60C (NM-B) has an ampacity of 20 amps. At the 75C rating used for individual THWN conductors, its ampacity is 25 amps.",
      },
    },
    {
      "@type": "Question",
      name: "When should I upsize wire gauge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upsize when voltage drop exceeds 3% on a branch circuit or 5% total from panel to outlet, which is common on long runs over 50-75 feet. Also upsize when ambient temperature or conduit fill derating reduces the wire's effective ampacity below the circuit breaker rating.",
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
