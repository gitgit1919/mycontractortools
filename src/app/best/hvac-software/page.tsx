import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best HVAC Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best HVAC software for service contractors. We reviewed pricing, features, and ease of use for ServiceTitan, Housecall Pro, Jobber, FieldPulse, and more.",
};

const products: SoftwareProduct[] = [
  {
    name: "ServiceTitan",
    rating: 5,
    bestFor: "Large HVAC companies ($1M+ revenue)",
    priceRange: "$250–$500+",
    pros: [
      "Most powerful feature set in the industry",
      "Built-in HVAC pricebook and flat-rate pricing",
      "Advanced dispatching with GPS tracking",
      "Marketing ROI tracking and call recording",
    ],
    cons: [
      "Expensive — requires multi-year contract",
      "Steep learning curve, long onboarding",
      "Overkill for small shops under 5 techs",
    ],
    features: [
      "Dispatching",
      "Pricebook",
      "Invoicing",
      "Marketing",
      "Reporting",
      "Mobile app",
      "Memberships",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Growing HVAC businesses (2–20 techs)",
    priceRange: "$69–$149",
    pros: [
      "Easy to learn — most techs pick it up in a day",
      "Online booking and real-time dispatching",
      "Built-in payment processing",
      "Good QuickBooks integration",
    ],
    cons: [
      "Limited reporting compared to ServiceTitan",
      "No built-in pricebook for flat-rate",
      "Customer support can be slow during peak",
    ],
    features: [
      "Scheduling",
      "Dispatching",
      "Invoicing",
      "Payments",
      "Online booking",
      "Review management",
    ],
  },
  {
    name: "Jobber",
    rating: 4,
    bestFor: "Small HVAC shops (1–10 employees)",
    priceRange: "$29–$149",
    pros: [
      "Very clean, intuitive interface",
      "Strong quoting and follow-up automation",
      "Client hub for self-service",
      "Affordable starting price",
    ],
    cons: [
      "Less HVAC-specific than ServiceTitan",
      "Limited inventory management",
      "Dispatching is basic compared to competitors",
    ],
    features: [
      "Quoting",
      "Scheduling",
      "Invoicing",
      "Client hub",
      "GPS tracking",
      "Payments",
    ],
  },
  {
    name: "FieldPulse",
    rating: 4,
    bestFor: "HVAC contractors wanting flat-rate pricing",
    priceRange: "$99–$199",
    pros: [
      "Built-in pricebook at half the cost of ServiceTitan",
      "Customizable workflows",
      "Good inventory tracking",
      "Responsive customer support",
    ],
    cons: [
      "Smaller user community",
      "Mobile app can be buggy",
      "Fewer integrations than top competitors",
    ],
    features: [
      "Pricebook",
      "Dispatching",
      "Invoicing",
      "Inventory",
      "CRM",
      "Payments",
    ],
  },
  {
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Budget-conscious HVAC startups",
    priceRange: "$49–$149",
    pros: [
      "Affordable with no long-term contracts",
      "Simple scheduling and routing",
      "Chemical tracking (useful for refrigerant logs)",
      "Good for pest control + HVAC combo businesses",
    ],
    cons: [
      "Not as feature-rich for pure HVAC",
      "Reporting is limited",
      "Fewer automation options",
    ],
    features: [
      "Scheduling",
      "Routing",
      "Invoicing",
      "CRM",
      "Chemical tracking",
      "Payments",
    ],
  },
  {
    name: "Workiz",
    rating: 4,
    bestFor: "HVAC companies focused on phone-based sales",
    priceRange: "$65–$225",
    pros: [
      "Built-in VoIP phone system with call tracking",
      "Lead management and sales pipeline",
      "Online booking widget",
      "Real-time team communication",
    ],
    cons: [
      "No built-in HVAC pricebook",
      "Can feel cluttered with all the features",
      "Phone system adds to monthly cost",
    ],
    features: [
      "VoIP phone",
      "Scheduling",
      "Invoicing",
      "Lead tracking",
      "Online booking",
      "Payments",
    ],
  },
];

export default function BestHVACSoftware() {
  return (
    <ComparisonLayout
      title="Best HVAC Software (2026)"
      description="We compared the top field service management platforms for HVAC contractors based on pricing, HVAC-specific features, ease of use, and value for money. Here are our top picks."
      trade="HVAC"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            The right HVAC software can save you hours every week on scheduling, dispatching, invoicing, and
            follow-ups. But choosing the wrong one wastes money and frustrates your team. We reviewed the most
            popular options specifically for HVAC contractors — not generic field service tools.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The biggest decision comes down to company size. If you run a large operation with 20+ techs,
            ServiceTitan is the industry standard — but it comes with a premium price and a long onboarding
            process. For small to mid-size shops, Housecall Pro and Jobber offer the best balance of features
            and affordability. And if you want flat-rate pricing without the ServiceTitan price tag, FieldPulse
            is worth a serious look.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every recommendation below is based on how well the software serves HVAC-specific needs:
            equipment tracking, maintenance agreements, pricebook support, refrigerant logging, and
            multi-day job scheduling.
          </p>
        </>
      }
      buyerGuideContent={
        <>
          <p className="mb-3">When evaluating HVAC software, prioritize these factors:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pricebook support:</strong> Flat-rate pricing is standard in residential HVAC. Make sure the software supports pricebook import or has one built in.</li>
            <li><strong>Dispatching:</strong> You need real-time dispatching with GPS so you can route techs efficiently, especially during peak summer and winter seasons.</li>
            <li><strong>Maintenance agreements:</strong> Recurring service agreements are a huge revenue source. Your software should automate reminders and renewals.</li>
            <li><strong>Mobile app quality:</strong> Your techs live on their phones. The app needs to work reliably on job sites with poor connectivity.</li>
            <li><strong>QuickBooks integration:</strong> Unless the software has built-in accounting, seamless QuickBooks sync is non-negotiable.</li>
            <li><strong>Scalability:</strong> Pick software that fits where you are now but can grow with you. Switching platforms later is painful.</li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">What is the best HVAC software for a one-person shop?</h3>
              <p>Jobber is the best fit. It has an affordable entry price, clean mobile app, and handles quoting, scheduling, and invoicing without overwhelming a solo operator.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Is ServiceTitan worth the cost?</h3>
              <p>For companies doing $1M+ in annual revenue with 10+ technicians, yes. The pricebook, dispatching, and marketing analytics pay for themselves at that scale. For smaller shops, the cost and complexity are hard to justify.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Do I need HVAC-specific software or can I use a general FSM tool?</h3>
              <p>General tools like Jobber and Housecall Pro work well for most HVAC businesses. You only need HVAC-specific features (built-in pricebook, equipment tracking) if you do flat-rate residential service at scale.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Can I switch software later without losing data?</h3>
              <p>Most platforms allow data export, but switching is always disruptive. Customer history, open invoices, and maintenance agreements need to be migrated. Plan to spend 2-4 weeks on any transition. Choose carefully upfront.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
