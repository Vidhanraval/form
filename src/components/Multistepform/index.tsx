'use client'
import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Addon from './addon';
import Select from './select';
import Summary from './summary';


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
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const goNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className=' px-11 justify-center items-center '>
              <h1 className="text-2xl font-bold text-slate-800">Personal Info</h1>
              <p className="text-slate-500 mb-6">
                Please provide your name,email address, and phone number.
              </p>
              <form className="space-y-4">
                <div className="flex flex-col space-y-4">
                  <label htmlFor="name" className="font-medium text-sm text-gray-700">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Jon Shen'
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <label htmlFor="email" className="font-medium text-sm text-gray-700">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='abc@gmail.com'
                    required
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <label htmlFor="phone" className="font-medium text-sm text-gray-700">Phone Number</label>
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

          </>
        );
      case 2:
        return <Select />;
      case 3:
        return <Addon />;
      case 4:
        return <Summary />


      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full p-4 h-[560px]">
        {/* Sidebar */}
        <div className="w-1/3 bg-indigo-600 text-white p-8 flex flex-col gap-4 rounded-2xl space-y-2.5" style={{ backgroundImage: "url('/bg-sidebar-desktop.svg')" }}>
          {steps.map((step) => (
            <div key={step.number} className="flex items-center space-x-4">
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

        <div className="w-2/3 p-6 flex flex-col h-full">
          
          <div className="flex-1 overflow-y-auto">{renderStepContent()}</div>

          
          <div className="mt-6 flex justify-between items-center">
            {currentStep > 1 ? (
              <Button onClick={goBack} variant="outline" className="flex items-center gap-2 bg-blue-950 text-white">
                <ArrowLeftIcon size={16} /> Go Back
              </Button>
            ) : (
              <div /> 
            )}
            {currentStep < steps.length ? (
              <Button onClick={goNext} className="flex items-center gap-2 px-6 py-2 w-fit bg-blue-950 text-white">
                Next Step
                <ArrowRightIcon size={16} />
              </Button>
            ) : (
              <Button disabled className="opacity-50 w-fit px-6 py-2 bg-blue-950 text-white">Confirm</Button>
            )}
          </div>
        </div>



      </div>
    </div>

  );
};

export default Multistepform;
