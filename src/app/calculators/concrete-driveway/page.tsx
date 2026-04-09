"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type Thickness = 4 | 6;
type ReinforcementType = "wire-mesh" | "rebar" | "fiber" | "none";
type FinishType = "broom" | "stamped" | "exposed-aggregate";

const REINFORCEMENT_OPTIONS: {
  value: ReinforcementType;
  label: string;
  costPerSqFt: number;
}[] = [
  { value: "none", label: "None", costPerSqFt: 0 },
  { value: "wire-mesh", label: "Wire Mesh (6x6 W1.4/W1.4)", costPerSqFt: 0.4 },
  { value: "rebar", label: "Rebar (#4 @ 18\" OC both ways)", costPerSqFt: 0.85 },
  { value: "fiber", label: "Fiber Mesh (added to mix)", costPerSqFt: 0.25 },
];

const FINISH_OPTIONS: {
  value: FinishType;
  label: string;
  laborPerSqFt: number;
}[] = [
  { value: "broom", label: "Broom Finish (standard)", laborPerSqFt: 5.5 },
  { value: "stamped", label: "Stamped Concrete", laborPerSqFt: 10.0 },
  {
    value: "exposed-aggregate",
    label: "Exposed Aggregate",
    laborPerSqFt: 8.5,
  },
];

// 2025-2026 pricing
const CONCRETE_COST_PER_YARD = 165; // average $150-175 range
const SUBBASE_COST_PER_SQFT = 0.5; // gravel subbase
const FORM_COST_PER_LIN_FT = 1.5;
const DELIVERY_FEE_PER_LOAD = 75; // typical short-load fees
const YARDS_PER_TRUCK = 10;

