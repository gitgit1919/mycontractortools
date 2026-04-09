import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How Much Does HVAC Installation Cost? (2026 Guide) | MyContractorTools",
  description:
    "HVAC installation costs $5,000 to $12,000 for a full system. See 2026 pricing by system type (central AC, heat pump, furnace, mini-split), home size, ductwork costs, rebates, and how to save money.",
};

const toc = [
  { id: "average-cost", label: "Average HVAC Installation Cost" },
  { id: "cost-by-system-type", label: "Cost by System Type" },
  { id: "cost-by-home-size", label: "Cost by Home Size" },
  { id: "factors-affecting-cost", label: "Factors That Affect Cost" },
  { id: "ductwork-costs", label: "Ductwork Costs" },
  { id: "energy-efficiency-rebates", label: "Energy Efficiency & Rebates" },
  { id: "signs-you-need-new-hvac", label: "Signs You Need a New HVAC System" },
  { id: "repair-vs-replace", label: "Repair vs Replace" },
  { id: "how-to-save-money", label: "How to Save Money" },
  { id: "get-free-quotes", label: "Get Free HVAC Quotes" },
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

function CostTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-brand-gray">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-left px-4 py-2 font-semibold text-brand-blue">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2 ${j === 0 ? "font-medium" : "text-gray-600"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HvacInstallationCostGuide() {
  return (
    <GuideLayout
      title="How Much Does HVAC Installation Cost? (2026 Guide)"
      description="A complete breakdown of HVAC installation costs by system type, home size, and efficiency rating. Know what to expect before you get quotes so you can make a confident decision."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Replacing or installing an HVAC system is one of the most significant
        home improvement investments you will make. The right system keeps your
        home comfortable year-round while keeping energy bills manageable. This
        guide breaks down every cost factor so you know exactly what to expect
        in 2026.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free HVAC Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare prices from pre-screened HVAC installers near you. No obligation, no cost.
        </p>
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Get Free Quotes
        </a>
      </div>

      {/* Section 1 */}
      <SectionHeading id="average-cost">
        1. Average HVAC Installation Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The national average for HVAC installation depends on the type of
        system you need. Most homeowners pay between{" "}
        <strong>$5,000 and $12,000</strong> for a complete heating and cooling
        system, including equipment and labor. A single component like a
        central AC unit or furnace costs less on its own.
      </p>

      <CostTable
        headers={["System", "Average Cost Range", "Includes"]}
        rows={[
          ["Central Air Conditioning", "$3,500 - $7,500", "Unit, labor, refrigerant, thermostat"],
          ["Furnace (Gas or Electric)", "$2,500 - $6,000", "Unit, labor, venting, thermostat"],
          ["Full System (AC + Furnace)", "$5,000 - $12,000", "Both units, labor, thermostat, ductwork connections"],
          ["Heat Pump", "$4,000 - $8,000", "Unit, labor, refrigerant lines, thermostat"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        These ranges assume existing ductwork in good condition. If your home
        needs new ductwork or significant duct modifications, expect to add
        $2,000 to $6,000 or more to the total. Use our{" "}
        <Link href="/calculators/hvac-load/" className="text-brand-orange hover:underline">
          HVAC Load Calculator
        </Link>{" "}
        to determine the right system size for your home before getting quotes.
      </p>

      <TipBox title="Why the Wide Range?">
        <p>
          HVAC costs vary widely because system efficiency (SEER rating), brand,
          home size, ductwork condition, and local labor rates all differ. A
          high-efficiency system in a large home with old ductwork will be at
          the top of the range. A standard-efficiency unit in a smaller home
          with existing ducts will be at the bottom.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="cost-by-system-type">
        2. Cost by System Type
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The type of HVAC system you choose has the biggest impact on your
        total cost. Here is what each system type costs installed, along with
        its best use case and typical efficiency range.
      </p>

      <CostTable
        headers={["System Type", "Cost Range (Installed)", "Best For", "Efficiency"]}
        rows={[
          ["Central Air Conditioning", "$3,500 - $7,500", "Homes with existing ductwork", "14-26 SEER"],
          ["Air-Source Heat Pump", "$4,000 - $8,000", "Moderate climates, heating + cooling", "15-22 SEER"],
          ["Ductless Mini-Split", "$3,000 - $10,000", "No ductwork, room additions, zoning", "16-30+ SEER"],
          ["Gas Furnace", "$2,500 - $5,500", "Cold climates, natural gas available", "80-98% AFUE"],
          ["Electric Furnace", "$2,000 - $4,000", "No gas line, mild winters", "95-100% AFUE"],
          ["Boiler (Hot Water/Steam)", "$3,500 - $8,000", "Radiant heat, older homes", "80-95% AFUE"],
          ["Geothermal Heat Pump", "$15,000 - $35,000", "Long-term savings, eco-friendly", "300-500% efficiency"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most popular choice:</strong> A central AC paired with a gas
        furnace remains the most common setup in the United States. Heat pumps
        are gaining market share quickly because they handle both heating and
        cooling in a single unit and qualify for significant federal tax
        credits under the Inflation Reduction Act.
      </p>

      <TipBox title="Heat Pumps Are Worth Considering">
        <p>
          Modern heat pumps work efficiently in temperatures well below freezing
          and provide both heating and cooling from one unit. Combined with
          federal tax credits of up to $2,000, a heat pump can cost less than a
          traditional furnace-plus-AC setup over its lifetime. Ask your
          contractor for a heat pump quote alongside traditional options.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="cost-by-home-size">
        3. Cost by Home Size
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your home size directly determines the tonnage (capacity) of the HVAC
        system you need, which affects equipment cost. Oversizing or
        undersizing a system leads to higher energy bills, poor humidity
        control, and premature equipment failure. Use our{" "}
        <Link href="/calculators/hvac-load/" className="text-brand-orange hover:underline">
          HVAC Load Calculator
        </Link>{" "}
        to get an accurate sizing estimate based on your home specifics.
      </p>

      <CostTable
        headers={["Home Size (sq ft)", "Typical Tonnage", "Central AC Cost", "Full System Cost (AC + Furnace)"]}
        rows={[
          ["1,000", "1.5 - 2 tons", "$3,000 - $5,000", "$5,000 - $8,000"],
          ["1,500", "2 - 2.5 tons", "$3,500 - $5,500", "$5,500 - $9,000"],
          ["2,000", "2.5 - 3 tons", "$4,000 - $6,500", "$6,500 - $10,500"],
          ["2,500", "3 - 3.5 tons", "$4,500 - $7,000", "$7,500 - $11,500"],
          ["3,000+", "3.5 - 5 tons", "$5,500 - $8,500", "$9,000 - $14,000+"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        These ranges are for standard-efficiency equipment with existing
        ductwork. High-efficiency systems, poor ductwork, or difficult
        installations will push costs toward the higher end. You can also use
        our{" "}
        <Link href="/calculators/cfm-airflow/" className="text-brand-orange hover:underline">
          CFM Airflow Calculator
        </Link>{" "}
        to understand airflow requirements for your space.
      </p>

      <TipBox title="Do Not Skip the Load Calculation">
        <p>
          A proper Manual J load calculation considers your home&apos;s
          insulation, windows, orientation, climate zone, and more. Many
          contractors skip this and just match the old system size, which may
          have been wrong to begin with. Insist on a load calculation before
          accepting any quote.
        </p>
      </TipBox>

      {/* Section 4 */}
      <SectionHeading id="factors-affecting-cost">
        4. Factors That Affect Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond system type and home size, several factors can significantly
        affect your total HVAC installation cost. Understanding these helps you
        evaluate quotes and avoid surprises.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">SEER / Efficiency Rating</h4>
          <p className="text-sm text-gray-700">
            Higher SEER-rated equipment costs more upfront but saves money on
            energy bills every month. A 16 SEER unit typically costs $1,000 to
            $2,000 more than a 14 SEER unit, but can save $200 or more per year
            in electricity. The federal minimum is now 15 SEER in southern states
            and 14 SEER in northern states.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Home Size and Layout</h4>
          <p className="text-sm text-gray-700">
            Larger homes need higher-capacity systems that cost more. Multi-story
            homes, homes with many rooms, or unusual layouts may need zoning
            systems or multiple units, increasing cost. Use our{" "}
            <Link href="/calculators/hvac-load/" className="text-brand-orange hover:underline">
              HVAC Load Calculator
            </Link>{" "}
            to get an accurate sizing estimate.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Ductwork Condition</h4>
          <p className="text-sm text-gray-700">
            If your existing ductwork is leaky, undersized, or damaged, it will
            need repair or replacement before a new system can work efficiently.
            Duct modifications can add $500 to $2,000. Complete ductwork
            installation runs $2,000 to $6,000 or more.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Location and Labor Rates</h4>
          <p className="text-sm text-gray-700">
            HVAC labor rates vary 25-40% between regions. Major metro areas,
            coastal cities, and the Northeast tend to be the most expensive.
            The Midwest and Southeast are generally more affordable.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Brand and Equipment Quality</h4>
          <p className="text-sm text-gray-700">
            Premium brands like Carrier, Trane, and Lennox cost 20-40% more
            than budget brands like Goodman or Amana. Mid-range brands like
            Rheem and York offer a good balance of quality and value. The
            quality of the installation matters more than the brand name.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Permits and Inspections</h4>
          <p className="text-sm text-gray-700">
            Most municipalities require a permit for HVAC installation or
            replacement. Permit fees range from $100 to $500. Some areas also
            require a post-installation inspection. Your contractor should
            handle the permit — if they suggest skipping it, find a different
            contractor.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Installation Complexity</h4>
          <p className="text-sm text-gray-700">
            Replacing an existing system in the same location is straightforward.
            Moving equipment, running new refrigerant lines, upgrading
            electrical panels, or converting from one fuel type to another adds
            significant labor and material costs. A system conversion (e.g., oil
            to gas) can add $2,000 to $5,000.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <SectionHeading id="ductwork-costs">
        5. Ductwork Costs
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Ductwork is often the hidden cost that catches homeowners off guard.
        Your ducts are the delivery system for heated and cooled air, and if
        they are leaky, damaged, or non-existent, your new HVAC system will
        not perform well regardless of how efficient it is.
      </p>

      <CostTable
        headers={["Ductwork Service", "Cost Range", "When Needed"]}
        rows={[
          ["New ductwork (full home)", "$2,000 - $6,000+", "New construction, homes without ducts"],
          ["Duct repair and sealing", "$500 - $2,000", "Leaky or disconnected ducts"],
          ["Duct replacement (full)", "$1,500 - $5,000", "Old, damaged, or undersized ducts"],
          ["Duct cleaning", "$300 - $700", "Accumulated dust, mold, or debris"],
          ["Duct insulation", "$500 - $2,000", "Ducts in unconditioned spaces (attic, crawlspace)"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>When ductless makes sense:</strong> If your home does not have
        existing ductwork, adding ducts can cost as much as the HVAC equipment
        itself. In this case, a ductless mini-split system is often the smarter
        choice. Mini-splits mount on the wall and connect to an outdoor unit
        through a small conduit, eliminating ductwork entirely. They also offer
        zone control, letting you heat and cool individual rooms independently.
      </p>

      <TipBox title="Leaky Ducts Waste 20-30% of Your Energy">
        <p>
          According to the Department of Energy, typical duct systems lose 20-30%
          of the air that moves through them due to leaks, holes, and poor
          connections. Sealing and insulating your ducts when you install a new
          system is one of the best investments you can make. Ask your HVAC
          contractor about duct sealing as part of the installation.
        </p>
      </TipBox>

      {/* Section 6 */}
      <SectionHeading id="energy-efficiency-rebates">
        6. Energy Efficiency & Rebates
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Choosing a higher-efficiency HVAC system costs more upfront but can
        significantly reduce your monthly energy bills and qualify you for
        valuable tax credits and rebates. Understanding efficiency ratings
        helps you make a smarter buying decision.
      </p>

      <h3 className="text-lg font-bold text-brand-blue mt-8 mb-3">
        SEER Ratings Explained
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency.
        Higher is better. AFUE (Annual Fuel Utilization Efficiency) measures
        furnace efficiency as a percentage.
      </p>

      <CostTable
        headers={["Efficiency Level", "SEER Range", "Extra Cost vs Base", "Annual Savings Estimate"]}
        rows={[
          ["Standard (minimum)", "14-15 SEER", "Base price", "Baseline"],
          ["Mid-Efficiency", "16-18 SEER", "+$1,000 - $2,000", "$150 - $300/year"],
          ["High-Efficiency", "19-21 SEER", "+$2,000 - $4,000", "$300 - $500/year"],
          ["Ultra-Efficient", "22-26+ SEER", "+$4,000 - $7,000", "$400 - $700/year"],
        ]}
      />

      <h3 className="text-lg font-bold text-brand-blue mt-8 mb-3">
        Federal Tax Credits (Inflation Reduction Act)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Inflation Reduction Act (IRA) provides significant tax credits for
        energy-efficient HVAC equipment through 2032:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <strong>Heat pumps:</strong> Up to $2,000 tax credit for qualifying
          heat pump systems (air-source or geothermal)
        </li>
        <li>
          <strong>Central AC:</strong> Up to $600 tax credit for Energy
          Star-certified central air conditioners meeting efficiency thresholds
        </li>
        <li>
          <strong>Furnaces and boilers:</strong> Up to $600 tax credit for
          qualifying high-efficiency gas furnaces (97%+ AFUE) and boilers
        </li>
        <li>
          <strong>Overall annual cap:</strong> $3,200 per year for all energy
          efficiency home improvements combined ($1,200 general cap plus $2,000
          for heat pumps)
        </li>
      </ul>

      <h3 className="text-lg font-bold text-brand-blue mt-8 mb-3">
        Utility Rebates
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many local utility companies offer additional rebates of $200 to
        $1,000 or more for installing high-efficiency HVAC equipment. Check
        with your local utility or visit the DSIRE database to find rebates in
        your area. These stack on top of federal tax credits.
      </p>

      <TipBox title="The ROI of Higher Efficiency">
        <p>
          A $2,000 upgrade from a 14 SEER to an 18 SEER system that saves
          $250/year pays for itself in 8 years. If you add a $600 federal tax
          credit and a $300 utility rebate, the payback drops to about 4.4
          years. After that, the savings go straight into your pocket for the
          remaining 10-15 years of the system&apos;s life.
        </p>
      </TipBox>

      {/* Section 7 */}
      <SectionHeading id="signs-you-need-new-hvac">
        7. Signs You Need a New HVAC System
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not every HVAC problem requires a full replacement. But these signs
        suggest your system is at or near the end of its useful life:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Age:</strong> Most HVAC systems last 15-20 years. If yours is
          approaching that age, start budgeting for replacement even if it
          still runs. Efficiency declines significantly in older units.
        </li>
        <li>
          <strong>Frequent repairs:</strong> If you are calling for repairs
          more than once or twice a year, those costs add up quickly. A system
          that needs constant attention is telling you it is wearing out.
        </li>
        <li>
          <strong>Rising energy bills:</strong> If your energy bills are
          climbing without a change in usage, your system is losing efficiency.
          Compare your bills year-over-year to spot the trend.
        </li>
        <li>
          <strong>Uneven temperatures:</strong> Hot and cold spots throughout
          your home indicate your system can no longer distribute air
          effectively. This can be a system issue, a ductwork issue, or both.
        </li>
        <li>
          <strong>R-22 refrigerant (Freon):</strong> R-22 was phased out in
          2020 and is now extremely expensive. If your AC uses R-22, any
          refrigerant-related repair will cost significantly more than it
          would with a newer R-410A or R-454B system. Replacement is usually
          the better financial decision.
        </li>
        <li>
          <strong>Unusual noises or smells:</strong> Grinding, squealing,
          banging, or musty smells indicate serious mechanical problems or
          mold in the system.
        </li>
        <li>
          <strong>Humidity problems:</strong> A properly functioning HVAC
          system controls humidity. If your home feels sticky in summer or
          excessively dry in winter, the system may no longer be working
          correctly.
        </li>
      </ul>

      {/* Section 8 */}
      <SectionHeading id="repair-vs-replace">
        8. Repair vs Replace
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The decision to repair or replace depends on the age of your system,
        the cost of the repair, and how many useful years remain. A common
        rule of thumb is the <strong>$5,000 rule</strong>.
      </p>

      <TipBox title="The $5,000 Rule">
        <p>
          Multiply the age of your system (in years) by the cost of the
          repair. If the result exceeds $5,000, replacement is usually the
          better investment. For example: a 12-year-old system needing a $500
          repair = $6,000, which suggests replacement. An 8-year-old system
          needing a $400 repair = $3,200, which suggests repair.
        </p>
      </TipBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-2">Repair Makes Sense When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>System is less than 10 years old</li>
            <li>Repair cost is under $1,000</li>
            <li>First major repair on this system</li>
            <li>System uses modern refrigerant (R-410A or R-454B)</li>
            <li>Problem is a simple component (capacitor, contactor, fan motor)</li>
          </ul>
        </div>
        <div className="bg-white border border-red-300 rounded-xl p-5">
          <h3 className="font-bold text-red-700 mb-2">Replace Makes Sense When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>System is 15+ years old</li>
            <li>Compressor or heat exchanger has failed</li>
            <li>System uses R-22 refrigerant</li>
            <li>Repair costs exceed 50% of replacement cost</li>
            <li>Multiple repairs in the past two years</li>
            <li>Energy bills have been steadily increasing</li>
          </ul>
        </div>
      </div>

      <CostTable
        headers={["Common Repair", "Typical Cost", "When It Works"]}
        rows={[
          ["Capacitor replacement", "$150 - $400", "System won't start or hums without running"],
          ["Refrigerant recharge", "$200 - $600", "Low refrigerant from a small leak"],
          ["Blower motor replacement", "$300 - $800", "Weak airflow, motor burnout"],
          ["Thermostat replacement", "$100 - $350", "Inaccurate readings, no response"],
          ["Contactor replacement", "$150 - $350", "System won't turn on/off properly"],
          ["Compressor replacement", "$1,500 - $3,000", "Often not worth it on older systems"],
          ["Heat exchanger replacement", "$1,500 - $3,500", "Carbon monoxide risk; often warrants full replacement"],
        ]}
      />

      {/* Section 9 */}
      <SectionHeading id="how-to-save-money">
        9. How to Save Money on HVAC Installation
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        An HVAC system is a major investment, but there are legitimate ways to
        reduce your costs without sacrificing comfort or reliability:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Install in the off-season:</strong> Spring and fall are the
          slowest seasons for HVAC contractors. Scheduling your installation
          in April-May or September-October can save 10-20% as contractors
          offer deals to keep crews busy.
        </li>
        <li>
          <strong>Get at least three quotes:</strong> Prices can vary 30-50%
          between contractors for the same equipment. Getting multiple quotes
          ensures you are not overpaying and gives you leverage to negotiate.
          Use{" "}
          <a
            href="https://getcontractorquotes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            GetContractorQuotes.com
          </a>{" "}
          to quickly get quotes from licensed HVAC contractors in your area.
        </li>
        <li>
          <strong>Take advantage of tax credits and rebates:</strong> Federal
          tax credits can save you up to $2,000 on a heat pump and up to $600
          on other qualifying equipment. Stack these with utility rebates for
          even more savings.
        </li>
        <li>
          <strong>Consider financing:</strong> Many HVAC contractors offer
          financing through third-party lenders with promotional rates as low
          as 0% interest for 12-18 months. This lets you install the system
          you need now and pay over time. Compare rates carefully.
        </li>
        <li>
          <strong>Do not oversize:</strong> A properly sized system costs less
          to buy, less to install, and less to operate. Insist on a Manual J
          load calculation rather than a rough estimate.
        </li>
        <li>
          <strong>Ask about manufacturer promotions:</strong> Major brands
          frequently run seasonal promotions and rebates through their dealer
          networks. Ask your contractor about current manufacturer incentives.
        </li>
        <li>
          <strong>Bundle ductwork with installation:</strong> If your ducts
          need attention, having the work done at the same time as the system
          installation is more cost-effective than doing it separately.
        </li>
      </ul>

      {/* Section 10 */}
      <SectionHeading id="get-free-quotes">
        10. Get Free HVAC Quotes
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best way to know exactly what your HVAC installation will cost is
        to get quotes from licensed contractors in your area. Prices vary
        significantly by region, equipment choice, and installation
        complexity, so national averages only get you so far.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free HVAC Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare quotes from pre-screened, licensed HVAC installers near you.
          It takes less than 2 minutes and there is no obligation.
        </p>
        <a
          href="https://getcontractorquotes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Get Free Quotes Now
        </a>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        While you are planning your project, use these free tools to help
        prepare:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <Link href="/calculators/hvac-load/" className="text-brand-orange hover:underline">
            HVAC Load Calculator
          </Link>{" "}
          — Determine the right system size for your home
        </li>
        <li>
          <Link href="/calculators/cfm-airflow/" className="text-brand-orange hover:underline">
            CFM Airflow Calculator
          </Link>{" "}
          — Calculate airflow requirements for your ductwork
        </li>
        <li>
          <Link href="/best/hvac-software/" className="text-brand-orange hover:underline">
            Best HVAC Software
          </Link>{" "}
          — Top tools for HVAC contractors to estimate and manage jobs
        </li>
      </ul>
    </GuideLayout>
  );
}
