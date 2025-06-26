import Link from "next/link";
import { products } from "@/types/ProductType";
import type { Product } from "@/types/ProductType";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((x: Product) => x.slug === slug);

  if (!product) {
    return <div className="p-6 text-red-600">Product not found: {slug}</div>;
  }

  return (
    <div className="p-6 bg-white text-black min-h-screen">
      <Link href={"/hp"} className="text-sm text-blue-500 mb-4">
        ← Go Back
      </Link>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src={product.image} alt={product.title} className="w-80 object-contain" />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">{product.price}</p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
