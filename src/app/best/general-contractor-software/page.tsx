import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best General Contractor Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best general contractor software for remodelers, builders, and commercial GCs. We reviewed Buildertrend, Jobber, CoConstruct, Procore, Housecall Pro, and FieldPulse on pricing, features, and real-world fit.",
};

const products: SoftwareProduct[] = [
  {
    name: "Buildertrend",
    rating: 5,
    bestFor: "Remodelers and custom builders ($750K-$5M revenue)",
    priceRange: "$99–$399",
    pros: [
      "Client portal with real-time selections tracking (tile, fixtures, paint colors) — eliminates the spreadsheet chaos that kills remodel projects",
      "Built-in change order management with client approval workflows and automatic budget impact — scope creep gets documented before it eats your margin",
      "Draw schedule and progress billing tied to project milestones — get paid as phases complete instead of chasing final payments",
      "Daily logs with photo documentation organized by project phase — protects you in disputes and keeps clients informed",
      "Sub scheduling with automatic notifications and calendar sync — subs see their schedule without you calling each one",
    ],
    cons: [
      "Starting at $99/mo and scaling to $399/mo, it is expensive for a handyman or solo GC doing small jobs",
      "Learning curve is real — plan 2-4 weeks before your team is fully comfortable, and your office manager will carry the load during setup",
      "Overkill if your projects are same-day or one-week jobs — you are paying for multi-month project management you will not use",
      "Mobile app works but is slower than Jobber or Housecall Pro for quick field updates",
      "No built-in consumer financing option — you will need a standalone tool like Wisetack for large remodel payments",
    ],
    features: [
      "Project management",
      "Client selections portal",
      "Change order tracking",
      "Draw schedules",
      "Sub scheduling",
      "Daily logs + photos",
      "Budget vs actual",
      "Estimating",
    ],
  },
  {
    name: "Jobber",
    rating: 4,
    bestFor: "Handyman and small residential GCs ($0-$300K revenue)",
    priceRange: "$29–$149",
    pros: [
      "Simplest setup in this category — most GCs are scheduling and invoicing within an hour, not days",
      "Quote follow-up automation sends reminders to homeowners who have not responded, recovering 10-15% of lost estimates",
      "Client hub lets customers approve quotes, pay invoices, and request service online — looks professional without the overhead",
      "Starts at $29/mo for a single user — the lowest real entry price for a capable business tool",
      "Batch invoicing saves hours when you are running multiple small jobs per week",
    ],
    cons: [
      "No project management features — cannot track change orders, selections, or multi-phase build schedules",
      "No budget vs actual tracking — you will not know if a job is profitable until it is over and you run the numbers manually",
      "Dispatching is a basic calendar view with no sub coordination or trade-specific scheduling",
      "No draw schedule or progress billing — designed for single-invoice jobs, not milestone-based payments",
      "Not construction-specific — it is used by landscapers, cleaners, and every other service trade",
    ],
    features: [
      "Quoting with follow-ups",
      "Calendar scheduling",
      "Client self-service hub",
      "Batch invoicing",
      "GPS tracking",
      "Payment processing",
      "Job forms",
      "Basic reporting",
    ],
  },
  {
    name: "CoConstruct",
    rating: 4,
    bestFor: "Custom home builders and high-end remodelers ($1M-$5M revenue)",
    priceRange: "$99+",
    pros: [
      "Selection sheet management is the best in the category — clients choose finishes, fixtures, and allowances through a portal with photos and pricing attached",
      "Detailed specification tracking for custom builds — every decision documented and linked to the budget so nothing falls through the cracks",
      "Integrated estimating tied directly to project budgets — change an estimate line item and the budget updates in real time",
      "Client decision tracking shows exactly which selections are pending, approved, or overdue — no more chasing homeowners for answers",
      "Strong warranty tracking after project completion — log claims and schedule callbacks without a separate system",
    ],
    cons: [
      "Narrowly focused on custom residential construction — poor fit for commercial GCs or service-oriented businesses",
      "Interface feels dated compared to Buildertrend and can be complex for simple projects",
      "Mobile app for field teams is weaker than competitors — office-heavy platform that requires your PM to drive it",
      "Fewer third-party integrations — limited options for accounting software beyond QuickBooks",
      "Sub management is less robust than Buildertrend or Procore — better for managing the build than managing the subs",
    ],
    features: [
      "Client selections",
      "Specifications",
      "Estimating",
      "Budgeting",
      "Scheduling",
      "Client portal",
      "Change orders",
      "Warranty tracking",
    ],
  },
  {
    name: "Procore",
    rating: 5,
    bestFor: "Large commercial GCs and builders ($3M+ revenue)",
    priceRange: "$375+",
    pros: [
      "Industry standard for commercial construction — subs and architects already know the platform, which eliminates onboarding friction on large projects",
      "Comprehensive document management with version control — RFIs, submittals, and plan revisions tracked with full audit trail",
      "Subcontractor prequalification and bid management — collect bids, verify insurance, track lien waivers, and manage compliance in one place",
      "Punch list management with photo documentation and assignee tracking — close out projects systematically instead of with a clipboard",
      "Multi-project dashboards give you portfolio-level visibility across all active jobs with real-time budget and schedule status",
    ],
    cons: [
      "Enterprise pricing starts at $375+/mo and scales by annual construction volume — a $5M GC can easily pay $1,000+/mo",
      "Requires annual contract commitment — you cannot try it month-to-month",
      "Massively overbuilt for residential remodels or any GC under $3M revenue — you will use 20% of the features and pay for 100%",
      "Implementation takes 4-8 weeks with dedicated onboarding — not a tool you set up over a weekend",
      "Interface is complex and training is essential — field workers resist adoption more than with simpler tools",
    ],
    features: [
      "Project management",
      "Document management",
      "RFIs + submittals",
      "Bid management",
      "Sub prequalification",
      "Punch lists",
      "Quality + safety",
      "Multi-project dashboards",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Service-oriented GCs and handyman businesses ($0-$300K revenue)",
    priceRange: "$69–$149",
    pros: [
      "Most techs and helpers learn it in a single day — lowest training overhead of any platform here",
      "Wisetack consumer financing built in — lets homeowners finance $3K-15K remodel jobs on the spot, boosting close rates",
      "Online booking lets homeowners self-schedule repairs and small projects, reducing phone time by 20-30%",
      "Real-time GPS dispatching with automatic arrival notifications sent to customers",
      "Solid QuickBooks two-way sync that rarely breaks — keeps your bookkeeper happy",
    ],
    cons: [
      "No project management at all — no change orders, no draw schedules, no multi-phase tracking",
      "No budget vs actual job costing — you know revenue but not profit per job",
      "No sub management features — designed for your own crew, not coordinating 4-5 subcontractors",
      "Reporting is surface-level: revenue and job counts, but no per-project profitability or labor analysis",
      "Built for service calls and repairs, not multi-week construction projects",
    ],
    features: [
      "GPS dispatching",
      "Wisetack financing",
      "Online booking",
      "Automated review requests",
      "Payment processing",
      "QuickBooks sync",
      "Estimate builder",
      "Customer notifications",
    ],
  },
  {
    name: "FieldPulse",
    rating: 4,
    bestFor: "Mid-market GCs wanting job costing without enterprise pricing ($200K-$1M revenue)",
    priceRange: "$99–$199",
    pros: [
      "Built-in job costing tracks labor, materials, and sub costs per project — know your actual margin before the job is done",
      "Customizable multi-option estimates with good/better/best presentation — give homeowners choices that increase average project size",
      "CRM with full customer history — see every past quote, job, and communication when a repeat client calls",
      "Inventory tracking with parts-to-job linking — know exactly what materials went into each project",
      "Responsive support team — real humans who typically reply within an hour, not days",
    ],
    cons: [
      "No client selections portal or draw schedule — not built for custom home builds or large remodels",
      "Smaller user community means fewer YouTube tutorials, Facebook groups, and peer support compared to Buildertrend or Jobber",
      "Mobile app occasionally lags on older Android devices — improving but not bulletproof yet",
      "No sub portal or subcontractor management workflow — you still manage subs via phone and text",
      "Reporting is adequate but not as deep as Buildertrend or Procore — no multi-project portfolio views",
    ],
    features: [
      "Job costing",
      "Multi-option estimates",
      "CRM",
      "Inventory management",
      "GPS dispatching",
      "Payment processing",
      "QuickBooks sync",
      "Reporting",
    ],
  },
];

export default function BestGeneralContractorSoftware() {
  return (
    <ComparisonLayout
      title="Best General Contractor Software (2026)"
      description="We compared the top construction management and field service platforms specifically for general contractors — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to where your GC business actually is right now."
      trade="General Contracting"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your GC Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            &ldquo;General contractor&rdquo; covers everything from a solo handyman doing $80K in
            residential repairs to a commercial builder running $10M in projects. The software
            that fits a handyman will choke a remodeler, and the platform built for a commercial
            GC will bankrupt a small operation. Here is how to think about it based on where
            you actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Handyman / Solo GC</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$200K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are doing residential repairs, small remodels, and odd jobs. You answer the
                phone, do the work, write the invoice, and deposit the check. You need simple
                scheduling and invoicing that keeps you organized without eating your evenings.
                Every dollar counts at this stage — do not overspend on software you will not use.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber ($29/mo) or Housecall Pro ($69/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small GC with Subs</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$200K-$750K revenue, 2-5 crew + subs</p>
              <p className="text-sm text-gray-700 mb-2">
                Managing subcontractors is now your biggest challenge. You are coordinating
                plumbers, electricians, and drywall crews across 2-3 projects. Change orders
                start happening, and if you do not track them, scope creep eats your profit.
                You need project management and change order tracking.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: FieldPulse ($99/mo) or Buildertrend ($99/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Remodeler / Builder</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$750K-$3M revenue, multi-project</p>
              <p className="text-sm text-gray-700 mb-2">
                You are running 3-8 projects simultaneously with multiple subs on each.
                Client selections (tile, fixtures, paint) need tracking. Draw schedules
                and progress billing are how you get paid. Budget vs actual tracking on
                every job is the difference between 15% margin and 5%.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Buildertrend ($99-399/mo) or CoConstruct ($99+/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Large GC / Commercial Builder</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$3M+ revenue, enterprise scale</p>
              <p className="text-sm text-gray-700 mb-2">
                Enterprise project management, sub portals with prequalification, compliance
                documentation, RFIs, submittals, and multi-location oversight. Your subs and
                architects expect an industry-standard platform. At this scale, the software
                cost is a rounding error compared to the cost of a missed deadline or compliance failure.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Procore ($375+/mo)
              </p>
            </div>
          </div>

          {/* Kitchen Remodel Project Lifecycle */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Kitchen Remodel from Estimate to Final Payment: Buildertrend vs. Jobber vs. Procore
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it feels like to run a real project on each platform.
            Here is the same $85K kitchen remodel — from initial estimate through punch list and
            final draw — on three different platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Step 1 — Initial Estimate and Contract</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Build the estimate with line items for demo, framing, electrical, plumbing,
                    cabinets, countertops, tile, fixtures, and painting. Client reviews and
                    signs the proposal through the portal. The approved estimate becomes the
                    project budget automatically.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Create a quote with line items and send it to the homeowner. They approve
                    it through the client hub. Simple and fast — but the quote lives in
                    isolation. There is no project budget, no phase tracking, and no way
                    to tie it to a draw schedule.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Full budget setup with cost codes, prime contracts, and subcontracts.
                    Detailed but takes 2-3 hours to configure for an $85K kitchen remodel
                    that Buildertrend handles in 30 minutes. Built for $2M commercial
                    projects, not residential remodels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Step 2 — Client Selections (Tile, Fixtures, Paint Colors)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Homeowner logs into the portal and makes selections — backsplash tile,
                    cabinet hardware, faucet, lighting fixtures, paint colors. Each selection
                    shows pricing, photos, and allowance vs. upgrade cost. You see what is
                    decided and what is pending.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    No selection tracking at all. You are managing this through text messages,
                    emails, and a shared spreadsheet. When the homeowner changes their mind on
                    the backsplash two weeks in, you dig through texts to figure out what was
                    originally agreed to.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    No built-in selections module. You can use submittals or custom forms,
                    but it is clunky for residential finish selections. Procore assumes an
                    architect is managing specifications, not a GC tracking paint colors
                    with a homeowner.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Step 3 — Scope Change: Homeowner Wants to Move a Wall</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Create a change order in the system with the cost impact ($4,200 for
                    structural, electrical reroute, drywall, and paint). Client approves
                    through the portal with a digital signature. Budget updates automatically.
                    Schedule adjusts. Everything documented.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    No change order feature. You write a new quote for the additional work
                    and send it separately. The original estimate does not update. At the end
                    of the project, reconciling what was originally scoped vs. what was added
                    is a manual exercise — and that is where disputes happen.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Full change order workflow with change events, cost impact tracking,
                    and approval chains. The most thorough option — but the process is designed
                    for commercial projects where change orders go through a GC, architect, and
                    owner. For a residential kitchen, it is three clicks too many.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Step 4 — Sub Scheduling and Material Ordering</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Schedule the plumber, electrician, tile installer, and cabinet crew on the
                    project calendar. Each sub gets notified and sees their dates. When demo
                    runs long, drag the schedule and everyone downstream gets updated
                    automatically. Purchase orders track material costs against budget.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    You can schedule your own crew, but there is no sub scheduling or notification
                    system. You are calling and texting each sub individually to confirm dates.
                    When the timeline shifts, you make 4-5 phone calls to reschedule everyone.
                    No material cost tracking tied to the project.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Gantt chart scheduling with task dependencies. Subs access the schedule
                    through their own Procore login. Powerful — but your tile installer doing
                    $3K of work does not want to create a Procore account. Sub adoption is
                    easy at scale, resistant on small residential jobs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Step 5 — Draw Schedule and Final Payment</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Set up a draw schedule: 10% at signing, 30% at rough-in, 30% at cabinets
                    and countertops, 20% at substantial completion, 10% at punch list sign-off.
                    Invoices generate automatically at each milestone. Client pays through
                    the portal. You see budget vs actual in real time.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    No draw schedule feature. You create separate invoices manually at each
                    milestone. There is no connection between the invoices and the project
                    budget. At the end, you add up all invoices and hope the total matches
                    the contract price plus change orders.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Full pay application workflow (AIA-style billing) with schedule of values.
                    The most rigorous billing process — which is exactly what commercial
                    projects require and residential remodels do not. Overkill for a kitchen,
                    essential for a $2M office build-out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Pattern</p>
            <p className="text-sm text-gray-700">
              Buildertrend is purpose-built for this exact workflow — residential remodels and
              custom builds where client selections, change orders, and draw schedules are daily
              reality. Jobber is cleaner and cheaper, but it is a service tool, not a construction
              tool — it works until your projects get complex. Procore does everything, but it is
              built for commercial scale where the overhead is justified. Match the tool to your
              project type, not to a feature checklist.
            </p>
          </div>

          {/* GC-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            GC-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            General contracting has challenges no other trade shares — you are managing other
            people&rsquo;s businesses (your subs), tracking decisions your client makes (selections),
            and billing against project milestones instead of completed service calls. Here are
            the features that separate construction software from general field service tools.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Subcontractor Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                The number one challenge for general contractors. You are coordinating plumbers,
                electricians, framers, drywall crews, painters, and flooring installers — each with
                their own schedule, insurance, and payment terms. Your software needs to handle
                sub scheduling, lien waiver collection, certificate of insurance tracking, and
                payment management. Without this, you are buried in phone calls and paperwork.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Full sub portal + prequalification</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Sub scheduling + notifications</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">CoConstruct: Basic sub coordination</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: No sub management</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: No sub management</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Change Order Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                Scope creep is the number one profit killer for GCs. The homeowner wants to add
                a window, move an outlet, upgrade the countertop. Every undocumented change is money
                out of your pocket. Your software should create change orders with cost impact,
                require client approval before work begins, and automatically update the project
                budget and contract total.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Full CO workflow + approval</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Commercial-grade CO tracking</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">CoConstruct: CO with budget integration</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: No change orders</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">FieldPulse: No change orders</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Client Selections Portal</h3>
              <p className="text-sm text-gray-700 mb-2">
                Remodelers and custom builders spend enormous time managing client decisions — tile
                choices, cabinet styles, fixture selections, paint colors, hardware finishes. A
                selections portal lets the homeowner browse options with photos and pricing, make
                decisions on their timeline, and gives you a documented record of every choice.
                Without this, you are managing selections through text messages and emails.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">CoConstruct: Best-in-class selections</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Good selections tracking</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Procore: Not built for selections</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">FieldPulse: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Draw Schedule / Progress Billing</h3>
              <p className="text-sm text-gray-700 mb-2">
                On projects over $20K, you should not be waiting until completion to get paid.
                Draw schedules tie payments to milestones — 10% at signing, 30% at rough-in,
                30% at finish, and so on. Your software should auto-generate invoices when
                milestones are reached, track payments against the total contract, and give
                both you and the client visibility into what has been paid and what is upcoming.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Milestone-based invoicing</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">CoConstruct: Progress billing</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: AIA pay applications</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Single invoices only</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Single invoices only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Budget vs. Actual Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Real-time job costing is the difference between knowing your margin during
                the project and finding out you lost money after it is over. Your software
                should compare estimated costs (labor, materials, subs) against actual costs
                as invoices come in and hours are logged. Catching a 10% overrun at rough-in
                lets you adjust — catching it at completion is too late.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Full budget vs actual</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">CoConstruct: Integrated budget tracking</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Detailed cost tracking</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Job costing</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: No job costing</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Daily Logs and Photo Documentation</h3>
              <p className="text-sm text-gray-700 mb-2">
                Daily logs protect you legally and keep clients informed. A time-stamped photo
                of the electrical rough-in behind the drywall is worth thousands if a dispute
                arises. Your platform should let field workers snap photos, add notes, and
                log daily progress from their phone — organized by project and phase, not
                buried in a camera roll.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Daily logs + organized photos</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Comprehensive daily logs</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">CoConstruct: Photo logs available</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Basic photo docs</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Job photos only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Punch List Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                The last 5% of a project takes 50% of the headaches. A punch list feature lets
                you document every open item with photos, assign each to the responsible sub or
                crew member, set due dates, and track completion. Clients sign off digitally
                when items are resolved. Without this, punch lists live on paper and items
                slip through the cracks for weeks.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Best-in-class punch lists</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Punch list with client sign-off</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">CoConstruct: Warranty/punch tracking</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">FieldPulse: Not available</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a general contractor
            actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber (Core plan, 1-5 users)</p>
              <p className="text-sm text-gray-700">
                $29-$149/mo = <strong>$348-$1,788/year</strong>. No onboarding fee. Self-service
                setup in under an hour. Payment processing at 2.9% + $0.30. Great for handyman
                and small residential GC work — but you will outgrow it when projects span
                multiple weeks and involve subs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (1-5 users)</p>
              <p className="text-sm text-gray-700">
                $69-$149/mo = <strong>$828-$1,788/year</strong>. No onboarding fee. Quick setup
                with guided onboarding. Built-in Wisetack financing for larger repair jobs.
                Best for service-oriented GCs doing mostly same-day or same-week work, not
                multi-month builds.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">FieldPulse (1-5 users)</p>
              <p className="text-sm text-gray-700">
                $99-$199/mo = <strong>$1,188-$2,388/year</strong>. No onboarding fee. Includes
                job costing that shows real margins per project. Good middle ground for GCs who
                need more than Jobber but are not running complex remodels that need Buildertrend.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Buildertrend (Essential plan)</p>
              <p className="text-sm text-gray-700">
                $99/mo base scaling to $399/mo for full features = <strong>$1,188-$4,788/year</strong>.
                Includes client portal, selections, change orders, draw schedules, and sub scheduling.
                The sweet spot for remodelers and custom builders between $750K and $5M in revenue.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">CoConstruct</p>
              <p className="text-sm text-gray-700">
                Starting at $99/mo+ = <strong>$1,188+/year</strong>. Pricing scales with features
                and project volume. Best selections and specification management in the category.
                Worth the investment for custom home builders who live and die by client decisions
                on finishes and allowances.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Procore (enterprise)</p>
              <p className="text-sm text-gray-700">
                Starting at $375+/mo, priced by annual construction volume = <strong>$4,500+/year
                minimum</strong>. Annual contract required. Implementation takes 4-8 weeks. Only
                makes sense for commercial GCs above $3M in revenue where compliance, sub
                prequalification, and multi-project oversight justify the investment.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">The Real Question: When Do You Need Construction Software?</p>
            <p className="text-sm text-gray-700">
              If your projects are same-day repairs and small jobs, Jobber or Housecall Pro
              at $29-149/mo handles everything you need. The moment your projects span multiple
              weeks, involve 3+ subs, and include client selections or change orders, you need
              a construction-specific platform. The cost of Buildertrend ($99-399/mo) pays for
              itself the first time a documented change order saves you from eating a $4,000 scope
              change. The cost of NOT having change order tracking is much higher than the subscription.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Mobile app usability:</strong> Your foreman and subs need to update progress,
              take photos, and check schedules from the job site. Test the mobile app during a free
              trial — if it takes 5 taps to log a daily update, your crew will not use it.
            </li>
            <li>
              <strong>QuickBooks or accounting integration:</strong> Two-way sync with your
              accounting software is non-negotiable. Test this during your trial — broken syncs
              create duplicate entries and bookkeeping nightmares that take hours to untangle.
            </li>
            <li>
              <strong>Sub adoption:</strong> The best sub management tool is useless if your subs
              refuse to use it. Buildertrend sends notifications that work without an account.
              Procore requires sub accounts. For residential subs doing $3K-10K of work on your
              project, simpler is better.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data,
              project history, and templates — plus retraining your team. Expect 2-4 weeks of
              reduced productivity. Pick a platform you can grow into for 2-3 years. If you are
              a small GC growing fast, starting on Buildertrend now instead of Jobber avoids
              a painful switch at $500K.
            </li>
            <li>
              <strong>Contract terms:</strong> Procore requires annual commitments. Buildertrend
              and CoConstruct offer monthly and annual options. Jobber, Housecall Pro, and FieldPulse
              are month-to-month. If you are trying construction management software for the
              first time, start with a platform that lets you leave if it does not work out.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo handyman doing $80K-$150K. What software should I use?
              </h3>
              <p>
                Jobber at $29/mo. It handles scheduling, quoting, invoicing, and payments without
                overwhelming you. You do not need project management, change orders, or sub
                scheduling at this stage — you are the crew. If you want online booking so
                homeowners can self-schedule, Housecall Pro at $69/mo adds that. Do not spend
                more than $100/mo on software at this revenue level.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When do I need construction management software instead of a field service tool?
              </h3>
              <p>
                When your projects regularly span more than two weeks, involve three or more
                subcontractors, and include client decisions on finishes or materials. That is
                when change orders, sub scheduling, selections tracking, and draw schedules
                stop being nice-to-haves and start being how you protect your profit margin.
                For most GCs, this happens between $300K and $750K in revenue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Buildertrend vs. CoConstruct — which one for a remodeler?
              </h3>
              <p>
                Both work well. Buildertrend is stronger on project management, sub scheduling,
                and the overall client experience. CoConstruct is stronger on detailed specifications
                and selection management for custom homes where every finish is a client decision.
                If you do kitchen and bath remodels, Buildertrend. If you build custom homes
                from the ground up, CoConstruct. If you do both, Buildertrend is more versatile.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Is Procore worth it for residential construction?
              </h3>
              <p>
                Almost never. Procore is designed for commercial construction at scale — the
                pricing, complexity, and feature set are built for projects with formal RFIs,
                submittals, and compliance documentation. A residential remodeler on Procore
                is paying enterprise prices for features they do not use while missing residential
                features (like client selections) that Procore does not offer. Use Buildertrend
                or CoConstruct for residential.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I manage subcontractors without construction software?
              </h3>
              <p>
                Most GCs without software rely on phone calls, texts, and a whiteboard. It works
                when you have one project with 2-3 subs. It breaks when you are running 3-4
                projects simultaneously with 10+ subs across all of them. The first time a sub
                no-shows because they did not get your text and your project sits idle for two
                days, software has paid for itself. Sub scheduling with automatic notifications
                is the single highest-ROI feature for a growing GC.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What is a draw schedule and do I need one?
              </h3>
              <p>
                A draw schedule breaks the total project cost into milestone-based payments.
                Instead of collecting 50% upfront and 50% at completion, you bill at defined
                stages — signing, rough-in, cabinets, substantial completion, final. This
                protects your cash flow on projects over $20K and reduces the homeowner&rsquo;s
                risk of paying too much upfront. Buildertrend, CoConstruct, and Procore all
                support draw schedules. Jobber, Housecall Pro, and FieldPulse do not.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I use Jobber as a general contractor long-term?
              </h3>
              <p>
                Yes, if your work stays in the handyman and small-project category — repairs,
                small renovations, maintenance work. Jobber is genuinely excellent at quoting,
                scheduling, invoicing, and getting paid for service-style work. It falls short
                when you need change orders, sub coordination, draw schedules, or multi-phase
                project tracking. If your average project is under $5K and done in a week or
                less, Jobber can serve you indefinitely.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
