/**
 * Hanbit DS - Checkbox
 * Figma: "Input/Checkbox"
 * Variants: Size(Small|Medium), State(Unchecked|Checked|Indeterminate), Tight, Bold, Disable
 */
import React, { useId } from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'Small' | 'Medium';
export type CheckboxState = 'Unchecked' | 'Checked' | 'Indeterminate';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckboxSize;
  state?: CheckboxState;
  label?: string;
  tight?: boolean;
  bold?: boolean;
  onStateChange?: (state: CheckboxState) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 'Medium', state = 'Unchecked', label, tight, bold, disabled, onStateChange, className, ...props
}) => {
  const id = useId();
  return (
    <label htmlFor={id} className={[styles.checkbox, styles[`size-${size.toLowerCase()}`], tight && styles.tight, bold && styles.bold, disabled && styles.disabled, className].filter(Boolean).join(' ')}>
      <input id={id} type="checkbox" checked={state === 'Checked'} disabled={disabled}
        ref={el => { if (el) el.indeterminate = state === 'Indeterminate'; }}
        onChange={() => onStateChange?.(state === 'Checked' ? 'Unchecked' : 'Checked')}
        className={styles.input} {...props} />
      <span className={styles.control} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
export default Checkbox;