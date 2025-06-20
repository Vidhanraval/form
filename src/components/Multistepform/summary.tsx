import React from "react";

type Plan = {
  name: string;
  price: string;
};

const mainPlan: Plan = { name: "Arcade (Monthly)", price: "$9/mo" };

const addOns: Plan[] = [
  { name: "Online Service", price: "$2/mo" },
  { name: "Large Storage", price: "$2/mo" },
];

const Summary: React.FC = () => {
  const total = [mainPlan, ...addOns]
    .map((plan) => parseFloat(plan.price.replace(/[^0-9.]/g, '')))
    .reduce((acc, val) => acc + val, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Finishing Up</h2>
      <p className="text-slate-500 mb-6">Double-check everything before confirming.</p>

      <div className="bg-indigo-50 p-4 rounded-lg">

        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
          <div>
            <h3 className="text-indigo-800 font-semibold">{mainPlan.name}</h3>
            <button className="text-sm underline text-gray-500 hover:text-indigo-500 mt-1">
              Change
            </button>
          </div>
          <p className="font-semibold text-indigo-800">{mainPlan.price}</p>
        </div>


        <div className="mt-3 flex flex-col gap-2">
          {addOns.map((addon) => (
            <div key={addon.name} className="flex justify-between text-sm text-gray-600">
              <span>{addon.name}</span>
              <span>{addon.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-4 mt-6">
        <p className="text-gray-500 text-sm">Total (per month)</p>
        <p className="text-indigo-800 font-bold text-lg">${total}/mo</p>
      </div>
    </div>

  );
};

export default Summary;
