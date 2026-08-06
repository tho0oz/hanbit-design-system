/**
 * Hanbit DS - Alert
 * Figma: "Alert/Alert"
 * Variants: Platform(iOS|Android|Web)
 */
import React from 'react';

export type AlertPlatform = 'iOS' | 'Android' | 'Web';
export type AlertActionVariant = 'Normal' | 'Assistive' | 'Negative';

export interface AlertAction {
  label: string;
  variant?: AlertActionVariant;
  onClick: () => void;
}

export interface AlertProps {
  heading: string;
  body?: string;
  platform?: AlertPlatform;
  actions: AlertAction[];
  open: boolean;
  onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  heading, body, platform = 'Web', actions, open, onClose,
}) => {
  if (!open) return null;
  return (
    <div role="alertdialog" aria-modal="true" aria-labelledby="alert-heading" data-platform={platform.toLowerCase()}>
      <div>
        <h2 id="alert-heading">{heading}</h2>
        {body && <p>{body}</p>}
        <div>
          {actions.map((action, i) => (
            <button key={i} onClick={action.onClick} data-variant={action.variant?.toLowerCase() || 'normal'}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Alert;
