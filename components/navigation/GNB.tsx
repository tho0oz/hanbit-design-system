/**
 * Hanbit DS - GNB (Global Navigation Bar)
 * Figma: "GNB/Hanbit"
 * Variants: Breakpoint(Desktop|Mobile), State
 */
import React from 'react';

export type GNBBreakpoint = 'Desktop' | 'Mobile';

export interface GNBMenuItem {
  key: string;
  label: string;
  href?: string;
  children?: GNBMenuItem[];
}

export interface GNBProps {
  breakpoint?: GNBBreakpoint;
  logo?: React.ReactNode;
  menuItems: GNBMenuItem[];
  activeKey?: string;
  trailingContent?: React.ReactNode;
  onMenuClick?: (key: string) => void;
  className?: string;
}

export const GNB: React.FC<GNBProps> = ({
  breakpoint = 'Desktop', logo, menuItems, activeKey,
  trailingContent, onMenuClick, className,
}) => (
  <header className={className} data-breakpoint={breakpoint.toLowerCase()} role="banner">
    <div>{logo}</div>
    <nav role="navigation" aria-label="메인 내비게이션">
      <ul>
        {menuItems.map(item => (
          <li key={item.key}>
            <a href={item.href} onClick={e => { e.preventDefault(); onMenuClick?.(item.key); }}
              data-active={item.key === activeKey}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
    {trailingContent && <div>{trailingContent}</div>}
  </header>
);
export default GNB;
