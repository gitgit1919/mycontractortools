import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Concrete Contractor Software (2026) — Top 5 Compared",
  description:
    "Compare the best software for concrete and masonry contractors. We reviewed pricing, features, and ease of use for Jobber, Contractor Foreman, Buildertrend, CompanyCam, and Joist.",
};

const products: SoftwareProduct[] = [
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Best overall for concrete contractors",
    priceRange: "$29–$149",
    pros: [
      "Intuitive scheduling keeps pour crews organized across multiple job sites",
      "Fast invoicing workflow gets you paid quickly after each concrete job",
      "Client hub lets homeowners approve estimates and track project status online",
      "Clean mobile app works reliably on job sites with spotty cell coverage",
    ],
    cons: [
      "No built-in concrete mix calculators or material volume estimating",
      "Limited project management depth for large-scale commercial pours",
      "No weather integration for planning pour windows",
    ],
    features: [
      "Scheduling",
      "Quoting",
      "Invoicing",
      "Client hub",
      "Payments",
      "CRM",
    ],
  },
  {
    name: "Contractor Foreman",
    rating: 4,
    bestFor: "Best for project tracking, daily logs, and timesheets",
    priceRange: "$49+",
    pros: [
      "Daily logs let you document pour conditions, weather, and crew hours for every job",
      "Time tracking by crew member helps you understand true labor costs per yard poured",
      "Project management tools organize multi-phase concrete jobs from excavation to finish",
      "Safety management features help track toolbox talks and OSHA compliance",
    ],
    cons: [
      "Dated interface feels less polished than Jobber or Buildertrend",
      "Steep learning curve to configure for concrete-specific workflows",
      "Limited integrations with accounting and payment platforms",
    ],
    features: [
      "Project management",
      "Daily logs",
      "Time tracking",
      "Scheduling",
      "Estimating",
      "Safety management",
    ],
  },
  {
    name: "Buildertrend",
    rating: 4,
    bestFor: "Best for large concrete construction projects",
    priceRange: "$99–$699",
    pros: [
      "Full project management suite handles complex multi-phase concrete jobs",
      "Change order tracking keeps scope changes documented and billable",
      "Subcontractor portal lets you coordinate rebar crews, pump trucks, and finishers",
      "Financial tools track budgets, purchase orders, and job costing in real time",
    ],
    cons: [
      "Expensive for small residential concrete contractors",
      "Complex setup requires significant time investment to configure properly",
      "Overkill for simple flatwork like driveways and sidewalks",
    ],
    features: [
      "Project management",
      "Change orders",
      "Subcontractor portal",
      "Budgeting",
      "Scheduling",
      "Document management",
    ],
  },
  {
    name: "CompanyCam",
    rating: 4,
    bestFor: "Best for photo documentation of concrete work",
    priceRange: "$19/user",
    pros: [
      "Automatic photo organization by project documents every stage of a pour",
      "GPS-stamped and time-stamped photos prove when and where work was completed",
      "Before-and-after comparisons are perfect for rebar inspection and finished surfaces",
      "Easy sharing with inspectors, clients, and general contractors from the field",
    ],
    cons: [
      "Not a full job management platform — no scheduling or invoicing",
      "Needs to be paired with separate software for estimates and billing",
      "Per-user pricing adds up quickly for larger crews",
    ],
    features: [
      "Photo documentation",
      "GPS tagging",
      "Time stamps",
      "Project galleries",
      "Team sharing",
      "Annotations",
    ],
  },
  {
    name: "Joist",
    rating: 4,
    bestFor: "Best free estimating tool for small concrete contractors",
    priceRange: "$0–$25",
    pros: [
      "Free tier covers basic estimating and invoicing for small concrete businesses",
      "Simple estimate builder creates professional-looking quotes from your phone",
      "Digital signatures let customers approve concrete job quotes on the spot",
      "Low cost of entry makes it ideal for solo operators and small crews",
    ],
    cons: [
      "Limited scheduling and project management capabilities",
      "No advanced features like daily logs, timesheets, or material tracking",
      "Basic reporting that lacks job costing and profitability analysis",
    ],
    features: [
      "Estimating",
      "Invoicing",
      "Digital signatures",
      "Client management",
      "Photo attachments",
      "Payments",
    ],
  },
];

