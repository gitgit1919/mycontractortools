"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type CalcMode = "auto_steps" | "manual_steps";

export default function ConcreteStepsCalculator() {
  const [calcMode, setCalcMode] = useState<CalcMode>("auto_steps");
  const [totalRise, setTotalRise] = useState<number>(36);
  const [stepWidth, setStepWidth] = useState<number>(48);
  const [manualSteps, setManualSteps] = useState<number>(5);
  const [treadDepth, setTreadDepth] = useState<number>(11);
  const [cheekWallThickness, setCheekWallThickness] = useState<number>(6);
  const [hasCheekWalls, setHasCheekWalls] = useState<boolean>(true);
  const [landingDepth, setLandingDepth] = useState<number>(36);
  const [hasLanding, setHasLanding] = useState<boolean>(false);

  // Calculate number of steps and riser height
  // IRC max riser: 7.75", min tread: 10"
  const autoSteps = Math.ceil(totalRise / 7.75);
  const numSteps = calcMode === "auto_steps" ? autoSteps : manualSteps;
  const riserHeight = numSteps > 0 ? totalRise / numSteps : 0;

  // Code compliance checks
  const riserCompliant = riserHeight <= 7.75 && riserHeight >= 4;
  const treadCompliant = treadDepth >= 10;
  const riserVariation = 0; // uniform risers by calculation

  // Total horizontal run (number of treads = numSteps - 1 for stairs with landing, or numSteps)
  // Typically the top step is the landing/floor, so treads = numSteps - 1
  const numTreads = Math.max(numSteps - 1, 1);
  const totalRun = numTreads * treadDepth;

  // Concrete volume calculation
  // Each step is a rectangular solid stacked on the previous
  // Step i (from bottom): width x treadDepth x (riserHeight * (numSteps - i))
  // Plus cheek walls if applicable
  const stepWidthFt = stepWidth / 12;
  const treadDepthFt = treadDepth / 12;
  const riserHeightFt = riserHeight / 12;

  // Volume of stepped portion (each step is a rectangle)
  let stepsVolumeCuFt = 0;
  for (let i = 0; i < numTreads; i++) {
    // Each tread section: width x treadDepth x height at that point
    const sectionHeight = riserHeightFt * (numTreads - i);
    stepsVolumeCuFt += stepWidthFt * treadDepthFt * sectionHeight;
  }

  // Top landing area if applicable
  const landingVolumeCuFt = hasLanding
    ? stepWidthFt * (landingDepth / 12) * riserHeightFt
    : 0;

  // Cheek walls (side walls): triangular prism shape
  // Height = totalRise, length = totalRun, thickness = cheekWallThickness
  let cheekWallVolumeCuFt = 0;
  if (hasCheekWalls) {
    const totalRiseFt = totalRise / 12;
    const totalRunFt = totalRun / 12;
    const cheekThicknessFt = cheekWallThickness / 12;
    // Each cheek wall is approximately a right triangle x thickness
    cheekWallVolumeCuFt = 2 * (0.5 * totalRunFt * totalRiseFt * cheekThicknessFt);
  }

  const totalVolumeCuFt = stepsVolumeCuFt + landingVolumeCuFt + cheekWallVolumeCuFt;
  const cubicYards = totalVolumeCuFt / 27;

  // Add 10% waste factor
  const cubicYardsWithWaste = cubicYards * 1.1;

  // Form board linear feet
  // Risers: numSteps x width (face boards)
  // Sides: 2 x (sum of step heights) if no cheek walls, or cheek wall perimeter
  const riserFormLF = numSteps * (stepWidth / 12);
  // Side form boards: 2 sides x stair stringer length
  const stringerLength = Math.sqrt(
    (totalRun / 12) * (totalRun / 12) + (totalRise / 12) * (totalRise / 12)
  );
  const sideFormLF = hasCheekWalls ? 0 : 2 * stringerLength;
  const totalFormBoardLF = riserFormLF + sideFormLF;

  return (
    <CalculatorLayout
      title="Concrete Steps Calculator"
      description="Calculate cubic yards of concrete, riser height, total run, and form board requirements for concrete steps. Includes IRC building code compliance checks for riser and tread dimensions."
      trade="Concrete"
      howToUse="Enter the total rise (height from bottom to top of steps) in inches, step width, and tread depth. Choose auto-calculate to let the tool determine the number of steps based on IRC maximum riser height, or enter the number of steps manually. Add cheek walls and a top landing if needed. The calculator computes concrete volume with a 10% waste factor."
      formula="Riser Height = Total Rise / Number of Steps. Total Run = (Steps - 1) x Tread Depth. Concrete Volume = sum of each step section (Width x Tread x cumulative height) + cheek walls + landing. Cubic Yards = Cu Ft / 27. IRC limits: max riser 7.75 in, min tread 10 in."
    >
      <div className="mb-6">
        <label htmlFor="calcMode" className="block text-sm font-medium text-gray-700 mb-1">
          Step Count Method
        </label>
        <select
          id="calcMode"
          value={calcMode}
          onChange={(e) => setCalcMode(e.target.value as CalcMode)}
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
        >
          <option value="auto_steps">Auto-calculate (IRC compliant)</option>
          <option value="manual_steps">Enter number of steps</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="totalRise" className="block text-sm font-medium text-gray-700 mb-1">
            Total Rise (inches)
          </label>
          <input
            id="totalRise"
            type="number"
            min={1}
            step={0.5}
            value={totalRise}
            onChange={(e) => setTotalRise(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="stepWidth" className="block text-sm font-medium text-gray-700 mb-1">
            Step Width (inches)
          </label>
          <input
            id="stepWidth"
            type="number"
            min={12}
            step={1}
            value={stepWidth}
            onChange={(e) => setStepWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        {calcMode === "manual_steps" && (
          <div>
            <label htmlFor="manualSteps" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Steps
            </label>
            <input
              id="manualSteps"
              type="number"
              min={1}
              max={30}
              step={1}
              value={manualSteps}
              onChange={(e) => setManualSteps(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label htmlFor="treadDepth" className="block text-sm font-medium text-gray-700 mb-1">
            Tread Depth (inches)
          </label>
          <input
            id="treadDepth"
            type="number"
            min={8}
            step={0.5}
            value={treadDepth}
            onChange={(e) => setTreadDepth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasCheekWalls}
              onChange={(e) => setHasCheekWalls(e.target.checked)}
              className="w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
            />
            <span className="text-sm font-medium text-gray-700">Cheek Walls</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasLanding}
              onChange={(e) => setHasLanding(e.target.checked)}
              className="w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
            />
            <span className="text-sm font-medium text-gray-700">Top Landing</span>
          </label>
        </div>

        {hasCheekWalls && (
          <div>
            <label htmlFor="cheekWallThickness" className="block text-sm font-medium text-gray-700 mb-1">
              Cheek Wall Thickness (inches)
            </label>
            <select
              id="cheekWallThickness"
              value={cheekWallThickness}
              onChange={(e) => setCheekWallThickness(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            >
              <option value={4}>4 inches</option>
              <option value={6}>6 inches</option>
              <option value={8}>8 inches</option>
            </select>
          </div>
        )}

        {hasLanding && (
          <div>
            <label htmlFor="landingDepth" className="block text-sm font-medium text-gray-700 mb-1">
              Landing Depth (inches)
            </label>
            <input
              id="landingDepth"
              type="number"
              min={12}
              step={1}
              value={landingDepth}
              onChange={(e) => setLandingDepth(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>
        )}
      </div>

      {/* Code Compliance */}
      {(!riserCompliant || !treadCompliant) && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="font-semibold text-red-800 mb-1">IRC Code Warning</p>
          <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
            {!riserCompliant && (
              <li>
                Riser height of {riserHeight.toFixed(2)}&quot; exceeds the IRC maximum of 7.75&quot;
                {riserHeight < 4 ? " or is below minimum practical height" : ""}.
                {calcMode === "manual_steps" && " Try adding more steps or use auto-calculate."}
              </li>
            )}
            {!treadCompliant && (
              <li>
                Tread depth of {treadDepth}&quot; is below the IRC minimum of 10&quot;.
              </li>
            )}
          </ul>
        </div>
      )}

      {riserCompliant && treadCompliant && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-semibold text-green-800">IRC Code Compliant</p>
          <p className="text-sm text-green-700">
            Riser height ({riserHeight.toFixed(2)}&quot;) and tread depth ({treadDepth}&quot;) meet IRC requirements.
          </p>
        </div>
      )}

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Number of Steps</p>
            <p className="text-2xl font-bold text-brand-blue">{numSteps}</p>
            <p className="text-sm text-gray-500">{numTreads} treads</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Riser Height</p>
            <p className="text-2xl font-bold text-brand-blue">{riserHeight.toFixed(2)}&quot;</p>
            <p className="text-sm text-gray-500">per step</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Run</p>
            <p className="text-2xl font-bold text-brand-blue">{(totalRun / 12).toFixed(1)}&apos;</p>
            <p className="text-sm text-gray-500">{totalRun.toFixed(1)}&quot; horizontal</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Concrete (steps only)</p>
            <p className="text-2xl font-bold text-brand-blue">{(stepsVolumeCuFt / 27).toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Concrete</p>
            <p className="text-2xl font-bold text-brand-orange">{cubicYards.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards (net)</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Order Amount (+10%)</p>
            <p className="text-2xl font-bold text-brand-orange">{cubicYardsWithWaste.toFixed(2)}</p>
            <p className="text-sm text-gray-500">cubic yards</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Form Board</p>
            <p className="text-2xl font-bold text-brand-blue">{totalFormBoardLF.toFixed(1)}</p>
            <p className="text-sm text-gray-500">linear feet</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stringer Length</p>
            <p className="text-2xl font-bold text-brand-blue">{stringerLength.toFixed(1)}&apos;</p>
            <p className="text-sm text-gray-500">diagonal</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stair Angle</p>
            <p className="text-2xl font-bold text-brand-blue">
              {(Math.atan2(totalRise, totalRun) * (180 / Math.PI)).toFixed(1)}&deg;
            </p>
            <p className="text-sm text-gray-500">from horizontal</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
