import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Plumbing Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best plumbing business software. We reviewed ServiceTitan, Housecall Pro, Jobber, FieldPulse, and more for scheduling, dispatching, invoicing, and flat-rate pricing.",
};

const products: SoftwareProduct[] = [
  {
    name: "ServiceTitan",
    rating: 5,
    bestFor: "Large plumbing companies with 10+ techs",
    priceRange: "$250–$500+",
    pros: [
      "Industry-leading plumbing pricebook",
      "Advanced dispatch board with real-time GPS",
      "Membership and maintenance agreement management",
      "Call booking and marketing attribution",
    ],
    cons: [
      "High cost with multi-year contract required",
      "Complex setup — expect 2-3 months onboarding",
      "Too much for small operations",
    ],
    features: ["Pricebook", "Dispatching", "Memberships", "Call tracking", "Reporting", "Mobile app"],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Mid-size plumbing businesses (3–15 techs)",
    priceRange: "$69–$149",
    pros: [
      "Quick to set up and easy for techs to learn",
      "Online booking that feeds directly into schedule",
      "Automated review requests after job completion",
      "Built-in payment processing with financing options",
    ],
    cons: [
      "No native flat-rate pricebook",
      "Inventory tracking is limited",
      "Reporting could be more detailed",
    ],
    features: ["Scheduling", "Dispatching", "Invoicing", "Online booking", "Payments", "Reviews"],
  },
  {
    name: "Jobber",
    rating: 4,
    bestFor: "Small plumbing shops (1–8 employees)",
    priceRange: "$29–$149",
    pros: [
      "Excellent quoting with follow-up reminders",
      "Client hub lets customers approve quotes and pay online",
      "Clean mobile app works well in the field",
      "Two-way QuickBooks sync",
    ],
    cons: [
      "No pricebook for flat-rate service",
      "Basic dispatching — no drag-and-drop board",
      "Limited customization for plumbing workflows",
    ],
    features: ["Quoting", "Scheduling", "Client hub", "Invoicing", "GPS tracking", "Payments"],
  },
  {
    name: "FieldPulse",
    rating: 4,
    bestFor: "Plumbers who want flat-rate pricing without ServiceTitan cost",
    priceRange: "$99–$199",
    pros: [
      "Built-in pricebook at a fraction of ServiceTitan's price",
      "Good job costing and profitability tracking",
      "Customizable forms for inspections",
      "Responsive support team",
    ],
    cons: [
      "Smaller user base — fewer community resources",
      "Some features still being developed",
      "Mobile app needs improvement",
    ],
    features: ["Pricebook", "Dispatching", "Job costing", "Custom forms", "CRM", "Invoicing"],
  },
  {
    name: "Workiz",
    rating: 4,
    bestFor: "Plumbing companies focused on lead conversion",
    priceRange: "$65–$225",
    pros: [
      "Built-in phone system with call recording",
      "Lead management pipeline",
      "Online booking and instant scheduling",
      "Inventory management",
    ],
    cons: [
      "No plumbing-specific pricebook",
      "Interface can feel overwhelming",
      "Phone system is an add-on cost",
    ],
    features: ["VoIP phone", "Lead management", "Scheduling", "Invoicing", "Inventory", "Payments"],
  },
  {
    name: "GorillaDesk",
    rating: 3,
    bestFor: "Budget plumbing startups",
    priceRange: "$49–$149",
    pros: [
      "Most affordable option with no contracts",
      "Simple and easy to learn",
      "Good basic scheduling and invoicing",
      "Route optimization",
    ],
    cons: [
      "Limited plumbing-specific features",
      "Basic reporting",
      "Fewer integrations",
    ],
    features: ["Scheduling", "Routing", "Invoicing", "CRM", "Estimates", "Payments"],
  },
];

export default function BestPlumbingSoftware() {
  return (
    <ComparisonLayout
      title="Best Plumbing Software (2026)"
      description="We compared the top software platforms for plumbing contractors based on scheduling, dispatching, pricebook support, invoicing, and value for money."
      trade="Plumbing"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Running a plumbing business means juggling emergency calls, scheduled maintenance, multi-day
            installations, and a team of techs spread across town. The right software keeps your schedule
            organized, your invoices going out on time, and your cash flow healthy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For most plumbing businesses, the choice comes down to three tiers: ServiceTitan for large
            operations that need a full pricebook and marketing analytics, Housecall Pro or Jobber for
            growing shops that want simplicity and solid core features, and FieldPulse for those who want
            flat-rate pricing capability without the enterprise price tag.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We evaluated each platform on the features that matter most to plumbers: emergency dispatch
            handling, flat-rate pricebook support, inspection forms, parts tracking, and the ability to
            manage both service calls and larger installation projects.
          </p>
        </>
      }
      buyerGuideContent={
        <>
          <p className="mb-3">Key factors for plumbing contractors choosing software:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Emergency dispatch:</strong> Plumbing emergencies are your highest-margin calls. You need software that lets you quickly reassign techs and notify customers with ETAs.</li>
            <li><strong>Flat-rate pricebook:</strong> If you do residential service, presenting flat-rate options increases average ticket size. ServiceTitan and FieldPulse have this built in.</li>
            <li><strong>Photo and inspection forms:</strong> Before-and-after photos and digital inspection reports build trust and justify pricing. Make sure your app supports this.</li>
            <li><strong>Parts and inventory:</strong> Tracking parts on the truck prevents wasted trips to the supply house. This is especially important for plumbing with diverse fittings and fixtures.</li>
            <li><strong>Payment processing:</strong> Collecting payment in the field speeds up cash flow. Look for built-in card processing or integration with payment platforms.</li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">What is the best free plumbing software?</h3>
              <p>There is no truly free option that handles dispatching, invoicing, and scheduling well. Jobber offers the most affordable starting point at $29/month, which is less than the cost of one service call.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Should I use plumbing-specific software or a general tool?</h3>
              <p>General FSM tools like Jobber and Housecall Pro work well for most plumbing businesses. You only need plumbing-specific features if you rely heavily on flat-rate pricing with a pricebook, in which case ServiceTitan or FieldPulse are better choices.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">How long does it take to set up plumbing software?</h3>
              <p>Simple tools like Jobber can be set up in a day. Housecall Pro takes about a week. ServiceTitan typically requires 2-3 months of onboarding with a dedicated implementation team.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
