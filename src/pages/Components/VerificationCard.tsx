import React, { useState } from 'react';
import Button from "@/pages/Components/Button";
import verifyIcon from "@/assets/Icons/verify.png";

type Props = {
  phoneNumber: string;
  onVerify: (code: string) => void;
  onResend: () => void;
  onChangeNumber: () => void;
  loading?: boolean;
  error?: string;
};

const VerificationCode: React.FC<Props> = ({
  phoneNumber,
  onVerify,
  onResend,
  onChangeNumber,
  loading,
  error,
}) => {
  const [code, setCode] = useState<string[]>(Array(4).fill(''));
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length > 1) return;

    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);

    if (val && idx < code.length - 1) {
      const nextInput = document.getElementById(`digit-${idx + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const joinedCode = code.join('');
    if (joinedCode.length < 4) {
      setErrorMessage('Please enter all digits of the code.');
      return;
    }
    setErrorMessage('');
    onVerify(joinedCode);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg w-full">
      <div className="flex items-center justify-center text-center mb-4 relative">
        <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
          Verification Code
          <img src={verifyIcon} alt="verify icon" className="h-8 pb-2" />
        </h2>
        <button
          onClick={onChangeNumber}
          className="absolute right-0 top-0 text-xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>
      </div>

      <div className="text-center text-gray-600 text-base mb-4">
        <p>Please enter the Verification code sent to</p>
        <strong className="mr-1">{phoneNumber}</strong>
        <button
          onClick={onChangeNumber}
          className="text-red-600 text-sm font-bold hover:underline ml-1"
        >
          Change
        </button>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {code.map((digit, idx) => (
          <input
            key={idx}
            id={`digit-${idx}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            placeholder="-"
            value={digit}
            onChange={(e) => handleChange(e, idx)}
            className="w-14 h-14 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      {(errorMessage || error) && (
        <div className="text-center text-red-600 text-sm mb-4">
          {errorMessage || error}
        </div>
      )}

      <div className="flex justify-center">
        <Button
          text={loading ? 'Verifying...' : 'Verify'}
          onClick={handleVerify}
          className="text-lg px-8 py-2"
        />
      </div>

      <div className="text-center text-sm mt-4 text-gray-600">
        <span className="mr-2">Didn't receive code?</span>
        <button
          onClick={onResend}
          className="text-red-600 font-bold underline text-sm hover:text-red-800"
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default VerificationCode;
