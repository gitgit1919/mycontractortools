"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const TILE_SIZES: { label: string; widthIn: number; heightIn: number }[] = [
  { label: '6" × 6"', widthIn: 6, heightIn: 6 },
  { label: '12" × 12"', widthIn: 12, heightIn: 12 },
  { label: '13" × 13"', widthIn: 13, heightIn: 13 },
  { label: '18" × 18"', widthIn: 18, heightIn: 18 },
  { label: '24" × 24"', widthIn: 24, heightIn: 24 },
  { label: '6" × 24" Plank', widthIn: 6, heightIn: 24 },
  { label: '12" × 24"', widthIn: 12, heightIn: 24 },
];

const GROUT_WIDTHS: { label: string; inches: number }[] = [
  { label: '1/16"', inches: 0.0625 },
  { label: '1/8"', inches: 0.125 },
  { label: '3/16"', inches: 0.1875 },
  { label: '1/4"', inches: 0.25 },
];

const PATTERNS: { label: string; wasteAdd: number }[] = [
  { label: "Straight Lay", wasteAdd: 0 },
  { label: "Diagonal (45°)", wasteAdd: 15 },
  { label: "Herringbone", wasteAdd: 20 },
];

export default function TileFlooringCalculator() {
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(10);
  const [rooms, setRooms] = useState<number>(1);
  const [tileSizeIdx, setTileSizeIdx] = useState<number>(1); // default 12x12
  const [groutIdx, setGroutIdx] = useState<number>(1); // default 1/8"
  const [patternIdx, setPatternIdx] = useState<number>(0); // default straight
  const [wasteFactor, setWasteFactor] = useState<number>(10);
  const [tilesPerBox, setTilesPerBox] = useState<number>(10);
  const [pricePerSqFt, setPricePerSqFt] = useState<number>(4.5);

  // Auto-adjust waste factor when pattern changes
  const pattern = PATTERNS[patternIdx];
  const effectiveWaste = wasteFactor + pattern.wasteAdd;

  const tile = TILE_SIZES[tileSizeIdx];
  const grout = GROUT_WIDTHS[groutIdx];

  // --- Calculations ---
  const floorArea = length * width * rooms;

  // Tile area in sq ft (single tile)
  const tileAreaSqFt = (tile.widthIn * tile.heightIn) / 144;

  // Tiles needed (with waste)
  const tilesNeeded = Math.ceil(floorArea * (1 + effectiveWaste / 100) / tileAreaSqFt);

  // Boxes needed
  const boxesNeeded = Math.ceil(tilesNeeded / Math.max(tilesPerBox, 1));

  // Grout calculation — lbs based on tile size, joint width, and depth (3/8" standard depth)
  // Formula: grout volume per sq ft depends on joint width, tile perimeter, and grout depth
  // Linear feet of grout per sq ft = (12/W + 12/H) where W,H are tile dims in inches
  // Cross-section area of grout = jointWidth * depth (3/8")
  // Volume per sq ft in cubic inches = linearFeetOfGrout * 12 * jointWidth * 0.375
  // Grout density ~100 lbs per cu ft → lbs = cubicInches / 1728 * 100
  const groutDepth = 0.375; // 3/8 inch standard
  const linearInchesPerSqFt = (12 / tile.widthIn + 12 / tile.heightIn) * 12;
  const groutVolCuIn = linearInchesPerSqFt * grout.inches * groutDepth;
  const groutLbsPerSqFt = (groutVolCuIn / 1728) * 100;
  const groutLbs = Math.ceil(floorArea * (1 + effectiveWaste / 100) * groutLbsPerSqFt);

  // Thinset mortar — ~50 lbs per 100 sq ft (1/4" x 1/4" square notch trowel)
  const thinsetLbs = Math.ceil(floorArea * (1 + effectiveWaste / 100) * 0.5);

  // Spacer bags — roughly 1 bag of 200 spacers per 100 sq ft
  const spacerBags = Math.ceil(floorArea / 100);

  // Cost
  const totalCost = floorArea * (1 + effectiveWaste / 100) * pricePerSqFt;

  return (
    <CalculatorLayout
      title="Tile & Flooring Calculator"
      description="Calculate the exact number of tiles, boxes, grout, thinset mortar, and spacers needed for your flooring project. Supports multiple tile sizes, grout widths, and layout patterns."
      trade="Flooring"
      howToUse="Enter your room dimensions (length and width in feet) and use the quantity multiplier if you have multiple rooms of the same size. Select your tile size, grout joint width, and layout pattern. The calculator automatically adjusts waste for diagonal and herringbone patterns. Enter the tiles per box from your product packaging and the price per square foot to get an accurate material and cost estimate."
      formula="Floor Area = Length × Width × Rooms. Tiles Needed = Floor Area × (1 + Waste%) / Tile Area. Grout (lbs) is based on joint width, tile perimeter, and 3/8&quot; depth. Thinset = ~50 lbs per 100 sq ft."
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
          <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">Number of Rooms / Areas</label>
          <input id="rooms" type="number" min={1} max={20} value={rooms} onChange={(e) => setRooms(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="tileSize" className="block text-sm font-medium text-gray-700 mb-1">Tile Size</label>
          <select id="tileSize" value={tileSizeIdx} onChange={(e) => setTileSizeIdx(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {TILE_SIZES.map((t, i) => (
              <option key={i} value={i}>{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="groutWidth" className="block text-sm font-medium text-gray-700 mb-1">Grout Joint Width</label>
          <select id="groutWidth" value={groutIdx} onChange={(e) => setGroutIdx(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {GROUT_WIDTHS.map((g, i) => (
              <option key={i} value={i}>{g.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pattern" className="block text-sm font-medium text-gray-700 mb-1">Layout Pattern</label>
          <select id="pattern" value={patternIdx} onChange={(e) => setPatternIdx(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {PATTERNS.map((p, i) => (
              <option key={i} value={i}>{p.label}{p.wasteAdd > 0 ? ` (+${p.wasteAdd}% waste)` : ""}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Base Waste Factor (%)</label>
          <input id="waste" type="number" min={5} max={30} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          {pattern.wasteAdd > 0 && (
            <p className="text-xs text-gray-500 mt-1">+{pattern.wasteAdd}% for {pattern.label} = {effectiveWaste}% total</p>
          )}
        </div>
        <div>
          <label htmlFor="tilesPerBox" className="block text-sm font-medium text-gray-700 mb-1">Tiles Per Box</label>
          <input id="tilesPerBox" type="number" min={1} max={100} value={tilesPerBox} onChange={(e) => setTilesPerBox(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="pricePerSqFt" className="block text-sm font-medium text-gray-700 mb-1">Price Per Sq Ft ($)</label>
          <input id="pricePerSqFt" type="number" min={0} step={0.25} value={pricePerSqFt} onChange={(e) => setPricePerSqFt(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Floor Area</p>
            <p className="text-2xl font-bold text-brand-blue">{floorArea.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Tiles Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{tilesNeeded.toLocaleString()}</p>
            <p className="text-sm text-gray-500">incl. {effectiveWaste}% waste</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Boxes Needed</p>
            <p className="text-2xl font-bold text-brand-blue">{boxesNeeded}</p>
            <p className="text-sm text-gray-500">{tilesPerBox} tiles/box</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Grout</p>
            <p className="text-2xl font-bold text-brand-blue">{groutLbs}</p>
            <p className="text-sm text-gray-500">lbs</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Thinset Mortar</p>
            <p className="text-2xl font-bold text-brand-blue">{thinsetLbs}</p>
            <p className="text-sm text-gray-500">lbs (~50 lbs / 100 sq ft)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Spacer Bags</p>
            <p className="text-2xl font-bold text-brand-blue">{spacerBags}</p>
            <p className="text-sm text-gray-500">bags (200 ct)</p>
          </div>
        </div>
        <div className="mt-4 bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
          <p className="text-sm text-gray-600">Estimated Material Cost</p>
          <p className="text-3xl font-bold text-brand-orange">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className="text-sm text-gray-500">at ${pricePerSqFt.toFixed(2)} / sq ft (incl. waste)</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
