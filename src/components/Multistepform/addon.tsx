import React, { useState } from "react";

type Plan = {
  name: string;
  price: string;
  title: string;
};

const plans: Plan[] = [
  { name: 'Online Service', price: '$1/mo', title: "Access to multiplayer games" },
  { name: 'Larger storage', price: '$2/mo', title: "Extra 1TB of cloud save" },
  { name: 'Customizable profile', price: '$2/mo', title: "Custom theme on your profile" },
];

const Addon: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('Online Service');

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Pick add-ons</h2>
      <p className="text-slate-500 mb-6">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={`cursor-pointer border rounded-lg px-4 py-3 transition-all ${
              selectedPlan === plan.name
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-indigo-800">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.title}</p>
              </div>
              <p className="text-indigo-700 font-medium">{plan.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addon;
