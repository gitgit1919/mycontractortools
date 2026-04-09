import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How to Start a Landscaping Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting a landscaping business. Learn about licensing, essential equipment costs, pricing lawn care and hardscape services, getting customers, and scaling your landscaping company.",
};

const toc = [
  { id: "landscaping-industry-overview", label: "Landscaping Industry Overview" },
  { id: "licensing-requirements", label: "Licensing & Requirements" },
  { id: "essential-equipment", label: "Essential Equipment" },
  { id: "vehicle-trailer", label: "Vehicle & Trailer Setup" },
  { id: "insurance", label: "Insurance Requirements" },
  { id: "business-structure", label: "Business Structure & Registration" },
  { id: "pricing", label: "Pricing Landscaping Services" },
  { id: "get-customers", label: "Getting Your First Customers" },
  { id: "software", label: "Landscaping Business Software" },
  { id: "scaling", label: "Scaling Your Landscaping Business" },
  { id: "mistakes", label: "Common Landscaping Business Mistakes" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-brand-blue mt-12 mb-4 scroll-mt-20">
      {children}
    </h2>
  );
}

function TipBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-lg p-4 my-6">
      <p className="font-bold text-brand-blue mb-1">{title}</p>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}

function CostTable({ rows }: { rows: { item: string; cost: string; notes: string }[] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-brand-gray">
          <tr>
            <th className="text-left px-4 py-2 font-semibold text-brand-blue">Item</th>
            <th className="text-left px-4 py-2 font-semibold text-brand-blue">Typical Cost</th>
            <th className="text-left px-4 py-2 font-semibold text-brand-blue">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2">{row.item}</td>
              <td className="px-4 py-2 font-medium">{row.cost}</td>
              <td className="px-4 py-2 text-gray-600">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StartingLandscapingBusiness() {
  return (
    <GuideLayout
      title="How to Start a Landscaping Business (2026 Guide)"
      description="A complete, step-by-step guide to starting your own landscaping business — from licensing and equipment to pricing your services, landing maintenance contracts, and scaling to multiple crews."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Landscaping is one of the easiest trades to start and one of the most
        scalable. The barrier to entry is low, recurring maintenance contracts
        provide predictable revenue, and demand exists in every residential and
        commercial market in the country.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you are mowing lawns on weekends to build cash, leaving a
        landscaping crew to go solo, or adding landscape services to an
        existing contracting business, this guide covers everything you need
        to handle the business side — so you can focus on growing.
      </p>

      {/* Section 1 */}
      <SectionHeading id="landscaping-industry-overview">
        1. Landscaping Industry Overview
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. landscaping services industry generates over $130 billion
        annually and employs more than one million workers. Several factors
        make it an attractive business to start:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Low barrier to entry</strong> — You can start with a
          truck, a trailer, a mower, and a trimmer. No multi-year
          apprenticeship or advanced certifications are required to begin
          basic lawn maintenance.
        </li>
        <li>
          <strong>Recurring revenue potential</strong> — Weekly or biweekly
          maintenance contracts are the backbone of most landscaping
          businesses. A single residential customer on a 30-week season is
          worth $1,200-$2,250 per year in maintenance alone.
        </li>
        <li>
          <strong>Residential and commercial split</strong> — Residential
          work is easier to land and builds your base. Commercial contracts
          (HOAs, office parks, retail centers) offer larger tickets and
          multi-year agreements, but require more equipment and crew capacity.
        </li>
        <li>
          <strong>Upsell opportunities</strong> — Every mowing client is a
          potential customer for mulch, planting, hardscaping, irrigation,
          and seasonal cleanups. The maintenance relationship is a doorway
          to higher-margin project work.
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$130B+</p>
          <p className="text-sm text-gray-600 mt-1">U.S. landscaping industry revenue</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$200K-$500K</p>
          <p className="text-sm text-gray-600 mt-1">Typical revenue for established landscaping companies</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">10-20%</p>
          <p className="text-sm text-gray-600 mt-1">Net profit margins for well-run landscaping businesses</p>
        </div>
      </div>

      <TipBox title="Seasonal Patterns Are Real">
        <p>
          Most landscaping businesses operate on a 7-10 month season
          depending on climate. In northern states, the mowing season runs
          roughly April through October. Southern states can run year-round
          but still have slower winter months. Smart landscaping business
          owners plan for the off-season by offering snow removal, holiday
          lighting, or winter pruning — and by building cash reserves during
          peak months to cover winter expenses.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="licensing-requirements">
        2. Licensing & Requirements
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Landscaping has fewer licensing requirements than most trades, but
        there are still important credentials to understand — especially if
        you plan to offer chemical applications or irrigation work.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Business License</h4>
          <p className="text-sm text-gray-700 mb-1">
            Most cities and counties require a general business license to
            operate a landscaping company. This is a basic registration —
            apply at your local city or county clerk&apos;s office. Some
            jurisdictions require a home occupation permit if you run the
            business from your residence.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $50-$300 | Renewal: annually</p>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">Pesticide Applicator License</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Required for chemical work</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            If you apply herbicides, pesticides, or fertilizers commercially,
            federal and state law requires a pesticide applicator license.
            This involves passing a written exam administered by your state&apos;s
            department of agriculture. Many states require separate
            certification categories for ornamental and turf, right-of-way,
            and aquatic applications.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $50-$200 exam fee | Study time: 2-4 weeks | Renewal: every 2-5 years with CEUs</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Landscaping Contractor License</h4>
          <p className="text-sm text-gray-700 mb-1">
            Some states (California, Nevada, Utah, and others) require a
            specific landscaping contractor license for work above a certain
            dollar threshold. This typically involves proof of experience,
            a trade exam, and posting a surety bond. Even where not required,
            voluntary certification can help you win larger contracts.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $200-$1,000 | Timeline: 4-12 weeks</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">Irrigation Certifications</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Optional but valuable</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            If you plan to install or repair irrigation systems, look into
            certification through the Irrigation Association (IA). Their
            Certified Irrigation Technician (CIT) and Certified Landscape
            Irrigation Auditor (CLIA) credentials are recognized industry-wide.
            Some states require specific licensing for irrigation work,
            especially backflow prevention device installation and testing.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $200-$500 per certification | Renewal: every 3 years</p>
        </div>
      </div>

      <TipBox title="Check Your State First">
        <p>
          Landscaping licensing varies by state and even by city. Search
          &quot;[your state] landscaping contractor license requirements&quot;
          and look for the .gov result. If you plan to apply chemicals, also
          search &quot;[your state] pesticide applicator license.&quot; Call
          the licensing board if anything is unclear — they will tell you
          exactly what you need.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="essential-equipment">
        3. Essential Equipment
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        One advantage of landscaping is that you can start with a minimal
        equipment package and upgrade as revenue grows. Here is what you
        need to handle residential maintenance and basic landscape
        installations.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Mowing & Maintenance Equipment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Commercial walk-behind mower</strong> — A 36&quot; or
          48&quot; commercial walk-behind is the workhorse for residential
          lawns. Budget $2,000-$4,500. Avoid consumer-grade mowers — they
          will not survive daily commercial use.
        </li>
        <li>
          <strong>Zero-turn mower</strong> — For larger properties and
          commercial accounts, a 52&quot;-60&quot; zero-turn dramatically
          increases productivity. Budget $5,000-$12,000. Not essential at
          startup, but add one as soon as you have enough large properties
          to justify it.
        </li>
        <li>
          <strong>String trimmer (weed eater)</strong> — Commercial-grade,
          with a straight shaft. Budget $250-$500. You will use this on
          every single job.
        </li>
        <li>
          <strong>Backpack blower</strong> — Commercial backpack blowers
          are vastly more powerful than handheld models. Budget $350-$600.
          Essential for cleanup after every mowing job.
        </li>
        <li>
          <strong>Hedge trimmers</strong> — Gas or battery-powered
          commercial hedge trimmers. Budget $250-$500. Many properties
          require hedge trimming as part of regular maintenance.
        </li>
        <li>
          <strong>Edger</strong> — Stick edger for sidewalks and driveways.
          $200-$400. Makes properties look polished.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hand Tools & Installation Equipment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Shovels, rakes, wheelbarrows</strong> — Round-point and
          flat shovels, landscape rakes, and at least one heavy-duty
          wheelbarrow. $200-$400 for a basic set.
        </li>
        <li>
          <strong>Chainsaw</strong> — For tree removal and storm cleanup.
          $300-$600 for a mid-range commercial model.
        </li>
        <li>
          <strong>Leaf vacuum / debris loader</strong> — For fall cleanups,
          a truck-mounted debris loader saves enormous time. $2,000-$5,000.
          Not essential at startup but pays for itself quickly during leaf
          season.
        </li>
        <li>
          <strong>Tamper / plate compactor</strong> — For hardscape work,
          paver installation, and base preparation. Rent initially, buy
          ($500-$2,000) when hardscape becomes a regular service.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Startup Equipment Cost Summary
      </h3>

      <CostTable
        rows={[
          { item: "Commercial walk-behind mower", cost: "$2,000-$4,500", notes: "36\" or 48\" deck, commercial grade" },
          { item: "Zero-turn mower (optional at start)", cost: "$5,000-$12,000", notes: "52\"-60\" deck for larger properties" },
          { item: "String trimmer", cost: "$250-$500", notes: "Commercial, straight shaft" },
          { item: "Backpack blower", cost: "$350-$600", notes: "Commercial-grade power" },
          { item: "Hedge trimmers", cost: "$250-$500", notes: "Gas or battery commercial" },
          { item: "Edger", cost: "$200-$400", notes: "Stick edger for clean lines" },
          { item: "Hand tools (full set)", cost: "$200-$400", notes: "Shovels, rakes, wheelbarrow" },
          { item: "Chainsaw", cost: "$300-$600", notes: "Mid-range commercial model" },
          { item: "Safety equipment", cost: "$100-$300", notes: "Ear protection, glasses, gloves, steel toes" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total equipment investment: $8,000-$25,000
        </p>
        <p className="text-gray-700 text-sm">
          You can start a basic mowing operation with a walk-behind, trimmer,
          blower, and hand tools for around $3,000-$6,000 in equipment. Add a
          zero-turn mower and installation tools when revenue justifies it.
          Many successful landscaping companies started with a single mower
          and added equipment as they grew. Use our{" "}
          <Link href="/calculators/landscaping-material/" className="text-brand-orange hover:underline">
            Landscaping Material Calculator
          </Link>{" "}
          to estimate material costs for installation jobs.
        </p>
      </div>

      {/* Section 4 */}
      <SectionHeading id="vehicle-trailer">
        4. Vehicle & Trailer Setup
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your truck and trailer are your mobile base of operations. The right
        setup keeps your equipment secure, your crew efficient, and your
        business looking professional.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Truck Requirements
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Half-ton or three-quarter-ton pickup</strong> — An F-150,
          Silverado 1500, or RAM 1500 handles most residential landscaping
          needs. If you are pulling a large trailer with a zero-turn and
          heavy materials, step up to a three-quarter-ton (F-250, 2500).
          Budget $15,000-$35,000 for a reliable used truck.
        </li>
        <li>
          <strong>Towing capacity matters</strong> — Your loaded trailer
          with mowers, equipment, and materials can weigh 3,000-6,000 lbs.
          Make sure your truck can handle it safely with margin to spare.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Trailer Setup
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Open landscape trailer</strong> — A 6x12 or 7x14 open
          utility trailer is the industry standard. Gate ramp for loading
          mowers, side rails for trimmer racks, and enough space for
          materials. Budget $2,000-$5,000 new.
        </li>
        <li>
          <strong>Trimmer racks and blower mounts</strong> — Lockable
          racks keep your equipment organized and secure. Budget $200-$500.
          Unsecured tools bounce off trailers on the highway — it happens
          more than you think.
        </li>
        <li>
          <strong>Equipment locks and security</strong> — Use heavy-duty
          locks on your trailer tongue, equipment racks, and any storage
          boxes. Landscaping equipment theft is rampant. Consider a GPS
          tracker on your trailer ($100-$300 plus monthly subscription).
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Branding & Wraps
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Truck and trailer branding</strong> — Your rig is driving
          through neighborhoods all day. Make it a billboard. At minimum,
          put your company name, phone number, and website on both sides of
          the truck and trailer. Magnetic signs cost $100-$300 to start. A
          professional vinyl wrap costs $2,000-$5,000 and looks significantly
          more polished.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Used pickup truck", cost: "$15,000-$35,000", notes: "Half-ton or three-quarter-ton" },
          { item: "Open landscape trailer", cost: "$2,000-$5,000", notes: "6x12 or 7x14 with gate ramp" },
          { item: "Trimmer racks and mounts", cost: "$200-$500", notes: "Lockable for security" },
          { item: "Equipment locks and GPS tracker", cost: "$200-$500", notes: "Theft prevention is essential" },
          { item: "Vehicle branding (signs or wrap)", cost: "$100-$5,000", notes: "Magnets are cheapest to start" },
        ]}
      />

      <TipBox title="Equipment Security Is Not Optional">
        <p>
          Landscaping equipment gets stolen constantly — mowers, blowers,
          and trimmers are easy to grab and easy to resell. Lock everything
          to your trailer. Lock your trailer to your truck. Park in a
          secure location overnight. Consider a GPS tracker on your trailer
          and your most expensive equipment. One theft can wipe out months
          of profit.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="insurance">
        5. Insurance Requirements
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Landscaping carries lower insurance premiums than high-risk trades
        like roofing, but you still need proper coverage. A broken window,
        an injured worker, or a damaged irrigation line can quickly become
        expensive without insurance.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers property damage and bodily injury caused by your work. If
            a rock from your mower breaks a window or a passerby trips over
            your equipment, this policy pays the claim. Required by most
            commercial contracts and many HOAs.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $500-$2,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required in most states once you have employees. Landscaping
            involves physical labor with sharp tools and heavy equipment,
            so workers comp is essential. Rates for landscaping are moderate
            compared to trades like roofing or electrical.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: varies by state and payroll</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Your personal auto policy will not cover accidents in a vehicle
            used for business. A commercial policy covers your truck and
            trailer, plus any damage or injuries from a road accident.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,200-$3,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Equipment / Inland Marine Coverage</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers theft or damage to your mowers, trimmers, blowers, and
            other equipment — whether on the trailer, at a job site, or in
            storage. Given how frequently landscaping equipment is stolen,
            this coverage is worth every penny.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $300-$1,000/year</p>
        </div>
      </div>

      <CostTable
        rows={[
          { item: "General liability", cost: "$500-$2,000/yr", notes: "Required for commercial contracts" },
          { item: "Workers compensation", cost: "Varies", notes: "Required with employees in most states" },
          { item: "Commercial auto", cost: "$1,200-$3,000/yr", notes: "Covers truck and trailer" },
          { item: "Equipment coverage", cost: "$300-$1,000/yr", notes: "Inland marine or rider policy" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total insurance budget: $3,000-$8,000/year
        </p>
        <p className="text-gray-700 text-sm">
          Landscaping insurance premiums are lower than most trades because
          the risk profile is relatively modest. As you add employees, your
          workers comp costs will increase proportionally. Bundle your
          policies with a single insurer for the best rates and simplest
          management.
        </p>
      </div>

      {/* Section 6 */}
      <SectionHeading id="business-structure">
        6. Business Structure & Registration
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Get your business structure set up before you take on your first
        paying customer. This protects your personal assets and makes taxes
        and accounting straightforward from day one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Sole Proprietorship</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Simplest and cheapest to set up</li>
            <li>No separation between you and the business</li>
            <li>Your personal assets are at risk if sued</li>
            <li>Common for part-time lawn mowing, but risky as you grow</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Separates personal and business assets</li>
            <li>Protects your house and savings if a job goes wrong</li>
            <li>Costs $50-$500 depending on your state</li>
            <li>Can elect S-Corp taxation to save on self-employment tax</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Our recommendation:</strong> Form an LLC. Landscaping
        involves operating heavy equipment on other people&apos;s property.
        One serious property damage claim or injury could put your personal
        assets at risk without the liability protection of an LLC.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Your registration checklist:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Form your LLC</strong> — File through your state&apos;s
          Secretary of State website or use a formation service.
        </li>
        <li>
          <strong>Get your EIN</strong> — Apply free on IRS.gov. Takes 5
          minutes. You need this for bank accounts, tax filings, and hiring.
        </li>
        <li>
          <strong>Open a business bank account</strong> — Keep business and
          personal finances completely separate from day one. Every dollar
          in, every dollar out, through the business account.
        </li>
        <li>
          <strong>Get a business credit card</strong> — Use it for fuel,
          materials, and equipment purchases. Pay it off monthly. Makes
          expense tracking simple and builds business credit.
        </li>
        <li>
          <strong>Register for state and local taxes</strong> — Landscaping
          services are taxable in many states. Know whether your state taxes
          maintenance services, installation labor, or materials — the rules
          vary.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "State LLC filing fee", cost: "$50-$500", notes: "One-time, varies by state" },
          { item: "Registered agent (annual)", cost: "$0-$125/yr", notes: "Required in most states" },
          { item: "EIN (Tax ID number)", cost: "Free", notes: "Apply on IRS.gov" },
          { item: "Business bank account", cost: "$0-$15/mo", notes: "Many banks offer free business checking" },
          { item: "Operating agreement", cost: "$0-$100", notes: "Template is fine for single-member LLC" },
        ]}
      />

      {/* Section 7 */}
      <SectionHeading id="pricing">
        7. Pricing Landscaping Services
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pricing is where most new landscaping business owners leave money
        on the table. You need to know your costs, understand market rates,
        and price for profit — not just to stay busy.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Lawn Maintenance Pricing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Per-visit pricing:</strong> $30-$75 per visit for
          residential lawns, depending on lot size and services included
          (mow, trim, edge, blow). Small quarter-acre lots run $30-$45. Half
          acre and above runs $50-$75+.
        </li>
        <li>
          <strong>Weekly vs. biweekly:</strong> Weekly mowing during peak
          season produces the best-looking results and the most revenue per
          customer. Biweekly clients take nearly as long per visit because
          the grass is taller and thicker.
        </li>
        <li>
          <strong>Seasonal contracts:</strong> Many landscapers sell
          seasonal contracts at a fixed monthly price that covers all
          regular maintenance visits. This smooths revenue and makes
          budgeting easier for both you and the customer.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Landscape Installation & Hardscape Pricing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Mulch installation:</strong> $50-$85 per cubic yard
          installed, including material and labor. A typical residential
          mulch job uses 5-15 yards.
        </li>
        <li>
          <strong>Planting and bed work:</strong> Charge material cost plus
          a 30-50% markup, plus labor at $45-$75 per man-hour. Plant
          installations are high-margin when you buy wholesale.
        </li>
        <li>
          <strong>Paver patios and walkways:</strong> $12-$25 per square
          foot installed for standard pavers, $20-$40+ for premium materials
          and complex patterns. Hardscaping is the highest-margin service
          most landscapers can add.
        </li>
        <li>
          <strong>Retaining walls:</strong> $20-$45 per square face foot
          installed. Price depends on wall height, material (block vs.
          natural stone), and site access.
        </li>
        <li>
          <strong>Gravel and aggregate:</strong> $40-$75 per ton installed.
          Used for driveways, pathways, drainage, and decorative
          applications.
        </li>
      </ul>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Use Our Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link
            href="/calculators/landscaping-material/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Landscaping Material Calculator
          </Link>
          <Link
            href="/calculators/paver/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Paver Calculator
          </Link>
          <Link
            href="/calculators/gravel/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Gravel Calculator
          </Link>
          <Link
            href="/calculators/retaining-wall/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Retaining Wall Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
        </div>
      </div>

      <TipBox title="Know Your Cost Per Hour">
        <p>
          Before you set any price, know what it costs you to operate per
          hour — fuel, equipment wear, insurance, labor, and overhead. If
          your cost per hour is $35 and you are charging $40, your margin is
          razor thin. Most profitable landscaping companies target a 50%+
          gross margin on maintenance and 40-60% on installation work. Use
          our{" "}
          <Link href="/calculators/markup-margin/" className="text-brand-orange hover:underline">
            Markup & Margin Calculator
          </Link>{" "}
          to make sure your prices are actually profitable.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="get-customers">
        8. Getting Your First Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Landscaping has a major marketing advantage: your work is visible.
        Every lawn you mow is a billboard. Every landscape you install is
        a portfolio piece that the neighbors see every day. Leverage this.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Low-Cost Marketing (Start Immediately)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Door hangers</strong> — After you finish a job, put door
          hangers on 20-30 homes in the immediate neighborhood. These
          neighbors just watched you work and the lawn looks great. This is
          the single highest-converting marketing method for new landscaping
          businesses. Print 500 for $50-$100.
        </li>
        <li>
          <strong>Yard signs</strong> — Place a small branded sign in the
          yard while you are working (with the customer&apos;s permission).
          &quot;Lawn care by [Your Company] — Call/Text [number].&quot; Leave
          it for a day or two after the job for maximum visibility.
        </li>
        <li>
          <strong>Google Business Profile</strong> — Set it up immediately.
          Add photos of your work, list your services, and start collecting
          reviews. When someone searches &quot;landscaping near me,&quot;
          Google Business Profile is what shows up in the map pack.
        </li>
        <li>
          <strong>Nextdoor</strong> — Homeowners use Nextdoor constantly
          to ask for landscaping recommendations. Claim your business
          profile and stay active. Positive mentions here spread fast in
          a neighborhood.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Relationship Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>HOA contracts</strong> — Homeowners associations manage
          common areas that need regular maintenance. One HOA contract can
          replace 10-20 residential accounts in revenue. Introduce yourself
          to HOA property managers and board members in your area.
        </li>
        <li>
          <strong>Property management companies</strong> — They manage
          rental properties and need reliable lawn care for dozens or
          hundreds of properties. Volume is steady and billing is
          consolidated.
        </li>
        <li>
          <strong>Real estate agents</strong> — They need curb appeal for
          listings and recommend landscapers to new homeowners moving in.
          Build relationships with the top agents in your market.
        </li>
        <li>
          <strong>Upselling maintenance to install clients</strong> — Every
          customer who hires you for a landscape installation is a prime
          candidate for ongoing maintenance. They just invested thousands
          in their landscape — they want it to look great. Pitch a
          maintenance contract before you leave the install job.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Paid Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Local Services Ads (LSA)</strong> — Pay per lead,
          not per click. The Google Guaranteed badge builds trust. Typical
          cost: $10-$40 per lead for landscaping.
        </li>
        <li>
          <strong>Facebook / Instagram ads</strong> — Before-and-after
          photos of your work perform extremely well on social media.
          Target homeowners in your service area. Budget $200-$500/month
          to start.
        </li>
      </ul>

      <TipBox title="Density Is Everything">
        <p>
          The most profitable landscaping routes have multiple customers on
          the same street or in the same neighborhood. Less drive time
          between jobs means more jobs per day and more revenue per hour.
          When marketing, focus on neighborhoods where you already have
          customers. Door hangers and yard signs in those areas help you
          build route density naturally.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. Landscaping Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        As your customer list grows beyond 20-30 accounts, you need
        software to manage scheduling, routing, invoicing, and customer
        communication. Trying to run a growing landscaping business from
        a notebook and a spreadsheet will cost you money and customers.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Scheduling & Route Optimization</h4>
              <p className="text-sm text-gray-700 mt-1">
                Assign jobs to crews, optimize daily routes to minimize drive
                time, and track completion in real time. Route efficiency is
                a direct profit lever in landscaping.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">CRM & Customer Management</h4>
              <p className="text-sm text-gray-700 mt-1">
                Track every customer, their property details, service
                history, and contract status. Know which customers are due
                for upsell conversations and seasonal services.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Estimating & Proposals</h4>
              <p className="text-sm text-gray-700 mt-1">
                Generate professional estimates for installation projects
                with itemized material and labor costs. Professional
                proposals close more work than handwritten quotes.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Important</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Invoicing & Payments</h4>
              <p className="text-sm text-gray-700 mt-1">
                Automate recurring invoices for maintenance contracts,
                collect payment electronically, and track receivables. Stop
                chasing paper checks.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
      </div>

      <div className="my-6">
        <Link
          href="/best/landscaping-software/"
          className="block text-center bg-brand-gray rounded-lg p-4 hover:bg-brand-orange hover:text-white transition-colors font-medium"
        >
          Read Our Full Landscaping Software Comparison
        </Link>
      </div>

      {/* Section 10 */}
      <SectionHeading id="scaling">
        10. Scaling Your Landscaping Business
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        As a solo landscaper, you can realistically generate $75,000-$150,000
        in annual revenue. To go beyond that, you need to add crews, expand
        your service offerings, and build systems that run without you on
        every job.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hiring Your First Crew
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hire when you are consistently turning down work or cannot add more
        stops to your daily route. Your first hire should be someone who
        can run a mower and trimmer efficiently — speed matters in
        maintenance work. A two-person crew can handle 15-25 residential
        maintenance stops per day depending on property size and drive time.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Route Density
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As you add crews, route density becomes your most important
        profitability metric. Crews that drive 30 minutes between jobs are
        burning profit. Crews that drive 5 minutes between jobs are
        maximizing billable hours. Organize your routes by neighborhood and
        day of the week. Drop customers who are geographic outliers and
        replace them with customers closer to your existing routes.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Adding Higher-Margin Services
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Hardscaping</strong> — Paver patios, walkways, retaining
          walls, and fire pits carry much higher margins than maintenance.
          A single hardscape project can generate more profit than a month
          of mowing. Invest in training and equipment gradually.
        </li>
        <li>
          <strong>Irrigation installation and repair</strong> — Sprinkler
          system installs and repairs are a natural add-on. Get certified
          and add irrigation to your service menu. Recurring irrigation
          winterization and spring startups create additional seasonal
          revenue.
        </li>
        <li>
          <strong>Snow removal (year-round revenue)</strong> — In northern
          climates, snow plowing and salting turns your dead winter months
          into revenue-generating months. Your truck is already equipped —
          add a plow, a salt spreader, and offer snow contracts to your
          existing maintenance customers. Commercial snow contracts can be
          extremely profitable.
        </li>
        <li>
          <strong>Outdoor lighting</strong> — Landscape lighting installation
          is high-margin, and maintenance customers are the ideal audience.
          Low material cost, high perceived value.
        </li>
      </ul>

      <TipBox title="Systems Before Staff">
        <p>
          Before you hire, document your processes. How does a crew handle
          a maintenance stop from arrival to departure? What is the quality
          checklist? How do you handle customer complaints? Write it down.
          Your crew needs to deliver the same quality your customers expect
          from you — and they cannot do that without clear systems.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="mistakes">
        11. Common Landscaping Business Mistakes
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Underpricing maintenance contracts",
            fix: "Many new landscapers price too low to win accounts, then cannot afford to deliver quality service. Price your maintenance to cover your fully loaded cost per hour (labor, fuel, equipment depreciation, insurance, overhead) plus a margin. It is better to have 40 accounts at profitable rates than 80 accounts where you are barely breaking even.",
          },
          {
            mistake: "Equipment financing traps",
            fix: "It is tempting to finance a $12,000 zero-turn mower before you have the revenue to support it. Equipment payments eat into your margins every month whether you are busy or not. Start with affordable equipment and upgrade as revenue justifies it. Buy used when possible — a well-maintained commercial mower with 500 hours still has years of life left.",
          },
          {
            mistake: "Not tracking job costs",
            fix: "If you do not know how long each job takes and what it costs you, you cannot price accurately. Track time on every job — from arrival to departure, including drive time. After a month, you will know exactly which accounts are profitable and which ones are costing you money. Adjust pricing or drop unprofitable accounts.",
          },
          {
            mistake: "Ignoring upsell opportunities",
            fix: "Your maintenance customers trust you and see you every week. They are the easiest people to sell mulch, plantings, cleanups, aeration, overseeding, and hardscape work to. Train yourself (and your crews) to identify and mention upsell opportunities naturally. A simple 'your beds could use fresh mulch — want me to put together a quote?' can add thousands in annual revenue per customer.",
          },
          {
            mistake: "No written contracts",
            fix: "Handshake agreements lead to disputes about scope, frequency, and payment. Use written service agreements that clearly state what is included, what is not, the price, and the payment terms. This protects both you and the customer.",
          },
          {
            mistake: "Seasonal cash flow mismanagement",
            fix: "Landscaping revenue drops significantly in the off-season. Too many landscapers spend their peak-season profits and end up cash-strapped in winter. Set aside 15-20% of peak-season revenue to cover off-season expenses. Even better, add winter services like snow removal or holiday lighting to maintain year-round income.",
          },
          {
            mistake: "Neglecting equipment maintenance",
            fix: "A commercial mower that goes down on a Monday morning costs you an entire day of revenue. Sharpen blades weekly, change oil on schedule, replace belts before they break. A $20 oil change is cheaper than a $2,000 engine replacement. Schedule maintenance on weekends or evenings — never during billable hours.",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="font-bold text-red-600 mb-1">{item.mistake}</p>
            <p className="text-sm text-gray-700">{item.fix}</p>
          </div>
        ))}
      </div>

      {/* Startup Cost Summary */}
      <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-4">
        Total Landscaping Startup Costs Summary
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a realistic breakdown of what it costs to start a
        landscaping business. Your costs depend on whether you already own
        a truck, how much equipment you start with, and your local
        licensing requirements.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50-$500", notes: "One-time" },
          { item: "Business license", cost: "$50-$300", notes: "Annual, varies by city/county" },
          { item: "Pesticide applicator license", cost: "$50-$200", notes: "If offering chemical applications" },
          { item: "General liability insurance", cost: "$500-$2,000", notes: "Annual" },
          { item: "Commercial auto insurance", cost: "$1,200-$3,000", notes: "Annual" },
          { item: "Equipment (basic startup)", cost: "$3,000-$6,000", notes: "Mower, trimmer, blower, hand tools" },
          { item: "Equipment (full setup with zero-turn)", cost: "$8,000-$25,000", notes: "Walk-behind + zero-turn + all tools" },
          { item: "Pickup truck", cost: "$15,000-$35,000", notes: "Used, half-ton or three-quarter-ton" },
          { item: "Open landscape trailer", cost: "$2,000-$5,000", notes: "6x12 or 7x14 with ramp" },
          { item: "Trimmer racks and security", cost: "$300-$800", notes: "Locks, racks, GPS tracker" },
          { item: "Vehicle branding", cost: "$100-$5,000", notes: "Magnets to full wrap" },
          { item: "Business software", cost: "$30-$150/mo", notes: "Scheduling, invoicing, CRM" },
          { item: "Marketing (first 3 months)", cost: "$200-$1,500", notes: "Door hangers, yard signs, Google Ads" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $10,000-$40,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          Landscaping has one of the lowest startup costs in the trades. If
          you already own a truck, you can start a basic mowing operation
          for $5,000-$8,000 — a trailer, a commercial mower, a trimmer, a
          blower, insurance, and some door hangers. Many successful
          landscaping companies started exactly this way and reinvested
          profits into better equipment as they grew. Use our{" "}
          <Link href="/calculators/markup-margin/" className="text-brand-orange hover:underline">
            Markup & Margin Calculator
          </Link>{" "}
          to make sure your pricing covers these startup costs and delivers
          real profit.
        </p>
      </div>

      {/* Cross-promotion for homeowners */}
      <div className="bg-orange-50 border border-brand-orange rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-brand-blue mb-2">
          Are You a Homeowner Looking for a Landscaper?
        </h3>
        <p className="text-gray-700 mb-4">
          If you landed on this page looking for landscaping help for your
          property, we can connect you with licensed landscaping contractors
          in your area. Get free quotes from pre-screened professionals.
        </p>
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Get Free Landscaping Quotes at GetContractorQuotes.com
        </a>
      </div>

      {/* Internal links */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Landscaping Calculators & Resources</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link
            href="/calculators/landscaping-material/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Landscaping Material Calculator
          </Link>
          <Link
            href="/calculators/paver/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Paver Calculator
          </Link>
          <Link
            href="/calculators/gravel/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Gravel Calculator
          </Link>
          <Link
            href="/calculators/retaining-wall/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Retaining Wall Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
          <Link
            href="/best/landscaping-software/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Landscaping Software Comparison
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Landscaping Business?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free tools to estimate materials, price your work,
          calculate your margins, and find the right software for your
          landscaping company.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/landscaping-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare Landscaping Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
