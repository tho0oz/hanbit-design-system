/**
 * Hanbit DS - Snackbar
 * Figma: "Snackbar/Snackbar"
 * Variants: Normal|Icon
 */
import React, { useEffect, useState } from 'react';

export type SnackbarVariant = 'Normal' | 'Icon';

export interface SnackbarProps {
  heading: string;
  description?: string;
  variant?: SnackbarVariant;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number;
  visible?: boolean;
  onDismiss?: () => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  heading, description, variant = 'Normal', icon, action,
  duration = 5000, visible = true, onDismiss,
}) => {
  const [show, setShow] = useState(visible);
  useEffect(() => setShow(visible), [visible]);
  useEffect(() => {
    if (show && duration > 0) {
      const t = setTimeout(() => { setShow(false); onDismiss?.(); }, duration);
      return () => clearTimeout(t);
    }
  }, [show, duration, onDismiss]);

  if (!show) return null;
  return (
    <div role="status" aria-live="polite" data-variant={variant.toLowerCase()}>
      {variant === 'Icon' && icon && <span>{icon}</span>}
      <div>
        <strong>{heading}</strong>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
};
export default Snackbar;
