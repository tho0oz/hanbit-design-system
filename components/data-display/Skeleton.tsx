/**
 * Hanbit DS - Skeleton
 * Figma: "Skeleton/Text", "Skeleton/Rectangle", "Skeleton/Circle"
 * Variants: Type(Text|Rectangle|Circle), Color(Normal|White), Length, Align
 */
import React from 'react';

export type SkeletonType = 'Text' | 'Rectangle' | 'Circle';
export type SkeletonColor = 'Normal' | 'White';
export type SkeletonLength = 'Full' | 'Long' | 'Medium' | 'Short';
export type SkeletonAlign = 'Left' | 'Center' | 'Right';

export interface SkeletonProps {
  type?: SkeletonType;
  color?: SkeletonColor;
  length?: SkeletonLength;
  align?: SkeletonAlign;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const LENGTH_MAP: Record<SkeletonLength, string> = { Full: '100%', Long: '80%', Medium: '60%', Short: '40%' };

export const Skeleton: React.FC<SkeletonProps> = ({
  type = 'Text', color = 'Normal', length = 'Full', align = 'Left',
  width, height, className,
}) => {
  const style: React.CSSProperties = {
    backgroundColor: color === 'White' ? 'rgba(255,255,255,0.16)' : 'rgba(92,102,118,0.08)',
    borderRadius: type === 'Circle' ? '50%' : type === 'Text' ? '4px' : '8px',
    width: width || (type === 'Circle' ? 40 : type === 'Text' ? LENGTH_MAP[length] : '100%'),
    height: height || (type === 'Circle' ? 40 : type === 'Text' ? 16 : 120),
    animation: 'pulse 1.5s ease-in-out infinite',
  };
  return <div className={className} style={style} data-align={align.toLowerCase()} aria-hidden="true" />;
};
export default Skeleton;
