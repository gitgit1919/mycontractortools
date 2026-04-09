import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How to Start a Painting Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting a painting business. Learn about licensing, EPA RRP certification, startup equipment costs, pricing painting jobs, getting customers, and scaling your painting company.",
};

const toc = [
  { id: "painting-industry-overview", label: "Painting Industry Overview" },
  { id: "licensing", label: "Licensing & Certifications" },
  { id: "tools-equipment", label: "Essential Painting Equipment" },
  { id: "vehicle-setup", label: "Vehicle Setup" },
  { id: "insurance", label: "Insurance Requirements" },
  { id: "business-structure", label: "Business Structure & Registration" },
  { id: "pricing", label: "Pricing Painting Jobs" },
  { id: "get-customers", label: "Getting Your First Painting Customers" },
  { id: "software", label: "Painting Business Software" },
  { id: "scaling", label: "Scaling Your Painting Business" },
  { id: "mistakes", label: "Common Painting Business Mistakes" },
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

export default function StartingPaintingBusiness() {
  return (
    <GuideLayout
      title="How to Start a Painting Business (2026 Guide)"
      description="A complete, step-by-step guide to starting your own painting business — from licensing and equipment to pricing jobs, landing customers, and scaling to a full crew."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Painting is one of the easiest trades to start and one of the most
        profitable to run. Startup costs are the lowest of any contracting
        business, margins are high, and demand is constant. Every home and
        commercial building needs paint — and it needs repainting every 5 to
        10 years.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you are picking up a brush for the first time or breaking away
        from a company you have been painting for, this guide covers the
        business side: licensing, equipment, pricing, insurance, finding
        customers, and building a company that scales.
      </p>

      {/* Section 1 */}
      <SectionHeading id="painting-industry-overview">
        1. Painting Industry Overview
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. painting industry generates over $45 billion annually and is
        one of the most accessible trades for new business owners. Here is why
        painting is such a strong business opportunity:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Low barrier to entry</strong> — No trade license required in
          most states. You can start with a few thousand dollars in equipment
          and begin earning immediately.
        </li>
        <li>
          <strong>High profit margins</strong> — Residential painting
          businesses typically operate at 50-65% gross margins. Paint and
          materials are inexpensive relative to the labor you charge. A $3,000
          interior job might cost $400-$600 in materials.
        </li>
        <li>
          <strong>Repeat demand</strong> — Interior paint typically needs
          refreshing every 5-7 years. Exterior paint lasts 7-10 years
          depending on climate and material. Every completed job is a future
          repaint customer.
        </li>
        <li>
          <strong>Residential and commercial</strong> — Residential work
          (homes, apartments, condos) is where most painters start. Commercial
          work (offices, retail, warehouses, HOA complexes) offers larger
          contracts with steadier volume.
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$45B+</p>
          <p className="text-sm text-gray-600 mt-1">U.S. painting industry revenue</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">50-65%</p>
          <p className="text-sm text-gray-600 mt-1">Typical gross profit margins</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$3K-$10K</p>
          <p className="text-sm text-gray-600 mt-1">Startup equipment cost (lowest of any trade)</p>
        </div>
      </div>

      <TipBox title="Interior vs. Exterior Seasonal Split">
        <p>
          Painting is seasonal, but less so than most trades because you can
          work year-round. Exterior painting is weather-dependent — spring
          through fall in most markets, with peak demand from May through
          September. Interior painting can be done twelve months a year. Smart
          painting business owners stack interior work in winter and ramp up
          exterior crews in warmer months to keep revenue consistent.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="licensing">
        2. Licensing & Certifications
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Painting has some of the lightest licensing requirements of any trade.
        In most states, you do not need a specific painting license — but there
        are a few critical requirements to know about.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Business License</h4>
          <p className="text-sm text-gray-700 mb-1">
            Every state and most municipalities require a general business
            license to operate. This is straightforward paperwork — register
            your business name, pay the fee, and you are legal. Some cities
            also require a home improvement contractor registration.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $50-$400 | Timeline: 1-2 weeks</p>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">EPA RRP Certification (Lead Paint)</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Mandatory for pre-1978 homes</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            The EPA Renovation, Repair, and Painting (RRP) Rule requires
            certification for any contractor disturbing painted surfaces in
            homes, childcare facilities, and schools built before 1978. This
            is a federal law — violations carry fines up to $46,192 per day.
            The certification involves an 8-hour training course and your firm
            must be registered with the EPA. If you are painting any older
            homes, this is not optional.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $200-$400 for training + $300 firm registration | Renewal: every 5 years</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">State Contractor License (Threshold States)</h4>
          <p className="text-sm text-gray-700 mb-1">
            Some states require a contractor license when the total job value
            exceeds a dollar threshold. For example, California requires a
            C-33 Painting and Decorating license for jobs over $500.
            Tennessee, North Carolina, and several other states have similar
            threshold requirements. Check your state&apos;s contractor
            licensing board for the specific rules.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $200-$600 | Varies by state</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">OSHA 10/30 Training</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Optional but valuable</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            OSHA safety training is not required for painting specifically, but
            commercial clients and general contractors often require it before
            allowing you on a job site. The 10-hour course covers fall
            protection, scaffolding, and hazard communication — all relevant
            to painting work.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $25-$100 online | 10 or 30 hours</p>
        </div>
      </div>

      <TipBox title="Get RRP Certified Even if You Think You Do Not Need It">
        <p>
          A huge percentage of the housing stock in the U.S. was built before
          1978. If you are doing residential repaints, you will encounter
          pre-1978 homes constantly. Getting caught doing uncertified lead
          paint work is a massive fine, and it puts your customers at risk. Get
          the RRP certification early and treat it as a cost of doing business.
          It also gives you a competitive advantage — many homeowners
          specifically look for RRP-certified painters.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="tools-equipment">
        3. Essential Painting Equipment
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Painting has the lowest equipment startup cost of any trade. You can
        get started with basic tools for under $3,000 and upgrade as jobs
        demand it. Here is what you need:
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Sprayers
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Airless paint sprayer</strong> — The biggest productivity
          multiplier in painting. A Graco or Titan airless sprayer lets you
          cover walls, ceilings, and exteriors 4-5 times faster than rolling.
          Start with a mid-range unit ($400-$800) and upgrade to a higher-GPM
          model as you take on larger jobs.
        </li>
        <li>
          <strong>HVLP sprayer</strong> — For fine finish work like cabinets,
          trim, and doors. Produces a smoother finish than airless with less
          overspray. $100-$400 for a quality unit.
        </li>
        <li>
          <strong>Extra spray tips and filters</strong> — Different tip sizes
          for different coatings and surfaces. Stock common sizes. $50-$100.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Brushes, Rollers & Hand Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Quality brushes</strong> — Purdy, Wooster, or equivalent.
          2-inch and 3-inch angled sash brushes for cutting in. Do not cheap
          out — brush quality directly affects your cut lines. $10-$20 each.
        </li>
        <li>
          <strong>Roller frames and covers</strong> — 9-inch and 18-inch
          frames with various nap covers (3/8&quot; for smooth walls,
          1/2&quot; for textured, 3/4&quot; for rough surfaces). Stock in
          bulk. $50-$150.
        </li>
        <li>
          <strong>Extension poles</strong> — 2-4 foot and 4-8 foot telescoping
          poles for ceilings and high walls without ladders. $30-$60.
        </li>
        <li>
          <strong>5-in-1 painter&apos;s tool</strong> — For scraping, opening
          cans, cleaning rollers, and spreading compound. Every painter needs
          several. $5-$15 each.
        </li>
        <li>
          <strong>Caulk guns and caulk</strong> — For sealing gaps before
          painting. Prep is what separates a professional job from a DIY
          attempt. $10-$30.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Ladders & Access
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Extension ladder</strong> — 24-foot or 28-foot fiberglass
          for two-story exterior work. $200-$400.
        </li>
        <li>
          <strong>Step ladders</strong> — 6-foot and 8-foot for interior work.
          $80-$200.
        </li>
        <li>
          <strong>Multi-position ladder</strong> — Versatile for stairwells
          and uneven terrain. $150-$300.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Prep & Protection Supplies
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Drop cloths</strong> — Canvas drop cloths for floors and
          furniture. Plastic sheeting for large areas. $50-$150.
        </li>
        <li>
          <strong>Painter&apos;s tape and masking supplies</strong> — FrogTape
          or 3M blue tape for clean lines. Masking paper and dispensers for
          trim, windows, and fixtures. $50-$100 per job.
        </li>
        <li>
          <strong>Pressure washer</strong> — Essential for exterior prep.
          Removes dirt, mildew, and loose paint before recoating. A 2,500-3,000
          PSI gas unit is ideal. $300-$800.
        </li>
        <li>
          <strong>Sanders and scrapers</strong> — Random orbital sander, pole
          sander, and various scrapers for surface prep. $100-$250.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Startup Equipment Cost Summary
      </h3>

      <CostTable
        rows={[
          { item: "Airless paint sprayer", cost: "$400-$800", notes: "Graco or Titan mid-range to start" },
          { item: "HVLP sprayer", cost: "$100-$400", notes: "For cabinets, trim, fine finish" },
          { item: "Brushes and rollers (initial stock)", cost: "$100-$300", notes: "Quality brands, multiple sizes" },
          { item: "Extension ladder (24-28 ft)", cost: "$200-$400", notes: "Fiberglass, Type 1A rated" },
          { item: "Step ladders (6 ft + 8 ft)", cost: "$80-$200", notes: "Fiberglass preferred" },
          { item: "Drop cloths and plastic sheeting", cost: "$50-$150", notes: "Canvas for floors, plastic for large areas" },
          { item: "Tape and masking supplies", cost: "$50-$100", notes: "FrogTape, masking paper, dispenser" },
          { item: "Pressure washer", cost: "$300-$800", notes: "2,500-3,000 PSI gas unit for exteriors" },
          { item: "Sanders and scrapers", cost: "$100-$250", notes: "Orbital sander, pole sander, hand scrapers" },
          { item: "Caulk guns, 5-in-1 tools, misc", cost: "$50-$100", notes: "Small tools that add up" },
          { item: "Safety equipment", cost: "$50-$150", notes: "Respirator, goggles, gloves" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total equipment investment: $3,000-$10,000
        </p>
        <p className="text-gray-700 text-sm">
          Painting has the lowest startup equipment cost of any trade. At the
          low end, you can start with brushes, rollers, a step ladder, and
          basic prep tools for under $3,000. Adding a sprayer, extension
          ladder, and pressure washer pushes you toward $5,000-$10,000 but
          dramatically increases your productivity and the types of jobs you
          can take on. Use our{" "}
          <Link href="/calculators/paint-coverage/" className="text-brand-orange hover:underline">
            Paint Coverage Calculator
          </Link>{" "}
          to estimate materials accurately for each job.
        </p>
      </div>

      {/* Section 4 */}
      <SectionHeading id="vehicle-setup">
        4. Vehicle Setup
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Painting does not require a specialized service vehicle like HVAC or
        plumbing, but you need something that can haul ladders, equipment, and
        supplies reliably.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Vehicle Options
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Cargo van</strong> — A Ford Transit, RAM ProMaster, or
          Chevy Express cargo van is ideal. Everything stays locked and out of
          the weather. Keeps your job site organized and your equipment secure.
          Budget $15,000-$35,000 used.
        </li>
        <li>
          <strong>Pickup truck with ladder rack</strong> — A full-size truck
          with a ladder rack and covered bed or truck cap works well. Easier
          to find and often cheaper than a cargo van. Budget $12,000-$30,000
          used.
        </li>
        <li>
          <strong>Trailer</strong> — A small enclosed trailer paired with a
          truck gives you maximum storage and organization. Useful if you
          already own a truck. $2,000-$5,000.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Organization
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Ladder racks</strong> — Roof-mounted racks for extension
          ladders. Essential for safe transport. $200-$600.
        </li>
        <li>
          <strong>Supply storage</strong> — Shelving or bins for paint,
          supplies, and tools. Keep everything organized so you can find what
          you need without digging through a pile. $100-$500.
        </li>
        <li>
          <strong>Vehicle branding</strong> — Your truck or van is a rolling
          billboard. A professional wrap or magnetic signs with your company
          name, phone number, and website generate leads every day. Wraps cost
          $2,000-$5,000. Magnetic signs start at $100-$300.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Used cargo van or pickup truck", cost: "$12,000-$35,000", notes: "Under 100K miles preferred" },
          { item: "Ladder rack", cost: "$200-$600", notes: "Roof-mounted for extension ladders" },
          { item: "Shelving / organization", cost: "$100-$500", notes: "Bins, shelves, tool organizers" },
          { item: "Vehicle branding (wrap or signs)", cost: "$100-$5,000", notes: "Magnets are cheapest to start" },
          { item: "Enclosed trailer (optional)", cost: "$2,000-$5,000", notes: "If using a truck instead of van" },
        ]}
      />

      <TipBox title="Your Vehicle Is Your First Impression">
        <p>
          Customers notice what pulls up to their house. A clean, branded
          vehicle with organized equipment says &quot;professional.&quot; A
          beat-up unmarked truck with ladders falling off says &quot;handyman.&quot;
          You do not need a brand new truck — you need a clean, reliable one
          with your name on it.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="insurance">
        5. Insurance Requirements
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Painting carries moderate liability risk — ladder falls, property
        damage from spills or overspray, and lead paint exposure are the main
        concerns. Insurance premiums for painters are lower than most trades,
        but coverage is still essential.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers property damage and bodily injury caused by your work. If
            you spill paint on a customer&apos;s hardwood floor or a ladder
            damages their siding, this policy pays the claim. Most commercial
            and residential customers require proof of GL coverage before
            hiring you.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $500-$1,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required in most states once you have employees. Painting involves
            ladder work and repetitive motion, so injuries do happen. Even
            some solo painters need workers comp depending on state law and
            client requirements.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: varies by state and payroll</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Your personal auto policy will not cover a vehicle used for
            business. Commercial auto covers your work truck or van and any
            damage or injuries while driving to job sites.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,000-$3,000/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Tools & Equipment Coverage</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers theft or damage to your sprayers, ladders, and tools. While
            painting tools cost less than other trades, replacing a stolen
            sprayer and ladder set still hurts. Often available as a rider on
            your general liability policy.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $100-$400/year</p>
        </div>
      </div>

      <CostTable
        rows={[
          { item: "General liability", cost: "$500-$1,500/yr", notes: "Required for most commercial and residential work" },
          { item: "Workers compensation", cost: "Varies", notes: "Required with employees in most states" },
          { item: "Commercial auto", cost: "$1,000-$3,000/yr", notes: "Covers your work vehicle" },
          { item: "Tools & equipment", cost: "$100-$400/yr", notes: "Rider or standalone policy" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total insurance cost: $2,000-$6,000/year
        </p>
        <p className="text-gray-700 text-sm">
          Painting insurance premiums are moderate compared to higher-risk
          trades like roofing or electrical. The biggest factor in your
          premium is payroll — as you hire employees and add workers comp, your
          insurance costs increase. Factor insurance into your overhead when
          pricing jobs.
        </p>
      </div>

      {/* Section 6 */}
      <SectionHeading id="business-structure">
        6. Business Structure & Registration
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before you paint your first paying job, get your business structure
        set up properly. This protects you personally and makes you look
        professional to customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Sole Proprietorship</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Simplest and cheapest to set up</li>
            <li>No separation between you and the business</li>
            <li>Your personal assets are at risk if sued</li>
            <li>Fine for testing the waters, not ideal long-term</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Separates personal and business assets</li>
            <li>Protects your personal property if a claim is filed</li>
            <li>Costs $50-$500 depending on your state</li>
            <li>Can elect S-Corp taxation to save on self-employment tax</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Our recommendation:</strong> Form an LLC. Even though painting
        is lower risk than many trades, a paint spill on expensive flooring or
        a ladder accident on a customer&apos;s property can result in a costly
        claim. An LLC separates your personal assets from your business.
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
          personal finances completely separate from day one. Every dollar in,
          every dollar out, through the business account.
        </li>
        <li>
          <strong>Get a business credit card</strong> — Use it for paint,
          supplies, fuel, and equipment. Pay it off monthly. Makes expense
          tracking simple and builds business credit.
        </li>
        <li>
          <strong>Register for state and local taxes</strong> — Painting labor
          is not taxable in most states, but some states do tax painting as a
          service. Know your state&apos;s rules.
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
        7. Pricing Painting Jobs
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pricing is where new painting business owners either build a
        profitable company or work for free. There are several ways to price
        painting work, and understanding all of them gives you flexibility.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Interior Painting Rates
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Per square foot:</strong> $2-$6 per square foot of wall
          area, depending on complexity, paint quality, and number of coats.
          Simple walls in good condition are at the low end. Trim, ceilings,
          accent walls, and heavy prep push rates higher.
        </li>
        <li>
          <strong>Per room:</strong> $300-$800 per room for standard-size
          rooms (walls only, two coats). This is easier for customers to
          understand and compare. Adjust for room size, ceiling height, and
          prep work.
        </li>
        <li>
          <strong>Whole interior:</strong> $3,000-$8,000 for a typical
          3-bedroom home (walls, ceilings, trim). Pricing the entire job gives
          you flexibility to account for efficiency.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Exterior Painting Rates
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Per square foot:</strong> $1.50-$4 per square foot of
          exterior surface area. Includes prep (pressure washing, scraping,
          caulking) and two coats. Multi-story homes, extensive wood rot
          repair, and difficult access increase rates.
        </li>
        <li>
          <strong>Whole exterior:</strong> $3,000-$10,000+ for a typical
          single-family home. Two-story homes, extensive prep, and premium
          coatings push toward the higher end.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Commercial Rates
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Commercial interior:</strong> $1.50-$3.50 per square foot.
          Lower per-foot rates but much larger areas. An office suite repaint
          might be 5,000+ square feet.
        </li>
        <li>
          <strong>Commercial exterior:</strong> Priced per project based on
          surface area, access requirements, and coatings. Multi-unit
          complexes and HOA contracts can be $20,000-$100,000+.
        </li>
      </ul>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Use Our Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/calculators/paint-coverage/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Paint Coverage Calculator
          </Link>
          <Link
            href="/calculators/square-footage/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Square Footage Calculator
          </Link>
          <Link
            href="/calculators/wallpaper/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Wallpaper Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
        </div>
      </div>

      <TipBox title="Always Price the Prep Separately in Your Head">
        <p>
          The number one pricing mistake in painting is underestimating prep
          time. Prep work (washing, scraping, sanding, caulking, patching,
          priming) can take 50-60% of total job time on exterior repaints and
          20-40% on interior jobs. When estimating, calculate your prep hours
          and your paint hours separately, then combine them into one quote
          for the customer. Use our{" "}
          <Link href="/calculators/markup-margin/" className="text-brand-orange hover:underline">
            Markup & Margin Calculator
          </Link>{" "}
          to make sure your prices cover all costs including prep.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="get-customers">
        8. Getting Your First Painting Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Painting has a visual advantage that most trades lack: before-and-after
        photos sell your work better than any advertisement. Use this to your
        benefit from day one.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Free Marketing (Start Immediately)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Before-and-after photos on social media</strong> — Take
          professional-quality before-and-after photos of every single job.
          Post them on Instagram, Facebook, and TikTok. Painting
          transformations are inherently shareable content. One viral
          before-and-after post can generate weeks of leads.
        </li>
        <li>
          <strong>Google Business Profile</strong> — Set up your profile, add
          photos of your work, list your services, and collect reviews. When
          someone searches &quot;painters near me,&quot; your Google Business
          Profile shows up in the map pack. This is your number one free lead
          source.
        </li>
        <li>
          <strong>Nextdoor</strong> — Homeowners constantly ask for painter
          recommendations on Nextdoor. Claim your business, stay active, and
          respond to requests. This platform is particularly strong for
          painting because neighbors see each other&apos;s freshly painted
          homes and want the same.
        </li>
        <li>
          <strong>Referral incentives</strong> — Offer $25-$50 credit to
          existing customers who refer new ones. Happy painting customers talk
          to their neighbors, especially when they see the finished result
          every day.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Relationship Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Real estate agent partnerships</strong> — Agents need homes
          painted before listing (seller prep) and after closing (buyer
          move-in). A reliable painter who can turn rooms around quickly is
          invaluable to a busy agent. Offer competitive rates and fast
          turnaround, and agents will send you steady work.
        </li>
        <li>
          <strong>Property management contracts</strong> — Property managers
          handle dozens or hundreds of rental units that need repainting
          between tenants. Volume is steady and predictable. Build a
          relationship with 3-5 local property managers and you will have a
          baseline of work year-round.
        </li>
        <li>
          <strong>General contractor relationships</strong> — GCs on
          remodeling and new construction projects need painters regularly. Be
          reliable, show up on schedule, and protect finished surfaces. GCs
          remember painters who do not create problems.
        </li>
        <li>
          <strong>Interior designers</strong> — Designers regularly
          recommend painters for their projects and value quality, color
          accuracy, and professionalism. Build these relationships and you
          will get referred to higher-end residential jobs.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Paid Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Local Services Ads (LSA)</strong> — Pay per lead,
          not per click. The Google Guaranteed badge builds trust. Typical
          cost: $15-$50 per lead for painting.
        </li>
        <li>
          <strong>Angi / HomeAdvisor</strong> — Shared leads. Quality varies,
          but can fill your schedule when starting. Track your cost per
          acquisition carefully.
        </li>
        <li>
          <strong>Facebook and Instagram ads</strong> — Run targeted ads
          showing your best before-and-after transformations to homeowners in
          your service area. Visual content performs exceptionally well for
          painting.
        </li>
      </ul>

      <TipBox title="Before-and-After Photos Are Your Best Marketing Asset">
        <p>
          Take photos of every job — before, during, and after. Use consistent
          lighting and angles. Build a portfolio on your website and social
          media. Potential customers want to see your actual work, not stock
          photos. A gallery of 20-30 completed projects makes you look
          established even when you are just starting.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. Painting Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Painting businesses benefit from software that handles estimating,
        scheduling, and invoicing. As you grow, crew management and job
        costing become critical.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Estimating & Proposals</h4>
              <p className="text-sm text-gray-700 mt-1">
                Create professional estimates and proposals that customers can
                approve digitally. Includes measurement tools, pricing
                templates, and material calculations. The difference between
                winning and losing a bid often comes down to how professional
                your proposal looks.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Scheduling & Crew Management</h4>
              <p className="text-sm text-gray-700 mt-1">
                Assign crews to jobs, manage schedules, track time on site.
                Essential once you have more than one crew in the field.
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
                Send invoices, collect deposits, and accept payment on site or
                online. Collect a deposit before starting and final payment on
                completion.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Job Costing</h4>
              <p className="text-sm text-gray-700 mt-1">
                Track actual costs (labor, materials, time) against your
                estimate for every job. This tells you which jobs are
                profitable and where you are losing money. Essential for
                improving your estimating accuracy over time.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Important</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Painting-specific software:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>PaintScout</strong> — Built specifically for painting
          contractors. Handles estimating with room-by-room pricing, digital
          proposals, and production rate tracking. Lets you build estimates
          faster and more accurately than generic tools.
        </li>
        <li>
          <strong>Jobber</strong> — Excellent general contractor software for
          scheduling, invoicing, and CRM. Works well for painting companies
          and is affordable for solo operators.
        </li>
      </ul>

      <div className="my-6">
        <Link
          href="/best/painting-software/"
          className="block text-center bg-brand-gray rounded-lg p-4 hover:bg-brand-orange hover:text-white transition-colors font-medium"
        >
          Read Our Full Painting Software Comparison
        </Link>
      </div>

      {/* Section 10 */}
      <SectionHeading id="scaling">
        10. Scaling Your Painting Business
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        As a solo painter, you can realistically generate $75,000-$150,000 in
        annual revenue. To go beyond that, you need to add painters and build
        a crew-based model.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Hiring Painters
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your first hire should be someone who can produce quality work with
        minimal supervision. Painting has a shorter learning curve than most
        trades, so you can train entry-level workers relatively quickly. Look
        for people who are detail-oriented, reliable, and take pride in clean
        work. Pay $15-$25/hour for painters and $25-$35/hour for experienced
        crew leads.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        The Crew Lead Model
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most scalable structure is the crew lead model. Each crew has a
        lead painter who manages 1-3 painters on site. The crew lead handles
        quality control, customer communication, and daily job management. You
        focus on estimating, sales, and running the business. Two crews can
        generate $300,000-$600,000+ in annual revenue while you spend most of
        your time off the brush.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Adding Exterior and Commercial Work
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Exterior painting</strong> — If you started with interior
          work, adding exterior services opens up a new seasonal revenue
          stream. Requires extension ladders, pressure washing equipment, and
          knowledge of exterior coatings and prep techniques.
        </li>
        <li>
          <strong>Commercial painting</strong> — Offices, retail spaces,
          warehouses, and multi-unit buildings. Larger contracts, longer
          timelines, and often after-hours or weekend work. Commercial clients
          value reliability and insurance coverage above all.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Specialty Coatings & High-Margin Services
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Epoxy floor coatings</strong> — Garage floors, basements,
          and commercial floors. Higher material costs but premium pricing
          ($3-$12 per square foot). Growing demand from homeowners who want
          finished garage spaces.
        </li>
        <li>
          <strong>Cabinet refinishing</strong> — Kitchen cabinet painting and
          refinishing is extremely high-margin work. A kitchen cabinet job
          runs $3,000-$8,000 and uses $200-$500 in materials. Requires HVLP
          spraying skills and careful prep, but the profit margins are
          exceptional.
        </li>
        <li>
          <strong>Faux finishes and decorative painting</strong> — Specialty
          techniques command premium pricing. Accent walls, textured
          finishes, and Venetian plaster are niche services with less
          competition and higher margins.
        </li>
        <li>
          <strong>Deck and fence staining</strong> — Seasonal add-on service
          that uses similar skills and equipment. Straightforward work with
          good margins.
        </li>
      </ul>

      <TipBox title="Get Off the Brush to Grow">
        <p>
          The biggest transition in scaling a painting business is moving from
          painter to business owner. As long as you are on a crew painting
          every day, you cannot estimate, sell, market, or manage. Once you
          have two reliable crew leads, step off the brush entirely and focus
          on growing the business. That is where the real income growth
          happens.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="mistakes">
        11. Common Painting Business Mistakes
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Not accounting for prep time",
            fix: "Prep work (washing, scraping, sanding, patching, caulking, priming, masking) can consume 40-60% of total job time on repaints. New painters estimate based on how long it takes to apply paint and forget the hours of prep. Track your prep time on the first 10 jobs and use those numbers in future estimates.",
          },
          {
            mistake: "Underestimating exterior scope",
            fix: "Exterior jobs have hidden complexity: wood rot repair, caulk failure, mildew treatment, multi-story access, weather delays, and surface conditions you cannot fully assess from the ground. Always inspect exteriors with a ladder before quoting, and build a contingency into your estimate for surprises you find once scraping begins.",
          },
          {
            mistake: "Poor color consultation",
            fix: "Customers who pick the wrong color blame the painter. Invest time in color consultation — bring large swatches, paint test patches on the wall, and discuss lighting conditions. Offering a structured color selection process reduces callbacks, avoids repaints, and sets you apart from competitors who just ask 'what color do you want?'",
          },
          {
            mistake: "Not getting EPA RRP certified",
            fix: "Painting pre-1978 homes without RRP certification is a federal violation with fines up to $46,192 per day. Beyond the legal risk, lead paint exposure is a serious health hazard. Get certified before you start your business. It takes one day and costs about $300.",
          },
          {
            mistake: "Skipping the contract",
            fix: "Always use a written contract that specifies scope (which rooms, how many coats, what prep is included), paint brand and sheen, timeline, payment schedule, and warranty. Verbal agreements lead to disputes about what was included and what costs extra.",
          },
          {
            mistake: "Competing on price alone",
            fix: "There is always someone cheaper, and they are usually cutting corners on prep, using low-quality paint, or skipping insurance. Compete on quality, professionalism, and reliability. Show your portfolio, explain your process, and let the customer see why your price is fair.",
          },
          {
            mistake: "Not collecting deposits",
            fix: "Collect 25-50% deposit before starting any job, with the balance due on completion. This covers your material costs, confirms the customer is committed, and protects you from cancellations after you have already purchased paint and blocked time on your schedule.",
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
        Total Painting Business Startup Costs Summary
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a realistic breakdown of what it costs to start a painting
        business. Painting has the lowest startup cost of any trade, which
        makes it one of the most accessible businesses to launch.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50-$500", notes: "One-time" },
          { item: "General business license", cost: "$50-$400", notes: "Annual, varies by municipality" },
          { item: "EPA RRP certification", cost: "$500-$700", notes: "Training + firm registration" },
          { item: "General liability insurance", cost: "$500-$1,500", notes: "Annual" },
          { item: "Commercial auto insurance", cost: "$1,000-$3,000", notes: "Annual" },
          { item: "Painting equipment (full kit)", cost: "$3,000-$10,000", notes: "Sprayers, ladders, prep tools" },
          { item: "Work vehicle", cost: "$12,000-$35,000", notes: "Used van or truck" },
          { item: "Ladder rack and organization", cost: "$300-$1,100", notes: "One-time" },
          { item: "Vehicle branding", cost: "$100-$5,000", notes: "Magnets to full wrap" },
          { item: "Initial paint and supply stock", cost: "$300-$800", notes: "First few jobs" },
          { item: "Business software", cost: "$30-$150/mo", notes: "Estimating, scheduling, invoicing" },
          { item: "Marketing (first 3 months)", cost: "$300-$2,000", notes: "Google Ads, LSA, signs, cards" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $18,000-$60,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          The wide range reflects whether you already own a vehicle. If you
          have a truck or van, you can start a painting business for under
          $5,000-$10,000 in equipment, licensing, and insurance. The vehicle is
          the biggest expense. Many successful painting companies started with
          a used truck, a few brushes, a roller set, and a lot of hustle.
          Use our{" "}
          <Link href="/calculators/contractor-profit-margin/" className="text-brand-orange hover:underline">
            Contractor Profit Margin Calculator
          </Link>{" "}
          to make sure your pricing covers these startup costs.
        </p>
      </div>

      {/* Cross-promotion for homeowners */}
      <div className="bg-orange-50 border border-brand-orange rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-brand-blue mb-2">
          Are You a Homeowner Looking for a Painter?
        </h3>
        <p className="text-gray-700 mb-4">
          If you landed on this page looking for painting help for your home,
          we can connect you with licensed painting contractors in your area.
          Get free quotes from pre-screened professionals.
        </p>
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Get Free Painting Quotes at GetContractorQuotes.com
        </a>
      </div>

      {/* Internal links */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Painting Calculators & Resources</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link
            href="/calculators/paint-coverage/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Paint Coverage Calculator
          </Link>
          <Link
            href="/calculators/square-footage/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Square Footage Calculator
          </Link>
          <Link
            href="/calculators/wallpaper/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Wallpaper Calculator
          </Link>
          <Link
            href="/calculators/markup-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Markup & Margin Calculator
          </Link>
          <Link
            href="/calculators/contractor-profit-margin/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Profit Margin Calculator
          </Link>
          <Link
            href="/best/painting-software/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Best Painting Software
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Painting Business?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free tools to estimate jobs, price your work, calculate your
          margins, and find the right software for your painting company.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/painting-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare Painting Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
