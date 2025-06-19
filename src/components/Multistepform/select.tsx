'use client'

import { useId } from "react";
import { useForm, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Plan = {
  name: string;
  monthly: string;
  yearly: string;
  icon: string;
 
};

const plans: Plan[] = [
  { name: 'Arcade', monthly: '$9/mo', yearly: '$90/yr', icon: '🎮' },
  { name: 'Advanced', monthly: '$12/mo', yearly: '$120/yr', icon: '🚀'},
  { name: 'Pro', monthly: '$15/mo', yearly: '$150/yr', icon: '💼' },
];

type FormValues = {
  plan: string;
  billing: 'monthly' | 'yearly';
};

const Select: React.FC = () => {
  const { control, watch } = useForm<FormValues>({
    defaultValues: {
      plan: 'Arcade',
      billing: 'monthly',
    },
  });

  const selectedPlan = watch('plan');
  const billingType = watch('billing');
  const id = useId();

  return (
    <div className="justify-between gap-5 flex flex-col px-11">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">Select your plan</h1>
        <p className="text-slate-500 text-sm">Choose monthly or yearly billing.</p>
      </div>

      
      <Controller
        control={control}
        name="plan"
        render={({ field }) => (
          <div className="flex flex-col gap-4">
            {plans.map((plan) => {
              const isSelected = field.value === plan.name;
              const displayPrice = billingType === 'monthly' ? plan.monthly : plan.yearly;

              return (
                <div
                  key={plan.name}
                  onClick={() => field.onChange(plan.name)}
                  className={`cursor-pointer flex justify-between items-center border rounded-lg p-4 transition-all ${
                    isSelected ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                  }`}
                >
                  
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{plan.icon}</div>
                    <div>
                      <h3 className="font-medium text-indigo-900">{plan.name}</h3>
                      <p className="text-sm text-gray-500">
                        {billingType === 'yearly' ? 'yearly' : ' monthly'}
                      </p>
                    </div>
                  </div>

                  
                  <div className="text-indigo-600 font-semibold text-sm whitespace-nowrap">
                    {displayPrice}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      />

      
      <div className="flex justify-center">
        <Controller
          control={control}
          name="billing"
          render={({ field }) => (
            <div className="flex w-fit rounded-md bg-blue-100 p-1 items-center">
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="grid grid-cols-2 text-sm font-medium"
              >
                <label
                  htmlFor={`${id}-monthly`}
                  className={`cursor-pointer px-4 py-1 rounded-md transition-colors ${
                    field.value === 'monthly' ? 'bg-blue-500 text-white' : 'text-blue-700'
                  }`}
                >
                  Bill Monthly
                  <RadioGroupItem id={`${id}-monthly`} value="monthly" className="sr-only" />
                </label>

                <label
                  htmlFor={`${id}-yearly`}
                  className={`cursor-pointer px-4 py-1 rounded-md transition-colors ${
                    field.value === 'yearly' ? 'bg-blue-500 text-white' : 'text-blue-700'
                  }`}
                >
                  Bill Yearly
                  <RadioGroupItem id={`${id}-yearly`} value="yearly" className="sr-only" />
                </label>
              </RadioGroup>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Select;
