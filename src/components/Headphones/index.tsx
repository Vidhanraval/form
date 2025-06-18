'use client';

import { useState, useEffect } from 'react';

type ProductType = 'headphone' | 'speaker' | 'earphone';

const products: Record<ProductType, {
  title: string;
  description: string;
  price: string;
  image: string;
}> = {
  headphone: {
    title: 'XX99 Mark II Headphones',
    description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio.',
    price: '$ 2,999',
    image: '/headpphone.webp',
  },
  speaker: {
    title: 'ZX9 Speakers',
    description: 'Upgrade your sound system with ZX9 active speaker. Wireless and powerful.',
    price: '$ 4,500',
    image: '/speaker.webp',
  },
  earphone: {
    title: 'Audiophone Earphones',
    description: 'Sleek design and crystal-clear sound for on-the-go listening.',
    price: '$ 1,999',
    image: '/Audiophone.webp',
  },
};

export default function Page() {
  const [showModal, setShowModal] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    setQuantity(1);
  }, [showModal]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden relative">
      {/* All Products Modal */}
      {showAllProducts && (
        <div className="fixed inset-0 z-50 bg-white text-black overflow-auto px-6 py-8 md:py-16 md:px-10">
          <button
            onClick={() => setShowAllProducts(false)}
            className="text-gray-600 hover:text-orange-500 mb-6 text-sm"
          >
            &larr; Go Back
          </button>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(products) as ProductType[]).map((type) => (
              <div key={type} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg">
                <img
                  src={products[type].image}
                  alt={products[type].title}
                  className="w-48 h-48 object-contain mb-4"
                />
                <p className="text-orange-500 text-xs tracking-widest">NEW PRODUCT</p>
                <h3 className="text-lg font-bold uppercase mt-2 mb-2 text-center">{products[type].title}</h3>
                <p className="text-center text-sm text-gray-600 mb-3">{products[type].description}</p>
                <p className="font-bold text-lg mb-4">{products[type].price}</p>
                <div className="flex gap-4">
                  <button className="bg-gray-300 px-3 py-1 rounded text-xl">-</button>
                  <span className="px-2">1</span>
                  <button className="bg-gray-300 px-3 py-1 rounded text-xl">+</button>
                </div>
                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded uppercase text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-white text-black overflow-auto px-6 py-8 md:py-16 md:px-32">
          <button
            onClick={() => setShowModal(null)}
            className="text-gray-600 hover:text-orange-500 mb-6 text-sm"
          >
            &larr; Go Back
          </button>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              src={products[showModal].image}
              alt={products[showModal].title}
              className="w-full max-w-sm bg-gray-100 p-4 rounded-lg"
            />
            <div className="space-y-5 text-center lg:text-left">
              <p className="text-orange-500 text-sm tracking-widest">NEW PRODUCT</p>
              <h2 className="text-3xl md:text-4xl font-bold uppercase">{products[showModal].title}</h2>
              <p className="text-gray-600">{products[showModal].description}</p>
              <p className="font-bold text-lg">{products[showModal].price}</p>
              <div className="flex justify-center lg:justify-start gap-4">
                <div className="flex items-center border rounded">
                  <button onClick={decreaseQty} className="px-4 py-2 text-xl">-</button>
                  <span className="px-4">{quantity}</span>
                  <button onClick={increaseQty} className="px-4 py-2 text-xl">+</button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 uppercase font-bold rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700 sticky top-0 z-40 bg-black">
        <div className="flex items-center gap-3">
          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-2xl">&#9776;</button>
          <h1 className="font-bold text-2xl">audiophile</h1>
        </div>
        <ul className="hidden md:flex gap-8 uppercase text-sm tracking-wider">
          {(Object.keys(products) as ProductType[]).map((type) => (
            <li key={type} className="cursor-pointer hover:text-orange-400" onClick={() => setShowModal(type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </li>
          ))}
        </ul>
        <div className="cursor-pointer">
          <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1h4l2.68 13.39A2 2 0 0 0 8.63 16h9.52a2 2 0 0 0 1.95-1.61L24 4H6"
              fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4 text-center uppercase font-semibold">
          {(Object.keys(products) as ProductType[]).map((type) => (
            <div
              key={type}
              className="cursor-pointer hover:text-orange-400"
              onClick={() => {
                setShowModal(type);
                setShowMenu(false);
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}s
            </div>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-24 gap-12">
        <div className="text-center md:text-left max-w-lg space-y-6">
          <p className="text-sm text-gray-400 tracking-[0.3em]">NEW PRODUCT</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase">XX99 MARK II HEADPHONES</h2>
          <p className="text-gray-300">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button
            onClick={() => setShowAllProducts(true)}
            className="mt-4 bg-orange-500 hover:bg-orange-600 rounded-full text-white py-2 px-6 uppercase text-sm font-bold"
          >
            See Product
          </button>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/headphone.webp"
            alt="Headphones"
            className="w-[250px] md:w-[400px] lg:w-[500px] object-contain"
          />
        </div>
      </section>

      {/* Category Cards */}
      <section className="bg-white text-black px-6 py-16 grid gap-10 md:grid-cols-3">
        {(Object.keys(products) as ProductType[]).map((type) => (
          <div
            key={type}
            className="relative bg-gray-100 text-center pt-20 pb-10 rounded-xl cursor-pointer hover:shadow-xl transition"
            onClick={() => setShowModal(type)}
          >
            <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
              <img
                src={products[type].image}
                alt={products[type].title}
                className="h-32 w-auto object-contain"
              />
            </div>
            <h3 className="font-bold text-lg uppercase mt-6">{type}</h3>
            <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider hover:text-orange-500">Shop &gt;</p>
          </div>
        ))}
      </section>
    </div>
  );
}
