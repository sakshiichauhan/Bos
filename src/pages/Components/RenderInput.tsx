import React from "react";

export interface RenderInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  isTextarea?: boolean;
  maxLength?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  className?: string;
  required?: boolean;
}

const RenderInput: React.FC<RenderInputProps> = ({
  label,
  name,
  placeholder = "",
  type = "text",
  isTextarea = false,
  maxLength,
  value,
  onChange,
  className = "",
  required = false,
}) => (
  <div className={`relative w-full mx-auto mb-5 ${className}`}>
    {/* floating label */}
    <label
      htmlFor={name}
      className="absolute -top-2 left-2 px-1 text-sm bg-white text-black"
    >
      {label}
      {required && <span className="text-red-500 ml-[2px]">*</span>}
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
          required={required}
          className="w-full h-[100px] px-4 py-5 bg-[#F8F8F8] border border-[#F8F8F8] rounded-md focus:outline-none text-gray-500 text-base resize-none placeholder:text-[#434343]"
        />
        {typeof maxLength === "number" && (
          <span className="absolute bottom-2 right-4 text-xs text-[#898989]">
            {value.length}/{maxLength}
          </span>
        )}
      </>
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="w-full h-[68px] bg-[#F8F8F8] px-4 border border-[#F8F8F8] rounded-md focus:outline-none text-gray-500 text-lg placeholder:text-[#434343]"
      />
    )}
  </div>
);

export default RenderInput;
