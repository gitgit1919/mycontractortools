import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Concrete Contractor Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best software for concrete contractors doing residential flatwork, decorative, and commercial structural work. Real pricing, pour scheduling, yardage tracking, and daily log breakdowns for Jobber, Housecall Pro, JobNimbus, Buildertrend, Procore, and STACK.",
};

const products: SoftwareProduct[] = [
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Small residential concrete — driveways, sidewalks, pads, flatwork under $500K revenue",
    priceRange: "$29–$149",
    pros: [
      "Recurring quote and invoice workflow handles the high-volume, low-ticket side of small residential concrete (sidewalks, small slabs, repairs) without ceremony",
      "Clean mobile app lets the owner-operator send a quote from the driveway at the end of a site visit and collect a signed approval before leaving",
      "Quote follow-up automation recovers 10-15% of $3K-8K driveway estimates that would otherwise die in a customer's inbox",
      "Client hub lets homeowners approve a stamped patio proposal, pay a deposit, and request change orders without phone tag",
      "Integrates with Stripe and QuickBooks cleanly — bookkeeping for a small flatwork crew stays manageable without a dedicated office manager",
    ],
    cons: [
      "No built-in yardage calculator — you are estimating cubic yards in a separate spreadsheet or on a clipboard and typing the total into Jobber",
      "No weather integration for pour scheduling — a rain delay means manually dragging every affected job to a new day",
      "No daily pour reports, cylinder break logs, or slump test tracking — if you are doing any commercial work, this is a dealbreaker",
      "Decorative finish options (stamp pattern, color, release, sealer) have to be built as custom line items every time — no catalog memory",
      "Not built for jobs that run longer than a day or two — multi-phase work (excavation, form, pour, finish, cure, strip, seal) gets awkward",
    ],
    features: [
      "Quoting with follow-ups",
      "Recurring scheduling",
      "Client self-service hub",
      "Mobile invoicing",
      "Payment processing",
      "QuickBooks sync",
      "Photo attachments",
      "Route planning (Connect plan)",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 5,
    bestFor: "Residential concrete replacement and repair — $8K-25K driveways, patios, decorative, financing-driven sales",
    priceRange: "$69–$149",
    pros: [
      "Wisetack consumer financing built in — this is the single biggest reason a residential concrete shop runs Housecall Pro. A $22K driveway replacement that the customer cannot write a check for suddenly becomes a $320/month payment, and the close rate on replacement work jumps 20-40%",
      "Online booking lets homeowners schedule a site visit for estimates on decorative, stamped, or stained work without phone tag",
      "Automated review requests build Google reviews after every job — massive for local concrete SEO because customers search \"stamped concrete near me\" before they call",
      "Crews learn the mobile app in a day, which matters when your finishers are great at finishing and not great at learning software",
      "Solid QuickBooks two-way sync and stable invoicing workflow",
    ],
    cons: [
      "No yardage calculator and no ready-mix vs bag logic — flatwork estimating is manual line items",
      "No weather-triggered scheduling — your office has to babysit the forecast during pour season",
      "No daily logs for commercial jobs (slump, air content, cylinder breaks, ambient temp) — not built for structural work",
      "Project management for multi-day jobs is shallow — change orders, punch lists, and warranty service tracking are bolted on, not built in",
      "Weaker on subcontractor coordination (pump trucks, rebar crews, finishers) than dedicated construction tools",
    ],
    features: [
      "Wisetack consumer financing",
      "Online booking",
      "Automated review requests",
      "Estimating and invoicing",
      "Dispatching",
      "Customer notifications",
      "QuickBooks sync",
      "Payment processing",
    ],
  },
  {
    name: "JobNimbus",
    rating: 4,
    bestFor: "Owner-operator concrete and concrete restoration shops, $300K-$1M revenue, mixed residential work",
    priceRange: "$25–$99",
    pros: [
      "Pipeline view for concrete leads (driveway replacement, patio install, repair/lift, decorative) gives a visual of what is quoted, approved, scheduled, and in progress — most FSM tools make you hunt for this",
      "Photo organization by job is strong — critical for documenting subgrade prep, rebar placement, and form work before the pour buries everything",
      "Popular in the concrete restoration and coatings trades, so the support team actually understands your workflow",
      "Mobile-first design works well for a small crew where the owner runs sales, estimating, and dispatch from a truck",
      "Fair pricing at the low end — under $100 per user per month for most concrete shops",
    ],
    cons: [
      "No yardage calculator or mix-design pricing built in — estimating formwork + reinforcement + pour + finish is manual",
      "No daily log templates for pour day documentation — you can attach photos but not structured pour reports",
      "Reporting is shallow — you can see job counts and revenue, but job costing and true profitability per pour is limited",
      "Less polished interface than Jobber or Housecall Pro — functional but feels older",
      "Not built for commercial structural concrete — no QA/QC workflow, no cylinder break tracking",
    ],
    features: [
      "Lead and job pipeline",
      "Photo documentation",
      "Estimates and invoicing",
      "Scheduling",
      "Task management",
      "Email integration",
      "QuickBooks sync",
      "Mobile app",
    ],
  },
  {
    name: "Buildertrend",
    rating: 5,
    bestFor: "Larger residential concrete — foundations, decorative hardscape, design-build, $800K-$5M revenue",
    priceRange: "$499–$899",
    pros: [
      "Full construction project management — concrete foundation contractors and decorative/hardscape crews running 4-12 week projects get real schedules with dependencies, not just a job ticket",
      "Change order tracking is first-class — when a homeowner adds 180 sq ft of stamped patio halfway through, the change order is documented, priced, signed, and billable without arguing at the end",
      "Selections module handles decorative finish choices (stamp pattern, integral color, release color, sealer type) with homeowner approval baked in — no more \"I thought we were getting Brickform Cobblestone\" disputes",
      "Subcontractor portal lets you coordinate pump truck operators, rebar subs, and finishing crews with their own logins and document access",
      "Budget and job costing tools track estimated vs actual material and labor per phase — you will actually know if that $38K stamped patio made money",
    ],
    cons: [
      "Expensive — $499+ base plus per-user fees puts it out of reach for small flatwork shops",
      "Implementation takes 4-8 weeks and requires a dedicated internal champion, which a 3-person concrete crew rarely has",
      "Overkill for high-volume repetitive flatwork (driveways, sidewalks, small slabs) — you will fight the software",
      "Daily logs are present but not as deep as Procore for commercial pour documentation",
      "Learning curve for field crews is real — the mobile experience is better than it was, but not as frictionless as Jobber",
    ],
    features: [
      "Project management",
      "Scheduling with dependencies",
      "Change orders",
      "Selections module",
      "Daily logs",
      "Subcontractor portal",
      "Budgeting and job costing",
      "Document management",
    ],
  },
  {
    name: "Procore",
    rating: 5,
    bestFor: "Commercial structural concrete contractors — slabs, foundations, tilt-up, $3M+ revenue, GC-driven projects",
    priceRange: "Custom (enterprise)",
    pros: [
      "Daily logs with structured pour reports — slump, air content, ambient temp, cylinder ID, ticket numbers, cubic yards placed, crew size — the exact documentation commercial GCs and inspectors demand",
      "RFI and submittal workflow is the industry standard — when the structural engineer changes the rebar spec for grade beams, the whole trail is auditable",
      "Drawing management handles the reality of commercial concrete: 200-sheet drawing sets, revisions every week, and field crews needing the latest version on a tablet at the pour",
      "Quality and safety modules cover concrete-specific inspections (pre-pour rebar walk, embed verification, slump test log, cylinder break tracking to 7-day and 28-day strength)",
      "Integrates with every major commercial construction tool — accounting, estimating, scheduling, drone imagery — because on a commercial project you are not running Procore alone",
    ],
    cons: [
      "Enterprise pricing — expect $15K-60K+ per year depending on volume, users, and modules. Not a residential tool",
      "Implementation is an ERP-level project. Plan on 3-6 months and a dedicated internal lead",
      "Not a sales or lead-management tool — Procore assumes you already won the bid and are managing execution",
      "Overkill for residential or small commercial work — you will pay for capability you never use",
      "Support and roadmap cater to enterprise GCs — a smaller concrete sub can feel like a second-class customer",
    ],
    features: [
      "Daily pour reports",
      "RFI and submittals",
      "Drawing management",
      "Quality and safety inspections",
      "Schedule integration",
      "Budget and cost management",
      "Document control",
      "Mobile field access",
    ],
  },
  {
    name: "STACK Estimating",
    rating: 4,
    bestFor: "Pre-construction bidding for commercial concrete — GC bid lists, competitive structural work",
    priceRange: "$2,499–$5,999/year",
    pros: [
      "Purpose-built takeoff from PDF plans — count footings, measure slab areas, calculate cubic yardage, tally rebar linear feet, and flag embeds in a fraction of the time of manual takeoff",
      "Assembly and item databases let you build reusable templates for common concrete work — \"8 inch slab on grade with 12 inch thickened edge, #4 rebar 16 inch on center, 6 mil vapor barrier\" becomes a one-click drop",
      "Accurate yardage calculations tied directly to the takeoff — you stop losing money on bids where you undershot the concrete volume by 8%",
      "Cloud-based so estimators can work the same bid from the office, job trailer, or home without passing files around",
      "Handles the real bid volume of a commercial concrete sub — 20-40 active bids per estimator per month with version control on plan revisions",
    ],
    cons: [
      "Pre-construction only — not a project management or field ops tool. You need a separate system (Procore, Buildertrend, or spreadsheets) for execution",
      "Expensive for residential flatwork shops — the ROI case is weak below $1M in commercial bid volume per year",
      "Learning curve for the takeoff and database setup — expect 2-6 weeks before an estimator is fast",
      "Requires discipline to keep the assembly database current — out-of-date labor and material rates will lose bids or bury margin",
      "Limited integrations with downstream construction management — you will export and re-import data when the bid becomes a project",
    ],
    features: [
      "PDF takeoff",
      "Yardage and quantity calculation",
      "Assembly templates",
      "Item database",
      "Plan version control",
      "Bid summary reports",
      "Cloud collaboration",
      "Cost database integration",
    ],
  },
];

