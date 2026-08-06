/**
 * Hanbit DS - Button/Outlined
 * Figma: "Button/Outlined"
 * Variants: Variant(Primary|Secondary|Neutral), Size(XS~XL), Icon Only, Disable
 */
import React from 'react';

export type ButtonOutlinedVariant = 'Primary' | 'Secondary' | 'Neutral';
export type ButtonOutlinedSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

export interface ButtonOutlinedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonOutlinedVariant;
  size?: ButtonOutlinedSize;
  iconOnly?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const ButtonOutlined = React.forwardRef<HTMLButtonElement, ButtonOutlinedProps>(
  ({ variant = 'Primary', size = 'Medium', iconOnly, leadingIcon, trailingIcon, children, disabled, className, ...props }, ref) => (
    <button ref={ref} className={className} disabled={disabled}
      data-variant={variant.toLowerCase()} data-size={size.toLowerCase()} data-icon-only={iconOnly} {...props}>
      {leadingIcon && <span>{leadingIcon}</span>}
      {!iconOnly && children && <span>{children}</span>}
      {trailingIcon && <span>{trailingIcon}</span>}
    </button>
  )
);
ButtonOutlined.displayName = 'ButtonOutlined';
export default ButtonOutlined;
