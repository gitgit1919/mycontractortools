import { Metadata } from "next";
import ComparisonLayout, { SoftwareProduct } from "@/components/ComparisonLayout";

export const metadata: Metadata = {
  title: "Best Solar Contractor Software (2026) — Top 6 Picks Compared",
  description:
    "Compare the best software for solar installation contractors. Real pricing, design tools, proposal workflows, and install-side features for Aurora Solar, OpenSolar, Enerflo, Solo, Energy Toolbase, and JobNimbus.",
};

const products: SoftwareProduct[] = [
  {
    name: "Aurora Solar",
    rating: 5,
    bestFor: "Serious residential solar sales teams — the industry-standard design and proposal tool",
    priceRange: "$150–$400+",
    pros: [
      "LIDAR-backed aerial design with shading analysis that is accurate enough to survive a customer challenge — the irradiance modeling is genuinely best-in-class",
      "Panel layout tool auto-checks setbacks, fire codes, and obstructions so your design does not get kicked back by the AHJ on permit review",
      "Production estimation (kWh/year) is tied to real local irradiance data and matches post-install performance within a few percent — critical for honest sales",
      "Proposal generator presents cash, loan, lease, and PPA side by side with monthly payment scenarios — the customer sees their real options at the kitchen table",
      "Utility rate database is deep and auto-calculates 25-year savings against the customer&rsquo;s actual current bill, not a generic regional average",
    ],
    cons: [
      "Expensive — the full Aurora AX tier with Sales Mode runs $400+/mo per user once you layer in add-ons, and pricing is opaque until you book a demo",
      "Design-heavy workflow assumes you have someone on the team who enjoys CAD-style work — steep learning curve for door-to-door sales reps",
      "Install-side features (scheduling, project management, material tracking) are weak — you still need a separate tool for the actual build",
      "Commission and pipeline tracking are basic — door-knocker-heavy orgs usually bolt on Enerflo or a separate CRM",
      "Overkill for the 20-job-a-year installer — the price only makes sense if solar sales is your whole business",
    ],
    features: [
      "LIDAR aerial design",
      "Shading analysis",
      "Panel layout + setbacks",
      "Utility rate database",
      "Financing proposals",
      "Production modeling",
      "Sales Mode",
      "Permit packages",
    ],
  },
  {
    name: "OpenSolar",
    rating: 5,
    bestFor: "Budget-conscious installers and solo sales reps who need real design without the Aurora price",
    priceRange: "Free",
    pros: [
      "Actually free — no paywalled tiers, no trial expiration, no feature gating for shading, layout, or proposals (revenue comes from partner hardware and financing)",
      "3D design with shading analysis is legitimately competitive with paid tools for standard residential roofs — sloped, simple, no weird dormers",
      "Built-in financing marketplace connects proposals to Sungage, GoodLeap, Dividend, and Mosaic loan products directly",
      "Proposal output looks professional enough that customers do not ask &ldquo;did you build this in PowerPoint&rdquo; — clean production estimates and 25-year savings math",
      "Zero barrier to entry — a new 1-person installer can be designing systems and generating real proposals the same afternoon they sign up",
    ],
    cons: [
      "Shade analysis on complex roofs (heavy tree cover, cut-up hip roofs, multi-plane layouts) is weaker than Aurora&rsquo;s LIDAR-backed modeling",
      "Utility rate database is shallower than Aurora — some obscure munis and coop utilities are missing or out of date",
      "Support is community-driven and email-based — no dedicated rep, no SLA, response times can stretch into days during busy season",
      "No install-side project management — this is strictly a sales and design tool, not a CRM or operations platform",
      "Because it is free, product direction is driven by hardware/financing partners, not paying customers — you get what you get",
    ],
    features: [
      "3D design",
      "Shading analysis",
      "Panel layout",
      "Financing marketplace",
      "Proposal generation",
      "Production modeling",
      "Utility rates",
      "No cost",
    ],
  },
  {
    name: "Enerflo",
    rating: 5,
    bestFor: "Sales-heavy solar orgs that need a sales-to-install pipeline without gluing 5 tools together",
    priceRange: "Custom ($200-500+/user)",
    pros: [
      "End-to-end pipeline from door-knock to PTO — lead capture, design handoff, contract, credit app, site survey, permit, install, inspection, and monitoring in one system",
      "Deep integrations with Aurora, OpenSolar, and Solo — you keep your preferred design tool and Enerflo owns the workflow around it",
      "Commission and rep hierarchy tracking is purpose-built for door-to-door solar sales orgs with overrides, setter splits, and multi-tier management",
      "Credit application flow connects directly to GoodLeap, Sungage, Sunlight, and Mosaic — no bouncing between tabs when a customer says yes",
      "Permit and interconnection paperwork tracking with AHJ-specific templates saves days of admin work per project",
    ],
    cons: [
      "Expensive once you add seats for setters, closers, ops, install, and finance — a 20-person org easily passes $5K/mo",
      "Not a design tool — you still pay for Aurora, OpenSolar, or Solo on top of Enerflo",
      "Configuration is heavy — expect a 4-8 week implementation with a dedicated admin before it actually runs smoothly",
      "Small 2-person installer teams will drown in the feature set — this is built for 10+ person sales orgs",
      "Mobile experience for install crews is not the strength — plan on a separate field app for install day",
    ],
    features: [
      "Sales pipeline",
      "Design tool integrations",
      "Credit applications",
      "Commission tracking",
      "Permit workflow",
      "Site survey",
      "Contracts + e-sign",
      "Install handoff",
    ],
  },
  {
    name: "Solo by Lightreach",
    rating: 4,
    bestFor: "Proposal-first sales teams that want a lighter, faster alternative to Aurora",
    priceRange: "$100–$250",
    pros: [
      "Proposal turnaround is fast — experienced reps can build and present a system in under 15 minutes at the kitchen table",
      "Cleaner customer-facing proposal experience than Aurora — the output reads as a sales pitch, not an engineering report",
      "Financing integrations cover the major loan products (GoodLeap, Sungage, Dividend) with monthly payment scenarios built into the proposal",
      "Pricing is more transparent and affordable than Aurora at the per-seat level — real option for mid-size dealer teams",
      "Good utility rate coverage for major US markets with 25-year savings math built into the customer view",
    ],
    cons: [
      "Design accuracy on complex roofs is a step below Aurora — it is fine for standard pitched residential, weaker on commercial or cut-up roofs",
      "Shading analysis is decent but not LIDAR-grade — if you design in heavy-canopy markets you may see proposal-vs-actual production gaps",
      "Smaller installed base and ecosystem than Aurora — fewer YouTube tutorials, fewer hiring candidates who already know it",
      "Integrations with install-side tools are thinner than Enerflo&rsquo;s — still mostly a sales and proposal platform",
      "Support and roadmap velocity lag behind Aurora — feature gaps take longer to close",
    ],
    features: [
      "Fast proposal builder",
      "3D design",
      "Financing integrations",
      "Utility rate database",
      "Customer-facing proposal",
      "Production estimates",
      "CRM basics",
      "Mobile sales mode",
    ],
  },
  {
    name: "Energy Toolbase",
    rating: 4,
    bestFor: "Commercial solar and storage — financing and economics modeling for projects where the math has to survive CFO review",
    priceRange: "$150–$400+",
    pros: [
      "Best-in-class economic modeling for commercial solar, storage, and solar-plus-storage — NPV, IRR, payback, bill savings, and demand-charge reduction all in one place",
      "Handles complex commercial utility rate structures including time-of-use, demand charges, ratchets, and tariff riders that trip up residential tools",
      "Storage dispatch modeling for ITC + SGIP + standalone storage deals is deeper than anything else on this list — critical for C&I proposals",
      "ITC, MACRS depreciation, state incentives, and SREC revenue flow into the pro forma automatically — your CFO customer sees a credible model, not a marketing sheet",
      "PPA and lease waterfall modeling built in — if you sell third-party-owned systems, this is where you build the deal",
    ],
    cons: [
      "Not a design tool — no panel layout or shading analysis, so you still need Aurora or OpenSolar for the system design itself",
      "Residential sales reps will find it dense and slow — it is built for analysts and project developers, not door-to-door closers",
      "Learning curve is steep — plan on 2-4 weeks of ramp-up before a new user is building solid pro formas",
      "Pricing is custom and scales with user count and modules — commercial-focused orgs can easily hit $10K+/year",
      "Residential-only installers will never use 80% of the feature set — this is overkill for a sub-$2M residential shop",
    ],
    features: [
      "Economic modeling",
      "Commercial rate structures",
      "Storage dispatch",
      "ITC + incentives",
      "PPA/lease waterfall",
      "Pro forma generation",
      "Bill savings analysis",
      "Scenario comparison",
    ],
  },
  {
    name: "JobNimbus",
    rating: 4,
    bestFor: "Small solar installers ($500K-$3M) handling install, service, and warranty work with a lean team",
    priceRange: "$25–$99",
    pros: [
      "Price is approachable — at $25-99/user/month it fits a 6-person installer without taking a bite out of the margin on every job",
      "Install-side project management is solid — site survey, permit status, material delivery, install day, inspection, and PTO all trackable in one board",
      "Mobile app is actually usable for install crews in the field — photos, signatures, punch lists, and time tracking work offline",
      "Integrates with Beacon, ABC Supply, and major distributors for material ordering — same workflow your crews already know from roofing",
      "Customer communication hub (texts, emails, photos) keeps the homeowner in the loop through the 8-12 week install-to-PTO cycle without sales calling them daily",
    ],
    cons: [
      "Not a solar design tool — no shading analysis, no panel layout, no production modeling (you still need Aurora, OpenSolar, or Solo for the proposal)",
      "No built-in utility rate database or financing proposals — the sales side of a solar deal does not live here",
      "Reporting on solar-specific KPIs (kW sold, $/watt, PTO time) requires custom fields and some spreadsheet work",
      "Crew commission tracking for sales reps and setters is not purpose-built for solar orgs with setter/closer splits",
      "No native interconnection paperwork tracking — AHJ and utility submissions are managed as generic tasks, not a structured workflow",
    ],
    features: [
      "Install project management",
      "Mobile crew app",
      "Material ordering",
      "Customer portal",
      "Job costing basics",
      "Scheduling",
      "Document management",
      "QuickBooks sync",
    ],
  },
];

