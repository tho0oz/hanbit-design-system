/**
 * Hanbit DS - Tab
 * Figma: "Tab/Tab"
 * Variants: Resize(Hug|Fill), Size(Small|Medium|Large), Horizontal Padding
 */
import React from 'react';

export type TabSize = 'Small' | 'Medium' | 'Large';
export type TabResize = 'Hug' | 'Fill';

export interface TabItem {
  key: string;
  label: string;
  disabled?: boolean;
}

export interface TabProps {
  items: TabItem[];
  activeKey: string;
  size?: TabSize;
  resize?: TabResize;
  onChange: (key: string) => void;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  items, activeKey, size = 'Medium', resize = 'Hug', onChange, className,
}) => (
  <div className={className} role="tablist" data-size={size.toLowerCase()} data-resize={resize.toLowerCase()}>
    {items.map(item => (
      <button key={item.key} role="tab" aria-selected={item.key === activeKey}
        disabled={item.disabled} onClick={() => onChange(item.key)}
        data-active={item.key === activeKey}>
        {item.label}
      </button>
    ))}
  </div>
);
export default Tab;
