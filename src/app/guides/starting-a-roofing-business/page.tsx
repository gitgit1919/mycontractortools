import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import AffiliateProviderCards from "@/components/AffiliateProviderCards";

export const metadata: Metadata = {
  title:
    "How to Start a Roofing Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting a roofing business. Learn about roofing licenses, manufacturer certifications, startup equipment costs, pricing per square, insurance, getting customers, and scaling your roofing company.",
};

const toc = [
  { id: "roofing-industry-overview", label: "Roofing Industry Overview" },
  { id: "licenses-certifications", label: "Licensing & Certifications" },
  { id: "tools-equipment", label: "Essential Roofing Tools & Equipment" },
  { id: "vehicle-equipment", label: "Vehicle & Equipment Setup" },
  { id: "insurance", label: "Roofing Insurance" },
  { id: "business-structure", label: "Business Structure & Registration" },
  { id: "pricing", label: "Pricing Roofing Jobs" },
  { id: "get-customers", label: "Getting Roofing Customers" },
  { id: "software", label: "Roofing Business Software" },
  { id: "scaling", label: "Scaling Your Roofing Business" },
  { id: "mistakes", label: "Common Roofing Business Mistakes" },
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

export default function StartingRoofingBusiness() {
  return (
    <GuideLayout
      title="How to Start a Roofing Business (2026 Guide)"
      description="A complete, step-by-step guide to starting your own roofing business — from licensing and manufacturer certifications to pricing per square, landing your first jobs, and scaling to multiple crews."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Roofing is one of the highest-revenue trades you can start. Every
        building has a roof, every roof eventually needs replacing, and storm
        damage creates urgent demand that keeps roofers busy year-round in
        many markets. If you have the skills and the stomach for heights,
        this guide covers everything you need to handle the business side.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you are leaving a roofing crew to start your own company,
        adding roofing to an existing contracting business, or starting
        fresh, the fundamentals are the same: get licensed, get certified
        by manufacturers, get properly insured, and build a reputation for
        quality work.
      </p>

      {/* Section 1 */}
      <SectionHeading id="roofing-industry-overview">
        1. Roofing Industry Overview
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. roofing market exceeds $60 billion annually, driven by a
        combination of storm damage repair, new construction, and the
        natural re-roofing cycle. Several factors make roofing one of the
        most consistently in-demand trades:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Re-roofing cycle</strong> — Asphalt shingles, the most
          common residential roofing material, last 20 to 25 years. Homes
          built or re-roofed in the early 2000s are entering the
          replacement window now. This cycle alone creates steady demand
          regardless of weather or the economy.
        </li>
        <li>
          <strong>Storm damage</strong> — Hail, wind, and hurricanes
          generate billions in roofing insurance claims every year.
          Insurance restoration work can spike revenue dramatically after
          major weather events. Markets like Texas, Florida, Colorado, and
          the Midwest see consistent storm activity.
        </li>
        <li>
          <strong>New construction</strong> — Every new home and commercial
          building needs a roof. As housing starts remain strong, new
          construction roofing provides steady project flow for contractors
          who build builder relationships.
        </li>
        <li>
          <strong>Seasonal patterns</strong> — Roofing is busiest from
          spring through fall in most markets. Winter slows production in
          northern states but remains active in the South and Southwest.
          Smart roofing businesses use the off-season for repairs, gutter
          work, and sales pipeline building.
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$60B+</p>
          <p className="text-sm text-gray-600 mt-1">U.S. roofing market size</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$500K-$3M</p>
          <p className="text-sm text-gray-600 mt-1">Average revenue for established roofing companies</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">20-40%</p>
          <p className="text-sm text-gray-600 mt-1">Typical gross profit margins on roofing jobs</p>
        </div>
      </div>

      <TipBox title="The Re-Roofing Cycle Is Your Best Friend">
        <p>
          Unlike trades that depend on new construction or breakdowns,
          roofing has a built-in replacement cycle. Every asphalt shingle
          roof installed 20 to 25 years ago needs replacing soon. This
          means you can proactively market to neighborhoods with aging
          roofs, not just wait for the phone to ring. Drive older
          subdivisions, note the roof conditions, and start knocking doors.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="licenses-certifications">
        2. Licensing & Certifications
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing licensing requirements vary significantly by state. Some
        states require a specific roofing contractor license, others
        require a general contractor license, and a few have minimal
        requirements. Beyond state licensing, manufacturer certifications
        are a major competitive advantage that most new roofers overlook.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">State Contractor License</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Required in most states</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            Most states require a roofing contractor license or a general
            contractor license to perform roofing work. Requirements
            typically include proof of experience (2-4 years), passing a
            trade and business exam, proof of insurance, and posting a
            surety bond. States like Florida, California, and Arizona have
            particularly strict requirements.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $200-$1,000 | Timeline: 2-8 weeks</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">GAF Master Elite Certification</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Huge competitive advantage</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            GAF is the largest shingle manufacturer in North America. Their
            Master Elite program is limited to the top 2% of roofing
            contractors. It requires proper licensing, insurance, a proven
            reputation, and ongoing training. Master Elite status allows
            you to offer GAF&apos;s best warranties (up to 50-year
            non-prorated coverage), which is a powerful sales tool.
            Homeowners specifically search for GAF-certified contractors.
          </p>
          <p className="text-sm font-medium text-gray-600">Requirements: licensed, insured, good reputation, GAF training</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">CertainTeed SELECT ShingleMaster</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Competitive advantage</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            CertainTeed&apos;s highest credential for residential roofing
            contractors. Requires factory training, licensing verification,
            and insurance documentation. Lets you offer enhanced warranties
            and positions your company as a premium installer.
          </p>
          <p className="text-sm font-medium text-gray-600">Requirements: CertainTeed training courses, valid license, insurance</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">Owens Corning Preferred Contractor</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Competitive advantage</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            Owens Corning&apos;s contractor network provides leads, co-op
            marketing dollars, and the ability to offer their enhanced
            warranty systems. Platinum Preferred is the top tier. These
            programs generate inbound leads directly from the
            manufacturer&apos;s website.
          </p>
          <p className="text-sm font-medium text-gray-600">Requirements: licensing, insurance, OC training modules</p>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">OSHA Fall Protection Training</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Mandatory</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            OSHA requires fall protection for any work at heights of 6 feet
            or more. Roofing is consistently one of the most cited
            industries for OSHA violations. Every person on your crew needs
            fall protection training, and you need a written fall
            protection plan. OSHA 10-hour and 30-hour courses cover this
            and other jobsite safety requirements. Fines for violations
            start at $16,131 per instance and go up to $161,323 for
            willful violations.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $25-$75 (OSHA 10) or $50-$100 (OSHA 30) | Available online</p>
        </div>
      </div>

      <TipBox title="Manufacturer Certifications Pay for Themselves">
        <p>
          Getting certified by GAF, CertainTeed, or Owens Corning is one
          of the highest-ROI moves a new roofing business can make. These
          certifications let you offer better warranties than uncertified
          competitors, generate leads through manufacturer websites, and
          differentiate your company in a crowded market. Many homeowners
          will choose a certified contractor over a cheaper uncertified
          one because of the warranty alone. Start the certification
          process in your first year.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="tools-equipment">
        3. Essential Roofing Tools & Equipment
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing requires a mix of specialized tools for tear-off,
        installation, and safety. The upfront investment is moderate
        compared to some trades, but quality tools make a measurable
        difference in crew speed and finished quality.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Nail Guns & Air Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Roofing nailer (coil)</strong> — The workhorse of any
          roofing crew. Coil nailers hold more nails and require fewer
          reloads than stick nailers. Budget $250-$400 per gun. You need
          one per crew member.
        </li>
        <li>
          <strong>Air compressor</strong> — A roofing compressor needs to
          keep up with 2-3 nailers running simultaneously. Look for at
          least 4-6 CFM at 90 PSI. Portable gas-powered compressors work
          best since you are on rooftops without power. $400-$1,200.
        </li>
        <li>
          <strong>Air hoses</strong> — 100-foot lengths to reach across
          large roofs. Budget $50-$100 per hose. Keep spares on the truck.
        </li>
        <li>
          <strong>Cap nailer</strong> — For installing synthetic
          underlayment. $200-$350.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Tear-Off & Installation Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Roofing shovels / shingle removers</strong> — Purpose-built
          tear-off tools that slide under shingles and pry nails. Much faster
          than a standard flat bar. $30-$60 each, buy several.
        </li>
        <li>
          <strong>Utility knives and hook blades</strong> — For cutting
          shingles, underlayment, and flashing. Go through blades fast.
          Stock up on hook blades. $10-$20 per knife.
        </li>
        <li>
          <strong>Chalk line and measuring tape</strong> — For straight
          courses and accurate layout. $10-$30.
        </li>
        <li>
          <strong>Tin snips and sheet metal brake</strong> — For cutting
          and bending flashing. $30-$200.
        </li>
        <li>
          <strong>Caulking guns</strong> — For sealant and roofing cement.
          $10-$30 each. Keep multiple on every job.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Safety Equipment
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Full body harnesses</strong> — OSHA-required fall
          protection. Each crew member needs their own properly fitted
          harness. $80-$200 each. Replace after any fall or per
          manufacturer guidelines.
        </li>
        <li>
          <strong>Roof anchors</strong> — Temporary or permanent anchors
          that bolt through the roof deck for tie-off points. $20-$80
          each.
        </li>
        <li>
          <strong>Lanyards and rope grabs</strong> — Connect the harness
          to the anchor. Shock-absorbing lanyards are required. $50-$150
          per set.
        </li>
        <li>
          <strong>Extension ladders</strong> — 24-foot and 32-foot
          fiberglass extension ladders cover most residential work.
          $200-$500 each. Carry at least two.
        </li>
        <li>
          <strong>Ladder standoffs and stabilizers</strong> — For safe
          ladder setup at the eave. $30-$80.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Startup Equipment Cost Summary
      </h3>

      <CostTable
        rows={[
          { item: "Roofing nailers (x3)", cost: "$750-$1,200", notes: "Coil type, one per crew member" },
          { item: "Air compressor (gas)", cost: "$400-$1,200", notes: "Must support 2-3 guns at once" },
          { item: "Air hoses + fittings", cost: "$150-$300", notes: "100-ft lengths, carry spares" },
          { item: "Cap nailer", cost: "$200-$350", notes: "For synthetic underlayment" },
          { item: "Tear-off shovels and bars", cost: "$100-$300", notes: "Multiple units for the crew" },
          { item: "Hand tools (knives, snips, chalk lines)", cost: "$200-$400", notes: "Buy quality, replace often" },
          { item: "Harnesses (x3)", cost: "$240-$600", notes: "One per crew member, OSHA-required" },
          { item: "Roof anchors + lanyards", cost: "$200-$500", notes: "Anchors, rope grabs, lanyards" },
          { item: "Extension ladders (x2)", cost: "$400-$1,000", notes: "24-ft and 32-ft fiberglass" },
          { item: "Power tools (drill, saw, grinder)", cost: "$300-$800", notes: "Cordless preferred for rooftop use" },
          { item: "Miscellaneous (tarps, brooms, magnets)", cost: "$200-$500", notes: "Nail magnets, cleanup tarps, debris guards" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total tool investment: $15,000-$35,000
        </p>
        <p className="text-gray-700 text-sm">
          If you already own basic tools and ladders from working on another
          crew, you can start closer to $15,000. A full kit from scratch,
          including quality safety equipment for a 3-person crew, will run
          $25,000-$35,000. Use our{" "}
          <Link href="/calculators/roofing-material/" className="text-brand-orange hover:underline">
            Roofing Material Calculator
          </Link>{" "}
          to accurately estimate materials for every job.
        </p>
      </div>

      {/* Section 4 */}
      <SectionHeading id="vehicle-equipment">
        4. Vehicle & Equipment Setup
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing has specific vehicle and logistics requirements that differ
        from most other trades. You need to haul materials, dispose of
        tear-off debris, and transport ladders and equipment safely.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Trucks & Trailers
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Pickup truck (3/4 ton or 1 ton)</strong> — You need towing
          capacity for trailers loaded with shingles. An F-250, RAM 2500, or
          Chevy 2500 is the minimum. Budget $25,000-$50,000 for a good used
          truck.
        </li>
        <li>
          <strong>Dump trailer</strong> — A 14-foot dump trailer is the most
          efficient way to handle tear-off debris. Load it on site, haul it
          to the landfill yourself. Saves thousands per job compared to
          renting roll-off dumpsters. $6,000-$12,000 for a quality dump
          trailer.
        </li>
        <li>
          <strong>Roll-off dumpster rental (alternative)</strong> — If you do
          not want to buy a dump trailer immediately, renting a roll-off
          dumpster per job costs $300-$600. This is simpler but eats into
          your margin. Many roofers start with rentals and switch to a dump
          trailer once volume justifies the investment.
        </li>
        <li>
          <strong>Ladder racks</strong> — Heavy-duty ladder racks on your
          truck for transporting extension ladders safely. $300-$800.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Material Delivery Logistics
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Distributor delivery</strong> — Most roofing supply
          distributors (ABC Supply, SRS Distribution, Beacon) deliver
          materials directly to the jobsite, including rooftop delivery via
          conveyor truck. Build a relationship with a local distributor and
          set up a trade account for net-30 terms.
        </li>
        <li>
          <strong>Material staging</strong> — Have materials delivered the
          day before the job starts. Rooftop delivery saves your crew hours
          of manual carrying. The delivery fee ($100-$300) pays for itself
          in labor savings.
        </li>
        <li>
          <strong>Vehicle branding</strong> — A wrapped truck with your
          company name and phone number is a billboard at every jobsite.
          Full wraps cost $2,000-$5,000. Magnetic signs are $100-$300 to
          start.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Pickup truck (3/4 or 1 ton)", cost: "$25,000-$50,000", notes: "Used, must tow heavy loads" },
          { item: "Dump trailer (14 ft)", cost: "$6,000-$12,000", notes: "Pays for itself in dumpster savings" },
          { item: "Ladder racks", cost: "$300-$800", notes: "Heavy-duty, fits extension ladders" },
          { item: "Vehicle branding", cost: "$100-$5,000", notes: "Magnets to full wrap" },
          { item: "Toolbox / truck bed storage", cost: "$200-$600", notes: "Secure tool storage" },
        ]}
      />

      <TipBox title="Dump Trailer vs. Roll-Off Dumpsters">
        <p>
          A dump trailer costs $6,000-$12,000 upfront but saves you
          $300-$600 per job on dumpster rentals. If you are doing 3 or more
          roofs per month, the trailer pays for itself within a few months.
          It also gives you scheduling flexibility — no waiting for dumpster
          delivery or pickup. Most established roofing companies own at
          least one dump trailer.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="insurance">
        5. Roofing Insurance
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing has some of the highest insurance premiums of any trade.
        You are working at heights, with power tools, on other
        people&apos;s most valuable asset. Proper coverage is not
        optional — it is a business requirement and a licensing
        requirement in most states.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers property damage and bodily injury caused by your work.
            Roofing GL premiums are significantly higher than most trades
            because of the damage potential — a botched install can lead to
            interior water damage, mold, and structural issues. Most
            policies require $1M/$2M limits.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $3,000-$6,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Roofing is classified as one of the highest-risk trades for
            workers comp. Rates are based on payroll and your state&apos;s
            roofing classification code. Expect to pay significantly more
            than most other trades per $100 of payroll. Falls are the
            leading cause of death in construction, and roofing accounts
            for a disproportionate share.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $2,000-$5,000+/year (varies heavily by state and payroll)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers your trucks and trailers. Personal auto policies will
            not cover vehicles used for business. With heavy trucks towing
            loaded trailers, commercial auto is essential.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,500-$3,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Surety Bond</h4>
          <p className="text-sm text-gray-700 mb-1">
            Many states require a surety bond to obtain your roofing
            contractor license. The bond protects the homeowner if you fail
            to complete the work or violate the contract. Bond amounts vary
            by state, typically $10,000-$25,000 face value.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $100-$500/year (1-3% of bond amount)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Tools & Equipment Coverage</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers theft or damage to your tools and equipment. Roofing
            tools left on jobsites overnight are targets for theft. Often
            available as a rider on your GL policy.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $300-$800/year</p>
        </div>
      </div>

      <CostTable
        rows={[
          { item: "General liability", cost: "$3,000-$6,000/yr", notes: "Higher than most trades due to damage risk" },
          { item: "Workers compensation", cost: "$2,000-$5,000+/yr", notes: "Highest risk class, varies by state" },
          { item: "Commercial auto", cost: "$1,500-$3,500/yr", notes: "Trucks and trailers" },
          { item: "Surety bond", cost: "$100-$500/yr", notes: "Required for licensing in most states" },
          { item: "Tools & equipment", cost: "$300-$800/yr", notes: "Rider or standalone policy" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total annual insurance: $8,000-$15,000+
        </p>
        <p className="text-gray-700 text-sm">
          Roofing insurance is expensive, but it is non-negotiable. Many
          homeowners and general contractors will ask for your certificate
          of insurance before hiring you. Without it, you cannot get
          licensed in most states and you cannot do insurance restoration
          work. Build these costs into your per-square pricing.
        </p>
      </div>

      <AffiliateProviderCards
        category="insurance"
        heading="Where Roofers Get Insurance Quotes"
        intro="Roofing premiums vary widely between carriers. Get quotes from at least two of these before binding a policy — savings of $1,000+/yr are common just by shopping around."
      />

      {/* Section 6 */}
      <SectionHeading id="business-structure">
        6. Business Structure & Registration
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Get your business properly structured before you bid your first
        job. Roofing carries significant liability, and the right business
        structure protects your personal assets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Sole Proprietorship</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Simplest and cheapest to set up</li>
            <li>No separation between you and the business</li>
            <li>Your personal assets are at risk if sued</li>
            <li>Not recommended for roofing due to high liability</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Separates personal and business assets</li>
            <li>Protects your house, car, and savings if a claim hits</li>
            <li>Costs $50-$500 depending on your state</li>
            <li>Can elect S-Corp taxation to save on self-employment tax</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Our recommendation:</strong> Form an LLC. Roofing is a
        high-liability trade — one leak that causes interior damage or a
        fall that injures a crew member can generate a lawsuit. An LLC
        separates your personal assets from your business liabilities.
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
          minutes. You need this for bank accounts, tax filings, and
          hiring crew.
        </li>
        <li>
          <strong>Open a business bank account</strong> — Keep business
          and personal finances completely separate from day one. Every
          material purchase, every customer payment, through the business
          account.
        </li>
        <li>
          <strong>Get a business credit card</strong> — Use it for
          materials, fuel, dump fees, and tools. Pay it off monthly. Build
          business credit for future equipment financing.
        </li>
        <li>
          <strong>Register for state and local taxes</strong> — Sales tax
          on roofing materials and labor varies by state. Know whether your
          state taxes labor, materials, or both.
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

      <AffiliateProviderCards
        category="llc"
        heading="LLC Formation Services for Roofers"
        intro="If you'd rather not navigate your state's filing portal, these formation services handle the paperwork and act as your registered agent. DIY is fine too — every state lets you file online for the state fee alone."
      />

      {/* Section 7 */}
      <SectionHeading id="pricing">
        7. Pricing Roofing Jobs
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing is priced per square (100 square feet of roof area). This
        is the standard pricing unit across the industry. Understanding
        your cost per square and applying the right markup is the
        difference between a profitable roofing business and one that is
        just staying busy.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Per-Square Pricing Benchmarks
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Standard asphalt shingle install (overlay):</strong>{" "}
          $250-$400 per square installed, depending on market and shingle
          quality. This assumes no tear-off.
        </li>
        <li>
          <strong>Tear-off and replace:</strong> $300-$500+ per square.
          Tear-off adds labor and disposal costs. Most residential jobs
          require a tear-off, especially when there are already two layers
          of shingles.
        </li>
        <li>
          <strong>Tear-off cost alone:</strong> $100-$150 per square for
          labor and disposal. This varies based on number of layers, roof
          accessibility, and local dump fees.
        </li>
        <li>
          <strong>Steep pitch upcharge:</strong> Add 15-30% for roofs with
          a pitch of 8/12 or steeper. Steep roofs require more safety
          equipment, slow down production, and increase material waste.
        </li>
        <li>
          <strong>Premium shingle upgrade:</strong> Architectural shingles
          (standard now for most installs) vs. designer or luxury shingles
          can add $50-$150 per square in material and labor.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Warranty Tiers
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Standard manufacturer warranty:</strong> Covers material
          defects only. Typically 25-30 years, prorated. Comes free with
          the shingles.
        </li>
        <li>
          <strong>Enhanced warranty (System warranty):</strong> Covers
          materials AND labor. Requires using a full system of products
          from one manufacturer (shingles, underlayment, starter strip,
          ridge cap, ventilation). This is where manufacturer
          certifications matter — only certified contractors can offer
          these.
        </li>
        <li>
          <strong>Premium warranty:</strong> Non-prorated coverage for
          50 years. Available only through top-tier certified contractors
          (GAF Master Elite, OC Platinum Preferred). This is a major
          selling point and justifies higher pricing.
        </li>
      </ul>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Use Our Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/calculators/roofing-material/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Roofing Material Calculator
          </Link>
          <Link
            href="/calculators/roof-pitch/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Roof Pitch Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
          <Link
            href="/calculators/square-footage/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Square Footage Calculator
          </Link>
        </div>
      </div>

      <TipBox title="Know Your Cost Per Square Cold">
        <p>
          Before you bid any job, know your exact cost per square —
          materials, labor, dump fees, overhead, and insurance. Then apply
          your markup. Use our{" "}
          <Link href="/calculators/markup-margin/" className="text-brand-orange hover:underline">
            Markup & Margin Calculator
          </Link>{" "}
          to make sure your prices produce the profit margin you need. A
          common mistake is quoting jobs based on what competitors charge
          without knowing whether those numbers are actually profitable
          for your specific cost structure.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="get-customers">
        8. Getting Roofing Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing customer acquisition falls into two main categories: storm
        chasing (insurance restoration) and organic growth (retail
        roofing). Most successful roofing companies do both, but the
        strategy differs significantly.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Storm Chasing vs. Organic Growth
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Storm Chasing / Insurance Restoration</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>High volume after major hail or wind events</li>
            <li>Insurance pays, so price sensitivity is lower</li>
            <li>Requires understanding insurance claims process</li>
            <li>Involves door knocking in affected neighborhoods</li>
            <li>Can be feast or famine depending on weather</li>
            <li>Higher overhead (travel, temporary crews, hotels)</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Organic / Retail Roofing</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Steady, predictable work in your local market</li>
            <li>Higher margins on retail jobs vs. insurance pricing</li>
            <li>Builds long-term brand and referral network</li>
            <li>Less travel, lower overhead</li>
            <li>Requires marketing investment (SEO, ads, reviews)</li>
            <li>More sustainable long-term business model</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Free Marketing (Start Immediately)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Business Profile</strong> — Your most important
          free marketing asset. When someone searches &quot;roofer near
          me&quot; or &quot;roof replacement [city],&quot; GBP is what
          shows up in the map pack. Add photos of every completed job,
          list your services, and collect reviews aggressively.
        </li>
        <li>
          <strong>Door knocking</strong> — Still one of the most effective
          lead generation methods in roofing. After a storm, knock doors in
          affected neighborhoods and offer free inspections. For retail
          work, target neighborhoods with visibly aging roofs. Be
          professional, leave a door hanger if nobody answers.
        </li>
        <li>
          <strong>Yard signs</strong> — Place a branded yard sign at every
          jobsite with the homeowner&apos;s permission. Neighbors see the
          sign and call. Simple and effective.
        </li>
        <li>
          <strong>Ask for reviews on every job</strong> — Text the
          customer your Google review link after every completed roof.
          Reviews are the single biggest factor in winning local search
          rankings and customer trust.
        </li>
        <li>
          <strong>Referral program</strong> — Offer $200-$500 to any
          customer who refers a signed roofing job. A typical roof
          replacement is $8,000-$15,000, so a $500 referral fee is a small
          cost for a guaranteed lead.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Insurance Restoration Work
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Learn the claims process</strong> — Understanding how
          insurance claims work (filing, adjuster meetings, supplements,
          Xactimate pricing) is a skill that separates top roofing
          companies from average ones. The insurance company sets the
          price, but knowing how to supplement for missed items can add
          thousands to each job.
        </li>
        <li>
          <strong>Free roof inspections</strong> — Offer free storm damage
          inspections. If you find damage, help the homeowner file a
          claim and manage the process. This is the standard model for
          insurance restoration roofers.
        </li>
        <li>
          <strong>Build adjuster relationships</strong> — Professional,
          honest interactions with insurance adjusters lead to smoother
          claims and faster approvals. Your reputation with adjusters
          matters.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Paid Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Local Services Ads (LSA)</strong> — Pay per lead.
          Google Guaranteed badge builds trust. Roofing leads through LSA
          typically cost $30-$100 each. High intent.
        </li>
        <li>
          <strong>Google Ads (Search)</strong> — Target keywords like
          &quot;roof replacement [city]&quot; and &quot;roofing contractor
          near me.&quot; Competitive and expensive ($20-$80+ per click)
          but very high intent.
        </li>
        <li>
          <strong>Facebook Ads</strong> — Best for storm restoration
          marketing. Target homeowners in recently affected zip codes with
          free inspection offers. Lower cost per lead than Google but
          lower intent.
        </li>
      </ul>

      <TipBox title="Build a Retail Business, Supplement with Storm Work">
        <p>
          The most resilient roofing businesses have a strong retail
          (organic) foundation and supplement with storm work when
          opportunities arise. Companies that rely entirely on storm
          chasing face boom-and-bust cycles. Build your local brand,
          collect reviews, develop referral networks, and treat storm
          season as a bonus, not your entire business plan.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. Roofing Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofing businesses have specific software needs: aerial
        measurements, insurance claim management, material ordering, crew
        scheduling, and customer communication. The right software saves
        hours per job and reduces expensive errors.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Aerial Measurements & Estimating</h4>
              <p className="text-sm text-gray-700 mt-1">
                Tools like EagleView and RoofSnap generate accurate roof
                measurements from satellite imagery. No need to climb the
                roof to measure — get square footage, pitch, ridges,
                valleys, and waste factor from your desk.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Insurance Workflow / Claims Management</h4>
              <p className="text-sm text-gray-700 mt-1">
                If you do insurance restoration work, JobNimbus is the
                industry standard. It tracks every claim from inspection
                through supplement through completion, integrates with
                Xactimate, and manages the complex multi-step insurance
                workflow. Built specifically for roofing.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical for storm work</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">CRM & Project Management</h4>
              <p className="text-sm text-gray-700 mt-1">
                Track leads, manage customer communication, schedule
                crews, and monitor job progress. Essential once you are
                running multiple jobs simultaneously.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Invoicing & Payments</h4>
              <p className="text-sm text-gray-700 mt-1">
                Send professional invoices, collect deposits, process
                final payments, and offer financing options. Collecting
                payment at job completion instead of chasing checks
                improves cash flow dramatically.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
      </div>

      <div className="my-6">
        <Link
          href="/best/roofing-software/"
          className="block text-center bg-brand-gray rounded-lg p-4 hover:bg-brand-orange hover:text-white transition-colors font-medium"
        >
          Read Our Full Roofing Software Comparison
        </Link>
      </div>

      {/* Section 10 */}
      <SectionHeading id="scaling">
        10. Scaling Your Roofing Business
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A solo roofer with a small crew can generate $300,000-$800,000 in
        annual revenue. To break past that, you need to add crews, build
        systems, and potentially expand your service offerings.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hiring Crews vs. Subcontracting
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>W-2 employees</strong> — You control quality, schedule,
          and safety. Higher overhead (payroll taxes, workers comp,
          benefits) but more consistent results. Best for building a
          brand-focused company.
        </li>
        <li>
          <strong>Subcontract crews</strong> — Lower overhead, more
          flexibility, easier to scale up and down with demand. But you
          have less control over quality and scheduling. Many roofing
          companies use a hybrid model — one core crew of employees
          supplemented by subs during peak season.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Running Multiple Crews
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The jump from one crew to two is the hardest scaling step. You
        cannot be on two roofs at once, so your second crew needs a
        reliable foreman who can run a job independently. Invest in
        training, documented processes, and quality checklists before
        adding a second crew. Each additional crew can add $500,000-$1M+
        in annual revenue capacity.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Commercial Roofing Expansion
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Different materials</strong> — Commercial roofing uses
          TPO, EPDM, modified bitumen, and metal instead of asphalt
          shingles. Each system requires specific training and equipment.
        </li>
        <li>
          <strong>Larger projects</strong> — Commercial jobs range from
          $20,000 to $500,000+. Longer sales cycles but much higher
          revenue per project.
        </li>
        <li>
          <strong>Maintenance contracts</strong> — Commercial building
          owners pay for annual roof inspections and maintenance programs.
          This creates recurring revenue similar to HVAC maintenance
          agreements.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Adding Related Services
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many roofing companies expand into gutters, siding, and exterior
        painting. These services share the same customer base (homeowners
        who need exterior work), use similar equipment (ladders, scaffolding),
        and can often be sold as add-ons during a roof replacement. Adding
        gutters alone can increase average job revenue by $1,500-$4,000.
      </p>

      <TipBox title="Systems Before Second Crew">
        <p>
          Before you add a second crew, document everything. How do you
          measure and estimate a roof? What is your tear-off procedure?
          How do you install flashing at walls and penetrations? What is
          your cleanup checklist? Write it all down. Your second crew
          needs to deliver the same quality your customers expect from
          your first crew.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="mistakes">
        11. Common Roofing Business Mistakes
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Underinsuring or skipping insurance",
            fix: "Roofing has the highest liability risk of almost any trade. One fall, one leak that causes interior damage, or one crew member hurt on the job can bankrupt an uninsured or underinsured roofing company. Carry proper GL, workers comp, and commercial auto from day one. Build the cost into every bid.",
          },
          {
            mistake: "Not getting manufacturer certifications",
            fix: "Uncertified roofers can only offer basic manufacturer warranties that cover material defects. Certified contractors offer system warranties covering materials and labor for 25-50 years. This is a massive differentiator in sales. Homeowners will pay more for a certified contractor because the warranty is dramatically better. Apply for GAF, CertainTeed, or Owens Corning certification in your first year.",
          },
          {
            mistake: "Poor safety culture",
            fix: "Roofing leads construction in fall fatalities. OSHA actively inspects roofing jobsites and fines start at $16,131 per violation. Beyond the legal risk, a serious injury destroys morale, increases your workers comp rates, and can shut down your business. Require harnesses, anchors, and proper ladder setup on every single job. No exceptions.",
          },
          {
            mistake: "Chasing storms without a plan",
            fix: "Storm chasing can be incredibly profitable, but roofers who chase without a plan — traveling to disaster areas with no local contacts, no temporary crews lined up, and no cash reserves — often lose money. If you chase storms, have a system: pre-identified markets, relationships with local supply houses, a crew deployment plan, and enough working capital to cover 60-90 days of expenses before insurance payments come in.",
          },
          {
            mistake: "Underbidding to win jobs",
            fix: "New roofing companies often price too low to win work, then discover they are not making money. Know your cost per square (materials, labor, dump fees, overhead, insurance) before you bid. A roof installed below cost is worse than no roof at all — you lose money and tie up your crew. Use our markup and margin calculator to verify profitability on every bid.",
          },
          {
            mistake: "Ignoring the insurance claims process",
            fix: "If you do storm work, learning Xactimate and the insurance supplement process is essential. Insurance companies often miss line items that you are entitled to. Roofers who know how to write proper supplements recover 20-40% more per claim than those who accept the initial adjuster estimate without question.",
          },
          {
            mistake: "No cleanup process",
            fix: "Roofing generates massive debris — old shingles, nails, packaging, flashing scraps. A nail in a customer's tire or shingle debris in their garden beds will destroy your reputation faster than anything else. Use tarps, magnetic nail sweepers, and a thorough cleanup checklist on every job. Walk the property with the homeowner when finished.",
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
        Total Roofing Startup Costs Summary
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a realistic breakdown of what it costs to start a roofing
        business. Costs vary depending on whether you already own tools, a
        truck, and what your state requires.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50-$500", notes: "One-time" },
          { item: "State roofing contractor license", cost: "$200-$1,000", notes: "Varies by state" },
          { item: "OSHA safety training", cost: "$25-$100", notes: "Per crew member" },
          { item: "General liability insurance", cost: "$3,000-$6,000", notes: "Annual" },
          { item: "Workers compensation", cost: "$2,000-$5,000+", notes: "Annual, high-risk class" },
          { item: "Commercial auto insurance", cost: "$1,500-$3,500", notes: "Annual" },
          { item: "Surety bond", cost: "$100-$500", notes: "Annual" },
          { item: "Tools and equipment", cost: "$15,000-$35,000", notes: "Nailers, compressor, safety gear, ladders" },
          { item: "Pickup truck (3/4 or 1 ton)", cost: "$25,000-$50,000", notes: "Used, must tow heavy loads" },
          { item: "Dump trailer", cost: "$6,000-$12,000", notes: "Or rent dumpsters per job" },
          { item: "Ladder racks + truck setup", cost: "$500-$1,400", notes: "One-time" },
          { item: "Vehicle branding", cost: "$100-$5,000", notes: "Magnets to full wrap" },
          { item: "Business software", cost: "$50-$300/mo", notes: "CRM, estimating, measurements" },
          { item: "Marketing (first 3 months)", cost: "$500-$3,000", notes: "Google Ads, LSA, yard signs, door hangers" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $55,000-$125,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          Roofing has a higher startup cost than many trades because of the
          truck, trailer, and insurance requirements. If you already own a
          truck and tools from working on another crew, you can start for
          $15,000-$25,000. Many new roofing business owners finance their
          truck and trailer and start with the minimum tool kit.
        </p>
      </div>

      <p className="text-sm text-gray-500 my-4">
        Are you a homeowner looking for help with a project?{" "}
        <a href="https://getcontractorquotes.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
          Get free quotes from licensed contractors in your area
        </a>.
      </p>

      {/* Internal links */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Roofing Calculators & Resources</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link
            href="/calculators/roofing-material/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Roofing Material Calculator
          </Link>
          <Link
            href="/calculators/roof-pitch/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Roof Pitch Calculator
          </Link>
          <Link
            href="/calculators/square-footage/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Square Footage Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
          <Link
            href="/best/roofing-software/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Roofing Software Comparison
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Roofing Business?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free tools to estimate materials, calculate your margins,
          price your work, and find the right software for your roofing
          company.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/roofing-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare Roofing Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
