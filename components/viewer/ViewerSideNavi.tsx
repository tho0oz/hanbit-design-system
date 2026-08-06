/**
 * Hanbit DS - Viewer/SideNavi
 * Figma: "Viewer/SideNavi"
 * Variants: Full(False|True)
 * LMS 뷰어 사이드 네비게이션
 */
import React from 'react';

export interface ViewerSideNaviItem {
  key: string;
  label: string;
  completed?: boolean;
  children?: ViewerSideNaviItem[];
}

export interface ViewerSideNaviProps {
  items: ViewerSideNaviItem[];
  activeKey?: string;
  full?: boolean;
  onSelect?: (key: string) => void;
  className?: string;
}

export const ViewerSideNavi: React.FC<ViewerSideNaviProps> = ({
  items, activeKey, full = false, onSelect, className,
}) => (
  <nav className={className} data-full={full} aria-label="뷰어 사이드 네비게이션"
    style={{ width: full ? 320 : 280, height: '100%', overflowY: 'auto', borderRight: '1px solid rgba(92,102,118,0.16)' }}>
    <ul role="tree" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map(item => (
        <li key={item.key} role="treeitem" aria-expanded={!!item.children}>
          <button onClick={() => onSelect?.(item.key)} data-active={item.key === activeKey} data-completed={item.completed}
            style={{ width: '100%', textAlign: 'left', padding: '12px 16px', border: 'none', background: item.key === activeKey ? 'rgba(49,130,246,0.08)' : 'transparent', cursor: 'pointer' }}>
            {item.completed && <span>✓ </span>}{item.label}
          </button>
          {item.children && (
            <ul role="group" style={{ listStyle: 'none', paddingLeft: 24 }}>
              {item.children.map(child => (
                <li key={child.key} role="treeitem">
                  <button onClick={() => onSelect?.(child.key)} data-active={child.key === activeKey} data-completed={child.completed}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 16px', border: 'none', background: child.key === activeKey ? 'rgba(49,130,246,0.08)' : 'transparent', cursor: 'pointer', fontSize: 14 }}>
                    {child.completed && <span>✓ </span>}{child.label}
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
export default ViewerSideNavi;
