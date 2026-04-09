"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const mortarTypes: Record<string, { label: string; description: string }> = {
  N: { label: "Type N", description: "General purpose, above grade, moderate strength" },
  S: { label: "Type S", description: "High strength, below grade, retaining walls" },
  M: { label: "Type M", description: "Maximum strength, foundations, below grade" },
  O: { label: "Type O", description: "Low strength, interior, non-load-bearing" },
};

const unitTypes: Record<
  string,
  { label: string; sqFtPerBag80lb: number; unitsPerBag80lb: number; unitHeight: number; unitLength: number }
> = {
  standardBrick: {
    label: "Standard Brick (3-5/8\" x 2-1/4\" x 8\")",
    sqFtPerBag80lb: 35,
    unitsPerBag80lb: 65,
    unitHeight: 2.25,
    unitLength: 8,
  },
  modularBrick: {
    label: "Modular Brick (3-5/8\" x 2-1/4\" x 7-5/8\")",
    sqFtPerBag80lb: 35,
    unitsPerBag80lb: 65,
    unitHeight: 2.25,
    unitLength: 7.625,
  },
  cmu8: {
    label: "8\" CMU Block (8\" x 8\" x 16\")",
    sqFtPerBag80lb: 12.5,
    unitsPerBag80lb: 14,
    unitHeight: 8,
    unitLength: 16,
  },
  cmu12: {
    label: "12\" CMU Block (12\" x 8\" x 16\")",
    sqFtPerBag80lb: 10,
    unitsPerBag80lb: 11,
    unitHeight: 8,
    unitLength: 16,
  },
};

