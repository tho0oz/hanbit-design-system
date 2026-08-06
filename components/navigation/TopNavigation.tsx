/**
 * Hanbit DS - TopNavigation
 * Figma: "Top Navigation/Top Navigation"
 * Variants: Platform(iOS|Android|Web)
 */
import React from 'react';

export type TopNavPlatform = 'iOS' | 'Android' | 'Web';

export interface TopNavigationProps {
  platform?: TopNavPlatform;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  className?: string;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  platform = 'Web', title, showBackButton = true, onBack,
  leadingContent, trailingContent, className,
}) => (
  <header className={className} data-platform={platform.toLowerCase()} role="banner">
    <div>
      {showBackButton && <button onClick={onBack} aria-label="뒤로가기">←</button>}
      {leadingContent}
    </div>
    {title && <h1>{title}</h1>}
    <div>{trailingContent}</div>
  </header>
);
export default TopNavigation;
