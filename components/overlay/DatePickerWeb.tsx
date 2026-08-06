/**
 * Hanbit DS - DatePicker/Web
 * Figma: "Date Picker/Web"
 * Variants: View(Day|Month|Year), Variant(Normal|Range), Expand
 */
import React, { useState } from 'react';

export type DatePickerView = 'Day' | 'Month' | 'Year';
export type DatePickerVariant = 'Normal' | 'Range';

export interface DatePickerWebProps {
  variant?: DatePickerVariant;
  value?: Date;
  rangeStart?: Date;
  rangeEnd?: Date;
  onChange?: (date: Date) => void;
  onRangeChange?: (start: Date, end: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

export const DatePickerWeb: React.FC<DatePickerWebProps> = ({
  variant = 'Normal', value, onChange, className,
}) => {
  const [view, setView] = useState<DatePickerView>('Day');
  const [currentMonth, setCurrentMonth] = useState(value || new Date());

  return (
    <div className={className} data-variant={variant.toLowerCase()} data-view={view.toLowerCase()} role="dialog" aria-label="날짜 선택">
      <div>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} aria-label="이전 달">&lt;</button>
        <button onClick={() => setView(view === 'Day' ? 'Month' : 'Year')}>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </button>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} aria-label="다음 달">&gt;</button>
      </div>
      <div role="grid" aria-label="달력">
        {/* Calendar grid rendered by implementation */}
      </div>
    </div>
  );
};
export default DatePickerWeb;
