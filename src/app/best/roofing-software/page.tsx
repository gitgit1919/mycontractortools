import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Roofing Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best roofing software for contractors. We reviewed JobNimbus, AccuLynx, Jobber, Housecall Pro, ServiceTitan, and GorillaDesk on pricing, aerial measurements, insurance workflows, and CRM.",
};

const products: SoftwareProduct[] = [
  {
    name: "JobNimbus",
    rating: 5,
    bestFor: "Roofing contractors of all sizes — built by roofers, for roofers",
    priceRange: "$25/user/mo",
    pros: [
      "Built specifically for roofing — CRM pipeline mirrors how roofing sales actually work (knock, inspect, estimate, supplement, close, produce)",
      "Direct aerial measurement integration with EagleView, GAF QuickMeasure, and RoofSnap — order measurements without leaving the app",
      "Insurance supplement tracking with status boards so you always know where every claim stands with the adjuster",
      "Production boards show every job from sold to tear-off to final inspection — dispatchers see crew availability at a glance",
      "At $25/user/mo, it is the best price-to-value ratio of any roofing-specific platform we reviewed",
    ],
    cons: [
      "The depth of roofing-specific features means a steeper learning curve if your team has never used FSM software before",
      "Reporting is solid but not as deep as ServiceTitan for marketing attribution or cost-per-lead analysis",
      "Mobile app can lag when loading large photo sets from inspection documentation",
      "No built-in consumer financing option — you will need a standalone tool like Wisetack for payment plans",
      "Customization options are extensive but can be overwhelming during initial setup without a clear workflow plan",
    ],
    features: [
      "Aerial measurement integration",
      "Insurance claim tracking",
      "CRM pipeline boards",
      "Production scheduling",
      "Material ordering",
      "Photo documentation",
      "Estimating",
      "Invoicing",
    ],
  },
  {
    name: "AccuLynx",
    rating: 5,
    bestFor: "Storm restoration and insurance-focused roofing companies ($500K+)",
    priceRange: "Custom pricing (typically $55-100+/user/mo)",
    pros: [
      "The strongest insurance workflow in the category — Xactimate integration, supplement tracking, adjuster communication logs, and claim status boards",
      "Aerial measurement integration with EagleView and GAF QuickMeasure built into the estimating flow",
      "Material ordering directly through ABC Supply and Beacon from within the platform — no double-entry",
      "Canvassing and door-knocking tracker with neighborhood mapping ties storm damage zones to lead generation",
      "Production boards with crew assignment, weather holds, and subcontractor scheduling in one view",
    ],
    cons: [
      "Custom pricing requires a demo call — no transparent pricing page, and costs are higher than JobNimbus",
      "Heavier platform with a longer onboarding period — plan for 2-4 weeks before your team is comfortable",
      "Overkill for roofers doing mostly residential re-roofs without insurance work — you are paying for features you will not use",
      "Fewer integrations outside of roofing-specific tools — limited marketing automation or call tracking compared to ServiceTitan",
      "Locked into annual contracts on most plans",
    ],
    features: [
      "Insurance claim management",
      "Xactimate integration",
      "Aerial measurements",
      "Material ordering (ABC/Beacon)",
      "Canvassing tracker",
      "Production boards",
      "CRM pipeline",
      "Photo documentation",
    ],
  },
  {
    name: "Jobber",
    rating: 4,
    bestFor: "Small residential roofing crews (1-5 employees) doing re-roofs and repairs",
    priceRange: "$29-$149/mo",
    pros: [
      "Cleanest interface of any platform we reviewed — a two-person crew can be up and running in an afternoon",
      "Quote follow-up automation sends reminders to homeowners who have not responded, recovering 10-15% of lost estimates",
      "Client hub lets homeowners approve quotes, pay invoices, and request service online — reduces phone tag",
      "Starts at $29/mo for a single user — lowest entry price for a capable scheduling and invoicing platform",
      "Batch invoicing is useful for shops running multiple small repair jobs per week",
    ],
    cons: [
      "NOT roofing-specific — no aerial measurement integration, no insurance claim tracking, no material estimation",
      "No production board or visual pipeline for tracking jobs from sold to completed",
      "Dispatching is a basic calendar view — no crew capacity planning or weather-delay tracking",
      "No subcontractor management — you cannot schedule subs, track their pay, or store COI documents",
      "Limited photo organization — you can attach photos to jobs but there is no structured inspection workflow",
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
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Service-focused roofers doing repairs, maintenance, and small re-roofs",
    priceRange: "$69-$149/mo",
    pros: [
      "Wisetack consumer financing built in — useful for $8K-25K re-roofs where homeowners need payment plans",
      "Online booking lets homeowners self-schedule roof inspections and repair requests",
      "Automated review requests after job completion help build your Google reputation fast",
      "Real-time GPS tracking with automatic arrival notifications keeps homeowners informed",
      "Solid QuickBooks two-way sync that handles the accounting side cleanly",
    ],
    cons: [
      "No roofing-specific features — no aerial measurements, no insurance claim tracking, no supplement workflows",
      "Limited project management for multi-day roof installs — designed for same-day service calls, not 3-day tear-offs",
      "No production board or crew scheduling — you are managing multi-crew operations on a basic calendar",
      "Reporting is surface-level: revenue and job counts, but no per-crew profitability or lead source tracking",
      "No material estimation or supplier integration — every material order is manual",
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
    name: "ServiceTitan",
    rating: 4,
    bestFor: "Large roofing operations ($2M+ revenue) with dedicated sales and marketing teams",
    priceRange: "$250+/mo",
    pros: [
      "Marketing ROI tracking ties every inbound call to the ad or campaign that generated it — know your exact cost per lead",
      "Advanced dispatching with crew skill matching and drive time optimization across multiple job sites",
      "Call tracking and recording built in — review how your CSRs handle storm-season call volume",
      "Deep reporting dashboards: revenue per salesperson, close rates by lead source, average job value trends",
      "Dedicated onboarding team walks your staff through setup over 2-3 months",
    ],
    cons: [
      "At $250+/mo base plus per-user fees, this is the most expensive option and only makes sense at scale",
      "NOT roofing-specific — it is a general FSM platform used by HVAC, plumbing, and electrical too",
      "No built-in aerial measurement integration — you will use EagleView or similar as a separate tool",
      "No insurance supplement tracking or adjuster communication workflow — critical gap for storm restoration",
      "Requires multi-year contract with expensive onboarding ($3,000+) — you are locked in",
    ],
    features: [
      "Marketing analytics",
      "Call tracking/recording",
      "Advanced dispatching",
      "CRM pipeline",
      "Reporting dashboards",
      "Payment processing",
      "Mobile app",
      "Membership module",
    ],
  },
  {
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Budget-conscious small roofing crews that need basic job management",
    priceRange: "$49-$149/mo",
    pros: [
      "Month-to-month pricing with no long-term contracts — cancel anytime if it does not fit your workflow",
      "Simple route optimization helps solo roofers and small crews minimize drive time between job sites",
      "Clean scheduling and invoicing interface that does not overwhelm non-technical crews",
      "Reasonable price point for a crew that just needs to get off paper and spreadsheets",
    ],
    cons: [
      "Not built for roofing — originally a pest control platform, so roofing-specific features are nonexistent",
      "No aerial measurement integration, no insurance workflows, no material estimation",
      "Reporting is basic: job counts and revenue, but no production tracking or crew performance metrics",
      "Limited automation — no quote follow-ups, no maintenance agreement management, no canvassing tools",
      "Smaller development team means slower feature updates compared to VC-backed competitors",
    ],
    features: [
      "Route optimization",
      "Scheduling",
      "Invoicing",
      "CRM",
      "Customer portal",
      "Payment processing",
      "Job notes",
      "Basic reporting",
    ],
  },
];

export default function BestRoofingSoftware() {
  return (
    <ComparisonLayout
      title="Best Roofing Software (2026)"
      description="We compared the top software platforms specifically for roofing contractors — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to how your roofing business actually operates."
      trade="Roofing"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Roofing Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Roofing software is not one-size-fits-all. A solo roofer doing repairs off Craigslist
            has completely different needs than a 6-crew storm restoration company chasing hail
            damage across three states. Here is how to think about it based on where you actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Roofer / Small Crew</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$300K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are the estimator, the installer, and the office. You need simple estimating
                with photo documentation so you can show homeowners what you found on the roof.
                Invoicing that gets you paid the same day. Do not overspend on software —
                every dollar is coming out of your tool budget.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber ($29/mo) or GorillaDesk ($49/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$300K-$1M revenue, 3-8 crew</p>
              <p className="text-sm text-gray-700 mb-2">
                You have a sales rep or two and a production crew. Leads are coming in from
                Google, referrals, and maybe some door-knocking. You need a CRM to track every
                lead because roofing sales cycles are long — a homeowner might not sign for
                6 weeks after the initial inspection. Production scheduling matters now because
                you are juggling multiple jobs and weather delays.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: JobNimbus ($25/user/mo) or Housecall Pro ($69-149/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Storm Chaser / Insurance Restoration</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$500K-$2M revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                Insurance work is your bread and butter — 50% or more of your revenue comes from
                claims. You need supplement tracking, adjuster communication logs, and high-volume
                lead management because a single hail storm can generate 200+ leads in 48 hours.
                Aerial measurements are non-negotiable at this volume.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: JobNimbus ($25/user/mo) or AccuLynx (custom pricing)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$2M+ revenue, multiple crews</p>
              <p className="text-sm text-gray-700 mb-2">
                You are running multiple production crews, a dedicated sales team, and spending
                $10K+/mo on marketing. You need multi-crew production scheduling, marketing
                analytics to know which lead sources actually close, and canvassing tools for
                your door-knocking teams. At this scale, software ROI is measured in closed deals
                per rep, not subscription cost.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: AccuLynx (custom) or ServiceTitan ($250+/mo)
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Day in the Life: How JobNimbus vs. Jobber vs. ServiceTitan Handle a Storm Day
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to use this software on
            your busiest day. Here is the same Wednesday after a major hailstorm — at three
            different roofing companies running three different platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">7:00 AM — Storm Hit Last Night, 40 Leads Calling In</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Every call creates a contact and a job automatically in the CRM pipeline. Office
                    manager sees 40 new leads on the board, assigns them to sales reps by
                    neighborhood. Each lead is tagged with the storm date and zip code for
                    tracking. Nothing falls through the cracks.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager manually creates each customer and job request. No storm
                    tagging, no pipeline board, no neighborhood grouping. With 40 calls in
                    a morning, some leads get written on sticky notes that never make it
                    into the system.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Call tracking captures every inbound call and auto-creates leads. Marketing
                    attribution shows which calls came from Google Ads vs. yard signs vs.
                    door-knocking. Strong on the lead capture side, but no storm-specific
                    tagging or insurance workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">9:00 AM — Sales Rep Does Roof Inspection</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Rep orders an EagleView aerial measurement from the app, takes 50+ photos
                    of hail damage tagged to the job, and generates an estimate on-site using
                    the measurement data. Homeowner sees a professional proposal on the
                    rep&rsquo;s tablet before they leave the property.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Rep climbs the roof, takes manual measurements, snaps photos on their phone.
                    Back in the truck, they build an estimate from scratch in Jobber — typing
                    in line items, looking up pricing, attaching photos manually. Estimate goes
                    out 2-3 hours later, not on-site.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Rep takes photos and builds an estimate using the pricebook. Good
                    presentation with options on a tablet. But no aerial measurement
                    integration built in — the rep still needs to order EagleView separately
                    and manually enter the measurements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">11:00 AM — Insurance Adjuster Meeting</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Rep pulls up the job on their tablet — all photos, the aerial measurement
                    report, the initial estimate, and any supplement documentation are in one
                    place. After the adjuster meeting, they update the claim status on the
                    board and log the supplement amount. Office sees it instantly.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Rep has photos on their phone, measurements on paper or in a separate
                    app, and the estimate in Jobber. There is no insurance workflow — the
                    rep tracks claim status in a spreadsheet, texts the office updates, and
                    supplement amounts live in email threads with the adjuster.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Rep has photos and the estimate but no dedicated supplement tracking.
                    Insurance claim status, adjuster notes, and supplement amounts are
                    tracked outside the platform — usually in a spreadsheet or AccuLynx
                    if the company runs both.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">2:00 PM — Production Crew Finishes Tear-Off</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Foreman marks the job phase as complete on the production board and uploads
                    final photos. The system triggers the invoice automatically. Office manager
                    sees the job move from &ldquo;In Production&rdquo; to &ldquo;Complete&rdquo; on the board and
                    sends the final invoice to the homeowner or insurance company.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Foreman calls or texts the office to say the job is done. Office manager
                    manually creates the invoice in Jobber and sends it. Simple, but every
                    step requires a human to move it forward.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Tech marks the job complete in the app, invoice auto-generates from the
                    pricebook, and the customer can pay on the spot. Strong workflow — but
                    no production board view for managing multiple crews across job sites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              JobNimbus handles this storm day end-to-end because it was built for exactly this
              scenario. Jobber works for the repair and re-roof side but breaks down when insurance
              and high-volume leads enter the picture. ServiceTitan has the marketing analytics and
              call tracking that the other two lack, but it does not speak roofing — no aerial
              measurements, no supplements, no production boards. The right choice depends on
              whether your revenue comes from insurance restoration or retail re-roofs.
            </p>
          </div>

          {/* Roofing-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Roofing-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for service trades — HVAC, plumbing, electrical. Roofing
            is a different animal. Here are the features that matter specifically for roofing
            contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Aerial Measurement Integration</h3>
              <p className="text-sm text-gray-700 mb-2">
                This is unique to roofing — no other trade needs satellite roof measurements.
                Platforms that integrate with EagleView, GAF QuickMeasure, or RoofSnap let you
                order measurements from the app, auto-populate estimates with square footage,
                pitch, and waste factors, and generate professional proposals without ever
                climbing the roof. At scale, this saves 1-2 hours per estimate.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: EagleView, GAF QuickMeasure, RoofSnap</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: EagleView, GAF QuickMeasure</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">ServiceTitan: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Insurance Claim Management and Supplement Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Over 50% of roofing revenue in storm-prone areas comes from insurance work. Your
                software needs to track claim status (filed, approved, supplemented, paid), log
                adjuster communication, manage supplement documentation, and show you at a glance
                which jobs are waiting on insurance money. Without this, you are tracking claims
                in spreadsheets and losing thousands in forgotten supplements.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: Best in class, Xactimate integration</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Strong supplement tracking</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">ServiceTitan: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">CRM Pipeline / Lead Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                Roofing has one of the longest sales cycles in the trades. A homeowner might get
                an inspection in March and not sign until June. Storm leads require 5-8 touchpoints
                from the initial knock to the signed contract. Your CRM needs to show every lead
                in a visual pipeline — new lead, inspection scheduled, estimate sent, follow-up
                needed, contract signed — so your sales reps know exactly who to call next.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Customizable pipeline boards</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: Full sales pipeline</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: CRM with call tracking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic lead tracking</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: No pipeline view</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Production Scheduling</h3>
              <p className="text-sm text-gray-700 mb-2">
                Roofing production is weather-dependent and crew-dependent. You need a visual
                board that shows which crews are on which jobs, which jobs are weather-delayed,
                and what is coming up next week. When rain pushes a tear-off back two days,
                you need to reschedule the entire week across multiple crews without losing track
                of material delivery dates.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Production boards with phases</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: Multi-crew production boards</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">ServiceTitan: Advanced dispatch, no production boards</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Basic calendar</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Basic calendar</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Material Ordering Integration</h3>
              <p className="text-sm text-gray-700 mb-2">
                Ordering shingles, underlayment, flashing, and accessories from ABC Supply or
                Beacon directly through your software eliminates double-entry and ensures the
                right materials show up on the right job site. At 10+ jobs per week, manual
                ordering leads to wrong deliveries, missed items, and wasted trips.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: Direct ABC Supply and Beacon ordering</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Supplier integrations</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">ServiceTitan: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Canvassing and Door-Knocking Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                After a storm, door-knocking is the primary lead generation method for most
                roofing companies. Your software should track which neighborhoods your canvassers
                hit, how many doors they knocked, how many inspections they booked, and which
                storm dates correspond to which areas. This turns random knocking into a
                data-driven sales operation.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: Neighborhood mapping + canvass tracking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Via CRM pipeline customization</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">ServiceTitan: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Photo Documentation for Insurance Compliance</h3>
              <p className="text-sm text-gray-700 mb-2">
                Insurance adjusters require before, during, and after photos organized by damage
                type and location. A dedicated photo documentation tool — either built into your
                FSM or via CompanyCam ($19/user/mo) as an add-on — ensures every photo is
                timestamped, GPS-tagged, and linked to the right job. This is not optional for
                insurance work — missing photos mean denied supplements.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Built-in photo workflow</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">AccuLynx: Structured photo documentation</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">All platforms: CompanyCam add-on ($19/user/mo)</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 5-person roofing
            company (1 owner, 2 sales reps, 2 crew leads) actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">JobNimbus (5 users)</p>
              <p className="text-sm text-gray-700">
                $25/user/mo x 5 = $125/mo = <strong>$1,500/year</strong>. No onboarding fee.
                Self-service setup with roofing-specific templates pre-built. Aerial measurement
                costs (EagleView) are separate — typically $15-35 per report. Best value for a
                roofing-specific platform.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber (Core plan, 5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in
                1-2 days. Cheapest option but you get no roofing-specific features — you will
                need separate tools for measurements, photos, and insurance tracking.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Good for residential
                repair and re-roof work with consumer financing built in. No roofing-specific
                features beyond basic scheduling and invoicing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">AccuLynx (5 users)</p>
              <p className="text-sm text-gray-700">
                Custom pricing — typically $55-100+/user/mo based on company size and features
                selected = <strong>~$3,300-6,000/year</strong>. Annual contract required. Higher
                cost but includes the most complete roofing-specific feature set, especially for
                insurance restoration work.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">ServiceTitan (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$250/mo base + per-user fees + $3,000 onboarding fee
                = <strong>~$7,800 in Year 1</strong> ($4,800/year after). Multi-year contract
                required. Most expensive option and not roofing-specific — only makes sense if
                you need marketing analytics and call tracking at $2M+ in revenue.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">CompanyCam (add-on for any platform)</p>
              <p className="text-sm text-gray-700">
                $19/user/mo = <strong>$1,140/year for 5 users</strong>. Not a replacement for
                FSM software — it is a photo documentation add-on that pairs with any of the
                platforms above. Essential for insurance work if your FSM does not have structured
                photo workflows.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When Roofing-Specific Software Pays for Itself</p>
            <p className="text-sm text-gray-700">
              A single recovered supplement pays for months of software. If your platform
              tracks supplements and reminds you to follow up with adjusters, you recover
              $500-2,000 per job that would otherwise be left on the table. At 10 insurance
              jobs per month, that is $5,000-20,000 in additional annual revenue — far more
              than the cost difference between Jobber and JobNimbus or AccuLynx. The math
              is clear for any company doing meaningful insurance volume.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Mobile app in the field:</strong> Your sales reps live on their phones
              on rooftops and in driveways. Test the mobile app during your trial — can you
              order an aerial measurement, take photos, and build an estimate without cell
              service? If the app does not cache data offline, it will fail you at the worst
              possible moment.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless you are using the platform&rsquo;s
              built-in accounting, two-way QuickBooks sync is non-negotiable. Test this in
              your trial — broken syncs create bookkeeping nightmares, especially with
              insurance payments that come in weeks after the job is done.
            </li>
            <li>
              <strong>Consumer financing:</strong> For retail re-roofs ($8K-25K+), consumer
              financing increases close rates significantly. Housecall Pro has Wisetack built
              in. For other platforms, use Wisetack or GreenSky as standalone tools — your
              rep shares a link or scans a QR code at the kitchen table.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data,
              retraining your team, and rebuilding your pipeline. In roofing, you might have
              200+ open leads in various stages. Get it right the first time, or at least
              pick a platform you can grow into for 3+ years.
            </li>
            <li>
              <strong>Storm season readiness:</strong> Test your software setup before storm
              season, not during it. The worst time to learn a new CRM is when 100 leads
              are calling in after a hailstorm. Get your team trained and your workflows
              dialed in during the slow months.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a one-truck roofing crew doing $150K. What software should I use?
              </h3>
              <p>
                Jobber at $29/mo. It handles scheduling, quoting, and invoicing without
                overwhelming you. You do not need aerial measurement integration, CRM
                pipelines, or production boards yet. If you want photo documentation from
                day one, add CompanyCam at $19/mo. Do not spend more than $50-75/mo on
                software at this stage — put the rest toward marketing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need aerial measurement integration or can I just climb the roof?
              </h3>
              <p>
                At fewer than 5 estimates per week, climbing the roof is fine — it is free
                and you see the damage firsthand. At 10+ estimates per week, aerial measurements
                save 1-2 hours per estimate and let you generate proposals on-site without
                getting on the roof. EagleView reports cost $15-35 each, but the time saved
                and the professional presentation typically increase close rates enough to
                pay for themselves.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What is the best software for insurance restoration and storm work?
              </h3>
              <p>
                JobNimbus or AccuLynx — they are the only two platforms with real insurance
                workflows. JobNimbus is more affordable at $25/user/mo and has strong
                supplement tracking. AccuLynx is more expensive but has deeper Xactimate
                integration and the best canvassing tools. If insurance work is more than
                30% of your revenue, you need one of these two — a general tool like Jobber
                or Housecall Pro will cost you money in missed supplements and lost leads.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I prepare my software for storm season?
              </h3>
              <p>
                Before storm season: set up your CRM pipeline stages (new lead, inspection
                scheduled, estimate sent, supplement filed, approved, in production, complete),
                create estimate templates for common roof types, train your team on the mobile
                app, and test your aerial measurement integration. Build intake forms so
                whoever answers the phone can capture the right information. The companies
                that close the most storm leads are the ones who respond fastest — and that
                means having your systems dialed in before the first hailstone falls.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Should I use CompanyCam alongside my FSM software?
              </h3>
              <p>
                If you do insurance work and your FSM does not have structured photo
                documentation, yes. CompanyCam at $19/user/mo adds timestamped, GPS-tagged
                photos organized by project with before/during/after workflows. Adjusters
                love it because the documentation is professional and organized. If your FSM
                is JobNimbus or AccuLynx, their built-in photo tools may be sufficient — try
                them first before adding another subscription.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When should I switch from Jobber to a roofing-specific platform?
              </h3>
              <p>
                When you start doing regular insurance work or your volume exceeds 15-20 jobs
                per month. At that point, the lack of a CRM pipeline, aerial measurements,
                and production boards in Jobber starts costing you real money — in lost leads,
                missed follow-ups, and forgotten supplements. JobNimbus at $25/user/mo is not
                much more expensive than Jobber and gives you roofing-specific tools that
                directly impact revenue.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
