import React from 'react';

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({
  text,
  className = '',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`relative inline-block px-6 py-2 font-medium 
        text-gray-900  text-[clamp(16px,2vw,24px)] 
        rounded-[10px] border-1 border-transparent overflow-hidden z-10 
        transition duration-300 ease-in-out 
        focus:outline-none group ${className}`}
    >
      {text}

      {/* ::before - rainbow border always visible */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 p-[1px] rounded-[10px] z-[-1] opacity-100 transition-opacity duration-300 group-hover:p-1 "
        style={{
          background:
            'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* ::after - blurred hover glow (still on hover only) */}
      <span
        aria-hidden
        className="absolute top-0 left-[-50%] w-[200%] h-full opacity-0 z-[-2] transition-opacity duration-[800ms] group-hover:opacity-40"
        style={{
          background:
            'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
          filter: 'blur(12px)',
        }}
      />
    </button>
  );
};

export default RainbowButton;
