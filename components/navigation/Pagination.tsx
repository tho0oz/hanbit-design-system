/**
 * Hanbit DS - Pagination
 * Figma: "Pagination/Dot", "Pagination/Counter", "Pagination/Navigation"
 */
import React from 'react';

// Dot Pagination
export type PaginationDotSize = 'Normal' | 'Small';
export type PaginationDotVariant = 'Adaptive' | 'White';

export interface PaginationDotProps {
  total: number;
  current: number;
  size?: PaginationDotSize;
  variant?: PaginationDotVariant;
  onChange?: (index: number) => void;
  className?: string;
}

export const PaginationDot: React.FC<PaginationDotProps> = ({
  total, current, size = 'Normal', variant = 'Adaptive', onChange, className,
}) => (
  <div className={className} role="tablist" aria-label="페이지" data-size={size.toLowerCase()} data-variant={variant.toLowerCase()}>
    {Array.from({ length: total }, (_, i) => (
      <button key={i} role="tab" aria-selected={i === current} aria-label={`${i + 1}페이지`}
        onClick={() => onChange?.(i)} data-active={i === current} />
    ))}
  </div>
);

// Counter Pagination
export interface PaginationCounterProps {
  current: number;
  total: number;
  size?: 'Small' | 'Medium';
  alternative?: boolean;
  className?: string;
}

export const PaginationCounter: React.FC<PaginationCounterProps> = ({
  current, total, size = 'Medium', alternative, className,
}) => (
  <span className={className} data-size={size.toLowerCase()} data-alternative={alternative} aria-label={`${current}/${total} 페이지`}>
    <strong>{current}</strong> / {total}
  </span>
);

// Navigation Pagination
export interface PaginationNavigationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationNavigation: React.FC<PaginationNavigationProps> = ({
  current, total, onPageChange, className,
}) => {
  const pages = Array.from({ length: Math.min(total, 10) }, (_, i) => i + 1);
  return (
    <nav className={className} aria-label="페이지 네비게이션">
      <button disabled={current <= 1} onClick={() => onPageChange(current - 1)} aria-label="이전">←</button>
      {pages.map(p => (
        <button key={p} onClick={() => onPageChange(p)} aria-current={p === current ? 'page' : undefined} data-active={p === current}>{p}</button>
      ))}
      <button disabled={current >= total} onClick={() => onPageChange(current + 1)} aria-label="다음">→</button>
    </nav>
  );
};
