import React from 'react';

/** Public props for the Rainbow Button */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text shown inside the button */
  text: string;
}

/**
 * Gradient-border button with hover glow.
 *
 * - Uses Tailwind utility classes for sizing, typography, spacing.
 * - Adds a `rainbow-btn` class that the CSS below styles for the fancy border.
 */
const Button: React.FC<ButtonProps> = ({
  text,
  className = '',
  disabled,
  ...rest
}) => (
  <button
    className={`
      rainbow-btn                       /* custom CSS (below) for border + glow */
      inline-flex items-center justify-center
      font-medium rounded-lg
      px-6 py-2 text-gray-900
      transition-colors duration-300
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-black'}
      ${className}
    `}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
);

export default Button;
