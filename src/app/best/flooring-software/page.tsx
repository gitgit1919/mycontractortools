import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Flooring Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best flooring software for installers and dealers. Real pricing, measurement tools, waste factors, and seam diagram breakdowns for MeasureSquare, RFMS, Jobber, Housecall Pro, Buildertrend, and JobNimbus.",
};

const products: SoftwareProduct[] = [
  {
    name: "MeasureSquare",
    rating: 5,
    bestFor: "Flooring installers and dealers who live or die on accurate takeoffs — $200K-$3M revenue",
    priceRange: "$99–$299",
    pros: [
      "Purpose-built for flooring takeoffs — draw rooms from blueprints or laser-measurer import and get exact square footage, linear footage, and transition counts without manual math",
      "Seam diagram layouts for carpet, sheet vinyl, and LVP show exactly where seams land so you can order the right roll width and avoid visible joints in high-traffic areas",
      "Waste factor logic is material-aware — 10% on standard LVP, 15% on diagonal hardwood, 20% on patterned carpet — instead of one blanket number that either over-orders or short-ships you",
      "Material catalog connects directly to distributor pricing for Shaw, Mohawk, Armstrong, and Mannington so your quote math updates automatically when your vendor changes cost",
      "Mobile measure-up on iPad lets your estimator walk a house, sketch rooms as they go, and have a priced proposal ready before leaving the driveway",
    ],
    cons: [
      "Not a full business management platform — you still need Jobber, Housecall Pro, or QuickBooks for scheduling, dispatch, and accounting",
      "Learning curve for the room-drawing tool is real — plan on 2-3 weeks before estimators are fast and comfortable",
      "Integration with field service tools is limited — you usually rekey approved estimates into your scheduling platform",
      "Pricing scales with users and modules — a 5-seat setup with the commercial bid module can push past $300/mo",
      "Support is solid but business hours only — no 24/7 chat like the newer cloud-native tools",
    ],
    features: [
      "Room-shape takeoffs",
      "Seam diagram layouts",
      "Material-specific waste factors",
      "Vendor pricing catalogs",
      "Mobile iPad measure-up",
      "Commercial bid module",
      "Proposal generation",
      "QuickBooks export",
    ],
  },
  {
    name: "RFMS",
    rating: 5,
    bestFor: "Established flooring dealers and showroom-driven operations — $1.5M+ revenue with commercial work",
    priceRange: "$300+",
    pros: [
      "End-to-end ERP built for the flooring industry — inventory, point-of-sale, showroom selection tracking, job costing, and AR all in one system instead of five duct-taped tools",
      "Roll-goods inventory tracking handles the reality of carpet and sheet vinyl — partial rolls, dye lots, and remnants stay organized instead of living on a clipboard in the warehouse",
      "Manufacturer rebate and claim tracking captures the 2-5% in annual rebates that dealers routinely leave on the table because nobody is reconciling them",
      "Showroom-to-install workflow ties a customer&rsquo;s sample selections to the final install order so nothing gets re-specced during scheduling",
      "Commercial bid management handles the spec-heavy, multi-product, multi-phase projects that destroy general field service tools",
    ],
    cons: [
      "Expensive — RFMS is enterprise-priced with real implementation fees (budget $15K-40K in Year 1 for a mid-size dealer)",
      "Implementation takes 2-6 months and needs a dedicated internal champion — this is ERP, not plug-and-play software",
      "Overkill for pure install subs without a showroom or inventory — most of the value sits in the dealer-side modules",
      "Interface feels older than modern cloud tools — functional, industry-specific, but not pretty",
      "Support quality varies — enterprise accounts get priority, smaller dealers can wait",
    ],
    features: [
      "Flooring industry ERP",
      "Roll-goods inventory",
      "Showroom selection tracking",
      "Rebate and claim management",
      "Job costing",
      "Commercial bidding",
      "Point-of-sale",
      "AR and AP",
    ],
  },
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Small flooring install crews — $150K-$1M revenue, residential install focus",
    priceRange: "$29–$149",
    pros: [
      "Cleanest scheduling interface in the category — dispatching a 3-day hardwood install across two crews is a 30-second drag-and-drop instead of a phone call chain",
      "Client hub lets homeowners approve the LVP proposal, sign a change order for unexpected subfloor prep, and pay their deposit online without a single phone tag",
      "Quote follow-up automation recovers 10-15% of estimates that homeowners forgot to respond to — at a $6K average install, that is real money on the table",
      "Mobile app is the easiest for installers to actually use in the field — your lead installer can check tomorrow&rsquo;s job, photo subfloor conditions, and close out today in under 90 seconds",
      "Month-to-month pricing with no long implementation — you can be running a real flooring workflow in a single afternoon",
    ],
    cons: [
      "No flooring-specific estimating — you build square footage manually with no material catalog, no waste factor logic, and no seam diagrams",
      "Material tracking is generic — there is no concept of roll goods, dye lots, or partial inventory (you will track these on a spreadsheet or in your head)",
      "Budget vs actual job costing is thin — hard to know whether the $14K LVP job actually cleared your 25% margin target after unexpected subfloor prep",
      "No native consumer financing on the base plan — you will share a Wisetack or GreenSky link separately at the kitchen table",
      "Built for general field service, not flooring — there is no showroom selection tracking or manufacturer warranty log",
    ],
    features: [
      "Drag-and-drop scheduling",
      "Quote follow-up automation",
      "Client self-service hub",
      "Change order signatures",
      "Batch invoicing",
      "GPS tracking (Connect plan)",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Residential flooring companies selling $8K-25K installs that need consumer financing",
    priceRange: "$69–$149",
    pros: [
      "Wisetack consumer financing built directly into the estimate — the single biggest lever for closing $12K-25K LVP and hardwood jobs where homeowners cannot pay cash",
      "Online booking lets homeowners self-schedule an in-home measure, which fills your estimator&rsquo;s calendar without the front office chasing leads",
      "Automated review requests build up Google reviews on every closed install — flooring leads are highly local-search driven and reviews compound over years",
      "Crews get up and running in about a day — the lowest training overhead in the category and the friendliest mobile app for non-tech-savvy installers",
      "Solid two-way QuickBooks sync rarely breaks — invoices, payments, and deposits reconcile cleanly at month-end",
    ],
    cons: [
      "No flooring-specific takeoffs, waste factors, or seam logic — every estimate is manual math or a side trip to a calculator app",
      "Job costing on multi-day installs is basic — you can see revenue per job but not true margin after materials, labor, and subfloor prep",
      "No roll-goods or dye-lot tracking — irrelevant for LVP and hardwood installers, a blocker for anyone doing carpet or sheet vinyl at scale",
      "Change order workflow is workable but less polished than Jobber&rsquo;s — painful when subfloor damage shows up mid-install",
      "Recurring-service features (maintenance contracts, floor refinishing schedules) are adequate but feel bolted-on",
    ],
    features: [
      "Wisetack financing",
      "Online booking",
      "Automated review requests",
      "GPS dispatching",
      "Payment processing",
      "QuickBooks sync",
      "Customer notifications",
      "Mobile crew app",
    ],
  },
  {
    name: "Buildertrend",
    rating: 4,
    bestFor: "Design-build flooring dealers and larger install operations — $1M+ with multi-week projects",
    priceRange: "$499+",
    pros: [
      "Real project management built for multi-week builds — daily logs, selection sheets, schedule dependencies, and subfloor prep tracking live on every job",
      "Selection sheets are purpose-built for the showroom workflow — customers approve their LVP color, hardwood stain, and tile pattern in one place with signatures captured",
      "Change order workflow is the strongest in the category — when subfloor rot shows up on day 2, your crew can price, sign, and collect on the change before work continues",
      "Customer portal is genuinely useful for bigger jobs — homeowners see the day-by-day schedule, upload inspiration photos, and approve selections in one place",
      "Integrates with Xero and QuickBooks and feeds real job costing — you can actually tell whether the $40K whole-house LVP install hit your target margin",
    ],
    cons: [
      "Expensive — $499/mo starting and scales up fast with more users and features (budget $8K-15K a year for a real setup)",
      "Overkill for single-day install crews — the project management overhead is wasted on a 6-hour bedroom carpet swap",
      "Learning curve is meaningful — 4-6 weeks before the office and the field are both comfortable",
      "No flooring-specific takeoff or waste factor logic — Buildertrend gives you the project skeleton, but you still need MeasureSquare or a calculator for accurate material math",
      "Mobile app is adequate but not as snappy as Jobber or Housecall Pro for day-of-install dispatch",
    ],
    features: [
      "Selection sheets",
      "Daily logs with photos",
      "Change order workflow",
      "Schedule dependencies",
      "Customer portal",
      "Job costing",
      "QuickBooks/Xero sync",
      "Document storage",
    ],
  },
  {
    name: "JobNimbus",
    rating: 4,
    bestFor: "Installers running flooring plus adjacent work (restoration, remodel) — $300K-$1.5M revenue",
    priceRange: "$25–$99",
    pros: [
      "Visual job boards (kanban style) make multi-crew dispatching easy when you have 10-15 open install jobs in different phases at once",
      "Strong CRM with lead tracking from the first showroom call through final invoice — critical for flooring dealers who run the full sales cycle",
      "Photo documentation per job is clean and fast — before, during, and after photos of subfloor conditions, moisture readings, and finished installs all live on the job card",
      "Templates for install workflows (LVP, hardwood, tile, carpet) let you spin up a new job with the right checklist and document list in under a minute",
      "Priced reasonably for the capability — you get real CRM and project tracking for under $100/user without jumping to enterprise tools",
    ],
    cons: [
      "No flooring-specific takeoffs, seam diagrams, or material-aware waste factors — you still need a side tool for accurate estimates",
      "Scheduling is functional but less polished than Jobber — drag-and-drop exists but the calendar views can feel cluttered",
      "Mobile app reliability is a common complaint — works well on good signal, gets frustrating in a basement with one bar",
      "Reporting is thinner than Buildertrend or RFMS — you can see revenue and job counts but deep margin analysis needs an export",
      "Customer portal is basic compared to Jobber&rsquo;s client hub or Buildertrend&rsquo;s owner view",
    ],
    features: [
      "Visual job boards",
      "CRM with lead tracking",
      "Photo documentation",
      "Install workflow templates",
      "Scheduling",
      "Estimating",
      "Invoicing",
      "QuickBooks sync",
    ],
  },
];

