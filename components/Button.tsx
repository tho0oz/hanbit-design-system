/**
 * Hanbit DS - Button
 * Figma: "Button/Button"
 * Variants: Size(XS~XL), Variant(Solid|Outlined|Ghost), Disable, Loading
 */
import React from 'react';
import styles from './Button.module.css';

export type ButtonSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
export type ButtonVariant = 'Solid' | 'Outlined' | 'Ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'Medium', variant = 'Solid', disabled, loading, leadingIcon, trailingIcon, children, className, ...props }, ref) => (
    <button
      ref={ref}
      className={[styles.button, styles[`size-${size.toLowerCase()}`], styles[`variant-${variant.toLowerCase()}`], disabled && styles.disabled, loading && styles.loading, className].filter(Boolean).join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner} />}
      {!loading && leadingIcon && <span className={styles.leadingIcon}>{leadingIcon}</span>}
      <span className={styles.label}>{children}</span>
      {!loading && trailingIcon && <span className={styles.trailingIcon}>{trailingIcon}</span>}
    </button>
  )
);
Button.displayName = 'Button';
export default Button;