/**
 * Hanbit DS - Icon Wrapper
 * Figma: "Icons/Icons", "Icons/Icons Responsive"
 * Variants: Size(XSmall|Small|Medium|Large|XLarge)
 */
import React from 'react';

export type IconSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

export interface IconWrapperProps {
  size?: IconSize;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

const SIZE_MAP: Record<IconSize, number> = {
  XSmall: 16, Small: 20, Medium: 24, Large: 28, XLarge: 32,
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
  size = 'Medium', icon, color = 'currentColor', className,
}) => (
  <span className={className} data-size={size.toLowerCase()} role="img"
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: SIZE_MAP[size], height: SIZE_MAP[size], color, flexShrink: 0 }}>
    {icon}
  </span>
);
export default IconWrapper;
