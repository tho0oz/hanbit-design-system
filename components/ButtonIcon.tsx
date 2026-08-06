/**
 * Hanbit DS - Button/Icon
 * Figma: "Button/Icon/Normal", "Button/Icon/Background", "Button/Icon/Outlined", "Button/Icon/Solid"
 * Variants: Style(Normal|Background|Outlined|Solid), Size(Small|Medium), Alternative, Disable
 */
import React from 'react';

export type ButtonIconStyle = 'Normal' | 'Background' | 'Outlined' | 'Solid';
export type ButtonIconSize = 'Small' | 'Medium';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: ButtonIconStyle;
  size?: ButtonIconSize;
  alternative?: boolean;
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, variant = 'Normal', size = 'Medium', alternative, disabled, className, ...props }, ref) => (
    <button ref={ref} className={className} disabled={disabled} aria-label={props['aria-label'] || '아이콘 버튼'}
      data-variant={variant.toLowerCase()} data-size={size.toLowerCase()} data-alternative={alternative} {...props}>
      {icon}
    </button>
  )
);
ButtonIcon.displayName = 'ButtonIcon';
export default ButtonIcon;
