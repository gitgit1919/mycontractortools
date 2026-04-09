import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How Much Does Fence Installation Cost? (2026 Guide) | MyContractorTools",
  description:
    "Fence installation costs $1,500 to $4,500 for 150 linear feet of wood privacy fence. See 2026 pricing by material (wood, vinyl, chain link, aluminum), hidden costs, DIY vs pro, and how to save money.",
};

const toc = [
  { id: "average-cost", label: "Average Fence Cost" },
  { id: "cost-by-material", label: "Cost by Fence Material" },
  { id: "cost-by-height", label: "Cost by Fence Height" },
  { id: "factors-affecting-cost", label: "Factors That Affect Cost" },
  { id: "wood-fence-options", label: "Wood Fence Options" },
  { id: "hidden-costs", label: "Hidden Costs" },
  { id: "diy-vs-professional", label: "DIY vs Professional" },
  { id: "how-to-save-money", label: "How to Save Money" },
  { id: "maintenance-by-material", label: "Maintenance by Material" },
  { id: "get-free-quotes", label: "Get Free Fence Quotes" },
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

export default function FenceInstallationCostGuide() {
  return (
    <GuideLayout
      title="How Much Does Fence Installation Cost? (2026 Guide)"
      description="A complete breakdown of fence installation costs by material, height, and yard size. Know what to expect before you get quotes so you can budget with confidence."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        A new fence adds privacy, security, and curb appeal to your property.
        Whether you are enclosing a backyard, keeping pets safe, or marking your
        property line, understanding fence costs helps you budget accurately and
        evaluate contractor quotes. This guide breaks down every cost factor so
        you know exactly what to expect in 2026.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Fence Installation Quotes from Licensed Contractors
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare prices from pre-screened fence contractors near you. No obligation, no cost.
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
        1. Average Fence Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The national average for a wood privacy fence installation is{" "}
        <strong>$1,500 to $4,500 for 150 linear feet</strong>. Most homeowners
        pay <strong>$15 to $30 per linear foot installed</strong>, which includes
        materials, labor, posts, and hardware. The total depends heavily on your
        yard size, fence material, and local labor rates.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        To estimate how much fencing you need, measure the perimeter of the area
        you want to enclose. Use our{" "}
        <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
          Square Footage Calculator
        </Link>{" "}
        to help measure your yard, or our{" "}
        <Link href="/calculators/fence/" className="text-brand-orange hover:underline">
          Fence Calculator
        </Link>{" "}
        to estimate materials and costs for your specific project.
      </p>

      <CostTable
        headers={["Yard Size", "Approx. Linear Feet", "Wood Privacy Fence Cost"]}
        rows={[
          ["Small (1/8 acre)", "100-130 lf", "$1,500 - $3,900"],
          ["Average (1/4 acre)", "150-200 lf", "$2,250 - $6,000"],
          ["Large (1/3 acre)", "200-250 lf", "$3,000 - $7,500"],
          ["Half acre", "250-330 lf", "$3,750 - $9,900"],
          ["Full acre", "400-500 lf", "$6,000 - $15,000"],
        ]}
      />

      <TipBox title="Why the Wide Range?">
        <p>
          Fence costs vary based on material quality (pine vs cedar), fence
          height (4 ft vs 6 ft), number of gates, terrain difficulty, and local
          labor rates. A flat yard with easy access in a rural area will be at
          the bottom of the range. A sloped yard with rock, multiple gates, and
          city labor rates will be at the top.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="cost-by-material">
        2. Cost by Fence Material
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The material you choose is the single biggest factor in your total fence
        cost. Here is what each material costs per linear foot installed,
        including posts and labor, along with expected lifespan.
      </p>

      <CostTable
        headers={["Material", "Cost per Linear Ft (Installed)", "Lifespan", "Best For"]}
        rows={[
          ["Chain Link", "$10 - $20", "15-20 years", "Budget fencing, pet containment"],
          ["Wood Privacy (Pine)", "$15 - $25", "10-15 years", "Privacy on a budget"],
          ["Wood Privacy (Cedar)", "$20 - $30", "15-25 years", "Best value privacy fence"],
          ["Vinyl / PVC", "$20 - $40", "20-30 years", "Low maintenance, clean look"],
          ["Aluminum", "$25 - $50", "30-50 years", "Decorative, pool enclosures"],
          ["Composite", "$25 - $45", "25-30 years", "Wood look, minimal upkeep"],
          ["Wrought Iron", "$30 - $60", "50-100 years", "Security, high-end curb appeal"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most popular choice:</strong> Cedar wood privacy fencing
        dominates the residential market because it offers the best balance of
        cost, appearance, and natural rot resistance. Vinyl is the fastest-growing
        alternative for homeowners who want zero maintenance.
      </p>

      <TipBox title="Think Long-Term: Cost Per Year of Life">
        <p>
          A vinyl fence at $6,000 that lasts 25 years costs $240/year. A pine
          fence at $3,000 that lasts 12 years costs $250/year and needs staining
          every 2-3 years. When you factor in maintenance costs, the cheaper
          upfront option is not always the cheaper long-term choice.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="cost-by-height">
        3. Cost by Fence Height
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Fence height directly affects both material cost and labor. Taller fences
        require longer posts, more pickets or panels, and deeper post holes.
        Here is how height impacts the price per linear foot for a standard wood
        privacy fence.
      </p>

      <CostTable
        headers={["Fence Height", "Cost per Linear Ft", "Cost Increase", "Common Use"]}
        rows={[
          ["4 feet", "$12 - $22", "Baseline", "Front yards, decorative borders"],
          ["5 feet", "$15 - $27", "+15-20%", "Side yards, moderate privacy"],
          ["6 feet", "$18 - $32", "+30-40%", "Backyard privacy (most common)"],
          ["8 feet", "$25 - $45", "+70-100%", "Maximum privacy, commercial"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most common height:</strong> Six-foot fences are the standard for
        backyard privacy. Many municipalities restrict residential fences to 6
        feet in backyards and 4 feet in front yards, so check your local
        building codes before planning an 8-foot fence.
      </p>

      <TipBox title="Check Your Local Code First">
        <p>
          Most cities have height restrictions, setback requirements (how far the
          fence must be from the property line), and rules about which side of
          the fence faces your neighbor. Violating these rules can result in
          fines and mandatory removal. Your fence contractor should know local
          codes, but it is your responsibility to verify.
        </p>
      </TipBox>

      {/* Section 4 */}
      <SectionHeading id="factors-affecting-cost">
        4. Factors That Affect Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond material and height, several factors can push your fence
        installation cost higher or lower. Understanding these helps you evaluate
        whether a quote is fair.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Total Linear Footage</h4>
          <p className="text-sm text-gray-700">
            More fencing means more materials and labor, but the per-foot cost
            often drops slightly on larger jobs because the fixed costs (mobilization,
            equipment) are spread across more footage. Use our{" "}
            <Link href="/calculators/fence/" className="text-brand-orange hover:underline">
              Fence Calculator
            </Link>{" "}
            to estimate your total linear footage.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Terrain and Slope</h4>
          <p className="text-sm text-gray-700">
            Sloped yards require stepped or racked panels, which adds labor and
            material. Rocky soil makes post holes significantly harder to dig and
            may require specialized equipment, adding $5-$15 per post.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Gate Quantity and Type</h4>
          <p className="text-sm text-gray-700">
            Each standard walk gate adds $150 to $400. A double-wide drive gate
            for vehicles runs $300 to $800 or more. Gates require additional
            posts, hardware, and precise installation to swing properly over time.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Permit Requirements</h4>
          <p className="text-sm text-gray-700">
            Most cities require a permit for fences over 4 feet tall. Permit fees
            range from $50 to $250 depending on your municipality. Your
            contractor should handle the permit, but confirm this before work
            begins.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Property Line Survey</h4>
          <p className="text-sm text-gray-700">
            If your property boundaries are not clearly marked, you may need a
            professional survey ($300-$800) before installation. Building a fence
            even a few inches over the property line can result in a costly legal
            dispute with your neighbor.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Old Fence Removal</h4>
          <p className="text-sm text-gray-700">
            Removing and disposing of an existing fence typically costs $3 to $5
            per linear foot, or $500 to $1,500 for a full yard. Some contractors
            include removal in their quote, others charge separately.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">HOA Requirements</h4>
          <p className="text-sm text-gray-700">
            Homeowners associations often dictate fence material, color, height,
            and style. Some HOAs require architectural review board approval
            before installation, which can add weeks to your timeline and limit
            your material choices.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <SectionHeading id="wood-fence-options">
        5. Wood Fence Options
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Wood remains the most popular fencing material in the United States.
        The species of wood and the fence style both affect cost and appearance.
        Here is a breakdown of common wood types and styles.
      </p>

      <h3 className="text-xl font-semibold text-brand-blue mt-8 mb-3">Wood Species</h3>

      <CostTable
        headers={["Wood Type", "Cost per Linear Ft", "Lifespan (Untreated)", "Notes"]}
        rows={[
          ["Pressure-Treated Pine", "$12 - $22", "10-15 years", "Most affordable, requires staining"],
          ["Cedar", "$18 - $30", "15-25 years", "Natural rot resistance, ages to silver-gray"],
          ["Redwood", "$25 - $40", "20-30 years", "Premium look, excellent durability, limited availability"],
        ]}
      />

      <h3 className="text-xl font-semibold text-brand-blue mt-8 mb-3">Fence Styles</h3>

      <CostTable
        headers={["Style", "Cost per Linear Ft (Cedar)", "Privacy Level", "Description"]}
        rows={[
          ["Dog-Ear", "$18 - $25", "High", "Standard privacy fence, rounded picket tops"],
          ["Board-on-Board", "$22 - $32", "Maximum", "Overlapping boards, no gaps from either side"],
          ["Shadowbox", "$20 - $30", "Medium-High", "Alternating boards, semi-private, attractive both sides"],
          ["Horizontal Slat", "$25 - $38", "High", "Modern look, horizontal boards, trending in 2026"],
        ]}
      />

      <TipBox title="Cedar vs Pine: The Real Math">
        <p>
          Cedar costs 40-50% more upfront than pressure-treated pine, but it
          lasts nearly twice as long and requires less maintenance. Over 20 years,
          cedar typically costs less when you factor in the replacement and
          staining costs of pine. If your budget allows, cedar is the better
          long-term investment.
        </p>
      </TipBox>

      {/* Section 6 */}
      <SectionHeading id="hidden-costs">
        6. Hidden Costs to Watch For
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The quoted price is not always the final price. These costs are sometimes
        excluded from initial estimates or discovered during the project:
      </p>

      <CostTable
        headers={["Hidden Cost", "Typical Range", "Notes"]}
        rows={[
          ["Property survey", "$300 - $800", "Required if boundaries are unmarked or disputed"],
          ["Building permit", "$50 - $250", "Required in most areas for fences over 4 ft"],
          ["Utility locating (811 call)", "Free", "Mandatory before digging; delays if utilities are found"],
          ["Rock or root removal", "$50 - $150 per post", "When post holes hit rock, roots, or hardpan"],
          ["Old fence demolition", "$500 - $1,500", "Removal and disposal of existing fence"],
          ["Gate hardware upgrades", "$50 - $200 per gate", "Self-closing hinges, locks, latches"],
          ["Staining / sealing", "$1.50 - $3.00 per lf", "Recommended at install for wood fences"],
          ["Concrete for posts", "$5 - $10 per post", "Sometimes included, sometimes an add-on"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        Post hole challenges are the most common source of surprise costs.
        If your yard has rocky soil, heavy tree roots, or underground utilities
        that require rerouting post locations, expect the project to cost more
        and take longer than initially quoted.
      </p>

      <TipBox title="Call 811 Before You Dig">
        <p>
          Hitting a buried gas, electric, or water line is dangerous and
          expensive. Call 811 at least two business days before any digging
          begins. This free service marks underground utility locations in your
          yard. Your contractor should handle this, but confirm before work
          starts. Use our{" "}
          <Link href="/calculators/concrete-volume/" className="text-brand-orange hover:underline">
            Concrete Volume Calculator
          </Link>{" "}
          to estimate how much concrete you need for setting fence posts.
        </p>
      </TipBox>

      {/* Section 7 */}
      <SectionHeading id="diy-vs-professional">
        7. DIY vs Professional Installation
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A wood fence is one of the more DIY-friendly home improvement projects.
        Unlike roofing or electrical work, the skills involved are
        straightforward: digging holes, setting posts, and attaching pickets.
        However, the quality of post installation is critical to a fence that
        lasts.
      </p>

      <CostTable
        headers={["", "DIY", "Professional"]}
        rows={[
          ["Materials cost (150 lf cedar)", "$1,200 - $2,000", "$1,200 - $2,000"],
          ["Labor cost", "$0 (your time)", "$1,200 - $2,500"],
          ["Tool rental (auger, level)", "$100 - $250", "Included"],
          ["Total cost", "$1,300 - $2,250", "$2,400 - $4,500"],
          ["Typical savings", "40-50%", "—"],
          ["Time required", "2-4 weekends", "1-3 days"],
          ["Warranty", "None", "1-5 year workmanship"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The critical step is setting posts.</strong> Posts must be
        plumb (perfectly vertical), set in concrete, and buried to the correct
        depth (typically 1/3 of the total post length below ground). Posts that
        are not set correctly will lean within a year or two, and fixing them
        usually means starting over.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-2">DIY Makes Sense When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>You have basic tool skills and physical ability</li>
            <li>Your yard is flat with easy-to-dig soil</li>
            <li>Budget is the primary concern</li>
            <li>You have a helper for setting posts</li>
            <li>The fence line is straight with few corners</li>
          </ul>
        </div>
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-2">Hire a Pro When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Your yard has significant slopes or rocky soil</li>
            <li>The fence line has many corners or angles</li>
            <li>You need gates that must swing and latch properly</li>
            <li>Your HOA requires professional installation</li>
            <li>You want a warranty on the workmanship</li>
          </ul>
        </div>
      </div>

      <TipBox title="Hybrid Approach: Save Money Without Full DIY">
        <p>
          Some homeowners save money by removing the old fence themselves and
          hiring a pro for the new installation. Old fence demo is hard work but
          does not require skill. This can save $500 to $1,500 on a typical job.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="how-to-save-money">
        8. How to Save Money on Your Fence
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A new fence is a significant investment, but there are legitimate ways to
        reduce your costs without compromising quality:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Choose a more affordable material:</strong> Pressure-treated
          pine costs 30-40% less than cedar and still lasts a decade or more
          with proper staining. Chain link is the most affordable option if
          privacy is not your primary goal.
        </li>
        <li>
          <strong>Minimize gates:</strong> Each gate adds $150 to $800 to your
          project. Plan your layout to include only the gates you truly need.
          One walk gate and one drive gate is sufficient for most yards.
        </li>
        <li>
          <strong>Split the cost with your neighbor:</strong> If the fence is on
          a shared property line, many neighbors will agree to split the cost
          50/50. This is the single biggest way to cut your fence budget in half.
          Get the agreement in writing.
        </li>
        <li>
          <strong>Keep the design simple:</strong> A standard dog-ear fence
          costs 20-30% less than board-on-board or horizontal slat designs. Fewer
          corners and angles also reduce labor costs.
        </li>
        <li>
          <strong>Schedule in the off-season:</strong> Late fall and winter are
          slow periods for fence contractors. Many offer discounts of 10-15% to
          keep crews working during these months.
        </li>
        <li>
          <strong>Get at least three quotes:</strong> Fence quotes can vary
          30-50% between contractors for the same job. Use{" "}
          <a
            href="https://getcontractorquotes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            GetContractorQuotes.com
          </a>{" "}
          to quickly compare quotes from licensed fence contractors in your area.
        </li>
        <li>
          <strong>Demo the old fence yourself:</strong> Tearing out an old fence
          is labor-intensive but does not require special skills. Doing it
          yourself saves $500 to $1,500 in demolition costs.
        </li>
        <li>
          <strong>Use standard lengths:</strong> Fence panels and pickets come in
          standard sizes (6 ft and 8 ft). Designing your fence around these
          dimensions minimizes waste and custom cutting charges.
        </li>
      </ul>

      {/* Section 9 */}
      <SectionHeading id="maintenance-by-material">
        9. Maintenance by Material
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your maintenance commitment varies dramatically depending on the
        material you choose. Factor in ongoing costs when comparing materials,
        not just the upfront price.
      </p>

      <CostTable
        headers={["Material", "Maintenance Required", "Annual Cost", "Lifespan"]}
        rows={[
          ["Wood (Pine)", "Stain/seal every 2-3 years, inspect for rot", "$150 - $400", "10-15 years"],
          ["Wood (Cedar)", "Stain every 3-5 years (optional), inspect annually", "$100 - $300", "15-25 years"],
          ["Vinyl / PVC", "Wash with hose 1-2x per year", "$0 - $50", "20-30 years"],
          ["Chain Link", "Check for rust, apply rust-proof paint as needed", "$0 - $100", "15-20 years"],
          ["Aluminum", "Rinse occasionally, touch up scratches", "$0 - $50", "30-50 years"],
          ["Wrought Iron", "Sand and repaint every 3-5 years to prevent rust", "$200 - $500", "50-100 years"],
          ["Composite", "Wash with hose 1-2x per year", "$0 - $50", "25-30 years"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Wood fence maintenance is not optional.</strong> An untreated
        wood fence will begin to gray, crack, and rot within 2-3 years. Staining
        and sealing at installation and every 2-3 years after extends the life
        of a pine fence from 8 years to 15 years. For cedar, staining is
        optional aesthetically (many people prefer the natural silver-gray
        patina), but it does extend the lifespan.
      </p>

      <TipBox title="Total Cost of Ownership Over 20 Years">
        <p>
          A pine fence that costs $3,000 upfront but needs $300 in staining
          every 3 years and replacement at year 12 totals about $8,000 over 20
          years. A vinyl fence at $5,000 with minimal maintenance totals about
          $5,500 over the same period. Consider the full picture when choosing
          your material.
        </p>
      </TipBox>

      {/* Section 10 */}
      <SectionHeading id="get-free-quotes">
        10. Get Free Fence Quotes
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best way to know exactly what your fence installation will cost is to
        get quotes from licensed contractors in your area. Prices vary
        significantly by region, so national averages only get you so far.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Fence Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare quotes from pre-screened, licensed fence contractors near you.
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
          <Link href="/calculators/fence/" className="text-brand-orange hover:underline">
            Fence Calculator
          </Link>{" "}
          — Estimate materials, posts, and total cost for your fence project
        </li>
        <li>
          <Link href="/calculators/concrete-volume/" className="text-brand-orange hover:underline">
            Concrete Volume Calculator
          </Link>{" "}
          — Calculate how much concrete you need for setting fence posts
        </li>
        <li>
          <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
            Square Footage Calculator
          </Link>{" "}
          — Measure your yard area to plan your fence layout
        </li>
      </ul>
    </GuideLayout>
  );
}
