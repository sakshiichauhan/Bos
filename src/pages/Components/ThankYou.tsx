// ThankYou.tsx
import React from 'react';

export interface ThankYouProps {

  onClose: () => void;

  title: string;

  subtitle?: string;
}


const ThankYou: React.FC<ThankYouProps> = ({ onClose, title, subtitle }) => {
  return (
    <div className="fixed inset-0 z-[1000000] flex items-center justify-center bg-black/40">
      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-xl rounded-lg bg-white p-8 text-center shadow-lg md:max-w-md"
      >
        <h1 className="text-4xl font-semibold md:text-2xl">Thank you</h1>

        {/* rainbow underline */}
        <div className="mx-auto mt-3 h-1 w-96 rounded bg-gradient-to-r from-red-500 via-yellow-400 to-violet-600 md:w-40" />

        <h2 className="mt-4 text-2xl font-medium text-gray-900 md:text-xl">{title}</h2>

        {subtitle && (
          <p className="mt-2 text-lg font-normal text-gray-700 md:text-base">{subtitle}</p>
        )}

        {/* OK button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-block rounded bg-gradient-to-r from-purple-600 to-indigo-600 px-12 py-3 text-lg font-bold text-white shadow transition hover:opacity-90 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
