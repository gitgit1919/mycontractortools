import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How Much Does It Cost to Build a Deck? (2026 Guide) | MyContractorTools",
  description:
    "Deck building costs $4,000 to $12,000 for pressure-treated wood and $10,000 to $25,000 for composite. See 2026 pricing by material, size, and design plus tips to save money on your new deck.",
};

const toc = [
  { id: "average-cost", label: "Average Deck Cost" },
  { id: "cost-by-material", label: "Cost by Decking Material" },
  { id: "cost-by-size", label: "Cost by Deck Size" },
  { id: "additional-cost-factors", label: "Additional Cost Factors" },
  { id: "deck-vs-patio", label: "Deck vs Patio Comparison" },
  { id: "hidden-costs", label: "Hidden Costs" },
  { id: "diy-vs-professional", label: "DIY vs Professional" },
  { id: "how-to-save-money", label: "How to Save Money" },
  { id: "maintenance-lifespan", label: "Maintenance & Lifespan" },
  { id: "get-free-quotes", label: "Get Free Deck Quotes" },
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

export default function DeckBuildingCostGuide() {
  return (
    <GuideLayout
      title="How Much Does It Cost to Build a Deck? (2026 Guide)"
      description="A complete breakdown of deck building costs by material, size, and design. Know what to expect before you get quotes so you can plan your outdoor living space with confidence."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        A new deck is one of the best investments you can make in your home. It
        extends your living space outdoors and typically recoups 65-75% of its
        cost at resale. This guide breaks down every cost factor so you know
        exactly what to budget for your deck project in 2026.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Deck Building Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare prices from pre-screened deck builders near you. No obligation, no cost.
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
        1. Average Deck Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The national average for building a new deck is{" "}
        <strong>$4,000 to $12,000</strong> for a 200-500 square foot
        pressure-treated wood deck. If you choose composite decking, expect to
        pay <strong>$10,000 to $25,000</strong> for the same size range. Most
        homeowners spend around $8,000 to $14,000 for a mid-size deck with
        standard railings and a single staircase.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Deck builders typically price by the square foot, which makes it easy to
        scale costs up or down based on your desired size. Use our{" "}
        <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
          Square Footage Calculator
        </Link>{" "}
        to measure your planned deck area, or our{" "}
        <Link href="/calculators/deck/" className="text-brand-orange hover:underline">
          Deck Calculator
        </Link>{" "}
        to estimate materials and costs for your specific project.
      </p>

      <CostTable
        headers={["Decking Material", "Cost per Sq Ft (Installed)", "200 Sq Ft Deck", "400 Sq Ft Deck"]}
        rows={[
          ["Pressure-Treated Wood", "$15 - $25", "$3,000 - $5,000", "$6,000 - $10,000"],
          ["Cedar", "$25 - $35", "$5,000 - $7,000", "$10,000 - $14,000"],
          ["Composite", "$30 - $60", "$6,000 - $12,000", "$12,000 - $24,000"],
          ["PVC / Vinyl", "$35 - $60", "$7,000 - $12,000", "$14,000 - $24,000"],
          ["Hardwood (Ipe)", "$40 - $80", "$8,000 - $16,000", "$16,000 - $32,000"],
        ]}
      />

      <TipBox title="Why the Wide Range?">
        <p>
          Deck costs vary widely because of material choice, deck height,
          railing style, site conditions, and local labor rates. A ground-level
          rectangular deck in a rural area will be at the bottom of the range.
          A second-story deck with composite boards and aluminum railings in a
          high-cost metro area will be at the top.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="cost-by-material">
        2. Cost by Decking Material
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The decking material you choose is the single biggest factor in your
        total cost. Each material has different upfront costs, maintenance
        requirements, and expected lifespans. Use our{" "}
        <Link href="/calculators/board-foot/" className="text-brand-orange hover:underline">
          Board Foot Calculator
        </Link>{" "}
        to estimate lumber quantities for your project.
      </p>

      <CostTable
        headers={["Material", "Cost/Sq Ft (Installed)", "Lifespan", "Maintenance Level"]}
        rows={[
          ["Pressure-Treated Wood", "$15 - $25", "10-15 years", "High — stain/seal every 1-2 years"],
          ["Cedar", "$25 - $35", "15-20 years", "Medium — stain/seal every 2-3 years"],
          ["Composite (Trex, TimberTech)", "$30 - $60", "25-30 years", "Low — occasional cleaning"],
          ["PVC / Vinyl", "$35 - $60", "25-30 years", "Very low — wash as needed"],
          ["Hardwood / Ipe", "$40 - $80", "25-40 years", "Medium — oil annually for color"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most popular choice:</strong> Pressure-treated wood remains the
        most popular decking material because of its low upfront cost.
        However, composite decking has been gaining significant market share as
        homeowners realize the long-term maintenance savings. A composite deck
        that lasts 30 years with minimal upkeep can actually cost less over
        time than a wood deck that needs staining every other year.
      </p>

      <TipBox title="Think Long-Term Cost, Not Just Sticker Price">
        <p>
          A pressure-treated deck at $4,000 that lasts 12 years and needs $200
          in stain every 2 years costs about $433/year. A composite deck at
          $10,000 that lasts 30 years with no staining costs about $333/year.
          If you plan to stay in your home, composite often wins on total cost
          of ownership.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="cost-by-size">
        3. Cost by Deck Size
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Deck size is the second biggest cost driver. Here are common deck
        dimensions and what you can expect to pay for each using
        pressure-treated wood and composite materials. Use our{" "}
        <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
          Square Footage Calculator
        </Link>{" "}
        to determine the total area for custom shapes.
      </p>

      <CostTable
        headers={["Deck Size", "Square Feet", "Pressure-Treated Cost", "Composite Cost"]}
        rows={[
          ["10 x 10", "100 sq ft", "$1,500 - $2,500", "$3,000 - $6,000"],
          ["12 x 16", "192 sq ft", "$2,900 - $4,800", "$5,800 - $11,500"],
          ["14 x 20", "280 sq ft", "$4,200 - $7,000", "$8,400 - $16,800"],
          ["16 x 20", "320 sq ft", "$4,800 - $8,000", "$9,600 - $19,200"],
          ["20 x 20", "400 sq ft", "$6,000 - $10,000", "$12,000 - $24,000"],
          ["20 x 24+", "480+ sq ft", "$7,200 - $12,000+", "$14,400 - $28,800+"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most common size:</strong> The 12x16 and 14x20 decks are the
        most popular sizes for family homes. A 12x16 deck provides enough room
        for a dining table and four to six chairs. A 14x20 deck adds space for
        a grill area and some lounge seating.
      </p>

      <TipBox title="Right-Size Your Deck">
        <p>
          Before committing to a size, lay out your furniture in the yard using
          tape or chalk to mark the deck footprint. Many homeowners overestimate
          the space they need. A well-planned 12x16 deck often feels more
          functional than a poorly laid out 20x20 deck.
        </p>
      </TipBox>

      {/* Section 4 */}
      <SectionHeading id="additional-cost-factors">
        4. Additional Cost Factors
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond material and size, several design and site factors can
        significantly impact your deck building costs. Understanding these
        helps you plan your budget more accurately.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Height and Elevation</h4>
          <p className="text-sm text-gray-700">
            A ground-level deck is the cheapest to build. An elevated deck
            (second story or on a slope) requires taller posts, additional
            bracing, and more complex footings, adding 30-50% to the total
            cost. Very tall decks may also need engineering plans. Use our{" "}
            <Link href="/calculators/stair/" className="text-brand-orange hover:underline">
              Stair Calculator
            </Link>{" "}
            to plan stairs for elevated decks.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Railing Type ($20 - $100+ per Linear Foot)</h4>
          <p className="text-sm text-gray-700">
            Wood railings cost $20-$35 per linear foot. Composite railings run
            $30-$60 per linear foot. Cable or glass railings cost $60-$100+
            per linear foot. A typical 300 sq ft deck has about 50-60 linear
            feet of railing, so railing choice alone can swing your total cost
            by $2,000-$4,000.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Stairs ($500 - $2,500+)</h4>
          <p className="text-sm text-gray-700">
            A simple 3-4 step staircase costs $500-$1,000. Longer runs or
            wrap-around stairs can cost $1,500-$2,500 or more. Each additional
            landing adds $500-$1,000. Calculate your stair dimensions with our{" "}
            <Link href="/calculators/stair/" className="text-brand-orange hover:underline">
              Stair Calculator
            </Link>.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Permits ($100 - $500)</h4>
          <p className="text-sm text-gray-700">
            Most municipalities require a building permit for decks. Permit
            fees typically range from $100 to $500 depending on your location
            and deck size. Your contractor should handle the permit process.
            Skipping the permit can result in fines, mandatory removal, or
            problems when selling your home.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Old Deck Demolition ($500 - $2,000)</h4>
          <p className="text-sm text-gray-700">
            If you are replacing an existing deck, demolition and disposal
            costs run $500-$2,000 depending on the size and whether the old
            footings can be reused.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Site Preparation and Grading</h4>
          <p className="text-sm text-gray-700">
            Sloped or uneven sites require grading, retaining walls, or
            additional structural support. Site prep can add $500-$3,000
            depending on the terrain.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Lighting ($200 - $2,000+)</h4>
          <p className="text-sm text-gray-700">
            Low-voltage LED deck lighting is popular and adds ambiance plus
            safety. Post cap lights run $20-$50 each, stair riser lights
            $15-$30 each, and recessed railing lights $10-$25 each. A full
            lighting package typically costs $500-$2,000 installed.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Built-in Features ($500 - $3,000+)</h4>
          <p className="text-sm text-gray-700">
            Built-in seating, planters, pergolas, and storage benches add
            functionality but increase cost. Built-in benches run $200-$500
            per linear foot. A simple pergola addition adds $1,500-$5,000.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <SectionHeading id="deck-vs-patio">
        5. Deck vs Patio Comparison
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you are deciding between a deck and a patio, cost is only one factor
        to consider. Each option has distinct advantages depending on your lot,
        budget, and how you plan to use the space.
      </p>

      <CostTable
        headers={["Feature", "Concrete Patio", "Wood Deck", "Composite Deck"]}
        rows={[
          ["Cost per Sq Ft", "$6 - $15", "$15 - $25", "$30 - $60"],
          ["400 Sq Ft Total Cost", "$2,400 - $6,000", "$6,000 - $10,000", "$12,000 - $24,000"],
          ["Lifespan", "25-50 years", "10-15 years", "25-30 years"],
          ["Maintenance", "Low — seal every 2-3 years", "High — stain/seal every 1-2 years", "Low — occasional cleaning"],
          ["Best For", "Flat, ground-level yards", "Elevated or sloped yards", "Low-maintenance elevated areas"],
          ["Resale Value", "Good", "Very good", "Very good"],
          ["DIY Difficulty", "Moderate", "Intermediate", "Intermediate"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Bottom line:</strong> A concrete patio is the most affordable
        option for ground-level outdoor living space. A deck is the better
        choice when your yard slopes away from the house, when you want an
        elevated outdoor area off a second floor, or when you prefer the look
        and feel of wood or composite underfoot. Use our{" "}
        <Link href="/calculators/concrete-volume/" className="text-brand-orange hover:underline">
          Concrete Volume Calculator
        </Link>{" "}
        if you decide to go the patio route.
      </p>

      <TipBox title="Consider a Combination">
        <p>
          Many homeowners get the best of both worlds by building a smaller
          deck off the back door and adding a concrete or paver patio at ground
          level nearby. This gives you flexible outdoor zones at a lower total
          cost than building one massive deck.
        </p>
      </TipBox>

      {/* Section 6 */}
      <SectionHeading id="hidden-costs">
        6. Hidden Costs
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The quoted price for your deck may not include everything you need.
        These are costs that are commonly left out of initial estimates or
        discovered during construction:
      </p>

      <CostTable
        headers={["Hidden Cost", "Typical Range", "Notes"]}
        rows={[
          ["Building permit", "$100 - $500", "Required in most areas; do not skip this"],
          ["Concrete footings/piers", "$50 - $150 each", "Most decks need 6-12 footings depending on size"],
          ["Ledger board flashing", "$100 - $300", "Critical for waterproofing where deck meets house"],
          ["Post brackets and hardware", "$150 - $400", "Simpson Strong-Tie connectors, joist hangers, lag bolts"],
          ["Joist hangers", "$3 - $5 each", "Code requires approved hangers at every joist connection"],
          ["Grading and drainage", "$500 - $2,000", "Needed if water pools under the deck"],
          ["Inspector fees", "$100 - $300", "Separate from permit fee in some jurisdictions"],
          ["Landscaping repair", "$200 - $500", "Heavy equipment can damage lawn and plants around the work area"],
        ]}
      />

      <TipBox title="Get Everything in Writing">
        <p>
          Before signing a contract, ask your builder exactly what is included
          in the price. Footings, hardware, flashing, and the permit should all
          be part of any professional deck quote. If any of these are listed as
          extras, factor them into your budget comparison.
        </p>
      </TipBox>

      {/* Section 7 */}
      <SectionHeading id="diy-vs-professional">
        7. DIY vs Professional
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Building a deck is one of the more achievable large-scale DIY projects,
        but it requires intermediate carpentry skills and knowledge of local
        building codes. Here is a realistic assessment of DIY versus hiring a
        professional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-green-300 rounded-xl p-5">
          <h3 className="font-bold text-green-700 mb-2">DIY Can Work When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>You have intermediate carpentry skills</li>
            <li>The deck is ground-level or low-height</li>
            <li>The design is a simple rectangle</li>
            <li>You understand local building codes</li>
            <li>You can commit 2-4 weekends to the project</li>
            <li>You own or can rent the right tools</li>
          </ul>
        </div>
        <div className="bg-white border border-red-300 rounded-xl p-5">
          <h3 className="font-bold text-red-700 mb-2">Hire a Pro When</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>The deck is elevated or second-story</li>
            <li>Your design includes curves, angles, or multiple levels</li>
            <li>You need structural engineering approval</li>
            <li>The deck connects to the house (ledger board is critical)</li>
            <li>You want the project done in 3-5 days, not 3-5 weeks</li>
            <li>Warranty and code compliance are important to you</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Potential DIY savings:</strong> You can save 30-50% on labor by
        building your own deck. On a $10,000 project, that means saving $3,000
        to $5,000. However, mistakes in structural elements like footings,
        ledger board attachment, or beam sizing can create safety hazards and
        costly repairs. The ledger board connection (where the deck attaches to
        your house) is the most common failure point in deck collapses and must
        be done correctly.
      </p>

      <TipBox title="DIY Tip: Always Get the Permit">
        <p>
          Even if you build the deck yourself, you still need a building
          permit. The permit process includes plan review and inspections that
          catch structural mistakes before they become dangerous. Many
          homeowners have been forced to tear down unpermitted decks when
          selling their home.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="how-to-save-money">
        8. How to Save Money on Your Deck
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        A new deck is a significant investment, but there are legitimate ways
        to reduce costs without compromising structural quality or safety:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Choose a smaller footprint:</strong> A well-designed 12x16
          deck (192 sq ft) is often more functional than an oversized 20x20
          deck. Right-sizing saves thousands on materials and labor.
        </li>
        <li>
          <strong>Stick with pressure-treated wood:</strong> Pressure-treated
          lumber costs 40-60% less than composite per square foot. If you are
          willing to maintain it with stain and sealant, it is the most
          budget-friendly option.
        </li>
        <li>
          <strong>Keep the design simple:</strong> A rectangular deck costs
          significantly less than one with angles, curves, or multiple levels.
          Every corner, angle cut, and level change adds labor time and
          material waste.
        </li>
        <li>
          <strong>Build in the off-season:</strong> Late fall and winter are
          slow periods for deck builders. Many offer 10-20% discounts to keep
          crews working during slower months.
        </li>
        <li>
          <strong>Get at least three quotes:</strong> Prices can vary 30-50%
          between contractors for the same deck. Getting multiple quotes
          ensures you are not overpaying. Use{" "}
          <a
            href="https://getcontractorquotes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            GetContractorQuotes.com
          </a>{" "}
          to quickly compare quotes from licensed deck builders in your area.
        </li>
        <li>
          <strong>Build ground-level:</strong> Eliminating the need for tall
          posts, complex footings, and stairs can cut costs by 20-30%.
          Ground-level decks may also be exempt from permit requirements in
          some areas (check your local codes).
        </li>
        <li>
          <strong>Do prep work yourself:</strong> Even if you hire a
          contractor, handling demolition of an old deck, clearing the site,
          and digging footing holes can save $500-$1,500 in labor.
        </li>
      </ul>

      {/* Section 9 */}
      <SectionHeading id="maintenance-lifespan">
        9. Maintenance and Lifespan by Material
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Your deck is an outdoor structure exposed to sun, rain, snow, and foot
        traffic year-round. Proper maintenance dramatically extends its life
        and keeps it looking good. Here is what to expect for each material:
      </p>

      <CostTable
        headers={["Material", "Expected Lifespan", "Maintenance Schedule", "Annual Maintenance Cost"]}
        rows={[
          ["Pressure-Treated Wood", "10-15 years", "Stain and seal every 1-2 years, inspect annually", "$150 - $300"],
          ["Cedar", "15-20 years", "Stain and seal every 2-3 years, inspect annually", "$150 - $250"],
          ["Composite", "25-30 years", "Clean with soap and water 1-2 times per year", "$25 - $75"],
          ["PVC / Vinyl", "25-30 years", "Rinse or pressure wash annually", "$15 - $50"],
          ["Hardwood / Ipe", "25-40 years", "Oil annually to maintain color, or let it gray naturally", "$100 - $200"],
        ]}
      />

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Wood Deck Maintenance</h4>
          <p className="text-sm text-gray-700">
            Power wash your wood deck once per year in the spring before
            applying stain or sealant. Use a fan tip nozzle and keep the
            pressure below 1,500 PSI to avoid damaging the wood fibers.
            Always apply stain to clean, dry wood. Replace any boards that
            show signs of rot, splintering, or structural weakness.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Composite Deck Maintenance</h4>
          <p className="text-sm text-gray-700">
            Composite decking is marketed as maintenance-free, but it still
            needs basic cleaning. Sweep regularly to prevent mold growth in
            shaded areas. Clean with soap and water or a composite deck
            cleaner once or twice a year. Avoid pressure washing above 1,500
            PSI. Remove leaves and debris from between boards to maintain
            drainage.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Structural Inspection</h4>
          <p className="text-sm text-gray-700">
            Regardless of decking material, inspect your deck structure
            annually. Check the ledger board connection, post bases, joist
            hangers, and railing attachments for rust, rot, or loosening. A
            compromised structural connection is a safety hazard. The
            substructure (joists, beams, posts) is typically pressure-treated
            even under composite decking and should last 20-25 years.
          </p>
        </div>
      </div>

      <TipBox title="Extend Your Deck's Life">
        <p>
          The number one thing you can do to extend any deck's life is maintain
          good drainage and airflow underneath. Keep soil and mulch away from
          posts, ensure water drains away from footings, and trim vegetation
          that traps moisture against the structure.
        </p>
      </TipBox>

      {/* Section 10 */}
      <SectionHeading id="get-free-quotes">
        10. Get Free Deck Quotes
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best way to know exactly what your new deck will cost is to get
        quotes from licensed contractors in your area. Prices vary
        significantly by region, so national averages only get you so far.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Deck Building Quotes from Licensed Contractors in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare quotes from pre-screened, licensed deck builders near you.
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
          <Link href="/calculators/deck/" className="text-brand-orange hover:underline">
            Deck Calculator
          </Link>{" "}
          — Estimate materials and costs for your deck project
        </li>
        <li>
          <Link href="/calculators/board-foot/" className="text-brand-orange hover:underline">
            Board Foot Calculator
          </Link>{" "}
          — Calculate lumber quantities and costs
        </li>
        <li>
          <Link href="/calculators/square-footage/" className="text-brand-orange hover:underline">
            Square Footage Calculator
          </Link>{" "}
          — Measure your deck area accurately
        </li>
        <li>
          <Link href="/calculators/concrete-volume/" className="text-brand-orange hover:underline">
            Concrete Volume Calculator
          </Link>{" "}
          — Estimate concrete for deck footings or a patio alternative
        </li>
        <li>
          <Link href="/calculators/stair/" className="text-brand-orange hover:underline">
            Stair Calculator
          </Link>{" "}
          — Plan stairs with correct rise and run dimensions
        </li>
      </ul>
    </GuideLayout>
  );
}
