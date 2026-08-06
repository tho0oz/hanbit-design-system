/**
 * Hanbit DS - ContentBadge
 * Figma: "Content Badge/Content Badge"
 * Variants: Variant(Solid|Outlined), Size(XSmall|Small|Medium), Color(Neutral|Orange|Lime|Cyan|Sky|Blue|Purple|Pink)
 */
import React from 'react';

export type ContentBadgeVariant = 'Solid' | 'Outlined';
export type ContentBadgeSize = 'XSmall' | 'Small' | 'Medium';
export type ContentBadgeColor = 'Neutral' | 'Orange' | 'Lime' | 'Cyan' | 'Sky' | 'Blue' | 'Purple' | 'Pink';

export interface ContentBadgeProps {
  text: string;
  variant?: ContentBadgeVariant;
  size?: ContentBadgeSize;
  color?: ContentBadgeColor;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

export const ContentBadge: React.FC<ContentBadgeProps> = ({
  text, variant = 'Solid', size = 'Small', color = 'Neutral',
  leadingIcon, trailingIcon, className,
}) => (
  <span className={className} data-variant={variant.toLowerCase()} data-size={size.toLowerCase()} data-color={color.toLowerCase()}>
    {leadingIcon && <span>{leadingIcon}</span>}
    <span>{text}</span>
    {trailingIcon && <span>{trailingIcon}</span>}
  </span>
);
export default ContentBadge;