export default function MortarCalculator() {
  const [wallArea, setWallArea] = useState<number>(200);
  const [unitType, setUnitType] = useState<string>("standardBrick");
  const [jointThickness, setJointThickness] = useState<number>(0.375);
  const [mortarType, setMortarType] = useState<string>("N");
  const [bagSize, setBagSize] = useState<number>(80);

  const unit = unitTypes[unitType];
  const mortar = mortarTypes[mortarType];

  // Adjust coverage based on joint thickness (standard is 3/8")
  const jointFactor = jointThickness / 0.375;

  // Bags needed (80 lb basis)
  const bags80lb = wallArea / (unit.sqFtPerBag80lb / jointFactor);

  // Convert to selected bag size
  const bagsNeeded = Math.ceil(bags80lb * (80 / bagSize));

  // Total units (bricks/blocks)
  const totalUnits = Math.ceil(bags80lb * unit.unitsPerBag80lb);

  // Cubic feet of mortar
  // Approximate: for brick, about 0.005 cu ft per brick; for block, about 0.01 cu ft per block face
  const unitAreaSqIn = (unit.unitHeight + jointThickness) * (unit.unitLength + jointThickness);
  const unitsPerSqFt = 144 / unitAreaSqIn;
  const totalUnitsCalc = Math.ceil(wallArea * unitsPerSqFt);

  // Mortar volume: joint area around each unit x depth
  // Horizontal joint: unitLength x jointThickness x joint depth
  // Vertical joint: unitHeight x jointThickness x joint depth
  const jointDepth = unitType.includes("cmu") ? 1.25 : 3.625; // face shell for CMU, full depth for brick
  const horizontalJointVolPerUnit = (unit.unitLength * jointThickness * jointDepth) / 1728; // cu ft
  const verticalJointVolPerUnit = (unit.unitHeight * jointThickness * jointDepth) / 1728; // cu ft
  const mortarPerUnit = horizontalJointVolPerUnit + verticalJointVolPerUnit;
  const totalMortarCuFt = totalUnitsCalc * mortarPerUnit;

  // Sand needed (mortar mix is roughly 1 part cement to 3 parts sand by volume)
  // An 80 lb bag of premix yields about 0.5 cu ft of mortar
  const mortarYieldPerBag = 0.5; // cu ft per 80 lb bag
  const sandCuFt = totalMortarCuFt * 0.75; // sand is ~75% of mortar volume
  const sandTons = (sandCuFt * 100) / 2000; // ~100 lbs per cu ft for sand

  return (
    <CalculatorLayout
      title="Mortar Calculator"
      description="Calculate bags of mortar mix, mortar volume, and sand needed for brick and block masonry. Supports standard brick, modular brick, 8-inch CMU, and 12-inch CMU with mortar types N, S, M, and O."
      trade="Masonry"
      howToUse="Enter the total wall area in square feet, then select your brick or block type, joint thickness, mortar type, and bag size. The calculator estimates the number of mortar bags needed based on industry-standard coverage rates, the total mortar volume, and sand requirements. Coverage rates adjust automatically based on joint thickness."
      formula={"Bags (80 lb) = Wall Area / Coverage Rate. Coverage adjusts with joint thickness: standard brick ~35 sq ft/bag at 3/8\" joint; 8\" CMU ~12.5 sq ft/bag. Sand = ~75% of mortar volume. Mortar Volume = Units x (Horizontal Joint + Vertical Joint) per unit."}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="wallArea" className="block text-sm font-medium text-gray-700 mb-1">
            Wall Area (sq ft)
          </label>
          <input
            id="wallArea"
            type="number"
            min={1}
            max={10000}
            value={wallArea}
            onChange={(e) => setWallArea(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="unitType" className="block text-sm font-medium text-gray-700 mb-1">
            Brick / Block Type
          </label>
          <select
            id="unitType"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(unitTypes).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="jointThickness" className="block text-sm font-medium text-gray-700 mb-1">
            Joint Thickness (inches)
          </label>
          <select
            id="jointThickness"
            value={jointThickness}
            onChange={(e) => setJointThickness(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={0.25}>1/4&quot;</option>
            <option value={0.375}>3/8&quot; (standard)</option>
            <option value={0.5}>1/2&quot;</option>
            <option value={0.625}>5/8&quot;</option>
          </select>
        </div>

        <div>
          <label htmlFor="mortarType" className="block text-sm font-medium text-gray-700 mb-1">
            Mortar Type
          </label>
          <select
            id="mortarType"
            value={mortarType}
            onChange={(e) => setMortarType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            {Object.entries(mortarTypes).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label} &mdash; {val.description}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="bagSize" className="block text-sm font-medium text-gray-700 mb-1">
            Mortar Bag Size
          </label>
          <select
            id="bagSize"
            value={bagSize}
            onChange={(e) => setBagSize(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={60}>60 lb bag</option>
            <option value={80}>80 lb bag (standard)</option>
            <option value={94}>94 lb bag</option>
          </select>
        </div>
      </div>

      {/* Mortar Type Info */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          <span className="font-semibold">{mortar.label}:</span> {mortar.description}
        </p>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Mortar Estimate</h2>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Mortar Requirements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Mortar Bags Needed</p>
            <p className="text-2xl font-bold text-brand-blue">{bagsNeeded}</p>
            <p className="text-sm text-gray-500">{bagSize} lb bags ({mortar.label})</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Mortar Volume</p>
            <p className="text-2xl font-bold text-brand-orange">{totalMortarCuFt.toFixed(1)} cu ft</p>
            <p className="text-sm text-gray-500">total mortar needed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Sand Needed</p>
            <p className="text-2xl font-bold text-brand-blue">{sandCuFt.toFixed(1)} cu ft</p>
            <p className="text-sm text-gray-500">~{sandTons.toFixed(2)} tons</p>
          </div>
        </div>

        <h3 className="text-md font-semibold text-gray-700 mb-3">Masonry Units</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Wall Area</p>
            <p className="text-2xl font-bold text-brand-blue">{wallArea.toLocaleString()} sq ft</p>
            <p className="text-sm text-gray-500">total face area</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Bricks / Blocks Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{totalUnitsCalc.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{unit.label.split("(")[0].trim()}</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Coverage Rate</p>
            <p className="text-2xl font-bold text-brand-blue">
              {(unit.sqFtPerBag80lb / jointFactor).toFixed(1)} sq ft
            </p>
            <p className="text-sm text-gray-500">per 80 lb bag at {jointThickness}&quot; joint</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
