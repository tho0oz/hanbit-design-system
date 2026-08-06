/**
 * Hanbit DS - Radio
 * Figma: "Input/Radio"
 * Variants: Size(Small|Medium), State(Unchecked|Checked), Tight, Disable
 */
import React, { useId } from 'react';
import styles from './Radio.module.css';

export type RadioSize = 'Small' | 'Medium';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: RadioSize;
  label?: string;
  tight?: boolean;
}

export const Radio: React.FC<RadioProps> = ({ size = 'Medium', label, tight, disabled, className, ...props }) => {
  const id = useId();
  return (
    <label htmlFor={id} className={[styles.radio, styles[`size-${size.toLowerCase()}`], tight && styles.tight, disabled && styles.disabled, className].filter(Boolean).join(' ')}>
      <input id={id} type="radio" disabled={disabled} className={styles.input} {...props} />
      <span className={styles.control} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
export default Radio;