'use client'
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<number | null>(null);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [termYears, setTermYears] = useState<number | null>(null);
  const [mortgageType, setMortgageType] = useState<'repayment' | 'interestOnly'>('repayment');
  const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);

  const calculateRepayment = () => {
    if (!loanAmount || !interestRate || !termYears) return;

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = termYears * 12;

    if (mortgageType === 'repayment') {
      const monthly =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      setMonthlyRepayment(monthly);
      setTotalRepayment(monthly * numberOfPayments);
    } else {
      const monthly = loanAmount * monthlyInterestRate;
      setMonthlyRepayment(monthly);
      setTotalRepayment(monthly * numberOfPayments);
    }
  };

  const clearAll = () => {
    setLoanAmount(null);
    setInterestRate(null);
    setTermYears(null);
    setMortgageType('repayment');
    setMonthlyRepayment(null);
    setTotalRepayment(null);
  };

  return (
    <div className='bg-blue-100 min-h-screen justify-center items-center min-w-full pt-40'>
      <div className="max-w-4xl mx-auto my-10 bg-white rounded-2xl shadow-lg flex overflow-hidden justify-center ">
        {/* Left Panel - Form */}
        <div className="w-1/2 p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Mortgage Calculator</h2>
            <button className="text-sm text-blue-600 underline" onClick={clearAll}>Clear All</button>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Mortgage Amount</label>
            <div className="flex">
              <span className="bg-blue-50 px-3 py-2 rounded-l-md border border-r-0 border-gray-300">£</span>
              <input
                type="number"
                value={loanAmount ?? ''}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                className="w-full border border-gray-300 px-3 py-2 rounded-r-md focus:outline-none"
                placeholder="300,000"
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Mortgage Term</label>
              <div className="flex">
                <input
                  type="number"
                  value={termYears ?? ''}
                  onChange={(e) => setTermYears(parseFloat(e.target.value))}
                  className="w-full border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none"
                  placeholder="25"
                />
                <span className="bg-blue-50 px-3 py-2 rounded-r-md border border-l-0 border-gray-300">years</span>
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm mb-1">Interest Rate</label>
              <div className="flex">
                <input
                  type="number"
                  value={interestRate ?? ''}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none"
                  placeholder="5.25"
                />
                <span className="bg-blue-50 px-3 py-2 rounded-r-md border border-l-0 border-gray-300">%</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Mortgage Type</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 bg-white border rounded-md px-3 py-2">
                <input
                  type="radio"
                  name="mortgageType"
                  value="repayment"
                  checked={mortgageType === 'repayment'}
                  onChange={() => setMortgageType('repayment')}
                />
                Repayment
              </label>
              <label className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
                <input
                  type="radio"
                  name="mortgageType"
                  value="interestOnly"
                  checked={mortgageType === 'interestOnly'}
                  onChange={() => setMortgageType('interestOnly')}
                />
                Interest Only
              </label>
            </div>
          </div>

          <button
            className="flex item-center justify-center bg-[#cee04e] text-black font-semibold py-2 rounded-[20px] w-2xs gap-2 mt-4 hover:bg-lime-500 "
            onClick={calculateRepayment}
          >
            <Calculator size={18} className='mt-0.5' />  Calculate Repayments
          </button>
        </div>

        {/* Right Panel - Result */}
        <div className="w-1/2 bg-slate-900 text-white p-8 flex flex-col justify-center items-center rounded-bl-[60px]">
          {monthlyRepayment !== null && totalRepayment !== null ? (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">Your results</h3>
              <p className="text-sm text-slate-300 mb-6">
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
              </p>
              <div className="bg-slate-800 p-6 rounded-lg border-t-4 border-yellow-400">
                <p className="text-slate-300 mb-2">Your monthly repayments</p>
                <p className="text-4xl font-bold text-lime-400 mb-4">£{monthlyRepayment.toFixed(2)}</p>
                <hr className="border-slate-700 mb-4" />
                <p className="text-slate-300">Total you'll repay over the term</p>
                <p className="text-xl font-semibold">£{totalRepayment.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <img
                src="/illustration-empty.svg"
                alt="Placeholder"
                className="w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Results shown here</h3>
              <p className="text-sm text-slate-400 mt-2">
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
