"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type AreaShape = "rectangle" | "circle" | "triangle" | "irregular";

type MaterialType =
  | "gravel"
  | "crushed_stone"
  | "pea_gravel"
  | "river_rock"
  | "sand"
  | "decomposed_granite"
  | "road_base"
  | "topsoil";

const MATERIALS: Record<MaterialType, { label: string; density: number }> = {
  gravel: { label: "Gravel", density: 1.4 },
  crushed_stone: { label: "Crushed Stone", density: 1.4 },
  pea_gravel: { label: "Pea Gravel", density: 1.35 },
  river_rock: { label: "River Rock", density: 1.35 },
  sand: { label: "Sand", density: 1.35 },
  decomposed_granite: { label: "Decomposed Granite", density: 1.3 },
  road_base: { label: "Road Base / Crusher Run", density: 1.5 },
  topsoil: { label: "Topsoil", density: 1.1 },
};

export default function GravelAggregateCalculator() {
  const [areaShape, setAreaShape] = useState<AreaShape>("rectangle");
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(10);
  const [diameter, setDiameter] = useState<number>(10);
  const [base, setBase] = useState<number>(20);
  const [triHeight, setTriHeight] = useState<number>(10);
  const [sqFt, setSqFt] = useState<number>(200);
  const [depthInches, setDepthInches] = useState<number>(4);
  const [material, setMaterial] = useState<MaterialType>("gravel");
  const [pricePerTon, setPricePerTon] = useState<string>("");

  // Calculate coverage area based on shape
  let coverageArea = 0;
  if (areaShape === "rectangle") {
    coverageArea = length * width;
  } else if (areaShape === "circle") {
    const radius = diameter / 2;
    coverageArea = Math.PI * radius * radius;
  } else if (areaShape === "triangle") {
    coverageArea = (base * triHeight) / 2;
  } else {
    coverageArea = sqFt;
  }

  const cubicFeet = coverageArea * (depthInches / 12);
  const cubicYards = cubicFeet / 27;
  const density = MATERIALS[material].density;
  const weightTons = cubicYards * density;
  const truckLoads = weightTons / 10;

  const price = parseFloat(pricePerTon);
  const estimatedCost = !isNaN(price) && price > 0 ? weightTons * price : null;

  return (
    <CalculatorLayout
      title="Gravel & Aggregate Calculator"
      description="Calculate how much gravel, crushed stone, sand, or other aggregate you need. Get tonnage, cubic yards, truck loads, and cost estimates."
      trade="Landscaping & Hardscaping"
      howToUse="Select the shape of your area to cover. Enter the dimensions and desired depth. Choose a material type to get accurate tonnage based on density. Optionally enter a price per ton from your local supplier to estimate total cost."
      formula="Area (sq ft) varies by shape. Volume (cu ft) = Area x (Depth in / 12). Cubic Yards = Cu Ft / 27. Tons = Cubic Yards x Material Density. Truck Loads = Tons / 10."
    >
      {/* Shape selector */}
      <div className="mb-6">
        <label htmlFor="areaShape" className="block text-sm font-medium text-gray-700 mb-1">Area Shape</label>
        <select
          id="areaShape"
          value={areaShape}
          onChange={(e) => setAreaShape(e.target.value as AreaShape)}
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        >
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
          <option value="triangle">Triangle</option>
          <option value="irregular">Irregular (enter sq ft directly)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Dimension inputs based on shape */}
        {areaShape === "rectangle" && (
          <>
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
              <input
                id="length"
                type="number"
                min={0.1}
                step={0.1}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
              <input
                id="width"
                type="number"
                min={0.1}
                step={0.1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        )}

        {areaShape === "circle" && (
          <div>
            <label htmlFor="diameter" className="block text-sm font-medium text-gray-700 mb-1">Diameter (feet)</label>
            <input
              id="diameter"
              type="number"
              min={0.1}
              step={0.1}
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {areaShape === "triangle" && (
          <>
            <div>
              <label htmlFor="base" className="block text-sm font-medium text-gray-700 mb-1">Base (feet)</label>
              <input
                id="base"
                type="number"
                min={0.1}
                step={0.1}
                value={base}
                onChange={(e) => setBase(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="triHeight" className="block text-sm font-medium text-gray-700 mb-1">Height (feet)</label>
              <input
                id="triHeight"
                type="number"
                min={0.1}
                step={0.1}
                value={triHeight}
                onChange={(e) => setTriHeight(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </>
        )}

        {areaShape === "irregular" && (
          <div>
            <label htmlFor="sqFt" className="block text-sm font-medium text-gray-700 mb-1">Total Area (sq ft)</label>
            <input
              id="sqFt"
              type="number"
              min={1}
              step={1}
              value={sqFt}
              onChange={(e) => setSqFt(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        {/* Depth */}
        <div>
          <label htmlFor="depthInches" className="block text-sm font-medium text-gray-700 mb-1">Depth (inches)</label>
          <select
            id="depthInches"
            value={depthInches}
            onChange={(e) => setDepthInches(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={2}>2 inches</option>
            <option value={3}>3 inches</option>
            <option value={4}>4 inches</option>
            <option value={6}>6 inches</option>
          </select>
        </div>

        {/* Material type */}
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">Material Type</label>
          <select
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value as MaterialType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(MATERIALS).map(([key, { label, density: d }]) => (
              <option key={key} value={key}>
                {label} ({d} tons/cy)
              </option>
            ))}
          </select>
        </div>

        {/* Price per ton */}
        <div>
          <label htmlFor="pricePerTon" className="block text-sm font-medium text-gray-700 mb-1">Price per Ton (optional)</label>
          <input
            id="pricePerTon"
            type="number"
            min={0}
            step={0.01}
            placeholder="e.g. 45.00"
            value={pricePerTon}
            onChange={(e) => setPricePerTon(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Coverage Area</p>
            <p className="text-2xl font-bold text-brand-blue">{coverageArea.toFixed(1)}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-2xl font-bold text-brand-blue">{cubicFeet.toFixed(1)}</p>
            <p className="text-sm text-gray-500">cubic feet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-2xl font-bold text-brand-orange">{cubicYards.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Weight ({MATERIALS[material].label})</p>
            <p className="text-2xl font-bold text-brand-blue">{weightTons.toFixed(2)}</p>
            <p className="text-sm text-gray-500">tons</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Truck Loads</p>
            <p className="text-2xl font-bold text-brand-blue">{truckLoads < 1 ? truckLoads.toFixed(2) : Math.ceil(truckLoads)}</p>
            <p className="text-sm text-gray-500">10-ton dump trucks</p>
          </div>
          {estimatedCost !== null && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Estimated Cost</p>
              <p className="text-2xl font-bold text-brand-orange">
                ${estimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-gray-500">at ${price}/ton</p>
            </div>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
