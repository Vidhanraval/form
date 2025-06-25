'use client'

import Header from '@/components/ProductList/Header';
import Hero from '@/components/ProductList/Hero';
import CategoryCard from '@/components/ProductList';
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductType } from '@/types/ProductType';

const products: Product[] = [
  {
    title: 'XX99 Mark II Headphones',
    slug: 'xx99-mark-ii',
    image: '/headphone.webp',
    description: 'High-quality headphones',
    price: 2999,
  },
  {
    title: 'ZX9 Speakers',
    slug: 'zx9-speakers',
    image: '/speaker.webp',
    description: 'Loud and clear speakers',
    price: 3999,
  },
  {
    title: 'Audiophone Earphones',
    slug: 'audiophone-earphones',
    image: '/Audiophone.webp',
    description: 'Crisp earphones for everyday use',
    price: 1999,
  },
];

export default function Page() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState<ProductType | null>(null);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden relative">
      <Header
        onSelect={(type) => setShowModal(type)}
        onToggleMenu={() => setShowMenu(!showMenu)}
        showMenu={showMenu}
      />

      <Hero />

      <section className="bg-white text-black px-6 py-16 grid gap-10 md:grid-cols-3">
        {products.map((product) => (
          <CategoryCard key={product.slug} products={products} />
        ))}
      </section>
    </div>
  );
}
