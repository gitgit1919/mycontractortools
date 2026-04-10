import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Hourly Rate Calculator — What to Charge Per Hour | MyContractorTools",
  description: "Free hourly rate calculator for contractors. Figure out what to charge per hour based on overhead, expenses, desired income, and billable hours. Calculate daily rates too.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my hourly rate as a contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add your desired annual salary, total overhead costs (insurance, vehicle, tools, office), and profit goal. Divide by your billable hours per year (typically 1,200-1,500 hours after accounting for non-billable time). For example, $80K salary + $40K overhead + $20K profit divided by 1,400 hours equals $100/hour.",
      },
    },
    {
      "@type": "Question",
      name: "What should I charge per hour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hourly rates vary widely by trade and location. General contractors typically charge $50-$100/hour, electricians $75-$150/hour, and plumbers $80-$130/hour. Your rate must cover salary, overhead, taxes, insurance, and profit. Never base your rate on what competitors charge without knowing your own costs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I account for overhead in my rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "List all annual business expenses that are not direct job costs: vehicle payments, insurance, tools, office, phone, licenses, marketing, and accounting. Total these costs and divide by your billable hours. Most contractors have $20-$50 per hour in overhead that must be built into their rate.",
      },
    },
    {
      "@type": "Question",
      name: "Should I charge hourly or flat rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat-rate pricing is usually more profitable because you benefit from working efficiently. Hourly works best for unpredictable repair work or time-and-materials contracts. Many successful contractors use flat-rate bids for projects but calculate them based on their hourly rate times estimated hours plus materials.",
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
