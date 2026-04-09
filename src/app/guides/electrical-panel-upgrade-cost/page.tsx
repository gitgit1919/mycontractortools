import { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title:
    "How Much Does an Electrical Panel Upgrade Cost? (2026 Guide) | MyContractorTools",
  description:
    "Electrical panel upgrade costs $1,500 to $4,000 for a 200-amp upgrade. See 2026 pricing by panel size (100-400 amp), types of panel work, EV charger considerations, and how to save money.",
};

const toc = [
  { id: "average-cost", label: "Average Electrical Panel Upgrade Cost" },
  { id: "cost-by-panel-size", label: "Cost by Panel Size" },
  { id: "types-of-panel-work", label: "Types of Panel Work" },
  { id: "factors-affecting-cost", label: "Factors That Affect Cost" },
  { id: "when-you-need-upgrade", label: "When You Need a Panel Upgrade" },
  { id: "permits-inspections", label: "Permit & Inspection Requirements" },
  { id: "ev-charger-considerations", label: "EV Charger Considerations" },
  { id: "diy-vs-professional", label: "DIY vs Professional" },
  { id: "how-to-save-money", label: "How to Save Money" },
  { id: "get-free-quotes", label: "Get Free Electrical Quotes" },
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

export default function ElectricalPanelUpgradeCostGuide() {
  return (
    <GuideLayout
      title="How Much Does an Electrical Panel Upgrade Cost? (2026 Guide)"
      description="A complete breakdown of electrical panel upgrade costs by panel size, type of work, and region. Know what to expect before you get quotes so you can make a confident decision."
      lastUpdated="April 2026"
      tableOfContents={toc}
    >
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Whether you are adding an EV charger, upgrading an older home, or your
        breakers keep tripping, an electrical panel upgrade is one of the most
        important investments you can make in your home&apos;s safety and
        functionality. This guide breaks down every cost factor so you know
        exactly what to expect in 2026.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Electrical Quotes from Licensed Electricians in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare prices from pre-screened electricians near you. No obligation, no cost.
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
        1. Average Electrical Panel Upgrade Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The national average for a full electrical panel upgrade to 200 amps is{" "}
        <strong>$1,500 to $4,000</strong>. Most homeowners pay around $2,000 to
        $3,000 for a standard 200-amp panel upgrade including the new panel,
        breakers, labor, permit, and inspection.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you only need a <strong>subpanel</strong> added to extend your
        existing service, expect to pay <strong>$800 to $1,500</strong>. A
        complete service upgrade that includes a new meter base, weatherhead,
        and service entrance cable runs <strong>$2,500 to $5,000+</strong>.
      </p>

      <CostTable
        headers={["Type of Work", "Typical Cost Range", "What Is Included"]}
        rows={[
          ["Panel upgrade (200-amp)", "$1,500 - $4,000", "New panel, breakers, labor, permit"],
          ["Subpanel addition", "$800 - $1,500", "New subpanel, breakers, feeder wire"],
          ["Full service upgrade", "$2,500 - $5,000+", "Meter base, panel, service cable, utility coordination"],
          ["Panel replacement (same amp)", "$1,000 - $2,500", "New panel, transfer existing circuits"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        Use our{" "}
        <Link href="/calculators/electrical-load/" className="text-brand-orange hover:underline">
          Electrical Load Calculator
        </Link>{" "}
        to determine whether your current panel can handle your electrical
        demands, or if an upgrade is necessary.
      </p>

      <TipBox title="Why the Wide Range?">
        <p>
          Panel upgrade costs vary based on your home&apos;s existing wiring
          condition, whether the meter base needs replacement, local permit
          fees, utility company requirements, and regional labor rates. Homes
          with outdated wiring or Federal Pacific / Zinsco panels will be at the
          higher end.
        </p>
      </TipBox>

      {/* Section 2 */}
      <SectionHeading id="cost-by-panel-size">
        2. Cost by Panel Size
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The amperage rating of your new panel is a major cost driver. Here is
        what each panel size costs installed, along with typical use cases:
      </p>

      <CostTable
        headers={["Panel Size", "Cost Range (Installed)", "Typical Use Case"]}
        rows={[
          ["100-Amp", "$800 - $1,500", "Small homes, condos, minimal electrical loads"],
          ["150-Amp", "$1,000 - $2,500", "Medium homes without heavy electrical demands"],
          ["200-Amp", "$1,500 - $4,000", "Standard for modern homes, supports AC, EV charger, electric range"],
          ["400-Amp", "$3,000 - $6,000+", "Large homes, workshops, multiple HVAC systems, heavy equipment"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Most common upgrade:</strong> The vast majority of panel
        upgrades are to 200 amps. This is the current standard for new
        construction and provides enough capacity for most homes, including
        those adding an EV charger, central air conditioning, or a hot tub. If
        you are upgrading, going to 200 amps is almost always the right call
        even if you do not need the full capacity today.
      </p>

      <TipBox title="Do Not Upgrade to 100 Amps">
        <p>
          If your home currently has a 60-amp or 100-amp panel and you are
          paying for an upgrade, skip 100 amps entirely and go straight to 200
          amps. The incremental cost is small compared to having to upgrade
          again in a few years when you add an EV charger or other large load.
        </p>
      </TipBox>

      {/* Section 3 */}
      <SectionHeading id="types-of-panel-work">
        3. Types of Panel Work
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Not all panel jobs are the same. Understanding the different types of
        work helps you know what you are paying for and what to ask your
        electrician about.
      </p>

      <CostTable
        headers={["Type of Work", "Cost Range", "What It Involves"]}
        rows={[
          ["Panel upgrade", "$1,500 - $4,000", "Replace existing panel with higher amperage unit, new breakers, may require meter base upgrade"],
          ["Panel replacement", "$1,000 - $2,500", "Replace worn or recalled panel with same amperage, transfer existing circuits to new panel"],
          ["Subpanel addition", "$800 - $1,500", "Add secondary panel fed from main panel, typically in garage, workshop, or addition"],
          ["Meter base upgrade", "$400 - $1,000", "Replace outdoor meter socket, required when upgrading amperage, utility must disconnect/reconnect"],
          ["Full service upgrade", "$2,500 - $5,000+", "Complete replacement of meter base, service entrance cable, weatherhead, and panel"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>panel upgrade</strong> is the most common job. It means
        replacing your existing panel with a larger one that can handle more
        circuits and higher amperage. A <strong>panel replacement</strong>{" "}
        keeps the same amperage but swaps out a worn, damaged, or recalled
        panel (such as Federal Pacific Stab-Lok or Zinsco panels, which are
        known fire hazards).
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>full service upgrade</strong> is the most extensive and
        expensive option. It replaces everything from the utility connection
        point to the panel itself. This is often required when upgrading from
        very old 60-amp or 100-amp service to 200 amps, because the existing
        service entrance cable and meter base cannot handle the higher load.
      </p>

      {/* Section 4 */}
      <SectionHeading id="factors-affecting-cost">
        4. Factors That Affect Cost
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond panel size and type of work, several factors can push your
        electrical panel upgrade cost higher or lower:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Current vs Desired Amperage</h4>
          <p className="text-sm text-gray-700">
            The bigger the jump in amperage, the more work is involved. Going
            from 100 to 200 amps is straightforward. Going from 60 to 200 amps
            often requires a full service upgrade including meter base,
            weatherhead, and service entrance cable.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Permit Requirements</h4>
          <p className="text-sm text-gray-700">
            Electrical panel work almost always requires a permit and
            inspection. Permit fees typically range from $100 to $300 depending
            on your municipality. Some areas also require a separate utility
            coordination fee.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Utility Company Involvement</h4>
          <p className="text-sm text-gray-700">
            Your utility company must disconnect and reconnect the meter when
            the panel is upgraded. Some utilities do this at no charge. Others
            charge $200 to $500 and may have scheduling delays of days or weeks.
            In some areas, the utility requires their own inspection before
            reconnecting.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Wiring Condition</h4>
          <p className="text-sm text-gray-700">
            If your home has aluminum wiring, knob-and-tube wiring, or other
            outdated wiring, the electrician may need to remediate these issues
            during the panel upgrade. This can add $500 to $3,000+ depending on
            the extent of the work. Use our{" "}
            <Link href="/calculators/wire-size/" className="text-brand-orange hover:underline">
              Wire Size Calculator
            </Link>{" "}
            to check whether your existing wiring is adequate.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Location and Labor Rates</h4>
          <p className="text-sm text-gray-700">
            Electrician labor rates vary 30-50% between regions. Major metro
            areas, the Northeast, and the West Coast tend to be highest. Rural
            areas and the Southeast are generally more affordable. Master
            electricians charge more than journeymen.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Code Requirements</h4>
          <p className="text-sm text-gray-700">
            When you pull a permit for panel work, the inspector will check for
            current code compliance. This may trigger additional work such as
            adding AFCI breakers, GFCI protection, grounding electrode
            upgrades, or proper bonding. These code-required additions can add
            $200 to $1,000+ to the project.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-brand-blue mb-1">Panel Location</h4>
          <p className="text-sm text-gray-700">
            If the panel needs to be relocated (for example, from a bedroom
            closet to the garage to meet current code), expect to add $500 to
            $2,000 for the additional wiring and patching work.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <SectionHeading id="when-you-need-upgrade">
        5. When You Need a Panel Upgrade
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowners do not think about their electrical panel until they
        run into a problem or want to add new equipment. Here are the most
        common reasons for a panel upgrade:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>EV charger installation:</strong> A Level 2 EV charger
          requires a dedicated 40-50 amp circuit. Many older homes with 100-amp
          panels do not have enough capacity to add this load without upgrading.
        </li>
        <li>
          <strong>Adding central air conditioning:</strong> A central AC unit
          typically requires a 30-50 amp dedicated circuit. If your panel is
          already near capacity, you will need to upgrade before installing AC.
        </li>
        <li>
          <strong>Kitchen remodel:</strong> Modern kitchens require multiple
          dedicated circuits for appliances (range, oven, dishwasher,
          microwave, disposal). A major kitchen remodel often pushes older
          panels past their capacity.
        </li>
        <li>
          <strong>Flickering lights:</strong> Lights that dim or flicker when
          large appliances turn on can indicate your panel is overloaded or has
          loose connections. This is both an annoyance and a potential safety
          hazard.
        </li>
        <li>
          <strong>Frequently tripped breakers:</strong> If you are regularly
          resetting breakers, your electrical demands have outgrown your panel.
          This is your panel telling you it cannot keep up.
        </li>
        <li>
          <strong>Fuse box to breaker conversion:</strong> If your home still
          has a fuse box, upgrading to a modern breaker panel is strongly
          recommended. Fuse boxes are outdated, harder to insure, and less safe
          than modern breaker panels.
        </li>
        <li>
          <strong>Home addition:</strong> Adding a room, garage, or accessory
          dwelling unit (ADU) adds electrical load that your current panel may
          not be able to handle. Check with our{" "}
          <Link href="/calculators/electrical-load/" className="text-brand-orange hover:underline">
            Electrical Load Calculator
          </Link>{" "}
          to see if your current service is sufficient.
        </li>
      </ul>

      <TipBox title="Safety First">
        <p>
          If you have a Federal Pacific, Zinsco, or Pushmatic panel, replace it
          regardless of whether you need more capacity. These panels have
          well-documented failure rates and are considered fire hazards by most
          electrical professionals and home inspectors.
        </p>
      </TipBox>

      {/* Section 6 */}
      <SectionHeading id="permits-inspections">
        6. Permit and Inspection Requirements
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Electrical panel work <strong>almost always requires a permit and
        inspection</strong>. This is not optional and not something to skip.
        Unpermitted electrical work can void your homeowners insurance, create
        problems when selling your home, and most importantly, put your family
        at risk.
      </p>

      <CostTable
        headers={["Requirement", "Typical Cost", "Notes"]}
        rows={[
          ["Electrical permit", "$100 - $300", "Required by virtually all municipalities"],
          ["Electrical inspection", "Usually included with permit", "Inspector verifies code compliance after work is done"],
          ["Utility disconnect/reconnect", "$0 - $500", "Utility must pull meter for panel swap; some charge, some do not"],
          ["Plan review (if required)", "$50 - $200", "Some jurisdictions require plan review for service upgrades"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        The typical process works like this: your electrician pulls the permit,
        coordinates with the utility company to have the meter disconnected,
        performs the panel work, then calls for inspection. After passing
        inspection, the utility reconnects the meter. The entire process
        usually takes 1-3 days, but utility scheduling can sometimes add a
        week or more.
      </p>

      <TipBox title="Red Flag: Skipping the Permit">
        <p>
          If an electrician suggests doing the work without a permit to save
          money, find a different electrician. Unpermitted panel work is a
          serious liability. It can void your insurance, create code violations
          that show up on a home inspection when you sell, and in some
          jurisdictions, result in fines or required removal of the work.
        </p>
      </TipBox>

      {/* Section 7 */}
      <SectionHeading id="ev-charger-considerations">
        7. EV Charger Considerations
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        Electric vehicle adoption is one of the biggest drivers of panel
        upgrades in 2026. If you are buying an EV or already own one, here is
        what you need to know about the electrical side:
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A <strong>Level 2 EV charger</strong> (the type most homeowners
        install in their garage) requires a dedicated <strong>40-50 amp, 240-volt
        circuit</strong>. This is a significant electrical load, roughly
        equivalent to an electric range or central AC unit.
      </p>

      <CostTable
        headers={["Scenario", "Estimated Cost", "What Is Needed"]}
        rows={[
          ["Panel has capacity, garage near panel", "$500 - $1,200", "New 50-amp circuit, NEMA 14-50 outlet or hardwired charger"],
          ["Panel has capacity, garage far from panel", "$1,000 - $2,000", "Longer wire run increases material cost"],
          ["Panel needs upgrade + charger circuit", "$2,500 - $5,000", "200-amp panel upgrade plus new EV circuit"],
          ["Full service upgrade + charger circuit", "$3,500 - $6,500+", "New service, panel, and EV circuit combined"],
        ]}
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Combined cost savings:</strong> If you know you will need both
        a panel upgrade and an EV charger circuit, do them at the same time.
        The electrician is already on-site, the permit covers both, and the
        utility only needs to disconnect the meter once. Doing them together
        typically saves $300 to $800 compared to two separate projects.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Use our{" "}
        <Link href="/calculators/voltage-drop/" className="text-brand-orange hover:underline">
          Voltage Drop Calculator
        </Link>{" "}
        to check whether the wire run from your panel to your garage charger
        location requires upsizing the wire to account for voltage drop over
        distance.
      </p>

      <TipBox title="Check for Incentives">
        <p>
          Many states and utilities offer rebates or incentives for EV charger
          installation and panel upgrades. Some federal tax credits may also
          apply. Check with your utility company and your state energy office
          before getting quotes, as these incentives can offset $500 to $2,000
          or more of your project cost.
        </p>
      </TipBox>

      {/* Section 8 */}
      <SectionHeading id="diy-vs-professional">
        8. DIY vs Professional
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        This section is short and direct:{" "}
        <strong>never attempt to DIY electrical panel work</strong>. This is
        not like painting a room or installing a faucet. Here is why:
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 my-6">
        <p className="font-bold text-red-700 mb-2">Electrical Panel Work Is Not a DIY Project</p>
        <ul className="text-sm text-red-800 space-y-2">
          <li>
            <strong>Lethal voltages:</strong> The service entrance wires
            feeding your panel carry 240 volts and are always live, even when
            the main breaker is off. Only the utility company can de-energize
            them. Contact with these wires can be fatal.
          </li>
          <li>
            <strong>Code requirements:</strong> Panel installations must
            comply with the National Electrical Code (NEC) and local
            amendments. Errors can create fire hazards or shock risks that may
            not be apparent for years.
          </li>
          <li>
            <strong>Permit and inspection required:</strong> Most
            jurisdictions will not issue an electrical permit to a homeowner
            for panel work. Even where it is technically allowed, the
            inspection standards are the same as for a licensed electrician.
          </li>
          <li>
            <strong>Insurance implications:</strong> Unpermitted, unlicensed
            electrical work can void your homeowners insurance. If a fire
            starts at your DIY panel, your claim could be denied.
          </li>
          <li>
            <strong>Resale problems:</strong> Unpermitted panel work will show
            up on a home inspection and can derail a sale or require expensive
            remediation.
          </li>
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        Hire a licensed electrician. Period. The cost of professional
        installation is a small price to pay for the safety of your family and
        the protection of your home.
      </p>

      {/* Section 9 */}
      <SectionHeading id="how-to-save-money">
        9. How to Save Money on Your Panel Upgrade
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        While you should never cut corners on electrical work, there are
        legitimate ways to reduce your costs:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
        <li>
          <strong>Combine with other electrical work:</strong> If you need a
          panel upgrade plus new circuits for a remodel, EV charger, or other
          projects, bundle them into one job. You save on the electrician&apos;s
          trip charge, permit fees, and utility coordination.
        </li>
        <li>
          <strong>Get at least three quotes:</strong> Panel upgrade prices can
          vary 30-50% between electricians for the same scope of work. Getting
          multiple quotes ensures you are not overpaying. Use{" "}
          <a
            href="https://getcontractorquotes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            GetContractorQuotes.com
          </a>{" "}
          to quickly get quotes from licensed electricians in your area.
        </li>
        <li>
          <strong>Time it with a remodel:</strong> If you are planning a
          kitchen or bathroom remodel that will require new circuits, that is
          the ideal time to upgrade your panel. The electrician is already
          involved in the project and the permit may cover both scopes.
        </li>
        <li>
          <strong>Check for utility rebates:</strong> Some utility companies
          offer rebates for panel upgrades, especially when tied to EV charger
          installation, heat pump adoption, or electrification projects. Ask
          your utility before getting quotes.
        </li>
        <li>
          <strong>Avoid emergency rates:</strong> If your panel fails and you
          need emergency service, expect to pay 50-100% more than a planned
          upgrade. If you know your panel is aging, outdated, or near capacity,
          schedule the upgrade proactively.
        </li>
        <li>
          <strong>Do not pay more than 10-20% upfront:</strong> A reputable
          electrician should not require a large deposit before starting work.
          Full payment before the job is complete is a red flag.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-4">
        Looking for electrical contractor management tools? Check out our{" "}
        <Link href="/best/electrical-contractor-software/" className="text-brand-orange hover:underline">
          Best Electrical Contractor Software
        </Link>{" "}
        guide for tools that help electricians estimate, schedule, and manage
        jobs more efficiently.
      </p>

      {/* Section 10 */}
      <SectionHeading id="get-free-quotes">
        10. Get Free Electrical Quotes
      </SectionHeading>

      <p className="text-gray-700 leading-relaxed mb-4">
        The best way to know exactly what your electrical panel upgrade will
        cost is to get quotes from licensed electricians in your area. Prices
        vary significantly by region, so national averages only get you so far.
      </p>

      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 my-8 text-center">
        <p className="text-lg font-bold text-green-800 mb-2">
          Get Free Electrical Quotes from Licensed Electricians in Your Area
        </p>
        <p className="text-sm text-green-700 mb-4">
          Compare quotes from pre-screened, licensed electricians near you. It
          takes less than 2 minutes and there is no obligation.
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
          <Link href="/calculators/electrical-load/" className="text-brand-orange hover:underline">
            Electrical Load Calculator
          </Link>{" "}
          — Determine if your current panel can handle your electrical demands
        </li>
        <li>
          <Link href="/calculators/voltage-drop/" className="text-brand-orange hover:underline">
            Voltage Drop Calculator
          </Link>{" "}
          — Check wire sizing for long runs to garages, workshops, or outbuildings
        </li>
        <li>
          <Link href="/calculators/wire-size/" className="text-brand-orange hover:underline">
            Wire Size Calculator
          </Link>{" "}
          — Calculate the right wire gauge for your circuits
        </li>
      </ul>
    </GuideLayout>
  );
}
