import React from 'react';

type RenderInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  isTextarea?: boolean;
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

const RenderInput: React.FC<RenderInputProps> = ({
  label,
  name,
  placeholder = '',
  type = 'text',
  isTextarea = false,
  maxLength,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`relative w-full mx-auto mb-5 ${className}`}>
      {/* Floating label */}
      <label
        htmlFor={name}
        className="absolute -top-2 left-2 px-1 text-[14px] font-normal text-black bg-white z-10"
      >
        {label}
        <span className="text-red-600 ml-1">*</span>
      </label>

      {isTextarea ? (
        <>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className="w-full h-[100px] px-4 py-5 bg-[#F8F8F8] border border-[#F8F8F8] rounded-md focus:outline-none text-[#898989] text-[18px] resize-none placeholder-[#434343] placeholder:font-normal"
          />
          {typeof maxLength === 'number' && (
            <div className="absolute bottom-2 right-4 text-xs text-[#898989]">
              {value.length}/{maxLength}
            </div>
          )}
        </>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-[68px] bg-[#F8F8F8] px-4 pr-4 border border-[#F8F8F8] rounded-md focus:outline-none text-[#898989] text-[20px] placeholder-[#434343] p-8"
        />
      )}
    </div>
  );
};

export default RenderInput;
