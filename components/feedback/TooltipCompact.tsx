/**
 * Hanbit DS - Tooltip/Compact
 * Figma: "Tooltip/Compact"
 * Variants: Normal|Inverse
 */
import React from 'react';

export type TooltipCompactVariant = 'Normal' | 'Inverse';

export interface TooltipCompactProps {
  label: string;
  shortcut?: string;
  variant?: TooltipCompactVariant;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const TooltipCompact: React.FC<TooltipCompactProps> = ({
  label, shortcut, variant = 'Normal', children, position = 'top',
}) => (
  <div data-tooltip-position={position} style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <div role="tooltip" data-variant={variant.toLowerCase()}>
      <span>{label}</span>
      {shortcut && <kbd>{shortcut}</kbd>}
    </div>
  </div>
);
export default TooltipCompact;
