"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const materialCosts: Record<string, { low: number; high: number; label: string }> = {
  "pressure-treated": { low: 15, high: 25, label: "Pressure-Treated Wood" },
  "cedar": { low: 25, high: 35, label: "Cedar" },
  "composite": { low: 30, high: 45, label: "Composite" },
  "trex": { low: 35, high: 50, label: "Trex" },
};

// Standard lumber lengths available at lumber yards
const standardLengths = [8, 10, 12, 14, 16, 20];

function bestLumberLength(neededFt: number): number {
  for (const l of standardLengths) {
    if (l >= neededFt) return l;
  }
  return standardLengths[standardLengths.length - 1];
}

export default function DeckCalculator() {
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(12);
  const [material, setMaterial] = useState<string>("pressure-treated");
  const [boardSize, setBoardSize] = useState<string>("5/4x6");
  const [boardDirection, setBoardDirection] = useState<string>("perpendicular");
  const [joistSpacing, setJoistSpacing] = useState<number>(16);
  const [deckHeight, setDeckHeight] = useState<number>(3);
  const [hasRailing, setHasRailing] = useState<boolean>(true);
  const [hasStairs, setHasStairs] = useState<boolean>(false);
  const [stairWidth, setStairWidth] = useState<number>(36);
  const [stairRiseTotal, setStairRiseTotal] = useState<number>(36);

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
  const boardLengthFt = length;
  const totalDeckBoardLinearFt = Math.ceil(boardsNeeded * boardLengthFt);

  // Joists run along the length, spaced across the width
  const joistSpacingFt = joistSpacing / 12;
  const numberOfJoists = Math.ceil(width / joistSpacingFt) + 1;
  const joistLengthFt = length;

  // Joist hangers (one per joist end, 2 per joist for ledger/rim connection)
  const joistHangers = numberOfJoists * 2;

  // Ledger board & flashing
  const ledgerLengthFt = length;
  const ledgerLagBolts = Math.ceil((length * 12) / 16); // 1 per 16" of ledger length
  const flashingLinearFt = length;

  // Rim / band joists
  const rimJoistLengthFt = length; // 2 rim joists along the length (ledger end + far end)
  const endCapLengthFt = width; // 2 end caps along the width

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
  const railingLinearFt = hasRailing ? 2 * length + width : 0; // 3 sides (not house side)
  const railingPosts = hasRailing ? Math.ceil(railingLinearFt / 6) + 1 : 0;
  const railingRails = hasRailing ? Math.ceil(railingLinearFt) * 2 : 0; // top and bottom rails (linear ft)
  const balustersPerFt = 3; // 12" / 4" = 3 balusters per foot
  const totalBalusters = hasRailing ? Math.ceil(railingLinearFt * balustersPerFt) : 0;

  // Stair calculations
  const risePerStep = 7.5; // inches, ideal rise
  const numberOfSteps = hasStairs ? Math.ceil(stairRiseTotal / risePerStep) : 0;
  const stairWidthFt = stairWidth / 12;
  // Stringers: 3 for up to 36", add 1 per additional 16"
  const numberOfStringers = hasStairs ? (stairWidth <= 36 ? 3 : 3 + Math.ceil((stairWidth - 36) / 16)) : 0;
  // Stringer boards: 2x12 PT, length depends on rise + run
  const runPerStep = 10; // inches
  const totalRun = numberOfSteps * runPerStep; // inches
  const stringerLengthFt = hasStairs ? Math.ceil(Math.sqrt(Math.pow(stairRiseTotal, 2) + Math.pow(totalRun, 2)) / 12) + 1 : 0;
  // Treads: 2 boards per tread for 5/4x6
  const treadsPerStep = 2;
  const totalTreadBoards = hasStairs ? numberOfSteps * treadsPerStep : 0;
  // Stair hardware
  const stringerBrackets = hasStairs ? numberOfStringers : 0;
  const riserAngles = hasStairs ? numberOfSteps * numberOfStringers : 0;

  // Beam-to-post connections: 2 carriage bolts per connection
  const beamPostConnections = numberOfPosts;
  const carriageBolts = beamPostConnections * 2;

  // Post bases: 1 per post
  const postBases = numberOfPosts;

  // Structural screws/nails estimate: ~10 per joist + 8 per post + 6 per railing post
  const structuralScrews = (numberOfJoists * 10) + (numberOfPosts * 8) + (railingPosts * 6);

  // Cost estimates
  const matCost = materialCosts[material];
  const costLow = deckArea * matCost.low;
  const costHigh = deckArea * matCost.high;
  const costMid = (costLow + costHigh) / 2;

  // --- Lumber Shopping List ---
  const joistSize = joistSpacing <= 16 ? "2x10" : "2x8";
  const joistBoardLength = bestLumberLength(joistLengthFt);
  const ledgerSize = "2x10";
  const ledgerBoardLength = bestLumberLength(ledgerLengthFt);
  const rimJoistSize = "2x10";
  const rimBoardLength = bestLumberLength(rimJoistLengthFt);
  const endCapBoardLength = bestLumberLength(endCapLengthFt);
  const deckBoardLength = bestLumberLength(boardLengthFt);
  const beamSize = "2x10";
  const beamBoardLength = bestLumberLength(width);
  // Posts: 4x4 or 6x6 depending on height
  const postSize = deckHeight > 4 ? "6x6" : "4x4";
  const postLength = Math.ceil(deckHeight) + 2; // extra 2 ft for below-grade + above-beam
  const postBoardLength = bestLumberLength(postLength);
  const stringerBoardLength = hasStairs ? bestLumberLength(stringerLengthFt) : 0;
  const treadBoardLength = hasStairs ? bestLumberLength(stairWidthFt) : 0;

  type LumberItem = { size: string; length: number; type: string; qty: number; use: string };
  const lumberList: LumberItem[] = [];

  // Deck boards
  lumberList.push({ size: boardSize, length: deckBoardLength, type: matCost.label, qty: boardsNeeded, use: "decking" });
  // Joists
  lumberList.push({ size: joistSize, length: joistBoardLength, type: "Pressure-Treated", qty: numberOfJoists, use: "joists" });
  // Ledger board
  lumberList.push({ size: ledgerSize, length: ledgerBoardLength, type: "Pressure-Treated", qty: 1, use: "ledger board" });
  // Rim joists (2 along length)
  lumberList.push({ size: rimJoistSize, length: rimBoardLength, type: "Pressure-Treated", qty: 2, use: "rim joists" });
  // End caps (2 along width)
  lumberList.push({ size: rimJoistSize, length: endCapBoardLength, type: "Pressure-Treated", qty: 2, use: "end caps" });
  // Beams (doubled 2x10 = 2 boards per beam)
  lumberList.push({ size: beamSize, length: beamBoardLength, type: "Pressure-Treated", qty: numberOfBeams * 2, use: "beams (doubled)" });
  // Posts
  lumberList.push({ size: postSize, length: postBoardLength, type: "Pressure-Treated", qty: numberOfPosts, use: "posts" });

  if (hasRailing) {
    const railPostLength = bestLumberLength(4); // ~42" rail height + below deck
    lumberList.push({ size: "4x4", length: railPostLength, type: "Pressure-Treated", qty: railingPosts, use: "railing posts" });
    const railBoardLength = bestLumberLength(8); // rail sections between posts
    const railSections = Math.ceil(railingLinearFt / 8);
    lumberList.push({ size: "2x4", length: railBoardLength, type: matCost.label, qty: railSections * 2, use: "top/bottom rails" });
    lumberList.push({ size: "2x2", length: bestLumberLength(3.5), type: matCost.label, qty: totalBalusters, use: "balusters" });
  }

  if (hasStairs && numberOfSteps > 0) {
    lumberList.push({ size: "2x12", length: stringerBoardLength, type: "Pressure-Treated", qty: numberOfStringers, use: "stair stringers" });
    lumberList.push({ size: boardSize, length: treadBoardLength, type: matCost.label, qty: totalTreadBoards, use: "stair treads" });
  }

  // Filter out zero-qty items
  const filteredLumber = lumberList.filter(item => item.qty > 0);

  type HardwareItem = { item: string; qty: number; spec: string };
  const hardwareList: HardwareItem[] = [
    { item: "Joist hangers", qty: joistHangers, spec: `For ${joistSize} joists` },
    { item: "Post bases (Simpson PBS)", qty: postBases, spec: `For ${postSize} posts` },
    { item: "Ledger lag bolts", qty: ledgerLagBolts, spec: '1/2" x 4" lag bolts' },
    { item: "Carriage bolts (beam-to-post)", qty: carriageBolts, spec: '1/2" x 6" with nuts/washers' },
    { item: "Deck screws", qty: deckScrews, spec: `~${Math.ceil(deckScrews / 350)} lb boxes` },
    { item: "Structural screws/nails", qty: structuralScrews, spec: '3" and 3-1/2" structural' },
    { item: "Flashing", qty: flashingLinearFt, spec: `${flashingLinearFt} linear ft galvanized` },
    { item: "Concrete (60 lb bags)", qty: concreteBags, spec: `${concreteBagsPerPier} bag${concreteBagsPerPier > 1 ? "s" : ""} per pier` },
  ];

  if (hasStairs && numberOfSteps > 0) {
    hardwareList.push({ item: "Stringer brackets", qty: stringerBrackets, spec: "Adjustable stringer connector" });
    hardwareList.push({ item: "Riser angles", qty: riserAngles, spec: "For tread-to-stringer connection" });
  }

  return (
    <CalculatorLayout
      title="Deck Calculator"
      description="Estimate decking boards, joists, beams, posts, fasteners, railing materials, and costs for your deck project based on dimensions, material, and design choices."
      trade="Carpentry"
      howToUse="Enter your deck dimensions (length and width in feet), select your decking material, board size, and layout direction. Choose joist spacing based on your material's span rating. Set the deck height for accurate post and pier calculations. Toggle railing on to get baluster, post, and rail estimates per building code. Enable stairs if your deck needs steps to grade. The calculator provides a complete material list, hardware summary, and lumber shopping list."
      formula="Deck Area = Length x Width. Deck Boards = (Width / (Board Width + Gap)) x Waste Factor. Joists = (Width / Joist Spacing) + 1. Posts = (Beams) x (Posts per Beam). Beams = (Length / 8) + 1. Posts per Beam = (Width / 8) + 1. Screws = Area / 100 x 350. Balusters = Railing Linear Ft x 3 (4 in. on center). Stair Stringers = 3 for 36 in. width + 1 per additional 16 in."
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

        {/* Stairs Toggle */}
        <div>
          <label htmlFor="hasStairs" className="block text-sm font-medium text-gray-700 mb-1">Stairs to Grade</label>
          <select id="hasStairs" value={hasStairs ? "yes" : "no"} onChange={(e) => setHasStairs(e.target.value === "yes")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="no">No stairs</option>
            <option value="yes">Yes - include stairs</option>
          </select>
        </div>

        {/* Stair Inputs (conditional) */}
        {hasStairs && (
          <>
            <div>
              <label htmlFor="stairWidth" className="block text-sm font-medium text-gray-700 mb-1">Stair Width (inches)</label>
              <input id="stairWidth" type="number" min={24} max={96} value={stairWidth} onChange={(e) => setStairWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <p className="text-xs text-gray-500 mt-1">36&quot; is standard minimum</p>
            </div>
            <div>
              <label htmlFor="stairRiseTotal" className="block text-sm font-medium text-gray-700 mb-1">Total Rise (inches)</label>
              <input id="stairRiseTotal" type="number" min={6} max={120} value={stairRiseTotal} onChange={(e) => setStairRiseTotal(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
              <p className="text-xs text-gray-500 mt-1">Total height from ground to deck surface in inches</p>
            </div>
          </>
        )}
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-blue">Deck Material List</h2>
          <button onClick={() => window.print()} className="print:hidden text-sm text-brand-orange hover:underline flex items-center gap-1">
            <span>&#128424;</span> Print Material List
          </button>
        </div>

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
            <p className="text-sm text-gray-500">{joistSize} x {joistLengthFt} ft each, {joistSpacing}&quot; OC</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Ledger Board</p>
            <p className="text-xl font-bold text-brand-blue">1</p>
            <p className="text-sm text-gray-500">{ledgerSize} x {ledgerLengthFt} ft, pressure treated</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Rim Joists</p>
            <p className="text-xl font-bold text-brand-blue">2</p>
            <p className="text-sm text-gray-500">{rimJoistSize} x {rimJoistLengthFt} ft each</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">End Caps</p>
            <p className="text-xl font-bold text-brand-blue">2</p>
            <p className="text-sm text-gray-500">{rimJoistSize} x {endCapLengthFt} ft each</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Beams</p>
            <p className="text-xl font-bold text-brand-blue">{numberOfBeams}</p>
            <p className="text-sm text-gray-500">Doubled {beamSize}, {width} ft span</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Posts / Piers</p>
            <p className="text-xl font-bold text-brand-orange">{numberOfPosts}</p>
            <p className="text-sm text-gray-500">{postSize} x {postBoardLength} ft, {numberOfBeams} beams x {postsPerBeam} posts</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Concrete (60 lb bags)</p>
            <p className="text-xl font-bold text-brand-blue">{concreteBags}</p>
            <p className="text-sm text-gray-500">{concreteBagsPerPier} bag{concreteBagsPerPier > 1 ? "s" : ""} per pier</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Flashing</p>
            <p className="text-xl font-bold text-brand-blue">{flashingLinearFt} ft</p>
            <p className="text-sm text-gray-500">Galvanized or aluminum, at ledger</p>
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

        {/* Stairs Section */}
        {hasStairs && numberOfSteps > 0 && (
          <>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Stairs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Number of Steps</p>
                <p className="text-xl font-bold text-brand-blue">{numberOfSteps}</p>
                <p className="text-sm text-gray-500">{(stairRiseTotal / numberOfSteps).toFixed(2)}&quot; rise per step</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Stringers</p>
                <p className="text-xl font-bold text-brand-orange">{numberOfStringers}</p>
                <p className="text-sm text-gray-500">2x12 x {stringerBoardLength} ft PT</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Tread Boards</p>
                <p className="text-xl font-bold text-brand-blue">{totalTreadBoards}</p>
                <p className="text-sm text-gray-500">{treadsPerStep} boards per tread, {boardSize}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Total Run</p>
                <p className="text-xl font-bold text-brand-blue">{(totalRun / 12).toFixed(1)} ft</p>
                <p className="text-sm text-gray-500">{runPerStep}&quot; run per step x {numberOfSteps} steps</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Stair Hardware</p>
                <p className="text-xl font-bold text-brand-blue">{stringerBrackets + riserAngles} pcs</p>
                <p className="text-sm text-gray-500">{stringerBrackets} stringer brackets + {riserAngles} riser angles</p>
              </div>
            </div>
          </>
        )}

        {/* Hardware Summary */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Hardware Shopping List</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Item</th>
                <th className="text-right px-4 py-2 font-semibold text-gray-700">Qty</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Spec</th>
              </tr>
            </thead>
            <tbody>
              {hardwareList.map((hw, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2 text-gray-800">{hw.item}</td>
                  <td className="px-4 py-2 text-right font-semibold text-brand-blue">{hw.qty.toLocaleString()}</td>
                  <td className="px-4 py-2 text-gray-500">{hw.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Lumber Shopping List */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Lumber Shopping List</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Lumber</th>
                <th className="text-right px-4 py-2 font-semibold text-gray-700">Qty</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Use</th>
              </tr>
            </thead>
            <tbody>
              {filteredLumber.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2 text-gray-800">{item.size} x {item.length}&apos; {item.type}</td>
                  <td className="px-4 py-2 text-right font-semibold text-brand-blue">{item.qty} pcs</td>
                  <td className="px-4 py-2 text-gray-500">{item.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cost Estimate Section */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Estimated Cost ({matCost.label})</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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

        {/* Code Compliance Notes */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Code Compliance Notes</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-brand-orange font-bold mt-0.5">*</span>
              <span>Railing required if deck is 30&quot;+ above grade (IRC R507.1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-orange font-bold mt-0.5">*</span>
              <span>Balusters must be spaced so a 4&quot; sphere cannot pass through (IRC R507.8.3)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-orange font-bold mt-0.5">*</span>
              <span>Ledger must be lag-bolted to rim joist, not nailed (IRC R507.2.1)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-orange font-bold mt-0.5">*</span>
              <span>Footings must extend below frost line (check local code)</span>
            </li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
