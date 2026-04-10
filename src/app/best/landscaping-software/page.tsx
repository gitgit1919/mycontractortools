import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Landscaping Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best landscaping software for lawn care and landscape contractors. Real pricing, routing features, and crew management breakdowns for Jobber, LMN, Aspire, Housecall Pro, GorillaDesk, and Yardbook.",
};

const products: SoftwareProduct[] = [
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Most landscapers — maintenance + small install work, $100K-$1M revenue",
    priceRange: "$29–$149",
    pros: [
      "Route optimization is genuinely good — drops a 6-stop route into logical order and saves 30-60 minutes a day per crew in drive time",
      "Recurring job templates make weekly/biweekly mowing clients a one-time setup — the software auto-creates next week's visit, invoice, and reminder",
      "Quote follow-up automation recovers 10-15% of install estimates that customers forgot to respond to",
      "Client hub lets homeowners approve a hardscape proposal, pay their monthly lawn invoice, and request extra work without phone tag",
      "Cleanest mobile app in the category — your crew leaders can actually use it without a 2-hour training session",
    ],
    cons: [
      "Estimating for large hardscape and install jobs is thin — no material catalogs, no built-in labor burden calculations",
      "No built-in crew GPS tracking on the base plan (you can see job status but not live location without the Connect plan at $149/mo)",
      "Budget vs actual job costing is basic — if you want to know whether that $18K retaining wall actually made money, you are exporting to a spreadsheet",
      "No native property-measurement tool — no polygon drawing on satellite maps (you can use third-party integrations)",
      "Not landscaping-specific — it was built for general field service, so there is no chemical log or seasonal pricing templates",
    ],
    features: [
      "Route optimization",
      "Recurring job scheduling",
      "Quoting with follow-ups",
      "Client self-service hub",
      "Batch invoicing",
      "GPS tracking (Connect plan)",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "LMN",
    rating: 5,
    bestFor: "Landscapers who need to actually know their numbers — $400K+ with install and maintenance divisions",
    priceRange: "$75–$300",
    pros: [
      "Built by landscapers for landscapers — the estimating module has real labor burden, equipment costs, and overhead recovery baked in",
      "Budget vs actual tracking per job tells you exactly which jobs made money and which bled out — most platforms cannot do this",
      "Time tracking ties crew hours to specific properties and phase codes (mulch, mow, edge, cleanup) so you see true cost per service",
      "Training library is packed with landscape-industry content — LMN Academy teaches business fundamentals, not just how to click buttons",
      "Handles dual-division businesses (maintenance recurring + install one-offs) without the workflow fighting you",
    ],
    cons: [
      "Learning curve is steep — plan on 4-8 weeks before your team is comfortable, longer for the estimating module",
      "Interface looks and feels older than Jobber or Housecall Pro — it is functional, not pretty",
      "Scheduling and dispatching are less polished than Jobber — if you are a pure maintenance shop, the routing experience is a downgrade",
      "Mobile app is adequate but not the strongest in the category",
      "Pricing scales based on users and modules — can easily hit $300/mo for a small crew with all features",
    ],
    features: [
      "Landscaping-specific estimating",
      "Budget vs actual job costing",
      "Time tracking by crew/phase",
      "Training academy",
      "CRM",
      "Scheduling",
      "Invoicing",
      "Reporting",
    ],
  },
  {
    name: "Aspire",
    rating: 5,
    bestFor: "Established commercial landscape operations ($1.5M+ revenue, 20+ employees)",
    priceRange: "$300+",
    pros: [
      "End-to-end platform that handles CRM, estimating, scheduling, job costing, purchasing, and invoicing in one system — no duct tape between tools",
      "Real-time job costing updates as crews clock in and materials get issued — owners see margin shrinkage the day it happens, not at month-end",
      "Multi-branch and multi-division support is the best in the category — maintenance, install, snow, irrigation all tracked separately",
      "Purchase order workflow with vendor price tracking — critical when you are running $50K+ in materials through a single job",
      "Commercial contract management (monthly maintenance agreements with complex service schedules) is purpose-built",
    ],
    cons: [
      "Expensive — Aspire is priced for established companies, not the $400K shop trying to level up (budget $15K-30K/year for a mid-size operation)",
      "Implementation takes months and requires a dedicated internal champion — this is ERP-level complexity",
      "Overkill for companies under 20 employees — you will pay for capability you never use",
      "Not the right fit for pure maintenance shops — its strength is in the install and commercial sides",
      "Support and updates cater to enterprise accounts — small customers can feel deprioritized",
    ],
    features: [
      "Enterprise estimating",
      "Real-time job costing",
      "Multi-branch/division",
      "Purchasing workflow",
      "Scheduling",
      "Invoicing",
      "CRM",
      "Reporting dashboards",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Service-focused landscapers and lawn care companies that also do larger one-off install work",
    priceRange: "$69–$149",
    pros: [
      "Most crews learn it in a day — lowest training overhead in the category",
      "Wisetack consumer financing built in — game-changer for $10K-40K hardscape, patio, and full landscape install jobs (customers who cannot pay cash often say yes with financing)",
      "Online booking lets homeowners self-schedule one-off services (aeration, cleanups, mulch jobs) without calling you",
      "Automated review requests build Google reviews in the background — this matters a lot for local landscaping SEO",
      "Solid QuickBooks two-way sync that rarely breaks",
    ],
    cons: [
      "Route optimization is weaker than Jobber or GorillaDesk — fine for 10 stops, frustrating at 30+ stops a day",
      "Limited crew management — no strong per-crew scheduling views or job costing by crew",
      "No landscaping-specific estimating — no material catalogs, no plant pricing, no labor burden",
      "Recurring service handling is adequate but feels more bolted-on than Jobber's",
      "Not built for design-build companies — your landscape designer will want something else",
    ],
    features: [
      "GPS dispatching",
      "Wisetack financing",
      "Online booking",
      "Automated review requests",
      "Recurring jobs",
      "Payment processing",
      "QuickBooks sync",
      "Customer notifications",
    ],
  },
  {
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Pure maintenance shops — lawn care, pest control, or combined — that live on route efficiency",
    priceRange: "$49–$149",
    pros: [
      "Route optimization is included on lower plans — no paywall gating this critical feature",
      "Month-to-month pricing with no long-term contracts — cancel anytime if it is not working",
      "Built-in chemical and application tracking for fertilizer, pre-emergent, pesticide, and herbicide logs (EPA state-level compliance requirements)",
      "Simple recurring job setup for weekly mowing clients without the overhead of more complex tools",
      "Works well for combo businesses running lawn + pest control under one roof",
    ],
    cons: [
      "Estimating for landscape design or install work is basically nonexistent — you will need a second tool for that side",
      "Reporting is shallow — job counts, revenue, and route stats, but not profitability or crew performance analysis",
      "Smaller user community than Jobber or Housecall Pro — fewer YouTube tutorials and Facebook groups",
      "Fewer third-party integrations and a slower development pace",
      "Interface is functional but dated — not as polished as newer competitors",
    ],
    features: [
      "Route optimization",
      "Chemical/application tracking",
      "Recurring scheduling",
      "Invoicing",
      "CRM",
      "Customer portal",
      "Payment processing",
      "Basic reporting",
    ],
  },
  {
    name: "Yardbook",
    rating: 4,
    bestFor: "Solo operators and startup lawn care businesses under $100K",
    priceRange: "Free–$59",
    pros: [
      "Free tier is genuinely usable — CRM, scheduling, invoicing, and basic estimating with no credit card required",
      "Built specifically for lawn care and landscaping — not a generic FSM tool repackaged",
      "No contract, no sales call, no onboarding fee — sign up and start using it the same day",
      "Paid tier is the lowest-cost real option in the category if you need more features later",
      "Property measurement via Google Maps integration (draw polygons to calculate square footage)",
    ],
    cons: [
      "Mobile experience is weaker than paid competitors — the web app is the main interface",
      "Support is limited on the free tier (email only, slower response times)",
      "Scales poorly past 2-3 crew members — once you have multiple crews on the road, you will outgrow it",
      "Route optimization is basic compared to Jobber or GorillaDesk",
      "Fewer integrations and a smaller ecosystem than the top platforms",
    ],
    features: [
      "Free tier available",
      "Lawn-care specific CRM",
      "Property measurement",
      "Recurring scheduling",
      "Basic estimating",
      "Invoicing",
      "Customer portal",
      "Payment processing",
    ],
  },
];

export default function BestLandscapingSoftware() {
  return (
    <ComparisonLayout
      title="Best Landscaping Software (2026)"
      description="We compared the top software platforms specifically for landscaping and lawn care contractors — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to where your business actually is right now."
      trade="Landscaping"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Landscaping Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites tell you to pick software based on &ldquo;small vs. large.&rdquo; That is
            useless. A solo operator running $80K in mow-blow-go revenue has completely different needs
            than a 4-crew shop doing $600K in mixed maintenance and install work. Here is how to think
            about it based on where you actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Operator</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$100K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are doing mow/blow/go and maybe a few mulch installs. You are in the truck all day
                and at the laptop all evening. You need basic scheduling, invoicing, and a route that
                does not force you to drive in circles. Every dollar of software cost is one less
                dollar in your pocket — do not overspend here.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Yardbook (free) or Jobber Core ($29/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$100K-$400K revenue, 2-5 crew</p>
              <p className="text-sm text-gray-700 mb-2">
                Route optimization matters now — at 20+ stops a day, a bad route wastes 2-3 hours of
                drive time and $50-100 in fuel. Recurring service scheduling is non-negotiable for your
                weekly mowing clients. You are also starting to quote real install jobs — patios, retaining
                walls, plantings — and losing some of them to slow follow-up.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber ($49-99/mo) or GorillaDesk ($49-99/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$400K-$1.5M revenue, 6-15 crew</p>
              <p className="text-sm text-gray-700 mb-2">
                You have multiple crews on different routes and need real crew management, GPS tracking,
                and budget-vs-actual job costing. Upselling one-off mow clients into full maintenance is
                your biggest growth lever. You cannot afford to keep guessing whether that $20K
                hardscape install made money — you need the numbers to be real.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Connect ($149/mo) or LMN ($75-300/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ revenue, 15+ employees</p>
              <p className="text-sm text-gray-700 mb-2">
                You likely run a maintenance division and an install division, maybe snow in the winter,
                and you have commercial contracts with complex service schedules. You need fleet management,
                multi-branch tracking, real-time job costing, and purchase order workflows. This is LMN or
                Aspire territory — Jobber will start fighting you here.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: LMN (upper tiers) or Aspire ($300+/mo)
              </p>
            </div>
          </div>

          {/* A Week in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Week in the Life: Jobber vs. LMN vs. Aspire
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run your week on this software.
            Here is the same Monday-to-Friday at a 4-crew landscape maintenance company that also does
            install work, running three different platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Monday 6:30 AM — 25 Maintenance Stops Across 3 Routes</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager opens the route planner, assigns properties to Crew A, B, and C, and
                    hits optimize. Jobber re-orders the stops in logical drive order for each crew and
                    pushes the day to their mobile apps. Takes about 10 minutes. Crews see their route on
                    the phone and start driving. Good enough for most operations.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">LMN</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher builds the daily schedule in LMN with crews and properties. Routing works
                    but feels clunkier than Jobber — the strength here is that each property has a
                    budgeted hours target, so as crews clock in, the system tracks whether they are on
                    pace or blowing the budget. Owner sees margin risk in real time.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Aspire</p>
                  <p className="text-sm text-gray-700">
                    Maintenance route cards are pre-built by service contract and auto-dispatched to
                    crews. Aspire treats each commercial contract as a work ticket with defined services.
                    Overkill for a 4-crew shop — at 10+ crews with 200+ properties, this is exactly the
                    system you want.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Wednesday 2:00 PM — Sales Meeting for a $15K Hardscape Install</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Owner builds a line-item quote in Jobber — paver type, square footage, labor hours,
                    base fee. Looks clean and professional. Sends to customer through the client hub for
                    approval. What is missing: material markup logic, labor burden, or a way to know if
                    this job is actually priced to hit a 20% net margin.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">LMN</p>
                  <p className="text-sm text-gray-700">
                    Owner opens LMN estimating and builds the job with real labor burden (wage + tax +
                    insurance + overhead), material markup, equipment cost, and crew production rates.
                    The system shows target revenue, target gross profit, and target net. The owner can
                    adjust price to hit a specific margin. This is the whole reason to use LMN.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Aspire</p>
                  <p className="text-sm text-gray-700">
                    Aspire&rsquo;s estimating module is similarly deep — labor, materials, equipment, markups,
                    and margin targets. The difference is that it flows directly into purchasing, scheduling,
                    and real-time job costing without leaving the platform. At 4 crews it is more firepower
                    than you need for a $15K job.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Friday 3:00 PM — Crew Finishes Early, Dispatch Adds 2 Waitlist Jobs</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office texts the crew leader, drags two cleanup jobs onto the crew&rsquo;s schedule
                    in Jobber, and the jobs instantly show on their phones. Crew reviews the property
                    notes and heads over. Fast, simple, works exactly how you expect.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">LMN</p>
                  <p className="text-sm text-gray-700">
                    Same flow — dispatch adds the jobs to the crew. The extra benefit is that the time
                    worked on these waitlist jobs rolls into your cost-per-hour analytics automatically.
                    You will see whether filling in waitlist work actually made money, or whether
                    you lost it to drive time between stops.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Aspire</p>
                  <p className="text-sm text-gray-700">
                    Waitlist jobs are pulled from the work order backlog and assigned to the crew.
                    Service tickets update, invoicing queues up automatically, and the commercial
                    account sees the completion. Great for commercial — unnecessary ceremony for a
                    one-off residential cleanup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              Jobber wins for speed, simplicity, and price at the $100K-$1M range. LMN wins when you
              need to know your real numbers — install margin, crew productivity, cost per hour. Aspire
              wins once you are big enough that the enterprise capability pays for itself on commercial
              contracts. A 4-crew shop on Jobber Connect pays about $1,800/year. On LMN they would pay
              $1,500-3,500/year. On Aspire they would pay $15,000+ and regret it. Pick based on where
              you are, not where you want to be in 5 years.
            </p>
          </div>

          {/* Landscaping-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Landscaping-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that matter
            specifically for landscaping contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Route Optimization</h3>
              <p className="text-sm text-gray-700 mb-2">
                For a maintenance company, this is the #1 feature. A crew running 25 stops a day on a
                bad route can waste 2-3 hours of drive time. Good optimization saves $200-500 per crew
                per week in fuel and labor — and that adds up to $10K-25K a year per crew. If you run
                three crews, route optimization alone can pay for your entire software stack.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Strong, built-in</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Strong, on all plans</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">LMN: Adequate, not the strength</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aspire: Strong, enterprise-grade</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Recurring Service Scheduling</h3>
              <p className="text-sm text-gray-700 mb-2">
                Weekly, biweekly, and monthly lawn care is the bread and butter of most landscaping
                companies. Your software should set up a client once and automatically create visits,
                invoices, and reminders forever. It should also handle skip weeks (rainouts, holidays)
                without breaking the schedule. This is table stakes — but some tools handle it more
                gracefully than others.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Excellent, purpose-built</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Excellent</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Yardbook: Good for solo</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Adequate</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">LMN: Strong, tied to budgets</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Crew Scheduling and GPS Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Once you have multiple crews, you need to see who is where, who is running behind, and
                who is almost done and available for a fill-in job. GPS tracking also settles timesheet
                disputes (&ldquo;I was on site at 8 AM&rdquo;) and helps you spot the crew that is
                always 90 minutes per stop while others are 60.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber Connect: Full GPS + live status</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aspire: Enterprise-grade tracking</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">LMN: Tracking tied to job costing</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic GPS</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Basic</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Seasonal Pricing and Service Changes</h3>
              <p className="text-sm text-gray-700 mb-2">
                Your services and prices shift through the season — mowing April through October, leaf
                cleanup in November, snow removal December through March in cold markets. Your software
                should handle service-contract price adjustments, seasonal templates, and transitioning
                customers from one service set to another without rebuilding everything.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">LMN: Built for seasonal workflows</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aspire: Full contract flexibility</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Workable with templates</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Manual adjustments</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Upsell Tracking (Mow Client to Full Maintenance)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Your biggest growth lever is converting a $50/week mow client into a $200/week full
                maintenance client (mow + fertilizer + weed control + mulch refresh + seasonal cleanups).
                Software that tracks which clients have which services — and flags upsell opportunities —
                turns sales into a system instead of a hope.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aspire: Service-contract driven</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">LMN: CRM with service flags</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Tags and client notes</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Tags only</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">GorillaDesk: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Snow Removal Add-On (Dual-Season Businesses)</h3>
              <p className="text-sm text-gray-700 mb-2">
                In northern markets, snow is the other half of the year. You need to track which
                properties are on snow contracts, push/salting service types, weather-triggered
                dispatch, and separate invoicing. Not every platform handles snow cleanly — some
                require a totally parallel workflow.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aspire: Purpose-built snow module</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">LMN: Snow workflows supported</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Workable with templates</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Workable</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not purpose-built</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Chemical and Application Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you apply fertilizer, herbicide, or pesticide, most states require you to log product,
                rate, EPA number, applicator license, and weather conditions per visit. A platform with
                built-in chemical tracking saves you from a separate paper log or spreadsheet — and
                keeps you audit-ready.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Built-in chemical log</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">LMN: Via custom fields</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Aspire: Via custom workflow</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Property Measurements and Site Photos</h3>
              <p className="text-sm text-gray-700 mb-2">
                Accurate square footage drives accurate estimates. Some platforms integrate with satellite
                measurement tools so you can draw a polygon on a map and get turf area, bed area, and
                driveway square footage without leaving the house. Site photos stored per property are
                essential for install estimates and before/after documentation.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Yardbook: Built-in property drawing</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">LMN: Site photo management</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aspire: Site photos + measurements</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Photos per job, no measurement</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Photos per job</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 4-crew landscaping company
            (6 total users) actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Yardbook (free tier, 1-2 users)</p>
              <p className="text-sm text-gray-700">
                Free = <strong>$0/year</strong>. Best for solo operators or very small two-person shops.
                Paid tier (Premium) at around $59/mo if you need more. No contract, no onboarding fee.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Good for maintenance-heavy shops without large install work. Payment processing at
                2.9% + $0.30 per transaction.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Connect (5 users, with GPS)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Adds live GPS tracking, crew scheduling, and
                advanced routing. This is the plan most small landscape crews should actually be on.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">GorillaDesk (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$99-149/mo = <strong>~$1,188-1,788/year</strong>. No onboarding fee. Route optimization
                and chemical tracking included. Great for pure maintenance-only shops.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Wisetack consumer financing
                included (critical if you do $10K+ install work). Weaker routing than Jobber or
                GorillaDesk.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">LMN (5 users, full modules)</p>
              <p className="text-sm text-gray-700">
                ~$200-300/mo = <strong>~$2,400-3,600/year</strong>. May include onboarding depending on
                package. Landscape-specific estimating and budget tracking are the reason to pay this
                premium — general FSM tools cannot do what LMN does here.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Aspire (mid-size operation)</p>
              <p className="text-sm text-gray-700">
                $300+/mo base + per-user fees + implementation fee = <strong>~$15,000-30,000 in Year
                1</strong> for a mid-size commercial landscape company. Typical Aspire customers are
                doing $2M+ in revenue where the enterprise capability actually pays off.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When LMN&rsquo;s Price Makes Sense</p>
            <p className="text-sm text-gray-700">
              LMN&rsquo;s estimating and job costing typically finds 5-10% hidden margin in a landscape
              company that was previously estimating by gut feel. On a $600K business, that is $30K-60K
              a year in recovered profit. At that scale, a $3K/year subscription is one of the highest
              ROI software spends you will ever make. But if you are a $150K solo operator doing
              maintenance only, LMN is expensive overhead you do not need yet.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Route optimization quality:</strong> Ask for a trial and actually test it with 20+
              real stops across your service area. Good route planning feels obvious and fast. Bad
              route planning makes you want to go back to a paper map.
            </li>
            <li>
              <strong>Mobile app reliability:</strong> Your crew leaders work outside all day on cracked
              screens and weak signal. Test the app in airplane mode — if it does not cache the day&rsquo;s
              route offline, it will strand your crews on day one of bad service.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless the platform has built-in accounting (LMN
              and Aspire have more native features, most others do not), seamless two-way QuickBooks sync
              is non-negotiable. Test this in the trial — broken syncs create bookkeeping nightmares.
            </li>
            <li>
              <strong>Consumer financing for install jobs:</strong> If you sell hardscape, retaining
              walls, patios, or full landscape installs, consumer financing is a revenue multiplier.
              Housecall Pro has Wisetack built in. On other platforms, you use Wisetack or GreenSky as
              a standalone tool — your sales person shares a link or QR code at the kitchen table.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating client data, retraining
              your crews, and 2-4 weeks of reduced productivity. Pick a platform you can grow into for
              2-3 years, not just the one that feels right today.
            </li>
            <li>
              <strong>Contract terms:</strong> Jobber, Housecall Pro, GorillaDesk, LMN, and Yardbook all
              offer month-to-month or annual options. Aspire is a bigger commitment with a formal
              implementation process. If you are trying landscape software for the first time, start
              with a platform that lets you leave if it does not work out.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo operator doing $80K in lawn care. What should I use?
              </h3>
              <p>
                Start with Yardbook (free tier) or Jobber Core at $29/mo. Yardbook is genuinely free and
                built specifically for lawn care, which is great when every dollar counts. Jobber costs
                a bit but gives you a more polished experience and easier scaling when you add your
                second crew. Do not spend more than $50/mo on software at this stage — you need that
                money in your pocket, not a subscription.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How much does route optimization actually save?
              </h3>
              <p>
                For a maintenance crew running 20-25 stops a day, a good route optimizer saves 1-3 hours
                of drive time per crew per day. At $25/hour blended cost plus fuel, that is $40-80 per
                crew per day, or $200-400 per crew per week. For a 3-crew shop, that is $30K-60K per
                year in recovered margin. Route optimization alone justifies the software subscription
                for any maintenance-focused business.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need different software for maintenance vs. install work?
              </h3>
              <p>
                Not necessarily — but you need software that handles both cleanly. Jobber handles
                maintenance well and install work adequately. LMN handles install work extremely well
                (it is the reason to use it) and maintenance adequately. Aspire handles both at
                enterprise scale. GorillaDesk and Housecall Pro are stronger on maintenance and weaker
                on install. Match the software to whichever side of your business is growing faster.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When should I switch from Jobber to LMN?
              </h3>
              <p>
                When you are doing enough install work (more than a quarter of your revenue) that
                inaccurate estimates are eating your margin, and you cannot tell which install jobs
                actually made money. That is usually around $400K-$600K in revenue with 3-4 crews.
                Before that, Jobber is the cheaper and simpler fit. If you are maintenance-only forever,
                you may never need LMN — stay on Jobber or GorillaDesk.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When does Aspire make sense?
              </h3>
              <p>
                When you hit $1.5M-$2M+ in revenue with multiple divisions (maintenance + install + snow
                + irrigation), commercial contracts, and 20+ employees. That is when multi-branch
                management, enterprise job costing, and purchase order workflows start paying for
                themselves. Below that, Aspire is overkill and the implementation alone will exhaust
                your team.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I handle snow removal in the off-season?
              </h3>
              <p>
                If you are in a dual-season market, pick software that supports parallel service lines.
                Aspire and LMN have purpose-built snow support. Jobber and GorillaDesk can handle it
                with templates and creative setup — workable but not elegant. Housecall Pro is the
                weakest on snow because it is not built for weather-triggered dispatch. If snow is 30%+
                of your annual revenue, prioritize snow support when picking software.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What about chemical application tracking for fertilizer and weed control?
              </h3>
              <p>
                Most states require per-application logs (product, rate, EPA number, license, weather).
                GorillaDesk has this built in. LMN and Aspire support it through custom fields and
                workflows. Jobber and Housecall Pro do not have built-in chemical tracking, so you will
                need a separate log — usually a paper binder or a tracking app like PaceButler or
                TurfGro. If you are a chemical-focused business, GorillaDesk is the simplest path.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch software later without losing data?
              </h3>
              <p>
                Most platforms let you export customer data, job history, and invoices as CSV files.
                But switching is painful: you lose templates, custom workflows, recurring schedules,
                and your team&rsquo;s muscle memory. Expect 2-4 weeks of reduced productivity during any
                transition — right in your busy season is the worst time to try it. The best move is
                to pick a platform you can grow into for 2-3 years. If you are at $200K and growing
                fast, it may make sense to start on Jobber Connect now instead of Core, even if the
                higher plan costs more, so you do not have to replatform at $500K.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
