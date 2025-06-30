// src/components/ThankYou.tsx
import { FC } from 'react';
import Button from './Button';';        // assumes the button is already TS-ready

interface ThankYouProps {
  onClose: () => void;
  title: string;
  subtitle: string;
}

const ThankYou: FC<ThankYouProps> = ({ onClose, title, subtitle }) => (
  /* Overlay */
  <div className="fixed inset-0 z-[1000000] flex items-center justify-center
                  bg-black/40 backdrop-blur-sm">
    {/* Dialog */}
    <div className="relative mx-4 w-full max-w-[750px] rounded-lg bg-white p-8
                    text-center shadow-lg md:p-10">
      <h1 className="text-3xl font-semibold md:text-4xl">Thank you</h1>

      {/* Rainbow underline */}
      <div className="mx-auto my-3 h-1 w-72 rounded
                      bg-gradient-to-r from-red-500 via-orange-500 via-yellow-400
                      via-green-500 via-blue-500 via-indigo-500 to-violet-500
                      md:w-[410px]" />

      <h2 className="text-xl font-medium text-gray-900 md:text-2xl">{title}</h2>
      <p className="mt-2 text-lg text-gray-700 md:mt-3 md:text-xl">{subtitle}</p>

      <button
        className="mt-6 px-12 py-3 text-xl font-bold md:px-16 md:text-2xl"
        onClick={onClose}
        text="OK"
      />
    </div>
  </div>
);

export default ThankYou;
