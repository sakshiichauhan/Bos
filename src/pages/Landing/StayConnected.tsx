import React, { useState, FormEvent } from 'react';
import { toast, Toaster } from 'sonner';
import axios from 'axios';

import Button from '../Components/Button';
import ThankYou from '../Components/ThankYou';

// ---------- helpers ----------
const isValidTenDigitNumber = (input: string) => /^\d{10}$/.test(input);

// ---------- component ----------
const StayConnected: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  // form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidTenDigitNumber(number)) {
      setError('Number must be exactly 10 digits.');
      return;
    }

    if (name.trim().length <= 2) {
      toast.error('Input must be more than 2 characters!');
      return;
    }

    setError('');
    try {
      await axios.post('/api/subscribe', { name, number });
      setShowThankYou(true);
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleClose = () => {
    setShowThankYou(false);
    setNumber('');
    setName('');
    setError('');
  };

  return (
    <section className="flex justify-center bg-[#FEFEFE] py-24 px-60 max-2xl:px-[5vw] max-md:py-12 max-sm:px-4">
      <div className="relative w-full rounded-xl p-[2px]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 to-violet-600" />
        <div className="relative z-10 flex w-full flex-wrap gap-6 rounded-xl bg-white p-12 max-lg:p-8 max-md:p-6">
          
          {/* Header */}
          <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight max-md:text-3xl">
              Stay&nbsp;Connected
            </h2>
            <p className="max-w-prose text-lg text-gray-600 max-md:text-base">
              Follow our journey, explore events, and be part of the growing BOS family.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex w-full flex-wrap items-center gap-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 min-w-[220px] rounded-lg border border-gray-200 px-6 py-3 text-lg focus:border-violet-500 focus:outline-none"
            />

            {/* Number with +91 */}
            <div className="flex flex-1 items-center rounded-lg border border-gray-200 pr-0">
              <span className="pl-6 pr-4 text-lg text-gray-500">+91</span>
              <span className="pr-4 text-gray-400">|</span>
              <input
                id="mobileNumber"
                type="tel"
                placeholder="WhatsApp Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  setError('');
                }}
                maxLength={10}
                className="w-full flex-1 rounded-r-lg px-6 py-3 text-lg focus:outline-none"
              />
            </div>

            <Button text="Subscribe" className="text-lg font-semibold px-7 py-3 shadow-md" />
          </form>

          {error && (
            <p className="w-full text-sm font-medium text-red-600">{error}</p>
          )}
        </div>
      </div>

      {showThankYou && (
        <ThankYou
          title="Thank You for Subscribing!"
          subtitle="We're excited to have you on this journey with us. Get ready for updates, event invites, and stories from the heart of the BOS community — straight to your WhatsApp!"
          onClose={handleClose}
        />
      )}
      <Toaster position="top-center" richColors />
    </section>
  );
};

export default StayConnected;
