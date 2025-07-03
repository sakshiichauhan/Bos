import React from 'react';

const BOShead: React.FC = () => {
  return (
    <div
      id="events"
      className="flex justify-center mt-[96px] bg-[#FEFEFE] px-[216px] max-[1300px]:px-[70px] max-[900px]:px-[16px] max-[500px]:px-0"
    >
      <div className="text-center w-full max-w-[1440px] px-4">
        <h2 className="mb-4">
          <div className="flex flex-col items-center">
            <span className="text-[clamp(32px,5vw,32px)] font-bold text-[#000000]">
              Upcoming BOS
            </span>
            <span className="text-[clamp(32px,5vw,48px)] font-medium text-[#000000]">
              Events Around You
            </span>
          </div>
        </h2>
        <p className="text-[clamp(14px,2.5vw,24px)] text-[#4B4B4B] leading-[1.75] mt-4">
          BOS curates and supports sports events rooted in heritage—from local
          competitions to large-scale festivals. These aren’t just games—they’re
          experiences that bring people closer, preserve culture, and inspire the
          next generation.
        </p>
      </div>
    </div>
  );
};

export default BOShead;
