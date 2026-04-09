"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

type RafterType = "common" | "hip";

function toFeetInches(totalInches: number): string {
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return `${feet}' ${inches.toFixed(2)}"`;
}

export default function RafterLengthCalculator() {
  const [buildingSpan, setBuildingSpan] = useState<number>(24);
  const [roofPitch, setRoofPitch] = useState<number>(6);
  const [overhang, setOverhang] = useState<number>(12);
  const [ridgeThickness, setRidgeThickness] = useState<number>(1.5);
  const [rafterType, setRafterType] = useState<RafterType>("common");
  const [rafterWidth, setRafterWidth] = useState<number>(5.5);

  const halfSpanInches = (buildingSpan * 12) / 2;
  const ridgeDeduction = ridgeThickness / 2;
  const adjustedRun = halfSpanInches - ridgeDeduction;

  const pitchAngle = Math.atan(roofPitch / 12);
  const pitchDegrees = pitchAngle * (180 / Math.PI);

  // Common rafter length (along the slope)
  const commonRafterLength = adjustedRun / Math.cos(pitchAngle);
  // Tail (overhang) length along the slope
  const tailLength = overhang / Math.cos(pitchAngle);
  // Total rafter length including overhang
  const totalRafterLength = commonRafterLength + tailLength;

  // Ridge height from top of wall plate
  const ridgeHeight = adjustedRun * Math.tan(pitchAngle);

  // Birdsmouth cut: seat cut = rafter width, plumb cut depth
  const seatCut = rafterWidth;
  const heelHeight = rafterWidth;
  const plumbCutDepth = seatCut * Math.tan(pitchAngle);

  // Hip rafter calculations
  const hipAngle = Math.atan(roofPitch / (12 * Math.SQRT2));
  const hipDegrees = hipAngle * (180 / Math.PI);
  const hipRun = adjustedRun * Math.SQRT2;
  const hipRafterLength = hipRun / Math.cos(hipAngle);
  const hipTailLength = (overhang * Math.SQRT2) / Math.cos(hipAngle);
  const totalHipLength = hipRafterLength + hipTailLength;

  // Tail cut angle (plumb cut at tail)
  const tailCutAngle = pitchDegrees;

  const isHip = rafterType === "hip";
  const displayRafterLength = isHip ? hipRafterLength : commonRafterLength;
  const displayTailLength = isHip ? hipTailLength : tailLength;
  const displayTotalLength = isHip ? totalHipLength : totalRafterLength;
  const displayAngle = isHip ? hipDegrees : pitchDegrees;

  return (
    <CalculatorLayout
      title="Rafter Length Calculator"
      description="Calculate rafter lengths for common and hip rafters. Get accurate measurements for ridge height, birdsmouth cuts, and tail cut angles based on building span, pitch, and overhang."
      trade="Carpentry"
      howToUse="Enter the full building span (wall to wall), the roof pitch as rise per 12 inches of run, the overhang or eave length in inches, and the ridge board thickness. Select common or hip rafter to see the corresponding measurements. The calculator deducts for the ridge board and computes birdsmouth dimensions."
      formula="Common Rafter: Run = (Span / 2) - (Ridge / 2). Length = Run / cos(pitch angle). Hip Rafter: Hip Run = Run x sqrt(2). Hip Length = Hip Run / cos(hip angle). Ridge Height = Adjusted Run x tan(pitch angle)."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="rafterType" className="block text-sm font-medium text-gray-700 mb-1">
            Rafter Type
          </label>
          <select
            id="rafterType"
            value={rafterType}
            onChange={(e) => setRafterType(e.target.value as RafterType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value="common">Common Rafter</option>
            <option value="hip">Hip Rafter</option>
          </select>
        </div>

        <div>
          <label htmlFor="buildingSpan" className="block text-sm font-medium text-gray-700 mb-1">
            Building Span (feet)
          </label>
          <input
            id="buildingSpan"
            type="number"
            min={1}
            step={0.5}
            value={buildingSpan}
            onChange={(e) => setBuildingSpan(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="roofPitch" className="block text-sm font-medium text-gray-700 mb-1">
            Roof Pitch (rise per 12&quot; run)
          </label>
          <input
            id="roofPitch"
            type="number"
            min={0.5}
            max={24}
            step={0.5}
            value={roofPitch}
            onChange={(e) => setRoofPitch(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="overhang" className="block text-sm font-medium text-gray-700 mb-1">
            Overhang / Eave Length (inches)
          </label>
          <input
            id="overhang"
            type="number"
            min={0}
            step={1}
            value={overhang}
            onChange={(e) => setOverhang(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="ridgeThickness" className="block text-sm font-medium text-gray-700 mb-1">
            Ridge Board Thickness (inches)
          </label>
          <select
            id="ridgeThickness"
            value={ridgeThickness}
            onChange={(e) => setRidgeThickness(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={1.5}>1.5&quot; (2x lumber)</option>
            <option value={3.5}>3.5&quot; (4x lumber)</option>
            <option value={1.75}>1.75&quot; (LVL)</option>
          </select>
        </div>

        <div>
          <label htmlFor="rafterWidth" className="block text-sm font-medium text-gray-700 mb-1">
            Rafter Depth (inches)
          </label>
          <select
            id="rafterWidth"
            value={rafterWidth}
            onChange={(e) => setRafterWidth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
          >
            <option value={3.5}>2x4 (3.5&quot;)</option>
            <option value={5.5}>2x6 (5.5&quot;)</option>
            <option value={7.25}>2x8 (7.25&quot;)</option>
            <option value={9.25}>2x10 (9.25&quot;)</option>
            <option value={11.25}>2x12 (11.25&quot;)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          {isHip ? "Hip" : "Common"} Rafter Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Rafter Length (no overhang)</p>
            <p className="text-2xl font-bold text-brand-blue">{toFeetInches(displayRafterLength)}</p>
            <p className="text-sm text-gray-500">{displayRafterLength.toFixed(2)}&quot;</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Tail Length (overhang)</p>
            <p className="text-2xl font-bold text-brand-blue">{toFeetInches(displayTailLength)}</p>
            <p className="text-sm text-gray-500">{displayTailLength.toFixed(2)}&quot;</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Rafter Length</p>
            <p className="text-2xl font-bold text-brand-orange">{toFeetInches(displayTotalLength)}</p>
            <p className="text-sm text-gray-500">{displayTotalLength.toFixed(2)}&quot;</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Ridge Height</p>
            <p className="text-2xl font-bold text-brand-blue">{toFeetInches(ridgeHeight)}</p>
            <p className="text-sm text-gray-500">above wall plate</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Plumb Cut Angle</p>
            <p className="text-2xl font-bold text-brand-blue">{displayAngle.toFixed(1)}&deg;</p>
            <p className="text-sm text-gray-500">from horizontal</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Tail Cut Angle</p>
            <p className="text-2xl font-bold text-brand-blue">{tailCutAngle.toFixed(1)}&deg;</p>
            <p className="text-sm text-gray-500">plumb cut at eave</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Birdsmouth Seat Cut</p>
            <p className="text-2xl font-bold text-brand-blue">{seatCut.toFixed(2)}&quot;</p>
            <p className="text-sm text-gray-500">horizontal</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Birdsmouth Plumb Depth</p>
            <p className="text-2xl font-bold text-brand-blue">{plumbCutDepth.toFixed(2)}&quot;</p>
            <p className="text-sm text-gray-500">vertical</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Heel Height</p>
            <p className="text-2xl font-bold text-brand-blue">{heelHeight.toFixed(2)}&quot;</p>
            <p className="text-sm text-gray-500">at wall plate</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
