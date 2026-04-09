"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type FenceType = "wood-privacy" | "wood-picket" | "chain-link" | "vinyl";
type HeightOption = "4" | "5" | "6" | "8";
type BoardWidth = "3.5" | "5.5" | "6";

interface FenceConfig {
  label: string;
  defaultPostSpacing: number;
  costPerFtLow: number;
  costPerFtMid: number;
  costPerFtHigh: number;
  concreteBagsPerPost: number;
}

const fenceConfigs: Record<FenceType, FenceConfig> = {
  "wood-privacy": {
    label: "Wood Privacy",
    defaultPostSpacing: 8,
    costPerFtLow: 15,
    costPerFtMid: 25,
    costPerFtHigh: 45,
    concreteBagsPerPost: 2,
  },
  "wood-picket": {
    label: "Wood Picket",
    defaultPostSpacing: 8,
    costPerFtLow: 10,
    costPerFtMid: 18,
    costPerFtHigh: 30,
    concreteBagsPerPost: 1,
  },
  "chain-link": {
    label: "Chain Link",
    defaultPostSpacing: 10,
    costPerFtLow: 8,
    costPerFtMid: 15,
    costPerFtHigh: 25,
    concreteBagsPerPost: 1,
  },
  "vinyl": {
    label: "Vinyl",
    defaultPostSpacing: 8,
    costPerFtLow: 20,
    costPerFtMid: 35,
    costPerFtHigh: 55,
    concreteBagsPerPost: 2,
  },
};

const heightOptions: { value: HeightOption; label: string }[] = [
  { value: "4", label: '4 ft (48")' },
  { value: "5", label: '5 ft (60")' },
  { value: "6", label: '6 ft (72")' },
  { value: "8", label: '8 ft (96")' },
];

const boardWidthOptions: { value: BoardWidth; label: string; inches: number }[] = [
  { value: "3.5", label: '3.5" (1x4 actual)', inches: 3.5 },
  { value: "5.5", label: '5.5" (1x6 actual)', inches: 5.5 },
  { value: "6", label: '1x6 full (6")', inches: 6 },
];

