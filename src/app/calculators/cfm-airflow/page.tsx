"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

const ACH_GUIDELINES: { room: string; ach: number }[] = [
  { room: "Bathroom", ach: 8 },
  { room: "Kitchen", ach: 15 },
  { room: "Bedroom", ach: 6 },
  { room: "Living Room", ach: 6 },
  { room: "Office / Study", ach: 6 },
  { room: "Laundry Room", ach: 9 },
  { room: "Garage", ach: 6 },
  { room: "Basement", ach: 4 },
  { room: "Server Room", ach: 15 },
  { room: "Commercial Kitchen", ach: 30 },
];

const DUCT_SHAPES = ["round", "rectangular"] as const;
type DuctShape = (typeof DUCT_SHAPES)[number];

export default function CfmAirflowCalculator() {
  const [length, setLength] = useState<number>(20);
  const [width, setWidth] = useState<number>(15);
  const [height, setHeight] = useState<number>(8);
  const [ach, setAch] = useState<number>(8);
  const [ductShape, setDuctShape] = useState<DuctShape>("round");
  const [ductDiameter, setDuctDiameter] = useState<number>(8);
  const [ductWidth, setDuctWidth] = useState<number>(12);
  const [ductHeight, setDuctHeight] = useState<number>(8);

  // Calculations
  const roomVolumeCuFt = length * width * height;
  const requiredCfm = (roomVolumeCuFt * ach) / 60;

  // Duct cross-section area in sq ft
  let ductAreaSqFt: number;
  if (ductShape === "round") {
    const radiusFt = ductDiameter / 2 / 12;
    ductAreaSqFt = Math.PI * radiusFt * radiusFt;
  } else {
    ductAreaSqFt = (ductWidth / 12) * (ductHeight / 12);
  }

  // Velocity in feet per minute
  const ductVelocityFpm = ductAreaSqFt > 0 ? requiredCfm / ductAreaSqFt : 0;

  // Simplified static pressure estimate: ~0.08 in. w.g. per 100 ft equivalent length
  // For display we show velocity pressure: VP = (V / 4005)^2
  const velocityPressure = Math.pow(ductVelocityFpm / 4005, 2);

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <CalculatorLayout
      title="CFM & Airflow Calculator"
      description="Calculate the required airflow (CFM) for any room based on its size and recommended air changes per hour. Also determine duct velocity and velocity pressure for proper HVAC system sizing."
      trade="HVAC"
      howToUse="Enter the room dimensions in feet and select or type the desired air changes per hour (ACH). Then choose your duct shape and enter its dimensions to see the resulting duct velocity. Refer to the ACH guidelines table below for recommended values by room type."
      formula="Room Volume = L x W x H (cu ft). Required CFM = (Volume x ACH) / 60. Duct Area (round) = pi x (D/2)^2. Duct Velocity (FPM) = CFM / Duct Area (sq ft). Velocity Pressure = (V / 4005)^2 in inches of water gauge."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Room Dimensions */}
        <div>
          <label htmlFor="length" className={labelClass}>
            Room Length (ft)
          </label>
          <input
            id="length"
            type="number"
            min={1}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="width" className={labelClass}>
            Room Width (ft)
          </label>
          <input
            id="width"
            type="number"
            min={1}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="height" className={labelClass}>
            Ceiling Height (ft)
          </label>
          <input
            id="height"
            type="number"
            min={1}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* ACH */}
        <div>
          <label htmlFor="ach" className={labelClass}>
            Air Changes per Hour (ACH)
          </label>
          <input
            id="ach"
            type="number"
            min={1}
            max={60}
            value={ach}
            onChange={(e) => setAch(Number(e.target.value))}
            className={inputClass}
          />
        </div>

        {/* Duct Shape */}
        <div>
          <label htmlFor="ductShape" className={labelClass}>
            Duct Shape
          </label>
          <select
            id="ductShape"
            value={ductShape}
            onChange={(e) => setDuctShape(e.target.value as DuctShape)}
            className={inputClass}
          >
            <option value="round">Round</option>
            <option value="rectangular">Rectangular</option>
          </select>
        </div>

        {/* Duct Dimensions */}
        {ductShape === "round" ? (
          <div>
            <label htmlFor="ductDiameter" className={labelClass}>
              Duct Diameter (inches)
            </label>
            <input
              id="ductDiameter"
              type="number"
              min={1}
              value={ductDiameter}
              onChange={(e) => setDuctDiameter(Number(e.target.value))}
              className={inputClass}
            />
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="ductW" className={labelClass}>
                Duct Width (inches)
              </label>
              <input
                id="ductW"
                type="number"
                min={1}
                value={ductWidth}
                onChange={(e) => setDuctWidth(Number(e.target.value))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="ductH" className={labelClass}>
                Duct Height (inches)
              </label>
              <input
                id="ductH"
                type="number"
                min={1}
                value={ductHeight}
                onChange={(e) => setDuctHeight(Number(e.target.value))}
                className={inputClass}
              />
            </div>
          </>
        )}
      </div>

      {/* Results */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Results</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Room Volume</p>
            <p className="text-2xl font-bold text-brand-blue">
              {roomVolumeCuFt.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">cu ft</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Required CFM</p>
            <p className="text-2xl font-bold text-brand-orange">
              {requiredCfm.toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">cubic ft / min</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Duct Velocity</p>
            <p className="text-2xl font-bold text-brand-blue">
              {ductVelocityFpm.toFixed(0)}
            </p>
            <p className="text-sm text-gray-500">FPM</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Velocity Pressure</p>
            <p className="text-2xl font-bold text-brand-blue">
              {velocityPressure.toFixed(3)}
            </p>
            <p className="text-sm text-gray-500">in. w.g.</p>
          </div>
        </div>

        {/* Velocity check */}
        <div
          className={`rounded-lg p-4 border mb-6 ${
            ductVelocityFpm <= 900
              ? "bg-green-50 border-green-300"
              : ductVelocityFpm <= 1200
                ? "bg-yellow-50 border-yellow-300"
                : "bg-red-50 border-red-300"
          }`}
        >
          <p className="text-sm font-medium">
            {ductVelocityFpm <= 900
              ? "Duct velocity is within recommended residential range (under 900 FPM)."
              : ductVelocityFpm <= 1200
                ? "Duct velocity is moderately high. Consider a larger duct for quieter operation."
                : "Duct velocity exceeds 1200 FPM. Increase duct size to reduce noise and static pressure."}
          </p>
        </div>

        {/* ACH Guidelines */}
        <h3 className="text-lg font-bold text-brand-blue mb-3">
          ACH Guidelines by Room Type
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="px-3 py-2 text-left rounded-tl-lg">
                  Room Type
                </th>
                <th className="px-3 py-2 text-right rounded-tr-lg">
                  Recommended ACH
                </th>
              </tr>
            </thead>
            <tbody>
              {ACH_GUIDELINES.map((g, i) => (
                <tr
                  key={g.room}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-3 py-2">{g.room}</td>
                  <td className="px-3 py-2 text-right font-medium">
                    {g.ach}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CalculatorLayout>
  );
}
