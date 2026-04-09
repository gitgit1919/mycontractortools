"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type ShapeType = "slab" | "footing" | "column" | "stairs";

export default function ConcreteVolumeCalculator() {
  const [shape, setShape] = useState<ShapeType>("slab");
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(20);
  const [depth, setDepth] = useState<number>(4);
  const [diameter, setDiameter] = useState<number>(12);
  const [height, setHeight] = useState<number>(36);
  const [quantity, setQuantity] = useState<number>(1);
  const [numSteps, setNumSteps] = useState<number>(4);
  const [stepRise, setStepRise] = useState<number>(7);
  const [stepRun, setStepRun] = useState<number>(11);
  const [stairWidth, setStairWidth] = useState<number>(36);
  const [wasteFactor, setWasteFactor] = useState<number>(10);

  let cubicFeet = 0;

  if (shape === "slab" || shape === "footing") {
    cubicFeet = (length * width * (depth / 12)) * quantity;
  } else if (shape === "column") {
    const radiusFt = diameter / 24;
    cubicFeet = Math.PI * radiusFt * radiusFt * (height / 12) * quantity;
  } else if (shape === "stairs") {
    const riseInFt = stepRise / 12;
    const runInFt = stepRun / 12;
    const widthInFt = stairWidth / 12;
    let totalCf = 0;
    for (let i = 1; i <= numSteps; i++) {
      totalCf += widthInFt * runInFt * (riseInFt * i);
    }
    cubicFeet = totalCf * quantity;
  }

  const cubicYards = cubicFeet / 27;
  const withWaste = cubicYards * (1 + wasteFactor / 100);
  const bags60lb = Math.ceil(cubicFeet / 0.45);
  const bags80lb = Math.ceil(cubicFeet / 0.6);

  return (
    <CalculatorLayout
      title="Concrete Volume Calculator"
      description="Calculate how much concrete you need for slabs, footings, columns, and stairs. Get results in cubic yards and number of bags."
      trade="General Contracting"
      howToUse="Select the shape of your pour. For slabs and footings, enter length and width in feet and depth in inches. For columns, enter diameter in inches and height in inches. For stairs, enter the number of steps, rise, run, and width. Adjust the waste factor to account for spillage and over-ordering (10% is standard)."
      formula="Slab/Footing: Cu Ft = Length × Width × (Depth/12). Column: Cu Ft = π × (Diameter/24)² × (Height/12). Cubic Yards = Cu Ft / 27."
    >
      <div className="mb-6">
        <label htmlFor="shape" className="block text-sm font-medium text-gray-700 mb-1">Shape</label>
        <select id="shape" value={shape} onChange={(e) => setShape(e.target.value as ShapeType)}
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
          <option value="slab">Slab / Patio / Floor</option>
          <option value="footing">Footing / Wall</option>
          <option value="column">Round Column / Sono Tube</option>
          <option value="stairs">Stairs</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(shape === "slab" || shape === "footing") && (
          <>
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
              <input id="length" type="number" min={0.1} step={0.1} value={length} onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
              <input id="width" type="number" min={0.1} step={0.1} value={width} onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="depth" className="block text-sm font-medium text-gray-700 mb-1">Depth (inches)</label>
              <input id="depth" type="number" min={1} max={120} value={depth} onChange={(e) => setDepth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </>
        )}
        {shape === "column" && (
          <>
            <div>
              <label htmlFor="diameter" className="block text-sm font-medium text-gray-700 mb-1">Diameter (inches)</label>
              <input id="diameter" type="number" min={4} max={120} value={diameter} onChange={(e) => setDiameter(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="colHeight" className="block text-sm font-medium text-gray-700 mb-1">Height (inches)</label>
              <input id="colHeight" type="number" min={1} max={600} value={height} onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </>
        )}
        {shape === "stairs" && (
          <>
            <div>
              <label htmlFor="numSteps" className="block text-sm font-medium text-gray-700 mb-1">Number of Steps</label>
              <input id="numSteps" type="number" min={1} max={50} value={numSteps} onChange={(e) => setNumSteps(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="stepRise" className="block text-sm font-medium text-gray-700 mb-1">Step Rise (inches)</label>
              <input id="stepRise" type="number" min={4} max={12} step={0.25} value={stepRise} onChange={(e) => setStepRise(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="stepRun" className="block text-sm font-medium text-gray-700 mb-1">Step Run (inches)</label>
              <input id="stepRun" type="number" min={8} max={24} step={0.25} value={stepRun} onChange={(e) => setStepRun(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="stairWidth" className="block text-sm font-medium text-gray-700 mb-1">Stair Width (inches)</label>
              <input id="stairWidth" type="number" min={12} max={120} value={stairWidth} onChange={(e) => setStairWidth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </>
        )}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input id="quantity" type="number" min={1} max={1000} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="waste" className="block text-sm font-medium text-gray-700 mb-1">Waste Factor (%)</label>
          <input id="waste" type="number" min={0} max={30} value={wasteFactor} onChange={(e) => setWasteFactor(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Volume</p>
            <p className="text-2xl font-bold text-brand-blue">{cubicYards.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Cubic Yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">With {wasteFactor}% Waste</p>
            <p className="text-2xl font-bold text-brand-orange">{withWaste.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Cubic Yards to Order</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">60 lb Bags</p>
            <p className="text-2xl font-bold text-brand-blue">{bags60lb}</p>
            <p className="text-sm text-gray-500">bags needed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">80 lb Bags</p>
            <p className="text-2xl font-bold text-brand-blue">{bags80lb}</p>
            <p className="text-sm text-gray-500">bags needed</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
