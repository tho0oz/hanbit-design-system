/**
 * Hanbit DS - DatePicker/Android
 * Figma: "Date Picker/Android"
 * Variants: Type(Input|Picker|Wheel)
 */
import React, { useState } from 'react';

export type DatePickerAndroidType = 'Input' | 'Picker' | 'Wheel';

export interface DatePickerAndroidProps {
  type?: DatePickerAndroidType;
  value?: Date;
  onChange?: (date: Date) => void;
  onConfirm?: (date: Date) => void;
  onCancel?: () => void;
  className?: string;
}

export const DatePickerAndroid: React.FC<DatePickerAndroidProps> = ({
  type = 'Picker', value, onChange, onConfirm, onCancel, className,
}) => {
  const [date, setDate] = useState(value || new Date());
  const handleChange = (d: Date) => { setDate(d); onChange?.(d); };

  return (
    <div className={className} data-type={type.toLowerCase()} role="dialog" aria-label="날짜 선택">
      <div><h3>날짜 선택</h3></div>
      {type === 'Input' && <div><input type="date" value={date.toISOString().split('T')[0]} onChange={e => handleChange(new Date(e.target.value))} aria-label="날짜 입력" /></div>}
      {type === 'Picker' && <div role="grid" aria-label="달력"><div><span>{date.getFullYear()}년 {date.getMonth()+1}월</span></div></div>}
      {type === 'Wheel' && (
        <div role="group" aria-label="날짜 휠">
          <select value={date.getFullYear()} onChange={e => handleChange(new Date(+e.target.value, date.getMonth(), date.getDate()))} aria-label="년">
            {Array.from({length:20},(_,i)=>2020+i).map(y=><option key={y} value={y}>{y}년</option>)}
          </select>
          <select value={date.getMonth()} onChange={e => handleChange(new Date(date.getFullYear(), +e.target.value, date.getDate()))} aria-label="월">
            {Array.from({length:12},(_,i)=><option key={i} value={i}>{i+1}월</option>)}
          </select>
          <select value={date.getDate()} onChange={e => handleChange(new Date(date.getFullYear(), date.getMonth(), +e.target.value))} aria-label="일">
            {Array.from({length:31},(_,i)=><option key={i+1} value={i+1}>{i+1}일</option>)}
          </select>
        </div>
      )}
      <div><button onClick={onCancel}>취소</button><button onClick={() => onConfirm?.(date)}>확인</button></div>
    </div>
  );
};
export default DatePickerAndroid;
