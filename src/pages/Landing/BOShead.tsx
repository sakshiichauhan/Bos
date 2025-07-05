import React from 'react';

const BOShead: React.FC = () => {
  return (
    <div
      id="events"
      className="flex justify-center mt-24 bg-[#FEFEFE] px-[216px] max-[1300px]:px-[70px] max-[900px]:px-[16px] max-[500px]:px-0"
    >
      <div className="text-center w-full max-w-[1440px] px-4">
        <div className="flex flex-col items-center mb-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] leading-snug">
            Discover BOS
            <span className="font-medium"> Around You</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-[#4B4B4B] leading-relaxed">
          Explore what’s happening nearby and get involved!
        </p>
      </div>
    </div>
  );
};

export default BOShead;
