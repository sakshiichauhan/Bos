import React from 'react';

const BOShead: React.FC = () => {
  return (
    <div
      id="events"
      className="flex justify-center mt-[96px] bg-[#FEFEFE] px-[216px] max-[1300px]:px-[70px] max-[900px]:px-[16px] max-[500px]:px-0"
    >
      <div className="text-center w-full max-w-[1440px] px-4">
        <h2 className="mb-2">
          <div className="flex flex-col items-center">
           <h2 className="text-[clamp(32px,1vw,48px)] font-bold text-[#000000] leading-[1.2] ">
 Discover BOS
    <span className="font-medium"> Around You</span>
  </h2>
          </div>
        </h2>
        <p className="text-[clamp(14px,2.5vw,24px)] text-[#4B4B4B] leading-[1.75] ">
         Explore what’s happening nearby and get involved!
        </p>
      </div>
    </div>
  );
};

export default BOShead;
