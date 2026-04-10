"use client";

import { useState } from "react";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ── IECC Climate Zone Data ── */
const climateZones = [
  { zone: "1A", label: "Zone 1A — Miami, Key West (Very Hot–Humid)", coolingBase: 25, heatingBase: 10 },
  { zone: "1B", label: "Zone 1B — Riyadh-type (Very Hot–Dry)", coolingBase: 24, heatingBase: 10 },
  { zone: "2A", label: "Zone 2A — Houston, New Orleans, Tampa (Hot–Humid)", coolingBase: 24, heatingBase: 18 },
  { zone: "2B", label: "Zone 2B — Phoenix, Las Vegas (Hot–Dry)", coolingBase: 23, heatingBase: 16 },
  { zone: "3A", label: "Zone 3A — Atlanta, Dallas, Memphis (Warm–Humid)", coolingBase: 22, heatingBase: 25 },
  { zone: "3B", label: "Zone 3B — Los Angeles, Albuquerque (Warm–Dry)", coolingBase: 20, heatingBase: 22 },
  { zone: "3C", label: "Zone 3C — San Francisco, Santa Barbara (Warm–Marine)", coolingBase: 16, heatingBase: 20 },
  { zone: "4A", label: "Zone 4A — Baltimore, St. Louis, Nashville (Mixed–Humid)", coolingBase: 20, heatingBase: 30 },
  { zone: "4B", label: "Zone 4B — Albuquerque, Amarillo (Mixed–Dry)", coolingBase: 18, heatingBase: 28 },
  { zone: "4C", label: "Zone 4C — Seattle, Portland (Mixed–Marine)", coolingBase: 14, heatingBase: 28 },
  { zone: "5A", label: "Zone 5A — Chicago, Boston, Pittsburgh (Cool–Humid)", coolingBase: 18, heatingBase: 35 },
  { zone: "5B", label: "Zone 5B — Denver, Salt Lake City (Cool–Dry)", coolingBase: 16, heatingBase: 32 },
  { zone: "6A", label: "Zone 6A — Minneapolis, Milwaukee (Cold–Humid)", coolingBase: 16, heatingBase: 40 },
  { zone: "6B", label: "Zone 6B — Helena, Burlington (Cold–Dry)", coolingBase: 14, heatingBase: 38 },
  { zone: "7",  label: "Zone 7 — Duluth, Fargo, Anchorage (Very Cold)", coolingBase: 12, heatingBase: 45 },
  { zone: "8",  label: "Zone 8 — Fairbanks, Barrow (Subarctic)", coolingBase: 10, heatingBase: 50 },
];

const insulationFactors: Record<string, { label: string; factor: number }> = {
  poor:      { label: "Poor (old/no insulation)", factor: 1.3 },
  average:   { label: "Average (standard fiberglass)", factor: 1.0 },
  good:      { label: "Good (upgraded insulation)", factor: 0.85 },
  excellent: { label: "Excellent (spray foam / new build)", factor: 0.7 },
};

const windowFactors: Record<string, { label: string; factor: number }> = {
  few:              { label: "Few small windows", factor: 0.9 },
  average:          { label: "Average windows", factor: 1.0 },
  many:             { label: "Many / large windows", factor: 1.15 },
  "floor-to-ceiling": { label: "Floor-to-ceiling glass", factor: 1.3 },
};

/* ── Duct sizing reference table ── */
function getTrunkDuctSize(cfm: number): string {
  if (cfm <= 400) return "10\" x 8\" or 12\" round";
  if (cfm <= 600) return "12\" x 8\" or 14\" round";
  if (cfm <= 800) return "14\" x 8\" or 16\" round";
  if (cfm <= 1000) return "16\" x 10\" or 18\" round";
  if (cfm <= 1400) return "20\" x 10\" or 20\" round";
  if (cfm <= 1800) return "22\" x 12\" or 22\" round";
  if (cfm <= 2200) return "24\" x 12\" or 24\" round";
  return "26\" x 14\" or 26\" round";
}

