/**
 * Hanbit DS - Viewer/BotNavi
 * Figma: "Viewer/BotNavi"
 * Variants: BreakPoint(Mobile|Desktop), ProgressBar(False|True), Button/Done
 * LMS 뷰어 하단 네비게이션
 */
import React from 'react';

export type ViewerBotNaviBreakpoint = 'Mobile' | 'Desktop';

export interface ViewerBotNaviProps {
  breakpoint?: ViewerBotNaviBreakpoint;
  showProgressBar?: boolean;
  progress?: number;
  showDoneButton?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  onDone?: () => void;
  previousLabel?: string;
  nextLabel?: string;
  doneLabel?: string;
  currentPage?: number;
  totalPages?: number;
  className?: string;
}

export const ViewerBotNavi: React.FC<ViewerBotNaviProps> = ({
  breakpoint = 'Desktop', showProgressBar = false, progress = 0, showDoneButton = false,
  onPrevious, onNext, onDone, previousLabel = '이전', nextLabel = '다음', doneLabel = '완료',
  currentPage, totalPages, className,
}) => (
  <div className={className} data-breakpoint={breakpoint.toLowerCase()} style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(92,102,118,0.16)' }}>
    {showProgressBar && (
      <div role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} style={{ height: 4, backgroundColor: 'rgba(92,102,118,0.08)' }}>
        <div style={{ height: '100%', width: `${progress}%`, backgroundColor: 'var(--semantic-primary-normal, #3182F6)', transition: 'width 300ms ease' }} />
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: breakpoint === 'Mobile' ? '8px 16px' : '12px 24px' }}>
      <button onClick={onPrevious} aria-label={previousLabel}>← {breakpoint === 'Desktop' && previousLabel}</button>
      {currentPage !== undefined && totalPages !== undefined && <span>{currentPage} / {totalPages}</span>}
      <div style={{ display: 'flex', gap: 8 }}>
        {showDoneButton && <button onClick={onDone}>{doneLabel}</button>}
        <button onClick={onNext} aria-label={nextLabel}>{breakpoint === 'Desktop' && nextLabel} →</button>
      </div>
    </div>
  </div>
);
export default ViewerBotNavi;
