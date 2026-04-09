"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const materials: Record<string, { lbsPerCuYd: number; coverage2in: number }> = {
  "Mulch (wood chips)": { lbsPerCuYd: 600, coverage2in: 162 },
  "Gravel (pea gravel)": { lbsPerCuYd: 2700, coverage2in: 162 },
  "Crushed stone": { lbsPerCuYd: 2700, coverage2in: 162 },
  "Topsoil": { lbsPerCuYd: 2200, coverage2in: 162 },
  "Compost": { lbsPerCuYd: 1000, coverage2in: 162 },
  "Sand": { lbsPerCuYd: 2700, coverage2in: 162 },
  "River rock": { lbsPerCuYd: 2700, coverage2in: 162 },
  "Decomposed granite": { lbsPerCuYd: 2500, coverage2in: 162 },
};

export default function LandscapingMaterialCalculator() {
  const [material, setMaterial] = useState<string>("Mulch (wood chips)");
  const [length, setLength] = useState<number>(30);
  const [width, setWidth] = useState<number>(10);
  const [depth, setDepth] = useState<number>(3);

  const sqFt = length * width;
  const cubicFeet = sqFt * (depth / 12);
  const cubicYards = cubicFeet / 27;
  const tons = (cubicYards * materials[material].lbsPerCuYd) / 2000;

  return (
    <CalculatorLayout
      title="Landscaping Material Calculator"
      description="Calculate how many cubic yards of mulch, gravel, topsoil, sand, or other landscaping material you need for your project."
      trade="Landscaping"
      howToUse="Select the material type, then enter the area dimensions (length and width in feet) and the desired depth in inches. The calculator converts to cubic yards for ordering and provides weight in tons for delivery planning. Standard mulch depth is 2-3 inches; gravel driveways typically need 4-6 inches."
      formula="Cubic Feet = Length × Width × (Depth / 12). Cubic Yards = Cubic Feet / 27. Tons = Cubic Yards × Material Weight per Cubic Yard / 2,000."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">Material</label>
          <select id="material" value={material} onChange={(e) => setMaterial(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.keys(materials).map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
          <input id="length" type="number" min={0.1} step={0.1} value={length} onChange={(e) => setLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
          <input id="width" type="number" min={0.1} step={0.1} value={width} onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="depth" className="block text-sm font-medium text-gray-700 mb-1">Depth (inches)</label>
          <input id="depth" type="number" min={0.5} max={48} step={0.5} value={depth} onChange={(e) => setDepth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Area</p>
            <p className="text-2xl font-bold text-brand-blue">{sqFt.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-2xl font-bold text-brand-orange">{cubicYards.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Weight</p>
            <p className="text-2xl font-bold text-brand-blue">{tons.toFixed(2)}</p>
            <p className="text-sm text-gray-500">tons</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Cubic Feet</p>
            <p className="text-2xl font-bold text-brand-blue">{cubicFeet.toFixed(1)}</p>
            <p className="text-sm text-gray-500">cu ft</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
