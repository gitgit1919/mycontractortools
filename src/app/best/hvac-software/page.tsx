import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best HVAC Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best HVAC software for service contractors. We reviewed pricing, features, and ease of use for ServiceTitan, Housecall Pro, Jobber, FieldPulse, and more.",
};

const products: SoftwareProduct[] = [
  {
    name: "ServiceTitan",
    rating: 5,
    bestFor: "Established HVAC companies ($1.5M+ revenue, 15+ techs)",
    priceRange: "$250–$500+",
    pros: [
      "Industry-leading flat-rate pricebook with good/better/best presentation — techs show options on a tablet and average tickets jump 15-25%",
      "Drag-and-drop dispatch board with drive time estimates and tech skill matching (certified vs. non-certified techs)",
      "Marketing ROI tracking ties every inbound call to the ad that generated it — know your exact cost per lead by channel",
      "Membership module automates maintenance agreement renewals, seasonal reminders, and billing — recurring revenue on autopilot",
      "Dedicated onboarding project manager walks your entire team through setup over 2-3 months",
    ],
    cons: [
      "Requires multi-year contract — you are locked in, and canceling early is expensive",
      "Onboarding takes 2-3 months and requires ALL techs to attend training sessions (plan for lost billable hours)",
      "Overkill for shops under 10 techs — you will pay for features you never touch",
      "Base price is per-tech, so costs scale fast: a 10-tech shop can easily hit $400-500/mo before add-ons",
      "Steep learning curve — expect 4-6 weeks before your team is comfortable, longer for dispatchers",
    ],
    features: [
      "Flat-rate pricebook",
      "Drag-drop dispatching",
      "Marketing analytics",
      "Call tracking/recording",
      "Maintenance agreements",
      "Equipment tracking",
      "Mobile app with photo capture",
      "Reporting dashboards",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Growing HVAC shops (3-15 techs) that want simplicity + financing",
    priceRange: "$69–$149",
    pros: [
      "Most techs learn it in a single day — lowest training overhead of any platform we reviewed",
      "Wisetack consumer financing built in — huge for $5K-15K AC replacements (75% of customers who cannot pay cash say yes with financing options)",
      "Online booking lets homeowners self-schedule, reducing CSR call volume by 20-30%",
      "Real-time GPS dispatching with arrival time notifications sent automatically to customers",
      "Solid QuickBooks two-way sync that rarely breaks",
    ],
    cons: [
      "No built-in flat-rate pricebook — techs build estimates manually or you upload a PDF price list",
      "Reporting is surface-level: revenue and job counts, but no per-tech profitability or marketing attribution",
      "Customer support response times slow down during summer peak season — exactly when you need help most",
      "Limited maintenance agreement automation compared to ServiceTitan or FieldPulse",
      "No equipment history tracking — techs cannot see what unit is at a property before arriving",
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
    bestFor: "Solo techs and small HVAC shops (1-5 employees) wanting clean simplicity",
    priceRange: "$29–$99",
    pros: [
      "Cleanest interface in the category — if you hate software, you will hate this the least",
      "Quote follow-up automation sends reminders to customers who have not responded, recovering 10-15% of lost quotes",
      "Client hub lets homeowners approve quotes, pay invoices, and request service online",
      "Starts at $29/mo for a single user — lowest real entry price for a capable FSM tool",
      "Batch invoicing saves hours for shops running maintenance agreement tune-ups",
    ],
    cons: [
      "NOT HVAC-specific — it is a general field service tool used by landscapers, cleaners, and everyone else",
      "No flat-rate pricebook at all — every estimate is built from scratch",
      "Dispatching is a basic calendar view with no drive time optimization or tech skill matching",
      "No equipment tracking — you cannot link a Carrier 25VNA8 to 123 Oak St and see its full service history",
      "Limited inventory management — no real-time parts tracking or purchase order flow",
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
    bestFor: "Mid-size HVAC shops that want a pricebook without the ServiceTitan price tag",
    priceRange: "$99–$199",
    pros: [
      "Built-in flat-rate pricebook at $99/mo vs ServiceTitan at $250+ — similar functionality at 40% of the cost",
      "Customizable multi-option estimates with good/better/best presentation on mobile",
      "Maintenance agreement module with auto-billing and seasonal scheduling reminders",
      "Inventory tracking with parts-to-job linking — know exactly what went into each repair",
      "Responsive support team — real humans who typically reply within an hour, not days",
    ],
    cons: [
      "Smaller user community means fewer YouTube tutorials, Facebook groups, and peer support",
      "Mobile app occasionally lags or crashes on older Android devices — improving but not bulletproof yet",
      "Fewer third-party integrations: no native connection to popular marketing tools or call tracking platforms",
      "No built-in consumer financing option like Housecall Pro's Wisetack integration",
      "Reporting is adequate but not as deep as ServiceTitan — no marketing attribution or call-source tracking",
    ],
    features: [
      "Flat-rate pricebook",
      "Multi-option estimates",
      "Maintenance agreements",
      "Inventory management",
      "GPS dispatching",
      "CRM with customer history",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Budget-conscious HVAC startups and HVAC/pest control combo businesses",
    priceRange: "$49–$149",
    pros: [
      "Month-to-month pricing with no long-term contracts — cancel anytime if it is not working",
      "Chemical/refrigerant tracking built in — log EPA-required refrigerant usage per job without a separate spreadsheet",
      "Simple route optimization helps solo techs and small crews minimize windshield time",
      "Good fit if you run HVAC + pest control and want one platform for both service lines",
    ],
    cons: [
      "Not built for pure HVAC — originally a pest control platform, so HVAC-specific features are an afterthought",
      "Reporting is basic: job counts and revenue, but no tech performance metrics or profitability analysis",
      "No flat-rate pricebook — estimates are manual",
      "Limited automation: no quote follow-ups, no maintenance agreement auto-renewals",
      "Smaller development team means slower feature updates compared to VC-backed competitors",
    ],
    features: [
      "Route optimization",
      "Refrigerant/chemical tracking",
      "Scheduling",
      "Invoicing",
      "CRM",
      "Customer portal",
      "Payment processing",
      "Basic reporting",
    ],
  },
  {
    name: "Workiz",
    rating: 4,
    bestFor: "HVAC companies that rely heavily on phone leads and want built-in call tracking",
    priceRange: "$65–$225",
    pros: [
      "Built-in VoIP phone system with call recording and tracking — know which ads drive calls without a third-party tool",
      "Lead management pipeline shows every inquiry from first call to closed job — nothing falls through the cracks",
      "Online booking widget embeds on your website and Google Business Profile for 24/7 scheduling",
      "Team communication features reduce the back-and-forth texting between office and field",
    ],
    cons: [
      "No built-in HVAC pricebook — same manual estimate process as Jobber and Housecall Pro",
      "Interface can feel cluttered because they pack phone, scheduling, CRM, and invoicing into one screen",
      "VoIP phone system adds $20-30/mo per line on top of the base subscription",
      "Weaker maintenance agreement management compared to ServiceTitan or FieldPulse",
      "Smaller HVAC-specific user base — most Workiz users are in locksmith and appliance repair",
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
    name: "ServiceM8",
    rating: 4,
    bestFor: "Small HVAC shops on iOS wanting a polished, low-volume alternative to Jobber ($0-$300K revenue, 1-4 techs)",
    priceRange: "Free–$349",
    pros: [
      "Pricing scales with job volume, not user count — a 3-tech HVAC shop doing ~80 jobs/mo pays roughly $79/mo, well below Jobber or HCP at the same team size",
      "Genuinely beautiful iOS app that techs actually enjoy using — job cards, checklists, photos, and customer signatures flow through one clean screen with no training overhead",
      "Quotes and invoices look professional out of the box without template fiddling — branded PDFs land in the homeowner&rsquo;s inbox within 30 seconds of finishing the service call",
      "Free tier (up to 20 jobs/mo) is actually usable for solo HVAC operators starting out — no upsell pressure, no credit card required to start",
      "Job diary auto-logs every photo, email, text, and time entry against the job card — creates a complete service history on every unit without extra admin work",
    ],
    cons: [
      "iOS-only for field techs — if any of your crew carries an Android phone, ServiceM8 is a non-starter, period",
      "No built-in HVAC pricebook or flat-rate library — you build every quote from scratch, same limitation as Jobber and HCP",
      "Weak maintenance agreement management — fine for repair tickets, but not the tool if recurring tune-up programs are your core revenue stream",
      "Smaller US user base than Jobber or HCP — fewer YouTube tutorials, fewer peer support groups, support leans Australia timezone",
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

export default function BestHVACSoftware() {
  return (
    <ComparisonLayout
      title="Best HVAC Software (2026)"
      description="We compared the top field service platforms specifically for HVAC contractors — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to where your business actually is right now."
      trade="HVAC"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your HVAC Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites tell you to pick software based on &ldquo;small vs. large.&rdquo;
            That is useless. A solo tech running $120K in revenue has completely different needs
            than a 4-truck shop doing $400K. Here is how to think about it based on where
            you actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Tech / Startup</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$150K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are answering the phone, running calls, writing invoices, and doing your own
                books. You need simple scheduling and invoicing that does not eat your evenings.
                Do not overspend here — every dollar matters.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber ($29/mo) or Housecall Pro ($69/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$500K revenue, 2-5 techs</p>
              <p className="text-sm text-gray-700 mb-2">
                Dispatching matters now — you cannot keep track of 3-5 techs with a whiteboard.
                You need a mobile app your guys can actually use on the job site. Quoting becomes
                important because you are sending more estimates and cannot afford to lose half of them.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-149/mo) or FieldPulse ($99/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$500K-$1.5M revenue, 6-15 techs</p>
              <p className="text-sm text-gray-700 mb-2">
                A flat-rate pricebook matters now — it increases average tickets 15-25% and eliminates
                pricing inconsistency between techs. Maintenance agreements become your main profit driver.
                You need reporting to know which techs are profitable and which jobs lose money.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: FieldPulse ($99-199/mo) or ServiceTitan ($250+/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ revenue, 15+ techs</p>
              <p className="text-sm text-gray-700 mb-2">
                Marketing analytics, call tracking, advanced dispatching with skill matching,
                and a full pricebook are non-negotiable. You are spending $10K-50K/mo on marketing
                and need to know which channels actually produce revenue. This is ServiceTitan territory.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: ServiceTitan ($250-500+/mo)
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Day in the Life: ServiceTitan vs. Jobber
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to use this software every day.
            Here is the same Tuesday in July — peak AC season — at two different HVAC shops.
            One runs ServiceTitan, the other runs Jobber.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">7:00 AM — Dispatching the Day</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Dispatcher opens the drag-and-drop board showing 8 calls. The system
                    flags drive times between stops, highlights which techs are EPA 608 certified
                    for refrigerant work, and suggests an optimized route. She drags jobs onto
                    tech schedules in 10 minutes.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager opens the calendar view with 8 calls to assign. She manually
                    checks each tech&rsquo;s schedule, eyeballs the map for drive times, and remembers
                    which techs can handle commercial units. Assignments take 20-30 minutes and
                    sometimes the routing is not ideal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">9:00 AM — Tech at First Call (AC Not Cooling)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Tech opens the pricebook on his tablet. Diagnoses a failed capacitor.
                    He taps the repair code, and the system shows the homeowner three options:
                    Good (capacitor only, $289), Better (capacitor + contactor, $449), Best
                    (full electrical service + capacitor + contactor, $689). Photos and
                    descriptions included. The customer picks Better.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Tech diagnoses the same capacitor issue. He opens Jobber, creates a new
                    estimate from scratch, types in line items and prices from memory (or calls
                    the office to check the price list). Sends one option to the customer.
                    No visual presentation, no good/better/best.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">11:00 AM — Customer Approves the Repair</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Tech taps &ldquo;Approved,&rdquo; selects parts from inventory, completes the work,
                    and the invoice auto-generates from the pricebook. Customer signs on the
                    tablet and pays by card. The office sees it instantly. If the customer
                    cannot pay the full amount, the tech can offer financing on the spot.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Tech converts the estimate to an invoice, manually adjusts line items
                    for the actual work done, and processes the customer&rsquo;s card through Jobber
                    Payments. Simple and it works — but every step is manual.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">5:00 PM — End of Day</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">ServiceTitan</p>
                  <p className="text-sm text-gray-700">
                    Owner opens the dashboard. Revenue per tech, average ticket size,
                    close rate on estimates, which Google Ads campaign generated today&rsquo;s calls,
                    membership renewal pipeline for next month. She knows exactly where the
                    business stands.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Owner sees total revenue for the day and a list of completed jobs.
                    She can check which quotes are outstanding. Clean and simple — but no
                    marketing attribution, no per-tech profitability, no membership tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              ServiceTitan is more powerful at every step — but you are paying 5-10x more for it.
              A 5-tech shop on Jobber spends about $1,200/year. The same shop on ServiceTitan
              spends $7,000-8,000 in Year 1 (including onboarding). At $1.5M+ in revenue, ServiceTitan&rsquo;s
              pricebook and marketing analytics easily pay for themselves. At $200K in revenue, they are
              an unnecessary expense.
            </p>
          </div>

          {/* HVAC-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            HVAC-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that matter
            specifically for HVAC contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Flat-Rate Pricebook</h3>
              <p className="text-sm text-gray-700 mb-2">
                A flat-rate pricebook means your techs present pre-set prices by repair code instead
                of guessing or calling the office. Industry data consistently shows shops that switch to
                flat-rate pricing see average ticket increases of 15-25% because techs present
                good/better/best options instead of a single quote.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Built-in, best in class</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Built-in, solid</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: No pricebook</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: No pricebook</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Workiz: No pricebook</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Maintenance Agreement Management</h3>
              <p className="text-sm text-gray-700 mb-2">
                Recurring maintenance agreements are the single biggest profit driver in residential HVAC.
                A good agreement base means predictable revenue, pre-sold work in slow seasons, and
                customers who call you first instead of Googling. Your software should auto-send renewal
                reminders, schedule seasonal tune-ups, and track billing.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full module with auto-billing</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Good with auto-reminders</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Basic recurring jobs</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Basic recurring jobs</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Refrigerant Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                EPA Section 608 requires logging refrigerant usage — type, amount added, amount recovered,
                and disposal. Most HVAC shops track this on paper or spreadsheets. A handful of platforms
                let you log it per job so you have a digital record for compliance.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">GorillaDesk: Built-in chemical tracking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">ServiceTitan: Via custom forms</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Equipment Tracking by Address</h3>
              <p className="text-sm text-gray-700 mb-2">
                Linking specific equipment (model, serial number, install date, warranty status) to a
                customer address means your tech knows what unit is at the property before they arrive.
                They can check service history, see past issues, and bring the right parts. Critical for
                commercial HVAC where a building might have 10+ units.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Full equipment tracking</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Equipment records per customer</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Seasonal Dispatch Flexibility</h3>
              <p className="text-sm text-gray-700 mb-2">
                HVAC has two rush seasons: summer AC and winter heat emergencies. During July, you might
                run 50-80 calls a day with every tech maxed out. In October, you are scheduling tune-ups
                two weeks ahead. Your dispatching needs to handle both extremes — priority queuing for
                emergencies, and efficient batch scheduling for maintenance season.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ServiceTitan: Priority boards + capacity planning</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Handles volume well</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Workiz: Adequate dispatching</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Basic calendar, manual priority</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 5-tech HVAC shop
            actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber (Core plan, 5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Payment processing at 2.9% + $0.30 per transaction.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Setup in a few days with
                their guided onboarding videos. Payment processing included.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">FieldPulse (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$149/mo = <strong>~$1,788/year</strong>. No onboarding fee. Includes pricebook
                functionality that would require ServiceTitan at 2-3x the cost.
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
            <p className="font-semibold text-brand-blue mb-1">When ServiceTitan&rsquo;s Price Makes Sense</p>
            <p className="text-sm text-gray-700">
              ServiceTitan&rsquo;s pricebook typically increases average ticket by $200-500 per call.
              If your shop runs 20 calls per week, that is an additional $200K-500K in annual
              revenue. At that scale, the $4,800/year subscription pays for itself in the first
              week. The math works when you are big enough — it does not work at 5 calls a day
              with a $300 average ticket.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Mobile app reliability:</strong> Your techs live on their phones in attics
              and crawl spaces with one bar of signal. Ask for a trial and test the app in
              airplane mode — if it does not cache job data offline, it will fail you on-site.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless the platform has built-in accounting
              (most do not), seamless two-way QuickBooks sync is non-negotiable. Test this in
              the trial — broken syncs create bookkeeping nightmares.
            </li>
            <li>
              <strong>Consumer financing:</strong> If you do AC replacements ($5K-15K+), consumer
              financing is a revenue multiplier. Housecall Pro has Wisetack built in. ServiceTitan
              partners with GreenSky and Wisetack. For other platforms, you will use a standalone
              financing tool.
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
                I am a one-truck HVAC shop doing $100K. What software should I use?
              </h3>
              <p>
                Jobber at $29/mo. It handles scheduling, invoicing, and quoting without
                overwhelming you. You do not need dispatching, a pricebook, or marketing
                analytics yet. Housecall Pro at $69/mo is also solid if you want online
                booking from day one. Do not spend more than $100/mo on software at this stage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When should I switch to ServiceTitan?
              </h3>
              <p>
                When you hit 10+ techs and $1M+ in revenue, and you are spending at least
                $5K/mo on marketing that you cannot track. That is when ServiceTitan&rsquo;s
                pricebook, marketing attribution, and advanced dispatching start paying for
                themselves. If you are not there yet, you will be paying for features that
                sit unused.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Is ServiceTitan worth the cost for a 5-tech shop?
              </h3>
              <p>
                Usually not. At 5 techs, you are looking at $7,800 in Year 1 vs. $1,200-1,800
                on Jobber or Housecall Pro. ServiceTitan&rsquo;s pricebook is the main draw, but
                FieldPulse offers similar pricebook functionality at $99-199/mo with no
                multi-year contract and no $3,000 onboarding fee. Consider FieldPulse as
                the middle ground.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need HVAC-specific software or can I use a general FSM tool?
              </h3>
              <p>
                For most shops under $500K, a general FSM tool (Jobber, Housecall Pro)
                works fine. You only need HVAC-specific features — pricebook, equipment
                tracking, maintenance agreements, refrigerant logging — when you are doing
                flat-rate residential service at scale or managing a larger fleet. If you are
                doing mostly install work or commercial, general tools can carry you further
                than you think.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What about consumer financing for AC replacements?
              </h3>
              <p>
                Consumer financing is critical if you sell AC replacements over $5K. Housecall Pro
                has Wisetack built in, making it the easiest option. ServiceTitan integrates with
                GreenSky and Wisetack. For other platforms, you can use Wisetack, GreenSky, or
                Synchrony as a standalone tool — your tech just shares a link or scans a QR code.
                Financing typically increases close rates by 15-25% on big-ticket jobs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch software later without losing data?
              </h3>
              <p>
                Most platforms let you export customer data, job history, and invoices as CSV files.
                But switching is still painful: you lose saved templates, custom workflows, and your
                team&rsquo;s muscle memory. Expect 2-4 weeks of reduced productivity during any
                transition. The best move is to pick a platform you can grow into for at least
                2-3 years. If you are at $200K and growing fast, it may make sense to start
                on FieldPulse now instead of Jobber, even if Jobber is cheaper, so you do not
                have to switch again at $500K.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
