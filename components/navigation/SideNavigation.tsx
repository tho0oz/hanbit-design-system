/**
 * Hanbit DS - SideNavigation
 * Figma: "Side Navigation/MyHanbit Navigation"
 * Variants: Page
 */
import React from 'react';

export interface SideNavItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: SideNavItem[];
}

export interface SideNavigationProps {
  items: SideNavItem[];
  activeKey: string;
  collapsed?: boolean;
  onChange: (key: string) => void;
  className?: string;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  items, activeKey, collapsed, onChange, className,
}) => (
  <nav className={className} data-collapsed={collapsed} aria-label="사이드 내비게이션">
    <ul role="menubar" aria-orientation="vertical">
      {items.map(item => (
        <li key={item.key} role="none">
          <button role="menuitem" onClick={() => onChange(item.key)} data-active={item.key === activeKey}>
            {item.icon && <span>{item.icon}</span>}
            {!collapsed && <span>{item.label}</span>}
          </button>
          {item.children && !collapsed && (
            <ul role="menu">
              {item.children.map(child => (
                <li key={child.key} role="none">
                  <button role="menuitem" onClick={() => onChange(child.key)} data-active={child.key === activeKey}>
                    {child.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
export default SideNavigation;
