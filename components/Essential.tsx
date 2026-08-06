/**
 * Hanbit DS - Essential
 * Figma: "Essential/Essential"
 * Variants: Platform(iOS|Android|Web)
 */
import React from 'react';

export type EssentialPlatform = 'iOS' | 'Android' | 'Web';

export interface EssentialProps {
  platform?: EssentialPlatform;
  children: React.ReactNode;
  className?: string;
}

export const Essential: React.FC<EssentialProps> = ({
  platform = 'Web', children, className,
}) => (
  <div className={className} data-platform={platform.toLowerCase()}>
    {children}
  </div>
);
export default Essential;
