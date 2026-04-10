import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Painting Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best software for painting contractors. Real pricing, proposal quality, production rates, and financing breakdowns for PaintScout, Jobber, Housecall Pro, Estimate Rocket, FieldPulse, and Markate.",
};

const products: SoftwareProduct[] = [
  {
    name: "PaintScout",
    rating: 5,
    bestFor: "Painters who live and die on proposal quality — $200K-$2M residential and commercial repaints",
    priceRange: "$99–$249",
    pros: [
      "Proposals are the gold standard in the trade — branded, visual, room-by-room line items with photos and scope that close at 15-25% higher rates than a plain PDF from a general tool",
      "Built-in production rates by surface type (smooth drywall, textured, trim, cabinets, ceilings, doors) auto-calculate labor hours so your estimates stop being gut-feel",
      "Rate library keeps pricing consistent across estimators — your new salesperson bids the same interior repaint the same way you do, instead of being $1,500 off",
      "Color and spec sheet attachments per room let you document SW 7029 Agreeable Gray on the living room walls and 7005 Pure White on the trim without a separate spreadsheet",
      "Integrates cleanly with Jobber and Housecall Pro so you can use PaintScout for the quote and a general tool for scheduling and invoicing without double-entry",
    ],
    cons: [
      "Not a full field service management tool — no scheduling, dispatching, or crew GPS (you pair it with Jobber or HCP for those)",
      "Pricing is steep for a solo painter still figuring out production rates — the tool shines when you already know your numbers",
      "Learning the production rate library takes 2-4 weeks of tuning before estimates feel truly accurate",
      "Mobile experience is primarily for in-home estimating — office workflows need a laptop",
      "Smaller user community than Jobber — fewer YouTube walkthroughs and Facebook group tips",
    ],
    features: [
      "Painting-specific estimating",
      "Visual branded proposals",
      "Production rate library",
      "Color/spec attachments",
      "Photo documentation",
      "Digital signatures",
      "Jobber/HCP integration",
      "Proposal analytics",
    ],
  },
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Most painting contractors — residential repaints plus small commercial, $100K-$1M revenue",
    priceRange: "$29–$149",
    pros: [
      "Quote follow-up automation recovers 10-15% of painting estimates that homeowners forgot to respond to — a single recovered $6,000 interior repaint pays for a year of software",
      "Client hub lets customers approve the proposal, pay the deposit, and upload reference photos without phone tag",
      "Cleanest mobile app in the category — your crew leader can log cabinet refinish hours between coats without pulling out a laptop",
      "Batch invoicing handles the end of a multi-room job cleanly — one click sends the final invoice with photos attached",
      "Recurring job templates work for your annual maintenance accounts (HOAs, property managers, repaint-on-schedule commercial clients)",
    ],
    cons: [
      "Estimating is thin for painting-specific work — no production rates by surface type, no color spec tracking, no cabinet refinish workflow",
      "Proposals look generic compared to PaintScout — fine for a $2,500 bedroom job, underwhelming for a $15,000 full-interior repaint where presentation closes the sale",
      "No built-in consumer financing — you lose the $8K-20K interior repaint customers who need monthly payments",
      "No cabinet refinishing as a separate workflow — you shoehorn it into a standard job",
      "Budget vs actual job costing is basic — you export to a spreadsheet to figure out whether the exterior job actually made money",
    ],
    features: [
      "Quoting with follow-ups",
      "Recurring job scheduling",
      "Client self-service hub",
      "Batch invoicing",
      "Payment processing",
      "GPS tracking (Connect plan)",
      "QuickBooks sync",
      "Mobile app",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 5,
    bestFor: "Residential repaint companies doing $5K-$20K interior jobs where financing unlocks sales",
    priceRange: "$69–$149",
    pros: [
      "Wisetack consumer financing is built in — this is the biggest deal for painting because a $12,000 full-interior repaint that the homeowner cannot pay cash for often closes at $180/month",
      "Online booking lets homeowners self-schedule an in-home estimate without calling the office — huge for solo painters who cannot answer the phone mid-ladder",
      "Automated review requests fire the day after the last coat dries — Google reviews are the #1 lead source for most residential painters and this runs in the background",
      "Most crews learn it in a day — lowest training overhead in the category, which matters when you hire a sprayer in June and need them producing by July",
      "Solid QuickBooks two-way sync for painters running a real set of books",
    ],
    cons: [
      "No painting-specific estimating — no production rates, no surface-type calculators, no color spec tracking",
      "Proposals look like generic service invoices — for anything over $8K, customers compare yours to PaintScout bids and you lose on presentation",
      "No dedicated cabinet refinishing workflow — you build it as a custom job type",
      "Reporting is basic — you will not get profit-per-job analytics without exporting data",
      "Route optimization matters less for painters (you are usually on one property all day) so you are paying for features you do not fully use",
    ],
    features: [
      "Wisetack financing",
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
    name: "Estimate Rocket",
    rating: 4,
    bestFor: "Solo and small painters ($0-$250K) who need better proposals than Jobber but cannot afford PaintScout yet",
    priceRange: "$79–$199",
    pros: [
      "Painting-specific proposal templates that are noticeably nicer than a generic FSM tool without the full price of PaintScout",
      "Digital signatures and deposit collection built in — the homeowner can approve a $4,500 exterior trim repaint from their kitchen table and pay the deposit in the same flow",
      "Photo attachments for scope documentation — before photos of peeling trim, moisture damage, or prep needs live with the estimate and protect you later",
      "Simple pricing, no long onboarding — a new painter can be sending polished estimates within a day",
      "Follow-up automation reminds you to chase unsigned estimates, which is where most painters leak revenue",
    ],
    cons: [
      "No real field service management — scheduling, dispatching, and crew assignment are not its strong suit",
      "Production rates are lighter than PaintScout — you will still calculate labor hours somewhat by feel",
      "Reporting is basic — profitability per job is not really there",
      "Smaller ecosystem and fewer integrations than Jobber or HCP",
      "Mobile experience is weaker than the top-tier platforms",
    ],
    features: [
      "Painting proposal templates",
      "Digital signatures",
      "Deposit collection",
      "Photo attachments",
      "Follow-up automation",
      "CRM",
      "Invoicing",
      "Email templates",
    ],
  },
  {
    name: "FieldPulse",
    rating: 4,
    bestFor: "Growing painting companies with 6-15 painters running both residential and light commercial",
    priceRange: "$79–$199",
    pros: [
      "Crew time tracking ties painter hours directly to specific rooms and tasks — you can actually see that the kitchen cabinets took 14 hours instead of the 10 you bid",
      "Stronger job costing than Jobber or HCP at a similar price — budget vs actual per job surfaces the exterior jobs that lost money before you bid the next one wrong the same way",
      "Built-in estimating is more painter-friendly than Jobber — line items by room, prep type, and coat count are native",
      "Customer portal handles proposals, invoices, and payment in one place",
      "Commercial-friendly features (purchase orders, progress billing) help when you start landing $40K+ repaint contracts",
    ],
    cons: [
      "Mobile app is capable but not as polished as Jobber — some painters take a week longer to fully adopt it",
      "Proposals look professional but do not match PaintScout for visual punch on high-end residential bids",
      "No native consumer financing — you paste in a Wisetack link or QR code manually",
      "Smaller support community than Jobber or HCP — fewer tutorials when your office manager gets stuck",
      "Some features feel newer and less battle-tested than the category leaders",
    ],
    features: [
      "Crew time tracking by room",
      "Job costing",
      "Estimating",
      "Purchase orders",
      "Progress billing",
      "Customer portal",
      "Scheduling",
      "QuickBooks sync",
    ],
  },
  {
    name: "Markate",
    rating: 4,
    bestFor: "Solo and two-person painting shops under $150K who need the basics cheaply",
    priceRange: "$39–$99",
    pros: [
      "Lowest real entry price in the category — you get scheduling, quoting, and invoicing without committing $149/mo",
      "Simple interface that a non-technical painter can run without formal training",
      "Deposit collection and online payments work out of the box",
      "No long-term contracts — cancel month-to-month if it is not working",
      "Decent photo documentation per job for before/after records",
    ],
    cons: [
      "No painting-specific estimating — no production rates, no surface-type calculators",
      "Proposals look basic — fine for $1,500 small jobs, underwhelming for anything over $5K",
      "Scales poorly past 2-3 users — once you have a real crew, you will outgrow it",
      "Smaller user community and fewer integrations than Jobber",
      "Limited reporting — you will not get margin analysis here",
    ],
    features: [
      "Low-cost plans",
      "Basic estimating",
      "Scheduling",
      "Invoicing",
      "Online payments",
      "Photo documentation",
      "Customer notifications",
      "Deposit collection",
    ],
  },
];

export default function BestPaintingSoftware() {
  return (
    <ComparisonLayout
      title="Best Painting Software (2026)"
      description="We compared the top software platforms for painting contractors — not generic field service reviews, not pay-to-play rankings. Real pricing, proposal quality, production rate support, and cabinet refinishing workflows, matched to where your painting business actually is right now."
      trade="Painting"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Painting Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Painting is a looks-driven trade. Homeowners collect 3-4 bids and the one that looks most
            professional on paper often wins — even when it is not the cheapest. That means your software
            stack decision is really a proposal decision first, and a scheduling decision second. A solo
            painter doing $80K in bedroom repaints has completely different needs than a 10-painter shop
            bidding $15K kitchen cabinet refinishes. Here is how to think about it based on where you
            actually are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Painter</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$100K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You are the estimator, painter, and office all in one. You cannot afford to overspend on
                software, but a sloppy estimate costs you the $4,500 job you needed this week. Focus on
                fast, clean proposals you can send from the driveway after an in-home walkthrough, and
                basic invoicing that takes a deposit before you buy the paint.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Markate ($39-69/mo) or Jobber Core ($29/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Crew</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$100K-$400K revenue, 2-5 painters</p>
              <p className="text-sm text-gray-700 mb-2">
                You are closing bigger jobs now — $8K-15K interior repaints, exterior jobs, occasional
                cabinet refinishes. Proposal quality is your biggest growth lever. You are also losing
                customers who cannot pay cash on $10K+ jobs, which means consumer financing matters.
                Crew time tracking by task starts paying off once you have 2+ painters on one property.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Housecall Pro ($69-99/mo) + PaintScout ($99/mo), or Jobber + Estimate Rocket
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Operation</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$400K-$1.5M revenue, 6-15 painters</p>
              <p className="text-sm text-gray-700 mb-2">
                You have multiple crews running simultaneously on different jobs. You cannot afford to
                keep bidding exterior jobs by feel and finding out at the end that you lost money on half
                of them. Real job costing, production rates by surface type, and proposal quality that
                can go head-to-head with the top painter in your market become non-negotiable.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: PaintScout ($149-249/mo) + Jobber Connect ($149/mo), or FieldPulse ($99-199/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Established Company</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$1.5M+ revenue, 15+ painters</p>
              <p className="text-sm text-gray-700 mb-2">
                You run a residential division, a commercial division, and maybe a cabinet refinishing
                shop. You need purchase order workflows for your $60K Sherwin-Williams account, progress
                billing for commercial GCs, and real-time job costing across 5+ active jobs. Jobber will
                start fighting you here — you need something heavier.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: FieldPulse (upper tiers) or PaintScout + ServiceTitan
              </p>
            </div>
          </div>

          {/* A Week in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Week in the Life: PaintScout vs. Jobber vs. Housecall Pro
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run your week on this software.
            Here is the same week at a 5-painter interior/exterior shop doing about $600K a year, running
            three different platforms.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Tuesday 9:00 AM — In-Home Estimate for an $8,500 Interior Repaint</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">PaintScout</p>
                  <p className="text-sm text-gray-700">
                    Estimator walks the home, taps each room into PaintScout on an iPad, selects surface
                    types (smooth walls, trim, doors, ceilings), adds prep scope and photos of problem
                    areas, and applies the production rates from the rate library. A branded proposal
                    with line-item detail and photos is emailed before they leave the driveway. This is
                    the whole reason to use it.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Estimator measures rooms in a notebook, gets back to the truck, and builds a
                    line-item quote in Jobber — rooms, square footage, labor hours, paint. Sends through
                    the client hub. Looks clean but generic. No production rates, no spec sheets, no
                    photo-rich layout. Closes fine on price-sensitive jobs, loses on side-by-side compares.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Estimator builds the quote in HCP and — critically — attaches a Wisetack financing
                    link. The $8,500 job becomes &ldquo;$127/month&rdquo; in the proposal. For customers
                    who were stuck on price, financing unlocks a &ldquo;yes&rdquo; on the spot. The
                    proposal itself is basic, but the payment flexibility often wins the sale anyway.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Thursday 1:00 PM — Crew On-Site Refinishing Kitchen Cabinets</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">PaintScout</p>
                  <p className="text-sm text-gray-700">
                    PaintScout is not where the crew lives day-to-day — they are back on Jobber or HCP
                    for the actual work order. PaintScout&rsquo;s job here is making sure the scope they
                    are working to matches what was sold. The spec sheet (SW 7048 Urbane Bronze, 2
                    coats, sanding between) is documented and unambiguous.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Crew leader opens the Jobber app, clocks in, and attaches before-photos of the doors
                    and boxes. Adds notes on the condition of the existing finish. The client hub shows
                    the customer progress in real time. Fast and clean, but there is no cabinet-specific
                    workflow — it is just a generic job with a generic line item.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Same flow as Jobber — clock in, before photos, progress updates to the customer.
                    HCP&rsquo;s strength is the homeowner-facing notifications. The customer gets an
                    automated &ldquo;crew is on the way&rdquo; text and a review request the day after
                    final coat. The review loop is what compounds over a year.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Monday 10:00 AM — Following Up on 6 Unsigned Estimates</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">PaintScout</p>
                  <p className="text-sm text-gray-700">
                    PaintScout shows which proposals have been opened and which rooms the customer is
                    actually looking at. Estimator calls the customer who opened the kitchen section
                    three times — they are clearly the one ready to buy — and closes the $11K job on the
                    call. This kind of proposal analytics is unique to PaintScout in the painting space.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Jobber&rsquo;s quote follow-up automation fired 3 days and 7 days after each estimate
                    went out. Two customers who were sitting on the fence replied and converted. This is
                    the automation painters underrate — a recovered $6,500 job from one automated email
                    pays for Jobber for four years.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 mb-1 uppercase tracking-wide">Housecall Pro</p>
                  <p className="text-sm text-gray-700">
                    Similar follow-up flow to Jobber — automated email reminders go out and the
                    estimator gets a notification when a customer views the proposal. HCP also pushes
                    the Wisetack financing reminder, which sometimes nudges a stuck customer into
                    converting once they see the monthly payment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              PaintScout wins every time proposal quality is the deciding factor — high-ticket residential
              repaints, cabinet refinishes, anything over $8K where the customer is comparing bids
              visually. Jobber wins for day-to-day operations at the $100K-$1M range, especially for
              painters with recurring commercial maintenance accounts. Housecall Pro wins when consumer
              financing is your biggest lever — if your average ticket is $8K-20K and you lose deals on
              price, the Wisetack integration alone is worth it. Most serious painting shops end up
              running PaintScout for estimating and either Jobber or HCP for operations. A 5-painter
              shop on this combo pays about $3,000-4,500/year total.
            </p>
          </div>

          {/* Painting-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Painting-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that matter
            specifically for painting contractors — and which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Proposal Quality and Visual Presentation</h3>
              <p className="text-sm text-gray-700 mb-2">
                Painting is a looks-driven trade. Your proposal is literally the first physical thing
                the customer sees from your company — before the paint goes on the wall. On any job over
                $5K, a branded, photo-rich, room-by-room proposal closes at measurably higher rates than
                a generic line-item PDF. This is the single biggest lever in painting software.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PaintScout: Category leader</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Estimate Rocket: Good templates</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Clean but generic</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Professional</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Basic</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Production Rates by Surface Type</h3>
              <p className="text-sm text-gray-700 mb-2">
                Smooth drywall paints at roughly 200 sq ft per hour per coat. Textured walls slow you
                down to 150. Trim is measured in linear feet and runs about 50-80 ft per hour. Cabinets
                are a different universe entirely — 14-20 hours per kitchen. Software with real production
                rates turns estimating from gut feel into math. Gut feel gets you a 5% margin; math gets
                you a 25% margin.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PaintScout: Purpose-built</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Estimate Rocket: Partial</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Via line items</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Consumer Financing for $5K-$20K Interior Repaints</h3>
              <p className="text-sm text-gray-700 mb-2">
                A full-interior repaint runs $8K-15K in most markets. Many homeowners want it but cannot
                write a $10,000 check today. Wisetack, GreenSky, and similar financing turn that into
                &ldquo;$150/month&rdquo; and unlock sales that would otherwise stall. If you are not
                offering financing, you are leaving 15-25% of your possible close rate on the table.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Wisetack built in</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: External link</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: External link</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">PaintScout: External link</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Markate: Not native</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Color and Spec Sheet Attachments Per Room</h3>
              <p className="text-sm text-gray-700 mb-2">
                A typical interior repaint has 4-8 different paint selections — wall color, ceiling,
                trim, doors, accent wall, maybe the inside of a closet. Software that lets you attach
                the exact SW/BM/Farrow &amp; Ball code per room per surface eliminates the &ldquo;wait,
                which color was in the guest room?&rdquo; confusion and protects you on warranty callbacks
                a year later when the homeowner wants to touch up a scuff.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PaintScout: Native per-room spec</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Estimate Rocket: Via notes</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Custom fields</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Notes and photos</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Notes only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Photo Documentation Per Room (Before, After, Damage)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Before photos of cracked plaster, water damage, peeling trim, or old wallpaper protect
                you from &ldquo;you did that&rdquo; disputes. After photos become marketing material for
                your website and Google listing. The ability to organize photos by room (not just dumped
                into a job folder) is the difference between a useful archive and a mess.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PaintScout: Per-room photos</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Jobber: Photos per job</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Photos per job</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Photos per task</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Estimate Rocket: Per estimate</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Crew Time Tracking by Room or Task</h3>
              <p className="text-sm text-gray-700 mb-2">
                &ldquo;The kitchen cabinet refinish took 14 hours instead of the 10 we bid&rdquo; is
                information you can only act on if your software captured it. Crew time tied to specific
                rooms or tasks (prep, primer, first coat, second coat, trim, cabinets) turns every job
                into a learning cycle for your next bid. Most painters never figure out their true
                production rates because their software does not capture this.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Strong, by room/task</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Per job, not per room</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Per job</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">PaintScout: Not its role</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Markate: Basic</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Cabinet Refinishing as a Separate Workflow</h3>
              <p className="text-sm text-gray-700 mb-2">
                Cabinet refinishing is basically its own trade. Doors come off, go to a shop, get
                sprayed, come back. Boxes are masked and sprayed on-site. It does not fit the same
                workflow as a standard repaint, and most general FSM tools shoehorn it into a generic
                job. If cabinets are 20%+ of your revenue, you need templates, production rates, and
                photo workflows that understand the process.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">PaintScout: Native cabinet workflow</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Estimate Rocket: Via templates</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">FieldPulse: Custom job type</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Generic job only</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Generic job only</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Repaint vs. New Construction Workflows</h3>
              <p className="text-sm text-gray-700 mb-2">
                Residential repaint is a fast sales cycle — estimate, close, schedule, paint, invoice in
                3-4 weeks. New construction is a slow cycle with a general contractor, progress billing,
                retainage, and 60-day payment terms. If you do both, your software has to handle the
                commercial side cleanly without forcing you to run a parallel spreadsheet.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">FieldPulse: Progress billing native</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">PaintScout: Estimating side only</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Workable with manual steps</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Residential-focused</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Markate: Residential only</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 5-painter shop (5 total users,
            roughly $400K in annual revenue) actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Markate (5 users, basic plan)</p>
              <p className="text-sm text-gray-700">
                ~$59-79/mo = <strong>~$708-948/year</strong>. No onboarding fee. Self-service setup in a
                day. Good for very small shops where the proposal presentation does not have to compete
                with high-end painters. Payment processing at standard rates (2.9% + $0.30 per transaction).
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (5 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee. Self-service setup in 1-2 days.
                Solid for residential repaint shops that need operations more than proposal polish.
                Payment processing at 2.9% + $0.30 per transaction.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Connect (5 users, with GPS)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Adds GPS tracking, quote follow-ups, and
                automated reminders. For most growing painting crews, this is the Jobber tier that
                actually makes sense.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 5 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. No onboarding fee. Wisetack consumer financing
                included — this is the reason to use HCP for painting. One financed $12K job that would
                otherwise have been lost to price pays for the software for 6+ years.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Estimate Rocket (solo estimator)</p>
              <p className="text-sm text-gray-700">
                ~$79-149/mo = <strong>~$948-1,788/year</strong>. Often used alongside Jobber or HCP as a
                proposal tool. No major onboarding fees. Best for the $150K-$300K shop that needs
                better proposals but is not ready for PaintScout pricing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">PaintScout (5 users, full features)</p>
              <p className="text-sm text-gray-700">
                ~$149-249/mo = <strong>~$1,788-2,988/year</strong>. Paired with Jobber Connect ($1,788)
                or HCP Essentials ($1,788), total stack runs <strong>$3,500-4,800/year</strong>. This is
                the most common serious-painter setup — PaintScout for the sale, a general FSM tool for
                operations.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">FieldPulse (5 users)</p>
              <p className="text-sm text-gray-700">
                ~$99-199/mo = <strong>~$1,188-2,388/year</strong>. No major onboarding fees. Best for
                growing painters who want stronger job costing and commercial progress billing built in,
                without layering two separate tools.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When PaintScout&rsquo;s Price Makes Sense</p>
            <p className="text-sm text-gray-700">
              PaintScout typically raises a painting company&rsquo;s close rate by 15-25% on bids over
              $6K. On a $400K shop that is closing $100K in bids a month, a 20% lift is $20K per month
              in additional booked revenue — some of which would have gone to a competitor on proposal
              quality alone. At that scale, the $2,500/year PaintScout subscription is one of the
              highest-ROI software spends in the trade. But if you are a $100K solo painter doing
              bedroom repaints, PaintScout is overkill you cannot monetize yet.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Proposal presentation quality:</strong> Pull up 3 of your competitors&rsquo;
              proposals in your market. If they look more polished than yours, you are losing jobs on
              presentation alone. Trial PaintScout or Estimate Rocket before your next $10K bid and see
              the difference.
            </li>
            <li>
              <strong>Consumer financing:</strong> If your average ticket is $5K+, financing is a
              revenue multiplier. Housecall Pro has Wisetack built in. On other platforms you use
              Wisetack, GreenSky, or Hearth as a standalone tool and share a link at the kitchen table.
              Either path works — just do not skip it.
            </li>
            <li>
              <strong>Cabinet refinishing workflow:</strong> If cabinets are a significant part of your
              revenue, ask the software vendor specifically whether they have a cabinet template, spray
              booth workflow, and per-door pricing. Most do not handle this cleanly out of the box.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Painting shops have real material costs,
              subcontractor payments, and often a Sherwin-Williams account with monthly statements.
              Seamless two-way QuickBooks sync is non-negotiable — broken syncs create bookkeeping
              nightmares.
            </li>
            <li>
              <strong>Mobile app reliability:</strong> Your crew leaders work on ladders and in empty
              homes with weak signal. Test the app in airplane mode — if it does not cache the day&rsquo;s
              work offline, it will strand your crews.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating clients, estimates, and
              retraining painters — 2-4 weeks of reduced productivity. Pick a platform you can grow into
              for 2-3 years. If you are at $200K and growing fast, start on Jobber Connect or HCP
              Essentials now instead of the cheapest tier so you do not have to replatform at $500K.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a solo painter doing $80K. What should I use?
              </h3>
              <p>
                Start with Markate ($39-69/mo) or Jobber Core ($29/mo). Both give you scheduling,
                invoicing, and basic proposals at a price that makes sense when you are the only
                painter. Do not spend on PaintScout yet — at this stage, speed and basic professionalism
                matter more than premium proposal polish. Once you are closing enough $5K+ jobs that
                proposal quality becomes a clear lever, add Estimate Rocket or PaintScout.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I really need PaintScout, or is Jobber enough?
              </h3>
              <p>
                It depends on your average ticket. If most of your jobs are under $3K, a Jobber proposal
                is fine — the customer is not shopping 4 bids and comparing visual presentation. If
                you are bidding $8K-20K interior repaints or cabinet refinishes, PaintScout pays for
                itself fast. On jobs at that level, the customer often has 3 proposals on the counter
                and picks the one that looks most professional. PaintScout is noticeably better there.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How much does consumer financing actually increase close rates?
              </h3>
              <p>
                On residential repaints over $5K, offering financing typically raises close rates by
                15-25%. The reason is simple: a customer who would have said &ldquo;I need to think
                about it&rdquo; on a $12,000 price tag says &ldquo;let&rsquo;s do it&rdquo; on
                &ldquo;$180/month for 60 months.&rdquo; Housecall Pro has Wisetack built in, which is
                the cleanest experience. Other platforms work fine — you just share a Wisetack or Hearth
                link at the kitchen table and it handles the rest.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I use two tools — PaintScout for quotes and Jobber or HCP for operations?
              </h3>
              <p>
                Yes, and this is the most common serious-painter setup. PaintScout integrates with both
                Jobber and Housecall Pro, so you build the estimate in PaintScout, and when it closes,
                the job flows into your operations tool for scheduling, invoicing, and crew management.
                Total cost runs $3,500-4,800/year for a 5-painter shop. Painters who make this stack
                their standard typically report higher close rates and cleaner job costing than when
                they tried to do everything in one tool.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What about cabinet refinishing — does any software handle it natively?
              </h3>
              <p>
                PaintScout has the strongest native cabinet workflow — per-door pricing, spray booth
                scheduling, and templates that handle the doors-off/doors-on two-phase process. Estimate
                Rocket and FieldPulse handle it reasonably with custom templates. Jobber and Housecall
                Pro treat it as a generic job and you do the mental math yourself. If cabinets are
                20%+ of your revenue, prioritize native cabinet support when you pick software.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need different software for residential repaint vs. new construction?
              </h3>
              <p>
                Not necessarily, but you need software that handles progress billing and longer payment
                cycles if you do much new construction. FieldPulse handles both cleanly. Jobber is
                workable for new construction with manual steps. Housecall Pro is residential-focused
                and struggles with commercial GC workflows. If new construction is more than a third of
                your revenue, avoid HCP and look at FieldPulse or a combined PaintScout + ServiceTitan
                setup at the higher end.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When should I switch from Jobber to a more specialized stack?
              </h3>
              <p>
                When you are consistently bidding jobs over $8K, losing some of them to competitors on
                proposal presentation, and cannot tell which of your completed jobs actually made their
                target margin. That is usually around $300K-$500K in annual revenue with 3-5 painters.
                Before that, Jobber is the cheaper and simpler fit. After that, adding PaintScout for
                estimating (and possibly moving to FieldPulse for stronger job costing) starts paying
                for itself quickly.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
