const newLocal = "use client";
import React from 'react'

const Form = () => {
  return (
    <div className="bg-[#e0e8ff] min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl w-[400px]">
        <img
          src="/illustration-hero.svg"
          alt="Hero"
          className="rounded-t-2xl w-full"
        />
        <div className="p-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-4">
            Order Summary
          </h2>
          <p className="text-slate-500 mb-6 text-sm">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className="bg-blue-100 rounded-xl p-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img src="/icon-music.svg" alt="Music Icon" className="w-10 h-10" />
              <div className="text-left">
                <p className="font-bold text-slate-800 text-sm">Annual Plan</p>
                <p className="text-slate-500 text-sm">$59.99/year</p>
              </div>
            </div>
            <a href="#" className="text-blue-700 text-sm font-bold underline hover:text-blue-900">
              Change
            </a>
          </div>

        
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold shadow-lg mb-4">
            Proceed to Payment
          </button>
          <button className="w-full text-slate-500 font-bold text-sm hover:text-black">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
