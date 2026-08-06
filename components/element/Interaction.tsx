/**
 * Hanbit DS - Interaction Overlay
 * Figma: "Interaction/Normal", "Interaction/Light", "Interaction/Strong"
 * Variants: Variant(Normal|Light|Strong), State(Normal|Hovered|Focused|Pressed)
 */
import React from 'react';

export type InteractionVariant = 'Normal' | 'Light' | 'Strong';
export type InteractionState = 'Normal' | 'Hovered' | 'Focused' | 'Pressed';

export interface InteractionProps {
  variant?: InteractionVariant;
  state?: InteractionState;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const OPACITY_MAP: Record<InteractionVariant, Record<InteractionState, number>> = {
  Normal: { Normal: 0, Hovered: 0.04, Focused: 0.08, Pressed: 0.12 },
  Light: { Normal: 0, Hovered: 0.02, Focused: 0.04, Pressed: 0.08 },
  Strong: { Normal: 0, Hovered: 0.08, Focused: 0.12, Pressed: 0.16 },
};

export const Interaction: React.FC<InteractionProps> = ({
  variant = 'Normal',
  state = 'Normal',
  className,
  children,
  onClick,
}) => (
  <div
    className={className}
    data-variant={variant.toLowerCase()}
    data-state={state.toLowerCase()}
    onClick={onClick}
    style={{ position: 'relative', isolation: 'isolate' }}
  >
    {children}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: `rgba(0, 0, 0, ${OPACITY_MAP[variant][state]})`,
        pointerEvents: 'none',
        borderRadius: 'inherit',
        transition: 'background-color 150ms ease',
      }}
    />
  </div>
);
export default Interaction;