export default function BestConcreteContractorSoftware() {
  return (
    <ComparisonLayout
      title="Best Concrete Contractor Software (2026)"
      description="We compared the top software platforms for concrete and masonry contractors based on pricing, project management, photo documentation, and ease of use. Here are our top picks."
      trade="Concrete & Masonry"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Concrete contractors operate on tight timelines where weather, cure times, and crew
            coordination make or break a job. A missed pour window means wasted material and delayed
            schedules. You need software that handles pour scheduling around weather forecasts, tracks
            material orders and mix specifications, and keeps daily logs that document conditions for
            every placement. Generic business software handles invoicing, but it does not understand the
            unique demands of concrete work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For most concrete contractors, Jobber provides the best all-around platform for scheduling
            crews, sending estimates, and getting paid. If you run larger commercial projects with
            subcontractors and change orders, Buildertrend offers the project management depth you need.
            Contractor Foreman is the best choice for detailed daily logs and time tracking. CompanyCam
            solves the photo documentation problem that every concrete contractor faces — proving what
            the rebar looked like before the pour, or what the finished surface looked like at handoff.
            And if you are a small operation watching every dollar, Joist gives you free estimating and
            invoicing to get started.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We evaluated each platform based on what matters most for concrete businesses: pour
            scheduling and crew coordination, material quantity tracking, photo documentation for
            inspections and disputes, weather awareness for planning, and the ability to manage
            subcontractors like pump truck operators and finishing crews.
          </p>
        </>
      }
      buyerGuideContent={
        <>
          <p className="mb-3">When evaluating software for your concrete business, prioritize these factors:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pour scheduling:</strong> Concrete work is weather-dependent and time-sensitive. Your software should make it easy to schedule pours, assign crews, and adjust timelines when rain or temperature changes force delays. Look for drag-and-drop scheduling with calendar views that show crew availability across multiple job sites.</li>
            <li><strong>Material tracking:</strong> Knowing how many yards of concrete you need, which mix design to order, and when the truck needs to arrive is critical. The best tools let you track material quantities per job, log delivery tickets, and compare estimated versus actual usage to improve future bids.</li>
            <li><strong>Photo documentation:</strong> Concrete work gets covered up — rebar, vapor barriers, and subgrade prep are invisible once the pour is done. Photo documentation with GPS and time stamps protects you during inspections and disputes. CompanyCam leads here, but check whether your primary tool supports photo attachments per job.</li>
            <li><strong>Weather integration:</strong> A surprise rainstorm can ruin a fresh pour. Software that integrates weather forecasts into your scheduling view helps you plan pour windows and avoid costly weather-related failures. Few tools offer this natively, so check for integrations or workarounds.</li>
            <li><strong>Subcontractor management:</strong> Most concrete jobs involve coordinating pump trucks, rebar crews, and finishing specialists. Look for software that lets you share schedules with subs, track their hours, and manage their invoices alongside your own crew costs.</li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">What software is best for a small residential concrete contractor?</h3>
              <p>Jobber on its starter plan or Joist on the free tier. Both handle estimating, invoicing, and basic scheduling at a price that makes sense when you are doing driveways, patios, and sidewalks. If you need daily logs and time tracking, Contractor Foreman is worth the step up in price.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">Do concrete contractors need different software than general contractors?</h3>
              <p>Not necessarily different software, but different features matter more. Concrete work demands strong scheduling tools for weather-dependent pours, photo documentation for pre-pour inspections, and material tracking for mix designs and yardage. A general contractor tool like Buildertrend works well for large projects, but smaller concrete companies often find it more than they need.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">How important is photo documentation for concrete contractors?</h3>
              <p>Extremely important. Concrete work gets buried — rebar placement, subgrade compaction, vapor barriers, and reinforcement are all invisible after the pour. Time-stamped, GPS-tagged photos protect you during inspections, warranty claims, and disputes. CompanyCam is the best dedicated tool, but at minimum make sure your primary software supports photo attachments on every job.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">When should a concrete company invest in project management software?</h3>
              <p>As soon as you are running more than one crew or juggling multiple job sites. The cost of a missed pour window or a scheduling conflict between your crews far exceeds the monthly software fee. Even solo operators benefit from professional estimates and organized job records that help win repeat business.</p>
            </div>
          </div>
        </>
      }
    />
  );
}
