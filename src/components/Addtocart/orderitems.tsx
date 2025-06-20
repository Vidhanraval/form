import Image from "next/image";
import React from "react";

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
  image: string;
};

type Props = {
  items: OrderItem[];
};

const OrderItemsList = ({ items }: Props) => {
  const orderTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-orange-50 rounded-lg p-4 flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2 border-b border-gray-200"
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

      <div className="flex justify-between items-center  p-3">
        <p className="text-sm">Order Total</p>
        <p className="font-semibold">${orderTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderItemsList; 
