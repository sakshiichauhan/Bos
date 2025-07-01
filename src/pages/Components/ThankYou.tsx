import React from 'react';
import Button from '../../Pages/Components/Button';

type ThankYouProps = {
  onClose: () => void;
  title: string;
  subtitle: string;
};

const ThankYou: React.FC<ThankYouProps> = ({ onClose, title, subtitle }) => {
  return (
    <>
      {/* Backdrop Blur */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-[999999]" />

      {/* Modal */}
      <div className="fixed inset-0 z-[1000000] flex items-center justify-center">
        <div className="bg-white max-w-[750px] w-full text-center px-8 py-10 rounded-lg shadow-xl mx-4 sm:mx-0 sm:px-10 relative">
          {/* Heading */}
          <h1 className="text-[40px] font-semibold constant-heading sm:text-[30px] md:text-[35px] lg:text-[40px]">
            Thank you
          </h1>

          {/* Gradient underline */}
          <div className="h-1 rounded w-[410px] max-w-full mx-auto my-3 bg-gradient-to-r from-red-500 via-yellow-400 to-violet-500"></div>

          {/* Title */}
          <h2 className="text-[25px] font-medium text-[#222] sm:text-[20px]">{title}</h2>

          {/* Subtitle */}
          <p className="mt-2 text-[22px] text-[#333] font-normal mx-[30px] sm:text-[18px] sm:mx-2">
            {subtitle}
          </p>

          {/* OK Button */}
          <Button
            text="OK"
            onClick={onClose}
            className="mt-6 text-[24px] font-bold px-12 py-2 sm:text-[20px] sm:px-8 sm:py-2"
          />
        </div>
      </div>
    </>
  );
};

export default ThankYou;
