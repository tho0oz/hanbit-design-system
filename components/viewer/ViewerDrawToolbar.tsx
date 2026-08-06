/**
 * Hanbit DS - Viewer/DrawToolbar
 * Figma: "Viewer/DrawToolbar"
 * Variants: Menu(True|False), Scroll(True|False)
 */
import React, { useState } from 'react';

export interface DrawTool { key: string; label: string; icon: React.ReactNode; }

export interface ViewerDrawToolbarProps {
  tools?: DrawTool[];
  activeToolKey?: string;
  showMenu?: boolean;
  scrollable?: boolean;
  onToolSelect?: (key: string) => void;
  onMenuToggle?: () => void;
  className?: string;
}

const DEFAULT_TOOLS: DrawTool[] = [
  { key: 'pen', label: '펜', icon: '✏️' },
  { key: 'highlighter', label: '형광펜', icon: '🖍️' },
  { key: 'eraser', label: '지우개', icon: '🧹' },
  { key: 'text', label: '텍스트', icon: 'T' },
  { key: 'shape', label: '도형', icon: '⬜' },
];

export const ViewerDrawToolbar: React.FC<ViewerDrawToolbarProps> = ({
  tools = DEFAULT_TOOLS, activeToolKey, showMenu = false, scrollable = false, onToolSelect, onMenuToggle, className,
}) => {
  const [isOpen, setIsOpen] = useState(showMenu);
  return (
    <div className={className} data-menu={isOpen} data-scroll={scrollable} role="toolbar" aria-label="드로잉 도구"
      style={{ display: 'flex', gap: 4, padding: '8px 12px', backgroundColor: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.12)', overflowX: scrollable ? 'auto' : undefined }}>
      <button onClick={() => { setIsOpen(!isOpen); onMenuToggle?.(); }} aria-label="메뉴" aria-expanded={isOpen}
        style={{ padding: '8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>☰</button>
      {tools.map(tool => (
        <button key={tool.key} onClick={() => onToolSelect?.(tool.key)} aria-label={tool.label} data-active={tool.key === activeToolKey}
          style={{ padding: '8px', border: 'none', borderRadius: 8, backgroundColor: tool.key === activeToolKey ? 'rgba(49,130,246,0.12)' : 'transparent', cursor: 'pointer', fontSize: 18 }}>
          {tool.icon}
        </button>
      ))}
    </div>
  );
};
export default ViewerDrawToolbar;
