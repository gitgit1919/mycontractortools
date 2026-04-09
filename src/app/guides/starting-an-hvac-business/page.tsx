import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How to Start an HVAC Business (2026 Guide) | MyContractorTools",
  description:
    "Complete guide to starting an HVAC business. Learn about EPA 608 certification, HVAC licensing, startup equipment costs, pricing service calls, getting customers, and scaling your HVAC company.",
};

const toc = [
  { id: "hvac-industry-overview", label: "HVAC Industry Overview" },
  { id: "licenses-certifications", label: "Required Licenses & Certifications" },
  { id: "tools-equipment", label: "Essential HVAC Tools & Equipment" },
  { id: "vehicle-inventory", label: "Vehicle & Inventory Setup" },
  { id: "insurance", label: "HVAC Insurance Requirements" },
  { id: "business-structure", label: "Business Structure & Registration" },
  { id: "pricing", label: "Pricing Your HVAC Services" },
  { id: "get-customers", label: "Getting Your First HVAC Customers" },
  { id: "software", label: "HVAC Business Software" },
  { id: "scaling", label: "Scaling Your HVAC Business" },
  { id: "mistakes", label: "Common HVAC Business Mistakes" },
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

export default function StartingHvacBusiness() {
  return (
    <GuideLayout
      title="How to Start an HVAC Business (2026 Guide)"
      description="A complete, step-by-step guide to starting your own HVAC business — from EPA certification and licensing to landing your first service calls and scaling to a full crew."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        HVAC is one of the most profitable trades to build a business around.
        Heating and cooling systems are essential, they break down regularly,
        and every homeowner and building owner needs a reliable technician.
        If you have the technical skills, this guide covers everything you need
        to handle the business side.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Whether you are coming out of an apprenticeship, leaving a larger HVAC
        company, or adding HVAC to an existing contracting business, the path
        is the same: get certified, get licensed, get insured, and start
        building your customer base.
      </p>

      {/* Section 1 */}
      <SectionHeading id="hvac-industry-overview">
        1. HVAC Industry Overview
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The U.S. HVAC market is valued at over $30 billion and continues to
        grow. Several factors are driving demand that will keep HVAC
        technicians busy for decades:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Aging systems</strong> — The average residential HVAC system
          lasts 15 to 20 years. Millions of systems installed during the 2000s
          housing boom are now due for replacement.
        </li>
        <li>
          <strong>Energy efficiency regulations</strong> — The 2023 DOE
          efficiency standards and the ongoing transition to low-GWP
          refrigerants (R-454B replacing R-410A) are driving system upgrades
          across the country. Homeowners need technicians who understand the
          new equipment.
        </li>
        <li>
          <strong>New construction</strong> — Every new home and commercial
          building needs an HVAC system designed, installed, and commissioned.
          Multifamily and commercial construction remain strong in most markets.
        </li>
        <li>
          <strong>Heat pump adoption</strong> — Federal tax credits and state
          rebates are accelerating the shift from traditional furnaces to heat
          pump systems, creating new installation and service opportunities.
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$30B+</p>
          <p className="text-sm text-gray-600 mt-1">U.S. HVAC market size</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">$500K-$2M</p>
          <p className="text-sm text-gray-600 mt-1">Average revenue for established HVAC companies</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-brand-orange">15-25%</p>
          <p className="text-sm text-gray-600 mt-1">Typical net profit margins for service-focused HVAC</p>
        </div>
      </div>

      <TipBox title="Seasonal Patterns Matter">
        <p>
          HVAC is a seasonal business. Summer (cooling) and winter (heating)
          are your peak seasons. Spring and fall are slower. Smart HVAC
          business owners use the shoulder seasons for maintenance agreements,
          system tune-ups, and indoor air quality work. Plan your cash reserves
          around the seasonal dips — do not spend your summer profits before
          the fall slowdown hits.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="licenses-certifications">
        2. Required Licenses & Certifications
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC has more licensing requirements than most trades because you are
        handling refrigerants, gas lines, and electrical systems. Here is what
        you need:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">EPA 608 Certification</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Mandatory</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            Federal law requires EPA Section 608 certification for anyone who
            purchases, handles, or disposes of refrigerants. There are four
            types: Type I (small appliances), Type II (high-pressure systems
            like residential AC), Type III (low-pressure systems like
            chillers), and Universal (covers all three). Get the Universal
            certification — it covers everything and is the industry standard.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $20-$40 exam fee | Study time: 1-2 weeks</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">State Contractor License</h4>
          <p className="text-sm text-gray-700 mb-1">
            Most states require a specific HVAC contractor license or a
            general mechanical contractor license. Requirements vary but
            typically include proof of experience (2-5 years), passing a
            trade exam, and posting a surety bond.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $200-$1,000 | Timeline: 2-8 weeks</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Journeyman / Master HVAC License</h4>
          <p className="text-sm text-gray-700 mb-1">
            Many states and municipalities require a journeyman or master
            HVAC license, separate from the business contractor license. This
            typically requires 4-5 years of documented field experience and
            passing a comprehensive technical exam. In some states, you need a
            master license to pull permits.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $100-$500 | Prerequisites: 4-5 years experience</p>
        </div>

        <div className="bg-white border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">NATE Certification</h4>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Optional but valuable</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            North American Technician Excellence (NATE) certification is the
            most recognized industry credential. It is not legally required,
            but many customers and manufacturers look for it. It demonstrates
            competence and can help you charge higher rates. Specialties
            include air conditioning, heat pumps, gas furnaces, and air
            distribution.
          </p>
          <p className="text-sm font-medium text-gray-600">Cost: $250-$400 per specialty | Renewal: every 2 years</p>
        </div>
      </div>

      <TipBox title="Check Your State Requirements First">
        <p>
          HVAC licensing varies dramatically by state. Some states (like Texas
          and Florida) have strict statewide requirements. Others regulate at
          the county or city level. Search &quot;[your state] HVAC contractor
          license requirements&quot; and look for the .gov result. Call the
          licensing board — they will walk you through the exact steps.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="tools-equipment">
        3. Essential HVAC Tools & Equipment
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC work requires specialized tools beyond what most other trades
        need. The upfront investment is significant, but these tools are what
        allow you to do the work and charge professional rates.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Core Diagnostic & Service Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Digital manifold gauge set</strong> — For measuring
          refrigerant pressures and temperatures. Digital sets with Bluetooth
          save time and improve accuracy. Budget $300-$800 for a quality set.
        </li>
        <li>
          <strong>Refrigerant recovery machine</strong> — Required by EPA
          regulations before opening any refrigerant system. Plan for
          $800-$2,000 depending on capacity.
        </li>
        <li>
          <strong>Vacuum pump</strong> — For evacuating systems before
          charging. A quality two-stage pump runs $200-$600.
        </li>
        <li>
          <strong>Electronic leak detector</strong> — For finding refrigerant
          leaks. Heated diode or infrared models are most reliable at
          $150-$400.
        </li>
        <li>
          <strong>Combustion analyzer</strong> — Essential for furnace work.
          Measures flue gas composition to verify safe and efficient operation.
          $500-$1,500 for a good unit.
        </li>
        <li>
          <strong>Multimeter and clamp meter</strong> — For electrical
          diagnostics. Every HVAC tech needs both. $100-$300 for quality
          meters.
        </li>
        <li>
          <strong>Psychrometer / hygrometer</strong> — For measuring
          temperature and humidity to verify system performance. $50-$200.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Installation & Fabrication Tools
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Sheet metal tools</strong> — Snips (left, right, straight),
          hand seamers, crimpers, duct stretcher. For fabricating ductwork on
          site. $200-$500 for a full set.
        </li>
        <li>
          <strong>Brazing/soldering equipment</strong> — Oxy-acetylene or
          air-acetylene torch kit for copper line work. $200-$500.
        </li>
        <li>
          <strong>Tube cutters and flaring tools</strong> — For copper line
          sets. $100-$250.
        </li>
        <li>
          <strong>Refrigerant scale</strong> — For accurate charging by
          weight. $100-$300.
        </li>
        <li>
          <strong>Core removal tools and service valves</strong> — For
          efficient system access. $50-$150.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Startup Equipment Cost Summary
      </h3>

      <CostTable
        rows={[
          { item: "Digital manifold gauges", cost: "$300-$800", notes: "Bluetooth-enabled recommended" },
          { item: "Refrigerant recovery machine", cost: "$800-$2,000", notes: "EPA-required for any refrigerant work" },
          { item: "Vacuum pump (two-stage)", cost: "$200-$600", notes: "Get at least 5 CFM capacity" },
          { item: "Electronic leak detector", cost: "$150-$400", notes: "Heated diode or infrared" },
          { item: "Combustion analyzer", cost: "$500-$1,500", notes: "Essential for furnace diagnostics" },
          { item: "Multimeter + clamp meter", cost: "$100-$300", notes: "Fluke or equivalent quality" },
          { item: "Brazing / torch kit", cost: "$200-$500", notes: "Oxy-acetylene or air-acetylene" },
          { item: "Sheet metal tools (full set)", cost: "$200-$500", notes: "Snips, seamers, crimpers" },
          { item: "Tube cutters + flaring tools", cost: "$100-$250", notes: "Multiple sizes needed" },
          { item: "Refrigerant scale", cost: "$100-$300", notes: "Digital, accurate to 0.1 oz" },
          { item: "Hand tools (general)", cost: "$500-$1,000", notes: "Wrenches, screwdrivers, nut drivers, drill" },
          { item: "Safety equipment", cost: "$200-$400", notes: "Gloves, glasses, hard hat, fall protection" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Total tool investment: $15,000-$30,000
        </p>
        <p className="text-gray-700 text-sm">
          If you are coming out of a job where you already own basic hand
          tools and meters, you can start closer to $15,000. If you are
          building a kit from scratch, budget $25,000-$30,000 for everything
          you need to handle residential service, repair, and installation
          work. Use our{" "}
          <Link href="/calculators/hvac-load/" className="text-brand-orange hover:underline">
            HVAC Load Calculator
          </Link>{" "}
          to size systems accurately for your customers.
        </p>
      </div>

      {/* Section 4 */}
      <SectionHeading id="vehicle-inventory">
        4. Vehicle & Inventory Setup
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your service vehicle is your mobile workshop. The right setup saves
        time on every call and makes you look professional to customers.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Vehicle Requirements
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Cargo van or service body truck</strong> — A Ford Transit,
          RAM ProMaster, or Chevy Express is the industry standard. Service
          body trucks (like a Reading or Knapheide body) offer better
          organization with exterior compartments. Budget $25,000-$45,000 for
          a good used vehicle.
        </li>
        <li>
          <strong>Shelving and organization</strong> — Invest in van shelving
          systems (Ranger Design, Adrian Steel, Weather Guard). Organized
          inventory means faster service calls. $1,500-$4,000 for a proper
          setup.
        </li>
        <li>
          <strong>Vehicle wrap or magnetic signs</strong> — Professional
          branding on your vehicle is rolling advertising. A full wrap costs
          $2,000-$5,000. Magnetic signs are $100-$300 if you want to start
          cheaper.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Initial Parts Inventory
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Common capacitors</strong> — Run and start capacitors in
          the most common sizes. These fail constantly and are a high-margin
          repair.
        </li>
        <li>
          <strong>Contactors</strong> — Single and double pole in standard
          amperages. Another frequent failure point.
        </li>
        <li>
          <strong>Refrigerant</strong> — Stock R-410A and R-22 (for older
          systems). Keep R-454B as it becomes more common. Track all
          refrigerant purchases and usage as required by EPA.
        </li>
        <li>
          <strong>Filters, belts, and fan motors</strong> — Common
          replacement parts that let you complete repairs in one visit instead
          of two.
        </li>
        <li>
          <strong>Copper fittings and line sets</strong> — Common sizes for
          residential systems.
        </li>
        <li>
          <strong>Thermostats</strong> — Stock a few popular models. Upselling
          a smart thermostat adds $100-$200 profit to a service call.
        </li>
      </ul>

      <CostTable
        rows={[
          { item: "Used cargo van or service truck", cost: "$25,000-$45,000", notes: "Under 100K miles preferred" },
          { item: "Van shelving / organization", cost: "$1,500-$4,000", notes: "Ranger Design, Adrian Steel, or similar" },
          { item: "Vehicle branding (wrap or signs)", cost: "$100-$5,000", notes: "Magnets are cheapest to start" },
          { item: "Initial parts inventory", cost: "$2,000-$5,000", notes: "Capacitors, contactors, filters, fittings" },
          { item: "Refrigerant stock", cost: "$500-$1,500", notes: "R-410A, R-22, track per EPA rules" },
        ]}
      />

      <TipBox title="One-Trip Repairs Win Customers">
        <p>
          The fastest way to build a reputation is completing repairs in a
          single visit. Stock the 20 most common parts on your truck and you
          will fix 80% of residential service calls without a return trip.
          Customers notice this, and it is a huge differentiator from
          competitors who have to &quot;order the part and come back.&quot;
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="insurance">
        5. HVAC Insurance Requirements
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC work carries real risks — refrigerant leaks, gas line work,
        electrical hazards, and working in attics and on rooftops. Proper
        insurance protects your business and is required for licensing in most
        states.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">General Liability Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers property damage and bodily injury caused by your work. If
            a refrigerant leak damages a customer&apos;s property or someone
            trips over your equipment, this policy pays the claim.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $800-$2,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Workers Compensation</h4>
          <p className="text-sm text-gray-700 mb-1">
            Required in most states once you have employees. HVAC has higher
            workers comp rates than many trades due to the physical risks
            (heights, electrical, heavy equipment). Even some solo HVAC
            contractors need it depending on state law.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: varies by state and payroll, higher rates for HVAC</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Commercial Auto Insurance</h4>
          <p className="text-sm text-gray-700 mb-1">
            Your personal auto policy will not cover accidents in a vehicle
            used for business. A commercial policy covers your service van and
            any damage or injuries.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $1,500-$3,500/year</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Tools & Equipment Coverage</h4>
          <p className="text-sm text-gray-700 mb-1">
            Covers theft or damage to your HVAC tools and equipment. Given
            that your tool kit is worth $15,000-$30,000, this coverage is
            worth every penny. Often available as a rider on your general
            liability policy.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $300-$800/year</p>
        </div>
        <div className="bg-white border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-brand-blue">Pollution Liability Insurance</h4>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">HVAC-specific</span>
          </div>
          <p className="text-sm text-gray-700 mb-1">
            This is unique to HVAC. Standard general liability policies
            exclude pollution events, and a refrigerant release can count as a
            pollution incident. Pollution liability covers cleanup costs and
            damages from accidental refrigerant releases. Not every HVAC
            business carries it, but it is worth considering, especially for
            commercial work.
          </p>
          <p className="text-sm font-medium text-gray-600">Typical cost: $500-$1,500/year</p>
        </div>
      </div>

      <CostTable
        rows={[
          { item: "General liability", cost: "$800-$2,500/yr", notes: "Required for licensing and most commercial work" },
          { item: "Workers compensation", cost: "Varies", notes: "Required with employees in most states" },
          { item: "Commercial auto", cost: "$1,500-$3,500/yr", notes: "Covers your service vehicle" },
          { item: "Tools & equipment", cost: "$300-$800/yr", notes: "Rider or standalone policy" },
          { item: "Pollution liability", cost: "$500-$1,500/yr", notes: "Covers refrigerant release incidents" },
        ]}
      />

      {/* Section 6 */}
      <SectionHeading id="business-structure">
        6. Business Structure & Registration
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before you pull your first permit or sign your first service
        agreement, get your business structure set up properly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Sole Proprietorship</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Simplest and cheapest to set up</li>
            <li>No separation between you and the business</li>
            <li>Your personal assets are at risk if sued</li>
            <li>Not recommended for HVAC due to liability risks</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-brand-blue">LLC (Recommended)</h3>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Best for most</span>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Separates personal and business assets</li>
            <li>Protects your house if a job goes wrong</li>
            <li>Costs $50-$500 depending on your state</li>
            <li>Can elect S-Corp taxation to save on self-employment tax</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Our recommendation:</strong> Form an LLC. HVAC work involves
        real liability — refrigerant handling, gas connections, electrical
        work, and heavy equipment on rooftops. An LLC protects your personal
        assets if something goes wrong.
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
          <strong>Get a business credit card</strong> — Use it for parts,
          refrigerant, fuel, and tools. Pay it off monthly. Makes expense
          tracking simple and builds business credit.
        </li>
        <li>
          <strong>Register for state and local taxes</strong> — Sales tax on
          HVAC equipment varies by state. Some states tax parts but not labor.
          Know your state&apos;s rules.
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
        7. Pricing Your HVAC Services
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Pricing is where most new HVAC business owners leave money on the
        table. There are two main pricing models, and the right one depends
        on the type of work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Flat Rate Pricing</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Customer knows the price upfront</li>
            <li>Rewards efficiency — faster techs earn more</li>
            <li>Higher perceived value for the customer</li>
            <li>Best for: service calls, common repairs, maintenance</li>
            <li>Requires a flat rate pricing book or software</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-brand-blue mb-2">Time & Materials</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Charge hourly rate plus parts markup</li>
            <li>Easier to set up when starting</li>
            <li>Customer may feel uncertain about final cost</li>
            <li>Best for: complex diagnostics, unusual repairs, commercial</li>
            <li>Track hours carefully to avoid underbilling</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Common HVAC Pricing Benchmarks
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Service call / diagnostic fee:</strong> $75-$150 depending
          on market. This covers your trip to the home and initial diagnosis.
          Many companies waive it if the customer approves the repair.
        </li>
        <li>
          <strong>Hourly rate (T&M):</strong> $85-$175 per hour for
          residential. Commercial rates can be higher.
        </li>
        <li>
          <strong>Equipment markup:</strong> 30-50% markup on parts is
          standard. Major equipment (condensers, furnaces, air handlers)
          typically carries a 40-60% markup over wholesale cost.
        </li>
        <li>
          <strong>System replacement:</strong> $5,000-$15,000+ for
          residential full system replacement (furnace + AC or heat pump),
          depending on size and efficiency tier.
        </li>
        <li>
          <strong>Maintenance agreements:</strong> $150-$300 per year for
          residential maintenance plans (2 visits per year). These are
          recurring revenue and should be a cornerstone of your business.
        </li>
      </ul>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">Use Our Calculators</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/calculators/hvac-load/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            HVAC Load Calculator
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

      <TipBox title="Flat Rate Wins for Service Work">
        <p>
          Most successful HVAC service companies use flat rate pricing. It
          removes the customer&apos;s anxiety about &quot;how long will this
          take?&quot; and rewards your efficiency. Build your flat rate book
          using your actual costs plus desired margin. Use our{" "}
          <Link href="/calculators/markup-margin/" className="text-brand-orange hover:underline">
            Markup & Margin Calculator
          </Link>{" "}
          to make sure your prices are profitable.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="get-customers">
        8. Getting Your First HVAC Customers
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC has an advantage over many trades: when someone&apos;s AC dies in
        July or their furnace stops in January, they are not comparison
        shopping for weeks. They need someone today. Your job is to be the
        first name they find.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Free Marketing (Start Immediately)
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Business Profile</strong> — This is your number one
          lead source. Set it up, add photos of your work and truck, list
          your services, and start collecting reviews. When someone searches
          &quot;AC repair near me,&quot; Google Business Profile is what shows
          up in the map pack.
        </li>
        <li>
          <strong>Ask for reviews on every call</strong> — Text the customer
          your Google review link after every service call. 10+ reviews with
          4.5+ stars makes you competitive in most markets. 50+ reviews makes
          you dominant.
        </li>
        <li>
          <strong>Nextdoor</strong> — Neighbors recommend HVAC techs here
          constantly, especially during heat waves and cold snaps. Claim your
          business and stay active.
        </li>
        <li>
          <strong>Referral incentives</strong> — Offer $25-$50 credit to
          existing customers who refer new ones. Word of mouth is the
          highest-quality lead in HVAC.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Paid Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Google Local Services Ads (LSA)</strong> — Pay per lead,
          not per click. Google Guaranteed badge builds trust. Best ROI for
          HVAC. Typical cost: $20-$75 per lead.
        </li>
        <li>
          <strong>Angi / HomeAdvisor</strong> — Shared leads. Quality varies
          but can fill your schedule when starting. Watch your cost per
          acquisition and track which leads convert.
        </li>
        <li>
          <strong>Google Ads (Search)</strong> — Target keywords like
          &quot;AC repair [city]&quot; and &quot;furnace replacement [city].&quot;
          Expensive ($30-$100+ per click in competitive markets) but
          extremely high intent.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Relationship Marketing
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Builder and GC relationships</strong> — New construction
          needs HVAC installed on every project. Introduce yourself to local
          builders and general contractors. Reliable HVAC subs who show up on
          time are hard to find — be that person.
        </li>
        <li>
          <strong>Property management companies</strong> — They manage dozens
          or hundreds of units and need a go-to HVAC company for service
          calls. Volume is steady and year-round.
        </li>
        <li>
          <strong>Real estate agents</strong> — They need HVAC inspections
          for home sales and recommend contractors to new homeowners.
        </li>
        <li>
          <strong>Maintenance agreements</strong> — Sell annual service plans
          to every customer. Two tune-ups per year, priority scheduling, and
          a discount on repairs. This creates recurring revenue and keeps
          your phone ringing in slow months.
        </li>
      </ul>

      <TipBox title="Maintenance Agreements Are Your Secret Weapon">
        <p>
          A base of 200 maintenance agreements at $200/year is $40,000 in
          predictable annual revenue. Those customers also call you first
          when they need repairs or replacements — not your competitor. Start
          selling agreements from day one.
        </p>
      </TipBox>

      {/* Section 9 */}
      <SectionHeading id="software">
        9. HVAC Business Software
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        HVAC businesses have specific software needs that go beyond basic
        invoicing. Dispatching, scheduling, flat rate pricing, maintenance
        agreement tracking, and equipment history are all critical once you
        start growing.
      </p>

      <div className="space-y-3 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Dispatching & Scheduling</h4>
              <p className="text-sm text-gray-700 mt-1">
                Assign calls to techs, optimize routes, track real-time
                location. Essential once you have more than one truck on the
                road.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">CRM & Customer History</h4>
              <p className="text-sm text-gray-700 mt-1">
                Track every customer interaction, equipment details, service
                history, and maintenance agreement status. Know what system
                the customer has before you walk in the door.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-brand-blue">Flat Rate Pricing</h4>
              <p className="text-sm text-gray-700 mt-1">
                Built-in flat rate pricing books so techs can present options
                and pricing to customers on site. Increases average ticket
                and close rate.
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
                Send invoices, collect payment in the field (credit card on
                site), and track receivables. Stop chasing checks.
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Critical</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Top HVAC software platforms:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Jobber</strong> — Excellent for solo operators and small
          teams. Easy to learn, affordable, handles scheduling, invoicing,
          and CRM. Starts around $49/month.
        </li>
        <li>
          <strong>ServiceTitan</strong> — The industry leader for larger HVAC
          companies. Advanced dispatching, flat rate pricing, membership
          tracking, marketing analytics. More expensive and complex, but
          powerful. Best for teams of 3+ techs.
        </li>
      </ul>

      <div className="my-6">
        <Link
          href="/best/hvac-software/"
          className="block text-center bg-brand-gray rounded-lg p-4 hover:bg-brand-orange hover:text-white transition-colors font-medium"
        >
          Read Our Full HVAC Software Comparison
        </Link>
      </div>

      {/* Section 10 */}
      <SectionHeading id="scaling">
        10. Scaling Your HVAC Business
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        As a solo HVAC tech, you can realistically generate $150,000-$300,000
        in annual revenue. To go beyond that, you need to add technicians
        and build systems.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        When to Hire Your First Technician
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hire when you are consistently turning down work or booking out more
        than 5-7 days. In HVAC, customers cannot wait — if you are booked
        out, they are calling your competitor. Lost calls are lost revenue.
        Your first hire should be an experienced tech who can run calls
        independently.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Training Apprentices
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Experienced HVAC techs are expensive and hard to find. Training
        apprentices is a long-term strategy that pays off. Look for people
        who are mechanically inclined, reliable, and willing to learn. A
        good apprentice can ride along on service calls within weeks and
        handle basic maintenance work within 6 months. Partner with local
        trade schools for a pipeline of candidates.
      </p>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Commercial vs. Residential Expansion
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Residential</strong> — Higher volume, smaller tickets,
          seasonal peaks. Easier to start. Maintenance agreements provide
          recurring revenue.
        </li>
        <li>
          <strong>Commercial</strong> — Larger tickets, longer sales cycles,
          more complex systems (rooftop units, VRF, chillers). Requires
          additional training and certifications. But commercial maintenance
          contracts can be worth $5,000-$50,000+ per year per building.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-brand-blue mt-8 mb-3">
        Adding Related Services
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many HVAC companies expand into plumbing and/or electrical work. The
        customer base overlaps heavily, and offering multiple trades means
        more revenue per customer. Adding plumbing is the most common
        expansion path — you already have the customer relationships and
        the service infrastructure.
      </p>

      <TipBox title="Systems Before Staff">
        <p>
          Before you hire, document your processes. How do you handle a
          service call from ring to invoice? What is your diagnostic
          procedure? How do you present options to the customer? Write it
          down. Your first employee needs to deliver the same experience your
          customers expect from you.
        </p>
      </TipBox>

      {/* Section 11 */}
      <SectionHeading id="mistakes">
        11. Common HVAC Business Mistakes
      </SectionHeading>

      <div className="space-y-4 my-6">
        {[
          {
            mistake: "Underpricing service agreements",
            fix: "Maintenance agreements should be profitable on their own, not just a loss leader. Price them to cover the cost of two visits plus parts plus a margin. If your agreement includes refrigerant top-offs with no cap, you will lose money on older systems.",
          },
          {
            mistake: "Neglecting maintenance revenue",
            fix: "Service and repair margins are great, but maintenance agreements are what keep your business alive during slow months. Every customer should be offered a maintenance plan. Target 100+ agreements in your first two years.",
          },
          {
            mistake: "Not tracking refrigerant",
            fix: "The EPA requires detailed records of all refrigerant purchases, usage, and recovery. Failing to track refrigerant can result in fines up to $44,539 per day per violation. Use your field service software to log every ounce.",
          },
          {
            mistake: "Poor dispatching",
            fix: "Sending a tech across town when you have a closer tech available wastes fuel, time, and capacity. As you add trucks, dispatching efficiency becomes a major profit lever. Invest in dispatching software early.",
          },
          {
            mistake: "Competing on price instead of value",
            fix: "There is always someone cheaper. Compete on response time, first-call fix rate, professionalism, and communication. The customers who choose you for price will leave you for price.",
          },
          {
            mistake: "Not offering financing on replacements",
            fix: "A new system costs $5,000-$15,000. Most homeowners do not have that in savings. Offering financing options (through a third-party like GreenSky or Service Finance) dramatically increases your close rate on replacements.",
          },
          {
            mistake: "Ignoring indoor air quality",
            fix: "IAQ products (air purifiers, UV lights, humidifiers, duct sealing) are high-margin add-ons that improve customer comfort and add $500-$2,000 to a sale. Train yourself and your techs to identify IAQ opportunities on every call.",
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
        Total HVAC Startup Costs Summary
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Here is a realistic breakdown of what it costs to start an HVAC
        business. Costs vary depending on whether you already own tools, a
        vehicle, and what your state requires.
      </p>

      <CostTable
        rows={[
          { item: "LLC formation + state fee", cost: "$50-$500", notes: "One-time" },
          { item: "EPA 608 certification", cost: "$20-$40", notes: "One-time exam fee" },
          { item: "State HVAC contractor license", cost: "$200-$1,000", notes: "Varies by state" },
          { item: "NATE certification", cost: "$250-$400", notes: "Optional, per specialty" },
          { item: "General liability insurance", cost: "$800-$2,500", notes: "Annual" },
          { item: "Commercial auto insurance", cost: "$1,500-$3,500", notes: "Annual" },
          { item: "Tools and equipment", cost: "$15,000-$30,000", notes: "If building from scratch" },
          { item: "Service vehicle", cost: "$25,000-$45,000", notes: "Used cargo van or service truck" },
          { item: "Van shelving and setup", cost: "$1,500-$4,000", notes: "One-time" },
          { item: "Initial parts inventory", cost: "$2,000-$5,000", notes: "Common repair parts" },
          { item: "Refrigerant stock", cost: "$500-$1,500", notes: "R-410A, R-22" },
          { item: "Vehicle branding", cost: "$100-$5,000", notes: "Magnets to full wrap" },
          { item: "Business software", cost: "$50-$200/mo", notes: "Scheduling, invoicing, CRM" },
          { item: "Marketing (first 3 months)", cost: "$500-$3,000", notes: "Google Ads, LSA, signs" },
        ]}
      />

      <div className="bg-brand-gray rounded-xl p-6 my-8">
        <p className="text-lg font-bold text-brand-blue mb-2">
          Realistic total: $50,000-$100,000 to start
        </p>
        <p className="text-gray-700 text-sm">
          HVAC has a higher startup cost than many trades because of the
          specialized equipment and vehicle requirements. If you already own
          tools and a vehicle from your current employer, you can start for
          $10,000-$20,000. Many new HVAC business owners finance their vehicle
          and start with the minimum tool kit, adding specialized equipment as
          revenue grows. Use our{" "}
          <Link href="/calculators/contractor-profit-margin/" className="text-brand-orange hover:underline">
            Contractor Profit Margin Calculator
          </Link>{" "}
          to make sure your pricing covers these startup costs.
        </p>
      </div>

      {/* Cross-promotion for homeowners */}
      <div className="bg-orange-50 border border-brand-orange rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-brand-blue mb-2">
          Are You a Homeowner Looking for an HVAC Contractor?
        </h3>
        <p className="text-gray-700 mb-4">
          If you landed on this page looking for HVAC help for your home, we
          can connect you with licensed HVAC contractors in your area. Get
          free quotes from pre-screened professionals.
        </p>
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Get Free HVAC Quotes at GetContractorQuotes.com
        </a>
      </div>

      {/* Internal links */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-brand-blue mb-3">HVAC Calculators & Resources</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link
            href="/calculators/hvac-load/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            HVAC Load Calculator
          </Link>
          <Link
            href="/calculators/cfm-airflow/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            CFM Airflow Calculator
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
          <Link
            href="/calculators/electrical-load/"
            className="block text-center bg-brand-gray rounded-lg p-3 hover:bg-brand-orange hover:text-white transition-colors text-sm font-medium"
          >
            Electrical Load Calculator
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-blue rounded-xl p-6 my-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your HVAC Business?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Use our free tools to size systems, price your work, calculate your
          margins, and find the right software for your HVAC company.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/calculators/"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/hvac-software/"
            className="inline-block bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Compare HVAC Software
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
