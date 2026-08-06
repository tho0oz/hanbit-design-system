/**
 * Hanbit DS - ProgressTracker
 * Figma: "Progress Tracker/Normal Horizontal", "Progress Tracker/Normal Vertical", "Progress Tracker/Desktop Horizontal"
 * Variants: Total Count, Current Step, Direction
 */
import React from 'react';

export type ProgressTrackerDirection = 'Horizontal' | 'Vertical';

export interface ProgressTrackerStep {
  label: string;
  description?: string;
}

export interface ProgressTrackerProps {
  steps: ProgressTrackerStep[];
  currentStep: number;
  direction?: ProgressTrackerDirection;
  className?: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps, currentStep, direction = 'Horizontal', className,
}) => (
  <div className={className} data-direction={direction.toLowerCase()} role="progressbar"
    aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length}>
    {steps.map((step, i) => (
      <div key={i} data-status={i < currentStep ? 'complete' : i === currentStep ? 'current' : 'upcoming'}>
        <div>{i < currentStep ? '✓' : i + 1}</div>
        <div>
          <span>{step.label}</span>
          {step.description && <span>{step.description}</span>}
        </div>
        {i < steps.length - 1 && <div data-complete={i < currentStep} />}
      </div>
    ))}
  </div>
);
export default ProgressTracker;
