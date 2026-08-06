/**
 * Hanbit DS - TimePicker/iOS
 * Figma: "Time Picker/iOS"
 * iOS-style wheel time picker
 */
import React, { useState } from 'react';

export interface TimePickerIOSProps {
  hour?: number;
  minute?: number;
  ampm?: 'AM' | 'PM';
  onChange?: (time: { hour: number; minute: number; ampm: 'AM' | 'PM' }) => void;
  className?: string;
}

export const TimePickerIOS: React.FC<TimePickerIOSProps> = ({
  hour = 12, minute = 0, ampm = 'AM', onChange, className,
}) => {
  const [time, setTime] = useState({ hour, minute, ampm });
  const update = (patch: Partial<typeof time>) => { const next = { ...time, ...patch }; setTime(next); onChange?.(next); };

  return (
    <div className={className} data-platform="ios" role="group" aria-label="시간 선택"
      style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
      <select value={time.hour} onChange={e => update({ hour: +e.target.value })} aria-label="시"
        style={{ appearance: 'none', fontSize: 20, textAlign: 'center', border: 'none', background: 'transparent' }}>
        {Array.from({ length: 12 }, (_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
      </select>
      <span style={{ fontSize: 20 }}>:</span>
      <select value={time.minute} onChange={e => update({ minute: +e.target.value })} aria-label="분"
        style={{ appearance: 'none', fontSize: 20, textAlign: 'center', border: 'none', background: 'transparent' }}>
        {Array.from({ length: 60 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2,'0')}</option>)}
      </select>
      <select value={time.ampm} onChange={e => update({ ampm: e.target.value as 'AM'|'PM' })} aria-label="오전/오후"
        style={{ appearance: 'none', fontSize: 20, textAlign: 'center', border: 'none', background: 'transparent' }}>
        <option value="AM">오전</option><option value="PM">오후</option>
      </select>
    </div>
  );
};
export default TimePickerIOS;
