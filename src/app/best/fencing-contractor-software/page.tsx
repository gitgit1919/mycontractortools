import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Fencing Contractor Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best software for fencing contractors. Real pricing, linear-foot estimating, permit tracking, and consumer financing breakdowns for Jobber, Housecall Pro, JobNimbus, Buildertrend, FieldPulse, and ServiceTrade.",
};

const products: SoftwareProduct[] = [
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Most residential fence contractors — $150K-$1M in mixed install and repair work",
    priceRange: "$29–$149",
    pros: [
      "Fastest quote-to-signed workflow in the category — build a 240 ft vinyl privacy fence estimate in the truck after the measure and email it before you leave the driveway",
      "Reusable line-item templates handle the reality of fence pricing — per-foot labor, posts, panels, concrete, gate hardware, demo and haul-away all as separate lines so you can actually see margin",
      "Client hub lets homeowners approve the estimate, upload their HOA form, and pay the deposit without a phone call — recovers 10-15% of jobs that would have ghosted",
      "Automated quote follow-ups after 3, 7, and 14 days recover the homeowners who got sidetracked — this alone pays for the subscription on a fencing book of business",
      "Cleanest mobile app for crew leaders in the category — new hires can use it day one without a training session",
    ],
    cons: [
      "No built-in linear-foot or gate calculator — you build templates yourself (once, then they work forever)",
      "No consumer financing built in — for $8K-25K residential installs, you lose jobs to the contractor across the street who has Wisetack or GreenSky at the kitchen table",
      "Job costing on install work is thin — if you want to know whether that 380 ft cedar fence actually made money after material overruns, you are exporting to a spreadsheet",
      "No permit or HOA approval workflow — you track that manually in notes or a separate tool",
      "Not fencing-specific — it is a general field-service platform, so no material catalogs or property-line documentation templates out of the box",
    ],
    features: [
      "Template-based estimating",
      "Scheduling",
      "Client self-service hub",
      "Quote follow-ups",
      "Batch invoicing",
      "GPS tracking (Connect plan)",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 5,
    bestFor: "Residential fence contractors who live or die by $8K-$25K install jobs — financing is the difference",
    priceRange: "$69–$149",
    pros: [
      "Wisetack consumer financing built in — this is the reason to use Housecall Pro for fencing. On a $14K cedar privacy fence, the customer who was going to &ldquo;think about it&rdquo; often signs the same day at $189/mo. Contractors we talk to attribute 20-30% of closed installs to financing availability.",
      "Online booking lets homeowners request free measures directly from your website — books 2-5 extra measures per week for most fence companies",
      "Automated review requests after install build Google reviews in the background — matters a lot for local SEO when someone searches &ldquo;fence installer near me&rdquo;",
      "Simple enough that a crew lead with no software background learns the mobile app in a day",
      "Solid two-way QuickBooks sync that does not break every other month",
    ],
    cons: [
      "No linear-foot estimating logic or fence-specific templates — you build line items from scratch like you would in Jobber",
      "Project tracking for multi-day installs is shallow — fine for a one-day 80 ft chain link job, awkward for a 600 ft vinyl job that spans a week with permit delays and weather",
      "No permit or HOA tracking — workaround is client notes and tags",
      "Budget vs actual job costing is basic — you will know revenue per job, not profit per job without an export",
      "Route optimization is weaker than Jobber (not a big deal for fencing where you have 1-3 jobs a day, not 25)",
    ],
    features: [
      "Wisetack consumer financing",
      "Online booking",
      "Automated review requests",
      "GPS dispatching",
      "Recurring jobs",
      "Payment processing",
      "QuickBooks sync",
      "Customer notifications",
    ],
  },
  {
    name: "JobNimbus",
    rating: 4,
    bestFor: "Fencing crews that also run gutters, siding, or restoration — shared pipeline with roofing-style lead tracking",
    priceRange: "$25–$99",
    pros: [
      "Pipeline-style CRM is ideal for fence contractors who run lead flow like a sales team — move a prospect from &ldquo;measure booked&rdquo; to &ldquo;quote sent&rdquo; to &ldquo;deposit paid&rdquo; visually, same way roofing companies do",
      "Works well for crews that do multiple trades (common in fencing — fence + gutter + minor exterior) without forcing you into separate systems",
      "Strong photo-per-job documentation for before/during/after and property line marker photos — critical when neighbors later claim your fence is 6 inches over the line",
      "Price point stays reasonable as you grow — cheaper than Jobber at the equivalent tier",
      "Decent integration with EagleView and similar measurement tools that some fence estimators use for satellite-based takeoffs",
    ],
    cons: [
      "Interface is dated and cluttered — more of a learning curve than Jobber or Housecall Pro for crews who just want to look at today&rsquo;s job",
      "Estimating is workable but not as clean as Jobber — building a detailed fence quote with gate line items takes more clicks",
      "Mobile app is adequate, not best-in-class — crew leaders sometimes prefer the web view",
      "No built-in consumer financing — you add Wisetack or similar as a standalone link",
      "Support response times are slower than Jobber or Housecall Pro based on user reports",
    ],
    features: [
      "Pipeline CRM",
      "Photo documentation",
      "Estimating",
      "Scheduling",
      "Invoicing",
      "Multi-trade workflows",
      "QuickBooks sync",
      "EagleView integration",
    ],
  },
  {
    name: "Buildertrend",
    rating: 4,
    bestFor: "Design-build and high-end residential fence companies doing $30K+ custom jobs with long permit timelines",
    priceRange: "$499+",
    pros: [
      "Real project management for multi-week jobs — a 1,200 ft ornamental aluminum install with HOA approval, permit pull, material lead time, and 4 crew days actually looks like a project instead of a calendar entry",
      "Selections and change-order workflow is strong — when the homeowner decides mid-job they want bronze caps instead of black, you document it, price it, and get their digital signature before your crew spends an hour on the change",
      "Customer portal is the most polished in the category — homeowners see photos, schedule, permit status, and payment schedule in a branded portal that makes you look bigger than you are",
      "Daily logs with weather, crew hours, and materials received are built for GC-style workflows — useful when insurance or HOA questions come up 6 months later",
      "Purpose-built for residential construction-adjacent trades — fence is a natural fit alongside the deck builders and outdoor living contractors already using it",
    ],
    cons: [
      "Expensive — $499/mo starting is 3-5x what Jobber or Housecall Pro costs, and it scales up from there. Budget $8K-$15K/year for a small fence company.",
      "Overkill for any fence contractor whose average job is under $10K — you will pay for capability you never touch",
      "Steep learning curve — plan on 4-6 weeks before the team is comfortable",
      "Scheduling and routing are fine but weaker than Jobber for day-to-day maintenance-style dispatching",
      "Implementation process requires a dedicated person in your office to set it up properly",
    ],
    features: [
      "Project management",
      "Selections and change orders",
      "Customer portal",
      "Daily logs",
      "Schedules and gantt views",
      "Estimating",
      "Invoicing and payments",
      "Document storage",
    ],
  },
  {
    name: "FieldPulse",
    rating: 4,
    bestFor: "Fence contractors who want a Jobber-style tool at a slightly lower price or with more customization",
    priceRange: "$79–$149",
    pros: [
      "Feature parity with Jobber on the core workflow (estimates, scheduling, invoicing, client portal) often at a lower effective price for small teams",
      "Custom fields and workflow builder are more flexible than Jobber — you can actually build a &ldquo;permit status&rdquo; or &ldquo;HOA approval&rdquo; field into your job record without workarounds",
      "Price book with custom product catalogs works well for fence-specific line items — you can load in posts, panels, gates by material type and reuse them across estimates",
      "Stronger built-in inventory tracking than Jobber — helpful when you are managing $15K+ in material across multiple active jobs",
      "Responsive support team that actually helps set up your workflow during trial — not a common experience in the category",
    ],
    cons: [
      "Smaller user community than Jobber or Housecall Pro — fewer YouTube tutorials, Facebook groups, or consultants who know the product",
      "Mobile app is solid but not as polished as Jobber&rsquo;s",
      "No Wisetack-style financing built in — same standalone workaround as Jobber",
      "Some advanced features require higher tiers, and the pricing matrix is less transparent than competitors",
      "Brand awareness in the trades is low, so your customers will not recognize it (does not matter, but some owners care)",
    ],
    features: [
      "Custom fields and workflows",
      "Estimating with price book",
      "Scheduling",
      "Inventory tracking",
      "Invoicing",
      "Client portal",
      "GPS tracking",
      "QuickBooks sync",
    ],
  },
  {
    name: "ServiceTrade",
    rating: 4,
    bestFor: "Commercial fencing and gate contractors — access control, automated gates, service contracts, $1M+ revenue",
    priceRange: "Custom (typically $200+/user/mo)",
    pros: [
      "Purpose-built for commercial service contracts — if you install and service automated gates, access control, and commercial perimeter fencing with recurring inspections, this is the only platform on this list that actually handles that workflow end-to-end",
      "Customer portal shows facility managers their inspection history, service tickets, deficiencies, and quotes for repair work — sells itself to property management companies",
      "Deficiency tracking and follow-on quoting workflow turns inspection work into install work automatically — the business model for commercial gate contractors",
      "Mobile app is built for technicians doing service calls — time tracking, parts lookup, signature capture, photo documentation per asset",
      "Integrates with accounting and ERP systems used by larger commercial operations",
    ],
    cons: [
      "Wrong tool for residential fence installers — if 80% of your work is homeowner wood and vinyl fences, this is expensive and overbuilt",
      "Pricing is per-user and enterprise-style — easily $15K-30K/year for a small commercial gate shop",
      "Implementation takes months and requires internal champions",
      "The UI is dense and technician-focused — not as friendly for a residential sales rep quoting a backyard fence",
      "Not the right choice unless service contracts and recurring inspections are already a real part of your revenue",
    ],
    features: [
      "Commercial service contracts",
      "Inspection workflows",
      "Deficiency tracking",
      "Asset management",
      "Customer portal",
      "Dispatching",
      "Invoicing",
      "ERP integrations",
    ],
  },
];

