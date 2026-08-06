/**
 * Hanbit DS - Gradient
 * Figma: "Gradient/Solid", "Gradient/Multiple"
 * Variants: Type(Solid|Multiple), Direction(Top|Right|Bottom|Left)
 */
import React from 'react';

export type GradientType = 'Solid' | 'Multiple';
export type GradientDirection = 'Top' | 'Right' | 'Bottom' | 'Left';

export interface GradientProps {
  type?: GradientType;
  direction?: GradientDirection;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const DIRECTION_MAP: Record<GradientDirection, string> = {
  Top: 'to top',
  Right: 'to right',
  Bottom: 'to bottom',
  Left: 'to left',
};

export const Gradient: React.FC<GradientProps> = ({
  type = 'Solid',
  direction = 'Bottom',
  className,
  style,
  children,
}) => (
  <div
    className={className}
    data-type={type.toLowerCase()}
    data-direction={direction.toLowerCase()}
    style={{
      background:
        type === 'Solid'
          ? `linear-gradient(${DIRECTION_MAP[direction]}, var(--gradient-start, rgba(0,0,0,0)), var(--gradient-end, rgba(0,0,0,1)))`
          : `linear-gradient(${DIRECTION_MAP[direction]}, var(--gradient-start, rgba(0,0,0,0)), var(--gradient-mid, rgba(0,0,0,0.5)), var(--gradient-end, rgba(0,0,0,1)))`,
      ...style,
    }}
  >
    {children}
  </div>
);
export default Gradient;
