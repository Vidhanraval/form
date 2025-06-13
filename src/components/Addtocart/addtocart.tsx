import React from "react";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-green-500 text-xl">✔️</div>
            <h2 className="text-xl font-bold text-gray-900">Order Confirmed</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">We hope you enjoy your food!</p>

          <div className="divide-y divide-gray-200">
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Classic Tiramisu</p>
                <p className="text-sm text-gray-500">2x @ $5.50</p>
              </div>
              <p className="text-gray-900">$5.50</p>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Vanilla Bean Crème Brûlée</p>
                <p className="text-sm text-gray-500">4x @ $7.00</p>
              </div>
              <p className="text-gray-900">$28.00</p>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Vanilla Panna Cotta</p>
                <p className="text-sm text-gray-500">2x @ $6.50</p>
              </div>
              <p className="text-gray-900">$13.00</p>
            </div>

            <div className="flex items-center justify-between pt-4 text-lg font-semibold">
              <p>Order Total</p>
              <p>$46.50</p>
            </div>
          </div>

          <button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full transition-all">
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}
