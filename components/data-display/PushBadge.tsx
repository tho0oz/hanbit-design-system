/**
 * Hanbit DS - PushBadge
 * Figma: "Push Badge/Push Badge"
 * Variants: Variant(Dot|Number|New), Size(XSmall|Small|Medium)
 */
import React from 'react';

export type PushBadgeVariant = 'Dot' | 'Number' | 'New';
export type PushBadgeSize = 'XSmall' | 'Small' | 'Medium';

export interface PushBadgeProps {
  variant?: PushBadgeVariant;
  size?: PushBadgeSize;
  number?: number;
  className?: string;
}

export const PushBadge: React.FC<PushBadgeProps> = ({
  variant = 'Dot', size = 'Small', number = 0, className,
}) => (
  <span className={className} data-variant={variant.toLowerCase()} data-size={size.toLowerCase()}
    aria-label={variant === 'Number' ? `${number}개 알림` : variant === 'New' ? '새 알림' : '알림'}>
    {variant === 'Number' && <span>{number > 99 ? '99+' : number}</span>}
    {variant === 'New' && <span>N</span>}
  </span>
);
export default PushBadge;
