/**
 * Hanbit DS - Thumbnail
 * Figma: "Thumbnail/Thumbnail"
 * Variants: Radius(Square|Rounded|Circle)
 */
import React from 'react';

export type ThumbnailRadius = 'Square' | 'Rounded' | 'Circle';

export interface ThumbnailProps {
  src: string;
  alt?: string;
  radius?: ThumbnailRadius;
  size?: number;
  className?: string;
}

const RADIUS_MAP: Record<ThumbnailRadius, string> = { Square: '0', Rounded: '8px', Circle: '50%' };

export const Thumbnail: React.FC<ThumbnailProps> = ({
  src, alt = '', radius = 'Rounded', size = 48, className,
}) => (
  <img className={className} src={src} alt={alt}
    style={{ width: size, height: size, borderRadius: RADIUS_MAP[radius], objectFit: 'cover' }} />
);
export default Thumbnail;
