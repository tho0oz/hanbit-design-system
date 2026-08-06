/**
 * Hanbit DS - SectionHeader
 * Figma: "Section Header/Section Header"
 * Variants: Platform(Desktop|Mobile), Size(Small|Medium|Large), Heading Content
 */
import React from 'react';

export type SectionHeaderPlatform = 'Desktop' | 'Mobile';
export type SectionHeaderSize = 'Small' | 'Medium' | 'Large';

export interface SectionHeaderProps {
  title: string;
  description?: string;
  platform?: SectionHeaderPlatform;
  size?: SectionHeaderSize;
  trailingContent?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title, description, platform = 'Desktop', size = 'Medium', trailingContent, className,
}) => (
  <div className={className} data-platform={platform.toLowerCase()} data-size={size.toLowerCase()}>
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    {trailingContent && <div>{trailingContent}</div>}
  </div>
);
export default SectionHeader;
