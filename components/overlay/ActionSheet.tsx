/**
 * Hanbit DS - ActionSheet
 * Figma: "Action Sheet/Action Sheet"
 * Variants: Platform(iOS|Android)
 */
import React from 'react';

export type ActionSheetPlatform = 'iOS' | 'Android';

export interface ActionSheetAction {
  label: string;
  destructive?: boolean;
  onClick: () => void;
}

export interface ActionSheetProps {
  platform?: ActionSheetPlatform;
  actions: ActionSheetAction[];
  cancelLabel?: string;
  open: boolean;
  onClose: () => void;
}

export const ActionSheet: React.FC<ActionSheetProps> = ({
  platform = 'iOS', actions, cancelLabel = '취소', open, onClose,
}) => {
  if (!open) return null;
  return (
    <div data-platform={platform.toLowerCase()} onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 50 }}>
      <div onClick={e => e.stopPropagation()} style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <div role="menu">
          {actions.map((a, i) => (
            <button key={i} role="menuitem" onClick={a.onClick} data-destructive={a.destructive}>{a.label}</button>
          ))}
        </div>
        <button onClick={onClose}>{cancelLabel}</button>
      </div>
    </div>
  );
};
export default ActionSheet;
