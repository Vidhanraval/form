import Image from "next/image";
import React from "react";

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
            image: "/image-creme-brulee-desktop.jpg",
        },
        {
            name: "Vanilla Panna Cotta",
            quantity: 2,
            price: 6.5,
            image: "/image-creme-brulee-desktop.jpg",
        },
    ];

    const orderTotal = orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10 relative">

            <div className="Absolute top-2 h-[-5] left-4">
                <Image
                    src="\icon-order-confirmed.svg"
                    alt="Success Icon"
                    width={48}
                    height={48}
                />
            </div>
            <h2 className="text-4xl font-bold mb-2">Order Confirmed</h2>
            <p className=" text-gray-500 mb-6">We hope you enjoy your food!</p>

            <div className="bg-orange-50 rounded-lg p-4">
                {orderItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between mb-6 items-center py-2 border-b border-gray-200"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={48}
                                height={48}
                                className="rounded object-cover"
                            />
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">
                                    {item.quantity}x @ ${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                ))}

                <div className="flex justify-between items-center mt-4 text-lg font-semibold">
                    <p>Order Total</p>
                    <p>${orderTotal.toFixed(2)}</p>
                </div>
            </div>

            <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full">
                Start New Order
            </button>
        </div>
    );
};

export default OrderConfirmed;
