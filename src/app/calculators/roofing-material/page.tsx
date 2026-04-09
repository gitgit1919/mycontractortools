"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const pitchMultipliers: Record<string, number> = {
  "flat": 1.0, "2/12": 1.01, "3/12": 1.03, "4/12": 1.06, "5/12": 1.08,
  "6/12": 1.12, "7/12": 1.16, "8/12": 1.20, "9/12": 1.25, "10/12": 1.30,
  "11/12": 1.36, "12/12": 1.41,
};

export default function RoofingMaterialCalculator() {
  const [footprint, setFootprint] = useState<number>(1500);
  const [pitch, setPitch] = useState<string>("6/12");
  const [wasteFactor, setWasteFactor] = useState<number>(15);
  const [ridgeLength, setRidgeLength] = useState<number>(40);
  const [valleyLength, setValleyLength] = useState<number>(0);

  const roofArea = footprint * pitchMultipliers[pitch];
  const squares = roofArea / 100;
  const withWaste = squares * (1 + wasteFactor / 100);
  const bundlesShingles = Math.ceil(withWaste * 3); // 3 bundles per square
  const underlaymentRolls = Math.ceil(roofArea / 400); // 4 sq per roll
  const ridgeCaps = Math.ceil(ridgeLength / 25); // 25 linear ft per bundle
  const starterStrip = Math.ceil((2 * Math.sqrt(footprint) * 2) / 100); // perimeter estimate
  const dripEdge10ft = Math.ceil((2 * Math.sqrt(footprint) * 2) / 10);
  const iceWaterShield = Math.ceil((2 * Math.sqrt(footprint) * 2 * 3) / 66.7); // 3ft up from eave, 66.7 sq ft per roll
  const nails = Math.ceil(withWaste * 320); // ~320 nails per square

  return (
    <CalculatorLayout
      title="Roofing Material Calculator"
      description="Estimate the shingles, underlayment, ridge caps, and accessories needed for a roofing job based on roof footprint and pitch."
      trade="Roofing"
      howToUse="Enter the roof footprint (the area as seen from directly above, which equals the home's floor plan area for a simple roof). Select the roof pitch. The calculator adjusts the footprint by the pitch multiplier to get actual roof surface area, then calculates materials with your selected waste factor. Enter ridge and valley lengths if known for more accurate accessory estimates."
      formula="Roof Area = Footprint × Pitch Multiplier. Squares = Roof Area / 100. Bundles = Squares × 3. Underlayment rolls = Roof Area / 400."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="footprint" className="block text-sm font-medium text-gray-700 mb-1">Roof Footprint (sq ft)</label>
          <input id="footprint" type="number" min={100} max={100000} value={footprint} onChange={(e) => setFootprint(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Area as seen from above (building footprint)</p>
        </div>
        <div>
          <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 mb-1">Roof Pitch</label>
          <select id="pitch" value={pitch} onChange={(e) => setPitch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.keys(pitchMultipliers).map((p) => (
              <option key={p} value={p}>{p === "flat" ? "Flat" : p}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="waste" type="number" min={5} max={30} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="ridge" className="block text-sm font-medium text-gray-700 mb-1">Ridge Length (linear ft)</label>
          <input id="ridge" type="number" min={0} max={1000} value={ridgeLength} onChange={(e) => setRidgeLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Roof Area</p>
            <p className="text-xl font-bold text-brand-blue">{Math.round(roofArea).toLocaleString()} sq ft</p>
            <p className="text-sm text-gray-500">{withWaste.toFixed(1)} squares with waste</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Shingle Bundles</p>
            <p className="text-xl font-bold text-brand-orange">{bundlesShingles}</p>
            <p className="text-sm text-gray-500">3-tab or architectural</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Underlayment Rolls</p>
            <p className="text-xl font-bold text-brand-blue">{underlaymentRolls}</p>
            <p className="text-sm text-gray-500">15 lb or synthetic</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Ridge Cap Bundles</p>
            <p className="text-xl font-bold text-brand-blue">{ridgeCaps}</p>
            <p className="text-sm text-gray-500">25 linear ft each</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Drip Edge (10 ft pieces)</p>
            <p className="text-xl font-bold text-brand-blue">{dripEdge10ft}</p>
            <p className="text-sm text-gray-500">eave &amp; rake edges</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Roofing Nails</p>
            <p className="text-xl font-bold text-brand-blue">{nails.toLocaleString()}</p>
            <p className="text-sm text-gray-500">~{Math.ceil(nails / 140)} lbs coil</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
