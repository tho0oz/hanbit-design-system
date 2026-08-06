/**
 * Hanbit DS - Slider
 * Figma: "Slider/Slider"
 * Variants: Percent(0|50|100), Disable
 */
import React, { useId } from 'react';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  showValue?: boolean;
  minLabel?: string;
  maxLabel?: string;
}

export const Slider: React.FC<SliderProps> = ({
  label, showValue = true, min = 0, max = 100, value = 0,
  minLabel, maxLabel, disabled, className, ...props
}) => {
  const id = useId();
  return (
    <div className={className} data-disabled={disabled}>
      {label && <label htmlFor={id}>{label}{showValue && <span>{value}%</span>}</label>}
      <input id={id} type="range" min={min} max={max} value={value} disabled={disabled} {...props} />
      {(minLabel || maxLabel) && <div><span>{minLabel}</span><span>{maxLabel}</span></div>}
    </div>
  );
};
export default Slider;