export default function BestConcreteSoftware() {
  return (
    <ComparisonLayout
      title="Best Concrete Contractor Software (2026)"
      description="We compared the top software platforms for concrete contractors — from solo driveway crews to commercial structural subs. Real pricing, real trade-offs, and honest matching to where your business actually is right now. No pay-to-play rankings, no fake winners."
      trade="Concrete"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Concrete Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Concrete is two very different businesses wearing the same hat. Residential flatwork
            (driveways, sidewalks, patios, decorative) runs on high ticket counts, homeowner sales,
            and weather-driven pour windows. Commercial structural concrete (foundations, slabs,
            tilt-up, parking structures) runs on GC bid lists, submittals, daily pour reports, and
            cylinder breaks. The software you need depends entirely on which side you are on — and
            most review sites ignore this completely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo / Small Flatwork Crew</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$500K revenue, residential</p>
              <p className="text-sm text-gray-700 mb-2">
                You are pouring driveways, sidewalks, small pads, and the occasional patio. Jobs are
                1-2 days, ticket sizes are $2K-$15K, and the owner is on every pour. You need fast
                quoting, clean invoicing, and basic scheduling. You do not need commercial-grade
                daily logs or submittal workflows.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Core/Connect ($29-149/mo) or JobNimbus ($25-75/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Residential Replacement + Decorative</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$500K-$1.5M, higher ticket residential</p>
              <p className="text-sm text-gray-700 mb-2">
                Your average ticket is $8K-$25K — full driveway replacements, stamped patios, decorative
                overlays, stained floors. Customers cannot always write a check, so consumer financing
                doubles your close rate. You need a platform that handles the sales process, sends
                reviews after every job, and keeps your Google presence strong.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-149/mo) with Wisetack financing
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Larger Residential + Design-Build</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$1M-$5M, foundations, hardscape, multi-week jobs</p>
              <p className="text-sm text-gray-700 mb-2">
                You are pouring residential foundations for custom home builders, running 4-12 week
                hardscape projects, or handling full design-build pool decks and outdoor living
                installs. You need real project scheduling, change orders, selections for decorative
                choices, and subcontractor coordination with rebar, pump, and finishing crews.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Buildertrend ($499+/mo) for PM, plus JobNimbus or Housecall Pro for sales
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Commercial Structural Concrete</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$3M+, GC-driven projects, structural sub</p>
              <p className="text-sm text-gray-700 mb-2">
                You are a subcontractor on commercial projects — slabs on grade, footings, foundations,
                tilt-up, parking structures. The GC demands daily pour reports, cylinder break logs,
                RFIs, submittals, and drawing version control. You bid from PDFs with tight yardage
                accuracy requirements. This is Procore plus STACK territory.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Procore (custom) for execution + STACK ($2.5K-6K/yr) for estimating
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Week in the Life: Housecall Pro vs. Buildertrend vs. Procore
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run a concrete business on a
            given platform. Here is the same week at three different concrete shops — a residential
            replacement crew on Housecall Pro, a larger residential/hardscape shop on Buildertrend,
            and a commercial structural sub on Procore.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Monday 7:00 AM — Pour Day, 38-Yard Driveway Replacement</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Owner checks the Housecall Pro schedule on his phone at 6 AM, sees the 38-yard
                    driveway pour scheduled for 8 AM arrival. He manually checks his weather app (not
                    integrated), sees rain at 3 PM, and calls the ready-mix plant to move the truck up
                    30 minutes. Crew gets dispatched via the mobile app with the site address and
                    customer notes. Fast and simple — weather risk is entirely on the owner&rsquo;s
                    head.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Project manager opens the job schedule in Buildertrend, sees pour day is a scheduled
                    task with dependencies on form inspection and rebar sign-off (both completed
                    Friday). She sends a schedule update to the homeowner through the client portal.
                    Weather is still a manual check. The daily log is pre-populated with the day&rsquo;s
                    planned activity, and the crew leader will fill in actual start, crew count, and
                    yardage after the pour.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Superintendent on a commercial slab pour opens Procore at 6 AM, pulls up the pour
                    plan, and walks the rebar with the inspector. He logs the pre-pour inspection with
                    photos and the inspector&rsquo;s sign-off. When ready-mix arrives, he logs ticket
                    number, time, slump, air, ambient temp, and concrete temp for each truck. Cylinder
                    samples are logged with IDs for 7-day and 28-day breaks. The GC sees the pour
                    progress in real time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Wednesday 10:00 AM — Estimating a $22K Stamped Patio</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Owner meets the homeowner on site, measures 640 sq ft of patio area, and builds the
                    estimate on his phone. Line items: excavation, base prep, forms, rebar, concrete
                    (yardage calculated in his head — 8 yards at 4 inch), stamp pattern selection,
                    integral color, release, and sealer. Sends the estimate through Housecall Pro with
                    a Wisetack financing link right in the email. Customer approves that afternoon and
                    qualifies for $320/month financing.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Estimator builds the job in Buildertrend&rsquo;s estimating module with labor and
                    material cost tracking at the line level. Selections module lets the homeowner pick
                    stamp pattern (Ashlar Slate vs Seamless Stone), color (Ranch House Red vs Sandstone
                    Buff), release color, and sealer type with photos of each option. Homeowner makes
                    selections in the portal, Buildertrend locks the choices into the job scope, and
                    the estimator adds change-order protection for anything outside the agreed selections.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Not the right tool for this job. A commercial concrete sub would not use Procore to
                    estimate residential stamped patios — Procore is for execution. The estimator on a
                    commercial shop is using STACK for takeoff and a separate estimating tool to build
                    the bid before it ever enters Procore.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Friday 2:00 PM — Punch List and Warranty Call on a 6-Month-Old Foundation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Customer calls about a hairline crack on the garage slab. Office creates a new job
                    in Housecall Pro, links it to the original customer record, and schedules a Monday
                    visit. Limited warranty tracking — the office has to manually check the original
                    invoice to confirm the 1-year warranty is still active. Photos of the original pour
                    are attached to the old job but scattered.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Warranty request comes in through the client portal. PM opens the original project,
                    sees the pre-pour photos, mix ticket, and pour-day daily log. She creates a warranty
                    item tied to the original job, assigns it to the finisher crew lead, and tracks the
                    resolution. All history lives on one project record — much cleaner than rebuilding
                    context from scratch.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Procore</p>
                  <p className="text-sm text-gray-700">
                    Commercial punch list runs through the Procore punch list module with photos, location
                    on the drawing, and assigned responsibility. The original pour reports, cylinder
                    break results, and inspection logs are all still on the project — nothing to dig up.
                    Warranty obligations tied to the original contract are visible in the project record.
                    This is what enterprise PM is actually for.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              Housecall Pro wins for residential replacement and decorative work where financing
              drives the sale. Buildertrend wins for larger residential and design-build concrete
              where projects run weeks and selections matter. Procore wins for commercial structural
              subs where the GC demands pour reports, RFIs, and drawing control. A small flatwork
              shop on Jobber pays $1,200-$1,800/year. A residential replacement shop on Housecall Pro
              pays $1,800/year and makes it back on the first financed job. A hardscape/design-build
              shop on Buildertrend pays $6K-$12K/year. A commercial sub on Procore plus STACK pays
              $20K-$70K/year. Pick based on which side of concrete you actually run.
            </p>
          </div>

          {/* Concrete-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Concrete-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most construction software reviews are written by people who have never stood on a
            subgrade at 6 AM waiting for the ready-mix truck. Here are the features that matter
            specifically for concrete contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Yardage Calculation and Ready-Mix Pricing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Every concrete job starts with &ldquo;how many yards do I need.&rdquo; An 8% miss on a
                38-yard driveway pour is 3 yards of wasted concrete (~$450) or a short-pour that makes
                you finish with bagged mix and look unprofessional. The software should calculate
                cubic yardage from length, width, and thickness, add waste factor, and price per
                yard based on your supplier. Almost no FSM tool does this natively — most concrete
                contractors use a spreadsheet or a standalone calculator.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">STACK: Strong, tied to takeoff</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Via custom line items</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Procore: Via estimating integration</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Pour Scheduling with Weather Awareness</h3>
              <p className="text-sm text-gray-700 mb-2">
                Concrete pours are entirely weather-dependent. Rain within 4-6 hours of pour ruins
                the finish. Freezing temperatures within 48 hours threaten strength gain. Extreme
                heat flash-sets the mix. Software that integrates weather forecasts into scheduling
                helps you plan pour windows and move jobs before you waste ready-mix. This is rare —
                most shops still have an office manager refreshing the weather app every morning.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Procore: Via integrations</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Schedule drag-to-reschedule</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">JobNimbus: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Crew and Equipment Dispatching</h3>
              <p className="text-sm text-gray-700 mb-2">
                A concrete pour is not just a crew — it is a crew, a pump truck, a laser screed on
                large pours, and the ready-mix delivery window. Your software should let you dispatch
                the crew, reserve the pump, and confirm the ready-mix delivery on a single schedule
                view. Missing equipment or a late pump truck means the finishers are standing around
                on the clock.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Resource scheduling</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Subcontractor portal</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic crew dispatch</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Crew dispatch, no equipment</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Basic</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Decorative Finish Options and Selections</h3>
              <p className="text-sm text-gray-700 mb-2">
                Decorative concrete is where margin lives — stamped, stained, polished, broomed,
                exposed aggregate, integral color, release color, sealer type. The homeowner picks
                from 40+ options, and disputes happen when the finished patio does not match what
                they thought they ordered. Software with a selections workflow — homeowner sees
                photos, picks formally, signs off — prevents the $8K reconsideration.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Selections module is the strength</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Via estimate line items</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Via estimate + photos</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual line items</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Procore: Not residential-focused</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Subgrade Prep and Reinforcement Line Items</h3>
              <p className="text-sm text-gray-700 mb-2">
                The margin killer on concrete work is under-bidding the stuff that disappears before
                the pour — 4 inches of compacted base, vapor barrier, rebar grid at 16 inch on center,
                fiber mesh, expansion joints, dowel bars. Your estimating should have reusable
                assemblies for these, not a blank line every time. Miss one item and your 18% target
                margin becomes 6%.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">STACK: Assembly database</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Cost codes and templates</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Procore: Via estimating integration</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Reusable price book</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual line items</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Consumer Financing for $8K-$25K Residential Jobs</h3>
              <p className="text-sm text-gray-700 mb-2">
                A $22K driveway replacement is a kitchen-remodel-level expense for most homeowners.
                Cash buyers exist, but 60-70% of the market will not write a check that size. Consumer
                financing (Wisetack, GreenSky) turns a $22K quote into a $330/month payment, and
                close rates jump 20-40%. Software with financing baked into the quote is a massive
                revenue multiplier for residential concrete replacement shops.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Wisetack built in</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Via third-party link</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Via third-party link</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Via third-party link</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Procore: Not residential</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Daily Pour Reports for Commercial Work</h3>
              <p className="text-sm text-gray-700 mb-2">
                On a commercial pour, the GC and inspector require structured daily reports: ticket
                numbers, cubic yards placed, slump, air content, concrete temperature, ambient temp,
                cylinder IDs, crew size, labor hours, and photos of placement and finish. Paper logs
                still work but create an audit nightmare at 7-day and 28-day break time. Purpose-built
                daily log templates save hours per pour and protect you in disputes.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Industry standard</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Solid daily logs</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built for this</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built for this</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">JobNimbus: Photos only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Punch List and Warranty Service Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Concrete work has a long warranty tail — hairline cracks, surface scaling, efflorescence,
                and settlement issues show up 3-18 months after the pour. Your software should tie
                warranty service requests to the original job, with the pre-pour photos, mix ticket,
                and daily log still on the record. Otherwise your office is digging through emails
                trying to figure out who poured what.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Procore: Punch list module</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Tied to original project</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Customer history</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Customer history</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Customer history, manual</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 6-person concrete shop
            ($800K revenue, roughly 70% residential flatwork and 30% small commercial) actually pays
            on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2
                days. Good for the residential side but you will still need a separate yardage
                calculator and no daily logs for the commercial portion. Payment processing at
                2.9% + $0.30 per transaction.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Connect (5 users, with GPS)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Adds live GPS, crew scheduling, and advanced
                routing — useful if your crews run multiple small flatwork jobs a day, less critical
                if most pours are all-day single-site jobs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">JobNimbus (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$75-99/mo per user = <strong>~$4,500-$5,940/year</strong> for a 5-user team. Strong
                in the restoration and concrete repair side. Still need a separate solution for
                yardage calculations and commercial daily logs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Wisetack consumer financing
                included — this is the whole reason residential replacement crews run Housecall Pro.
                First financed $22K driveway pays for a decade of subscription.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Buildertrend (5 users)</p>
              <p className="text-sm text-gray-700">
                $499-$899/mo = <strong>$6,000-$10,800/year</strong>. May include onboarding and
                training. Real project management, change orders, selections, and subcontractor
                coordination. Only worth it if you are running multi-week residential projects or
                design-build work.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Procore (mid-size commercial concrete sub)</p>
              <p className="text-sm text-gray-700">
                Custom pricing tied to annual construction volume. A $5M-$10M commercial concrete sub
                typically pays <strong>$15,000-$40,000 in Year 1</strong> including implementation.
                Add STACK for estimating at $2,500-$6,000/year.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">STACK Estimating (2 users)</p>
              <p className="text-sm text-gray-700">
                ~$2,499-$5,999/year depending on plan and users. Not a standalone stack — you still
                need a separate tool for job execution. Worth it when commercial bid volume is high
                enough that faster, more accurate takeoff is a real competitive edge.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When Housecall Pro&rsquo;s Financing Pays for Itself</p>
            <p className="text-sm text-gray-700">
              On a residential replacement shop averaging $15K per job, consumer financing typically
              lifts close rates from 30-35% to 50-60%. On 100 qualified leads a month, that is 15-25
              more jobs closed. At 18% net margin on $15K jobs, that is $40K-$68K a month in
              additional profit. A $1,800/year software subscription that unlocks that is the
              highest-ROI spend in a concrete business. The math does not work the same way for pure
              commercial subs or solo pour-and-go flatwork crews — it is specific to the residential
              replacement and decorative segment.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Yardage accuracy:</strong> No matter which platform you pick, test the yardage
              workflow. Plug in a 40 ft x 20 ft x 4 inch slab and see how the software handles it.
              If you are typing yardage into a notes field, you will eventually miss on a bid.
            </li>
            <li>
              <strong>Mobile reliability at the pour:</strong> Your finishers and crew leads are
              using a cracked phone with bad signal at 7 AM. Test the mobile app on airplane mode
              and slow connections. If it cannot cache the day&rsquo;s jobs and sync later, it is
              not pour-day ready.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless you are running an enterprise ERP
              alongside Procore, you need clean two-way QuickBooks sync. Test this during the trial —
              broken syncs create bookkeeping problems that take months to untangle.
            </li>
            <li>
              <strong>Consumer financing for residential:</strong> If any part of your work is
              residential replacement or decorative, consumer financing is a revenue multiplier.
              Housecall Pro has Wisetack built in. On every other platform, you share a Wisetack or
              GreenSky link from the kitchen table — workable, but one more step in the sales process.
            </li>
            <li>
              <strong>Daily log depth for commercial:</strong> If you do any structural commercial
              work, you need daily pour reports. Procore is the industry standard because GCs expect
              it. Buildertrend handles residential daily logs well but is not the commercial tool.
              Do not try to run commercial structural work on Jobber or Housecall Pro.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data, job
              history, photos, and retraining crews mid-pour-season. Expect 2-4 weeks of reduced
              productivity during any transition. Pick a platform you can grow into for 2-3 years,
              not just the one that feels right today.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo flatwork guy doing $250K in driveways and sidewalks. What should I use?
              </h3>
              <p>
                Start with Jobber Core at $29-49/mo. It handles estimating, invoicing, scheduling,
                and payment processing cleanly and will not fight you on the small residential side.
                Do not spend more than $100/mo on software at this stage — your margin is thin and
                your money is better spent on a used skid steer or a better saw. If your average
                ticket is climbing above $8K and you are losing sales to cash-flow objections, step
                up to Housecall Pro for Wisetack financing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Does concrete software need to calculate yardage for me?
              </h3>
              <p>
                Ideally yes, but almost no general FSM tool does this natively. Most concrete
                contractors use a separate yardage calculator (spreadsheet, Sakrete app, or a
                standalone tool) and type the total into their estimating line items. STACK
                Estimating and Buildertrend&rsquo;s templating get closer to built-in yardage for
                larger commercial and residential work. If you are doing 30-40 bids a week, the
                manual step adds up — look at STACK. If you are doing 2-3 bids a week, the
                spreadsheet workflow is fine.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How much does consumer financing actually lift close rates on residential concrete?
              </h3>
              <p>
                On residential replacement work (driveways, patios, stamped overlays) averaging
                $15K-$25K per job, built-in consumer financing typically lifts close rates by 15-25
                percentage points. A shop closing 30% of qualified leads before financing will close
                45-55% after financing. On 80 leads a month at $18K average ticket and 18% net margin,
                that is roughly $40K-$65K in additional monthly profit. The Housecall Pro/Wisetack
                combination is the lowest-friction way to deliver this.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I run commercial structural concrete on Jobber or Housecall Pro?
              </h3>
              <p>
                No. Jobber and Housecall Pro are not built for structured daily pour reports,
                cylinder break tracking, RFIs, submittals, or drawing management. If your commercial
                work is genuinely structural and GC-driven, you need Procore or a comparable
                construction management platform. If your commercial work is really just larger
                flatwork for warehouses and small commercial sites without heavy GC oversight,
                Buildertrend can handle it and Jobber/Housecall Pro can fake it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When does Buildertrend make sense for a concrete contractor?
              </h3>
              <p>
                When you are running multi-week residential projects, decorative hardscape with lots
                of homeowner selections, or design-build work where the concrete phase is one of
                several trades you are coordinating. Below $1M in revenue and with mostly 1-3 day
                pours, Buildertrend is overkill and the monthly fee will sting. Above $1M with real
                project management needs, change order volume, and subcontractor coordination, it
                starts earning its keep.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need STACK Estimating, or can I bid commercial work in Excel?
              </h3>
              <p>
                You can bid commercial concrete in Excel — plenty of profitable subs still do. STACK
                makes sense when your bid volume is high enough that faster, more accurate takeoff
                is a competitive edge. If you are submitting 20-40 bids a month and winning on margin,
                STACK pays for itself quickly. If you are submitting 2-3 bids a month, the learning
                curve and subscription cost is probably not worth it yet.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What about weather — does any concrete software actually handle rain delays?
              </h3>
              <p>
                No platform handles weather-driven rescheduling as well as you would hope. Procore
                has third-party weather integrations for commercial projects. Buildertrend lets you
                drag jobs to new dates on the calendar but does not actively warn you. Jobber,
                Housecall Pro, and JobNimbus all assume your office manager is refreshing the weather
                app and calling customers manually. If you are in a rainy market, build a pre-pour
                weather check into your daily routine regardless of software.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch concrete software later without losing my history?
              </h3>
              <p>
                Most platforms let you export customer data, job history, and invoices as CSV files.
                Photos are harder to migrate cleanly, and templates, custom workflows, and selection
                libraries do not move. Expect 2-4 weeks of reduced productivity during any transition,
                and never transition during pour season (April-November in most markets). If you are
                on the fence between two platforms and your business is growing, pick the one you
                can grow into for 2-3 years even if the monthly cost is higher today.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
