/**
 * Hanbit DS - Keyboard
 * Figma: "Keyboard/Keyboard"
 * Variants: Platform(iOS|Android)
 * Visual placeholder for mobile keyboard in prototypes/mockups
 */
import React from 'react';

export type KeyboardPlatform = 'iOS' | 'Android';

export interface KeyboardProps {
  platform?: KeyboardPlatform;
  className?: string;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  platform = 'iOS',
  className,
}) => (
  <div
    className={className}
    data-platform={platform.toLowerCase()}
    role="img"
    aria-label={`${platform} 키보드`}
    style={{
      width: '100%',
      height: platform === 'iOS' ? 291 : 263,
      backgroundColor: platform === 'iOS' ? '#D1D5DB' : '#E5E7EB',
      borderTop: '1px solid rgba(92,102,118,0.16)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '8px 4px',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
      {'QWERTYUIOP'.split('').map(k => (
        <div key={k} style={{ width: 32, height: 42, backgroundColor: '#fff', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{k}</div>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
      {'ASDFGHJKL'.split('').map(k => (
        <div key={k} style={{ width: 32, height: 42, backgroundColor: '#fff', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{k}</div>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
      {'ZXCVBNM'.split('').map(k => (
        <div key={k} style={{ width: 32, height: 42, backgroundColor: '#fff', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{k}</div>
      ))}
    </div>
    <div style={{ display: 'flex', gap: 4, justifyContent: 'center', padding: '0 8px' }}>
      <div style={{ flex: 1, height: 42, backgroundColor: '#fff', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>space</div>
    </div>
  </div>
);
export default Keyboard;
