import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonotube & Concrete Pier Calculator — Free Online Calculator | MyContractorTools",
  description: "Free sonotube and concrete pier calculator. Calculate concrete volume, bag count, rebar, and J-bolts for pier foundations. Supports 8 to 16 inch diameter piers with accurate volume calculations.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size Sonotube do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sonotube size depends on the load it must carry. For deck posts, 8-inch tubes handle light loads while 12-inch tubes are standard for most residential decks. Larger structures may require 16-inch or bigger tubes.",
      },
    },
    {
      "@type": "Question",
      name: "How deep should Sonotube footings be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sonotube footings must extend below the local frost line, which ranges from 12 inches in the southern U.S. to 48 inches or more in northern states. Check your local building code for the exact frost depth requirement.",
      },
    },
    {
      "@type": "Question",
      name: "How much concrete for a 12-inch Sonotube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 12-inch diameter Sonotube uses about 0.58 cubic feet of concrete per linear foot of depth. A 48-inch deep tube requires roughly 2.3 cubic feet, or about three 80-pound bags of concrete.",
      },
    },
    {
      "@type": "Question",
      name: "Do Sonotubes need rebar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rebar is not always required by code for residential Sonotube footings, but it is strongly recommended. A single piece of #4 rebar placed vertically in the center adds significant resistance to lateral and uplift forces.",
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
