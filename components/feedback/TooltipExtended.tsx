/**
 * Hanbit DS - Tooltip/Extended
 * Figma: "Tooltip/Extended"
 * Variants: Close Button(True|False)
 */
import React from 'react';

export type TooltipArrowPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom';

export interface TooltipExtendedProps {
  label: string;
  action?: React.ReactNode;
  showCloseButton?: boolean;
  arrowPosition?: TooltipArrowPosition;
  onClose?: () => void;
  children: React.ReactNode;
}

export const TooltipExtended: React.FC<TooltipExtendedProps> = ({
  label, action, showCloseButton = false, arrowPosition = 'bottom-center', onClose, children,
}) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <div role="tooltip" data-arrow={arrowPosition}>
      <p>{label}</p>
      <div>
        {action}
        {showCloseButton && <button onClick={onClose} aria-label="닫기">✕</button>}
      </div>
    </div>
  </div>
);
export default TooltipExtended;
