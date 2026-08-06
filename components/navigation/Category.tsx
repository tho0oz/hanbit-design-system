/**
 * Hanbit DS - Category
 * Figma: "Category/Category"
 * Variants: Variant(Normal|Alternative), Size(XSmall|Small|Normal|Large), Horizontal Padding
 */
import React from 'react';

export type CategoryVariant = 'Normal' | 'Alternative';
export type CategorySize = 'XSmall' | 'Small' | 'Normal' | 'Large';

export interface CategoryItem {
  key: string;
  label: string;
}

export interface CategoryProps {
  items: CategoryItem[];
  activeKey?: string;
  variant?: CategoryVariant;
  size?: CategorySize;
  onChange?: (key: string) => void;
  className?: string;
}

export const Category: React.FC<CategoryProps> = ({
  items, activeKey, variant = 'Normal', size = 'Normal', onChange, className,
}) => (
  <div className={className} role="tablist" data-variant={variant.toLowerCase()} data-size={size.toLowerCase()}>
    {items.map(item => (
      <button key={item.key} role="tab" aria-selected={item.key === activeKey}
        onClick={() => onChange?.(item.key)} data-active={item.key === activeKey}>
        {item.label}
      </button>
    ))}
  </div>
);
export default Category;
