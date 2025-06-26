'use client';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-24 gap-12">
      <div className="text-center md:text-left max-w-lg space-y-6">
        <p className="text-sm text-gray-400 tracking-[0.3em]">NEW PRODUCT</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase">XX99 MARK II HEADPHONES</h2>
        <p className="text-gray-300">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link href="/store" className="mt-4 bg-orange-500 hover:bg-orange-600 rounded-full text-white py-2 px-6 uppercase text-sm font-bold">
          See Product
        </Link>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <img src="/headphone.webp" alt="Headphones" className="w-[250px] md:w-[400px] lg:w-[500px] object-contain" />
      </div>
    </section>
  );
}
