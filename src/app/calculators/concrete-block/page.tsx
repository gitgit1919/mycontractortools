"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type BlockSize = "8x8x16" | "8x4x16" | "12x8x16" | "6x8x16";
type FillOption = "hollow" | "solid" | "partial";

const BLOCK_DATA: Record<BlockSize, { label: string; heightIn: number; widthIn: number; cellsPerBlock: number }> = {
  "8x8x16": { label: "8\" x 8\" x 16\" (Standard)", heightIn: 8, widthIn: 16, cellsPerBlock: 2 },
  "8x4x16": { label: "8\" x 4\" x 16\" (Half-High)", heightIn: 4, widthIn: 16, cellsPerBlock: 2 },
  "12x8x16": { label: "12\" x 8\" x 16\"", heightIn: 8, widthIn: 16, cellsPerBlock: 2 },
  "6x8x16": { label: "6\" x 8\" x 16\"", heightIn: 8, widthIn: 16, cellsPerBlock: 2 },
};

export default function ConcreteBlockCalculator() {
  const [wallLength, setWallLength] = useState<number>(40);
  const [wallHeight, setWallHeight] = useState<number>(8);
  const [numWalls, setNumWalls] = useState<number>(1);
  const [blockSize, setBlockSize] = useState<BlockSize>("8x8x16");
  const [mortarJoint, setMortarJoint] = useState<number>(0.375);
  const [doorCount, setDoorCount] = useState<number>(1);
  const [doorWidth, setDoorWidth] = useState<number>(3);
  const [doorHeight, setDoorHeight] = useState<number>(7);
  const [windowCount, setWindowCount] = useState<number>(2);
  const [windowWidth, setWindowWidth] = useState<number>(3);
  const [windowHeight, setWindowHeight] = useState<number>(4);
  const [customOpeningSqFt, setCustomOpeningSqFt] = useState<number>(0);
  const [bondBeamCourses, setBondBeamCourses] = useState<number>(2);
  const [fillOption, setFillOption] = useState<FillOption>("hollow");
  const [verticalRebarSpacing, setVerticalRebarSpacing] = useState<number>(48);
  const [wasteFactor, setWasteFactor] = useState<number>(10);
  const [includeWallTies, setIncludeWallTies] = useState<boolean>(false);
  const [includeCapBlocks, setIncludeCapBlocks] = useState<boolean>(true);

  // --- Calculations ---
  const totalWallArea = wallLength * wallHeight * numWalls;
  const doorOpenings = doorCount * doorWidth * doorHeight;
  const windowOpenings = windowCount * windowWidth * windowHeight;
  const totalOpenings = doorOpenings + windowOpenings + customOpeningSqFt;
  const netArea = Math.max(totalWallArea - totalOpenings, 0);

  // Block factor: blocks per sq ft based on block face area + mortar joint
  const block = BLOCK_DATA[blockSize];
  const faceHeight = (block.heightIn + mortarJoint * 2 * (block.heightIn / 8)) / 12; // convert to ft approx
  const faceWidth = (block.widthIn + mortarJoint * 2) / 12;
  // Standard: (8 + 0.375) x (16 + 0.375) = 8.375" x 16.375" nominal face
  // blocks per sq ft = 144 / (8.375 * 16.375) for standard = ~1.125
  const nominalHeightIn = block.heightIn + mortarJoint;
  const nominalWidthIn = block.widthIn + mortarJoint;
  const blocksPerSqFt = 144 / (nominalHeightIn * nominalWidthIn);

  const blocksBeforeWaste = Math.ceil(netArea * blocksPerSqFt);
  const blocksNeeded = Math.ceil(blocksBeforeWaste * (1 + wasteFactor / 100));

  // Mortar: ~8.5 bags (80lb) per 100 blocks for 3/8" joint
  const mortarBags = Math.ceil(blocksNeeded * 8.5 / 100);

  // Sand for mortar: ~1 ton per 33 bags of mortar, or roughly 200 lbs per bag
  // Standard: 1 cubic yard sand per ~7 bags mortar mix (Type S premix)
  // Simpler: ~17 shovels (about 200 lbs / 2.5 cf) per bag -> approx 0.56 cf sand per bag
  // Industry rule: ~1 ton sand per 7 bags masonry cement when site-mixing
  const sandTons = (mortarBags / 7).toFixed(1);

  // Rebar - Vertical: #4 bar at specified OC spacing
  const totalLinearFt = wallLength * numWalls;
  const verticalBars = Math.ceil(totalLinearFt / (verticalRebarSpacing / 12)) + numWalls;
  const verticalRebarLf = verticalBars * wallHeight;

  // Rebar - Horizontal: bond beam courses run full length
  const horizontalRebarLf = bondBeamCourses * totalLinearFt;

  const totalRebarLf = verticalRebarLf + horizontalRebarLf;
  // #4 rebar comes in 20ft lengths
  const rebarSticks = Math.ceil(totalRebarLf / 20);

  // Grout: each 8" cell ~ 0.035 cf when filled
  // 12" cell ~ 0.052 cf, 6" cell ~ 0.025 cf
  const cellVolume = blockSize === "12x8x16" ? 0.052 : blockSize === "6x8x16" ? 0.025 : 0.035;
  const totalCells = blocksBeforeWaste * block.cellsPerBlock;

  let groutedCells = 0;
  if (fillOption === "solid") {
    groutedCells = totalCells;
  } else if (fillOption === "partial") {
    // Partially grouted: vertical rebar cells + bond beam cells
    const verticalCells = verticalBars * Math.ceil(wallHeight / ((block.heightIn + mortarJoint) / 12));
    const bondBeamCells = bondBeamCourses * Math.ceil(totalLinearFt / (block.widthIn / 12));
    groutedCells = verticalCells + bondBeamCells;
  }

  const groutCf = groutedCells * cellVolume;
  const groutCy = groutCf / 27;
  // 80lb bags of grout fill ~ 0.5 cf each
  const groutBags = Math.ceil(groutCf / 0.5);

  // Bond beam / lintel blocks: one per block in bond beam courses
  const bondBeamBlocks = bondBeamCourses * Math.ceil(totalLinearFt / ((block.widthIn + mortarJoint) / 12));

  // Cap blocks (solid top cap, 2" x 8" x 16" or similar): one per linear ft of wall top
  const capBlocks = includeCapBlocks ? Math.ceil(totalLinearFt / (block.widthIn / 12)) : 0;

  // Wall ties for veneer: 1 per 2.67 sq ft (one every 16" horiz x 24" vert)
  const wallTies = includeWallTies ? Math.ceil(netArea / 2.67) : 0;

  return (
    <CalculatorLayout
      title="Concrete Block (CMU) Calculator"
      description="Calculate CMU blocks, mortar, rebar, grout, and accessories for masonry wall construction. Supports standard, half-high, 12-inch, and 6-inch block sizes with openings, bond beams, and fill options."
      trade="Masonry"
      howToUse="Enter your wall dimensions and the number of walls. Select the block size and mortar joint thickness. Subtract openings for doors and windows by entering counts and sizes, or enter custom square footage for irregular openings. Set bond beam courses (typically every 4 ft of wall height), choose your fill option (hollow, grouted solid, or partially grouted), and adjust rebar spacing. The calculator provides a complete materials list including blocks, mortar, rebar, grout, cap blocks, and wall ties."
      formula="Net Area = (Wall Length x Wall Height x Number of Walls) - Openings. Blocks = Net Area x 1.125 blocks/sq ft (for 8x8x16 with 3/8&quot; joint) x (1 + Waste%). Mortar = Blocks x 8.5 bags/100. Grout per cell = 0.035 cf (8&quot; block). Vertical Rebar = Wall Length / Spacing + 1 per wall. Horizontal Rebar = Bond Beam Courses x Wall Length."
    >
      {/* --- Wall Dimensions --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Wall Dimensions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="wallLength" className="block text-sm font-medium text-gray-700 mb-1">Wall Length (ft)</label>
          <input id="wallLength" type="number" min={1} step={0.5} value={wallLength} onChange={(e) => setWallLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="wallHeight" className="block text-sm font-medium text-gray-700 mb-1">Wall Height (ft)</label>
          <input id="wallHeight" type="number" min={1} max={40} step={0.5} value={wallHeight} onChange={(e) => setWallHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="numWalls" className="block text-sm font-medium text-gray-700 mb-1">Number of Walls</label>
          <input id="numWalls" type="number" min={1} max={50} value={numWalls} onChange={(e) => setNumWalls(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* --- Block & Mortar --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Block &amp; Mortar</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="blockSize" className="block text-sm font-medium text-gray-700 mb-1">Block Size</label>
          <select id="blockSize" value={blockSize} onChange={(e) => setBlockSize(e.target.value as BlockSize)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.entries(BLOCK_DATA).map(([key, data]) => (
              <option key={key} value={key}>{data.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mortarJoint" className="block text-sm font-medium text-gray-700 mb-1">Mortar Joint (inches)</label>
          <select id="mortarJoint" value={mortarJoint} onChange={(e) => setMortarJoint(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value={0.375}>3/8&quot; (Standard)</option>
            <option value={0.5}>1/2&quot;</option>
          </select>
        </div>
        <div>
          <label htmlFor="fillOption" className="block text-sm font-medium text-gray-700 mb-1">Fill Option</label>
          <select id="fillOption" value={fillOption} onChange={(e) => setFillOption(e.target.value as FillOption)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="hollow">Hollow (No Grout Fill)</option>
            <option value="solid">Grouted Solid</option>
            <option value="partial">Partially Grouted (Rebar Cells Only)</option>
          </select>
        </div>
        <div>
          <label htmlFor="wasteFactor" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="wasteFactor" type="number" min={5} max={25} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* --- Openings --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Openings to Subtract</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
        <div>
          <label htmlFor="doorCount" className="block text-sm font-medium text-gray-700 mb-1">Door Count</label>
          <input id="doorCount" type="number" min={0} max={50} value={doorCount} onChange={(e) => setDoorCount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="doorWidth" className="block text-sm font-medium text-gray-700 mb-1">Door Width (ft)</label>
          <input id="doorWidth" type="number" min={1} max={20} step={0.5} value={doorWidth} onChange={(e) => setDoorWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="doorHeight" className="block text-sm font-medium text-gray-700 mb-1">Door Height (ft)</label>
          <input id="doorHeight" type="number" min={1} max={20} step={0.5} value={doorHeight} onChange={(e) => setDoorHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
        <div>
          <label htmlFor="windowCount" className="block text-sm font-medium text-gray-700 mb-1">Window Count</label>
          <input id="windowCount" type="number" min={0} max={50} value={windowCount} onChange={(e) => setWindowCount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="windowWidth" className="block text-sm font-medium text-gray-700 mb-1">Window Width (ft)</label>
          <input id="windowWidth" type="number" min={1} max={20} step={0.5} value={windowWidth} onChange={(e) => setWindowWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="windowHeight" className="block text-sm font-medium text-gray-700 mb-1">Window Height (ft)</label>
          <input id="windowHeight" type="number" min={1} max={20} step={0.5} value={windowHeight} onChange={(e) => setWindowHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="customOpening" className="block text-sm font-medium text-gray-700 mb-1">Other Openings (sq ft)</label>
          <input id="customOpening" type="number" min={0} step={1} value={customOpeningSqFt} onChange={(e) => setCustomOpeningSqFt(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* --- Reinforcement --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Reinforcement</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="bondBeamCourses" className="block text-sm font-medium text-gray-700 mb-1">Bond Beam Courses</label>
          <input id="bondBeamCourses" type="number" min={0} max={20} value={bondBeamCourses} onChange={(e) => setBondBeamCourses(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Typically every 4 ft of wall height</p>
        </div>
        <div>
          <label htmlFor="verticalRebarSpacing" className="block text-sm font-medium text-gray-700 mb-1">Vertical Rebar Spacing (inches OC)</label>
          <select id="verticalRebarSpacing" value={verticalRebarSpacing} onChange={(e) => setVerticalRebarSpacing(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value={24}>24&quot; OC</option>
            <option value={32}>32&quot; OC</option>
            <option value={48}>48&quot; OC (Standard)</option>
            <option value={72}>72&quot; OC</option>
          </select>
        </div>
      </div>

      {/* --- Accessories --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Accessories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center gap-3">
          <input id="includeCapBlocks" type="checkbox" checked={includeCapBlocks} onChange={(e) => setIncludeCapBlocks(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
          <label htmlFor="includeCapBlocks" className="text-sm font-medium text-gray-700">Include Cap Blocks (top course)</label>
        </div>
        <div className="flex items-center gap-3">
          <input id="includeWallTies" type="checkbox" checked={includeWallTies} onChange={(e) => setIncludeWallTies(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
          <label htmlFor="includeWallTies" className="text-sm font-medium text-gray-700">Include Wall Ties (veneer applications)</label>
        </div>
      </div>

      {/* --- Results --- */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material Estimate</h2>

        {/* Area summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gross Wall Area</p>
            <p className="text-2xl font-bold text-brand-blue">{totalWallArea.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Openings Subtracted</p>
            <p className="text-2xl font-bold text-red-600">{totalOpenings.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Net Wall Area</p>
            <p className="text-2xl font-bold text-brand-blue">{netArea.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
        </div>

        {/* Primary materials */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Blocks &amp; Mortar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">CMU Blocks</p>
            <p className="text-2xl font-bold text-brand-orange">{blocksNeeded.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{blockSize} (incl. {wasteFactor}% waste)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Mortar</p>
            <p className="text-2xl font-bold text-brand-blue">{mortarBags}</p>
            <p className="text-sm text-gray-500">80 lb bags</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sand for Mortar</p>
            <p className="text-2xl font-bold text-brand-blue">{sandTons}</p>
            <p className="text-sm text-gray-500">tons</p>
          </div>
          {fillOption !== "hollow" && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Grout</p>
              <p className="text-2xl font-bold text-brand-blue">{groutBags}</p>
              <p className="text-sm text-gray-500">80 lb bags ({groutCy.toFixed(2)} cy)</p>
            </div>
          )}
        </div>

        {/* Reinforcement */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Reinforcement (#4 Rebar)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Vertical Bars</p>
            <p className="text-2xl font-bold text-brand-blue">{verticalBars}</p>
            <p className="text-sm text-gray-500">#4 @ {verticalRebarSpacing}&quot; OC</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Horizontal Rebar</p>
            <p className="text-2xl font-bold text-brand-blue">{horizontalRebarLf.toLocaleString()}</p>
            <p className="text-sm text-gray-500">linear ft ({bondBeamCourses} courses)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Rebar</p>
            <p className="text-2xl font-bold text-brand-orange">{totalRebarLf.toLocaleString()}</p>
            <p className="text-sm text-gray-500">linear ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">20 ft Rebar Sticks</p>
            <p className="text-2xl font-bold text-brand-blue">{rebarSticks}</p>
            <p className="text-sm text-gray-500">#4 bars</p>
          </div>
        </div>

        {/* Accessories */}
        {(bondBeamBlocks > 0 || capBlocks > 0 || wallTies > 0) && (
          <>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Accessories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bondBeamBlocks > 0 && (
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-sm text-gray-600">Bond Beam Blocks</p>
                  <p className="text-2xl font-bold text-brand-blue">{bondBeamBlocks}</p>
                  <p className="text-sm text-gray-500">knock-out / lintel blocks</p>
                </div>
              )}
              {capBlocks > 0 && (
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-sm text-gray-600">Cap Blocks</p>
                  <p className="text-2xl font-bold text-brand-blue">{capBlocks}</p>
                  <p className="text-sm text-gray-500">solid top cap</p>
                </div>
              )}
              {wallTies > 0 && (
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                  <p className="text-sm text-gray-600">Wall Ties</p>
                  <p className="text-2xl font-bold text-brand-blue">{wallTies}</p>
                  <p className="text-sm text-gray-500">corrugated or adjustable</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}
