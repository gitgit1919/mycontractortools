"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const surfaceTypes: Record<string, number> = {
  "Smooth drywall": 400,
  "Textured drywall": 300,
  "Bare wood": 300,
  "Previously painted": 400,
  "Stucco / rough masonry": 200,
  "Brick": 200,
  "Concrete block": 250,
};

export default function PaintCoverageCalculator() {
  const [length, setLength] = useState<number>(40);
  const [width, setWidth] = useState<number>(30);
  const [ceilingHeight, setCeilingHeight] = useState<number>(8);
  const [paintCeiling, setPaintCeiling] = useState<boolean>(false);
  const [doors, setDoors] = useState<number>(5);
  const [windows, setWindows] = useState<number>(6);
  const [coats, setCoats] = useState<number>(2);
  const [surface, setSurface] = useState<string>("Smooth drywall");

  const doorArea = doors * 21;
  const windowArea = windows * 15;
  const wallArea = 2 * (length + width) * ceilingHeight - doorArea - windowArea;
  const ceilingArea = paintCeiling ? length * width : 0;
  const totalSqFt = Math.max(wallArea + ceilingArea, 0);
  const paintableSqFt = totalSqFt * coats;

  const coveragePerGallon = surfaceTypes[surface];
  const gallonsNeeded = paintableSqFt / coveragePerGallon;
  const gallonsRounded = Math.ceil(gallonsNeeded);

  return (
    <CalculatorLayout
      title="Paint Coverage Calculator"
      description="Calculate how many gallons of paint you need for interior or exterior walls and ceilings. Adjusts for surface type, number of coats, and openings."
      trade="Painting"
      howToUse="Enter the room dimensions, number of doors and windows to subtract, and select the surface type. Different surfaces absorb paint differently — rough surfaces like stucco require more paint per square foot. Choose the number of coats (2 is standard for most jobs, primer coats are separate)."
      formula="Wall Area = 2 × (Length + Width) × Height - Doors - Windows. Paintable Sq Ft = Total Area × Number of Coats. Gallons = Paintable Sq Ft / Coverage per Gallon."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Room Length (feet)</label>
          <input id="length" type="number" min={1} step={0.5} value={length} onChange={(e) => setLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Room Width (feet)</label>
          <input id="width" type="number" min={1} step={0.5} value={width} onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="ceilingHeight" className="block text-sm font-medium text-gray-700 mb-1">Ceiling Height (feet)</label>
          <input id="ceilingHeight" type="number" min={6} max={20} step={0.5} value={ceilingHeight} onChange={(e) => setCeilingHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-1">Surface Type</label>
          <select id="surface" value={surface} onChange={(e) => setSurface(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.keys(surfaceTypes).map((s) => (
              <option key={s} value={s}>{s} ({surfaceTypes[s]} sq ft/gal)</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="doors" className="block text-sm font-medium text-gray-700 mb-1">Number of Doors</label>
          <input id="doors" type="number" min={0} max={50} value={doors} onChange={(e) => setDoors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="windows" className="block text-sm font-medium text-gray-700 mb-1">Number of Windows</label>
          <input id="windows" type="number" min={0} max={50} value={windows} onChange={(e) => setWindows(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="coats" className="block text-sm font-medium text-gray-700 mb-1">Number of Coats</label>
          <input id="coats" type="number" min={1} max={5} value={coats} onChange={(e) => setCoats(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div className="flex items-center gap-3">
          <input id="paintCeiling" type="checkbox" checked={paintCeiling} onChange={(e) => setPaintCeiling(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
          <label htmlFor="paintCeiling" className="text-sm font-medium text-gray-700">Include Ceiling</label>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Paintable Area</p>
            <p className="text-2xl font-bold text-brand-blue">{totalSqFt.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft (1 coat)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Coverage</p>
            <p className="text-2xl font-bold text-brand-blue">{paintableSqFt.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft ({coats} coat{coats > 1 ? "s" : ""})</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Paint Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{gallonsRounded}</p>
            <p className="text-sm text-gray-500">gallons</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Exact Amount</p>
            <p className="text-2xl font-bold text-brand-blue">{gallonsNeeded.toFixed(1)}</p>
            <p className="text-sm text-gray-500">gallons</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
