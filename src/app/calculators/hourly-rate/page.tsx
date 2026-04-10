"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function HourlyRateCalculator() {
  const [targetIncome, setTargetIncome] = useState<number>(100000);
  const [weeksOff, setWeeksOff] = useState<number>(3);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [billablePercent, setBillablePercent] = useState<number>(65);
  const [insurance, setInsurance] = useState<number>(800);
  const [vehicleCost, setVehicleCost] = useState<number>(600);
  const [toolsEquipment, setToolsEquipment] = useState<number>(300);
  const [otherOverhead, setOtherOverhead] = useState<number>(400);
  const [taxRate, setTaxRate] = useState<number>(30);
  const [avgJobSize, setAvgJobSize] = useState<number>(2500);
  const [avgJobHours, setAvgJobHours] = useState<number>(12);

  const result = useMemo(() => {
    const workingWeeks = Math.max(52 - weeksOff, 1);
    const totalHours = workingWeeks * hoursPerWeek;
    const billableHours = totalHours * (billablePercent / 100);
    const monthlyOverhead = insurance + vehicleCost + toolsEquipment + otherOverhead;
    const annualOverhead = monthlyOverhead * 12;

    const grossNeeded =
      (targetIncome + annualOverhead) / Math.max(1 - taxRate / 100, 0.01);
    const hourlyRate = billableHours > 0 ? grossNeeded / billableHours : 0;

    // Per-hour breakdown — where each billable dollar goes
    const overheadPerHour = billableHours > 0 ? annualOverhead / billableHours : 0;
    const taxPerHour = hourlyRate * (taxRate / 100);
    const takeHomePerHour = billableHours > 0 ? targetIncome / billableHours : 0;

    // Aggregate scenario figures
    const dailyRate = hourlyRate * 8;
    const weeklyRevenue = hourlyRate * (hoursPerWeek * (billablePercent / 100));
    const monthlyRevenue = grossNeeded / 12;

    // Break-even job count: how many average jobs needed per year and per month
    const jobsPerYear = avgJobSize > 0 ? grossNeeded / avgJobSize : 0;
    const jobsPerMonth = jobsPerYear / 12;

    // Effective rate at the average job — does the customer pay you what you need?
    const effectiveJobRate =
      avgJobHours > 0 ? avgJobSize / avgJobHours : 0;
    const jobRateGap = effectiveJobRate - hourlyRate;

    // What-if: if you boosted billable utilization by 10 points
    const altBillable = Math.min(billablePercent + 10, 95);
    const altHours = totalHours * (altBillable / 100);
    const altRate = altHours > 0 ? grossNeeded / altHours : 0;
    const altSavings = hourlyRate - altRate;

    return {
      workingWeeks,
      totalHours,
      billableHours,
      monthlyOverhead,
      annualOverhead,
      grossNeeded,
      hourlyRate,
      overheadPerHour,
      taxPerHour,
      takeHomePerHour,
      dailyRate,
      weeklyRevenue,
      monthlyRevenue,
      jobsPerYear,
      jobsPerMonth,
      effectiveJobRate,
      jobRateGap,
      altBillable,
      altRate,
      altSavings,
    };
  }, [
    targetIncome,
    weeksOff,
    hoursPerWeek,
    billablePercent,
    insurance,
    vehicleCost,
    toolsEquipment,
    otherOverhead,
    taxRate,
    avgJobSize,
    avgJobHours,
  ]);

  // Bar segments for the where-each-dollar-goes visual
  const overheadShare =
    result.hourlyRate > 0 ? (result.overheadPerHour / result.hourlyRate) * 100 : 0;
  const taxShare =
    result.hourlyRate > 0 ? (result.taxPerHour / result.hourlyRate) * 100 : 0;
  const takeHomeShare = Math.max(100 - overheadShare - taxShare, 0);

  return (
    <CalculatorLayout
      title="Hourly Rate Calculator"
      description="Calculate what you need to charge per hour as a contractor to hit your income goal after taxes, overhead, and non-billable time. Stop undercharging for your work."
      trade="Business"
      howToUse="Enter your desired annual take-home, then dial in time off, billable percentage (60-70% is typical because the rest goes to estimates, travel, and admin), monthly overhead, and tax rate. Add an average job size and labor hours to see how many jobs per month you need and whether your current pricing actually covers the rate."
      formula="Gross Needed = (Target Income + Annual Overhead) / (1 - Tax Rate). Hourly Rate = Gross Needed / Billable Hours. Each billable hour pays for: Overhead/hr + Taxes/hr + Take-home/hr."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">Target Annual Take-Home ($)</label>
          <input id="target" type="number" min={10000} step={5000} value={targetIncome} onChange={(e) => setTargetIncome(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="weeksOff" className="block text-sm font-medium text-gray-700 mb-1">Weeks Off Per Year</label>
          <input id="weeksOff" type="number" min={0} max={20} value={weeksOff} onChange={(e) => setWeeksOff(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">Hours Per Week</label>
          <input id="hours" type="number" min={10} max={80} value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="billable" className="block text-sm font-medium text-gray-700 mb-1">Billable Time: {billablePercent}%</label>
          <input id="billable" type="range" min={30} max={90} step={5} value={billablePercent} onChange={(e) => setBillablePercent(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>30% (lots of admin/travel)</span>
            <span>90% (mostly field work)</span>
          </div>
        </div>

        <div className="sm:col-span-2 border-t pt-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">Monthly Overhead</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">Insurance ($/mo)</label>
              <input id="insurance" type="number" min={0} step={50} value={insurance} onChange={(e) => setInsurance(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle ($/mo)</label>
              <input id="vehicle" type="number" min={0} step={50} value={vehicleCost} onChange={(e) => setVehicleCost(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="tools" className="block text-sm font-medium text-gray-700 mb-1">Tools &amp; Equipment ($/mo)</label>
              <input id="tools" type="number" min={0} step={50} value={toolsEquipment} onChange={(e) => setToolsEquipment(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-1">Other Overhead ($/mo)</label>
              <input id="other" type="number" min={0} step={50} value={otherOverhead} onChange={(e) => setOtherOverhead(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="tax" className="block text-sm font-medium text-gray-700 mb-1">Estimated Tax Rate (%)</label>
          <input id="tax" type="number" min={10} max={50} value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">SE tax + income tax (25-35% typical)</p>
        </div>

        <div className="sm:col-span-2 border-t pt-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">Sanity Check (Optional)</p>
          <p className="text-xs text-gray-500 mb-3">
            Enter your average job to see how many jobs per month you need and whether your current pricing actually delivers your target rate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="avgJob" className="block text-sm font-medium text-gray-700 mb-1">Average Job Price ($)</label>
              <input id="avgJob" type="number" min={0} step={100} value={avgJobSize} onChange={(e) => setAvgJobSize(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="avgHours" className="block text-sm font-medium text-gray-700 mb-1">Average Labor Hours per Job</label>
              <input id="avgHours" type="number" min={1} step={1} value={avgJobHours} onChange={(e) => setAvgJobHours(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Your Rate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border-2 border-brand-orange">
            <p className="text-sm text-gray-600">Charge Per Hour</p>
            <p className="text-3xl font-bold text-brand-orange">${result.hourlyRate.toFixed(0)}</p>
            <p className="text-sm text-gray-500">minimum rate</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Daily Rate (8 hrs)</p>
            <p className="text-2xl font-bold text-brand-blue">${result.dailyRate.toFixed(0)}</p>
            <p className="text-sm text-gray-500">full day</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Weekly Revenue</p>
            <p className="text-2xl font-bold text-brand-blue">${Math.round(result.weeklyRevenue).toLocaleString()}</p>
            <p className="text-sm text-gray-500">target</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Monthly Revenue</p>
            <p className="text-2xl font-bold text-brand-blue">${Math.round(result.monthlyRevenue).toLocaleString()}</p>
            <p className="text-sm text-gray-500">gross needed</p>
          </div>
        </div>

        {/* Where each billable hour goes */}
        <div className="mt-6 bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-lg font-bold text-brand-blue mb-1">Where Each Billable Hour Goes</h3>
          <p className="text-xs text-gray-500 mb-4">
            Out of every ${result.hourlyRate.toFixed(0)} you charge, this is who gets it.
          </p>
          <div className="flex h-6 rounded-md overflow-hidden border border-gray-300">
            <div
              className="bg-amber-400 flex items-center justify-center text-xs font-semibold text-amber-900"
              style={{ width: `${overheadShare}%` }}
              title={`Overhead: ${overheadShare.toFixed(0)}%`}
            >
              {overheadShare >= 12 ? `${overheadShare.toFixed(0)}%` : ""}
            </div>
            <div
              className="bg-red-400 flex items-center justify-center text-xs font-semibold text-red-900"
              style={{ width: `${taxShare}%` }}
              title={`Taxes: ${taxShare.toFixed(0)}%`}
            >
              {taxShare >= 12 ? `${taxShare.toFixed(0)}%` : ""}
            </div>
            <div
              className="bg-green-500 flex items-center justify-center text-xs font-semibold text-white"
              style={{ width: `${takeHomeShare}%` }}
              title={`Take-home: ${takeHomeShare.toFixed(0)}%`}
            >
              {takeHomeShare >= 12 ? `${takeHomeShare.toFixed(0)}%` : ""}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 text-center">
            <div>
              <span className="inline-block w-3 h-3 rounded-sm bg-amber-400 mr-1"></span>
              <span className="text-xs text-gray-600">Overhead</span>
              <p className="text-lg font-bold text-brand-blue">${result.overheadPerHour.toFixed(0)}/hr</p>
            </div>
            <div>
              <span className="inline-block w-3 h-3 rounded-sm bg-red-400 mr-1"></span>
              <span className="text-xs text-gray-600">Taxes</span>
              <p className="text-lg font-bold text-brand-blue">${result.taxPerHour.toFixed(0)}/hr</p>
            </div>
            <div>
              <span className="inline-block w-3 h-3 rounded-sm bg-green-500 mr-1"></span>
              <span className="text-xs text-gray-600">Take-Home</span>
              <p className="text-lg font-bold text-green-600">${result.takeHomePerHour.toFixed(0)}/hr</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Billable Hours/Year</p>
            <p className="text-xl font-bold text-brand-blue">{Math.round(result.billableHours).toLocaleString()}</p>
            <p className="text-sm text-gray-500">of {result.totalHours.toLocaleString()} total</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Annual Overhead</p>
            <p className="text-xl font-bold text-brand-blue">${result.annualOverhead.toLocaleString()}</p>
            <p className="text-sm text-gray-500">${result.monthlyOverhead.toLocaleString()}/mo</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <p className="text-sm text-gray-600">Gross Revenue Needed</p>
            <p className="text-xl font-bold text-brand-blue">${Math.round(result.grossNeeded).toLocaleString()}</p>
            <p className="text-sm text-gray-500">before taxes</p>
          </div>
        </div>

        {/* Job-based reality check */}
        {avgJobSize > 0 && avgJobHours > 0 && (
          <div className="mt-6 bg-white rounded-lg p-5 border border-gray-200">
            <h3 className="text-lg font-bold text-brand-blue mb-1">Reality Check: Your Average Job</h3>
            <p className="text-xs text-gray-500 mb-4">
              At ${avgJobSize.toLocaleString()} per job and {avgJobHours} labor hours each:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center bg-brand-gray rounded-lg p-3">
                <p className="text-xs text-gray-600">Jobs Needed Per Month</p>
                <p className="text-2xl font-bold text-brand-blue">
                  {result.jobsPerMonth.toFixed(1)}
                </p>
                <p className="text-xs text-gray-500">{result.jobsPerYear.toFixed(0)}/year</p>
              </div>
              <div className="text-center bg-brand-gray rounded-lg p-3">
                <p className="text-xs text-gray-600">Effective Rate Per Job</p>
                <p className="text-2xl font-bold text-brand-blue">
                  ${result.effectiveJobRate.toFixed(0)}/hr
                </p>
                <p className="text-xs text-gray-500">job price &divide; hours</p>
              </div>
              <div
                className={`text-center rounded-lg p-3 ${
                  result.jobRateGap >= 0
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <p className="text-xs text-gray-600">Pricing Gap</p>
                <p
                  className={`text-2xl font-bold ${
                    result.jobRateGap >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {result.jobRateGap >= 0 ? "+" : ""}${result.jobRateGap.toFixed(0)}/hr
                </p>
                <p className="text-xs text-gray-500">
                  {result.jobRateGap >= 0 ? "above target" : "below target"}
                </p>
              </div>
            </div>
            {result.jobRateGap < 0 && (
              <p className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                <strong>You&apos;re underpricing.</strong> Your average job pays
                ${Math.abs(result.jobRateGap).toFixed(0)}/hr less than the rate you need
                to hit your target income. Either raise prices, cut labor hours per
                job, or accept a lower take-home.
              </p>
            )}
          </div>
        )}

        {/* What-if scenario */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h3 className="text-base font-bold text-brand-blue mb-2">
            What If You Could Boost Billable Time to {result.altBillable}%?
          </h3>
          <p className="text-sm text-gray-700">
            If you cut admin time and pushed billable utilization from{" "}
            {billablePercent}% to {result.altBillable}%, you could charge{" "}
            <strong className="text-brand-blue">${result.altRate.toFixed(0)}/hr</strong>{" "}
            instead &mdash; that&apos;s{" "}
            <strong className="text-green-600">
              ${result.altSavings.toFixed(0)}/hr cheaper
            </strong>{" "}
            and still hit the same take-home. The fastest path to a lower rate isn&apos;t
            cheaper labor &mdash; it&apos;s less paperwork.
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
