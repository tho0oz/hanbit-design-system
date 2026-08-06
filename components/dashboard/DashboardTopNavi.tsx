/**
 * Hanbit DS - Dashboard/TopNavi
 * Figma: "Dashboard/TopNavi"
 */
import React from 'react';

export interface DashboardTopNaviProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  trailingContent?: React.ReactNode;
  userAvatar?: string;
  userName?: string;
  onProfileClick?: () => void;
  className?: string;
}

export const DashboardTopNavi: React.FC<DashboardTopNaviProps> = ({
  title, breadcrumbs, trailingContent, userAvatar, userName, onProfileClick, className,
}) => (
  <header className={className} role="banner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderBottom: '1px solid rgba(92,102,118,0.16)', backgroundColor: '#fff', minHeight: 56 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="breadcrumb">
          <ol style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0, fontSize: 14, color: 'rgba(92,102,118,0.6)' }}>
            {breadcrumbs.map((bc, i) => (
              <li key={i}>{i > 0 && <span style={{ margin: '0 4px' }}>/</span>}{bc.href ? <a href={bc.href} style={{ color: 'inherit', textDecoration: 'none' }}>{bc.label}</a> : <span style={{ color: '#1B1D1F' }}>{bc.label}</span>}</li>
            ))}
          </ol>
        </nav>
      )}
      {title && <h1 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{title}</h1>}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {trailingContent}
      {(userAvatar || userName) && (
        <button onClick={onProfileClick} style={{ display: 'flex', alignItems: 'center', gap: 8, border: 'none', background: 'transparent', cursor: 'pointer' }}>
          {userAvatar && <img src={userAvatar} alt="" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />}
          {userName && <span style={{ fontSize: 14 }}>{userName}</span>}
        </button>
      )}
    </div>
  </header>
);
export default DashboardTopNavi;
