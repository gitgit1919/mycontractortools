import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import AffiliateProviderCards from "@/components/AffiliateProviderCards";

export const metadata: Metadata = {
  title:
    "How to Start a Plumbing Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting a plumbing business. Learn about licensing, apprenticeship requirements, essential tools, insurance, pricing plumbing services, getting customers, and scaling your plumbing company.",
};

const toc = [
  { id: "industry-overview", label: "Plumbing Industry Overview" },
  { id: "licensing-apprenticeship", label: "Licensing & Apprenticeship Path" },
  { id: "essential-tools", label: "Essential Plumbing Tools" },
  { id: "vehicle-setup", label: "Vehicle Setup" },
  { id: "insurance", label: "Plumbing Insurance" },
  { id: "business-structure", label: "Business Structure" },
  { id: "pricing", label: "Pricing Plumbing Services" },
  { id: "get-customers", label: "Getting Plumbing Customers" },
  { id: "software", label: "Plumbing Business Software" },
  { id: "scaling", label: "Scaling Your Plumbing Business" },
  { id: "mistakes", label: "Common Mistakes to Avoid" },
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

export default function StartingPlumbingBusiness() {
  return (
    <GuideLayout
      title="How to Start a Plumbing Business (2026 Guide)"
      description="A complete, step-by-step guide to starting your own plumbing business — from apprenticeship to landing your first service calls. Built for plumbers who are ready to work for themselves."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Plumbing is one of the most reliable trades to build a business around.
        People will always need water, drains, and gas lines. Emergency calls
        come at premium rates. And unlike some trades, plumbing demand stays
        strong in every economic cycle.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        This guide covers everything you need to go from licensed plumber to
        plumbing business owner — licensing, tools, insurance, pricing, and
        getting your first customers.
      </p>

      {/* Section 1 */}
      <SectionHeading id="industry-overview">
        1. Plumbing Industry Overview
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. plumbing industry generates over $130 billion in annual
        revenue and employs roughly 500,000 plumbers. Demand is being driven by
        three major factors: aging infrastructure that needs replacement, steady
        new residential and commercial construction, and growing demand for
        water-efficient fixtures and systems.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The average plumbing business with 1-3 employees generates $200,000 to
        $500,000 in annual revenue, with net profit margins typically ranging
        from 10% to 20% for well-run operations. Solo plumbers focused on
        service work commonly earn $75,000 to $150,000 per year.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-blue mb-1">$130B+</p>
          <p className="text-sm text-gray-600">U.S. industry revenue</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-blue mb-1">10-20%</p>
          <p className="text-sm text-gray-600">Typical net profit margin</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-blue mb-1">500K+</p>
          <p className="text-sm text-gray-600">Plumbers employed in the U.S.</p>
        </div>
      </div>

      <TipBox title="Recession-Resistant Trade">
        <p>
          Plumbing is one of the most recession-proof trades. Burst pipes,
          clogged drains, and broken water heaters do not wait for the economy
          to improve. Service and repair plumbers saw minimal slowdown during
          the 2008 recession and the 2020 pandemic. If anything, aging
          infrastructure means demand is accelerating.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="licensing-apprenticeship">
        2. Licensing & Apprenticeship Path
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Plumbing is one of the most heavily licensed trades. You cannot legally
        start a plumbing business without the proper credentials. The typical
        progression looks like this:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</span>
            <h4 className="font-bold text-brand-blue">Apprentice Plumber (4-5 years)</h4>
          </div>
          <p className="text-sm text-gray-700 ml-11">
            Work under a licensed journeyman or master plumber. Most states
            require 8,000-10,000 hours of on-the-job training plus classroom
            instruction. You earn while you learn — apprentice wages typically
            start at $15-$20/hour and increase each year.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</span>
            <h4 className="font-bold text-brand-blue">Journeyman Plumber</h4>
          </div>
          <p className="text-sm text-gray-700 ml-11">
            After completing your apprenticeship, you take the journeyman exam.
            This covers plumbing code, system design, safety, and practical
            skills. A journeyman license allows you to work independently but
            some states require a master license to pull permits or run a
            business.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</span>
            <h4 className="font-bold text-brand-blue">Master Plumber</h4>
          </div>
          <p className="text-sm text-gray-700 ml-11">
            Typically requires 2-4 additional years of experience beyond
            journeyman status, plus passing a more comprehensive exam. A master
            plumber license is required in most states to own a plumbing
            business, pull permits, and supervise other plumbers.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Continuing education</strong> is required in most states to
        maintain your license. This typically means 4-16 hours of approved
        coursework per renewal period, covering code updates, safety, and new
        technologies.
      </p>

      <TipBox title="Check Your State Requirements">
        <p>
          Licensing requirements vary significantly by state. Some states (like
          Texas) only require licensing in certain cities, while others (like
          California) require statewide licensing. Search &quot;[your state]
          plumber license requirements&quot; and look for the .gov result. Call
          your state plumbing board directly — they will walk you through the
          exact steps.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="essential-tools">
        3. Essential Plumbing Tools
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your tool inventory is your ability to earn. Starting a plumbing
        business requires a larger tool investment than some trades because of
        the specialized equipment involved. Here is what you need:
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hand Tools & Basics
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Pipe wrenches</strong> — Multiple sizes (10&quot;, 14&quot;, 18&quot;, 24&quot;).
          You will use these daily. Buy quality brands that last.
        </li>
        <li>
          <strong>Tubing cutters</strong> — Copper, PEX, and PVC cutters.
          Different materials require different tools.
        </li>
        <li>
          <strong>Basin wrenches</strong> — Essential for faucet installations
          and replacements.
        </li>
        <li>
          <strong>Pipe threaders</strong> — Manual ratchet set for smaller jobs,
          power threading machine for high-volume work.
        </li>
        <li>
          <strong>Soldering and brazing equipment</strong> — Torch kit, solder,
          flux, fire cloth. Required for copper pipe work.
        </li>
        <li>
          <strong>PEX crimping/expansion tools</strong> — PEX is the dominant
          material for residential water lines. Invest in a quality expansion
          tool.
        </li>
        <li>
          <strong>Channel locks, adjustable wrenches, screwdrivers</strong> —
          Standard hand tools you will grab constantly.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Specialty & Diagnostic Equipment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Drain cleaning machines</strong> — Handheld drum augers for
          residential drains, larger sectional machines for main lines.
        </li>
        <li>
          <strong>Inspection camera</strong> — Sewer camera for diagnosing
          underground pipe issues. Pays for itself on the first job where you
          find the problem without digging.
        </li>
        <li>
          <strong>Pipe locator</strong> — Helps find underground utilities and
          pipe routes before digging.
        </li>
        <li>
          <strong>Leak detection equipment</strong> — Electronic leak detectors
          and pressure testing gauges.
        </li>
        <li>
          <strong>Press tool system</strong> — For ProPress copper fittings.
          Faster than soldering and required for some commercial work.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Hand tools (wrenches, cutters, basics)", cost: "$1,500-$3,000", notes: "Buy quality — cheap tools break on the job" },
          { item: "Soldering/brazing kit", cost: "$200-$500", notes: "Torch, solder, flux, accessories" },
          { item: "PEX tools (expansion/crimp)", cost: "$300-$800", notes: "Milwaukee or Uponor expansion tool recommended" },
          { item: "Drain cleaning machines", cost: "$500-$3,000", notes: "Start with a handheld drum auger" },
          { item: "Inspection camera", cost: "$1,500-$5,000", notes: "Huge ROI — essential for diagnostics" },
          { item: "Pipe threading machine", cost: "$1,000-$3,000", notes: "Can rent initially, buy when volume justifies it" },
          { item: "Press tool system", cost: "$2,000-$4,000", notes: "Optional at first — add when doing commercial work" },
          { item: "Miscellaneous (safety, testing, etc.)", cost: "$500-$1,000", notes: "PPE, pressure gauges, levels, measuring tools" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Startup tool investment: $10,000-$25,000
        </p>
        <p className="text-gray-700 text-sm">
          If you are coming out of an apprenticeship, you likely already own
          many of the hand tools. Your biggest initial purchases will be a
          drain machine, inspection camera, and specialty equipment. Buy the
          essentials first and add specialty tools as specific jobs require
          them.
        </p>
      </div>

      {/* Section 4 */}
      <SectionHeading id="vehicle-setup">
        4. Vehicle Setup
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your vehicle is your mobile workshop. Plumbers carry more inventory
        than most trades because you need parts on hand to complete repairs in
        a single trip. A well-organized truck or van is the difference between
        a profitable service call and a wasted trip back to the supply house.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Vehicle options:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Cargo van (Ford Transit, Ram ProMaster, Mercedes Sprinter)</strong> —
          Most popular choice for service plumbers. Enclosed storage protects
          tools and parts from weather and theft. Easier to organize with
          shelving systems.
        </li>
        <li>
          <strong>Pickup truck with service body</strong> — Better for new
          construction and rough terrain. External compartments provide easy
          access. Consider a utility bed with built-in storage.
        </li>
        <li>
          <strong>Box truck</strong> — For larger operations that carry
          significant pipe stock and heavy equipment. Overkill for a solo
          startup.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Parts inventory to stock:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>Common copper and PEX fittings (elbows, tees, couplings) in standard sizes</li>
        <li>Supply lines, angle stops, and shut-off valves</li>
        <li>Wax rings, closet bolts, and toilet repair parts</li>
        <li>Faucet repair kits and cartridges for popular brands</li>
        <li>PVC and ABS fittings for drain work</li>
        <li>Pipe sections (copper, PEX, PVC) in common diameters</li>
        <li>Water heater parts (thermocouples, elements, T&P valves)</li>
      </ul>

      <TipBox title="Organization Pays for Itself">
        <p>
          Invest in a van shelving system from the start. Label everything.
          When you can grab the right fitting in 30 seconds instead of
          digging through a pile for 10 minutes, you complete more calls per
          day. More calls per day means more revenue. Budget $1,500-$4,000 for
          shelving and initial parts inventory.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="insurance">
        5. Plumbing Insurance
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Plumbing carries higher liability risk than many trades. Water damage
        from a bad connection can cost tens of thousands of dollars. Gas line
        work adds even more risk. Insurance is not optional — it is required
        for licensing in most states and for any commercial or property
        management work.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers property damage caused by your work — flooding from a bad
            fitting, damage to a customer&apos;s home, etc. Required by nearly
            every state for plumbing contractors.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $800-$2,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required in most states as soon as you hire your first employee.
            Plumbing has moderate risk factors — back injuries, burns, cuts,
            and exposure to sewage. Some states require it even for solo
            contractors.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $3,000-$6,000/year per employee</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Your personal auto policy will not cover accidents while driving to
            jobs or hauling equipment. A commercial auto policy covers your
            work vehicle and tools inside it.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,200-$3,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Surety Bond</h4>
          <p className="text-sm text-gray-700 mb-1">
            Many states require plumbers to carry a surety bond — typically
            $5,000 to $25,000. This protects customers if you fail to complete
            work or violate licensing regulations. You pay a small annual
            premium (1-5% of the bond amount).
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $100-$500/year for the premium</p>
        </div>
      </div>

      <TipBox title="Bundle Your Policies">
        <p>
          Get a Business Owner&apos;s Policy (BOP) that bundles general
          liability, commercial property, and business interruption coverage.
          This is usually cheaper than buying each policy separately. Ask your
          agent about contractor-specific BOP packages.
        </p>
      </TipBox>

      <AffiliateProviderCards
        category="insurance"
        heading="Where Plumbers Get Insurance Quotes"
        intro="Plumbing GL premiums vary widely between carriers. Water damage exposure makes shopping mandatory — get quotes from at least two of these before binding."
      />

      {/* Section 6 */}
      <SectionHeading id="business-structure">
        6. Business Structure
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Setting up your business entity correctly from the start protects your
        personal assets and makes tax time manageable. Here is the checklist:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Sole Proprietorship</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Simplest and cheapest to set up</li>
            <li>No separation between you and the business</li>
            <li>Personal assets at risk if a flood damages a customer&apos;s home</li>
            <li>Not recommended for plumbing due to high liability</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Separates your personal and business assets</li>
            <li>Protects your house and savings from business lawsuits</li>
            <li>Costs $50-$500 depending on your state</li>
            <li>Can elect S-Corp taxation to save on self-employment tax</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>After forming your LLC, complete these steps:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Get your EIN</strong> — Apply for free at IRS.gov. Takes five
          minutes. You need this for your business bank account and tax filings.
        </li>
        <li>
          <strong>Open a business checking account</strong> — All business
          income in, all business expenses out. Never mix with personal funds.
        </li>
        <li>
          <strong>Get a business credit card</strong> — Use for materials,
          fuel, and tools. Pay it off monthly. Simplifies expense tracking and
          builds business credit.
        </li>
        <li>
          <strong>Set up bookkeeping</strong> — QuickBooks, FreshBooks, or Wave
          (free). Track every dollar from day one. Set aside 25-30% of income
          for taxes and pay quarterly estimated taxes to avoid penalties.
        </li>
      </ul>

      <TipBox title="S-Corp Election for Tax Savings">
        <p>
          Once your plumbing business profits exceed $60,000 per year, talk to
          an accountant about S-Corp election for your LLC. This can save you
          thousands in self-employment taxes annually. Use our{" "}
          <Link href="/calculators/contractor-profit-margin/" className="text-brand-orange hover:underline">
            Profit Margin Calculator
          </Link>{" "}
          to track whether you have reached that threshold.
        </p>
      </TipBox>

      <AffiliateProviderCards
        category="llc"
        heading="LLC Formation Services for Plumbers"
        intro="If you'd rather not navigate your state's filing portal, these formation services handle the paperwork and act as your registered agent. DIY is fine too — every state lets you file online for the state fee alone."
      />

      {/* Section 7 */}
      <SectionHeading id="pricing">
        7. Pricing Plumbing Services
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pricing is where most new plumbing business owners leave money on the
        table. The key is to move away from hourly billing toward flat-rate
        pricing as quickly as possible. Flat-rate pricing rewards efficiency,
        creates predictable revenue, and eliminates customer anxiety about the
        meter running.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Common Plumbing Service Rates
      </h3>

      <CostTable
        rows={[
          { item: "Service call / diagnostic fee", cost: "$100-$200", notes: "Covers your trip and initial diagnosis" },
          { item: "Faucet replacement", cost: "$150-$350", notes: "Plus cost of faucet if customer-supplied" },
          { item: "Toilet repair", cost: "$100-$250", notes: "Internals, flange, wax ring" },
          { item: "Toilet installation", cost: "$250-$500", notes: "Including removal of old unit" },
          { item: "Water heater replacement", cost: "$800-$2,000", notes: "Labor only — tank and tankless vary" },
          { item: "Drain cleaning (main line)", cost: "$200-$500", notes: "Premium pricing for emergency/after-hours" },
          { item: "Drain cleaning (fixture)", cost: "$100-$250", notes: "Sink, shower, or tub" },
          { item: "Garbage disposal install", cost: "$150-$350", notes: "Plus cost of unit" },
          { item: "Sewer line camera inspection", cost: "$200-$500", notes: "High margin — equipment pays for itself quickly" },
          { item: "Emergency / after-hours calls", cost: "1.5x-2x standard", notes: "Charge a premium — you are available when others are not" },
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The pricing formula still applies:</strong>
      </p>
      <div className="bg-brand-gray rounded-xl p-5 my-6 font-mono text-center text-lg">
        Price = (Materials + Labor + Overhead) &times; (1 + Profit Margin)
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Use a flat-rate pricing book or build your own based on how long each
        task actually takes you. Track your actual time and costs on every job
        for the first six months to calibrate your pricing.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Use Our Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/calculators/plumbing-pipe-sizing/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Pipe Sizing Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
          <Link
            href="/calculators/hourly-rate/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Hourly Rate Calculator
          </Link>
          <Link
            href="/calculators/contractor-profit-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Profit Margin Calculator
          </Link>
        </div>
      </div>

      {/* Section 8 */}
      <SectionHeading id="get-customers">
        8. Getting Plumbing Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Plumbing has a major advantage over many trades: a large percentage of
        work is urgent. When a pipe bursts at 10pm, the homeowner is not
        comparison-shopping for three weeks. They are calling the first
        plumber they find. Your marketing strategy should capitalize on this
        urgency.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Priority Marketing Channels
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Business Profile</strong> — This is your number one
          lead source. When someone searches &quot;plumber near me&quot; or
          &quot;emergency plumber [city],&quot; Google&apos;s map pack is the first thing
          they see. Optimize your profile with photos, services, hours
          (include after-hours availability), and your service area.
        </li>
        <li>
          <strong>Google reviews</strong> — Ask every satisfied customer for a
          Google review. Text them the link right after the job. Plumbing
          customers are grateful when you fix their emergency — they will
          leave a review. 20+ reviews with 4.5+ stars puts you ahead of most
          local competitors.
        </li>
        <li>
          <strong>Emergency service marketing</strong> — Emphasize 24/7
          availability or extended hours on your website, Google profile, and
          vehicle wrap. Emergency calls command premium pricing and build
          customer loyalty.
        </li>
        <li>
          <strong>Builder and GC relationships</strong> — Connect with general
          contractors and home builders in your area. New construction
          plumbing provides steady, predictable work. Show up on time, do
          clean work, and you will get repeat calls.
        </li>
        <li>
          <strong>Property management contracts</strong> — Property managers
          need a reliable plumber on speed dial. Offer a maintenance agreement
          or preferred pricing. One property management company can provide
          dozens of calls per month.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Additional Lead Sources
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Local Services Ads</strong> — Pay-per-lead model.
          Google verified badge builds trust. Typical cost: $20-$60 per lead
          for plumbing.
        </li>
        <li>
          <strong>Nextdoor</strong> — Neighbors recommend plumbers constantly.
          Claim your business profile and stay active.
        </li>
        <li>
          <strong>Real estate agents</strong> — They need plumbers for
          pre-sale inspections, quick repairs before closing, and referrals to
          new homeowners.
        </li>
        <li>
          <strong>Vehicle wrap</strong> — Your van is a rolling billboard. A
          professional wrap with your phone number generates calls, especially
          while parked at job sites in residential neighborhoods.
        </li>
      </ul>

      <TipBox title="The Maintenance Agreement Advantage">
        <p>
          Offer annual plumbing maintenance agreements to residential customers:
          yearly inspection, water heater flush, and priority scheduling for
          $150-$250/year. This creates recurring revenue, fills slow periods,
          and gives you first call when they need repairs. 100 maintenance
          agreements at $200 each is $20,000 in predictable annual revenue.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. Plumbing Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Plumbing businesses have specific software needs that generic tools do
        not address well. You need scheduling that handles emergency calls and
        dispatching, flat-rate pricing integration, and the ability to send
        invoices from the field.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Scheduling & Dispatching</h4>
              <p className="text-sm text-gray-700 mt-1">
                Assign and route jobs, handle emergency calls, track
                technician locations. Critical once you have more than one
                truck on the road.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">$49-$199/mo</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Invoicing & Payments</h4>
              <p className="text-sm text-gray-700 mt-1">
                Send professional invoices on-site, accept credit card
                payments, and get paid faster. Stops you from chasing checks
                for weeks.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">$29-$99/mo</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Flat-Rate Pricing</h4>
              <p className="text-sm text-gray-700 mt-1">
                Built-in or integrated flat-rate pricing books let you
                present options to customers on the spot and close more work.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Often built-in</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        We have reviewed the best software options specifically for plumbing
        businesses — including ServiceTitan, Housecall Pro, Jobber, and more:
      </p>
      <div className="my-6">
        <Link
          href="/best/plumbing-software/"
          className="block text-center bg-brand-gray rounded-lg p-4 hover:bg-brand-orange hover:text-white transition-colors font-medium"
        >
          Best Plumbing Software Compared
        </Link>
      </div>

      {/* Section 10 */}
      <SectionHeading id="scaling">
        10. Scaling Your Plumbing Business
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A solo plumber can earn a good living, but real business growth comes
        from building a team. The plumbing trade has built-in scaling
        advantages: the apprenticeship system gives you a pipeline of trained
        workers, and the licensing structure means not just anyone can compete
        with you.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Growth stages:</strong>
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Hire Journeymen Plumbers</h4>
          <p className="text-sm text-gray-700">
            Your first hire should be a licensed journeyman who can run calls
            independently. This immediately doubles your capacity. Pay
            competitive wages ($25-$40/hour depending on your market) to
            attract quality plumbers. One good journeyman generating $1,500+
            per day in service revenue pays for themselves many times over.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Start an Apprenticeship Program</h4>
          <p className="text-sm text-gray-700">
            Train your own plumbers from scratch. Apprentices start at lower
            wages and learn your systems and standards. This is how you build a
            loyal team that does things your way. Register with your state
            apprenticeship program for structured training requirements.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Add Specialty Services</h4>
          <p className="text-sm text-gray-700">
            Expand your revenue by adding high-value specialties:
          </p>
          <ul className="text-sm text-gray-700 mt-2 space-y-1 list-disc pl-5">
            <li><strong>Gas fitting</strong> — Gas line installation and repair. Requires additional certification but commands premium rates.</li>
            <li><strong>Medical gas systems</strong> — Hospital and dental office piping. Specialized and high-paying.</li>
            <li><strong>Fire sprinkler systems</strong> — Growing demand due to code requirements. Steady commercial work.</li>
            <li><strong>Water treatment</strong> — Water softeners, filtration systems, and whole-house treatment. Recurring service revenue.</li>
            <li><strong>Hydronic heating</strong> — Radiant floor heating and boiler systems. Niche market with less competition.</li>
          </ul>
        </div>
      </div>

      <TipBox title="The Two-Truck Milestone">
        <p>
          Going from one truck to two is the hardest growth step. You go from
          doing the work yourself to managing someone else doing the work. Get
          your systems (pricing, scheduling, invoicing) locked in before
          adding that second truck. Use our{" "}
          <Link href="/calculators/hourly-rate/" className="text-brand-orange hover:underline">
            Hourly Rate Calculator
          </Link>{" "}
          to make sure your pricing supports the overhead of a second
          technician.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="mistakes">
        11. Common Mistakes to Avoid
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Not getting proper permits",
            fix: "Pulling permits is a legal requirement for most plumbing work. Skipping permits to save time or money risks fines, license suspension, and liability for any issues. Always pull permits — it also protects you if something goes wrong later.",
          },
          {
            mistake: "Underpricing emergency calls",
            fix: "Emergency and after-hours calls should be billed at 1.5x to 2x your standard rate. You are providing a premium service — immediate availability when pipes are flooding a home at midnight. Customers expect to pay more and will respect you for it.",
          },
          {
            mistake: "Ignoring maintenance agreements",
            fix: "One-time service calls create a feast-or-famine revenue pattern. Maintenance agreements create predictable recurring revenue, fill slow periods, and make your business more valuable if you ever sell. Start offering them from day one.",
          },
          {
            mistake: "Carrying insufficient parts inventory",
            fix: "Every trip back to the supply house costs you time and money. Stock your truck with the 50 most common parts and fittings. Track which parts you use most and keep them stocked. Completing repairs in one visit builds your reputation and profitability.",
          },
          {
            mistake: "Skipping the camera inspection",
            fix: "A sewer camera pays for itself quickly. Diagnosing problems accurately before starting work prevents costly mistakes and builds customer trust. It also creates upsell opportunities when you show the customer video of their deteriorating pipes.",
          },
          {
            mistake: "Not specializing early enough",
            fix: "Trying to do everything — residential, commercial, new construction, and service — spreads you thin. Pick your most profitable niche and dominate it before expanding. Service and repair plumbing typically has the best margins for small shops.",
          },
          {
            mistake: "Competing on price instead of service",
            fix: "The plumber who answers the phone, shows up on time, explains the problem clearly, and cleans up after the job can charge more than the cheapest guy on Craigslist. Compete on reliability, communication, and professionalism — not price.",
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
        Total Startup Costs Summary
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a realistic breakdown of what it costs to start a plumbing
        business. Your actual costs depend on your state, what tools you
        already own, and whether you need to buy a vehicle.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50-$500", notes: "One-time" },
          { item: "Plumbing license + exam fees", cost: "$200-$1,000", notes: "Varies by state" },
          { item: "Surety bond", cost: "$100-$500", notes: "Annual premium" },
          { item: "General liability insurance", cost: "$800-$2,500", notes: "Annual" },
          { item: "Commercial auto insurance", cost: "$1,200-$3,000", notes: "Annual" },
          { item: "Tools and equipment", cost: "$10,000-$25,000", notes: "Less if you own basics from apprenticeship" },
          { item: "Vehicle (used van or truck)", cost: "$10,000-$45,000", notes: "If needed" },
          { item: "Van shelving and organization", cost: "$1,500-$4,000", notes: "One-time" },
          { item: "Initial parts inventory", cost: "$2,000-$5,000", notes: "Common fittings and repair parts" },
          { item: "Website + Google Business Profile", cost: "$0-$400", notes: "Year one" },
          { item: "Vehicle wrap / signage", cost: "$500-$3,000", notes: "One-time" },
          { item: "Accounting software", cost: "$0-$360", notes: "Annual" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $15,000-$40,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          Plumbing has a higher startup cost than some trades due to the
          specialized tools and parts inventory required. However, if you are
          coming out of an apprenticeship with your own hand tools and a
          reliable vehicle, you can start on the lower end. The investment pays
          back quickly — a single busy week of service calls can generate
          $5,000-$10,000 in revenue.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Plumbing Business?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free tools to plan your business, price your services, and
          size your jobs. Everything you need is right here.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/plumbing-pipe-sizing/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Pipe Sizing Calculator
          </Link>
          <Link
            href="/best/plumbing-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare Plumbing Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
