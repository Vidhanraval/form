import React from 'react';

type ButtonProps = {
  label: string;
  type: 'number' | 'action';
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-xl font-bold py-3 rounded ${
        type === 'action' ? 'bg-indigo-400 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