function getSupplyRunSize(cfmPerRun: number): string {
  if (cfmPerRun <= 80) return "5\" round";
  if (cfmPerRun <= 110) return "6\" round";
  if (cfmPerRun <= 160) return "7\" round";
  if (cfmPerRun <= 210) return "8\" round";
  return "10\" round";
}

export default function HVACLoadCalculator() {
  /* ── Existing inputs ── */
  const [squareFootage, setSquareFootage] = useState<number>(1500);
  const [ceilingHeight, setCeilingHeight] = useState<number>(8);
  const [insulation, setInsulation] = useState<string>("average");
  const [windows, setWindows] = useState<string>("average");
  const [occupants, setOccupants] = useState<number>(4);

  /* ── New: IECC climate zone ── */
  const [climateZoneIdx, setClimateZoneIdx] = useState<number>(7); // default 4A

  /* ── New: Sun exposure ── */
  const [sunExposure, setSunExposure] = useState<string>("average");
  const sunFactor: Record<string, number> = { shaded: 0.9, average: 1.0, full: 1.1 };

  /* ── New: Energy cost inputs ── */
  const [electricRate, setElectricRate] = useState<number>(0.16);
  const [gasRate, setGasRate] = useState<number>(1.50);

  /* ── Styling constants ── */
  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  /* ── Calculation ── */
  const zone = climateZones[climateZoneIdx];
  const heightFactor = ceilingHeight > 8 ? ceilingHeight / 8 : 1;
  const insFactor = insulationFactors[insulation].factor;
  const winFactor = windowFactors[windows].factor;
  const sun = sunFactor[sunExposure];

  const coolingBTU = Math.round(
    squareFootage * zone.coolingBase * heightFactor * insFactor * winFactor * sun + occupants * 600
  );
  const heatingBTU = Math.round(
    squareFootage * zone.heatingBase * heightFactor * insFactor * winFactor + occupants * 400
  );

  /* ── Equipment sizing ── */
  const coolingTonsRaw = coolingBTU / 12000;
  const coolingTons = Math.ceil(coolingTonsRaw * 2) / 2; // round up to nearest 0.5
  const coolingTonsDisplay = coolingTons.toFixed(1);

  const heatingOutputBTU = Math.ceil(heatingBTU / 10000) * 10000; // round up to nearest 10k
  const heatPumpTons = Math.ceil((heatingBTU / 12000) * 2) / 2;

  /* ── Ductwork sizing ── */
  const totalCFM = Math.round(coolingBTU / 20);
  const supplyRuns = Math.max(Math.round(squareFootage / 150), 4);
  const cfmPerRun = Math.round(totalCFM / supplyRuns);
  const trunkSize = getTrunkDuctSize(totalCFM);
  const branchSize = getSupplyRunSize(cfmPerRun);

  /* ── Energy cost estimates ── */
  // Cooling: AC draws ~1 kW per ton. Summer ~8hrs/day, ~120 days
  const coolingKwhMonth = coolingTons * 1.0 * 8 * 30; // kWh per summer month
  const monthlyCoolingCost = coolingKwhMonth * electricRate;

  // Heating (gas furnace): BTU output / 100,000 BTU per therm / 0.95 AFUE * hours * days
  const heatingThermsMonth = (heatingOutputBTU / 100000 / 0.95) * 8 * 30;
  const monthlyHeatingCost = heatingThermsMonth * gasRate;

  // Heat pump heating cost (electric): COP ~2.5
  const heatPumpKwhMonth = (heatingBTU / 3412 / 2.5) * 8 * 30;
  const monthlyHeatPumpCost = heatPumpKwhMonth * electricRate;

  return (
    <CalculatorLayout
      title="HVAC Load Calculator"
      description="Estimate the heating and cooling capacity needed for a space. This simplified Manual J calculation uses IECC climate zones for accurate regional BTU estimates, plus equipment sizing, ductwork, and energy cost projections."
      trade="HVAC"
      howToUse="Select your IECC climate zone (or find your nearest city), enter the square footage, ceiling height, and building details. The calculator uses zone-specific BTU/sq ft multipliers for both heating and cooling loads. Results include equipment sizing recommendations, ductwork estimates, and projected monthly energy costs."
      formula="Cooling BTU = Sq Ft x Zone Cooling Base x Height Factor x Insulation Factor x Window Factor x Sun Factor + (Occupants x 600). Heating BTU = Sq Ft x Zone Heating Base x Height Factor x Insulation Factor x Window Factor + (Occupants x 400). AC Tonnage = Cooling BTU / 12,000 (rounded up to nearest 0.5 ton). CFM = Cooling BTU / 20."
    >
      {/* ── Input Section ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Climate Zone Selector */}
        <div className="sm:col-span-2">
          <label htmlFor="climateZone" className={labelClass}>
            IECC Climate Zone
          </label>
          <select
            id="climateZone"
            value={climateZoneIdx}
            onChange={(e) => setClimateZoneIdx(Number(e.target.value))}
            className={inputClass}
          >
            {climateZones.map((z, i) => (
              <option key={z.zone} value={i}>
                {z.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Cooling base: {zone.coolingBase} BTU/sq ft &nbsp;|&nbsp; Heating base: {zone.heatingBase} BTU/sq ft
          </p>
        </div>

        <div>
          <label htmlFor="sqft" className={labelClass}>Square Footage</label>
          <input
            id="sqft"
            type="number"
            min={100}
            max={100000}
            value={squareFootage}
            onChange={(e) => setSquareFootage(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="ceiling" className={labelClass}>Ceiling Height (ft)</label>
          <input
            id="ceiling"
            type="number"
            min={7}
            max={30}
            value={ceilingHeight}
            onChange={(e) => setCeilingHeight(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="insulation" className={labelClass}>Insulation Quality</label>
          <select id="insulation" value={insulation} onChange={(e) => setInsulation(e.target.value)} className={inputClass}>
            {Object.entries(insulationFactors).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="windows" className={labelClass}>Window Coverage</label>
          <select id="windows" value={windows} onChange={(e) => setWindows(e.target.value)} className={inputClass}>
            {Object.entries(windowFactors).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sunExposure" className={labelClass}>Sun Exposure</label>
          <select id="sunExposure" value={sunExposure} onChange={(e) => setSunExposure(e.target.value)} className={inputClass}>
            <option value="shaded">Mostly shaded (trees, north-facing)</option>
            <option value="average">Average sun exposure</option>
            <option value="full">Full sun (south/west-facing, no shade)</option>
          </select>
        </div>
        <div>
          <label htmlFor="occupants" className={labelClass}>Number of Occupants</label>
          <input
            id="occupants"
            type="number"
            min={0}
            max={100}
            value={occupants}
            onChange={(e) => setOccupants(Number(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      {/* ── Primary Results ── */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6 print:bg-white print:border print:border-gray-300">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-blue">Load Calculation Results</h2>
          <button
            onClick={() => window.print()}
            className="print:hidden bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            Print Results
          </button>
        </div>
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
            <p className="text-sm text-gray-600">Total Airflow Needed</p>
            <p className="text-2xl font-bold text-brand-orange">{totalCFM.toLocaleString()}</p>
            <p className="text-sm text-gray-500">CFM</p>
          </div>
        </div>
      </div>

      {/* ── Equipment Sizing Recommendations ── */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6 print:bg-white print:border print:border-gray-300">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Equipment Sizing Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Air Conditioner</p>
            <p className="text-2xl font-bold text-brand-blue">{coolingTonsDisplay} Ton</p>
            <p className="text-sm text-gray-500">{(coolingTons * 12000).toLocaleString()} BTU/hr rated</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gas Furnace</p>
            <p className="text-2xl font-bold text-brand-blue">{heatingOutputBTU.toLocaleString()}</p>
            <p className="text-sm text-gray-500">BTU/hr output</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Heat Pump</p>
            <p className="text-2xl font-bold text-brand-orange">{heatPumpTons.toFixed(1)} Ton</p>
            <p className="text-sm text-gray-500">Handles heating &amp; cooling</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> Do not oversize equipment. An oversized AC or heat pump will short-cycle,
            wasting energy and failing to dehumidify properly. Always select the smallest unit that meets the
            calculated load. A professional Manual J calculation is recommended for final sizing.
          </p>
        </div>
      </div>

      {/* ── Ductwork Sizing Estimate ── */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6 print:bg-white print:border print:border-gray-300">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Ductwork Sizing Estimate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total CFM</p>
            <p className="text-xl font-bold text-brand-blue">{totalCFM.toLocaleString()}</p>
            <p className="text-xs text-gray-500">Cooling BTU / 20</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Main Trunk Duct</p>
            <p className="text-lg font-bold text-brand-blue">{trunkSize}</p>
            <p className="text-xs text-gray-500">Rectangular or round</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Supply Runs</p>
            <p className="text-xl font-bold text-brand-orange">{supplyRuns}</p>
            <p className="text-xs text-gray-500">~{cfmPerRun} CFM each</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Branch Duct Size</p>
            <p className="text-lg font-bold text-brand-blue">{branchSize}</p>
            <p className="text-xs text-gray-500">Per supply run</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          For detailed airflow calculations per room, use our{" "}
          <Link href="/calculators/cfm-airflow/" className="text-brand-blue underline hover:text-brand-orange">
            CFM &amp; Airflow Calculator
          </Link>.
        </p>
      </div>

      {/* ── Energy Cost Estimate ── */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6 print:bg-white print:border print:border-gray-300">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Estimated Monthly Energy Cost</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="electricRate" className={labelClass}>Electric Rate ($/kWh)</label>
            <input
              id="electricRate"
              type="number"
              min={0.01}
              max={1.0}
              step={0.01}
              value={electricRate}
              onChange={(e) => setElectricRate(Number(e.target.value))}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="gasRate" className={labelClass}>Gas Rate ($/therm)</label>
            <input
              id="gasRate"
              type="number"
              min={0.10}
              max={10.0}
              step={0.01}
              value={gasRate}
              onChange={(e) => setGasRate(Number(e.target.value))}
              className={inputClass}
            />
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-4">
          Estimates assume 8 hrs/day average run time during peak season. Actual costs vary with usage patterns,
          equipment efficiency (SEER/AFUE), and local utility rates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">AC Cooling</p>
            <p className="text-2xl font-bold text-brand-blue">${monthlyCoolingCost.toFixed(0)}</p>
            <p className="text-xs text-gray-500">/month (summer)</p>
            <p className="text-xs text-gray-400">{coolingKwhMonth.toFixed(0)} kWh</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gas Furnace Heating</p>
            <p className="text-2xl font-bold text-brand-blue">${monthlyHeatingCost.toFixed(0)}</p>
            <p className="text-xs text-gray-500">/month (winter)</p>
            <p className="text-xs text-gray-400">{heatingThermsMonth.toFixed(1)} therms</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Heat Pump Heating</p>
            <p className="text-2xl font-bold text-brand-orange">${monthlyHeatPumpCost.toFixed(0)}</p>
            <p className="text-xs text-gray-500">/month (winter, electric)</p>
            <p className="text-xs text-gray-400">{heatPumpKwhMonth.toFixed(0)} kWh · COP 2.5</p>
          </div>
        </div>
      </div>

      {/* ── Summary for Print ── */}
      <div className="mt-6 hidden print:block border border-gray-300 rounded-lg p-4">
        <h3 className="font-bold text-brand-blue mb-2">Calculation Summary</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Climate Zone:</strong> {zone.label}</li>
          <li><strong>Square Footage:</strong> {squareFootage.toLocaleString()} sq ft</li>
          <li><strong>Ceiling Height:</strong> {ceilingHeight} ft</li>
          <li><strong>Insulation:</strong> {insulationFactors[insulation].label}</li>
          <li><strong>Windows:</strong> {windowFactors[windows].label}</li>
          <li><strong>Sun Exposure:</strong> {sunExposure}</li>
          <li><strong>Occupants:</strong> {occupants}</li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
