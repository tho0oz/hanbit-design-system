/**
 * Hanbit DS - TextField
 * Figma: "Textinput/Textfield"
 * Variants: Status(Normal|Positive|Negative), Active, Focus, Disable
 */
import React, { useId, useState } from 'react';
import styles from './TextField.module.css';

export type TextFieldStatus = 'Normal' | 'Positive' | 'Negative';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  status?: TextFieldStatus;
  errorText?: string;
  successText?: string;
  required?: boolean;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
  label, description, placeholder = '텍스트를 입력해 주세요.', status = 'Normal',
  errorText = '에러 메시지를 나타내요.', successText = '성공 메시지를 나타내요.',
  required, leadingContent, trailingContent, disabled, className, onFocus, onBlur, ...props
}) => {
  const id = useId();
  const [focused, setFocused] = useState(false);

  return (
    <div className={[styles.field, styles[`status-${status.toLowerCase()}`], focused && styles.focused, disabled && styles.disabled, className].filter(Boolean).join(' ')}>
      {label && <label htmlFor={id} className={styles.label}>{label}{required && <span className={styles.required}>*</span>}</label>}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.inputWrapper}>
        {leadingContent && <span className={styles.leading}>{leadingContent}</span>}
        <input id={id} type="text" className={styles.input} placeholder={placeholder} disabled={disabled}
          onFocus={e => { setFocused(true); onFocus?.(e); }}
          onBlur={e => { setFocused(false); onBlur?.(e); }}
          aria-invalid={status === 'Negative'} {...props} />
        {trailingContent && <span className={styles.trailing}>{trailingContent}</span>}
      </div>
      {status === 'Negative' && <p className={styles.error} role="alert">{errorText}</p>}
      {status === 'Positive' && <p className={styles.success}>{successText}</p>}
    </div>
  );
};
export default TextField;