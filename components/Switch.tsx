/**
 * Hanbit DS - Switch
 * Figma: "Switch/Switch"
 * Variants: Platform(iOS|Normal), Size(XSmall|Small|Medium), Active, Disable
 */
import React, { useId } from 'react';
import styles from './Switch.module.css';

export type SwitchSize = 'XSmall' | 'Small' | 'Medium';
export type SwitchPlatform = 'iOS' | 'Normal';

export interface SwitchProps {
  size?: SwitchSize;
  platform?: SwitchPlatform;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ size = 'Medium', platform = 'Normal', checked, disabled, label, onChange }) => {
  const id = useId();
  return (
    <label htmlFor={id} className={[styles.switch, styles[`size-${size.toLowerCase()}`], styles[`platform-${platform.toLowerCase()}`], checked && styles.active, disabled && styles.disabled].filter(Boolean).join(' ')}>
      <input id={id} type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={e => onChange?.(e.target.checked)} className={styles.input} />
      <span className={styles.track}><span className={styles.thumb} /></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
export default Switch;