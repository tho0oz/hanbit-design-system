/**
 * Hanbit DS - Button/Solid
 * Figma: "Button/Solid"
 * Variants: Variant(Primary|Secondary|Neutral), Size(XS~XL), Icon Only, Disable
 */
import React from 'react';

export type ButtonSolidVariant = 'Primary' | 'Secondary' | 'Neutral';
export type ButtonSolidSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

export interface ButtonSolidProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonSolidVariant;
  size?: ButtonSolidSize;
  iconOnly?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const ButtonSolid = React.forwardRef<HTMLButtonElement, ButtonSolidProps>(
  ({ variant = 'Primary', size = 'Medium', iconOnly, leadingIcon, trailingIcon, children, disabled, className, ...props }, ref) => (
    <button ref={ref} className={className} disabled={disabled}
      data-variant={variant.toLowerCase()} data-size={size.toLowerCase()} data-icon-only={iconOnly} {...props}>
      {leadingIcon && <span>{leadingIcon}</span>}
      {!iconOnly && children && <span>{children}</span>}
      {trailingIcon && <span>{trailingIcon}</span>}
    </button>
  )
);
ButtonSolid.displayName = 'ButtonSolid';
export default ButtonSolid;
