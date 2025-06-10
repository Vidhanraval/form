import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="bg-[#f4d04e] min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white rounded-[15px] shadow-[8px_8px_0px_black] max-w-[350px] p-5">
        <img
          src="/illustration-article.svg"
          alt="Course"
          className="w-full rounded-[10px] mb-4"
        />

        <div className="inline-block bg-[#f4d04e] text-black font-bold text-sm px-2.5 py-1 rounded mb-2">
          Learning
        </div>

        <p className="text-xs text-gray-600 mb-1">Published 21 Dec 2023</p>
        <h3 className="text-lg font-bold mb-1">HTML & CSS foundations</h3>
        <p className="text-sm text-gray-500 mb-2">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <img
            src="/image-avatar.webp"
            alt="Greg Hooper"
            className="w-[30px] h-[30px] rounded-full"
          />
          <span className="text-sm font-medium">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
