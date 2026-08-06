/**
 * Hanbit DS - ActionArea
 * Figma: "Action Area/Action Area"
 * Variants: Extra
 */
import React from 'react';

export interface ActionAreaProps {
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  extraContent?: React.ReactNode;
  className?: string;
}

export const ActionArea: React.FC<ActionAreaProps> = ({
  primaryAction, secondaryAction, extraContent, className,
}) => (
  <div className={className} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    {extraContent && <div style={{ flex: 1 }}>{extraContent}</div>}
    <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
      {secondaryAction}{primaryAction}
    </div>
  </div>
);
export default ActionArea;
