import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/types/ProductType';  // ✅ Correct path

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-black px-6 py-10">
      <Link href="/hp" className="text-sm text-gray-600 hover:text-orange-500 mb-8 block">
        ← Go Back
      </Link>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.slug} className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
            <Image
              src={product.image}
              alt={product.title}
              width={192}
              height={192}
              className="object-contain mb-4"
            />
            <p className="text-orange-500 text-xs tracking-widest mb-2">NEW PRODUCT</p>
            <h3 className="text-lg font-bold uppercase text-center">{product.title}</h3>
            <p className="text-center text-sm text-gray-600 mb-3">{product.description}</p>
            <p className="font-bold text-lg mb-4">{product.price}</p>

            <div className="flex gap-4 items-center">
              <div className="bg-gray-300 px-3 py-1 rounded text-xl">-</div>
              <span className="px-2">1</span>
              <div className="bg-gray-300 px-3 py-1 rounded text-xl">+</div>
            </div>

            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded uppercase text-sm font-semibold hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
