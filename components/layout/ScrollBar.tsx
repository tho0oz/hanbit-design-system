/**
 * Hanbit DS - ScrollBar
 * Figma: "Scroll Bar/Scroll Bar"
 * Variants: Size(Normal|Compact), Percent, Position
 */
import React from 'react';

export type ScrollBarSize = 'Normal' | 'Compact';

export interface ScrollBarProps {
  size?: ScrollBarSize;
  percent?: number;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export const ScrollBar: React.FC<ScrollBarProps> = ({
  size = 'Normal', percent = 0, orientation = 'vertical', className,
}) => (
  <div className={className} role="scrollbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}
    aria-orientation={orientation} data-size={size.toLowerCase()}>
    <div style={{
      [orientation === 'vertical' ? 'height' : 'width']: '30%',
      [orientation === 'vertical' ? 'top' : 'left']: `${percent}%`,
      position: 'absolute',
    }} />
  </div>
);
export default ScrollBar;
