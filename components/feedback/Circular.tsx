/**
 * Hanbit DS - Circular (Loading Spinner)
 * Figma: "Circular/Circular", "Circular/Hanbit"
 * Variants: Animate(True|False)
 */
import React from 'react';

export type CircularVariant = 'Default' | 'Hanbit';

export interface CircularProps {
  variant?: CircularVariant;
  size?: number;
  animate?: boolean;
  className?: string;
}

export const Circular: React.FC<CircularProps> = ({
  variant = 'Default', size = 40, animate = true, className,
}) => (
  <div className={className} role="status" aria-label="로딩 중" data-variant={variant.toLowerCase()} data-animate={animate}
    style={{ width: size, height: size }}>
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <circle cx="20" cy="20" r="16" fill="none" strokeWidth="3" stroke="currentColor" strokeDasharray="80 20"
        style={animate ? { animation: 'spin 1s linear infinite' } : undefined} />
    </svg>
  </div>
);
export default Circular;
