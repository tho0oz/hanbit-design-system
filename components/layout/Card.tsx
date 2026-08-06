/**
 * Hanbit DS - Card
 * Figma: "Card/Normal", "Card/List"
 * Variants: Platform(Desktop|Mobile), Skeleton
 */
import React from 'react';

export type CardVariant = 'Normal' | 'List';
export type CardPlatform = 'Desktop' | 'Mobile';

export interface CardProps {
  variant?: CardVariant;
  platform?: CardPlatform;
  thumbnail?: string;
  title: string;
  description?: string;
  metadata?: string;
  skeleton?: boolean;
  onClick?: () => void;
  trailingContent?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'Normal', platform = 'Desktop', thumbnail, title, description,
  metadata, skeleton, onClick, trailingContent, className,
}) => (
  <div className={className} data-variant={variant.toLowerCase()} data-platform={platform.toLowerCase()}
    data-skeleton={skeleton} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
    {thumbnail && <div><img src={thumbnail} alt="" style={{ width: '100%', objectFit: 'cover' }} /></div>}
    <div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {metadata && <span>{metadata}</span>}
    </div>
    {trailingContent && <div>{trailingContent}</div>}
  </div>
);
export default Card;
