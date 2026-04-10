import { Metadata } from "next";

export const metadata: Metadata = {
  title: "W-2 vs 1099 True Employee Cost Calculator | MyContractorTools",
  description: "Calculate the true cost of a W-2 employee vs a 1099 subcontractor for your contracting business. Includes payroll tax, workers comp, benefits, PTO, and the actual loaded hourly rate.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a W-2 employee really cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A W-2 employee costs roughly 1.25x to 1.45x their base wage when you add payroll taxes (FICA, FUTA, SUTA — about 8–10%), workers compensation (5–25% depending on trade and state), benefits and PTO (5–15%), and other employer costs. A $25/hr employee actually costs you $32–$36/hr fully loaded.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to hire a 1099 subcontractor or a W-2 employee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1099 subs cost less per hour because you don't pay payroll tax, workers comp, or benefits — but their hourly rate is usually higher to cover those costs themselves. W-2 employees give you more control, loyalty, and consistency. The IRS is strict about classification: if you control when, where, and how the work is done, the worker is an employee, not a sub, regardless of what you call them.",
      },
    },
    {
      "@type": "Question",
      name: "What is workers compensation insurance for contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Workers comp covers medical bills and lost wages if an employee is injured on the job. It's required in almost every state for any business with employees. Rates are quoted per $100 of payroll and vary widely by trade: roofing can be 25%+, while general office work is under 1%. Carpenters, electricians, and plumbers typically run 5–15%.",
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
