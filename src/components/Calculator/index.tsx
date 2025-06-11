"use client";

import React, { useState } from "react";

export default function MortgageCalculator() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interest, setInterest] = useState("");
  const [type, setType] = useState("");

  const clearAll = () => {
    setAmount("");
    setTerm("");
    setInterest("");
    setType("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* Left: Form */}
        <div className="w-1/2 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Mortgage Calculator</h2>
            <button className="text-blue-500 text-sm underline" onClick={clearAll}>
              Clear All
            </button>
          </div>

          {/* Input: Amount */}
          <div className="mb-4">
            <label className="block mb-1 text-sm">Mortgage Amount</label>
            <input
              type="text"
              placeholder="£"
              className="w-full border rounded-md p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Input: Term & Interest */}
          <div className="mb-4 flex gap-2">
            <div className="flex-1">
              <label className="block mb-1 text-sm">Mortgage Term</label>
              <input
                type="text"
                placeholder="years"
                className="w-full border rounded-md p-2"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm">Interest Rate</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="%"
                  className="w-full border rounded-md p-2"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Mortgage Type */}
          <div className="mb-6">
            <label className="block mb-2 text-sm">Mortgage Type</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="repayment"
                  checked={type === "repayment"}
                  onChange={(e) => setType(e.target.value)}
                />
                Repayment
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="interest-only"
                  checked={type === "interest-only"}
                  onChange={(e) => setType(e.target.value)}
                />
                Interest Only
              </label>
            </div>
          </div>

          {/* Button */}
          <button className="border-x-green-700 hover:bg-lime-200 w-2xs py-2 px-6 font-semibold rounded-3xl">
            <span role="img" aria-label="calculator">🧮</span> Calculate Repayments
          </button>
        </div>

        {/* Right: Result Preview */}
        <div className="w-1/2 bg-sky-950 text-white flex flex-col items-center justify-center p-8 rounded-bl-4xl">
          <img src="/illustration-empty.svg" alt="Illustration" className="mb-4 w-40" />
          <h3 className="text-lg font-semibold mb-2">Results shown here</h3>
          <p className="text-sm text-center">
            Complete the form and click “calculate repayments” to see what your monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
}
