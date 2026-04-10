import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voltage Drop Calculator — Wire Size & NEC Compliance | MyContractorTools",
  description: "Free voltage drop calculator. Calculate voltage drop percentage, wire sizing, and NEC code compliance for electrical circuits. Copper and aluminum wire, single and three-phase.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is acceptable voltage drop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The NEC recommends a maximum 3% voltage drop for branch circuits and 5% total for the combination of feeder and branch circuits. For a 120V circuit, that means no more than 3.6V drop on the branch circuit. Sensitive equipment may require tighter limits of 1-2%.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate voltage drop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the formula: Voltage Drop = (2 x Length x Current x Resistance) / 1000, where length is the one-way distance in feet, current is in amps, and resistance is the wire resistance per 1000 feet. For single-phase circuits, multiply by 2 for the round trip. For three-phase, multiply by 1.732.",
      },
    },
    {
      "@type": "Question",
      name: "When does voltage drop matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voltage drop becomes significant on long wire runs, high-current circuits, and smaller wire gauges. Common problem scenarios include detached garages, well pumps, outbuildings, and long lighting runs. Motors and sensitive electronics are especially affected by excessive voltage drop.",
      },
    },
    {
      "@type": "Question",
      name: "How do I fix voltage drop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective solution is to increase the wire gauge (use a larger wire). You can also shorten the wire run, reduce the load on the circuit, or increase the supply voltage. For long runs, switching from 120V to 240V cuts the current in half and reduces voltage drop by 75%.",
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
