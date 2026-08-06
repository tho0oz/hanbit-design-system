/**
 * Hanbit DS - PlayIconBadge
 * Figma: "Play Icon Badge/Play Icon Badge"
 * Variants: Size(Small|Medium|Large), Alternative
 */
import React from 'react';

export type PlayIconBadgeSize = 'Small' | 'Medium' | 'Large';

export interface PlayIconBadgeProps {
  size?: PlayIconBadgeSize;
  alternative?: boolean;
  onClick?: () => void;
  className?: string;
}

export const PlayIconBadge: React.FC<PlayIconBadgeProps> = ({
  size = 'Medium', alternative, onClick, className,
}) => (
  <button className={className} onClick={onClick} aria-label="재생"
    data-size={size.toLowerCase()} data-alternative={alternative}>
    <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21" /></svg>
  </button>
);
export default PlayIconBadge;
