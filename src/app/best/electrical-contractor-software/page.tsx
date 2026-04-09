import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Electrical Contractor Software (2026) — Top 5 Compared",
  description:
    "Compare the best electrical contractor software for service businesses. We reviewed pricing, features, and ease of use for ServiceTitan, Housecall Pro, Jobber, FieldPulse, and Workiz.",
};

const products: SoftwareProduct[] = [
  {
    name: "ServiceTitan",
    rating: 5,
    bestFor: "Large electrical companies ($1M+ revenue)",
    priceRange: "$250–$500+",
    pros: [
      "Industry-leading dispatching with real-time GPS tracking",
      "Built-in pricebook with electrical flat-rate pricing",
      "Marketing ROI tracking to measure ad spend per lead",
      "Membership program management for maintenance contracts",
    ],
    cons: [
      "Expensive — requires multi-year contract commitment",
      "Long onboarding process (6-8 weeks typical)",
      "Overkill for shops with fewer than 5 electricians",
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
    bestFor: "Mid-size electrical businesses (5–20 techs)",
    priceRange: "$69–$149",
    pros: [
      "Intuitive interface — most electricians learn it in a day",
      "Online booking lets customers schedule service calls directly",
      "Built-in payment processing with next-day deposits",
      "Automated review requests after job completion",
    ],
    cons: [
      "No built-in electrical pricebook for flat-rate jobs",
      "Limited job costing and profitability reporting",
      "Customer support response times vary during busy periods",
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
    bestFor: "Small electrical shops (1–10 employees)",
    priceRange: "$29–$149",
    pros: [
      "Clean, simple interface that works well on mobile",
      "Strong quoting with automated follow-up reminders",
      "Client hub lets customers approve quotes and pay online",
      "Most affordable option for solo electricians",
    ],
    cons: [
      "Not electrical-specific — lacks built-in code references",
      "Basic dispatching compared to ServiceTitan",
      "Limited inventory and parts tracking",
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
    bestFor: "Electrical contractors focused on job costing",
    priceRange: "$99–$199",
    pros: [
      "Detailed job costing tracks labor, materials, and overhead per job",
      "Built-in pricebook at a fraction of ServiceTitan's cost",
      "Customizable forms for inspection reports and checklists",
      "Responsive customer support with dedicated onboarding",
    ],
    cons: [
      "Smaller user community means fewer online resources",
      "Mobile app performance can be inconsistent",
      "Fewer third-party integrations than larger competitors",
    ],
    features: [
      "Pricebook",
      "Job costing",
      "Dispatching",
      "Invoicing",
      "Custom forms",
      "CRM",
      "Payments",
    ],
  },
  {
    name: "Workiz",
    rating: 4,
    bestFor: "Electrical companies focused on lead tracking",
    priceRange: "$65–$225",
    pros: [
      "Built-in VoIP phone system tracks every inbound call",
      "Lead management pipeline shows conversion rates by source",
      "Online booking widget integrates with your website",
      "Real-time team messaging for coordination between jobs",
    ],
    cons: [
      "No built-in electrical pricebook or flat-rate support",
      "Interface can feel cluttered with all features enabled",
      "Phone system adds to monthly cost on top of base price",
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

export default function BestElectricalContractorSoftware() {
  return (
    <ComparisonLayout
      title="Best Electrical Contractor Software (2026)"
      description="We compared the top field service management platforms for electrical contractors based on pricing, electrical-specific features, ease of use, and value for money. Here are our top picks."
      trade="Electrical"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Running an electrical contracting business means juggling permits, inspections, multi-phase projects,
            and service calls — often all in the same week. The right software keeps your scheduling tight, your
            invoicing fast, and your job costing accurate. The wrong choice burns time and money.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For large electrical companies doing $1M+ in revenue, ServiceTitan remains the gold standard with its
            pricebook, advanced dispatching, and marketing analytics. Mid-size shops get the best value from
            Housecall Pro or FieldPulse, especially if job costing matters to you. Solo electricians and small
            shops should start with Jobber — it handles the basics well at a price that makes sense.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We evaluated each platform on how well it handles electrical-specific workflows: multi-phase project
            scheduling, permit tracking, inspection forms, panel schedule documentation, and flat-rate pricing
            for residential service work.
          </p>
        </>
      }
      buyerGuideContent={
        <>
          <p className="mb-3">When evaluating electrical contractor software, prioritize these factors:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Load calculation integration:</strong> If you do residential panel upgrades or new construction, look for software that integrates with or supports load calculation documentation alongside your estimates.</li>
            <li><strong>Permit tracking:</strong> Electrical work almost always requires permits. Your software should track permit status, inspection dates, and approval workflows so nothing falls through the cracks.</li>
            <li><strong>Multi-phase project scheduling:</strong> Electrical projects often span rough-in, trim-out, and final phases across weeks. Your scheduling tool needs to handle multi-visit jobs tied to the same project.</li>
            <li><strong>NEC code references:</strong> Some platforms support attaching code references or compliance notes to job records, which helps with inspections and customer documentation.</li>
            <li><strong>Inspection forms:</strong> Custom digital forms for panel inspections, circuit testing, and safety checklists save time and create a professional record for every job.</li>
            <li><strong>Flat-rate pricebook:</strong> Residential service electricians need a pricebook to present upfront pricing. Check whether the software includes one or supports importing your own.</li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">What is the best software for a one-person electrical shop?</h3>
              <p>Jobber is the best starting point. It covers quoting, scheduling, invoicing, and payments at an affordable price, and the mobile app works well on job sites.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Do I need electrical-specific software or will a general FSM tool work?</h3>
              <p>General tools like Jobber and Housecall Pro work well for most electrical businesses. You only need electrical-specific features if you do high-volume flat-rate residential service and want a built-in pricebook.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">How important is job costing for electrical contractors?</h3>
              <p>Very important. Electrical jobs involve expensive materials (panels, wire, breakers) and variable labor times. Without job costing, you cannot tell which jobs are profitable. FieldPulse and ServiceTitan handle this best.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Can these tools track permits and inspections?</h3>
              <p>ServiceTitan and FieldPulse offer the best permit and inspection tracking through custom workflows and forms. With Jobber and Housecall Pro, you can use notes and tags, but there is no dedicated permit tracking feature.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
