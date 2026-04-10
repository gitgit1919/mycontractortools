import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator — 1099 Contractor Tax Estimator | MyContractorTools",
  description: "Free self-employment tax calculator for contractors. Estimate Social Security, Medicare, and income taxes. Calculate quarterly estimated tax payments for 1099 income.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is self-employment tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The self-employment tax rate is 15.3% on net earnings: 12.4% for Social Security (on income up to $168,600 in 2024) and 2.9% for Medicare. An additional 0.9% Medicare surtax applies to earnings above $200,000 for single filers. You can deduct half of your SE tax from your adjusted gross income.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate self-employment tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with your net self-employment income (revenue minus business expenses). Multiply by 92.35% (0.9235) to get the taxable base. Then multiply that by 15.3% for the SE tax amount. For example, $100,000 net income results in $92,350 taxable base and $14,130 in SE tax.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reduce self-employment tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective strategy is forming an S-Corp, which lets you pay yourself a reasonable salary (subject to payroll tax) and take remaining profits as distributions (not subject to SE tax). You can also maximize business deductions, contribute to a SEP-IRA or Solo 401k, and deduct health insurance premiums.",
      },
    },
    {
      "@type": "Question",
      name: "What is the QBI deduction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Qualified Business Income (QBI) deduction lets self-employed individuals deduct up to 20% of their qualified business income from their taxable income. For contractors filing under $191,950 (single) or $383,900 (married) in 2024, the full 20% deduction generally applies. This reduces income tax but does not reduce self-employment tax.",
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
