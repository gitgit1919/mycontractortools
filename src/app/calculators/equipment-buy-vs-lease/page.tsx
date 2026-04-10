"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";

function pmt(rate: number, nper: number, pv: number): number {
  if (rate === 0) return pv / nper;
  return (pv * rate) / (1 - Math.pow(1 + rate, -nper));
}

export default function EquipmentBuyVsLeaseCalculator() {
  // Common
  const [equipmentName, setEquipmentName] = useState<string>("Work Truck");
  const [yearsOfUse, setYearsOfUse] = useState<number>(5);
  const [annualInsurance, setAnnualInsurance] = useState<number>(2400);
  const [annualMaintenance, setAnnualMaintenance] = useState<number>(1500);

  // Buy
  const [purchasePrice, setPurchasePrice] = useState<number>(55000);
  const [downPayment, setDownPayment] = useState<number>(8000);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
  const [loanApr, setLoanApr] = useState<number>(8.5);
  const [resaleValuePct, setResaleValuePct] = useState<number>(45);

  // Lease
  const [leaseMonthly, setLeaseMonthly] = useState<number>(750);
  const [leaseDownPayment, setLeaseDownPayment] = useState<number>(2500);
  const [leaseTermMonths, setLeaseTermMonths] = useState<number>(36);
  const [leaseMaintIncluded, setLeaseMaintIncluded] = useState<boolean>(false);

  const result = useMemo(() => {
    const months = yearsOfUse * 12;

    // ---------- BUY ----------
    const loanAmount = Math.max(purchasePrice - downPayment, 0);
    const monthlyRate = loanApr / 100 / 12;
    const monthlyPayment = loanTermMonths > 0 ? pmt(monthlyRate, loanTermMonths, loanAmount) : 0;

    // Payments only count for months you're actually paying
    const monthsOfLoanPayments = Math.min(loanTermMonths, months);
    const totalLoanPayments = monthlyPayment * monthsOfLoanPayments;
    const totalInterest = totalLoanPayments - (loanAmount * (monthsOfLoanPayments / loanTermMonths));

    const buyInsurance = (annualInsurance * yearsOfUse);
    const buyMaintenance = (annualMaintenance * yearsOfUse);
    const resaleValue = purchasePrice * (resaleValuePct / 100);

    const buyTotalOutflow = downPayment + totalLoanPayments + buyInsurance + buyMaintenance;
    const buyNetCost = buyTotalOutflow - resaleValue;

    // Effective monthly cost over the period of use
    const buyEffectiveMonthly = months > 0 ? buyNetCost / months : 0;

    // ---------- LEASE ----------
    // Assume you re-lease as each lease term ends, with similar terms.
    // For simplicity: you cycle through lease cycles totaling `months` months.
    const fullCycles = leaseTermMonths > 0 ? Math.ceil(months / leaseTermMonths) : 1;
    const leaseDownPayments = leaseDownPayment * fullCycles;
    const leaseTotalPayments = leaseMonthly * months;
    const leaseInsurance = annualInsurance * yearsOfUse;
    const leaseMaintenance = leaseMaintIncluded ? 0 : annualMaintenance * yearsOfUse;

    const leaseTotalOutflow = leaseDownPayments + leaseTotalPayments + leaseInsurance + leaseMaintenance;
    const leaseEffectiveMonthly = months > 0 ? leaseTotalOutflow / months : 0;

    // ---------- COMPARISON ----------
    const buyWins = buyNetCost < leaseTotalOutflow;
    const winnerSavings = Math.abs(buyNetCost - leaseTotalOutflow);
    const winnerSavingsPerYear = yearsOfUse > 0 ? winnerSavings / yearsOfUse : 0;

    // Cash flow stress: how much do you part with in year 1?
    const buyYear1Cash = downPayment + (monthlyPayment * Math.min(12, loanTermMonths)) + annualInsurance + annualMaintenance;
    const leaseYear1Cash = leaseDownPayment + (leaseMonthly * 12) + annualInsurance + (leaseMaintIncluded ? 0 : annualMaintenance);

    return {
      months,
      monthlyPayment,
      totalLoanPayments,
      totalInterest,
      buyInsurance,
      buyMaintenance,
      resaleValue,
      buyTotalOutflow,
      buyNetCost,
      buyEffectiveMonthly,
      leaseDownPayments,
      leaseTotalPayments,
      leaseInsurance,
      leaseMaintenance,
      leaseTotalOutflow,
      leaseEffectiveMonthly,
      fullCycles,
      buyWins,
      winnerSavings,
      winnerSavingsPerYear,
      buyYear1Cash,
      leaseYear1Cash,
    };
  }, [
    yearsOfUse,
    purchasePrice,
    downPayment,
    loanTermMonths,
    loanApr,
    resaleValuePct,
    annualInsurance,
    annualMaintenance,
    leaseMonthly,
    leaseDownPayment,
    leaseTermMonths,
    leaseMaintIncluded,
  ]);

  return (
    <CalculatorLayout
      title="Equipment Buy vs Lease Calculator"
      description="Compare buying vs leasing your next truck, skid steer, lift, or excavator. Plug in real numbers to see total cost over time, monthly cash impact, and which option actually wins for your situation."
      trade="Business"
      howToUse="Enter the equipment cost and your loan terms on the left, and the lease payment and term on the right. Set the years you plan to use the equipment &mdash; this is the most important input. Buying wins on long horizons (5&ndash;7+ years) when you'll own it past the loan; leasing wins on shorter horizons or when cash flow is tight. The result shows total net cost, effective monthly cost, and year-1 cash impact for both paths."
      formula="Buy Net Cost = Down + (Monthly Payment × Months Paid) + (Insurance + Maintenance × Years) &minus; Resale. Lease Net Cost = (Down × Lease Cycles) + (Monthly × Months) + Insurance + Maintenance."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Equipment</label>
          <input id="name" type="text" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Truck, skid steer, lift, etc.</p>
        </div>
        <div>
          <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">Years of Use</label>
          <input id="years" type="number" min={1} max={15} value={yearsOfUse} onChange={(e) => setYearsOfUse(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">How long until you'd replace it</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="ins" className="block text-sm font-medium text-gray-700 mb-1">Annual Insurance ($)</label>
          <input id="ins" type="number" min={0} step={100} value={annualInsurance} onChange={(e) => setAnnualInsurance(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Same for buy or lease</p>
        </div>
        <div>
          <label htmlFor="maint" className="block text-sm font-medium text-gray-700 mb-1">Annual Maintenance ($)</label>
          <input id="maint" type="number" min={0} step={100} value={annualMaintenance} onChange={(e) => setAnnualMaintenance(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          <p className="text-xs text-gray-500 mt-1">Tires, oil, brakes, repairs</p>
        </div>
      </div>

      {/* BUY column */}
      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-bold text-brand-blue mb-3">Buying Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Purchase Price ($)</label>
            <input id="price" type="number" min={0} step={500} value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="down" className="block text-sm font-medium text-gray-700 mb-1">Down Payment ($)</label>
            <input id="down" type="number" min={0} step={500} value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">Loan Term (months)</label>
            <input id="term" type="number" min={12} max={120} value={loanTermMonths} onChange={(e) => setLoanTermMonths(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">60 = 5 years, 72 = 6 years</p>
          </div>
          <div>
            <label htmlFor="apr" className="block text-sm font-medium text-gray-700 mb-1">Loan APR (%)</label>
            <input id="apr" type="number" min={0} step={0.1} value={loanApr} onChange={(e) => setLoanApr(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">Equipment loans typically 7&ndash;12%</p>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="resale" className="block text-sm font-medium text-gray-700 mb-1">
              Resale Value at End of Use (% of purchase price): {resaleValuePct}%
            </label>
            <input id="resale" type="range" min={0} max={80} step={5} value={resaleValuePct} onChange={(e) => setResaleValuePct(Number(e.target.value))}
              className="w-full" />
            <p className="text-xs text-gray-500 mt-1">
              Trucks hold ~40&ndash;60% after 5 yrs. Skid steers/excavators hold 35&ndash;55%. Lifts/scissor lifts 30&ndash;50%.
            </p>
          </div>
        </div>
      </div>

      {/* LEASE column */}
      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-bold text-brand-blue mb-3">Leasing Terms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lmonth" className="block text-sm font-medium text-gray-700 mb-1">Monthly Lease Payment ($)</label>
            <input id="lmonth" type="number" min={0} step={25} value={leaseMonthly} onChange={(e) => setLeaseMonthly(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="ldown" className="block text-sm font-medium text-gray-700 mb-1">Lease Down / Cap Reduction ($)</label>
            <input id="ldown" type="number" min={0} step={250} value={leaseDownPayment} onChange={(e) => setLeaseDownPayment(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">Plus first payment, taxes, fees</p>
          </div>
          <div>
            <label htmlFor="lterm" className="block text-sm font-medium text-gray-700 mb-1">Lease Term (months)</label>
            <input id="lterm" type="number" min={12} max={84} value={leaseTermMonths} onChange={(e) => setLeaseTermMonths(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:border-transparent" />
            <p className="text-xs text-gray-500 mt-1">36 or 48 is typical</p>
          </div>
          <div className="flex items-start gap-2 pt-6">
            <input id="lmaint" type="checkbox" checked={leaseMaintIncluded} onChange={(e) => setLeaseMaintIncluded(e.target.checked)}
              className="mt-1" />
            <label htmlFor="lmaint" className="text-sm text-gray-700">
              Maintenance included in lease
              <p className="text-xs text-gray-500">Common on full-service truck/equipment leases</p>
            </label>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="mt-8 bg-brand-gray rounded-xl p-6">
        <h2 className="text-xl font-bold text-brand-blue mb-4">
          {equipmentName}: {yearsOfUse}-Year Comparison
        </h2>

        {/* Winner banner */}
        <div className={`rounded-xl p-5 mb-6 ${result.buyWins ? "bg-green-50 border-2 border-green-500" : "bg-blue-50 border-2 border-blue-500"}`}>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Over {yearsOfUse} years, {result.buyWins ? "BUYING" : "LEASING"} wins by:
          </p>
          <p className={`text-4xl font-bold ${result.buyWins ? "text-green-700" : "text-blue-700"}`}>
            ${Math.round(result.winnerSavings).toLocaleString()}
          </p>
          <p className="text-xs text-gray-600 mt-1">
            About ${Math.round(result.winnerSavingsPerYear).toLocaleString()}/year &mdash; before tax effects
          </p>
        </div>

        {/* Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* BUY */}
          <div className={`bg-white rounded-lg p-5 border-2 ${result.buyWins ? "border-green-500" : "border-gray-200"}`}>
            <h3 className="font-bold text-brand-blue mb-3">Buying</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Down payment</span>
                <span className="font-medium">${downPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly loan payment</span>
                <span className="font-medium">${Math.round(result.monthlyPayment).toLocaleString()}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total loan payments</span>
                <span className="font-medium">${Math.round(result.totalLoanPayments).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Insurance ({yearsOfUse} yr)</span>
                <span className="font-medium">${result.buyInsurance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Maintenance ({yearsOfUse} yr)</span>
                <span className="font-medium">${result.buyMaintenance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-700">Total cash out</span>
                <span className="font-bold">${Math.round(result.buyTotalOutflow).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>&minus; Resale value</span>
                <span className="font-medium">&minus;${Math.round(result.resaleValue).toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2">
                <span className="font-bold text-brand-blue">Net cost</span>
                <span className="font-bold text-brand-blue text-lg">
                  ${Math.round(result.buyNetCost).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Effective $/month</span>
                <span>${Math.round(result.buyEffectiveMonthly).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* LEASE */}
          <div className={`bg-white rounded-lg p-5 border-2 ${!result.buyWins ? "border-blue-500" : "border-gray-200"}`}>
            <h3 className="font-bold text-brand-blue mb-3">Leasing</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Lease cycles needed</span>
                <span className="font-medium">{result.fullCycles} × {leaseTermMonths}-mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total down payments</span>
                <span className="font-medium">${result.leaseDownPayments.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly payment</span>
                <span className="font-medium">${leaseMonthly.toLocaleString()}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total lease payments</span>
                <span className="font-medium">${result.leaseTotalPayments.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Insurance ({yearsOfUse} yr)</span>
                <span className="font-medium">${result.leaseInsurance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Maintenance ({yearsOfUse} yr)</span>
                <span className="font-medium">
                  {leaseMaintIncluded ? "included" : `$${result.leaseMaintenance.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between border-t-2 pt-2">
                <span className="font-bold text-brand-blue">Net cost</span>
                <span className="font-bold text-brand-blue text-lg">
                  ${Math.round(result.leaseTotalOutflow).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Effective $/month</span>
                <span>${Math.round(result.leaseEffectiveMonthly).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Year 1 cash flow stress test */}
        <div className="bg-white rounded-lg p-5 mt-4 border border-gray-200">
          <h3 className="text-sm font-bold text-brand-blue mb-3">Year 1 Cash Flow Impact</h3>
          <p className="text-xs text-gray-500 mb-3">
            How much cash leaves your business in the first 12 months &mdash; the difference often matters more than total cost when you're growing.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-gray rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600">Buy: Year 1 Cash</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.buyYear1Cash).toLocaleString()}</p>
            </div>
            <div className="bg-brand-gray rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600">Lease: Year 1 Cash</p>
              <p className="text-xl font-bold text-brand-blue">${Math.round(result.leaseYear1Cash).toLocaleString()}</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            <strong>{result.buyYear1Cash < result.leaseYear1Cash ? "Buying" : "Leasing"}</strong>{" "}
            ties up $
            {Math.abs(Math.round(result.buyYear1Cash - result.leaseYear1Cash)).toLocaleString()} less cash in year one.
          </p>
        </div>

        {/* Decision guidance */}
        <div className="bg-white rounded-lg p-5 mt-4 border border-gray-200">
          <h3 className="text-sm font-bold text-brand-blue mb-2">Quick Decision Guide</h3>
          <ul className="text-xs text-gray-700 space-y-1 list-disc pl-4">
            <li><strong>Lean toward buying</strong> if: you keep equipment 6+ years, you have cash for the down, and the equipment isn't critical-path (you can run it past warranty).</li>
            <li><strong>Lean toward leasing</strong> if: cash flow is tight, you need newest equipment for image (sales trucks, lifts on commercial sites), or you want bundled maintenance.</li>
            <li><strong>Tax wildcard:</strong> Section 179 lets you expense up to $1.16M of equipment in year one (2025). If you have a high-profit year, buying + 179 can beat leasing on after-tax basis. Run this past your CPA before signing.</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
