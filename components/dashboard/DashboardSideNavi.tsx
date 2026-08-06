/**
 * Hanbit DS - Dashboard/SideNavi
 * Figma: "Dashboard/SideNavi"
 * Variants: Property(관리자|교강사), Full(False|True)
 */
import React from 'react';

export type DashboardRole = '관리자' | '교강사';

export interface DashboardNavItem { key: string; label: string; icon?: React.ReactNode; badge?: number; children?: DashboardNavItem[]; }

export interface DashboardSideNaviProps {
  role?: DashboardRole;
  full?: boolean;
  items: DashboardNavItem[];
  activeKey?: string;
  logo?: React.ReactNode;
  onSelect?: (key: string) => void;
  className?: string;
}

export const DashboardSideNavi: React.FC<DashboardSideNaviProps> = ({
  role = '관리자', full = false, items, activeKey, logo, onSelect, className,
}) => (
  <nav className={className} data-role={role} data-full={full} aria-label="대시보드 네비게이션"
    style={{ width: full ? 260 : 72, height: '100vh', backgroundColor: '#1B1D1F', color: '#fff', display: 'flex', flexDirection: 'column', transition: 'width 200ms ease', overflow: 'hidden' }}>
    {logo && <div style={{ padding: full ? '20px 24px' : '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{logo}</div>}
    {full && <div style={{ padding: '12px 24px', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{role}</div>}
    <ul role="menubar" aria-orientation="vertical" style={{ flex: 1, listStyle: 'none', padding: '8px 0', margin: 0, overflowY: 'auto' }}>
      {items.map(item => (
        <li key={item.key} role="none">
          <button role="menuitem" onClick={() => onSelect?.(item.key)} data-active={item.key === activeKey} title={!full ? item.label : undefined}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: full ? '10px 24px' : '10px 0', justifyContent: full ? 'flex-start' : 'center', border: 'none', background: item.key === activeKey ? 'rgba(255,255,255,0.08)' : 'transparent', color: item.key === activeKey ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 14 }}>
            {item.icon && <span>{item.icon}</span>}
            {full && <span>{item.label}</span>}
            {full && item.badge !== undefined && item.badge > 0 && <span style={{ marginLeft: 'auto', backgroundColor: '#F04452', color: '#fff', borderRadius: 10, padding: '2px 6px', fontSize: 11 }}>{item.badge}</span>}
          </button>
          {full && item.children && (
            <ul role="menu" style={{ listStyle: 'none', paddingLeft: 48, margin: 0 }}>
              {item.children.map(child => (
                <li key={child.key} role="none">
                  <button role="menuitem" onClick={() => onSelect?.(child.key)} data-active={child.key === activeKey}
                    style={{ width: '100%', textAlign: 'left', padding: '8px 16px', border: 'none', background: 'transparent', color: child.key === activeKey ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 13 }}>
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
export default DashboardSideNavi;
