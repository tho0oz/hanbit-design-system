/**
 * Hanbit DS - Modal
 * Figma: "Modal/Popup", "Modal/Bottom Sheet", "Modal/Full"
 * Sizes: Small(360), Medium(400), Large(480), XLarge(560)
 */
import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

export type ModalVariant = 'Popup' | 'BottomSheet' | 'Full';
export type ModalSize = 'Small' | 'Medium' | 'Large' | 'XLarge';

export interface ModalProps {
  variant?: ModalVariant;
  size?: ModalSize;
  open: boolean;
  title?: string;
  showAction?: boolean;
  children: React.ReactNode;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  onClose: () => void;
}

const SIZE_MAP: Record<ModalSize, { width: string; radius: string }> = {
  Small: { width: '360px', radius: '12px' }, Medium: { width: '400px', radius: '12px' },
  Large: { width: '480px', radius: '20px' }, XLarge: { width: '560px', radius: '20px' },
};

export const Modal: React.FC<ModalProps> = ({
  variant = 'Popup', size = 'Medium', open, title, showAction = true,
  children, primaryAction, secondaryAction, onClose,
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { open ? ref.current?.showModal() : ref.current?.close(); }, [open]);

  return (
    <dialog ref={ref} className={[styles.modal, styles[`variant-${variant.toLowerCase()}`]].join(' ')}
      style={{ '--modal-w': SIZE_MAP[size].width, '--modal-r': SIZE_MAP[size].radius } as React.CSSProperties}
      onClick={e => e.target === ref.current && onClose()} onCancel={onClose}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <button className={styles.close} onClick={onClose} aria-label="닫기">&times;</button>
        </div>
        <div className={styles.content}>{children}</div>
        {showAction && (primaryAction || secondaryAction) && (
          <div className={styles.actions}>{secondaryAction}{primaryAction}</div>
        )}
      </div>
    </dialog>
  );
};
export default Modal;