export default function BestFlooringSoftware() {
  return (
    <ComparisonLayout
      title="Best Flooring Software (2026)"
      description="We compared the top software platforms specifically for flooring installers and dealers — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, matched to where your flooring business actually is right now."
      trade="Flooring"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Flooring Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites tell you to pick flooring software based on &ldquo;features&rdquo; or
            &ldquo;ease of use.&rdquo; That is useless. A solo LVP installer doing $120K a year has
            completely different needs than a 5-person dealer running a showroom plus install crews
            across residential and small commercial work. Here is how to think about it based on where
            your business actually is:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Installer</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$150K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are measuring, quoting, installing, and invoicing yourself. Most jobs are LVP or
                laminate pulls in bedrooms and living rooms, a few bigger whole-house projects a year.
                You need simple scheduling, clean invoicing, and a way to collect deposits without
                chasing checks. Every dollar of software cost is one less dollar in your pocket — do
                not overspend here.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Core ($29/mo) or JobNimbus ($25/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$500K revenue, 2-4 installers</p>
              <p className="text-sm text-gray-700 mb-2">
                You are selling real install work — $8K-20K LVP jobs, whole-house hardwood, some tile.
                Consumer financing starts to matter because more customers ask for it. Change orders
                are eating you alive when subfloor rot shows up mid-install. You need faster, more
                accurate takeoffs and a cleaner way to collect on change orders before the crew keeps
                working.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-149/mo) or Jobber Connect ($149/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$500K-$1.5M revenue, 5-10 installers</p>
              <p className="text-sm text-gray-700 mb-2">
                You are quoting enough volume that bad takeoffs are costing you real margin. You need
                material-aware waste factors, vendor pricing that updates automatically, and seam
                diagrams for the carpet and sheet vinyl side. Multi-day installs need real project
                management — selection sheets, daily logs, and tight change order workflow. This is
                where flooring-specific tools start earning their keep.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: MeasureSquare + Jobber, or Buildertrend ($499+/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Dealer</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ with showroom, 10+ employees</p>
              <p className="text-sm text-gray-700 mb-2">
                You have a showroom with samples, a roll-goods warehouse, install crews, and probably
                some small commercial bid work. You need inventory tracking for partial rolls and dye
                lots, manufacturer rebate capture, and a showroom-to-install workflow that keeps
                selections from drifting between the sale and the install. This is RFMS territory —
                general field service tools will start fighting you here.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: RFMS ($300+/mo plus implementation)
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Day in the Life: MeasureSquare vs. Jobber vs. Buildertrend
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run a $14K LVP install on this
            software. Here is the same week at a 5-person flooring shop running three different
            platforms, from the in-home measure on Monday to the final walkthrough on Friday.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Monday 10:00 AM — In-Home Measure for 1,400 SqFt LVP Install ($14K)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">MeasureSquare</p>
                  <p className="text-sm text-gray-700">
                    Estimator walks the house with an iPad and a laser measurer. Sketches each room as
                    they go, LVP pattern is pre-loaded, waste factor auto-applies at 10% for plank over
                    standard subfloor. Transitions, quarter round, and underlayment calculate from the
                    room perimeters automatically. Priced proposal is ready before leaving the driveway.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Estimator measures rooms with a tape or laser and writes totals on a notepad. Back
                    at the truck, they type square footage into Jobber as a line item, add a flat
                    material cost, labor hours, and underlayment. Clean-looking proposal sends through
                    the client hub. What is missing: material-aware waste logic and a catalog that
                    knows LVP is $3.89/sqft this week instead of last week&rsquo;s $3.65.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Estimator builds the job as a multi-phase project with a selection sheet for LVP
                    color, transitions, and quarter round. Rich documentation workflow, but the
                    measurement and waste math still happens manually or in a side tool. Great when
                    the job is a whole-house design-build, heavier than you need for one room of LVP.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Wednesday — Materials Arrive, Crew Dispatched, Subfloor Damage Found</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">MeasureSquare</p>
                  <p className="text-sm text-gray-700">
                    MeasureSquare does not handle dispatch or change orders natively — this is where
                    the workflow hits a seam. Your office manager rekeys the approved estimate into
                    Jobber or QuickBooks, schedules the crew, and handles the change order there. The
                    takeoff accuracy was worth it, but the handoff costs you 20-30 minutes per job.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Crew lead opens tomorrow&rsquo;s job on the mobile app, sees the notes, arrives on
                    site. When they find subfloor rot in the laundry room, they photo it, type a
                    change order line in Jobber on the phone, and text the customer a signature link.
                    Customer signs, deposit collected, crew keeps working. Under 5 minutes from
                    discovery to authorized work. This is Jobber&rsquo;s best flooring moment.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Crew lead creates a formal change order in Buildertrend with photos of the
                    subfloor damage, line items for plywood, labor, and disposal. Customer approves
                    through the owner portal. More ceremony than Jobber, but the documentation is
                    bulletproof if there is ever a warranty dispute six months later. Best fit for
                    larger jobs where change orders need formal paper trails.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Friday 3:00 PM — Final Walkthrough, Customer Signoff, Final Invoice</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">MeasureSquare</p>
                  <p className="text-sm text-gray-700">
                    Not where MeasureSquare lives — the original estimate was accurate, but the final
                    invoice, signoff, and payment collection happens in whatever field service or
                    accounting tool you paired it with. Once again a handoff, once again a few minutes
                    of rekeying.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Crew lead walks the customer through the finished install, captures a signature
                    on the iPad right in Jobber, and converts the approved estimate plus change order
                    into a final invoice. Customer taps pay, ACH or card goes through. From walkthrough
                    to paid in under 10 minutes. Fast, clean, exactly how you expect it to work.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Buildertrend</p>
                  <p className="text-sm text-gray-700">
                    Job wraps inside the project record with all the daily logs, photos, selection
                    sheets, and change orders attached. Final invoice pulls from the cost codes and
                    posts to QuickBooks cleanly. The overhead is worth it for a $40K whole-house
                    install, less so for a one-day 400 sqft bedroom LVP swap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              MeasureSquare wins the estimate — nothing else gets flooring takeoffs as accurate or as
              fast. Jobber wins the week — dispatch, change orders, signoff, and payment all flow
              cleanly for $150K-$1M installers. Buildertrend wins the bigger project — when the job is
              a 3-week whole-house build with selection sheets and formal change orders. Most serious
              shops end up running MeasureSquare for estimating plus Jobber or Buildertrend for the
              rest of the workflow. Pick based on where the pain is biggest in your business today.
            </p>
          </div>

          {/* Flooring-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Flooring-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most field service platforms are built for general trades. Here are the features that matter
            specifically for flooring contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Room-Shape Measurement and Takeoffs</h3>
              <p className="text-sm text-gray-700 mb-2">
                Every flooring estimate starts with accurate square footage. Rooms with closets, bump-outs,
                and angled walls are where generic calculators fall apart. A real takeoff tool lets you
                sketch the actual room shape, subtract islands and fireplace bases, and get exact
                material counts instead of rounded-up guesses. On a $14K LVP install, a 3% takeoff error
                is $420 of margin lost before the crew ever shows up.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">MeasureSquare: Purpose-built</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">RFMS: Integrated dealer tool</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Buildertrend: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Seam Layout Diagrams</h3>
              <p className="text-sm text-gray-700 mb-2">
                For carpet, sheet vinyl, and wider-plank LVP, seam placement affects both appearance and
                material usage. A smart seam diagram shows you how rolls will lay out across the room,
                where visible joints will land, and whether a different roll width cuts waste. Getting
                this right on a 20-yard carpet install is the difference between one roll and two.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">MeasureSquare: Strong seam tools</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">RFMS: Integrated</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not available</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Buildertrend: Not available</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Material-Aware Waste Factors</h3>
              <p className="text-sm text-gray-700 mb-2">
                A blanket 10% waste factor is wrong more often than it is right. Standard LVP runs 8-10%,
                diagonal hardwood runs 15%, patterned carpet can hit 20%, and tile diagonal layouts push
                the same. Flooring-specific tools apply the right waste factor per material and per
                install pattern automatically. General FSM tools ask you to remember and type it every
                time — which nobody does.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">MeasureSquare: Per-material logic</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">RFMS: Full dealer logic</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Manual per line</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Material Catalog with Vendor Pricing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Flooring materials move in price constantly. A live catalog tied to your distributor
                means your quote math updates automatically when Shaw raises LVP cost by $0.15/sqft. Without
                it, you are either quoting from stale prices and eating the difference or calling the
                supplier every time you build a proposal.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">RFMS: Full dealer catalogs</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">MeasureSquare: Vendor integration</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Custom catalog</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Manual price books</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Subfloor Prep Estimation and Documentation</h3>
              <p className="text-sm text-gray-700 mb-2">
                Subfloor conditions are where margin goes to die. If you cannot price prep work (leveling
                compound, plywood replacement, moisture mitigation) into the original estimate — or
                cleanly add it as a change order once work starts — you will eat those costs. Your
                software should make it fast to document with photos, price, and collect signatures
                before the crew keeps working.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Daily logs + change orders</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Fast mobile change orders</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Photo documentation</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Workable</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">MeasureSquare: Estimate-side only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Customer Signatures on Estimates and Change Orders</h3>
              <p className="text-sm text-gray-700 mb-2">
                A signed change order collected on the spot is the difference between getting paid for
                subfloor prep and eating it. Mobile-first signature capture — where your installer
                pulls out a phone, shows the price, and gets a tap signature before starting the extra
                work — is table stakes for serious flooring shops.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Fast mobile signatures</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Fast mobile signatures</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Formal approval flow</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Workable</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">RFMS: Dealer-oriented</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Showroom Integration and Selection Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you run a showroom, your biggest leak is when a customer&rsquo;s in-store selection
                does not match what ends up on the install order. Showroom-to-install tracking ties the
                sample the customer picked to the line item on the work order — so the warehouse pulls
                the right LVP color the first time and nobody wastes a Saturday re-doing a bedroom.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">RFMS: Purpose-built dealer workflow</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Buildertrend: Selection sheets</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">MeasureSquare: Proposal-linked</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Consumer Financing for $8K-$25K Install Jobs</h3>
              <p className="text-sm text-gray-700 mb-2">
                A huge share of residential flooring buyers cannot write a $15K check but will happily
                finance the same job over 24-60 months. Built-in Wisetack or GreenSky integration at
                the kitchen table turns maybe-customers into yes-customers. On a $600K shop, a 10%
                close-rate bump from financing is an extra $60K a year in revenue.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Wisetack built-in</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Via link/QR code</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Buildertrend: Via integration</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Via integration</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">RFMS: Dealer financing programs</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 5-person flooring shop doing
            about $600K in revenue (residential install plus some small commercial) actually pays on
            each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Good for install-only shops without a showroom. Payment processing at 2.9% + $0.30
                per transaction. Pair with a calculator app for waste factors.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Connect (5 users, with GPS)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Adds live GPS tracking and advanced scheduling.
                This is the plan most small flooring crews should actually be on once they have
                multiple installers working at different addresses on the same day.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Wisetack consumer financing
                included — worth real money on any shop doing $10K+ installs. Weaker estimating than
                Jobber but stronger out-of-the-box sales flow.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">JobNimbus (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$75-99/user/mo = <strong>~$4,500-5,900/year</strong>. Strong CRM and visual job
                boards. Best when you also run restoration, remodel, or insurance-adjacent work
                alongside flooring.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">MeasureSquare (5 users, plus a field service tool)</p>
              <p className="text-sm text-gray-700">
                ~$199-299/mo = <strong>~$2,400-3,600/year</strong> for MeasureSquare, plus another
                $1,200-1,800 for Jobber or Housecall Pro on the scheduling and invoicing side. Total
                around <strong>$3,600-5,400/year</strong>. The takeoff accuracy pays for itself if you
                are losing 3-5% of margin to waste estimation today.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Buildertrend (5 users)</p>
              <p className="text-sm text-gray-700">
                $499+/mo = <strong>$6,000-12,000/year</strong> depending on plan and add-ons. Real
                implementation effort (2-4 weeks). Best when you run multi-week whole-house installs
                or design-build work where selection sheets and formal change orders matter.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">RFMS (mid-size dealer)</p>
              <p className="text-sm text-gray-700">
                $300+/mo base + per-user fees + implementation = <strong>~$15,000-40,000 in Year
                1</strong> for a mid-size dealer with showroom and inventory. Typical RFMS customers
                are $2M+ dealers where rebate capture, inventory accuracy, and commercial bidding
                actually move the number.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When MeasureSquare&rsquo;s Price Makes Sense</p>
            <p className="text-sm text-gray-700">
              MeasureSquare typically recovers 3-5% of gross margin on a flooring shop that was
              previously estimating waste by gut feel or using a flat 10% across every material. On a
              $600K business, that is $18K-30K a year in recovered profit. At that scale, a
              $3K-5K/year combined software spend is one of the highest ROI moves you can make. But
              if you are a $120K solo installer doing one LVP bedroom a week, MeasureSquare is
              expensive overhead you do not need yet — a $99/mo Jobber subscription and a calculator
              app covers you fine.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Takeoff accuracy:</strong> Pull three of your last ten jobs and rebuild the
              estimates in a trial of the tool you are considering. If the new tool gets to a different
              material total, that delta times your job volume is the annual value of switching.
            </li>
            <li>
              <strong>Mobile change-order workflow:</strong> Your installers are on their knees in a
              dusty hallway when they find subfloor rot. Test the mobile app in that scenario — how
              many taps to document, price, and collect a signed change order? Anything over 2 minutes
              means money left on the floor.
            </li>
            <li>
              <strong>Consumer financing:</strong> If you sell $10K+ install jobs, Wisetack or GreenSky
              integration is a revenue multiplier. Housecall Pro has Wisetack built in. On other
              platforms you share a link or QR code at the kitchen table — workable but adds friction.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Unless you are on RFMS (which has its own
              accounting), seamless two-way QuickBooks sync is non-negotiable. Test this in the trial.
              Broken syncs create month-end reconciliation nightmares.
            </li>
            <li>
              <strong>Showroom vs install-only:</strong> If you run a showroom, RFMS and Buildertrend
              are the only tools that really handle selection tracking. Pure install subs should skip
              that complexity and stay on Jobber or Housecall Pro.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating customer data,
              rebuilding estimate templates, and 2-4 weeks of reduced productivity. Pick a platform
              you can grow into for 2-3 years, not just the one that feels right today.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo LVP installer doing $120K a year. What should I use?
              </h3>
              <p>
                Start with Jobber Core at $29/mo or JobNimbus at $25/user. Both give you real scheduling,
                quoting, and invoicing without the complexity of flooring-specific ERP tools. Do your
                waste math on a $10 calculator app and add 10-12% to your material counts. Do not spend
                more than $50/mo on software at this stage — every dollar should be in your pocket, not
                a subscription. When your estimator volume or install complexity grows, that is when
                MeasureSquare starts earning its keep.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I really need flooring-specific software, or will Jobber cover it?
              </h3>
              <p>
                For most install-only shops under $500K, Jobber or Housecall Pro covers 90% of the
                workflow — scheduling, dispatch, change orders, invoicing, and payment. The 10% gap is
                accurate takeoffs, waste factors, and seam diagrams. If your estimator is fast with a
                tape and calculator, you can live in that gap. Once bad takeoffs start costing you real
                margin — usually around $500K-$1M in revenue — that is when adding MeasureSquare to your
                stack pays for itself in the first few jobs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When does MeasureSquare actually pay for itself?
              </h3>
              <p>
                When you are quoting enough volume that even a 3% waste estimation error is leaving
                real money on the floor. On a $600K shop running 15% gross margin, recovering 3% of
                material waste is roughly $18K-20K a year — which covers MeasureSquare plus Jobber
                several times over. Below $300K in install revenue, the ROI math gets thin and you are
                better off on Jobber alone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I handle consumer financing for $10K-$25K install jobs?
              </h3>
              <p>
                Housecall Pro has Wisetack built directly into the estimate flow — customers tap to
                apply and get approved at the kitchen table. On Jobber, Buildertrend, or JobNimbus, you
                use Wisetack or GreenSky as a standalone tool and share a link or QR code during the
                sales conversation. Both work, but the built-in flow in Housecall Pro has a meaningful
                close-rate advantage on bigger install jobs where financing is the difference between a
                yes and a maybe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                We run a showroom and install crews. What fits that?
              </h3>
              <p>
                RFMS is the industry standard for dealers with showrooms and inventory — it handles
                roll-goods tracking, dye lots, rebate capture, and showroom-to-install workflow that
                nothing else touches. Buildertrend is the lighter alternative with strong selection
                sheets and project management but without the flooring-specific ERP depth. For a small
                showroom under $1.5M, Buildertrend is often the better price-to-value fit. For
                established dealers $2M+, RFMS typically wins despite the price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I stop losing money on subfloor surprises?
              </h3>
              <p>
                Two things: make sure your original estimate has a &ldquo;subfloor contingency&rdquo;
                line that customers sign for upfront, and make sure your mobile change order workflow
                is fast enough that your installer captures a signed addition in under 2 minutes when
                rot or moisture shows up. Jobber and Housecall Pro are the fastest here for
                mobile-first change orders. Buildertrend has the most formal paper trail if you need
                it for larger jobs. The worst outcome is an installer who &ldquo;just fixes it&rdquo;
                without paperwork and eats the cost — your software should make the right behavior the
                easiest behavior.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch software later without losing data?
              </h3>
              <p>
                Most platforms let you export customer data, job history, and invoices as CSV files.
                But switching is painful: you lose templates, custom workflows, saved takeoffs, and
                your team&rsquo;s muscle memory. Expect 2-4 weeks of reduced productivity during any
                transition — right in your busy season is the worst time to try it. The best move is
                to pick a platform you can grow into for 2-3 years. If you are at $300K and growing
                fast, it may make sense to start on Jobber Connect or add MeasureSquare now instead of
                waiting, so you do not have to replatform at $800K.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