export default function FenceCalculator() {
  const [fenceType, setFenceType] = useState<FenceType>("wood-privacy");
  const [linearFeet, setLinearFeet] = useState<number>(100);
  const [height, setHeight] = useState<HeightOption>("6");
  const [postSpacing, setPostSpacing] = useState<number>(8);
  const [gateCount, setGateCount] = useState<number>(1);
  const [gateWidth, setGateWidth] = useState<number>(4);
  const [boardWidth, setBoardWidth] = useState<BoardWidth>("5.5");
  const [picketGap, setPicketGap] = useState<number>(0);

  const config = fenceConfigs[fenceType];
  const isWood = fenceType === "wood-privacy" || fenceType === "wood-picket";
  const heightNum = Number(height);

  // When fence type changes, update post spacing to the default
  const handleFenceTypeChange = (type: FenceType) => {
    setFenceType(type);
    setPostSpacing(fenceConfigs[type].defaultPostSpacing);
    if (type === "wood-picket") {
      setPicketGap(1.5);
    } else {
      setPicketGap(0);
    }
  };

  // Calculations
  const totalGateWidth = gateCount * gateWidth;
  const fenceLinearFeet = Math.max(0, linearFeet - totalGateWidth);

  // Posts: one at each end plus one every postSpacing feet
  const fencePosts = Math.ceil(fenceLinearFeet / postSpacing) + 1;
  const gatePosts = gateCount * 2; // each gate needs 2 posts (may overlap with fence posts)
  const totalPosts = fencePosts + gatePosts;

  // Rails: 2 rails for 4-5 ft fence, 3 rails for 6-8 ft
  const railsPerSection = heightNum >= 6 ? 3 : 2;
  const sections = Math.ceil(fenceLinearFeet / postSpacing);
  const totalRails = sections * railsPerSection;

  // Pickets/boards (for wood fences)
  const boardWidthInches = boardWidthOptions.find((b) => b.value === boardWidth)?.inches ?? 5.5;
  const effectiveBoardWidth = boardWidthInches + picketGap;
  const fenceLinearInches = fenceLinearFeet * 12;
  const totalPickets = isWood ? Math.ceil(fenceLinearInches / effectiveBoardWidth) : 0;

  // Concrete bags
  const concreteBags = totalPosts * config.concreteBagsPerPost;

  // Post caps
  const postCaps = totalPosts;

  // Nails/screws: ~20 per picket (for wood), ~8 per rail connection
  const nailsForPickets = totalPickets * 8;
  const nailsForRails = totalRails * 2 * 4; // 2 ends per rail, 4 nails each
  const totalFasteners = isWood ? nailsForPickets + nailsForRails : 0;
  const fastenersLbs = Math.ceil(totalFasteners / 150); // ~150 nails per lb

  // Chain link fabric (sold in rolls of 50 ft)
  const chainLinkRolls = fenceType === "chain-link" ? Math.ceil(fenceLinearFeet / 50) : 0;

  // Vinyl panels (typically 6 or 8 ft sections)
  const vinylPanels = fenceType === "vinyl" ? sections : 0;

  // Cost estimates
  const costLow = linearFeet * config.costPerFtLow;
  const costMid = linearFeet * config.costPerFtMid;
  const costHigh = linearFeet * config.costPerFtHigh;

  return (
    <CalculatorLayout
      title="Fence Calculator"
      description="Estimate posts, rails, pickets, concrete, and total cost for wood privacy, wood picket, chain link, or vinyl fence projects."
      trade="Fencing"
      howToUse="Select your fence type and enter the total linear feet of fencing needed. Choose the fence height and adjust post spacing if needed (8 ft is standard for wood, 10 ft for chain link). Add any gates with their widths. For wood fences, select the board width and gap between pickets (0 for privacy, 1-2 inches for picket style). The calculator provides a complete material list and estimated cost range."
      formula="Posts = (Linear Feet / Post Spacing) + 1 + (Gates x 2). Rails = Sections x Rails per Section (2 for short, 3 for tall). Pickets = (Linear Feet x 12) / (Board Width + Gap). Concrete Bags = Posts x Bags per Post."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Fence Type */}
        <div>
          <label htmlFor="fenceType" className="block text-sm font-medium text-gray-700 mb-1">Fence Type</label>
          <select
            id="fenceType"
            value={fenceType}
            onChange={(e) => handleFenceTypeChange(e.target.value as FenceType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(fenceConfigs).map(([key, cfg]) => (
              <option key={key} value={key}>{cfg.label}</option>
            ))}
          </select>
        </div>

        {/* Linear Feet */}
        <div>
          <label htmlFor="linearFeet" className="block text-sm font-medium text-gray-700 mb-1">Total Linear Feet</label>
          <input
            id="linearFeet"
            type="number"
            min={1}
            max={10000}
            value={linearFeet}
            onChange={(e) => setLinearFeet(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Total length of fence line</p>
        </div>

        {/* Fence Height */}
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Fence Height</label>
          <select
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value as HeightOption)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {heightOptions.map((h) => (
              <option key={h.value} value={h.value}>{h.label}</option>
            ))}
          </select>
        </div>

        {/* Post Spacing */}
        <div>
          <label htmlFor="postSpacing" className="block text-sm font-medium text-gray-700 mb-1">Post Spacing (ft)</label>
          <input
            id="postSpacing"
            type="number"
            min={4}
            max={12}
            value={postSpacing}
            onChange={(e) => setPostSpacing(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Default: {config.defaultPostSpacing} ft for {config.label.toLowerCase()}</p>
        </div>

        {/* Gate Count */}
        <div>
          <label htmlFor="gateCount" className="block text-sm font-medium text-gray-700 mb-1">Number of Gates</label>
          <input
            id="gateCount"
            type="number"
            min={0}
            max={20}
            value={gateCount}
            onChange={(e) => setGateCount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        {/* Gate Width */}
        <div>
          <label htmlFor="gateWidth" className="block text-sm font-medium text-gray-700 mb-1">Gate Width (ft)</label>
          <input
            id="gateWidth"
            type="number"
            min={2}
            max={20}
            value={gateWidth}
            onChange={(e) => setGateWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">Typical: 3-4 ft walk gate, 10-16 ft drive gate</p>
        </div>

        {/* Board Width (wood only) */}
        {isWood && (
          <div>
            <label htmlFor="boardWidth" className="block text-sm font-medium text-gray-700 mb-1">Board/Picket Width</label>
            <select
              id="boardWidth"
              value={boardWidth}
              onChange={(e) => setBoardWidth(e.target.value as BoardWidth)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            >
              {boardWidthOptions.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Picket Gap (wood only) */}
        {isWood && (
          <div>
            <label htmlFor="picketGap" className="block text-sm font-medium text-gray-700 mb-1">Gap Between Pickets (inches)</label>
            <input
              id="picketGap"
              type="number"
              min={0}
              max={4}
              step={0.25}
              value={picketGap}
              onChange={(e) => setPicketGap(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">0 for privacy fence, 1.5-2&quot; for picket style</p>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Fence Posts</p>
            <p className="text-xl font-bold text-brand-blue">{totalPosts}</p>
            <p className="text-sm text-gray-500">{fencePosts} fence + {gatePosts} gate</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Post Holes</p>
            <p className="text-xl font-bold text-brand-blue">{totalPosts}</p>
            <p className="text-sm text-gray-500">Depth: {heightNum <= 5 ? "24" : "30-36"}&quot; recommended</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Rails</p>
            <p className="text-xl font-bold text-brand-orange">{totalRails}</p>
            <p className="text-sm text-gray-500">{railsPerSection} per section ({sections} sections)</p>
          </div>

          {isWood && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Pickets / Boards</p>
              <p className="text-xl font-bold text-brand-orange">{totalPickets}</p>
              <p className="text-sm text-gray-500">{boardWidthInches}&quot; wide, {height} ft tall</p>
            </div>
          )}

          {fenceType === "chain-link" && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Chain Link Fabric Rolls</p>
              <p className="text-xl font-bold text-brand-orange">{chainLinkRolls}</p>
              <p className="text-sm text-gray-500">50 ft rolls, {height} ft tall</p>
            </div>
          )}

          {fenceType === "vinyl" && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Vinyl Panels</p>
              <p className="text-xl font-bold text-brand-orange">{vinylPanels}</p>
              <p className="text-sm text-gray-500">{postSpacing} ft panels, {height} ft tall</p>
            </div>
          )}

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Concrete Bags</p>
            <p className="text-xl font-bold text-brand-blue">{concreteBags}</p>
            <p className="text-sm text-gray-500">{config.concreteBagsPerPost} bag{config.concreteBagsPerPost > 1 ? "s" : ""} per post (50 lb)</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Post Caps</p>
            <p className="text-xl font-bold text-brand-blue">{postCaps}</p>
            <p className="text-sm text-gray-500">1 per post</p>
          </div>

          {isWood && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Nails / Screws</p>
              <p className="text-xl font-bold text-brand-blue">{totalFasteners.toLocaleString()}</p>
              <p className="text-sm text-gray-500">~{fastenersLbs} lbs galvanized</p>
            </div>
          )}

          {gateCount > 0 && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Gate Hardware Sets</p>
              <p className="text-xl font-bold text-brand-blue">{gateCount}</p>
              <p className="text-sm text-gray-500">Hinges, latch, screws per gate</p>
            </div>
          )}
        </div>
      </div>

      {/* Cost Estimate */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Estimated Cost Range ({config.label})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Budget</p>
            <p className="text-xl font-bold text-brand-blue">${costLow.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${config.costPerFtLow}/ft installed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Mid-Range</p>
            <p className="text-xl font-bold text-brand-orange">${costMid.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${config.costPerFtMid}/ft installed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Premium</p>
            <p className="text-xl font-bold text-brand-blue">${costHigh.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${config.costPerFtHigh}/ft installed</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">Costs include materials and typical labor. Actual prices vary by region, material grade, and terrain difficulty.</p>
      </div>
    </CalculatorLayout>
  );
}
