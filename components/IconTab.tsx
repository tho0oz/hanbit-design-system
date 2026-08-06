/**
 * Hanbit DS - IconTab
 * Figma: "IconTab"
 * Variants: Size(Small|Medium|Large), Variant(Normal|Alternative)
 */
import React from 'react';

export type IconTabSize = 'Small' | 'Medium' | 'Large';
export type IconTabVariant = 'Normal' | 'Alternative';

export interface IconTabItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

export interface IconTabProps {
  items: IconTabItem[];
  activeKey: string;
  size?: IconTabSize;
  variant?: IconTabVariant;
  onChange: (key: string) => void;
  className?: string;
}

export const IconTab: React.FC<IconTabProps> = ({
  items, activeKey, size = 'Medium', variant = 'Normal', onChange, className,
}) => (
  <div className={className} role="tablist" data-size={size.toLowerCase()} data-variant={variant.toLowerCase()}>
    {items.map(item => (
      <button key={item.key} role="tab" aria-selected={item.key === activeKey}
        onClick={() => onChange(item.key)} data-active={item.key === activeKey}>
        <span>{item.icon}</span>
        <span>{item.label}</span>
      </button>
    ))}
  </div>
);
export default IconTab;
