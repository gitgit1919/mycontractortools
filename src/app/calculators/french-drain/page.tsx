"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type GravelType = "washed-stone" | "river-rock" | "pea-gravel";

const GRAVEL_INFO: Record<
  GravelType,
  { label: string; densityLbPerCuFt: number; costPerTon: number }
> = {
  "washed-stone": {
    label: '#57 Washed Stone (3/4")',
    densityLbPerCuFt: 100,
    costPerTon: 45,
  },
  "river-rock": {
    label: "River Rock",
    densityLbPerCuFt: 100,
    costPerTon: 60,
  },
  "pea-gravel": {
    label: "Pea Gravel",
    densityLbPerCuFt: 96,
    costPerTon: 40,
  },
};

const PIPE_DIAMETERS = [3, 4, 6] as const;
type PipeDiameter = (typeof PIPE_DIAMETERS)[number];

const PIPE_COST_PER_FT: Record<PipeDiameter, number> = {
  3: 0.85,
  4: 1.1,
  6: 2.0,
};

const FABRIC_COST_PER_SQFT = 0.15;

export default function FrenchDrainCalculator() {
  const [trenchLength, setTrenchLength] = useState<number>(50);
  const [trenchWidth, setTrenchWidth] = useState<number>(12);
  const [trenchDepth, setTrenchDepth] = useState<number>(18);
  const [gravelType, setGravelType] = useState<GravelType>("washed-stone");
  const [pipeDiameter, setPipeDiameter] = useState<PipeDiameter>(4);

  // Convert inches to feet for width and depth
  const widthFt = trenchWidth / 12;
  const depthFt = trenchDepth / 12;

  // Trench volume in cubic feet (total)
  const trenchVolCuFt = trenchLength * widthFt * depthFt;

  // Pipe volume displacement (subtract from gravel)
  const pipeRadiusFt = pipeDiameter / 2 / 12;
  const pipeVolCuFt = Math.PI * pipeRadiusFt * pipeRadiusFt * trenchLength;

  // Gravel volume
  const gravelVolCuFt = trenchVolCuFt - pipeVolCuFt;
  const gravelCuYards = gravelVolCuFt / 27;

  // Gravel weight in tons
  const gravel = GRAVEL_INFO[gravelType];
  const gravelLbs = gravelVolCuFt * gravel.densityLbPerCuFt;
  const gravelTons = gravelLbs / 2000;

  // Fabric: lines both sides and bottom of trench + 6" overlap on top
  // Perimeter of trench cross section: bottom + 2 sides + 1 ft overlap
  const fabricPerimeterFt = widthFt + 2 * depthFt + 1; // +1 ft for overlap
  const fabricSqFt = fabricPerimeterFt * trenchLength;

  // Pipe linear feet (same as trench length + 10% extra for connections)
  const pipeLinFt = Math.ceil(trenchLength * 1.1);

  // Costs
  const gravelCost = gravelTons * gravel.costPerTon;
  const pipeCost = pipeLinFt * PIPE_COST_PER_FT[pipeDiameter];
  const fabricCost = fabricSqFt * FABRIC_COST_PER_SQFT;
  const totalMaterialCost = gravelCost + pipeCost + fabricCost;

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="French Drain Calculator"
      description="Calculate the materials needed for a French drain installation including gravel, perforated pipe, and landscape fabric. Get cubic yards, tonnage, and cost estimates for your project."
      trade="Landscaping"
      howToUse="Enter the trench length in feet and the width and depth in inches. Select your gravel type and pipe diameter. The calculator figures out the cubic yards of gravel, linear feet of pipe, square footage of landscape fabric, and provides a material cost estimate."
      formula="Trench Volume = Length x (Width/12) x (Depth/12) cu ft. Gravel Volume = Trench Volume - Pipe Volume. Cubic Yards = Cu Ft / 27. Tons = (Cu Ft x Density) / 2000. Fabric = (Bottom + 2 Sides + Overlap) x Length."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="trenchLength" className={labelClass}>
            Trench Length (feet)
          </label>
          <input
            id="trenchLength"
            type="number"
            min={1}
            value={trenchLength}
            onChange={(e) => setTrenchLength(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="trenchWidth" className={labelClass}>
            Trench Width (inches)
          </label>
          <input
            id="trenchWidth"
            type="number"
            min={4}
            max={36}
            value={trenchWidth}
            onChange={(e) => setTrenchWidth(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">Typical: 8-12 inches</p>
        </div>

        <div>
          <label htmlFor="trenchDepth" className={labelClass}>
            Trench Depth (inches)
          </label>
          <input
            id="trenchDepth"
            type="number"
            min={6}
            max={48}
            value={trenchDepth}
            onChange={(e) => setTrenchDepth(Number(e.target.value))}
            className={inputClass}
          />
          <p className="text-xs text-gray-500 mt-1">Typical: 12-24 inches</p>
        </div>

        <div>
          <label htmlFor="gravelType" className={labelClass}>
            Gravel Type
          </label>
          <select
            id="gravelType"
            value={gravelType}
            onChange={(e) => setGravelType(e.target.value as GravelType)}
            className={inputClass}
          >
            {(Object.keys(GRAVEL_INFO) as GravelType[]).map((key) => (
              <option key={key} value={key}>
                {GRAVEL_INFO[key].label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pipeDiameter" className={labelClass}>
            Pipe Diameter (inches)
          </label>
          <select
            id="pipeDiameter"
            value={pipeDiameter}
            onChange={(e) =>
              setPipeDiameter(Number(e.target.value) as PipeDiameter)
            }
            className={inputClass}
          >
            {PIPE_DIAMETERS.map((d) => (
              <option key={d} value={d}>
                {d}&quot; perforated pipe
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          Materials Needed
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gravel</p>
            <p className="text-2xl font-bold text-brand-blue">
              {gravelCuYards.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">cubic yards</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gravel Weight</p>
            <p className="text-2xl font-bold text-brand-blue">
              {gravelTons.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">tons</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Pipe</p>
            <p className="text-2xl font-bold text-brand-blue">{pipeLinFt}</p>
            <p className="text-sm text-gray-500">linear feet</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Landscape Fabric</p>
            <p className="text-2xl font-bold text-brand-blue">
              {fabricSqFt.toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
        </div>

        {/* Cost Estimate */}
        <h3 className="text-lg font-bold text-brand-blue mb-3">
          Estimated Material Costs
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">Item</th>
                <th className="px-3 py-2 text-right">Quantity</th>
                <th className="px-3 py-2 text-right">Unit Price</th>
                <th className="px-3 py-2 text-right rounded-tr-lg">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-3 py-2">{gravel.label}</td>
                <td className="px-3 py-2 text-right">
                  {gravelTons.toFixed(1)} tons
                </td>
                <td className="px-3 py-2 text-right">
                  ${gravel.costPerTon}/ton
                </td>
                <td className="px-3 py-2 text-right font-medium">
                  ${gravelCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2">
                  {pipeDiameter}&quot; Perforated Pipe
                </td>
                <td className="px-3 py-2 text-right">{pipeLinFt} ft</td>
                <td className="px-3 py-2 text-right">
                  ${PIPE_COST_PER_FT[pipeDiameter].toFixed(2)}/ft
                </td>
                <td className="px-3 py-2 text-right font-medium">
                  ${pipeCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2">Landscape Fabric</td>
                <td className="px-3 py-2 text-right">
                  {fabricSqFt.toFixed(0)} sq ft
                </td>
                <td className="px-3 py-2 text-right">
                  ${FABRIC_COST_PER_SQFT.toFixed(2)}/sq ft
                </td>
                <td className="px-3 py-2 text-right font-medium">
                  ${fabricCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-brand-blue text-white font-bold">
                <td className="px-3 py-2 rounded-bl-lg" colSpan={3}>
                  Total Material Cost
                </td>
                <td className="px-3 py-2 text-right rounded-br-lg">
                  ${totalMaterialCost.toFixed(0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Material prices are estimates and vary by region. Does not include
          labor, equipment rental, or excavation costs.
        </p>
      </div>
    </CalculatorLayout>
  );
}
