"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type BlockType = "standard" | "large" | "allanblock";

const BLOCK_DATA: Record<BlockType, { label: string; lengthIn: number; widthIn: number; heightIn: number; faceSqFt: number }> = {
  standard: { label: "Standard Retaining Wall Block (12\"L x 8\"W x 4\"H)", lengthIn: 12, widthIn: 8, heightIn: 4, faceSqFt: 0.33 },
  large: { label: "Large Retaining Wall Block (18\"L x 12\"W x 6\"H)", lengthIn: 18, widthIn: 12, heightIn: 6, faceSqFt: 0.75 },
  allanblock: { label: "Allan Block (12\"L x 8\"W x 4\"H)", lengthIn: 12, widthIn: 8, heightIn: 4, faceSqFt: 0.33 },
};

export default function RetainingWallCalculator() {
  const [wallLength, setWallLength] = useState<number>(20);
  const [wallHeight, setWallHeight] = useState<number>(3);
  const [blockType, setBlockType] = useState<BlockType>("standard");
  const [setbackPerCourse, setSetbackPerCourse] = useState<number>(0.75);
  const [includeCapBlocks, setIncludeCapBlocks] = useState<boolean>(true);
  const [wasteFactor, setWasteFactor] = useState<number>(10);

  // --- Block data ---
  const block = BLOCK_DATA[blockType];
  const blockLengthFt = block.lengthIn / 12;
  const blockHeightFt = block.heightIn / 12;

  // --- Courses ---
  const numCourses = Math.ceil(wallHeight / blockHeightFt);

  // --- Blocks per course ---
  const blocksPerCourse = Math.ceil(wallLength / blockLengthFt);

  // --- Total blocks ---
  const totalBlocksBeforeWaste = numCourses * blocksPerCourse;
  const totalBlocks = Math.ceil(totalBlocksBeforeWaste * (1 + wasteFactor / 100));

  // --- Cap blocks: one per block length across the top ---
  const capBlocks = includeCapBlocks ? blocksPerCourse : 0;

  // --- Geogrid reinforcement: needed for walls over 3 ft, every other course starting at course 2 ---
  const needsGeogrid = wallHeight > 3;
  const geogridCourses = needsGeogrid ? Math.floor(numCourses / 2) : 0;
  // Geogrid extends behind wall: typically wall height * 0.6 or min 3 ft behind wall
  const geogridDepthFt = Math.max(wallHeight * 0.6, 3);
  const geogridLinearFt = geogridCourses * wallLength;

  // --- Base material: compacted gravel trench 6" deep x 24" wide ---
  const baseTrenchDepthFt = 6 / 12; // 0.5 ft
  const baseTrenchWidthFt = 24 / 12; // 2 ft
  const baseGravelCuFt = wallLength * baseTrenchDepthFt * baseTrenchWidthFt;
  const baseGravelCuYd = baseGravelCuFt / 27;

  // --- Drainage gravel behind wall: 12" wide zone x wall height x wall length ---
  const drainageGravelWidthFt = 1; // 12 inches behind wall
  const drainageGravelCuFt = wallLength * wallHeight * drainageGravelWidthFt;
  const drainageGravelCuYd = drainageGravelCuFt / 27;

  // --- Total gravel ---
  const totalGravelCuYd = baseGravelCuYd + drainageGravelCuYd;

  // --- Drain pipe: perforated pipe runs the length of the wall ---
  const drainPipeLf = wallLength;

  // --- Filter fabric: covers drainage zone behind wall + base ---
  // Wraps gravel column: (wall height + base depth + 2 ft overlap) x wall length
  const filterFabricSqFt = Math.ceil((wallHeight + baseTrenchDepthFt + 2) * wallLength);

  // --- Construction adhesive: ~1 tube per 20-25 linear ft of block per course ---
  // Each course has wallLength linear ft of block. Adhesive between every course and for caps.
  const adhesiveCourses = (numCourses - 1) + (includeCapBlocks ? 1 : 0);
  const adhesiveTubes = Math.ceil((adhesiveCourses * wallLength) / 20);

  // --- Setback info ---
  const totalSetbackIn = setbackPerCourse * (numCourses - 1);

  return (
    <CalculatorLayout
      title="Retaining Wall Calculator"
      description="Calculate blocks, base gravel, drainage materials, geogrid reinforcement, and accessories for retaining wall construction. Supports standard, large, and Allan Block types with automatic geogrid calculations for walls over 3 feet."
      trade="Landscaping"
      howToUse="Enter the total wall length and desired wall height in feet. Select your block type — standard and Allan Block are 4 inches tall per course, while large blocks are 6 inches tall. Adjust the setback (batter) per course if different from the standard 3/4 inch. Toggle cap blocks on or off. The calculator automatically determines if geogrid reinforcement is needed (walls over 3 ft) and computes all base material, drainage, and accessory quantities."
      formula="Courses = Wall Height / Block Height. Blocks per Course = Wall Length / Block Length. Total Blocks = Courses x Blocks per Course x (1 + Waste%). Base Gravel (cu yd) = Length x 0.5 ft x 2 ft / 27. Drainage Gravel (cu yd) = Length x Height x 1 ft / 27. Geogrid Courses = Floor(Courses / 2) for walls > 3 ft. Adhesive Tubes = (Courses - 1) x Length / 20."
    >
      {/* --- Wall Dimensions --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Wall Dimensions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="wallLength" className="block text-sm font-medium text-gray-700 mb-1">Wall Length (ft)</label>
          <input id="wallLength" type="number" min={1} step={0.5} value={wallLength} onChange={(e) => setWallLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="wallHeight" className="block text-sm font-medium text-gray-700 mb-1">Wall Height (ft)</label>
          <input id="wallHeight" type="number" min={0.5} max={10} step={0.5} value={wallHeight} onChange={(e) => setWallHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Walls over 3 ft require geogrid reinforcement</p>
        </div>
      </div>

      {/* --- Block Type --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Block Type</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="blockType" className="block text-sm font-medium text-gray-700 mb-1">Block Type</label>
          <select id="blockType" value={blockType} onChange={(e) => setBlockType(e.target.value as BlockType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.entries(BLOCK_DATA).map(([key, data]) => (
              <option key={key} value={key}>{data.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="wasteFactor" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="wasteFactor" type="number" min={5} max={25} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* --- Wall Options --- */}
      <h3 className="text-lg font-semibold text-brand-blue mb-3">Wall Options</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="setbackPerCourse" className="block text-sm font-medium text-gray-700 mb-1">Setback per Course (inches)</label>
          <input id="setbackPerCourse" type="number" min={0} max={3} step={0.25} value={setbackPerCourse} onChange={(e) => setSetbackPerCourse(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Batter angle — 3/4&quot; is standard for most blocks</p>
        </div>
        <div className="flex items-center gap-3 pt-6">
          <input id="includeCapBlocks" type="checkbox" checked={includeCapBlocks} onChange={(e) => setIncludeCapBlocks(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
          <label htmlFor="includeCapBlocks" className="text-sm font-medium text-gray-700">Include Cap Blocks (top course)</label>
        </div>
      </div>

      {/* --- Results --- */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material Estimate</h2>

        {/* Wall summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Number of Courses</p>
            <p className="text-2xl font-bold text-brand-blue">{numCourses}</p>
            <p className="text-sm text-gray-500">rows of {block.heightIn}&quot; blocks</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Blocks per Course</p>
            <p className="text-2xl font-bold text-brand-blue">{blocksPerCourse}</p>
            <p className="text-sm text-gray-500">{block.lengthIn}&quot; blocks across {wallLength} ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Setback (Batter)</p>
            <p className="text-2xl font-bold text-brand-blue">{totalSetbackIn.toFixed(1)}&quot;</p>
            <p className="text-sm text-gray-500">{setbackPerCourse}&quot; x {numCourses - 1} courses</p>
          </div>
        </div>

        {/* Blocks */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Blocks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Wall Blocks</p>
            <p className="text-2xl font-bold text-brand-orange">{totalBlocks.toLocaleString()}</p>
            <p className="text-sm text-gray-500">incl. {wasteFactor}% waste</p>
          </div>
          {includeCapBlocks && (
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Cap Blocks</p>
              <p className="text-2xl font-bold text-brand-blue">{capBlocks}</p>
              <p className="text-sm text-gray-500">flat caps for top course</p>
            </div>
          )}
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Construction Adhesive</p>
            <p className="text-2xl font-bold text-brand-blue">{adhesiveTubes}</p>
            <p className="text-sm text-gray-500">tubes (28 oz)</p>
          </div>
        </div>

        {/* Base & Drainage */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Base &amp; Drainage Materials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Base Gravel</p>
            <p className="text-2xl font-bold text-brand-blue">{baseGravelCuYd.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards (6&quot; deep x 24&quot; wide trench)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Drainage Gravel</p>
            <p className="text-2xl font-bold text-brand-blue">{drainageGravelCuYd.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards (12&quot; behind wall)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Gravel</p>
            <p className="text-2xl font-bold text-brand-orange">{totalGravelCuYd.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards combined</p>
          </div>
        </div>

        {/* Drainage */}
        <h3 className="text-md font-semibold text-gray-700 mb-3">Drainage</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Perforated Drain Pipe</p>
            <p className="text-2xl font-bold text-brand-blue">{drainPipeLf}</p>
            <p className="text-sm text-gray-500">linear feet (4&quot; perf pipe)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Filter Fabric</p>
            <p className="text-2xl font-bold text-brand-blue">{filterFabricSqFt.toLocaleString()}</p>
            <p className="text-sm text-gray-500">sq ft (non-woven geotextile)</p>
          </div>
        </div>

        {/* Geogrid */}
        {needsGeogrid && (
          <>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Geogrid Reinforcement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Geogrid Layers</p>
                <p className="text-2xl font-bold text-brand-orange">{geogridCourses}</p>
                <p className="text-sm text-gray-500">every other course</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Geogrid Length</p>
                <p className="text-2xl font-bold text-brand-blue">{geogridLinearFt}</p>
                <p className="text-sm text-gray-500">linear ft total</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-600">Geogrid Depth</p>
                <p className="text-2xl font-bold text-brand-blue">{geogridDepthFt.toFixed(1)}</p>
                <p className="text-sm text-gray-500">ft behind wall (min 60% of wall height)</p>
              </div>
            </div>
          </>
        )}

        {!needsGeogrid && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800 font-medium">Geogrid reinforcement is not required for walls 3 ft and under.</p>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
