"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type GutterSize = "5" | "6";

// Maximum roof area (sq ft) a single downspout can handle
// Based on standard 2x3 and 3x4 downspouts at 1 in/hr rainfall
const DOWNSPOUT_CAPACITY: Record<GutterSize, number> = {
  "5": 600, // 5" K-style with 2x3 downspout
  "6": 1000, // 6" K-style with 3x4 downspout
};

// Gutter capacity in sq ft of roof area per linear foot at 1 in/hr
const GUTTER_CAPACITY_PER_FT: Record<GutterSize, number> = {
  "5": 5520, // 5" gutter max drainage area in sq ft (entire run)
  "6": 7960, // 6" gutter max drainage area in sq ft (entire run)
};

export default function GutterCalculator() {
  const [roofArea, setRoofArea] = useState<number>(1500);
  const [rainfallIntensity, setRainfallIntensity] = useState<number>(1);
  const [gutterSize, setGutterSize] = useState<GutterSize>("5");
  const [numCorners, setNumCorners] = useState<number>(4);
  const [gutterRunLength, setGutterRunLength] = useState<number>(120);
  const [roofEdges, setRoofEdges] = useState<number>(2);

  // Adjust roof area for rainfall intensity
  const adjustedArea = roofArea * rainfallIntensity;

  // Number of downspouts needed
  const downspoutCapacity = DOWNSPOUT_CAPACITY[gutterSize];
  const numDownspouts = Math.max(2, Math.ceil(adjustedArea / downspoutCapacity));

  // Linear feet of gutter
  const linearFeetGutter = gutterRunLength;

  // Hangers / brackets: one every 2 feet + 1
  const numHangers = Math.ceil(linearFeetGutter / 2) + 1;

  // End caps: 2 per gutter run end (left + right) per roof edge
  const numEndCaps = roofEdges * 2;

  // Inside/outside miters for corners
  const numMiters = numCorners;

  // Downspout elbows (typically 2 per downspout for offset + 1 at bottom)
  const numElbows = numDownspouts * 3;

  // Downspout pipe: estimate 10 ft per downspout
  const downspoutPipeFeet = numDownspouts * 10;

  // Gutter sealant tubes: 1 per 40 ft
  const sealantTubes = Math.ceil(linearFeetGutter / 40);

  // Drop outlets
  const numDropOutlets = numDownspouts;

  return (
    <CalculatorLayout
      title="Gutters & Downspout Calculator"
      description="Calculate the gutters, downspouts, hangers, end caps, and miters needed for your roof. Size your gutter system based on roof drainage area and local rainfall intensity."
      trade="Roofing"
      howToUse="Enter your total roof drainage area in square feet (the footprint area that drains to the gutters). Input the rainfall intensity for your area in inches per hour. Select a gutter size, then enter the total gutter run length, number of corners, and roof edges. The calculator sizes the system and lists all components needed."
      formula="Adjusted Drainage Area = Roof Area x Rainfall Intensity. Downspouts = Adjusted Area / Downspout Capacity. Hangers = Gutter Length / 2 ft spacing + 1. End Caps = Roof Edges x 2."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="roofArea" className="block text-sm font-medium text-gray-700 mb-1">
            Roof Drainage Area (sq ft)
          </label>
          <input
            id="roofArea"
            type="number"
            min={1}
            step={10}
            value={roofArea}
            onChange={(e) => setRoofArea(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="rainfallIntensity" className="block text-sm font-medium text-gray-700 mb-1">
            Rainfall Intensity (in/hr)
          </label>
          <select
            id="rainfallIntensity"
            value={rainfallIntensity}
            onChange={(e) => setRainfallIntensity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={1}>1 in/hr (light)</option>
            <option value={2}>2 in/hr (moderate)</option>
            <option value={3}>3 in/hr (heavy)</option>
            <option value={4}>4 in/hr (extreme)</option>
            <option value={5}>5 in/hr (tropical)</option>
          </select>
        </div>

        <div>
          <label htmlFor="gutterSize" className="block text-sm font-medium text-gray-700 mb-1">
            Gutter Size
          </label>
          <select
            id="gutterSize"
            value={gutterSize}
            onChange={(e) => setGutterSize(e.target.value as GutterSize)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="5">5&quot; K-Style (standard residential)</option>
            <option value="6">6&quot; K-Style (larger roofs)</option>
          </select>
        </div>

        <div>
          <label htmlFor="gutterRunLength" className="block text-sm font-medium text-gray-700 mb-1">
            Total Gutter Run (linear feet)
          </label>
          <input
            id="gutterRunLength"
            type="number"
            min={1}
            step={1}
            value={gutterRunLength}
            onChange={(e) => setGutterRunLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="numCorners" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Corners
          </label>
          <input
            id="numCorners"
            type="number"
            min={0}
            step={1}
            value={numCorners}
            onChange={(e) => setNumCorners(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="roofEdges" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Gutter Run Ends
          </label>
          <input
            id="roofEdges"
            type="number"
            min={1}
            step={1}
            value={roofEdges}
            onChange={(e) => setRoofEdges(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Materials List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gutter</p>
            <p className="text-2xl font-bold text-brand-orange">{linearFeetGutter}</p>
            <p className="text-sm text-gray-500">linear feet ({gutterSize}&quot; K-style)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Downspouts Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{numDownspouts}</p>
            <p className="text-sm text-gray-500">{gutterSize === "5" ? '2x3"' : '3x4"'} outlets</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Downspout Pipe</p>
            <p className="text-2xl font-bold text-brand-blue">{downspoutPipeFeet}</p>
            <p className="text-sm text-gray-500">linear feet (est.)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Hangers / Brackets</p>
            <p className="text-2xl font-bold text-brand-blue">{numHangers}</p>
            <p className="text-sm text-gray-500">every 2 ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">End Caps</p>
            <p className="text-2xl font-bold text-brand-blue">{numEndCaps}</p>
            <p className="text-sm text-gray-500">left + right</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Miters (Corners)</p>
            <p className="text-2xl font-bold text-brand-blue">{numMiters}</p>
            <p className="text-sm text-gray-500">inside/outside</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Drop Outlets</p>
            <p className="text-2xl font-bold text-brand-blue">{numDropOutlets}</p>
            <p className="text-sm text-gray-500">for downspouts</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Elbows</p>
            <p className="text-2xl font-bold text-brand-blue">{numElbows}</p>
            <p className="text-sm text-gray-500">downspout elbows</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sealant Tubes</p>
            <p className="text-2xl font-bold text-brand-blue">{sealantTubes}</p>
            <p className="text-sm text-gray-500">gutter sealant</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
