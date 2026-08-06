/**
 * Hanbit DS - Toast
 * Figma: "Toast/Toast"
 * Variants: Normal, Positive, Cautionary, Negative
 */
import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastVariant = 'Normal' | 'Positive' | 'Cautionary' | 'Negative';

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  showIcon?: boolean;
  icon?: React.ReactNode;
  duration?: number;
  visible?: boolean;
  onDismiss?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message, variant = 'Normal', showIcon = true, icon, duration = 3000, visible = true, onDismiss,
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
    <div className={[styles.toast, styles[`variant-${variant.toLowerCase()}`]].join(' ')} role="status" aria-live="polite">
      {showIcon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.message}>{message}</span>
    </div>
  );
};
export default Toast;