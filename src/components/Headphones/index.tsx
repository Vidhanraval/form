'use client';

import { useState } from 'react';

export default function Page() {
  const [showHeadphonePage, setShowHeadphonePage] = useState(false);
  const [showSpeakersPage, setShowSpeakersPage] = useState(false);
  const [showEarphonesPage, setShowEarphonesPage] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="relative bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* ===== Overlay Modals ===== */}
      {showHeadphonePage && (
        <div className="fixed inset-0 z-50 bg-white text-black px-6 md:px-20 py-10 overflow-auto">
          <button
            onClick={() => setShowHeadphonePage(false)}
            className="text-sm text-gray-500 hover:text-orange-500 mb-6 block"
          >
            &larr; Go Back
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="/headpphone.webp"
                alt="XX99 Mark II Headphones"
                className="w-full max-w-sm object-contain"
              />
            </div>

            <div className="max-w-xl space-y-6">
              <p className="text-sm text-orange-500 tracking-widest">NEW PRODUCT</p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase">XX99 Mark II Headphones</h2>
              <p className="text-gray-600">
                The new XX99 Mark II headphones is the pinnacle of pristine audio.
              </p>
              <p className="text-lg font-bold">$ 2,999</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button onClick={decreaseQty} className="px-3 py-2 text-lg hover:bg-gray-200">-</button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={increaseQty} className="px-3 py-2 text-lg hover:bg-gray-200">+</button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 uppercase text-sm font-bold rounded">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSpeakersPage && (
        <div className="fixed inset-0 z-50 bg-white text-black px-6 md:px-20 py-10 overflow-auto">
          <button
            onClick={() => setShowSpeakersPage(false)}
            className="text-sm text-gray-500 hover:text-orange-500 mb-6 block"
          >
            &larr; Go Back
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="/speaker.webp"
                alt="ZX9 Speakers"
                className="w-full max-w-sm object-contain"
              />
            </div>

            <div className="max-w-xl space-y-6">
              <p className="text-sm text-orange-500 tracking-widest">NEW PRODUCT</p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase">ZX9 Speakers</h2>
              <p className="text-gray-600">
                Upgrade your sound system with ZX9 active speaker. Wireless and powerful.
              </p>
              <p className="text-lg font-bold">$ 4,500</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button onClick={decreaseQty} className="px-3 py-2 text-lg hover:bg-gray-200">-</button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={increaseQty} className="px-3 py-2 text-lg hover:bg-gray-200">+</button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 uppercase text-sm font-bold rounded">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEarphonesPage && (
        <div className="fixed inset-0 z-50 bg-white text-black px-6 md:px-20 py-10 overflow-auto">
          <button
            onClick={() => setShowEarphonesPage(false)}
            className="text-sm text-gray-500 hover:text-orange-500 mb-6 block"
          >
            &larr; Go Back
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="/Audiophone.webp"
                alt="Audiophone Earphones"
                className="w-full max-w-sm object-contain"
              />
            </div>

            <div className="max-w-xl space-y-6">
              <p className="text-sm text-orange-500 tracking-widest">NEW PRODUCT</p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase">Audiophone Earphones</h2>
              <p className="text-gray-600">
                Sleek design and crystal-clear sound for on-the-go listening.
              </p>
              <p className="text-lg font-bold">$ 1,999</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button onClick={decreaseQty} className="px-3 py-2 text-lg hover:bg-gray-200">-</button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={increaseQty} className="px-3 py-2 text-lg hover:bg-gray-200">+</button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 uppercase text-sm font-bold rounded">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Home Page ===== */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-white font-bold text-2xl">audiophile</h1>
        <ul className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
          <li className="cursor-pointer hover:text-orange-400">Home</li>
          <li className="cursor-pointer hover:text-orange-400" onClick={() => setShowHeadphonePage(true)}>Headphones</li>
          <li className="cursor-pointer hover:text-orange-400" onClick={() => setShowSpeakersPage(true)}>Speakers</li>
          <li className="cursor-pointer hover:text-orange-400" onClick={() => setShowEarphonesPage(true)}>Earphones</li>
        </ul>
        <div className="cursor-pointer">
          <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1h4l2.68 13.39A2 2 0 0 0 8.63 16h9.52a2 2 0 0 0 1.95-1.61L24 4H6"
              fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </nav>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 gap-12">
        <div className="text-center md:text-left max-w-lg space-y-6">
          <p className="text-sm text-gray-400 tracking-[0.3em]">NEW PRODUCT</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">XX99 MARK II HEADPHONES</h2>
          <p className="text-gray-300">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button
            onClick={() => setShowHeadphonePage(true)}
            className="mt-4 bg-orange-500 hover:bg-orange-600 rounded-[30px] text-white py-2 px-6 uppercase text-sm font-bold"
          >
            See Product
          </button>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/headphone.webp"
            alt="Headphones"
            className="w-full max-w-[300px] md:max-w-[550px] object-contain"
          />
        </div>
      </section>

      {/* ===== Categories Section ===== */}
      <section className="bg-white text-black py-16 px-6 grid md:grid-cols-3 gap-8">
        {/* Headphones */}
        <div
          className="bg-gray-100 text-center py-8 rounded-lg shadow-md cursor-pointer"
          onClick={() => setShowHeadphonePage(true)}
        >
          <img src="/headpphone.webp" alt="Headphones" className="mx-auto h-40 mb-6" />
          <h3 className="text-lg font-bold tracking-wide">HEADPHONES</h3>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide hover:text-orange-500">Shop &gt;</p>
        </div>

        {/* Speakers */}
        <div
          className="bg-gray-100 text-center py-8 rounded-lg shadow-md cursor-pointer"
          onClick={() => setShowSpeakersPage(true)}
        >
          <img src="/speaker.webp" alt="Speakers" className="mx-auto h-40 mb-6" />
          <h3 className="text-lg font-bold tracking-wide">SPEAKERS</h3>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide hover:text-orange-500">Shop &gt;</p>
        </div>

        {/* Earphones */}
        <div
          className="bg-gray-100 text-center py-8 rounded-lg shadow-md cursor-pointer"
          onClick={() => setShowEarphonesPage(true)}
        >
          <img src="/Audiophone.webp" alt="Earphones" className="mx-auto h-40 mb-6" />
          <h3 className="text-lg font-bold tracking-wide">EARPHONES</h3>
          <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide hover:text-orange-500">Shop &gt;</p>
        </div>
      </section>
    </div>
  );
}
