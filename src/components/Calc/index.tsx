// src/components/Calc/index.tsx
import React, { useState } from 'react';
import Button from '../Calc/Button';

const keys = [
  ['7', '8', '9', 'DEL'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['.', '0', '/', 'x'],
];

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('399,981');

  return (
    <div className="w-full max-w-sm">
      <div className="text-white text-2xl font-bold mb-2 flex justify-between items-center">
        <span>calc</span>
        <div className="text-xs">THEME</div>
      </div>

      <div className="bg-[#181F33] text-white text-3xl font-bold text-right p-4 rounded mb-4">
        {display}
      </div>

      <div className="bg-[#252D44] p-4 rounded">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {keys.flat().map((key) => (
            <Button
              key={key}
              label={key}
              type={key === 'DEL' ? 'action' : 'number'}
              onClick={() => {
                // Add logic here
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button label="RESET" type="action" onClick={() => {}} />
          <button className="bg-[#D13F30] text-white text-xl font-bold py-3 rounded">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
