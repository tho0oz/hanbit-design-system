/**
 * Hanbit DS - Select
 * Figma: "Select/Select"
 * Variants: Render(Text|Chip), Negative, Active, Focus, Disable, Overflow
 */
import React, { useId } from 'react';
import styles from './Select.module.css';

export interface SelectOption { value: string; label: string; }

export interface SelectProps {
  label?: string;
  placeholder?: string;
  value?: string;
  options: SelectOption[];
  render?: 'Text' | 'Chip';
  required?: boolean;
  negative?: boolean;
  errorText?: string;
  description?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label, placeholder = '선택해주세요.', value, options, render = 'Text',
  required, negative, errorText = '에러 메시지를 나타내요.', description, disabled, onChange,
}) => {
  const id = useId();
  return (
    <div className={[styles.select, styles[`render-${render.toLowerCase()}`], negative && styles.negative, disabled && styles.disabled].filter(Boolean).join(' ')}>
      {label && <label htmlFor={id} className={styles.label}>{label}{required && <span className={styles.required}>*</span>}</label>}
      {description && <p className={styles.description}>{description}</p>}
      <select id={id} value={value} disabled={disabled} onChange={e => onChange?.(e.target.value)} className={styles.native} aria-invalid={negative}>
        <option value="" disabled>{placeholder}</option>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {negative && errorText && <p className={styles.error} role="alert">{errorText}</p>}
    </div>
  );
};
export default Select;