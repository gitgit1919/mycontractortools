"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function HVACLoadCalculator() {
  const [squareFootage, setSquareFootage] = useState<number>(1500);
  const [ceilingHeight, setCeilingHeight] = useState<number>(8);
  const [climate, setClimate] = useState<string>("moderate");
  const [insulation, setInsulation] = useState<string>("average");
  const [windows, setWindows] = useState<string>("average");
  const [occupants, setOccupants] = useState<number>(4);

  const climateFactor: Record<string, number> = { hot: 1.3, warm: 1.15, moderate: 1.0, cool: 0.85, cold: 0.75 };
  const insulationFactor: Record<string, number> = { poor: 1.3, average: 1.0, good: 0.85, excellent: 0.7 };
  const windowFactor: Record<string, number> = { few: 0.9, average: 1.0, many: 1.15, "floor-to-ceiling": 1.3 };

  const heightFactor = ceilingHeight > 8 ? ceilingHeight / 8 : 1;
  const baseBTU = squareFootage * 25;
  const coolingBTU = Math.round(
    baseBTU * heightFactor * climateFactor[climate] * insulationFactor[insulation] * windowFactor[windows] + occupants * 600
  );
  const heatingBTU = Math.round(coolingBTU * 1.1);
  const coolingTons = (coolingBTU / 12000).toFixed(1);

  return (
    <CalculatorLayout
      title="HVAC Load Calculator"
      description="Estimate the heating and cooling capacity needed for a space. This simplified Manual J calculation helps HVAC professionals quickly size equipment for residential projects."
      trade="HVAC"
      howToUse="Enter the square footage of the space, ceiling height, and select your climate zone, insulation quality, and window coverage. The calculator uses a simplified version of the Manual J methodology to estimate BTU requirements for both heating and cooling. Add the number of regular occupants, as each person adds approximately 600 BTU of heat load."
      formula="Cooling BTU = (Sq Ft × 25 × Height Factor × Climate Factor × Insulation Factor × Window Factor) + (Occupants × 600). Heating BTU = Cooling BTU × 1.1. Tons = Cooling BTU / 12,000."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
          <input id="sqft" type="number" min={100} max={100000} value={squareFootage} onChange={(e) => setSquareFootage(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="ceiling" className="block text-sm font-medium text-gray-700 mb-1">Ceiling Height (ft)</label>
          <input id="ceiling" type="number" min={7} max={30} value={ceilingHeight} onChange={(e) => setCeilingHeight(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="climate" className="block text-sm font-medium text-gray-700 mb-1">Climate Zone</label>
          <select id="climate" value={climate} onChange={(e) => setClimate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="hot">Hot (AZ, TX, FL)</option>
            <option value="warm">Warm (GA, NC, TN)</option>
            <option value="moderate">Moderate (VA, MO, KS)</option>
            <option value="cool">Cool (OH, PA, NY)</option>
            <option value="cold">Cold (MN, WI, ME)</option>
          </select>
        </div>
        <div>
          <label htmlFor="insulation" className="block text-sm font-medium text-gray-700 mb-1">Insulation Quality</label>
          <select id="insulation" value={insulation} onChange={(e) => setInsulation(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="poor">Poor (old/no insulation)</option>
            <option value="average">Average (standard fiberglass)</option>
            <option value="good">Good (upgraded insulation)</option>
            <option value="excellent">Excellent (spray foam / new build)</option>
          </select>
        </div>
        <div>
          <label htmlFor="windows" className="block text-sm font-medium text-gray-700 mb-1">Window Coverage</label>
          <select id="windows" value={windows} onChange={(e) => setWindows(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            <option value="few">Few small windows</option>
            <option value="average">Average windows</option>
            <option value="many">Many / large windows</option>
            <option value="floor-to-ceiling">Floor-to-ceiling glass</option>
          </select>
        </div>
        <div>
          <label htmlFor="occupants" className="block text-sm font-medium text-gray-700 mb-1">Number of Occupants</label>
          <input id="occupants" type="number" min={0} max={100} value={occupants} onChange={(e) => setOccupants(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Cooling Load</p>
            <p className="text-2xl font-bold text-brand-blue">{coolingBTU.toLocaleString()}</p>
            <p className="text-sm text-gray-500">BTU/hr</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Heating Load</p>
            <p className="text-2xl font-bold text-brand-blue">{heatingBTU.toLocaleString()}</p>
            <p className="text-sm text-gray-500">BTU/hr</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">System Size</p>
            <p className="text-2xl font-bold text-brand-orange">{coolingTons}</p>
            <p className="text-sm text-gray-500">Tons</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
