import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Load Calculator — Panel Size & Amp Calculator | MyContractorTools",
  description: "Free electrical load calculator. Determine total electrical load and service panel size requirements. Calculate amps, watts, and breaker sizing for residential and commercial.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate total electrical load?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add up the wattage of all circuits and appliances. Divide total watts by 240 volts to get amps needed.",
      },
    },
    {
      "@type": "Question",
      name: "What size electrical panel do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most modern homes need 200-amp service. Homes with EV chargers, pools, or shops may need 400-amp.",
      },
    },
    {
      "@type": "Question",
      name: "How many amps does a house use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Average home uses 100-200 amps. Peak usage during summer with AC can reach 150+ amps.",
      },
    },
    {
      "@type": "Question",
      name: "When do I need to upgrade my electrical panel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When adding EV chargers, central AC, hot tubs, or if you have a fuse box or 100-amp panel in a large home.",
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
