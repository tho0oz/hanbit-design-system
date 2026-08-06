/**
 * Hanbit DS - Menu
 * Figma: "Menu/Menu"
 * Variants: Variant(Normal|Checkbox|Radio), Cell Padding
 */
import React from 'react';

export type MenuVariant = 'Normal' | 'Checkbox' | 'Radio';

export interface MenuItem {
  key: string;
  label: string;
  caption?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
}

export interface MenuProps {
  variant?: MenuVariant;
  items: MenuItem[];
  onSelect?: (key: string) => void;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  variant = 'Normal', items, onSelect, className,
}) => (
  <ul className={className} role={variant === 'Radio' ? 'radiogroup' : 'menu'} data-variant={variant.toLowerCase()}>
    {items.map(item => (
      <li key={item.key} role={variant === 'Radio' ? 'menuitemradio' : variant === 'Checkbox' ? 'menuitemcheckbox' : 'menuitem'}
        aria-checked={item.checked} aria-disabled={item.disabled}
        onClick={() => !item.disabled && onSelect?.(item.key)}
        data-active={item.checked} data-disabled={item.disabled}>
        {item.icon && <span>{item.icon}</span>}
        <span>{item.label}</span>
        {item.caption && <span>{item.caption}</span>}
      </li>
    ))}
  </ul>
);
export default Menu;
