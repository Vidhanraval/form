import React from "react";

export default function App() {
  return (
    <div className="bg-[#3a4764] min-h-screen flex items-center justify-center font-sans">
      <div className="w-[450px]">
        <div className="flex justify-between items-center px-4 pt-6 pb-4">
          <h1 className="text-white text-3xl font-bold">Calc</h1>

          <div>
            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center justify-end gap-6 h-[10px]">
                <span className="text-white text-xs font-bold tracking-wide">THEME</span>
                <div className="flex gap-4 text-white text-sm font-bold">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>


              <div className="w-[60px] h-[24px] bg-[#232c43] rounded-full relative mt-1">

                <div className="w-[16px] h-[16px] bg-[#d13f30] rounded-full absolute top-1 left-1"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-[#181f32] text-white text-4xl font-bold text-right px-6 py-6 rounded-md mb-6">
          1234567890
        </div>

        <div className="bg-[#252d44] p-6 rounded-md grid grid-cols-4 gap-4">
          {[
            "7", "8", "9", "DEL",
            "4", "5", "6", "+",
            "1", "2", "3", "-",
            ".", "0", "/", "x"
          ].map((key) => (
            <button
              key={key}
              className={`py-3 text-xl font-bold rounded shadow
                ${key === "DEL" ? "bg-[#647198] text-white" : "bg-[#eae3dc] text-[#434a59]"}
              `}
            >
              {key}
            </button>
          ))}

          <button className="col-span-2 py-3 text-xl font-bold rounded shadow bg-[#647198] text-white">
            RESET
          </button>
          <button className="col-span-2 py-3 text-xl font-bold rounded shadow bg-[#d13f30] text-white">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
