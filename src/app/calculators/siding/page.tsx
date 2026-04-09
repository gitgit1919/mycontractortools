"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

interface Wall {
  height: number;
  width: number;
}

interface Gable {
  base: number;
  height: number;
}

const sidingTypes = {
  vinyl: { label: "Vinyl Siding", coverage: 100, unit: "box (2 squares)" },
  fiberCement: { label: "Fiber Cement / HardiePlank", coverage: 3.56, unit: 'piece (12" × 144", 7" exposure)' },
  woodLap: { label: "Wood Lap Siding", coverage: 1.33, unit: 'board (6" × 16\', 5" exposure)' },
  boardAndBatten: { label: "Board and Batten", coverage: 1.0, unit: 'board (12" × 8\' panel)' },
};

export default function SidingCalculator() {
  const [wallCount, setWallCount] = useState<number>(4);
  const [walls, setWalls] = useState<Wall[]>([
    { height: 9, width: 40 },
    { height: 9, width: 30 },
    { height: 9, width: 40 },
    { height: 9, width: 30 },
  ]);
  const [gables, setGables] = useState<Gable[]>([]);
  const [doors, setDoors] = useState<number>(2);
  const [windows, setWindows] = useState<number>(8);
  const [sidingType, setSidingType] = useState<string>("vinyl");
  const [wasteFactor, setWasteFactor] = useState<number>(10);
  const [outsideCorners, setOutsideCorners] = useState<number>(4);
  const [insideCorners, setInsideCorners] = useState<number>(0);

  const updateWallCount = (count: number) => {
    const clamped = Math.max(1, Math.min(20, count));
    setWallCount(clamped);
    setWalls((prev) => {
      if (clamped > prev.length) {
        return [...prev, ...Array.from({ length: clamped - prev.length }, () => ({ height: 9, width: 20 }))];
      }
      return prev.slice(0, clamped);
    });
  };

  const updateWall = (index: number, field: keyof Wall, value: number) => {
    setWalls((prev) => prev.map((w, i) => (i === index ? { ...w, [field]: value } : w)));
  };

  const updateGableCount = (count: number) => {
    const clamped = Math.max(0, Math.min(10, count));
    setGables((prev) => {
      if (clamped > prev.length) {
        return [...prev, ...Array.from({ length: clamped - prev.length }, () => ({ base: 30, height: 6 }))];
      }
      return prev.slice(0, clamped);
    });
  };

  const updateGable = (index: number, field: keyof Gable, value: number) => {
    setGables((prev) => prev.map((g, i) => (i === index ? { ...g, [field]: value } : g)));
  };

  // Calculations
  const grossWallArea = walls.reduce((sum, w) => sum + w.height * w.width, 0);
  const gableArea = gables.reduce((sum, g) => sum + (g.base * g.height) / 2, 0);
  const totalGrossArea = grossWallArea + gableArea;

  const doorArea = doors * 21; // 3×7 ft standard door
  const windowArea = windows * 15; // 3×5 ft standard window
  const totalOpenings = doorArea + windowArea;
  const netArea = Math.max(totalGrossArea - totalOpenings, 0);

  const squaresOfSiding = netArea / 100;
  const withWaste = netArea * (1 + wasteFactor / 100);

  const siding = sidingTypes[sidingType as keyof typeof sidingTypes];
  const piecesOrBoxes = Math.ceil(withWaste / siding.coverage);

  // Starter strip: linear feet along the bottom of each wall
  const starterStripLF = walls.reduce((sum, w) => sum + w.width, 0);

  // J-channel / trim: perimeter around each window and door
  // Window perimeter: 2×(3+5) = 16 ft; Door perimeter: 2×(3+7) = 20 ft (minus bottom)
  const windowTrimLF = windows * 16;
  const doorTrimLF = doors * 17; // 3+7+7 (sides + top, no bottom)
  const jChannelLF = windowTrimLF + doorTrimLF;

  // Corner posts: typically 8-10 ft each, match wall height
  const avgWallHeight = walls.length > 0 ? walls.reduce((sum, w) => sum + w.height, 0) / walls.length : 9;
  const outsideCornerPosts = outsideCorners;
  const insideCornerPosts = insideCorners;

  // Nails/fasteners: approximately 2 nails per sq ft of siding
  const nailsForSiding = Math.ceil(withWaste * 2);
  // Additional nails for trim, starter, channels
  const nailsForAccessories = Math.ceil((starterStripLF + jChannelLF) * 1);
  const totalNails = nailsForSiding + nailsForAccessories;
  const nailsPerPound = 175; // 1.5" siding nails

  return (
    <CalculatorLayout
      title="Siding Calculator"
      description="Calculate siding materials, trim, starter strip, J-channel, corner posts, and fasteners needed for your project. Supports vinyl, fiber cement, wood lap, and board and batten siding."
      trade="Siding"
      howToUse="Enter the number of walls and their dimensions (height x width). Add gable ends if your home has triangular areas above walls. Specify doors and windows to subtract from the total wall area. Choose your siding type and waste factor, then review the complete material list below."
      formula="Net Area = (Sum of Wall Areas + Gable Areas) - Door Openings - Window Openings. Pieces/Boxes = Net Area x (1 + Waste%) / Coverage per Unit. Starter Strip = Sum of Wall Widths. J-Channel = Window Perimeters + Door Perimeters."
    >
      {/* Siding Type and Waste Factor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="sidingType" className="block text-sm font-medium text-gray-700 mb-1">Siding Type</label>
          <select id="sidingType" value={sidingType} onChange={(e) => setSidingType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.entries(sidingTypes).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <select id="waste" value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value={10}>10% — Simple, rectangular walls</option>
            <option value={15}>15% — Lots of cuts, angles, or dormers</option>
          </select>
        </div>
      </div>

      {/* Wall Measurements */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-brand-blue">Wall Measurements</h3>
          <div className="flex items-center gap-2">
            <label htmlFor="wallCount" className="text-sm font-medium text-gray-700">Walls:</label>
            <input id="wallCount" type="number" min={1} max={20} value={wallCount} onChange={(e) => updateWallCount(Number(e.target.value))}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 text-center focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
        </div>
        <div className="space-y-3">
          {walls.map((wall, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-2 bg-gray-50 rounded-lg p-3">
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Wall {i + 1}</span>
              <input type="number" min={1} max={50} step={0.5} value={wall.height} onChange={(e) => updateWall(i, "height", Number(e.target.value))}
                aria-label={`Wall ${i + 1} height`}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <span className="text-sm text-gray-500">ft H &times;</span>
              <input type="number" min={1} max={500} step={0.5} value={wall.width} onChange={(e) => updateWall(i, "width", Number(e.target.value))}
                aria-label={`Wall ${i + 1} width`}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <span className="text-sm text-gray-500">ft W</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gable Areas */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-brand-blue">Gable Ends (Optional)</h3>
          <div className="flex items-center gap-2">
            <label htmlFor="gableCount" className="text-sm font-medium text-gray-700">Gables:</label>
            <input id="gableCount" type="number" min={0} max={10} value={gables.length} onChange={(e) => updateGableCount(Number(e.target.value))}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 text-center focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
        </div>
        {gables.length > 0 && (
          <div className="space-y-3">
            {gables.map((gable, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-2 bg-gray-50 rounded-lg p-3">
                <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Gable {i + 1}</span>
                <input type="number" min={1} max={200} step={0.5} value={gable.base} onChange={(e) => updateGable(i, "base", Number(e.target.value))}
                  aria-label={`Gable ${i + 1} base`}
                  className="w-full border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
                <span className="text-sm text-gray-500">ft base &times;</span>
                <input type="number" min={1} max={50} step={0.5} value={gable.height} onChange={(e) => updateGable(i, "height", Number(e.target.value))}
                  aria-label={`Gable ${i + 1} height`}
                  className="w-full border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
                <span className="text-sm text-gray-500">ft H</span>
              </div>
            ))}
            <p className="text-xs text-gray-500">Triangle area = base x height / 2. This adds to total wall area.</p>
          </div>
        )}
        {gables.length === 0 && (
          <p className="text-sm text-gray-500">No gable ends. Increase the count above to add triangular gable areas.</p>
        )}
      </div>

      {/* Openings and Corners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="doors" className="block text-sm font-medium text-gray-700 mb-1">Doors (standard 3&apos; &times; 7&apos;)</label>
          <input id="doors" type="number" min={0} max={50} value={doors} onChange={(e) => setDoors(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="windows" className="block text-sm font-medium text-gray-700 mb-1">Windows (standard 3&apos; &times; 5&apos;)</label>
          <input id="windows" type="number" min={0} max={80} value={windows} onChange={(e) => setWindows(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="outsideCorners" className="block text-sm font-medium text-gray-700 mb-1">Outside Corner Posts</label>
          <input id="outsideCorners" type="number" min={0} max={20} value={outsideCorners} onChange={(e) => setOutsideCorners(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="insideCorners" className="block text-sm font-medium text-gray-700 mb-1">Inside Corner Posts</label>
          <input id="insideCorners" type="number" min={0} max={20} value={insideCorners} onChange={(e) => setInsideCorners(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material List</h2>

        {/* Area Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Wall Area</p>
            <p className="text-2xl font-bold text-brand-blue">{Math.round(totalGrossArea).toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft (incl. gables)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Openings Subtracted</p>
            <p className="text-2xl font-bold text-gray-600">{Math.round(totalOpenings).toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft ({doors} doors, {windows} windows)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Net Siding Area</p>
            <p className="text-2xl font-bold text-brand-blue">{Math.round(netArea).toLocaleString()}</p>
            <p className="text-sm text-gray-500">{squaresOfSiding.toFixed(1)} squares</p>
          </div>
        </div>

        {/* Siding Material */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">{siding.label}</p>
            <p className="text-xl font-bold text-brand-orange">{piecesOrBoxes.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{siding.unit}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Starter Strip</p>
            <p className="text-xl font-bold text-brand-blue">{Math.round(starterStripLF).toLocaleString()}</p>
            <p className="text-sm text-gray-500">linear ft ({Math.ceil(starterStripLF / 12)} pieces @ 12&apos;)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">J-Channel / Trim</p>
            <p className="text-xl font-bold text-brand-blue">{Math.round(jChannelLF).toLocaleString()}</p>
            <p className="text-sm text-gray-500">linear ft ({Math.ceil(jChannelLF / 12.5)} pieces @ 12.5&apos;)</p>
          </div>
        </div>

        {/* Accessories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Outside Corner Posts</p>
            <p className="text-xl font-bold text-brand-blue">{outsideCornerPosts}</p>
            <p className="text-sm text-gray-500">~{Math.round(avgWallHeight)} ft tall each</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Inside Corner Posts</p>
            <p className="text-xl font-bold text-brand-blue">{insideCornerPosts}</p>
            <p className="text-sm text-gray-500">~{Math.round(avgWallHeight)} ft tall each</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Nails / Fasteners</p>
            <p className="text-xl font-bold text-brand-blue">{totalNails.toLocaleString()}</p>
            <p className="text-sm text-gray-500">~{Math.ceil(totalNails / nailsPerPound)} lbs</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
