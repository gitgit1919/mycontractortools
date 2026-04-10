"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

interface CrewMember {
  id: number;
  role: string;
  wage: number;
}

const startingCrew: CrewMember[] = [
  { id: 1, role: "Lead", wage: 35 },
  { id: 2, role: "Tech", wage: 25 },
  { id: 3, role: "Helper", wage: 18 },
];

export default function CrewDayCostCalculator() {
  const [crew, setCrew] = useState<CrewMember[]>(startingCrew);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [payrollTaxPct, setPayrollTaxPct] = useState<number>(10);
  const [workersCompPct, setWorkersCompPct] = useState<number>(12);
  const [benefitsPct, setBenefitsPct] = useState<number>(8);
  const [vehicleCost, setVehicleCost] = useState<number>(50);
  const [fuelCost, setFuelCost] = useState<number>(40);
  const [toolCost, setToolCost] = useState<number>(20);
  const [monthlyOverhead, setMonthlyOverhead] = useState<number>(4000);
  const [billableDaysPerMonth, setBillableDaysPerMonth] = useState<number>(18);

  const updateCrewMember = (id: number, field: "role" | "wage", value: string | number) => {
    setCrew((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const addCrewMember = () => {
    const nextId = Math.max(...crew.map((m) => m.id), 0) + 1;
    setCrew([...crew, { id: nextId, role: "Tech", wage: 25 }]);
  };

  const removeCrewMember = (id: number) => {
    setCrew((prev) => (prev.length > 1 ? prev.filter((m) => m.id !== id) : prev));
  };

  const result = useMemo(() => {
    const burdenMultiplier =
      1 + (payrollTaxPct + workersCompPct + benefitsPct) / 100;

    // Per-member breakdown
    const members = crew.map((m) => {
      const baseDay = m.wage * hoursPerDay;
      const burdenedDay = baseDay * burdenMultiplier;
      const burden = burdenedDay - baseDay;
      return { ...m, baseDay, burdenedDay, burden };
    });

    const totalBaseLabor = members.reduce((sum, m) => sum + m.baseDay, 0);
    const totalBurdenedLabor = members.reduce((sum, m) => sum + m.burdenedDay, 0);
    const totalLaborBurden = totalBurdenedLabor - totalBaseLabor;

    const dailyVehicle = vehicleCost + fuelCost + toolCost;
    const dailyOverheadAllocation =
      billableDaysPerMonth > 0 ? monthlyOverhead / billableDaysPerMonth : 0;

    const totalDailyCost = totalBurdenedLabor + dailyVehicle + dailyOverheadAllocation;
    const totalCrewHours = crew.length * hoursPerDay;
    const breakEvenHourly = totalCrewHours > 0 ? totalDailyCost / totalCrewHours : 0;

    // Common bid markups for reference
    const bidAt30 = totalDailyCost / (1 - 0.30);
    const bidAt40 = totalDailyCost / (1 - 0.40);
    const bidAt50 = totalDailyCost / (1 - 0.50);

    return {
      members,
      totalBaseLabor,
      totalBurdenedLabor,
      totalLaborBurden,
      dailyVehicle,
      dailyOverheadAllocation,
      totalDailyCost,
      totalCrewHours,
      breakEvenHourly,
      bidAt30,
      bidAt40,
      bidAt50,
      burdenMultiplier,
    };
  }, [
    crew,
    hoursPerDay,
    payrollTaxPct,
    workersCompPct,
    benefitsPct,
    vehicleCost,
    fuelCost,
    toolCost,
    monthlyOverhead,
    billableDaysPerMonth,
  ]);

  return (
    <CalculatorLayout
      title="Crew Day Cost Calculator"
      description="Calculate the true daily cost of putting a crew on a job. Includes burdened labor (payroll tax, workers comp, benefits), vehicle, fuel, tools, and overhead. Use this to know your real break-even before you bid."
      trade="Business"
      howToUse="Add each crew member with their base wage, then dial in burden percentages: payroll tax (8&ndash;10%), workers comp (5&ndash;25% depending on trade), and benefits (0&ndash;15%). Add vehicle, fuel, tool, and overhead allocation. The result is your true break-even day rate &mdash; the minimum you can bid without losing money."
      formula="Burdened Labor = Wage × Hours × (1 + Payroll Tax% + Workers Comp% + Benefits%). Daily Cost = Total Burdened Labor + Vehicle + Fuel + Tools + (Monthly Overhead / Billable Days). Break-Even Hourly = Daily Cost / (Crew Size × Hours)."
    >
      {/* CREW BUILDER */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">Crew on the Job</p>
          <button
            type="button"
            onClick={addCrewMember}
            className="text-sm bg-brand-orange text-white px-3 py-1 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            + Add Crew Member
          </button>
        </div>
        <div className="space-y-2">
          {crew.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-12 gap-2 items-center bg-gray-50 rounded-lg p-2"
            >
              <input
                type="text"
                value={member.role}
                onChange={(e) => updateCrewMember(member.id, "role", e.target.value)}
                className="col-span-5 sm:col-span-4 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                placeholder="Role (e.g. Lead, Tech)"
              />
              <div className="col-span-5 sm:col-span-7 flex items-center gap-2">
                <span className="text-xs text-gray-500">$</span>
                <input
                  type="number"
                  min={0}
                  step={0.5}
                  value={member.wage}
                  onChange={(e) =>
                    updateCrewMember(member.id, "wage", Number(e.target.value))
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
                <span className="text-xs text-gray-500">/hr</span>
              </div>
              <button
                type="button"
                onClick={() => removeCrewMember(member.id)}
                className="col-span-2 sm:col-span-1 text-red-500 text-sm font-bold hover:text-red-700"
                aria-label="Remove crew member"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div>
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">Hours On Site / Day</label>
          <input id="hours" type="number" min={1} max={16} step={0.5} value={hoursPerDay} onChange={(e) => setHoursPerDay(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="billable" className="block text-sm font-medium text-gray-700 mb-1">Billable Field Days / Month</label>
          <input id="billable" type="number" min={1} max={26} value={billableDaysPerMonth} onChange={(e) => setBillableDaysPerMonth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">For overhead allocation</p>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">Labor Burden</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="payroll" className="block text-sm font-medium text-gray-700 mb-1">Payroll Tax (%)</label>
            <input id="payroll" type="number" min={0} max={20} step={0.5} value={payrollTaxPct} onChange={(e) => setPayrollTaxPct(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">FICA + FUTA + SUTA</p>
          </div>
          <div>
            <label htmlFor="comp" className="block text-sm font-medium text-gray-700 mb-1">Workers Comp (%)</label>
            <input id="comp" type="number" min={0} max={40} step={0.5} value={workersCompPct} onChange={(e) => setWorkersCompPct(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">5-25% by trade</p>
          </div>
          <div>
            <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">Benefits / PTO (%)</label>
            <input id="benefits" type="number" min={0} max={30} step={0.5} value={benefitsPct} onChange={(e) => setBenefitsPct(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">Health, retirement, PTO</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">Daily Job Costs (per day, not per crew member)</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle ($/day)</label>
            <input id="vehicle" type="number" min={0} step={5} value={vehicleCost} onChange={(e) => setVehicleCost(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">Truck/van wear, insurance, payment</p>
          </div>
          <div>
            <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">Fuel ($/day)</label>
            <input id="fuel" type="number" min={0} step={5} value={fuelCost} onChange={(e) => setFuelCost(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="tools" className="block text-sm font-medium text-gray-700 mb-1">Tools / Consumables ($/day)</label>
            <input id="tools" type="number" min={0} step={5} value={toolCost} onChange={(e) => setToolCost(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">Blades, fasteners, depreciation</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <label htmlFor="overhead" className="block text-sm font-medium text-gray-700 mb-1">Monthly Overhead ($)</label>
        <input id="overhead" type="number" min={0} step={100} value={monthlyOverhead} onChange={(e) => setMonthlyOverhead(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        <p className="text-xs text-gray-500 mt-1">
          Office rent, software, marketing, owner salary, insurance &mdash; not job-site costs.
          We&apos;ll spread this across your billable field days.
        </p>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Daily Cost Breakdown</h2>

        {/* Per-member breakdown */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
          <h3 className="text-sm font-bold text-brand-blue mb-3">Burdened Labor (per crew member)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600 text-xs">
                  <th className="pb-2">Role</th>
                  <th className="pb-2 text-right">Wage</th>
                  <th className="pb-2 text-right">Base Day</th>
                  <th className="pb-2 text-right">+ Burden</th>
                  <th className="pb-2 text-right">Burdened Day</th>
                </tr>
              </thead>
              <tbody>
                {result.members.map((m) => (
                  <tr key={m.id} className="border-t border-gray-100">
                    <td className="py-2">{m.role}</td>
                    <td className="py-2 text-right">${m.wage}/hr</td>
                    <td className="py-2 text-right">${m.baseDay.toFixed(0)}</td>
                    <td className="py-2 text-right text-amber-600">+${m.burden.toFixed(0)}</td>
                    <td className="py-2 text-right font-bold text-brand-blue">${m.burdenedDay.toFixed(0)}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-300">
                  <td className="py-2 font-bold">Crew Total</td>
                  <td className="py-2"></td>
                  <td className="py-2 text-right">${result.totalBaseLabor.toFixed(0)}</td>
                  <td className="py-2 text-right text-amber-600 font-semibold">+${result.totalLaborBurden.toFixed(0)}</td>
                  <td className="py-2 text-right font-bold text-brand-blue">${result.totalBurdenedLabor.toFixed(0)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Labor burden multiplier: <strong>{result.burdenMultiplier.toFixed(2)}x</strong> base wage
          </p>
        </div>

        {/* Total day cost */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Burdened Labor</p>
            <p className="text-xl font-bold text-brand-blue">${result.totalBurdenedLabor.toFixed(0)}</p>
            <p className="text-xs text-gray-500">/day</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Vehicle + Fuel + Tools</p>
            <p className="text-xl font-bold text-brand-blue">${result.dailyVehicle.toFixed(0)}</p>
            <p className="text-xs text-gray-500">/day</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Overhead Allocation</p>
            <p className="text-xl font-bold text-brand-blue">${result.dailyOverheadAllocation.toFixed(0)}</p>
            <p className="text-xs text-gray-500">/day</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
            <p className="text-sm text-gray-600">Total Daily Cost</p>
            <p className="text-2xl font-bold text-brand-orange">${result.totalDailyCost.toFixed(0)}</p>
            <p className="text-xs text-gray-500">break-even</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mt-4 border border-gray-200 text-center">
          <p className="text-sm text-gray-600">Break-Even Crew Hourly Rate</p>
          <p className="text-3xl font-bold text-brand-blue">
            ${result.breakEvenHourly.toFixed(0)}/hr
          </p>
          <p className="text-xs text-gray-500">
            (across {result.totalCrewHours} crew hours &mdash; never bid below this)
          </p>
        </div>

        {/* Bid pricing reference */}
        <div className="bg-white rounded-lg p-5 mt-4 border border-gray-200">
          <h3 className="text-sm font-bold text-brand-blue mb-3">Day-Rate Bid Reference</h3>
          <p className="text-xs text-gray-500 mb-3">
            What to charge for the day at common contractor margins:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="text-center bg-brand-gray rounded-lg p-3">
              <p className="text-xs text-gray-600">30% margin</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.bidAt30).toLocaleString()}</p>
            </div>
            <div className="text-center bg-brand-gray rounded-lg p-3">
              <p className="text-xs text-gray-600">40% margin</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.bidAt40).toLocaleString()}</p>
            </div>
            <div className="text-center bg-brand-gray rounded-lg p-3">
              <p className="text-xs text-gray-600">50% margin</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.bidAt50).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
