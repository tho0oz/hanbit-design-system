/**
 * Hanbit DS - EmptyState
 * Figma: "Empty State/Empty State"
 * Variants: Platform(Desktop|Mobile), Padding(Normal|Compact)
 */
import React from 'react';

export type EmptyStatePlatform = 'Desktop' | 'Mobile';
export type EmptyStatePadding = 'Normal' | 'Compact';

export interface EmptyStateProps {
  heading: string;
  description?: string;
  platform?: EmptyStatePlatform;
  padding?: EmptyStatePadding;
  image?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  heading, description, platform = 'Desktop', padding = 'Normal',
  image, action, className,
}) => (
  <div className={className} data-platform={platform.toLowerCase()} data-padding={padding.toLowerCase()}
    style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
    {image && <div>{image}</div>}
    <h3>{heading}</h3>
    {description && <p>{description}</p>}
    {action && <div>{action}</div>}
  </div>
);
export default EmptyState;
