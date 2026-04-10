import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Max Lead Cost Calculator — What Can You Afford to Pay Per Lead? | MyContractorTools",
  description: "Calculate the maximum you can afford to pay for a contractor lead based on your close rate, average job size, and target profit. Stop overpaying for HomeAdvisor, Angi, and Google LSA leads.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should a contractor pay per lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right cost per lead depends on three numbers: your close rate, your average job profit, and the percentage of profit you're willing to spend on marketing. A common rule of thumb: marketing should consume no more than 10–15% of profit on a closed job. So if you close 1 in 5 leads with $1,500 profit per close, you can spend up to $30–$45 per lead.",
      },
    },
    {
      "@type": "Question",
      name: "What is customer acquisition cost (CAC)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAC is the total cost to acquire one paying customer. For contractors, CAC = (Cost Per Lead × Leads Per Customer). If you pay $40 per lead and close 1 in 4 leads, your CAC is $160. CAC must be lower than the profit you make on the average customer for your marketing to be sustainable.",
      },
    },
    {
      "@type": "Question",
      name: "Are HomeAdvisor and Angi leads worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes. Lead aggregator services typically cost $15–$80 per lead and have low close rates (often 5–15%) because the lead is shared with multiple contractors. They make sense if your average job profit is high enough to absorb the cost. Run the numbers in this calculator before signing up: if your max affordable CAC is below the typical platform price, walk away.",
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