export default function BestFencingSoftware() {
  return (
    <ComparisonLayout
      title="Best Fencing Contractor Software (2026)"
      description="We compared the top software platforms for fencing contractors — residential install, commercial gate service, and everything in between. Real pricing, honest trade-offs, and a clear-eyed look at the fact that fencing is a specialty trade most platforms were not built for."
      trade="Fencing"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Honest up-front framing */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-brand-blue mb-1">Start here: fencing is a small specialty trade</p>
            <p className="text-sm text-gray-700">
              There is no PaintScout for fencing. No dedicated linear-foot estimator built by a fencing
              contractor that went national. Every platform on this list is a general field-service or
              construction management tool that fence companies use by building their own templates.
              That is not a knock — it just means you are evaluating how well each tool bends to fit
              fencing, not how specialized it is. The good news: a few templates and a price book get
              you 90% of the way there on any of these.
            </p>
          </div>

          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Fencing Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites rank fencing software as if every contractor runs the same business. A
            solo operator repairing storm-damaged backyard fences has completely different needs than
            a 4-crew residential installer running $5K-$25K cedar and vinyl jobs, which is completely
            different from a commercial gate shop servicing HOAs and industrial sites. Match the tool
            to where you actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Operator</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$150K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are doing repairs, small residential installs, and maybe the occasional full
                backyard. You run the measure, the quote, the install, and the invoice yourself. You
                need basic estimating, a professional quote document, and online payment — nothing
                more. Do not overspend on software at this stage.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Core ($29/mo) or markate (basic)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$500K revenue, 1-2 crews</p>
              <p className="text-sm text-gray-700 mb-2">
                Most of your work is $5K-$25K residential installs — wood privacy, vinyl, chain link.
                You live or die by whether the homeowner can afford your quote, which is why consumer
                financing moves the needle. You also need reusable estimate templates with line items
                for posts, panels, gates, concrete, and labor per foot.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-149/mo) or Jobber ($49-99/mo) + Wisetack
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$500K-$1.5M revenue, 3-5 crews</p>
              <p className="text-sm text-gray-700 mb-2">
                You have multiple crews on multiple jobs. Scheduling around permit and HOA delays is
                now a real problem. You are also doing bigger jobs (1,000+ ft of ornamental aluminum,
                design-build backyard packages) and need change-order workflow, crew GPS, and real job
                costing so you know which jobs made money.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Connect ($149/mo), JobNimbus, or FieldPulse
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Design-Build or Commercial</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ revenue, complex jobs</p>
              <p className="text-sm text-gray-700 mb-2">
                Either you are doing high-end custom residential with $30K+ design-build projects,
                long permit windows, and selections management — or you are a commercial gate and
                perimeter contractor with service contracts, inspection routes, and access control
                work. Your needs split along that fork.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Buildertrend ($499+/mo) for design-build, ServiceTrade for commercial service
              </p>
            </div>
          </div>

          {/* A Week in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Week in the Life: Jobber vs. Housecall Pro vs. Buildertrend
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run a fencing business on
            this software. Here is the same week at a 4-person residential fence company (1 sales/owner,
            3-person install crew, $500K revenue, mostly residential install) running three different
            platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Tuesday 11:00 AM — On-Site Measure for 240 ft Vinyl Privacy Fence with 2 Gates</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Owner walks the property, takes photos of every stretch (terrain changes, the old
                    chain link to demo, the oak root at post 12), measures each run, and opens Jobber
                    on the phone. Pulls up the &ldquo;6 ft vinyl privacy&rdquo; estimate template, enters 240
                    linear feet, adds 2 single gates as line items, adjusts labor based on the slope,
                    and emails the PDF quote before leaving the driveway. Homeowner sees it on their
                    phone by the time he is back in the truck.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Same workflow — builds from a template in the mobile app. Difference: at the
                    kitchen table, owner offers Wisetack financing right from the quote. Homeowner
                    applies in 2 minutes, gets approved for $189/mo, signs the same day. Same job,
                    but closed on the spot instead of waiting 3 days for the homeowner to &ldquo;run the
                    numbers.&rdquo; That is a 25-30% difference in close rate on install work.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Owner creates the job in the mobile app but the estimating workflow has more
                    steps — built for bigger design-build jobs. Adds photos, measurements, and
                    selections (vinyl color, gate style, post caps). Sends a professional branded
                    proposal through the customer portal. More ceremony than a 240 ft vinyl job
                    needs, and the homeowner is waiting a day while you finish the proposal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Following Monday 9:00 AM — HOA Approval Back, Schedule Install, Order Materials</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Owner marks the job as approved in the notes, drags it onto next Thursday on the
                    crew calendar, and sends the crew a heads-up. Material order happens in a separate
                    call to the supplier — Jobber does not track that. If a panel is backordered, it
                    is on the owner to remember to update the job.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Same workflow as Jobber — drag to schedule, notify crew, call supplier separately.
                    Bonus: Housecall Pro automatically texts the homeowner the day before with a
                    reminder and a photo of the crew leader, which cuts down on &ldquo;who is at my door&rdquo;
                    confusion on install morning.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    HOA approval is a document attached to the job record with a status flag.
                    Material delivery gets a separate line on the gantt chart tied to the install
                    date. When the supplier calls to say the post caps are delayed 3 days, owner
                    updates the schedule and the homeowner sees the new timeline automatically in
                    their portal. This is where Buildertrend starts to earn its price.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Install Day — 3-Person Crew, Post Setting, Panels, Gate Hardware</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Crew leader opens the job on the phone, sees the site photos from the measure,
                    clocks in, and gets to work. Takes progress photos throughout the day. On the
                    third gate adjustment that evening, he punches out and the hours roll into the
                    timesheet. Owner sees the crew clocked in 9 hours against a budgeted 7 — no
                    built-in alert, he has to notice.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Same flow as Jobber. After the crew finishes, the system automatically sends the
                    final invoice and a review request to the homeowner&rsquo;s email and phone. The
                    homeowner pays the balance through the payment link that night, and leaves a
                    Google review the next morning. Fast cash, fresh review — the housecall pro loop.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Daily log captures crew hours, weather, materials installed, and progress photos
                    organized into the customer portal. Homeowner checks in throughout the day on
                    their phone and sees photos uploading in real time — that experience sells the
                    next referral. For a straightforward 240 ft vinyl job this is more
                    documentation than you need, but on a $40K ornamental job it is exactly right.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              For a $500K residential fence company, Housecall Pro wins if consumer financing is
              moving real jobs (it usually is — $10K-25K is the fencing price range where financing
              closes deals). Jobber wins if financing is less important to you and you want the
              cleanest mobile experience at the lowest price. Buildertrend wins once you are doing
              custom design-build at $30K+ per job, long permit timelines, and selections workflow —
              below that, it is expensive overkill. FieldPulse and JobNimbus are legitimate
              Jobber alternatives at similar prices if their specific strengths (custom fields,
              pipeline CRM, multi-trade support) fit how you work.
            </p>
          </div>

          {/* Fencing-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Fencing-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that matter
            specifically for fencing contractors — and which platforms actually have them (or can be
            bent to support them with templates).
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Linear-Foot Pricing with Material Types</h3>
              <p className="text-sm text-gray-700 mb-2">
                Fence pricing starts with linear footage, but the real number depends on the material
                (wood, vinyl, chain link, aluminum, wrought iron), height, post spacing, terrain, and
                demo. No platform calculates this for you automatically. What you want is a reusable
                price book or estimate template for each material type so you enter &ldquo;240 ft&rdquo; and
                the rest populates — posts, panels, concrete, labor, demo, haul-away — all as separate
                line items you can adjust on the spot.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Strong price book</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Template line items</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Template line items</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Workable</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Full estimating</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Consumer Financing for $5K-$25K Installs</h3>
              <p className="text-sm text-gray-700 mb-2">
                This is the single biggest revenue lever in residential fencing. When your average
                backyard cedar or vinyl job is $8K-$18K, most homeowners are in &ldquo;I need to think
                about it&rdquo; mode. A financing option at the kitchen table ($189/mo for 60 months)
                turns maybe-laters into same-day signatures. Housecall Pro has Wisetack built directly
                into the quote. On every other platform, you use Wisetack or GreenSky as a standalone
                tool — you send a QR code or a link at the kitchen table, and it works, but it is a
                slightly clunkier experience than built-in.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Wisetack built-in</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Standalone Wisetack</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Standalone Wisetack</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Standalone Wisetack</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Standalone or 3rd party</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Property Line and Setback Documentation</h3>
              <p className="text-sm text-gray-700 mb-2">
                The #1 thing that gets fence contractors sued is the neighbor claiming your fence is
                on their side of the line. You need photo documentation of the property pins, the
                setback distance from lot corners, and any pre-existing encroachments before your
                crew drives a single post. Attach these to the job record so 18 months later when the
                complaint arrives, you have the photos with GPS and timestamps.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Strong photo per job</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Photo + daily log</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Photos per job</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Photos per job</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Photos per job</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Gate Add-Ons Priced Separately</h3>
              <p className="text-sm text-gray-700 mb-2">
                Gates are not &ldquo;part of the fence&rdquo; — they are separate line items with their own
                labor, hardware, and margin. A single 4 ft gate adds ~$350-$500. A double drive gate
                is $800-$2,000. An automated swing gate with access control is $3,500+. Your
                estimating setup needs to treat gates as add-on products you drop into the quote, not
                as an adjustment to linear footage. All of these platforms support this — the
                difference is how clean the experience is.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Clean line items</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Clean line items</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Product catalog</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Selections workflow</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Workable</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Permit and HOA Approval Workflow</h3>
              <p className="text-sm text-gray-700 mb-2">
                In most jurisdictions, fences over 6 ft need permits. In HOA communities, almost every
                fence needs architectural review. That approval process is usually 1-3 weeks, and if
                you schedule the crew before the approval lands, you waste a crew day. You need a way
                to flag a job as &ldquo;permit pending&rdquo; so it does not accidentally get dispatched.
                Buildertrend handles this natively. Everyone else does it with tags, custom fields,
                or the &ldquo;hold&rdquo; status.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Native document workflow</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Custom field</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Tags and notes</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Tags and notes</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Pipeline stage</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Photo Documentation Per Stretch</h3>
              <p className="text-sm text-gray-700 mb-2">
                Long fence runs often have terrain changes, obstacles (that oak tree at post 12), and
                pre-existing conditions that affect the install. Good documentation means photos
                tagged per stretch, not just a pile of 40 photos attached to the job. JobNimbus and
                Buildertrend are slightly ahead here because they let you organize photos into
                albums or stages. Jobber and Housecall Pro store them as a flat list per job, which
                works but requires discipline from your crew leader.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Photo albums</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Daily log photo organization</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Flat photo list per job</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Flat photo list per job</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Flat photo list per job</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Material Delivery Scheduling</h3>
              <p className="text-sm text-gray-700 mb-2">
                For anything over 150 ft, you are not hauling material in the trailer — you are
                getting it delivered the morning of the install. The delivery window has to line up
                with your crew&rsquo;s arrival. If delivery is late, you pay the crew to stand around.
                If delivery is early, you leave $8K of material on a driveway overnight. Buildertrend
                handles this as a scheduled event on the project. Everyone else manages it in notes
                and calendar reminders.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Scheduled deliveries</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Manual scheduling</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Manual scheduling</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Manual scheduling</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Custom workflow</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Final Walkthrough and Warranty Follow-Up</h3>
              <p className="text-sm text-gray-700 mb-2">
                Posts settle. Gates need adjustment 30-90 days after install. Wood fences need follow-up
                on staining or sealant. The software should help you schedule a 30-day and 90-day
                walkthrough automatically so you catch issues before the homeowner calls unhappy. This
                is a workflow you build — not a feature any platform has out of the box — but some
                platforms make it easier to build than others.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Automation sequences</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Recurring visit templates</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Workflow builder</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Manual scheduling</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Manual scheduling</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 4-person residential fence
            company (1 owner/sales, 3-person install crew, $500K revenue, mostly install) actually
            pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (4 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Great for fence contractors who want the simplest, cleanest workflow. Payment processing
                at 2.9% + $0.30 per transaction — on $500K in revenue paid through Jobber, that is
                about $14,800/year in processing (not a Jobber-specific cost, just the reality of card
                payments).
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Connect (4 users, with GPS)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Adds live crew GPS, advanced scheduling, and
                quote follow-up automation. This is the plan most residential fence crews running 2+
                jobs a day should actually be on.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro Essentials (4 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Wisetack consumer financing
                built in. If financing closes even 2 extra $12K jobs per month that you would have
                lost on Jobber, Housecall Pro pays for itself 10x over. For most residential fence
                contractors, this is the single highest-ROI decision on this page.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">JobNimbus (4 users)</p>
              <p className="text-sm text-gray-700">
                ~$100-200/mo depending on tier = <strong>~$1,200-2,400/year</strong>. Cheaper than
                Jobber at the equivalent feature tier. Best value if you also run gutters, siding, or
                restoration work and want one pipeline.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">FieldPulse (4 users)</p>
              <p className="text-sm text-gray-700">
                ~$79-149/mo = <strong>~$948-1,788/year</strong>. Competitive with Jobber, with more
                workflow customization. Good pick if you want custom fields (like &ldquo;permit status&rdquo;)
                built into your job records without workarounds.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Buildertrend (4 users)</p>
              <p className="text-sm text-gray-700">
                $499/mo starting = <strong>$5,988/year minimum</strong>, typically $8K-$15K/year once
                you scale users and features. Implementation fee is extra. Makes sense for design-build
                fence companies doing $30K+ custom jobs — below that, you are paying for capability
                you will not use.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">ServiceTrade (commercial operations)</p>
              <p className="text-sm text-gray-700">
                Custom pricing, typically $200+/user/mo + implementation = <strong>$15K-$30K in Year
                1</strong> for a small commercial gate shop. Right tool only if commercial service
                contracts and inspections are already a real revenue stream.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When Housecall Pro&rsquo;s Financing Pays for Itself</p>
            <p className="text-sm text-gray-700">
              A residential fence contractor doing $500K/year closes roughly 40-60 install jobs. If
              consumer financing converts even 4-6 additional jobs per year at an average $10K — jobs
              that would have otherwise gone to a competitor with financing, or been lost to &ldquo;we
              will think about it&rdquo; — that is $40K-$60K in recovered revenue. At a 25% net margin,
              that is $10K-$15K in recovered profit. Housecall Pro costs $1,788/year. The math is not
              subtle. If you do any meaningful volume of $8K+ residential installs, built-in financing
              is worth more than any other single feature on this list.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Template quality over feature count:</strong> Every platform on this list needs
              you to build a few good estimate templates (6 ft wood privacy, 6 ft vinyl, 4 ft chain
              link, 6 ft aluminum). Spend a weekend building these well — it matters more than which
              platform you pick.
            </li>
            <li>
              <strong>Mobile app in the field:</strong> Your crew leader uses the mobile app outside
              all day, often on a cracked screen with weak signal. Test the trial in airplane mode.
              If it cannot load the day&rsquo;s jobs offline, your crew will get stranded the first time
              they lose service at a rural property.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> All of these sync with QuickBooks, but some
              sync more cleanly than others. Test the sync during your trial with a few real invoices.
              Broken syncs create bookkeeping nightmares you will feel in January.
            </li>
            <li>
              <strong>Property line photo discipline:</strong> Pick a platform and a crew workflow
              where property pin photos are non-negotiable. This single habit prevents the lawsuit
              that would have cost you $15K-$50K to defend.
            </li>
            <li>
              <strong>Switching costs are real:</strong> Moving platforms mid-season means retraining
              crews, migrating templates, and 2-4 weeks of reduced productivity. Pick a platform you
              can stay on for 2-3 years, not just the one that feels right today.
            </li>
            <li>
              <strong>Contract terms:</strong> Jobber, Housecall Pro, JobNimbus, and FieldPulse all
              offer month-to-month options. Buildertrend and ServiceTrade are bigger commitments.
              Start month-to-month on your first real platform so you can leave if it does not fit.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo fence contractor doing $120K. What should I use?
              </h3>
              <p>
                Jobber Core at $29/mo is the right call. You get professional estimates, online
                payments, a client portal, and enough scheduling to run solo. Do not spend more than
                $50/mo on software at this stage — you need the cash in your pocket. markate and Joist
                are cheaper alternatives if you want to go even lower, but the experience gap is real
                and Jobber&rsquo;s mobile app saves you more than $29 worth of time every week.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Is consumer financing really worth switching platforms for?
              </h3>
              <p>
                For a residential fence contractor whose average install is $8K-$20K — yes,
                unambiguously. Financing converts &ldquo;I need to think about it&rdquo; into &ldquo;let me sign
                today&rdquo; at a rate of roughly 20-30% on install work. If you close even 3-4 extra jobs
                a year because of financing, you have already paid for the software 5-10x over. The
                contractors we talk to who moved from Jobber to Housecall Pro specifically for
                Wisetack almost universally report it as the highest-ROI software decision they made.
                The caveat: if your average job is under $4K (small repairs, short runs), financing
                matters less and Jobber is fine.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I handle linear-foot estimating without a fence-specific tool?
              </h3>
              <p>
                Build estimate templates for each fence type you sell — 6 ft wood privacy, 6 ft vinyl
                privacy, 4 ft chain link, 6 ft aluminum, 4 ft split rail. In each template, add line
                items for posts per foot, panels per foot, concrete per post, labor per foot, demo per
                foot, and haul-away. When you are in the field, you pull up the template, enter the
                total linear footage, and the line items do the math. Add gates as separate line items
                on top. This gets you 90% of the way to a fence-specific estimator on any platform.
                Spend a weekend building these templates once — it pays back forever.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When does Buildertrend actually make sense for a fence contractor?
              </h3>
              <p>
                When your average job is $25K+, you are doing design-build work with selections
                (ornamental aluminum, wrought iron, mixed materials), and your jobs span 2-4 weeks
                with permits, HOA approval, and material lead times. At that point, the project
                management, customer portal, and daily logs pay for themselves. A residential
                fence company doing $8K-$15K vinyl and wood backyard jobs will pay for Buildertrend
                and use about 20% of what it does — Jobber or Housecall Pro is the better fit.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need different software for commercial gate work vs. residential fencing?
              </h3>
              <p>
                If commercial is 20%+ of your revenue and involves service contracts, automated gate
                service, access control, or recurring inspections, yes — ServiceTrade is purpose-built
                for that workflow and nothing else on this list comes close. If commercial is an
                occasional one-off job for a property management company, you can handle it in Jobber
                or Housecall Pro and keep your residential workflow intact. The split happens when
                you are actively selling service contracts as a recurring revenue line.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How should I document property lines to avoid &ldquo;the fence is on my side&rdquo; disputes?
              </h3>
              <p>
                Before the crew drives a post, photograph every property pin, the distance from each
                fence run to the pin, and any pre-existing encroachments (the neighbor&rsquo;s shed 2
                feet over the line, for example). Attach those photos to the job in your software
                with GPS and timestamps. If the survey stakes are not visible, stop work and make the
                homeowner responsible for marking them. This single discipline prevents the lawsuit
                that would cost you $15K-$50K to defend. Every platform on this list supports photo
                attachment per job — the tool does not matter as much as the workflow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch software later without losing data?
              </h3>
              <p>
                Most platforms let you export customers, jobs, and invoices as CSV. But switching is
                painful: you lose templates, workflows, recurring jobs, and your team&rsquo;s muscle memory.
                Expect 2-4 weeks of reduced productivity during any mid-season transition. The
                smartest move is picking a platform you can grow into for 2-3 years. If you are at
                $200K and growing fast, start on Jobber Connect or Housecall Pro Essentials now
                instead of the cheapest tier — you would rather pay $50 extra a month than replatform
                at $600K in the middle of your busy season.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
