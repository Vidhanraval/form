import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

import React from "react";
type Product = {
    type: string
    name: string
    price: number
    image: string
}
const products = [
    {
        name: "Waffle with Berries",
        type: "Waffle",
        price: 6.5,
        image: "/image-waffle-desktop.jpg",
    },
    {
        type: "Crème Brûlée",
        name: "Vanilla Bean Crème Brûlée",
        price: 7.0,
        image: "/image-creme-brulee-desktop.jpg",
    },
    {
        type: "Macaron",
        name: "Macaron Mix of Five",
        price: 8.0,
        image: "/image-tiramisu-desktop.jpg",
    },
    {
        type: "Tiramisu",
        name: "Classic Tiramisu",
        price: 5.5,         
        image: "/image-tiramisu-desktop.jpg",
    },
    {
        type: "Baklava",
        name: "Pistachio Baklava",
        price: 4.0,
        image: "/image-tiramisu-desktop.jpg",
    },
    {
        type: "Pie",
        name: "Lemon Meringue Pie",
        price: 5.0,
        image: "/image-tiramisu-desktop.jpg",
    },
    {
        type: "Cake",
        name: "Red Velvet Cake",
        price: 4.5,
        image: "/image-tiramisu-desktop.jpg",
    },
    {
        type: "Brownie",
        name: "Salted Caramel Brownie",
        price: 4.5,
        image: "/image-tiramisu-desktop.jpg",
    },
    {
        type: "Panna Cotta",
        name: "Vanilla Panna Cotta",
        price: 6.5,
        image: "/image-tiramisu-desktop.jpg",
    },
];

const RightPanel = () => {
    return (
        <div className="bg-white h-fit p-6 rounded-2xl shadow-md flex flex-col  gap-4 items-center text-center">
            <h2 className="text-xl font-bold text-red-600">Your Cart (0)</h2>
            <div className='relative w-1/2 aspect-square'>
                <Image alt='Empty cart illustration' src={"/illustration-empty-cart.svg"} className='' fill />
            </div>
            <p className="text-gray-500">Your added items will appear here.</p>
        </div>
    );
};
const ProductCard = ({ product, index }: { product: Product, index: number }) => {
    return (
        <article key={index} className="bg-white rounded-2xl p-4">
            <div className='relative w-full aspect-square'>
                <Image alt={product.name} src={product.image} className='object-cover rounded-2xl' fill />
                <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center gap-2 rounded-full border border-orange-600 bg-white text-black px-4 py-2">
                    <ShoppingCart className="w-5 h-5 text-orange-600" />
                    <span className='whitespace-nowrap'>
                        Add to Cart
                    </span>
                </button>
            </div>

            <p className="text-gray-400 mt-4 text-xs">{product?.type}</p>
            {product?.name && <h2 className="text-base font-semibold mt-1">{product?.name}</h2>}
            <p className="text-2xl text-orange-600 mt-1">
                ${product.price.toFixed(2)}
            </p>
        </article>
    );
};

const ProductList = () => {
    return (
        <div className="bg-white-100 p-10">


            {/* Left - Product Grid */}
            <div className="grid md:grid-cols-[1fr_30%] grid-cols-1 gap-6">
                <div className='flex flex-col gap-4'>
                    <h1 className="text-4xl font-extrabold pl-[20px] mb-10">Desserts</h1>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                        {products.map((product, index) => (
                            <ProductCard product={product} key={index} index={index} />
                        ))}
                    </div>
                </div>
                <RightPanel />
            </div>



        </div>
    );
};

export default ProductList;

