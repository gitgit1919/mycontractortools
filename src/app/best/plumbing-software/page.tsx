import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Plumbing Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best plumbing business software. We reviewed ServiceTitan, Housecall Pro, Jobber, FieldPulse, and more for scheduling, dispatching, invoicing, and flat-rate pricing.",
};

const products: SoftwareProduct[] = [
  {
    name: "ServiceTitan",
    rating: 5,
    bestFor: "Established plumbing companies ($1.5M+ revenue, 15+ techs)",
    priceRange: "$250–$500+",
    pros: [
      "Industry-leading plumbing pricebook with good/better/best presentation — techs show repair vs. replacement options on a tablet and average tickets jump from $300 to $800+",
      "Drain camera and sewer scope integration — attach video directly to the job record so the customer sees exactly why a $12K sewer line replacement is necessary",
      "Drag-and-drop dispatch board with drive time estimates and tech skill matching (drain specialist vs. general service vs. gas line certified)",
      "Marketing ROI tracking ties every inbound call to the ad that generated it — know your exact cost per lead for emergency drain, water heater, and repipe campaigns",
      "Membership module automates maintenance agreement renewals and billing for commercial accounts — recurring revenue on autopilot",
    ],
    cons: [
      "Requires multi-year contract — you are locked in, and canceling early is expensive",
      "Onboarding takes 2-3 months and requires ALL techs to attend training sessions (plan for lost billable hours)",
      "Overkill for shops under 10 techs — you will pay for features you never touch",
      "Base price is per-tech, so costs scale fast: a 10-tech shop can easily hit $400-500/mo before add-ons",
      "Steep learning curve — expect 4-6 weeks before your team is comfortable, longer for dispatchers",
    ],
    features: [
      "Plumbing pricebook",
      "Drain camera integration",
      "Drag-drop dispatching",
      "Marketing analytics",
      "Call tracking/recording",
      "Service agreements",
      "Mobile app with photo/video",
      "Reporting dashboards",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Growing plumbing shops (3-15 techs) that want simplicity + financing",
    priceRange: "$69–$149",
    pros: [
      "Most techs learn it in a single day — lowest training overhead of any platform we reviewed",
      "Wisetack consumer financing built in — critical for $3K-8K tank-to-tankless water heater conversions and $5K-15K whole-house repipes where customers rarely pay cash upfront",
      "Online booking lets customers self-schedule non-emergency plumbing work, reducing CSR call volume by 20-30%",
      "Real-time GPS dispatching with arrival time notifications sent automatically to customers — important for plumbing where customers wait at home",
      "Solid QuickBooks two-way sync that rarely breaks",
    ],
    cons: [
      "No built-in flat-rate pricebook — techs build estimates manually or you upload a PDF price list",
      "Reporting is surface-level: revenue and job counts, but no per-tech profitability or marketing attribution",
      "No parts/inventory tracking — techs cannot check truck stock for specific PVC fittings or water heater components before heading to a job",
      "Limited service agreement automation compared to ServiceTitan or FieldPulse",
      "Customer support response times slow down during busy seasons — exactly when you need help most",
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
    name: "Jobber",
    rating: 4,
    bestFor: "Solo plumbers and small shops (1-5 employees) wanting clean simplicity",
    priceRange: "$29–$99",
    pros: [
      "Cleanest interface in the category — if you hate software, you will hate this the least",
      "Quote follow-up automation sends reminders to customers who have not responded, recovering 10-15% of lost quotes on water heater replacements and repipe proposals",
      "Client hub lets customers approve quotes, pay invoices, and request service online — great for repeat commercial clients",
      "Starts at $29/mo for a single user — lowest real entry price for a capable FSM tool",
      "Batch invoicing saves hours for shops running recurring commercial plumbing maintenance",
    ],
    cons: [
      "NOT plumbing-specific — it is a general field service tool used by landscapers, cleaners, and everyone else",
      "No flat-rate pricebook at all — every estimate is built from scratch, which means pricing varies between techs",
      "Dispatching is a basic calendar view with no drive time optimization or tech skill matching",
      "No photo/video attachment workflow for drain camera footage or sewer scope documentation",
      "Limited inventory management — no real-time parts tracking for truck stock or purchase order flow",
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
    name: "FieldPulse",
    rating: 4,
    bestFor: "Mid-size plumbing shops that want a pricebook without the ServiceTitan price tag",
    priceRange: "$99–$199",
    pros: [
      "Built-in flat-rate pricebook at $99/mo vs ServiceTitan at $250+ — similar good/better/best presentation at 40% of the cost",
      "Custom inspection forms for plumbing — build templates for sewer line inspections, water heater evaluations, and backflow testing with photo fields",
      "Inventory tracking with parts-to-job linking — know exactly what fittings, fixtures, and materials went into each job for accurate job costing",
      "Service agreement module with auto-billing and scheduling reminders for commercial plumbing maintenance contracts",
      "Responsive support team — real humans who typically reply within an hour, not days",
    ],
    cons: [
      "Smaller user community means fewer YouTube tutorials, Facebook groups, and peer support from other plumbers",
      "Mobile app occasionally lags or crashes on older Android devices — improving but not bulletproof yet",
      "Fewer third-party integrations: no native connection to popular marketing tools or call tracking platforms",
      "No built-in consumer financing option like Housecall Pro's Wisetack integration",
      "Reporting is adequate but not as deep as ServiceTitan — no marketing attribution or call-source tracking",
    ],
    features: [
      "Flat-rate pricebook",
      "Multi-option estimates",
      "Custom inspection forms",
      "Inventory management",
      "Service agreements",
      "GPS dispatching",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "Workiz",
    rating: 4,
    bestFor: "Plumbing companies that rely heavily on phone leads and want built-in call tracking",
    priceRange: "$65–$225",
    pros: [
      "Built-in VoIP phone system with call recording and tracking — know which ads drive your emergency drain calls without a third-party tool",
      "Lead management pipeline shows every inquiry from first call to closed job — nothing falls through the cracks during a busy Monday morning rush",
      "Online booking widget embeds on your website and Google Business Profile for 24/7 scheduling of non-emergency work",
      "Team communication features reduce the back-and-forth texting between office and field techs about job details and parts needs",
    ],
    cons: [
      "No built-in plumbing pricebook — same manual estimate process as Jobber and Housecall Pro",
      "Interface can feel cluttered because they pack phone, scheduling, CRM, and invoicing into one screen",
      "VoIP phone system adds $20-30/mo per line on top of the base subscription",
      "Weaker service agreement management compared to ServiceTitan or FieldPulse",
      "Smaller plumbing-specific user base — most Workiz users are in locksmith and appliance repair",
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
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Budget-conscious plumbing startups and one-truck operations",
    priceRange: "$49–$149",
    pros: [
      "Month-to-month pricing with no long-term contracts — cancel anytime if it is not working",
      "Simple route optimization helps solo plumbers and small crews minimize windshield time between calls",
      "Straightforward scheduling and invoicing that a non-technical plumber can learn in an afternoon",
      "Customer portal lets homeowners view upcoming appointments and pay invoices online",
    ],
    cons: [
      "No flat-rate pricebook — estimates are manual and there is no good/better/best presentation",
      "Reporting is basic: job counts and revenue, but no tech performance metrics or profitability analysis",
      "Limited automation: no quote follow-ups, no service agreement auto-renewals",
      "No photo/video documentation workflow for drain camera or sewer inspection footage",
      "Smaller development team means slower feature updates compared to VC-backed competitors",
    ],
    features: [
      "Route optimization",
      "Scheduling",
      "Invoicing",
      "CRM",
      "Customer portal",
      "Payment processing",
      "Estimates",
      "Basic reporting",
    ],
  },
  {
    name: "ServiceM8",
    rating: 4,
    bestFor: "Small plumbing shops on iOS wanting a polished, low-volume alternative to Jobber ($0-$300K revenue, 1-4 plumbers)",
    priceRange: "Free–$349",
    pros: [
      "Pricing scales with job volume, not user count — a 3-plumber shop doing ~80 jobs/mo pays roughly $79/mo, well below Jobber or HCP at the same team size",
      "Genuinely beautiful iOS app that plumbers actually enjoy using — job cards, checklists, on-site photos, and customer signatures all in one clean flow with almost no training overhead",
      "Quotes and invoices look professional out of the box without template fiddling — branded PDFs land in the customer&rsquo;s inbox within 30 seconds of finishing the call",
      "Free tier (up to 20 jobs/mo) is actually usable for solo plumbers starting out — no upsell pressure, no credit card required to begin",
      "Job diary auto-logs every photo, email, text, and time entry against the job card — creates a complete paper trail for warranty claims and callbacks without extra admin",
    ],
    cons: [
      "iOS-only for field techs — if any of your crew carries an Android phone, ServiceM8 is a non-starter, period",
      "No built-in plumbing pricebook or flat-rate library — you build every quote from scratch, same limitation as Jobber and HCP",
      "Weak recurring service and maintenance plan management — fine for repair calls, but not the tool if preventive plans are a core part of your model",
      "Smaller US user base than Jobber or HCP — fewer YouTube tutorials, fewer peer support groups, and support leans Australia timezone",
      "Reporting is basic — job counts, revenue, and tech stats, but no deep margin or per-service profitability analysis",
    ],
    features: [
      "iOS-first mobile app",
      "Job card workflow",
      "Quotes + invoices",
      "Customer signatures",
      "Photo documentation",
      "Job diary + audit trail",
      "Payment processing",
      "Xero + QuickBooks sync",
    ],
  },
];

export default function BestPlumbingSoftware() {
  return (
    <ComparisonLayout
      title="Best Plumbing Software (2026)"
      description="We compared the top field service platforms specifically for plumbing contractors — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to where your business actually is right now."
      trade="Plumbing"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Plumbing Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites tell you to pick software based on &ldquo;small vs. large.&rdquo;
            That is useless. A solo plumber running $120K in revenue has completely different needs
            than a 4-truck shop doing $400K. Here is how to think about it based on where
            you actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo / Startup</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$150K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are answering the phone, running calls, writing invoices, and doing your own
                books. You need simple scheduling and invoicing that does not eat your evenings.
                At this stage every dollar matters — do not pay for dispatching features when
                you are dispatching yourself.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber ($29/mo) or GorillaDesk ($49/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$500K revenue, 2-5 techs</p>
              <p className="text-sm text-gray-700 mb-2">
                Dispatching matters now — you cannot keep track of 3-5 techs with a whiteboard
                and group texts. You need a mobile app your guys can actually use on a jobsite.
                Quoting becomes important because you are sending more estimates for water heaters,
                repipes, and remodels.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-149/mo) or Jobber ($99/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$500K-$1.5M revenue, 6-15 techs</p>
              <p className="text-sm text-gray-700 mb-2">
                A flat-rate pricebook matters now — presenting repair options with good/better/best
                increases average tickets from $300 to $800+. Service agreements with commercial
                properties become your recurring revenue engine. You need reporting to know which
                techs are profitable and which jobs lose money.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: FieldPulse ($99-199/mo) or ServiceTitan ($250+/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ revenue, 15+ techs</p>
              <p className="text-sm text-gray-700 mb-2">
                Call tracking, marketing analytics, advanced dispatching with skill matching,
                and a full plumbing pricebook are non-negotiable. You are spending $10K-50K/mo
                on marketing and need to know which campaigns drive emergency drain calls vs.
                water heater replacements. This is ServiceTitan territory.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: ServiceTitan ($250-500+/mo)
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Day in the Life: How Software Shapes Your Plumbing Operation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to use this software every day.
            Here is the same Wednesday at a 5-tech plumbing shop — showing how ServiceTitan,
            Jobber, and Housecall Pro handle the exact same situations differently.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">7:00 AM — Emergency Drain Call Comes In</h4>
              <p className="text-sm text-gray-600 italic mb-3">
                A restaurant owner calls — kitchen drain is backed up, they cannot open for lunch.
                You need to reroute a tech immediately.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher opens the drag-and-drop board. She sees all 5 techs, their current
                    locations via GPS, and drive times to the restaurant. She drags the emergency
                    call onto the closest tech, and the system automatically notifies the displaced
                    customer with a rescheduled arrival window.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager opens the calendar, eyeballs which tech has the lightest
                    morning, and manually reassigns the emergency. She texts the bumped customer
                    separately to reschedule. It works, but takes 10-15 minutes and a few
                    phone calls.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher uses GPS view to find the nearest tech, drags the job onto their
                    schedule, and HCP sends an automatic arrival notification to the restaurant.
                    Faster than Jobber, though without the drive-time optimization ServiceTitan offers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">10:00 AM — Tech Diagnoses a Sewer Line Issue</h4>
              <p className="text-sm text-gray-600 italic mb-3">
                Your tech runs a camera through the sewer line and finds root intrusion.
                The homeowner needs to choose between an $800 spot repair and a $12K full replacement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Tech opens the plumbing pricebook on his tablet. He taps &ldquo;sewer line&rdquo; and the
                    system shows three options: spot repair ($800), partial replacement ($4,500),
                    and full replacement ($12,000) — each with descriptions and photos. He attaches
                    the drain camera video directly to the job. The homeowner sees exactly why
                    the work is needed and picks partial replacement.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Tech creates an estimate from scratch, typing in line items and prices from
                    memory or calling the office to confirm pricing. He sends one option at $4,500.
                    No visual presentation, no good/better/best, and the camera footage lives
                    on his phone instead of attached to the job record.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Tech builds the estimate manually but sends it through HCP where the homeowner
                    can approve online. No pricebook, but if the customer hesitates on the $12K
                    option, the tech can offer Wisetack financing on the spot — monthly payments
                    make a full replacement easier to say yes to.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">1:00 PM — Scheduled Water Heater Install</h4>
              <p className="text-sm text-gray-600 italic mb-3">
                A homeowner approved a tank-to-tankless conversion last week. The tech needs
                parts, install documentation, and to collect $6,500 at the end.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    The job record shows the full parts list from the original estimate. Tech
                    checks off materials as he installs them, takes before/after photos, and
                    the invoice auto-generates from the pricebook. Customer signs on the tablet
                    and pays. If they cannot pay in full, financing is available on the spot.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Tech pulls up the original quote for reference, completes the install,
                    then converts the quote to an invoice. Customer pays via Jobber Payments.
                    Simple and it works — but parts tracking and before/after documentation
                    are manual steps the tech has to remember.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Similar manual flow to Jobber, but the tech can offer Wisetack financing
                    if the customer wants to split the $6,500 into monthly payments. This is
                    where HCP shines — on big-ticket residential plumbing jobs where financing
                    closes deals that would otherwise stall.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">4:00 PM — Commercial Maintenance Check</h4>
              <p className="text-sm text-gray-600 italic mb-3">
                A tech arrives at an office building for a quarterly plumbing inspection
                under a $2,400/year service agreement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    The membership module auto-generated this visit. Tech sees the full property
                    history — every past inspection, previous issues, equipment notes. He completes
                    the inspection form on his tablet, flags a slow drain in the break room, and
                    upsells a drain cleaning on the spot. The agreement auto-bills quarterly.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    This visit was set up as a recurring job. Tech completes the work and invoices.
                    But there is no property history view, no inspection form template, and no
                    automated agreement billing — the office tracks renewals manually.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Similar to Jobber — the visit exists as a recurring job. HCP handles the
                    scheduling and invoicing fine, but commercial service agreement management
                    with auto-billing and property history is not its strength.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              ServiceTitan is more powerful at every step — but you are paying 5-10x more for it.
              Housecall Pro lands in the middle with financing that closes big-ticket plumbing jobs.
              Jobber keeps it simple and cheap. The right choice depends entirely on your revenue,
              team size, and what you are actually losing money on today.
            </p>
          </div>

          {/* Plumbing-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Plumbing-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that matter
            specifically for plumbing contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Flat-Rate Pricebook</h3>
              <p className="text-sm text-gray-700 mb-2">
                A flat-rate pricebook means your techs present pre-set prices by repair code instead
                of guessing or calling the office. For plumbing, this is especially powerful: shops
                that switch to flat-rate pricing with good/better/best options see average tickets
                jump from $300 to $800+ because the homeowner is choosing between repair options
                instead of getting a single take-it-or-leave-it number.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Best in class, plumbing-specific codes</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Built-in, solid at lower cost</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: No pricebook</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: No pricebook</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Workiz: No pricebook</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Emergency Dispatch</h3>
              <p className="text-sm text-gray-700 mb-2">
                Plumbing has the highest emergency call rate of any trade. Burst pipes, sewer
                backups, and no-hot-water calls cannot wait until tomorrow. Your software needs
                to let you reroute techs on the fly, prioritize emergency jobs over scheduled
                maintenance, and automatically notify displaced customers about rescheduled arrival windows.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Priority boards + auto-rescheduling</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: GPS dispatching, handles urgency well</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Workiz: Adequate dispatching with call tracking</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Basic calendar, manual priority</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Photo/Video Documentation</h3>
              <p className="text-sm text-gray-700 mb-2">
                Drain camera footage and sewer scope video are how plumbers justify expensive
                repairs to homeowners. Your software should let techs attach photos and video
                directly to the job record — before/after drain camera shots, pipe condition
                documentation, and sewer line inspection footage. This builds trust, reduces
                disputes, and creates a permanent record for warranty claims.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full integration with drain cameras</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Photo fields in custom forms</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic photo attachment</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Limited photo workflow</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Parts and Inventory Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Plumbing involves more part diversity than almost any other trade — PVC fittings,
                copper, PEX, SharkBite connectors, fixtures, valves, water heater components,
                and specialty items. Tracking what is on each truck prevents wasted trips to the
                supply house (at $50-100 in lost productivity per trip) and gives you accurate
                job costing.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full inventory with purchase orders</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Parts-to-job linking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Workiz: Basic inventory</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Service Agreement Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                Recurring service agreements are the path to predictable revenue in plumbing —
                especially with commercial properties (restaurants, office buildings, multi-family).
                A good agreement base means quarterly inspections are pre-sold, billing is automatic,
                and those commercial accounts call you first instead of searching online when something
                breaks. Your software should auto-send renewal reminders, schedule visits, and track billing.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full module with auto-billing</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Good with auto-reminders</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic recurring jobs</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Basic recurring jobs</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Payment Processing with Financing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Tank-to-tankless water heater conversions run $3K-8K. Whole-house repipes are $5K-15K.
                Sewer line replacements can hit $12K+. Most homeowners do not have that cash on hand.
                Built-in consumer financing lets your tech offer monthly payments on the spot —
                shops that offer financing report 15-25% higher close rates on big-ticket plumbing jobs.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Wisetack built in</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: GreenSky + Wisetack</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Others: Standalone Wisetack link</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 5-tech plumbing shop
            actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber (Connect plan, 5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Payment processing at 2.9% + $0.30 per transaction.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Setup in a few days with
                their guided onboarding videos. Wisetack financing included at no extra platform cost.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">FieldPulse (5 users with pricebook)</p>
              <p className="text-sm text-gray-700">
                $99 base + $160 for 4 additional techs = $259/mo = <strong>$3,108/year</strong>.
                No onboarding fee. Includes pricebook functionality that would require ServiceTitan
                at 2-3x the cost.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">ServiceTitan (5 techs)</p>
              <p className="text-sm text-gray-700">
                ~$250/mo base + ~$150/mo for additional tech licenses + $3,000 onboarding fee
                = <strong>~$7,800 in Year 1</strong> ($4,800/year after that). Multi-year contract required.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When ServiceTitan&rsquo;s Price Makes Sense for Plumbing</p>
            <p className="text-sm text-gray-700">
              ServiceTitan&rsquo;s plumbing pricebook typically increases average ticket from $300 to $800+.
              If your shop runs 15-20 calls per week, that additional $500 per ticket adds up to
              $390K-520K in annual revenue. At that scale, the $4,800/year subscription pays for itself
              in the first week. The math works when you are big enough — it does not work at 5 calls
              a day with a $250 average ticket.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Mobile app reliability:</strong> Your techs are in crawl spaces, basements,
              and under sinks with one bar of signal. Ask for a trial and test the app in
              airplane mode — if it does not cache job data offline, it will fail you on-site.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless the platform has built-in accounting
              (most do not), seamless two-way QuickBooks sync is non-negotiable. Test this in
              the trial — broken syncs create bookkeeping nightmares.
            </li>
            <li>
              <strong>Consumer financing:</strong> If you do water heater replacements, repipes, or
              sewer work ($3K-15K+), consumer financing is a revenue multiplier. Housecall Pro
              has Wisetack built in. ServiceTitan partners with GreenSky and Wisetack. For other
              platforms, you will use a standalone financing tool.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data,
              retraining your team, and 2-4 weeks of reduced productivity. Get it right the first
              time, or at least pick a platform you can grow into for 2-3 years.
            </li>
            <li>
              <strong>Contract terms:</strong> ServiceTitan requires a multi-year commitment.
              Jobber, Housecall Pro, and FieldPulse offer month-to-month or annual plans.
              If you are trying FSM software for the first time, start with a platform
              that lets you leave if it does not work out.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What is the best software for a one-truck plumbing shop?
              </h3>
              <p>
                Jobber at $29/mo. It handles scheduling, invoicing, and quoting without
                overwhelming you. You do not need dispatching, a pricebook, or marketing
                analytics yet. GorillaDesk at $49/mo is another solid budget option with
                route optimization. Do not spend more than $100/mo on software at this stage —
                that money is better spent on a drain machine or marketing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need a pricebook for my plumbing business?
              </h3>
              <p>
                It depends on your business model. If you do residential service calls (drains,
                water heaters, faucet repairs), a pricebook with good/better/best options
                consistently increases average tickets from $300 to $800+. It also eliminates
                pricing inconsistency between your techs. If you primarily do new construction
                or commercial bid work, a pricebook matters less — your pricing is project-based.
                ServiceTitan has the best pricebook but costs the most. FieldPulse offers solid
                pricebook functionality at roughly 40% of the price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I handle emergency calls in field service software?
              </h3>
              <p>
                Plumbing has more emergencies than any other trade — burst pipes, sewer backups,
                and gas leaks cannot wait. ServiceTitan handles this best with priority dispatch
                boards that let you drag an emergency call onto the nearest available tech and
                auto-notify displaced customers. Housecall Pro does well with GPS-based rerouting.
                With Jobber or GorillaDesk, you will handle emergency rerouting manually through
                the calendar view, which works fine for small crews but gets chaotic above 5 techs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can plumbing software track parts inventory on the truck?
              </h3>
              <p>
                Only a few platforms do this well. ServiceTitan has full inventory management with
                purchase orders and truck stock tracking. FieldPulse links parts to specific jobs so
                you know exactly what fittings and materials were used. Workiz has basic inventory.
                Jobber, Housecall Pro, and GorillaDesk do not have meaningful parts tracking — most
                plumbers on those platforms use a separate spreadsheet or just restock trucks weekly
                by eye.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Is ServiceTitan worth it for plumbing companies?
              </h3>
              <p>
                At 15+ techs and $1.5M+ in revenue, usually yes. The plumbing pricebook alone
                can add $200K-500K in annual revenue through higher average tickets, and the
                marketing analytics tell you which of your ad campaigns actually generate profitable
                calls. Below 10 techs, the math is harder to justify — you are looking at $7,800
                in Year 1 vs. $1,200-3,100 on Jobber or FieldPulse. Consider FieldPulse as the
                middle ground if you want a pricebook without the ServiceTitan commitment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Should I get financing built into my plumbing software?
              </h3>
              <p>
                If you do any residential work over $2K — water heater replacements, repipes,
                sewer line repairs, bathroom remodels — consumer financing is a significant
                revenue driver. Shops that offer financing report 15-25% higher close rates
                on big-ticket jobs. Housecall Pro has Wisetack built in, making it the easiest
                option. ServiceTitan integrates with GreenSky and Wisetack. For other platforms,
                you can use Wisetack as a standalone tool — your tech shares a link or scans a
                QR code. The financing itself is not hard to add, but having it built into your
                workflow means techs actually use it consistently.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
