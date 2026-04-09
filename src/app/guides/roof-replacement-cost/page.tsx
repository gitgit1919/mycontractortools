import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How Much Does a Roof Replacement Cost? (2026 Guide) | MyContractorTools",
  description:
    "Roof replacement costs $8,000 to $15,000 for a typical home. See 2026 pricing by material (asphalt, metal, tile, slate), labor costs, hidden fees, and how to save money on your new roof.",
};

const toc = [
  { id: "average-cost", label: "Average Roof Replacement Cost" },
  { id: "cost-by-material", label: "Cost by Roofing Material" },
  { id: "factors-affecting-cost", label: "Factors That Affect Cost" },
  { id: "labor-vs-materials", label: "Labor vs Materials Breakdown" },
  { id: "hidden-costs", label: "Hidden Costs to Watch For" },
  { id: "signs-you-need-new-roof", label: "Signs You Need a New Roof" },
  { id: "repair-vs-replace", label: "Repair vs Replace" },
  { id: "how-to-save-money", label: "How to Save Money" },
  { id: "questions-to-ask", label: "Questions to Ask Your Roofer" },
  { id: "get-free-quotes", label: "Get Free Roofing Quotes" },
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

export default function RoofReplacementCostGuide() {
  return (
    <GuideLayout
      title="How Much Does a Roof Replacement Cost? (2026 Guide)"
      description="A complete breakdown of roof replacement costs by material, home size, and region. Know what to expect before you get quotes so you can make a confident decision."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        A new roof is one of the biggest home improvement expenses you will face.
        The good news is that understanding what drives roofing costs puts you in
        a much stronger position when evaluating quotes. This guide breaks down
        every cost factor so you know exactly what to expect in 2026.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Roofing Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare prices from pre-screened roofers near you. No obligation, no cost.
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
        1. Average Roof Replacement Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The national average for a full roof replacement on a typical 1,500 to
        2,000 square foot home is <strong>$8,000 to $15,000</strong>. Most
        homeowners pay around $10,000 to $12,000 for a standard asphalt shingle
        roof replacement including tear-off and disposal.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Roofers price work by the <strong>roofing square</strong>, which equals
        100 square feet. A 2,000 sq ft home with a simple gable roof has roughly
        22 to 25 squares of roofing area (roof area is larger than floor area due
        to pitch). Use our{" "}
        <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
          Square Footage Calculator
        </Link>{" "}
        to estimate your roof area, or our{" "}
        <Link href="/calculators/roof-pitch/" className="text-brand-orange hover:underline">
          Roof Pitch Calculator
        </Link>{" "}
        to factor in slope.
      </p>

      <CostTable
        headers={["Home Size (sq ft)", "Approx. Roof Squares", "Asphalt Shingle Cost Range"]}
        rows={[
          ["1,000", "12-15", "$5,000 - $9,000"],
          ["1,500", "17-20", "$7,000 - $12,000"],
          ["2,000", "22-25", "$8,000 - $15,000"],
          ["2,500", "27-32", "$10,000 - $18,000"],
          ["3,000", "33-38", "$12,000 - $22,000"],
          ["3,500+", "38-45+", "$15,000 - $28,000+"],
        ]}
      />

      <TipBox title="Why the Wide Range?">
        <p>
          The cost range for any given home size is wide because material choice,
          roof pitch, number of layers to remove, and local labor rates all vary
          significantly. A steep, complex roof in a high-cost metro area will be
          at the top of the range. A simple gable roof in a rural area with
          competitive labor will be at the bottom.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="cost-by-material">
        2. Cost by Roofing Material
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The roofing material you choose is the single biggest factor in your
        total cost. Here is what each material costs per square foot installed,
        along with expected lifespan. Use our{" "}
        <Link href="/calculators/roofing-material/" className="text-brand-orange hover:underline">
          Roofing Material Calculator
        </Link>{" "}
        to estimate material quantities for your specific roof.
      </p>

      <CostTable
        headers={["Material", "Cost per Sq Ft (Installed)", "Lifespan", "Best For"]}
        rows={[
          ["3-Tab Asphalt Shingles", "$3.50 - $5.50", "15-20 years", "Budget-friendly, most common"],
          ["Architectural Shingles", "$4.00 - $7.00", "25-30 years", "Best value, improved durability"],
          ["Metal (Standing Seam)", "$7.00 - $14.00", "40-70 years", "Longevity, energy efficiency"],
          ["Clay/Concrete Tile", "$10.00 - $18.00", "50-100 years", "Hot climates, distinctive look"],
          ["Slate", "$15.00 - $30.00", "75-150 years", "Premium homes, maximum lifespan"],
          ["Flat/TPO Membrane", "$5.00 - $10.00", "20-30 years", "Flat or low-slope roofs"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most popular choice:</strong> Architectural (dimensional) asphalt
        shingles dominate the market because they offer the best balance of cost,
        appearance, and durability. They cost only slightly more than basic 3-tab
        shingles but last 5-10 years longer and look significantly better.
      </p>

      <TipBox title="Think About Cost Per Year, Not Just Upfront Cost">
        <p>
          A metal roof at $14,000 that lasts 50 years costs $280/year. An asphalt
          shingle roof at $10,000 that lasts 25 years costs $400/year. If you
          plan to stay in your home long-term, the premium material may actually
          be cheaper over time.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="factors-affecting-cost">
        3. Factors That Affect Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond material choice, several factors can push your roof replacement
        cost higher or lower. Understanding these helps you evaluate whether a
        quote is fair.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Roof Pitch / Steepness</h4>
          <p className="text-sm text-gray-700">
            Steeper roofs require more safety equipment, slow down the crew, and
            use more material per square foot of floor space. A roof with a 12/12
            pitch can cost 20-30% more than a standard 4/12 pitch. Calculate your
            pitch with our{" "}
            <Link href="/calculators/roof-pitch/" className="text-brand-orange hover:underline">
              Roof Pitch Calculator
            </Link>.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Layers to Remove</h4>
          <p className="text-sm text-gray-700">
            If your existing roof has two or more layers of shingles, the
            tear-off cost increases by $1,000 to $2,000 or more. Most building
            codes allow a maximum of two layers. A complete tear-off is always
            recommended for the best result.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Decking Repairs</h4>
          <p className="text-sm text-gray-700">
            Rotten or damaged roof decking (plywood sheathing) must be replaced
            before new shingles go on. This is usually discovered during tear-off
            and adds $50-$100 per sheet of plywood replaced.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Roof Complexity</h4>
          <p className="text-sm text-gray-700">
            Dormers, valleys, hips, skylights, chimneys, and multiple roof planes
            add labor time and material waste. A complex roof can cost 30-50%
            more than a simple gable roof of the same square footage. Use our{" "}
            <Link href="/calculators/rafter/" className="text-brand-orange hover:underline">
              Rafter Calculator
            </Link>{" "}
            to understand your roof structure.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Permits and Inspections</h4>
          <p className="text-sm text-gray-700">
            Most municipalities require a permit for roof replacement. Permit
            fees typically range from $100 to $500. Your contractor should pull
            the permit — if they suggest skipping it, that is a red flag.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Location and Labor Rates</h4>
          <p className="text-sm text-gray-700">
            Roofing labor rates vary 30-50% between regions. Coastal cities, the
            Northeast, and the West Coast tend to be highest. The Midwest and
            Southeast are generally more affordable. After major storms, demand
            spikes can push prices up 20% or more.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Time of Year</h4>
          <p className="text-sm text-gray-700">
            Late spring through early fall is peak roofing season. Scheduling
            your replacement in late fall or winter (weather permitting) can save
            5-15% as roofers are less busy and more willing to negotiate.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <SectionHeading id="labor-vs-materials">
        4. Labor vs Materials Breakdown
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A typical roof replacement runs about <strong>60% labor and 40%
        materials</strong>. This ratio shifts depending on the material you
        choose:
      </p>

      <CostTable
        headers={["Material", "Labor %", "Materials %", "Why"]}
        rows={[
          ["Asphalt Shingles", "60-65%", "35-40%", "Shingles are inexpensive; labor dominates"],
          ["Metal Roofing", "50-55%", "45-50%", "Metal panels cost more, narrowing the gap"],
          ["Tile", "45-55%", "45-55%", "Heavy tile requires more handling but material is pricey"],
          ["Slate", "40-50%", "50-60%", "Premium material cost shifts the ratio"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding this breakdown helps you evaluate quotes. If a quote seems
        heavy on materials but light on labor, the contractor may be using
        inflated material prices. If labor seems extremely low, the crew may be
        cutting corners or underinsured.
      </p>

      <TipBox title="Get an Itemized Quote">
        <p>
          Always ask for a line-item breakdown separating materials, labor,
          tear-off, disposal, and permit fees. This makes it much easier to
          compare quotes apples-to-apples and spot anything unusual.
        </p>
      </TipBox>

      {/* Section 5 */}
      <SectionHeading id="hidden-costs">
        5. Hidden Costs to Watch For
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The quoted price is not always the final price. These items are
        sometimes excluded from initial estimates or discovered during the job:
      </p>

      <CostTable
        headers={["Hidden Cost", "Typical Range", "Notes"]}
        rows={[
          ["Decking replacement", "$50-$100 per sheet", "Rotten plywood found during tear-off"],
          ["Ice and water shield", "$200-$600", "Required in cold climates along eaves"],
          ["Flashing replacement", "$200-$500", "Around chimneys, walls, vents, skylights"],
          ["Drip edge", "$100-$300", "Metal strip along roof edges; code required in many areas"],
          ["Ridge vent installation", "$300-$600", "Improves attic ventilation; highly recommended"],
          ["Dumpster rental", "$300-$500", "For tear-off debris; sometimes included, sometimes not"],
          ["Permit fees", "$100-$500", "Required by most municipalities"],
          ["Code upgrades", "$200-$1,000+", "Bringing ventilation, decking, or underlayment up to current code"],
        ]}
      />

      <TipBox title="Ask What Is Included">
        <p>
          Before signing a contract, ask specifically whether drip edge,
          ice barrier, ridge vent, and flashing are included. Some contractors
          include these in their base price. Others list them as add-ons, which
          can add $1,000 or more to your final bill.
        </p>
      </TipBox>

      {/* Section 6 */}
      <SectionHeading id="signs-you-need-new-roof">
        6. Signs You Need a New Roof
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not every roof issue requires a full replacement. But these signs
        suggest your roof is at or near the end of its useful life:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Age:</strong> Asphalt shingle roofs last 20-25 years. If yours
          is approaching that age, start budgeting for replacement even if it
          looks okay from the ground.
        </li>
        <li>
          <strong>Curling or buckling shingles:</strong> Shingles that are
          curling at the edges or buckling in the middle have lost their ability
          to shed water effectively.
        </li>
        <li>
          <strong>Granule loss:</strong> Check your gutters. If they are full of
          granules (the sand-like coating on shingles), your shingles are
          deteriorating and losing their UV protection.
        </li>
        <li>
          <strong>Leaks or water stains:</strong> Water stains on your ceiling
          or in your attic mean water is getting past your roof. Multiple leaks
          usually mean replacement, not repair.
        </li>
        <li>
          <strong>Sagging:</strong> A sagging roof deck indicates structural
          issues that need immediate attention. This is a safety concern.
        </li>
        <li>
          <strong>Daylight through roof boards:</strong> If you can see daylight
          from inside your attic, water can get in too.
        </li>
        <li>
          <strong>Missing shingles:</strong> A few missing shingles after a storm
          can be repaired. Large patches of missing shingles suggest the
          adhesive has failed across the roof.
        </li>
      </ul>

      {/* Section 7 */}
      <SectionHeading id="repair-vs-replace">
        7. Repair vs Replace
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A repair makes sense when the damage is localized and your roof still
        has significant life left. A replacement makes sense when the roof is
        near the end of its lifespan or damage is widespread.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-2">Repair Makes Sense When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Roof is less than 15 years old</li>
            <li>Damage is limited to a small area</li>
            <li>Only a few shingles are missing or damaged</li>
            <li>Leak is isolated to one spot (flashing, vent boot)</li>
            <li>Repair cost is less than 30% of replacement cost</li>
          </ul>
        </div>
        <div className="bg-white border border-red-300 rounded-xl p-5">
          <h3 className="font-bold text-red-700 mb-2">Replace Makes Sense When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Roof is 20+ years old</li>
            <li>Damage is widespread across the roof</li>
            <li>Multiple leaks in different areas</li>
            <li>Shingles are curling, cracking, or losing granules throughout</li>
            <li>Decking has significant rot or damage</li>
            <li>You are planning to sell the home</li>
          </ul>
        </div>
      </div>

      <CostTable
        headers={["Common Repair", "Typical Cost", "When It Works"]}
        rows={[
          ["Replace missing shingles", "$150-$400", "Storm damage, small area"],
          ["Fix a leak at a vent boot", "$150-$300", "Single point of failure"],
          ["Repair flashing", "$200-$500", "Around chimney or wall"],
          ["Patch a small section", "$300-$700", "Localized damage under 100 sq ft"],
          ["Replace a roof valley", "$500-$1,500", "Valley-specific wear"],
        ]}
      />

      <TipBox title="The 50% Rule">
        <p>
          If repair costs exceed 50% of a full replacement or your roof is
          within 5 years of its expected lifespan, replacement almost always
          makes more financial sense. You avoid paying for a repair on a roof
          that will need replacing soon anyway.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="how-to-save-money">
        8. How to Save Money on Your Roof Replacement
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A roof replacement is a major investment, but there are legitimate ways
        to reduce your costs without compromising quality:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Schedule in the off-season:</strong> Late fall and winter are
          slow periods for roofers. Many offer 5-15% discounts to keep crews
          working. Asphalt shingles can be installed in temperatures as low as
          40-45 degrees F.
        </li>
        <li>
          <strong>Get at least three quotes:</strong> Prices can vary 30-50%
          between contractors for the same job. Getting multiple quotes ensures
          you are not overpaying. Use{" "}
          <a
            href="https://getcontractorquotes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            GetContractorQuotes.com
          </a>{" "}
          to quickly get quotes from licensed roofers in your area.
        </li>
        <li>
          <strong>Choose architectural shingles over premium materials:</strong>{" "}
          Unless you have a specific reason for metal, tile, or slate,
          architectural asphalt shingles offer the best value for most homes.
        </li>
        <li>
          <strong>Ask about manufacturer promotions:</strong> Shingle
          manufacturers frequently run promotions through their certified
          installer networks. GAF, Owens Corning, and CertainTeed all offer
          enhanced warranties through their contractor programs.
        </li>
        <li>
          <strong>Check your insurance:</strong> If your roof was damaged by a
          covered event (hail, wind, fallen tree), your homeowners insurance may
          cover most of the replacement cost minus your deductible.
        </li>
        <li>
          <strong>Consider financing:</strong> Many roofing contractors offer
          financing through third-party lenders. This lets you get the roof you
          need now and pay over time. Compare rates carefully — some are
          0% interest for 12-18 months.
        </li>
        <li>
          <strong>Do not pay more than 10-20% upfront:</strong> A reputable
          roofer should not require more than a small deposit. Full payment
          upfront before work starts is a major red flag.
        </li>
      </ul>

      {/* Section 9 */}
      <SectionHeading id="questions-to-ask">
        9. Questions to Ask Your Roofer
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Before hiring a roofing contractor, ask these questions to protect
        yourself and ensure quality work:
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            q: "Are you licensed and insured?",
            why: "Verify their contractor license and ask for proof of general liability and workers comp insurance. Call the insurance company to confirm the policy is active.",
          },
          {
            q: "Will you pull the permit?",
            why: "A reputable roofer always pulls the required building permit. Skipping the permit can void your warranty and create issues when selling your home.",
          },
          {
            q: "What warranty do you offer?",
            why: "Get both the manufacturer warranty (covers materials) and the workmanship warranty (covers installation). A good roofer offers at least 5-10 years on workmanship.",
          },
          {
            q: "How many crew members and how long will it take?",
            why: "A typical residential roof replacement takes 1-3 days with a crew of 4-6. If someone quotes a week or more, ask why.",
          },
          {
            q: "What is your cleanup process?",
            why: "A professional crew uses tarps to catch debris, runs a magnetic roller to pick up nails, and leaves your property clean. Get this in writing.",
          },
          {
            q: "Will you provide a written, itemized estimate?",
            why: "Verbal estimates and lump-sum numbers make it impossible to compare quotes or know what you are paying for.",
          },
          {
            q: "Do you use subcontractors?",
            why: "Some companies subcontract the actual work. This is not necessarily bad, but you should know who will be on your roof and whether they are insured.",
          },
          {
            q: "Can I see references or recent project photos?",
            why: "A contractor with a solid track record will have no problem providing references. Check online reviews too, but ask for direct references as well.",
          },
        ].map((item) => (
          <div key={item.q} className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-brand-blue mb-1">{item.q}</h4>
            <p className="text-sm text-gray-700">{item.why}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Looking for roofing software to manage your business? Check out our{" "}
        <Link href="/best/roofing-software/" className="text-brand-orange hover:underline">
          Best Roofing Software
        </Link>{" "}
        guide for tools that help roofers estimate, schedule, and manage jobs.
      </p>

      {/* Section 10 */}
      <SectionHeading id="get-free-quotes">
        10. Get Free Roofing Quotes
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best way to know exactly what your roof replacement will cost is to
        get quotes from licensed contractors in your area. Prices vary
        significantly by region, so national averages only get you so far.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Roofing Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare quotes from pre-screened, licensed roofers near you. It takes
          less than 2 minutes and there is no obligation.
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
          <Link href="/calculators/roofing-material/" className="text-brand-orange hover:underline">
            Roofing Material Calculator
          </Link>{" "}
          — Estimate how many squares and bundles you need
        </li>
        <li>
          <Link href="/calculators/roof-pitch/" className="text-brand-orange hover:underline">
            Roof Pitch Calculator
          </Link>{" "}
          — Determine your roof slope and its impact on cost
        </li>
        <li>
          <Link href="/calculators/rafter/" className="text-brand-orange hover:underline">
            Rafter Calculator
          </Link>{" "}
          — Calculate rafter lengths for your roof structure
        </li>
        <li>
          <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
            Square Footage Calculator
          </Link>{" "}
          — Measure your roof area accurately
        </li>
      </ul>
    </GuideLayout>
  );
}
