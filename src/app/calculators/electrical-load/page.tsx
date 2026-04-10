"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

/* ------------------------------------------------------------------ */
/*  Helper: NEC Table 310.12 — Service Entrance Conductor Sizing      */
/* ------------------------------------------------------------------ */
function getServiceEntranceCable(amps: number): { size: string; material: string; conduit: string } {
  // Copper sizes per NEC Table 310.12 for 75°C-rated conductors
  if (amps <= 100) return { size: "#4 AWG", material: "Copper (or #2 AWG Aluminum)", conduit: '1-1/4"' };
  if (amps <= 110) return { size: "#3 AWG", material: "Copper (or #1 AWG Aluminum)", conduit: '1-1/4"' };
  if (amps <= 125) return { size: "#2 AWG", material: "Copper (or #1/0 AWG Aluminum)", conduit: '1-1/2"' };
  if (amps <= 150) return { size: "#1 AWG", material: "Copper (or #2/0 AWG Aluminum)", conduit: '1-1/2"' };
  if (amps <= 175) return { size: "#1/0 AWG", material: "Copper (or #3/0 AWG Aluminum)", conduit: '2"' };
  if (amps <= 200) return { size: "#2/0 AWG", material: "Copper (or #4/0 AWG Aluminum)", conduit: '2"' };
  if (amps <= 225) return { size: "#3/0 AWG", material: "Copper (or 250 kcmil Aluminum)", conduit: '2"' };
  if (amps <= 250) return { size: "#4/0 AWG", material: "Copper (or 300 kcmil Aluminum)", conduit: '2-1/2"' };
  if (amps <= 300) return { size: "250 kcmil", material: "Copper (or 350 kcmil Aluminum)", conduit: '2-1/2"' };
  if (amps <= 350) return { size: "350 kcmil", material: "Copper (or 500 kcmil Aluminum)", conduit: '3"' };
  if (amps <= 400) return { size: "400 kcmil", material: "Copper (or 600 kcmil Aluminum)", conduit: '3"' };
  return { size: "500+ kcmil", material: "Copper — consult engineer", conduit: '3-1/2"' };
}

/* ------------------------------------------------------------------ */
/*  Helper: Panel sizing with NEC 80% rule                            */
/* ------------------------------------------------------------------ */
interface PanelRecommendation {
  rating: number;
  maxContinuous: number;
  loadPercent: number;
  meetsCode: boolean;
  note: string;
}

const PANEL_SIZES = [100, 125, 150, 200, 400] as const;

function getPanelRecommendation(amps: number): PanelRecommendation {
  for (const rating of PANEL_SIZES) {
    const maxContinuous = rating * 0.8; // NEC 80% rule
    if (amps <= maxContinuous) {
      return {
        rating,
        maxContinuous,
        loadPercent: Math.round((amps / rating) * 100),
        meetsCode: true,
        note:
          rating <= 100
            ? "Minimum residential service. Limited room for future expansion."
            : rating <= 150
            ? "Adequate for most homes. Consider 200A if planning additions."
            : rating <= 200
            ? "Standard for modern homes. Good capacity for future loads like EV charging."
            : "Heavy-duty service. Required for very large homes or multiple high-draw systems.",
      };
    }
  }
  return {
    rating: 400,
    maxContinuous: 320,
    loadPercent: Math.round((amps / 400) * 100),
    meetsCode: amps <= 320,
    note: amps <= 320
      ? "Heavy-duty service. Required for very large homes or multiple high-draw systems."
      : "Load exceeds 400A panel capacity. Consult a licensed engineer for dual-panel or commercial service.",
  };
}

/* ------------------------------------------------------------------ */
/*  Helper: Circuit breakdown                                         */
/* ------------------------------------------------------------------ */
interface CircuitBreakdown {
  lighting15A: number;
  kitchen20A: number;
  laundry20A: number;
  bathroom20A: number;
  general20A: number;
  dedicatedCircuits: { name: string; breaker: string; wire: string }[];
}

