'use client'
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Calculator } from 'lucide-react';

type FormValues = {
  loanAmount: number;
  interestRate: number;
  termYears: number;
  mortgageType: 'repayment' | 'interestOnly';
};

export default function MortgageCalculator() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { loanAmount: 0, interestRate: 0, termYears: 0,  mortgageType: 'repayment' }
  });

  const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);

  const calculateRepayment = ({ loanAmount, interestRate, termYears, mortgageType }: FormValues) => {
    
    const r = interestRate / 100 / 12;
    const n = termYears * 12;
    const monthly = mortgageType === ('repayment')
      ? (loanAmount * r) / (1 - Math.pow(1 + r, -n))
      : loanAmount * r; 
    setMonthlyRepayment(monthly);
    setTotalRepayment(monthly * n);
  };

  return (
    <div className='bg-blue-100 min-h-screen flex justify-center items-start pt-40'>
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg flex">
        {/* Form */}
        <div className="w-1/2 p-8">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Mortgage Calculator</h2>
            <button onClick={() => { reset(); setMonthlyRepayment(null); setTotalRepayment(null); }} className="text-sm text-blue-600 underline">Clear All</button>
          </div>

          {/* Input Groups */}
          <InputGroup label="Mortgage Amount" prefix="£">
            <Controller name="loanAmount" control={control} render={({ field }) => (
              <input type="number" {...field}  className="w-full border px-3 py-2 rounded-r-md focus:outline-none" />
            )} />
          </InputGroup>

          <div className="flex gap-4 mb-4">
            <InputGroup label="Mortgage Term" suffix="years" className="flex-1">
              <Controller name="termYears" control={control} render={({ field }) => (
                <input type="number" {...field} className="w-full border px-3 py-2 rounded-l-md focus:outline-none" />
              )} />
            </InputGroup>
            <InputGroup label="Interest Rate" suffix="%" className="flex-1">
              <Controller name="interestRate" control={control} render={({ field }) => (
                <input type="number" {...field} className="w-full border px-3 py-2 rounded-l-md focus:outline-none" />
              )} />
            </InputGroup>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Mortgage Type</label>
            <Controller name="mortgageType" control={control} render={({ field }) => (
              <div className="flex flex-col gap-2">
                {['repayment', 'interestOnly'].map(type => (
                  <label key={type} className="flex items-center gap-2 border rounded-md px-3 py-2">
                    <input type="radio" value={type} checked={field.value === type} onChange={() => field.onChange(type)} />
                    {type === 'repayment' ? 'Repayment' : 'Interest Only'}
                  </label>
                ))}
              </div>
            )} />
          </div>

          <button onClick={handleSubmit(calculateRepayment)} className="flex items-center gap-2 bg-[#D9DD29] text-black font-semibold py-2 px-4 rounded-[20px] mt-4 hover:bg-lime-500">
            <Calculator size={18} /> Calculate Repayments
          </button>
        </div>

        {/* Results */}
        <div className="w-1/2 bg-slate-900 text-white p-8 flex flex-col justify-center items-center rounded-bl-[60px]">
          {monthlyRepayment !== null && totalRepayment !== null ? (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">Your results</h3>
              <p className="text-sm text-slate-300 mb-6">Adjust the form and click again to update results.</p>
              <div className="bg-slate-800 p-6 rounded-lg border-t-4 border-yellow-400">
                <p className="text-slate-300 mb-2">Monthly repayments</p>
                <p className="text-4xl font-bold text-lime-400 mb-4">£{monthlyRepayment.toFixed(2)}</p>
                <hr className="border-slate-700 mb-4" />
                <p className="text-slate-300">Total over the term</p>
                <p className="text-xl font-semibold">£{totalRepayment.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <img src="/illustration-empty.svg" alt="Placeholder" className="w-40 h-40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Results shown here</h3>
              <p className="text-sm text-slate-400 mt-2">Complete the form and click to calculate.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const InputGroup = ({ label, prefix, suffix, className = '', children }: any) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm mb-1">{label}</label>
    <div className="flex">
      {prefix && <span className="bg-blue-100 px-3 py-2 border rounded-l-md border-r-0 border-gray-300">{prefix}</span>}
      {children}
      {suffix && <span className="bg-blue-100 px-3 py-2 border rounded-r-md border-l-0 border-gray-300">{suffix}</span>}
    </div>
  </div>
);

