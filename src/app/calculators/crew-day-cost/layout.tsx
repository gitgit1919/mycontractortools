import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew Day Cost Calculator — True Daily Cost of Your Field Crew | MyContractorTools",
  description: "Calculate the true daily cost of putting your crew on a job. Includes burdened labor (workers comp, payroll tax, benefits), vehicle, fuel, and overhead. Critical for accurate bidding.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is burdened labor cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burdened labor is the true cost of an employee — base wage plus payroll taxes (FICA, FUTA, SUTA), workers compensation insurance, benefits, paid time off, and any other employer-paid costs. The labor burden multiplier is typically 1.25x to 1.45x base wage for construction trades, with workers comp alone running 5–25% depending on the trade.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my crew day cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add up: (1) burdened wages for every crew member for the day, (2) vehicle and fuel cost per day, (3) tool and small-equipment depreciation, (4) overhead allocation per day. Divide your total by billable field days to convert monthly overhead. The resulting number is your true breakeven cost — never bid below it.",
      },
    },
    {
      "@type": "Question",
      name: "Why is crew day cost important for bidding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most contractors lose money on jobs because they only price the wage, not the burden. A $25/hr employee actually costs you $35–$45/hr loaded, and a 3-man crew with a truck can easily run $1,500–$2,000 a day. If you don't know that number, you can't tell which jobs are profitable and which are bleeding you dry.",
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
