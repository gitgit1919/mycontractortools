"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type BrickSize = "standard" | "modular" | "queen" | "king";
type MortarJoint = "3/8" | "1/2";
type BondPattern = "running" | "stack";

const BRICK_DIMENSIONS: Record<BrickSize, { label: string; lengthIn: number; heightIn: number; depthIn: number }> = {
  standard: { label: 'Standard (8" x 2.25" x 3.625")', lengthIn: 8, heightIn: 2.25, depthIn: 3.625 },
  modular: { label: 'Modular (7.625" x 2.25" x 3.625")', lengthIn: 7.625, heightIn: 2.25, depthIn: 3.625 },
  queen: { label: 'Queen (7.625" x 2.75" x 3.125")', lengthIn: 7.625, heightIn: 2.75, depthIn: 3.125 },
  king: { label: 'King (9.625" x 2.75" x 3")', lengthIn: 9.625, heightIn: 2.75, depthIn: 3 },
};

const MORTAR_JOINT_INCHES: Record<MortarJoint, number> = {
  "3/8": 0.375,
  "1/2": 0.5,
};

function bricksPerSqFt(brick: BrickSize, mortar: MortarJoint): number {
  const { lengthIn, heightIn } = BRICK_DIMENSIONS[brick];
  const joint = MORTAR_JOINT_INCHES[mortar];
  const coursedLength = lengthIn + joint;
  const coursedHeight = heightIn + joint;
  return 144 / (coursedLength * coursedHeight);
}

