/**
 * Hanbit DS - AspectRatio
 * Figma: "Ratio/Vertical", "Ratio/Horizontal"
 * Supports: 1:1, 1:2, 2:3, 3:4, 4:3, 5:4, 3:2, 16:10, 1.618:1, 16:9, 2:1, 21:9, etc.
 */
import React from 'react';

export type AspectRatioPreset =
  | '1:1' | '1:2' | '2:3' | '3:4'
  | '5:4' | '4:3' | '3:2' | '16:10' | '1.618:1' | '16:9' | '2:1' | '21:9'
  | '4:5' | '10:16' | '1:1.618' | '9:16' | '9:21';

export interface AspectRatioProps {
  ratio?: AspectRatioPreset | string;
  children?: React.ReactNode;
  className?: string;
}

function parsePadding(ratio: string): string {
  const parts = ratio.split(':').map(Number);
  if (parts.length === 2 && parts[0] > 0) {
    return `${(parts[1] / parts[0]) * 100}%`;
  }
  return '100%';
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = '16:9',
  children,
  className,
}) => (
  <div
    className={className}
    data-ratio={ratio}
    style={{ position: 'relative', width: '100%', paddingBottom: parsePadding(ratio) }}
  >
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {children}
    </div>
  </div>
);
export default AspectRatio;
