/**
 * Hanbit DS - Cell (List Item)
 * Figma: "Cell/Cell"
 * Variants: Vertical Padding, Vertical Align, Fill Width, Text Ellipsis, Active, Disable
 */
import React from 'react';

export type CellVerticalPadding = 'Normal' | 'Compact';
export type CellVerticalAlign = 'Top' | 'Center';

export interface CellProps {
  title: string;
  description?: string;
  verticalPadding?: CellVerticalPadding;
  verticalAlign?: CellVerticalAlign;
  fillWidth?: boolean;
  textEllipsis?: boolean;
  active?: boolean;
  disabled?: boolean;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Cell: React.FC<CellProps> = ({
  title, description, verticalPadding = 'Normal', verticalAlign = 'Center',
  fillWidth, textEllipsis, active, disabled, leadingContent, trailingContent, onClick, className,
}) => (
  <div className={className} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}
    onClick={!disabled ? onClick : undefined}
    data-padding={verticalPadding.toLowerCase()} data-align={verticalAlign.toLowerCase()}
    data-fill={fillWidth} data-active={active} data-disabled={disabled}>
    {leadingContent && <div>{leadingContent}</div>}
    <div style={{ flex: fillWidth ? 1 : undefined, overflow: textEllipsis ? 'hidden' : undefined }}>
      <span style={textEllipsis ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } : undefined}>{title}</span>
      {description && <p>{description}</p>}
    </div>
    {trailingContent && <div>{trailingContent}</div>}
  </div>
);
export default Cell;