function getCircuitBreakdown(
  sqft: number,
  smallAppCount: number,
  dryerW: number,
  rangeW: number,
  acW: number,
  waterHeaterW: number,
  evCharger: boolean,
  additionalW: number
): CircuitBreakdown {
  // Lighting: 1 circuit per ~600 sq ft
  const lighting15A = Math.max(2, Math.ceil(sqft / 600));

  // Kitchen small-appliance circuits (NEC minimum 2)
  const kitchen20A = Math.max(2, smallAppCount);

  // Laundry (NEC requires at least 1 dedicated 20A)
  const laundry20A = 1;

  // Bathrooms (NEC requires at least 1 dedicated 20A)
  const bathroom20A = Math.max(1, Math.ceil(sqft / 2000));

  // General-purpose receptacles: 1 per ~500 sq ft
  const general20A = Math.max(1, Math.ceil(sqft / 500));

  const dedicatedCircuits: { name: string; breaker: string; wire: string }[] = [];
  if (dryerW > 0) dedicatedCircuits.push({ name: "Electric Dryer", breaker: "30A / 240V", wire: "#10 AWG" });
  if (rangeW > 0) {
    const rangeBreaker = rangeW > 12000 ? "50A / 240V" : "40A / 240V";
    const rangeWire = rangeW > 12000 ? "#6 AWG" : "#8 AWG";
    dedicatedCircuits.push({ name: "Electric Range/Oven", breaker: rangeBreaker, wire: rangeWire });
  }
  if (acW > 0) {
    const acAmps = Math.ceil(acW / 240);
    let acBreaker = "20A / 240V";
    let acWire = "#12 AWG";
    if (acAmps > 16) { acBreaker = "30A / 240V"; acWire = "#10 AWG"; }
    if (acAmps > 24) { acBreaker = "40A / 240V"; acWire = "#8 AWG"; }
    if (acAmps > 32) { acBreaker = "50A / 240V"; acWire = "#6 AWG"; }
    dedicatedCircuits.push({ name: "A/C or Heat Pump", breaker: acBreaker, wire: acWire });
  }
  if (waterHeaterW > 0) {
    const whBreaker = waterHeaterW > 4500 ? "30A / 240V" : "20A / 240V";
    const whWire = waterHeaterW > 4500 ? "#10 AWG" : "#12 AWG";
    dedicatedCircuits.push({ name: "Water Heater", breaker: whBreaker, wire: whWire });
  }
  if (evCharger) dedicatedCircuits.push({ name: "EV Charger (Level 2)", breaker: "50A / 240V", wire: "#6 AWG" });
  if (additionalW > 0) {
    const addAmps = Math.ceil(additionalW / 240);
    let addBreaker = "20A / 240V";
    let addWire = "#12 AWG";
    if (addAmps > 16) { addBreaker = "30A / 240V"; addWire = "#10 AWG"; }
    if (addAmps > 24) { addBreaker = "40A / 240V"; addWire = "#8 AWG"; }
    if (addAmps > 32) { addBreaker = "50A / 240V"; addWire = "#6 AWG"; }
    dedicatedCircuits.push({ name: "Additional Load", breaker: addBreaker, wire: addWire });
  }

  return { lighting15A, kitchen20A, laundry20A, bathroom20A, general20A, dedicatedCircuits };
}

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */
export default function ElectricalLoadCalculator() {
  const [squareFootage, setSquareFootage] = useState<number>(2000);
  const [smallAppliances, setSmallAppliances] = useState<number>(2);
  const [laundry, setLaundry] = useState<number>(1500);
  const [acUnit, setAcUnit] = useState<number>(5000);
  const [waterHeater, setWaterHeater] = useState<number>(4500);
  const [dryer, setDryer] = useState<number>(5000);
  const [range, setRange] = useState<number>(12000);
  const [additionalLoads, setAdditionalLoads] = useState<number>(0);
  const [includeEV, setIncludeEV] = useState<boolean>(false);

  /* ---------- NEC Article 220 simplified calculation --------------- */
  const evChargerVA = includeEV ? 9600 : 0; // 40A × 240V = 9,600 VA

  const generalLighting = squareFootage * 3; // 3 VA per sq ft
  const smallApplianceCircuits = smallAppliances * 1500;
  const totalGeneral = generalLighting + smallApplianceCircuits + laundry;
  const first10k = Math.min(totalGeneral, 10000);
  const remainder = Math.max(totalGeneral - 10000, 0);
  const demandGeneral = first10k * 1.0 + remainder * 0.4;

  const acOrHeat = acUnit; // NEC says use the larger of AC or heat
  const applianceTotal = waterHeater + dryer + range + additionalLoads + evChargerVA;
  const totalVA = Math.round(demandGeneral + acOrHeat + applianceTotal);
  const totalAmps = Math.round(totalVA / 240);

  // Without EV (for comparison)
  const totalVAnoEV = Math.round(demandGeneral + acOrHeat + (waterHeater + dryer + range + additionalLoads));
  const totalAmpsNoEV = Math.round(totalVAnoEV / 240);

  /* ---------- Panel recommendation -------------------------------- */
  const panel = getPanelRecommendation(totalAmps);
  const panelNoEV = getPanelRecommendation(totalAmpsNoEV);

  /* ---------- Service entrance cable ------------------------------- */
  const serviceCable = getServiceEntranceCable(panel.rating);

  /* ---------- Circuit breakdown ------------------------------------ */
  const circuits = getCircuitBreakdown(
    squareFootage, smallAppliances, dryer, range, acUnit, waterHeater, includeEV, additionalLoads
  );
  const totalCircuits =
    circuits.lighting15A + circuits.kitchen20A + circuits.laundry20A +
    circuits.bathroom20A + circuits.general20A + circuits.dedicatedCircuits.length;

  /* ---------- Load-percent bar color ------------------------------- */
  const loadColor =
    panel.loadPercent <= 60 ? "bg-green-500" :
    panel.loadPercent <= 75 ? "bg-yellow-500" :
    panel.loadPercent <= 80 ? "bg-orange-500" : "bg-red-500";

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";

  return (
    <CalculatorLayout
      title="Electrical Load Calculator"
      description="Calculate the total electrical demand for a residential service using NEC Article 220 standard calculation methods. Determine the right panel size for your project."
      trade="Electrical"
      howToUse="Enter the home's square footage for the general lighting load (3 VA per sq ft per NEC). Add the number of small appliance circuits (minimum 2 per NEC), laundry circuit wattage, and the wattage of major appliances. The calculator applies NEC demand factors to determine total service load and recommends a panel size."
      formula="General Lighting = Sq Ft × 3 VA. First 10,000 VA at 100%, remainder at 40%. Add AC/Heat (larger of the two at 100%), plus appliances. Total Amps = Total VA / 240V."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
          <input id="sqft" type="number" min={100} max={50000} value={squareFootage} onChange={(e) => setSquareFootage(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="smallAppliances" className="block text-sm font-medium text-gray-700 mb-1">Small Appliance Circuits</label>
          <input id="smallAppliances" type="number" min={2} max={20} value={smallAppliances} onChange={(e) => setSmallAppliances(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="laundry" className="block text-sm font-medium text-gray-700 mb-1">Laundry Circuit (watts)</label>
          <input id="laundry" type="number" min={0} max={10000} value={laundry} onChange={(e) => setLaundry(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="ac" className="block text-sm font-medium text-gray-700 mb-1">A/C or Heat Pump (watts)</label>
          <input id="ac" type="number" min={0} max={50000} value={acUnit} onChange={(e) => setAcUnit(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="waterHeater" className="block text-sm font-medium text-gray-700 mb-1">Water Heater (watts)</label>
          <input id="waterHeater" type="number" min={0} max={20000} value={waterHeater} onChange={(e) => setWaterHeater(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="dryer" className="block text-sm font-medium text-gray-700 mb-1">Electric Dryer (watts)</label>
          <input id="dryer" type="number" min={0} max={10000} value={dryer} onChange={(e) => setDryer(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="range" className="block text-sm font-medium text-gray-700 mb-1">Electric Range/Oven (watts)</label>
          <input id="range" type="number" min={0} max={20000} value={range} onChange={(e) => setRange(Number(e.target.value))}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">Additional Loads (watts)</label>
          <input id="additional" type="number" min={0} max={100000} value={additionalLoads} onChange={(e) => setAdditionalLoads(Number(e.target.value))}
            className={inputClass} />
          <p className="text-xs text-gray-500 mt-1">Hot tub, pool pump, workshop equipment, etc.</p>
        </div>
      </div>

      {/* EV Charger Toggle */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={includeEV}
            onChange={(e) => setIncludeEV(e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
          />
          <div>
            <span className="font-semibold text-brand-blue">Planning to add an EV charger?</span>
            <p className="text-sm text-gray-600 mt-0.5">
              Adds a 40A / 240V Level 2 charger (9,600W) to the load calculation. This is the most common home EV charging setup, delivering approximately 30&ndash;40 miles of range per hour of charging.
            </p>
          </div>
        </label>
      </div>

      {/* ===== RESULTS ===== */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Total Demand</p>
            <p className="text-2xl font-bold text-brand-blue">{totalVA.toLocaleString()}</p>
            <p className="text-sm text-gray-500">VA</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Service Amps</p>
            <p className="text-2xl font-bold text-brand-blue">{totalAmps}</p>
            <p className="text-sm text-gray-500">Amps @ 240V</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Recommended Panel</p>
            <p className="text-2xl font-bold text-brand-orange">{panel.rating}A</p>
            <p className="text-sm text-gray-500">Service Panel</p>
          </div>
        </div>
      </div>

      {/* ===== PANEL SIZE RECOMMENDATION ===== */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Panel Size Analysis</h2>

        {/* Load bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Panel Load: {totalAmps}A of {panel.rating}A</span>
            <span className={panel.loadPercent > 80 ? "text-red-600 font-semibold" : ""}>{panel.loadPercent}% loaded</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
            <div className={`${loadColor} h-4 rounded-full transition-all duration-500`} style={{ width: `${Math.min(panel.loadPercent, 100)}%` }} />
            {/* 80% rule marker */}
            <div className="absolute top-0 left-[80%] w-0.5 h-4 bg-red-700" title="NEC 80% maximum continuous load" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Red line = NEC 80% continuous load limit. Panels should not be loaded beyond 80% of their rating for continuous loads.</p>
        </div>

        {/* Panel options table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">Panel Rating</th>
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">80% Max Load</th>
                <th className="text-left py-2 pr-4 font-semibold text-gray-700">Your Load</th>
                <th className="text-left py-2 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {PANEL_SIZES.map((size) => {
                const max80 = size * 0.8;
                const pct = Math.round((totalAmps / size) * 100);
                const ok = totalAmps <= max80;
                const isRecommended = size === panel.rating;
                return (
                  <tr key={size} className={`border-b border-gray-200 ${isRecommended ? "bg-green-50" : ""}`}>
                    <td className="py-2 pr-4 font-medium">{size}A</td>
                    <td className="py-2 pr-4">{max80}A</td>
                    <td className="py-2 pr-4">{pct}%</td>
                    <td className="py-2">
                      {isRecommended ? (
                        <span className="inline-flex items-center gap-1 text-green-700 font-semibold">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          Recommended
                        </span>
                      ) : ok ? (
                        <span className="text-gray-500">Acceptable</span>
                      ) : (
                        <span className="text-red-600">Too small</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-3">{panel.note}</p>
        {!panel.meetsCode && (
          <p className="text-sm text-red-600 font-semibold mt-2">
            Warning: Your calculated load exceeds the 80% continuous rating of a {panel.rating}A panel. Consult a licensed electrician or engineer.
          </p>
        )}
      </div>

      {/* ===== EV CHARGER IMPACT ===== */}
      {includeEV && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-brand-blue mb-4">EV Charger Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600 font-semibold mb-2">Without EV Charger</p>
              <p className="text-lg font-bold text-brand-blue">{totalAmpsNoEV}A <span className="text-sm font-normal text-gray-500">({totalVAnoEV.toLocaleString()} VA)</span></p>
              <p className="text-sm text-gray-600">Recommended panel: <span className="font-semibold">{panelNoEV.rating}A</span></p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600 font-semibold mb-2">With EV Charger (+40A)</p>
              <p className="text-lg font-bold text-brand-blue">{totalAmps}A <span className="text-sm font-normal text-gray-500">({totalVA.toLocaleString()} VA)</span></p>
              <p className="text-sm text-gray-600">Recommended panel: <span className="font-semibold">{panel.rating}A</span></p>
            </div>
          </div>
          {panel.rating > panelNoEV.rating && (
            <p className="text-sm text-orange-700 font-semibold mt-3">
              Adding an EV charger requires upgrading from a {panelNoEV.rating}A to a {panel.rating}A panel.
            </p>
          )}
          {panel.rating === panelNoEV.rating && (
            <p className="text-sm text-green-700 mt-3">
              Your current {panel.rating}A panel recommendation can accommodate the EV charger without an upgrade.
            </p>
          )}
          <p className="text-xs text-gray-500 mt-2">
            Based on a Level 2, 240V / 40A charger (9.6 kW). NEC 625.42 requires the circuit breaker to be rated at 125% of the charger&apos;s maximum current, so a 40A charger needs a 50A breaker.
          </p>
        </div>
      )}

      {/* ===== CIRCUIT BREAKDOWN ===== */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Suggested Circuit Layout</h2>
        <p className="text-sm text-gray-600 mb-4">Based on NEC requirements for a {squareFootage.toLocaleString()} sq ft home. Total estimated circuits: <span className="font-semibold">{totalCircuits}</span>.</p>

        {/* General circuits */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">General Purpose Circuits</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Circuit Type</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Qty</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Breaker</th>
                  <th className="text-left py-2 font-semibold text-gray-700">Wire Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Lighting Circuits</td>
                  <td className="py-2 pr-4">{circuits.lighting15A}</td>
                  <td className="py-2 pr-4">15A / 120V</td>
                  <td className="py-2">#14 AWG</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Kitchen Small Appliance</td>
                  <td className="py-2 pr-4">{circuits.kitchen20A}</td>
                  <td className="py-2 pr-4">20A / 120V</td>
                  <td className="py-2">#12 AWG</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Laundry</td>
                  <td className="py-2 pr-4">{circuits.laundry20A}</td>
                  <td className="py-2 pr-4">20A / 120V</td>
                  <td className="py-2">#12 AWG</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">Bathroom</td>
                  <td className="py-2 pr-4">{circuits.bathroom20A}</td>
                  <td className="py-2 pr-4">20A / 120V</td>
                  <td className="py-2">#12 AWG</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">General Receptacles</td>
                  <td className="py-2 pr-4">{circuits.general20A}</td>
                  <td className="py-2 pr-4">20A / 120V</td>
                  <td className="py-2">#12 AWG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dedicated circuits */}
        {circuits.dedicatedCircuits.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Dedicated Circuits (240V)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">Appliance</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700">Breaker</th>
                    <th className="text-left py-2 font-semibold text-gray-700">Wire Size</th>
                  </tr>
                </thead>
                <tbody>
                  {circuits.dedicatedCircuits.map((c, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="py-2 pr-4">{c.name}</td>
                      <td className="py-2 pr-4">{c.breaker}</td>
                      <td className="py-2">{c.wire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-3">
          Circuit counts are estimates based on NEC minimums and industry best practice. Actual layout depends on room count, local code amendments, and inspector requirements. Always verify with a licensed electrician.
        </p>
      </div>

      {/* ===== SERVICE ENTRANCE SIZING ===== */}
      <div className="mt-6 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Service Entrance Sizing</h2>
        <p className="text-sm text-gray-600 mb-4">Based on your {panel.rating}A panel, per NEC Table 310.12 for 75°C-rated conductors.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Conductor Size</p>
            <p className="text-lg font-bold text-brand-blue">{serviceCable.size}</p>
            <p className="text-xs text-gray-500 mt-1">{serviceCable.material}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Minimum Conduit</p>
            <p className="text-lg font-bold text-brand-blue">{serviceCable.conduit}</p>
            <p className="text-xs text-gray-500 mt-1">Trade size (EMT/PVC)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-600">Service Rating</p>
            <p className="text-lg font-bold text-brand-blue">{panel.rating}A</p>
            <p className="text-xs text-gray-500 mt-1">240V single-phase</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Conductor sizes are for copper at 75°C rating. Aluminum alternatives shown in parentheses. Actual sizing may vary based on distance from meter to panel (voltage drop), ambient temperature, and conduit fill. Consult NEC Chapter 3 and your local AHJ for final requirements.
        </p>
      </div>

      {/* ===== PRINT BUTTON ===== */}
      <div className="mt-6 text-center print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Results
        </button>
      </div>
    </CalculatorLayout>
  );
}
