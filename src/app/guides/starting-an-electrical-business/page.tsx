import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import AffiliateProviderCards from "@/components/AffiliateProviderCards";

export const metadata: Metadata = {
  title:
    "How to Start an Electrical Contracting Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting an electrical contracting business. Learn about licensing, essential tools, insurance, pricing electrical work, getting customers, and scaling your electrical business.",
};

const toc = [
  { id: "industry-overview", label: "Electrical Industry Overview" },
  { id: "licensing-path", label: "Licensing Path" },
  { id: "essential-tools", label: "Essential Electrical Tools" },
  { id: "vehicle-inventory", label: "Vehicle & Inventory" },
  { id: "insurance", label: "Insurance & Bonding" },
  { id: "business-structure", label: "Business Structure" },
  { id: "pricing", label: "Pricing Electrical Work" },
  { id: "getting-customers", label: "Getting Customers" },
  { id: "software", label: "Electrical Business Software" },
  { id: "scaling", label: "Scaling Your Electrical Business" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" },
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

export default function StartingElectricalBusiness() {
  return (
    <GuideLayout
      title="How to Start an Electrical Contracting Business (2026 Guide)"
      description="A complete guide to starting your own electrical contracting business — from apprenticeship to master electrician license, essential tools, pricing, and landing your first customers."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        The electrical trade is one of the highest-demand, highest-margin
        contracting specialties you can enter. Between EV charger installations,
        solar panel systems, smart home wiring, and aging residential
        infrastructure, electricians are booked out months in advance across most
        of the country.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        This guide walks you through every step of starting your own electrical
        contracting business — from the licensing path to pricing your first
        jobs and scaling beyond a one-person operation.
      </p>

      {/* Section 1 */}
      <SectionHeading id="industry-overview">
        1. Electrical Industry Overview
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. electrical contracting market continues to grow faster than
        most other trades. Several major trends are driving demand well into
        the 2030s:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">EV Charger Installations</h3>
          <p className="text-sm text-gray-700">
            With EV adoption accelerating, Level 2 home charger installations
            ($800&ndash;$2,500 per job) and commercial charging stations are a
            fast-growing revenue stream for electricians.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Solar & Battery Storage</h3>
          <p className="text-sm text-gray-700">
            Residential and commercial solar installations require licensed
            electricians for panel connections, inverter wiring, and utility
            interconnects. Battery backup systems add another revenue layer.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Smart Homes & Automation</h3>
          <p className="text-sm text-gray-700">
            Whole-home automation, smart panels, lighting control systems, and
            structured wiring for new construction are premium-priced services
            that homeowners increasingly demand.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Data Centers & Commercial</h3>
          <p className="text-sm text-gray-700">
            Data center construction is booming. Commercial electrical work
            including switchgear, transformers, and high-voltage distribution
            commands premium rates and long-term contracts.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Average revenue:</strong> A solo electrician typically generates
        $80,000&ndash;$150,000 in annual revenue. A small shop with 2&ndash;5
        electricians can hit $500,000&ndash;$1.5M. The residential vs. commercial
        split matters — commercial work has higher revenue per job but requires
        more licensing, bonding, and upfront capital.
      </p>

      <TipBox title="Residential vs. Commercial — Know the Difference">
        <p>
          Residential work (panel upgrades, rewiring, outlet installs) is easier
          to break into but has lower ticket sizes. Commercial work (tenant
          buildouts, new construction, industrial) pays more per job but
          requires larger crews, higher bonding, and longer payment cycles.
          Most new electrical contractors start residential and add commercial
          as they grow.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="licensing-path">
        2. Licensing Path
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical work is one of the most heavily regulated trades — and for
        good reason. Improper wiring causes fires. Every state requires
        electricians to be licensed, and the path typically takes 4+ years.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
            <h4 className="font-bold text-brand-blue">Apprentice Electrician (4&ndash;5 years)</h4>
          </div>
          <p className="text-sm text-gray-700">
            Work under a licensed journeyman or master electrician. Typically
            requires 8,000&ndash;10,000 hours of on-the-job training plus
            classroom instruction through a union (IBEW), trade school, or
            non-union apprenticeship program. You earn while you learn —
            apprentice wages typically start at $15&ndash;$22/hour.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
            <h4 className="font-bold text-brand-blue">Journeyman Electrician</h4>
          </div>
          <p className="text-sm text-gray-700">
            After completing your apprenticeship, pass the journeyman exam.
            This tests your knowledge of the National Electrical Code (NEC),
            electrical theory, and local regulations. A journeyman can work
            independently but may not pull permits or run a business in some
            states without a master license.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
            <h4 className="font-bold text-brand-blue">Master Electrician</h4>
          </div>
          <p className="text-sm text-gray-700">
            Most states require 1&ndash;3 additional years as a journeyman
            before you can sit for the master electrician exam. The master
            license allows you to pull permits, supervise other electricians,
            and operate your own electrical contracting business. This is the
            license you need to start your company.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand-blue text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
            <h4 className="font-bold text-brand-blue">Electrical Contractor License</h4>
          </div>
          <p className="text-sm text-gray-700">
            Separate from the master electrician license in many states. This
            is the business license that allows you to bid jobs, pull permits
            under your company name, and operate commercially. Requires proof
            of insurance, bonding, and sometimes a financial statement.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>NEC Code knowledge is non-negotiable.</strong> The National
        Electrical Code is updated every three years (current edition: NEC
        2023). Most states adopt it within 1&ndash;3 years of publication.
        Your licensing exams are based on it, your inspectors enforce it, and
        your insurance depends on your compliance with it.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Continuing education:</strong> Most states require 12&ndash;24
        hours of continuing education per renewal cycle (typically every 2&ndash;3
        years). This covers NEC updates, safety protocols, and emerging
        technologies. Budget $200&ndash;$500/year for CE courses.
      </p>

      <TipBox title="Specialty Certifications That Increase Your Rates">
        <p>
          Consider adding certifications in EV charger installation (EVITP),
          solar PV installation (NABCEP), fire alarm systems, or low-voltage
          data cabling. Each specialty lets you charge premium rates and
          access jobs that general electricians cannot bid on.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="essential-tools">
        3. Essential Electrical Tools
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your tools are your livelihood. Quality electrical tools pay for
        themselves in reliability and safety. Here is what you need to outfit
        a professional electrical contracting operation:
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Testing & Diagnostic Equipment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Digital multimeter (Fluke 87V or equivalent)</strong> — Your
          most important tool. Measures voltage, current, resistance,
          continuity. Do not cheap out on this.
        </li>
        <li>
          <strong>Clamp meter</strong> — Measures current without breaking the
          circuit. Essential for troubleshooting and load calculations.
        </li>
        <li>
          <strong>Non-contact voltage tester</strong> — Quick safety check
          before touching any wire. Carry one at all times.
        </li>
        <li>
          <strong>Circuit tracer / tone generator</strong> — Identifies which
          breaker controls which circuit. Saves hours of guesswork.
        </li>
        <li>
          <strong>Megohmmeter (Megger)</strong> — Tests insulation resistance.
          Required for commercial and industrial work.
        </li>
        <li>
          <strong>GFCI tester</strong> — Verifies ground fault protection is
          working properly. Needed for every residential job.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hand Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Wire strippers</strong> (multiple gauges) — Klein or Knipex
          are industry standard
        </li>
        <li>
          <strong>Lineman&apos;s pliers</strong> — Heavy-duty pliers for cutting,
          twisting, and pulling wire
        </li>
        <li>
          <strong>Needle-nose pliers</strong> — For tight spaces and
          terminal work
        </li>
        <li>
          <strong>Side cutters / diagonal pliers</strong> — Clean wire cuts
        </li>
        <li>
          <strong>Conduit benders</strong> (1/2&quot;, 3/4&quot;, 1&quot;) — For EMT and
          rigid conduit. Learn to bend accurate 90s, offsets, and saddles.
        </li>
        <li>
          <strong>Fish tapes and fish rods</strong> — For pulling wire through
          walls and conduit runs
        </li>
        <li>
          <strong>Cable pullers</strong> — Powered cable pullers for long runs
          and large gauge wire
        </li>
        <li>
          <strong>Knockout punch set</strong> — For making clean holes in
          electrical panels and boxes
        </li>
        <li>
          <strong>Insulated screwdrivers</strong> — 1000V-rated for working
          near live circuits
        </li>
        <li>
          <strong>Torpedo level and tape measure</strong> — For straight
          conduit runs and box placement
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Power Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Cordless drill/driver</strong> — Milwaukee, DeWalt, or Makita
          18V/20V platform. Get two batteries minimum.
        </li>
        <li>
          <strong>Rotary hammer drill</strong> — For drilling through concrete
          and masonry
        </li>
        <li>
          <strong>Reciprocating saw</strong> — Cutting through studs, conduit,
          and old work
        </li>
        <li>
          <strong>Band saw (portable)</strong> — Cleaner conduit cuts than a
          recip saw
        </li>
        <li>
          <strong>Hole saw kit</strong> — Various sizes for running cable
          through studs and joists
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Testing equipment (multimeter, clamp meter, testers)", cost: "$500–$1,500", notes: "Buy quality — Fluke, Klein" },
          { item: "Hand tools (strippers, pliers, benders, fish tapes)", cost: "$1,500–$3,500", notes: "Klein, Knipex, Ideal" },
          { item: "Conduit bending set (1/2\" to 1\")", cost: "$300–$800", notes: "Greenlee, Klein" },
          { item: "Power tools (drill, hammer drill, saw)", cost: "$1,500–$3,000", notes: "Pick one battery platform" },
          { item: "Cable pulling equipment", cost: "$500–$2,000", notes: "Manual or powered" },
          { item: "Knockout punch set", cost: "$200–$500", notes: "Greenlee or Klein" },
          { item: "Safety equipment (PPE, lockout/tagout)", cost: "$200–$500", notes: "Non-negotiable" },
          { item: "Tool bags, pouches, organizers", cost: "$200–$500", notes: "Veto Pro Pac, Klein" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total tool investment: $8,000&ndash;$20,000
        </p>
        <p className="text-gray-700 text-sm">
          Most electricians coming out of an apprenticeship already own
          $3,000&ndash;$5,000 in hand tools. Budget $8K&ndash;$12K if you have
          basic tools, $15K&ndash;$20K if starting from scratch or adding
          commercial-grade equipment.
        </p>
      </div>

      {/* Section 4 */}
      <SectionHeading id="vehicle-inventory">
        4. Vehicle & Inventory
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your van or truck is your mobile workshop. A well-organized vehicle
        saves time on every job and projects professionalism to customers.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Vehicle Setup
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most electrical contractors choose a cargo van (Ford Transit, Ram
        ProMaster, Mercedes Sprinter) or a full-size truck with a utility body.
        Cargo vans are more popular because they protect your materials from
        weather and theft, and allow for organized shelving.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Shelving and bins</strong> — Adrian Steel, Weather Guard, or
          Ranger Design upfitting. Organize by material type (wire, devices,
          boxes, connectors).
        </li>
        <li>
          <strong>Ladder rack</strong> — Roof-mounted for extension ladders.
          Get a drop-down rack for ergonomic loading.
        </li>
        <li>
          <strong>Wire reel holder</strong> — Mounted in the van for dispensing
          wire on-site without tangling.
        </li>
        <li>
          <strong>Power inverter</strong> — Run chargers and small tools from
          your vehicle.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Stock Inventory
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Keep common materials stocked in your van so you do not make supply
        house runs on every job:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Wire</strong> — 14/2, 12/2, 10/2, 10/3, 6/3 NM-B (Romex).
          Keep 250&apos; rolls of the most common sizes.
        </li>
        <li>
          <strong>Panels and breakers</strong> — Stock common breaker types
          for your preferred panel brand (Square D, Eaton, Siemens). Carry a
          few 20A and 15A single-pole breakers at minimum.
        </li>
        <li>
          <strong>Devices</strong> — Receptacles (15A, 20A), GFCI outlets,
          switches (single-pole, 3-way, dimmers), cover plates.
        </li>
        <li>
          <strong>Boxes and connectors</strong> — Old work boxes, new work
          boxes, junction boxes, NM connectors, wire nuts, push-in connectors.
        </li>
        <li>
          <strong>Conduit and fittings</strong> — 1/2&quot; and 3/4&quot; EMT, couplings,
          connectors, straps, LB fittings.
        </li>
        <li>
          <strong>Fasteners and supports</strong> — Tapcons, toggle bolts,
          cable staples, conduit straps, zip ties.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Van (used cargo van)", cost: "$15,000–$35,000", notes: "Ford Transit, Ram ProMaster" },
          { item: "Van upfitting (shelving, bins, ladder rack)", cost: "$2,000–$6,000", notes: "Adrian Steel, Ranger Design" },
          { item: "Initial wire stock", cost: "$1,000–$3,000", notes: "Common NM-B and THHN sizes" },
          { item: "Breakers, panels, devices", cost: "$500–$1,500", notes: "Restock as used" },
          { item: "Conduit and fittings", cost: "$300–$800", notes: "EMT and PVC basics" },
          { item: "Boxes, connectors, misc.", cost: "$300–$600", notes: "Old work, new work, junction" },
        ]}
      />

      <TipBox title="Open a Supply House Account">
        <p>
          Set up accounts with your local electrical supply houses (Graybar,
          Rexel, WESCO, CED). You will get contractor pricing (typically
          20&ndash;40% off list), net-30 payment terms, and the ability to
          order specialty materials quickly. Relationship with your supply
          house rep saves you money on every job.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="insurance">
        5. Insurance & Bonding
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical contractors need more insurance coverage than most trades.
        Faulty wiring can cause fires, electrocution, and property damage — so
        your insurance requirements and premiums reflect that risk.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers third-party property damage and bodily injury caused by
            your work. If a wiring defect causes a house fire, this policy
            responds. Required by every state and nearly every customer.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,200&ndash;$3,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required in most states once you have employees. Electrical work
            has higher workers comp rates than many trades due to
            electrocution and fall risk. Even solo electricians may be required
            to carry it in some states.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: varies by state and payroll (higher than general contracting)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers your van or truck used for business. Personal auto policies
            exclude business use — if you get in an accident on the way to a
            job site, your personal policy may deny the claim.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,500&ndash;$3,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Errors & Omissions (E&O) Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers claims arising from design errors, code violations, or
            incorrect installations. If your work fails an inspection or
            causes a problem due to a design mistake, E&O responds. Especially
            important for electricians doing panel design and load
            calculations.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $500&ndash;$1,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Surety Bond</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required by most states for electrical contractor licensing. The
            bond protects consumers if you fail to complete a job or violate
            code. Bond amounts vary by state — typically $5,000&ndash;$25,000.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $100&ndash;$500/year (1&ndash;3% of bond amount)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Tools & Equipment Coverage</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers theft or damage to your tools. Given that your tool
            investment is $8K&ndash;$20K, this is worth the premium.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $300&ndash;$700/year</p>
        </div>
      </div>

      <CostTable
        rows={[
          { item: "General liability", cost: "$1,200–$3,500/yr", notes: "Higher than general contracting due to fire risk" },
          { item: "Workers comp (solo)", cost: "$800–$2,500/yr", notes: "Required in some states even for solo" },
          { item: "Commercial auto", cost: "$1,500–$3,500/yr", notes: "Per vehicle" },
          { item: "E&O insurance", cost: "$500–$1,500/yr", notes: "Important for code/design work" },
          { item: "Surety bond", cost: "$100–$500/yr", notes: "Required for licensing in most states" },
          { item: "Tools coverage", cost: "$300–$700/yr", notes: "Rider on GL policy or standalone" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total insurance cost: $4,400&ndash;$12,200/year
        </p>
        <p className="text-gray-700 text-sm">
          This is a real cost of doing business. Budget $400&ndash;$1,000/month
          for insurance. Get quotes from multiple providers and look for
          electrical contractor-specific policies that bundle coverage.
        </p>
      </div>

      <AffiliateProviderCards
        category="insurance"
        heading="Where Electricians Get Insurance Quotes"
        intro="Electrical work is high-liability — fire risk, code violations, and inspection issues. Get quotes from at least two carriers before binding a policy."
      />

      {/* Section 6 */}
      <SectionHeading id="business-structure">
        6. Business Structure
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Setting up the business entity is straightforward. Do this before you
        start any work under your own company name.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">Form an LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">
            An LLC separates your personal assets from business liabilities.
            Electrical work carries significant liability risk — a wiring
            error that causes a fire could generate claims far beyond your
            insurance limits. Your LLC protects your home, savings, and
            personal property.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>File with your state&apos;s Secretary of State ($50&ndash;$500 depending on state)</li>
            <li>Name your LLC (e.g., &quot;Smith Electric LLC&quot;)</li>
            <li>Draft a simple operating agreement</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>After forming your LLC:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Get your EIN</strong> — Apply for free on IRS.gov. Takes 5
          minutes. You need this for your business bank account, tax filings,
          and hiring employees.
        </li>
        <li>
          <strong>Open a business checking account</strong> — Separate
          business and personal finances from day one. All job payments go in,
          all business expenses go out. This protects your LLC status.
        </li>
        <li>
          <strong>Get a business credit card</strong> — Use it for materials,
          fuel, and supply house purchases. Builds business credit and
          simplifies expense tracking.
        </li>
        <li>
          <strong>Set aside 25&ndash;30% for taxes</strong> — Nobody withholds
          taxes for you. Pay quarterly estimated taxes to avoid penalties.
        </li>
      </ul>

      <TipBox title="S-Corp Election for Tax Savings">
        <p>
          Once your electrical business is netting $60K+ in profit, talk to an
          accountant about electing S-Corp status for your LLC. This can save
          you thousands per year in self-employment taxes. Use our{" "}
          <Link href="/calculators/self-employment-tax/" className="text-brand-orange hover:underline">
            Self-Employment Tax Calculator
          </Link>{" "}
          to estimate your current tax burden.
        </p>
      </TipBox>

      <AffiliateProviderCards
        category="llc"
        heading="LLC Formation Services for Electricians"
        intro="If you'd rather not navigate your state's filing portal, these formation services handle the paperwork and act as your registered agent. DIY is fine too — every state lets you file online for the state fee alone."
      />

      {/* Section 7 */}
      <SectionHeading id="pricing">
        7. Pricing Electrical Work
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical work is typically priced either per-point (residential) or
        by the job (commercial). Knowing your numbers is critical — materials
        costs fluctuate (especially copper wire), and underbidding a job can
        eat your entire profit.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Common Residential Pricing
      </h3>
      <CostTable
        rows={[
          { item: "Install new outlet", cost: "$150–$350", notes: "Depends on existing wiring access" },
          { item: "Install new circuit", cost: "$250–$500", notes: "From panel to location" },
          { item: "GFCI outlet install/upgrade", cost: "$120–$250", notes: "Kitchen, bath, exterior" },
          { item: "Ceiling fan install (existing wiring)", cost: "$150–$300", notes: "New wiring adds $100–$200" },
          { item: "Panel upgrade (100A to 200A)", cost: "$1,800–$3,500", notes: "High-margin job, 4–8 hours" },
          { item: "Whole-house rewire", cost: "$8,000–$20,000", notes: "Depends on size and access" },
          { item: "EV charger installation (Level 2)", cost: "$800–$2,500", notes: "Fast-growing demand" },
          { item: "Recessed lighting (per light)", cost: "$150–$300", notes: "New construction vs. retrofit" },
          { item: "Smoke/CO detector install", cost: "$100–$200", notes: "Per unit, hardwired" },
          { item: "Sub-panel install", cost: "$1,200–$2,500", notes: "Garage, workshop, addition" },
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Hourly rate approach:</strong> Many electricians use a base
        hourly rate of $75&ndash;$150/hour for service calls and
        troubleshooting. This rate needs to cover your labor, overhead,
        vehicle costs, insurance, and profit. Do not set your rate by looking
        at what you want to earn per hour — calculate what you need to charge
        to cover all costs and hit your profit target.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Electrical Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/calculators/electrical-load/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Electrical Load Calculator
          </Link>
          <Link
            href="/calculators/voltage-drop/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Voltage Drop Calculator
          </Link>
          <Link
            href="/calculators/wire-size/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Wire Size Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
        </div>
      </div>

      <TipBox title="Always Markup Materials">
        <p>
          Standard practice is to markup materials 15&ndash;30% on top of your
          cost. You are providing the service of sourcing, transporting, and
          warranting those materials. Do not pass materials through at cost —
          that is leaving money on the table. Use our{" "}
          <Link href="/calculators/markup-margin/" className="text-brand-orange hover:underline">
            Markup & Margin Calculator
          </Link>{" "}
          to set your markup percentages.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="getting-customers">
        8. Getting Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical work has a built-in advantage: it is required by code and
        can only be done by licensed professionals. Your competition is other
        licensed electricians, not handymen. Here is how to build a steady
        pipeline of work.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Google Business Profile (Most Important)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a homeowner searches &quot;electrician near me,&quot; Google shows the
        map pack. Your Google Business Profile determines whether you show up.
        Optimize it with your services, service area, photos of your work
        (panel upgrades, EV charger installs, before/after shots), and
        reviews. Aim for 20+ reviews with a 4.8+ rating.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Builder & General Contractor Relationships
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Builders and GCs need reliable electrical subs for every project. One
        strong relationship with a busy builder can fill your schedule. Reach
        out to local homebuilders, remodelers, and general contractors.
        Deliver quality work on time — word spreads fast among GCs.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Property Management Companies
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Property managers have ongoing electrical needs — tenant turnovers,
        code compliance, maintenance. They value reliability and
        responsiveness above price. Get on their preferred vendor list for
        steady, recurring work.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Commercial Contracts
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Retail chains, restaurants, office buildings, and industrial
        facilities need electrical maintenance and buildout work. These
        contracts provide predictable revenue. Start by bidding smaller
        commercial jobs and build a track record.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Solar Installer Partnerships
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many solar installation companies need licensed electricians for the
        electrical interconnection work — panel upgrades, meter bases, and
        utility connections. Partner with local solar installers for a steady
        stream of high-ticket jobs without having to find the customers
        yourself.
      </p>

      <TipBox title="The Electrician's Referral Advantage">
        <p>
          Electrical work has one of the highest referral rates in contracting.
          Homeowners do not switch electricians casually — once they find a
          reliable, licensed electrician, they keep coming back and tell their
          neighbors. Every satisfied customer is a long-term referral source.
          Ask for Google reviews after every job.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. Electrical Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The right software saves hours per week on estimating, invoicing,
        scheduling, and job tracking. Electrical contractors have specific
        needs — flat-rate pricing books, material markup, permit tracking,
        and multi-tech scheduling.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        We have reviewed and compared the top software options specifically
        for electrical contractors:
      </p>

      <div className="my-6">
        <Link
          href="/best/electrical-contractor-software/"
          className="block text-center bg-brand-blue text-white rounded-lg p-4 hover:bg-brand-blue/90 transition-colors font-semibold text-lg"
        >
          Best Electrical Contractor Software (2026 Comparison)
        </Link>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        At minimum, look for software that handles:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Estimating with material pricing</strong> — Build estimates
          using real material costs from your supply house
        </li>
        <li>
          <strong>Invoicing and payment processing</strong> — Send
          professional invoices and accept credit card payments
        </li>
        <li>
          <strong>Scheduling and dispatching</strong> — Assign techs to jobs,
          track time, manage your calendar
        </li>
        <li>
          <strong>Customer management (CRM)</strong> — Track customer history,
          follow up on quotes, manage recurring maintenance
        </li>
        <li>
          <strong>QuickBooks integration</strong> — Sync with your accounting
          for clean books at tax time
        </li>
      </ul>

      {/* Section 10 */}
      <SectionHeading id="scaling">
        10. Scaling Your Electrical Business
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Once you are consistently booked out 2&ndash;3 weeks, it is time to
        scale. Electrical contracting scales well because you can add licensed
        electricians and multiply your revenue without being on every job.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hiring Electricians
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your first hire should be a journeyman electrician who can work
        independently. In most states, your master license covers work
        performed by journeymen and apprentices under your supervision.
        Start with one journeyman, then add apprentices as your volume grows.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Journeyman electrician</strong> — Can work independently,
          pull some permits. Typical wage: $25&ndash;$40/hour depending on
          market.
        </li>
        <li>
          <strong>Apprentice</strong> — Lower cost ($15&ndash;$22/hour) but
          needs supervision. Great for helper tasks, wire pulling, and
          learning.
        </li>
        <li>
          <strong>Office/admin support</strong> — Once you have 3+ techs,
          you need someone answering phones, scheduling, and following up on
          invoices.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Bidding Commercial Jobs
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Commercial electrical work is where the big revenue lives. Tenant
        buildouts, new construction, and industrial installations can be
        $50K&ndash;$500K+ jobs. You need accurate estimating skills, strong
        project management, and the bonding capacity to support these projects.
        Start with smaller commercial jobs ($10K&ndash;$50K) and build your
        bonding capacity over time.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Adding Low-Voltage & Data Cabling
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Low-voltage work (network cabling, security systems, audio/video, fire
        alarm) is a natural add-on for electrical contractors. It typically
        requires a separate low-voltage license but has good margins and
        recurring service revenue. Structured cabling for offices and data
        rooms is especially profitable.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Solar Installation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many electrical contractors add solar installation as a service line.
        With a NABCEP certification and your existing electrical license, you
        can install complete solar PV systems rather than just doing the
        electrical interconnection for other installers. This captures the
        full project revenue instead of just the electrical portion.
      </p>

      <TipBox title="Grow Revenue Before Growing Your Crew">
        <p>
          Each electrician you add should generate 2.5&ndash;3x their fully
          loaded cost in revenue. If a journeyman costs you $70K/year in wages,
          benefits, workers comp, and vehicle costs, they need to produce
          $175K&ndash;$210K in billable work to justify the hire. Track
          revenue per technician closely.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="common-mistakes">
        11. Common Mistakes to Avoid
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Underbidding commercial jobs",
            fix: "Commercial electrical work is complex — conduit runs are longer, code requirements are stricter, and change orders are common. Pad your estimates by 10–15% for contingencies. Eating a loss on a $100K commercial job can sink a small company.",
          },
          {
            mistake: "Not tracking material costs per job",
            fix: "Wire prices fluctuate with copper markets. If you quote a job based on last month's prices and copper spikes 20%, your margin evaporates. Use real-time pricing from your supply house and add a material escalation clause to large proposals.",
          },
          {
            mistake: "Ignoring NEC code updates",
            fix: "The NEC updates every three years, and states adopt changes on their own schedule. Failing an inspection because you missed a code change costs you time, credibility, and money. Stay current with CE courses and subscribe to code update bulletins.",
          },
          {
            mistake: "Pricing too low to win residential work",
            fix: "Competing on price attracts the worst customers and kills your margins. Compete on reliability, professionalism, and speed instead. Homeowners will pay more for an electrician who shows up on time, communicates clearly, and cleans up after the job.",
          },
          {
            mistake: "Skipping the permit on small jobs",
            fix: "It is tempting to skip permits on minor residential work. Do not. Unpermitted work is a liability nightmare if something goes wrong. It also puts your license at risk if the inspector catches it.",
          },
          {
            mistake: "Not carrying enough insurance",
            fix: "Electrical work has higher liability than most trades. A wiring defect that causes a fire can result in claims that exceed basic policy limits. Carry adequate coverage and consider an umbrella policy once you have employees.",
          },
          {
            mistake: "Doing everything yourself as you grow",
            fix: "Many electricians resist hiring because they think nobody does the work as well as they do. That may be true — but you cannot scale by working in the business. Hire good people, train them to your standards, and shift your time to running the business.",
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
        Here is a realistic breakdown of what it costs to start an electrical
        contracting business. Your actual cost depends on whether you already
        own tools and a vehicle from your apprenticeship.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50–$500", notes: "One-time" },
          { item: "Master electrician license + exam", cost: "$200–$800", notes: "Varies by state" },
          { item: "Contractor license + bond", cost: "$300–$1,500", notes: "Varies by state" },
          { item: "General liability insurance", cost: "$1,200–$3,500", notes: "Annual" },
          { item: "Commercial auto insurance", cost: "$1,500–$3,500", notes: "Annual" },
          { item: "E&O insurance", cost: "$500–$1,500", notes: "Annual" },
          { item: "Tools and equipment", cost: "$8,000–$20,000", notes: "Less if you own basics already" },
          { item: "Vehicle (used cargo van)", cost: "$15,000–$35,000", notes: "Skip if you have one" },
          { item: "Van upfitting", cost: "$2,000–$6,000", notes: "Shelving, bins, ladder rack" },
          { item: "Initial material stock", cost: "$2,000–$5,000", notes: "Wire, devices, breakers, conduit" },
          { item: "Website", cost: "$0–$400", notes: "Year one (builder + domain)" },
          { item: "Accounting software", cost: "$0–$360", notes: "Annual" },
          { item: "Marketing (first 3 months)", cost: "$0–$1,500", notes: "Google Ads, signs, uniforms" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $15,000&ndash;$45,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          If you already own tools and a vehicle from your apprenticeship, you
          can start for under $10,000. The biggest variables are your vehicle
          and tool inventory. Many electricians keep working as a journeyman
          while building their business on evenings and weekends to fund the
          startup costs.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Electrical Business?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free calculators to plan your pricing, estimate load
          requirements, and size your projects. Everything you need to run
          the numbers is right here.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/electrical-contractor-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare Electrical Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
