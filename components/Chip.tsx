/**
 * Hanbit DS - Chip
 * Figma: "Chip/Action", "Chip/Filter"
 * Variants: Size(Small|Medium), Variant(Normal|Alternative), State, Active, Disable
 */
import React from 'react';

export type ChipType = 'Action' | 'Filter';
export type ChipSize = 'Small' | 'Medium';
export type ChipVariant = 'Normal' | 'Alternative';

export interface ChipProps {
  type?: ChipType;
  label: string;
  size?: ChipSize;
  variant?: ChipVariant;
  active?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  type = 'Action', label, size = 'Medium', variant = 'Normal',
  active, disabled, leadingIcon, trailingIcon, onRemove, onClick, className,
}) => (
  <div className={className} role={type === 'Filter' ? 'option' : 'button'} tabIndex={0}
    data-type={type.toLowerCase()} data-size={size.toLowerCase()} data-variant={variant.toLowerCase()}
    data-active={active} data-disabled={disabled}
    onClick={!disabled ? onClick : undefined} aria-selected={active} aria-disabled={disabled}>
    {leadingIcon && <span>{leadingIcon}</span>}
    <span>{label}</span>
    {trailingIcon && <span>{trailingIcon}</span>}
    {onRemove && <button onClick={e => { e.stopPropagation(); onRemove(); }} aria-label="삭제">✕</button>}
  </div>
);
export default Chip;
