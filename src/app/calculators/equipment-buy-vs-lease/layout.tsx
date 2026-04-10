import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Buy vs Lease Calculator — Truck, Skid Steer, Lift | MyContractorTools",
  description: "Compare buying vs leasing your next truck, excavator, lift, or skid steer. See total cost of ownership, monthly cash flow impact, and which option wins for your situation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should a contractor buy or lease equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buying wins on long-term total cost when you keep the equipment past the loan term and use it heavily. Leasing wins on cash flow, lets you swap into newer equipment every few years, and bundles maintenance on many programs. The right answer depends on how long you'll keep it, how heavily you'll use it, and how tight your cash flow is right now.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total cost of owning a truck or piece of equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total cost includes the down payment, all loan payments, interest, insurance, maintenance, and registration over the period you own it — minus the resale value at the end. Most contractors only compare the monthly payment, which hides the real number by 30–50%.",
      },
    },
    {
      "@type": "Question",
      name: "Is leasing equipment tax deductible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lease payments are generally fully deductible as a business expense in the year paid. Purchased equipment can be depreciated over its useful life or expensed under Section 179 (up to the annual limit) if it qualifies. The tax outcome can shift the buy-vs-lease answer by thousands — talk to your CPA before signing.",
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
