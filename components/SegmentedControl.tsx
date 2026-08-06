/**
 * Hanbit DS - SegmentedControl
 * Figma: "Segmented Control/Segmented Control"
 * Variants: Solid|Outlined, Size(Small|Medium|Large), Icon
 */
import React from 'react';
import styles from './SegmentedControl.module.css';

export type SegmentedControlSize = 'Small' | 'Medium' | 'Large';
export type SegmentedControlVariant = 'Solid' | 'Outlined';

export interface SegmentedControlItem { value: string; label: string; icon?: React.ReactNode; }

export interface SegmentedControlProps {
  items: SegmentedControlItem[];
  value: string;
  variant?: SegmentedControlVariant;
  size?: SegmentedControlSize;
  showIcon?: boolean;
  onChange: (value: string) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  items, value, variant = 'Solid', size = 'Large', showIcon, onChange,
}) => (
  <div className={[styles.control, styles[`variant-${variant.toLowerCase()}`], styles[`size-${size.toLowerCase()}`]].join(' ')} role="tablist">
    {items.map(item => (
      <button key={item.value} role="tab" aria-selected={item.value === value}
        className={[styles.segment, item.value === value && styles.active].filter(Boolean).join(' ')}
        onClick={() => onChange(item.value)}>
        {showIcon && item.icon && <span className={styles.icon}>{item.icon}</span>}
        <span className={styles.label}>{item.label}</span>
      </button>
    ))}
  </div>
);
export default SegmentedControl;