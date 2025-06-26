'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import CategoryCard from '@/components/ProductList/categoryCard';
import { Product } from '@/types/product';
import { ProductType } from '@/types/ProductType';

interface Props {
  products: Product[];
}

export default function ClientWrapper({ products }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState<ProductType | null>(null);

  useEffect(() => {
    // Optional logic for when modal changes
  }, [showModal]);

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
          <CategoryCard key={product.slug} product={product} />
        ))}
      </section>
    </div>
  );
}
