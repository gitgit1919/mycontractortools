import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Landscaping Software (2026) — Top 5 Compared",
  description:
    "Compare the best landscaping software for lawn care and landscape contractors. We reviewed pricing, features, and ease of use for Jobber, LMN, Aspire, Housecall Pro, and GorillaDesk.",
};

const products: SoftwareProduct[] = [
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Best overall for landscaping businesses",
    priceRange: "$29–$149",
    pros: [
      "Excellent route optimization saves fuel and drive time",
      "Recurring job scheduling handles weekly mowing clients easily",
      "Client hub lets customers approve quotes and pay online",
      "Clean mobile app that crews can use without training",
    ],
    cons: [
      "Limited estimating tools for large landscape installs",
      "No built-in crew time tracking by property",
      "Reporting is basic compared to enterprise options",
    ],
    features: [
      "Scheduling",
      "Route optimization",
      "Quoting",
      "Invoicing",
      "Client hub",
      "Payments",
    ],
  },
  {
    name: "LMN",
    rating: 4,
    bestFor: "Landscapers focused on estimating and budgeting",
    priceRange: "$99–$349",
    pros: [
      "Industry-leading estimating with built-in labor and material pricing",
      "Budget vs. actual tracking shows profitability per job",
      "Time tracking by crew and property for accurate costing",
      "Training resources built by landscape industry veterans",
    ],
    cons: [
      "Steeper learning curve than simpler scheduling tools",
      "Interface feels dated compared to Jobber",
      "Scheduling and dispatching features are less polished",
    ],
    features: [
      "Estimating",
      "Budgeting",
      "Time tracking",
      "CRM",
      "Scheduling",
      "Reporting",
    ],
  },
  {
    name: "Aspire",
    rating: 5,
    bestFor: "Enterprise landscaping companies ($2M+ revenue)",
    priceRange: "$300+",
    pros: [
      "End-to-end platform built for large landscape operations",
      "Detailed job costing with real-time budget tracking",
      "Multi-branch and multi-division support",
      "Purchase order management and vendor tracking",
    ],
    cons: [
      "Expensive — priced for established companies only",
      "Complex setup requires dedicated onboarding",
      "Overkill for companies under 20 employees",
    ],
    features: [
      "Estimating",
      "Job costing",
      "Scheduling",
      "Purchasing",
      "Invoicing",
      "Reporting",
      "CRM",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Lawn care and maintenance businesses",
    priceRange: "$69–$149",
    pros: [
      "Online booking makes it easy for customers to schedule mowing",
      "Automated invoicing and payment collection after each visit",
      "Review management builds your online presence automatically",
      "Simple setup — most lawn care companies are running in a day",
    ],
    cons: [
      "Not designed for large landscape installation projects",
      "No route optimization for daily service routes",
      "Limited crew management and time tracking",
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
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Budget-friendly option for small lawn care companies",
    priceRange: "$49–$149",
    pros: [
      "Most affordable option with no long-term contracts",
      "Route optimization included even on lower plans",
      "Simple recurring job setup for weekly maintenance clients",
      "Built-in chemical tracking for fertilizer and weed control",
    ],
    cons: [
      "Fewer features than Jobber or LMN",
      "Limited estimating for landscape design and install work",
      "Smaller user community and fewer integrations",
    ],
    features: [
      "Scheduling",
      "Route optimization",
      "Invoicing",
      "CRM",
      "Chemical tracking",
      "Payments",
    ],
  },
];

export default function BestLandscapingSoftware() {
  return (
    <ComparisonLayout
      title="Best Landscaping Software (2026)"
      description="We compared the top software platforms for landscaping and lawn care contractors based on pricing, landscaping-specific features, ease of use, and value for money. Here are our top picks."
      trade="Landscaping"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Landscaping businesses live and die by route efficiency, crew scheduling, and accurate estimating.
            When you are managing 50+ recurring maintenance clients and a handful of install projects at the same
            time, the right software keeps everything organized. The wrong one costs you hours every week in
            wasted drive time and manual invoicing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For most landscaping companies, Jobber offers the best overall balance of scheduling, route
            optimization, and client management at a reasonable price. If estimating accuracy and job costing
            are your top priorities, LMN was built specifically for that. Enterprise operations doing $2M+ in
            revenue should look at Aspire for its end-to-end capabilities. And for straightforward lawn care
            maintenance, Housecall Pro and GorillaDesk keep things simple and affordable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We focused our evaluation on what matters most for landscaping: route optimization, recurring service
            management, crew scheduling, seasonal workload planning, property measurement tools, and estimating
            accuracy for both maintenance contracts and installation projects.
          </p>
        </>
      }
      buyerGuideContent={
        <>
          <p className="mb-3">When evaluating landscaping software, prioritize these factors:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Route optimization:</strong> With multiple stops per day, efficient routing saves real money on fuel and drive time. Jobber and GorillaDesk include this; others may need a third-party integration.</li>
            <li><strong>Crew scheduling:</strong> You need to assign crews to properties, track who is where, and manage equipment allocation. Look for drag-and-drop scheduling with crew-level views.</li>
            <li><strong>Recurring service management:</strong> Most landscaping revenue comes from weekly or biweekly maintenance. Your software must handle recurring schedules, skip weeks for weather, and auto-invoice without manual work.</li>
            <li><strong>Seasonal scheduling:</strong> Landscaping is seasonal in most markets. Your tool should handle spring cleanups, fall leaf removal, and snow removal scheduling alongside regular maintenance.</li>
            <li><strong>Property measurement tools:</strong> Accurate property measurements drive accurate estimates. Some tools integrate with satellite measurements; others rely on manual entry.</li>
            <li><strong>Estimating accuracy:</strong> For install projects, you need to estimate labor hours, materials, and equipment rental accurately. LMN and Aspire are the strongest here.</li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">What is the best software for a solo lawn care operator?</h3>
              <p>Jobber on its lowest tier or GorillaDesk. Both handle scheduling, invoicing, and route optimization at an affordable price. GorillaDesk is slightly cheaper; Jobber has a more polished interface.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Do I need different software for lawn care vs. landscape installation?</h3>
              <p>If you only do maintenance, a simple tool like Jobber or Housecall Pro works great. If you also do design-build installation projects, you need better estimating — consider LMN or Aspire for that side of the business.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">How important is route optimization for landscaping companies?</h3>
              <p>Very important. A landscaping company with 40 weekly stops can save 5-10 hours of drive time per week with optimized routing. That translates to real savings in fuel, labor, and vehicle wear.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">When should I upgrade from a basic tool to Aspire or LMN?</h3>
              <p>When you hit $500K-$1M in revenue and find that inaccurate estimates or poor job costing are eating your margins. At that scale, knowing your cost per man-hour per property is the difference between profit and loss.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
