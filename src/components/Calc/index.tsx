
import React from 'react';

const Calc: React.FC = () => {
  return (
    <div className="bg-[#3a4764] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#252d44] p-6 rounded-xl shadow-xl w-full max-w-sm">

        <div className="text-white text-2xl font-bold mb-4">Calc</div>

        <div className="bg-[#181f33] text-white text-3xl text-right font-bold rounded p-4 mb-6">
          399,981
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">7</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">8</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">9</button>
          <button className="py-3 rounded font-bold text-xl bg-[#647198] text-white">DEL</button>

          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">4</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">5</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">6</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">+</button>

          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">1</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">2</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">3</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">-</button>

          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">.</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">0</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">/</button>
          <button className="py-3 rounded font-bold text-xl bg-[#eae3dc] text-black">*</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 rounded bg-[#647198] text-white font-bold text-xl">RESET</button>
          <button className="py-3 rounded bg-[#d13f30] text-white font-bold text-xl">=</button>
        </div>

      </div>
    </div>
  );
};

export default Calc;
