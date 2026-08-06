/**
 * Hanbit DS - DatePicker/iOS
 * Figma: "Date Picker/iOS"
 * Variants: Type(Calendar|Wheel)
 */
import React, { useState } from 'react';

export type DatePickerIOSType = 'Calendar' | 'Wheel';

export interface DatePickerIOSProps {
  type?: DatePickerIOSType;
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

export const DatePickerIOS: React.FC<DatePickerIOSProps> = ({
  type = 'Calendar', value, onChange, className,
}) => {
  const [date, setDate] = useState(value || new Date());
  const handleChange = (d: Date) => { setDate(d); onChange?.(d); };

  return (
    <div className={className} data-type={type.toLowerCase()} role="dialog" aria-label="날짜 선택">
      {type === 'Calendar' && (
        <div>
          <div>
            <button onClick={() => handleChange(new Date(date.getFullYear(), date.getMonth()-1))} aria-label="이전 달">&lt;</button>
            <span>{date.getFullYear()}년 {date.getMonth()+1}월</span>
            <button onClick={() => handleChange(new Date(date.getFullYear(), date.getMonth()+1))} aria-label="다음 달">&gt;</button>
          </div>
          <div role="grid" aria-label="달력"></div>
        </div>
      )}
      {type === 'Wheel' && (
        <div role="group" aria-label="날짜 휠" style={{ display: 'flex', gap: 8 }}>
          <select value={date.getMonth()} onChange={e => handleChange(new Date(date.getFullYear(), +e.target.value, date.getDate()))} aria-label="월">
            {Array.from({length:12},(_,i)=><option key={i} value={i}>{i+1}월</option>)}
          </select>
          <select value={date.getDate()} onChange={e => handleChange(new Date(date.getFullYear(), date.getMonth(), +e.target.value))} aria-label="일">
            {Array.from({length:31},(_,i)=><option key={i+1} value={i+1}>{i+1}일</option>)}
          </select>
          <select value={date.getFullYear()} onChange={e => handleChange(new Date(+e.target.value, date.getMonth(), date.getDate()))} aria-label="년">
            {Array.from({length:20},(_,i)=>2020+i).map(y=><option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      )}
    </div>
  );
};
export default DatePickerIOS;