export default function BrickCalculator() {
  const [wallLength, setWallLength] = useState<number>(20);
  const [wallHeight, setWallHeight] = useState<number>(8);
  const [numWalls, setNumWalls] = useState<number>(1);
  const [brickSize, setBrickSize] = useState<BrickSize>("standard");
  const [mortarJoint, setMortarJoint] = useState<MortarJoint>("3/8");
  const [numOpenings, setNumOpenings] = useState<number>(0);
  const [openingWidth, setOpeningWidth] = useState<number>(3);
  const [openingHeight, setOpeningHeight] = useState<number>(4);
  const [wasteFactor, setWasteFactor] = useState<number>(7);
  const [bondPattern, setBondPattern] = useState<BondPattern>("running");

  // Calculations
  const totalWallArea = wallLength * wallHeight * numWalls;
  const openingArea = numOpenings * openingWidth * openingHeight;
  const netWallArea = Math.max(totalWallArea - openingArea, 0);

  const perSqFt = bricksPerSqFt(brickSize, mortarJoint);
  const bricksNeeded = netWallArea * perSqFt;
  const bricksWithWaste = Math.ceil(bricksNeeded * (1 + wasteFactor / 100));

  // Mortar: ~7 bags (70 lb) per 1000 bricks for standard joints;
  // stack bond uses slightly less mortar since no staggering, but we keep same rate
  const mortarBags = Math.ceil((bricksWithWaste / 1000) * 7);

  // Sand: ~1 cubic ft per mortar bag
  const sandCuFt = mortarBags;

  // Wall ties: 1 per 2.67 sq ft for veneer
  const wallTies = Math.ceil(netWallArea / 2.67);

  return (
    <CalculatorLayout
      title="Brick Calculator"
      description="Estimate the number of bricks, mortar bags, sand, and wall ties needed for your masonry project. Supports standard, modular, queen, and king brick sizes."
      trade="Masonry"
      howToUse="Enter the length and height of each wall in feet, then set how many walls you are building. Choose the brick size and mortar joint thickness. If you have window or door openings, enter the count and average dimensions to subtract them from the total area. Adjust the waste factor (5-10% is typical) and select your bond pattern. The results update instantly."
      formula="Bricks per sq ft = 144 / ((brick length + mortar joint) x (brick height + mortar joint)). Total Bricks = Net Wall Area x Bricks per sq ft x (1 + Waste%). Mortar Bags (70 lb) = Total Bricks / 1000 x 7. Wall Ties = Net Area / 2.67."
    >
      {/* Wall Dimensions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="wallLength" className="block text-sm font-medium text-gray-700 mb-1">Wall Length (ft)</label>
          <input id="wallLength" type="number" min={0.1} step={0.1} value={wallLength} onChange={(e) => setWallLength(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="wallHeight" className="block text-sm font-medium text-gray-700 mb-1">Wall Height (ft)</label>
          <input id="wallHeight" type="number" min={0.1} step={0.1} value={wallHeight} onChange={(e) => setWallHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="numWalls" className="block text-sm font-medium text-gray-700 mb-1">Number of Walls</label>
          <input id="numWalls" type="number" min={1} max={100} value={numWalls} onChange={(e) => setNumWalls(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="brickSize" className="block text-sm font-medium text-gray-700 mb-1">Brick Size</label>
          <select id="brickSize" value={brickSize} onChange={(e) => setBrickSize(e.target.value as BrickSize)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            {Object.entries(BRICK_DIMENSIONS).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mortarJoint" className="block text-sm font-medium text-gray-700 mb-1">Mortar Joint Thickness</label>
          <select id="mortarJoint" value={mortarJoint} onChange={(e) => setMortarJoint(e.target.value as MortarJoint)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="3/8">3/8 inch</option>
            <option value="1/2">1/2 inch</option>
          </select>
        </div>
        <div>
          <label htmlFor="bondPattern" className="block text-sm font-medium text-gray-700 mb-1">Bond Pattern</label>
          <select id="bondPattern" value={bondPattern} onChange={(e) => setBondPattern(e.target.value as BondPattern)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="running">Running Bond</option>
            <option value="stack">Stack Bond</option>
          </select>
        </div>
      </div>

      {/* Openings */}
      <h3 className="text-lg font-semibold text-brand-blue mt-8 mb-4">Window / Door Openings</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="numOpenings" className="block text-sm font-medium text-gray-700 mb-1">Number of Openings</label>
          <input id="numOpenings" type="number" min={0} max={100} value={numOpenings} onChange={(e) => setNumOpenings(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="openingWidth" className="block text-sm font-medium text-gray-700 mb-1">Avg Opening Width (ft)</label>
          <input id="openingWidth" type="number" min={0.5} step={0.1} value={openingWidth} onChange={(e) => setOpeningWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="openingHeight" className="block text-sm font-medium text-gray-700 mb-1">Avg Opening Height (ft)</label>
          <input id="openingHeight" type="number" min={0.5} step={0.1} value={openingHeight} onChange={(e) => setOpeningHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="wasteFactor" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="wasteFactor" type="number" min={0} max={30} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Wall Area</p>
            <p className="text-2xl font-bold text-brand-blue">{totalWallArea.toFixed(1)}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Area Minus Openings</p>
            <p className="text-2xl font-bold text-brand-blue">{netWallArea.toFixed(1)}</p>
            <p className="text-sm text-gray-500">sq ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Bricks per Sq Ft</p>
            <p className="text-2xl font-bold text-brand-blue">{perSqFt.toFixed(2)}</p>
            <p className="text-sm text-gray-500">bricks</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Bricks Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{bricksWithWaste.toLocaleString()}</p>
            <p className="text-sm text-gray-500">with {wasteFactor}% waste</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Mortar Bags (70 lb)</p>
            <p className="text-2xl font-bold text-brand-blue">{mortarBags}</p>
            <p className="text-sm text-gray-500">bags needed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sand Needed</p>
            <p className="text-2xl font-bold text-brand-blue">{sandCuFt}</p>
            <p className="text-sm text-gray-500">cubic ft</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Wall Ties (Veneer)</p>
            <p className="text-2xl font-bold text-brand-blue">{wallTies}</p>
            <p className="text-sm text-gray-500">ties needed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Bond Pattern</p>
            <p className="text-2xl font-bold text-brand-blue">{bondPattern === "running" ? "Running" : "Stack"}</p>
            <p className="text-sm text-gray-500">bond</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
