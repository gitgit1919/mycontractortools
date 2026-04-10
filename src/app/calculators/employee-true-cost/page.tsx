"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

export default function EmployeeTrueCostCalculator() {
  // W-2 inputs
  const [w2Wage, setW2Wage] = useState<number>(25);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [ptoDays, setPtoDays] = useState<number>(10);
  const [holidayDays, setHolidayDays] = useState<number>(8);
  const [workersCompPct, setWorkersCompPct] = useState<number>(10);
  const [healthInsurance, setHealthInsurance] = useState<number>(400);
  const [retirementMatchPct, setRetirementMatchPct] = useState<number>(3);
  const [otherBenefitsMonthly, setOtherBenefitsMonthly] = useState<number>(50);
  const [recruitingCost, setRecruitingCost] = useState<number>(500);
  const [trainingDays, setTrainingDays] = useState<number>(5);

  // 1099 inputs
  const [subRate, setSubRate] = useState<number>(45);
  const [subHoursPerWeek, setSubHoursPerWeek] = useState<number>(40);

  const result = useMemo(() => {
    // ===== W-2 EMPLOYEE TRUE COST =====
    const totalDaysOff = ptoDays + holidayDays;
    const annualScheduledHours = 52 * hoursPerWeek;
    const annualPaidNonWorkHours = (totalDaysOff * hoursPerWeek) / 5;
    const annualWorkedHours = annualScheduledHours - annualPaidNonWorkHours;

    // Base wage
    const annualWages = w2Wage * annualScheduledHours;

    // Federal payroll taxes paid by employer
    const employerFICA = annualWages * 0.0765; // 7.65% (SS 6.2 + Medicare 1.45)
    // FUTA: 0.6% on first $7,000 = $42
    const futa = Math.min(annualWages, 7000) * 0.006;
    // SUTA: avg ~2.7% on first $9,500 (varies wildly by state)
    const suta = Math.min(annualWages, 9500) * 0.027;
    const totalPayrollTaxes = employerFICA + futa + suta;

    // Workers comp
    const workersComp = annualWages * (workersCompPct / 100);

    // Benefits
    const annualHealthInsurance = healthInsurance * 12;
    const retirementMatch = annualWages * (retirementMatchPct / 100);
    const annualOtherBenefits = otherBenefitsMonthly * 12;

    // First-year only costs
    const trainingCost = trainingDays * hoursPerWeek / 5 * w2Wage;
    const annualizedRecruiting = recruitingCost; // assume annual turnover budget

    const totalAnnualCost =
      annualWages +
      totalPayrollTaxes +
      workersComp +
      annualHealthInsurance +
      retirementMatch +
      annualOtherBenefits +
      trainingCost +
      annualizedRecruiting;

    // Loaded hourly rate (cost per actual worked hour)
    const loadedHourly =
      annualWorkedHours > 0 ? totalAnnualCost / annualWorkedHours : 0;
    const burdenMultiplier = w2Wage > 0 ? loadedHourly / w2Wage : 0;
    const burdenPerHour = loadedHourly - w2Wage;

    // ===== 1099 SUBCONTRACTOR =====
    const subAnnualHours = 52 * subHoursPerWeek;
    const subAnnualCost = subRate * subAnnualHours;
    // Subs invoice for actual hours (no PTO/holiday)
    // The "worked hours" for a sub equals their billed hours
    const subLoadedHourly = subRate;

    // ===== APPLES-TO-APPLES COMPARISON =====
    // For an even comparison, what's the cost for the same volume of worked hours?
    const equivalentSubAnnualCost =
      annualWorkedHours > 0 ? subRate * annualWorkedHours : 0;
    const annualSavingsW2 = equivalentSubAnnualCost - totalAnnualCost;
    // Negative means W-2 costs more (sub is cheaper); positive means W-2 saves money

    return {
      // W-2
      annualWorkedHours,
      annualScheduledHours,
      annualWages,
      totalPayrollTaxes,
      workersComp,
      annualHealthInsurance,
      retirementMatch,
      annualOtherBenefits,
      trainingCost,
      annualizedRecruiting,
      totalAnnualCost,
      loadedHourly,
      burdenMultiplier,
      burdenPerHour,
      // 1099
      subAnnualHours,
      subAnnualCost,
      subLoadedHourly,
      // Comparison
      equivalentSubAnnualCost,
      annualSavingsW2,
    };
  }, [
    w2Wage,
    hoursPerWeek,
    ptoDays,
    holidayDays,
    workersCompPct,
    healthInsurance,
    retirementMatchPct,
    otherBenefitsMonthly,
    recruitingCost,
    trainingDays,
    subRate,
    subHoursPerWeek,
  ]);

  return (
    <CalculatorLayout
      title="W-2 vs 1099 True Employee Cost Calculator"
      description="Find the real cost of a W-2 employee vs a 1099 subcontractor. Includes payroll tax, workers comp, benefits, PTO, training, and recruiting. See your loaded hourly rate and which path actually costs less."
      trade="Business"
      howToUse="On the left, enter your W-2 employee details: base wage, hours, PTO, workers comp rate, and benefits. On the right, enter what you&apos;d pay a 1099 sub for the same role. The calculator computes the true loaded cost of each path and tells you which one wins. Remember: the IRS decides classification based on control of the work, not what you call them."
      formula="Loaded W-2 Cost = Wages + Payroll Tax (~7.65%) + Workers Comp + Benefits + Training + Recruiting. Loaded Hourly = Total Annual Cost / Hours Actually Worked (excluding PTO/holiday). Burden Multiplier = Loaded Hourly / Base Wage."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* W-2 INPUTS */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="text-lg font-bold text-brand-blue mb-3">W-2 Employee</h3>
          <div className="space-y-3">
            <div>
              <label htmlFor="wage" className="block text-sm font-medium text-gray-700 mb-1">Base Wage ($/hr)</label>
              <input id="wage" type="number" min={0} step={0.5} value={w2Wage} onChange={(e) => setW2Wage(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">Scheduled Hours / Week</label>
              <input id="hours" type="number" min={1} max={60} value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="pto" className="block text-sm font-medium text-gray-700 mb-1">PTO Days / Year</label>
                <input id="pto" type="number" min={0} value={ptoDays} onChange={(e) => setPtoDays(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="holiday" className="block text-sm font-medium text-gray-700 mb-1">Holidays / Year</label>
                <input id="holiday" type="number" min={0} value={holidayDays} onChange={(e) => setHolidayDays(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="comp" className="block text-sm font-medium text-gray-700 mb-1">Workers Comp Rate (%)</label>
              <input id="comp" type="number" min={0} max={50} step={0.5} value={workersCompPct} onChange={(e) => setWorkersCompPct(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              <p className="text-xs text-gray-500 mt-1">Carpentry 8-12%, roofing 20%+</p>
            </div>
            <div>
              <label htmlFor="health" className="block text-sm font-medium text-gray-700 mb-1">Health Insurance ($/month)</label>
              <input id="health" type="number" min={0} step={50} value={healthInsurance} onChange={(e) => setHealthInsurance(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              <p className="text-xs text-gray-500 mt-1">Employer share, 0 if not offered</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="retirement" className="block text-sm font-medium text-gray-700 mb-1">401(k) Match (%)</label>
                <input id="retirement" type="number" min={0} max={10} step={0.5} value={retirementMatchPct} onChange={(e) => setRetirementMatchPct(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-1">Other Benefits ($/mo)</label>
                <input id="other" type="number" min={0} step={25} value={otherBenefitsMonthly} onChange={(e) => setOtherBenefitsMonthly(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="recruit" className="block text-sm font-medium text-gray-700 mb-1">Recruiting Cost ($/yr)</label>
                <input id="recruit" type="number" min={0} step={100} value={recruitingCost} onChange={(e) => setRecruitingCost(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="training" className="block text-sm font-medium text-gray-700 mb-1">Training Days</label>
                <input id="training" type="number" min={0} value={trainingDays} onChange={(e) => setTrainingDays(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* 1099 INPUTS */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <h3 className="text-lg font-bold text-brand-blue mb-3">1099 Subcontractor</h3>
          <div className="space-y-3">
            <div>
              <label htmlFor="subRate" className="block text-sm font-medium text-gray-700 mb-1">Sub Rate ($/hr)</label>
              <input id="subRate" type="number" min={0} step={1} value={subRate} onChange={(e) => setSubRate(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
              <p className="text-xs text-gray-500 mt-1">What you pay them per hour worked</p>
            </div>
            <div>
              <label htmlFor="subHours" className="block text-sm font-medium text-gray-700 mb-1">Hours / Week (you give them)</label>
              <input id="subHours" type="number" min={0} max={60} value={subHoursPerWeek} onChange={(e) => setSubHoursPerWeek(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="bg-white rounded-lg p-3 border border-purple-300 text-xs text-gray-700">
              <p className="font-bold mb-1 text-purple-900">No employer-paid:</p>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Payroll taxes (FICA, FUTA, SUTA)</li>
                <li>Workers compensation</li>
                <li>Health insurance or benefits</li>
                <li>PTO, holidays, sick time</li>
                <li>Unemployment insurance</li>
              </ul>
            </div>
            <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-amber-900">
              <p className="font-bold mb-1">IRS Warning:</p>
              <p>
                If you control when, where, and how the work happens, the worker is an employee, not a sub. Misclassification penalties can run $1,000+ per worker plus back taxes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">Loaded Cost Comparison</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* W-2 */}
          <div className="bg-white border-2 border-blue-500 rounded-lg p-4">
            <h3 className="text-lg font-bold text-brand-blue mb-2">W-2 Employee</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-gray-600">Base Wages</td>
                  <td className="py-1 text-right">${Math.round(result.annualWages).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Payroll Taxes</td>
                  <td className="py-1 text-right">${Math.round(result.totalPayrollTaxes).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Workers Comp</td>
                  <td className="py-1 text-right">${Math.round(result.workersComp).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Health Insurance</td>
                  <td className="py-1 text-right">${Math.round(result.annualHealthInsurance).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">401(k) Match</td>
                  <td className="py-1 text-right">${Math.round(result.retirementMatch).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Other Benefits</td>
                  <td className="py-1 text-right">${Math.round(result.annualOtherBenefits).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Training</td>
                  <td className="py-1 text-right">${Math.round(result.trainingCost).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Recruiting</td>
                  <td className="py-1 text-right">${Math.round(result.annualizedRecruiting).toLocaleString()}</td>
                </tr>
                <tr className="border-t-2 border-gray-300">
                  <td className="py-2 font-bold">Total Annual</td>
                  <td className="py-2 text-right font-bold text-brand-blue">${Math.round(result.totalAnnualCost).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3 bg-blue-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600">Loaded Hourly (per worked hour)</p>
              <p className="text-2xl font-bold text-brand-blue">${result.loadedHourly.toFixed(2)}/hr</p>
              <p className="text-xs text-gray-500">
                {result.burdenMultiplier.toFixed(2)}x base wage
                &middot; +${result.burdenPerHour.toFixed(2)}/hr burden
              </p>
            </div>
          </div>

          {/* 1099 */}
          <div className="bg-white border-2 border-purple-500 rounded-lg p-4">
            <h3 className="text-lg font-bold text-brand-blue mb-2">1099 Subcontractor</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1 text-gray-600">Hours / Year</td>
                  <td className="py-1 text-right">{result.subAnnualHours.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Sub Rate</td>
                  <td className="py-1 text-right">${subRate}/hr</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">Annual Invoice Total</td>
                  <td className="py-1 text-right">${Math.round(result.subAnnualCost).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">No Payroll Tax</td>
                  <td className="py-1 text-right text-green-600">$0</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">No Workers Comp</td>
                  <td className="py-1 text-right text-green-600">$0</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">No Benefits</td>
                  <td className="py-1 text-right text-green-600">$0</td>
                </tr>
                <tr>
                  <td className="py-1 text-gray-600">No PTO/Holidays</td>
                  <td className="py-1 text-right text-green-600">$0</td>
                </tr>
                <tr className="border-t-2 border-gray-300">
                  <td className="py-2 font-bold">Total Annual</td>
                  <td className="py-2 text-right font-bold text-brand-blue">${Math.round(result.subAnnualCost).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3 bg-purple-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600">Loaded Hourly</p>
              <p className="text-2xl font-bold text-brand-blue">${result.subLoadedHourly.toFixed(2)}/hr</p>
              <p className="text-xs text-gray-500">no burden &mdash; you pay only what they invoice</p>
            </div>
          </div>
        </div>

        {/* WINNER */}
        <div
          className={`mt-6 rounded-xl p-5 border-2 ${
            result.annualSavingsW2 > 0
              ? "bg-blue-50 border-blue-500"
              : "bg-purple-50 border-purple-500"
          }`}
        >
          <h3 className="text-lg font-bold text-brand-blue mb-2">
            Apples-to-Apples: Same {Math.round(result.annualWorkedHours).toLocaleString()} Worked Hours
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
              <p className="text-xs text-gray-600">W-2 Total</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.totalAnnualCost).toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
              <p className="text-xs text-gray-600">1099 Equivalent</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.equivalentSubAnnualCost).toLocaleString()}</p>
            </div>
            <div
              className={`rounded-lg p-3 text-center ${
                result.annualSavingsW2 > 0
                  ? "bg-blue-100 border border-blue-300"
                  : "bg-purple-100 border border-purple-300"
              }`}
            >
              <p className="text-xs text-gray-600">
                {result.annualSavingsW2 > 0 ? "W-2 saves" : "1099 saves"}
              </p>
              <p
                className={`text-xl font-bold ${
                  result.annualSavingsW2 > 0 ? "text-blue-700" : "text-purple-700"
                }`}
              >
                ${Math.abs(Math.round(result.annualSavingsW2)).toLocaleString()}/yr
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            {result.annualSavingsW2 > 0 ? (
              <>
                <strong>W-2 wins on cost.</strong> At a ${subRate}/hr sub rate, the
                W-2 employee actually costs less for the same volume of work.
                You also get more control, consistency, and brand investment
                from a W-2 hire.
              </>
            ) : (
              <>
                <strong>1099 wins on cost &mdash; but watch classification.</strong>{" "}
                A sub at ${subRate}/hr beats W-2 by ${Math.abs(Math.round(result.annualSavingsW2)).toLocaleString()}/yr,
                but the IRS only allows the 1099 path when you don&apos;t control
                when, where, and how the work is done. If you&apos;re running a
                full-time crew, classify them as W-2 even if it costs more.
              </>
            )}
          </p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
