import Image from "next/image";
import React from "react";
import OrderItemsList from "./orderitems"; 

const OrderConfirmed = () => {
  const orderItems = [
    {
      name: "Classic Tiramisu",
      quantity: 2,
      price: 7,
      image: "/image-tiramisu-desktop.jpg",
    },
    {
      name: "Vanilla Bean Crème Brûlée",
      quantity: 4,
      price: 7.0,
      image: "/image-creme-bruleeproductlist
      -desktop.jpg",
    },
    {
      name: "Vanilla Panna Cotta",
      quantity: 2,
      price: 6.5,
      image: "/image-creme-brulee-desktop.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-8 flex flex-col gap-6">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/icon-order-confirmed.svg"
            alt="Success Icon"
            width={48}
            height={48}
          />
          <h2 className="text-4xl font-bold">Order Confirmed</h2>
          <p className="text-gray-500">We hope you enjoy your food!</p>
        </div>


        <OrderItemsList items={orderItems} />

        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full">
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
