import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Cleaning Business Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best software for residential maid services and commercial janitorial companies. Real pricing, booking features, and inspection workflows for Launch27, ZenMaid, Jobber, Housecall Pro, Swept, and GorillaDesk.",
};

const products: SoftwareProduct[] = [
  {
    name: "Launch27",
    rating: 5,
    bestFor: "Residential maid services built on online booking — $150K-$1M revenue",
    priceRange: "$59–$179",
    pros: [
      "Instant-quote online booking form is the best in residential cleaning — customers pick bedrooms, baths, add-ons, and see a final price in under 60 seconds",
      "Recurring auto-charge on weekly, biweekly, and monthly schedules runs the card without you touching it — cash flow smooths out almost immediately",
      "Skill tags on cleaners (deep clean, move-out, post-construction, eco-friendly) auto-match the right team to the right job type",
      "Built-in tip handling lets customers add gratuity at booking or after service — tips route directly to the cleaner on the job",
      "Post-clean review request goes out automatically — drives Google reviews that fuel the local SEO your online booking depends on",
    ],
    cons: [
      "Residential-only — there is no supervisor inspection module or multi-building dashboard for commercial janitorial work",
      "The booking form takes real effort to configure — pricing rules, add-ons, zip code rules, and taxes can eat a full weekend",
      "Reporting is adequate but not deep — you see bookings, revenue, and cleaner hours but profitability per cleaner requires exports",
      "Payment processing rates are higher than running your own Stripe — the convenience of integrated payments costs a bit more per transaction",
      "Support is email-first — no 24/7 phone line, which hurts on a Saturday when your booking form breaks",
    ],
    features: [
      "Instant-quote online booking",
      "Recurring auto-charge",
      "Cleaner skill tags",
      "Tip handling",
      "Automated review requests",
      "Customer portal",
      "Scheduling and dispatch",
      "Payment processing",
    ],
  },
  {
    name: "ZenMaid",
    rating: 5,
    bestFor: "Maid services that want the workflow built for them — $100K-$800K residential",
    priceRange: "$58–$198",
    pros: [
      "Built from scratch for residential maid services — every screen assumes you are running recurring cleans with multiple teams, not generic field service",
      "Smart scheduling auto-assigns cleaners by location, skill, and availability — dispatch a 10-home day in 15 minutes instead of an hour",
      "Built-in payroll calculator tracks hours and pay rates per cleaner, including hourly, per-job, and percentage-of-revenue models common in the industry",
      "Two-way text messaging keeps cleaners and customers connected through the platform — no personal phone numbers shared, no lost context",
      "Customer portal handles reschedule, skip, and cancel requests without a phone call — huge time saver once you have 60+ recurring clients",
    ],
    cons: [
      "Residential only — not designed for commercial janitorial inspection workflows or multi-building supervisor routes",
      "Online booking exists but is less polished than Launch27 — fine for established clients, weaker as a top-of-funnel sales tool",
      "Fewer integrations than general-purpose platforms like Jobber or Housecall Pro",
      "Mobile app for cleaners is functional but not as snappy as Jobber&rsquo;s — crews may complain early on",
      "Pricing jumps meaningfully as you add users and cleaners — a 6-cleaner shop on a full plan lands near $200/mo",
    ],
    features: [
      "Maid-specific scheduling",
      "Smart cleaner assignment",
      "Built-in payroll tracking",
      "Two-way text messaging",
      "Customer portal",
      "Recurring jobs",
      "Reporting",
      "Reviews and feedback",
    ],
  },
  {
    name: "Jobber",
    rating: 5,
    bestFor: "Small cleaning shops blending residential and light commercial — $100K-$600K",
    priceRange: "$29–$149",
    pros: [
      "Cleanest mobile app in the category — your cleaners can check their schedule, clock in, add notes, and mark a clean complete without training",
      "Recurring job templates handle weekly/biweekly/monthly cleans reliably, including skip weeks for holidays and vacations without breaking the series",
      "Client hub lets customers approve quotes, pay invoices, and request reschedules without phone tag — scales well as you pass 50+ clients",
      "Quote follow-up automation recovers move-out and deep-clean one-offs that customers forgot to respond to — easy 10-15% revenue lift on one-off work",
      "Fits both sides — residential maid routes and small commercial office cleans can live in the same dashboard without workflow fights",
    ],
    cons: [
      "Not cleaning-specific — no per-room checklists, no cleaner skill tags, no supervisor inspection scoring out of the box",
      "Online booking is available but requires the higher-tier Connect plan and is less flexible than Launch27&rsquo;s instant-quote form",
      "No commercial janitorial inspection workflow — if you run office buildings with monthly walkthroughs, you will need a second tool",
      "Tip handling is workable but not purpose-built the way ZenMaid and Launch27 handle it",
      "Advanced reporting (profitability per cleaner, client retention curves) is thin without exporting to a spreadsheet",
    ],
    features: [
      "Recurring scheduling",
      "Clean mobile app",
      "Client hub",
      "Quoting with follow-ups",
      "Batch invoicing",
      "Online booking (Connect)",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "Housecall Pro",
    rating: 4,
    bestFor: "Cleaning companies focused on marketing, reviews, and online customer acquisition",
    priceRange: "$69–$149",
    pros: [
      "Automated review request after every clean builds Google reviews in the background — critical for ranking in local cleaning search results",
      "Online booking widget drops onto your website and lets new customers self-schedule one-time cleans (move-outs, deep cleans, post-construction) without a phone call",
      "Built-in email and postcard marketing to past clients keeps you in front of lapsed customers — reactivation is cheaper than new acquisition",
      "Simple setup — most cleaning companies are running jobs within a day of signing up",
      "Wisetack consumer financing helps on larger one-offs like whole-house deep cleans or post-construction jobs over $1,500",
    ],
    cons: [
      "No cleaning-specific checklists, skill tags, or supervisor inspection tools — this is a generic FSM tool, not a maid service platform",
      "Recurring scheduling is adequate but less flexible than Jobber or ZenMaid when handling complex rotations and skip weeks",
      "Marketing automation lives on the higher-tier plan — the $69 entry plan is thin",
      "Mobile app is good but has known sync hiccups that make cleaners redo check-ins occasionally",
      "Commercial janitorial workflows (multi-site inspections, supply tracking) do not exist here",
    ],
    features: [
      "Online booking widget",
      "Automated review requests",
      "Email/postcard marketing",
      "Wisetack financing",
      "Recurring jobs",
      "Scheduling",
      "Payment processing",
      "QuickBooks sync",
    ],
  },
  {
    name: "Swept",
    rating: 5,
    bestFor: "Commercial janitorial with multi-building routes and supervisor inspections",
    priceRange: "Custom (demo required)",
    pros: [
      "Inspection tool is purpose-built for janitorial — supervisors walk a building with a tablet, score each area, photograph issues, and email the report to the building manager in 10 minutes",
      "Supply tracking lets cleaners log consumables (paper, soap, trash liners) from the app — the system flags restocks before you run out mid-route",
      "Multi-location dashboard handles dozens of office buildings from one view, including per-site crews, schedules, and inspection history",
      "Problem reporting lets building managers flag issues directly through the app — you see the complaint, the photo, and the location instantly",
      "Bilingual interface (English and Spanish) built in — matches the reality of most commercial janitorial crews and reduces training friction",
    ],
    cons: [
      "Commercial janitorial only — not the right fit for residential maid services, no online booking, no instant pricing",
      "Custom pricing requires a demo call before you can evaluate cost — budget $150-400/mo depending on size",
      "Implementation takes 2-4 weeks with training — not a self-serve tool",
      "No consumer-facing client hub the way residential platforms have — communication is manager-to-supervisor, not customer-to-cleaner",
      "Reporting is strong on inspections but light on financial analytics compared to broader FSM platforms",
    ],
    features: [
      "Supervisor inspections",
      "Photo-based issue reporting",
      "Supply tracking",
      "Multi-location dashboard",
      "Bilingual interface",
      "Time tracking with GPS",
      "Problem reporting",
      "Messaging",
    ],
  },
  {
    name: "GorillaDesk",
    rating: 4,
    bestFor: "Small cleaning shops that want low cost and straightforward scheduling — $80K-$400K",
    priceRange: "$49–$149",
    pros: [
      "Route optimization is included on lower plans — valuable once you have 8+ homes a day across a city",
      "Month-to-month pricing with no long-term contracts — cancel anytime if it is not working for your cleaning operation",
      "Simple recurring job setup for weekly and biweekly cleans without the overhead or learning curve of a deeper platform",
      "Customer portal handles basic reschedule requests and invoice payments without phone calls",
      "Works well for combo businesses running residential cleaning plus pest control or lawn care under one roof",
    ],
    cons: [
      "Not cleaning-specific — no per-room checklists, no skill tags, no tip handling, no inspection module",
      "Online booking is weaker than Launch27 or Housecall Pro — fine as a contact form, not as a sales channel",
      "Reporting is shallow — basic revenue and job counts, no profitability per cleaner or client retention curves",
      "Smaller user community than Jobber or Housecall Pro — fewer YouTube tutorials and Facebook groups to lean on",
      "Interface is functional but dated — not as polished as newer competitors",
    ],
    features: [
      "Route optimization",
      "Recurring scheduling",
      "Customer portal",
      "Invoicing",
      "CRM",
      "Payment processing",
      "Basic reporting",
      "Month-to-month pricing",
    ],
  },
];

export default function BestCleaningSoftware() {
  return (
    <ComparisonLayout
      title="Best Cleaning Business Software (2026)"
      description="We compared the top platforms for residential maid services and commercial janitorial companies — not generic reviews, not pay-to-play rankings. Real pricing, real trade-offs, and a clear split between residential and commercial workflows."
      trade="Cleaning"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Cleaning Software Fits Your Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most review sites lump every cleaning business into one bucket. That is a mistake.
            Residential maid services and commercial janitorial companies are two completely different
            businesses with two completely different software needs. A 6-cleaner maid service running
            80 recurring homes needs online booking, auto-charge, and tip handling. A commercial
            janitorial company servicing 12 office buildings needs supervisor inspections, supply
            tracking, and multi-location dashboards. Picking the wrong side of that line wastes money
            and forces ugly workarounds every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Solo Residential Cleaner</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$100K revenue</p>
              <p className="text-sm text-gray-700 mb-2">
                You clean 10-20 homes a week yourself. You need basic scheduling, invoicing, and a way
                to take online payments without chasing checks. Do not overspend here — every dollar of
                software is one less dollar in your pocket. Online booking is nice but not critical yet
                because most of your work still comes from referrals.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Core ($29/mo) or GorillaDesk ($49/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Maid Service</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$150K-$600K, 2-6 cleaners</p>
              <p className="text-sm text-gray-700 mb-2">
                You have 2-6 cleaners running recurring routes. Online booking is now your #1 lead
                source and auto-charge keeps cash flow smooth. You need cleaner skill tags (deep clean
                vs move-out vs standard), tip handling, and post-clean review automation. This is the
                sweet spot for purpose-built residential platforms like Launch27 and ZenMaid.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Launch27 ($99-179/mo) or ZenMaid ($98-198/mo)
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Small Commercial Janitorial</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$200K-$1M, 4-12 cleaners</p>
              <p className="text-sm text-gray-700 mb-2">
                You service 5-15 office buildings, gyms, or retail spaces. Your work happens at night
                and is judged by walkthroughs and complaint calls. You need supervisor inspections with
                photo documentation, supply tracking, and problem reporting. Residential tools will
                fight you here — they have no concept of building managers, service tickets, or
                inspection scoring.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Swept (custom pricing, ~$150-400/mo)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Mixed Residential + Light Commercial</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">$300K-$800K blend</p>
              <p className="text-sm text-gray-700 mb-2">
                You do residential maid service with some small office or Airbnb turnover work on the
                side. You need one platform that handles recurring residential cleans and occasional
                commercial gigs without separate systems. Jobber or Housecall Pro are the best fit
                here — generic enough to handle both, polished enough that your team will actually use
                them.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Jobber Connect ($149/mo) or Housecall Pro ($149/mo)
              </p>
            </div>
          </div>

          {/* A Week in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Week in the Life: Launch27 vs. Jobber vs. Swept
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to run your week on this
            software. Here is the same Monday-to-Friday at three very different cleaning businesses —
            a 6-cleaner residential maid service on Launch27, a mixed residential and light
            commercial shop on Jobber, and a 15-cleaner commercial janitorial company on Swept.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Monday 8:00 AM — 12 Homes Across 3 Cleaning Teams</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Launch27</p>
                  <p className="text-sm text-gray-700">
                    Teams A, B, and C open the app, see their 4 homes each already sequenced by zip
                    code, and start driving. Recurring jobs were auto-created Sunday night. Customers
                    got text reminders at 7 AM. Cards will auto-charge when the clean is marked
                    complete. Office manager is on a coffee break — the day runs itself.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Office manager opens the route planner, confirms assignments for the three teams,
                    and hits optimize. Jobs push to phones. Cleaners check in on arrival and mark
                    complete on departure. Invoices generate automatically but payments collect
                    through the client hub, not auto-charge — some clients pay the same day, others
                    in a week.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Swept</p>
                  <p className="text-sm text-gray-700">
                    Commercial operation — the day crew is not active. Night crews start at 6 PM.
                    Monday morning is when the supervisor reviews Friday&rsquo;s inspection reports and
                    schedules walkthroughs for Tuesday and Wednesday. Residential homes are not in
                    this world at all.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Wednesday 11:00 AM — Customer Reschedules, Booking Form Lands 2 Deep Cleans</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Launch27</p>
                  <p className="text-sm text-gray-700">
                    Customer skips their Friday recurring through the self-serve portal — no phone
                    call. The booking form simultaneously takes two new one-time deep cleans for
                    Saturday: customers picked add-ons, saw the price, and paid a deposit. The system
                    flags the jobs for a cleaner with the deep-clean skill tag. Zero office
                    intervention.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Reschedule request comes through the client hub — office manager drags it to
                    next week in 20 seconds. The two new deep cleans come in as phone inquiries (no
                    instant-quote booking on the base plan) so the office manager sends quotes
                    through Jobber, customers approve, and jobs get scheduled. Takes 15 minutes.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Swept</p>
                  <p className="text-sm text-gray-700">
                    Not the workflow — commercial janitorial does not have reschedules or one-off
                    deep cleans. Instead, Wednesday is when a building manager flags a missed
                    bathroom restock through the app. The supervisor sees the photo, texts the night
                    crew lead through Swept, and confirms it will be handled tonight.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Friday 6:00 PM — Supervisor Inspections Across 6 Office Buildings</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Launch27</p>
                  <p className="text-sm text-gray-700">
                    Not applicable — Launch27 is residential. Friday 6 PM is when the owner reviews
                    the week: 68 cleans completed, $14,200 in auto-charged revenue, 11 new reviews
                    posted to Google, 3 booking-form leads not yet confirmed. Whole review takes 10
                    minutes.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">Jobber</p>
                  <p className="text-sm text-gray-700">
                    Mixed shop reviews the week: residential jobs complete, light commercial jobs
                    complete, invoices sent. Some commercial clients need a manual walkthrough
                    report built in a Google Doc because Jobber has no inspection tool. Doable but
                    this is where a pure commercial janitorial shop would outgrow Jobber fast.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Swept</p>
                  <p className="text-sm text-gray-700">
                    Supervisor drives to 6 buildings, walks each one with the tablet, scores 12-15
                    areas per building (restrooms, lobbies, breakrooms, etc.), photographs any
                    issues, and emails the inspection report to each building manager before 9 PM.
                    Takes 2.5 hours total. This is exactly why Swept exists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              Launch27 and ZenMaid win for residential maid services because the whole workflow —
              online booking, auto-charge, tip handling, cleaner skill tags — is purpose-built for
              that business. Jobber wins for mixed residential and light commercial shops that need
              a general tool their team can learn in a day. Swept wins for commercial janitorial
              because inspections and supply tracking are the core of that work and no residential
              platform has them. Pick the side of the line your business is actually on — trying to
              span both with one tool usually means compromising on features that matter.
            </p>
          </div>

          {/* Cleaning-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Cleaning-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most FSM platforms are built for general field service. Here are the features that
            matter specifically for cleaning businesses — split by residential and commercial — and
            which platforms actually have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Online Booking with Instant Pricing</h3>
              <p className="text-sm text-gray-700 mb-2">
                Residential cleaning is the most heavily booking-driven home service. A customer who
                can see the price and reserve a time in under 60 seconds converts 3-5x higher than
                one who has to call and wait for a quote. If your website does not have instant-quote
                booking, you are bleeding leads to competitors who do.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Launch27: Best in category</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ZenMaid: Solid</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Good widget</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Connect plan only</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Swept: Not applicable</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Recurring Auto-Charge</h3>
              <p className="text-sm text-gray-700 mb-2">
                80% of residential cleaning revenue is recurring. If you have to manually invoice and
                chase payments every week, you lose 5-10 hours of admin and sit on 15-30 days of
                receivables at any given time. Auto-charging the card the moment a clean is marked
                complete smooths cash flow to zero days outstanding and is the biggest single quality
                of life upgrade for any maid service owner.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Launch27: Core feature</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ZenMaid: Core feature</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Via saved cards</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Via saved cards</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">GorillaDesk: Limited</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Cleaner Skill Tags and Team Assignment</h3>
              <p className="text-sm text-gray-700 mb-2">
                A deep clean, a move-out, and a post-construction clean are not the same job — and
                not every cleaner on your team can do them well. Skill tags let the system auto-match
                the right cleaner to the right job type, avoiding the disaster of sending a solo
                recurring cleaner to an 8-hour post-construction job they have never done.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Launch27: Built-in</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ZenMaid: Smart assignment</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Via tags and notes</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">GorillaDesk: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Customer Portal with Reschedule and Skip Handling</h3>
              <p className="text-sm text-gray-700 mb-2">
                Once you hit 60+ recurring clients, phone calls about rescheduling and skip weeks
                become a full-time headache. A self-serve portal where customers can handle their own
                changes saves 5-10 hours a week and actually reduces churn because customers feel in
                control. Residential-specific platforms get this right; generic FSM tools are
                workable but less elegant.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Launch27: Excellent</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ZenMaid: Excellent</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Good client hub</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Good</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Basic</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Tip Handling for Residential Cleaners</h3>
              <p className="text-sm text-gray-700 mb-2">
                Tips are 5-15% of a residential cleaner&rsquo;s take-home pay — they matter. A platform
                that lets customers add a tip at booking or after service, then routes it directly to
                the cleaner on the job, is far better than cash tips disappearing into a void or the
                office manually distributing them on payday.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Launch27: Purpose-built</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ZenMaid: Purpose-built</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Housecall Pro: Via invoice add-on</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Via invoice add-on</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">GorillaDesk: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Supervisor Inspections (Commercial)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Commercial janitorial contracts are judged by walkthroughs. A supervisor who can walk
                a building with a tablet, score each area, photograph problems, and email the report
                to the building manager in 10 minutes is worth 10x one with a clipboard. This
                feature alone protects you from contract loss on complaint calls.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Swept: Purpose-built</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Launch27: Not applicable</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">ZenMaid: Not applicable</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Supply Tracking and Restock Alerts (Commercial)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Commercial janitorial burns through consumables — paper towels, toilet paper, trash
                liners, hand soap. Logging usage per building lets you forecast restocks, avoid
                emergency runs to the supply store, and catch inflated usage that signals theft. The
                best platforms let cleaners flag low supplies directly from the app.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Swept: Built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Jobber: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Housecall Pro: Not built-in</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Launch27: Not applicable</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">ZenMaid: Not applicable</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Customer Review and Feedback Collection</h3>
              <p className="text-sm text-gray-700 mb-2">
                Google reviews fuel the local SEO that fuels the online booking that fuels residential
                cleaning growth. An automated review request after every clean — routed to Google or
                Facebook based on customer rating — builds your reputation in the background. This is
                a compounding advantage; every month you skip it is a month behind the competition.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Launch27: Automated</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Housecall Pro: Best-in-class</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">ZenMaid: Built-in</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Jobber: Via integrations</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">GorillaDesk: Basic</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 6-cleaner residential maid
            service (around $400K revenue, 80 recurring clients, 3 office staff with accounts)
            actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Core (6-9 users)</p>
              <p className="text-sm text-gray-700">
                $99/mo = <strong>$1,188/year</strong>. No onboarding fee, self-service setup in 1-2
                days. Good for small cleaning shops but lacks cleaning-specific features like skill
                tags, tip handling, and instant-quote booking. Payment processing at 2.9% + $0.30
                per transaction.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Jobber Connect (6 users, online booking)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Adds online booking, client hub, and
                automations. Closer to what a maid service needs but still not purpose-built for
                cleaning the way Launch27 and ZenMaid are.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">GorillaDesk (6 users)</p>
              <p className="text-sm text-gray-700">
                ~$99-149/mo = <strong>~$1,188-1,788/year</strong>. No onboarding fee. Route
                optimization included. Cheap and workable for small shops but lacks cleaning-specific
                features and serious reporting.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Housecall Pro (Essentials, 6 users)</p>
              <p className="text-sm text-gray-700">
                $149/mo = <strong>$1,788/year</strong>. Best-in-class review automation and marketing
                tools. Online booking widget included. Not cleaning-specific but strong for
                customer-acquisition-focused shops.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Launch27 (6 cleaners, 2-3 office users)</p>
              <p className="text-sm text-gray-700">
                ~$179/mo = <strong>~$2,148/year</strong>. No onboarding fee but plan on 10-20 hours
                configuring the booking form and pricing rules. Payment processing built in. Instant
                quotes, auto-charge, tip handling, and skill tags are included — this is the
                purpose-built residential maid service platform.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">ZenMaid (6 cleaners, 2-3 office users)</p>
              <p className="text-sm text-gray-700">
                ~$198/mo = <strong>~$2,376/year</strong>. No onboarding fee. Smart cleaner assignment,
                payroll tracking, two-way text messaging, and customer portal all purpose-built for
                maid services. Strongest workflow fit if you run a pure residential operation and do
                not need the heavy lift of Launch27&rsquo;s booking form.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">What Commercial Janitorial Pays Instead</p>
            <p className="text-sm text-gray-700">
              Swept uses custom pricing and requires a demo call. For a 15-cleaner commercial
              janitorial company servicing 10-15 buildings, expect roughly <strong>$250-450/mo
              ($3,000-5,400/year)</strong> plus a 2-4 week implementation period with training. That
              is more than a Jobber subscription but cheaper than losing a single $40K/year office
              contract because you had no inspection paper trail when the building manager complained.
              Janitorial Manager is a similar alternative in the same price band.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">Why Launch27 or ZenMaid Is Worth the Premium</p>
            <p className="text-sm text-gray-700">
              A purpose-built residential platform usually lifts booking conversion 20-40% (better
              form, instant pricing) and cuts office admin time by 10-15 hours a week (auto-charge,
              self-serve rescheduling, automated reviews). On a $400K maid service that is roughly
              $40K-80K in additional revenue and $20K-30K in recovered admin cost — against a $1,000
              subscription premium over Jobber. The math is not close.
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Booking form configuration time:</strong> Launch27&rsquo;s form is powerful but
              needs real setup — pricing per bedroom/bathroom, add-ons, zip code rules, and taxes.
              Budget a full weekend, test with 10 friends, adjust, and launch. Rushing this creates
              customer pricing confusion that takes months to unwind.
            </li>
            <li>
              <strong>Mobile app reliability:</strong> Your cleaners work in unfamiliar homes with
              weak cell signals. Test the app in airplane mode — if it does not cache the day&rsquo;s
              jobs offline, cleaners will lose the schedule mid-route on day one of bad service.
            </li>
            <li>
              <strong>Payment processing fees:</strong> Integrated payments on any platform run
              around 2.9% + $0.30 per transaction. On $400K in annual revenue, that is about $12,000
              in processing fees. Some shops use a separate Stripe account to save 20-30 bps — worth
              it at higher volumes, not worth the hassle below $500K.
            </li>
            <li>
              <strong>QuickBooks integration:</strong> Your bookkeeper cares about this. Jobber and
              Housecall Pro have the cleanest two-way sync. Launch27 and ZenMaid export but are less
              seamless. Test in the trial — a broken sync creates bookkeeping nightmares.
            </li>
            <li>
              <strong>Switching costs:</strong> Moving platforms means migrating client data,
              rebuilding recurring schedules, retraining cleaners, and 2-4 weeks of reduced
              productivity. Pick a platform you can grow into for 2-3 years, not just the one that
              feels right today.
            </li>
            <li>
              <strong>Contract terms:</strong> Jobber, Housecall Pro, GorillaDesk, Launch27, and
              ZenMaid all offer month-to-month or annual plans. Swept requires a formal contract
              with implementation. If you are trying cleaning software for the first time, start
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
                I am a solo house cleaner doing $80K a year. What should I use?
              </h3>
              <p>
                Start with Jobber Core at $29/mo or GorillaDesk at $49/mo. You do not need Launch27
                or ZenMaid yet — their purpose-built features pay off once you have multiple cleaners
                and 50+ recurring clients. At solo scale, basic scheduling, invoicing, and payment
                collection are enough. Keep your software cost under $50/mo so the money stays in
                your pocket.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Should I run residential and commercial cleaning on the same software?
              </h3>
              <p>
                Probably not, if you are serious about both. Residential and commercial are two
                different businesses with two different workflows. Residential needs online booking,
                auto-charge, skill tags, and tip handling. Commercial needs supervisor inspections,
                supply tracking, and multi-building dashboards. Jobber or Housecall Pro can stretch
                to cover both if your commercial side is just 2-3 small offices, but if you have 5+
                commercial accounts, get Swept alongside your residential tool. The cost is real but
                losing a commercial contract over a missed inspection is more expensive.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How important is instant-quote online booking for a residential maid service?
              </h3>
              <p>
                Critical. Residential cleaning is the most booking-driven home service category.
                Studies show customers who see instant pricing convert 3-5x higher than ones who
                have to call and wait. If your website does not have an instant-quote form, you are
                losing 60-80% of your online leads to competitors who do. Launch27 has the best
                booking form in the category; ZenMaid and Housecall Pro are solid alternatives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                When should I switch from Jobber to Launch27 or ZenMaid?
              </h3>
              <p>
                When online bookings become your #1 lead source and you have 4+ cleaners running
                recurring routes. At that point, the features Jobber does not have — instant-quote
                booking, auto-charge, cleaner skill tags, tip handling — start mattering more than
                the simplicity of a general-purpose tool. Usually this shows up around $250K-$400K
                in revenue. Before that, Jobber is fine. After that, you are leaving money on the
                table every day you stay on it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What is the difference between Launch27 and ZenMaid?
              </h3>
              <p>
                Both are purpose-built for residential maid services. Launch27 is stronger on the
                booking form and instant-pricing sales experience — the best in the category. ZenMaid
                is stronger on day-to-day operations: smart cleaner assignment, payroll tracking,
                and two-way text messaging. If your #1 problem is not enough leads, start with
                Launch27. If your #1 problem is too many cleaners to coordinate, start with ZenMaid.
                Both handle recurring auto-charge, skill tags, and tips well.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do supervisor inspections work in Swept?
              </h3>
              <p>
                A supervisor opens the Swept app on a tablet or phone, selects a building, and walks
                through each area (lobby, restrooms, breakroom, conference rooms, etc.) scoring each
                one and attaching photos of any issues. When the walkthrough is done, the inspection
                report emails directly to the building manager with scores, photos, and notes. The
                whole process takes 10-15 minutes per building and creates a paper trail that
                protects you from contract disputes. No residential cleaning platform has anything
                close to this workflow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I handle tips through my cleaning software?
              </h3>
              <p>
                Yes on Launch27 and ZenMaid — both have purpose-built tip handling where customers
                add gratuity at booking or after service and the tip routes directly to the cleaner
                on the job. Jobber and Housecall Pro handle tips as invoice add-ons, which works but
                requires manual distribution on payday. GorillaDesk is manual. For any residential
                maid service, built-in tip handling is a meaningful cleaner-retention advantage and
                one of the quiet reasons to move from a general FSM tool to a cleaning-specific one.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch software later without losing data?
              </h3>
              <p>
                Most platforms let you export customer data, job history, and invoices as CSV files.
                But switching is painful: you lose templates, pricing rules, recurring schedules,
                and your team&rsquo;s muscle memory. Expect 2-4 weeks of reduced productivity during
                any transition — right in your busy season (spring for residential, Q4 for
                commercial) is the worst time to try it. The best move is to pick a platform you can
                grow into for 2-3 years. If you are at $200K and growing fast in residential, it may
                make sense to start on Launch27 or ZenMaid now even if it feels expensive, so you do
                not have to replatform at $500K.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
