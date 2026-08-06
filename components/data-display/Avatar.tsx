/**
 * Hanbit DS - Avatar
 * Figma: "Avatar/Avatar", "Avatar/Avatar Group"
 * Variants: Variant(Person|Academy), Size(XSmall~XLarge), Placeholder
 */
import React from 'react';

export type AvatarVariant = 'Person' | 'Academy';
export type AvatarSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';

export interface AvatarProps {
  src?: string;
  alt?: string;
  variant?: AvatarVariant;
  size?: AvatarSize;
  placeholder?: boolean;
  className?: string;
}

const SIZE_MAP: Record<AvatarSize, number> = { XSmall: 24, Small: 32, Medium: 40, Large: 56, XLarge: 80 };

export const Avatar: React.FC<AvatarProps> = ({
  src, alt = '', variant = 'Person', size = 'Medium', placeholder, className,
}) => (
  <div className={className} data-variant={variant.toLowerCase()} data-size={size.toLowerCase()}
    style={{ width: SIZE_MAP[size], height: SIZE_MAP[size], borderRadius: variant === 'Academy' ? '8px' : '50%', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
    {src && !placeholder ? (
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    ) : (
      <svg viewBox="0 0 40 40" fill="#b7beca" style={{ width: '100%', height: '100%' }}>
        <circle cx="20" cy="16" r="8" /><ellipse cx="20" cy="38" rx="14" ry="12" />
      </svg>
    )}
  </div>
);

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars, max = 4, size = 'Small', className,
}) => {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  return (
    <div className={className} style={{ display: 'flex' }}>
      {visible.map((a, i) => <Avatar key={i} {...a} size={size} />)}
      {overflow > 0 && (
        <div style={{ width: SIZE_MAP[size], height: SIZE_MAP[size], borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
          +{overflow}
        </div>
      )}
    </div>
  );
};
export default Avatar;
