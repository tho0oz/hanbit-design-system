/**
 * Hanbit DS - SafeArea
 * Figma: "Safe Area/Status", "Safe Area/Bottom"
 * Variants: Type(Status|Bottom), Platform(iOS|Android|Web)
 */
import React from 'react';

export type SafeAreaType = 'Status' | 'Bottom';
export type SafeAreaPlatform = 'iOS' | 'Android' | 'Web';

export interface SafeAreaProps {
  type?: SafeAreaType;
  platform?: SafeAreaPlatform;
  className?: string;
}

const HEIGHT_MAP: Record<SafeAreaType, Record<SafeAreaPlatform, number>> = {
  Status: { iOS: 59, Android: 24, Web: 0 },
  Bottom: { iOS: 34, Android: 0, Web: 0 },
};

export const SafeArea: React.FC<SafeAreaProps> = ({
  type = 'Status',
  platform = 'iOS',
  className,
}) => (
  <div
    className={className}
    data-type={type.toLowerCase()}
    data-platform={platform.toLowerCase()}
    style={{
      height: HEIGHT_MAP[type][platform],
      width: '100%',
      flexShrink: 0,
    }}
    aria-hidden="true"
  />
);
export default SafeArea;
