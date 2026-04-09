"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const materialCosts: Record<string, { low: number; high: number; label: string }> = {
  "pressure-treated": { low: 15, high: 25, label: "Pressure-Treated Wood" },
  "cedar": { low: 25, high: 35, label: "Cedar" },
  "composite": { low: 30, high: 45, label: "Composite" },
  "trex": { low: 35, high: 50, label: "Trex" },
};

export default function DeckCalculator() {
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(12);
  const [material, setMaterial] = useState<string>("pressure-treated");
  const [boardSize, setBoardSize] = useState<string>("5/4x6");
  const [boardDirection, setBoardDirection] = useState<string>("perpendicular");
  const [joistSpacing, setJoistSpacing] = useState<number>(16);
  const [deckHeight, setDeckHeight] = useState<number>(3);
  const [hasRailing, setHasRailing] = useState<boolean>(true);

  // Board actual widths
  const boardActualWidth = 5.5; // both 5/4x6 and 2x6 are 5.5" actual
  const gapWidth = 0.125; // 1/8" gap
  const effectiveBoardWidth = (boardActualWidth + gapWidth) / 12; // in feet

  // Waste factor based on board direction
  const wasteFactor = boardDirection === "diagonal" ? 1.15 : 1.05;

  // Total deck area
  const deckArea = length * width;

  // Deck boards: boards run across the width (perpendicular to joists along length)
  const boardsNeeded = Math.ceil((width / effectiveBoardWidth) * wasteFactor);
  // Each board is the length of the deck (or width, depending on orientation)
  const boardLengthFt = boardDirection === "perpendicular" ? length : length;
  const totalDeckBoardLinearFt = Math.ceil(boardsNeeded * boardLengthFt);

  // Joists run along the length, spaced across the width
  const joistSpacingFt = joistSpacing / 12;
  const numberOfJoists = Math.ceil(width / joistSpacingFt) + 1;
  const joistLengthFt = length;

  // Joist hangers (one per joist end, 2 per joist for ledger/rim connection)
  const joistHangers = numberOfJoists * 2;

  // Beams: one beam every 8 ft along the length of the deck
  const numberOfBeams = Math.ceil(length / 8) + 1;

  // Posts/piers: posts every 8 ft along each beam
  const postsPerBeam = Math.ceil(width / 8) + 1;
  const numberOfPosts = numberOfBeams * postsPerBeam;

  // Concrete for piers: ~2 bags (60 lb) per pier for typical footing (12" diameter x depth)
  const concreteBagsPerPier = deckHeight <= 2 ? 1 : 2;
  const concreteBags = numberOfPosts * concreteBagsPerPier;

  // Deck screws: ~350 per 100 sq ft
  const deckScrews = Math.ceil((deckArea / 100) * 350);

  // Railing calculations
  const perimeterForRailing = hasRailing ? 2 * length + 2 * width - width : 0; // exclude house-side
  const railingLinearFt = hasRailing ? 2 * length + width : 0; // 3 sides (not house side)
  const railingPosts = hasRailing ? Math.ceil(railingLinearFt / 6) + 1 : 0;
  const railingRails = hasRailing ? Math.ceil(railingLinearFt) * 2 : 0; // top and bottom rails (linear ft)
  // Balusters every 4" (3.5" baluster + 0.5" gap = 4" on center per code)
  const balustersPerFt = 3; // 12" / 4" = 3 balusters per foot
  const totalBalusters = hasRailing ? Math.ceil(railingLinearFt * balustersPerFt) : 0;

  // Cost estimates
  const matCost = materialCosts[material];
  const costLow = deckArea * matCost.low;
  const costHigh = deckArea * matCost.high;
  const costMid = (costLow + costHigh) / 2;

  return (
    <CalculatorLayout
      title="Deck Calculator"
      description="Estimate decking boards, joists, beams, posts, fasteners, railing materials, and costs for your deck project based on dimensions, material, and design choices."
      trade="Carpentry"
      howToUse="Enter your deck dimensions (length and width in feet), select your decking material, board size, and layout direction. Choose joist spacing based on your material's span rating. Set the deck height for accurate post and pier calculations. Toggle railing on to get baluster, post, and rail estimates per building code. The calculator provides a complete material list and cost range."
      formula="Deck Area = Length x Width. Deck Boards = (Width / (Board Width + Gap)) x Waste Factor. Joists = (Width / Joist Spacing) + 1. Posts = (Beams) x (Posts per Beam). Beams = (Length / 8) + 1. Posts per Beam = (Width / 8) + 1. Screws = Area / 100 x 350. Balusters = Railing Linear Ft x 3 (4 in. on center)."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Deck Dimensions */}
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Deck Length (ft)</label>
          <input id="length" type="number" min={4} max={100} value={length} onChange={(e) => setLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Parallel to the house</p>
        </div>
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Deck Width (ft)</label>
          <input id="width" type="number" min={4} max={100} value={width} onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Projecting out from the house</p>
        </div>

        {/* Material */}
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">Decking Material</label>
          <select id="material" value={material} onChange={(e) => setMaterial(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.entries(materialCosts).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>

        {/* Board Size */}
        <div>
          <label htmlFor="boardSize" className="block text-sm font-medium text-gray-700 mb-1">Board Size</label>
          <select id="boardSize" value={boardSize} onChange={(e) => setBoardSize(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="5/4x6">5/4 x 6 (actual 1&quot; x 5.5&quot;)</option>
            <option value="2x6">2 x 6 (actual 1.5&quot; x 5.5&quot;)</option>
          </select>
        </div>

        {/* Board Direction */}
        <div>
          <label htmlFor="boardDirection" className="block text-sm font-medium text-gray-700 mb-1">Board Direction</label>
          <select id="boardDirection" value={boardDirection} onChange={(e) => setBoardDirection(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="perpendicular">Perpendicular to joists</option>
            <option value="diagonal">Diagonal (adds 15% waste)</option>
          </select>
        </div>

        {/* Joist Spacing */}
        <div>
          <label htmlFor="joistSpacing" className="block text-sm font-medium text-gray-700 mb-1">Joist Spacing (on center)</label>
          <select id="joistSpacing" value={joistSpacing} onChange={(e) => setJoistSpacing(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value={12}>12&quot; on center</option>
            <option value={16}>16&quot; on center</option>
            <option value={24}>24&quot; on center</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">16&quot; is standard; 12&quot; for composite/diagonal</p>
        </div>

        {/* Deck Height */}
        <div>
          <label htmlFor="deckHeight" className="block text-sm font-medium text-gray-700 mb-1">Deck Height (ft)</label>
          <input id="deckHeight" type="number" min={1} max={8} value={deckHeight} onChange={(e) => setDeckHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Height from ground to deck surface (1-8 ft)</p>
        </div>

        {/* Railing */}
        <div>
          <label htmlFor="hasRailing" className="block text-sm font-medium text-gray-700 mb-1">Railing</label>
          <select id="hasRailing" value={hasRailing ? "yes" : "no"} onChange={(e) => setHasRailing(e.target.value === "yes")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="yes">Yes - include railing</option>
            <option value="no">No railing</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">Required by code if deck is 30&quot;+ above grade</p>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Deck Material List</h2>

        {/* Decking Section */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Decking</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Total Deck Area</p>
            <p className="text-xl font-bold text-brand-blue">{deckArea.toLocaleString()} sq ft</p>
            <p className="text-sm text-gray-500">{length} ft x {width} ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Deck Boards Needed</p>
            <p className="text-xl font-bold text-brand-orange">{boardsNeeded}</p>
            <p className="text-sm text-gray-500">{boardSize} x {boardLengthFt} ft boards</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Total Board Linear Ft</p>
            <p className="text-xl font-bold text-brand-blue">{totalDeckBoardLinearFt.toLocaleString()} ft</p>
            <p className="text-sm text-gray-500">{boardDirection === "diagonal" ? "Includes 15% diagonal waste" : "Includes 5% waste"}</p>
          </div>
        </div>

        {/* Framing Section */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Framing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Joists</p>
            <p className="text-xl font-bold text-brand-blue">{numberOfJoists}</p>
            <p className="text-sm text-gray-500">{joistLengthFt} ft each, {joistSpacing}&quot; OC</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Joist Hangers</p>
            <p className="text-xl font-bold text-brand-blue">{joistHangers}</p>
            <p className="text-sm text-gray-500">2 per joist (each end)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Beams</p>
            <p className="text-xl font-bold text-brand-blue">{numberOfBeams}</p>
            <p className="text-sm text-gray-500">{width} ft span, every 8 ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Posts / Piers</p>
            <p className="text-xl font-bold text-brand-orange">{numberOfPosts}</p>
            <p className="text-sm text-gray-500">{numberOfBeams} beams x {postsPerBeam} posts</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Concrete (60 lb bags)</p>
            <p className="text-xl font-bold text-brand-blue">{concreteBags}</p>
            <p className="text-sm text-gray-500">{concreteBagsPerPier} bag{concreteBagsPerPier > 1 ? "s" : ""} per pier</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Deck Screws</p>
            <p className="text-xl font-bold text-brand-blue">{deckScrews.toLocaleString()}</p>
            <p className="text-sm text-gray-500">~{Math.ceil(deckScrews / 350)} lb boxes (~350/100 sq ft)</p>
          </div>
        </div>

        {/* Railing Section */}
        {hasRailing && (
          <>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Railing (3 sides)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Railing Linear Ft</p>
                <p className="text-xl font-bold text-brand-blue">{railingLinearFt} ft</p>
                <p className="text-sm text-gray-500">3 sides (excludes house side)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Railing Posts</p>
                <p className="text-xl font-bold text-brand-orange">{railingPosts}</p>
                <p className="text-sm text-gray-500">Every 6 ft on center</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Rails (linear ft)</p>
                <p className="text-xl font-bold text-brand-blue">{railingRails} ft</p>
                <p className="text-sm text-gray-500">Top and bottom rails</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Balusters</p>
                <p className="text-xl font-bold text-brand-orange">{totalBalusters}</p>
                <p className="text-sm text-gray-500">4&quot; on center per code</p>
              </div>
            </div>
          </>
        )}

        {/* Cost Estimate Section */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Estimated Cost ({matCost.label})</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Low Estimate</p>
            <p className="text-xl font-bold text-brand-blue">${costLow.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <p className="text-sm text-gray-500">${matCost.low}/sq ft installed</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Mid Estimate</p>
            <p className="text-xl font-bold text-brand-orange">${costMid.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <p className="text-sm text-gray-500">Materials + labor</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">High Estimate</p>
            <p className="text-xl font-bold text-brand-blue">${costHigh.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <p className="text-sm text-gray-500">${matCost.high}/sq ft installed</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
