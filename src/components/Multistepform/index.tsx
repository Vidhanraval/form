'use client'
import React, { useState } from 'react';
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"


type Step = {
  number: number;
  label: string;
  title: string;
};

const steps: Step[] = [
  { number: 1, label: "STEP 1", title: "YOUR INFO" },
  { number: 2, label: "STEP 2", title: "SELECT PLAN" },
  { number: 3, label: "STEP 3", title: "ADD-ONS" },
  { number: 4, label: "STEP 4", title: "SUMMARY" },
];

const Multistepform: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const currentStep = 1;

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full p-4 h-[560px]">
        {/* Sidebar */}
        <div className="w-1/3 bg-indigo-600 text-white p-8 flex flex-col rounded-2xl">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center space-x-4 space-y-4">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                ${currentStep === step.number
                    ? "bg-[#BEE1FD] text-black"
                    : "border-2 border-white text-white"
                  }`}
              >
                {step.number}
              </div>
              <div>
                <div className="text-xs tracking-wider opacity-80">{step.label}</div>
                <div className="uppercase font-bold text-sm">{step.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="w-2/3 p-6">
          <h1 className="text-2xl font-bold text-slate-800">Personal Info</h1>
          <p className="text-slate-500 mb-6">
            Please provide your name, email address, and phone number.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="space-y-4  font-medium text-sm text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Jon Shen'
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <label htmlFor="email" className="space-y-4  font-medium text-sm text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='abc@gmail.com'
                required
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <label htmlFor="phone" className="space-y-4 font-medium text-sm text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='e.g. +123456789'
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>
        <div className="relative h-full">
          <Button className="absolute bottom-4 right-4 flex items-center gap-2">
            Next step
            <ArrowRightIcon
              className="opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              aria-hidden="true"
            />
          </Button>
        </div>


      </div>
    </div>
  );
};

export default Multistepform;
