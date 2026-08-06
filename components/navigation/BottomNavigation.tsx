/**
 * Hanbit DS - BottomNavigation
 * Figma: "Bottom Navigation/Bottom Navigation"
 * Variants: Platform(iOS|Android|Web)
 */
import React from 'react';

export type BottomNavPlatform = 'iOS' | 'Android' | 'Web';

export interface BottomNavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  badge?: number;
}

export interface BottomNavigationProps {
  platform?: BottomNavPlatform;
  items: BottomNavItem[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  platform = 'Web', items, activeKey, onChange, className,
}) => (
  <nav className={className} data-platform={platform.toLowerCase()} role="tablist" aria-label="하단 내비게이션">
    {items.map(item => (
      <button key={item.key} role="tab" aria-selected={item.key === activeKey}
        onClick={() => onChange(item.key)} data-active={item.key === activeKey}>
        <span>{item.key === activeKey && item.activeIcon ? item.activeIcon : item.icon}</span>
        {item.badge !== undefined && item.badge > 0 && <span>{item.badge}</span>}
        <span>{item.label}</span>
      </button>
    ))}
  </nav>
);
export default BottomNavigation;
