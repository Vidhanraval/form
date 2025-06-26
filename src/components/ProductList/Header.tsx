'use client';
import React from 'react';
import { ProductType } from '@/types/ProductType';

type HeaderProps = {
  onSelect: (type: ProductType) => void;
  onToggleMenu: () => void;
  showMenu: boolean;
};

export default function Header({ onSelect, onToggleMenu, showMenu }: HeaderProps) {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700 sticky top-0 z-40 bg-black">
        <div className="flex items-center gap-3">
          <button onClick={onToggleMenu} className="md:hidden text-2xl">&#9776;</button>
          <h1 className="font-bold text-2xl">audiophile</h1>
        </div>
        <ul className="hidden md:flex gap-8 uppercase text-sm tracking-wider">
          {(['headphone', 'speaker', 'earphone'] as const).map((type) => (
            <li key={type} className="cursor-pointer hover:text-orange-400" onClick={() => onSelect(type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </li>
          ))}
        </ul>
      </nav>

      {showMenu && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 text-center uppercase font-semibold">
          {(['headphone', 'speaker', 'earphone'] as const).map((type) => (
            <div key={type} className="cursor-pointer hover:text-orange-400" onClick={() => onSelect(type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </div>
          ))}
        </div>
      )}
    </>
  );
}
