/**
 * Hanbit DS - Button/Text
 * Figma: "Button/Text"
 * Variants: Variant(Primary|Secondary|Neutral), Size(XS~XL), Disable
 */
import React from 'react';

export type ButtonTextVariant = 'Primary' | 'Secondary' | 'Neutral';
export type ButtonTextSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

export interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTextVariant;
  size?: ButtonTextSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const ButtonText = React.forwardRef<HTMLButtonElement, ButtonTextProps>(
  ({ variant = 'Primary', size = 'Medium', leadingIcon, trailingIcon, children, disabled, className, ...props }, ref) => (
    <button ref={ref} className={className} disabled={disabled}
      data-variant={variant.toLowerCase()} data-size={size.toLowerCase()} {...props}>
      {leadingIcon && <span>{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span>{trailingIcon}</span>}
    </button>
  )
);
ButtonText.displayName = 'ButtonText';
export default ButtonText;
