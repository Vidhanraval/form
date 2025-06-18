'use client';

import React from 'react';

export default function RockPaperScissors() {
  return (
    <div className="min-h-screen bg-[#1f3756] flex flex-col items-center justify-between p-6 md:p-10 text-white font-bold">
      {/* Header */}
      <div className="border-4 border-gray-500 rounded-lg flex justify-between items-center w-full max-w-lg p-4">
        <div className="text-left leading-tight text-white text-xl md:text-2xl">
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <div className="bg-white text-center text-[#3b4363] rounded-lg px-6 py-2">
          <p className="text-xs tracking-widest">SCORE</p>
          <p className="text-4xl text-black">12</p>
        </div>
      </div>

      {/* Game Options Triangle */}
      <div className="relative flex justify-center items-center w-full max-w-[350px] md:max-w-[500px] aspect-square mt-20 md:mt-28">
        {/* Optional connecting lines using SVG */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full"
        >
          <line x1="150" y1="40" x2="40" y2="240" stroke="#00000040" strokeWidth="12" />
          <line x1="150" y1="40" x2="260" y2="240" stroke="#00000040" strokeWidth="12" />
          <line x1="40" y1="240" x2="260" y2="240" stroke="#00000040" strokeWidth="12" />
        </svg>

        {/* Paper */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="bg-white border-[20px] border-blue-600 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-xl text-[3rem] md:text-[4rem]">
            🖐️
          </div>
        </div>

        {/* Scissors */}
        <div className="absolute bottom-0 right-0">
          <div className="bg-white border-[20px] border-yellow-500 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-xl text-[3rem] md:text-[4rem]">
            ✌️
          </div>
        </div>

        {/* Rock */}
        <div className="absolute bottom-0 left-0">
          <div className="bg-white border-[20px] border-red-500 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-xl text-[3rem] md:text-[4rem]">
            ✊
          </div>
        </div>
      </div>

      {/* Rules Button */}
      <div className="mt-20 md:mt-16">
        <button className="border border-white px-8 py-3 rounded-md tracking-wide text-base md:text-lg hover:bg-white hover:text-[#1f3756] transition">
          RULES
        </button>
      </div>
    </div>
  );
}
