/**
 * Hanbit DS - CheckMark
 * Figma: "Input/Check Mark"
 * Variants: Size(Small|Medium), State(Unchecked|Checked), Tight, Disable
 */
import React, { useId } from 'react';

export type CheckMarkSize = 'Small' | 'Medium';

export interface CheckMarkProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckMarkSize;
  label?: string;
  tight?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const CheckMark: React.FC<CheckMarkProps> = ({
  size = 'Medium', label, tight, disabled, checked, onCheckedChange, className, ...props
}) => {
  const id = useId();
  return (
    <label htmlFor={id} className={className} data-size={size.toLowerCase()} data-tight={tight} data-disabled={disabled}>
      <input id={id} type="checkbox" checked={checked} disabled={disabled}
        onChange={e => onCheckedChange?.(e.target.checked)} {...props} />
      <span data-checked={checked} />
      {label && <span>{label}</span>}
    </label>
  );
};
export default CheckMark;
