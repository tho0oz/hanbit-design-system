/**
 * Hanbit DS - Textarea
 * Figma: "Textinput/Textarea"
 * Variants: Status(Normal|Negative), Resize(Normal|Limit|Fixed), Active, Focus, Disable
 */
import React, { useId, useState, useRef, useEffect } from 'react';

export type TextareaStatus = 'Normal' | 'Negative';
export type TextareaResize = 'Normal' | 'Limit' | 'Fixed';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  description?: string;
  status?: TextareaStatus;
  resize?: TextareaResize;
  errorText?: string;
  required?: boolean;
  maxLength?: number;
  showCharCount?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label, description, placeholder = '텍스트를 입력해 주세요.', status = 'Normal',
  resize = 'Normal', errorText = '에러 메시지를 나타내요.',
  required, maxLength, showCharCount, disabled, className, value, onChange, ...props
}) => {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && e.target.value.length > maxLength) return;
    setCharCount(e.target.value.length);
    onChange?.(e);
  };

  const resizeStyle = resize === 'Fixed' ? 'none' : resize === 'Limit' ? 'vertical' : 'both';

  return (
    <div className={className} data-status={status.toLowerCase()} data-focused={focused} data-disabled={disabled}>
      {label && <label htmlFor={id}>{label}{required && <span>*</span>}</label>}
      {description && <p>{description}</p>}
      <textarea
        id={id} placeholder={placeholder} disabled={disabled} value={value}
        style={{ resize: resizeStyle }} maxLength={maxLength}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        onChange={handleChange} aria-invalid={status === 'Negative'} {...props}
      />
      <div>
        {status === 'Negative' && <p role="alert">{errorText}</p>}
        {showCharCount && maxLength && <span>{charCount}/{maxLength}</span>}
      </div>
    </div>
  );
};
export default Textarea;