export default function BestSolarSoftware() {
  return (
    <ComparisonLayout
      title="Best Solar Contractor Software (2026)"
      description="We compared the top software platforms for solar installation contractors — design tools, proposal platforms, sales pipelines, and install-side project management. Real pricing, real trade-offs, matched to where your business actually is right now."
      trade="Solar"
      lastUpdated="April 2026"
      products={products}
      introContent={
        <>
          {/* Business-Stage Framework */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Which Software Fits Your Solar Business Right Now?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Solar software is not one market — it is three overlapping markets: design and proposal tools,
            sales pipeline platforms, and install-side project management. Most reviews lump them together
            and recommend a single &ldquo;winner.&rdquo; That is wrong. A 2-person installer doing 20 jobs
            a year has completely different needs than a 40-person dealer team door-knocking 500 systems a
            year. Here is how to think about it:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">New Installer</h3>
              <p className="text-sm text-blue-800 font-semibold mb-2">$0-$500K revenue, 1-3 people</p>
              <p className="text-sm text-gray-700 mb-2">
                You are hustling leads from referrals and the occasional Facebook ad. You need a way to
                design a system, show the customer credible savings math, and present financing options
                at the kitchen table. You also need to manage 6-10 concurrent installs without dropping
                permits or inspections. Cash is tight — every $100/mo matters.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: OpenSolar (free) + JobNimbus ($25-49/mo)
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Growing Installer</h3>
              <p className="text-sm text-green-800 font-semibold mb-2">$500K-$3M revenue, 4-12 people</p>
              <p className="text-sm text-gray-700 mb-2">
                You have 2-3 sales reps, a design resource, and 1-2 install crews. Your proposals need to
                be tight because customers are shopping 3 bids. Install-side project management is
                starting to eat your operations manager alive — permits, interconnection, inspections,
                PTO, and monitoring handoffs all live in spreadsheets and texts.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Aurora Solar or Solo + JobNimbus
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Dealer / Sales Org</h3>
              <p className="text-sm text-amber-800 font-semibold mb-2">$3M-$20M revenue, 15-60 people</p>
              <p className="text-sm text-gray-700 mb-2">
                You run setter/closer teams, maybe multiple offices, and you are selling 300-1,000 systems
                a year. You need a pipeline platform built for door-to-door solar sales with commission
                splits, rep hierarchy, and credit application flow. Design and install may be in-house or
                subbed out, but the sales-to-install handoff has to be clean or deals die.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Enerflo + Aurora Solar (+ JobNimbus on the install side)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-brand-blue mb-1">Commercial Solar</h3>
              <p className="text-sm text-purple-800 font-semibold mb-2">C&amp;I, storage, PPA deals</p>
              <p className="text-sm text-gray-700 mb-2">
                You sell to CFOs and facilities managers, not homeowners. Your proposals have to survive
                CFO-level financial scrutiny — NPV, IRR, payback, demand-charge reduction, ITC, MACRS,
                SRECs, and storage dispatch. Residential proposal tools cannot do this math. Your deals
                take 6-18 months to close and the financial model is the sale.
              </p>
              <p className="text-sm font-semibold text-brand-blue">
                Best fit: Energy Toolbase + Aurora Solar Commercial
              </p>
            </div>
          </div>

          {/* A Day in the Life */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            A Day in the Life: Aurora + JobNimbus vs. OpenSolar Solo vs. Enerflo Stack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feature lists do not tell you what it actually feels like to sell and install solar on this
            software. Here is the same Tuesday-through-install-day sequence at a 6-person residential
            solar installer, running three different stacks.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Tuesday 6:00 PM — Kitchen Table, 9.2 kW System Proposal</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Aurora + JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Rep opens Aurora Sales Mode on a tablet. The roof was pre-designed in the office that
                    afternoon with LIDAR and shading analysis. Rep walks the customer through a 25-year
                    savings projection against their real PG&amp;E bill, then flips to cash vs. GoodLeap
                    loan vs. Sunnova lease side-by-side. Customer signs on the tablet. Deal auto-creates
                    a job in JobNimbus.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">OpenSolar Solo</p>
                  <p className="text-sm text-gray-700">
                    Rep built the design in OpenSolar that afternoon — free, fast, credible shade model
                    for a standard composition roof. Proposal shows production estimate, 25-year savings,
                    and two GoodLeap loan options. Customer signs via OpenSolar&rsquo;s e-sign. Rep then
                    manually creates the install job in a spreadsheet because OpenSolar has no project
                    management. Fine at 20 jobs/year, painful at 60.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Enerflo Stack</p>
                  <p className="text-sm text-gray-700">
                    Rep presents in Enerflo&rsquo;s embedded Aurora view. Financing app for GoodLeap is
                    pre-filled from the lead record and runs a soft credit pull live at the table. Customer
                    is approved before dessert. Contract e-signs, commission is auto-calculated with setter
                    split, and the deal drops into the ops team&rsquo;s site-survey queue. Overkill at 20
                    jobs/year; essential at 300.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Following Monday — Permit Submitted, Install Scheduled 3 Weeks Out</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Aurora + JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Aurora auto-generates the permit package (single-line diagram, site plan, module and
                    inverter cutsheets). Ops manager uploads to the city portal, logs permit status in
                    JobNimbus, orders panels and inverter through the ABC Supply integration, and
                    schedules the 4-person crew for install day in JobNimbus. Clean handoff.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">OpenSolar Solo</p>
                  <p className="text-sm text-gray-700">
                    Ops manager exports the design from OpenSolar and assembles the permit package
                    manually — single-line in a PDF editor, cutsheets downloaded from manufacturer sites.
                    Tracks permit status in a Google Sheet. Orders material by phone. Texts the crew to
                    schedule install day. Works, but every job takes 2-3 extra hours of admin.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Enerflo Stack</p>
                  <p className="text-sm text-gray-700">
                    Enerflo routes the job through site survey, engineering review, and permit with AHJ
                    templates pre-loaded. Material is ordered via integrated distributor account. Install
                    is scheduled through the ops board. Every handoff is tracked and the sales rep can see
                    the install date in their pipeline. Built for scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-blue mb-2">Install Day — 4-Person Crew on Site, City Inspection After</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <p className="text-xs font-bold text-blue-700 mb-1 uppercase tracking-wide">Aurora + JobNimbus</p>
                  <p className="text-sm text-gray-700">
                    Crew leader opens JobNimbus on the phone, pulls up the plan set, photos prior-site
                    conditions, steps through the install punch list, and uploads post-install photos for
                    the city inspector. Customer signs completion on the phone. Job advances to
                    &ldquo;inspection pending&rdquo; in the pipeline automatically.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">OpenSolar Solo</p>
                  <p className="text-sm text-gray-700">
                    Crew leader has the plan set on a printed copy in the truck. Photos go to a shared
                    Google Drive folder. Completion sign-off is an email or text to the office. Status
                    update is a manual spreadsheet entry that evening. Works for 20 installs/year. Falls
                    apart at 60+.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Enerflo Stack</p>
                  <p className="text-sm text-gray-700">
                    Crew uses Enerflo&rsquo;s install app (or an integrated field tool) with structured
                    install steps, photo requirements, and signoff. Inspection is auto-scheduled from a
                    queue. Monitoring handoff (Enphase or SolarEdge) triggers automatically once
                    commissioning photos are uploaded. No manual handoffs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray border border-gray-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700 font-semibold mb-1">The Bottom Line</p>
            <p className="text-sm text-gray-700">
              At 20 installs/year, OpenSolar + a spreadsheet is honestly fine and the free tool is a
              legitimate choice. At 60-150 installs/year, Aurora Solar for the sales proposal plus
              JobNimbus for the install side is the sweet spot — you will spend around $3K-6K/year total
              and your admin time drops sharply. At 300+ installs/year with a door-knocker sales team,
              Enerflo becomes the connective tissue, and you will still pay Aurora on top — budget
              $20K-60K+/year. Commercial solar is its own universe; residential tools cannot do the
              financial modeling CFOs expect, so Energy Toolbase is the answer there.
            </p>
          </div>

          {/* Solar-Specific Feature Deep Dive */}
          <h2 className="text-2xl font-bold text-brand-blue mb-4">
            Solar-Specific Features That Actually Matter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Generic field service tools do not understand solar. Here are the features that matter
            specifically for residential and commercial solar contractors — and which platforms actually
            have them.
          </p>

          <div className="space-y-5 mb-6">
            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Aerial Design + Shading Analysis</h3>
              <p className="text-sm text-gray-700 mb-2">
                This is the first feature customers judge. LIDAR-backed shading on cut-up roofs with tree
                cover either matches real-world production within a few percent, or it does not. If your
                tool over-promises production, you will hear about it at month 6 when the homeowner sees
                their real bill. Under-promising loses deals to competitors. Get this right.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aurora: LIDAR, best-in-class</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">OpenSolar: Strong for standard roofs</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Solo: Good, not LIDAR-grade</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Energy Toolbase: No design</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">JobNimbus: No design</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Utility Rate Database + Savings Math</h3>
              <p className="text-sm text-gray-700 mb-2">
                A credible proposal starts with the customer&rsquo;s actual utility tariff and 12 months of
                usage. Time-of-use, net metering 3.0, tiered rates, and demand charges all have to be
                modeled correctly or the 25-year savings number is fiction. Missing your customer&rsquo;s
                obscure coop utility is a dealbreaker.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aurora: Deepest residential coverage</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Energy Toolbase: Best for commercial</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">OpenSolar: Good major utilities</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Solo: Good major utilities</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">JobNimbus: None</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Financing Integration (Cash / Loan / Lease / PPA)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Most residential solar is sold with financing. Your proposal tool has to present cash vs.
                loan vs. lease vs. PPA with monthly payment scenarios the customer can understand. Even
                better: run the credit app directly from the proposal so you are not bouncing between 4
                tabs at the kitchen table. This converts deals.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Enerflo: Full credit app flow</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aurora: Side-by-side scenarios</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">OpenSolar: Marketplace integrations</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Solo: Major loan products</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Energy Toolbase: PPA/lease focus</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Permit + Interconnection Paperwork</h3>
              <p className="text-sm text-gray-700 mb-2">
                Single-line diagrams, site plans, structural letters, AHJ-specific forms, and utility
                interconnection applications eat hours per job. A tool that generates the permit package
                directly from the design saves 3-6 hours per install and reduces correction cycles from
                the city.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Aurora: Auto-generated packages</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Enerflo: AHJ templates + tracking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">OpenSolar: Basic permit output</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Solo: Basic permit output</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">JobNimbus: Generic document storage</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Install Crew Scheduling + Material Handoff</h3>
              <p className="text-sm text-gray-700 mb-2">
                Once the deal is sold, the install side is its own operation. You need to track permit
                status, material delivery (modules + inverters + racking arriving on time), crew
                scheduling, and install day punch lists. Design tools do not do this. This is where
                JobNimbus and Enerflo earn their keep.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Install-side strong</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Enerflo: Full pipeline</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Aurora: No install management</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">OpenSolar: No install management</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Solo: No install management</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Inspection Scheduling (City, Utility, AHJ)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Between install and PTO, most jobs need a city inspection, then a utility inspection,
                then a meter swap or bidirectional meter install. Missing an inspection window adds 2-4
                weeks to PTO and delays the customer&rsquo;s first true-up. A tool that tracks inspection
                dates per job is the difference between 8-week and 12-week average PTO time.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Enerflo: Structured inspection flow</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">JobNimbus: Task-based tracking</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Aurora: Not really</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">OpenSolar: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Solo: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Monitoring Integration (Enphase, SolarEdge)</h3>
              <p className="text-sm text-gray-700 mb-2">
                After commissioning, the system needs to be registered with the inverter manufacturer&rsquo;s
                monitoring portal (Enphase Enlighten, SolarEdge monitoring) so the homeowner and your
                service team can see production. Tools that push this handoff automatically save the
                service team a week of manual data entry per month.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Enerflo: Auto-handoff</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">JobNimbus: Manual trigger</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Aurora: Not the focus</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">OpenSolar: Manual</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Solo: Manual</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-orange pl-4">
              <h3 className="font-bold text-brand-blue mb-1">Sales Pipeline + Commission Tracking</h3>
              <p className="text-sm text-gray-700 mb-2">
                Door-knocker sales orgs have setters, closers, managers, and team leads all taking a cut
                of each deal. A real solar sales platform tracks the hierarchy, calculates commission
                splits, shows leaderboards, and handles clawbacks on cancellations. Generic CRMs cannot
                do this cleanly.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Enerflo: Purpose-built for dealers</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Aurora: Basic pipeline</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Solo: Basic pipeline</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">JobNimbus: Generic CRM</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">OpenSolar: Thin</span>
              </div>
            </div>
          </div>
        </>
      }
      buyerGuideContent={
        <>
          <h3 className="font-bold text-brand-blue mb-3">Real Cost Analysis (Not Just Sticker Price)</h3>
          <p className="mb-4 text-gray-700">
            Monthly subscription is only part of the cost. Here is what a 6-person residential solar
            installer ($1.5M revenue, 40 installs/year, 3 sales reps and 1 ops manager needing seats)
            actually pays on each platform in Year 1:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">OpenSolar + spreadsheet (free tier)</p>
              <p className="text-sm text-gray-700">
                <strong>$0/year</strong> for the design and proposal tool. Works for low-volume installers
                (under 30 jobs/year) who can run install tracking in Google Sheets and Trello. You will
                still pay for QuickBooks, e-sign, and a credit card processor separately.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">OpenSolar + JobNimbus (3 install users)</p>
              <p className="text-sm text-gray-700">
                ~$75-150/mo = <strong>$900-1,800/year</strong>. Free design + a real install pipeline.
                This is the budget sweet spot for 30-60 installs/year. You give up Aurora&rsquo;s design
                accuracy and the integrated credit app, but you keep your margin.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Aurora Solar (3 sales users)</p>
              <p className="text-sm text-gray-700">
                ~$450-900/mo = <strong>$5,400-10,800/year</strong> depending on tier (AX with Sales Mode
                runs higher). No onboarding fee, but expect 1-2 weeks of ramp-up on the design tool. This
                is the industry standard for a reason — the proposals close deals that OpenSolar does not.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Aurora Solar + JobNimbus (full stack)</p>
              <p className="text-sm text-gray-700">
                ~$550-1,000/mo combined = <strong>$6,600-12,000/year</strong>. This is what most healthy
                $1M-$3M residential installers actually run. Design accuracy, proposal quality, and
                install-side project management without paying dealer-platform pricing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Solo by Lightreach (3 sales users)</p>
              <p className="text-sm text-gray-700">
                ~$300-600/mo = <strong>$3,600-7,200/year</strong>. Cheaper than Aurora at the per-seat
                level and faster to use in the field. Trade-off is weaker design accuracy and a smaller
                ecosystem.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Enerflo (6 total users)</p>
              <p className="text-sm text-gray-700">
                ~$1,200-3,000/mo + implementation = <strong>~$20,000-45,000 in Year 1</strong> for a
                6-person org. Add Aurora on top for design. Enerflo only pays off once you have a real
                sales team and enough volume to justify the pipeline platform (300+ jobs/year is the
                common threshold).
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-brand-blue mb-1">Energy Toolbase (commercial focus)</p>
              <p className="text-sm text-gray-700">
                ~$300-800/mo per analyst seat = <strong>$3,600-10,000+/year</strong> for a small
                commercial team. This is not a residential tool — only buy it if you are actively
                developing C&amp;I or storage projects where the financial modeling is the sale.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-blue mb-1">When Aurora&rsquo;s Price Makes Sense</p>
            <p className="text-sm text-gray-700">
              At 40 installs/year and $1.5M revenue, the delta between OpenSolar (free) and Aurora
              (~$7K/year) is meaningful. But Aurora&rsquo;s proposals typically convert 3-6 percentage
              points better than generic tools because the design is more credible and the financing
              scenarios are cleaner. On a $30K average system, 3 extra closed deals per year ($90K in
              revenue, roughly $15K-25K in gross profit) pays for Aurora three times over. Do the math
              on your own close rate and average deal size before defaulting to &ldquo;free is better.&rdquo;
            </p>
          </div>

          <h3 className="font-bold text-brand-blue mb-3">Other Factors to Weigh</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Design accuracy on your typical roof:</strong> Get a trial and run a design on a
              complex local roof — heavy tree cover, multiple planes, dormers. Compare the shade analysis
              output to a tool you trust. If the shade model is off by more than 5%, your production
              promises will not match reality at month 6.
            </li>
            <li>
              <strong>Utility coverage in your service area:</strong> Before committing to any proposal
              tool, check that it has your local utility&rsquo;s current tariff — especially net metering
              3.0 in California, TOU rates, and any obscure coop utilities in rural markets. Missing your
              main utility is a dealbreaker.
            </li>
            <li>
              <strong>Financing integrations that match your partners:</strong> If you are a GoodLeap
              dealer, make sure the tool has a live GoodLeap integration, not just a PDF export. The
              friction of re-typing a credit app kills deals at the table.
            </li>
            <li>
              <strong>Install-side handoff:</strong> Sales tools do not install solar. Budget for a
              second platform (JobNimbus, Enerflo, or similar) to manage permits, material, crews, and
              inspections. If you try to run installs out of a spreadsheet past 30 jobs/year, you will
              bleed margin on dropped handoffs.
            </li>
            <li>
              <strong>Commercial vs. residential:</strong> Do not try to sell commercial or storage with
              Aurora or OpenSolar alone — commercial buyers expect CFO-grade economics (NPV, IRR, demand
              charges, ITC, MACRS). Energy Toolbase is the right tool for that side of the business.
            </li>
            <li>
              <strong>Switching costs:</strong> Migrating historical jobs and sales pipeline between
              platforms is painful. Pick a stack you can grow into for 2-3 years. At 20 jobs/year, free
              tools work. At 60+, commit to Aurora + JobNimbus. At 300+, commit to Enerflo.
            </li>
          </ul>
        </>
      }
      faqContent={
        <>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                I am a new 2-person installer doing 15-25 jobs a year. What should I use?
              </h3>
              <p>
                Start with OpenSolar (free) for design and proposals, plus either JobNimbus at $25-49/mo
                or a simple Trello board for install-side tracking. OpenSolar&rsquo;s shading analysis is
                credible enough for standard residential roofs and the financing marketplace gets you in
                front of real loan products. Do not spend Aurora money until you have the sales volume
                to justify it — that cash is better deployed into marketing and your first good crew lead.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Is Aurora Solar worth the price vs. free OpenSolar?
              </h3>
              <p>
                For a serious sales-driven installer doing 50+ jobs a year, yes. Aurora&rsquo;s LIDAR-backed
                shade analysis, utility rate depth, and side-by-side financing scenarios convert at a
                higher rate than OpenSolar proposals. On $30K average systems, 3 extra closed deals a
                year pays for Aurora three times over. For a low-volume installer or a solo rep doing
                simple roofs, OpenSolar is genuinely good enough and the money is better spent elsewhere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I need Enerflo if I already use Aurora and JobNimbus?
              </h3>
              <p>
                Not until you have a real door-to-door sales team with setters and closers and enough
                volume (usually 300+ jobs/year) that commission tracking and credit app workflow become
                the bottleneck. A 6-person installer with 40 jobs/year does not need Enerflo — the Aurora
                + JobNimbus stack handles the full workflow cleanly. Enerflo is a sales-org tool, not a
                small-installer tool.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                How do I handle commercial solar and storage proposals?
              </h3>
              <p>
                Residential proposal tools (Aurora, OpenSolar, Solo) cannot do the financial modeling
                commercial buyers expect — NPV, IRR, demand charge reduction, ITC + MACRS depreciation,
                SREC revenue, storage dispatch, and PPA/lease waterfalls. Energy Toolbase is the
                industry standard for that work. You still need Aurora or another design tool for the
                actual system layout, but the pro forma lives in Energy Toolbase. If commercial is 10%+
                of your revenue, budget for it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                What about permit and interconnection paperwork — can software really help?
              </h3>
              <p>
                Yes. Aurora auto-generates the permit package (single-line diagram, site plan, cutsheets)
                directly from the design, saving 3-6 hours per job vs. assembling it manually. Enerflo
                goes further with AHJ-specific templates and structured tracking of submission,
                correction cycles, and approval. OpenSolar and Solo produce basic permit output but you
                will still assemble the final package manually. If your AHJ is slow or picky, Aurora or
                Enerflo pay for themselves on admin time alone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Do I really need a separate tool for install-side project management?
              </h3>
              <p>
                If you are doing more than 30 installs a year, yes. Aurora, OpenSolar, and Solo are
                sales and design tools — they do not track permit status, material delivery, crew
                scheduling, inspection dates, or PTO handoffs. Running installs in spreadsheets at 40+
                jobs/year means dropped handoffs, missed inspections, and longer PTO times that delay
                customer referrals. JobNimbus at $25-99/user/month is the cheapest real install-side
                tool for small solar teams and integrates with the same distributors your crews already
                use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue mb-1">
                Can I switch solar software later without losing data?
              </h3>
              <p>
                Mostly yes for customer data, job history, and proposals (most platforms export to CSV
                or PDF). What you lose is harder to replace: templates, saved designs, configured
                utility rates, financing integrations, and your team&rsquo;s muscle memory. Expect 2-4
                weeks of reduced productivity during any transition — and do not attempt it during busy
                season. The best move is to pick a stack you can grow into for 2-3 years. A growing
                installer should start on Aurora + JobNimbus instead of OpenSolar if you know you are
                headed past 60 jobs/year in the next 18 months.
              </p>
            </div>
          </div>
        </>
      }
    />
  );
}