export default function ConcreteDrivewayCostCalculator() {
  const [length, setLength] = useState<number>(40);
  const [width, setWidth] = useState<number>(16);
  const [thickness, setThickness] = useState<Thickness>(4);
  const [reinforcement, setReinforcement] =
    useState<ReinforcementType>("wire-mesh");
  const [finishType, setFinishType] = useState<FinishType>("broom");

  // Area
  const sqFt = length * width;

  // Volume
  const thicknessInFt = thickness / 12;
  const cuFt = sqFt * thicknessInFt;
  const cuYards = cuFt / 27;
  const cuYardsWithWaste = cuYards * 1.05; // 5% waste factor

  // Perimeter for forms
  const perimeterFt = 2 * (length + width);

  // Costs
  const concreteCost = cuYardsWithWaste * CONCRETE_COST_PER_YARD;
  const deliveryLoads = Math.ceil(cuYardsWithWaste / YARDS_PER_TRUCK);
  const deliveryCost = deliveryLoads * DELIVERY_FEE_PER_LOAD;

  const reinforceInfo = REINFORCEMENT_OPTIONS.find(
    (r) => r.value === reinforcement
  )!;
  const reinforcementCost = sqFt * reinforceInfo.costPerSqFt;

  const subbaseCost = sqFt * SUBBASE_COST_PER_SQFT;
  const formCost = perimeterFt * FORM_COST_PER_LIN_FT;

  const totalMaterialCost =
    concreteCost + deliveryCost + reinforcementCost + subbaseCost + formCost;

  const finishInfo = FINISH_OPTIONS.find((f) => f.value === finishType)!;
  const laborCost = sqFt * finishInfo.laborPerSqFt;

  const totalProjectCost = totalMaterialCost + laborCost;
  const costPerSqFt = sqFt > 0 ? totalProjectCost / sqFt : 0;

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="Concrete Driveway Cost Calculator"
      description="Estimate the total cost of a concrete driveway including materials, labor, and finishing. Uses realistic 2025-2026 pricing for concrete, reinforcement, and popular finish types."
      trade="Concrete"
      howToUse="Enter the driveway length and width in feet, select the concrete thickness (4 inches for passenger vehicles, 6 inches for heavy trucks or RVs), choose your reinforcement type, and pick the finish style. The calculator breaks down material costs, labor costs, and gives you a total project estimate with cost per square foot."
      formula="Volume (cu yd) = (L x W x Thickness/12) / 27 + 5% waste. Material Cost = Concrete + Delivery + Reinforcement + Subbase + Forms. Labor = Sq Ft x Labor Rate (varies by finish). Total = Materials + Labor."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="length" className={labelClass}>
            Driveway Length (ft)
          </label>
          <input
            id="length"
            type="number"
            min={1}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="width" className={labelClass}>
            Driveway Width (ft)
          </label>
          <input
            id="width"
            type="number"
            min={1}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="thickness" className={labelClass}>
            Thickness
          </label>
          <select
            id="thickness"
            value={thickness}
            onChange={(e) => setThickness(Number(e.target.value) as Thickness)}
            className={inputClass}
          >
            <option value={4}>4 inches (standard passenger vehicles)</option>
            <option value={6}>6 inches (heavy trucks / RVs)</option>
          </select>
        </div>

        <div>
          <label htmlFor="reinforcement" className={labelClass}>
            Reinforcement Type
          </label>
          <select
            id="reinforcement"
            value={reinforcement}
            onChange={(e) =>
              setReinforcement(e.target.value as ReinforcementType)
            }
            className={inputClass}
          >
            {REINFORCEMENT_OPTIONS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="finishType" className={labelClass}>
            Finish Type
          </label>
          <select
            id="finishType"
            value={finishType}
            onChange={(e) => setFinishType(e.target.value as FinishType)}
            className={inputClass}
          >
            {FINISH_OPTIONS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          Cost Estimate
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Area</p>
            <p className="text-2xl font-bold text-brand-blue">
              {sqFt.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Concrete Needed</p>
            <p className="text-2xl font-bold text-brand-blue">
              {cuYardsWithWaste.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">cubic yards (incl. 5% waste)</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Project Cost</p>
            <p className="text-2xl font-bold text-brand-orange">
              ${totalProjectCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-gray-500">estimated</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Cost per Sq Ft</p>
            <p className="text-2xl font-bold text-brand-orange">
              ${costPerSqFt.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">per sq ft</p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <h3 className="text-lg font-bold text-brand-blue mb-3">
          Cost Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">Item</th>
                <th className="px-3 py-2 text-right">Details</th>
                <th className="px-3 py-2 text-right rounded-tr-lg">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 font-semibold">
                <td className="px-3 py-2" colSpan={2}>
                  Materials
                </td>
                <td className="px-3 py-2 text-right">
                  $
                  {totalMaterialCost.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2 pl-6">Concrete</td>
                <td className="px-3 py-2 text-right">
                  {cuYardsWithWaste.toFixed(1)} yd&sup3; @ $
                  {CONCRETE_COST_PER_YARD}/yd
                </td>
                <td className="px-3 py-2 text-right">
                  ${concreteCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 pl-6">Delivery</td>
                <td className="px-3 py-2 text-right">
                  {deliveryLoads} load{deliveryLoads > 1 ? "s" : ""} @ $
                  {DELIVERY_FEE_PER_LOAD}/load
                </td>
                <td className="px-3 py-2 text-right">
                  ${deliveryCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2 pl-6">{reinforceInfo.label}</td>
                <td className="px-3 py-2 text-right">
                  {sqFt} sq ft @ ${reinforceInfo.costPerSqFt.toFixed(2)}/sq ft
                </td>
                <td className="px-3 py-2 text-right">
                  ${reinforcementCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 pl-6">Gravel Subbase (4&quot;)</td>
                <td className="px-3 py-2 text-right">
                  {sqFt} sq ft @ ${SUBBASE_COST_PER_SQFT.toFixed(2)}/sq ft
                </td>
                <td className="px-3 py-2 text-right">
                  ${subbaseCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-3 py-2 pl-6">Forms &amp; Stakes</td>
                <td className="px-3 py-2 text-right">
                  {perimeterFt} lin ft @ ${FORM_COST_PER_LIN_FT.toFixed(2)}/ft
                </td>
                <td className="px-3 py-2 text-right">
                  ${formCost.toFixed(0)}
                </td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="px-3 py-2">Labor ({finishInfo.label})</td>
                <td className="px-3 py-2 text-right">
                  {sqFt} sq ft @ ${finishInfo.laborPerSqFt.toFixed(2)}/sq ft
                </td>
                <td className="px-3 py-2 text-right">
                  ${laborCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
              </tr>
              <tr className="bg-brand-blue text-white font-bold">
                <td className="px-3 py-2 rounded-bl-lg" colSpan={2}>
                  Total Estimated Cost
                </td>
                <td className="px-3 py-2 text-right rounded-br-lg">
                  $
                  {totalProjectCost.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Prices are based on 2025-2026 national averages. Actual costs vary by
          region, site conditions, and contractor. Does not include demolition of
          existing driveway, grading, or permits.
        </p>
      </div>
    </CalculatorLayout>
  );
}
