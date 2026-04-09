"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const sandTypes: Record<
  string,
  { label: string; densityLbPerCuYd: number; costPerTon: number }
> = {
  play: { label: "Play Sand", densityLbPerCuYd: 2700, costPerTon: 40 },
  masonry: { label: "Masonry Sand", densityLbPerCuYd: 2700, costPerTon: 35 },
  fill: { label: "Fill Sand", densityLbPerCuYd: 2500, costPerTon: 25 },
  paver: { label: "Paver Base Sand", densityLbPerCuYd: 2800, costPerTon: 45 },
};

export default function SandCalculator() {
  const [shape, setShape] = useState<"rectangle" | "circle">("rectangle");
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(10);
  const [diameter, setDiameter] = useState<number>(10);
  const [depthInches, setDepthInches] = useState<number>(4);
  const [sandType, setSandType] = useState<string>("masonry");

  const sand = sandTypes[sandType];

  // Area in sq ft
  const areaSqFt =
    shape === "rectangle"
      ? length * width
      : Math.PI * Math.pow(diameter / 2, 2);

  // Depth in feet
  const depthFt = depthInches / 12;

  // Volume in cubic feet
  const cubicFeet = areaSqFt * depthFt;

  // Volume in cubic yards
  const cubicYards = cubicFeet / 27;

  // Weight in lbs
  const weightLbs = cubicYards * sand.densityLbPerCuYd;

  // Weight in tons
  const tons = weightLbs / 2000;

  // Cost estimate
  const costEstimate = tons * sand.costPerTon;

  // 50 lb bags equivalent
  const bags50lb = Math.ceil(weightLbs / 50);

  return (
    <CalculatorLayout
      title="Sand Calculator"
      description="Calculate the amount of sand you need in cubic feet, cubic yards, and tons. Supports rectangular and circular areas with multiple sand types and cost estimates for accurate project planning."
      trade="General"
      howToUse="Select the shape of your project area (rectangle or circle) and enter the dimensions. Set the sand depth in inches. Choose your sand type to get accurate weight calculations based on density. The calculator shows volume in cubic feet and cubic yards, weight in tons, bag count, and a cost estimate."
      formula="Volume (cu ft) = Area x Depth. Cubic Yards = Cubic Feet / 27. Tons = (Cubic Yards x Density in lbs/cu yd) / 2000. Rectangle Area = Length x Width. Circle Area = pi x radius squared."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Shape Selection */}
        <div>
          <label htmlFor="shape" className="block text-sm font-medium text-gray-700 mb-1">
            Area Shape
          </label>
          <select
            id="shape"
            value={shape}
            onChange={(e) => setShape(e.target.value as "rectangle" | "circle")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
          </select>
        </div>

        {/* Sand Type */}
        <div>
          <label htmlFor="sandType" className="block text-sm font-medium text-gray-700 mb-1">
            Sand Type
          </label>
          <select
            id="sandType"
            value={sandType}
            onChange={(e) => setSandType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(sandTypes).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label} (~{val.densityLbPerCuYd} lbs/cu yd)
              </option>
            ))}
          </select>
        </div>

        {/* Dimensions */}
        {shape === "rectangle" ? (
          <>
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
                Length (ft)
              </label>
              <input
                id="length"
                type="number"
                min={0.1}
                max={1000}
                step={0.5}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                Width (ft)
              </label>
              <input
                id="width"
                type="number"
                min={0.1}
                max={1000}
                step={0.5}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="diameter" className="block text-sm font-medium text-gray-700 mb-1">
              Diameter (ft)
            </label>
            <input
              id="diameter"
              type="number"
              min={0.1}
              max={1000}
              step={0.5}
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {/* Depth */}
        <div>
          <label htmlFor="depth" className="block text-sm font-medium text-gray-700 mb-1">
            Depth (inches)
          </label>
          <input
            id="depth"
            type="number"
            min={0.5}
            max={72}
            step={0.5}
            value={depthInches}
            onChange={(e) => setDepthInches(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            2&quot; for paver joints, 4&quot; for base layers, 6&quot;+ for play areas
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Sand Estimate ({sand.label})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Area</p>
            <p className="text-2xl font-bold text-brand-blue">{areaSqFt.toFixed(1)} sq ft</p>
            <p className="text-sm text-gray-500">
              {shape === "rectangle"
                ? `${length} ft x ${width} ft`
                : `${diameter} ft diameter`}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume (cu ft)</p>
            <p className="text-2xl font-bold text-brand-orange">{cubicFeet.toFixed(1)}</p>
            <p className="text-sm text-gray-500">cubic feet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume (cu yd)</p>
            <p className="text-2xl font-bold text-brand-blue">{cubicYards.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Weight</p>
            <p className="text-2xl font-bold text-brand-orange">{tons.toFixed(2)} tons</p>
            <p className="text-sm text-gray-500">{weightLbs.toLocaleString(undefined, { maximumFractionDigits: 0 })} lbs</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">50 lb Bags</p>
            <p className="text-2xl font-bold text-brand-blue">{bags50lb.toLocaleString()}</p>
            <p className="text-sm text-gray-500">if buying bagged</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Estimated Cost</p>
            <p className="text-2xl font-bold text-brand-orange">
              ${costEstimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-gray-500">${sand.costPerTon}/ton (bulk delivery)</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
