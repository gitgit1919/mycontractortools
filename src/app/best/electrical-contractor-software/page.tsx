import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Electrical Contractor Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best electrical contractor software for residential and commercial electricians. We reviewed pricing, permit tracking, job costing, and ease of use for ServiceTitan, Jobber, Housecall Pro, FieldPulse, Workiz, and CompanyCam.",
};

const products: SoftwareProduct[] = [
  {
    name: "ServiceTitan",
    rating: 5,
    bestFor: "Established electrical companies ($1.5M+ revenue, 15+ electricians)",
    priceRange: "$250–$500+",
    pros: [
      "Drag-and-drop dispatch board with drive time estimates and tech skill matching — assign your licensed journeyman to the 400A commercial panel while apprentices handle residential outlets",
      "Built-in flat-rate pricebook with good/better/best presentation — techs show options on a tablet and average tickets jump 15-25% on residential service calls",
      "Marketing ROI tracking ties every inbound call to the ad that generated it — know your exact cost per lead for panel upgrade campaigns vs. general electrical service",
      "Project tracking handles multi-phase work (rough-in, trim, final) with milestone scheduling across weeks or months",
      "Dedicated onboarding project manager walks your entire team through setup over 2-3 months",
    ],
    cons: [
      "Requires multi-year contract — you are locked in, and canceling early is expensive",
      "Most electrical shops are 2-6 people, making ServiceTitan overkill — you will pay for dispatching features designed for 15+ truck fleets",
      "Onboarding takes 2-3 months and requires ALL electricians to attend training sessions (plan for lost billable hours)",
      "Base price is per-tech, so costs scale fast: a 6-person shop can easily hit $350-450/mo before add-ons",
      "Steep learning curve — expect 4-6 weeks before your team is comfortable, longer for dispatchers",
    ],
    features: [
      "Flat-rate pricebook",
      "Drag-drop dispatching",
      "Marketing analytics",
      "Call tracking/recording",
      "Multi-phase project tracking",
      "Mobile app with photo capture",
      "Reporting dashboards",
      "Custom forms for inspections",
    ],
  },
  {
    name: "Jobber",
    rating: 4,
    bestFor: "Solo electricians and small shops (1-5 employees) wanting clean simplicity",
    priceRange: "$29–$99",
    pros: [
      "Cleanest interface in the category — if you hate software, you will hate this the least",
      "Quote follow-up automation sends reminders to customers who have not responded, recovering 10-15% of lost quotes on panel upgrades and rewires",
      "Client hub lets customers approve quotes, pay invoices, and request service online — reduces phone tag on residential jobs",
      "Starts at $29/mo for a single user — lowest real entry price for a capable FSM tool, and most solo electricians do not need more",
      "Batch invoicing saves hours when billing multiple jobs from the same week of service calls",
    ],
    cons: [
      "NOT electrical-specific — it is a general field service tool used by landscapers, cleaners, and everyone else",
      "No flat-rate pricebook — every estimate is built from scratch, which means pricing inconsistency between electricians",
      "Dispatching is a basic calendar view with no drive time optimization or tech skill matching",
      "No permit tracking workflow — you will track permits manually via notes or a separate spreadsheet",
      "Limited project management — not built for multi-phase electrical jobs that span rough-in through final inspection",
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
    bestFor: "Service electricians (3-10 techs) focused on residential calls + panel upgrades",
    priceRange: "$69–$149",
    pros: [
      "Most electricians learn it in a single day — lowest training overhead of any platform we reviewed",
      "Wisetack consumer financing built in — critical for $2K-5K panel upgrades and $3K-8K whole-house rewires where homeowners need payment options",
      "Online booking lets homeowners self-schedule electrical service calls, reducing CSR call volume by 20-30%",
      "Real-time GPS dispatching with arrival time notifications sent automatically to customers",
      "Solid QuickBooks two-way sync that rarely breaks — important since most electrical shops outsource bookkeeping",
    ],
    cons: [
      "No built-in flat-rate pricebook — techs build estimates manually or you upload a PDF price list for common repairs",
      "Reporting is surface-level: revenue and job counts, but no per-electrician profitability or job costing breakdown",
      "No project management for multi-phase work — if you do new construction rough-in through final, you will outgrow this",
      "Limited change order workflow — when a kitchen remodel adds 6 circuits, there is no clean way to modify the original scope",
      "No permit tracking or inspection scheduling features",
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
    bestFor: "Mid-size electrical contractors who need job costing on complex projects",
    priceRange: "$99–$199",
    pros: [
      "Detailed job costing tracks labor hours, wire, conduit, panels, and breakers per job — know exactly whether that commercial TI was profitable",
      "Built-in flat-rate pricebook at $99/mo vs ServiceTitan at $250+ — similar functionality at 40% of the cost",
      "Customizable forms for inspection checklists, panel schedules, and load documentation — create a professional record for every job",
      "Multi-phase project scheduling lets you track rough-in, trim, and final as separate visits under one job — essential for new construction",
      "Responsive support team — real humans who typically reply within an hour, not days",
    ],
    cons: [
      "Smaller user community means fewer YouTube tutorials, Facebook groups, and peer support from other electrical contractors",
      "Mobile app occasionally lags on older Android devices — improving but not bulletproof in the field yet",
      "Fewer third-party integrations: no native connection to popular marketing tools or call tracking platforms",
      "No built-in consumer financing option like Housecall Pro's Wisetack integration",
      "Reporting is adequate but not as deep as ServiceTitan — no marketing attribution or call-source tracking",
    ],
    features: [
      "Flat-rate pricebook",
      "Job costing",
      "Multi-phase project scheduling",
      "Custom inspection forms",
      "GPS dispatching",
      "CRM with customer history",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "Workiz",
    rating: 4,
    bestFor: "Electrical companies that rely heavily on phone leads and want built-in call tracking",
    priceRange: "$65–$225",
    pros: [
      "Built-in VoIP phone system with call recording and tracking — know which ads drive calls without a third-party tool",
      "Lead management pipeline shows every inquiry from first call to closed job — nothing falls through the cracks during busy season",
      "Online booking widget embeds on your website and Google Business Profile for 24/7 scheduling of electrical service calls",
      "Team communication features reduce the back-and-forth texting between office and field electricians",
    ],
    cons: [
      "No built-in electrical pricebook — same manual estimate process as Jobber and Housecall Pro",
      "Interface can feel cluttered because they pack phone, scheduling, CRM, and invoicing into one screen",
      "VoIP phone system adds $20-30/mo per line on top of the base subscription",
      "No project management for multi-phase electrical work — built for service calls, not new construction",
      "Smaller electrical-specific user base — most Workiz users are in locksmith and appliance repair",
    ],
    features: [
      "VoIP phone + call tracking",
      "Lead pipeline",
      "Online booking",
      "GPS dispatching",
      "Invoicing",
      "Payment processing",
      "Team messaging",
      "Reporting",
    ],
  },
  {
    name: "CompanyCam",
    rating: 4,
    bestFor: "Any electrical contractor who needs photo documentation for permits, inspections, and compliance",
    priceRange: "$19–$29/user",
    pros: [
      "GPS-tagged, timestamped photos organized by job — every panel before/after, every rough-in, every junction box is documented and searchable",
      "Photo annotations let electricians mark up images on-site — circle a code violation, note wire gauge, document existing conditions before demo",
      "Automatic photo organization by project means your inspection documentation is ready when the inspector arrives, not scattered across 4 phones",
      "Integrates with Jobber, ServiceTitan, Housecall Pro, and FieldPulse — it layers on top of whatever FSM you already use",
    ],
    cons: [
      "Not a full FSM platform — it only handles photo documentation, so you still need scheduling, invoicing, and dispatching software",
      "Per-user pricing adds up: a 6-person crew at $29/user is $174/mo on top of your FSM subscription",
      "Photo storage is cloud-only — requires cell signal or wifi to upload, which can be an issue in new construction shells with no connectivity",
      "Overkill for pure residential service calls where a few photos in your phone camera roll would suffice",
    ],
    features: [
      "GPS-tagged photos",
      "Photo annotations",
      "Project timelines",
      "Before/after comparisons",
      "Team photo sharing",
      "Integrations with FSM tools",
      "Report generation",
      "Cloud storage",
    ],
  },
];

export default function BestElectricalContractorSoftware() {
  return (
    <ComparisonLayout
      title="Best Electrical Contractor Software (2026)"
      description="We compared the top field service platforms specifically for electrical contractors — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to where your electrical business actually is right now."
      trade="Electrical"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Electrical Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Electrical contracting is different from HVAC or plumbing. Most electrical shops are
            smaller — the average residential electrical contractor runs 2-6 people, not 15-truck
            fleets. You straddle service calls and project work in ways other trades do not.
            A panel upgrade is a one-day service call. A whole-house rewire is a multi-day project.
            New construction rough-in is a multi-week commitment. Your software needs to handle
            all three, and the right choice depends on where your business is right now.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Electrician / Startup</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$150K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are answering your own phone, running residential service calls, writing
                quotes in the truck, and doing your own books at night. You need basic scheduling,
                fast invoicing, and quote automation so you can send a professional estimate from
                the job site instead of scribbling it on paper. Do not overspend on software — every
                dollar matters when you are building a customer base.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber ($29/mo) or Housecall Pro ($69/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$500K revenue, 2-5 electricians</p>
              <p className="text-sm text-gray-700 mb-2">
                Dispatching matters now — you cannot coordinate 3-5 electricians across residential
                service calls with text messages and a whiteboard. You need a mobile app your guys
                can actually use to pull up job details, generate field quotes for add-on work, and
                take photos. Quoting speed becomes critical because you are sending more estimates
                and losing jobs to contractors who respond faster.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-149/mo) or FieldPulse ($99/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$500K-$1.5M revenue, 6-15 electricians</p>
              <p className="text-sm text-gray-700 mb-2">
                Permit tracking matters now — you might have 10-20 open permits at any time across
                residential service, remodels, and commercial tenant improvements. Job costing
                becomes essential because you are running a mix of $300 service calls and $15K
                commercial projects, and you need to know which ones actually make money. You need
                project management for multi-day work alongside same-day dispatch for service calls.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: FieldPulse ($99-199/mo) or ServiceTitan ($250+/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ revenue, 15+ electricians</p>
              <p className="text-sm text-gray-700 mb-2">
                Multi-crew project management, commercial bidding with detailed material takeoffs,
                and compliance tracking are non-negotiable. You are running residential service crews
                alongside commercial project teams and need dispatching that matches journeymen to
                commercial work and apprentices to supervised residential. Marketing analytics matter
                because you are spending $5K-20K/mo on ads.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: ServiceTitan ($250-500+/mo)
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Day in the Life: How Three Platforms Handle Real Electrical Work
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to use this software
            every day. Here is the same Wednesday at a 4-person electrical shop — one dispatcher,
            three electricians. Same jobs, three different platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">8:00 AM — Dispatching a 200A Panel Upgrade</h4>
              <p className="text-xs text-gray-500 mb-3">Residential customer needs a 200A service change. Permit already pulled, inspection scheduled for Friday.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher opens the drag-and-drop board. The system shows which electricians
                    are available and flags drive times. She assigns the panel upgrade to Mike
                    (licensed journeyman) and attaches the permit number and inspection date to the
                    job record. Mike sees all details on his tablet before leaving the shop.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager opens the calendar, manually checks each electrician&rsquo;s schedule,
                    and assigns the panel upgrade to Mike. She adds the permit number in the job
                    notes. Mike sees the job on his phone but has to scroll through notes to find
                    the permit info. Simple, works fine for a 4-person shop.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">FieldPulse</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher assigns the job with material costs pre-loaded — 200A panel, meter
                    base, wire runs — so job costing starts tracking from dispatch. She attaches the
                    permit info using a custom form. Mike sees the full breakdown on his phone
                    including estimated vs. actual material usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">10:00 AM — Emergency Call: Commercial Building Lost Power</h4>
              <p className="text-xs text-gray-500 mb-3">A property manager calls — office building on 4th Street has a partial power outage. Needs someone now.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher sees all three techs on the GPS map. Dave is closest and finishing
                    a simple outlet install. She drags the emergency onto Dave&rsquo;s schedule, bumping
                    his next call to tomorrow. Dave gets an automatic notification with the new
                    routing. The bumped customer gets an auto-text with the reschedule.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager calls Dave to check if he can break away. She manually creates
                    the emergency job, moves Dave&rsquo;s afternoon call to tomorrow, and calls that
                    customer to reschedule. It takes 10 minutes of phone calls, but the 4-person
                    shop handles it because everyone knows each other&rsquo;s schedule anyway.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">FieldPulse</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher checks the GPS view, reassigns Dave, and flags the job as emergency
                    priority. She sets up the commercial billing rate automatically. Dave gets the
                    notification with customer details and site access instructions. The rescheduled
                    customer gets an automated message.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">1:00 PM — Kitchen Remodel Change Order (Extra Circuits Needed)</h4>
              <p className="text-xs text-gray-500 mb-3">Tech doing a kitchen remodel rough-in discovers the homeowner added an island with a cooktop. Need 2 additional 240V circuits not in the original scope.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Tech opens the pricebook on his tablet, selects the line items for two 240V
                    dedicated circuits (wire run, breaker, receptacle), and generates a change order
                    with good/better/best options. Customer signs on the tablet. The change order
                    auto-updates the job total and the office sees it instantly.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Tech calls the office to figure out pricing for the additional circuits. Office
                    manager creates a new estimate, texts it to the customer for approval. Once
                    approved, she manually updates the original job total. It works, but the
                    back-and-forth takes 20-30 minutes and the tech is standing around waiting.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">FieldPulse</p>
                  <p className="text-sm text-gray-700">
                    Tech builds the change order on his phone using the pricebook, adds the wire,
                    breakers, and labor. The system updates the job cost tracking so the owner can
                    see whether this remodel is still profitable with the added scope. Customer
                    approves on the spot.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">3:00 PM — New Construction Final Inspection</h4>
              <p className="text-xs text-gray-500 mb-3">Tech at a new build for the final electrical inspection. Inspector needs to see permit documentation, panel schedule, and photos of the rough-in work.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    All project phases (rough-in, trim, final) are linked under one job. Tech pulls
                    up photos from the rough-in phase on his tablet, shows the inspector the panel
                    schedule attached to the job record, and logs the inspection result with the
                    inspector&rsquo;s name and notes. Everything is in one place.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    The rough-in and final were scheduled as separate jobs. Tech scrolls through
                    his phone photos to find the rough-in pictures (hope he did not delete them).
                    Permit info is in the job notes somewhere. He pulls it together, but it is not
                    organized — he is flipping between apps and camera roll during the inspection.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">FieldPulse</p>
                  <p className="text-sm text-gray-700">
                    Multi-phase project view shows all visits under one job. Custom inspection forms
                    capture the result with checkboxes for NEC compliance items. Photos from each
                    phase are attached to the job record. Tech logs the inspection pass and the
                    office sees it immediately for final billing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              For a typical 4-person electrical shop, Jobber handles the basics well and costs
              about $1,200/year. FieldPulse adds job costing and a pricebook for about $1,800/year.
              ServiceTitan adds enterprise-level dispatching and marketing analytics for $7,000-8,000
              in Year 1. The right choice depends on whether you mostly run one-day service calls
              (Jobber or Housecall Pro), a mix of service and project work (FieldPulse), or
              high-volume operations with marketing spend to track (ServiceTitan).
            </p>
          </div>

          {/* Electrical-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Electrical-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Electrical work has unique
            requirements that HVAC and plumbing contractors rarely deal with — permit tracking,
            multi-phase project scheduling, code compliance documentation, and estimating complexity
            that goes well beyond swapping a part. Here are the features that matter specifically
            for electrical contractors.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Permit Tracking and Inspection Scheduling</h3>
              <p className="text-sm text-gray-700 mb-2">
                Electrical work requires permits more than almost any other trade. A panel upgrade
                needs a permit. A rewire needs a permit. New construction has multiple inspections
                across rough-in, trim, and final. If you are juggling 10-20 open permits, you need
                software that tracks permit numbers, inspection dates, and pass/fail status — not
                just a note buried in a job record. Missed inspections mean return trips, which kill
                profitability on fixed-price work.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Custom workflows + forms</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Custom forms with checklists</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Notes and tags only</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Notes and tags only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Estimating Complexity (Wire Runs, Conduit, Panel Work)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Electrical estimates are more detailed than most trades. An HVAC tech prices a
                condenser swap as one line item. An electrician pricing a panel upgrade needs to
                account for the panel itself, the meter base, wire runs (length and gauge matter),
                conduit type and footage, individual breakers, grounding, and labor for each
                component. A pricebook that handles this complexity prevents your electricians from
                underpricing jobs in the field.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full pricebook, best in class</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Built-in pricebook, solid</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual estimates</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual estimates</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Workiz: Manual estimates</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Multi-Phase Project Scheduling vs. One-Day Service Calls</h3>
              <p className="text-sm text-gray-700 mb-2">
                Electrical contractors straddle two worlds more than any other trade. Monday you
                are dispatching a tech for a $200 outlet install (30-minute service call). Tuesday
                you are scheduling the rough-in phase of a new construction project that spans 3
                weeks. Your software needs to handle both — quick dispatch for service work and
                milestone-based project tracking for construction. Most FSM tools are built for one
                or the other, not both.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full project tracking + dispatch</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Multi-phase with job costing</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Service calls only</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Basic recurring visits</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Code Compliance Documentation</h3>
              <p className="text-sm text-gray-700 mb-2">
                NEC code compliance is not optional, and inspectors expect documentation. Your
                software should let you attach inspection photos, note NEC references on job records,
                and generate reports that show what was installed and how it complies. This matters
                most for commercial work and new construction where inspectors scrutinize everything.
                Even on residential service calls, documenting existing code violations protects your
                liability.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">CompanyCam: Photo documentation, best in class</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Custom forms + photo capture</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Custom checklists + photos</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Basic photo attachments</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Change Order Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                Electrical remodels generate more change orders than almost any other trade. The
                homeowner decides they want under-cabinet lighting after the rough-in. The GC adds
                a sub-panel to the garage. The architect moves the kitchen island and now you need
                to reroute three dedicated circuits. Your software should let a tech generate a
                change order from the field, get customer approval on the spot, and update the job
                total without calling the office.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Pricebook-based change orders</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Field change orders with cost tracking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: New estimate required</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: New estimate required</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Photo Documentation (Before/After, Rough-In, Inspections)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Electrical work is hidden behind walls. Once drywall goes up, the only proof of what
                you installed is photos. Rough-in photos prove wire routing. Before photos document
                existing code violations you did not create. Inspection photos show the panel
                schedule and labeling. If you are not systematically documenting every job, you are
                exposed on callbacks and liability claims. This is where CompanyCam shines as an
                add-on to any FSM platform.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">CompanyCam: Purpose-built, GPS-tagged, organized</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Built-in photo capture per job</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Photo attachments on forms</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Basic photo attachments</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis for a 4-Person Electrical Shop</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Electrical shops tend to be smaller
            than HVAC and plumbing operations — the median residential electrical contractor has
            3-6 employees. Enterprise tools designed for 15-truck fleets are often overkill and
            overpriced for the typical electrical business. Here is what a 4-person shop (1 office,
            3 electricians) actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber (Core plan, 4 users)</p>
              <p className="text-sm text-gray-700">
                $69/mo = <strong>$828/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Payment processing at 2.9% + $0.30 per transaction. The most affordable option
                for shops focused on residential service calls.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 4 users)</p>
              <p className="text-sm text-gray-700">
                $129/mo = <strong>$1,548/year</strong>. No onboarding fee. Setup in a few days.
                Wisetack financing included — valuable for $2K-5K panel upgrades where homeowners
                need payment options. Good fit for service-focused electrical shops.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">FieldPulse (4 users)</p>
              <p className="text-sm text-gray-700">
                ~$129/mo = <strong>~$1,548/year</strong>. No onboarding fee. Includes pricebook
                and job costing — the best value if you run a mix of service calls and project
                work and need to track profitability on complex jobs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Workiz (Standard, 4 users)</p>
              <p className="text-sm text-gray-700">
                ~$125/mo base + $20-30/mo per VoIP line = <strong>~$2,100-2,500/year</strong> with
                phone system. Worth it if phone leads are your primary customer acquisition channel
                and you want call recording and source tracking without a separate tool.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">ServiceTitan (4 users)</p>
              <p className="text-sm text-gray-700">
                ~$250/mo base + ~$100/mo for additional tech licenses + $3,000 onboarding fee
                = <strong>~$7,200 in Year 1</strong> ($4,200/year after that). Multi-year contract
                required. For most 4-person electrical shops, this is difficult to justify — you are
                paying for 15-truck-fleet features you will not use.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">CompanyCam (add-on, 4 users)</p>
              <p className="text-sm text-gray-700">
                $19-29/user/mo = <strong>$912-1,392/year</strong> on top of your FSM platform. This
                is not a standalone solution — it layers photo documentation on whatever scheduling
                and invoicing tool you already use. Worth it for shops doing new construction or
                commercial work where documentation is critical.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">Why Electrical Shops Should Think Twice About Enterprise Tools</p>
            <p className="text-sm text-gray-700">
              The average residential electrical contractor is significantly smaller than the average
              HVAC or plumbing company. HVAC shops often run 10-20 trucks because they need techs for
              seasonal peak demand. Most electrical shops run 2-6 people year-round. ServiceTitan&rsquo;s
              ROI math works when you are running 20+ calls per day with a pricebook that increases
              average tickets by $200-500. If your shop runs 6-10 calls per day, FieldPulse&rsquo;s pricebook
              delivers similar upsell capability at a fraction of the cost — without the multi-year
              contract or $3,000 onboarding fee.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Mobile app reliability:</strong> Your electricians work in attics, crawl spaces,
              and commercial ceilings with spotty cell signal. Test the app in airplane mode during
              your trial — if it does not cache job data offline, your techs will be stuck without
              job details when they need them most.
            </li>
            <li>
              <strong>Photo documentation:</strong> Electrical work goes behind walls. If you are not
              documenting rough-in wiring, panel installations, and existing conditions before you
              start, you are exposed on liability claims. CompanyCam is the gold standard add-on, but
              ServiceTitan and FieldPulse have decent built-in photo capture.
            </li>
            <li>
              <strong>Consumer financing:</strong> Panel upgrades ($2K-5K) and whole-house rewires
              ($3K-8K) are big enough that many homeowners need financing. Housecall Pro has Wisetack
              built in. For other platforms, you can use Wisetack or GreenSky as a standalone tool —
              your electrician just shares a link or scans a QR code on-site.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Seamless two-way QuickBooks sync is non-negotiable
              for most electrical shops. Test this in the trial — broken syncs create bookkeeping
              nightmares, especially if you are tracking materials costs across multiple projects.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data,
              retraining your team, and 2-4 weeks of reduced productivity. Pick a platform you can
              grow into for at least 2-3 years. If you are at $200K and growing, it may make sense to
              start on FieldPulse now instead of Jobber so you do not have to switch again at $500K.
            </li>
            <li>
              <strong>Contract terms:</strong> ServiceTitan requires a multi-year commitment.
              Jobber, Housecall Pro, FieldPulse, and Workiz offer month-to-month or annual plans.
              If you are trying FSM software for the first time, start with a platform that lets
              you leave if it does not work out.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo electrician doing $100K in residential service. What software should I use?
              </h3>
              <p>
                Jobber at $29/mo. It handles scheduling, invoicing, and quoting without
                overwhelming you. You do not need dispatching, a pricebook, or marketing
                analytics yet. Housecall Pro at $69/mo is also solid if you want online
                booking and built-in consumer financing for panel upgrades. Do not spend more
                than $100/mo on software at this stage — that money is better spent on Google
                Local Services ads.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need different software if I do both residential service and new construction?
              </h3>
              <p>
                Yes, this matters. If you straddle service calls and multi-phase construction projects,
                you need software that handles both. Jobber and Housecall Pro are built for service
                calls — they struggle with multi-week project tracking. FieldPulse handles both with
                multi-phase scheduling and job costing. ServiceTitan does it all but at a significantly
                higher price. If construction is more than 30% of your revenue, FieldPulse or
                ServiceTitan are worth the extra cost.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How important is photo documentation for electrical work specifically?
              </h3>
              <p>
                More important than for any other trade. Electrical work goes behind drywall — once
                the walls close up, photos are the only proof of what you installed. Rough-in photos
                prove wire routing. Before photos document existing code violations you did not create.
                Inspection photos show panel labeling and compliance. CompanyCam ($19-29/user/mo) is
                the best add-on for this. At minimum, make sure your FSM tool supports photo
                attachments per job and train your electricians to document every panel and rough-in.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Is ServiceTitan worth the cost for a 4-person electrical shop?
              </h3>
              <p>
                Usually not. At 4 people, you are looking at $7,200 in Year 1 vs. $828-1,548 on
                Jobber, Housecall Pro, or FieldPulse. ServiceTitan&rsquo;s pricebook is the main draw,
                but FieldPulse offers similar pricebook functionality at $99-199/mo with no multi-year
                contract and no $3,000 onboarding fee. Most electrical shops are too small to leverage
                ServiceTitan&rsquo;s advanced dispatching and marketing analytics. Consider ServiceTitan
                when you hit 10+ electricians and $1M+ in revenue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Which platform handles permit tracking best?
              </h3>
              <p>
                None of them have dedicated permit tracking built in — this is a gap across the
                entire FSM category. ServiceTitan and FieldPulse come closest with custom forms and
                workflows where you can create permit tracking fields, inspection date fields, and
                pass/fail checklists. With Jobber and Housecall Pro, you are tracking permits in job
                notes or a separate spreadsheet. If permit management is a major pain point, FieldPulse&rsquo;s
                customizable forms give you the most flexibility at a reasonable price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch software later without losing my customer data?
              </h3>
              <p>
                Most platforms let you export customer data, job history, and invoices as CSV files.
                But switching is still painful: you lose saved templates, custom forms, pricebook
                configurations, and your team&rsquo;s muscle memory. Expect 2-4 weeks of reduced
                productivity during any transition. The best move is to pick a platform you can grow
                into for at least 2-3 years. If you are at $200K and growing fast, starting on
                FieldPulse instead of Jobber may save you a disruptive migration later.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
