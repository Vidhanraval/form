import React from 'react';
import Image from 'next/image';

const Card: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4d04e] font-sans">
      <div className="flex flex-col bg-white rounded-[15px] border-1 border-black shadow-[8px_8px_0px_black] max-w-[340px] p-5">

        <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden mb-4">
          <Image
            src="/illustration-article.svg"
            alt="Course Image"
            fill
            className="object-cover"
          />
        </div>

        <span className="self-start bg-[#f4d04e] text-black text-sm font-bold px-3 py-1 rounded mb-2">
          Learning
        </span>

        <p className="text-xs text-gray-600 mb-1">Published 21 Dec 2023</p>

        <h3 className="text-black font-bold mb-2">HTML & CSS foundations</h3>

        <p className="text-sm text-gray-500 mb-3">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <img src="/image-avatar.webp" alt="Greg Hooper" className="w-8 h-8 rounded-full" />
          <span className="text-black font-bold">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
