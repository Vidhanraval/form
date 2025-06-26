'use client';
import Link from 'next/link';
import { Product } from '@/types/product';
import React from 'react';

type Props = {
  product: Product;
};

export default function CategoryCard({ product }: Props) {
  return (
    <Link href={`/hp/${product.slug}`} className="relative bg-gray-100 text-center pt-20 pb-10 rounded-xl cursor-pointer hover:shadow-xl transition">
      <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
        <img src={product.image} alt={product.title} className="h-32 w-auto object-contain" />
      </div>
      <h3 className="font-bold text-lg uppercase mt-6">{product.title}</h3>
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider hover:text-orange-500">Shop &gt;</p>
    </Link>
  );
}
