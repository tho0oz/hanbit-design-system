/**
 * Hanbit DS - ProgressIndicator
 * Figma: "Progress Indicator/Progress Indicator"
 * Variants: Percent(0~100)
 */
import React from 'react';

export interface ProgressIndicatorProps {
  percent: number;
  label?: string;
  showLabel?: boolean;
  className?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  percent, label, showLabel = true, className,
}) => (
  <div className={className} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
    <div style={{ width: `${Math.min(100, Math.max(0, percent))}%` }} />
    {showLabel && <span>{Math.round(percent)}%</span>}
  </div>
);
export default ProgressIndicator;
