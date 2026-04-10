import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insulation Calculator — R-Value, Batts & Coverage | MyContractorTools",
  description: "Free insulation calculator. Estimate insulation batts, bags, or sheets by R-value, area, and type. Covers fiberglass, cellulose, spray foam, and mineral wool.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much insulation do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure the total square footage of the area to insulate (walls, attic floor, or crawlspace). For batts, divide by the coverage per package listed on the label. For blown-in, calculate the cubic footage needed by multiplying area by the required depth for your target R-value.",
      },
    },
    {
      "@type": "Question",
      name: "What R-value do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "R-value requirements depend on your climate zone and the area being insulated. Attics in cold climates (zones 5-8) need R-49 to R-60. Exterior walls typically need R-13 to R-21. Floors over unconditioned spaces need R-25 to R-30. Check the DOE climate zone map for your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate insulation for an attic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure your attic floor area in square feet. Determine the existing insulation R-value and subtract from your target R-value to find how much to add. For blown-in cellulose, you need about 1 inch of depth per R-3.5. A 1,000 sq ft attic going from R-19 to R-49 needs roughly 8.5 inches of additional blown-in cellulose.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest insulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiberglass batts are the most affordable option at $0.30-$0.50 per square foot for R-13 wall insulation. Blown-in cellulose is cost-effective for attics at $0.50-$0.80 per sq ft installed. Spray foam costs the most at $1.50-$3.50 per sq ft but provides the highest R-value per inch and air sealing.",
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
