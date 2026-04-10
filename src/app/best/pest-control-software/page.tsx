import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Pest Control Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best pest control software for residential, commercial, and termite operators. Real pricing, chemical logging, route optimization, and compliance breakdowns for GorillaDesk, PestRoutes (FieldRoutes), PestPac, Briostack, Jobber, and Housecall Pro.",
};

const products: SoftwareProduct[] = [
  {
    name: "GorillaDesk",
    rating: 5,
    bestFor: "Most pest control shops — $150K-$1M, general pest + termite + wildlife mix",
    priceRange: "$49–$149",
    pros: [
      "Purpose-built for pest control — chemical logs with EPA number, rate, target pest, and weather conditions are baked into every service visit, not bolted on",
      "Route optimization is genuinely good for 20-30 stop residential days and is included on lower plans without a paywall",
      "Recurring service contracts (monthly, bi-monthly, quarterly) are one-time setup — the system auto-creates next visit, invoice, and customer reminder",
      "Customer portal shows service history, chemicals applied, and upcoming appointments — cuts office phone calls by 30-40% for most shops",
      "Month-to-month pricing with no long-term contracts and fast self-serve onboarding (most shops are running in under a week)",
    ],
    cons: [
      "Commercial contract workflows are thinner than PestPac or FieldRoutes — if you run food-service or warehouse accounts with complex scope sheets, you will feel limits",
      "Termite warranty and annual renewal tracking works but requires manual templates — not as turnkey as Briostack",
      "Smaller company with a slower development pace and fewer integrations than the larger platforms",
      "Reporting is functional for revenue and route stats but shallow on technician productivity and margin analysis",
      "Sales pipeline and two-way texting are adequate but not as rich as FieldRoutes lead-to-account flow",
    ],
    features: [
      "Pest-control-specific chemical logging",
      "EPA and state compliance reporting",
      "Route optimization",
      "Recurring contract scheduling",
      "Customer portal",
      "Auto-billing",
      "Two-way texting",
      "QuickBooks sync",
    ],
  },
  {
    name: "PestRoutes (FieldRoutes)",
    rating: 5,
    bestFor: "Growing pest operators with sales teams — $750K-$5M, heavy residential recurring",
    priceRange: "Custom pricing",
    pros: [
      "Lead-to-account workflow is the best in the category — online leads, door-to-door sales, inbound calls all drop into one pipeline and convert to recurring accounts without retyping",
      "Route optimization is built for density — handles 25-40 stop days across multiple technicians and re-optimizes on the fly when cancellations hit",
      "Chemical and material logging meets state compliance requirements out of the box (CA, FL, TX templates included) with no custom-field hacking",
      "Auto-billing and collections on recurring contracts is bulletproof — declined cards get retried, customers get automated reminders, bad accounts get flagged before they age out",
      "Two-way customer communication (text, email, portal) is deep — customers confirm, reschedule, and pay without ever calling the office",
    ],
    cons: [
      "Custom pricing makes budgeting hard before a sales call — expect $300-700+/month depending on users and modules",
      "Implementation takes 4-8 weeks with data migration and training — not a weekend setup",
      "Steeper learning curve than GorillaDesk or Jobber — office staff need real training, not a tutorial video",
      "Overkill for a 1-2 tech owner-operator shop — you will pay for sales and marketing automation you cannot use yet",
      "ServiceTitan acquired FieldRoutes in 2022 — some longtime users report the product roadmap now skews toward enterprise accounts",
    ],
    features: [
      "Lead-to-account sales pipeline",
      "Advanced route optimization",
      "Chemical tracking with state templates",
      "Recurring contract auto-billing",
      "Two-way customer messaging",
      "Customer portal",
      "Door-to-door sales tools",
      "Reporting and dashboards",
    ],
  },
  {
    name: "PestPac (WorkWave)",
    rating: 5,
    bestFor: "Established mid-to-large operations — $2M+ with commercial contracts and fleets of 10+ techs",
    priceRange: "Custom pricing",
    pros: [
      "Deepest pest control platform on the market — decades of industry workflows baked in, including complex commercial scopes, warehouse pest programs, and food-service QA documentation",
      "Compliance reporting is the gold standard — auditors know what PestPac reports look like, and regulators in strict states accept them with no friction",
      "Fleet and route management handles 20+ technicians and multi-branch operations without falling over",
      "Advanced billing supports prepaid annual contracts, multi-location commercial accounts, and service-level agreements with custom pricing per site",
      "Integrations with accounting, payroll, and commercial account portals are the most mature in the category",
    ],
    cons: [
      "Interface is dated — it looks and feels like enterprise software from a decade ago, not a modern SaaS tool",
      "Learning curve is steep — plan on 8-12 weeks before your team is comfortable, and budget for dedicated training",
      "Implementation and pricing are positioned for established companies — expect $10K-30K in Year 1 for a mid-size shop",
      "Overkill for residential-focused shops under $1.5M — you will pay for capability you never touch",
      "Mobile experience is weaker than GorillaDesk or FieldRoutes — technicians often prefer the newer tools",
    ],
    features: [
      "Enterprise chemical and compliance reporting",
      "Commercial contract management",
      "Multi-branch operations",
      "Advanced billing and prepaid contracts",
      "Fleet and route management",
      "Food-service QA documentation",
      "Accounting integrations",
      "Customer portal",
    ],
  },
  {
    name: "Briostack",
    rating: 4,
    bestFor: "Termite-heavy and recurring residential pest shops — $300K-$2M",
    priceRange: "Custom pricing",
    pros: [
      "Termite warranty and annual renewal tracking is the strongest in the category — the system auto-flags warranties coming up for renewal, generates inspection appointments, and tracks graph paper diagrams per structure",
      "Recurring contract auto-billing handles quarterly and bi-monthly residential routes cleanly — minimal A/R babysitting",
      "Customer portal shows service history, warranty documentation, and upcoming inspections — huge for termite customers who need proof for real estate closings",
      "Route optimization and technician scheduling are solid for 20-stop residential days",
      "Pest-control-specific chemical logs with EPA number, rate, and target pest built into every visit form",
    ],
    cons: [
      "Smaller user community than GorillaDesk or FieldRoutes — fewer YouTube tutorials, Facebook groups, and third-party consultants",
      "Reporting is decent but not as deep as FieldRoutes or PestPac for sales analytics and technician productivity",
      "Custom pricing without a public tier — hard to compare against GorillaDesk&rsquo;s published plans",
      "Commercial contract workflows are lighter than PestPac — residential and small-commercial is the sweet spot",
      "Mobile app is adequate but not the strongest in the category",
    ],
    features: [
      "Termite warranty tracking",
      "Graph paper structure diagrams",
      "Recurring contract auto-billing",
      "Chemical logging",
      "Customer portal",
      "Route scheduling",
      "Service history documentation",
      "Two-way messaging",
    ],
  },
  {
    name: "Jobber",
    rating: 4,
    bestFor: "Solo operators and 1-3 tech pest shops doing general pest without heavy compliance",
    priceRange: "$29–$149",
    pros: [
      "Cleanest mobile app in the category — a new technician can learn it in an hour with no formal training",
      "Affordable starter plan ($29/mo Core) is the lowest real-cost option if you are under $150K in revenue",
      "Client hub lets homeowners request service, approve quotes, and pay online without calling your office",
      "Route optimization is solid for 10-20 residential stops a day and included on the Connect plan",
      "Self-serve onboarding — you can be live in a day without a sales call or implementation fee",
    ],
    cons: [
      "No built-in chemical logging with EPA number, rate, target pest, and applicator license fields — you will need custom forms or a separate paper log",
      "No state compliance reporting templates — if you operate in CA, FL, or TX, you will be building compliance reports manually in spreadsheets",
      "No termite warranty or annual renewal tracking — graph paper diagrams, warranty renewals, and inspection reminders have to be hacked with tags and notes",
      "Recurring service contracts work but lack pest-control-specific templates for quarterly, bi-monthly, and prepaid annual plans",
      "No door-to-door sales or lead pipeline tools — if you are growing with a sales team, you will outgrow this fast",
    ],
    features: [
      "Scheduling and dispatch",
      "Route optimization (Connect)",
      "Client self-service hub",
      "Quoting with follow-ups",
      "Recurring jobs",
      "Payment processing",
      "QuickBooks sync",
      "GPS tracking (Connect)",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Multi-trade shops where pest control is a side service, not the main line",
    priceRange: "$69–$149",
    pros: [
      "Most technicians learn it in a day — the lowest training overhead in the category",
      "Wisetack consumer financing is built in — meaningful for termite treatment jobs in the $2K-8K range where homeowners often need financing to say yes",
      "Online booking lets homeowners self-schedule mosquito, ant, and one-time treatment service without calling you",
      "Automated review requests build Google reviews in the background — this is a bigger deal than most owners realize for local pest SEO",
      "Solid QuickBooks two-way sync that rarely breaks",
    ],
    cons: [
      "No chemical logging with EPA number, rate, target pest, or applicator license — this is a hard limit for compliance-heavy states",
      "No state compliance reporting — you will be tracking applications in a separate tool or spreadsheet",
      "No termite warranty or annual renewal tracking",
      "Route optimization is weaker than GorillaDesk or FieldRoutes — fine for 10 stops, painful at 25+",
      "Not purpose-built for pest — if pest control is more than a side service, you will feel the gaps",
    ],
    features: [
      "Scheduling and dispatch",
      "Wisetack financing",
      "Online booking",
      "Automated review requests",
      "Recurring jobs",
      "Payment processing",
      "QuickBooks sync",
      "Customer notifications",
    ],
  },
];

export default function BestPestControlSoftware() {
  return (
    <ComparisonLayout
      title="Best Pest Control Software (2026)"
      description="We compared the top software platforms specifically for pest control operators — residential recurring, termite, commercial, and wildlife. Real pricing, real compliance capability, matched to where your business actually is right now."
      trade="Pest Control"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Pest Control Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites tell you to pick pest control software based on &ldquo;small vs. large.&rdquo;
            That is useless. A solo general-pest operator doing $120K in recurring quarterly routes has
            completely different needs than a 4-tech shop doing $500K with termite warranties, wildlife,
            and a handful of commercial accounts. Here is how to think about it based on where you
            actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Operator</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$150K revenue, 1 tech</p>
              <p className="text-sm text-gray-700 mb-2">
                You are running general pest residential routes and maybe the occasional termite job.
                You are in the truck all day and at the laptop all evening. You need basic scheduling,
                recurring contracts, chemical logging that keeps you audit-ready, and invoicing. Every
                dollar of software cost is one less dollar in your pocket — do not overspend here.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: GorillaDesk ($49/mo) or Jobber Core ($29/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$750K revenue, 2-5 techs</p>
              <p className="text-sm text-gray-700 mb-2">
                Route optimization matters now — at 22-30 residential stops a day per tech, a bad route
                wastes 2 hours of drive time and $50 in fuel. You have real compliance obligations — EPA
                number, rate, weather, and applicator license logged at every stop. Termite warranties
                and annual inspections need a system, not sticky notes. Customer portal cuts your office
                phone volume in half.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: GorillaDesk ($99-149/mo) or Briostack (custom)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$750K-$2.5M revenue, 6-15 techs</p>
              <p className="text-sm text-gray-700 mb-2">
                You have a sales team (inbound, online, or door-to-door) and need a real lead pipeline
                that converts to recurring accounts without retyping data. Auto-billing on hundreds of
                recurring contracts has to be bulletproof. You are starting to land commercial accounts
                that want service-level agreements and QA documentation. You cannot keep running
                compliance reports in Excel.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: PestRoutes / FieldRoutes (custom) or Briostack (custom)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$2.5M+ revenue, 15+ techs</p>
              <p className="text-sm text-gray-700 mb-2">
                You are multi-branch or on your way. You run commercial food-service, warehouse, and
                property-management contracts with complex scopes. Compliance audits are routine. You
                need prepaid annual billing, SLA tracking, and QA documentation your commercial
                customers expect. This is PestPac or FieldRoutes territory — GorillaDesk will start
                fighting you here.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: PestPac (custom) or FieldRoutes (custom)
              </p>
            </div>
          </div>

          {/* A Week in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Week in the Life: GorillaDesk vs. FieldRoutes vs. PestPac
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run your week on this software.
            Here is the same Monday-to-Friday at a 4-tech pest control shop doing $500K in revenue
            (80% residential recurring plus 20% termite and wildlife callouts), running three different
            platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Monday 7:00 AM — Tech Starts a 22-Stop General Pest Residential Route</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">GorillaDesk</p>
                  <p className="text-sm text-gray-700">
                    Office manager opened the route last night, hit optimize, and pushed it to the
                    tech&rsquo;s phone. Tech pulls up the first stop, sees the customer&rsquo;s quarterly
                    service history, the chemicals applied last visit, and any pest pressure notes. At
                    completion, the tech logs product, EPA number, rate, and target pest in under 30
                    seconds. Fast, simple, exactly how you would want it.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">FieldRoutes</p>
                  <p className="text-sm text-gray-700">
                    Same flow, with more depth. The route was built from recurring contract data and
                    auto-optimized for density. Tech sees customer history, outstanding balance, and
                    any open service tickets. Chemical logging pulls from a pre-approved product list
                    tied to state compliance templates. On finish, auto-billing hits the customer&rsquo;s
                    card and a service receipt goes out by text.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">PestPac</p>
                  <p className="text-sm text-gray-700">
                    Route cards are pre-built by the dispatcher, pulling from service contracts. Tech
                    sees the full scope including any commercial SLAs. Chemical logging is thorough
                    but the interface is dated — takes an extra 30 seconds per stop compared to the
                    newer tools. Overkill for pure residential at 4 techs — shines at 15+ techs with
                    complex commercial routes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Wednesday 2:00 PM — Termite Inspection Callout, Warranty Renewal, $3,200 Treatment Proposal</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">GorillaDesk</p>
                  <p className="text-sm text-gray-700">
                    Owner runs the inspection, adds photos and notes in the mobile app, and builds a
                    line-item proposal for a perimeter treatment. Sends to the homeowner through the
                    customer portal for approval. Warranty tracking works but requires a custom tag or
                    template — not as turnkey as Briostack.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">FieldRoutes</p>
                  <p className="text-sm text-gray-700">
                    Inspection flow is deep — photos, graph paper diagram, wood moisture readings, and
                    conducive conditions all captured in one form. Proposal goes out with e-signature
                    and Wisetack or GreenSky financing link. Annual warranty renewal auto-schedules 12
                    months out. Strong fit for termite-heavy shops.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">PestPac</p>
                  <p className="text-sm text-gray-700">
                    Termite module is thorough — graph paper structure diagrams, multi-year warranty
                    tracking, prepaid annual renewals, and commercial real-estate closing documentation.
                    Built for companies that do hundreds of termite jobs a year. A 4-tech shop with
                    occasional termite work will feel the complexity cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Friday 4:30 PM — End-of-Week Chemical Usage Report for State Compliance</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">GorillaDesk</p>
                  <p className="text-sm text-gray-700">
                    Owner pulls the weekly application report — all products, EPA numbers, rates, target
                    pests, and applicator licenses logged against each property. Exports to PDF in under
                    a minute. Meets most state requirements without modification. If an inspector shows
                    up Monday morning, you are ready.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">FieldRoutes</p>
                  <p className="text-sm text-gray-700">
                    Compliance reports are templated by state — CA, FL, TX each have their own format
                    built in. Owner picks the state template, date range, and technician, and the PDF
                    is ready in seconds. This is the gold standard for states with strict per-application
                    reporting requirements.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">PestPac</p>
                  <p className="text-sm text-gray-700">
                    Compliance reporting is deeper still — multi-branch, multi-state, commercial-account
                    QA documentation, and regulator-specific templates. Auditors recognize the format.
                    At 4 techs the depth is unused — at 20+ techs in strict states it pays for itself
                    on the first audit you pass without a single finding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              GorillaDesk wins for speed, simplicity, and price at the $150K-$1M range, especially for
              residential general pest. FieldRoutes wins when you have a sales team and hundreds of
              recurring accounts where lead-to-account automation and bulletproof auto-billing matter.
              PestPac wins once you are big enough to run commercial contracts, multi-branch operations,
              and compliance audits where enterprise depth pays for itself. A 4-tech shop on GorillaDesk
              pays about $1,800/year. On FieldRoutes they would pay $4,000-7,000/year. On PestPac they
              would pay $12,000+ and regret it. Pick based on where you are, not where you want to be
              in 5 years.
            </p>
          </div>

          {/* Pest-Control-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Pest-Control-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that matter
            specifically for pest control operators — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Chemical and Pesticide Logging</h3>
              <p className="text-sm text-gray-700 mb-2">
                For any pest control business, this is the #1 compliance feature. Every application
                needs product name, EPA registration number, rate, quantity, target pest, weather
                conditions, applicator license number, and location on the property. If your software
                does not capture this cleanly on mobile, your technicians will skip fields and you will
                fail an audit. A separate paper log is an invitation to a $500-5,000 state fine.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Built-in, strong</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Built-in, deep</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Enterprise-grade</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Briostack: Built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">State Compliance Reporting</h3>
              <p className="text-sm text-gray-700 mb-2">
                California, Florida, and Texas have strict per-application reporting requirements, and
                other states are catching up. Your software should generate state-specific compliance
                reports in the format regulators expect — not a raw chemical log that you have to
                reformat by hand. For high-volume residential shops, this alone can save 5-10 hours a
                week of office work.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: State templates built in</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Regulator-recognized</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Generic reports</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Briostack: Generic reports</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Recurring Service Contracts and Auto-Billing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Pest control is a recurring revenue business. Monthly, bi-monthly, and quarterly
                residential contracts drive 70-90% of the P&amp;L for most shops. Your software should
                set up a customer once and automatically generate visits, invoices, and payment
                collection forever. It should also handle prepaid annual contracts, mid-contract price
                increases, and failed-card retries without babysitting.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Excellent, purpose-built</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Bulletproof auto-billing</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Briostack: Strong</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Enterprise depth</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Workable, not pest-specific</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Workable</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Route Optimization for Dense Residential Days</h3>
              <p className="text-sm text-gray-700 mb-2">
                A pest control tech running a 25-stop residential day on a bad route wastes 2-3 hours
                in the truck. Good optimization saves $200-400 per tech per week in fuel and labor, and
                lets you fit 2-4 more stops in a day. For a 4-tech shop, route optimization alone can
                pay for your software stack twice over. Test it with a real day of your own stops
                during the trial.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Strong, included</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Built for density</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Enterprise-grade</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Briostack: Solid</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Solid on Connect plan</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Termite Warranty and Annual Renewal Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Termite jobs come with multi-year warranties and annual inspection obligations. Miss a
                renewal and you are looking at a liability claim when the customer finds new damage.
                Your software should auto-schedule annual inspections, generate renewal notices, store
                graph paper structure diagrams, and produce the warranty documentation that real-estate
                transactions often require.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Briostack: Purpose-built</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Enterprise-depth</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Strong</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Custom templates</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Customer Portal and Two-Way Messaging</h3>
              <p className="text-sm text-gray-700 mb-2">
                Pest control customers want to see their service history, upcoming appointments, and
                what was applied at their home — without calling your office. A self-service portal
                plus two-way texting cuts inbound call volume by 30-50% and raises customer
                satisfaction at the same time. This is one of the highest-ROI features you can turn on.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Deepest in category</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Solid, included</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Briostack: Strong</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">PestPac: Functional, dated UX</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Good client hub</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Good notifications</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Lead-to-Account Sales Pipeline</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you have a sales team (inbound calls, online leads, or door-to-door), you need a
                pipeline that captures the lead, tracks conversion, and drops a closed deal straight
                into a recurring account with the first service scheduled. Retyping data between a
                spreadsheet, a CRM, and your FSM tool loses 10-20% of your leads to process friction.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Best in category</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Enterprise-grade</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Basic pipeline</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Briostack: Adequate</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Quote follow-ups only</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic tags</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Commercial Contract Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                Commercial pest — food service, warehouses, property management — is a different
                animal. You need scope sheets per location, service-level agreements, QA documentation
                for third-party auditors, and multi-site invoicing for customers with dozens of
                properties. Most residential-focused tools fall apart here; enterprise pest platforms
                are built for it.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PestPac: Deepest in category</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldRoutes: Strong</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Briostack: Light commercial</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Residential focus</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built for it</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built for it</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 4-tech pest control shop
            (6 total users, $500K revenue, 80% residential recurring plus 20% termite and wildlife)
            actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Good for owner-operator general pest without compliance-heavy requirements. You will
                need a separate chemical log — usually a paper binder or a spreadsheet — which is a
                real hidden cost in audit-heavy states.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">GorillaDesk (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$99-149/mo = <strong>~$1,188-1,788/year</strong>. No onboarding fee. Chemical logging,
                route optimization, and customer portal all included. For most $150K-$1M pest shops,
                this is the best value on the market.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Wisetack financing for
                termite treatment jobs is a real revenue lever. No built-in chemical logging or
                compliance reporting — same hidden cost as Jobber in strict states.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Briostack (custom pricing)</p>
              <p className="text-sm text-gray-700">
                Typically <strong>$2,500-5,000/year</strong> for a 4-tech shop. Termite warranty and
                annual renewal tracking are the reason to pay the premium — if you do 50+ termite jobs
                a year, the missed-renewal liability you avoid pays for the subscription many times over.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">PestRoutes / FieldRoutes (custom pricing)</p>
              <p className="text-sm text-gray-700">
                Typically <strong>$4,000-8,000/year</strong> for a 4-6 tech shop, plus 4-8 weeks of
                implementation. Lead-to-account pipeline, state-template compliance reporting, and
                bulletproof auto-billing are the reasons to pay this. The ROI math works once you are
                growing past $750K with a sales function.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">PestPac by WorkWave (enterprise)</p>
              <p className="text-sm text-gray-700">
                Base + per-user fees + implementation fee = <strong>~$10,000-30,000 in Year 1</strong>
                for a mid-to-large pest operation. Typical PestPac customers are $2.5M+ with commercial
                contracts, multi-branch operations, or strict-state compliance needs where the
                enterprise depth actually pays for itself.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When FieldRoutes&rsquo; Price Makes Sense</p>
            <p className="text-sm text-gray-700">
              FieldRoutes typically recovers 5-10% of lost residential accounts through better
              auto-billing retries and two-way customer communication, plus another 3-5% in sales
              conversion through its lead-to-account pipeline. On a $1M pest business, that is
              $80K-150K/year in recovered revenue. At that scale, a $6K/year subscription is one of
              the highest ROI software spends you will ever make. But if you are a $200K owner-operator,
              it is expensive overhead you do not need yet — GorillaDesk will do everything you
              actually use today.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Chemical log mobile experience:</strong> Ask for a trial and actually have a
              technician log 10 applications on a phone. If the form takes more than 30 seconds per
              stop, your techs will skip fields or fake the data. That is how shops fail audits.
            </li>
            <li>
              <strong>Route optimization quality:</strong> Test it with 20-30 real stops across your
              service area. Good route planning feels obvious and fast. Bad route planning makes you
              want to go back to a paper map and your own knowledge of the neighborhood.
            </li>
            <li>
              <strong>Mobile app reliability:</strong> Your techs work outside all day on cracked
              screens and weak signal. Test the app in airplane mode — if it does not cache the
              day&rsquo;s route offline, it will strand your crews in rural service areas.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless the platform has a deep accounting
              layer, seamless two-way QuickBooks sync is non-negotiable. Test this in the trial —
              broken syncs create bookkeeping nightmares and missed revenue.
            </li>
            <li>
              <strong>Consumer financing for termite jobs:</strong> If you sell termite treatments in
              the $2K-8K range, consumer financing is a revenue multiplier. Housecall Pro has Wisetack
              built in. On other platforms, use Wisetack or GreenSky as a standalone — your tech
              shares a link or QR code at the kitchen table.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data,
              retraining your techs, and 4-8 weeks of reduced productivity. Pick a platform you can
              grow into for 2-3 years, not just the one that feels right today.
            </li>
            <li>
              <strong>Contract terms:</strong> GorillaDesk, Jobber, and Housecall Pro all offer
              month-to-month options. FieldRoutes, PestPac, and Briostack are bigger commitments with
              formal implementation processes. If you are trying pest control software for the first
              time, start with a platform that lets you leave if it does not work out.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo pest control operator doing $120K. What should I use?
              </h3>
              <p>
                Start with GorillaDesk on the lower plan. It is pest-control-specific, has chemical
                logging that keeps you audit-ready, and route optimization that matters even for a
                solo operator running 20 stops a day. Jobber Core is cheaper at $29/mo but will leave
                you managing chemical logs in a separate paper binder — fine in low-compliance states,
                risky in CA, FL, and TX. Do not spend more than $99/mo on software at this stage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How important is built-in chemical logging?
              </h3>
              <p>
                In strict states (CA, FL, TX, NY, and others) it is non-negotiable — you are one
                inspection away from a $500-5,000 fine and a license issue if your records are not
                clean. Even in looser states, a built-in log cuts your office time by 3-5 hours a week
                and eliminates the &ldquo;did the tech actually write it down&rdquo; problem. The only
                reason to run without it is a sub-$100K shop where paper logging is faster than the
                software.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need pest-control-specific software or will Jobber work?
              </h3>
              <p>
                Jobber works fine for a solo or 2-tech general pest operation in low-compliance states.
                Once you add termite work, hit compliance-heavy states, or grow past 3 techs with
                hundreds of recurring contracts, the lack of chemical logging, state reporting, and
                termite warranty tracking becomes a real drag. At that point GorillaDesk, Briostack, or
                FieldRoutes will save you 5-10 hours of office work a week and protect you from
                compliance mistakes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When should I switch from GorillaDesk to FieldRoutes?
              </h3>
              <p>
                When you add a sales team (inbound phone, online leads, or door-to-door) and need a
                real lead pipeline, and when your auto-billing volume gets big enough that GorillaDesk
                is letting small failed-card issues slip through. That is usually around $750K-$1.2M in
                revenue with 5-8 techs and a few hundred recurring accounts. Below that, GorillaDesk
                is cheaper, simpler, and does everything you actually use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When does PestPac make sense?
              </h3>
              <p>
                When you hit $2.5M+ in revenue with multi-branch operations, commercial food-service
                and warehouse contracts, or strict-state compliance obligations where enterprise-grade
                reporting pays for itself on the first audit. Below that, PestPac is overkill and the
                implementation alone will exhaust your team. If you are a pure residential shop under
                $2M, FieldRoutes is almost always a better fit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I handle termite warranty tracking and annual inspections?
              </h3>
              <p>
                Briostack is the strongest in the category — it auto-schedules annual inspections,
                generates renewal notices, and stores graph paper structure diagrams. FieldRoutes and
                PestPac also handle it well. GorillaDesk works with custom templates and tags.
                Jobber and Housecall Pro do not have real termite workflows — if termite is more than
                10% of your revenue, you should not be on them. Missed warranty renewals create real
                liability exposure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What about route optimization for high-density residential days?
              </h3>
              <p>
                For a pest tech running 22-30 stops a day, a good route optimizer saves 1-2 hours of
                drive time per tech per day. At $25/hour blended cost plus fuel, that is $40-70 per
                tech per day, or $200-350 per tech per week. For a 4-tech shop, that is $40K-70K per
                year in recovered margin. Route optimization alone justifies the subscription on any
                pest-control-specific platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch pest control software later without losing data?
              </h3>
              <p>
                Most platforms let you export customer data, service history, and invoices as CSV
                files. But switching is painful: you lose templates, custom forms, recurring schedules,
                and your team&rsquo;s muscle memory. Expect 4-8 weeks of reduced productivity during
                any transition — right in the middle of your busy season is the worst time to try it.
                The best move is to pick a platform you can grow into for 2-3 years. If you are at
                $300K and growing fast, it may make sense to start on GorillaDesk or Briostack now
                instead of Jobber, so you do not replatform at $750K.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
