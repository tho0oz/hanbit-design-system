/**
 * Hanbit DS - Divider
 * Figma: "Divider/Divider"
 * Variants: Variant(Normal|Strong|Navigation), Vertical
 */
import React from 'react';

export type DividerVariant = 'Normal' | 'Strong' | 'Navigation';

export interface DividerProps {
  variant?: DividerVariant;
  vertical?: boolean;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'Normal', vertical = false, className,
}) => (
  <hr className={className} data-variant={variant.toLowerCase()} data-vertical={vertical}
    style={{ border: 'none', backgroundColor: 'var(--semantic-line-normal, rgba(92,102,118,0.22))',
      width: vertical ? 1 : '100%', height: vertical ? '100%' : 1, margin: 0 }} />
);
export default Divider;
