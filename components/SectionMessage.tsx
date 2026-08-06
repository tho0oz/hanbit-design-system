/**
 * Hanbit DS - SectionMessage
 * Figma: "Section Message/Section Message"
 * Variants: Normal, Info, Positive, Cautionary, Negative
 */
import React from 'react';
import styles from './SectionMessage.module.css';

export type SectionMessageVariant = 'Normal' | 'Info' | 'Positive' | 'Cautionary' | 'Negative';

export interface SectionMessageProps {
  heading: string;
  description?: string;
  variant?: SectionMessageVariant;
  showIcon?: boolean;
  showCloseButton?: boolean;
  bottomAction?: React.ReactNode;
  trailingAction?: React.ReactNode;
  onClose?: () => void;
}

export const SectionMessage: React.FC<SectionMessageProps> = ({
  heading, description, variant = 'Normal', showIcon = true,
  showCloseButton, bottomAction, trailingAction, onClose,
}) => (
  <div className={[styles.msg, styles[`variant-${variant.toLowerCase()}`]].join(' ')} role={variant === 'Negative' ? 'alert' : 'status'}>
    <div className={styles.header}>
      {showIcon && <span className={styles.icon} />}
      <span className={styles.heading}>{heading}</span>
      {trailingAction}
      {showCloseButton && <button className={styles.close} onClick={onClose} aria-label="닫기">&times;</button>}
    </div>
    {description && <p className={styles.desc}>{description}</p>}
    {bottomAction && <div className={styles.bottom}>{bottomAction}</div>}
  </div>
);
export default SectionMessage;