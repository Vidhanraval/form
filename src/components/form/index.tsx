"use client";
import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center items-center bg-blue-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-full w-100">
        <div>
          <img
            src="/illustration-hero.svg"
            alt="image"
            className="w-90 h-50 justify-center items-center"
          />
        </div>
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        <p className="text-gray-600 mb-4">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex justify-between bg-blue-50 p-4 rounded-md items-center mb-4">
          <img src="/icon-music.svg" alt="music" className="w-6 h-6" />
          <div>
            <p>Annual Plan</p>
            <p>$59.99/year</p>
          </div>
          <a href="#" className="text-blue-600 underline">
            Change
          </a>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-3">
          Proceed to Payment
        </button>
        <button className="w-full text-gray-500 hover:text-black">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default Form;
