"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function StairCalculator() {
  const [totalRiseFeet, setTotalRiseFeet] = useState<number>(9);
  const [totalRiseInches, setTotalRiseInches] = useState<number>(0);
  const [targetRiserHeight, setTargetRiserHeight] = useState<number>(7.5);
  const [runDepth, setRunDepth] = useState<number>(10.5);
  const [nosing, setNosing] = useState<number>(1);
  const [stairWidth, setStairWidth] = useState<number>(36);
  const [stringerCount, setStringerCount] = useState<number>(3);

  // Total rise in inches
  const totalRiseIn = totalRiseFeet * 12 + totalRiseInches;

  // Number of risers (round to nearest whole number)
  const numRisers = totalRiseIn > 0 ? Math.round(totalRiseIn / targetRiserHeight) : 0;

  // Actual riser height
  const actualRiserHeight = numRisers > 0 ? totalRiseIn / numRisers : 0;

  // Number of treads is always one less than risers
  const numTreads = numRisers > 0 ? numRisers - 1 : 0;

  // Total run (horizontal distance)
  const totalRunIn = numTreads * runDepth;
  const totalRunFeet = totalRunIn / 12;

  // Stairwell opening length (total run + ~12" clearance at top)
  const stairwellOpening = totalRunIn + 12;

  // Stringer length (hypotenuse)
  const stringerLength = Math.sqrt(totalRiseIn * totalRiseIn + totalRunIn * totalRunIn);
  const stringerLengthFeet = stringerLength / 12;

  // Stair angle in degrees
  const stairAngle = totalRunIn > 0 ? Math.atan(totalRiseIn / totalRunIn) * (180 / Math.PI) : 0;

  // Rise + Run comfort check
  const riseRunSum = actualRiserHeight + runDepth;

  // Code compliance checks (IRC)
  const riserExceedsMax = actualRiserHeight > 7.75;
  const runBelowMin = runDepth < 10;
  const riseRunOutOfRange = riseRunSum < 17 || riseRunSum > 18;
  const angleOutOfRange = stairAngle > 42 || stairAngle < 30;
  const hasCodeViolation = riserExceedsMax || runBelowMin;
  const hasWarning = riseRunOutOfRange || angleOutOfRange;

  // Material estimates
  const stairWidthFeet = stairWidth / 12;

  // Treads: assume 5/4 x 12 (1.04" thick x 11.25" wide) lumber or similar
  const treadBoardFeet = numTreads * stairWidthFeet * (runDepth + nosing) / 12 * 1.04 / 12 * 12;
  // Simplified: numTreads * width in feet * ~1 board foot per linear foot
  const treadLinearFeet = numTreads * (stairWidth / 12);

  // Risers: assume 3/4" thick material
  const riserLinearFeet = numRisers * (stairWidth / 12);

  // Stringer board feet: 2x12 is 1.5" x 11.25", stringer length
  const stringerBoardFeet = stringerCount * (1.5 / 12) * (11.25 / 12) * stringerLengthFeet;

  return (
    <CalculatorLayout
      title="Stair Calculator"
      description="Calculate stair dimensions, riser and tread counts, stringer length, stair angle, and material estimates. Includes IRC building code compliance checks for residential stairs."
      trade="General Contracting"
      howToUse="Enter the total rise (the vertical height the stairs must climb) in feet and inches. Adjust the target riser height (7.5 inches is standard) and run depth (10-11 inches is typical). The calculator will determine the number of risers and treads, actual riser height, total run, stringer length, and stair angle. It also checks whether your dimensions meet IRC residential building code requirements."
      formula="Number of Risers = Total Rise / Target Riser Height (rounded). Actual Riser Height = Total Rise / Number of Risers. Total Run = Number of Treads x Run Depth. Stringer Length = sqrt(Total Rise squared + Total Run squared). Stair Angle = arctan(Total Rise / Total Run)."
      disclaimer="This calculator is for estimation purposes only. Always verify measurements on-site and consult local building codes, which may differ from IRC standards. A licensed professional should review stair designs before construction."
    >
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="totalRiseFeet" className="block text-sm font-medium text-gray-700 mb-1">
            Total Rise - Feet
          </label>
          <input
            id="totalRiseFeet"
            type="number"
            min={0}
            max={100}
            value={totalRiseFeet}
            onChange={(e) => setTotalRiseFeet(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="totalRiseInches" className="block text-sm font-medium text-gray-700 mb-1">
            Total Rise - Inches
          </label>
          <input
            id="totalRiseInches"
            type="number"
            min={0}
            max={11.99}
            step={0.25}
            value={totalRiseInches}
            onChange={(e) => setTotalRiseInches(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="targetRiser" className="block text-sm font-medium text-gray-700 mb-1">
            Target Riser Height (inches)
          </label>
          <input
            id="targetRiser"
            type="number"
            min={4}
            max={10}
            step={0.25}
            value={targetRiserHeight}
            onChange={(e) => setTargetRiserHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="runDepth" className="block text-sm font-medium text-gray-700 mb-1">
            Run Depth / Tread Depth (inches)
          </label>
          <input
            id="runDepth"
            type="number"
            min={6}
            max={24}
            step={0.25}
            value={runDepth}
            onChange={(e) => setRunDepth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="nosing" className="block text-sm font-medium text-gray-700 mb-1">
            Nosing Overhang (inches)
          </label>
          <input
            id="nosing"
            type="number"
            min={0}
            max={2}
            step={0.25}
            value={nosing}
            onChange={(e) => setNosing(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="stairWidth" className="block text-sm font-medium text-gray-700 mb-1">
            Stair Width (inches)
          </label>
          <input
            id="stairWidth"
            type="number"
            min={24}
            max={120}
            value={stairWidth}
            onChange={(e) => setStairWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="stringerCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Stringers
          </label>
          <input
            id="stringerCount"
            type="number"
            min={2}
            max={6}
            value={stringerCount}
            onChange={(e) => setStringerCount(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>
      </div>

      {/* Code Compliance Warnings */}
      {numRisers > 0 && (hasCodeViolation || hasWarning) && (
        <div className="mt-6 space-y-3">
          {hasCodeViolation && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4">
              <h3 className="text-red-800 font-semibold mb-2">Code Violation (IRC Residential)</h3>
              <ul className="text-red-700 text-sm space-y-1 list-disc list-inside">
                {riserExceedsMax && (
                  <li>
                    Riser height {actualRiserHeight.toFixed(2)}&quot; exceeds the IRC maximum of
                    7.75&quot;. Add more risers or reduce total rise.
                  </li>
                )}
                {runBelowMin && (
                  <li>
                    Run depth {runDepth}&quot; is below the IRC minimum of 10&quot;. Increase tread
                    depth.
                  </li>
                )}
              </ul>
            </div>
          )}
          {hasWarning && (
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
              <h3 className="text-yellow-800 font-semibold mb-2">Comfort / Best Practice Warnings</h3>
              <ul className="text-yellow-700 text-sm space-y-1 list-disc list-inside">
                {riseRunOutOfRange && (
                  <li>
                    Rise + Run = {riseRunSum.toFixed(2)}&quot;. The ideal range is 17&quot; to
                    18&quot; for comfortable stairs.
                  </li>
                )}
                {angleOutOfRange && (
                  <li>
                    Stair angle is {stairAngle.toFixed(1)} degrees. Comfortable residential stairs
                    are typically between 30 and 42 degrees.
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Code Compliant Badge */}
      {numRisers > 0 && !hasCodeViolation && !hasWarning && (
        <div className="mt-6 bg-green-50 border border-green-300 rounded-lg p-4">
          <p className="text-green-800 font-semibold">
            IRC Code Compliant &mdash; Riser height, run depth, and stair angle are within
            recommended ranges.
          </p>
        </div>
      )}

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Stair Dimensions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Number of Risers</p>
            <p className="text-2xl font-bold text-brand-blue">{numRisers}</p>
            <p className="text-sm text-gray-500">steps up</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Actual Riser Height</p>
            <p className="text-2xl font-bold text-brand-orange">
              {actualRiserHeight.toFixed(2)}&quot;
            </p>
            <p className="text-sm text-gray-500">per step</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Number of Treads</p>
            <p className="text-2xl font-bold text-brand-blue">{numTreads}</p>
            <p className="text-sm text-gray-500">treads needed</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Run</p>
            <p className="text-2xl font-bold text-brand-orange">
              {totalRunFeet.toFixed(1)} ft
            </p>
            <p className="text-sm text-gray-500">{totalRunIn.toFixed(1)}&quot; horizontal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stringer Length</p>
            <p className="text-2xl font-bold text-brand-blue">
              {stringerLengthFeet.toFixed(1)} ft
            </p>
            <p className="text-sm text-gray-500">{stringerLength.toFixed(1)}&quot;</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stair Angle</p>
            <p className="text-2xl font-bold text-brand-orange">
              {stairAngle.toFixed(1)}&deg;
            </p>
            <p className="text-sm text-gray-500">from horizontal</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stairwell Opening</p>
            <p className="text-2xl font-bold text-brand-blue">
              {(stairwellOpening / 12).toFixed(1)} ft
            </p>
            <p className="text-sm text-gray-500">{stairwellOpening.toFixed(1)}&quot; min length</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Rise + Run</p>
            <p className="text-2xl font-bold text-brand-orange">
              {riseRunSum.toFixed(2)}&quot;
            </p>
            <p className="text-sm text-gray-500">ideal: 17&quot;&ndash;18&quot;</p>
          </div>
        </div>
      </div>

      {/* Material Estimates */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Material Estimates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Tread Boards</p>
            <p className="text-2xl font-bold text-brand-blue">{numTreads}</p>
            <p className="text-sm text-gray-500">
              {treadLinearFeet.toFixed(1)} linear ft of tread stock
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Riser Boards</p>
            <p className="text-2xl font-bold text-brand-orange">{numRisers}</p>
            <p className="text-sm text-gray-500">
              {riserLinearFeet.toFixed(1)} linear ft of riser stock
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stringers (2x12)</p>
            <p className="text-2xl font-bold text-brand-blue">{stringerCount}</p>
            <p className="text-sm text-gray-500">
              each {stringerLengthFeet.toFixed(1)} ft long
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Stringer Board Feet</p>
            <p className="text-2xl font-bold text-brand-orange">
              {stringerBoardFeet.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500">board feet total</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
